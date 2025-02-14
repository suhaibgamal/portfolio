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

const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

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
    link: "tel:+201556502208",
    text: "+201556502208",
  },
  {
    icon: <FaEnvelope className="text-3xl" />,
    label: "Email",
    link: "mailto:sohibgamal28@gmail.com",
    text: "sohibgamal28@gmail.com",
  },
];

export default function Home() {
  return (
    <div
      className={`${inter.className} bg-gray-900 min-h-screen text-gray-200`}
    >
      {/* Fixed Header */}
      <header className="fixed w-full top-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
        <nav className="max-w-6xl mx-auto px-6 py-5">
          <Link
            href="https://movies.suhaeb.com"
            target="_blank"
            className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
          >
            Movies Hub
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-gray-900/90" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-gray-100 mb-4">
                Hello, I'm Suhaib
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </h1>
          </div>

          <div className="flex justify-center space-x-6 mt-12">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:-translate-y-1"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <Link
            href="#projects"
            className="inline-block mt-12 px-8 py-4 text-lg font-medium bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:scale-105 transition-transform shadow-lg hover:shadow-blue-500/30"
          >
            Explore My Work
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900/30 to-gray-900/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center font-bold mb-16 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            What I Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-gray-800/20 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="p-4 bg-gray-900/50 rounded-lg shadow-lg">
                    {service.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center font-bold mb-16 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gray-800 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="overflow-hidden rounded-t-2xl">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                        clipRule="evenodd"
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
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center font-bold mb-16 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SKILLS.map((skill, index) => (
              <div
                key={index}
                className="p-8 bg-gray-800/20 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-400/30 transition-all duration-300 flex flex-col items-center"
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-lg font-medium">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center font-bold mb-16 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {CONTACTS.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 bg-gray-800/20 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-400/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-6 text-blue-400">{contact.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {contact.label}
                  </h3>
                  <p className="text-blue-400 hover:text-blue-300 transition-colors">
                    {contact.text}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center bg-gray-900/80 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Suhaib Gamal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
