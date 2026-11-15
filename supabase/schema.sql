create extension if not exists pgcrypto;

create table if not exists public.app_users (
  id uuid primary key default gen_random_uuid(),
  username text not null unique,
  password_hash text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.app_sessions (
  token_hash text primary key,
  user_id uuid not null references public.app_users(id) on delete cascade,
  created_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now()
);

grant all on table public.app_users, public.app_sessions to service_role;

create index if not exists app_sessions_user_idx
  on public.app_sessions (user_id);

alter table public.app_users enable row level security;
alter table public.app_sessions enable row level security;
revoke all on public.app_users from anon, authenticated;
revoke all on public.app_sessions from anon, authenticated;
drop policy if exists "app_users_server_role_only" on public.app_users;
create policy "app_users_server_role_only"
  on public.app_users
  for all to service_role using (true) with check (true);
drop policy if exists "app_sessions_server_role_only" on public.app_sessions;
create policy "app_sessions_server_role_only"
  on public.app_sessions
  for all to service_role using (true) with check (true);

insert into public.app_users (username, password_hash)
values (
  '@HAYANGBENGHAR2027',
  'scrypt$_m_jSTZjavNeMVQImC1OQg$X_Ov-sLclcT4S-c61u8sC7VMyfOSEJmXVy1BTKKmDUQA11wvNquf5tfXR5LAT4LBEjAw4KsqSIFjRAB6t1di_A'
)
on conflict (username) do nothing;

create table if not exists public.recipes (
  id uuid primary key default gen_random_uuid(),
  workspace_id text not null,
  name text not null default 'Resep tanpa nama',
  data jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists recipes_workspace_updated_idx
  on public.recipes (workspace_id, updated_at desc);

alter table public.recipes enable row level security;
revoke all on public.recipes from anon, authenticated;
drop policy if exists "recipes_server_role_only" on public.recipes;
create policy "recipes_server_role_only"
  on public.recipes
  for all
  to service_role
  using (true)
  with check (true);

-- Obsolete seed bookkeeping from the previous recipe bootstrap flow.
drop table if exists public.recipe_seed_markers;
