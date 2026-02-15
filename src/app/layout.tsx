import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lionfinance.co.nz"),
  title: {
    default: "Lion Finance | Mortgage & Loan Broker | New Zealand",
    template: "%s | Lion Finance",
  },
  description:
    "Lion Finance is your trusted mortgage and loan broker in New Zealand. Home loans, construction loans, business and commercial finance, refinance, top-up, and interest rate refix. Get the best deal.",
  keywords: [
    "mortgage broker NZ",
    "home loan New Zealand",
    "refinance NZ",
    "construction loan",
    "business loan NZ",
    "commercial loan",
    "Lion Finance",
  ],
  authors: [{ name: "Lion Finance", url: "https://lionfinance.co.nz" }],
  creator: "Lion Finance",
  publisher: "Lion Finance",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://lionfinance.co.nz",
    siteName: "Lion Finance",
    title: "Lion Finance | Mortgage & Loan Broker | New Zealand",
    description: "Your trusted mortgage and loan broker in New Zealand.",
    images: [{ url: "/hero.png", width: 1200, height: 630, alt: "Lion Finance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lion Finance | Mortgage & Loan Broker | New Zealand",
    description: "Your trusted mortgage and loan broker in New Zealand.",
    images: ["/hero.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen bg-lion-cream text-lion-dark`}
      >
        {children}
      </body>
    </html>
  );
}
