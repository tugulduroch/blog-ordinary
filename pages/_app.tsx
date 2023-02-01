import type { AppProps } from 'next/app';
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';
import 'styles/globals.css';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.NEXT_PUBLIC_UMAMI_ID &&
        process.env.NEXT_PUBLIC_UMAMI_URL &&
        process.env.NODE_ENV === 'production' && (
          <Script
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
            src={process.env.NEXT_PUBLIC_UMAMI_URL}
          />
        )}
      <Toaster />
      <Component {...pageProps} />;
      <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
