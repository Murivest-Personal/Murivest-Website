# Murivest Investor Portal — Wireframes & Phased Implementation Plan

## A. Unified Sitemap (new IA)
```
/portal
├── Overview (dashboard)
├── Discover (search, filters, detail, matching)
├── Studio (financial modelling)
├── Compare (property comparison)
├── Briefs (private brief workspace)
├── Investments (portfolio tracking)
├── Mandates
├── Documents
├── Intelligence (market research)
├── Activity (enquiries & comms)
├── Profile
└── Security
```

## B. Wireframe Descriptions (text)

### Overview
- Header: welcome + investor tier badge + advisor contact.
- Grid: onboarding progress (new) | saved properties | active enquiries | brief orders | saved scenarios | mandates | documents | advisor messages.
- Empty states for each card. No fabricated figures.

### Discover
- Left: filter panel (country, city, type, price, yield, NOI, occupancy, lease, risk, equity, financing).
- Center: results grid/list toggle, sort, pagination.
- Card: thumbnail, title, location, price, gross/net yield, occupancy, status badge (verified/vendor/unverified), availability.
- Detail page sections: Verified data / Vendor data / Murivest analysis / Investor assumptions / Missing info; availability status; enquire; save; model in Studio; compare.

### Studio
- Inputs panel (capital, price, currency, costs, income, vacancy, expenses, mgmt, maintenance, capex, taxes, insurance, loan, rate, term, fees, holding, growth, appreciation, exit costs).
- Results: total acquisition cost, gross yield, EGI, NOI, net yield, debt service, LTV, DSCR, CoC, annual net cash flow, cumulative, equity multiple, payback (simple/discounted), NPV, IRR, exit value, net disposal proceeds, profit/loss.
- Scenario tabs: all-cash, partial, higher equity, higher borrowing, IO, amortising.
- Exit tabs: 3/5/7/10-year, refinance+hold, long-term hold with conservative/base/upside.
- Assumptions panel with jurisdiction tax framework, exchange rate sensitivity, disclaimers.

### Compare
- Table of properties × metrics (price, acquisition cost, equity, financing, income, NOI, gross/net yield, CoC, occupancy, lease, holding, exit, IRR, equity multiple, risks).
- Consistent assumption set; highlight missing/incomparable.

### Briefs
- List with status chips + history.
- New brief wizard: country, type, budget, capital, criteria, objectives, financing, uploads.
- Status flow: draft→submitted→under_review→awaiting_information→accepted→payment_pending→in_preparation→quality_review→published→completed (or cancelled/rejected/on_hold).

### Investments / Mandates / Documents / Intelligence / Activity / Profile / Security
- Standard list+detail with filters, empty states, audit logs, permission gating.

## C. Phased Implementation Plan

Phase 1 (now): Audit & feature preservation — DONE (audit doc).
Phase 2: IA & UX redesign — navigation restructure, component library unification.
Phase 3: Database & API architecture — audit both Supabase projects, RLS, migrations (approval required).
Phase 4: Onboarding & dashboard.
Phase 5: Discovery & matching engine.
Phase 6: Investment Studio & financial engine (decimal-safe, tested).
Phase 7: Comparison engine.
Phase 8: Private briefs & orders (preserve existing).
Phase 9: Portfolio, mandates, documents.
Phase 10: Retention & notifications.
Phase 11: Operations administration (TanStack Router + React Query).
Phase 12: Security & automated tests.
Phase 13: Staging & production release.

## D. Database Changes (proposed, pending approval)
- Reuse `profiles`, `publications`.
- Add (if absent): investor_organisations, investor_organisation_members, investor_mandates, investor_preferences, saved_properties, saved_searches, investment_scenarios, investment_scenario_versions, property_comparisons, investor_documents, investor_activity, investor_notifications, investor_enquiries, investor_order_history.
- All with RLS org/individual separation, indexes, audit logs, scenario assumption+version storage.
- Server-side authoritative calculations for saved results.

## E. Preserved Functionality (must not break)
Private brief ordering (asset/investor), bookings, claims, order creation, payment, cancellation, uploads, notifications, email confirmation, publications CMS, property inquiries, criteria, NDA flows, M-Pesa (consolidate duplicate routes).

## F. Immediate Next Actions (no code changes yet)
1. DB schema audit of both Supabase projects.
2. Confirm duplicate route consolidation plan.
3. Approve wireframes before implementation.
filePath">
C:\xampp\htdocs\Murivest Website\Murivest-Website\docs\investor-portal-wireframes-plan.md