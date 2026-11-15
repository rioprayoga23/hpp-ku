create extension if not exists pgcrypto;

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

create policy "recipes_server_role_only"
  on public.recipes
  for all
  to service_role
  using (true)
  with check (true);


create table if not exists public.recipe_seed_markers (
  workspace_id text primary key,
  seeded_at timestamptz not null default now()
);

alter table public.recipe_seed_markers enable row level security;
revoke all on public.recipe_seed_markers from anon, authenticated;
drop policy if exists "recipe_seed_markers_server_role_only" on public.recipe_seed_markers;
create policy "recipe_seed_markers_server_role_only" on public.recipe_seed_markers
  for all to service_role using (true) with check (true);
