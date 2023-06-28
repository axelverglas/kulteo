import Link from 'next/link';
import Logo from './Logo';
import SocialLinks from './Social';

export default function Footer() {
  const footerLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À propos' },
    { path: '/contact', label: 'Contact' },
    { path: '/legal', label: 'Mentions légales' },
    { path: '/link5', label: 'Lien 5' },
    { path: '/link6', label: 'Lien 6' },
  ];

  return (
    <footer className="z-50 border-t border-grayishblue bg-slate-50 py-8 dark:border-jetdark dark:bg-black">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 pt-6 md:grid-cols-3">
          <div className="mb-8 flex justify-center md:mb-0 md:justify-normal">
            <Logo className="h-auto w-44 md:w-56" />
          </div>
          <div className="mb-8 flex justify-center md:justify-normal">
            <ul className="grid grid-cols-1 grid-rows-3 gap-2 text-center md:w-72 md:grid-cols-2 md:gap-4 md:text-left">
              {footerLinks.map(link => (
                <li key={link.path}>
                  <Link href={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8 flex justify-center md:mb-0 md:justify-normal">
            <SocialLinks />
          </div>
        </div>
        <div className="border-[0.5px] border-black dark:border-whitesmoke"></div>
        <div className="mt-8 flex items-center justify-center gap-2 text-xs dark:text-whitesmoke md:text-base">
          <p>© Copyright 2023 Kulteo</p>
          <span>|</span>
          <Link href={'/legal'}>Mentions légales</Link>
          <span>|</span>
          <Link href={'/legal'}>Politique de confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}
