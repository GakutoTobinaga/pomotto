import { GeistSans } from 'geist/font/sans';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Pomotto',
  description: 'Next Gen Pomodoro Experience!',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={GeistSans.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        suppressHydrationWarning={true}
        className="bg-background text-foreground flex flex-col"
      >
        <Navbar />
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
