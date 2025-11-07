import './globals.css';

import type { Metadata } from 'next';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

export const metadata: Metadata = {
  title: 'GTIRI.ORG',
  description: 'Global Technology & Innovation Research Institute',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <Header />
        <main className="flex-1">
          <div className="mx-auto max-w-screen-xl px-4 py-6">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
