import Image from 'next/image';
import { urlFor } from '@/sanity';
import Heading from '@/components/Heading';
import { Post } from '../../typings';
import Link from 'next/link';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const date = new Date(post.publishedAt);
  const formattedDate = date.toLocaleDateString('fr-FR');

  return (
    <div
      key={post._id}
      className="rounded-lg border border-grayishblue bg-white shadow-light dark:border-jetdark dark:bg-black dark:shadow-night"
    >
      <Link href={`/post/${post.slug.current}`}>
        <Image
          src={urlFor(post.mainImage).url() as string}
          alt={post.title}
          width={500}
          height={350}
          className="h-60 w-full rounded-t-lg"
        />
      </Link>
      <div className="p-4">
        <div className="mb-4 flex justify-between">
          <p className="rounded-lg bg-night px-2 py-1 text-whitesmoke dark:bg-whitesmoke dark:text-night">
            {post.category.title}
          </p>
          <p>{formattedDate}</p>
        </div>
        <Link href={`/post/${post.slug.current}`}>
          <Heading level="h3" size="h4">
            {post.title}
          </Heading>
        </Link>
      </div>
    </div>
  );
}
