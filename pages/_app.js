import React, { useEffect } from 'react';
import NextNprogress from 'nextjs-progressbar';
import { useRouter } from 'next/router';

import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import Script from 'next/script';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

import { GA_MEASUREMENT_ID, pageview } from '../modules/gtag';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouterChange = (url) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouterChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouterChange);
    };
  }, [router.events]);

  return (
    <>
      <Script strategy='afterInteractive' src='https://www.googletagmanager.com/gtag/js?id=G-BHZQ7RMNJN' />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${GA_MEASUREMENT_ID}');
        `,
        }}
      />
      <NextNprogress color='#29D' startPosition={0.3} stopDelayMs={200} height={3} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
