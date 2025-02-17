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
    "Explore the portfolio of Suhaib, a highly-skilled web developer and programmer with expertise in modern web technologies, performance optimization, responsive design, and innovative problem-solving.",
  keywords: [
    "Web Developer",
    "Programmer",
    "JavaScript",
    "React",
    "NextJS",
    "HTML",
    "CSS",
    "Responsive Design",
    "Performance Optimization",
    "Innovation",
    "Software Development",
    "UI/UX Design",
  ],
  authors: [
    {
      name: "Suhaib Gamal",
      url: "https://suhaeb.com",
      role: "Lead Developer",
      email: "support@suhaeb.com",
    },
  ],
  openGraph: {
    title: "Suhaib | Portfolio",
    description:
      "Discover the extensive projects and achievements of Suhaib, showcasing modern web development, performance-focused designs, and innovative solutions.",
    url: "https://suhaeb.com",
    siteName: "Suhaib Electronic Portfolio",
    images: [
      {
        url: "https://suhaeb.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Suhaib Portfolio Main Image",
      },
      {
        url: "https://suhaeb.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Suhaib Portfolio Secondary Image",
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
      "Explore the comprehensive portfolio of Suhaib, a web developer and programmer known for crafting innovative and performance-ready web applications.",
    image: "https://suhaeb.com/favicon.ico",
  },
  skills: [
    "JavaScript",
    "React",
    "NextJS",
    "HTML",
    "CSS",
    "Responsive Design",
    "Performance Optimization",
    "UI/UX Design",
    "Agile Methodologies",
    "SEO Best Practices",
  ],
  contact: {
    email: "contact@suhaeb.com",
    phone: "+1-234-567-890",
    address: "123 Developer Lane, Tech City, Country",
  },
  social: {
    github: "https://github.com/suhaibgamal",
    linkedin: "https://linkedin.com/in/suhaibgamal",
    twitter: "https://twitter.com/suhaibgamal",
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
