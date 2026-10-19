import { Callout, Slider, Switch } from "@radix-ui/themes";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Field, NumberInput } from "./Fields.jsx";

const presets = [
  { name: "Kompetitif", value: 25 },
  { name: "Standar", value: 45 },
  { name: "Premium", value: 65 },
];

export default function Pricing({
  pricing,
  onChange,
  result,
  active,
  onActiveChange,
}) {
  const change = (percent) => onChange({ ...pricing, percent });
  const selectedPercent = Number(pricing.percent);
  const sliderValue = Math.min(90, Math.max(0, selectedPercent || 0));

  return (
    <section
      className={
        "panel pricing-panel section-panel" + (active ? "" : " is-inactive")
      }
      id="pricing"
      aria-labelledby="pricing-title"
    >
      <div className="panel-heading section-panel-heading">
        <h2 id="pricing-title">Margin keuntungan</h2>
        <label className="section-toggle">
          <Switch
            size="1"
            checked={active}
            onCheckedChange={onActiveChange}
            aria-label="Aktifkan margin keuntungan"
          />
          <span>{active ? "Aktif" : "Nonaktif"}</span>
        </label>
      </div>

      <div className="panel-body pricing-body">
        {!active && (
          <p className="inactive-note">Harga jual mengikuti total HPP.</p>
        )}
        <fieldset className="section-fields pricing-fields" disabled={!active}>
          <div
            className="profit-presets"
            role="group"
            aria-label="Pilihan margin"
          >
            {presets.map((preset) => {
              const isSelected = selectedPercent === preset.value;
              return (
                <button
                  key={preset.name}
                  type="button"
                  className={"preset" + (isSelected ? " selected" : "")}
                  aria-pressed={isSelected}
                  onClick={() => change(preset.value)}
                >
                  <span>{preset.name}</span>
                  <strong>{preset.value}%</strong>
                </button>
              );
            })}
          </div>

          <div className="percentage-control">
            <div className="slider-field">
              <label id="profit-slider-label">Atur margin</label>
              <Slider
                aria-labelledby="profit-slider-label"
                value={[sliderValue]}
                min={0}
                max={90}
                step={1}
                onValueChange={([percent]) => change(percent)}
              />
              <div className="slider-scale" aria-hidden="true">
                <span>0%</span>
                <span>90%</span>
              </div>
            </div>
            <Field label="Nilai margin">
              {(fieldId) => (
                <NumberInput
                  id={fieldId}
                  label="Margin keuntungan"
                  value={pricing.percent}
                  onChange={change}
                  max={99.99}
                  suffix="%"
                />
              )}
            </Field>
          </div>
        </fieldset>
      </div>
    </section>
  );
}
