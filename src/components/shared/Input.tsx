import type { InputHTMLAttributes } from 'react';

import { Divider } from './Divider';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
  suffix?: string;
}

export function Input({ prefix, suffix, ...props }: InputProps) {
  return (
    <div className="flex items-center rounded-2xl bg-input p-4 shadow-[4px_4px_18px_0_rgba(0,0,0,0.25)]">
      {prefix && (
        <>
          <span className="mr-2 text-gray-500">{prefix}</span>{' '}
          <Divider orientation="vertical" />
        </>
      )}
      <input
        {...props}
        className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
      />
      {suffix && (
        <>
          <Divider orientation="vertical" />
          <span className="text-sm font-medium text-muted-foreground">
            {suffix}
          </span>
        </>
      )}
    </div>
  );
}
