"use client";
import { useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";

export default function Project3DCard({ project }) {
  const ref = useRef(null);
  const [style, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    boxShadow: "0 4px 32px 0 rgba(59,130,246,0.10)",
    config: { mass: 3, tension: 500, friction: 40 },
  }));

  function calc(x, y, rect) {
    const px = (x - rect.left) / rect.width;
    const py = (y - rect.top) / rect.height;
    const rotateX = (py - 0.5) * 18;
    const rotateY = (px - 0.5) * -18;
    return {
      rotateX,
      rotateY,
      scale: 1.04,
      boxShadow: "0 8px 40px 0 rgba(59,130,246,0.18)",
    };
  }

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    api.start(calc(e.clientX, e.clientY, rect));
  }
  function handleMouseLeave() {
    api.start({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      boxShadow: "0 4px 32px 0 rgba(59,130,246,0.10)",
    });
  }

  return (
    <animated.div
      ref={ref}
      className="relative overflow-hidden rounded-2xl bg-gray-800 flex flex-col shadow-xl border border-gray-700 hover:border-blue-400/30 transition-all duration-300"
      style={{
        transform: style.rotateX
          .to((rx) => `perspective(900px) rotateX(${rx}deg)`)
          .concat(style.rotateY.to((ry) => ` rotateY(${ry}deg)`)),
        scale: style.scale,
        boxShadow: style.boxShadow,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      aria-label={project.title}
    >
      <div className="overflow-hidden rounded-t-2xl">
        <Image
          unoptimized
          src={project.img}
          alt={`${project.title} project screenshot`}
          width={600}
          height={400}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
          {project.description}
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-auto">
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
