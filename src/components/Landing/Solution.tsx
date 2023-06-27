import Image from 'next/image';
import ListItem from '../ListItem';
import { siteConfig } from '@/config';
import Button from '../Button';

export default function Solution() {
  return (
    <section className="lg:bg-solution-light lg:dark:bg-solution-dark py-12 md:py-24">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <h2 className="mb-10 font-roc text-3xl font-bold md:text-4xl">
              <span className="mx-1 rounded-lg bg-secondarylight px-2 pt-1 text-white dark:bg-primary dark:text-night">
                {siteConfig.name}
              </span>
              à la solution !
            </h2>
            <ul className="my-8 md:w-[520px]">
              <ListItem>
                Accédez à un{' '}
                <span className="font-semibold text-secondarylight dark:text-primary">
                  annuaire
                </span>{' '}
                étincelant, dévoilant des joyaux culturels et des événements qui
                vous feront vibrer
              </ListItem>
              <ListItem>
                Succombez aux visites en{' '}
                <span className="font-semibold text-secondarylight dark:text-primary">
                  live
                </span>{' '}
                et en{' '}
                <span className="font-semibold text-secondarylight dark:text-primary">
                  rédiffusion
                </span>{' '}
                puis émerveillez-vous avec des{' '}
                <span className="font-semibold text-secondarylight dark:text-primary">
                  podcasts
                </span>{' '}
                passionnants
              </ListItem>
              <ListItem>
                Enregistrez les lieux déjà visités et orchestrez vos futures
                activités culturelles en organisant des{' '}
                <span className="font-semibold text-secondarylight dark:text-primary">
                  collections
                </span>{' '}
              </ListItem>
            </ul>
            <Button href="/home">Découvrez Kulteo</Button>
          </div>
          <div className="">
            <Image
              src="/img/solution.webp"
              alt="Solution"
              width={550}
              height={355}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
