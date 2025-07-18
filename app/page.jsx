// app/page.jsx
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
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
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaMobileAlt,
  FaLaptopCode,
  FaPhone,
  FaEnvelope,
  FaLightbulb,
  FaUsers,
  FaChartLine,
  FaCode,
} from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import ContactForm from "@/components/ContactForm";
import Projects3DSection from "./Projects3DSection";
import Card3D from "@/components/Card3D";

const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

const SOCIAL_LINKS = [
  {
    href: "https://github.com/suhaibgamal",
    icon: <FaGithub />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/suhaibgamal",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
];

const SERVICES = [
  {
    title: "App Development",
    description:
      "Creating sophisticated mobile-first applications and Progressive Web Apps (PWAs) with intuitive interfaces and robust functionality. From initial UI/UX design to development and deployment, I focus on delivering seamless user experiences that solve real-world problems using modern frameworks.",
    icon: <FaMobileAlt className="text-4xl text-blue-400" />,
  },
  {
    title: "Web Development",
    description:
      "Building responsive, high-performance websites and complex web applications using modern frameworks like Next.js and styling with Tailwind CSS. I emphasize clean, maintainable code, SEO best practices, and creating digital experiences that are not only visually appealing but also drive results and meet your business objectives.",
    icon: <FaLaptopCode className="text-4xl text-blue-400" />,
  },
];

const SKILLS = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-5xl text-yellow-400" />,
    link: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  {
    name: "React",
    icon: <FaReact className="text-5xl text-blue-400" />,
    link: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-5xl text-white" />,
    link: "https://nextjs.org/",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-5xl text-teal-400" />,
    link: "https://tailwindcss.com/",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-5xl text-green-400" />,
    link: "https://nodejs.org/",
  },
  {
    name: "Python",
    icon: <SiPython className="text-5xl text-blue-300" />,
    link: "https://www.python.org/",
  },
  {
    name: "Git",
    icon: <SiGit className="text-5xl text-red-400" />,
    link: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-5xl text-white" />,
    link: "https://github.com/",
  },
  {
    name: "VS Code",
    icon: <BiLogoVisualStudio className="text-5xl text-blue-500" />,
    link: "https://code.visualstudio.com/",
  },
  {
    name: "Docker",
    icon: <SiDocker className="text-5xl text-blue-400" />,
    link: "https://www.docker.com/",
  },
  {
    name: "HTML5",
    icon: <SiHtml5 className="text-5xl text-orange-500" />,
    link: "https://developer.mozilla.org/docs/Web/Guide/HTML/HTML5",
  },
  {
    name: "CSS3",
    icon: <SiCss3 className="text-5xl text-blue-500" />,
    link: "https://developer.mozilla.org/docs/Web/CSS",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-5xl text-blue-600" />,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-5xl text-purple-500" />,
    link: "https://redux.js.org/",
  },
];

const PHILOSOPHY_POINTS = [
  {
    icon: <FaCode className="text-3xl text-blue-400 mb-3" />,
    title: "Quality Code",
    text: "I believe in writing clean, efficient, and maintainable code that forms a solid foundation for any project, ensuring scalability and long-term success.",
  },
  {
    icon: <FaUsers className="text-3xl text-green-400 mb-3" />,
    title: "User-Centric Approach",
    text: "User experience is at the heart of my development process. I strive to create intuitive, accessible, and engaging interfaces that meet user needs effectively.",
  },
  {
    icon: <FaChartLine className="text-3xl text-purple-400 mb-3" />,
    title: "Continuous Learning",
    text: "The tech world is ever-evolving, and so am I. I am committed to continuous learning, staying updated with the latest technologies and best practices.",
  },
  {
    icon: <FaLightbulb className="text-3xl text-yellow-400 mb-3" />,
    title: "Problem Solving",
    text: "I approach challenges with a problem-solving mindset, seeking innovative and practical solutions to deliver impactful digital products.",
  },
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
    link: "mailto:contact@suhaeb.com",
    text: "contact@suhaeb.com",
  },
];

export default function Home() {
  return (
    <div
      className={`${inter.className} bg-gray-900 min-h-screen text-gray-200`}
    >
      {/* Hero Section */}
      <section
        role="banner"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
      >
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
            <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              A passionate Full Stack Developer specializing in crafting modern,
              responsive, and performant web applications. With a keen eye for
              detail and a drive for innovative solutions, I leverage
              technologies like Next.js, React, and Node.js to bring ideas from
              concept to deployment. Let's build something amazing together.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mt-12">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:-translate-y-1"
                aria-label={social.label}
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
      <section
        role="region"
        aria-labelledby="services-heading"
        className="py-20 px-6 bg-gradient-to-b from-gray-900/30 to-gray-900/80"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            id="services-heading"
            className="text-4xl text-center font-bold mb-16 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
          >
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
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Development Philosophy Section - NEW */}
      <section
        role="region"
        aria-labelledby="philosophy-heading"
        className="py-20 px-6 bg-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            id="philosophy-heading"
            className="text-4xl text-center font-bold mb-16 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
          >
            My Development Philosophy
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PHILOSOPHY_POINTS.map((point, index) => (
              <Card3D key={index}>
                <div className="text-center flex flex-col items-center">
                  <div className="flex justify-center items-center mb-4">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-100">
                    {point.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {point.text}
                  </p>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        role="region"
        aria-labelledby="projects-heading"
        id="projects"
        className="py-20 px-6 bg-gradient-to-b from-gray-900/80 to-gray-900/30"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            id="projects-heading"
            className="text-4xl text-center font-bold mb-16 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
          >
            Featured Projects
          </h2>
          <Projects3DSection />
        </div>
      </section>

      {/* Skills Section */}
      <section
        role="region"
        aria-labelledby="skills-heading"
        className="py-20 px-6 bg-gray-900/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            id="skills-heading"
            className="text-4xl text-center font-bold mb-16 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
          >
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-300 mb-12 text-center max-w-xl mx-auto">
            I possess a versatile technical skillset, enabling me to tackle
            diverse challenges in web and application development. Below are
            some of the key technologies and tools I work with:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {SKILLS.map((skill, index) => (
              <a
                key={index}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={skill.name + " official website"}
                className="focus:outline-none"
                tabIndex={0}
              >
                <Card3D>
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{skill.icon}</div>
                    <h3 className="text-md md:text-lg font-medium">
                      {skill.name}
                    </h3>
                  </div>
                </Card3D>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        role="region"
        aria-labelledby="contact-heading"
        className="py-20 px-6 bg-gray-900"
      >
        <div className="max-w-4xl mx-auto">
          <h2
            id="contact-heading"
            className="text-4xl text-center font-bold mb-16 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
          >
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
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer
        role="contentinfo"
        className="border-t border-gray-800 py-8 text-center bg-gray-900/80 backdrop-blur-lg"
      >
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Suhaib Gamal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
