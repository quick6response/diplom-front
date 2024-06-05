import Loading from '@/app/home/loading';
import Header from '@/components/ui/header/Header';
import { siteConfig } from '@/config/site';
import { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React, { Suspense } from 'react';
import TanstackProvider from '../../providers/TanstackProvider';
import { NextUIProvider } from '@nextui-org/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico'
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <NextUIProvider>
          <TanstackProvider>
            <Suspense fallback={<Loading />}>
              <Header role="admin" />
              <div>{children}</div>
            </Suspense>
          </TanstackProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
