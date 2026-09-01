import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';
import { hardwarePrices, analyzeTitle, STORE_LABELS, HARDWARE_SURVEY_DATE } from '@/data/prices';

export const metadata: Metadata = {
  title: 'ゲーム機本体の買取価格ランキング【毎週実測】Switch2・PS5はどこが高い？',
  description:
    'ゲーム機本体(Nintendo Switch 2・Switch有機EL・旧型Switch・Switch Lite・PS5 Slim/旧型)の買取価格を、ブックオフ・ゲオ・駿河屋・レトログの公式公表値で毎週実測し、最高値順のランキングで比較。同じ本体でも店によって数千円の差がつく実例と、どこに売れば一番高いかが一目でわかります。',
  keywords: ['ゲーム機 買取 ランキング', '本体 買取 どこが高い', 'Switch2 買取 比較', 'PS5 買取 比較', 'ゲーム機本体 買取価格'],
  openGraph: {
    title: 'ゲーム機本体の買取価格ランキング【毎週実測】Switch2・PS5はどこが高い？',
    description: '本体の公式買取価格を毎週実測し、最高値順のランキングで比較。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

export default function HardwareRankingPage() {
  const ranked = hardwarePrices
    .map((t) => analyzeTitle(t))
    .filter((a): a is NonNullable<typeof a> => a !== null)
    .sort((a, b) => b.best.price - a.best.price);

  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'ゲーム機本体の買取価格ランキング',
    itemListElement: ranked.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `${r.title}（最高値 ${r.best.price.toLocaleString()}円・${STORE_LABELS[r.best.store]}）`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲーム機本体の買取価格ランキング【毎週実測】Switch2・PS5はどこが高い？", "datePublished": "2026-09-01", "dateModified": HARDWARE_SURVEY_DATE, "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: '本体別', href: '/' }, { name: '本体買取価格ランキング' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(245,158,11,0.2)', color: '#F59E0B' }}>本体買取ランキング</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲーム機本体の買取価格ランキング
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ブックオフ・ゲオ・駿河屋・レトログが公式に公表している本体の買取価格を毎週実測し、<strong>4社の中で最も高い価格</strong>の順に並べたランキングです。同じ本体でも店によって数千円の差がつくため、売り先の比較が一目でできます。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>価格調査日: {HARDWARE_SURVEY_DATE}（各社公式買取ページ・毎週更新）</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="section-heading mb-2"><span className="section-heading-bar" />本体の最高値ランキング（{HARDWARE_SURVEY_DATE}実測）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl shadow border border-gray-100 min-w-[640px]">
              <thead>
                <tr className="text-left" style={{ background: 'var(--color-deep-blue)', color: '#fff' }}>
                  <th className="p-3">順位</th>
                  <th className="p-3">本体</th>
                  <th className="p-3">最高値（店）</th>
                  <th className="p-3">各社の公表価格</th>
                </tr>
              </thead>
              <tbody>
                {ranked.map((r, i) => (
                  <tr key={r.title} className="border-t border-gray-100 align-top">
                    <td className="p-3 font-extrabold" style={{ color: i < 3 ? '#F59E0B' : 'var(--color-text-light)' }}>{i + 1}位</td>
                    <td className="p-3 font-bold">{r.title}</td>
                    <td className="p-3 whitespace-nowrap font-extrabold" style={{ color: 'var(--color-deep-blue)' }}>
                      {r.best.price.toLocaleString()}円<span className="block text-xs font-normal" style={{ color: 'var(--color-text-light)' }}>{STORE_LABELS[r.best.store]}</span>
                    </td>
                    <td className="p-3 text-xs" style={{ color: 'var(--color-text-light)' }}>
                      {(Object.entries(r.prices) as [keyof typeof STORE_LABELS, number][]).map(([s, v]) => `${STORE_LABELS[s]} ${v.toLocaleString()}円`).join(' / ')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            ※完品(箱・付属品あり)前提の公式公表値です。状態・店舗・時期により変動します。キャンペーンの有無で順位が入れ替わることがあるため、売る直前に必ず各社公式ページでご確認ください。詳しい機種別の解説は各本体ページ(下記リンク)へ。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-4"><span className="section-heading-bar" />機種別の詳しい解説</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/hardware/switch2/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Nintendo Switch 2</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>値動きの大きい最新機の売り時</p>
            </Link>
            <Link href="/hardware/switch/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switch（有機EL・旧型・Lite）</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>世代交代期のモデル別相場</p>
            </Link>
            <Link href="/hardware/ps5/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS5（Slim・旧型）</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>型番別の買取相場</p>
            </Link>
            <Link href="/hardware/steam-deck/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Steam Deck</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>OLED/LCD別の売り時</p>
            </Link>
            <Link href="/software/high-value/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>高く売れるゲームソフトランキング</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ソフト版の最高値ランキング</p>
            </Link>
            <Link href="/price-index/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲーム買取価格インデックス</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>毎週更新・今どこが一番高い？</p>
            </Link>
          </div>
        </section>

        <AuthorBox />
      </div>
    </>
  );
}
