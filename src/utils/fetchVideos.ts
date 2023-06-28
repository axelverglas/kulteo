import { Video } from '../../typings';

export const getVideosForPlace = async (placeId: string): Promise<Video[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getVideosForPlace?placeId=${placeId}`
  );
  const { videos } = await res.json();
  return videos;
};

export const fetchAllStreamVideos = async (): Promise<Video[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAllStreamVideos`
  );
  const { videos } = await res.json();
  return videos;
};
