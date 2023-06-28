import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { Toaster } from 'react-hot-toast';
import { siteConfig } from '@/config';
import Head from 'next/head';
import TagManager from 'gtm-for-react';
import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

const tagManagerArgs = {
  gtmId: 'GTM-T5LNRJX',
};

const Indivisible = localFont({
  src: [
    {
      path: '../../public/font/Indivisible-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/Indivisible-Medium.woff2',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../public/font/Indivisible-SemiBold.woff2',
      weight: '600',
      style: 'semibold',
    },
  ],
});

const RocGrotesk = localFont({
  src: [
    {
      path: '../../public/font/Roc_Grotesk_Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/font/Roc_Grotesk_Medium.woff2',
      weight: '500',
      style: 'medium',
    },
  ],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={siteConfig.description} />
        <meta name="robots" content="all" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={siteConfig.url} />
        <link rel="dns-prefetch" href={siteConfig.url} />
        <link rel="preconnect" href={siteConfig.url} />

        {/* Open Graph */}
        <meta property="og:title" content={siteConfig.name} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content="../../public/img/logo.svg" />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:title" content={siteConfig.name} />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta name="twitter:image" content="../../public/img/logo.svg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <style jsx global>
        {`
          :root {
            --font-indivisible: ${Indivisible.style.fontFamily};
            --font-roc: ${RocGrotesk.style.fontFamily};
          }
        `}
      </style>
      <ThemeProvider attribute="class">
        <SessionProvider session={session}>
          <Toaster />
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}
