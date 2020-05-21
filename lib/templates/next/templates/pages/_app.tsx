import React from 'react';
import Head from 'next/head';
import {AppProps} from 'next/app';

import './_app.scss';

const MyApp: React.FC<AppProps> = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
