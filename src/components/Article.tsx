import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import Markdown from '@/components/Markdown';

type ArticleProps = {
  backHref: string;
  backLabel: string;
  title: string;
  image?: { url: string; title: string } | null;
  meta?: ReactNode;
  content: string;
};

function Article({ backHref, backLabel, title, image, meta, content }: ArticleProps) {
  return (
    <article className="pt-8">
      <Link href={backHref} className="pill mb-8">
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        {backLabel}
      </Link>

      {image && (
        <div className="enter card relative overflow-hidden w-full max-w-2xl h-72 mb-8">
          <Image
            className="object-cover"
            src={image.url}
            alt={image.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>
      )}

      <h1 className="enter stagger-1 max-w-2xl">{title}</h1>
      {meta && <div className="enter stagger-2 text-description text-ink-11 mt-2">{meta}</div>}

      <div className="enter stagger-3 mt-8">
        <Markdown>{content}</Markdown>
      </div>
    </article>
  );
}

export default Article;
