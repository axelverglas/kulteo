import Heading from '@/components/Heading';
import Image from 'next/image';
import Link from 'next/link';
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
    <article className="mb-6 flex flex-row gap-4 last-of-type:mb-0">
      <div className="w-full sm:w-1/2 relative rounded-xl bg-night">
        <Link href={`/videos/${slug.current}`}>
          <div className="relative w-full max-h-32 rounded-xl bg-night">
            <Image
              className="w-full max-h-32 h-32 rounded-xl object-cover opacity-70"
              width={600}
              height={150}
              src={image}
              alt={`${title} image`}
            />
            <FaPlay className="absolute left-[45%] top-[40%] text-4xl text-whitesmoke" />
          </div>
        </Link>
      </div>
      <div className="w-full sm:w-1/2 flex flex-col gap-y-1 sm:gap-y-2 md:gap-y-3">
        <Link href={`/videos/${slug.current}`}>
          <Heading level="h2" size="h3">{title}
          </Heading>
        </Link>
        <p className=" text-secondarylight dark:text-primary">
          {culturalPlace}
        </p>
      </div>
    </article>
  );
}
