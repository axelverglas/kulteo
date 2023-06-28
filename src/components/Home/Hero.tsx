import { siteConfig } from '@/config';
import Link from 'next/link';

function handleScroll(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();

  const targetElement = document.querySelector('#about');
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Hero() {
  return (
    <section className="hero relative flex h-screen min-h-screen flex-col justify-center">
      <div className="container max-w-6xl">
        <h1 className="w-[20rem] font-roc text-4xl leading-[3rem] md:w-[48rem] md:text-6xl md:leading-[4.25rem]">
          Rendre la culture{' '}
          <span className="rounded-xl bg-primary px-2 pt-1 text-black md:px-3 md:pt-2">
            accessible
          </span>
          <span className="block md:ml-4 md:inline">
            c&apos;est possible avec {siteConfig.name}
          </span>
        </h1>

        <p className="mb-8 mt-4 md:w-[30rem]">
          Offrez-vous une expérience immersive à portée de clic : découverte,
          rencontre et partage.
        </p>

        <Link
          onClick={handleScroll}
          href={'#about'}
          className="inline-block rounded-xl bg-secondary px-4 pb-2 pt-2 text-black transition-all hover:bg-white md:pb-3 md:pt-4"
        >
          Explorer {siteConfig.name} !
        </Link>

        <Link
          onClick={handleScroll}
          href="#about"
          className="absolute bottom-12 left-1/2 right-1/2 flex flex-col items-center justify-center md:bottom-6"
        >
          <p className="mb-4">Suivant</p>
          <svg
            className="animate-moveUp"
            width="46"
            height="39"
            viewBox="0 0 46 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.6909 26.6423L24.0405 36.2927C23.65 36.6833 23.0168 36.6833 22.6263 36.2927L2.0001 15.6665"
              stroke="#F4F4F4"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M12.9619 13.1304L22.455 22.6239C22.8465 23.0153 23.4814 23.0143 23.8716 22.6215L44.3572 2"
              stroke="#F4F4F4"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
