import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'
import KaitoriWorldCta from '@/components/KaitoriWorldCta';

export const metadata: Metadata = {
  title: '福岡のゲーム買取おすすめ店舗｜天神・博多・小倉エリア別ガイド【2026年6月】',
  description:
    '福岡でゲームを高く売れる買取店舗をエリア別に徹底紹介。天神（ブックオフ・ゲオ・駿河屋）、博多、小倉の人気店舗と特徴を比較。宅配・出張買取サービスも紹介。',
  keywords: ['ゲーム買取 福岡', 'ゲーム買取 福岡 おすすめ', 'ゲーム買取 天神', 'ゲーム買取 博多', 'ゲーム買取 北九州'],
  openGraph: {
    title: '福岡のゲーム買取おすすめ店舗｜天神・博多・小倉エリア別ガイド【2026年6月】',
    description: '福岡のゲーム買取店をエリア別に紹介。天神・博多・小倉の人気店舗を比較。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const areas = [
  {
    name: '天神エリア',
    description: '九州最大の繁華街・天神。大手チェーンから専門店まで買取店が充実。西鉄・地下鉄でのアクセスも抜群。',
    shops: [
      { name: 'ブックオフ 天神店', feature: '天神の中心部に位置する大型店舗。ゲーム・書籍・DVDを一括で売れる。まとめ売りボーナスあり。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオ 天神店', feature: '全国チェーンの安定感。ゲームソフト・本体の買取価格をアプリで事前確認可能。スマホ買取も対応。', genre: '全般・スマホ', priceLevel: '中' },
      { name: '駿河屋 博多マルイ店（博多駅直結）', feature: 'レトロゲーム・フィギュアの買取に定評あり。ネット通販のデータに基づく高精度査定。九州唯一の駿河屋店舗。', genre: 'レトロ・フィギュア', priceLevel: '中〜高' },
      { name: 'まんだらけ 福岡店', feature: 'レトロゲーム・限定版・プレミアソフトの買取に強い。コレクター向けの査定に定評あり。', genre: 'レトロ・プレミア', priceLevel: '高（レア品）' },
    ],
  },
  {
    name: '博多エリア',
    description: '新幹線が停車するJR博多駅周辺。出張帰りや旅行ついでに立ち寄れる便利なロケーション。',
    shops: [
      { name: 'ブックオフ 博多駅前店', feature: '博多駅から徒歩5分。ゲームから書籍まで幅広く対応。即日現金化可能。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオ 博多駅東店', feature: '安定した査定額。身分証があればその場で現金化。ゲーム周辺機器も対応。', genre: '全般', priceLevel: '中' },
      { name: 'トレーダー 博多店', feature: '新作ゲーム・フィギュアの買取に強い。発売直後の高額買取に定評あり。', genre: '新作・フィギュア', priceLevel: '高（新作）' },
    ],
  },
  {
    name: '小倉エリア（北九州）',
    description: '北九州市の中心地・小倉。福岡市に次ぐ規模の商業エリアで、駅周辺に買取店が点在。',
    shops: [
      { name: 'ブックオフ 小倉駅前店', feature: '小倉駅から徒歩3分の好アクセス。ゲーム・CD・DVDまで幅広く対応。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオ 小倉店', feature: '安定のゲオ。買取価格検索アプリで事前に相場を確認可能。', genre: '全般', priceLevel: '中' },
      { name: 'まんが倉庫 小倉店', feature: 'ゲーム・トレカ・フィギュアまで幅広く対応。九州発のチェーンでまとめ売りに強い。', genre: '全般・トレカ', priceLevel: '中' },
    ],
  },
];

const highPriceTips = [
  { tip: '天神エリアで複数店を回る', detail: '天神エリアにはブックオフ、ゲオ、駿河屋、まんだらけが揃っています。2〜3店で査定してもらい最高値を見つけましょう。' },
  { tip: '新作は発売直後に売る', detail: '新作ゲームは発売後1〜2週間以内が最も高く売れます。トレーダー博多店やゲオが新作買取に強いです。' },
  { tip: 'レトロゲームは駿河屋・まんだらけへ', detail: 'レトロゲームやプレミアソフトは駿河屋福岡天神店やまんだらけ福岡店が圧倒的に高値をつけてくれます。' },
  { tip: '付属品・箱を揃える', detail: '箱・説明書・付属品の有無で査定額が2〜5倍変わることも。売る前に必ず付属品を確認しましょう。' },
  { tip: '宅配買取も活用する', detail: '福岡在住なら宅配買取も選択肢に。ヒカカク！で一括査定を取れば、全国の業者と比較して最高値を見つけられます。' },
];

const faqs = [
  { q: '福岡でゲームを最も高く買い取ってくれる店はどこですか？', a: 'ゲームの種類によって異なります。新作ゲームならトレーダー博多店、レトロゲームなら駿河屋福岡天神店やまんだらけ福岡店が高額査定の傾向があります。複数店で査定してもらい比較するのがおすすめです。' },
  { q: '天神で即日現金化できる店はありますか？', a: 'はい、ブックオフ天神店やゲオ天神店では身分証提示で即日現金化が可能です。査定時間は10点程度なら15〜30分で完了します。' },
  { q: '福岡で出張買取に対応している業者はありますか？', a: '大手の出張買取は対応エリアが変わりやすいため、申込前に各社公式サイトでの確認が必要です（例：買取ウリエルの出張対応エリアは2026年6月時点で関東・中部・近畿・岡山と公式記載されており、福岡は記載がありません）。福岡では送料無料の宅配買取（カイトリワールド・ゲーム王国・駿河屋など）の活用が確実です。' },
  { q: '九州在住ですが宅配買取のほうがお得ですか？', a: '宅配買取は店舗運営コストが低い分、買取価格が高めになる傾向があります。ヒカカク！なら最大20社に一括査定でき、送料無料の業者も多いため九州在住でも十分お得です。' },
  { q: '北九州（小倉）からゲームを売る場合のおすすめは？', a: '小倉駅周辺のブックオフやゲオで即日売却するか、宅配買取を利用するのがおすすめです。天神まで出る場合は駿河屋やまんだらけでレトロゲームの高額査定が期待できます。' },
];

export default function FukuokaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "福岡のゲーム買取おすすめ店舗｜天神・博多・小倉エリア別ガイド", "datePublished": "2026-05-19", "dateModified": "2026-06-14", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'エリア別', href: '/' }, { name: '福岡' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(251,191,36,0.2)', color: '#FBBF24' }}>エリア別ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            福岡のゲーム買取おすすめ店舗ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            天神・博多・小倉のエリア別にゲーム買取店を徹底紹介。大手チェーンから専門店まで、福岡であなたに合った買取店が見つかります。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新: 2026年5月</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Area Guides */}
        {areas.map((area) => (
          <section key={area.name} className="mb-12">
            <h2 className="section-heading mb-6"><span className="section-heading-bar" />{area.name}</h2>
            <p className="text-sm mb-6" style={{ color: 'var(--color-text-light)' }}>{area.description}</p>
            <div className="overflow-x-auto">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>店舗名</th>
                    <th>特徴</th>
                    <th>得意ジャンル</th>
                    <th>価格帯</th>
                  </tr>
                </thead>
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

        {/* Online Alternative */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />店舗に行けない場合のオンライン代替</h2>
          <div className="glass-card p-6">
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
              福岡県内でも、仕事が忙しい方や大量のゲームを売りたい方にはオンラインサービスがおすすめです。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社に一括査定。自宅から最高値を見つけられる。送料無料の業者多数。</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ゲーム王国（宅配買取）</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>福岡からも送料無料（佐川集荷）。故障品・箱なしもOKで最短当日入金。</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>駿河屋（宅配買取）</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>レトロゲームの宅配買取に強い。全国どこからでも送料無料で利用可能。</p>
              </div>
            </div>
          </div>
        </section>

        {/* High Price Tips */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />福岡で高く売るコツ</h2>
          <div className="space-y-4">
            {highPriceTips.map((item, i) => (
              <div key={item.tip} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{item.tip}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{item.detail}</p>
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
            福岡で<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>を見つけよう
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            店舗持ち込みでもオンラインでも、まずは複数社の査定を比較するのが高く売るコツです。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のエリアガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/area/tokyo/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>東京のゲーム買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>秋葉原・新宿・池袋エリア別ガイド</p>
            </Link>
            <Link href="/area/osaka/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>大阪のゲーム買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>日本橋・梅田・難波エリア別ガイド</p>
            </Link>
            <Link href="/area/nagoya/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>名古屋のゲーム買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>大須・栄・名駅エリア別ガイド</p>
            </Link>
          </div>
        </section>
        <KaitoriWorldCta compact />
        <AuthorBox />
      </div>
    </>
  );
}
