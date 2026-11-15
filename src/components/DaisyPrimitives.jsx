import { useEffect } from 'react';

const buttonClasses = {
  default: 'btn btn-primary',
  outline: 'btn btn-outline',
  ghost: 'btn btn-ghost',
  secondary: 'btn btn-secondary',
  destructive: 'btn btn-error',
  link: 'btn btn-link',
};

export function Button({
  variant = 'default',
  size = 'default',
  className = '',
  asChild = false,
  children,
  ...props
}) {
  const sizeClass =
    size === 'icon'
      ? 'btn-square'
      : size === 'sm'
        ? 'btn-sm'
        : size === 'lg'
          ? 'btn-lg'
          : '';
  const classes =
    `${buttonClasses[variant] || buttonClasses.default} ${sizeClass} ${className}`.trim();
  if (asChild) return <span className={classes}>{children}</span>;
  return (
    <button {...props} type={props.type || 'button'} className={classes}>
      {children}
    </button>
  );
}

export function Input({ className = '', ...props }) {
  return (
    <input
      {...props}
      className={`input input-bordered w-full ${className}`.trim()}
    />
  );
}

export function AlertDialog({ open, onOpenChange, children }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onOpenChange(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onOpenChange]);
  if (!open) return null;
  return (
    <div className="modal modal-open" role="alertdialog" aria-modal="true">
      {children}
    </div>
  );
}
export function AlertDialogContent({ children }) {
  return <div className="modal-box">{children}</div>;
}
export function AlertDialogHeader({ children }) {
  return <div>{children}</div>;
}
export function AlertDialogFooter({ children }) {
  return <div className="modal-action">{children}</div>;
}
export function AlertDialogTitle({ children }) {
  return <h2 className="text-lg font-semibold">{children}</h2>;
}
export function AlertDialogDescription({ children }) {
  return <p className="py-3 text-sm text-base-content/70">{children}</p>;
}
export function AlertDialogCancel({ children, ...props }) {
  return (
    <button {...props} type="button" className="btn btn-ghost">
      {children}
    </button>
  );
}
export function AlertDialogAction({ children, className = '', ...props }) {
  const variant = className.includes('btn-error')
    ? 'btn btn-error'
    : 'btn btn-primary';
  return (
    <button
      {...props}
      type="button"
      className={`${variant} ${className}`.trim()}
    >
      {children}
    </button>
  );
}
