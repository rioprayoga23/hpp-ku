import { useId, useLayoutEffect, useRef } from 'react';
import { integer } from '../model.js';

export function NumberInput({
  value,
  onChange,
  money = false,
  label,
  id,
  min = 0,
  max,
  suffix,
  invalid = false,
  className = '',
  ...props
}) {
  const ref = useRef(null);
  const caret = useRef(null);
  useLayoutEffect(() => {
    if (
      money &&
      caret.current !== null &&
      ref.current === document.activeElement
    ) {
      ref.current.setSelectionRange(caret.current, caret.current);
      caret.current = null;
    }
  });
  function change(event) {
    const raw = event.target.value;
    if (!money) return onChange(raw);
    const digitPosition = raw
      .slice(0, event.target.selectionStart ?? raw.length)
      .replace(/\D/g, '').length;
    const digits = raw.replace(/\D/g, '').slice(0, 12);
    const formatted = digits ? integer(Number(digits)) : '';
    let seen = 0;
    let pos = 0;
    while (pos < formatted.length && seen < digitPosition) {
      if (/\d/.test(formatted[pos])) seen += 1;
      pos += 1;
    }
    caret.current = pos;
    onChange(digits ? Number(digits) : '');
  }
  return (
    <label
      className={`number-field ${money ? 'has-prefix' : ''} ${suffix ? 'has-suffix' : ''} ${className}`.trim()}
    >
      {money && (
        <span className="input-affix" aria-hidden="true">
          Rp
        </span>
      )}
      <input
        {...props}
        ref={ref}
        id={id}
        aria-label={label}
        aria-invalid={invalid || undefined}
        className="input input-bordered w-full"
        type={money ? 'text' : 'number'}
        inputMode={money ? 'numeric' : 'decimal'}
        min={money ? undefined : min}
        max={money ? undefined : max}
        step={money ? undefined : 'any'}
        value={money ? integer(value) : value}
        onChange={change}
      />
      {suffix && (
        <span className="input-affix suffix" aria-hidden="true">
          {suffix}
        </span>
      )}
    </label>
  );
}

export function Field({ label, hint, children, error, className = '' }) {
  const fieldId = useId();
  return (
    <div className={`field ${className}`.trim()}>
      <label htmlFor={fieldId}>{label}</label>
      {children(fieldId)}
      {hint && <small id={`${fieldId}-hint`}>{hint}</small>}
      {error && (
        <small className="field-error" role="alert">
          {error}
        </small>
      )}
    </div>
  );
}

export function Choice({
  value,
  onChange,
  options,
  label,
  id,
  disabled = false,
  className = '',
}) {
  return (
    <select
      id={id}
      value={String(value ?? '')}
      onChange={(event) => onChange(event.target.value)}
      disabled={disabled}
      aria-label={label}
      className={`select select-bordered w-full ${className}`.trim()}
    >
      {options.map((option) => {
        const item =
          typeof option === 'string'
            ? { value: option, label: option }
            : option;
        return (
          <option key={item.value} value={String(item.value)}>
            {item.label}
          </option>
        );
      })}
    </select>
  );
}
