import { IconButton } from '@radix-ui/themes';

/** Shared, labeled icon-only action used by repeatable rows. */
export default function IconAction({ label, className = '', children, ...props }) {
  return (
    <IconButton
      {...props}
      className={`icon-action ${className}`.trim()}
      variant="ghost"
      color="gray"
      aria-label={label}
      title={label}
    >
      {children}
    </IconButton>
  );
}
