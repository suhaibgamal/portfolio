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
  authors: [
    {
      name: "Suhaib Gamal",
      url: "https://suhaeb.com" /*, alternateNameAliases: ["Suhaib", "Suhaeb"] // Example if you want to source this */,
    },
  ],
  creator: "Suhaib Gamal",
  publisher: "Suhaib Gamal", // Used by meta tags, schema publisher is an object
  openGraph: {
    title: "Suhaib | Portfolio - Web Developer & Programmer",
    description:
      "Explore the portfolio of Suhaib, a highly-skilled web developer and programmer with expertise in modern web technologies, performance optimization, responsive design, and innovative problem-solving.",
    url: "https://suhaeb.com",
    siteName: "Suhaib Gamal Portfolio",
    images: [
      {
        url: "https://suhaeb.com/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Suhaib Gamal - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@suhaibgamal",
    creator: "@suhaibgamal",
    title: "Suhaib | Portfolio - Web Developer & Programmer",
    description:
      "Explore the portfolio of Suhaib Gamal, showcasing modern web development, performance-focused designs, and innovative solutions.",
    images: ["https://suhaeb.com/profile.jpg"],
  },
  _contact: {
    email: "contact@suhaeb.com",
    phone: "+201556502208",
    address: "Faisal St., Cairo, Egypt",
  },
  _social: {
    github: "https://github.com/suhaibgamal",
    linkedin: "https://linkedin.com/in/suhaibgamal",
    twitter: "https://twitter.com/suhaibgamal",
  },
  _siteInfo: {
    datePublished: "2024-02-14",
    dateModified: "2025-05-21", // Assuming this is your intended date
  },
  // Example: Define other person details if they might be optional
  _personDetails: {
    jobTitle: "Full Stack Developer", // Default or sourced
    alumniOfName: "Cairo University", // Default or sourced
    nationalityName: "Yemen", // Default or sourced
    // alternateNameAliases: ["Suhaib", "Suhaeb"] // Could be sourced from authors or here
  },
};

// --- BEGIN JSON-LD SCHEMAS ---

// --- Person Schema ---
let personSchema = {};
const mainAuthor = metadata.authors?.[0];
const mainOgImage = metadata.openGraph?.images?.[0];

if (mainAuthor?.name && mainAuthor?.url) {
  const initialPersonSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: mainAuthor.name,
    url: mainAuthor.url,
    image: mainOgImage?.url,
    jobTitle: metadata._personDetails?.jobTitle,
    email: metadata._contact?.email
      ? `mailto:${metadata._contact.email}`
      : undefined,
    telephone: metadata._contact?.phone,
    // alternateName: metadata._personDetails?.alternateNameAliases || (mainAuthor.name === "Suhaib Gamal" ? ["Suhaib", "Suhaeb"] : undefined),
    // Using the previously validated structure for alternateName:
    alternateName:
      mainAuthor.name === "Suhaib Gamal" ? ["Suhaib", "Suhaeb"] : undefined,

    worksFor: mainAuthor.name
      ? {
          "@type": "Organization",
          name: mainAuthor.name, // Assuming person's name is the org name for personal brand
        }
      : undefined,

    address: (() => {
      if (!metadata._contact?.address) return undefined;
      const parts = metadata._contact.address.split(",").map((p) => p.trim());
      const addr = { "@type": "PostalAddress" };
      if (parts[0]) addr.streetAddress = parts[0];
      if (parts[1]) {
        addr.addressLocality = parts[1];
        addr.addressRegion = parts[1]; // As per original logic
      }
      if (parts[2]) addr.addressCountry = parts[2];
      return addr.streetAddress || addr.addressLocality || addr.addressCountry
        ? addr
        : undefined;
    })(),

    sameAs: [
      metadata._social?.github,
      metadata._social?.linkedin,
      metadata._social?.twitter,
    ].filter(Boolean), // Filter out any undefined/empty strings

    knowsAbout:
      metadata.keywords?.length > 0 ? [...metadata.keywords] : undefined,

    alumniOf: metadata._personDetails?.alumniOfName
      ? {
          "@type": "EducationalOrganization",
          name: metadata._personDetails.alumniOfName,
        }
      : undefined,

    nationality: metadata._personDetails?.nationalityName
      ? {
          "@type": "Country",
          name: metadata._personDetails.nationalityName,
        }
      : undefined,
  };

  // Clean up the constructed schema
  personSchema = { ...initialPersonSchema };
  Object.keys(personSchema).forEach((key) => {
    if (personSchema[key] === undefined) delete personSchema[key];
    else if (Array.isArray(personSchema[key]) && personSchema[key].length === 0)
      delete personSchema[key];
    else if (
      typeof personSchema[key] === "string" &&
      personSchema[key].trim() === ""
    )
      delete personSchema[key];
    else if (
      typeof personSchema[key] === "object" &&
      personSchema[key] !== null &&
      !Array.isArray(personSchema[key])
    ) {
      // For nested objects, ensure they have meaningful content beyond just @type
      const objKeys = Object.keys(personSchema[key]);
      if (objKeys.length === 1 && objKeys[0] === "@type") {
        delete personSchema[key]; // Remove if only @type
      } else if (objKeys.length === 0) {
        delete personSchema[key]; // Remove if completely empty (should not happen with conditional construction)
      }
    }
  });
  // Specific check for sameAs if it became empty after filtering
  if (personSchema.sameAs && personSchema.sameAs.length === 0) {
    delete personSchema.sameAs;
  }
}

// --- WebSite Schema ---
let webSiteSchema = {};
if (metadata.openGraph?.url && metadata.openGraph?.siteName) {
  const initialWebSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: metadata.openGraph.siteName,
    url: metadata.openGraph.url,
    alternateName: metadata.title,
    description: metadata.description,
    keywords:
      metadata.keywords?.length > 0 ? metadata.keywords.join(", ") : undefined,
    inLanguage: metadata.openGraph.locale?.split("_")[0],

    author:
      mainAuthor?.name && mainAuthor?.url
        ? {
            "@type": "Person",
            name: mainAuthor.name,
            url: mainAuthor.url,
          }
        : undefined,

    publisher:
      mainAuthor?.name && mainAuthor?.url
        ? {
            // Using Organization
            "@type": "Organization",
            name: mainAuthor.name, // Publishing organization name
            url: mainAuthor.url,
            logo: mainOgImage?.url
              ? {
                  "@type": "ImageObject",
                  url: mainOgImage.url,
                  width: mainOgImage.width,
                  height: mainOgImage.height,
                }
              : undefined,
          }
        : undefined,

    datePublished: metadata._siteInfo?.datePublished,
    dateModified: metadata._siteInfo?.dateModified,
  };

  // Clean up the constructed schema
  webSiteSchema = { ...initialWebSiteSchema };
  Object.keys(webSiteSchema).forEach((key) => {
    if (webSiteSchema[key] === undefined) delete webSiteSchema[key];
    else if (
      Array.isArray(webSiteSchema[key]) &&
      webSiteSchema[key].length === 0
    )
      delete webSiteSchema[key];
    else if (
      typeof webSiteSchema[key] === "string" &&
      webSiteSchema[key].trim() === ""
    )
      delete webSiteSchema[key];
    else if (
      key === "publisher" &&
      webSiteSchema.publisher?.logo &&
      Object.keys(webSiteSchema.publisher.logo).length <= 1
    ) {
      // only @type for logo
      delete webSiteSchema.publisher.logo;
    }
    // Further clean up for potentially empty nested objects like author/publisher if they only contain @type
    else if (
      typeof webSiteSchema[key] === "object" &&
      webSiteSchema[key] !== null &&
      !Array.isArray(webSiteSchema[key])
    ) {
      const objKeys = Object.keys(webSiteSchema[key]);
      if (objKeys.length === 1 && objKeys[0] === "@type") {
        delete webSiteSchema[key];
      } else if (objKeys.length === 0) {
        delete webSiteSchema[key];
      }
    }
  });
  // If publisher still exists, but its logo was removed, and it's otherwise empty (e.g. just name/url)
  // it's usually fine. But if it became truly minimal:
  if (
    webSiteSchema.publisher &&
    Object.keys(webSiteSchema.publisher).length <= 1
  ) {
    // only @type, or completely empty
    delete webSiteSchema.publisher;
  }
  if (webSiteSchema.author && Object.keys(webSiteSchema.author).length <= 1) {
    // only @type
    delete webSiteSchema.author;
  }
}

// CRITICAL DEBUG STEP (uncomment in your local environment if needed):
// console.log("PERSON SCHEMA TO VALIDATE:", JSON.stringify(personSchema, null, 2));
// console.log("WEBSITE SCHEMA TO VALIDATE:", JSON.stringify(webSiteSchema, null, 2));

export default function RootLayout({ children }) {
  // Only render script if schema object is not empty or just context/type
  const shouldRenderPersonSchema = Object.keys(personSchema || {}).length > 2;
  const shouldRenderWebSiteSchema = Object.keys(webSiteSchema || {}).length > 2;

  return (
    <html lang="en">
      <head>
        {shouldRenderPersonSchema && (
          <script
            id="person-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          />
        )}
        {shouldRenderWebSiteSchema && (
          <script
            id="website-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
          />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
