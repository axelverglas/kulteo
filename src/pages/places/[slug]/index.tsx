import Head from 'next/head';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Accordion from '@/components/Accordion';
import { FaRegClock } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';
import { AiOutlineEuroCircle } from 'react-icons/ai';
import { HiOutlinePhone } from 'react-icons/hi';
import Infos from '@/components/Infos';
import { AccordionItem } from '@/types/Index';
import { GetStaticPaths, GetStaticProps } from 'next';
import { CulturalPlace, Video, Event } from '../../../../typings';
import {
  fetchOneCulturalPlaces,
  fetchAllCulturalPlaces,
} from '@/utils/fetchCulturalPlaces';
import { getVideosForPlace } from '@/utils/fetchVideos';
import { getEventsForPlace } from '@/utils/fetchEvents';
import VideoCard from '@/components/VideoCard';
import { urlFor } from '@/sanity';
import Heading from '@/components/Heading';
import ToggleButton from '@/components/ToggleButton';
import Link from 'next/link';
import { useState } from 'react';

import Card from '@/components/Card';

type Props = {
  culturalPlace: CulturalPlace;
  videos: Video[];
  events: Event[];
};

export default function Single({ culturalPlace, videos, events }: Props) {
  const accordionItems: AccordionItem[] = [
    {
      icon: FaRegClock,
      title: 'Horaires',
      content: culturalPlace.openingHours ? (
        <ul>
          {culturalPlace.openingHours.map((hour, index) => (
            <li key={index}>{hour}</li>
          ))}
        </ul>
      ) : null,
    },
    {
      icon: GrMapLocation,
      title: 'Adresse',
      content: culturalPlace.address || null,
    },
    {
      icon: AiOutlineEuroCircle,
      title: 'Tarif',
      content: culturalPlace.price || null,
    },
    {
      icon: HiOutlinePhone,
      title: 'Numéro de téléphone',
      content: culturalPlace.phoneNumber || null,
    },
  ];
  const relevantVideos = videos.filter(
    video => video.type === 'relevantvideos'
  );
  const twitchStreams = videos.filter(video => video.type === 'stream');
  const [variant, setVariant] = useState('events');

  const handleClick = () => {
    setVariant(variant === 'events' ? 'videos' : 'events');
  };

  const hasVideos = relevantVideos.length > 0 || twitchStreams.length > 0;
  return (
    <>
      <Head>
        <title>{culturalPlace.name}</title>
      </Head>
      <Layout>
        <Section>
          <Container>
            <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-24">
              <div>
                <Infos
                  title={culturalPlace.name}
                  description={culturalPlace.description}
                  website={culturalPlace.website}
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
            <div className="flex flex-col gap-y-14">
              <div className="flex items-center justify-center gap-x-6 md:justify-normal">
                <ToggleButton
                  variant={variant}
                  activeVariant="events"
                  onClick={handleClick}
                >
                  Évènements
                </ToggleButton>
                <div className="h-6 w-px rounded-xl bg-jetdark opacity-40 dark:bg-whitesmoke"></div>
                <ToggleButton
                  variant={variant}
                  activeVariant="videos"
                  onClick={handleClick}
                >
                  Vidéos
                </ToggleButton>
              </div>

              <div>
                {variant === 'events' ? (
                  <>
                    <Heading level="h2" className="mb-6">
                      Liste des{' '}
                      <span className="text-secondarylight dark:text-primary">
                        évènements
                      </span>
                    </Heading>
                    {events.length > 0 ? (
                      <>
                        <p className="mb-6">
                          {events.length} résultat{events.length > 1 ? 's' : ''}
                        </p>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-20">
                          {events.map(event => (
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
                      </>
                    ) : (
                      <p className="text-left">
                        Aucun évènement pour le moment
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    <Heading level="h2" className="mb-6">
                      Liste des{' '}
                      <span className="text-secondarylight dark:text-primary">
                        vidéos
                      </span>
                    </Heading>
                    {relevantVideos.length > 0 && (
                      <>
                        <div className="flex justify-between">
                          <Heading level="h3" className="mb-6">
                            Ces{' '}
                            <span className="text-secondarylight">
                              rediffusions de live
                            </span>{' '}
                            pourraient vous plaire
                          </Heading>
                          <Link
                            href={`/places/${culturalPlace.slug.current}/relevantvideos`}
                            className="font-semibold text-secondarylight"
                          >
                            Tout voir
                          </Link>
                        </div>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-20">
                          {relevantVideos.slice(0, 3).map(video => (
                            <VideoCard
                              key={video._id}
                              title={video.name}
                              image={urlFor(video.image).url()}
                              culturalPlace={culturalPlace.name}
                              url={video.url}
                            />
                          ))}
                        </div>
                      </>
                    )}
                    {twitchStreams.length > 0 && (
                      <>
                        <div className="mt-8 flex justify-between">
                          <Heading level="h3" className="mb-6">
                            Ces{' '}
                            <span className="text-secondarylight dark:text-primary">
                              rediffusions de live
                            </span>{' '}
                            pourraient vous plaire
                          </Heading>
                          <Link
                            href={`/places/${culturalPlace.slug.current}/stream`}
                            className="font-semibold text-secondarylight"
                          >
                            Tout voir
                          </Link>
                        </div>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-20">
                          {twitchStreams.slice(0, 3).map(video => (
                            <VideoCard
                              key={video._id}
                              title={video.name}
                              image={urlFor(video.image).url()}
                              culturalPlace={culturalPlace.name}
                              url={video.url}
                            />
                          ))}
                        </div>
                      </>
                    )}
                    {!hasVideos && (
                      <p className="text-left">Aucune vidéo pour le moment</p>
                    )}
                  </>
                )}
              </div>
            </div>
          </Container>
        </Section>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const culturalPlaces = await fetchAllCulturalPlaces();

  const paths = culturalPlaces.map(place => ({
    params: { slug: place.slug.current },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const culturalPlace = await fetchOneCulturalPlaces(params?.slug as string);

  if (!culturalPlace) {
    return { notFound: true };
  }

  const videos = await getVideosForPlace(culturalPlace._id);
  const events = await getEventsForPlace(culturalPlace._id);

  return { props: { culturalPlace, videos, events }, revalidate: 1 };
};
