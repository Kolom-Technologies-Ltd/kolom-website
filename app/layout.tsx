import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Preloader from "@/components/Preloader";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kolom.ltd"),
  title: "Kolom Technologies | Software, Design & AI Solutions",
  description:
    "Kolom Technologies Ltd. is an elite team of engineers, designers and AI specialists building the next generation of software products.",
  openGraph: {
    title: "Kolom Technologies | Software, Design & AI Solutions",
    description:
      "Kolom Technologies Ltd. is an elite team of engineers, designers and AI specialists building the next generation of software products.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kolom Technologies | Software, Design & AI Solutions",
    description:
      "Kolom Technologies Ltd. is an elite team of engineers, designers and AI specialists building the next generation of software products.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LFCYY3G3PH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LFCYY3G3PH');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <Preloader />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
