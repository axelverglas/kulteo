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
            <h2 className="mb-6 w-96 font-roc text-3xl text-black md:w-full md:text-4xl">
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
            <svg
              className="absolute right-0 top-[-20%] hidden h-28 w-28 md:block"
              viewBox="0 0 106 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.38664 100.167C90.1727 121.429 120.734 53.61 96.4355 25.6804C73.658 -0.500733 35.9618 15.1884 23.2324 33.5855C11.1222 51.0877 27.282 66.0309 39.809 51.4108C55.0537 33.6188 50.3752 12.4025 41.4792 1.66941M2.38664 100.167L29.063 83.8799M2.38664 100.167L18.7785 126.887"
                stroke="#111111"
                strokeWidth="3"
              />
            </svg>
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
    <li className="mb-6 flex">
      <SVGIcon />
      {text}
    </li>
  );
}
