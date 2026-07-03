interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  spacing?: number;
}

export function Divider({
  orientation = 'horizontal',
  spacing = 16,
  className,
}: DividerProps) {
  const style =
    orientation === 'horizontal'
      ? { marginBlock: spacing }
      : { marginInline: spacing };

  const classNamesByOrientation = {
    horizontal: 'h-px',
    vertical: 'w-px',
  };

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      style={style}
      className={[
        'self-stretch bg-border',
        classNamesByOrientation[orientation],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    />
  );
}
