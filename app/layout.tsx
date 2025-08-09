"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata can't be exported from a client component.
// You would need to handle this differently, e.g., in a server component parent
// or using the 'metadata' object in generateMetadata function if this were a page.
// For now, we remove it to make the component a client component.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <I18nextProvider i18n={i18n}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </I18nextProvider>
  );
}
