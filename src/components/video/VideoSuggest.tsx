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
    <article className="mb-6 flex gap-4 last-of-type:mb-0">
      <div className="relative rounded-xl bg-night">
        <Link href={`/videos/${slug.current}`}>
          <div className="relative rounded-xl bg-night">
            <Image
              className="max-h-32 w-48 rounded-xl object-cover opacity-70" // Ajoutez la classe "w-40" pour définir une largeur fixe de 40 (ajustez-la selon vos besoins)
              width={600}
              height={150}
              src={image}
              alt={`${title} image`}
            />
            <FaPlay className="absolute left-[45%] top-[40%] text-4xl text-whitesmoke" />
          </div>
        </Link>
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
