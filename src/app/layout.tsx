import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Conor Kemp - Web Developer, UI Designer',
  description: 'Conor Kemp - Fullstack Developer & UI Designer based in the UK',
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
