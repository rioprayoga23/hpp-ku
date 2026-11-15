import { useEffect } from 'react';
import { BookOpen, Check, Layers2, X } from 'lucide-react';
import { calculate, normalizeMenu, rupiah } from '../model.js';

function recipeOption(recipe, currentRecipeId) {
  const menu = normalizeMenu({
    ...(recipe.data || {}),
    id: recipe.id,
    updatedAt: recipe.updated_at,
  });
  const result = calculate(menu);
  return {
    ...recipe,
    menu,
    cost: result.cost,
    current: recipe.id === currentRecipeId,
  };
}

export default function RecipePickerDialog({
  open,
  recipes,
  currentRecipeId,
  onClose,
  onSelect,
}) {
  useEffect(() => {
    if (!open) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const options = recipes.map((recipe) =>
    recipeOption(recipe, currentRecipeId)
  );

  return (
    <div
      className="modal modal-open"
      role="dialog"
      aria-modal="true"
      aria-labelledby="recipe-picker-title"
    >
      <div className="modal-box recipe-picker-dialog">
        <button
          className="btn btn-sm btn-circle btn-ghost recipe-picker-close"
          type="button"
          aria-label="Tutup"
          onClick={onClose}
        >
          <X aria-hidden="true" />
        </button>
        <div className="recipe-picker-heading">
          <span className="recipe-picker-icon" aria-hidden="true">
            <BookOpen />
          </span>
          <div>
            <h2 id="recipe-picker-title">Pakai resep tersimpan</h2>
            <p>
              Masukkan base seperti Base Krimer sebagai satu komponen resep.
            </p>
          </div>
        </div>

        {options.length ? (
          <div className="recipe-picker-list">
            {options.map((recipe) => {
              const disabled = recipe.current || recipe.cost === null;
              return (
                <button
                  className={`recipe-picker-item ${recipe.current ? 'is-current' : ''}`}
                  key={recipe.id}
                  type="button"
                  disabled={disabled}
                  onClick={() => onSelect(recipe)}
                >
                  <span className="recipe-picker-item-icon" aria-hidden="true">
                    <Layers2 />
                  </span>
                  <span className="recipe-picker-item-copy">
                    <strong>{recipe.name || 'Resep tanpa nama'}</strong>
                    <small>
                      {recipe.current
                        ? 'Resep yang sedang dibuka'
                        : recipe.cost === null
                          ? 'HPP belum bisa dihitung'
                          : `HPP ${rupiah(recipe.cost)} / cup`}
                    </small>
                  </span>
                  <span
                    className="recipe-picker-item-action"
                    aria-hidden="true"
                  >
                    {recipe.current ? <Check /> : 'Pakai'}
                  </span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="recipe-picker-empty">
            <Layers2 aria-hidden="true" />
            <strong>Belum ada resep tersimpan</strong>
            <span>
              Simpan resep base terlebih dahulu untuk memakainya di sini.
            </span>
          </div>
        )}

        <div className="modal-action recipe-picker-actions">
          <button className="btn btn-ghost" type="button" onClick={onClose}>
            Tutup
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose} />
    </div>
  );
}
