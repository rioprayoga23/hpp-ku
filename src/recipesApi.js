export async function listRecipes() {
  const response = await fetch('/api/recipes', { cache: 'no-store' });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok)
    throw new Error(payload.error || 'Resep tersimpan tidak dapat dimuat.');
  return payload.recipes || [];
}

export async function saveRecipe(menu) {
  const response = await fetch('/api/recipes', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ id: menu.id, name: menu.name, data: menu }),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok)
    throw new Error(payload.error || 'Resep belum berhasil disimpan.');
  return payload.recipe;
}

export async function deleteRecipe(recipeId) {
  const response = await fetch(
    `/api/recipes?id=${encodeURIComponent(recipeId)}`,
    { method: 'DELETE' }
  );
  const payload = await response.json().catch(() => ({}));
  if (!response.ok)
    throw new Error(payload.error || 'Resep belum berhasil dihapus.');
}
