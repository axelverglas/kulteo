import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '@/sanity';
import { getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user?.email) {
    res.status(401).json({ message: 'User not authenticated.' });
    return;
  }
  if (req.method !== 'POST') {
    res
      .status(405)
      .json({ message: 'Method not allowed or user not authenticated.' });
    return;
  }

  const { comment, videoId } = req.body;
  const userRef = await sanityClient.fetch(
    `*[_type == "user" && email == $email][0]._id`,
    { email: session.user.email }
  );

  const publishedAt = new Date().toISOString();

  const newComment = {
    _type: 'comment',
    comment,
    user: {
      _type: 'reference',
      _ref: userRef,
    },
    video: {
      _type: 'reference',
      _ref: videoId,
    },
    publishedAt: publishedAt,
  };

  await sanityClient.create(newComment);

  res.status(201).json(newComment);
}
