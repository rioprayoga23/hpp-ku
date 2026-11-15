import { useMemo, useState } from 'react';
import { Check, TriangleAlert } from 'lucide-react';
import { calculate, rupiah } from '../model.js';
import { importRecipe } from '../recipeTransfer.js';

export default function TransferDialog({
  open,
  onOpenChange,
  onImport,
  copyFallback,
}) {
  const [text, setText] = useState('');
  const parsed = useMemo(() => {
    if (!text.trim()) return {};
    try {
      return { menu: importRecipe(text) };
    } catch (error) {
      return { error: error.message };
    }
  }, [text]);
  if (!open) return null;
  return (
    <div
      className="modal modal-open"
      role="dialog"
      aria-modal="true"
      aria-labelledby="transfer-title"
    >
      <div className="modal-box import-dialog">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
          type="button"
          aria-label="Tutup"
          onClick={() => onOpenChange(false)}
        >
          ×
        </button>
        <h2 id="transfer-title" className="text-lg font-semibold">
          {copyFallback ? 'Salin tabel secara manual' : 'Import resep'}
        </h2>
        <p className="text-sm text-base-content/70 mt-1">
          {copyFallback
            ? 'Pilih dan salin tabel di bawah.'
            : 'Tempel tabel dari Excel, Markdown, atau hasil Salin tabel HPP-Ku.'}
        </p>
        <div className="field mt-5">
          <label htmlFor="recipe-paste">
            {copyFallback ? 'Tabel HPP' : 'Tabel atau resep'}
          </label>
          <textarea
            id="recipe-paste"
            className="textarea textarea-bordered w-full"
            rows={10}
            value={copyFallback || text}
            readOnly={Boolean(copyFallback)}
            onChange={(e) => setText(e.target.value)}
            maxLength={100000}
            placeholder="Tempel resep di sini..."
            onFocus={(e) => {
              if (copyFallback) e.target.select();
            }}
          />
        </div>
        {parsed.error && (
          <p className="transfer-error">
            <TriangleAlert aria-hidden="true" />
            {parsed.error}
          </p>
        )}
        {parsed.menu && (
          <p className="transfer-success">
            <Check aria-hidden="true" />
            {parsed.menu.name || 'Resep siap digunakan'} · HPP{' '}
            {rupiah(calculate(parsed.menu).cost)}
          </p>
        )}
        <div className="modal-action">
          <button
            className="btn btn-ghost"
            type="button"
            onClick={() => onOpenChange(false)}
          >
            Batal
          </button>
          {copyFallback ? (
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => document.getElementById('recipe-paste')?.select()}
            >
              Pilih semua teks
            </button>
          ) : (
            <button
              className="btn btn-primary"
              type="button"
              disabled={!parsed.menu}
              onClick={() => {
                onImport(parsed.menu);
                setText('');
                onOpenChange(false);
              }}
            >
              Gunakan resep
            </button>
          )}
        </div>
      </div>
      <div className="modal-backdrop" onClick={() => onOpenChange(false)} />
    </div>
  );
}
