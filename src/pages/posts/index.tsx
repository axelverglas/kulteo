import React, { useState } from 'react';
import { sanityClient } from '@/sanity';
import { groq } from 'next-sanity';
import useSWRInfinite from 'swr/infinite';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import Container from '@/components/Container';
import { Post } from '../../../typings';
import Heading from '@/components/Heading';
import Head from 'next/head';
import { Type } from '../../../typings';
import FilterButton from '@/components/FilterButton';
import { GetServerSideProps } from 'next';
import { fetchPostCategory } from '@/utils/fetchPosts';
import PostCard from '@/components/PostCard';

const limit = 9;

const fetcher = (query: string) => sanityClient.fetch(query);

const getPostQuery = (filter: string) => groq`*[_type == "post" ${
  filter ? `&& category->title == "${filter}"` : ''
}] | order(_createdAt desc) {
    ...,
    "category": category->
  }`;

interface Props {
  PostType: Type[];
}

export default function PostList({ PostType }: Props) {
  const [filter, setFilter] = useState('');

  const { data, error, size, setSize } = useSWRInfinite(
    (index, previousPageData) => {
      // reached the end
      if (previousPageData && !previousPageData.length) return null;

      if (index === 0) {
        return getPostQuery(filter) + `[0...${limit}]`;
      }

      return (
        getPostQuery(filter) + `[${index * limit}...${index * limit + limit}]`
      );
    },
    fetcher
  );

  const handleFilterChange = (value: string) => {
    setFilter(value);
  };

  const post: Post[] = data ? [].concat(...data) : [];
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
        <title>Tous les articles du blog - Découvrez Kulteo</title>
        <meta
          name="description"
          content="Découvrez toutes nos diffusions culturelles passées et à venir, et ne manquez aucune expérience culturelle avec Kulteo."
        />
      </Head>
      <Layout>
        <Section>
          <Container>
            <div className="mb-6">
              <Heading level="h1" className="mb-4 text-2xl md:text-[2rem]">
                Découvrez notre blog
              </Heading>
              <p>
                Laissez votre esprit s&apos;épanouir au contact de sujets
                culturels variés
              </p>
            </div>
            <div className="mb-6 max-w-[90vw] overflow-x-auto hide-scrollbar">
              <div className="inline-flex space-x-4">
                <FilterButton
                  active={filter === ''}
                  onClick={() => handleFilterChange('')}
                >
                  Tous
                </FilterButton>
                {PostType.map(type => (
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
            <Heading level="h2" size="h3" className="mb-4">
              Tous les articles
            </Heading>
            {isLoadingInitialData ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-x-20 md:gap-y-10">
                {[...Array(limit)].map((_, index) => (
                  <SkeletonCard key={index} />
                ))}
              </div>
            ) : (
              <>
                {post.length === 0 ? (
                  <p>Aucuns articles pour le moment</p>
                ) : (
                  <>
                    <p className="mb-6">
                      {post.length} résultat
                      {post.length > 1 ? 's' : ''}
                    </p>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-x-20 md:gap-y-10">
                      {post
                        .filter(post =>
                          filter === '' ? true : post.category.title === filter
                        )
                        .map(post => {
                          return <PostCard key={post._id} post={post} />;
                        })}
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
                            : "Voir plus d'articles"}
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
    <div className="rounded-lg border border-grayishblue bg-white shadow-light dark:border-jetdark dark:bg-black dark:shadow-night">
      <div className="h-60 w-full animate-pulse rounded-t-lg bg-gray-300 dark:bg-jetdark"></div>
      <div className="p-4">
        <div className="mb-4 flex justify-between">
          <div className="h-4 w-1/4 animate-pulse rounded-lg bg-gray-300 px-2 py-1 text-whitesmoke dark:bg-night dark:text-night"></div>
          <div className="h-4 w-1/4 animate-pulse bg-gray-300 dark:bg-jetdark"></div>
        </div>
        <div className="h-6 w-full animate-pulse bg-gray-300 dark:bg-jetdark"></div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const PostType: Type[] = await fetchPostCategory();

  return {
    props: {
      PostType,
    },
  };
};
