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
import { FaRegClock } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';
import { AiOutlineEuroCircle } from 'react-icons/ai';
import { HiOutlinePhone } from 'react-icons/hi';
import { AccordionItem } from '@/types/Index';

type Props = {
  event: Event;
  samePlaceEvents: Event[];
  otherEvents: Event[];
};

export default function Single({ event, samePlaceEvents, otherEvents }: Props) {
  const accordionItems: AccordionItem[] = [
    {
      icon: FaRegClock,
      title: 'Horaires',
      content: event.openingHours || null,
    },
    {
      icon: GrMapLocation,
      title: 'Adresse',
      content: event.address || null,
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
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-20">
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
              <div>
                <Heading level="h2" className="mb-6">
                  Autres évènements
                </Heading>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-20">
                  {otherEvents.map(event => (
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
