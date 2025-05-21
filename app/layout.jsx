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
    "Python",
    "Node.js",
    "Tailwind CSS",
    "Docker",
    "TypeScript",
    "Redux",
  ],
  authors: [{ name: "Suhaib Gamal", url: "https://suhaeb.com" }],
  creator: "Suhaib Gamal",
  publisher: "Suhaib Gamal",
  openGraph: {
    title: "Suhaib | Portfolio - Web Developer & Programmer",
    description:
      "Explore the portfolio of Suhaib, a highly-skilled web developer and programmer with expertise in modern web technologies, performance optimization, responsive design, and innovative problem-solving.",
    url: "https://suhaeb.com",
    siteName: "Suhaib Gamal Portfolio",
    images: [
      {
        url: "https://suhaeb.com/profile.jpg", // Main image for OG
        width: 1200, // Adjust as needed
        height: 630, // Adjust as needed
        alt: "Suhaib Gamal - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@suhaibgamal", // Verify this handle
    creator: "@suhaibgamal", // Verify this handle
    title: "Suhaib | Portfolio - Web Developer & Programmer",
    description:
      "Explore the portfolio of Suhaib Gamal, showcasing modern web development, performance-focused designs, and innovative solutions.",
    images: ["https://suhaeb.com/profile.jpg"], // Main image for Twitter
  },
  // Custom fields for easier access by JSON-LD
  _contact: {
    email: "contact@suhaeb.com",
    phone: "+201556502208",
    address: "Faisal St., Cairo, Egypt",
  },
  _social: {
    github: "https://github.com/suhaibgamal",
    linkedin: "https://linkedin.com/in/suhaibgamal",
    twitter: "https://twitter.com/suhaibgamal", // Changed from suhaibgmal, please verify correct one
  },
  _siteInfo: {
    datePublished: "2024-02-14", // Your chosen date
    dateModified: "2025-05-21", // Your chosen date
  },
};

// --- BEGIN JSON-LD SCHEMAS ---
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: metadata.authors[0].name,
  alternateName: ["Suhaib", "Suhaeb"],
  url: metadata.authors[0].url,
  image: metadata.openGraph.images[0].url, // Using the same image as OG
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: metadata.authors[0].name, // Assuming personal brand
  },
  email: `mailto:${metadata._contact.email}`,
  telephone: metadata._contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: metadata._contact.address.split(",")[0]?.trim(),
    addressLocality: metadata._contact.address.split(",")[1]?.trim(),
    addressRegion: metadata._contact.address.split(",")[1]?.trim(), // Cairo can also be a region/governorate
    addressCountry: metadata._contact.address.split(",")[2]?.trim(),
  },
  sameAs: [
    metadata._social.github,
    metadata._social.linkedin,
    metadata._social.twitter,
  ],
  knowsAbout: metadata.keywords,
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
  name: metadata.openGraph.siteName,
  alternateName: metadata.title,
  url: metadata.openGraph.url,
  description: metadata.description,
  keywords: metadata.keywords.join(", "),
  inLanguage: metadata.openGraph.locale.split("_")[0],
  author: {
    "@type": "Person",
    name: metadata.authors[0].name,
    url: metadata.authors[0].url,
  },
  publisher: {
    "@type": "Organization", // Changed from "Person" to "Organization"
    name: metadata.authors[0].name, //  "Suhaib Gamal" can be the name of the organization/brand
    url: metadata.authors[0].url, // The URL can remain the same
    logo: {
      "@type": "ImageObject",
      url: metadata.openGraph.images[0].url, // This is now correctly under Organization
      width: metadata.openGraph.images[0].width,
      height: metadata.openGraph.images[0].height,
    },
  },
  datePublished: metadata._siteInfo.datePublished,
  dateModified: metadata._siteInfo.dateModified,
};

// --- END JSON-LD SCHEMAS ---

// CRITICAL DEBUG STEP:
// console.log("PERSON SCHEMA TO VALIDATE:", JSON.stringify(personSchema, null, 2));
// console.log("WEBSITE SCHEMA TO VALIDATE:", JSON.stringify(webSiteSchema, null, 2));

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Person Schema */}
        <script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {/* WebSite Schema */}
        <script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
