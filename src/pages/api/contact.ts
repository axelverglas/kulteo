import type { NextApiRequest, NextApiResponse } from 'next';
import Handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';
import { transporter } from '@/mailer';
import { siteConfig } from '@/config';

const sendVerificationRequest = ({
  email,
  message,
}: {
  email: string;
  message: string;
}) => {
  const emailFile = fs.readFileSync(
    path.join(process.cwd(), 'src', 'emails', 'contact-email.html'),
    {
      encoding: 'utf8',
    }
  );
  const emailTemplate = Handlebars.compile(emailFile);
  return transporter.sendMail({
    from: `"✨ ${siteConfig.name}" <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_TO,
    subject: 'Vous avez été contacté par un client !',
    html: emailTemplate({
      base_url: process.env.NEXTAUTH_URL,
      email: email,
      message: message,
    }),
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const data = req.body;
      await sendVerificationRequest({
        email: data.email,
        message: data.message,
      });

      res.status(200).json({ message: 'Success' });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred', error });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
