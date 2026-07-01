import type { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'ghost' | 'icon';
  icon?: LucideIcon;
}

const baseClasses =
  'flex cursor-pointer items-center justify-center font-medium text-sm gap-2 px-4 py-3 transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50';

const variantClasses: Partial<Record<ButtonProps['variant'], string>> = {
  primary: 'bg-primary text-primary-foreground font-semibold rounded-xl',
  secondary: 'bg-secondary-button border border-border rounded-3xl',
  ghost: 'rounded-lg text-foreground',
};

export default function Button({
  children,
  variant,
  className,
  icon: IconComponent,
  ...props
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={[baseClasses, variantClasses[variant], className].join(' ')}
      {...props}
    >
      {IconComponent && <IconComponent size={20} />}
      {children}
    </button>
  );
}
