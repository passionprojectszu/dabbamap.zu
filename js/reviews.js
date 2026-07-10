/* ══════════════════════════════════════════════════════════
   DabbaReviews — provider_reviews API layer
   Requires: window.sbClient (from js/supabase.js)
══════════════════════════════════════════════════════════ */
window.DabbaReviews = {

  /* Fetch all reviews for a provider in the requested order */
  fetchForProvider: function(providerId, sort) {
    var col = (sort === 'highest' || sort === 'lowest') ? 'rating' : 'created_at';
    var asc = sort === 'lowest';
    return window.sbClient
      .from('provider_reviews')
      .select('*')
      .eq('provider_id', providerId)
      .order(col, { ascending: asc })
      .order('created_at', { ascending: false })
      .then(function(res) {
        if (res.error) throw res.error;
        return res.data || [];
      });
  },

  /* Fetch the current user's review for a provider (null if none) */
  fetchMyReview: function(providerId, userId) {
    return window.sbClient
      .from('provider_reviews')
      .select('*')
      .eq('provider_id', providerId)
      .eq('user_id', userId)
      .limit(1)
      .then(function(res) {
        if (res.error) throw res.error;
        return (res.data && res.data[0]) || null;
      });
  },

  /* Upsert a review (INSERT or UPDATE via UNIQUE(provider_id, user_id)) */
  submit: function(providerId, providerName, userId, userName, rating, reviewText, isEdit) {
    return window.sbClient
      .from('provider_reviews')
      .upsert({
        provider_id:   providerId,
        provider_name: providerName || '',
        user_id:       userId,
        user_name:     userName || 'Anonymous',
        rating:        rating,
        review_text:   reviewText || null,
        updated_at:    new Date().toISOString(),
        is_edited:     !!isEdit
      }, { onConflict: 'provider_id,user_id' })
      .select()
      .then(function(res) {
        if (res.error) throw res.error;
        return res.data && res.data[0];
      });
  },

  /* Delete a review by its UUID */
  deleteById: function(id) {
    return window.sbClient
      .from('provider_reviews')
      .delete()
      .eq('id', id)
      .then(function(res) {
        if (res.error) throw res.error;
        return true;
      });
  },

  /* Admin: update (adjust) any review's rating and text */
  adminUpdate: function(id, rating, reviewText) {
    return window.sbClient
      .from('provider_reviews')
      .update({
        rating:      rating,
        review_text: reviewText || null,
        updated_at:  new Date().toISOString(),
        is_edited:   true
      })
      .eq('id', id)
      .select()
      .then(function(res) {
        if (res.error) throw res.error;
        return res.data && res.data[0];
      });
  },

  /* Admin: fetch all reviews across all providers */
  adminFetchAll: function() {
    return window.sbClient
      .from('provider_reviews')
      .select('*')
      .order('created_at', { ascending: false })
      .then(function(res) {
        if (res.error) throw res.error;
        return res.data || [];
      });
  },

  /* Compute aggregate summary from a reviews array */
  computeSummary: function(reviews) {
    var dist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    var total = 0;
    if (!reviews || !reviews.length) return { avg: 0, count: 0, dist: dist };
    reviews.forEach(function(r) {
      var v = parseInt(r.rating) || 0;
      if (v >= 1 && v <= 5) { dist[v]++; total += v; }
    });
    var avg = Math.round((total / reviews.length) * 10) / 10;
    return { avg: avg, count: reviews.length, dist: dist };
  }
};
