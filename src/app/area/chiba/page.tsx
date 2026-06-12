import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: '千葉のゲーム買取おすすめ店舗｜千葉駅・船橋・柏エリア別ガイド【2026年6月】',
  description:
    '千葉でゲームを高く売れる買取店舗をエリア別に徹底紹介。千葉駅周辺（ブックオフ・ゲオ）、船橋、柏の人気店舗と特徴を比較。宅配・出張買取サービスも紹介。',
  keywords: ['ゲーム買取 千葉', 'ゲーム買取 千葉 おすすめ', 'ゲーム買取 船橋', 'ゲーム買取 柏', 'ゲーム買取 千葉駅'],
  openGraph: {
    title: '千葉のゲーム買取おすすめ店舗｜千葉駅・船橋・柏エリア別ガイド【2026年6月】',
    description: '千葉のゲーム買取店をエリア別に紹介。千葉駅・船橋・柏の人気店舗を比較。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const areas = [
  {
    name: '千葉駅エリア',
    description: '千葉県の県庁所在地・千葉市の中心エリア。JR千葉駅周辺に大手チェーンが集中し、アクセスの良さが魅力。',
    shops: [
      { name: 'ブックオフ 千葉駅前店', feature: '千葉駅から徒歩3分の好立地。ゲーム・書籍・DVDを一括で売れる。まとめ売りボーナスあり。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオ 千葉中央店', feature: '全国チェーンの安定感。ゲームソフト・本体の買取価格をアプリで事前確認可能。', genre: '全般', priceLevel: '中' },
      { name: '駿河屋 千葉店', feature: 'レトロゲーム・フィギュアの買取に定評あり。ネット通販のデータに基づく高精度査定。', genre: 'レトロ・フィギュア', priceLevel: '中〜高' },
    ],
  },
  {
    name: '船橋エリア',
    description: '千葉県第2の都市・船橋。大型商業施設が多く、買い物ついでにゲームを売りたい人に便利なエリア。',
    shops: [
      { name: 'ブックオフ SUPER BAZAAR ビビット南船橋店', feature: 'ビビットスクエア内の大型店舗。ゲームから家電まで幅広く対応。駐車場完備で車でのアクセスに便利。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオ 船橋店', feature: '安定した査定額。身分証があればその場で現金化。スマホ買取も対応。', genre: '全般・スマホ', priceLevel: '中' },
      { name: 'トレーダー 船橋店', feature: '新作ゲーム・フィギュアの買取に強い。発売直後の高額買取に定評あり。', genre: '新作・フィギュア', priceLevel: '高（新作）' },
      { name: 'まんが倉庫 船橋店', feature: 'ゲーム・トレカ・フィギュアまで幅広く対応。まとめ売りキャンペーンが多い。', genre: '全般・トレカ', priceLevel: '中' },
    ],
  },
  {
    name: '柏エリア',
    description: '千葉県北西部の主要都市。JR常磐線・東武線のターミナル駅で、茨城県南部からのアクセスも良好。',
    shops: [
      { name: 'ブックオフ 柏駅東口店', feature: '駅近でアクセス抜群。ゲーム・CD・DVDまで幅広く対応。即日現金化。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオ 柏店', feature: '安定のゲオ。買取価格検索アプリで事前に相場を確認可能。', genre: '全般', priceLevel: '中' },
      { name: 'ハードオフ 柏店', feature: 'ゲーム機本体・周辺機器の買取に強い。ジャンク品でも値段がつくことがある。', genre: 'ハード・周辺機器', priceLevel: '中' },
    ],
  },
];

const highPriceTips = [
  { tip: '船橋エリアで複数店を回る', detail: '船橋エリアにはブックオフ、ゲオ、トレーダーが揃っています。2〜3店で査定してもらい最高値を見つけましょう。' },
  { tip: '新作は発売直後に売る', detail: '新作ゲームは発売後1〜2週間以内が最も高く売れます。トレーダー船橋店が新作買取に特に強いです。' },
  { tip: 'レトロゲームは駿河屋で', detail: 'ファミコンやスーファミのソフトは駿河屋千葉店に持ち込むか、宅配買取を利用するとブックオフより高値がつきます。' },
  { tip: '付属品・箱を揃える', detail: '箱・説明書・付属品の有無で査定額が2〜5倍変わることも。売る前に必ず付属品を確認しましょう。' },
  { tip: '宅配買取も活用する', detail: '千葉在住なら宅配買取も便利です。ヒカカク！で一括査定を取れば、店舗持ち込みより高い業者が見つかることもあります。' },
];

const faqs = [
  { q: '千葉でゲームを最も高く買い取ってくれる店はどこですか？', a: 'ゲームの種類によって異なります。新作ゲームならトレーダー船橋店、レトロゲームなら駿河屋千葉店が高額査定の傾向があります。複数店で査定してもらい比較するのがおすすめです。' },
  { q: '千葉駅周辺で即日現金化できますか？', a: 'はい、ブックオフ千葉駅前店やゲオ千葉中央店では身分証提示で即日現金化が可能です。査定時間は10点程度なら15〜30分で完了します。' },
  { q: '千葉で出張買取に対応している業者はありますか？', a: '買取ウリエルが千葉市・船橋市など千葉県西部で出張買取に対応しています。出張費・査定費無料で、大量のゲームを売りたい場合に便利です。' },
  { q: '都内の店舗と千葉の店舗、どちらが高く売れますか？', a: '大手チェーンは全国統一価格のため大きな差はありません。ただし秋葉原の専門店はレトロゲームの査定額が高い傾向があります。交通費を考慮すると、宅配買取での比較がおすすめです。' },
  { q: '船橋の大型店で大量に売りたい場合は？', a: 'ブックオフ SUPER BAZAAR ビビット南船橋店が駐車場完備で大量持ち込みに最適です。50点以上の場合は事前に電話連絡しておくとスムーズです。' },
];

export default function ChibaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "千葉のゲーム買取おすすめ店舗｜千葉駅・船橋・柏エリア別ガイド", "datePublished": "2026-05-19", "dateModified": "2026-06-12", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'エリア別', href: '/' }, { name: '千葉' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(251,191,36,0.2)', color: '#FBBF24' }}>エリア別ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            千葉のゲーム買取おすすめ店舗ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            千葉駅・船橋・柏のエリア別にゲーム買取店を徹底紹介。大手チェーンから専門店まで、千葉であなたに合った買取店が見つかります。
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
              千葉県内でも、仕事が忙しい方や大量のゲームを売りたい方にはオンラインサービスがおすすめです。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社に一括査定。自宅から最高値を見つけられる。送料無料の業者多数。</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ウリエル（出張買取）</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>千葉県西部で出張対応。自宅で査定・即金化。出張費無料。</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>駿河屋（宅配買取）</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>レトロゲームの宅配買取に強い。ネット通販の実績が査定に反映。</p>
              </div>
            </div>
          </div>
        </section>

        {/* High Price Tips */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />千葉で高く売るコツ</h2>
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
            千葉で<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>を見つけよう
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
            <Link href="/area/yokohama/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>横浜のゲーム買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>横浜駅・関内・上大岡エリア別ガイド</p>
            </Link>
            <Link href="/area/saitama/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>埼玉のゲーム買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>大宮・川口・所沢エリア別ガイド</p>
            </Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
