export default function IconAction({
  label,
  className = '',
  children,
  ...props
}) {
  return (
    <button
      {...props}
      type="button"
      className={`btn btn-ghost btn-square icon-action ${className}`.trim()}
      aria-label={label}
      title={label}
    >
      {children}
    </button>
  );
}
