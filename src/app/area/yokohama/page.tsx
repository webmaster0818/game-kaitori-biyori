import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: '横浜のゲーム買取おすすめ店舗｜横浜駅・関内・上大岡エリア別ガイド',
  description:
    '横浜でゲームを高く売れる買取店舗を、エリア別に紹介しています。横浜駅周辺（ブックオフ・ゲオ・駿河屋）、関内、上大岡の人気店舗と特徴を比較し、オンラインで利用できる買取サービスもあわせて紹介します。',
  keywords: ['ゲーム買取 横浜', 'ゲーム買取 横浜 おすすめ', 'ゲーム買取 横浜駅', 'ゲーム買取 関内', 'ゲーム買取 神奈川'],
  openGraph: {
    images: ['/og.png'],
    title: '横浜のゲーム買取おすすめ店舗｜横浜駅・関内・上大岡エリア別ガイド',
    description: '横浜のゲーム買取店をエリア別に紹介し、横浜駅・関内・上大岡の人気店舗を比較しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const areas = [
  {
    name: '横浜駅エリア',
    description: '神奈川県最大のターミナル駅です。駅周辺に大手チェーン店が集中しており、仕事帰りや買い物のついでにゲームを売りたい方に適しています。',
    shops: [
      { name: 'ブックオフ 横浜西口店', feature: '横浜駅西口から徒歩3分の立地です。ゲーム・書籍・DVDを一括で売ることができ、まとめ売りによるボーナス査定もあります。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオ 横浜駅前店', feature: '全国チェーンならではの安心感があります。ゲームソフト・本体の買取価格をアプリで事前に確認でき、スマートフォンの買取にも対応しています。', genre: '全般・スマホ', priceLevel: '中' },
      { name: '駿河屋 横浜店', feature: 'レトロゲーム・フィギュアの買取に定評があります。ネット通販の在庫データにもとづいた、精度の高い査定が特長です。', genre: 'レトロ・フィギュア', priceLevel: '中〜高' },
      { name: 'トレーダー 横浜ビブレ店', feature: '新作ゲーム・フィギュアの買取に強みがあり、発売直後の買取価格は高めです。', genre: '新作・フィギュア', priceLevel: '高（新作）' },
    ],
  },
  {
    name: '関内・伊勢佐木町エリア',
    description: '横浜の下町エリアです。個人経営のゲームショップやリサイクルショップが点在しており、希少品の査定も期待できます。',
    shops: [
      { name: 'ブックオフ SUPER BAZAAR 伊勢佐木町店', feature: '大型店舗で、ゲーム・CD・DVD・家電まで幅広く対応しています。まとめ売りに適しています。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオ 関内店', feature: '買取価格が安定しています。本人確認書類があればその場で現金化でき、ゲーム周辺機器の買取にも対応しています。', genre: '全般', priceLevel: '中' },
      { name: 'ハードオフ 関内店', feature: 'レトロゲーム機本体・周辺機器の買取に強みがあります。ジャンク品も買取対象になる場合があります。', genre: 'ハード・周辺機器', priceLevel: '中' },
    ],
  },
  {
    name: '上大岡・港南エリア',
    description: '横浜南部の主要エリアです。京急線・地下鉄でのアクセスが良く、郊外型の大型店舗が揃っています。',
    shops: [
      { name: 'ブックオフ 上大岡店', feature: '駅から近く、利便性に優れています。ゲームから書籍まで幅広く対応しており、査定額も安定しています。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオ 港南台店', feature: '駐車場を完備しており、車での来店に適しています。大量のゲームを持ち込む際におすすめです。', genre: '全般', priceLevel: '中' },
    ],
  },
];

const highPriceTips = [
  { tip: '横浜駅周辺で複数店を回る', detail: '横浜駅エリアには徒歩圏内にブックオフ、ゲオ、駿河屋があるため、2〜3店で査定を受け、最も高い査定額の店舗を選ぶことをおすすめします。' },
  { tip: '新作は発売直後に売る', detail: '新作ゲームは発売後1〜2週間以内が最も高く売れます。トレーダーやゲオは、新作の買取に強みがあります。' },
  { tip: 'レトロゲームは駿河屋に持ち込む', detail: 'ファミコンやスーパーファミコンのソフトは、一般チェーンより駿河屋のほうが大幅に高値がつきます。横浜店へ直接持ち込むことをおすすめします。' },
  { tip: '付属品・箱を揃える', detail: '箱・説明書・付属品の有無によって、査定額が2〜5倍変わることがあります。売る前に、付属品が揃っているかをご確認ください。' },
  { tip: '宅配買取も併用する', detail: '横浜にお住まいの方は、店舗への持ち込みと宅配買取を比較できます。ヒカカク！で一括査定を依頼し、最も高い査定額のサービスを選ぶことをおすすめします。' },
];

const faqs = [
  { q: '横浜でゲームを最も高く買い取ってくれる店はどこですか？', a: 'ゲームの種類によって異なります。新作ゲームならトレーダー、レトロゲームなら駿河屋が高額査定の傾向があります。複数店で査定を受け、比較することをおすすめします。' },
  { q: '横浜駅周辺で即日現金化できる店はありますか？', a: 'はい、ブックオフ横浜西口店やゲオ横浜駅前店では本人確認書類の提示で即日現金化が可能です。査定時間は点数によりますが、10点程度なら15〜30分で完了します。' },
  { q: '横浜で出張買取に対応している業者はありますか？', a: '買取ウリエルが横浜市全域で出張買取に対応しています。出張費・査定費は無料で、自宅まで訪問してもらえるため、大量のゲームを売りたい場合に便利です。' },
  { q: '神奈川在住ですが宅配買取のほうがお得ですか？', a: '宅配買取は店舗運営コストが低い分、買取価格が高めになる傾向があります。ヒカカク！なら最大20社に一括査定でき、送料無料の業者も多いため横浜にお住まいの方にも十分なメリットがあります。' },
  { q: '大量のゲームを一度に売りたい場合、どのサービスがおすすめですか？', a: '50点以上の大量売却であれば、まとめ売りボーナスがあるブックオフか、自宅まで訪問してもらえる出張買取のウリエルをおすすめします。宅配買取では、梱包キットを無料で送ってもらえるサービスもあります。' },
];

export default function YokohamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "横浜のゲーム買取おすすめ店舗｜横浜駅・関内・上大岡エリア別ガイド", "datePublished": "2026-05-19", "dateModified": "2026-05-19", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較している編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'エリア別', href: '/' }, { name: '横浜' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(251,191,36,0.2)', color: '#FBBF24' }}>エリア別ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            横浜のゲーム買取おすすめ店舗ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            横浜駅・関内・上大岡のエリア別に、ゲーム買取店を紹介しています。大手チェーンから専門店まで、横浜で目的に合った買取店をお選びいただけます。
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />店舗に行けない場合のオンライン買取</h2>
          <div className="glass-card p-6">
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
              横浜在住でも、仕事が忙しい方や大量のゲームを売りたい方にはオンラインサービスがおすすめです。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社に一括で査定を依頼でき、自宅にいながら最も高い買取業者を探せます。送料無料の業者も多数あります。</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ウリエル（出張買取）</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>横浜市全域で出張買取に対応しています。自宅で査定を受け、その場で現金化できます。出張費は無料です。</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>駿河屋（宅配買取）</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>レトロゲームの宅配買取に強みがあります。ネット通販での販売実績が査定に反映されます。</p>
              </div>
            </div>
          </div>
        </section>

        {/* High Price Tips */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />横浜で高く売るためのポイント</h2>
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
            横浜で<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>を見つける方法
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            店舗への持ち込み・オンライン買取のいずれの場合も、まず複数社の査定額を比較することをおすすめします。
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
