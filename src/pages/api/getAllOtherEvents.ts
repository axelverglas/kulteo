import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { Event } from '../../../typings';

const query = (eventId: string) => groq`
  *[_type == "events" && _id != "${eventId}"]
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
  events: Event[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const currentEventId = req.query.currentEventId as string;

  const events: Event[] = await sanityClient.fetch(query(currentEventId));

  res.status(200).json({ events });
}
