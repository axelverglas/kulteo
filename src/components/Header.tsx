import { useSession } from 'next-auth/react';
import ToggleThemes from './ToggleThemes';
import Logo from './Logo';
import { MenuIcon } from './Icons';
import Account from './Account';
import Button from './Button';

import { motion } from 'framer-motion';

interface HeaderProps {
  handleMobileClick: () => void;
}

export default function Header({ handleMobileClick }: HeaderProps) {
  const { data: session } = useSession();

  return (
    <motion.div
    initial={{ y: 25, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      duration: 0.75,
    }}
  >
    <header className="w-full">
      <div className="container flex h-24 items-center justify-between">
        <button
          className="blog m-0 h-24 items-center justify-center md:hidden"
          onClick={handleMobileClick}
        >
          <MenuIcon className="h-7 w-7 stroke-night hover:stroke-secondarylight dark:stroke-whitesmoke dark:hover:stroke-primary" />
        </button>
        <Logo className="h-auto w-44" />
        <div className="flex gap-6">
          <ToggleThemes />
          {session ? (
            <Account />
          ) : (
            <Button href="/auth/login">Se connecter</Button>
          )}
        </div>
      </div>
    </header>
  </motion.div>
  );
}
