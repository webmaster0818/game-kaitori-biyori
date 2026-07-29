import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'
import { SeriesPriceTable } from '@/components/PriceIndex'
import KaitoriWorldCta from '@/components/KaitoriWorldCta';

export const metadata: Metadata = {
  title: 'スプラトゥーンの買取価格【2026年6月】スプラ3・2の相場と売り時',
  description:
    'スプラトゥーン3・2の買取相場を2026年6月の調査データで一覧化。通常版・エキスパンション・パス付き・オクト同梱版を店舗横断で比較。世代交代による価格差や、高く売るコツも解説します。',
  keywords: ['スプラトゥーン 買取', 'スプラ3 買取価格', 'スプラトゥーン3 売る', 'スプラ2 買取', 'スプラトゥーン 相場'],
  openGraph: {
    title: 'スプラトゥーンの買取価格【2026年6月】スプラ3・2の相場',
    description: 'スプラトゥーン3・2の買取相場を店舗横断で比較。売り時も解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

// 2026年6月時点。各社公式買取ページおよび買取価格比較サイトの集計値（完品前提・店舗/状態/在庫により変動）
const priceData = [
  { title: 'スプラトゥーン3（通常版）', platform: 'Switch', price: '2,800〜3,400円', trend: '底堅い', note: '2022年発売から約4年でも値崩れしにくいロングセラー' },
  { title: 'スプラトゥーン3 + エキスパンション・パス', platform: 'Switch', price: '3,000〜5,000円', trend: '高値', note: 'サイド・オーダー収録のパス同梱。駿河屋が最高値クラス' },
  { title: 'スプラトゥーン2（通常版）', platform: 'Switch', price: '200〜500円', trend: '下降', note: '後継作の登場で大きく下落' },
  { title: 'スプラトゥーン2 + オクト・エキスパンション', platform: 'Switch', price: '800〜2,400円', trend: '安定', note: 'DLC同梱版は希少性で通常版より高値' },
];

const shopComparison = [
  { shop: '駿河屋', s3: '3,000円', s3pass: '5,000円', s2octo: '2,400円', feature: 'パス付き・DLC同梱版の評価が高い' },
  { shop: 'ゲーム買取ブラザーズ', s3: '3,400円', s3pass: '4,000円', s2octo: '—', feature: '通常版で上位の高査定' },
  { shop: 'カイトリワールド', s3: '3,300円', s3pass: '3,300円', s2octo: '1,500円', feature: '宅配中心で安定した高め査定' },
  { shop: 'ブックオフ', s3: '2,800円', s3pass: '3,000円', s2octo: '1,200円', feature: '店頭で手軽（公式高価買取情報より）' },
  { shop: 'ゲオ（GEO）', s3: '3,000円', s3pass: '3,000円', s2octo: '800円', feature: '即日現金化。店頭持込も可' },
];

const tips = [
  { title: 'スプラ3は今も底堅い＝慌てず比較', description: 'スプラトゥーン3は発売から年数が経っても2,800〜3,400円を維持するロングセラーです。値崩れが急ではないので、複数店をじっくり比較してから売るのが得策です。' },
  { title: 'エキスパンション・パス付きは大きく上乗せ', description: 'スプラ3のパス付き（サイド・オーダー収録）は通常版より高く、駿河屋では5,000円の例も。DLCコード未使用が条件です。パッケージの版を確認しましょう。' },
  { title: 'スプラ2は「オクト同梱版」かどうかで激変', description: 'スプラ2の通常版は数百円まで下落していますが、オクト・エキスパンション同梱版は800〜2,400円と差がつきます。同梱版は無理に急がず同梱対応店へ。' },
  { title: '2026年夏は新作で注目度アップの可能性', description: 'Switch2向け新作「スプラトゥーン レイダース」が2026年7月23日発売予定です。シリーズへの注目が高まる時期は既存作の需要も下支えされやすいため、売り時の一つの目安になります。' },
];

const faqs = [
  { q: 'スプラトゥーンで今いちばん高く売れるのはどれですか？', a: '2026年6月時点では、スプラトゥーン3のエキスパンション・パス付き（3,000〜5,000円、駿河屋で5,000円の例）が最も高値です。通常版のスプラ3も2,800〜3,400円と底堅く推移しています。スプラ2は通常版が200〜500円まで下がる一方、オクト・エキスパンション同梱版は800〜2,400円です。' },
  { q: 'スプラ3は発売から時間が経っていますが、まだ高く売れますか？', a: 'はい。スプラトゥーン3は2022年発売ながら2026年6月時点でも通常版2,800〜3,400円を維持しており、Switchソフトの中では値崩れしにくいロングセラーです。オンライン人気が続いていることが背景です。慌てず複数店を比較してから売るのがおすすめです。' },
  { q: 'スプラ2が安いのはなぜですか？', a: '後継作スプラトゥーン3の登場で需要が移り、通常版は200〜500円まで下落しています。ただし「オクト・エキスパンション」同梱版は希少性から800〜2,400円と通常版より高値がつきます。同梱版を持っている場合は、その点を評価してくれる店を選びましょう。' },
  { q: 'スプラ3とパス付き、買うならどちらが売却時に有利ですか？', a: 'エキスパンション・パス付きの方が買取時に2,000円前後高くなる傾向です（通常版3,000円前後に対しパス付き最大5,000円）。長く遊ぶ予定でDLCも使いたいなら、結果的に売却時の上乗せも期待できるパス付きが有利な場合があります。ただしDLCコードを使用済みだと上乗せは見込めません。' },
  { q: 'スプラトゥーンはいつ売るのがベストですか？', a: 'スプラ3は値崩れが緩やかなため「遊び終えたタイミング」で問題ありませんが、新作「スプラトゥーン レイダース」（2026年7月23日発売予定）前後はシリーズ注目度が上がり需要が下支えされやすい時期です。逆に大幅な追加コンテンツ終了や次世代移行が進むと下落しやすいので、長期保有は避けるのが無難です。' },
];

const PAGE_TITLE = 'スプラトゥーンの買取価格【2026年6月】スプラ3・2の相場と売り時';

export default function SplatoonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": PAGE_TITLE, "datePublished": "2026-06-18", "dateModified": "2026-06-18", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'スプラトゥーンの買取価格' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>シリーズ別買取相場</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">スプラトゥーンの買取価格【2026年6月】</h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            スプラトゥーン3（通常版／エキスパンション・パス付き）とスプラトゥーン2（通常版／オクト同梱版）の買取相場を2026年6月の調査データで一覧化しました。ロングセラーのスプラ3と、世代交代で下落したスプラ2の違いも解説します。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>調査時点: 2026年6月（各社公式買取ページ・買取価格比較サイト集計）</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/compare/kaitori-ranking/" className="btn-primary py-2.5 px-6">おすすめ買取サービスを見る</Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 店舗横断の実測価格（価格DBから動的挿入） */}
        <SeriesPriceTable keyword="スプラトゥーン" heading="スプラトゥーンの店舗別 買取価格【毎週更新の実測データ】" />

        {/* Price Table */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />スプラトゥーン主要タイトルの買取相場一覧</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>タイトル</th><th>ハード</th><th>買取相場</th><th>傾向</th></tr>
              </thead>
              <tbody>
                {priceData.map((g) => (
                  <tr key={g.title}>
                    <td className="font-bold text-sm">{g.title}<span className="block text-xs font-normal" style={{ color: 'var(--color-text-light)' }}>{g.note}</span></td>
                    <td className="text-sm">{g.platform}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{g.price}</td>
                    <td className="text-sm">{g.trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：各社公式買取ページおよび買取価格比較サイトの集計（2026年6月時点）。完品前提で、店舗・状態・在庫により変動します。売却直前に各社公式でご確認ください。</p>
        </section>

        {/* Shop Comparison */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />店舗横断比較</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>買取店</th><th>スプラ3</th><th>スプラ3 パス付</th><th>スプラ2 オクト同梱</th><th>特徴</th></tr>
              </thead>
              <tbody>
                {shopComparison.map((s) => (
                  <tr key={s.shop}>
                    <td className="font-bold text-sm">{s.shop}</td>
                    <td className="text-sm">{s.s3}</td>
                    <td className="text-sm">{s.s3pass}</td>
                    <td className="text-sm">{s.s2octo}</td>
                    <td className="text-sm">{s.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※2026年6月時点の集計値。同一タイトルでも店舗で1.5〜2倍超の差が出ることがあります。複数社の比較を推奨します。</p>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />スプラトゥーンを高く売るコツ</h2>
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
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>スプラトゥーンを<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>で売りませんか？</h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>パス付き・同梱版かどうかで査定は変わります。売る前に複数の公式価格をチェックしましょう。</p>
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
            <Link href="/software/zelda/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゼルダの伝説買取価格</p>
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
}
