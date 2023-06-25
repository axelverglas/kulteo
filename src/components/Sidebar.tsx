import Link from 'next/link';
import { useEffect, useRef } from 'react';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { FaBars, FaCalculator } from 'react-icons/fa';
import { CloseIcon, ContactIcon, MuseumsIcon } from '@/components/Icons';
import clsx from 'clsx';
import { useRouter } from 'next/router';

const navigation = [
  { name: 'Accueil', href: '/home', icon: MuseumsIcon },
  { name: 'Contact', href: '/contact', icon: ContactIcon },
];

interface SidebarProps {
  mdUp: boolean;
  open: boolean;
  isMobileSidebarOpen: boolean;
  setMobileSidebarOpen: (open: boolean) => void;
  handleButtonClick: () => void;
  handleMobileClick: () => void;
}

function NavigationItem({
  item,
  open,
}: {
  item: (typeof navigation)[0];
  open: boolean;
}) {
  const router = useRouter();
  const isCurrent = router.pathname === item.href;
  return (
    <li key={item.name}>
      <Link
        href={item.href}
        className="relative flex items-center rounded-lg px-2 py-[10px] text-lg font-medium"
      >
        <div className="inline-flex flex-shrink px-0 py-1">
          {item.icon && (
            <item.icon
              className={clsx(
                'mr-4 h-6 w-6',
                isCurrent
                  ? 'stroke-secondarylight dark:stroke-primary'
                  : ' stroke-night dark:stroke-whitesmoke'
              )}
            />
          )}
        </div>
        {open && <span className="mt-1 whitespace-nowrap">{item.name}</span>}
      </Link>
    </li>
  );
}

export default function Sidebar({
  mdUp,
  open,
  isMobileSidebarOpen,
  setMobileSidebarOpen,
  handleButtonClick,
  handleMobileClick,
}: SidebarProps) {
  const sidebarRef = useRef(null);

  useOnClickOutside(sidebarRef, () => {
    if (!mdUp && isMobileSidebarOpen) {
      setMobileSidebarOpen(false);
    }
  });

  useEffect(() => {
    if (isMobileSidebarOpen) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [isMobileSidebarOpen]);

  return (
    <>
      {mdUp && (
        <div className={`${open ? 'w-[270px] flex-shrink-0' : 'w-[85px]'}`}>
          <aside
            className={`${
              open ? 'w-[270px]' : 'w-[85px]'
            } sticky left-0 top-0 z-50 box-border flex h-full flex-col overflow-y-auto border-r border-grayishblue bg-slate-50 shadow-light outline-0 dark:border-jetdark dark:bg-black dark:shadow-night`}
          >
            <div className="flex flex-col overflow-y-auto">
              <nav className="fixed px-6">
                <button
                  className="m-0 hidden h-24 items-center justify-center p-2 md:flex"
                  onClick={handleButtonClick}
                >
                  <FaBars className="h-6 w-6 hover:text-primary  dark:text-whitesmoke" />
                </button>
                <ul className="flex flex-col gap-2 overflow-hidden">
                  {navigation.map(item => (
                    <NavigationItem key={item.name} item={item} open={open} />
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      )}

      {!mdUp && (
        <aside
          ref={sidebarRef}
          className={`${
            isMobileSidebarOpen ? 'block' : 'hidden'
          } fixed left-0 top-0 z-50 box-border flex h-full w-[270px] flex-col overflow-y-auto border-r border-grayishblue bg-slate-50 outline-0 transition-all duration-300 ease-in-out dark:border-r dark:border-jetdark dark:bg-night`}
        >
          <div className="flex flex-col overflow-y-auto">
            <nav className="container">
              <button
                className="m-0 h-24 items-center justify-center p-2"
                onClick={handleMobileClick}
              >
                <CloseIcon className="h-6 w-6 hover:text-primary  dark:text-whitesmoke" />
              </button>
              <ul className="flex flex-col gap-2 overflow-hidden">
                {navigation.map(item => (
                  <NavigationItem key={item.name} item={item} open={true} />
                ))}
              </ul>
            </nav>
          </div>
        </aside>
      )}
    </>
  );
}
