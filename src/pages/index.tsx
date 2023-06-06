import Head from 'next/head';
import { siteConfig } from '@/config';
import DefaultLayout from '@/components/DefaultLayout';
import HeroA from '@/components/Home/Hero';
import AboutA from '@/components/Home/About';
import NewsletterFormA from '@/components/Home/Newsletter';
import LaunchA from '@/components/Home/Launch';
import SocialA from '@/components/Home/Social';
import HeroB from '@/components/HomeB/Hero';
import AboutB from '@/components/HomeB/About';
import NewsletterFormB from '@/components/HomeB/Newsletter';
import LaunchB from '@/components/HomeB/Launch';
import SocialB from '@/components/HomeB/Social';
import Soluce from '@/components/HomeB/Soluce';
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    _paq: any[];
  }
}

export default function Home() {
  const [version, setVersion] = useState<string | null>(null);

  const determineVersion = () => {
    let randomNumber = Math.random(); // Génère un nombre aléatoire entre 0 (inclus) et 1 (exclus)
    let selectedVersion: string;
  
    if (typeof window !== 'undefined') {
      // Initialise window._paq à un tableau vide si elle n'existe pas
      window._paq = window._paq || [];
  
      if (randomNumber < 0.5) {
        selectedVersion = 'A';
        window._paq.push(['AbTesting::enter', {experiment: 'Landing-page', 'variation': 'original'}]);
      } else {
        selectedVersion = 'B';
        window._paq.push(['AbTesting::enter', {experiment: 'Landing-page', 'variation': 'landingb'}]);
      }
      
      setVersion(selectedVersion);
    }
  }

  useEffect(() => {
    determineVersion();
  }, []);

  const title = `${siteConfig.name}, la plateforme qui rend la culture accessible à tous`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <DefaultLayout>
        {version === 'A' ? (
          <>
            <HeroA />
            <AboutA />
            <LaunchA />
            <NewsletterFormA />
            <SocialA />
          </>
        ) : (
          <>
            <HeroB />
            <AboutB />
            <Soluce />
            <LaunchB />
            <NewsletterFormB />
            <SocialB />
          </>
        )}
      </DefaultLayout>
    </>
  );
}