import Header from '@/components/ui/header/Header';
import { siteConfig } from '@/config/site';
import { NextUIProvider } from '@nextui-org/react';
import { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import TanstackProvider from '../../providers/TanstackProvider';
import 'react-toastify/dist/ReactToastify.css';

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
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <body className={inter.className}>
        <NextUIProvider>
          <TanstackProvider>
            <ToastContainer />
            <Header role="admin" />
            <div>{children}</div>
          </TanstackProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
