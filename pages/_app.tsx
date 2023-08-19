import "../styles/globals.css";

import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme/mui-theme";
import createEmotionCache from "../lib/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { AppProps } from 'next/app';
import Script from "next/script";

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-QKCWGT5WXP" />
      <Script id="g-analytics">
      {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-QKCWGT5WXP');`}
      </Script>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}