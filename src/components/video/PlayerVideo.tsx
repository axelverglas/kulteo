import Heading from '@/components/Heading';
import { ArrowLeftIcon } from '@/components/Icons';
import ToggleShare from '@/components/ToggleShare';
import { BookMarkIcon } from '@/components/Icons';
import Video from '../Video';
import { useRouter } from 'next/router';

interface Props {
  title: string;
  url: string;
  culturalPlace: string;
}

export default function VideoSingle({ title, url, culturalPlace }: Props) {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex gap-x-3">
          <button onClick={handleBack}>
            <ArrowLeftIcon className="h-6 w-6 stroke-night dark:stroke-white" />
          </button>
          <Heading level="h1" size="h2">
            {title}
          </Heading>
        </div>
        <div className="flex items-center gap-x-3">
          <ToggleShare description={title} />
        </div>
      </div>
      <div className="mb-4">
        <Video videoUrl={url} width="100%" height="457px" />
      </div>
      <p className="mb-6 text-xl font-medium text-secondarylight dark:text-primary">
        {culturalPlace}
      </p>
    </>
  );
}
