/**
 * Creates the waitlist_applications table in Neon Postgres.
 * Run: node scripts/setup-db.mjs
 * Requires DATABASE_URL in the environment (or .env file).
 */
import { neon } from '@neondatabase/serverless';

const { DATABASE_URL } = process.env;
if (!DATABASE_URL) {
  console.error('Error: DATABASE_URL is not set.');
  process.exit(1);
}

const sql = neon(DATABASE_URL);

console.log('Creating waitlist_applications table...');

await sql`
  CREATE TABLE IF NOT EXISTS waitlist_applications (
    id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name             TEXT NOT NULL,
    email                 TEXT NOT NULL,
    company_name          TEXT,
    website_url           TEXT,
    role                  TEXT,
    country_code          TEXT,
    country_name          TEXT,
    detected_country_code TEXT,
    currency_shown        TEXT,
    pricing_region        TEXT,
    industry              TEXT,
    industry_context      TEXT,
    writing_needs         JSONB NOT NULL DEFAULT '[]',
    current_frustration   TEXT,
    workflow_pain_points  JSONB NOT NULL DEFAULT '[]',
    workflow_notes        TEXT,
    current_stack         JSONB NOT NULL DEFAULT '[]',
    monthly_volume        TEXT,
    team_setup            TEXT,
    value_level           TEXT,
    monthly_value_band    TEXT,
    monthly_value_label   TEXT,
    timeline              TEXT,
    final_notes           TEXT,
    consent_to_contact    BOOLEAN NOT NULL DEFAULT FALSE,
    open_to_call          BOOLEAN NOT NULL DEFAULT FALSE,
    source                TEXT,
    status                TEXT NOT NULL DEFAULT 'new',
    user_agent            TEXT,
    ip_hash               TEXT,
    created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )
`;

await sql`CREATE INDEX IF NOT EXISTS idx_wl_email         ON waitlist_applications(email)`;
await sql`CREATE INDEX IF NOT EXISTS idx_wl_status        ON waitlist_applications(status)`;
await sql`CREATE INDEX IF NOT EXISTS idx_wl_created_at    ON waitlist_applications(created_at)`;
await sql`CREATE INDEX IF NOT EXISTS idx_wl_industry      ON waitlist_applications(industry)`;
await sql`CREATE INDEX IF NOT EXISTS idx_wl_timeline      ON waitlist_applications(timeline)`;
await sql`CREATE INDEX IF NOT EXISTS idx_wl_country_code  ON waitlist_applications(country_code)`;
await sql`CREATE INDEX IF NOT EXISTS idx_wl_pricing_region ON waitlist_applications(pricing_region)`;
await sql`CREATE INDEX IF NOT EXISTS idx_wl_value_band    ON waitlist_applications(monthly_value_band)`;

console.log('✓ Table and indexes created (or already exist).');
