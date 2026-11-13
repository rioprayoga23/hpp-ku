import { Slider, Switch } from "@radix-ui/themes";
import { Field, NumberInput } from "./Fields.jsx";
import { decimal } from "../model.js";

const presets = [
  { name: "Kompetitif", value: 25 },
  { name: "Standar", value: 45 },
  { name: "Premium", value: 65 },
];

export default function Pricing({ menu, update, result }) {
  const active = menu.marginActive !== false;
  const pricing = menu.pricing;
  const cost = result.cost ?? 0;

  const displayPercent =
    pricing.customPrice && cost > 0 && result.margin !== null
      ? Number(result.margin.toFixed(2))
      : pricing.percent;

  const selectedPercent = Number(displayPercent);
  const sliderValue = Math.min(
    90,
    Math.max(0, Math.round(selectedPercent || 0))
  );

  const handlePreset = (percent) => {
    update((draft) => ({
      pricing: { ...draft.pricing, percent, customPrice: "" },
    }));
  };

  const handleSlider = ([percent]) => {
    update((draft) => ({
      pricing: { ...draft.pricing, percent, customPrice: "" },
    }));
  };

  const handlePercentChange = (percent) => {
    update((draft) => ({
      pricing: { ...draft.pricing, percent, customPrice: "" },
    }));
  };

  const handleCustomPriceChange = (val) => {
    if (val === "" || val === null) {
      update((draft) => ({
        pricing: { ...draft.pricing, customPrice: "" },
      }));
      return;
    }
    const numPrice = Number(val);
    if (cost > 0 && numPrice > 0) {
      const calculatedMargin = ((numPrice - cost) / numPrice) * 100;
      const roundedPercent = Number(
        Math.max(0, Math.min(99.99, calculatedMargin)).toFixed(2)
      );
      update((draft) => ({
        pricing: {
          ...draft.pricing,
          customPrice: numPrice,
          percent: roundedPercent,
        },
      }));
    } else {
      update((draft) => ({
        pricing: {
          ...draft.pricing,
          customPrice: numPrice,
        },
      }));
    }
  };

  return (
    <div
      className={
        "summary-subpanel pricing-subpanel" + (active ? "" : " is-inactive")
      }
      id="pricing"
    >
      <div className="subpanel-header">
        <div className="subpanel-title-group">
          <h3 className="subpanel-title">Margin keuntungan</h3>
          <span className="subpanel-meta">
            {active ? `${decimal(displayPercent)}%` : "Nonaktif"}
          </span>
        </div>
        <label className="section-toggle">
          <Switch
            size="1"
            checked={active}
            onCheckedChange={(marginActive) => update({ marginActive })}
            aria-label="Aktifkan margin keuntungan"
          />
          <span>{active ? "Aktif" : "Nonaktif"}</span>
        </label>
      </div>

      {!active ? (
        <p className="subpanel-inactive-note">
          Harga jual mengikuti total HPP (margin 0%).
        </p>
      ) : (
        <fieldset className="subpanel-fields pricing-fields" disabled={!active}>
          <div
            className="profit-presets"
            role="group"
            aria-label="Pilihan margin"
          >
            {presets.map((preset) => {
              const isSelected =
                !pricing.customPrice && selectedPercent === preset.value;
              return (
                <button
                  key={preset.name}
                  type="button"
                  className={"preset" + (isSelected ? " selected" : "")}
                  aria-pressed={isSelected}
                  onClick={() => handlePreset(preset.value)}
                >
                  <span>{preset.name}</span>
                  <strong>{preset.value}%</strong>
                </button>
              );
            })}
          </div>

          <div className="slider-field">
            <div className="slider-label-row">
              <label id="profit-slider-label">Atur margin</label>
              <span className="slider-value-badge">{sliderValue}%</span>
            </div>
            <Slider
              aria-labelledby="profit-slider-label"
              value={[sliderValue]}
              min={0}
              max={90}
              step={1}
              onValueChange={handleSlider}
            />
            <div className="slider-scale" aria-hidden="true">
              <span>0%</span>
              <span>90%</span>
            </div>
          </div>

          <div className="pricing-inputs-grid">
            <Field label="Custom harga jual">
              {(fieldId) => (
                <NumberInput
                  id={fieldId}
                  money
                  size="2"
                  label="Custom harga jual"
                  value={pricing.customPrice}
                  onChange={handleCustomPriceChange}
                  placeholder={
                    result.price ? String(result.price) : "Contoh: 15.000"
                  }
                />
              )}
            </Field>
            <Field label="Nilai margin">
              {(fieldId) => (
                <NumberInput
                  id={fieldId}
                  size="2"
                  label="Margin keuntungan"
                  value={displayPercent}
                  onChange={handlePercentChange}
                  max={99.99}
                  suffix="%"
                />
              )}
            </Field>
          </div>
        </fieldset>
      )}
    </div>
  );
}
