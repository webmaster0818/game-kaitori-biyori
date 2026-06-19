import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: '京都のゲーム買取おすすめ店舗｜河原町・寺町・京都駅エリア別ガイド【2026年6月】',
  description:
    '京都でゲームを高く売れる買取店をエリア別に紹介。寺町（駿河屋京都寺町店）、河原町（まんだらけ京都店・じゃんぱら）、京都駅周辺の実店舗を比較。宅配買取の代替も解説。',
  keywords: ['京都 ゲーム買取', '京都 ゲーム 売る', '京都 ゲーム 高価買取', '駿河屋 京都', 'まんだらけ 京都'],
  openGraph: {
    title: '京都のゲーム買取おすすめ店舗｜河原町・寺町・京都駅エリア別ガイド【2026年6月】',
    description: '京都のゲーム買取店をエリア別に紹介。寺町・河原町・京都駅周辺の実店舗を比較。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const areas = [
  {
    name: '河原町・四条・寺町エリア',
    description: '京都で最も買取店が集中するエリア。寺町通の駿河屋、髙島屋のまんだらけ、寺町のじゃんぱらが徒歩圏に固まり、ホビー・レトロ買取の激戦区です。',
    shops: [
      { name: '駿河屋 京都寺町店', feature: '寺町通の3階建て大型店。1Fゲーム・2Fフィギュア・3Fプラモ/アニメ。レトロから現行まで幅広く査定。', genre: '全般・レトロ・ホビー', priceLevel: '中〜高' },
      { name: 'まんだらけ 京都店', feature: '京都髙島屋S.C.[T8]4F。レトロ・ヴィンテージTOY・サブカルに強い。店頭/出張/宅配買取対応。', genre: 'レトロ・コレクター', priceLevel: '高（レア品）' },
      { name: 'じゃんぱら 京都店', feature: '寺町通沿い。中古PC・スマホが主力だがゲームも買取対象。秋葉原系の中古デジタル専門店。', genre: 'デジタル機器・ゲーム', priceLevel: '中' },
      { name: 'ゲオモバイル エディオン京都河原町本店', feature: '四条河原町・エディオン内のゲオ。新作中心のゲーム・ゲーム機の販売・買取に対応。', genre: '新作・全般', priceLevel: '中' },
    ],
  },
  {
    name: '京都駅周辺・三条エリア',
    description: '京都駅前や三条など交通の便が良いエリア。総合中古のブックオフが利用しやすく、アクセス重視の方に便利です。',
    shops: [
      { name: 'BOOKOFF 京都東寺駅前店', feature: '京都駅南西側。ゲームソフト・ゲーム機の買取に対応する大手リユース。', genre: '全般', priceLevel: '中' },
      { name: 'BOOKOFF 京都三条駅ビル店', feature: '京阪三条駅ビル内でアクセス良好。ゲーム買取に対応。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオモバイル 京都アバンティ店', feature: '京都駅前アバンティ内のゲオ。新作中心のゲーム全般。', genre: '新作・全般', priceLevel: '中' },
    ],
  },
  {
    name: 'その他市内エリア',
    description: '山科・太秦・円町など、市内各所にチェーン店が分散。お住まいの近くで手軽に売りたい方向けです。',
    shops: [
      { name: 'BOOKOFF 京都山科西野店 / 太秦店 / 宝ヶ池店', feature: '山科区・右京区・左京区の各エリアに展開。ゲームソフト・ゲーム機の買取に対応。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオ 円町店', feature: '中京区円町。新作中心のゲーム買取に対応。', genre: '新作・全般', priceLevel: '中' },
    ],
  },
];

const highPriceTips = [
  { tip: '寺町・河原町で複数店を回る', detail: '駿河屋京都寺町店・まんだらけ京都店・じゃんぱら京都店が徒歩圏に集まっています。レトロ・限定版・トレカは2〜3店で査定を比較すると最高値を見つけやすいです。' },
  { tip: 'レトロ・コレクター品はまんだらけ・駿河屋へ', detail: 'ファミコン〜レトロや限定版は、まんだらけ京都店や駿河屋京都寺町店が一般チェーンより高値をつけやすい傾向です。' },
  { tip: '新作・一般ソフトはゲオ・ブックオフで', detail: '新作や一般中古ソフトは、ゲオやブックオフが手軽で即日現金化も可能。事前に買取価格の相場を確認してから持ち込むと効率的です。' },
];

const faqs = [
  { q: '京都でゲームを最も高く買い取ってくれる店はどこですか？', a: '新作・一般ソフトはゲオやブックオフ、レトロや限定版・コレクター品はまんだらけ京都店や駿河屋京都寺町店が高値の傾向です。寺町・河原町エリアで複数店を比較するのがおすすめです。' },
  { q: '河原町・寺町周辺で即日現金化できますか？', a: 'はい。ゲオモバイル エディオン京都河原町本店やブックオフ各店では、身分証提示で即日現金化が可能です。点数次第ですが10点程度なら15〜30分が目安です。' },
  { q: 'レトロゲームはどこで売るのがお得ですか？', a: 'まんだらけ京都店や駿河屋京都寺町店など、レトロ・コレクター品に強い専門寄りの店がおすすめです。完品（箱・説明書付き）なら査定額が大きく変わるため、付属品を揃えて持ち込みましょう。' },
  { q: '関西在住ですが宅配買取の方がお得ですか？', a: '大量に売る場合や近くに専門店がない場合は宅配買取が便利です。ヒカカク！なら最大20社に一括査定でき、送料無料の業者も多いため、関西在住でも高値を狙えます。' },
];

export default function KyotoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "京都のゲーム買取おすすめ店舗｜河原町・寺町・京都駅エリア別ガイド", "datePublished": "2026-06-18", "dateModified": "2026-06-18", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'エリア別', href: '/' }, { name: '京都' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(251,191,36,0.2)', color: '#FBBF24' }}>エリア別ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">京都のゲーム買取おすすめ店舗ガイド</h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            寺町・河原町のホビー激戦区（駿河屋・まんだらけ・じゃんぱら）から京都駅周辺のブックオフまで、京都でゲームを高く売れる買取店をエリア別に紹介します。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新: 2026年6月（各店公式・店舗情報で実在確認）</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {areas.map((area) => (
          <section key={area.name} className="mb-12">
            <h2 className="section-heading mb-6"><span className="section-heading-bar" />{area.name}</h2>
            <p className="text-sm mb-6" style={{ color: 'var(--color-text-light)' }}>{area.description}</p>
            <div className="overflow-x-auto">
              <table className="comparison-table">
                <thead><tr><th>店舗名</th><th>特徴</th><th>得意ジャンル</th><th>価格帯</th></tr></thead>
                <tbody>
                  {area.shops.map((shop) => (
                    <tr key={shop.name}>
                      <td className="font-bold text-sm">{shop.name}</td>
                      <td className="text-sm">{shop.feature}</td>
                      <td className="text-sm">{shop.genre}</td>
                      <td className="text-sm font-bold" style={{ color: shop.priceLevel.includes('高') ? 'var(--color-electric-green)' : 'var(--color-text-light)' }}>{shop.priceLevel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />店舗に行けない場合のオンライン代替</h2>
          <div className="glass-card p-6">
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>近くに店舗がない・大量に売りたい場合は、関西からでも使えるオンライン買取が便利です。</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}><h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！</h3><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社に一括査定。自宅から最高値を比較できる。送料無料の業者多数。</p></div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}><h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ゲーム王国（宅配買取）</h3><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>関西からも送料無料（佐川集荷）。故障品・箱なしもOKで最短当日入金。</p></div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}><h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>駿河屋（宅配買取）</h3><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>レトロゲームの宅配買取に強い。全国どこからでも送料無料で利用可能。</p></div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />京都で高く売るコツ</h2>
          <div className="space-y-4">
            {highPriceTips.map((item, i) => (
              <div key={item.tip} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>{String(i + 1).padStart(2, '0')}</div>
                <div><h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{item.tip}</h3><p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{item.detail}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />よくある質問</h2>
          <div>
            {faqs.map((faq, i) => (<details key={i} className="faq-item"><summary>{faq.q}</summary><div className="faq-answer">{faq.a}</div></details>))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) }) }} />
        </section>

        <section className="glass-card-dark p-8 text-center">
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>京都で<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>を見つけよう</h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>店舗持ち込みでもオンラインでも、複数社の査定を比較するのが高く売るコツです。</p>
          <div className="flex flex-wrap justify-center gap-4"><Link href="/" className="btn-primary py-3 px-8">おすすめランキングを見る</Link></div>
        </section>

        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のエリアガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/area/osaka/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>大阪のゲーム買取</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>日本橋・梅田・難波エリア別ガイド</p></Link>
            <Link href="/area/kobe/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>神戸のゲーム買取</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>三宮・元町エリア別ガイド</p></Link>
            <Link href="/area/nagoya/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>名古屋のゲーム買取</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>大須・栄・名駅エリア別ガイド</p></Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
