-- Event outbox for cross-project sync (Project A -> Project B)
create table if not exists public.event_outbox (
  id uuid primary key default gen_random_uuid(),
  event_type text not null,
  payload jsonb not null default '{}'::jsonb,
  status text not null default 'pending' check (status in ('pending','delivered','failed')),
  attempts integer not null default 0,
  created_at timestamptz not null default now(),
  delivered_at timestamptz
);

create index if not exists idx_event_outbox_status_created_at on public.event_outbox(status, created_at);
