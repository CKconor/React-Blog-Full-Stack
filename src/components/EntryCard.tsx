import Link from 'next/link';

type EntryCardProps = {
  href: string;
  title: string;
  excerpt: string;
  image?: { url: string; title: string } | null;
  /** Position in the page's entrance, 1 to 8. */
  stagger: number;
};

function EntryCard({ href, title, excerpt, image, stagger }: EntryCardProps) {
  return (
    <Link
      href={href}
      className={`card pressable enter stagger-${stagger} group block overflow-hidden`}
    >
      {image && <img className="w-full h-48 object-cover" src={image.url} alt={image.title} />}
      <div className="p-4">
        <h3 className="mb-1 transition-colors duration-150 group-hover:text-accent-11">{title}</h3>
        <p className="text-ink-11 line-clamp-2">{excerpt}</p>
      </div>
    </Link>
  );
}

export default EntryCard;
