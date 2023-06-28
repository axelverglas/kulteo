import { siteConfig } from '@/config';
import Image from 'next/image';

export default function About() {
  const paragraphs = [
    'Découvrez notre plateforme qui vous permettra de découvrir des lieux et événements culturels en ligne depuis chez vous. Et ce n’est pas tout :)',
    'Discutez entre “Kulteove”, planifiez et déplacez-vous ensemble avec d’autres passionnés.',
    'C’est le moment de s’embarquer dans une aventure immersive où la culture et la découverte se rencontrent et deviennent une véritable passerelle vers le savoir, l’échange et l’enrichissement personnel.',
  ];
  return (
    <section id="about" className="relative bg-primary py-12 md:py-24">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-roc text-3xl text-black md:w-full md:text-4xl">
              Mais c&apos;est quoi
              <span className="mx-1 rounded-lg bg-black px-2 pt-1 text-primary">
                {siteConfig.name}
              </span>
              ?
            </h2>
            <Paragraphs items={paragraphs} />
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

function Paragraphs({ items }: { items: string[] }) {
  return (
    <>
      {items.map((item, index) => (
        <Paragraph
          key={index}
          text={item}
          isLast={index === items.length - 1}
        />
      ))}
    </>
  );
}

function Paragraph({ text, isLast }: { text: string; isLast?: boolean }) {
  return <p className={isLast ? 'text-black' : 'mb-5 text-black'}>{text}</p>;
}
