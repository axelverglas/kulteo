import Head from 'next/head';
import { siteConfig } from '@/config';
import DefaultLayout from '@/components/DefaultLayout';
import Hero from '@/components/Home/Hero';
import About from '@/components/Home/About';
import Countdown from '@/components/Countdown';
import NewsletterForm from '@/components/Home/Newsletter';

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
        <section className="py-12 md:py-24">
          <div className="container max-w-6xl">
            <div className="flex w-full items-center justify-center">
              <h2 className="w-64 text-center font-roc text-3xl md:text-4xl md:leading-[3rem]">
                La{' '}
                <span className="rounded-xl bg-primary px-2 pb-1 pt-2 text-black">
                  culture
                </span>{' '}
                à portée de <span className="text-primary">clic</span> !
              </h2>
            </div>
            <Countdown endDate={endDate} />
          </div>
        </section>
        <NewsletterForm />
      </DefaultLayout>
    </>
  );
}
