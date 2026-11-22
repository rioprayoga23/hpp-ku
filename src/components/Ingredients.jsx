import { useState } from 'react';
import { BookPlus, ChevronDown, Plus, Trash2 } from 'lucide-react';
import { Field, Choice, NumberInput } from './Fields.jsx';
import IconAction from './IconAction.jsx';
import RecipePickerDialog from './RecipePickerDialog.jsx';
import {
  decimal,
  findMatchingRecipe,
  ingredientCost,
  normalizeMenu,
  rupiah,
  units,
  newIngredient,
} from '../model.js';

function sourceMenuFor(item, savedRecipes = []) {
  const saved = findMatchingRecipe(item, savedRecipes);
  const rawData = saved?.data || saved || item.sourceRecipeData;
  const data =
    typeof rawData === 'string'
      ? (() => {
          try {
            return JSON.parse(rawData);
          } catch {
            return null;
          }
        })()
      : rawData && typeof rawData === 'object' && !Array.isArray(rawData)
        ? rawData
        : null;

  if (!data) return null;

  return normalizeMenu({
    ...data,
    id: saved?.id || item.sourceRecipeId || data.id,
    name: saved?.name || data.name || item.sourceRecipeName || item.name,
    updatedAt:
      saved?.updated_at || item.sourceRecipeUpdatedAt || data.updatedAt,
  });
}

function detailKindOptions(item) {
  if (item.kind === 'recipe')
    return [
      { value: 'recipe', label: 'Resep tersimpan' },
      { value: 'ingredient', label: 'Bahan' },
      { value: 'packaging', label: 'Kemasan' },
    ];
  return [
    { value: 'ingredient', label: 'Bahan' },
    { value: 'packaging', label: 'Kemasan' },
  ];
}

function RecipeDetailItem({ item, savedRecipes, depth = 0, trail = [] }) {
  const result = ingredientCost(item);
  const isRecipe = item.kind === 'recipe';
  const saved = isRecipe ? findMatchingRecipe(item, savedRecipes) : null;
  const displayName = saved?.name || item.sourceRecipeName || item.name;
  const sourceKey = String(item.sourceRecipeId || item.id || displayName);
  const nestedSource = isRecipe ? sourceMenuFor(item, savedRecipes) : null;
  const nestedItems = nestedSource?.items.filter((child) => child.active) || [];
  const canShowNested = nestedItems.length > 0 && !trail.includes(sourceKey);
  return (
    <>
      <div
        className={`recipe-detail-row recipe-detail-depth-${Math.min(depth, 3)}`}
      >
        <div className="ingredient-name-field">
          <Field label="Komponen">
            {(fieldId) => (
              <input
                className="input input-bordered"
                id={fieldId}
                value={displayName || '(tanpa nama)'}
                disabled
                readOnly
                aria-label={`Komponen resep ${displayName || 'tersimpan'}`}
              />
            )}
          </Field>
          <div className="ingredient-options">
            <Choice
              value={item.kind}
              options={detailKindOptions(item)}
              disabled
              label={`Jenis ${displayName || 'komponen resep'}`}
            />
            <label className="switch-label">
              <input
                className="toggle toggle-primary"
                type="checkbox"
                checked={item.active !== false}
                disabled
                readOnly
                aria-label={`${item.active === false ? 'Nonaktif' : 'Aktif'} ${displayName || 'komponen resep'}`}
              />
              <span>{item.active === false ? 'Nonaktif' : 'Aktif'}</span>
            </label>
          </div>
        </div>
        <Field className="price-field" label="Harga beli">
          {(fieldId) => (
            <NumberInput
              id={fieldId}
              money
              value={item.price}
              disabled
              label={`Harga beli ${displayName || 'komponen resep'}`}
            />
          )}
        </Field>
        <Field label="Isi kemasan">
          {(fieldId) => (
            <div className="quantity-input">
              <NumberInput
                id={fieldId}
                value={item.packQty}
                disabled
                label={`Isi kemasan ${displayName || 'komponen resep'}`}
              />
              <Choice
                value={item.packUnit}
                options={units}
                disabled
                label={`Satuan kemasan ${displayName || 'komponen resep'}`}
              />
            </div>
          )}
        </Field>
        <Field label="Pakai / cup">
          {(fieldId) => (
            <div className="quantity-input">
              <NumberInput
                id={fieldId}
                value={item.usage}
                disabled
                label={`Pemakaian ${displayName || 'komponen resep'}`}
              />
              <Choice
                value={item.usageUnit}
                options={units}
                disabled
                label={`Satuan pemakaian ${displayName || 'komponen resep'}`}
              />
            </div>
          )}
        </Field>
        <div className="ingredient-cost-field recipe-detail-cost">
          <strong className={result.error ? 'field-error' : ''}>
            {result.error ? 'Periksa input' : rupiah(result.cost)}
          </strong>
        </div>
      </div>
      {canShowNested && (
        <div className="recipe-detail-nested">
          {nestedItems.map((child) => (
            <RecipeDetailItem
              key={`${sourceKey}-${child.id}`}
              item={child}
              savedRecipes={savedRecipes}
              depth={depth + 1}
              trail={[...trail, sourceKey]}
            />
          ))}
        </div>
      )}
    </>
  );
}

function RecipeDetails({ item, savedRecipes }) {
  const [open, setOpen] = useState(false);
  const source = sourceMenuFor(item, savedRecipes);
  const detailItems = source?.items.filter((child) => child.active) || [];
  if (!detailItems.length) return null;
  const saved = findMatchingRecipe(item, savedRecipes);
  const label =
    saved?.name || item.sourceRecipeName || item.name || 'Resep tersimpan';
  return (
    <div
      className={`recipe-details ${open ? 'is-open' : ''}`}
      aria-label={`Komponen ${label}`}
    >
      <button
        type="button"
        className="recipe-details-toggle"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="recipe-details-heading">
          <span>Komponen resep</span>
          <small>
            {label} · {detailItems.length} item
          </small>
        </span>
        <ChevronDown aria-hidden="true" />
      </button>
      {open && (
        <div className="recipe-details-list">
          {detailItems.map((child) => (
            <RecipeDetailItem
              key={child.id}
              item={child}
              savedRecipes={savedRecipes}
              trail={[String(item.sourceRecipeId || item.id || label)]}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function IngredientRow({ item, index, cups, update, remove, savedRecipes }) {
  const [expanded, setExpanded] = useState(index === 0);
  const result = ingredientCost(item);
  const isRecipe = item.kind === 'recipe';
  const saved = isRecipe ? findMatchingRecipe(item, savedRecipes) : null;
  const displayName = saved?.name || item.sourceRecipeName || item.name;
  return (
    <article
      className={`ingredient-row ${isRecipe ? 'is-recipe' : ''} ${expanded ? 'is-expanded' : ''} ${item.active ? '' : 'is-inactive'}`}
    >
      <div className="ingredient-mobile-heading">
        <button
          type="button"
          className="ingredient-disclosure"
          aria-expanded={expanded}
          aria-controls={`fields-${item.id}`}
          onClick={() => setExpanded((open) => !open)}
        >
          <span>
            <strong>
              {displayName || (isRecipe ? 'Resep tersimpan' : 'Bahan baru')}
            </strong>
            <small>
              {!item.active
                ? 'Tidak dihitung'
                : isRecipe
                  ? `${decimal(item.usage)} cup resep / cup`
                  : `${decimal(item.usage)} ${item.usageUnit} / cup`}
            </small>
          </span>
          <span className="ingredient-heading-cost">
            {item.active && !result.error ? rupiah(result.cost) : '—'}
            <ChevronDown aria-hidden="true" />
          </span>
        </button>
      </div>
      <div className="ingredient-fields" id={`fields-${item.id}`}>
        {isRecipe ? (
          <>
            <div className="recipe-main-fields">
              <div className="ingredient-name-field recipe-name-field">
                <Field label="Resep tersimpan">
                  {(fieldId) => (
                    <input
                      className="input input-bordered"
                      id={fieldId}
                      value={displayName}
                      disabled
                      readOnly
                      aria-label={`Resep tersimpan ${displayName || index + 1}`}
                    />
                  )}
                </Field>
                <label className="switch-label recipe-active-toggle">
                  <input
                    className="toggle toggle-primary"
                    type="checkbox"
                    checked={item.active}
                    onChange={(event) =>
                      update({ active: event.target.checked })
                    }
                    aria-label={`Sertakan ${displayName || 'resep tersimpan'}`}
                  />
                  <span>{item.active ? 'Aktif' : 'Nonaktif'}</span>
                </label>
              </div>
            </div>
            <RecipeDetails item={item} savedRecipes={savedRecipes} />
          </>
        ) : (
          <>
            <div className="ingredient-name-field">
              <Field label="Komponen">
                {(fieldId) => (
                  <input
                    className="input input-bordered"
                    id={fieldId}
                    value={item.name}
                    onChange={(e) => update({ name: e.target.value })}
                    aria-label={`Nama komponen ${index + 1}`}
                    placeholder="Nama bahan"
                  />
                )}
              </Field>
              <div className="ingredient-options">
                <Choice
                  value={item.kind}
                  onChange={(kind) => update({ kind })}
                  label={`Jenis ${item.name || index + 1}`}
                  options={[
                    { value: 'ingredient', label: 'Bahan' },
                    { value: 'packaging', label: 'Kemasan' },
                  ]}
                />
                <label className="switch-label">
                  <input
                    className="toggle toggle-primary"
                    type="checkbox"
                    checked={item.active}
                    onChange={(event) =>
                      update({ active: event.target.checked })
                    }
                    aria-label={`Sertakan ${item.name || 'komponen'}`}
                  />
                  <span>{item.active ? 'Aktif' : 'Nonaktif'}</span>
                </label>
              </div>
            </div>
            <Field className="price-field" label="Harga beli">
              {(fieldId) => (
                <NumberInput
                  id={fieldId}
                  money
                  value={item.price}
                  onChange={(price) => update({ price })}
                  label={`Harga beli ${item.name || index + 1}`}
                />
              )}
            </Field>
            <Field label="Isi kemasan">
              {(fieldId) => (
                <div className="quantity-input">
                  <NumberInput
                    id={fieldId}
                    value={item.packQty}
                    onChange={(packQty) => update({ packQty })}
                    label={`Isi kemasan ${item.name || index + 1}`}
                    min={0.001}
                    invalid={item.active && !(Number(item.packQty) > 0)}
                  />
                  <Choice
                    value={item.packUnit}
                    onChange={(packUnit) => update({ packUnit })}
                    options={units}
                    label={`Satuan kemasan ${item.name || index + 1}`}
                  />
                </div>
              )}
            </Field>
            <Field label="Pakai / cup">
              {(fieldId) => (
                <div className="quantity-input">
                  <NumberInput
                    id={fieldId}
                    value={item.usage}
                    onChange={(usage) => update({ usage })}
                    label={`Pemakaian ${item.name || index + 1}`}
                  />
                  <Choice
                    value={item.usageUnit}
                    onChange={(usageUnit) => update({ usageUnit })}
                    options={units}
                    label={`Satuan pemakaian ${item.name || index + 1}`}
                  />
                </div>
              )}
            </Field>
          </>
        )}
        <div className="ingredient-cost-field">
          <strong className={result.error ? 'field-error' : ''}>
            {!item.active
              ? 'Tidak dihitung'
              : result.error
                ? 'Periksa input'
                : rupiah(result.cost)}
          </strong>
          <IconAction
            label={`Hapus ${item.name || 'komponen'}`}
            onClick={remove}
          >
            <Trash2 aria-hidden="true" />
          </IconAction>
        </div>
        {cups > 1 && item.active && !result.error && (
          <p className="ingredient-batch-note">
            Untuk {decimal(cups)} cup:{' '}
            <strong>
              {decimal(Number(item.usage) * cups)}{' '}
              {isRecipe ? 'cup resep' : item.usageUnit}
            </strong>
            <span>{rupiah(result.cost * cups)}</span>
          </p>
        )}
        {result.error && (
          <p className="field-error ingredient-error" role="status">
            {result.error}
          </p>
        )}
      </div>
    </article>
  );
}

export default function Ingredients({
  items,
  cups = 1,
  onChange,
  notify,
  savedRecipes = [],
  currentRecipeId,
  onIncludeRecipe,
}) {
  const [includeOpen, setIncludeOpen] = useState(false);
  const update = (index, patch) =>
    onChange(
      items.map((item, i) => (i === index ? { ...item, ...patch } : item))
    );
  const remove = (index) => {
    const removed = items[index];
    onChange(items.filter((_, i) => i !== index));
    notify('Komponen dihapus.', () =>
      onChange((current) => {
        const next = [...current];
        next.splice(Math.min(index, next.length), 0, removed);
        return next;
      })
    );
  };
  return (
    <section
      className="panel ingredients-panel"
      aria-labelledby="recipe-heading"
    >
      <div className="panel-heading">
        <div>
          <h2 id="recipe-heading">Bahan & kemasan</h2>
          <p>Takaran dasar untuk 1 cup.</p>
        </div>
        <span className="muted-count">
          {items.filter((item) => item.active).length} aktif
        </span>
      </div>
      <div className="ingredient-table-head" aria-hidden="true">
        <span>Komponen</span>
        <span>Harga beli</span>
        <span>Isi kemasan</span>
        <span>Pakai / cup</span>
        <span>Biaya / cup</span>
      </div>
      <div className="ingredient-list">
        {items.map((item, index) => (
          <IngredientRow
            key={item.id}
            item={item}
            index={index}
            cups={cups}
            update={(patch) => update(index, patch)}
            remove={() => remove(index)}
            savedRecipes={savedRecipes}
          />
        ))}
      </div>
      {!items.length && (
        <div className="empty-state">
          <h3>Mulai dengan bahan pertama</h3>
          <p>
            Isi harga beli, ukuran kemasan, dan takaran yang digunakan untuk 1
            cup.
          </p>
        </div>
      )}
      <div className="panel-footer ingredient-panel-footer">
        <div className="ingredient-action-buttons">
          <button
            className="btn btn-outline"
            type="button"
            onClick={() => onChange([...items, newIngredient()])}
          >
            <Plus aria-hidden="true" />
            Tambah bahan
          </button>
          <button
            className="btn btn-outline"
            type="button"
            onClick={() => setIncludeOpen(true)}
            disabled={!savedRecipes.length}
          >
            <BookPlus aria-hidden="true" />
            Pakai resep
          </button>
        </div>
        <span className="ingredient-note">
          *Bahan nonaktif tidak masuk hitungan.
        </span>
      </div>
      <RecipePickerDialog
        open={includeOpen}
        recipes={savedRecipes}
        currentRecipeId={currentRecipeId}
        onClose={() => setIncludeOpen(false)}
        onSelect={(recipe) => {
          onIncludeRecipe(recipe);
          setIncludeOpen(false);
        }}
      />
    </section>
  );
}
