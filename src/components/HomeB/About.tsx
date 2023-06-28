import { siteConfig } from '@/config';
import Image from 'next/image';

export default function About() {
  const items = [
    'Vous n’avez pas accès à la culture près de chez vous ?',
    'Vous ne savez pas avec qui découvrir de nouvelles institutions culturels ?',
    'Vous ne pouvez pas vous déplacez ?',
  ];

  return (
    <section id="about" className="relative bg-primary py-12 md:py-24">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 font-roc text-3xl text-black md:w-full md:text-4xl">
              <span className="rounded-lg bg-black px-2 pt-1 text-primary">
                {siteConfig.name}
              </span>{' '}
              c&apos;est quoi ?
            </h2>

            <ul className="text-black">
              {items.map((item, index) => (
                <ListItem key={index} text={item} />
              ))}
            </ul>
          </div>
          <div className="relative hidden items-center justify-center md:flex">
            <div className="about-svg absolute right-0 top-[-20%] hidden md:block"></div>
            <Image
              className="animate-swing"
              src="/img/about_img.webp"
              alt="About"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SVGIcon() {
  return (
    <svg
      className="mr-4 h-5 w-5"
      viewBox="0 0 21 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.90119 2C7.66373 6.0462 17.0601 15.7495 18.2393 17.3756C23.9124 25.1982 -5.08324 23.5797 2.90119 16.5663C15.4978 5.5016 19.0798 2 19.5 2"
        stroke="#111111"
        strokeWidth="2.57143"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="mb-6 flex items-center">
      <div className="h-5 w-5 flex-shrink-0">
        <SVGIcon />
      </div>
      <span className="ml-2">{text}</span>
    </li>
  );
}
