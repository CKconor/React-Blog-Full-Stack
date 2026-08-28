import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { profile } from '@/data/cv';
import './globals.css';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined) ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://www.conorkemp.com');

const title = `Conor Kemp - ${profile.title}`;
const description =
  'Conor Kemp - Lead Frontend Developer building React, Next.js and TypeScript applications ' +
  'on serverless AWS backends. Based in Worcester, UK.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: 'Conor Kemp',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: '#0F0F0F',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="dark:bg-darkmode bg-lightmode">
          <Container>
            <Header />
            {children}
            <Footer />
          </Container>
        </div>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1HQ13DP4SV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1HQ13DP4SV');
          `}
        </Script>
      </body>
    </html>
  );
}
