// app/layout.jsx
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
    "Python",
    "Node.js",
    "Tailwind CSS",
    "Docker",
    "TypeScript",
    "Redux",
  ],
  contact: {
    email: "contact@suhaeb.com",
    phone: "+201556502208",
    address: "Faisal St., Cairo, Egypt",
  },
  social: {
    github: "https://github.com/suhaibgamal",
    linkedin: "https://linkedin.com/in/suhaibgamal",
    twitter: "https://twitter.com/suhaibgmal",
  },
};

// Enhanced JSON-LD Schemas
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: metadata.authors[0].name,
  alternateName: ["Suhaib", "Suhaeb"],
  url: metadata.authors[0].url,
  image: "https://suhaeb.com/profile.jpg",
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: metadata.authors[0].name,
  },
  email: `mailto:${metadata.contact.email}`,
  telephone: metadata.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: metadata.contact.address.split(",")[0].trim(),
    addressLocality:
      metadata.contact.address.split(",")[1]?.trim() || "Tech City",
    addressCountry: metadata.contact.address.split(",")[2]?.trim() || "Country",
  },
  sameAs: [
    metadata.social.github,
    metadata.social.linkedin,
    metadata.social.twitter,
  ],
  knowsAbout: metadata.skills,
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Cairo University",
  },
  nationality: {
    "@type": "Country",
    name: "Yemen",
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: metadata.openGraph.siteName || metadata.title,
  alternateName: metadata.title,
  url: metadata.openGraph.url,
  description: metadata.description,
  keywords: metadata.keywords.join(", "),
  inLanguage: metadata.openGraph.locale.split("_")[0] || "en",
  author: {
    "@type": "Person",
    name: metadata.authors[0].name,
    url: metadata.authors[0].url,
  },
  publisher: {
    // Important for E-E-A-T
    "@type": "Person",
    name: metadata.authors[0].name,
    url: metadata.authors[0].url,
  },
  datePublished: "2025-02-14",
  dateModified: "2025-05-21",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
