import { siteConfig } from '@/config';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="relative bg-primary py-12 md:py-24">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <div className="flex md:block">
              <h2 className="mb-6 w-52 font-roc text-3xl text-black md:w-full md:text-4xl">
                Mais c&apos;est quoi{' '}
                <span className="rounded-xl bg-black px-2 pt-1 text-primary">
                  {siteConfig.name}
                </span>{' '}
                ?
              </h2>
              <div className="ml-4 flex h-[4.5rem] w-[4.5rem] flex-col items-start md:absolute md:right-44 md:top-14 md:h-28 md:w-28">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 106 128"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.38664 100.167C90.1727 121.429 120.734 53.61 96.4355 25.6804C73.658 -0.500733 35.9618 15.1884 23.2324 33.5855C11.1222 51.0877 27.282 66.0309 39.809 51.4108C55.0537 33.6188 50.3752 12.4025 41.4792 1.66941M2.38664 100.167L29.063 83.8799M2.38664 100.167L18.7785 126.887"
                    stroke="#111111"
                    stroke-width="3"
                  />
                </svg>
              </div>
            </div>

            <p className="mb-5 text-black">
              Découvrez notre plateforme qui vous permettra de découvrir des
              lieux et événements culturels en ligne depuis chez vous. Et ce
              n’est pas tout :)
            </p>
            <p className="mb-5 text-black">
              Discutez entre “Kulteove”, planifiez et déplacez-vous ensemble
              avec d’autres passionnés.
            </p>
            <p className="text-black">
              C’est le moment de s’embarquer dans une aventure immersive où la
              culture et la découverte se rencontrent et deviennent une
              véritable passerelle vers le savoir, l’échange et l’enrichissement
              personnel.
            </p>
          </div>
          <div className="hidden items-center justify-center md:flex">
            <Image
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
