import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { Toaster } from 'react-hot-toast';

const Indivisible = localFont({
  src: [
    {
      path: '../../public/font/Indivisible-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/Indivisible-SemiBold.woff2',
      weight: '600',
      style: 'normal',
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
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-indivisible: ${Indivisible.style.fontFamily};
            --font-roc: ${RocGrotesk.style.fontFamily};
          }
        `}
      </style>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}
