import { useId, useLayoutEffect, useRef } from 'react';
import { TextField, Select } from '@radix-ui/themes';
import { integer } from '../model.js';
export function NumberInput({ value, onChange, money = false, label, id, min = 0, max, suffix, invalid = false, ...props }) {
  const ref = useRef(null), caret = useRef(null);
  useLayoutEffect(() => { if (money && caret.current !== null && ref.current === document.activeElement) { ref.current.setSelectionRange(caret.current, caret.current); caret.current = null; } });
  function change(event) {
    const raw = event.target.value;
    if (!money) { onChange(raw === '' ? '' : raw); return; }
    const digitPosition = raw.slice(0, event.target.selectionStart ?? raw.length).replace(/\D/g, '').length;
    const digits = raw.replace(/\D/g, '').slice(0, 12);
    const formatted = digits ? integer(Number(digits)) : '';
    let seen = 0, pos = 0;
    while (pos < formatted.length && seen < digitPosition) { if (/\d/.test(formatted[pos])) seen++; pos++; }
    caret.current = pos;
    onChange(digits ? Number(digits) : '');
  }
  return <TextField.Root {...props} ref={ref} id={id} aria-label={label} aria-invalid={invalid || undefined} type={money ? 'text' : 'number'} inputMode={money ? 'numeric' : 'decimal'} min={money ? undefined : min} max={money ? undefined : max} step={money ? undefined : 'any'} value={money ? integer(value) : value} onChange={change} className="numeric-input" size="3">
    {money && <TextField.Slot>Rp</TextField.Slot>}{suffix && <TextField.Slot side="right">{suffix}</TextField.Slot>}
  </TextField.Root>;
}
export function Field({ label, hint, children, error, className = '' }) {
  const fieldId = useId();
  return <div className={`field ${className}`}><label htmlFor={fieldId}>{label}</label>{children(fieldId)}{hint && <small id={`${fieldId}-hint`}>{hint}</small>}{error && <small className="field-error">{error}</small>}</div>;
}
export function Choice({ value, onChange, options, label, id, size = '3' }) {
  return <Select.Root value={String(value)} onValueChange={onChange} size={size}><Select.Trigger id={id} aria-label={label} /><Select.Content position="popper" align="start" collisionPadding={8} className="compact-select-content">{options.map(option => { const o = typeof option === 'string' ? { value: option, label: option } : option; return <Select.Item key={o.value} value={String(o.value)}>{o.label}</Select.Item>; })}</Select.Content></Select.Root>;
}
