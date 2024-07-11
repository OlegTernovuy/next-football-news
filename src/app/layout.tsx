import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '@/components/Header';
import ClientProvider from '@/components/ClientProvider';
import { Suspense } from 'react';
import Loading from './loading';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Football news',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ClientProvider>
                    <Header />
                    <Suspense fallback={<Loading />}>{children}</Suspense>
                </ClientProvider>
            </body>
        </html>
    );
}
