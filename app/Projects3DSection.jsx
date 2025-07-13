"use client";
import Project3DCard from "@/components/Project3DCard";

export default function Projects3DSection({ projects }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <Project3DCard key={index} project={project} />
      ))}
    </div>
  );
}
