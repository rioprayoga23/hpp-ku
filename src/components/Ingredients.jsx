import { useState } from 'react';
import { BookPlus, ChevronDown, Plus, Trash2 } from 'lucide-react';
import { Field, Choice, NumberInput } from './Fields.jsx';
import IconAction from './IconAction.jsx';
import RecipePickerDialog from './RecipePickerDialog.jsx';
import {
  decimal,
  ingredientCost,
  rupiah,
  units,
  newIngredient,
} from '../model.js';

function IngredientRow({ item, index, cups, update, remove }) {
  const [expanded, setExpanded] = useState(index === 0);
  const result = ingredientCost(item);
  const isRecipe = item.kind === 'recipe';
  const displayName = item.sourceRecipeName || item.name;
  return (
    <article
      className={`ingredient-row ${expanded ? 'is-expanded' : ''} ${item.active ? '' : 'is-inactive'}`}
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
            <strong>{displayName || (isRecipe ? 'Resep tersimpan' : 'Bahan baru')}</strong>
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
            <div className="ingredient-name-field recipe-name-field">
              <Field label="Resep tersimpan">
                {(fieldId) => (
                  <input
                    className="input input-bordered"
                    id={fieldId}
                    value={displayName}
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
                  onChange={(event) => update({ active: event.target.checked })}
                  aria-label={`Sertakan ${displayName || 'resep tersimpan'}`}
                />
                <span>{item.active ? 'Aktif' : 'Nonaktif'}</span>
              </label>
            </div>
            <div className="recipe-source-cost">
              <span>HPP sumber / cup</span>
              <strong>
                {item.recipeCost == null ? '—' : rupiah(item.recipeCost)}
              </strong>
            </div>
            <Field className="recipe-usage-field" label="Pakai / cup">
              {(fieldId) => (
                <NumberInput
                  id={fieldId}
                  value={item.usage}
                  onChange={(usage) => update({ usage })}
                  label={`Pemakaian resep ${displayName || index + 1}`}
                  min={0.001}
                  suffix="cup"
                  invalid={item.active && !(Number(item.usage) > 0)}
                />
              )}
            </Field>
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
                    onChange={(event) => update({ active: event.target.checked })}
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
