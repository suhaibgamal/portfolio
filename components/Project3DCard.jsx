"use client";
import { useRef, useState } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import Image from "next/image";

export default function Project3DCard({ project }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [style, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    imgScale: 1,
    imgZ: 0,
    imgShadow: 0,
    imgHeight: 256,
    imgObject: 0, // 0 = cover, 1 = contain
    boxShadow: "0 4px 32px 0 rgba(59,130,246,0.10)",
    config: { mass: 2, tension: 600, friction: 30 },
  }));

  function calc(x, y, rect) {
    const px = (x - rect.left) / rect.width;
    const py = (y - rect.top) / rect.height;
    const rotateX = (py - 0.5) * 18;
    const rotateY = (px - 0.5) * -18;
    return {
      rotateX,
      rotateY,
      scale: 1.06,
      imgScale: 1.12,
      imgZ: 40,
      imgShadow: 1,
      imgHeight: 400,
      imgObject: 1,
      boxShadow: "0 12px 48px 0 rgba(59,130,246,0.22)",
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
      imgScale: 1,
      imgZ: 0,
      imgShadow: 0,
      imgHeight: 256,
      imgObject: 0,
      boxShadow: "0 4px 32px 0 rgba(59,130,246,0.10)",
    });
    setHovered(false);
  }

  // Interpolate objectFit between 'cover' and 'contain'
  const objectFit = style.imgObject.to((v) => (v > 0.5 ? "contain" : "cover"));

  return (
    <animated.div
      ref={ref}
      className="relative overflow-visible rounded-2xl bg-gray-800 flex flex-col shadow-xl border border-gray-700 hover:border-blue-400/30 transition-all duration-300"
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
      <animated.div
        className="absolute left-0 right-0 mx-auto z-20"
        style={{
          top: hovered ? "-32px" : "0px",
          left: 0,
          right: 0,
          margin: "0 auto",
          width: "100%",
          height: style.imgHeight,
          pointerEvents: "none",
          transform: to(
            [style.imgScale, style.imgZ],
            (s, z) => `scale(${s}) translateZ(${z}px)`
          ),
          boxShadow: style.imgShadow.to((v) =>
            v
              ? "0 16px 48px 0 rgba(59,130,246,0.25)"
              : "0 4px 16px 0 rgba(59,130,246,0.10)"
          ),
          transition: "all 0.35s cubic-bezier(.23,1.12,.32,1)",
        }}
      >
        <animated.div style={{ width: "100%", height: "100%" }}>
          <Image
            unoptimized
            src={project.img}
            alt={`${project.title} project screenshot`}
            width={600}
            height={400}
            style={{
              width: "100%",
              height: "100%",
              objectFit,
              borderRadius: "1rem",
              transition: "object-fit 0.35s cubic-bezier(.23,1.12,.32,1)",
            }}
          />
        </animated.div>
      </animated.div>
      <div className="p-8 flex flex-col flex-grow mt-64">
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
