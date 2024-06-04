import Header from '@/components/header/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import TanstackProvider from '../../providers/TanstackProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Система учета обучения сотрудников',
  description: 'Автоматизация учета обучения сотрудников автомобильной компании'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <TanstackProvider>
          <Header />
          <div>{children}</div>
        </TanstackProvider>
      </body>
    </html>
  );
}
