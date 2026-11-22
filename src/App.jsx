'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Check,
  CheckCheck,
  ChevronRight,
  Copy,
  CupSoda,
  Download,
  FolderPlus,
  LoaderCircle,
  LogOut,
  Minus,
  Moon,
  Pencil,
  Plus,
  Save,
  Sun,
  Trash2,
  TriangleAlert,
} from 'lucide-react';
import { Button } from './components/DaisyPrimitives.jsx';
import { Input } from './components/DaisyPrimitives.jsx';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './components/DaisyPrimitives.jsx';
import { Field } from './components/Fields.jsx';
import Ingredients from './components/Ingredients.jsx';
import Summary from './components/Summary.jsx';
import Pricing from './components/Pricing.jsx';
import Overheads from './components/Overheads.jsx';
import TransferDialog from './components/TransferDialog.jsx';
import CategoryDialog from './components/CategoryDialog.jsx';
import {
  calculate,
  freshMenu,
  id,
  normalizeMenu,
  rupiah,
  syncAllRecipes,
  syncRecipeItems,
} from './model.js';
import {
  copiedHppTotal,
  exportRecipe,
  exportRecipeHtml,
  exportRecipesExcel,
} from './recipeTransfer.js';
import {
  deleteCategory,
  deleteRecipe,
  listRecipes,
  renameCategory,
  saveRecipe,
} from './recipesApi.js';
import { Toaster, toast } from 'sonner';

const signature = ({ updatedAt, ...menu }) => {
  void updatedAt;
  return JSON.stringify(menu);
};
const recipeCategory = (recipe) => String(recipe?.data?.category ?? '').trim();

export default function App() {
  const router = useRouter();
  const [draft, setDraft] = useState(() => freshMenu());
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [connectionIssue, setConnectionIssue] = useState('');
  const [savedSignature, setSavedSignature] = useState('');
  const [importOpen, setImportOpen] = useState(false);
  const [copyFallback, setCopyFallback] = useState('');
  const [pendingAction, setPendingAction] = useState(null);
  const [dark, setDark] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [categoryDialogOpen, setCategoryDialogOpen] = useState(false);
  const touched = useRef(false);
  const result = useMemo(() => calculate(draft), [draft]);
  const dirty = signature(draft) !== savedSignature;
  const canCopy =
    draft.items.some((item) => item.active) && result.errors.length === 0;
  const cupInvalid =
    draft.cups === '' ||
    !Number.isInteger(Number(draft.cups)) ||
    Number(draft.cups) < 1 ||
    Number(draft.cups) > 100000;
  const categories = useMemo(
    () =>
      Array.from(new Set(recipes.map(recipeCategory).filter(Boolean))).sort(
        (a, b) => a.localeCompare(b, 'id')
      ),
    [recipes]
  );
  const activeCategoryFilter = categories.includes(categoryFilter)
    ? categoryFilter
    : '';
  const visibleRecipes = useMemo(
    () =>
      activeCategoryFilter
        ? recipes.filter(
            (recipe) => recipeCategory(recipe) === activeCategoryFilter
          )
        : recipes,
    [activeCategoryFilter, recipes]
  );
  const categoryOptions = useMemo(() => {
    const values = new Set(categories);
    if (draft.category) values.add(draft.category);
    return Array.from(values).sort((a, b) => a.localeCompare(b, 'id'));
  }, [categories, draft.category]);
  const categoryCounts = useMemo(() => {
    const counts = {};
    for (const r of recipes) {
      const cat = recipeCategory(r);
      if (cat) counts[cat] = (counts[cat] || 0) + 1;
    }
    return counts;
  }, [recipes]);

  function update(patch) {
    touched.current = true;
    setDraft((menu) => ({
      ...menu,
      ...(typeof patch === 'function' ? patch(menu) : patch),
    }));
  }
  function notify(message, undo) {
    toast.success(
      message,
      undo
        ? { action: { label: 'Urungkan', onClick: undo }, duration: 6000 }
        : {}
    );
  }
  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' }).catch(() => undefined);
    router.replace('/login');
  }
  async function refreshRecipes() {
    setLoading(true);
    try {
      const rawItems = await listRecipes();
      const items = syncAllRecipes(rawItems);
      setRecipes(items);
      setConnectionIssue('');

      setDraft((current) => {
        const synced = syncRecipeItems(current, items);
        return synced;
      });

      if (!touched.current && items.length) {
        const menu = syncRecipeItems(
          normalizeMenu({
            ...items[0].data,
            id: items[0].id,
            updatedAt: items[0].updated_at,
          }),
          items
        );
        setDraft(menu);
        setSavedSignature(signature(menu));
      }
    } catch (error) {
      setConnectionIssue(error.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    let active = true;
    listRecipes()
      .then((rawItems) => {
        if (!active) return;
        const items = syncAllRecipes(rawItems);
        setRecipes(items);
        if (!touched.current && items.length) {
          const menu = syncRecipeItems(
            normalizeMenu({
              ...items[0].data,
              id: items[0].id,
              updatedAt: items[0].updated_at,
            }),
            items
          );
          setDraft(menu);
          setSavedSignature(signature(menu));
        }
      })
      .catch((error) => {
        if (active) setConnectionIssue(error.message);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', dark);
    root.dataset.theme = dark ? 'dark' : 'light';
    root.style.colorScheme = dark ? 'dark' : 'light';
  }, [dark]);
  useEffect(() => {
    if (!dirty) return;
    const warn = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);

  async function saveCurrentRecipe() {
    if (saving) return;
    if (!draft.name.trim())
      return toast.error('Isi nama minuman sebelum menyimpan.');
    if (cupInvalid)
      return toast.error(
        'Jumlah cup harus bilangan bulat antara 1 dan 100.000.'
      );
    const syncedSnapshot = syncRecipeItems(structuredClone(draft), recipes);
    setSaving(true);
    try {
      const saved = await saveRecipe(syncedSnapshot);
      const menu = normalizeMenu({
        ...saved.data,
        id: saved.id,
        updatedAt: saved.updated_at,
      });
      setRecipes((items) => [
        saved,
        ...items.filter((item) => item.id !== saved.id),
      ]);
      setDraft((current) =>
        current.id === syncedSnapshot.id
          ? { ...current, ...menu, id: saved.id, updatedAt: saved.updated_at }
          : current
      );
      setSavedSignature(signature(menu));
      setConnectionIssue('');
      // The API also refreshes recipes that use this one as a base. Reload
      // the shared list so the picker and nested recipe details use the new
      // prices and item snapshots immediately.
      await refreshRecipes();
      notify(`“${saved.name}” berhasil disimpan.`);
    } catch (error) {
      setConnectionIssue(error.message);
      toast.error(error.message);
    } finally {
      setSaving(false);
    }
  }
  function openRecipe(recipe) {
    const open = () => {
      const normalized = normalizeMenu({
        ...recipe.data,
        id: recipe.id,
        updatedAt: recipe.updated_at,
      });
      const menu = syncRecipeItems(normalized, recipes);
      touched.current = true;
      setDraft(menu);
      setSavedSignature(connectionIssue ? '' : signature(menu));
    };
    if (dirty && touched.current)
      setPendingAction({
        title: 'Buka resep lain?',
        description:
          'Perubahan resep ini belum disimpan. Simpan dulu jika ingin menggunakannya lagi.',
        label: 'Buka resep',
        action: open,
      });
    else open();
  }
  function newRecipe() {
    const create = () => {
      touched.current = true;
      setDraft(freshMenu());
      setSavedSignature('');
    };
    if (dirty && touched.current)
      setPendingAction({
        title: 'Mulai resep baru?',
        description:
          'Perubahan resep ini belum disimpan. Simpan dulu jika ingin menggunakannya lagi.',
        label: 'Mulai baru',
        action: create,
      });
    else create();
  }
  function includeSavedRecipe(recipe) {
    const sourceMenu =
      recipe.menu ||
      normalizeMenu({
        ...(recipe.data || {}),
        id: recipe.id,
        updatedAt: recipe.updated_at,
      });
    const sourceResult = calculate(sourceMenu);
    const sourceCost = recipe.cost ?? sourceResult.cost;
    if (sourceCost === null) {
      toast.error('Resep ini belum memiliki HPP yang bisa dihitung.');
      return;
    }
    const sourceName = recipe.name || sourceMenu.name || 'Resep tersimpan';
    update((menu) => ({
      items: [
        ...menu.items,
        {
          id: id(),
          name: sourceName,
          kind: 'recipe',
          active: true,
          usage: 1,
          packQty: 1,
          packUnit: 'pcs',
          usageUnit: 'pcs',
          price: sourceCost,
          recipeCost: sourceCost,
          sourceRecipeId: recipe.id,
          sourceRecipeName: sourceName,
          sourceRecipeUpdatedAt: recipe.updated_at ?? null,
          sourceRecipeData: structuredClone(recipe.data || sourceMenu),
        },
      ],
    }));
    notify(`“${sourceName}” ditambahkan ke resep.`);
  }
  function applyCategory(category) {
    const value = String(category ?? '').trim();
    update({ category: value });
    setCategoryDialogOpen(false);
    if (value) notify(`Kategori “${value}” dipilih.`);
  }
  async function handleRenameCategory(from, to) {
    const trimmedFrom = String(from ?? '').trim();
    const trimmedTo = String(to ?? '').trim();
    if (!trimmedTo || trimmedFrom === trimmedTo) return;

    try {
      await renameCategory(trimmedFrom, trimmedTo);

      setRecipes((current) =>
        current.map((r) => {
          if (recipeCategory(r) === trimmedFrom) {
            return {
              ...r,
              data: { ...(r.data || {}), category: trimmedTo },
            };
          }
          return r;
        })
      );

      if (recipeCategory({ data: draft }) === trimmedFrom) {
        setDraft((current) => {
          const updated = { ...current, category: trimmedTo };
          if (!dirty) {
            setSavedSignature(signature(updated));
          }
          return updated;
        });
      }

      if (categoryFilter === trimmedFrom) {
        setCategoryFilter(trimmedTo);
      }

      await refreshRecipes();
      notify(`Kategori “${trimmedFrom}” diubah menjadi “${trimmedTo}”.`);
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  }
  async function handleDeleteCategory(category) {
    const trimmed = String(category ?? '').trim();
    if (!trimmed) return;

    try {
      await deleteCategory(trimmed);

      setRecipes((current) =>
        current.map((r) => {
          if (recipeCategory(r) === trimmed) {
            return {
              ...r,
              data: { ...(r.data || {}), category: '' },
            };
          }
          return r;
        })
      );

      if (recipeCategory({ data: draft }) === trimmed) {
        setDraft((current) => {
          const updated = { ...current, category: '' };
          if (!dirty) {
            setSavedSignature(signature(updated));
          }
          return updated;
        });
      }

      if (categoryFilter === trimmed) {
        setCategoryFilter('');
      }

      await refreshRecipes();
      notify(`Kategori “${trimmed}” dihapus.`);
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  }
  async function duplicateRecipe(recipe) {
    if (saving) return;

    const performDuplicate = async () => {
      setSaving(true);
      try {
        const sourceData =
          draft.id === recipe.id ? draft : recipe.data || recipe;
        const normalized = syncRecipeItems(
          normalizeMenu(sourceData),
          recipes
        );

        const existingNames = new Set(
          recipes.map((r) => String(r.name || '').trim().toLowerCase())
        );
        const baseName = String(
          recipe.name || normalized.name || 'Resep'
        ).trim();
        let copyName = `${baseName} (Salinan)`;
        if (existingNames.has(copyName.toLowerCase())) {
          let counter = 2;
          while (
            existingNames.has(`${baseName} (Salinan ${counter})`.toLowerCase())
          ) {
            counter++;
          }
          copyName = `${baseName} (Salinan ${counter})`;
        }

        const newMenu = {
          ...normalized,
          id: id(),
          name: copyName.slice(0, 160),
          items: normalized.items.map((item) => ({
            ...item,
            id: id(),
          })),
          overheads: normalized.overheads.map((overhead) => ({
            ...overhead,
            id: id(),
          })),
          updatedAt: null,
        };

        const saved = await saveRecipe(newMenu);
        const menu = normalizeMenu({
          ...saved.data,
          id: saved.id,
          updatedAt: saved.updated_at,
        });

        setRecipes((items) => [
          saved,
          ...items.filter((item) => item.id !== saved.id),
        ]);
        touched.current = true;
        setDraft(menu);
        setSavedSignature(signature(menu));
        setConnectionIssue('');
        await refreshRecipes();
        notify(`“${saved.name}” berhasil diduplikasi.`);
      } catch (error) {
        setConnectionIssue(error.message);
        toast.error(error.message);
      } finally {
        setSaving(false);
      }
    };

    if (dirty && touched.current) {
      setPendingAction({
        title: `Duplikat “${recipe.name}”?`,
        description:
          'Perubahan resep yang sedang dibuka belum disimpan. Duplikasi akan beralih ke resep hasil salinan.',
        label: 'Duplikat resep',
        action: performDuplicate,
      });
    } else {
      await performDuplicate();
    }
  }
  function confirmDelete(recipe) {
    setPendingAction({
      title: `Hapus “${recipe.name}”?`,
      description:
        'Resep akan dihapus dari daftar tersimpan. Tindakan ini tidak bisa diurungkan.',
      label: 'Hapus resep',
      destructive: true,
      action: async () => {
        try {
          await deleteRecipe(recipe.id);
          setRecipes((items) => items.filter((item) => item.id !== recipe.id));
          if (draft.id === recipe.id) {
            setDraft(freshMenu());
            setSavedSignature('');
          }
          notify('Resep dihapus.');
        } catch (error) {
          toast.error(error.message);
        }
      },
    });
  }
  function downloadAllRecipes() {
    if (!recipes.length) return toast.error('Belum ada resep untuk diekspor.');
    const blob = new Blob([exportRecipesExcel(recipes)], {
      type: 'application/vnd.ms-excel;charset=utf-8',
    });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `hpp-ku-${new Date().toISOString().slice(0, 10)}.xls`;
    link.click();
    URL.revokeObjectURL(link.href);
    toast.success(`${recipes.length} resep diekspor ke Excel.`);
  }
  async function copyRecipe() {
    if (!canCopy) return;
    const text = exportRecipe(draft, recipes);
    try {
      if (navigator.clipboard?.write && window.ClipboardItem) {
        try {
          await navigator.clipboard.write([
            new window.ClipboardItem({
              'text/plain': new Blob([text], { type: 'text/plain' }),
              'text/html': new Blob([exportRecipeHtml(draft, recipes)], {
                type: 'text/html',
              }),
            }),
          ]);
        } catch {
          await navigator.clipboard.writeText(text);
        }
      } else await navigator.clipboard.writeText(text);
      toast.success('Tabel HPP disalin.', {
        description: `HPP per cup: ${rupiah(copiedHppTotal(draft))}`,
      });
    } catch {
      setCopyFallback(text);
      setImportOpen(true);
    }
  }
  const saveLabel = saving
    ? 'Menyimpan...'
    : !dirty
      ? 'Tersimpan'
      : 'Simpan resep';
  const SaveIcon = saving ? LoaderCircle : !dirty ? CheckCheck : Save;

  return (
    <div className="app-shell">
      <a className="skip-link" href="#calculator">
        Lewati ke kalkulator
      </a>
      <header className="app-header">
        <div className="header-inner">
          <a
            href="#calculator"
            className="brand"
            aria-label="HPP-Ku, kalkulator HPP"
          >
            <span className="brand-name">
              RESEP-YOSHER<span>.</span>
            </span>
          </a>
          <div className="header-actions">
            <span
              className={`save-status ${connectionIssue ? 'has-error' : ''}`}
              role="status"
            >
              {connectionIssue ? (
                <TriangleAlert aria-hidden="true" />
              ) : !dirty ? (
                <Check aria-hidden="true" />
              ) : null}
              {loading
                ? 'Memuat resep...'
                : connectionIssue
                  ? 'Belum terhubung'
                  : dirty
                    ? 'Belum disimpan'
                    : 'Semua tersimpan'}
            </span>
            <Button
              variant="ghost"
              size="icon"
              aria-label={dark ? 'Gunakan tema terang' : 'Gunakan tema gelap'}
              onClick={() => setDark(!dark)}
            >
              {dark ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Keluar"
              title="Keluar"
              onClick={logout}
            >
              <LogOut aria-hidden="true" />
            </Button>
          </div>
        </div>
      </header>
      <main className="workspace" id="calculator">
        <div className="page-intro">
          <div>
            <span className="brand-name">AALITAN WE CE&apos;ES INI MAH 😌</span>
            <p style={{ marginTop: 0 }}>SING AYA MILIKNA WE NYA ACH.... !!!</p>
          </div>
          <div className="intro-actions">
            <div className="intro-export-actions">
              <Button
                variant="outline"
                onClick={() => {
                  setCopyFallback('');
                  setImportOpen(true);
                }}
              >
                <Download aria-hidden="true" />
                Import
              </Button>
              <Button
                variant="outline"
                onClick={downloadAllRecipes}
                disabled={!recipes.length}
              >
                <Download aria-hidden="true" />
                Excel
              </Button>
            </div>
            <Button
              className="desktop-save"
              onClick={saveCurrentRecipe}
              disabled={saving || loading || (!dirty && !connectionIssue)}
            >
              <SaveIcon
                className={saving ? 'animate-spin' : ''}
                aria-hidden="true"
              />
              {saveLabel}
            </Button>
          </div>
        </div>
        {connectionIssue && (
          <div className="connection-notice" role="alert">
            <TriangleAlert aria-hidden="true" />
            <div>
              <strong>Resep belum dapat disinkronkan</strong>
              <p>{connectionIssue}</p>
            </div>
            <Button
              variant="outline"
              onClick={refreshRecipes}
              disabled={loading}
            >
              {loading ? 'Memuat...' : 'Coba lagi'}
            </Button>
          </div>
        )}
        <section
          className="recipe-library"
          aria-label={connectionIssue ? 'Resep awal' : 'Resep tersimpan'}
        >
          <div className="library-header">
            <div className="library-label">
              {/* <span>{connectionIssue ? 'Resep awal' : 'Resep tersimpan'}</span>
              {!loading && <span>{recipes.length}</span>} */}
            </div>
          </div>
          <div className="library-section-label category-section-label">
            <span>Kategori</span>
            <button
              type="button"
              className="category-manage-btn"
              onClick={() => setCategoryDialogOpen(true)}
              title="Kelola kategori (tambah, edit, hapus)"
              aria-label="Kelola kategori"
            >
              <Pencil aria-hidden="true" />
              Kelola
            </button>
          </div>
          <div className="recipe-category-filters" aria-label="Filter kategori">
            <button
              className={`category-filter ${!activeCategoryFilter ? 'is-selected' : ''}`}
              type="button"
              aria-pressed={!activeCategoryFilter}
              onClick={() => setCategoryFilter('')}
            >
              Semua
            </button>
            {categories.map((category) => (
              <button
                className={`category-filter ${activeCategoryFilter === category ? 'is-selected' : ''}`}
                type="button"
                key={category}
                aria-pressed={activeCategoryFilter === category}
                onClick={() => setCategoryFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="library-section-label recipe-list-label">
            Resep {!loading && <span>{recipes.length}</span>}
          </div>
          <div className="recipe-library-items">
            {loading ? (
              <div className="library-skeleton" aria-label="Memuat resep" />
            ) : visibleRecipes.length ? (
              visibleRecipes.map((recipe) => (
                <div
                  className={`recipe-tab ${draft.id === recipe.id ? 'is-selected' : ''}`}
                  key={recipe.id}
                >
                  <button
                    className="recipe-tab-open"
                    type="button"
                    onClick={() => openRecipe(recipe)}
                    aria-pressed={draft.id === recipe.id}
                  >
                    {recipe.name}
                    {draft.id === recipe.id && <Check aria-hidden="true" />}
                  </button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="recipe-tab-duplicate"
                    aria-label={`Duplikat resep ${recipe.name}`}
                    title={`Duplikat resep ${recipe.name}`}
                    onClick={() => duplicateRecipe(recipe)}
                  >
                    <Copy aria-hidden="true" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="recipe-tab-delete"
                    aria-label={`Hapus resep ${recipe.name}`}
                    onClick={() => confirmDelete(recipe)}
                  >
                    <Trash2 aria-hidden="true" />
                  </Button>
                </div>
              ))
            ) : (
              <div className="recipe-library-empty">
                Belum ada resep dalam kategori ini.
              </div>
            )}
            <Button variant="ghost" className="new-recipe" onClick={newRecipe}>
              <Plus aria-hidden="true" />
              Resep baru
            </Button>
          </div>
        </section>
        <section className="menu-identity" aria-label="Pengaturan resep">
          <Field label="Nama minuman">
            {(fieldId) => (
              <Input
                id={fieldId}
                value={draft.name}
                onChange={(e) => update({ name: e.target.value })}
                placeholder="Contoh: Kopi Brown Sugar"
                maxLength={160}
              />
            )}
          </Field>
          <Field label="Kategori">
            {(fieldId) => (
              <div className="category-input-row">
                <select
                  id={fieldId}
                  className="select select-bordered"
                  value={draft.category || ''}
                  onChange={(event) => update({ category: event.target.value })}
                  aria-label="Kategori resep"
                >
                  <option value="">Tanpa kategori</option>
                  {categoryOptions.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <button
                  className="btn btn-ghost category-inline-add"
                  type="button"
                  aria-label="Tambah kategori baru"
                  onClick={() => setCategoryDialogOpen(true)}
                >
                  <FolderPlus aria-hidden="true" />
                </button>
              </div>
            )}
          </Field>
          <Field
            label="Jumlah produksi"
            error={cupInvalid ? 'Masukkan 1–100.000 cup.' : ''}
          >
            {(fieldId) => (
              <div className="cup-stepper">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Kurangi jumlah cup"
                  disabled={Number(draft.cups) <= 1}
                  onClick={() =>
                    update({ cups: Math.max(1, Number(draft.cups) - 1) })
                  }
                >
                  <Minus aria-hidden="true" />
                </Button>
                <Input
                  id={fieldId}
                  type="number"
                  min={1}
                  max={100000}
                  step={1}
                  inputMode="numeric"
                  value={draft.cups}
                  onChange={(e) => update({ cups: e.target.value })}
                  aria-label="Jumlah cup"
                  aria-invalid={cupInvalid || undefined}
                />
                <span>cup</span>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Tambah jumlah cup"
                  disabled={Number(draft.cups) >= 100000}
                  onClick={() =>
                    update({ cups: Math.min(100000, Number(draft.cups) + 1) })
                  }
                >
                  <Plus aria-hidden="true" />
                </Button>
              </div>
            )}
          </Field>
          <div className="batch-help">
            <span className="batch-help-icon" aria-hidden="true">
              <CupSoda />
            </span>
            <div className="batch-help-copy">
              <p>
                Resep disusun untuk <strong>1 cup</strong>.
              </p>
              <p>Kebutuhan produksi dihitung otomatis.</p>
            </div>
          </div>
        </section>
        <div className="calculator-layout">
          <div className="editor-column">
            <Ingredients
              items={draft.items}
              cups={result.cups}
              savedRecipes={recipes}
              currentRecipeId={draft.id}
              onIncludeRecipe={includeSavedRecipe}
              onChange={(items) =>
                update((menu) => ({
                  items:
                    typeof items === 'function' ? items(menu.items) : items,
                }))
              }
              notify={notify}
            />
            <section
              className="panel settings-panel"
              aria-label="Pengaturan biaya dan harga"
            >
              <Pricing menu={draft} update={update} result={result} />
              <Overheads
                menu={draft}
                update={update}
                result={result}
                notify={notify}
              />
            </section>
          </div>
          <Summary result={result} canCopy={canCopy} onCopy={copyRecipe} />
        </div>
      </main>
      <div className="mobile-action-bar">
        <Button
          onClick={saveCurrentRecipe}
          disabled={saving || loading || (!dirty && !connectionIssue)}
        >
          <SaveIcon
            className={saving ? 'animate-spin' : ''}
            aria-hidden="true"
          />
          {saveLabel}
        </Button>
      </div>
      <TransferDialog
        open={importOpen}
        onOpenChange={setImportOpen}
        onImport={(menu) => {
          touched.current = true;
          setDraft(normalizeMenu(menu));
          setSavedSignature('');
          notify('Resep berhasil diimport.');
        }}
        copyFallback={copyFallback}
      />
      <CategoryDialog
        key={categoryDialogOpen ? 'category-open' : 'category-closed'}
        open={categoryDialogOpen}
        categories={categories}
        categoryCounts={categoryCounts}
        onClose={() => setCategoryDialogOpen(false)}
        onCreate={applyCategory}
        onRename={handleRenameCategory}
        onDelete={handleDeleteCategory}
      />
      <AlertDialog
        open={Boolean(pendingAction)}
        onOpenChange={(open) => {
          if (!open) setPendingAction(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{pendingAction?.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {pendingAction?.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setPendingAction(null)}>
              Batal
            </AlertDialogCancel>
            <AlertDialogAction
              className={pendingAction?.destructive ? 'btn-error' : ''}
              onClick={async () => {
                const action = pendingAction?.action;
                setPendingAction(null);
                await action?.();
              }}
            >
              {pendingAction?.label}
              <ChevronRight aria-hidden="true" />
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Toaster
        position="bottom-center"
        theme={dark ? 'dark' : 'light'}
        closeButton
        visibleToasts={2}
        toastOptions={{ className: 'hpp-toast' }}
        mobileOffset={{ bottom: 'calc(94px + env(safe-area-inset-bottom))' }}
      />
    </div>
  );
}
