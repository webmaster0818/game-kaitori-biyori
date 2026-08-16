import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'
import { SeriesPriceTable, TodayBestBanner } from '@/components/PriceIndex'
import KaitoriWorldCta from '@/components/KaitoriWorldCta';

export const metadata: Metadata = {
  title: 'ゼルダの伝説の買取価格【2026年6月】ティアキン・ブレワイ等の相場一覧',
  description:
    'ゼルダの伝説シリーズの買取相場を2026年6月の調査データで一覧化。ティアーズ オブ ザ キングダム・ブレス オブ ザ ワイルド(通常版/Switch2 Edition/パス付き)・知恵のかりもの等を店舗横断で比較。高く売るコツも解説。',
  keywords: ['ゼルダ 買取', 'ゼルダの伝説 買取価格', 'ティアキン 買取', 'ブレワイ 買取', 'ゼルダ 売る'],
  openGraph: {
    title: 'ゼルダの伝説の買取価格【2026年6月】シリーズ相場一覧',
    description: 'ティアキン・ブレワイ等ゼルダシリーズの買取相場を店舗横断で比較。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

// 2026年6月時点。各社公式買取ページおよび買取価格比較サイトの集計値（完品前提・店舗/状態/在庫により変動）
const priceData = [
  { title: 'ティアーズ オブ ザ キングダム（通常版）', platform: 'Switch', price: '2,500〜3,800円', trend: 'やや下降', note: '発売時の高値からは下落。通常版は3,000円前後が中心' },
  { title: 'ティアーズ オブ ザ キングダム', platform: 'Switch2 Edition', price: '3,700〜4,900円', trend: '高値', note: 'Switch2 Editionは通常版より明確に高い' },
  { title: 'ティアーズ オブ ザ キングダム コレクターズエディション', platform: 'Switch', price: '2,200〜4,000円', trend: '変動', note: '付属品の有無で査定差が大きい' },
  { title: 'ブレス オブ ザ ワイルド（通常版）', platform: 'Switch', price: '1,000〜3,800円', trend: 'やや下降', note: '店舗差が非常に大きい。上位店で3,000円台' },
  { title: 'ブレス オブ ザ ワイルド + エキスパンション・パス', platform: 'Switch', price: '4,500〜6,800円', trend: '高値', note: 'パス付きは通常版より2,000〜3,800円高い' },
  { title: 'ブレス オブ ザ ワイルド', platform: 'Switch2 Edition', price: '4,500〜5,800円', trend: '高値', note: 'Switch2版は最高値クラス' },
  { title: 'ゼルダの伝説 知恵のかりもの', platform: 'Switch', price: '900〜3,200円', trend: 'やや下降', note: '2024年発売。店舗差が大きい' },
  { title: 'スカイウォードソード HD', platform: 'Switch', price: '1,300〜3,000円', trend: '安定', note: 'リマスター。専門店ほど高め' },
  { title: '夢をみる島（Switchリメイク）', platform: 'Switch', price: '2,900円前後', trend: '安定', note: '相場は2,900円前後（各社現在値は要確認）' },
];

const shopComparison = [
  { shop: 'ゲーム買取ブラザーズ', totk: '4,800円', botw: '3,800円', wisdom: '3,200円', feature: '多くのタイトルで上位の高査定' },
  { shop: '駿河屋', totk: '〜（要確認）', botw: 'パス付6,800円', wisdom: '2,300円', feature: 'パス付き・レトロの査定が強い' },
  { shop: 'カイトリワールド', totk: '4,800円', botw: '3,400円', wisdom: '2,800円', feature: '宅配中心で安定した高め査定' },
  { shop: 'ゲオ（GEO）', totk: '4,500円', botw: '3,000円', wisdom: '2,000円', feature: '即日現金化。店頭持込も可' },
  { shop: 'ブックオフ', totk: '（店頭価格）', botw: '2,500円', wisdom: '1,500円', feature: '店頭で手軽。価格はやや控えめ' },
];

const tips = [
  { title: 'Switch2 Editionは別物として高値', description: 'ブレワイ・ティアキンはSwitch2 Editionが通常版より明確に高く査定されます（通常版3,000円前後に対しSwitch2版は4,500〜5,800円）。パッケージの版を確認してから売りましょう。' },
  { title: 'エキスパンション・パス付きは大幅プラス', description: 'ブレワイのエキスパンション・パス付きは通常版より2,000〜3,800円高い相場です。DLCコードが未使用かどうかが査定の分かれ目になります。' },
  { title: '店舗差が大きいので必ず複数比較', description: '同じブレワイ通常版でも上位店3,800円・下位店1,000円台と2倍以上の差が出ます。一括査定や複数店の公式価格を見比べるのが必須です。' },
  { title: 'レトロゼルダは完品で専門店へ', description: 'SFC「神々のトライフォース」やN64「時のオカリナ」などレトロ作品は、箱・説明書付き完品かどうかで価格が大きく変わります。レトロに強い専門店で査定を。' },
];

const faqs = [
  { q: 'ゼルダで今いちばん高く売れるのはどれですか？', a: '2026年6月時点では、ブレス オブ ザ ワイルドのエキスパンション・パス付き（4,500〜6,800円）やSwitch2 Edition（4,500〜5,800円）、ティアキンのSwitch2 Edition（3,700〜4,900円）が高値です。通常版のティアキン・ブレワイは3,000円前後が中心です。価格は店舗・状態で変動するため、売る直前に各社の買取価格を確認してください。' },
  { q: 'ブレワイの「通常版」と「Switch2 Edition」で査定はどのくらい違いますか？', a: '通常版は1,000〜3,800円（上位店で3,000円台）なのに対し、Switch2 Editionは4,500〜5,800円と1,500〜2,000円ほど高くなります。パッケージ表記でどちらの版か確認してから売却するのがおすすめです。' },
  { q: 'ティアキンはこれから値下がりしますか？', a: '通常版は発売時の高値から下落基調が続いています。一方でSwitch2 Editionは高値を維持しています。通常版を持っている場合は、新たな値下げ前の早めの売却が無難です。中長期では緩やかな下落が見込まれます。' },
  { q: 'エキスパンション・パス付きを高く売るコツは？', a: 'DLCのダウンロードコードが未使用であることが重要です。使用済みの場合は実質通常版扱いになり、パス付きの上乗せ（2,000〜3,800円）が期待できません。コード未使用なら駿河屋などパス付きを高く評価する店が有利です。' },
  { q: 'レトロのゼルダ（SFC・N64）はどこで売るべきですか？', a: 'レトロゲームに強い専門店（駿河屋など）がおすすめです。レトロ作品は箱・説明書・付属品の有無で査定が大きく変わり、完品なら数千円になることもあります。一般店では「古いソフト」として安値になりがちなので、専門店で査定しましょう。' },
];

const PAGE_TITLE = 'ゼルダの伝説の買取価格【2026年6月】ティアキン・ブレワイ等の相場一覧';

export default function ZeldaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": PAGE_TITLE, "datePublished": "2026-06-18", "dateModified": "2026-06-18", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'ゼルダの伝説の買取価格' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>シリーズ別買取相場</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">ゼルダの伝説の買取価格【2026年6月】</h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ティアーズ オブ ザ キングダム、ブレス オブ ザ ワイルド（通常版／Switch2 Edition／パス付き）、知恵のかりものなど、ゼルダ主要タイトルの買取相場を2026年6月の調査データで一覧化しました。同じタイトルでも版と店舗で大きく差が出ます。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>調査時点: 2026年6月（各社公式買取ページ・買取価格比較サイト集計）</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/compare/kaitori-ranking/" className="btn-primary py-2.5 px-6">おすすめ買取サービスを見る</Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 店舗横断の実測価格（価格DBから動的挿入） */}
        <TodayBestBanner keyword="ゼルダ" />
        <SeriesPriceTable keyword="ゼルダ" heading="ゼルダの店舗別 買取価格【毎週更新の実測データ】" />

        {/* Price Table */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ゼルダ主要タイトルの買取相場一覧</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>タイトル</th><th>ハード</th><th>買取相場</th><th>傾向</th></tr>
              </thead>
              <tbody>
                {priceData.map((g) => (
                  <tr key={g.title + g.platform}>
                    <td className="font-bold text-sm">{g.title}<span className="block text-xs font-normal" style={{ color: 'var(--color-text-light)' }}>{g.note}</span></td>
                    <td className="text-sm">{g.platform}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{g.price}</td>
                    <td className="text-sm">{g.trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：各社公式買取ページおよび買取価格比較サイトの集計（2026年6月時点）。すべて完品前提で、店舗・状態・在庫により変動します。実際の査定額は売却直前に各社公式でご確認ください。</p>
        </section>

        {/* Shop Comparison */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />店舗横断比較（主要3タイトル）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>買取店</th><th>ティアキン</th><th>ブレワイ</th><th>知恵のかりもの</th><th>特徴</th></tr>
              </thead>
              <tbody>
                {shopComparison.map((s) => (
                  <tr key={s.shop}>
                    <td className="font-bold text-sm">{s.shop}</td>
                    <td className="text-sm">{s.totk}</td>
                    <td className="text-sm">{s.botw}</td>
                    <td className="text-sm">{s.wisdom}</td>
                    <td className="text-sm">{s.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※2026年6月時点の集計値。同一タイトルでも最高値と最安値で2倍以上の差が出ることがあります。複数社の比較を推奨します。</p>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ゼルダを高く売るコツ</h2>
          <div className="space-y-4">
            {tips.map((tip, i) => (
              <div key={tip.title} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{tip.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />よくある質問</h2>
          <div>
            {faqs.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary>{faq.q}</summary>
                <div className="faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) }) }} />
        </section>

        {/* CTA */}
        <section className="glass-card-dark p-8 text-center">
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>ゼルダを<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>で売りませんか？</h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>版（Switch2 Edition・パス付き）と店舗で査定は大きく変わります。売る前に複数の公式価格をチェックしましょう。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/compare/kaitori-ranking/" className="btn-primary py-3 px-8">おすすめランキングを見る</Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連するソフト買取ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/software/high-value/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>高く売れるソフトランキング</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>公式買取価格で横断比較</p>
            </Link>
            <Link href="/software/splatoon/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>スプラトゥーン買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>シリーズの相場一覧</p>
            </Link>
            <Link href="/software/switch-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switchソフト買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>人気タイトルの買取相場</p>
            </Link>
          </div>
        </section>
        <KaitoriWorldCta compact />
        <AuthorBox />
      </div>
    </>
  );
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/software/high-value/" className="block bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl p-5 text-center shadow hover:opacity-95 transition">
            <span className="font-bold text-lg">📈 今週の「高く売れるゲームソフト」ランキングを見る</span>
            <span className="block text-sm opacity-90 mt-1">ブックオフ・ゲオ・駿河屋の公式買取価格を毎週金曜に実測更新中</span>
          </Link>
        </div>
      </section>
}
