import { useState, useEffect, Fragment } from 'react';
import { useTheme } from 'next-themes';
import { Listbox } from '@headlessui/react';
import clsx from 'clsx';
import { PcIcon, SunIcon, MoonIcon } from '@/components/Icons';

const themes = [
  {
    value: 'system',
    label: 'System',
    icon: PcIcon,
  },
  {
    value: 'light',
    label: 'Light',
    icon: SunIcon,
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: MoonIcon,
  },
];

export default function ToggleThemes({ panelClassName = 'mt-4' }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <Listbox value={theme} onChange={setTheme}>
      <Listbox.Label className="sr-only">Theme</Listbox.Label>
      <div className="relative">
        <Listbox.Button
          type="button"
          className="rounded-lg border border-grayishblue bg-slate-50 p-2 shadow-light dark:border-jetdark dark:bg-black dark:shadow-night"
        >
          <span className="dark:hidden">
            <SunIcon className="h-6 w-6" selected={theme !== 'system'} />
          </span>
          <span className="hidden dark:inline">
            <MoonIcon className="h-6 w-6" selected={theme !== 'system'} />
          </span>
        </Listbox.Button>
        <Listbox.Options
          className={clsx(
            'absolute right-0 top-full z-50 w-36 overflow-hidden rounded-lg border bg-slate-50 p-1 text-sm font-semibold text-night shadow-lg dark:border-jetdark dark:bg-black dark:text-whitesmoke',
            panelClassName
          )}
        >
          {themes.map(({ value, label, icon: Icon }) => (
            <Listbox.Option key={value} value={value} as={Fragment}>
              {({ active, selected }) => (
                <li
                  className={clsx(
                    'flex cursor-pointer items-center rounded-lg px-2 py-1',
                    selected && 'text-secondarylight dark:text-primary',
                    active && 'bg-slate-100 dark:bg-jetdark'
                  )}
                >
                  <Icon selected={selected} className="mr-2 h-6 w-6" />
                  {label}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
