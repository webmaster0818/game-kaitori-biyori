import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: '埼玉のゲーム買取おすすめ店舗｜大宮・川口・所沢エリア別ガイド',
  description:
    '埼玉でゲームを高く売れる買取店舗を、エリア別に紹介しています。大宮（ブックオフ・ゲオ）、川口、所沢の人気店舗と特徴を比較し、宅配・出張買取サービスもあわせて紹介します。',
  keywords: ['ゲーム買取 埼玉', 'ゲーム買取 埼玉 おすすめ', 'ゲーム買取 大宮', 'ゲーム買取 川口', 'ゲーム買取 所沢'],
  openGraph: {
    images: ['/og.png'],
    title: '埼玉のゲーム買取おすすめ店舗｜大宮・川口・所沢エリア別ガイド',
    description: '埼玉のゲーム買取店をエリア別に紹介し、大宮・川口・所沢の人気店舗を比較しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const areas = [
  {
    name: '大宮エリア',
    description: '埼玉県最大のターミナル駅である大宮は、駅周辺に大手チェーンが集中しており、ゲーム買取店も充実しています。県内で最も選択肢が多いエリアです。',
    shops: [
      { name: 'ブックオフ SUPER BAZAAR 大宮駅西口店', feature: '大宮エリア最大級のブックオフです。ゲーム・CD・DVD・家電まで一括で売ることができ、まとめ売りボーナスもあります。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオ 大宮東口店', feature: '全国チェーンならではの安定感があります。ゲームソフト・本体の買取価格を、アプリで事前に確認できます。', genre: '全般', priceLevel: '中' },
      { name: '駿河屋 大宮店', feature: 'レトロゲーム・フィギュアの買取に強みがあります。ネット通販のデータにもとづく精度の高い査定が特長です。', genre: 'レトロ・フィギュア', priceLevel: '中〜高' },
      { name: 'トレーダー 大宮店', feature: '新作ゲーム・フィギュアの買取に特化しています。発売直後は高額査定が期待できます。', genre: '新作・フィギュア', priceLevel: '高（新作）' },
    ],
  },
  {
    name: '川口・蕨エリア',
    description: '東京に隣接するベッドタウンです。都内に出向くより地元の大型店で売るほうが、交通費を抑えられます。',
    shops: [
      { name: 'ブックオフ 川口駅東口店', feature: '駅から近く、アクセスが良好です。ゲームから書籍まで幅広く対応しており、即日現金化が可能です。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオ 川口店', feature: '査定額が安定しています。ゲーム周辺機器やスマートフォンの買取にも対応しています。', genre: '全般・スマホ', priceLevel: '中' },
      { name: 'ハードオフ 川口店', feature: 'ゲーム機本体・周辺機器の買取に強みがあります。ジャンク品でも値段がつく場合があります。', genre: 'ハード・周辺機器', priceLevel: '中' },
    ],
  },
  {
    name: '所沢・川越エリア',
    description: '西武線沿線の主要エリアです。郊外型の大型店舗が多く、駐車場を完備しているため車での来店に適しています。',
    shops: [
      { name: 'ブックオフ 所沢店', feature: '駐車場を完備した大型店舗です。大量のゲームを車で持ち込む際に適しています。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオ 所沢けやき台店', feature: '広い駐車場があります。ゲームソフトの買取価格表を店頭で確認できます。', genre: '全般', priceLevel: '中' },
      { name: 'まんが倉庫 川越店', feature: 'ゲーム・フィギュア・トレカまで幅広く対応しています。まとめ売りで査定額が上がるキャンペーンを多く実施しています。', genre: '全般・トレカ', priceLevel: '中' },
    ],
  },
];

const highPriceTips = [
  { tip: '大宮駅周辺で複数店を回る', detail: '大宮駅エリアにはブックオフ、ゲオ、駿河屋、トレーダーが揃っています。2〜3店で査定を受け、最も高い査定額の店舗を選ぶことをおすすめします。' },
  { tip: '新作は発売直後に売る', detail: '新作ゲームは発売後1〜2週間以内が最も高く売れます。トレーダー大宮店やゲオは、新作の買取に強みがあります。' },
  { tip: 'レトロゲームは専門店に持ち込む', detail: 'ファミコンやスーパーファミコンのソフトは、ブックオフより駿河屋のほうが大幅に高値がつきます。大宮店への持ち込みをおすすめします。' },
  { tip: '付属品・箱を揃える', detail: '箱・説明書・付属品の有無によって、査定額が大きく変わります。売る前に、付属品が揃っているかをご確認ください。' },
  { tip: '宅配買取との比較', detail: '埼玉県にお住まいの方は、宅配買取も選択肢になります。ヒカカク！で一括査定を依頼すると、店舗に持ち込むより高い業者が見つかることもあります。' },
];

const faqs = [
  { q: '埼玉でゲームを最も高く買い取ってくれる店はどこですか？', a: 'ゲームの種類によって異なります。新作ゲームならトレーダー大宮店、レトロゲームなら駿河屋大宮店が高額査定の傾向があります。複数店で査定を受け、比較することをおすすめします。' },
  { q: '大宮駅周辺で即日現金化できますか？', a: 'はい、ブックオフ大宮駅西口店やゲオ大宮東口店では本人確認書類の提示で即日現金化が可能です。査定時間は10点程度なら15〜30分で完了します。' },
  { q: '埼玉で出張買取に対応している業者はありますか？', a: '買取ウリエルがさいたま市・川口市など埼玉県南部で出張買取に対応しています。出張費・査定費無料で、大量のゲームを売りたい場合に便利です。' },
  { q: '都内の店舗と埼玉の店舗、どちらが高く売れますか？', a: '一般的に大手チェーンは全国統一価格のため大きな差はありません。ただし秋葉原の専門店はレトロゲームの査定額が高い傾向があります。交通費を考慮すると、宅配買取での比較がおすすめです。' },
  { q: '車で大量に持ち込みたい場合、どの店舗がおすすめですか？', a: '駐車場を完備したブックオフ所沢店やゲオ所沢けやき台店をおすすめします。50点以上の場合は、事前に電話で連絡しておくと査定が円滑に進みます。' },
];

export default function SaitamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "埼玉のゲーム買取おすすめ店舗｜大宮・川口・所沢エリア別ガイド", "datePublished": "2026-05-19", "dateModified": "2026-05-19", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較している編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'エリア別', href: '/' }, { name: '埼玉' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(251,191,36,0.2)', color: '#FBBF24' }}>エリア別ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            埼玉のゲーム買取おすすめ店舗ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            大宮・川口・所沢のエリア別に、ゲーム買取店を紹介しています。大手チェーンから専門店まで、埼玉県内で目的に合った買取店をお選びいただけます。
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
              埼玉県内でも、仕事が忙しい方や大量のゲームを売りたい方にはオンラインサービスがおすすめです。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社に一括で査定を依頼でき、自宅にいながら最も高い買取業者を探せます。送料無料の業者も多数あります。</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ウリエル（出張買取）</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>埼玉県南部で出張買取に対応しています。自宅で査定を受け、その場で現金化できます。出張費は無料です。</p>
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />埼玉で高く売るためのポイント</h2>
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
            埼玉で<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>を見つける方法
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
            <Link href="/area/yokohama/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>横浜のゲーム買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>横浜駅・関内・上大岡エリア別ガイド</p>
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
