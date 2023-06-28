import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { Event } from '../../../typings';

const query = groq`*[_type == "events"]{
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
  events: Event[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const events: Event[] = await sanityClient.fetch(query);

  res.status(200).json({ events });
}
