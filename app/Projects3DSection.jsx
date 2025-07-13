"use client";
import Project3DCard from "@/components/Project3DCard";
import {
  FaFilm,
  FaGlobe,
  FaUsers,
  FaLock,
  FaMobileAlt,
  FaKey,
  FaChartPie,
  FaTasks,
} from "react-icons/fa";

const PROJECTS = [
  {
    img: "/movies-hub.webp",
    title: "Movies Hub",
    description: (
      <span>
        <FaFilm className="inline text-blue-400 mr-1" /> A modern web
        application for discovering movies and TV shows, built with Next.js 15,
        TailwindCSS, Prisma, and NextAuth. Integrates the TMDB API, supports
        watchlists and random picks, and delivers a fast, responsive, and
        engaging user experience.
      </span>
    ),
    link: "https://github.com/suhaibgamal/movies-hub",
    online: "https://movies.suhaeb.com",
  },
  {
    img: "/hisab.webp",
    title: "Hisab (حساب)",
    description: (
      <span>
        <FaGlobe className="inline text-blue-400 mr-1" /> Hisab is an
        open-source web app for managing and splitting shared expenses and
        settling debts among friends and family{" "}
        <FaUsers className="inline text-yellow-400 mx-1" />. Designed for
        Arabic-speaking users, it is built with Next.js, Supabase, and Tailwind
        CSS, offering a secure <FaLock className="inline text-blue-400 mx-1" />,
        mobile-friendly <FaMobileAlt className="inline text-teal-400 mx-1" />{" "}
        experience.
      </span>
    ),
    link: "https://github.com/suhaibgamal/hisab",
    online: "https://hisab.suhaeb.com",
  },
  {
    img: "/password_manager.webp",
    title: "Password Manager",
    description: (
      <span>
        <FaKey className="inline text-purple-400 mr-1" /> A desktop application
        built with Python and PyQt6 for secure local password management.
        Emphasizes strong security fundamentals and practical usability for
        everyday digital life.
      </span>
    ),
    link: "https://github.com/suhaibgamal/Password-Manager",
  },
  {
    img: "/expense_tracker.webp",
    title: "Expense Tracker",
    description: (
      <span>
        <FaChartPie className="inline text-green-400 mr-1" /> A PyQt6-based
        desktop app for tracking, categorizing, and exporting personal expenses.
        Delivers a clear, user-friendly interface for efficient financial
        management.
      </span>
    ),
    link: "https://github.com/suhaibgamal/Expense-Tracker",
  },
  {
    img: "/task-manager.avif",
    title: "Task Manager",
    description: (
      <span>
        <FaTasks className="inline text-yellow-400 mr-1" /> A React-based task
        management tool that enables users to add, complete, and delete tasks.
        Utilizes local storage for persistence and demonstrates efficient
        client-side data handling.
      </span>
    ),
    link: "https://github.com/suhaibgamal/task-manager",
    online: "https://task-manager.suhaeb.com",
  },
];

export default function Projects3DSection() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {PROJECTS.map((project, index) => (
        <Project3DCard key={index} project={project} />
      ))}
    </div>
  );
}
