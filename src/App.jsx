import { useEffect, useMemo, useState, useRef } from "react";
import {
  Theme,
  Button,
  IconButton,
  TextField,
  Callout,
  AlertDialog,
} from "@radix-ui/themes";
import {
  PlusIcon,
  SunIcon,
  MoonIcon,
  DesktopIcon,
  CheckCircledIcon,
  ExclamationTriangleIcon,
  ReloadIcon,
  ArrowDownIcon,
  CopyIcon,
  DownloadIcon,
} from "@radix-ui/react-icons";
import Ingredients from "./components/Ingredients.jsx";
import Overheads from "./components/Overheads.jsx";
import Pricing from "./components/Pricing.jsx";
import Summary from "./components/Summary.jsx";
import TransferDialog from "./components/TransferDialog.jsx";
import { Field } from "./components/Fields.jsx";
import {
  calculate,
  freshMenu,
  loadWorkspace,
  persistWorkspace,
  rupiah,
} from "./model.js";
import { copiedHppTotal, exportRecipe, exportRecipeHtml } from "./recipeTransfer.js";
import { Toaster, toast } from "sonner";
import "sonner/dist/styles.css";
export default function App() {
  const [initial] = useState(loadWorkspace);
  const [draft, setDraft] = useState(initial.draft);
  const [storageIssue, setStorageIssue] = useState(initial.issue),
    [saveState, setSaveState] = useState("saved");
  const [resetOpen, setResetOpen] = useState(false);
  const [importOpen, setImportOpen] = useState(false),
    [copyFallback, setCopyFallback] = useState("");
  const [systemDark, setSystemDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
  );
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("kopti-theme");
      return ["light", "dark", "system"].includes(saved) ? saved : "light";
    } catch {
      return "light";
    }
  });
  const current = useRef(draft);
  const appearance =
    theme === "system" ? (systemDark ? "dark" : "light") : theme;
  const result = useMemo(() => calculate(draft), [draft]);
  const showSellingPrice = result.marginActive && result.overheadsActive && result.price !== null;
  const activeCount = draft.items.filter((i) => i.active).length;
  const canCopy = activeCount > 0 && result.errors.length === 0;
  const update = (patch) =>
    setDraft((value) => ({
      ...value,
      ...(typeof patch === "function" ? patch(value) : patch),
    }));
  const notify = (message, undo) => {
    if (undo) {
      toast.success(message, {
        duration: 6000,
        action: { label: "Urungkan", onClick: undo },
      });
      return;
    }
    toast.success(message, { duration: 3500 });
  };
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const change = (e) => setSystemDark(e.matches);
    media.addEventListener("change", change);
    return () => media.removeEventListener("change", change);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = appearance;
    document.documentElement.style.colorScheme = appearance;
    try {
      localStorage.setItem("kopti-theme", theme);
    } catch {}
  }, [theme, appearance]);
  useEffect(() => {
    current.current = draft;
    if (initial.blocked) return;
    setSaveState("saving");
    const t = setTimeout(() => {
      try {
        persistWorkspace(draft, initial.menus);
        setStorageIssue("");
        setSaveState("saved");
      } catch {
        setStorageIssue(
          "Penyimpanan browser penuh atau tidak tersedia. Salin resep sebelum menutup halaman agar data tidak hilang.",
        );
        setSaveState("error");
      }
    }, 300);
    return () => clearTimeout(t);
  }, [draft, initial]);
  useEffect(() => {
    if (initial.blocked) return;
    const flush = () => {
      try {
        persistWorkspace(current.current, initial.menus);
      } catch {}
    };
    window.addEventListener("pagehide", flush);
    return () => {
      window.removeEventListener("pagehide", flush);
      flush();
    };
  }, [initial]);
  async function copyRecipe() {
    if (!canCopy) return;
    const text = exportRecipe(draft);
    const html = exportRecipeHtml(draft);
    try {
      if (navigator.clipboard?.write && window.ClipboardItem) {
        try {
          const item = new window.ClipboardItem({
            "text/plain": new Blob([text], { type: "text/plain" }),
            "text/html": new Blob([html], { type: "text/html" }),
          });
          await navigator.clipboard.write([item]);
        } catch {
          await navigator.clipboard.writeText(text);
        }
      } else {
        await navigator.clipboard.writeText(text);
      }
      toast.success("Tabel HPP disalin.", { duration: 3500, description: "Tempel mulai dari kolom No. Total HPP bahan dan kemasan / cup: " + rupiah(copiedHppTotal(draft)) });
    } catch {
      setCopyFallback(text);
      setImportOpen(true);
    }
  }
  function openImport() {
    setCopyFallback("");
    setImportOpen(true);
  }
  function importMenu(menu) {
    const previous = structuredClone(draft);
    setDraft(menu);
    notify(`“${menu.name}” berhasil diimport.`, () => setDraft(previous));
  }
  return (
    <Theme
      appearance={appearance}
      accentColor="blue"
      grayColor="slate"
      radius="medium"
      scaling="100%"
    >
      <a className="skip-link" href="#calculator">
        Lewati ke kalkulator
      </a>
      <header className="app-header">
        <div className="header-inner">
          <a
            href="#calculator"
            className="brand"
            aria-label="HPP-Ku, ke kalkulator"
          >
            <span className="brand-name">HPP-Ku</span>
            <span className="brand-product">HPP & harga jual</span>
          </a>
          <div className="header-actions">
            <span className="header-autosave">
              {initial.blocked || saveState === "error" ? (
                <ExclamationTriangleIcon />
              ) : saveState === "saving" ? (
                <ReloadIcon />
              ) : (
                <CheckCircledIcon />
              )}
              {initial.blocked || saveState === "error"
                ? "Belum tersimpan"
                : saveState === "saving"
                  ? "Menyimpan..."
                  : "Tersimpan di perangkat"}
            </span>
            <IconButton
              variant="soft"
              color="gray"
              aria-label={`Tema ${theme}. Ganti tema`}
              title={`Tema: ${theme}`}
              onClick={() =>
                setTheme(
                  theme === "system"
                    ? "light"
                    : theme === "light"
                      ? "dark"
                      : "system",
                )
              }
            >
              {theme === "system" ? (
                <DesktopIcon />
              ) : theme === "light" ? (
                <SunIcon />
              ) : (
                <MoonIcon />
              )}
            </IconButton>
          </div>
        </div>
      </header>
      <main className="workspace" id="calculator">
        <div className="page-intro">
          <Button
            className="desktop-import"
            variant="outline"
            color="gray"
            onClick={openImport}
          >
            <DownloadIcon />
            Import resep
          </Button>
        </div>
        {storageIssue && (
          <Callout.Root color="red" role="alert">
            <Callout.Icon>
              <ExclamationTriangleIcon />
            </Callout.Icon>
            <Callout.Text>{storageIssue}</Callout.Text>
          </Callout.Root>
        )}
        <div className="menu-identity">
          <Field label="Nama minuman">
            {(fieldId) => (
              <TextField.Root
                id={fieldId}
                size="3"
                value={draft.name}
                onChange={(e) => update({ name: e.target.value })}
                placeholder="Contoh: Kopi Brown Sugar"
              />
            )}
          </Field>
          <Button
            variant="ghost"
            color="gray"
            onClick={() => setResetOpen(true)}
          >
            <PlusIcon />
            Resep baru
          </Button>
        </div>
        <div className="calculator-layout">
          <div className="editor-column">
            <Ingredients
              items={draft.items}
              onChange={(items) =>
                update((d) => ({
                  items: typeof items === "function" ? items(d.items) : items,
                }))
              }
              notify={notify}
            />
            <Overheads
              menu={draft}
              update={update}
              result={result}
              notify={notify}
            />
            <Pricing
              pricing={draft.pricing}
              active={draft.marginActive !== false}
              onActiveChange={(marginActive) => update({ marginActive })}
              onChange={(pricing) => update({ pricing })}
              result={result}
            />
          </div>
          <Summary result={result} canCopy={canCopy} onCopy={copyRecipe} />
        </div>
      </main>
      <div className="mobile-action-bar">
        <a href="#summary">
          <span>{showSellingPrice ? "Harga jual / cup" : "Total HPP / cup"}</span>
          <strong>{showSellingPrice ? rupiah(result.price) : result.cost === null ? "Periksa bahan" : rupiah(result.cost)}</strong>
          <ArrowDownIcon />
        </a>
        <div>
          <Button variant="outline" color="gray" onClick={openImport}>
            <DownloadIcon />
            Import resep
          </Button>
          <Button highContrast onClick={copyRecipe} disabled={!canCopy} aria-label="Salin tabel HPP">
            <CopyIcon />
            Salin
          </Button>
        </div>
      </div>
      <TransferDialog
        open={importOpen}
        onOpenChange={setImportOpen}
        onImport={importMenu}
        copyFallback={copyFallback}
      />
      <AlertDialog.Root open={resetOpen} onOpenChange={setResetOpen}>
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>Mulai resep baru?</AlertDialog.Title>
          <AlertDialog.Description>
            Resep saat ini akan diganti. Salin tabel HPP terlebih dahulu jika ingin
            menggunakannya lagi.
          </AlertDialog.Description>
          <div className="dialog-actions">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Batal
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button
                highContrast
                onClick={() => {
                  const previous = structuredClone(draft);
                  setDraft(freshMenu());
                  notify("Resep baru siap diisi.", () => setDraft(previous));
                }}
              >
                Mulai baru
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <Toaster
        position="bottom-center"
        theme={appearance}
        closeButton
        visibleToasts={2}
        offset={{ bottom: 22 }}
        mobileOffset={{
          bottom: "calc(122px + env(safe-area-inset-bottom))",
        }}
        icons={{ success: <CheckCircledIcon /> }}
        toastOptions={{
          className: "hpp-toast",
          duration: 3500,
          style: {
            background: "var(--surface)",
            borderColor: "var(--border)",
            color: "var(--ink)",
            borderRadius: "14px",
            boxShadow: "var(--shadow)",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "13px",
          },
          actionButtonStyle: {
            background: "var(--accent)",
            color: "#fff",
            borderRadius: "8px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          },
        }}
      />
    </Theme>
  );
}
