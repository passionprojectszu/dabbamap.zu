/* DabbaMap — Scoped storage layer
   ─────────────────────────────────────────────────────────
   Data (listings, conversations, read-state) is scoped to the
   current user so each account sees only its own dashboard.

   • Logged in (email)  → localStorage, namespaced by email   → persists
   • Not logged in (anon)→ sessionStorage, namespaced "anon"   → cleared on browser exit

   The login session itself (dabbamapUser) and the account
   registry (dabbamapAccounts) stay in plain localStorage.
*/
window.DabbaStore = (function () {

  function currentUser() {
    try { return JSON.parse(localStorage.getItem('dabbamapUser') || 'null'); }
    catch (e) { return null; }
  }

  // scope id: the email if logged in, otherwise null (anonymous)
  function scopeId() {
    var u = currentUser();
    if (u && u.loggedIn && u.email) return u.email.toLowerCase();
    return null;
  }

  function isAnon() { return scopeId() === null; }

  // anonymous data → sessionStorage (lost when the browser/tab closes)
  // logged-in data → localStorage (persists across visits)
  function backend() { return isAnon() ? window.sessionStorage : window.localStorage; }

  function nsKey(base) {
    var s = scopeId();
    return base + '::' + (s || 'anon');
  }

  function read(base, fallback) {
    try {
      var raw = backend().getItem(nsKey(base));
      return raw ? JSON.parse(raw) : JSON.parse(fallback);
    } catch (e) {
      try { return JSON.parse(fallback); } catch (_) { return null; }
    }
  }

  function write(base, val) {
    try { backend().setItem(nsKey(base), JSON.stringify(val)); } catch (e) {}
  }

  return {
    isAnon:  isAnon,
    scopeId: scopeId,

    // ── Listings (array) ──
    getListings:  function ()  { return read('dabbamapListings', '[]') || []; },
    setListings:  function (v) { write('dabbamapListings', v); },
    addListing:   function (l) { var a = this.getListings(); a.unshift(l); this.setListings(a); },

    // ── Conversations (array) ──
    getConversations: function ()  { return read('dabbamapConsumerConversations', '[]') || []; },
    setConversations: function (v) { write('dabbamapConsumerConversations', v); },

    // ── Read-state for demo convs (object) ──
    getReadConvs: function ()  { return read('dabbamapReadConvs', '{}') || {}; },
    setReadConvs: function (v) { write('dabbamapReadConvs', v); }
  };
})();
