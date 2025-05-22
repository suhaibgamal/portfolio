// app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
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
      "Explore the comprehensive portfolio of Suhaib, a web developer and programmer known for crafting innovative and performance-ready web applications.",
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
    datePublished: "2024-02-14", // Your chosen date
    dateModified: "2025-05-22", // IMPORTANT: Update this to the current date of deployment
  },
  // Project descriptions for JSON-LD (can also be fetched or managed elsewhere if they grow)
  _projectDescriptions: {
    moviesHub:
      "Modern Next.js 15 app for movie & TV discovery. Features TailwindCSS, Prisma, NextAuth, TMDB API, watchlist & random picker. Fast, responsive, user-friendly! 🚀 This project showcases my ability to integrate external APIs and manage complex application state for a rich user experience.",
    taskManager:
      "This is a simple React-based task management component that allows users to mark tasks as completed and delete them. It leverages local storage for task persistence and updates dynamically upon user interaction, demonstrating efficient client-side data management.",
    passwordManager:
      "A simple password manager built with Python and PyQt6 to securely store and manage your passwords locally. This desktop application emphasizes security fundamentals and practical utility in everyday digital life.",
    expenseTracker:
      "Expense Tracker 3.0 is a PyQt6-based desktop application for managing personal expenses. Users can track, categorize, and export their expenses, making financial management simple and efficient through a clear, user-friendly interface.",
  },
};

// --- JSON-LD SCHEMAS ---

const personId = metadata.authors[0].url + "/#person";

const personSchemaContent = {
  "@type": "Person",
  "@id": personId,
  name: metadata.authors[0].name,
  alternateName: ["Suhaib", "Suhaeb"],
  url: metadata.authors[0].url,
  image: metadata.openGraph.images[0].url,
  jobTitle: "Full Stack Developer",
  worksFor: { "@type": "Organization", name: metadata.authors[0].name },
  email: `mailto:${metadata._contact.email}`,
  telephone: metadata._contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: metadata._contact.address.split(",")[0]?.trim(),
    addressLocality: metadata._contact.address.split(",")[1]?.trim(),
    addressRegion: metadata._contact.address.split(",")[1]?.trim(),
    addressCountry: metadata._contact.address.split(",")[2]?.trim(),
  },
  sameAs: [
    metadata._social.github,
    metadata._social.linkedin,
    metadata._social.twitter,
  ],
  knowsAbout: metadata.keywords,
  alumniOf: { "@type": "EducationalOrganization", name: "Cairo University" },
  nationality: { "@type": "Country", name: "Yemen" },
};

const webSiteSchemaContent = {
  "@type": "WebSite",
  "@id": metadata.openGraph.url + "/#website",
  name: metadata.openGraph.siteName,
  alternateName: metadata.title,
  url: metadata.openGraph.url,
  description: metadata.description,
  keywords: metadata.keywords,
  inLanguage: metadata.openGraph.locale.split("_")[0],
  author: { "@type": "Person", "@id": personId },
  publisher: {
    "@type": "Person",
    name: metadata.authors[0].name,
    "@id": personId,
    logo: {
      "@type": "ImageObject",
      url: metadata.openGraph.images[0].url,
      width: metadata.openGraph.images[0].width,
      height: metadata.openGraph.images[0].height,
    },
  },
  datePublished: metadata._siteInfo.datePublished,
  dateModified: metadata._siteInfo.dateModified,
  mainEntity: { "@type": "Person", "@id": personId },
};

// Project Schemas - Typed as SoftwareApplication where appropriate
const moviesHubSchemaContent = {
  "@type": "SoftwareApplication", // Changed to SoftwareApplication
  "@id": "https://movies.suhaeb.com/#project",
  name: "Movies Hub",
  applicationCategory: "WebApplication", // Added
  operatingSystem: "Cross-platform", // Web apps are generally cross-platform
  description: metadata._projectDescriptions.moviesHub,
  url: "https://movies.suhaeb.com",
  image: "https://suhaeb.com/movies-hub.webp",
  author: { "@type": "Person", "@id": personId },
  genre: ["Entertainment", "Movie Database"], // Removed "Web Application" as it's in applicationCategory
  isPartOf: { "@id": metadata.openGraph.url + "/#website" },
  // "offers" and "aggregateRating" are omitted as they don't apply to this portfolio piece
};

const taskManagerSchemaContent = {
  "@type": "SoftwareApplication", // Changed to SoftwareApplication
  "@id": "https://task-manager.suhaeb.com/#project",
  name: "Task Manager",
  applicationCategory: "WebApplication", // Added
  operatingSystem: "Cross-platform",
  description: metadata._projectDescriptions.taskManager,
  url: "https://task-manager.suhaeb.com",
  image: "https://suhaeb.com/task-manager.avif",
  author: { "@type": "Person", "@id": personId },
  genre: ["Productivity"], // Removed "Web Application"
  isPartOf: { "@id": metadata.openGraph.url + "/#website" },
};

const passwordManagerSchemaContent = {
  "@type": "SoftwareApplication",
  "@id": metadata._social.github + "/Password-Manager/#project",
  name: "Password Manager",
  applicationCategory: "SecurityApplication", // Correct
  operatingSystem: "Windows, macOS, Linux",
  programmingLanguage: "Python",
  description: metadata._projectDescriptions.passwordManager,
  author: { "@type": "Person", "@id": personId },
  image: "https://suhaeb.com/password_manager.webp",
  codeRepository: metadata._social.github + "/Password-Manager",
  isPartOf: { "@id": metadata.openGraph.url + "/#website" },
};

const expenseTrackerSchemaContent = {
  "@type": "SoftwareApplication",
  "@id": metadata._social.github + "/Expense-Tracker/#project",
  name: "Expense Tracker",
  applicationCategory: "FinanceApplication", // Correct
  operatingSystem: "Windows, macOS, Linux",
  programmingLanguage: "Python",
  description: metadata._projectDescriptions.expenseTracker,
  author: { "@type": "Person", "@id": personId },
  image: "https://suhaeb.com/expense_tracker.webp",
  codeRepository: metadata._social.github + "/Expense-Tracker",
  isPartOf: { "@id": metadata.openGraph.url + "/#website" },
};

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    personSchemaContent,
    webSiteSchemaContent,
    moviesHubSchemaContent,
    taskManagerSchemaContent,
    passwordManagerSchemaContent,
    expenseTrackerSchemaContent,
  ],
};

// For debugging (uncomment locally):
// console.log("COMBINED SCHEMA TO VALIDATE:", JSON.stringify(combinedSchema, null, 2));

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
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
