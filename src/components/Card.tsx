import Image from 'next/image';
import Link from 'next/link';
import Heading from './Heading';
import { BookMarkIcon, LocationIcon } from './Icons';
import { limitTitleWords } from '@/utils/limitTitleWords';

interface CardProps {
  title: string;
  type: string;
  description: string;
  image: string;
  address: string;
  link: string;
}

function shortenDescription(desc: string, wordLimit: number) {
  return desc.split(' ').slice(0, wordLimit).join(' ') + '...';
}

export default function Card({
  type,
  title,
  description,
  image,
  address,
  link,
}: CardProps) {
  const shortDescription = shortenDescription(description, 20);
  title = limitTitleWords(title, 3);
  return (
    <article className="flex w-full flex-col gap-y-6 rounded-xl border border-grayishblue bg-slate-50 p-4 shadow-light dark:border-jetdark dark:bg-black dark:shadow-night">
      <div className="relative">
        <Link href={link}>
          <Image
            className="max-h-48 rounded-xl object-cover object-bottom md:max-h-36"
            width={693}
            height={288}
            src={image}
            alt={title}
          />
        </Link>
        <span className="absolute left-3 top-3 rounded-lg bg-night/80 px-2 pb-0.5 pt-1 text-whitesmoke dark:bg-whitesmoke/80 dark:text-night">
          {type}
        </span>
      </div>

      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center justify-between">
            <Link href={link}>
              <Heading title={title} level="h3">
                {title}
              </Heading>
            </Link>
            <BookMarkIcon className="h-6 w-6 stroke-night dark:stroke-white" />
          </div>
          <p className="text-night dark:text-white">{shortDescription}</p>
          <div className="flex items-center gap-x-2">
            <LocationIcon className="h-6 w-6 stroke-night dark:stroke-white" />
            <p className="text-night dark:text-white">{address}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
