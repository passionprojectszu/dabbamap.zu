/* DabbaMap — Supabase cloud data layer
   ───────────────────────────────────────────────────────────
   Replaces per-device localStorage with a shared cloud database
   so listings & accounts work across all devices, live.
   Loaded AFTER the Supabase SDK and BEFORE main.js on every page.
*/
(function () {
  var SUPABASE_URL = 'https://yewydnzrtfxyyfiiyvzn.supabase.co';
  var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlld3lkbnpydGZ4eXlmaWl5dnpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzMjg2ODUsImV4cCI6MjA5NTkwNDY4NX0.sv32feVTxuTT_ExFw2F3QF1JQ3eIu40EsKfw66DhbYI';

  if (!window.supabase || !window.supabase.createClient) {
    console.error('[DabbaMap] Supabase SDK not loaded — check the <script> include order.');
    return;
  }

  var sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  window.sbClient = sb;

  /* ── Mirror the Supabase session into localStorage.dabbamapUser ──
     so existing synchronous code (profile icon, dashboard gating) keeps working. */
  function mirror(session) {
    try {
      if (session && session.user) {
        var u = session.user;
        var name = (u.user_metadata && u.user_metadata.name) || (u.email || '').split('@')[0];
        localStorage.setItem('dabbamapUser', JSON.stringify({
          id: u.id, name: name, email: u.email, loggedIn: true, loginMethod: 'email'
        }));
      } else {
        localStorage.removeItem('dabbamapUser');
      }
    } catch (e) {}
  }

  // Resolve once the initial session is known (pages can await this)
  window.DabbaAuthReady = sb.auth.getSession().then(function (res) {
    mirror(res.data.session);
    return res.data.session;
  });

  sb.auth.onAuthStateChange(function (event, session) {
    mirror(session);
    if (window.refreshProfileIcon) window.refreshProfileIcon();
    if (event === 'PASSWORD_RECOVERY' && typeof window.onDabbaPasswordRecovery === 'function') {
      window.onDabbaPasswordRecovery();
    }
  });

  /* ── Auth API ── */
  window.DabbaAuth = {
    signUp: function (name, email, password) {
      return sb.auth.signUp({ email: email, password: password, options: { data: { name: name } } });
    },
    signIn: function (email, password) {
      return sb.auth.signInWithPassword({ email: email, password: password });
    },
    signOut: function () { return sb.auth.signOut(); },
    resetPassword: function (email) {
      return sb.auth.resetPasswordForEmail(email, { redirectTo: location.origin + location.pathname });
    },
    updatePassword: function (newPassword) {
      return sb.auth.updateUser({ password: newPassword });
    },
    getUser: function () {
      try { return JSON.parse(localStorage.getItem('dabbamapUser') || 'null'); } catch (e) { return null; }
    }
  };

  /* ── Listings API ── */
  function rowToListing(r) {
    var name = r.name || 'Unnamed Cook';
    return {
      id: r.id, owner: r.owner, name: name,
      initial: (name[0] || '?').toUpperCase(),
      avatarBg: 'linear-gradient(135deg,#C8771A,#F5A623)',
      area: r.area || '', pincode: r.pincode || '', type: r.type || 'veg',
      cuisines: r.cuisines || [], meals: r.meals || [],
      lunchPrice: r.lunch_price, dinnerPrice: r.dinner_price, monthlyPrice: r.monthly_price,
      capacity: r.capacity, trial: !!r.trial, communityPick: false,
      description: r.description || '',
      lat: (r.lat != null ? Number(r.lat) : null),
      lng: (r.lng != null ? Number(r.lng) : null),
      daysAgo: r.created_at ? Math.max(0, Math.floor((Date.now() - new Date(r.created_at).getTime()) / 86400000)) : 0,
      createdAt: r.created_at,
      cloud: true,
      stub: !!r.stub,
      isClaimed: !!r.is_claimed
    };
  }
  window.rowToListing = rowToListing;

  window.DabbaListings = {
    fetchAll: function () {
      return sb.from('listings').select('*').order('created_at', { ascending: false })
        .then(function (res) {
          if (res.error) { console.warn('[DabbaMap] fetch listings:', res.error.message); return []; }
          return (res.data || []).map(rowToListing);
        })
        .catch(function () { return []; });
    },
    fetchMine: function (ownerId) {
      return sb.from('listings').select('*').eq('owner', ownerId).order('created_at', { ascending: false })
        .then(function (res) { return (res.data || []).map(rowToListing); })
        .catch(function () { return []; });
    },
    insert: function (obj) {
      return sb.from('listings').insert({
        owner: obj.owner, name: obj.name, area: obj.area, pincode: obj.pincode, type: obj.type,
        cuisines: obj.cuisines, meals: obj.meals,
        lunch_price: obj.lunchPrice, dinner_price: obj.dinnerPrice, monthly_price: obj.monthlyPrice,
        capacity: obj.capacity, trial: !!obj.trial, description: obj.description,
        lat: obj.lat, lng: obj.lng
      }).select().then(function (res) {
        if (res.error) throw res.error;
        return res.data && res.data[0] ? rowToListing(res.data[0]) : null;
      });
    },
    count: function () {
      return sb.from('listings').select('id', { count: 'exact', head: true })
        .then(function (res) { return res.count || 0; })
        .catch(function () { return 0; });
    },
    remove: function (id) {
      return sb.from('listings').delete().eq('id', id).then(function (res) {
        if (res.error) throw res.error; return true;
      });
    },
    insertStub: function (name, area, lat, lng) {
      var u = window.DabbaAuth && window.DabbaAuth.getUser();
      return sb.from('listings').insert({
        owner: u && u.id,
        name: name,
        area: area || '',
        lat: lat || null,
        lng: lng || null,
        stub: true,
        is_claimed: false,
        type: 'veg',
        cuisines: [],
        meals: ['lunch', 'dinner'],
        trial: false,
        description: ''
      }).select().then(function (res) {
        if (res.error) throw res.error;
        return res.data && res.data[0] ? rowToListing(res.data[0]) : null;
      });
    },
    updateListing: function (id, updates) {
      return sb.from('listings').update(updates).eq('id', id).select().then(function (res) {
        if (res.error) throw res.error;
        return res.data && res.data[0] ? rowToListing(res.data[0]) : null;
      });
    },
    subscribe: function (cb) {
      return sb.channel('listings-changes')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'listings' },
            function (payload) { cb(rowToListing(payload.new), 'INSERT'); })
        .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'listings' },
            function (payload) { cb(payload.old, 'DELETE'); })
        .subscribe();
    }
  };

  /* ── Claim Requests API ── */
  window.DabbaClaims = {
    submit: function (data) {
      return sb.from('claim_requests').insert({
        listing_id: data.listingId,
        claimant_name: data.name,
        claimant_email: data.email,
        claimant_phone: data.phone || null,
        claim_message: data.message || null,
        proposed_name: data.proposedName || null,
        proposed_description: data.proposedDescription || null,
        proposed_area: data.proposedArea || null,
        proposed_pincode: data.proposedPincode || null,
        proposed_lat: data.proposedLat ? parseFloat(data.proposedLat) : null,
        proposed_lng: data.proposedLng ? parseFloat(data.proposedLng) : null,
        proposed_type: data.proposedType || null,
        proposed_lunch_price: data.proposedLunchPrice ? parseInt(data.proposedLunchPrice) : null,
        proposed_dinner_price: data.proposedDinnerPrice ? parseInt(data.proposedDinnerPrice) : null,
        proposed_monthly_price: data.proposedMonthlyPrice ? parseInt(data.proposedMonthlyPrice) : null,
        status: 'pending'
      }).select().then(function (res) {
        if (res.error) throw res.error;
        return res.data && res.data[0];
      });
    },
    all: function () {
      return sb.from('claim_requests')
        .select('*, listings(name, area)')
        .order('created_at', { ascending: false })
        .then(function (res) { if (res.error) throw res.error; return res.data || []; });
    },
    approve: function (claimId, listingId, proposed) {
      var updates = { is_claimed: true };
      if (proposed.proposed_name)          updates.name          = proposed.proposed_name;
      if (proposed.proposed_description)   updates.description   = proposed.proposed_description;
      if (proposed.proposed_area)          updates.area          = proposed.proposed_area;
      if (proposed.proposed_pincode)       updates.pincode       = proposed.proposed_pincode;
      if (proposed.proposed_type)          updates.type          = proposed.proposed_type;
      if (proposed.proposed_lunch_price)   updates.lunch_price   = proposed.proposed_lunch_price;
      if (proposed.proposed_dinner_price)  updates.dinner_price  = proposed.proposed_dinner_price;
      if (proposed.proposed_monthly_price) updates.monthly_price = proposed.proposed_monthly_price;
      if (proposed.proposed_lat)           updates.lat           = proposed.proposed_lat;
      if (proposed.proposed_lng)           updates.lng           = proposed.proposed_lng;
      return Promise.all([
        sb.from('listings').update(updates).eq('id', listingId),
        sb.from('claim_requests').update({ status: 'approved', reviewed_at: new Date().toISOString() }).eq('id', claimId)
      ]).then(function (r) {
        if (r[0].error) throw r[0].error;
        if (r[1].error) throw r[1].error;
        return true;
      });
    },
    reject: function (claimId) {
      return sb.from('claim_requests')
        .update({ status: 'rejected', reviewed_at: new Date().toISOString() })
        .eq('id', claimId)
        .then(function (res) { if (res.error) throw res.error; return true; });
    }
  };

  /* ── Messaging API (conversations + messages) ── */
  window.DabbaMessages = {
    // Find an existing conversation for (me → this listing), else create one
    startOrGet: function (listing, consumerName) {
      var u = window.DabbaAuth.getUser();
      if (!u || !u.id) return Promise.reject(new Error('Please log in to send a message.'));
      if (!listing.owner) return Promise.reject(new Error('This is a sample listing — messaging works on real listed dabbas.'));
      return sb.from('conversations').select('*').eq('listing_id', listing.id).eq('consumer', u.id).limit(1)
        .then(function (res) {
          if (res.data && res.data[0]) return res.data[0];
          return sb.from('conversations').insert({
            listing_id: listing.id, provider: listing.owner, consumer: u.id,
            consumer_name: consumerName || u.name || 'Customer', provider_name: listing.name
          }).select().then(function (r2) { if (r2.error) throw r2.error; return r2.data[0]; });
        });
    },
    send: function (conversationId, role, body) {
      var u = window.DabbaAuth.getUser();
      return sb.from('messages').insert({
        conversation_id: conversationId, sender: u && u.id, from_role: role, body: body
      }).select().then(function (r) { if (r.error) throw r.error; return r.data[0]; });
    },
    myConsumer: function () {
      var u = window.DabbaAuth.getUser(); if (!u || !u.id) return Promise.resolve([]);
      return sb.from('conversations').select('*, messages(*)').eq('consumer', u.id).order('created_at', { ascending: false })
        .then(function (res) { return res.data || []; }).catch(function () { return []; });
    },
    myProvider: function () {
      var u = window.DabbaAuth.getUser(); if (!u || !u.id) return Promise.resolve([]);
      return sb.from('conversations').select('*, messages(*)').eq('provider', u.id).order('created_at', { ascending: false })
        .then(function (res) { return res.data || []; }).catch(function () { return []; });
    },
    subscribe: function (cb) {
      return sb.channel('msg-changes')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, function (p) { cb(p.new); })
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'conversations' }, function (p) { cb(p.new); })
        .subscribe();
    }
  };
})();
