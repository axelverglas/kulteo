import Head from 'next/head';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Section from '@/components/Section';
import VideoCard from '@/components/VideoCard';
import { urlFor } from '@/sanity';
import Heading from '@/components/Heading';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  fetchOneCulturalPlaces,
  fetchAllCulturalPlaces,
} from '@/utils/fetchCulturalPlaces';
import { getVideosForPlace } from '@/utils/fetchVideos';
import { CulturalPlace, Video } from '../../../../typings';
import Link from 'next/link';
import { ArrowLeftIcon } from '@/components/Icons';

type Props = {
  culturalPlace: CulturalPlace;
  videos: Video[];
  videoType: string;
};

export default function Videos({ videos, culturalPlace, videoType }: Props) {
  const title = videoType === 'stream' ? 'Livestreams' : 'Vidéos pertinentes';
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <Section>
          <Container>
            <div className="mb-6 flex items-center gap-x-3">
              <Link href={`/places/${culturalPlace.slug.current}`}>
                <ArrowLeftIcon className="h-6 w-6 stroke-night dark:stroke-white" />
              </Link>
              <Heading level="h2">
                {videoType === 'stream'
                  ? `Rediffusion de live`
                  : `Ressource vidéos`}
              </Heading>
            </div>
            <p className="mb-6 text-lg">
              {videos.length} résultat{videos.length > 1 ? 's' : ''}
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-x-20 md:gap-y-10">
              {videos.map(video => (
                <VideoCard
                  key={video._id}
                  title={video.name}
                  image={urlFor(video.image).url()}
                  culturalPlace={culturalPlace.name}
                  url={video.url}
                />
              ))}
            </div>
          </Container>
        </Section>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const culturalPlaces = await fetchAllCulturalPlaces();

  const paths = culturalPlaces.flatMap(place => {
    return ['stream', 'videorelevant'].map(type => {
      return { params: { slug: place.slug.current, type } };
    });
  });

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const culturalPlace = await fetchOneCulturalPlaces(params?.slug as string);
  const videos = await getVideosForPlace(culturalPlace._id);

  const relevantVideos = videos.filter(
    video => video.type === (params?.type as string)
  );

  return { props: { videos: relevantVideos, culturalPlace }, revalidate: 1 };
};
