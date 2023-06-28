import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { Event } from '../../../typings';

const query = (placeId: string) => groq`
  *[_type == "events" && references("${placeId}")]
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
    "culturalPlace": culturalplace->name,
  }
`;

type Data = {
  events: Event[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!req.query.placeId || typeof req.query.placeId !== 'string') {
    res.status(400).json({ events: [] });
    return;
  }

  const placeId = req.query.placeId;

  const events: Event[] = await sanityClient.fetch(query(placeId));

  res.status(200).json({ events });
}
