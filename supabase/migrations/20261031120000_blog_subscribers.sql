/*
  # Store name and mobile number on newsletter_subscribers

  1. Changes
    - `newsletter_subscribers`
      - `name` (text, nullable) - subscriber's name, set by the newsletter form
      - `phone` (text, nullable) - mobile number, digits with optional leading +
      - `source` (text, nullable) - which form created the row ('newsletter')

  Columns are nullable so rows created by the old email-only form stay valid.
  The existing UNIQUE constraint on `email` is reused for duplicate detection.

  2. Security
    - No new policies: the existing public INSERT-only policy still applies,
      so the browser (anon key) can add rows but cannot read or change them.
*/

ALTER TABLE newsletter_subscribers
  ADD COLUMN IF NOT EXISTS name text,
  ADD COLUMN IF NOT EXISTS phone text,
  ADD COLUMN IF NOT EXISTS source text;

ALTER TABLE newsletter_subscribers
  ADD CONSTRAINT newsletter_subscribers_name_length
    CHECK (name IS NULL OR char_length(name) BETWEEN 2 AND 100),
  ADD CONSTRAINT newsletter_subscribers_phone_format
    CHECK (phone IS NULL OR phone ~ '^\+?[0-9]{10,15}$');
