import ReactMarkdown from 'react-markdown';
import remarkEmoji from 'remark-emoji';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import CodeBlock from '@/components/codeblock';

function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkEmoji, remarkFrontmatter]}
      components={CodeBlock}
      className="markdown"
    >
      {children}
    </ReactMarkdown>
  );
}

export default Markdown;
