import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email, userType } = req.body;

    const listIds = userType === 'particulier' ? [5] : [6];

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': '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',
      },
      body: JSON.stringify({
        email,
        updateEnabled: false,
        attributes: {
        },
        listIds: listIds,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    return res.status(200).json(data);
  }

  return res.status(405).end(); // Method Not Allowed
}
