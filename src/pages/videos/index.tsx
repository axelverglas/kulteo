import React, { useState } from 'react';
import { sanityClient } from '@/sanity';
import { groq } from 'next-sanity';
import useSWRInfinite from 'swr/infinite';
import VideoCard from '@/components/VideoCard';
import { urlFor } from '@/sanity';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import Container from '@/components/Container';
import { Video } from '../../../typings';
import Heading from '@/components/Heading';
import { ArrowLeftIcon } from '@/components/Icons';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Type } from '../../../typings';
import { fetchTypes } from '@/utils/fetchTypes';
import FilterButton from '@/components/FilterButton';
import { GetServerSideProps } from 'next';

const limit = 6;

const fetcher = (query: string) => sanityClient.fetch(query);

const getVideosQuery = (filter: string) => groq`*[_type == "video" ${
  filter ? `&& culturalplace->type->title == "${filter}"` : ''
}] | order(_createdAt desc) {
    _id,
    name,
    image,
    "culturalPlace": culturalplace->name,
    "culturalPlaceType": culturalplace->type->title,
    url
  }`;

interface Props {
  eventTypes: Type[];
  placeTypes: Type[];
}

export default function Videos({ placeTypes, eventTypes }: Props) {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  const [filter, setFilter] = useState('');

  const { data, error, size, setSize } = useSWRInfinite(
    (index, previousPageData) => {
      if (previousPageData && !previousPageData.length) return null;
      if (index === 0) {
        return getVideosQuery(filter) + `[0...${limit}]`;
      }

      return (
        getVideosQuery(filter) + `[${index * limit}...${index * limit + limit}]`
      );
    },
    fetcher
  );

  const handleFilterChange = (value: string) => {
    setFilter(value);
  };

  const videos: Video[] = data ? [].concat(...data) : [];
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
        <title>Toutes les rediffusions culturelles - Découvrez Kulteo</title>
        <meta
          name="description"
          content="Découvrez toutes nos diffusions culturelles passées et à venir, et ne manquez aucune expérience culturelle avec Kulteo."
        />
      </Head>
      <Layout>
        <Section>
          <Container>
            <div className="mb-6 max-w-[90vw] overflow-x-auto hide-scrollbar">
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
                    }}
                  >
                    {type.title}
                  </FilterButton>
                ))}
              </div>
            </div>
            <div className="mb-6 flex gap-x-3">
              <button onClick={handleGoBack}>
                <ArrowLeftIcon className="h-6 w-6 stroke-night dark:stroke-white" />
              </button>
              <Heading level="h1" className="text-2xl md:text-[2rem]">
                Laissez-vous envoûter par nos{' '}
                <span className="text-secondarylight dark:text-primary">
                  rediffusions
                </span>
              </Heading>
            </div>
            {isLoadingInitialData ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-x-20 md:gap-y-10">
                {[...Array(limit)].map((_, index) => (
                  <SkeletonCard key={index} />
                ))}
              </div>
            ) : (
              <>
                {videos.length === 0 ? (
                  <p>Aucune vidéo pour le moment</p>
                ) : (
                  <>
                    <p className="mb-6">
                      {videos.length} résultat{videos.length > 1 ? 's' : ''}
                    </p>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-x-20 md:gap-y-10">
                      {videos
                        .filter(video =>
                          filter === ''
                            ? true
                            : video.culturalPlaceType === filter
                        )
                        .map(video => (
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
                    <div className="mt-10 flex items-center justify-center">
                      {!isReachingEnd && (
                        <button
                          disabled={isLoadingMore}
                          onClick={() => setSize(size + 1)}
                          className="inline-block rounded-lg border-secondarylight bg-secondarylight px-4 py-2 text-white transition-colors duration-300 hover:border hover:border-grayishblue hover:bg-whitesmoke hover:text-secondarylight dark:border-secondary dark:bg-secondary dark:text-night hover:dark:border-jetdark hover:dark:bg-night hover:dark:text-secondary"
                        >
                          {isLoadingMore
                            ? 'Chargement...'
                            : 'Voir plus de vidéos'}
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
  const placeTypes = types.filter(type => type.category === 'place');
  const eventTypes = types.filter(type => type.category === 'event');

  return {
    props: {
      placeTypes,
      eventTypes,
    },
  };
};
