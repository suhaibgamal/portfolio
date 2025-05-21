// app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google"; // [cite: 413]
import "./globals.css"; // [cite: 413]

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] }); // [cite: 414]
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); // [cite: 414]

export const metadata = {
  // [cite: 415]
  title: "Suhaib | Portfolio - Web Developer & Programmer", // [cite: 415]
  description:
    "Explore the portfolio of Suhaib, a highly-skilled web developer and programmer with expertise in modern web technologies, performance optimization, responsive design, and innovative problem-solving.", // [cite: 415]
  keywords: [
    // [cite: 415]
    "Web Developer",
    "Programmer",
    "JavaScript",
    "React",
    "NextJS",
    "HTML",
    "CSS", // [cite: 415]
    "Responsive Design",
    "Performance Optimization",
    "Innovation",
    "Software Development",
    "UI/UX Design", // [cite: 415]
    "Python",
    "Node.js",
    "Tailwind CSS",
    "Docker",
    "TypeScript",
    "Redux", // [cite: 419]
  ],
  authors: [{ name: "Suhaib Gamal", url: "https://suhaeb.com" }], // [cite: 416]
  creator: "Suhaib Gamal", // [cite: 416]
  publisher: "Suhaib Gamal", // [cite: 416]
  openGraph: {
    // [cite: 416]
    title: "Suhaib | Portfolio - Web Developer & Programmer", // [cite: 416]
    description:
      "Explore the portfolio of Suhaib, a highly-skilled web developer and programmer with expertise in modern web technologies, performance optimization, responsive design, and innovative problem-solving.", // [cite: 416] // Ensured consistency
    url: "https://suhaeb.com", // [cite: 416]
    siteName: "Suhaib Gamal Portfolio", // [cite: 416] // More direct
    images: [
      // [cite: 416]
      {
        url: "https://suhaeb.com/profile.jpg", // IMPORTANT: Ensure this image exists and is suitable for OG
        width: 1200, // [cite: 417]
        height: 630, // [cite: 417]
        alt: "Suhaib Gamal - Full Stack Developer", // [cite: 417]
      },
    ],
    locale: "en_US", // [cite: 418]
    type: "website", // [cite: 418]
  },
  twitter: {
    // [cite: 418]
    card: "summary_large_image", // [cite: 418]
    site: "@suhaibgamal", // [cite: 418] // Ensure this is your correct active handle
    creator: "@suhaibgamal", // [cite: 419] // Ensure this is your correct active handle
    title: "Suhaib | Portfolio - Web Developer & Programmer", // [cite: 419]
    description:
      "Explore the comprehensive portfolio of Suhaib, a web developer and programmer known for crafting innovative and performance-ready web applications.", // [cite: 419]
    images: ["https://suhaeb.com/profile.jpg"], // [cite: 419] // IMPORTANT: Use the same main profile image
  },
  // Custom fields used to populate JSON-LD
  _contact: {
    // [cite: 419]
    email: "contact@suhaeb.com", // [cite: 419]
    phone: "+201556502208", // [cite: 419]
    address: "Faisal St., Cairo, Egypt", // [cite: 420] // Your provided address
  },
  _social: {
    // [cite: 420]
    github: "https://github.com/suhaibgamal", // [cite: 420]
    linkedin: "https://linkedin.com/in/suhaibgamal", // [cite: 420]
    twitter: "https://twitter.com/suhaibgamal", // [cite: 420] // Corrected handle
  },
  _siteInfo: {
    datePublished: "2024-02-14", // Your provided date
    dateModified: "2025-05-22", // IMPORTANT: Update this to the current date of deployment
  },
};

// --- JSON-LD SCHEMAS ---

const personId = metadata.authors[0].url + "/#person"; // Unique ID for the Person on this page

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
    addressRegion: metadata._contact.address.split(",")[1]?.trim(), // Cairo can also be a region/governorate
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
  keywords: metadata.keywords, // Using the array directly
  inLanguage: metadata.openGraph.locale.split("_")[0],
  author: { "@type": "Person", "@id": personId },
  publisher: {
    "@type": "Person",
    name: metadata.authors[0].name, // Name of the publisher (you)
    "@id": personId, // Can reference your Person @id if you are the publisher
    logo: {
      "@type": "ImageObject",
      url: metadata.openGraph.images[0].url, // Your profile image can serve as a logo
      width: metadata.openGraph.images[0].width,
      height: metadata.openGraph.images[0].height,
    },
  },
  datePublished: metadata._siteInfo.datePublished,
  dateModified: metadata._siteInfo.dateModified,
  mainEntity: { "@type": "Person", "@id": personId },
};

// Project Schemas
const moviesHubSchemaContent = {
  "@type": "WebSite", // This is a live web application
  "@id": "https://movies.suhaeb.com/#project",
  name: "Movies Hub",
  description:
    "Modern Next.js 15 app for movie & TV discovery. Features TailwindCSS, Prisma, NextAuth, TMDB API, watchlist & random picker. Fast, responsive, user-friendly! 🚀",
  url: "https://movies.suhaeb.com",
  image: "https://suhaeb.com/movies-hub.webp",
  author: { "@type": "Person", "@id": personId },
  genre: ["Entertainment", "Movie Database", "Web Application"],
  applicationCategory: "MultimediaApplication",
  isPartOf: { "@id": metadata.openGraph.url + "/#website" }, // Linking project to main website
};

const taskManagerSchemaContent = {
  "@type": "WebSite", // This is also a live web application
  "@id": "https://task-manager.suhaeb.com/#project",
  name: "Task Manager",
  description:
    "This is a simple React-based task management component that allows users to mark tasks as completed and delete them. It leverages local storage for task persistence and updates dynamically upon user interaction.",
  url: "https://task-manager.suhaeb.com",
  image: "https://suhaeb.com/task-manager.avif",
  author: { "@type": "Person", "@id": personId },
  genre: ["Productivity", "Web Application"],
  applicationCategory: "ProductivityApplication",
  isPartOf: { "@id": metadata.openGraph.url + "/#website" },
};

const passwordManagerSchemaContent = {
  "@type": "SoftwareApplication",
  "@id": metadata._social.github + "/Password-Manager/#project",
  name: "Password Manager",
  description:
    "A simple password manager built with Python and PyQt6 to securely store and manage your passwords.",
  applicationCategory: "SecurityApplication",
  operatingSystem: "Windows, macOS, Linux",
  programmingLanguage: "Python",
  author: { "@type": "Person", "@id": personId },
  image: "https://suhaeb.com/password_manager.webp",
  codeRepository: metadata._social.github + "/Password-Manager",
  isPartOf: { "@id": metadata.openGraph.url + "/#website" },
};

const expenseTrackerSchemaContent = {
  "@type": "SoftwareApplication",
  "@id": metadata._social.github + "/Expense-Tracker/#project",
  name: "Expense Tracker",
  description:
    "Expense Tracker 3.0 is a PyQt6-based desktop application for managing personal expenses. Users can track, categorize, and export their expenses, making financial management simple and efficient.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Windows, macOS, Linux",
  programmingLanguage: "Python",
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

export default function RootLayout({ children }) {
  // [cite: 420]
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} // [cite: 420]
      >
        {children}
      </body>
    </html>
  );
} // [cite: 421]
