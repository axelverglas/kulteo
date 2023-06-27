import Link from 'next/link';
import { useRouter } from 'next/router';
import Heading from '@/components/Heading';
import Button from '@/components/Button';
import { ArrowLeftIcon } from '@/components/Icons';
import ToggleShare from '@/components/ToggleShare';
import { BookMarkIcon } from '@/components/Icons';
import MoreText from '@/components/MoreText';

interface InfosProps {
  title: string;
  subtitle?: string;
  description: string;
  website?: string;
  target?: string;
}

export default function Infos({
  title,
  description,
  website,
  subtitle,
}: InfosProps) {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col gap-y-6 rounded-xl border-grayishblue shadow-light dark:border-jetdark dark:shadow-night md:border md:bg-slate-50 md:px-8 md:py-12 md:dark:bg-black">
      <div className="flex items-center justify-between">
        <div className="flex gap-x-3">
          <button onClick={handleGoBack}>
            <ArrowLeftIcon className="h-6 w-6 stroke-night dark:stroke-white" />
          </button>
          <Heading level="h2">{title}</Heading>
        </div>
        <div className="flex items-center gap-x-3">
          <ToggleShare description={description} />
          <BookMarkIcon className="h-6 w-6 stroke-night dark:stroke-white" />
        </div>
      </div>

      <div>
        {subtitle && (
          <Heading
          level="h3"
          className="mb-6 font-medium text-secondarylight dark:text-primary"
        >
          {subtitle}
        </Heading>
        )}
        <MoreText text={description} />
      </div>
      {website && (
        <div>
          <Button href={website} target="_blank">
            Accéder au site
          </Button>
        </div>
      )}
    </div>
  );
}
