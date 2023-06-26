import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Section from '@/components/Section';
import ListItem, { items } from '@/components/ListItem';

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
      </Container>
    </Section>
  );
}
