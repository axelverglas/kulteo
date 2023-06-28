import Hero from '@/components/Home/Hero';
import Layout from '@/components/Layout';
import { GetServerSideProps } from 'next';
import { CulturalPlace, Event, Post, Type, Video } from '../../typings';
import { fetchAllCulturalPlaces } from '@/utils/fetchCulturalPlaces';
import Card from '@/components/Card';
import { urlFor } from '@/sanity';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { useState } from 'react';
import ToggleButton from '@/components/ToggleButton';
import { fetchAllEvents } from '@/utils/fetchEvents';
import Heading from '@/components/Heading';
import { fetchTypes } from '@/utils/fetchTypes';
import FilterButton from '@/components/FilterButton';
import { fetchStreamVideos } from '@/utils/fetchVideos';
import Link from 'next/link';
import VideoCard from '@/components/VideoCard';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { fetchPosts } from '@/utils/fetchPosts';
import PostCard from '@/components/PostCard';

interface Props {
  culturalPlace: CulturalPlace[];
  events: Event[];
  types: Type[];
  videos: Video[];
  eventTypes: Type[];
  placeTypes: Type[];
  posts: Post[];
}

export default function Dashboard({
  culturalPlace,
  events,
  placeTypes,
  eventTypes,
  videos,
  posts,
}: Props) {
  const [variant, setVariant] = useState('culturalPlaces');
  const [filter, setFilter] = useState('');
  const [filteredCulturalPlaces, setFilteredCulturalPlaces] =
    useState(culturalPlace);
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const { data: session } = useSession();

  const handleClick = () => {
    setVariant(variant === 'culturalPlaces' ? 'events' : 'culturalPlaces');
  };

  const handleFilterChange = (value: string) => {
    setFilter(value);
    setFilteredCulturalPlaces(
      culturalPlace.filter(place =>
        value === '' ? true : place.type === value
      )
    );
    setFilteredEvents(
      events.filter(event => (value === '' ? true : event.type === value))
    );

    setFilteredVideos(
      videos.filter(video =>
        value === '' ? true : video.culturalPlaceType === value
      )
    );
  };
  return (
    <>
      <Head>
        <title>Explorez et découvrez la culture à Paris avec Kulteo</title>
        <meta
          name="description"
          content="Découvrez une plateforme culturelle unique offrant une variété de lieux et d'événements culturels à Paris."
        />
      </Head>
      <Layout>
        {!session && <Hero />}
        <Section>
          <Container>
            <div className="max-w-[90vw] overflow-x-auto hide-scrollbar">
              <div className="inline-flex space-x-4">
                <FilterButton
                  active={filter === ''}
                  onClick={() => handleFilterChange('')}
                >
                  Tous
                </FilterButton>
                {placeTypes.map(type => (
                  <FilterButton
                    key={type._id}
                    active={filter === type.title}
                    onClick={() => {
                      handleFilterChange(type.title);
                      setVariant('culturalPlaces');
                    }}
                  >
                    {type.title}
                  </FilterButton>
                ))}
                {eventTypes.map(type => (
                  <FilterButton
                    key={type._id}
                    active={filter === type.title}
                    onClick={() => {
                      handleFilterChange(type.title);
                      setVariant('events');
                    }}
                  >
                    {type.title}
                  </FilterButton>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-y-14">
              <div className="mt-8 flex flex-col gap-8">
                <div className="flex justify-between">
                  <Heading level="h2">
                    Nos dernières{' '}
                    <span className="text-secondarylight dark:text-primary">
                      rediffusions
                    </span>{' '}
                  </Heading>
                  <Link
                    href={'/videos/'}
                    className="font-semibold text-secondarylight"
                  >
                    Tout voir
                  </Link>
                </div>
                {filteredVideos.length > 0 ? (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-x-20 md:gap-y-10">
                    {filteredVideos.slice(0, 3).map(video => (
                      <VideoCard
                        key={video._id}
                        title={video.name}
                        image={urlFor(video.image).url()}
                        culturalPlace={video.culturalPlace}
                        url={video.url}
                        slug={video.slug.current}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-left">Pas de vidéo pour le moment</p>
                )}
              </div>
              <div className="flex items-center justify-center gap-x-6 md:justify-normal">
                <div className="flex items-center gap-x-6">
                  <ToggleButton
                    variant={variant}
                    activeVariant="culturalPlaces"
                    onClick={handleClick}
                  >
                    Lieux
                  </ToggleButton>
                  <div className="h-6 w-px rounded-xl bg-jetdark opacity-40 dark:bg-whitesmoke"></div>
                  <ToggleButton
                    variant={variant}
                    activeVariant="events"
                    onClick={handleClick}
                  >
                    Évènements
                  </ToggleButton>
                </div>
              </div>

              <div>
                {variant === 'culturalPlaces' ? (
                  <>
                    <div className="flex items-center justify-between">
                      <Heading level="h2" className="mb-6">
                        Ces{' '}
                        <span className="text-secondarylight dark:text-primary">
                          lieux culturels
                        </span>{' '}
                        vont vous charmer
                      </Heading>
                      <Link
                        href={'/places/'}
                        className="font-semibold text-secondarylight"
                      >
                        Tout voir
                      </Link>
                    </div>
                    {filteredCulturalPlaces.length > 0 ? (
                      <>
                        <p className="mb-6">
                          {filteredCulturalPlaces.length} résultat
                          {filteredCulturalPlaces.length > 1 ? 's' : ''}
                        </p>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-x-20 md:gap-y-10">
                          {filteredCulturalPlaces.slice(0, 6).map(place => (
                            <Card
                              key={place._id}
                              title={place.name}
                              description={place.description}
                              address={place.address}
                              image={urlFor(place.images).url()}
                              type={place.type}
                              link={`/places/${place.slug.current}`}
                            />
                          ))}
                        </div>
                      </>
                    ) : (
                      <p className="text-left">Aucun lieu pour le moment</p>
                    )}
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-between">
                      <Heading level="h2" className="mb-6">
                        Ces{' '}
                        <span className="text-secondarylight dark:text-primary">
                          événements
                        </span>{' '}
                        vont vous charmer
                      </Heading>
                      <Link
                        href={'/events/'}
                        className="font-semibold text-secondarylight"
                      >
                        Tout voir
                      </Link>
                    </div>
                    {filteredEvents.length > 0 ? (
                      <>
                        <p className="mb-6">
                          {filteredEvents.length} résultat
                          {filteredEvents.length > 1 ? 's' : ''}
                        </p>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-20 md:gap-y-10">
                          {filteredEvents.slice(0, 6).map(event => (
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
                )}
              </div>
              <div>
                <Heading level="h2" className="mb-6">
                  Retrouvez nos derniers{' '}
                  <span className="text-secondarylight dark:text-primary">
                    articles culturels
                  </span>
                </Heading>
                <div className="flex justify-between">
                  <p className="mb-6">
                    Nourrissez votre curiosité et enrichissez votre esprit en
                    plongeant dans une variété d&apos;articles captivants
                  </p>
                  <Link
                    href={'/posts/'}
                    className="font-semibold text-secondarylight dark:text-primary"
                  >
                    Tout voir
                  </Link>
                </div>
                {posts.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-20 md:gap-y-10">
                      {posts.slice(0, 3).map(post => (
                        <PostCard key={post._id} post={post} />
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="text-left">Aucun article pour le moment</p>
                )}
              </div>
            </div>
          </Container>
        </Section>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const culturalPlace: CulturalPlace[] = await fetchAllCulturalPlaces();
  const events: Event[] = await fetchAllEvents();
  const types: Type[] = await fetchTypes();
  const placeTypes = types.filter(type => type.category === 'place');
  const eventTypes = types.filter(type => type.category === 'event');
  const videos: Video[] = await fetchStreamVideos();
  const posts: Post[] = await fetchPosts();

  return {
    props: {
      culturalPlace,
      events,
      placeTypes,
      eventTypes,
      videos,
      posts,
    },
  };
};
