-- ══════════════════════════════════════════════════════════
--  DabbaMap — provider_reviews table
--  Run this ONCE in Supabase → SQL Editor → New query
-- ══════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS public.provider_reviews (
  id            UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  provider_id   TEXT        NOT NULL,           -- listing id (L001 or UUID)
  provider_name TEXT        NOT NULL DEFAULT '', -- denormalised for admin display
  user_id       UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  user_name     TEXT        NOT NULL DEFAULT 'Anonymous',
  rating        SMALLINT    NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text   TEXT        CHECK (review_text IS NULL OR length(review_text) <= 1000),
  is_edited     BOOLEAN     NOT NULL DEFAULT FALSE,
  is_flagged    BOOLEAN     NOT NULL DEFAULT FALSE,  -- future: report/flag system
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- one review per user per provider
  CONSTRAINT uq_provider_user UNIQUE (provider_id, user_id)
);

-- Efficient reads: all reviews for a provider
CREATE INDEX IF NOT EXISTS idx_pr_provider ON public.provider_reviews (provider_id, created_at DESC);

-- ── Row Level Security ────────────────────────────────────
ALTER TABLE public.provider_reviews ENABLE ROW LEVEL SECURITY;

-- Anyone can read
CREATE POLICY "public_read_reviews"
  ON public.provider_reviews FOR SELECT USING (true);

-- Logged-in users can insert their own
CREATE POLICY "user_insert_own_review"
  ON public.provider_reviews FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Only admin can update / adjust ratings
CREATE POLICY "admin_update_any_review"
  ON public.provider_reviews FOR UPDATE
  USING (auth.jwt() ->> 'email' = 'passionprojects.zu@gmail.com');

-- Only admin can delete reviews
CREATE POLICY "admin_delete_any_review"
  ON public.provider_reviews FOR DELETE
  USING (auth.jwt() ->> 'email' = 'passionprojects.zu@gmail.com');
