import Heading from '@/components/Heading';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { FaPlay } from 'react-icons/fa';
import { limitTitleLength } from '@/utils/limitTitleWords';

interface Props {
  title: string;
  image: string;
  culturalPlace: string;
  slug: {
    current: string;
  };
}

export default function VideoSuggest({
  title,
  image,
  culturalPlace,
  slug,
}: Props) {
  title = limitTitleLength(title, 15);
  return (
    <article className="mb-6 flex gap-4 last-of-type:mb-0">
      <div className="relative w-56 rounded-xl bg-night">
        <Link href={`/videos/${slug.current}`}>
          <Image
            className="max-h-32 rounded-xl object-cover opacity-70"
            width={300}
            height={150}
            src={image}
            alt={`${title} image`}
          />
        </Link>
        <MdOutlineBookmarkAdd className="absolute right-5 top-4 text-4xl text-white" />
        <FaPlay className="absolute left-[45%] top-[40%] text-4xl text-whitesmoke" />
      </div>
      <div className="flex flex-col gap-y-1">
        <Link href={`/videos/${slug.current}`}>
          <Heading level="h2" size="h4">
            {title}
          </Heading>
        </Link>
        <p className="text-lg text-secondarylight dark:text-primary">
          {culturalPlace}
        </p>
      </div>
    </article>
  );
}
