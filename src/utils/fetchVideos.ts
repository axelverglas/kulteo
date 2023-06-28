import { Video } from '../../typings';
import { sanityClient } from '@/sanity';
import { groq } from 'next-sanity';

export const getVideosForPlace = async (placeId: string): Promise<Video[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getVideosForPlace?placeId=${placeId}`
  );
  const { videos } = await res.json();
  return videos;
};

export const fetchStreamVideos = async (): Promise<Video[]> => {
  const query = groq`
  *[_type == "video" && type == "stream"]| order(_id) [0...3]
  {
    ...,
    "culturalPlace": culturalplace->name,
    "culturalPlaceType": culturalplace->type->title,
  }
`;

  const videos = await sanityClient.fetch(query);
  return videos;
};

export async function fetchOneVideo(slug: string) {
  const query = groq`*[_type == "video" && slug.current == $slug][0]{
    ...,
    "culturalPlace": culturalplace->name,
    }`;

  const video = await sanityClient.fetch(query, { slug });
  return video;
}

export async function fetchOtherVideos(videoId: string) {
  const query = groq`*[_type == "video" && _id != $videoId]| order(_id) [0...5]{
        ...,
        "culturalPlace": culturalplace->name,
    }`;

  const videos = await sanityClient.fetch(query, { videoId });
  return videos;
}

export async function fetchComments(videoId: string) {
  const query = groq`*[_type == "comment" && video._ref == $videoId] | order(_createdAt desc){
    ...,
    "user": user->name,
    "userImage": user->image,
  }`;
  const comments = await sanityClient.fetch(query, { videoId });
  return comments;
}
