import NextAuth, { NextAuthOptions } from 'next-auth';
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';
import { sanityClient } from '../../../sanity';

const options: NextAuthOptions = {
  providers: [SanityCredentials(sanityClient)],
  session: {
    strategy: 'jwt',
  },
  adapter: SanityAdapter(sanityClient),
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/login',
  },
};

export default NextAuth(options);
