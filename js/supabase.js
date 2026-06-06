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
      cloud: true
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
    subscribe: function (cb) {
      return sb.channel('listings-changes')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'listings' },
            function (payload) { cb(rowToListing(payload.new)); })
        .subscribe();
    }
  };
})();
