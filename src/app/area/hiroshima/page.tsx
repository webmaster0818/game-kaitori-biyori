import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: '広島のゲーム買取おすすめ店舗｜紙屋町・広島駅・西区エリア別ガイド【2026年6月】',
  description:
    '広島でゲームを高く売れる買取店を、エリア別に紹介しています。大手町・紙屋町の都心部、駿河屋アルパーク北棟店・MEGA中筋店、地場専門店レプトンなどの実店舗を比較し、宅配買取の利用についても解説します。',
  keywords: ['広島 ゲーム買取', '広島 ゲーム 売る', '広島 ゲーム 高価買取', '駿河屋 広島', 'レプトン 広島'],
  openGraph: {
    images: ['/og.png'],
    title: '広島のゲーム買取おすすめ店舗｜紙屋町・広島駅・西区エリア別ガイド【2026年6月】',
    description: '広島のゲーム買取店をエリア別に紹介し、都心部・西区・安佐南区の実店舗を比較しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const areas = [
  {
    name: '紙屋町・八丁堀・大手町エリア（都心部）',
    description: '広島の中心市街地です。トレカ・サブカル系のホビー店と、大型総合中古のブックオフが利用しやすいエリアです。',
    shops: [
      { name: 'BOOKOFF SUPER BAZAAR 広島大手町店', feature: '都心部の大型複合店です。ゲーム本体・ソフト・トレカ・ホビーまで幅広く対応しています（駐車場あり）。', genre: '全般・大型', priceLevel: '中' },
      { name: 'イエローサブマリン 広島店', feature: '大手町の吉岡ビルにある、トレカ・ボードゲーム・フィギュア中心のホビー専門店です。デュエルスペースを併設しています。', genre: 'トレカ・ホビー', priceLevel: '中〜高（トレカ）' },
      { name: 'らしんばん 広島店', feature: '本通エリアにあります。アニメグッズ・同人誌とあわせて、中古ゲーム・CD/DVDも買取しています。', genre: 'アニメ・ゲーム', priceLevel: '中' },
    ],
  },
  {
    name: '西区（アルパーク・草津）エリア',
    description: '西区のアルパークには広島市内最大級の駿河屋があり、レトロから新作・ホビーまで幅広く査定してもらえます。',
    shops: [
      { name: '駿河屋 アルパーク北棟店', feature: 'アルパーク北棟2Fにある、広島市内最大級の駿河屋です。ゲーム・フィギュア・トレカ・プラモデルに対応しており、レトロから新作まで強みがあります。', genre: '全般・ホビー・レトロ', priceLevel: '中〜高' },
      { name: 'ゲオ 広島庚午店', feature: '西区庚午中エリアにある定番チェーンの店舗です。新作・中古ゲームの販売・買取に対応しています。', genre: '新作・全般', priceLevel: '中' },
    ],
  },
  {
    name: '安佐南区エリア',
    description: '安佐南区には大型業態の駿河屋MEGA中筋店があり、郊外でじっくりゲーム・ホビーを売りたい方に便利です。',
    shops: [
      { name: '駿河屋 MEGA中筋店', feature: '安佐南区中筋にあるMEGA業態の大型店で、年中無休です。ゲーム・ホビー・フィギュア・トレカを幅広く査定しています。', genre: '全般・ホビー・大型', priceLevel: '中〜高' },
      { name: 'ゲオ 広島長束店', feature: '安芸長束駅が最寄りです。新作・中古ゲームの販売・買取に対応しています。', genre: '新作・全般', priceLevel: '中' },
    ],
  },
  {
    name: '地場ゲーム専門店（市内各所）',
    description: '広島には地場のゲーム専門チェーンがあり、レトロから新作まで広島独自の強みがあります。',
    shops: [
      { name: 'レプトン（出汐・祇園・可部・上安 ほか）', feature: '広島地場のゲーム専門チェーンです。PS5/Switch等の新作からスーパーファミコン/GBA等のレトロゲームまで、品揃え・買取ともに強みがあります。', genre: 'ゲーム専門・レトロ〜新作', priceLevel: '中〜高' },
      { name: 'BOOKOFF 広島段原店（段原SC）', feature: '広島駅近くの段原ショッピングセンター内にあります。ゲーム・トレカ・ホビーを取り扱っています。', genre: '全般', priceLevel: '中' },
    ],
  },
];

const highPriceTips = [
  { tip: '大型の駿河屋（アルパーク・中筋）を利用する', detail: 'ゲーム・フィギュア・トレカをまとめて売る場合は、広島最大級の駿河屋アルパーク北棟店やMEGA中筋店が適しており、レトロから新作まで高値が期待できます。' },
  { tip: 'レトロ・専門タイトルは地場のレプトンへ', detail: 'レトロや専門性の高いタイトルは、広島地場のゲーム専門チェーンであるレプトンに強みがあります。新作も含め、一般チェーンと査定額を比較することをおすすめします。' },
  { tip: 'トレカは都心のホビー専門店で', detail: 'トレカ（ポケカ・遊戯王等）は、大手町のイエローサブマリン広島店などホビー専門店の方が一般チェーンより高値をつけやすい傾向があります。' },
];

const faqs = [
  { q: '広島でゲームを最も高く買い取ってくれる店はどこですか？', a: '新作・一般ソフトはゲオやブックオフ、レトロや専門タイトルは地場のレプトンや駿河屋（アルパーク北棟店・MEGA中筋店）が高値がつく傾向があります。フィギュア・トレカもあわせて売る場合は、駿河屋やイエローサブマリンが適しています。複数店で比較することをおすすめします。' },
  { q: '広島の都心部で即日現金化できますか？', a: 'はい。BOOKOFF SUPER BAZAAR 広島大手町店などでは、本人確認書類の提示で即日現金化が可能です。点数によりますが、10点程度であれば15〜30分が目安です。' },
  { q: '広島にまんだらけはありますか？', a: '2026年6月時点で、まんだらけの広島市内店舗は確認できません。レトロ・コレクター品やホビーは駿河屋や地場専門店レプトンが担っています。' },
  { q: '中国地方在住ですが宅配買取の方がお得ですか？', a: '大量に売る場合や近くに専門店がない場合は宅配買取が便利です。ヒカカク！なら最大20社に一括査定でき、送料無料の業者も多いため、中国地方にお住まいの方でも高値での売却が期待できます。' },
];

export default function HiroshimaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "広島のゲーム買取おすすめ店舗｜紙屋町・広島駅・西区エリア別ガイド", "datePublished": "2026-06-18", "dateModified": "2026-06-18", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較している編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />店舗に行けない場合のオンライン買取</h2>
          <div className="glass-card p-6">
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>近くに店舗がない場合や大量に売りたい場合は、中国地方からも利用できるオンライン買取をおすすめします。</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}><h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！</h3><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社に一括で査定を依頼でき、自宅にいながら各社の査定額を比較できます。送料無料の業者も多数あります。</p></div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}><h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ゲーム王国（宅配買取）</h3><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>中国地方からも送料無料（佐川集荷）で利用できます。故障品・箱なしの商品も買取対象で、最短で当日に入金されます。</p></div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}><h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>駿河屋（宅配買取）</h3><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>レトロゲームの宅配買取に強みがあります。全国どこからでも送料無料で利用できます。</p></div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />広島で高く売るためのポイント</h2>
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
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>広島で<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>を見つける方法</h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>店舗への持ち込み・オンライン買取のいずれの場合も、複数社の査定額を比較することをおすすめします。</p>
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
