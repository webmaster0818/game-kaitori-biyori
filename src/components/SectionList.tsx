import Link from 'next/link';
import { sectionPages } from '@/lib/sectionPages';

// 同じカテゴリの全ページへのリンク（各セクションの layout.tsx から出す）
export default function SectionList({ section, name }: { section: string; name: string }) {
  const pages = sectionPages(section);
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>{name}の記事一覧</h2>
      <ul className="grid gap-3 md:grid-cols-2">
        {pages.map((p) => (
          <li key={p.href}>
            <Link href={p.href} className="glass-card block p-4 card-hover">
              <span className="block font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>{p.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
