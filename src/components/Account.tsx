import { signOut, useSession } from 'next-auth/react';
import { Listbox } from '@headlessui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { FiSettings, FiLogOut } from 'react-icons/fi';

const options = [
  { label: 'Accéder au profil', value: 'settings', icon: FiSettings },
  { label: 'Déconnexion', value: 'logout', icon: FiLogOut },
];

export default function UserMenu() {
  const { data: session } = useSession();
  const Router = useRouter();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <Listbox
      value={null}
      onChange={value => {
        if (value === 'settings') {
          Router.push('/settings');
        } else if (value === 'logout') {
          handleSignOut();
        }
      }}
    >
      <Listbox.Label className="sr-only">User menu</Listbox.Label>
      <div className="relative">
        <Listbox.Button className="rounded-lg">
          <Image
            src={session?.user?.image || '/img/default-avatar.webp'}
            alt="Avatar"
            className="rounded-full"
            height={42}
            width={42}
          />
        </Listbox.Button>
        <Listbox.Options
          className={clsx(
            'absolute right-0 top-full z-50 w-48 overflow-hidden rounded-lg border bg-slate-50 p-2 text-sm font-semibold text-night shadow-lg dark:border-jetdark dark:bg-black dark:text-whitesmoke',
            'mt-4'
          )}
        >
          {options.map(option => (
            <Listbox.Option
              key={option.value}
              value={option.value}
              className="flex cursor-pointer items-center rounded-lg px-2 py-2 hover:bg-slate-100 dark:hover:bg-jetdark"
            >
              {option.icon && <option.icon className="mr-2 h-5 w-5" />}
              {option.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
