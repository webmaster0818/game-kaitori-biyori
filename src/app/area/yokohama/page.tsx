import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: '横浜のゲーム買取おすすめ店舗｜横浜駅・関内・上大岡エリア別ガイド',
  description:
    '横浜でゲームを高く売れる買取店舗をエリア別に徹底紹介。横浜駅周辺（ブックオフ・ゲオ・駿河屋）、関内、上大岡の人気店舗と特徴を比較。オンライン代替サービスも紹介。',
  keywords: ['ゲーム買取 横浜', 'ゲーム買取 横浜 おすすめ', 'ゲーム買取 横浜駅', 'ゲーム買取 関内', 'ゲーム買取 神奈川'],
  openGraph: {
    title: '横浜のゲーム買取おすすめ店舗｜横浜駅・関内・上大岡エリア別ガイド',
    description: '横浜のゲーム買取店をエリア別に紹介。横浜駅・関内・上大岡の人気店舗を比較。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const areas = [
  {
    name: '横浜駅エリア',
    description: '神奈川県最大のターミナル駅。駅周辺に大手チェーン店が集中しており、仕事帰りや買い物ついでにゲームを売りたい人に便利。',
    shops: [
      { name: 'ブックオフ 横浜西口店', feature: '横浜駅西口から徒歩3分の好アクセス。ゲーム・書籍・DVDを一括で売れる。まとめ売りでボーナス査定あり。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオ 横浜駅前店', feature: '全国チェーンの安心感。ゲームソフト・本体の買取価格をアプリで事前確認可能。スマホ買取も対応。', genre: '全般・スマホ', priceLevel: '中' },
      { name: '駿河屋 横浜店', feature: 'レトロゲーム・フィギュアの買取に定評あり。ネット通販の在庫データに基づいた高精度な査定。', genre: 'レトロ・フィギュア', priceLevel: '中〜高' },
      { name: 'トレーダー 横浜ビブレ店', feature: '新作ゲーム・フィギュアの買取に強い。発売直後の買取価格は高め。', genre: '新作・フィギュア', priceLevel: '高（新作）' },
    ],
  },
  {
    name: '関内・伊勢佐木町エリア',
    description: '横浜の下町エリア。個人経営のゲームショップやリサイクルショップが点在し、掘り出し物の査定に期待できる。',
    shops: [
      { name: 'ブックオフ SUPER BAZAAR 伊勢佐木町店', feature: '大型店舗でゲーム・CD・DVD・家電まで幅広く対応。まとめ売りに最適。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオ 関内店', feature: '安定した買取価格。身分証があればその場で現金化。ゲーム周辺機器も対応。', genre: '全般', priceLevel: '中' },
      { name: 'ハードオフ 関内店', feature: 'レトロゲーム機本体・周辺機器の買取に強い。ジャンク品も買取対象になることがある。', genre: 'ハード・周辺機器', priceLevel: '中' },
    ],
  },
  {
    name: '上大岡・港南エリア',
    description: '横浜南部の主要エリア。京急線・地下鉄のアクセスが良く、郊外型の大型店舗が揃う。',
    shops: [
      { name: 'ブックオフ 上大岡店', feature: '駅近で便利。ゲームから書籍まで幅広く対応。安定した査定額で安心。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオ 港南台店', feature: '駐車場完備で車でのアクセスに便利。大量のゲームを持ち込む際におすすめ。', genre: '全般', priceLevel: '中' },
    ],
  },
];

const highPriceTips = [
  { tip: '横浜駅周辺で複数店を回る', detail: '横浜駅エリアには徒歩圏内にブックオフ、ゲオ、駿河屋があるため、2〜3店で査定してもらって最高値を見つけましょう。' },
  { tip: '新作は発売直後に売る', detail: '新作ゲームは発売後1〜2週間以内が最も高く売れます。トレーダーやゲオが新作買取に強いです。' },
  { tip: 'レトロゲームは駿河屋に', detail: 'ファミコンやスーファミのソフトは一般チェーンより駿河屋のほうが圧倒的に高値がつきます。横浜店に直接持ち込むのがおすすめ。' },
  { tip: '付属品・箱を揃える', detail: '箱・説明書・付属品の有無で査定額が2〜5倍変わることも。売る前に必ず付属品を確認しましょう。' },
  { tip: '宅配買取も併用する', detail: '横浜在住なら店舗持ち込みと宅配買取を比較できます。ヒカカク！で一括査定を取って、最高値のサービスを選びましょう。' },
];

const faqs = [
  { q: '横浜でゲームを最も高く買い取ってくれる店はどこですか？', a: 'ゲームの種類によって異なります。新作ゲームならトレーダー、レトロゲームなら駿河屋が高額査定の傾向があります。複数店で査定してもらい比較するのがおすすめです。' },
  { q: '横浜駅周辺で即日現金化できる店はありますか？', a: 'はい、ブックオフ横浜西口店やゲオ横浜駅前店では身分証提示で即日現金化が可能です。査定時間は点数によりますが、10点程度なら15〜30分で完了します。' },
  { q: '横浜で出張買取に対応している業者はありますか？', a: '買取ウリエルが横浜市全域で出張買取に対応しています。出張費・査定費無料で自宅まで来てくれるため、大量のゲームを売りたい場合に便利です。' },
  { q: '神奈川在住ですが宅配買取のほうがお得ですか？', a: '宅配買取は店舗運営コストが低い分、買取価格が高めになる傾向があります。ヒカカク！なら最大20社に一括査定でき、送料無料の業者も多いため横浜在住でも十分お得です。' },
  { q: '大量のゲームを一度に売りたい場合のおすすめは？', a: '50点以上の大量売却なら、まとめ売りボーナスがあるブックオフか、自宅まで来てくれる出張買取のウリエルがおすすめです。宅配買取なら梱包キットを無料で送ってもらえるサービスもあります。' },
];

export default function YokohamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "横浜のゲーム買取おすすめ店舗｜横浜駅・関内・上大岡エリア別ガイド", "datePublished": "2026-05-19", "dateModified": "2026-05-19", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'エリア別', href: '/' }, { name: '横浜' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(251,191,36,0.2)', color: '#FBBF24' }}>エリア別ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            横浜のゲーム買取おすすめ店舗ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            横浜駅・関内・上大岡のエリア別にゲーム買取店を徹底紹介。大手チェーンから専門店まで、横浜であなたに合った買取店が見つかります。
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
              横浜在住でも、仕事が忙しい方や大量のゲームを売りたい方にはオンラインサービスがおすすめです。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社に一括査定。自宅から最高値を見つけられる。送料無料の業者多数。</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ウリエル（出張買取）</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>横浜市全域で出張対応。自宅で査定・即金化。出張費無料。</p>
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />横浜で高く売るコツ</h2>
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
            横浜で<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>を見つけよう
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
            <Link href="/area/saitama/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>埼玉のゲーム買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>大宮・川口エリア別ガイド</p>
            </Link>
            <Link href="/area/chiba/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>千葉のゲーム買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>千葉駅・船橋エリア別ガイド</p>
            </Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
