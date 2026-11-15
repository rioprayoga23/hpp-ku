'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowDown,
  Check,
  CheckCheck,
  ChevronRight,
  Download,
  LoaderCircle,
  Minus,
  Moon,
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
import { calculate, freshMenu, normalizeMenu, rupiah } from './model.js';
import {
  copiedHppTotal,
  exportRecipe,
  exportRecipeHtml,
  exportRecipesExcel,
} from './recipeTransfer.js';
import { deleteRecipe, listRecipes, saveRecipe } from './recipesApi.js';
import { initialRecipes } from './initialRecipes.js';
import { Toaster, toast } from 'sonner';

const signature = ({ updatedAt, ...menu }) => {
  void updatedAt;
  return JSON.stringify(menu);
};

export default function App() {
  const [draft, setDraft] = useState(() =>
    structuredClone(initialRecipes[0].data)
  );
  const [recipes, setRecipes] = useState(initialRecipes);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [connectionIssue, setConnectionIssue] = useState('');
  const [savedSignature, setSavedSignature] = useState('');
  const [importOpen, setImportOpen] = useState(false);
  const [copyFallback, setCopyFallback] = useState('');
  const [pendingAction, setPendingAction] = useState(null);
  const [dark, setDark] = useState(false);
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
  const displayPrice = result.marginActive ? result.price : result.cost;

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
  async function refreshRecipes() {
    setLoading(true);
    try {
      const items = await listRecipes();
      setRecipes(items);
      setConnectionIssue('');
      if (!touched.current && items.length) {
        const menu = normalizeMenu({
          ...items[0].data,
          id: items[0].id,
          updatedAt: items[0].updated_at,
        });
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
      .then((items) => {
        if (!active) return;
        setRecipes(items);
        if (!touched.current && items.length) {
          const menu = normalizeMenu({
            ...items[0].data,
            id: items[0].id,
            updatedAt: items[0].updated_at,
          });
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
    const snapshot = structuredClone(draft);
    setSaving(true);
    try {
      const saved = await saveRecipe(snapshot);
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
        current.id === snapshot.id
          ? { ...current, id: saved.id, updatedAt: saved.updated_at }
          : current
      );
      setSavedSignature(signature(menu));
      setConnectionIssue('');
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
      const menu = normalizeMenu({
        ...recipe.data,
        id: recipe.id,
        updatedAt: recipe.updated_at,
      });
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
    const text = exportRecipe(draft);
    try {
      if (navigator.clipboard?.write && window.ClipboardItem) {
        try {
          await navigator.clipboard.write([
            new window.ClipboardItem({
              'text/plain': new Blob([text], { type: 'text/plain' }),
              'text/html': new Blob([exportRecipeHtml(draft)], {
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
              HPP-Ku<span>.</span>
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
          </div>
        </div>
      </header>
      <main className="workspace" id="calculator">
        <div className="page-intro">
          <div>
            <h1>Resep & biaya</h1>
            <p>Takaran pas. Harga jual jelas.</p>
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
          <div className="library-label">
            <span>{connectionIssue ? 'Resep awal' : 'Resep tersimpan'}</span>
            {!loading && <span>{recipes.length}</span>}
          </div>
          <div className="recipe-library-items">
            {loading ? (
              <div className="library-skeleton" aria-label="Memuat resep" />
            ) : (
              recipes.map((recipe) => (
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
                    className="recipe-tab-delete"
                    aria-label={`Hapus resep ${recipe.name}`}
                    onClick={() => confirmDelete(recipe)}
                  >
                    <Trash2 aria-hidden="true" />
                  </Button>
                </div>
              ))
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
          <p className="batch-help">
            Resep disusun untuk <strong>1 cup</strong>.<br />
            Kebutuhan produksi dihitung otomatis.
          </p>
        </section>
        <div className="calculator-layout">
          <div className="editor-column">
            <Ingredients
              items={draft.items}
              cups={result.cups}
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
        <a href="#summary" aria-label="Lihat ringkasan biaya">
          <span>{result.marginActive ? 'Harga jual / cup' : 'HPP / cup'}</span>
          <strong>
            {displayPrice === null ? '—' : rupiah(displayPrice)}
            <ArrowDown aria-hidden="true" />
          </strong>
        </a>
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
