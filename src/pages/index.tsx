import Head from 'next/head';
import { siteConfig } from '@/config';
import DefaultLayout from '@/components/DefaultLayout';
import Hero from '@/components/Home/Hero';
import About from '@/components/Home/About';
import NewsletterForm from '@/components/Home/Newsletter';
import Launch from '@/components/Home/Launch';
import Social from '@/components/Home/Social';

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteConfig.name}</title>
      </Head>
      <DefaultLayout>
        <Hero />
        <About />
        <Launch />
        <NewsletterForm />
        <Social />
      </DefaultLayout>
    </>
  );
}
