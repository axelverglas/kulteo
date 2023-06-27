import Head from 'next/head';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Event } from '../../../typings';
import {
  fetchOneEvent,
  fetchAllEvents,
  getOtherEventsForPlace,
  getAllOtherEvents,
} from '@/utils/fetchEvents';
import Card from '@/components/Card';
import { urlFor } from '@/sanity';
import Heading from '@/components/Heading';
import Infos from '@/components/Infos';
import Accordion from '@/components/Accordion';
import { AccordionItem } from '@/types/Index';
import { MapIcon, OpeningHoursIcon, PriceIcon } from '@/components/Icons';

type Props = {
  event: Event;
  samePlaceEvents: Event[];
  otherEvents: Event[];
};

export default function Single({ event, samePlaceEvents, otherEvents }: Props) {
  const accordionItems: AccordionItem[] = [
    {
      icon: OpeningHoursIcon,
      title: 'Horaires',
      content: event.openingHours ? (
        <ul>
          {event.openingHours.map((hour, index) => (
            <li key={index}>{hour}</li>
          ))}
        </ul>
      ) : null,
    },
    {
      icon: MapIcon,
      title: 'Adresse',
      content: event.address || null,
    },
    {
      icon: PriceIcon,
      title: 'Tarif',
      content: event.price ? (
        <ul>
          {event.price.map((price, index) => (
            <li key={index}>{price}</li>
          ))}
        </ul>
      ) : null,
    },
  ];
  return (
    <>
      <Head>
        <title>{event.name}</title>
      </Head>
      <Layout>
        <Section>
          <Container>
            <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-24">
              <div>
                <Infos
                  title={event.name}
                  subtitle={event.culturalPlace.name}
                  description={event.description}
                  website={event.website}
                />
              </div>
              <div>
                <Accordion
                  items={accordionItems.filter(item => item.content !== null)}
                />
              </div>
            </div>
          </Container>
        </Section>
        <Section>
          <Container>
            {samePlaceEvents.length > 0 && (
              <div>
                <Heading level="h2" className="mb-6">
                  Autres évènements organisés par {event.culturalPlace.name}
                </Heading>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-x-20 md:gap-y-10">
                  {samePlaceEvents.map(event => (
                    <Card
                      key={event._id}
                      title={event.name}
                      description={event.description}
                      address={event.address}
                      image={urlFor(event.images).url()}
                      type={event.type}
                      link={`/events/${event.slug.current}`}
                    />
                  ))}
                </div>
              </div>
            )}
            {otherEvents.length > 0 && (
              <div className="mt-10">
                <Heading level="h2" className="mb-6">
                  Autres évènements
                </Heading>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-x-20 md:gap-y-10">
                  {otherEvents.slice(0, 3).map(event => (
                    <Card
                      key={event._id}
                      title={event.name}
                      description={event.description}
                      address={event.address}
                      image={urlFor(event.images).url()}
                      type={event.type}
                      link={`/events/${event.slug.current}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </Container>
        </Section>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const events = await fetchAllEvents();

  const paths = events.map(event => ({
    params: { slug: event.slug.current },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const event = await fetchOneEvent(params?.slug as string);

  if (!event) {
    return { notFound: true };
  }

  const samePlaceEvents = await getOtherEventsForPlace(
    event.culturalPlace._id,
    event._id
  );
  const otherEvents = await getAllOtherEvents(event._id);

  return { props: { event, samePlaceEvents, otherEvents }, revalidate: 1 };
};
