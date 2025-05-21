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
    "Redux", // Combined for JSON-LD
  ],
  authors: [
    {
      name: "Suhaib Gamal",
      url: "https://suhaeb.com",
      // role: "Lead Developer", // Not a standard 'authors' sub-property for Next.js metadata object for JSON-LD generation
      // email: "support@suhaeb.com", // Not a standard 'authors' sub-property
    },
  ],
  // For JSON-LD, we will reference these directly or through the main metadata object
  creator: "Suhaib Gamal", // Standard 'creator' field
  publisher: "Suhaib Gamal", // Standard 'publisher' field

  openGraph: {
    title: "Suhaib | Portfolio - Web Developer & Programmer", // Consistent title
    description:
      "Explore the portfolio of Suhaib, a highly-skilled web developer and programmer with expertise in modern web technologies, performance optimization, responsive design, and innovative problem-solving.",
    url: "https://suhaeb.com",
    siteName: "Suhaib Gamal Portfolio", // More direct sitename
    images: [
      {
        url: "https://suhaeb.com/profile.jpg", // <-- Use your main profile image here too
        width: 1200, // Adjust if known, else common OG size
        height: 630, // Adjust if known, else common OG size
        alt: "Suhaib Gamal - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@suhaibgamal", // Ensuring consistency
    creator: "@suhaibgamal", // Often good to have creator tag
    title: "Suhaib | Portfolio - Web Developer & Programmer",
    description:
      "Explore the portfolio of Suhaib Gamal, showcasing modern web development, performance-focused designs, and innovative solutions.",
    images: ["https://suhaeb.com/profile.jpg"], // Use your main profile image URL
  },
  // Custom fields for easier access by JSON-LD, ensure these values are correct
  _contact: {
    email: "contact@suhaeb.com",
    phone: "+201556502208",
    address: "Faisal St., Cairo, Egypt",
  },
  _social: {
    github: "https://github.com/suhaibgamal",
    linkedin: "https://linkedin.com/in/suhaibgamal",
    twitter: "https://twitter.com/suhaibgamal", // Corrected to 'suhaibgamal'
  },
  _siteInfo: {
    datePublished: "2024-02-14", // Your filled-in date
    dateModified: "2025-05-21", // Your filled-in date
  },
};

// Enhanced JSON-LD Schemas
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: metadata.authors[0].name,
  alternateName: ["Suhaib", "Suhaeb"],
  url: metadata.authors[0].url,
  image: metadata.openGraph.images[0].url, // Using the OG image for consistency
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: metadata.authors[0].name,
  },
  email: `mailto:${metadata._contact.email}`,
  telephone: metadata._contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: metadata._contact.address.split(",")[0]?.trim(),
    addressLocality: metadata._contact.address.split(",")[1]?.trim(),
    addressRegion: metadata._contact.address.split(",")[1]?.trim(), // Cairo can also be a region
    addressCountry: metadata._contact.address.split(",")[2]?.trim(),
  },
  sameAs: [
    metadata._social.github,
    metadata._social.linkedin,
    metadata._social.twitter,
  ],
  knowsAbout: metadata.keywords, // Using the main keywords array
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
    "@type": "Person", // Assuming personal brand
    name: metadata.authors[0].name,
    url: metadata.authors[0].url,
    logo: {
      // It's good for publisher to have a logo, can be same as person image if personal brand
      "@type": "ImageObject",
      url: metadata.openGraph.images[0].url, // Using the same main image
      width: metadata.openGraph.images[0].width || 600, // Default if not set
      height: metadata.openGraph.images[0].height || 600, // Default if not set
    },
  },
  datePublished: metadata._siteInfo.datePublished,
  dateModified: metadata._siteInfo.dateModified,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
