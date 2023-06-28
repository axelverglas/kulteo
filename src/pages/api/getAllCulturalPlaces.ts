import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { CulturalPlace } from '../../../typings';

const query = groq`*[_type == "culturalPlace"] {
  _id,
  _createdAt,
  _rev,
  _type,
  _updatedAt,
  name,
  slug,
  description,
  "images": {
    "asset": images.asset->,
    alt
  },
  address,
  "type": type->title
}`;

type Data = {
  culturalPlace: CulturalPlace[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const culturalPlace: CulturalPlace[] = await sanityClient.fetch(query);

  res.status(200).json({ culturalPlace });
}
