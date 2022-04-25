import React from "react";
import { useLocation } from "react-router-dom";

export default function ProjectDetails() {
  const location = useLocation();
  const { projectData } = location.state;
  return (
    <div className="flex flex-col mt-5 md:mt-10">
      <img
        className="mb-4 max-w-2xl rounded h-[300px] object-cover"
        src={projectData.projectImage.url}
        alt={projectData.projectImage.title}
      />
      <h1 className="text-5xl font-bold mb-3 mt-8">
        {projectData.projectTitle}
      </h1>
      <p>{projectData.ProjectDetails}</p>
    </div>
  );
}
