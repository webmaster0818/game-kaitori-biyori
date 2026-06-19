import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: '広島のゲーム買取おすすめ店舗｜紙屋町・広島駅・西区エリア別ガイド【2026年6月】',
  description:
    '広島でゲームを高く売れる買取店をエリア別に紹介。大手町・紙屋町の都心部、駿河屋アルパーク北棟店・MEGA中筋店、地場専門店レプトンなど実店舗を比較。宅配買取の代替も解説。',
  keywords: ['広島 ゲーム買取', '広島 ゲーム 売る', '広島 ゲーム 高価買取', '駿河屋 広島', 'レプトン 広島'],
  openGraph: {
    title: '広島のゲーム買取おすすめ店舗｜紙屋町・広島駅・西区エリア別ガイド【2026年6月】',
    description: '広島のゲーム買取店をエリア別に紹介。都心部・西区・安佐南区の実店舗を比較。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const areas = [
  {
    name: '紙屋町・八丁堀・大手町エリア（都心部）',
    description: '広島の中心市街地。トレカ・サブカル系のホビー店と、大型総合中古のブックオフが利用しやすいエリアです。',
    shops: [
      { name: 'BOOKOFF SUPER BAZAAR 広島大手町店', feature: '都心部の大型複合店。ゲーム本体・ソフト・トレカ・ホビーまで幅広く対応（駐車場あり）。', genre: '全般・大型', priceLevel: '中' },
      { name: 'イエローサブマリン 広島店', feature: '大手町・吉岡ビル。トレカ・ボードゲーム・フィギュア中心のホビー専門店。デュエルスペース併設。', genre: 'トレカ・ホビー', priceLevel: '中〜高（トレカ）' },
      { name: 'らしんばん 広島店', feature: '本通エリア。アニメグッズ・同人とあわせて中古ゲーム・CD/DVDも買取。', genre: 'アニメ・ゲーム', priceLevel: '中' },
    ],
  },
  {
    name: '西区（アルパーク・草津）エリア',
    description: '西区のアルパークには広島市内最大級の駿河屋があり、レトロから新作・ホビーまで幅広く査定してもらえます。',
    shops: [
      { name: '駿河屋 アルパーク北棟店', feature: 'アルパーク北棟2F。広島市内最大級の駿河屋。ゲーム・フィギュア・トレカ・プラモに対応し、レトロ〜新作まで強い。', genre: '全般・ホビー・レトロ', priceLevel: '中〜高' },
      { name: 'ゲオ 広島庚午店', feature: '西区庚午中エリア。新作・中古ゲームの販売・買取に対応する定番チェーン。', genre: '新作・全般', priceLevel: '中' },
    ],
  },
  {
    name: '安佐南区エリア',
    description: '安佐南区には大型業態の駿河屋MEGA中筋店があり、郊外でじっくりゲーム・ホビーを売りたい方に便利です。',
    shops: [
      { name: '駿河屋 MEGA中筋店', feature: '安佐南区中筋。MEGA業態の大型店で年中無休。ゲーム・ホビー・フィギュア・トレカを幅広く査定。', genre: '全般・ホビー・大型', priceLevel: '中〜高' },
      { name: 'ゲオ 広島長束店', feature: '安芸長束駅最寄。新作・中古ゲームの販売・買取に対応。', genre: '新作・全般', priceLevel: '中' },
    ],
  },
  {
    name: '地場ゲーム専門店（市内各所）',
    description: '広島には地場のゲーム専門チェーンがあり、レトロから新作まで広島独自の強みがあります。',
    shops: [
      { name: 'レプトン（出汐・祇園・可部・上安 ほか）', feature: '広島地場のゲーム専門チェーン。PS5/Switch等の新作からスーファミ/GBA等レトロまで品揃え・買取とも強い。', genre: 'ゲーム専門・レトロ〜新作', priceLevel: '中〜高' },
      { name: 'BOOKOFF 広島段原店（段原SC）', feature: '広島駅近くの段原ショッピングセンター内。ゲーム・トレカ・ホビーを取扱い。', genre: '全般', priceLevel: '中' },
    ],
  },
];

const highPriceTips = [
  { tip: '大型の駿河屋（アルパーク・中筋）を狙う', detail: 'ゲーム＋フィギュア＋トレカをまとめて売るなら、広島最大級の駿河屋アルパーク北棟店やMEGA中筋店が便利で、レトロ〜新作まで高値が期待できます。' },
  { tip: 'レトロ・専門タイトルは地場のレプトンへ', detail: 'レトロや専門性の高いタイトルは、広島地場のゲーム専門チェーン・レプトンが強みです。新作も含め一般チェーンと査定を比較しましょう。' },
  { tip: 'トレカは都心のホビー専門店で', detail: 'トレカ（ポケカ・遊戯王等）は、大手町のイエローサブマリン広島店などホビー専門店の方が一般チェーンより高値をつけやすい傾向です。' },
];

const faqs = [
  { q: '広島でゲームを最も高く買い取ってくれる店はどこですか？', a: '新作・一般ソフトはゲオやブックオフ、レトロや専門タイトルは地場のレプトンや駿河屋（アルパーク北棟店・MEGA中筋店）が高値の傾向です。フィギュア・トレカも一緒なら駿河屋やイエローサブマリンが便利です。複数店での比較がおすすめです。' },
  { q: '広島の都心部で即日現金化できますか？', a: 'はい。BOOKOFF SUPER BAZAAR 広島大手町店などでは、身分証提示で即日現金化が可能です。点数次第ですが10点程度なら15〜30分が目安です。' },
  { q: '広島にまんだらけはありますか？', a: '2026年6月時点で、まんだらけの広島市内店舗は確認できません。レトロ・コレクター品やホビーは駿河屋や地場専門店レプトンが担っています。' },
  { q: '中国地方在住ですが宅配買取の方がお得ですか？', a: '大量に売る場合や近くに専門店がない場合は宅配買取が便利です。ヒカカク！なら最大20社に一括査定でき、送料無料の業者も多いため、中国地方在住でも高値を狙えます。' },
];

export default function HiroshimaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "広島のゲーム買取おすすめ店舗｜紙屋町・広島駅・西区エリア別ガイド", "datePublished": "2026-06-18", "dateModified": "2026-06-18", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'エリア別', href: '/' }, { name: '広島' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(251,191,36,0.2)', color: '#FBBF24' }}>エリア別ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">広島のゲーム買取おすすめ店舗ガイド</h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            紙屋町・大手町の都心部から、駿河屋アルパーク北棟店・MEGA中筋店、地場のゲーム専門店レプトンまで、広島でゲームを高く売れる買取店をエリア別に紹介します。
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
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>近くに店舗がない・大量に売りたい場合は、中国地方からでも使えるオンライン買取が便利です。</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}><h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！</h3><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社に一括査定。自宅から最高値を比較できる。送料無料の業者多数。</p></div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}><h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ゲーム王国（宅配買取）</h3><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>中国地方からも送料無料（佐川集荷）。故障品・箱なしもOKで最短当日入金。</p></div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}><h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>駿河屋（宅配買取）</h3><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>レトロゲームの宅配買取に強い。全国どこからでも送料無料で利用可能。</p></div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />広島で高く売るコツ</h2>
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
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>広島で<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>を見つけよう</h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>店舗持ち込みでもオンラインでも、複数社の査定を比較するのが高く売るコツです。</p>
          <div className="flex flex-wrap justify-center gap-4"><Link href="/" className="btn-primary py-3 px-8">おすすめランキングを見る</Link></div>
        </section>

        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のエリアガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/area/osaka/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>大阪のゲーム買取</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>日本橋・梅田・難波エリア別ガイド</p></Link>
            <Link href="/area/kobe/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>神戸のゲーム買取</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>三宮・元町エリア別ガイド</p></Link>
            <Link href="/area/fukuoka/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>福岡のゲーム買取</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>天神・博多・小倉エリア別ガイド</p></Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
