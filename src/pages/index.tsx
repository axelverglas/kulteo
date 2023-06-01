import Head from 'next/head';
import { siteConfig } from '@/config';
import DefaultLayout from '@/components/DefaultLayout';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import About from '@/components/About';

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteConfig.name}</title>
      </Head>
      <Navbar />
      <DefaultLayout>
        <Hero />
        <About />
      </DefaultLayout>
    </>
  );
}
