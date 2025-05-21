// app/page.jsx
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google"; // [cite: 421]
import {
  SiJavascript,
  SiPython,
  SiGit,
  SiDocker,
  SiTailwindcss,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiRedux,
} from "react-icons/si"; // [cite: 422]
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaMobileAlt,
  FaLaptopCode,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa"; // [cite: 423]
import { BiLogoVisualStudio } from "react-icons/bi"; // [cite: 424]
import ContactForm from "@/components/ContactForm"; // [cite: 424]

const inter = Inter({
  // [cite: 425]
  subsets: ["latin"], // [cite: 425]
  weight: "variable", // [cite: 425]
  display: "swap", // [cite: 425]
});

const SOCIAL_LINKS = [
  // [cite: 426]
  {
    href: "https://github.com/suhaibgamal", // [cite: 426]
    icon: <FaGithub />, // [cite: 426]
    label: "GitHub", // [cite: 426]
  },
  {
    href: "https://www.linkedin.com/in/suhaibgamal", // [cite: 426]
    icon: <FaLinkedin />, // [cite: 426]
    label: "LinkedIn", // [cite: 426]
  },
];

const SERVICES = [
  // [cite: 427]
  {
    title: "App Development", // [cite: 427]
    description:
      "Creating sophisticated mobile-first applications and Progressive Web Apps (PWAs) with intuitive interfaces and robust functionality. From initial UI/UX design to development and deployment, I focus on delivering seamless user experiences that solve real-world problems.", // Expanded description
    icon: <FaMobileAlt className="text-4xl text-blue-400" />, // [cite: 427]
  },
  {
    title: "Web Development", // [cite: 427]
    description:
      "Building responsive, high-performance websites and complex web applications using modern frameworks like Next.js and styling with Tailwind CSS. I emphasize clean, maintainable code, SEO best practices, and creating digital experiences that are not only visually appealing but also drive results and meet your business objectives.", // Expanded description
    icon: <FaLaptopCode className="text-4xl text-blue-400" />, // [cite: 427]
  },
];

const PROJECTS = [
  // [cite: 428]
  {
    img: "/movies-hub.webp", // [cite: 428]
    title: "Movies Hub", // [cite: 428]
    description:
      "Modern Next.js 15 app for movie & TV discovery. Features TailwindCSS, Prisma, NextAuth, TMDB API, watchlist & random picker. Fast, responsive, user-friendly! 🚀", // User provided
    link: "https://github.com/suhaibgamal/movies-hub", // [cite: 428]
    online: "https://movies.suhaeb.com", // [cite: 428]
  },
  {
    img: "/task-manager.avif", // [cite: 428]
    title: "Task Manager", // [cite: 428]
    description:
      "This is a simple React-based task management component that allows users to mark tasks as completed and delete them. It leverages local storage for task persistence and updates dynamically upon user interaction.", // User provided
    link: "https://github.com/suhaibgamal/task-manager", // [cite: 428]
    online: "https://task-manager.suhaeb.com", // [cite: 428]
  },
  {
    img: "/password_manager.webp", // [cite: 428]
    title: "Password Manager", // [cite: 428]
    description:
      "A simple password manager built with Python and PyQt6 to securely store and manage your passwords.", // User provided
    link: "https://github.com/suhaibgamal/Password-Manager", // [cite: 428]
  },
  {
    img: "/expense_tracker.webp", // [cite: 428]
    title: "Expense Tracker", // [cite: 428]
    description:
      "Expense Tracker 3.0 is a PyQt6-based desktop application for managing personal expenses. Users can track, categorize, and export their expenses, making financial management simple and efficient.", // User provided
    link: "https://github.com/suhaibgamal/Expense-Tracker", // [cite: 428]
  },
];

const SKILLS = [
  // [cite: 429]
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-5xl text-yellow-400" />,
  }, // [cite: 429]
  { name: "React", icon: <FaReact className="text-5xl text-blue-400" /> }, // [cite: 429]
  { name: "Next.js", icon: <SiNextdotjs className="text-5xl text-white" /> }, // [cite: 429]
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-5xl text-teal-400" />,
  }, // [cite: 429]
  { name: "Node.js", icon: <FaNodeJs className="text-5xl text-green-400" /> }, // [cite: 429]
  { name: "Python", icon: <SiPython className="text-5xl text-blue-300" /> }, // [cite: 430]
  { name: "Git", icon: <SiGit className="text-5xl text-red-400" /> }, // [cite: 430]
  { name: "GitHub", icon: <FaGithub className="text-5xl text-white" /> }, // [cite: 430]
  {
    name: "VS Code",
    icon: <BiLogoVisualStudio className="text-5xl text-blue-500" />,
  }, // [cite: 430]
  { name: "Docker", icon: <SiDocker className="text-5xl text-blue-400" /> }, // [cite: 430]
  { name: "HTML5", icon: <SiHtml5 className="text-5xl text-orange-500" /> }, // [cite: 430]
  { name: "CSS3", icon: <SiCss3 className="text-5xl text-blue-500" /> }, // [cite: 431]
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-5xl text-blue-600" />,
  }, // [cite: 431]
  { name: "Redux", icon: <SiRedux className="text-5xl text-purple-500" /> }, // [cite: 431]
];

const CONTACTS = [
  // [cite: 432]
  {
    icon: <FaPhone className="text-3xl" />, // [cite: 432]
    label: "Phone", // [cite: 432]
    link: "tel:+201556502208", // [cite: 432]
    text: "+201556502208", // [cite: 432]
  },
  {
    icon: <FaEnvelope className="text-3xl" />, // [cite: 432]
    label: "Email", // [cite: 432]
    link: "mailto:contact@suhaeb.com", // [cite: 432]
    text: "contact@suhaeb.com", // [cite: 432]
  },
];

export default function Home() {
  // [cite: 433]
  return (
    <div
      className={`${inter.className} bg-gray-900 min-h-screen text-gray-200`} // [cite: 433]
    >
      {/* Hero Section */}
      <section
        role="banner" // [cite: 433]
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24" // [cite: 433]
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-gray-900/90" />{" "}
        {/* [cite: 433] */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {" "}
          {/* [cite: 433] */}
          <div className="animate-float">
            {" "}
            {/* [cite: 434] */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {" "}
              {/* [cite: 434] */}
              <span className="block text-gray-100 mb-4">
                {" "}
                {/* [cite: 434] */}
                Hello, I'm Suhaib
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                {" "}
                {/* [cite: 434] */}
                Full Stack Developer
              </span>
            </h1>
            {/* Added introductory paragraph */}
            <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              A passionate Full Stack Developer specializing in crafting modern,
              responsive, and performant web applications. With a keen eye for
              detail and a drive for innovative solutions, I leverage
              technologies like Next.js, React, and Node.js to bring ideas from
              concept to deployment. Let's build something amazing together.
            </p>
          </div>
          <div className="flex justify-center space-x-6 mt-12">
            {" "}
            {/* [cite: 435] */}
            {SOCIAL_LINKS.map(
              (
                social // [cite: 435]
              ) => (
                <a
                  key={social.href} // [cite: 436]
                  href={social.href} // [cite: 436]
                  target="_blank" // [cite: 436]
                  rel="noopener noreferrer" // [cite: 436]
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:-translate-y-1" // [cite: 436]
                  aria-label={social.label} // [cite: 436]
                >
                  {social.icon} {/* [cite: 437] */}
                </a>
              )
            )}
          </div>
          <Link
            href="#projects" // [cite: 437]
            className="inline-block mt-12 px-8 py-4 text-lg font-medium bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:scale-105 transition-transform shadow-lg hover:shadow-blue-500/30" // [cite: 438]
          >
            Explore My Work
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section
        role="region" // [cite: 438]
        aria-labelledby="services-heading" // [cite: 438]
        className="py-20 px-6 bg-gradient-to-b from-gray-900/30 to-gray-900/80" // [cite: 438]
      >
        <div className="max-w-6xl mx-auto">
          {" "}
          {/* [cite: 439] */}
          <h2
            id="services-heading" // [cite: 439]
            className="text-4xl text-center font-bold mb-16 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent" // [cite: 439]
          >
            What I Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {" "}
            {/* [cite: 439] */}
            {SERVICES.map(
              (
                service,
                index // [cite: 440]
              ) => (
                <div
                  key={index} // [cite: 440]
                  className="p-8 bg-gray-800/20 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-400/30 transition-all duration-300" // [cite: 440]
                >
                  <div className="flex items-center gap-6 mb-6">
                    {" "}
                    {/* [cite: 441] */}
                    <div className="p-4 bg-gray-900/50 rounded-lg shadow-lg">
                      {" "}
                      {/* [cite: 441] */}
                      {service.icon} {/* [cite: 441] */}
                    </div>
                    <div className="text-left">
                      {" "}
                      {/* [cite: 441] */}
                      <h3 className="text-2xl font-bold mb-2">
                        {service.title}
                      </h3>{" "}
                      {/* [cite: 442] */}
                      {/* MODIFIED: Expanded service description */}
                      <p className="text-gray-400">
                        {service.description}
                      </p>{" "}
                      {/* [cite: 442] */}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>{" "}
        {/* [cite: 443] */}
      </section>

      {/* Projects Section */}
      <section
        role="region" // [cite: 443]
        aria-labelledby="projects-heading" // [cite: 443]
        id="projects" // [cite: 443]
        className="py-20 px-6 bg-gray-900" // [cite: 443]
      >
        <div className="max-w-6xl mx-auto">
          {" "}
          {/* [cite: 443] */}
          <h2
            id="projects-heading" // [cite: 443]
            className="text-4xl text-center font-bold mb-16 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent" // [cite: 444]
          >
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {" "}
            {/* [cite: 444] */}
            {PROJECTS.map(
              (
                project,
                index // [cite: 444]
              ) => (
                <div
                  key={index} // [cite: 445]
                  className="group relative overflow-hidden rounded-2xl bg-gray-800 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col" // [cite: 445]
                >
                  <div className="overflow-hidden rounded-t-2xl">
                    {" "}
                    {/* [cite: 445] */}
                    <Image
                      unoptimized // [cite: 445]
                      src={project.img} // [cite: 446]
                      alt={`${project.title} project screenshot`} // [cite: 446] // More descriptive alt text
                      width={600} // [cite: 446]
                      height={400} // [cite: 446]
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110" // [cite: 447]
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    {" "}
                    {/* [cite: 447] */} {/* Added flex flex-col flex-grow */}
                    <h3 className="text-2xl font-bold mb-2">
                      {project.title}
                    </h3>{" "}
                    {/* [cite: 447] */}
                    {/* ADDED PROJECT DESCRIPTION HERE */}
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
                      {" "}
                      {/* [cite: 447] */} {/* Added flex-grow */}
                      {project.description}
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 mt-auto">
                      {" "}
                      {/* [cite: 447] */} {/* Added mt-auto */}
                      <a
                        href={project.link} // [cite: 448]
                        target="_blank" // [cite: 448]
                        rel="noopener noreferrer" // [cite: 448]
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium" // [cite: 449]
                      >
                        View Project on GitHub
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          {" "}
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                            clipRule="evenodd"
                          />{" "}
                        </svg>{" "}
                        {/* [cite: 450, 451, 452] */}
                      </a>
                      {project.online && ( // [cite: 452]
                        <a
                          href={project.online} // [cite: 453]
                          target="_blank" // [cite: 453]
                          rel="noopener noreferrer" // [cite: 453]
                          className="inline-flex items-center text-green-400 hover:text-green-300 font-medium" // [cite: 454]
                        >
                          View Project Online
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            {" "}
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                              clipRule="evenodd"
                            />{" "}
                          </svg>{" "}
                          {/* [cite: 455, 456, 457] */}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>{" "}
        {/* [cite: 459] */}
      </section>

      {/* Skills Section */}
      <section
        role="region" // [cite: 459]
        aria-labelledby="skills-heading" // [cite: 459]
        className="py-20 px-6 bg-gray-900/50" // [cite: 459]
      >
        <div className="max-w-6xl mx-auto">
          {" "}
          {/* [cite: 459] */}
          <h2
            id="skills-heading" // [cite: 459]
            className="text-4xl text-center font-bold mb-16 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent" // [cite: 460]
          >
            Technical Expertise
          </h2>
          {/* Added introductory paragraph for skills */}
          <p className="text-lg text-gray-300 mb-12 text-center max-w-xl mx-auto">
            I possess a versatile technical skillset, enabling me to tackle
            diverse challenges in web and application development. Below are
            some of the key technologies and tools I work with:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {" "}
            {/* [cite: 460] */}
            {SKILLS.map(
              (
                skill,
                index // [cite: 460]
              ) => (
                <div
                  key={index} // [cite: 460]
                  className="p-8 bg-gray-800/20 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-400/30 transition-all duration-300 flex flex-col items-center" // [cite: 461]
                >
                  <div className="mb-4">{skill.icon}</div> {/* [cite: 461] */}
                  <h3 className="text-lg font-medium">{skill.name}</h3>{" "}
                  {/* [cite: 461] */}
                </div>
              )
            )}
          </div>
        </div>{" "}
        {/* [cite: 462] */}
      </section>

      {/* Contact Section */}
      <section
        role="region" // [cite: 462]
        aria-labelledby="contact-heading" // [cite: 462]
        className="py-20 px-6 bg-gray-900" // [cite: 462]
      >
        <div className="max-w-4xl mx-auto">
          {" "}
          {/* [cite: 462] */}
          <h2
            id="contact-heading" // [cite: 462]
            className="text-4xl text-center font-bold mb-16 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent" // [cite: 463]
          >
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {" "}
            {/* [cite: 463] */}
            {CONTACTS.map(
              (
                contact,
                index // [cite: 463]
              ) => (
                <a
                  key={index} // [cite: 464]
                  href={contact.link} // [cite: 464]
                  target="_blank" // [cite: 464]
                  rel="noopener noreferrer" // [cite: 464]
                  className="p-8 bg-gray-800/20 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-400/30 transition-all duration-300 hover:scale-[1.02]" // [cite: 464]
                >
                  <div className="flex flex-col items-center">
                    {" "}
                    {/* [cite: 465] */}
                    <div className="mb-6 text-blue-400">
                      {contact.icon}
                    </div>{" "}
                    {/* [cite: 465] */}
                    <h3 className="text-xl font-semibold mb-2">
                      {" "}
                      {/* [cite: 465] */}
                      {contact.label} {/* [cite: 465] */}
                    </h3>
                    <p className="text-blue-400 hover:text-blue-300 transition-colors">
                      {" "}
                      {/* [cite: 466] */}
                      {contact.text} {/* [cite: 466] */}
                    </p>
                  </div>
                </a>
              )
            )}
          </div>
          {/* Contact Form Component */}
          <ContactForm /> {/* [cite: 467] */}
        </div>
      </section>

      {/* Footer */}
      <footer
        role="contentinfo" // [cite: 467]
        className="border-t border-gray-800 py-8 text-center bg-gray-900/80 backdrop-blur-lg" // [cite: 467]
      >
        <div className="max-w-6xl mx-auto px-6">
          {" "}
          {/* [cite: 468] */}
          <p className="text-gray-400">
            {" "}
            {/* [cite: 468] */}
            &copy; {new Date().getFullYear()} Suhaib Gamal. All rights reserved.{" "}
            {/* [cite: 469] */}
          </p>
        </div>
      </footer>
    </div>
  );
} // [cite: 470]
