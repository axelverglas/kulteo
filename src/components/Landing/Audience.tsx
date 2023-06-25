import Image from 'next/image';
import ListItem from '../ListItem';
import { siteConfig } from '@/config';

export default function Solution() {
  return (
    <section className="bg-slate-50 py-12 dark:bg-black md:py-24">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 items-center md:grid-cols-2">
          <div className="relative hidden items-center justify-center md:flex">
            <Image
              className="animate-swing"
              src="/img/about_img.webp"
              alt="About"
              width={300}
              height={300}
            />
          </div>
          <div>
            <h2 className="font bold mb-10 font-roc text-3xl md:text-4xl">
              À qui s&apos;adresse
              <span className="mx-1 rounded-lg bg-secondarylight px-2 pt-1 text-white dark:bg-primary dark:text-night">
                {siteConfig.name}
              </span>
            </h2>
            <ul className="mt-8">
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
          </div>
        </div>
      </div>
    </section>
  );
}
