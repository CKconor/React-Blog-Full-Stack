import React from "react";
import { useLocation } from "react-router-dom";

export default function ProjectDetails() {
  const location = useLocation();
  const { projectData } = location.state;
  return (
    <div>
      <h3>{projectData.projectTitle}</h3>
    </div>
  );
}
