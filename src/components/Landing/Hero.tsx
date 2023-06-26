import Link from 'next/link';
import Button from '../Button';

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
      <div className="container max-w-7xl">
        <h1 className="w-[30rem] font-roc text-4xl font-bold text-white md:w-[60rem] md:text-[56px] md:leading-[4.25rem]">
          Entrez dans l&apos;écosystème qui rend la culture{' '}
          <span className="rounded-xl bg-secondarylight px-2 pt-1 text-white dark:bg-primary dark:text-night md:px-3 md:pt-2">
            accessible
          </span>{' '}
          à tous
        </h1>

        <p className="mb-8 mt-4 text-white md:w-[35rem]">
          Ouvrez grand les portes de l&apos;immersion ! Laissez Kulteo vous
          transporter dans un monde où la culture prend vie sous vos yeux.
        </p>

        <Button href={'/home'}>Démarrez l&apos;aventure</Button>

        <Link
          onClick={handleScroll}
          href="#about"
          className="absolute bottom-12 left-1/2 right-1/2 flex flex-col items-center justify-center md:bottom-6"
        >
          <p className="mb-4 text-white">Suivant</p>
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
