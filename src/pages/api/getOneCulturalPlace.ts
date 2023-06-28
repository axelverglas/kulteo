import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { CulturalPlace } from '../../../typings';

const query = groq`*[_type == "culturalPlace" && slug.current == $slug][0]{
  _id,
  _createdAt,
  _rev,
  _type,
  _updatedAt,
  name,
  slug,
  description,
  images,
  address,
  openingHours,
  price,
  website,
  "type": type->title
}`;

type Data = {
  culturalPlace: CulturalPlace;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { slug } = req.query;
  const culturalPlace: CulturalPlace = await sanityClient.fetch(query, {
    slug,
  });

  res.status(200).json({ culturalPlace });
}
