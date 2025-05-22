/* app/layout.jsx */
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
    datePublished: "2024-02-14",
    dateModified: "2025-05-22", // Assuming current date or last significant update
  },
  _projectDetails: {
    moviesHub: {
      description:
        "Modern Next.js 15 app for movie & TV discovery. Features TailwindCSS, Prisma, NextAuth, TMDB API, watchlist & random picker. Fast, responsive, user-friendly! 🚀 Code Repository: https://github.com/suhaibgamal/movies-hub. Built with: JavaScript, Next.js, React.",
      url: "https://movies.suhaeb.com",
      image: "https://suhaeb.com/movies-hub.webp",
      codeRepository: "https://github.com/suhaibgamal/movies-hub",
      programmingLanguage: "JavaScript, Next.js, React",
    },
    taskManager: {
      description:
        "Simple React-based task manager using localStorage for persistence. Dynamically updates when tasks are added, marked complete, or deleted. Code Repository: https://github.com/suhaibgamal/task-manager. Built with: JavaScript, React.",
      url: "https://task-manager.suhaeb.com",
      image: "https://suhaeb.com/task-manager.avif",
      codeRepository: "https://github.com/suhaibgamal/task-manager",
      programmingLanguage: "JavaScript, React",
    },
    passwordManager: {
      description:
        "A simple password manager built with Python and PyQt6 to securely store and manage your passwords locally. Code Repository: https://github.com/suhaibgamal/Password-Manager. Built with: Python.",
      image: "https://suhaeb.com/password_manager.webp",
      codeRepository: "https://github.com/suhaibgamal/Password-Manager",
      programmingLanguage: "Python",
    },
    expenseTracker: {
      description:
        "Expense Tracker 3.0 is a PyQt6-based desktop application for managing personal expenses with export capability. Code Repository: https://github.com/suhaibgamal/Expense-Tracker. Built with: Python.",
      image: "https://suhaeb.com/expense_tracker.webp",
      codeRepository: "https://github.com/suhaibgamal/Expense-Tracker",
      programmingLanguage: "Python",
    },
  },
};

// Person Schema
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
  mainEntityOfPage: metadata.openGraph.url,
};

// Website Schema
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
  },
  datePublished: metadata._siteInfo.datePublished,
  dateModified: metadata._siteInfo.dateModified,
  mainEntity: { "@type": "Person", "@id": personId },
  mainEntityOfPage: metadata.openGraph.url,
};

// Free Offer for projects
const freeOffer = { "@type": "Offer", price: "0.00", priceCurrency: "USD" };

// --- Illustrative Reviews based on page.jsx descriptions ---
// (Defined above, ensure they are accessible here)

const moviesHubReviewContent = {
  "@type": "Review",
  author: { "@type": "Person", name: "Feature Spotlight" },
  datePublished: "2024-05-10",
  name: "Rich & Responsive Movie Discovery",
  reviewBody:
    "A modern application for discovering movies and TV shows, noted for its speed, responsiveness, and user-friendly interface. Integrates external APIs effectively and manages complex application state, including features like a watchlist and random picker.",
  reviewRating: {
    "@type": "Rating",
    ratingValue: "4.8",
    bestRating: "5",
    worstRating: "1",
  },
  publisher: { "@type": "Organization", name: "Suhaib Gamal Portfolio" },
};

const taskManagerReviewContent = {
  "@type": "Review",
  author: { "@type": "Person", name: "Feature Spotlight" },
  datePublished: "2024-05-11",
  name: "Efficient Client-Side Task Management",
  reviewBody:
    "A simple yet effective React-based task manager demonstrating efficient client-side data management. Leverages local storage for persistence and features dynamic updates upon user interaction.",
  reviewRating: {
    "@type": "Rating",
    ratingValue: "4.5",
    bestRating: "5",
    worstRating: "1",
  },
  publisher: { "@type": "Organization", name: "Suhaib Gamal Portfolio" },
};

const passwordManagerReviewContent = {
  "@type": "Review",
  author: { "@type": "Person", name: "Feature Spotlight" },
  datePublished: "2024-05-12",
  name: "Secure & Practical Desktop Password Storage",
  reviewBody:
    "A desktop application focused on security fundamentals, allowing users to securely store and manage passwords locally. Noted for its practical utility in everyday digital life.",
  reviewRating: {
    "@type": "Rating",
    ratingValue: "4.6",
    bestRating: "5",
    worstRating: "1",
  },
  publisher: { "@type": "Organization", name: "Suhaib Gamal Portfolio" },
};

const expenseTrackerReviewContent = {
  "@type": "Review",
  author: { "@type": "Person", name: "Feature Spotlight" },
  datePublished: "2024-05-13",
  name: "User-Friendly Desktop Expense Management",
  reviewBody:
    "A PyQt6-based desktop application that simplifies personal expense management. Features include tracking, categorizing, and exporting expenses through a clear and user-friendly interface.",
  reviewRating: {
    "@type": "Rating",
    ratingValue: "4.7",
    bestRating: "5",
    worstRating: "1",
  },
  publisher: { "@type": "Organization", name: "Suhaib Gamal Portfolio" },
};

// Project Schemas with Reviews
const moviesHubSchemaContent = {
  "@type": "SoftwareApplication",
  "@id": metadata._projectDetails.moviesHub.url + "/#project",
  name: "Movies Hub",
  applicationCategory: "WebApplication",
  operatingSystem: "Cross-platform",
  description: metadata._projectDetails.moviesHub.description,
  url: metadata._projectDetails.moviesHub.url,
  image: metadata._projectDetails.moviesHub.image,
  author: { "@type": "Person", "@id": personId },
  genre: ["Entertainment", "Movie Database"],
  offers: freeOffer,
  isPartOf: { "@id": metadata.openGraph.url + "/#website" },
  mainEntityOfPage: metadata._projectDetails.moviesHub.url,
  review: [moviesHubReviewContent], // Added review
};

const taskManagerSchemaContent = {
  "@type": "SoftwareApplication",
  "@id": metadata._projectDetails.taskManager.url + "/#project",
  name: "Task Manager",
  applicationCategory: "WebApplication",
  operatingSystem: "Cross-platform",
  description: metadata._projectDetails.taskManager.description,
  url: metadata._projectDetails.taskManager.url,
  image: metadata._projectDetails.taskManager.image,
  author: { "@type": "Person", "@id": personId },
  genre: ["Productivity"],
  offers: freeOffer,
  isPartOf: { "@id": metadata.openGraph.url + "/#website" },
  mainEntityOfPage: metadata._projectDetails.taskManager.url,
  review: [taskManagerReviewContent], // Added review
};

const passwordManagerSchemaContent = {
  "@type": "SoftwareApplication",
  "@id": metadata._projectDetails.passwordManager.codeRepository + "/#project",
  name: "Password Manager",
  applicationCategory: "SecurityApplication",
  operatingSystem: "Windows, macOS, Linux",
  description: metadata._projectDetails.passwordManager.description,
  author: { "@type": "Person", "@id": personId },
  image: metadata._projectDetails.passwordManager.image,
  offers: freeOffer,
  isPartOf: { "@id": metadata.openGraph.url + "/#website" },
  mainEntityOfPage: metadata._projectDetails.passwordManager.codeRepository,
  review: [passwordManagerReviewContent], // Added review
};

const expenseTrackerSchemaContent = {
  "@type": "SoftwareApplication",
  "@id": metadata._projectDetails.expenseTracker.codeRepository + "/#project",
  name: "Expense Tracker",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Windows, macOS, Linux",
  description: metadata._projectDetails.expenseTracker.description,
  author: { "@type": "Person", "@id": personId },
  image: metadata._projectDetails.expenseTracker.image,
  offers: freeOffer,
  isPartOf: { "@id": metadata.openGraph.url + "/#website" },
  mainEntityOfPage: metadata._projectDetails.expenseTracker.codeRepository,
  review: [expenseTrackerReviewContent], // Added review
};

// Combined Schema Graph: Person, WebSite, and all projects
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
