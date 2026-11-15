import {
  ChevronDown as ChevronDownIcon,
  Plus as PlusIcon,
  Trash2 as TrashIcon,
} from 'lucide-react';
import { Field, Choice, NumberInput } from './Fields.jsx';
import IconAction from './IconAction.jsx';
import { id, rupiah } from '../model.js';

const commonCosts = ['Sewa tempat', 'Gaji karyawan', 'Listrik & air'];
const periods = [
  { value: 'month', label: 'Bulan' },
  { value: 'portion', label: 'Cup' },
];

export default function Overheads({ menu, update, result, notify }) {
  const active = menu.overheadsActive !== false;
  const setRows = (overheads) =>
    update((draft) => ({
      overheads:
        typeof overheads === 'function'
          ? overheads(draft.overheads)
          : overheads,
    }));

  const change = (index, patch) =>
    setRows(
      menu.overheads.map((row, i) => (i === index ? { ...row, ...patch } : row))
    );

  const add = (name = '') =>
    setRows([
      ...menu.overheads,
      { id: id(), name, amount: '', period: 'month' },
    ]);

  const remove = (index) => {
    const removed = menu.overheads[index];
    setRows(menu.overheads.filter((_, i) => i !== index));
    notify('Biaya dihapus.', () =>
      setRows((current) => {
        const next = [...current];
        next.splice(Math.min(index, next.length), 0, removed);
        return next;
      })
    );
  };

  const monthlyDescription =
    result.monthly > 0 && Number(menu.target) > 0
      ? rupiah(result.monthly) +
        ' ÷ ' +
        Number(menu.target).toLocaleString('id-ID') +
        ' cup'
      : result.monthly > 0
        ? 'Belum dialokasikan'
        : rupiah(0);

  return (
    <section
      className={
        'settings-section overhead-subpanel' + (active ? '' : ' is-inactive')
      }
      id="overheads"
    >
      <div className="subpanel-header">
        <div className="subpanel-title-group">
          <h3 className="subpanel-title">Biaya operasional</h3>
          <span className="subpanel-meta">
            {active
              ? result.overhead > 0
                ? `${rupiah(result.overhead)} / cup`
                : 'Opsional (Rp 0)'
              : 'Tidak dihitung'}
          </span>
        </div>
        <label className="section-toggle">
          <input
            className="toggle toggle-primary"
            type="checkbox"
            checked={active}
            onChange={(event) =>
              update({ overheadsActive: event.target.checked })
            }
            aria-label="Aktifkan biaya operasional"
          />
          <span>{active ? 'Aktif' : 'Nonaktif'}</span>
        </label>
      </div>

      <details className="subpanel-details">
        <summary className="subpanel-summary">
          <span>Atur rincian biaya</span>
          <ChevronDownIcon aria-hidden="true" />
        </summary>
        <fieldset className="subpanel-fields" disabled={!active}>
          <div className="subpanel-body">
            <div className="target-block-compact">
              <Field label="Target cup / bulan">
                {(fieldId) => (
                  <NumberInput
                    id={fieldId}

                    label="Target cup per bulan"
                    value={menu.target}
                    min={1}
                    onChange={(target) => update({ target })}
                    suffix="cup"
                    placeholder="Opsional"
                  />
                )}
              </Field>
              <div className="monthly-cost-compact" aria-live="polite">
                <span>Biaya bulanan</span>
                <strong>{monthlyDescription}</strong>
              </div>
            </div>

            {!menu.overheads.length && (
              <div className="empty-overhead-compact">
                <span className="quick-add-title">Tambah biaya umum:</span>
                <div
                  className="quick-add"
                  role="group"
                  aria-label="Tambah biaya umum"
                >
                  {commonCosts.map((name) => (
                    <button
                      className="btn btn-outline quick-add-chip"
                      key={name}
                      onClick={() => add(name)}
                    >
                      <PlusIcon aria-hidden="true" />
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="overhead-list-compact">
              {menu.overheads.map((row, index) => (
                <div className="overhead-item-card" key={row.id}>
                  <div className="overhead-item-header">
                    <Field label="Nama biaya">
                      {(fieldId) => (
                        <input
                          className="input input-bordered"
                          id={fieldId}
                          value={row.name}
                          onChange={(event) =>
                            change(index, { name: event.target.value })
                          }
                          placeholder="Contoh: Sewa tempat"
                        />
                      )}
                    </Field>
                    <IconAction
                      className="overhead-delete"
                      label={'Hapus biaya ' + (row.name || index + 1)}
                      onClick={() => remove(index)}
                    >
                      <TrashIcon aria-hidden="true" />
                    </IconAction>
                  </div>
                  <div className="overhead-item-inputs">
                    <Field label="Nominal">
                      {(fieldId) => (
                        <NumberInput
                          id={fieldId}
                          money

                          label={'Nominal ' + (row.name || 'biaya')}
                          value={row.amount}
                          onChange={(amount) => change(index, { amount })}
                        />
                      )}
                    </Field>
                    <Field label="Dihitung per">
                      {(fieldId) => (
                        <Choice
                          id={fieldId}

                          value={row.period}
                          onChange={(period) => change(index, { period })}
                          options={periods}
                          label={'Periode ' + (row.name || 'biaya')}
                        />
                      )}
                    </Field>
                  </div>
                </div>
              ))}
            </div>

            <div className="subpanel-footer">
              <button className="btn btn-outline" onClick={() => add()}>
                <PlusIcon aria-hidden="true" />
                Tambah biaya
              </button>
            </div>
          </div>
        </fieldset>
      </details>
    </section>
  );
}
