import React from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import CodeBlock from "../components/codeblock"
import remarkEmoji from 'remark-emoji'
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";

function BlogDetails() {
    const location = useLocation();
    const { blogData } = location.state;
  return (
    <div className="flex flex-col mt-5 md:mt-10">
      <img
        className="mb-4 max-w-2xl rounded h-[300px] object-cover" 
        src={blogData.featureimage.url}
        alt={blogData.featureimage.title}
      />
      <h1 className="text-5xl font-bold mb-3 mt-8">
        {blogData.blogTitle}
      </h1>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkEmoji,remarkFrontmatter]} components={CodeBlock} className="markdown text-lightsubtext max-w-2xl dark:text-darksubtext">{blogData.blogContent}</ReactMarkdown>
    </div>
  )
}

export default BlogDetails