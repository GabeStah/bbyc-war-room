import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { Inter } from 'next/font/google';
import React from 'react';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script>{`const whTooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true};`}</Script>
      <Script src='https://wow.zamimg.com/js/tooltips.js'></Script>
    </>
  );
}
