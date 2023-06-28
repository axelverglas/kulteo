import Video from '../Video';
import ListItem from '../ListItem';
import { siteConfig } from '@/config';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

export default function Solution() {
  return (
    <section className="bg-slate-50 py-12 dark:bg-black md:py-24">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <Video
              videoUrl="https://www.youtube.com/watch?v=gOoJPSM7SP8"
              width="100%"
              height="277px"
            />
          </div>
          <div>
            <h2 className="mb-10 font-roc text-3xl font-bold md:text-4xl">
              À qui s&apos;adresse
              <span className="mx-1 rounded-lg bg-secondarylight px-2 pt-1 text-white dark:bg-primary dark:text-night">
                {siteConfig.name}
              </span>
              ?
            </h2>
            <ul className="my-8">
              <ListItem>
                Vous êtes privés d&apos;accès à la culture dans votre contrée ?
              </ListItem>
              <ListItem>
                Vous ignorez avec qui percer les secrets des musées insolites de
                Paris ?
              </ListItem>
              <ListItem>
                Vous vous voyez privé de culture par les aléas du temps et du
                budget ?
              </ListItem>
            </ul>
            <Link
              href="/home"
              className="flex items-center gap-x-2 font-medium"
            >
              <HiArrowRight className="text-2xl" />
              Kulteo répond à vos besoins
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
