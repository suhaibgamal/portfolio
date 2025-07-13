"use client";
import { useRef, useState } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Project3DCard({ project }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [style, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    shadowGlow: 0,
    boxShadow: "0 4px 32px 0 rgba(59,130,246,0.10)",
    config: { mass: 2, tension: 600, friction: 30 },
  }));

  function calc(x, y, rect) {
    const px = (x - rect.left) / rect.width;
    const py = (y - rect.top) / rect.height;
    const rotateX = (py - 0.5) * 14;
    const rotateY = (px - 0.5) * -14;
    return {
      rotateX,
      rotateY,
      scale: 1.04,
      shadowGlow: 1,
      boxShadow: "0 16px 48px 0 rgba(59,130,246,0.18)",
    };
  }

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    api.start(calc(e.clientX, e.clientY, rect));
    setHovered(true);
  }
  function handleMouseLeave() {
    api.start({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      shadowGlow: 0,
      boxShadow: "0 4px 32px 0 rgba(59,130,246,0.10)",
    });
    setHovered(false);
  }

  return (
    <animated.div
      ref={ref}
      className="relative overflow-visible rounded-2xl flex flex-col border border-transparent group focus-within:border-blue-400"
      style={{
        transform: to(
          [style.rotateX, style.rotateY, style.scale],
          (rx, ry, s) =>
            `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${s})`
        ),
        boxShadow: style.boxShadow,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      aria-label={project.title}
    >
      {/* Animated Gradient Border */}
      <animated.div
        aria-hidden
        className="absolute inset-0 z-0 rounded-2xl pointer-events-none"
        style={{
          background: style.shadowGlow.to((v) =>
            v
              ? "linear-gradient(120deg,rgba(59,130,246,0.25) 0%,rgba(168,139,250,0.18) 100%)"
              : "transparent"
          ),
          filter: style.shadowGlow.to((v) => (v ? "blur(8px)" : "none")),
          transition: "all 0.4s cubic-bezier(.23,1.12,.32,1)",
        }}
      />
      {/* Glassmorphism Card */}
      <div className="relative z-10 bg-gray-800/70 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col shadow-xl border border-gray-700 group-hover:border-blue-400/30 transition-all duration-300">
        <div className="overflow-hidden rounded-t-2xl">
          <Image
            unoptimized
            src={project.img}
            alt={`${project.title} project screenshot`}
            width={600}
            height={400}
            className="h-64 w-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
            priority={false}
          />
        </div>
        <div className="p-8 flex flex-col flex-grow">
          <motion.h3
            className="text-2xl font-bold mb-2"
            initial={false}
            animate={{ color: hovered ? "#60a5fa" : "#fff" }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>
          <motion.p
            className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow"
            initial={false}
            animate={{
              y: hovered ? -4 : 0,
              color: hovered ? "#a78bfa" : "#9ca3af",
            }}
            transition={{ duration: 0.3 }}
          >
            {project.description}
          </motion.p>
          <AnimatePresence>
            {hovered && (
              <motion.div
                className="flex flex-col md:flex-row gap-4 mt-auto"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.35 }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                >
                  View Project on GitHub
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
                {project.online && (
                  <a
                    href={project.online}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-400 hover:text-green-300 font-medium"
                  >
                    View Project Online
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
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {/* Parallax light effect */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse at 60% 20%, rgba(59,130,246,0.08) 0%, transparent 70%)",
        }}
      />
    </animated.div>
  );
}
