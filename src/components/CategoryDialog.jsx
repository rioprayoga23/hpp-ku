import { useEffect, useState } from 'react';
import { FolderPlus, X } from 'lucide-react';

export default function CategoryDialog({
  open,
  categories,
  onClose,
  onCreate,
}) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!open) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

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
            <h2 id="category-dialog-title">Tambah kategori</h2>
            <p>Kelompokkan resep agar lebih mudah ditemukan.</p>
          </div>
        </div>
        <form className="category-dialog-form" onSubmit={submit}>
          <label className="field">
            <span>Nama kategori</span>
            <input
              className="input input-bordered"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                if (error) setError('');
              }}
              placeholder="Contoh: Base, Kopi, Non-kopi"
              maxLength={60}
              autoFocus
            />
            {error && (
              <small className="field-error" role="alert">
                {error}
              </small>
            )}
          </label>
          {categories.length > 0 && (
            <div className="category-dialog-existing">
              <span>Kategori tersimpan</span>
              <div>
                {categories.map((category) => (
                  <button
                    className="category-chip"
                    type="button"
                    key={category}
                    onClick={() => setName(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="modal-action category-dialog-actions">
            <button className="btn btn-ghost" type="button" onClick={onClose}>
              Batal
            </button>
            <button className="btn btn-primary" type="submit">
              <FolderPlus aria-hidden="true" />
              Gunakan kategori
            </button>
          </div>
        </form>
      </div>
      <div className="modal-backdrop" onClick={onClose} />
    </div>
  );
}
