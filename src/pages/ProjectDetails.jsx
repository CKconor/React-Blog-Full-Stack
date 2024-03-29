import React from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import CodeBlock from "../components/codeblock"
import remarkEmoji from 'remark-emoji'
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";

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
      <h1 className="text-2xl md:text-5xl font-bold mb-2 mt-8">
        {projectData.projectTitle}
      </h1>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkEmoji,remarkFrontmatter]} components={CodeBlock} className="markdown text-darkmode max-w-2xl dark:text-lightmode">{projectData.projectDetails}</ReactMarkdown>
    </div>
  );
}
