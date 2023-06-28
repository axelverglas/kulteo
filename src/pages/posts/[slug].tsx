import Container from '@/components/Container';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import { GetServerSideProps } from 'next';
import Heading from '@/components/Heading';
import { Post } from '../../../typings';
import { fetchOnePost, fetchOtherPost } from '@/utils/fetchPosts';
import { urlFor } from '../../sanity';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Head from 'next/head';

interface Props {
  post: Post;
  otherPosts: Post[];
}

export default function Post({ post, otherPosts }: Props) {
  const date = new Date(post.publishedAt);
  const formattedDate = date.toLocaleDateString('fr-FR');
  return (
    <>
      <Head>
        <title>{post.title} - Découvrez Kulteo</title>
        <meta name="description" content={post.title} />
      </Head>
      <Layout>
        <Section>
          <Container>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-14">
              <div className="col-span-2">
                <div className="mb-6 flex justify-between">
                  <p className="rounded-lg bg-night px-2 py-1 text-whitesmoke dark:bg-whitesmoke dark:text-night">
                    {post.category.title}
                  </p>
                  <p>{formattedDate}</p>
                </div>
                <Heading level="h1" className="text-2xl md:text-[2rem]">
                  {post.title}
                </Heading>
                <p>Par {post.author}</p>
                <div className="mt-6">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    className="h-auto w-full rounded-lg"
                    width={500}
                    height={350}
                    priority
                  />
                </div>
                <div className="mt-6">
                  <PortableText value={post.body} />
                </div>
              </div>
              <div className="col-span-1">
                <Heading level="h2" className="mb-6">
                  Autres articles
                </Heading>
                {otherPosts.map(post => (
                  <div
                    key={post._id}
                    className="mb-6 flex items-start rounded-lg border border-grayishblue bg-white shadow-light dark:border-jetdark dark:bg-black dark:shadow-night"
                  >
                    <div className="overflow-hidden rounded-l-lg">
                      <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        className="h-auto w-80"
                        width={500}
                        height={150}
                        priority
                      />
                    </div>
                    <div className="flex w-full flex-col justify-between p-4">
                      <div className="mb-2 flex justify-between">
                        <p className="rounded-lg bg-night px-2 py-1 text-whitesmoke dark:bg-whitesmoke dark:text-night">
                          {post.category.title}
                        </p>
                        <p>{formattedDate}</p>
                      </div>
                      <Heading level="h2" className="text-lg md:text-xl">
                        {post.title}
                      </Heading>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post: Post = await fetchOnePost(params?.slug as string);
  if (!post) {
    return { notFound: true };
  }
  const otherPosts: Post[] = await fetchOtherPost(post._id);

  return {
    props: {
      post,
      otherPosts,
    },
  };
};
