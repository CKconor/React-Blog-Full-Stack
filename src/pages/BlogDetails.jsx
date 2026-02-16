import React from "react";
import { useLocation, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../components/codeblock";
import remarkEmoji from "remark-emoji";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import Moment from "react-moment";

function BlogDetails() {
  const location = useLocation();
  const { blogData } = location.state;

  return (
    <div className="pt-12 md:pt-20">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-sm text-lightsubtext dark:text-darksubtext hover:text-accentcolor transition-colors mb-10"
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Back to blog
      </Link>

      {blogData.featureimage && (
        <div className="overflow-hidden rounded-sm mb-10 opacity-0 animate-fade-up">
          <img
            className="w-full max-w-2xl h-72 object-cover"
            src={blogData.featureimage.url}
            alt={blogData.featureimage.title}
          />
        </div>
      )}

      <h1 className="font-serif text-3xl md:text-5xl tracking-tight leading-[1.1] mb-3 opacity-0 animate-fade-up stagger-1">
        {blogData.blogTitle}
      </h1>

      <div className="flex items-center gap-2 text-sm text-lightsubtext dark:text-darksubtext mb-10 opacity-0 animate-fade-up stagger-2">
        <span>Conor Kemp</span>
        <span className="text-border dark:text-borderdark">/</span>
        <Moment format="MMMM D, YYYY" date={blogData.sys.publishedAt} />
      </div>

      <div className="opacity-0 animate-fade-up stagger-3">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkEmoji, remarkFrontmatter]}
          components={CodeBlock}
          className="markdown text-darkmode dark:text-lightmode max-w-2xl text-[15px]"
        >
          {blogData.blogContent}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default BlogDetails;
