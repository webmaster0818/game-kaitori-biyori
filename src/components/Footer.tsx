import Link from 'next/link';

const footerSections = [
  {
    title: 'サービス比較',
    links: [
      { label: 'ヒカカク！', href: '/review/hikakaku/' },
      { label: '買取ウリエル', href: '/review/uriel/' },
      { label: 'ティファナ', href: '/review/tifana/' },
    ],
  },
  {
    title: 'コンテンツ',
    links: [
      { label: 'ランキング', href: '/#ranking' },
      { label: 'ハード別買取', href: '/#console' },
      { label: '売り方ガイド', href: '/#how-to-sell' },
      { label: 'よくある質問', href: '/#faq' },
    ],
  },
  {
    title: 'サイト情報',
    links: [
      { label: 'トップページ', href: '/' },
      { label: '利用規約', href: '/terms/' },
      { label: 'プライバシーポリシー', href: '/privacy/' },
      { label: '記事制作ポリシー', href: '/content-policy/' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto" style={{ background: 'var(--color-dark-blue)', color: '#CBD5E1' }}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="text-lg font-extrabold mb-3" style={{ color: '#FFFFFF' }}>
              <span style={{ color: 'var(--color-electric-green)' }}>G</span>ame
              <span className="text-sm font-bold ml-1" style={{ color: 'var(--color-accent-orange)' }}>買取びより</span>
            </p>
            <p className="text-xs leading-relaxed" style={{ color: '#94A3B8' }}>
              ゲーム買取サービスを徹底比較。あなたのゲームを最も高く売れるサービスが見つかります。
            </p>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-bold mb-3" style={{ color: '#FFFFFF' }}>{section.title}</h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs transition-colors hover:text-[var(--color-electric-green)]"
                      style={{ color: '#94A3B8' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-6 text-center" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <p className="text-xs" style={{ color: '#64748B' }}>
            &copy; {new Date().getFullYear()} ゲーム買取びより All rights reserved.
          </p>
          <p className="text-xs mt-2" style={{ color: '#475569' }}>
            ※ 当サイトはアフィリエイトプログラムに参加しています。掲載情報は記事執筆時点のものです。
          </p>
        </div>
      </div>
    </footer>
  );
}
