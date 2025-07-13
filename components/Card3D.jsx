"use client";
import { useRef, useState } from "react";
import { useSpring, animated, to } from "@react-spring/web";

export default function Card3D({ children }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [style, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    shadowGlow: 0,
    boxShadow: "0 2px 16px 0 rgba(59,130,246,0.10)",
    config: { mass: 2, tension: 600, friction: 30 },
  }));

  function calc(x, y, rect) {
    const px = (x - rect.left) / rect.width;
    const py = (y - rect.top) / rect.height;
    const rotateX = (py - 0.5) * 10;
    const rotateY = (px - 0.5) * -10;
    return {
      rotateX,
      rotateY,
      scale: 1.03,
      shadowGlow: 1,
      boxShadow: "0 8px 32px 0 rgba(59,130,246,0.14)",
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
      boxShadow: "0 2px 16px 0 rgba(59,130,246,0.10)",
    });
    setHovered(false);
  }

  return (
    <animated.div
      ref={ref}
      className="relative overflow-visible rounded-xl group focus-within:border-blue-400"
      style={{
        transform: to(
          [style.rotateX, style.rotateY, style.scale],
          (rx, ry, s) =>
            `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${s})`
        ),
        boxShadow: style.boxShadow,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
    >
      {/* Animated Gradient Border */}
      <animated.div
        aria-hidden
        className="absolute inset-0 z-0 rounded-xl pointer-events-none"
        style={{
          background: style.shadowGlow.to((v) =>
            v
              ? "linear-gradient(120deg,rgba(59,130,246,0.18) 0%,rgba(168,139,250,0.12) 100%)"
              : "transparent"
          ),
          filter: style.shadowGlow.to((v) => (v ? "blur(6px)" : "none")),
          transition: "all 0.4s cubic-bezier(.23,1.12,.32,1)",
        }}
      />
      {/* Glassmorphism Card */}
      <div className="relative z-10 bg-gray-800/70 backdrop-blur-md rounded-xl overflow-hidden flex flex-col shadow-xl border border-gray-700 group-hover:border-blue-400/30 transition-all duration-300 p-6 md:p-8">
        {children}
      </div>
    </animated.div>
  );
}
