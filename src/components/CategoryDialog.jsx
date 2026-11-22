import { useEffect, useState } from 'react';
import { Check, FolderPlus, Pencil, Trash2, X } from 'lucide-react';

export default function CategoryDialog({
  open,
  categories = [],
  categoryCounts = {},
  onClose,
  onCreate,
  onRename,
  onDelete,
}) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [editingCategory, setEditingCategory] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [editError, setEditError] = useState('');
  const [deletingCategory, setDeletingCategory] = useState(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (editingCategory) {
          setEditingCategory(null);
        } else if (deletingCategory) {
          setDeletingCategory(null);
        } else {
          onClose();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose, editingCategory, deletingCategory]);

  if (!open) return null;

  function submit(event) {
    event.preventDefault();
    const value = name.trim().replace(/\s+/g, ' ');
    if (!value) {
      setError('Isi nama kategori terlebih dahulu.');
      return;
    }
    if (value.length > 60) {
      setError('Nama kategori maksimal 60 karakter.');
      return;
    }
    onCreate(value);
    setName('');
    setError('');
  }

  function startEdit(cat) {
    setDeletingCategory(null);
    setEditingCategory(cat);
    setEditValue(cat);
    setEditError('');
  }

  async function saveEdit(oldName) {
    const value = editValue.trim().replace(/\s+/g, ' ');
    if (!value) {
      setEditError('Nama kategori tidak boleh kosong.');
      return;
    }
    if (value.length > 60) {
      setEditError('Nama kategori maksimal 60 karakter.');
      return;
    }
    if (value === oldName) {
      setEditingCategory(null);
      return;
    }
    setBusy(true);
    try {
      await onRename?.(oldName, value);
      setEditingCategory(null);
      setEditError('');
    } catch {
      // Error is handled with toast in parent
    } finally {
      setBusy(false);
    }
  }

  async function confirmDelete(cat) {
    setBusy(true);
    try {
      await onDelete?.(cat);
      setDeletingCategory(null);
    } catch {
      // Error is handled with toast in parent
    } finally {
      setBusy(false);
    }
  }

  return (
    <div
      className="modal modal-open"
      role="dialog"
      aria-modal="true"
      aria-labelledby="category-dialog-title"
    >
      <div className="modal-box category-dialog">
        <button
          className="btn btn-sm btn-circle btn-ghost category-dialog-close"
          type="button"
          aria-label="Tutup"
          onClick={onClose}
        >
          <X aria-hidden="true" />
        </button>
        <div className="category-dialog-heading">
          <span className="category-dialog-icon" aria-hidden="true">
            <FolderPlus />
          </span>
          <div>
            <h2 id="category-dialog-title">Kelola Kategori</h2>
            <p>Tambah, ubah nama, atau hapus kategori untuk mengelompokkan resep.</p>
          </div>
        </div>

        <form className="category-dialog-form" onSubmit={submit}>
          <label className="field">
            <span>Tambah kategori baru</span>
            <div className="category-dialog-add-row">
              <input
                className="input input-bordered"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  if (error) setError('');
                }}
                placeholder="Contoh: Base, Kopi, Non-kopi"
                maxLength={60}
                autoFocus={!categories.length}
              />
              <button
                className="btn btn-primary"
                type="submit"
                disabled={busy}
              >
                <FolderPlus aria-hidden="true" />
                Tambah
              </button>
            </div>
            {error && (
              <small className="field-error" role="alert">
                {error}
              </small>
            )}
          </label>
        </form>

        {categories.length > 0 && (
          <div className="category-dialog-existing">
            <div className="category-dialog-subheading">
              <span>Daftar kategori tersimpan ({categories.length})</span>
            </div>
            <div className="category-list">
              {categories.map((category) => {
                const count = categoryCounts[category] || 0;
                const isEditing = editingCategory === category;
                const isDeleting = deletingCategory === category;

                if (isEditing) {
                  return (
                    <div className="category-list-item is-editing" key={category}>
                      <form
                        className="category-list-edit-row"
                        onSubmit={(e) => {
                          e.preventDefault();
                          saveEdit(category);
                        }}
                      >
                        <input
                          className="input input-bordered category-list-edit-input"
                          value={editValue}
                          onChange={(e) => {
                            setEditValue(e.target.value);
                            if (editError) setEditError('');
                          }}
                          maxLength={60}
                          autoFocus
                          disabled={busy}
                        />
                        <button
                          type="submit"
                          className="btn btn-sm btn-primary"
                          title="Simpan nama kategori"
                          aria-label="Simpan nama kategori"
                          disabled={busy}
                        >
                          <Check aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-ghost"
                          title="Batal"
                          aria-label="Batal ubah nama"
                          onClick={() => setEditingCategory(null)}
                          disabled={busy}
                        >
                          <X aria-hidden="true" />
                        </button>
                      </form>
                      {editError && (
                        <small className="field-error" role="alert">
                          {editError}
                        </small>
                      )}
                    </div>
                  );
                }

                if (isDeleting) {
                  return (
                    <div className="category-list-item is-deleting" key={category}>
                      <div className="category-list-delete-confirm">
                        <span className="category-list-delete-text">
                          Hapus “{category}”? ({count} resep jadi tanpa kategori)
                        </span>
                        <div className="category-list-actions">
                          <button
                            type="button"
                            className="btn btn-xs btn-error"
                            onClick={() => confirmDelete(category)}
                            disabled={busy}
                          >
                            Hapus
                          </button>
                          <button
                            type="button"
                            className="btn btn-xs btn-ghost"
                            onClick={() => setDeletingCategory(null)}
                            disabled={busy}
                          >
                            Batal
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div className="category-list-item" key={category}>
                    <div className="category-list-row">
                      <div className="category-list-main">
                        <button
                          type="button"
                          className="category-list-name"
                          title={`Gunakan kategori “${category}”`}
                          onClick={() => setName(category)}
                        >
                          {category}
                        </button>
                        <span className="category-list-count">
                          {count} resep
                        </span>
                      </div>
                      <div className="category-list-actions">
                        <button
                          type="button"
                          className="category-list-action-btn"
                          title="Ubah nama kategori"
                          aria-label={`Ubah nama kategori ${category}`}
                          onClick={() => startEdit(category)}
                          disabled={busy}
                        >
                          <Pencil aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          className="category-list-action-btn is-delete"
                          title="Hapus kategori"
                          aria-label={`Hapus kategori ${category}`}
                          onClick={() => {
                            setEditingCategory(null);
                            setDeletingCategory(category);
                          }}
                          disabled={busy}
                        >
                          <Trash2 aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="modal-action category-dialog-actions">
          <button className="btn btn-ghost" type="button" onClick={onClose}>
            Selesai
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose} />
    </div>
  );
}
