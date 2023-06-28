import nodemailer from 'nodemailer';
import Transport from 'nodemailer-brevo-transport';

export const transporter = nodemailer.createTransport(
  new Transport({ apiKey: process.env.BREVO_API_KEY })
);
