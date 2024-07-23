import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from '../lib/utils'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
  

export const metadata: Metadata = {
  // metadataBase: new URL(`${process.env.BASE_URL}`,),
  title: "Archegos Ventures | High-end Pharmaceuticals",
  description: "Pharmaceutical Manufacturing & Medical Care Company",
  keywords: ["pharmaceuticals", "medical care", "healthcare", "medicines", "online", "pharma"],
  authors: [{ name: "Raiia Singh" }],
  creator: "@raiiasingh19",
  openGraph: {
    title: "Archegos Ventures | High-end Pharmaceuticals",
    description: "Pharmaceutical Manufacturing & Medical Care Company",
    url: `${process.env.BASE_URL}`,
    siteName: "Archegos Pharmaceuticals",
    images: [
      {
        url: `${process.env.BASE_URL}/Logo-title.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Archegos Ventures | High-end Pharmaceuticals",
    description: "Pharmaceutical Manufacturing & Medical Care Company",
    images: [`${process.env.BASE_URL}/twitter-image.jpg`],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: `${process.env.BASE_URL}/current-page`,
  },
  robots: {
    index: false,
    follow: false,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='light'>
      <body className={cn(
        'min-h-screen font-sans antialiased grainy',
        inter.className
      )}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}


