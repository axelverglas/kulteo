import { siteConfig } from '@/config';
import Image from 'next/image';

export default function About() {
  const paragraphs = [
    'Découvrez notre plateforme qui vous permettra de découvrir des lieux et événements culturels en ligne depuis chez vous. Et ce n’est pas tout :)',
    'Discutez entre “Kulteove”, planifiez et déplacez-vous ensemble avec d’autres passionnés.',
    'C’est le moment de s’embarquer dans une aventure immersive où la culture et la découverte se rencontrent et deviennent une véritable passerelle vers le savoir, l’échange et l’enrichissement personnel.',
  ];
  return (
    <section id="about" className="py-12 md:py-24">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-1 hidden items-center md:flex">
            <Image
              src="/img/about2_img.webp"
              alt="About"
              width={200}
              height={150}
            />
          </div>
          <div className="col-span-2 flex w-full flex-col justify-center md:w-[570px]">
            <h2 className="mb-6 font-roc text-3xl text-white md:text-4xl">
              <span className="rounded-lg bg-primary px-2 pt-1 text-black">
                {siteConfig.name}
              </span>{' '}
              c&apos;est quoi ?
            </h2>

            <Paragraphs items={paragraphs} />
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
  return <p className={isLast ? 'text-white' : 'mb-5 text-white'}>{text}</p>;
}
