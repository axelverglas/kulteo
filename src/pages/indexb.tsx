import Head from 'next/head';
import { siteConfig } from '@/config';
import DefaultLayout from '@/components/DefaultLayout';
import Hero from '@/components/HomeB/Hero';
import About from '@/components/HomeB/About';
import NewsletterForm from '@/components/HomeB/Newsletter';
import Launch from '@/components/HomeB/Launch';
import Social from '@/components/HomeB/Social';
import Soluce from '@/components/HomeB/Soluce';

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteConfig.name}</title>
      </Head>
      <DefaultLayout>
        <Hero />
        <About />
        <Soluce />
        <Launch />
        <NewsletterForm />
        <Social />
      </DefaultLayout>
    </>
  );
}
