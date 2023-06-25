import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Section from '@/components/Section';
import ListItem from '@/components/ListItem';

export default function Hero() {
  return (
    <Section>
      <Container>
        <div className="md:rounded-lg md:border md:border-grayishblue md:bg-slate-50 md:p-8 md:dark:border-jetdark md:dark:bg-night">
          <Heading
            level="h1"
            className="leading-[3rem] md:leading-[4rem] lg:w-[750px]"
          >
            L&apos;écosystème qui rend la culture{' '}
            <span className="rounded-lg bg-secondarylight px-2 pb-1 pt-2 text-white dark:bg-primary dark:text-night">
              accessible
            </span>{' '}
            à tous
          </Heading>
          <ul className="mt-8 w-96">
            <ListItem>
              Accédez à un{' '}
              <span className="font-semibold text-secondarylight dark:text-primary">
                annuaire
              </span>{' '}
              exhaustif des lieux et événements culturels
            </ListItem>
            <ListItem>
              Profitez de visites guidées en live et en{' '}
              <span className="font-semibold text-secondarylight dark:text-primary">
                rediffusion
              </span>
              , ainsi que de{' '}
              <span className="font-semibold text-secondarylight dark:text-primary">
                podcasts
              </span>{' '}
              animés par des passionnés
            </ListItem>
            <ListItem>
              Répertoriez les lieux déjà visités et planifiez vos prochaines
              sorties en organisant des{' '}
              <span className="font-semibold text-secondarylight dark:text-primary">
                collections
              </span>
            </ListItem>
          </ul>
        </div>
      </Container>
    </Section>
  );
}
