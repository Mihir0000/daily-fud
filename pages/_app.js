import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';
import PreLoader from '@/src/layouts/PreLoader';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  const [preLoader, setPreLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPreLoader(false);
    }, 1500);
  }, []);

  return (
    <Fragment>
      <Head>
        {/* seo begin */}
        <title>DailyFud</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* seo end */}
      </Head>
      {preLoader && <PreLoader />}
      {!preLoader && <Component {...pageProps} />}
    </Fragment>
  );
}
