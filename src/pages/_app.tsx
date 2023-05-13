import Head from 'next/head';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';

import '@/styles/globals.css';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export default function App({ Component, pageProps }: AppProps) {
  // Track current page
  const router = useRouter();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`w-full min-h-screen ${montserrat.variable} font-mont bg-light dark:bg-dark`}
      >
        <Navbar />
        {/* Monitors for any motion effect from any pages */}
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
