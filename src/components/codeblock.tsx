import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import markup from "react-syntax-highlighter/dist/esm/languages/prism/markup";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";

const languages = { bash, css, javascript, json, jsx, markup, tsx, typescript };
for (const [name, grammar] of Object.entries(languages)) {
  SyntaxHighlighter.registerLanguage(name, grammar);
}

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
