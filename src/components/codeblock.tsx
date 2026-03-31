import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeComponentProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  inline?: boolean;
  node?: unknown;
  children?: ReactNode;
}

const CodeBlock = {
  code({ node: _node, inline, className, children, ...props }: CodeComponentProps) {
    const match = /language-(\w+)/.exec(className ?? "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={dracula}
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
