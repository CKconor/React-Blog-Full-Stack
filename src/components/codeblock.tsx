'use client';
import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

interface CodeProps extends ComponentPropsWithoutRef<'code'> {
  node?: unknown;
  children?: ReactNode;
}

const CodeBlock = {
  code({ node: _node, className, children, ...props }: CodeProps) {
    const match = /language-(\w+)/.exec(className ?? "");
    return match ? (
      <SyntaxHighlighter
        useInlineStyles={false}
        className="code-block"
        codeTagProps={{}}
        language={match[1]}
        PreTag="div"
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export default CodeBlock;
