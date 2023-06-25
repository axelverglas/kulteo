import React from 'react';
import clsx from 'clsx';

interface FilterButtonProps {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

export default function FilterButton({
  active,
  children,
  ...props
}: FilterButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        'w-40 cursor-pointer rounded-full py-2 outline-none',
        active
          ? 'bg-night text-whitesmoke dark:bg-primary dark:text-night'
          : 'border border-grayishblue  bg-slate-50 text-night dark:border-jetdark dark:bg-night dark:text-white'
      )}
    >
      {children}
    </button>
  );
}
