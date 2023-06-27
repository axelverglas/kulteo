import { items } from '@/components/ListItem';
import ListItem from '@/components/ListItem';
import Logo from '@/components/Logo';

interface AuthLeftSideProps {
  className?: string;
}

export default function AuthLeftSide({ className }: AuthLeftSideProps) {
  return (
    <div className={`${className} h-screen`}>
      <div className="flex flex-col justify-center pt-32">
        <div className="mx-auto">
          <Logo className="h-auto w-56" />
          <div className="flex flex-col justify-center">
            <h1 className="mb-10 mt-20 font-roc text-4xl font-bold leading-[3rem] md:w-[590px]">
              Entrez dans l&apos;écosystème qui rend la culture{' '}
              <span className="rounded-lg bg-secondarylight px-2 pb-1 pt-2 text-white dark:bg-primary dark:text-night">
                accessible
              </span>{' '}
              à tous
            </h1>
            <ul className="w-[500px]">
              {items.map((item, index) => (
                <ListItem key={index}>
                  {item.text}
                  <span className="font-semibold text-secondarylight dark:text-primary">
                    {item.emphasis}
                  </span>
                  {item.additionalText}
                </ListItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
