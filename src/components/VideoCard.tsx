import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { FaPlay } from 'react-icons/fa';
import Heading from './Heading';
import { limitTitleLength } from '@/utils/limitTitleWords';

interface VideoCardProps {
  title: string;
  culturalPlace: string;
  image: string;
  url: string;
  slug: string;
}

export default function VideoCard({
  title,
  culturalPlace,
  image,
  slug,
}: VideoCardProps) {
  title = limitTitleLength(title, 20);
  return (
    <article className="flex h-auto w-full flex-col justify-between gap-y-6">
      <div className="relative w-full rounded-xl bg-night">
        <Link href={`/videos/${slug}`}>
          <Image
            className="max-h-60 rounded-xl object-cover opacity-70"
            width={600}
            height={300}
            src={image}
            alt={title}
          />
        </Link>
        <FaPlay className="absolute left-[45%] top-[40%] text-4xl text-whitesmoke" />
      </div>
      <div className="flex flex-col gap-y-1">
        <Link href={`/videos/${slug}`}>
          <Heading level="h3">{title}</Heading>
        </Link>
        <p className="text-secondarylight dark:text-primary">{culturalPlace}</p>
      </div>
    </article>
  );
}
