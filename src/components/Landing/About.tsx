import Image from 'next/image';
import clsx from 'clsx';

export default function About() {
  const paragraphs = [
    "Kulteo est un écosystème vibrant qui s'épanouit dans la noble mission de rendre la culture accessible à tous, bravant les chaînes de la géographie, des limites budgétaires et même des entraves du handicap.",
    'Plongez dans la plateforme ! Explorez des lieux et des événements culturels sans quitter votre foyer et découvrez une expérience extraordinaire qui transcende les limites du quotidien.',
  ];
  return (
    <section
      id="about"
      className="lg:bg-about-light lg:dark:bg-about-dark relative py-12 md:py-24"
    >
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 items-center md:grid-cols-2">
          <div>
            <h2 className="mb-10 font-roc text-3xl font-bold md:text-4xl">
              Une
              <span className="mx-1 rounded-lg bg-secondarylight px-2 pt-1 text-white dark:bg-primary dark:text-night">
                révélation
              </span>
              cultuelle
            </h2>
            <Paragraphs items={paragraphs} />
          </div>
          <div className="relative hidden items-center justify-center md:flex">
            <div className="about-svg-light dark:about-svg-dark absolute right-0 top-[-20%] hidden lg:block"></div>
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
  const paragraphClass = clsx({
    'mb-5': !isLast,
  });

  return <p className={paragraphClass}>{text}</p>;
}
