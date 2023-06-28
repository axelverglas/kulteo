import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { Video } from '../../../typings';

const query = groq`
  *[_type == "video" && type == "stream"]
  {
    _id,
    _createdAt,
    _rev,
    _type,
    _updatedAt,
    name,
    url,
    image,
    type,
    "culturalPlace": culturalplace->name,
    "culturalPlaceType": culturalplace->type->title,
  }
`;

type Data = {
  videos: Video[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const videos: Video[] = await sanityClient.fetch(query);

  res.status(200).json({ videos });
}
