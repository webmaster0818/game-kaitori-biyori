import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: '店舗買取 vs 宅配買取｜ゲームを売るならどっちがお得？',
  description:
    'ゲームの店舗買取と宅配買取を8項目で比較しています。手軽さ・即金性・買取金額・交渉・まとめ売り・プライバシー・対応エリア・所要時間の違いを解説し、出張買取という第3の選択肢もご紹介します。目的に合った売り方を選ぶ際の参考にしてください。',
  keywords: ['ゲーム 店舗買取 宅配買取 どっち', 'ゲーム 持ち込み 宅配 比較', 'ゲーム買取 店頭 ネット', 'ゲーム 売り方 比較'],
  openGraph: {
    images: ['/og.png'],
    title: '店舗買取 vs 宅配買取｜ゲームを売るならどっちがお得？',
    description: 'ゲームの店舗買取と宅配買取を8項目で比較しています。第3の選択肢である出張買取もご紹介します。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const comparisonItems = [
  { item: '手軽さ', shop: '店舗まで持ち運ぶ必要あり', online: '自宅で梱包・集荷依頼のみ', winner: '宅配買取' },
  { item: '即金性', shop: 'その場で現金受け取り', online: '入金まで2〜7日', winner: '店舗買取' },
  { item: '買取金額', shop: '店舗運営コストの分やや低め', online: 'コストが低い分やや高め', winner: '宅配買取' },
  { item: '交渉', shop: '対面で直接交渉可能', online: '基本的に交渉不可', winner: '店舗買取' },
  { item: 'まとめ売り', shop: '大量の場合は持ち運びの負担が大きい', online: '段ボールに詰めて送るだけ', winner: '宅配買取' },
  { item: 'プライバシー', shop: '店舗で対面のため周囲の目あり', online: '自宅で完結、他人に知られない', winner: '宅配買取' },
  { item: '対応エリア', shop: '店舗がある地域のみ', online: '全国どこでも対応', winner: '宅配買取' },
  { item: '所要時間', shop: '移動+査定で1〜2時間', online: '梱包10分+集荷待ちのみ', winner: '状況による' },
];

const shopFor = [
  '今日中に現金が必要な人',
  '査定額を対面で交渉したい人',
  '売りたいゲームが少量（1〜5点程度）の人',
  '店舗が近くにある人',
  '商品の状態をアピールしたい人',
];

const onlineFor = [
  '大量のゲームをまとめて売りたい人',
  '近くに買取店がない地方在住の人',
  '仕事が忙しく店舗に行く時間がない人',
  '対面のプレッシャーを感じたくない人',
  '複数社の査定を比較して最高値で売りたい人',
];

const faqs = [
  { q: '店舗買取と宅配買取では、買取金額はどちらが高いですか？', a: '一般的に、宅配買取のほうがやや高い傾向があります。宅配買取は店舗の賃料・人件費がかからない分、買取金額に還元されやすいためです。ただし店舗買取では対面交渉で増額できる場合もあるため、一概には言えません。' },
  { q: '出張買取はどんなサービスですか？', a: '買取業者のスタッフが自宅を訪問し、その場で査定・現金化を行うサービスです。買取ウリエルが出張買取に対応しており、ゲームは東京・神奈川・千葉・埼玉で利用できます。店舗買取の即金性と宅配買取の手軽さを兼ね備えた第3の選択肢です。' },
  { q: '宅配買取で送料はかかりますか？', a: 'ヒカカク！経由の多くの業者では送料無料で利用できます（買取ウリエルは宅配買取の案内がありません。ティファナは2026年10月31日時点で宅配買取を一時停止中です）。査定キャンセル時の返送料はサービスによって異なるため、事前にご確認ください。' },
  { q: '店舗買取で本人確認書類は必要ですか？', a: 'はい、古物営業法により買取時の本人確認が義務づけられています。運転免許証、マイナンバーカード、パスポートなどの顔写真付き本人確認書類をお持ちください。' },
  { q: '大量のゲーム（50本以上）を売る場合は、どちらがおすすめですか？', a: '宅配買取をおすすめします。段ボールに詰めて送るだけのため、50本以上でも負担なく対応できます。まとめ売りボーナスを設けている業者も多くあります。店舗まで大量のゲームを運ぶのは負担が大きいためです。' },
  { q: '店舗買取と宅配買取を組み合わせて使えますか？', a: 'はい、組み合わせて利用できます。まずヒカカク！の宅配買取で相場を把握し、高額商品のみ店舗で対面交渉を行い、残りは宅配で一括売却する使い分けをおすすめします。' },
];

export default function ShopVsOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "店舗買取 vs 宅配買取｜ゲームを売るならどっちがお得？", "datePublished": "2026-03-15", "dateModified": "2026-06-14", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: '比較', href: '/' }, { name: '店舗 vs 宅配' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(96,165,250,0.2)', color: '#60A5FA' }}>比較ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            店舗買取 vs 宅配買取 どっちがお得？
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲームを売る際に、店舗へ持ち込むか、ネットで宅配買取を利用するかについて、手軽さ・即金性・買取金額など8項目で比較しています。出張買取という第3の選択肢もあわせて解説します。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />8項目比較表</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>比較項目</th>
                  <th>店舗買取</th>
                  <th>宅配買取</th>
                  <th>有利</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((row) => (
                  <tr key={row.item}>
                    <td className="font-bold">{row.item}</td>
                    <td className="text-sm">{row.shop}</td>
                    <td className="text-sm">{row.online}</td>
                    <td className="font-bold" style={{ color: row.winner === '宅配買取' ? 'var(--color-electric-green)' : row.winner === '店舗買取' ? '#60A5FA' : 'var(--color-text-light)' }}>{row.winner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Who should use what */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />それぞれ向いている人</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-4" style={{ color: '#60A5FA' }}>店舗買取が向いている人</h3>
              <ul className="space-y-2">
                {shopFor.map((item) => (
                  <li key={item} className="text-sm flex items-start gap-2" style={{ color: 'var(--color-text-light)' }}>
                    <span className="shrink-0 mt-1" style={{ color: '#60A5FA' }}>&#9679;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-4" style={{ color: 'var(--color-electric-green)' }}>宅配買取が向いている人</h3>
              <ul className="space-y-2">
                {onlineFor.map((item) => (
                  <li key={item} className="text-sm flex items-start gap-2" style={{ color: 'var(--color-text-light)' }}>
                    <span className="shrink-0 mt-1" style={{ color: 'var(--color-electric-green)' }}>&#9679;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Third Option */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />第3の選択肢: 出張買取</h2>
          <div className="glass-card p-6">
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-light)' }}>
              店舗買取の即金性と宅配買取の手軽さを兼ね備えた「出張買取」という選択肢もあります。買取業者が自宅を訪問するため、重いゲーム機を運ぶ必要がなく、その場で査定・現金化が可能です。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>自宅で完結</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>外出・梱包は不要で、査定員がすべて対応します。</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>即日現金化</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>その場で査定を行い、同意すれば即日現金を受け取れます。</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>対面交渉が可能</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>査定額に納得できない場合は交渉も可能です。</p>
              </div>
            </div>
            <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
              <strong style={{ color: 'var(--color-deep-blue)' }}>買取ウリエル</strong>が出張買取に対応しています。ゲームの対象は東京・神奈川・千葉・埼玉で、出張費は無料、査定のみの利用も可能です。
            </p>
          </div>
        </section>

        {/* 見落としがちな違い */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />見落としやすい4つの実務上の違い</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>① 本人確認の手続き</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>古物営業法により、店頭・宅配ともに本人確認が必須です。店頭では本人確認書類の提示、宅配では申込時に本人確認書類の画像のアップロードや同梱が必要です。いずれも18歳未満は売却できないのが一般的です。宅配では書類に不備があると査定が止まるため、事前の準備が重要です。</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>② キャンセル時の返送料</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>店頭は断ってそのまま持ち帰れますが、宅配は査定額に納得できない場合の返送料や返送条件が業者で異なります（ゲオは査定後キャンセルの返送料が無料、一部業者は自己負担）。「7日以内に返事がないと自動承認」などの期限を設けている業者もあるため、申込前に必ずご確認ください。</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>③ ゲーム機本体のデータ初期化</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>本体を売る前には、アカウント連携の解除と初期化（データ消去）が必須です。店頭であればスタッフに確認しながら作業できますが、宅配では発送前にご自身で済ませる必要があります。Switchは「いつも遊ぶ本体」の解除、PS5はアカウントのサインアウトを忘れずに行ってください。</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>④ 同じソフトでも査定額に差</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>店頭は店舗ごとの在庫状況、宅配は全国相場とキャンペーンが反映されます。当サイトの調査でも、同じソフトの価格がチェーン間で1,000円以上異なる例がありました。即金性を重視する場合は店頭、最高値を狙う場合は宅配で複数社を比較する方法が基本です。</p>
            </div>
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map((faq) => ({
                  '@type': 'Question',
                  name: faq.q,
                  acceptedAnswer: { '@type': 'Answer', text: faq.a },
                })),
              }),
            }}
          />
        </section>

        {/* CTA */}
        <section className="glass-card-dark p-8 text-center">
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>
            目的に合った<span style={{ color: 'var(--color-electric-green)' }}>売り方</span>の選び方
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            店舗・宅配・出張のいずれの方法でも、まずは無料査定から始めることをおすすめします。おすすめのサービスをご確認ください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>売り方別の詳細ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/method/online/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>宅配買取ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>流れ・梱包のコツ・送料比較</p>
            </Link>
            <Link href="/method/shop/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>店舗買取ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>即日現金化・持ち込み注意点</p>
            </Link>
            <Link href="/method/high-price/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>高く売るコツ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>買取価格を最大化する10のテクニック</p>
            </Link>
          </div>
          <div className="mt-4">
            <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他の比較ガイド</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/compare/hikakaku-vs-uriel/" className="glass-card p-4 card-hover block">
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク vs ウリエル</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>2大サービスの違いを比較</p>
              </Link>
              <Link href="/compare/mercari-vs-kaitori/" className="glass-card p-4 card-hover block">
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>メルカリ vs 買取業者</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>12項目の詳細比較・金額シミュレーション</p>
              </Link>
            </div>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
