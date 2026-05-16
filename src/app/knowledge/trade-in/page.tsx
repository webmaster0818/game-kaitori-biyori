import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ゲームの下取りと買取の違い｜どっちがお得？【2026年版】',
  description:
    '下取り（店舗クレジット）と買取（現金化）の違いを徹底比較。ゲオ・ブックオフ等の下取りプログラム紹介、シーン別おすすめ、メリット・デメリット比較表付き。',
  keywords: ['ゲーム 下取り 買取 違い', '下取り 買取 どっち', 'ゲーム 下取り お得'],
  openGraph: {
    title: 'ゲームの下取りと買取の違い｜どっちがお得？【2026年版】',
    description: '下取り（店舗クレジット）と買取（現金化）の違いを徹底比較。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const comparisonTable = [
  { item: '受取形式', tradeIn: '店舗ポイント・クレジット', buyout: '現金（振込 or 手渡し）' },
  { item: '金額の目安', tradeIn: '買取より10〜20%高いことが多い', buyout: '市場相場に準拠' },
  { item: '使い道の自由度', tradeIn: '同一店舗でのみ利用可', buyout: '自由に使える' },
  { item: '手続きの手軽さ', tradeIn: '店頭で即完了', buyout: '宅配の場合は2〜5日' },
  { item: '向いている人', tradeIn: '次のゲームを同じ店で買う人', buyout: '現金が欲しい・他店で買う人' },
  { item: '代表的なサービス', tradeIn: 'ゲオ・TSUTAYA・Amazonトレードイン', buyout: 'ヒカカク！・ウリエル・ブックオフ' },
];

const tradeInPrograms = [
  { shop: 'ゲオ（GEO）', detail: '下取り価格が通常買取より約15%上乗せ。Pontaポイント付与で実質さらにお得。店頭のみ対応。', bonus: '＋15%上乗せ' },
  { shop: 'TSUTAYA', detail: 'Tポイント還元で下取り対応。新作購入時に旧作を持ち込むと追加ボーナスあり。', bonus: '＋10%上乗せ' },
  { shop: 'Amazonトレードイン', detail: 'Amazonギフトカードとして下取り額を受取。対象商品は限定的だがオンライン完結。', bonus: '＋10〜25%上乗せ' },
  { shop: 'ブックオフ', detail: '店頭買取が基本だが、アプリ査定で事前に価格確認可能。買い替え時に下取り扱い可能な場合も。', bonus: '＋5〜10%上乗せ' },
  { shop: 'ソフマップ（ビックカメラ系）', detail: 'ビックポイントで還元。PCゲーム周辺機器の下取りにも対応しており、PC買い替え時にも活用可。', bonus: '＋10〜15%上乗せ' },
];

const scenarioRecommendations = [
  { scenario: '新作ゲームをすぐ買い替えたい', recommended: '下取り', reason: '同じ店舗で即座に新作購入に充てられるため、手間とスピードで有利。' },
  { scenario: 'しばらくゲームを買う予定がない', recommended: '買取（現金化）', reason: 'ポイントの有効期限を気にする必要がなく、現金として自由に使える。' },
  { scenario: '複数タイトルをまとめて処分したい', recommended: '買取（宅配）', reason: '宅配買取ならまとめ売りボーナスがつくサービスが多く、合計額で有利。' },
  { scenario: '限定版・プレミアソフトを売りたい', recommended: '買取（専門店）', reason: '下取りではプレミア価格が反映されにくい。専門店なら適正価格で査定。' },
  { scenario: 'Amazon で次のゲームを買う予定', recommended: 'Amazonトレードイン', reason: 'ギフトカード還元率が高く、Amazon購入予定ならば最もお得な選択肢。' },
];

const faqs = [
  { q: '下取りと買取の一番大きな違いは何ですか？', a: '最大の違いは受取形式です。下取りは店舗ポイントやクレジットで受け取るため同一店舗でしか使えませんが、買取は現金で受け取れるため使い道が自由です。下取りの方が金額が10〜20%高くなるケースが多いですが、ポイントの有効期限や利用条件に注意が必要です。' },
  { q: '金額だけで比較するとどちらがお得ですか？', a: '金額だけなら下取りの方が高くなることが多いです。店舗側は再販を前提としているため、ポイント還元として上乗せできるからです。ただし「実質的な価値」で考えると、現金の方が使い道が広いため、次の購入予定がない場合は買取の方がお得です。' },
  { q: 'ゲオの下取りプログラムはどう利用しますか？', a: 'ゲオ店頭に売りたいゲームと購入したいゲームを持ち込むだけです。下取り対象商品であれば通常の買取価格より約15%上乗せした金額が新作購入代金から差し引かれます。Pontaカードがあればさらにポイントが貯まります。' },
  { q: 'Amazonトレードインの対象商品は多いですか？', a: '対象商品はゲームソフト・ゲーム機・タブレット・スマートフォンなどですが、全商品が対象ではありません。Amazon公式サイトのトレードインページで事前に対象確認と見積もり金額を確認できます。還元率はギフトカードで10〜25%上乗せされます。' },
  { q: '下取りのデメリットは何ですか？', a: '主なデメリットは3つです。1つ目はポイントの有効期限があること、2つ目は同一店舗でしか使えないこと、3つ目はプレミアソフトの価値が反映されにくいことです。次の購入予定が明確でない場合は、現金化できる買取の方が安全です。' },
  { q: '下取りと買取を組み合わせることはできますか？', a: 'はい、賢い方法です。次に買いたいゲームが決まっているソフトは下取りに出し、特に目的がないソフトは買取で現金化するという使い分けがおすすめです。また、プレミア価値のあるソフトは専門買取店、それ以外は下取りに出すという組み合わせも効果的です。' },
];

export default function TradeInPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '下取りと買取の違い' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲームの下取りと買取の違い｜どっちがお得？
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲームを手放す方法は「下取り（店舗クレジット）」と「買取（現金化）」の2つ。それぞれの仕組み・メリットデメリット・おすすめシーンを比較表つきで徹底解説します。ゲオ・ブックオフ・Amazonトレードインなど主要サービスの下取りプログラムも紹介。あなたに最適な売却方法が見つかります。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 下取りと買取の比較表 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />下取りと買取の比較表</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>比較項目</th>
                  <th>下取り（店舗クレジット）</th>
                  <th>買取（現金化）</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row) => (
                  <tr key={row.item}>
                    <td className="font-bold">{row.item}</td>
                    <td className="text-sm">{row.tradeIn}</td>
                    <td className="text-sm">{row.buyout}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 主要下取りプログラム */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />主要店舗の下取りプログラム</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>店舗</th>
                  <th>下取り内容</th>
                  <th>上乗せ率</th>
                </tr>
              </thead>
              <tbody>
                {tradeInPrograms.map((row) => (
                  <tr key={row.shop}>
                    <td className="font-bold">{row.shop}</td>
                    <td className="text-sm">{row.detail}</td>
                    <td className="font-bold" style={{ color: 'var(--color-electric-green)' }}>{row.bonus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* シーン別おすすめ */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />シーン別おすすめ判定</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>シーン</th>
                  <th>おすすめ</th>
                  <th>理由</th>
                </tr>
              </thead>
              <tbody>
                {scenarioRecommendations.map((row) => (
                  <tr key={row.scenario}>
                    <td className="text-sm">{row.scenario}</td>
                    <td className="font-bold" style={{ color: 'var(--color-electric-green)' }}>{row.recommended}</td>
                    <td className="text-sm">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 判断フローチャート */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />かんたん判断ガイド</h2>
          <div className="glass-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>下取りを選ぶべき人</h3>
                <ul className="text-sm space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・次に買いたいゲームが同じ店舗にある</li>
                  <li>・すぐに買い替えたい（即日完了が理想）</li>
                  <li>・ポイント経済圏をよく利用する</li>
                  <li>・額面より手軽さを重視する</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>買取を選ぶべき人</h3>
                <ul className="text-sm space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・現金として自由に使いたい</li>
                  <li>・次の購入予定が決まっていない</li>
                  <li>・プレミアソフトや限定版を持っている</li>
                  <li>・複数店舗の査定を比較したい</li>
                </ul>
              </div>
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
            まずは<span style={{ color: 'var(--color-electric-green)' }}>無料査定</span>で現金買取額をチェック
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            下取りと買取、どちらがお得か迷ったらまず現金の買取額を確認しましょう。一括査定なら最高値がすぐにわかります。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連記事</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/knowledge/price-guide/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取相場ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ハード・ソフト別の相場一覧</p>
            </Link>
            <Link href="/review/geo/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲオ買取レビュー</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>下取りプログラムの詳細</p>
            </Link>
            <Link href="/review/bookoff/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ブックオフ買取レビュー</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>店頭買取の特徴と評判</p>
            </Link>
          </div>
        </section>

        <p className="text-xs mt-8 text-center" style={{ color: 'var(--color-text-light)' }}>最終更新: 2026年5月</p>
      </div>
    </>
  );
}
