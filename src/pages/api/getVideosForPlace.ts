import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { Video } from '../../../typings';

const query = (placeId: string) => groq`
  *[_type == "video" && references("${placeId}")]
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
    slug,
    "culturalPlace": culturalplace->name,
  }
`;

type Data = {
  videos: Video[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!req.query.placeId || typeof req.query.placeId !== 'string') {
    res.status(400).json({ videos: [] });
    return;
  }

  const placeId = req.query.placeId;

  const videos: Video[] = await sanityClient.fetch(query(placeId));

  res.status(200).json({ videos });
}
