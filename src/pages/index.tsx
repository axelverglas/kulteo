import Head from 'next/head';
import { siteConfig } from '@/config';
import DefaultLayout from '@/components/DefaultLayout';
import Hero from '@/components/Home/Hero';
import Navbar from '@/components/Navbar';
import About from '@/components/Home/About';
import Countdown from '@/components/Countdown';

export default function Home() {
  const endDate = new Date('2023-06-30T00:00:00');
  return (
    <>
      <Head>
        <title>{siteConfig.name}</title>
      </Head>
      <DefaultLayout>
        <Hero />
        <About />
        <section className='py-12 md:py-24'>
          <div className='container max-w-6xl'>
            <div className='w-full flex items-center justify-center'>
            <h2 className='font-roc w-64 text-center text-3xl md:leading-[3rem] md:text-4xl'>La <span className='bg-primary text-black rounded-xl px-2 pt-2 pb-1'>culture</span> à portée de <span className='text-primary'>clic</span> !</h2>
            </div>
            <Countdown endDate={endDate} />
          </div>
        </section>
      </DefaultLayout>
    </>
  );
}
