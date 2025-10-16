import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { InteractiveBackground } from '@/components/layout/InteractiveBackground';
import { UserProvider } from '@/components/providers/user-provider';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Fireflow - Modern Solutions for Home & Business',
    template: '%s | Fireflow',
  },
  description: 'Fireflow offers expert services in plumbing, electrical work, carpentry, and more, alongside cutting-edge web development solutions. Your one-stop shop for quality and reliability.',
  openGraph: {
    title: 'Fireflow - Modern Solutions for Home & Business',
    description: 'Expert home services and web development solutions.',
    type: 'website',
    locale: 'en_US',
    url: 'https://fireflow.app', // Replace with your actual domain
    siteName: 'Fireflow',
    images: [
      {
        url: 'https://fireflow.app/og-image.jpg', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: 'Fireflow Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fireflow - Modern Solutions for Home & Business',
    description: 'Expert home services and web development solutions.',
    // images: ['https://fireflow.app/og-image.jpg'], // Replace with your actual OG image URL
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen font-body bg-background text-foreground antialiased')} suppressHydrationWarning>
        <ThemeProvider>
          <UserProvider>
            <div className="relative flex min-h-dvh flex-col">
              <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-br from-background via-background/95 to-background/80" />
              <InteractiveBackground />
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
