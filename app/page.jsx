import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import {
  FaGithub,
  FaLinkedin,
  FaMobileAlt,
  FaLaptopCode,
  FaPhone,
  FaEnvelope,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiJavascript, SiPython, SiGit, SiDocker } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

// Optimized font loading
const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

// Reusable constants for repeated data
const SOCIAL_LINKS = [
  { href: "https://github.com/suhaibgamal", icon: <FaGithub /> },
  { href: "https://www.linkedin.com/in/suhaibgamal", icon: <FaLinkedin /> },
];

const SERVICES = [
  {
    title: "App Development",
    description: "Creating sophisticated apps with intuitive interfaces.",
    icon: <FaMobileAlt className="text-4xl text-blue-400" />,
  },
  {
    title: "Web Development",
    description: "Building responsive websites with modern tools.",
    icon: <FaLaptopCode className="text-4xl text-blue-400" />,
  },
];

const PROJECTS = [
  {
    img: "/password_manager.jpg",
    title: "Password Manager",
    link: "https://github.com/suhaibgamal/Password-Manager",
  },
  {
    img: "/expense_tracker.jpg",
    title: "Expense Tracker",
    link: "https://github.com/suhaibgamal/Expense-Tracker",
  },
];

const SKILLS = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-5xl text-yellow-400" />,
  },
  { name: "React", icon: <FaReact className="text-5xl text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-5xl text-green-400" /> },
  { name: "Python", icon: <SiPython className="text-5xl text-blue-300" /> },
  { name: "Git", icon: <SiGit className="text-5xl text-red-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-5xl text-white" /> },
  {
    name: "VS Code",
    icon: <BiLogoVisualStudio className="text-5xl text-blue-500" />,
  },
  { name: "Docker", icon: <SiDocker className="text-5xl text-blue-400" /> },
];

const CONTACTS = [
  {
    icon: <FaPhone className="text-3xl" />,
    label: "Phone",
    link: "tel:+201061376234",
    text: "+201061376234",
  },
  {
    icon: <FaEnvelope className="text-3xl" />,
    label: "Email",
    link: "mailto:sohibgamal82@gmail.com",
    text: "sohibgamal82@gmail.com",
  },
];

export default function Home() {
  return (
    <div
      className={`${inter.className} text-gray-200 bg-gray-900 min-h-screen`}
    >
      {/* Hero Section */}
      <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-gray-900/90" />

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block text-white mb-4">Hello, I'm Suhaib</span>
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>

          <Link
            href="#projects"
            className="inline-block px-8 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-full transition-all shadow-lg hover:shadow-blue-500/30"
            prefetch={false}
          >
            Explore My Work
          </Link>

          <div className="mt-8 flex justify-center space-x-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-white hover:text-blue-400 transition-colors"
                aria-label={social.icon.type.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center font-bold mb-12 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            What I Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gray-800 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center font-bold mb-12 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gray-800 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading={index === 0 ? "eager" : "lazy"}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center font-bold mb-12 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {SKILLS.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all hover:scale-105"
              >
                <div className="mb-4 w-[3rem] h-[3rem]">{skill.icon}</div>
                <h3 className="font-medium">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center font-bold mb-12 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {CONTACTS.map((contact, index) => (
              <div
                key={index}
                className="p-8 bg-gray-900 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 text-blue-400">{contact.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {contact.label}
                  </h3>
                  <a
                    href={contact.link}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {contact.text}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Suhaib Gamal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
