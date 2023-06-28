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
}

export default function VideoCard({
  title,
  culturalPlace,
  image,
  url,
}: VideoCardProps) {
  title = limitTitleLength(title, 20);
  return (
    <article className="flex h-auto w-full flex-col justify-between gap-y-6">
      <div className="relative w-full rounded-xl bg-night">
        <Link href={url}>
          <Image
            className="max-h-60 rounded-xl object-cover opacity-70"
            width={600}
            height={300}
            src={image}
            alt="oui"
          />
        </Link>
        <MdOutlineBookmarkAdd className="absolute right-5 top-4 text-4xl text-white" />
        <FaPlay className="absolute left-[45%] top-[40%] text-4xl text-whitesmoke" />
      </div>
      <div className="flex flex-col gap-y-1">
        <Link href={url}>
          <Heading level="h3">{title}</Heading>
        </Link>
        <p className="text-secondarylight">{culturalPlace}</p>
      </div>
    </article>
  );
}
