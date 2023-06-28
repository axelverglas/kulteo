import { sanityClient } from '@/sanity';
import { groq } from 'next-sanity';

export async function fetchOnePost(slug: string) {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
        ...,
        "author": author->name,
        "category": category->,
    }`;

  const post = await sanityClient.fetch(query, { slug });
  return post;
}

export async function fetchOtherPost(postId: string) {
  const query = groq`*[_type == "post" && _id != $postId]{
        ...,
        "author": author->name,
        "category": category->,
    }`;

  const post = await sanityClient.fetch(query, { postId });
  return post;
}

export async function fetchPostCategory() {
  const query = groq`*[_type == "category"]{
        ...,
    }`;

  const post = await sanityClient.fetch(query);
  return post;
}

export async function fetchPosts() {
  const query = groq`*[_type == "post"]| order(_id) [0...3]{
        ...,
        "category": category->,
    }`;

  const post = await sanityClient.fetch(query);
  return post;
}
