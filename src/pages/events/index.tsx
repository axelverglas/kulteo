import React, { useState } from 'react';
import { sanityClient } from '@/sanity';
import { groq } from 'next-sanity';
import useSWRInfinite from 'swr/infinite';
import { urlFor } from '@/sanity';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import { ArrowLeftIcon } from '@/components/Icons';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Type } from '../../../typings';
import { fetchTypes } from '@/utils/fetchTypes';
import FilterButton from '@/components/FilterButton';
import { GetServerSideProps } from 'next';
import Card from '@/components/Card';
import { Event } from '../../../typings';

const limit = 9;

const fetcher = (query: string) => sanityClient.fetch(query);

const getEventsQuery = (
  filter: string
) => groq`*[_type == "events" ${
  filter ? `&& type->title == "${filter}"` : ''
}] | order(_createdAt desc) {
    ...,
    "type": type->title
  }`;

interface Props {
  eventTypes: Type[];
}

export default function Events({ eventTypes }: Props) {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  const [filter, setFilter] = useState('');

  const { data, error, size, setSize } = useSWRInfinite(
    (index, previousPageData) => {
      // reached the end
      if (previousPageData && !previousPageData.length) return null;

      if (index === 0) {
        return getEventsQuery(filter) + `[0...${limit}]`;
      }

      return (
        getEventsQuery(filter) +
        `[${index * limit}...${index * limit + limit}]`
      );
    },
    fetcher
  );

  const handleFilterChange = (value: string) => {
    setFilter(value);
  };

  const events: Event[] = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < limit);

  return (
    <>
      <Head>
        <title>Tous les événements - Découvrez Kulteo</title>
        <meta
          name="description"
          content="Découvrez toutes nos diffusions culturelles passées et à venir, et ne manquez aucune expérience culturelle avec Kulteo."
        />
      </Head>
      <Layout>
        <Section>
          <Container>
            <div className="mb-6 flex gap-x-3">
              <button onClick={handleGoBack}>
                <ArrowLeftIcon className="h-6 w-6 stroke-night dark:stroke-white" />
              </button>
              <Heading level="h1" className="text-2xl md:text-[2rem]">
                Ces{' '}
                <span className="text-secondarylight dark:text-primary">
                  événements
                </span>{' '}
                vont vous charmer
              </Heading>
            </div>
            <div className="max-w-[90vw] overflow-x-auto hide-scrollbar">
              <div className="inline-flex space-x-4 mb-6">
                <FilterButton
                  active={filter === ''}
                  onClick={() => handleFilterChange('')}
                >
                  Tous
                </FilterButton>
                {eventTypes.map(type => (
                  <FilterButton
                    key={type._id}
                    active={filter === type.title}
                    onClick={() => {
                      handleFilterChange(type.title);
                    }}
                  >
                    {type.title}
                  </FilterButton>
                ))}
              </div>
            </div>
            {isLoadingInitialData ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-x-20 md:gap-y-10">
                {[...Array(limit)].map((_, index) => (
                  <SkeletonCard key={index} />
                ))}
              </div>
            ) : (
              <>
                {events.length === 0 ? (
                  <p>Aucune vidéo pour le moment</p>
                ) : (
                  <>
                    <p className="mb-6">
                      {events.length} résultat
                      {events.length > 1 ? 's' : ''}
                    </p>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-x-20 md:gap-y-10">
                      {events
                        .filter(events =>
                          filter === '' ? true : events.type === filter
                        )
                        .map(event => (
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
                    <div className="mt-10 flex items-center justify-center">
                      {!isReachingEnd && (
                        <button
                          disabled={isLoadingMore}
                          onClick={() => setSize(size + 1)}
                          className="inline-block rounded-lg border-secondarylight bg-secondarylight px-4 py-2 text-white transition-colors duration-300 hover:border hover:border-grayishblue hover:bg-whitesmoke hover:text-secondarylight dark:border-secondary dark:bg-secondary dark:text-night hover:dark:border-jetdark hover:dark:bg-night hover:dark:text-secondary"
                        >
                          {isLoadingMore
                            ? 'Chargement...'
                            : 'Voir plus d\'événements'}
                        </button>
                      )}
                    </div>
                  </>
                )}
              </>
            )}
          </Container>
        </Section>
      </Layout>
    </>
  );
}

const SkeletonCard = () => {
  return (
    <article className="flex h-auto w-full flex-col justify-between gap-y-6">
      <div className="relative w-full rounded-xl">
        <div className="h-60 w-full animate-pulse rounded-xl bg-gray-300 dark:bg-jetdark"></div>
      </div>
      <div className="flex flex-col gap-y-1">
        <div className="h-4 w-2/3 animate-pulse bg-gray-300 dark:bg-jetdark"></div>
        <div className="h-4 w-1/2 animate-pulse bg-gray-300 dark:bg-jetdark"></div>
      </div>
    </article>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const types: Type[] = await fetchTypes();
  const eventTypes = types.filter(type => type.category === 'event');

  return {
    props: {
      eventTypes,
    },
  };
};
