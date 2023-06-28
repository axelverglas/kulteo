import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ToggleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: string;
  activeVariant: string;
}

export default function ToggleButton(props: ToggleButtonProps) {
  const { variant, activeVariant, children, ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      className={clsx(
        'w-32 cursor-pointer rounded-full py-2 outline-none md:w-40',
        variant === activeVariant
          ? 'bg-night text-whitesmoke dark:bg-primary dark:text-night'
          : 'border border-grayishblue  bg-slate-50 text-night dark:border-jetdark dark:bg-night dark:text-white'
      )}
    >
      {children}
    </button>
  );
}
