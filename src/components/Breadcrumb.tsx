import Link from 'next/link';

type BreadcrumbItem = {
  name: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems: BreadcrumbItem[] = [{ name: 'ホーム', href: '/' }, ...items];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: item.href } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="パンくずリスト" className="py-3 px-4 max-w-6xl mx-auto">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs" style={{ color: 'var(--color-text-light)' }}>
          {allItems.map((item, index) => (
            <li key={index} className="flex items-center gap-1.5">
              {index > 0 && <span className="mx-1" style={{ color: 'var(--color-text-lighter)' }}>/</span>}
              {item.href ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-[var(--color-electric-green)]"
                  style={{ color: 'var(--color-text-light)' }}
                >
                  {item.name}
                </Link>
              ) : (
                <span style={{ color: 'var(--color-text)' }} className="font-semibold">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
