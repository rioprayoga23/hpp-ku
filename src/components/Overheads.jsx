import { Button, Switch, TextField } from "@radix-ui/themes";
import {
  ChevronDownIcon,
  PlusIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { Field, Choice, NumberInput } from "./Fields.jsx";
import IconAction from "./IconAction.jsx";
import { id, rupiah } from "../model.js";

const commonCosts = ["Sewa tempat", "Gaji karyawan", "Listrik & air"];
const periods = [
  { value: "month", label: "Bulan" },
  { value: "portion", label: "Cup" },
];

export default function Overheads({ menu, update, result, notify }) {
  const active = menu.overheadsActive !== false;
  const setRows = (overheads) =>
    update((draft) => ({
      overheads:
        typeof overheads === "function"
          ? overheads(draft.overheads)
          : overheads,
    }));

  const change = (index, patch) =>
    setRows(menu.overheads.map((row, i) => (i === index ? { ...row, ...patch } : row)));

  const add = (name = "") =>
    setRows([
      ...menu.overheads,
      { id: id(), name, amount: "", period: "month" },
    ]);

  const remove = (index) => {
    const removed = menu.overheads[index];
    setRows(menu.overheads.filter((_, i) => i !== index));
    notify("Biaya dihapus.", () =>
      setRows((current) => {
        const next = [...current];
        next.splice(Math.min(index, next.length), 0, removed);
        return next;
      }),
    );
  };

  const monthlyDescription =
    result.monthly > 0 && Number(menu.target) > 0
      ? rupiah(result.monthly) + " ÷ " + Number(menu.target).toLocaleString("id-ID") + " cup"
      : result.monthly > 0
        ? "Belum dialokasikan"
        : rupiah(0);

  return (
    <section
      className={"panel section-panel overhead-panel" + (active ? "" : " is-inactive")}
      id="overheads"
      aria-labelledby="overheads-title"
    >
      <div className="panel-heading section-panel-heading">
        <h2 id="overheads-title">Biaya operasional</h2>
        <label className="section-toggle">
          <Switch
            size="1"
            checked={active}
            onCheckedChange={(overheadsActive) => update({ overheadsActive })}
            aria-label="Aktifkan biaya operasional"
          />
          <span>{active ? "Aktif" : "Nonaktif"}</span>
        </label>
      </div>

      <div className="section-panel-meta">
        <span>Opsional</span>
        <strong>{active ? rupiah(result.overhead) + " / cup" : "Tidak dihitung"}</strong>
      </div>

      <details className="section-details">
        <summary>
          <span>Atur biaya</span>
          <ChevronDownIcon aria-hidden="true" />
        </summary>
        <fieldset className="section-fields overhead-fields" disabled={!active}>
          <div className="disclosure-body">
            <div className="target-block">
              <Field label="Target cup / bulan">
                {(fieldId) => (
                  <NumberInput
                    id={fieldId}
                    label="Target cup per bulan, opsional"
                    value={menu.target}
                    min={1}
                    onChange={(target) => update({ target })}
                    suffix="cup"
                    placeholder="Opsional"
                  />
                )}
              </Field>
              <div className="monthly-cost" aria-live="polite">
                <span>Biaya bulanan</span>
                <strong>{monthlyDescription}</strong>
              </div>
            </div>

            {!menu.overheads.length && (
              <div className="empty-overhead">
                <div className="quick-add" role="group" aria-label="Tambah biaya umum">
                  {commonCosts.map((name) => (
                    <Button
                      key={name}
                      className="quick-add-chip"
                      size="2"
                      variant="outline"
                      color="gray"
                      onClick={() => add(name)}
                    >
                      <PlusIcon aria-hidden="true" />
                      {name}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <div className="overhead-list">
              {menu.overheads.map((row, index) => (
                <div className="overhead-row" key={row.id}>
                  <Field label="Nama biaya">
                    {(fieldId) => (
                      <TextField.Root
                        size="3"
                        id={fieldId}
                        value={row.name}
                        onChange={(event) =>
                          change(index, { name: event.target.value })
                        }
                        placeholder="Contoh: Sewa tempat"
                      />
                    )}
                  </Field>
                  <Field label="Nominal">
                    {(fieldId) => (
                      <NumberInput
                        id={fieldId}
                        money
                        label={"Nominal " + (row.name || "biaya")}
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
                        label={"Periode " + (row.name || "biaya")}
                      />
                    )}
                  </Field>
                  <IconAction
                    className="overhead-delete"
                    label={"Hapus biaya " + (row.name || index + 1)}
                    onClick={() => remove(index)}
                  >
                    <TrashIcon aria-hidden="true" />
                  </IconAction>
                </div>
              ))}
            </div>

            <div className="panel-footer inline-footer">
              <Button size="2" variant="soft" onClick={() => add()}>
                <PlusIcon aria-hidden="true" />
                Tambah biaya
              </Button>
            </div>
          </div>
        </fieldset>
      </details>
    </section>
  );
}
