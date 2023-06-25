import Head from 'next/head';
import { siteConfig } from '@/config';
import About from '@/components/Landing/About';
import Newsletter from '@/components/Landing/Newsletter';
import Hero from '@/components/Landing/Hero';
import DefaultLayout from '@/components/Landing/DefaultLayout';
import Audience from '@/components/Landing/Audience';
import Solution from '@/components/Landing/Solution';
import Number from '@/components/Landing/Number';

export default function Home() {
  const title = `${siteConfig.name}, la plateforme qui rend la culture accessible à tous`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <DefaultLayout>
        <Hero />
        <About />
        <Audience />
        <Solution />
        <Number />
        <Newsletter />
      </DefaultLayout>
    </>
  );
}
