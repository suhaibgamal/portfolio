import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Suhaib | Portfolio - Web Developer & Programmer",
  description:
    "Explore the portfolio of Suhaib, a skilled web developer and programmer. Discover projects, skills, and services showcasing modern web solutions.",
  openGraph: {
    title: "Suhaib | Portfolio",
    description:
      "Explore the portfolio of Suhaib, a skilled web developer and programmer.",
    url: "https://suhaeb.com",
    siteName: "Suhaeb.com",
    images: [
      {
        url: "https://suhaeb.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Suhaib Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@suhaibgamal",
    title: "Suhaib | Portfolio",
    description:
      "Explore the portfolio of Suhaib, a skilled web developer and programmer.",
    image: "https://suhaeb.com/og-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
