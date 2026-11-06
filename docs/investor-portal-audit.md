# Murivest Investor Portal — Existing System Audit

## 1. Repository & Stack
- Framework: Next.js (App Router) with TypeScript.
- Auth/DB: Supabase (Project A website). Client via `@/lib/supabase/client`.
- Styling: Tailwind; brand colors #1B4332/#0E2A1C/#FAF9F6/#B8956B.
- CMS: Sanity (publications, posts).
- Payments: M-Pesa confirmation routes, investor-order-payment, investor-order-cancel.

## 2. Investor Portal Routes (existing)
- `/portal` (overview, InvestorPortalClient)
- `/portal/login`, `/portal/dashboard`, `/portal/orders`, `/portal/off-market`, `/portal/publications`, `/portal/criteria`, `/portal/enquiries`, `/portal/documents`, `/portal/notifications`, `/portal/payments`, `/portal/profile`, `/portal/nda`, `/portal/briefs`, `/portal/briefs/[slug]`, `/portal/access-pending`
- Singapore mirror: `/singapore/investor-portal/{dashboard,documents,deals,login}`

## 3. Portal Navigation (current)
Grouped: Portfolio (Overview, Dashboard, Orders), Insights (Off-market, Publications), Advisory (Acquisition Criteria, Enquiries, Documents, Notifications), Settings (Payments, Profile). Bottom nav shows first 5 items only. Nav state is client-side `activeTab` string matching, not route-driven — risk of stale highlight.

## 4. API Route Groups (present)
- Auth: `/api/auth/callback`
- Users: `/api/users`, `/api/users/[id]`
- Portal: `/api/portal/enquiries`, `/api/portal/criteria`
- Briefs: `/api/investor-brief-request`, `/api/asset-brief-request`, `/api/briefs`, `/api/briefs/[id]`
- Bookings/claims: `/api/bookings`, `/api/book-claim`, `/api/claims-list`
- Orders/payments: `/api/orders`, `/api/orders/[id]`, `/api/payments`, `/api/payments/[id]`, `/api/investor-order-payment`, `/api/investor-order-cancel`
- Inquiries: `/api/property-inquiries`
- Notifications: `/api/notifications`
- Upload: `/api/upload`
- Email: `/api/email/send`, `/api/email-confirm`, `/api/send-email-sequence`, `/api/send-lead`, `/api/lead`, `/api/leads`, `/api/leads/[id]`, `/api/leads/[id]/status`
- UK investor: `/api/uk-investor`
- NDA: `/api/nda/{register,sign,verify-otp}`
- M-Pesa: `/api/mpesa-confirm`, `/api/mpesa-confirmation`
- Publications: `/api/publications`, `/api/publications/[id]`
- Admin: `/api/admin/{stats,users/[id]/role,verify-user,mandates,investors/[id]/assign-advisor,fulfil-order,approve-payment}`
- Advisor: `/api/advisor/tasks/[id]`
- Deals: `/api/deals`, `/api/deals/[id]`
- Divestment: `/api/divestment`
- Revalidate: `/api/revalidate-property`, walkscore, sitemap-properties.xml, ai, careers/apply, newsletter, contact, verify-review, submit-review

## 5. Data Model (observed)
- `profiles` (id, email, full_name, title, organisation, phone, aum, investment_focus, investor_status)
- `publications` (id, title, summary, category, fliphtml_url, file_url, published_at, access_level, is_portal_visible, created_at)
- Investor status tiers: registered/verified/premium/admin with access gating via `canAccess`.
- No observed: investor_organisations, investor_organisation_members, investor_mandates, investor_preferences, saved_properties, saved_searches, investment_scenarios, property_comparisons, investor_documents, investor_activity, investor_notifications, investor_enquiries, investor_order_history tables in client code (need DB audit).

## 6. Financial Calculations
- None found in client code as a dedicated engine. Only display-level metrics. No IRR/NPV/DSCR/cash-on-cash/payback engine observed. Requires full audit of `/api` and lib for calculation helpers.

## 7. Private Brief & Order Workflows
- Brief requests: `/api/investor-brief-request`, `/api/asset-brief-request`.
- Orders/payments/cancellation present. M-Pesa confirmation duplicated (`mpesa-confirm` vs `mpesa-confirmation`) — potential duplication.
- Bookings & claims present.

## 8. Identified Defects / Duplication / Risks
- Duplicate M-Pesa routes (`mpesa-confirm`, `mpesa-confirmation`).
- Duplicate investor portal (global `/portal` vs `/singapore/investor-portal`) with divergent feature sets (Singapore has deals/documents; global has more).
- Nav highlight driven by client state `activeTab`, not pathname; can desync on direct navigation.
- Mobile bottom nav only exposes 5 of 11 items.
- Profile upsert on registration writes to `profiles`; no org membership model.
- Publications access gating relies on investor_status tiers only; no org-level permissions.
- Fallback publications hardcoded in client when DB empty (fabricated demo content) — should be removed/flagged.
- Hardcoded "James Morrison" user in mobile menu (fake data).
- Session expiry client-side only; security context mostly cosmetic.
- No evidence of saved scenarios, comparisons, mandates, matching engine, or financial modelling.

## 9. Missing (per master prompt)
- Investment matching engine, Investment Studio financial modelling, property comparison, mandates, organisation accounts, investor activity history, retention/notifications config, document versioning, market intelligence filtering beyond publications.

## 10. Proposed New Sitemap (high level)
Investor Overview → Discover Opportunities → Investment Studio → Property Comparison → Private Briefs → My Investments → My Mandates → Documents → Market Intelligence → Enquiries & Activity → Investor Profile → Account & Security.

## 11. Preservation Requirements
Preserve: private brief ordering (asset/investor), bookings, claims, order creation, payment, cancellation, uploads, notifications, email confirmation, publications/CMS, property inquiries, criteria, NDA flows. Do not duplicate auth. Do not deploy DB migrations without approval.

## 12. Next Steps (awaiting approval)
- Full DB schema audit of both Supabase projects (tables, RLS, functions, storage buckets).
- Wireframes per module.
- Phased implementation plan (per master prompt phases 1–13).
- No DB changes or page rewrites until approval.
filePath">
C:\xampp\htdocs\Murivest Website\Murivest-Website\docs\investor-portal-audit.md