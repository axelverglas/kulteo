import { FaBars } from 'react-icons/fa';
import ToggleThemes from './ToggleThemes';
import Logo from './Logo';

interface HeaderProps {
  handleMobileClick: () => void;
}

export default function Header({ handleMobileClick }: HeaderProps) {
  return (
    <header className="w-full">
      <div className="container flex h-24 items-center justify-between">
        <button
          className="blog m-0 h-24 items-center justify-center md:hidden"
          onClick={handleMobileClick}
        >
          <FaBars className="text-xl hover:text-primary  dark:text-whitesmoke" />
        </button>
        <Logo className="h-auto w-44" />
        <ToggleThemes />
      </div>
    </header>
  );
}
