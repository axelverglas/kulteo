import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { Event } from '../../../typings';

const query = groq`
  *[_type == "events" && slug.current == $slug][0]
  {
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
    website,
    "type": type->title,
    "culturalPlace": culturalPlace->{name, _id, address, slug}
  }
`;

type Data = {
  event: Event;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { slug } = req.query;
  const event: Event = await sanityClient.fetch(query, {
    slug,
  });

  res.status(200).json({ event });
}
