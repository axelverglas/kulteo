import { siteConfig } from '@/config';
import Image from 'next/image';

export default function About() {
  return (
    <section id='about' className="bg-primary py-12 md:py-24">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-roc text-3xl text-black md:text-4xl">
              Mais c&apos;est quoi{' '}
              <span className="rounded-xl bg-black px-2 pt-1 text-primary">
                {siteConfig.name}
              </span>{' '}
              ?
            </h2>

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
