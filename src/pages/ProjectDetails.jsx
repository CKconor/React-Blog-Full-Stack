import React from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import CodeBlock from "../components/codeblock"
import remarkEmoji from 'remark-emoji'

export default function ProjectDetails() {
  const location = useLocation();
  const { projectData } = location.state;
  return (
    <div className="flex flex-col mt-5 md:mt-10 justify-center">
      <img
        className="mb-4 rounded h-[300px] object-cover max-w-2xl"
        src={projectData.projectImage.url}
        alt={projectData.projectImage.title}
      />
      <h1 className="text-5xl font-bold mb-3 mt-8">
        {projectData.projectTitle}
      </h1>
      <ReactMarkdown remarkPlugins={[remarkEmoji]} components={CodeBlock} className="markdown text-lightsubtext max-w-2xl dark:text-darksubtext">{projectData.projectDetails}</ReactMarkdown>
    </div>
  );
}
