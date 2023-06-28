import Layout from '@/components/Layout';
import Section from '@/components/Section';
import PlayerVideo from '@/components/video/PlayerVideo';
import VideoSuggest from '@/components/video/VideoSuggest';
import { Video, Comment } from '../../../typings';
import {
  fetchOneVideo,
  fetchOtherVideos,
  fetchComments,
} from '@/utils/fetchVideos';
import { GetServerSideProps } from 'next';
import { urlFor } from '../../sanity';
import { CommentForm } from '@/components/video/CommentForm';
import useSWR, { mutate } from 'swr';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Heading from '@/components/Heading';
import Head from 'next/head';

interface Props {
  video: Video;
  otherVideo: Video[];
  comments: Comment[];
}

export default function VideoSingle({ video, otherVideo }: Props) {
  const { data: session } = useSession();
  const { data: comments, error } = useSWR<Comment[]>(
    video._id, fetchComments);

  const isLoading = !comments && !error;

  if (error) {
    return (
      <p>
        Une erreur s&apos;est produite lors de la récupération des commentaires.
      </p>
    );
  }

  const title = `${video.name} - Découvrez Kulteo "`;
  const description = `Plongez dans le monde de la culture avec la vidéo - ${video.name} - Découvrez Kulteo`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Layout>
        <Section>
          <div className="container">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-14">
              <div className="col-span-2">
                <PlayerVideo
                  title={video.name}
                  url={video.url}
                  culturalPlace={video.culturalPlace}
                />
                {comments && (
                  <p className="mb-4 text-xl font-medium">
                    {comments.length} commentaire
                    {comments.length > 1 ? 's' : ''}
                  </p>
                )}
                {session && (
                  <div className="mb-10 flex gap-x-10">
                    <div className="h-14 w-16">
                      <Image
                        src={session?.user?.image || '/img/default-avatar.webp'}
                        alt="Avatar"
                        className="rounded-full"
                        height={60}
                        width={60}
                      />
                    </div>
                    <div className="w-full">
                      <CommentForm
                        videoId={video._id}
                      />
                    </div>
                  </div>
                )}
                <div className="flex flex-col gap-y-10">
                  {isLoading ? (
                    <p>Chargement en cours...</p>
                  ) : comments && comments.length > 0 ? (
                    comments.map(comment => (
                      <div className="flex gap-x-10" key={comment._id}>
                        <div className="h-14 w-16">
                          <Image
                            src={
                              comment.userImage || '/img/default-avatar.webp'
                            }
                            alt="Avatar"
                            className="rounded-full"
                            height={60}
                            width={60}
                          />
                        </div>
                        <div className="flex w-full flex-col gap-y-2">
                          <Heading
                            level="h3"
                            size="h4"
                            className="font-sans font-normal"
                          >
                            {comment.user}
                          </Heading>
                          <p className="text-secondarylight dark:text-primary">
                            {new Date(comment.publishedAt).toLocaleDateString(
                              'fr-FR'
                            )}
                          </p>
                          <p>{comment.comment}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>Aucun commentaire pour le moment.</p>
                  )}
                </div>
              </div>
              <div className="col-span-1 flex flex-col md:mt-14">
                {otherVideo.map(video => (
                  <VideoSuggest
                    key={video._id}
                    title={video.name}
                    slug={video.slug}
                    culturalPlace={video.culturalPlace}
                    image={urlFor(video.image).url()}
                  />
                ))}
              </div>
            </div>
          </div>
        </Section>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const video: Video = await fetchOneVideo(params?.slug as string);
  if (!video) {
    return { notFound: true };
  }
  const otherVideo: Video[] = await fetchOtherVideos(video._id);

  return {
    props: {
      video,
      otherVideo,
    },
  };
};
