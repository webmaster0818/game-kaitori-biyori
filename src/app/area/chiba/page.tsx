import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: '千葉のゲーム買取おすすめ店舗｜千葉駅・船橋・柏エリア別ガイド',
  description:
    '千葉でゲームを高く売れる買取店舗を、エリア別に紹介しています。千葉駅周辺（ブックオフ・ゲオ）、船橋、柏の人気店舗と特徴を比較し、宅配・出張買取サービスもあわせて紹介します。',
  keywords: ['ゲーム買取 千葉', 'ゲーム買取 千葉 おすすめ', 'ゲーム買取 船橋', 'ゲーム買取 柏', 'ゲーム買取 千葉駅'],
  openGraph: {
    images: ['/og.png'],
    title: '千葉のゲーム買取おすすめ店舗｜千葉駅・船橋・柏エリア別ガイド',
    description: '千葉のゲーム買取店をエリア別に紹介し、千葉駅・船橋・柏の人気店舗を比較しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const areas = [
  {
    name: '千葉駅エリア',
    description: '千葉県の県庁所在地・千葉市の中心エリアです。JR千葉駅周辺に大手チェーンが集中しており、アクセスの良さが特長です。',
    shops: [
      { name: 'ブックオフ 千葉駅前店', feature: '千葉駅から徒歩3分の立地です。ゲーム・書籍・DVDを一括で売ることができ、まとめ売りボーナスもあります。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオ 千葉中央店', feature: '全国チェーンならではの安定感があります。ゲームソフト・本体の買取価格を、アプリで事前に確認できます。', genre: '全般', priceLevel: '中' },
      { name: '駿河屋 千葉店', feature: 'レトロゲーム・フィギュアの買取に定評があります。ネット通販のデータにもとづく精度の高い査定が特長です。', genre: 'レトロ・フィギュア', priceLevel: '中〜高' },
    ],
  },
  {
    name: '船橋エリア',
    description: '千葉県第2の都市です。大型商業施設が多く、買い物のついでにゲームを売りたい方に適したエリアです。',
    shops: [
      { name: 'ブックオフ SUPER BAZAAR ビビット南船橋店', feature: 'ビビットスクエア内の大型店舗です。ゲームから家電まで幅広く対応しており、駐車場も完備しているため車での来店にも適しています。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオ 船橋店', feature: '査定額が安定しています。本人確認書類があれば、その場で現金化できます。スマートフォンの買取にも対応しています。', genre: '全般・スマホ', priceLevel: '中' },
      { name: 'トレーダー 船橋店', feature: '新作ゲーム・フィギュアの買取に強みがあり、発売直後の高額買取に定評があります。', genre: '新作・フィギュア', priceLevel: '高（新作）' },
      { name: 'まんが倉庫 船橋店', feature: 'ゲーム・トレカ・フィギュアまで幅広く対応しています。まとめ売りのキャンペーンを多く実施しています。', genre: '全般・トレカ', priceLevel: '中' },
    ],
  },
  {
    name: '柏エリア',
    description: '千葉県北西部の主要都市です。JR常磐線・東武線のターミナル駅があり、茨城県南部からのアクセスも良好です。',
    shops: [
      { name: 'ブックオフ 柏駅東口店', feature: '駅から近く、アクセスに優れています。ゲーム・CD・DVDまで幅広く対応しており、即日現金化が可能です。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオ 柏店', feature: '全国チェーンのゲオの店舗です。買取価格検索アプリで、事前に相場を確認できます。', genre: '全般', priceLevel: '中' },
      { name: 'ハードオフ 柏店', feature: 'ゲーム機本体・周辺機器の買取に強みがあります。ジャンク品でも値段がつく場合があります。', genre: 'ハード・周辺機器', priceLevel: '中' },
    ],
  },
];

const highPriceTips = [
  { tip: '船橋エリアで複数店を回る', detail: '船橋エリアにはブックオフ、ゲオ、トレーダーが揃っています。2〜3店で査定を受け、最も高い査定額の店舗を選ぶことをおすすめします。' },
  { tip: '新作は発売直後に売る', detail: '新作ゲームは発売後1〜2週間以内が最も高く売れます。トレーダー船橋店は、新作の買取に特に強みがあります。' },
  { tip: 'レトロゲームは駿河屋に持ち込む', detail: 'ファミコンやスーパーファミコンのソフトは、駿河屋千葉店への持ち込みや宅配買取を利用すると、ブックオフより高値がつきます。' },
  { tip: '付属品・箱を揃える', detail: '箱・説明書・付属品の有無によって、査定額が2〜5倍変わることがあります。売る前に、付属品が揃っているかをご確認ください。' },
  { tip: '宅配買取も活用する', detail: '千葉県にお住まいの方は、宅配買取も選択肢になります。ヒカカク！で一括査定を依頼すると、店舗に持ち込むより高い業者が見つかることもあります。' },
];

const faqs = [
  { q: '千葉でゲームを最も高く買い取ってくれる店はどこですか？', a: 'ゲームの種類によって異なります。新作ゲームならトレーダー船橋店、レトロゲームなら駿河屋千葉店が高額査定の傾向があります。複数店で査定を受け、比較することをおすすめします。' },
  { q: '千葉駅周辺で即日現金化できますか？', a: 'はい、ブックオフ千葉駅前店やゲオ千葉中央店では本人確認書類の提示で即日現金化が可能です。査定時間は10点程度なら15〜30分で完了します。' },
  { q: '千葉で出張買取に対応している業者はありますか？', a: '買取ウリエルのゲームの出張買取は、千葉県が対象地域に含まれています（対象は東京・神奈川・千葉・埼玉）。出張費・査定費無料で、大量のゲームを売りたい場合に便利です。' },
  { q: '都内の店舗と千葉の店舗、どちらが高く売れますか？', a: '大手チェーンは全国統一価格のため大きな差はありません。ただし秋葉原の専門店はレトロゲームの査定額が高い傾向があります。交通費を考慮すると、宅配買取での比較がおすすめです。' },
  { q: '船橋の大型店で大量に売りたい場合、どの店舗がおすすめですか？', a: 'ブックオフ SUPER BAZAAR ビビット南船橋店は駐車場を完備しており、大量の持ち込みに適しています。50点以上の場合は、事前に電話で連絡しておくと手続きが円滑です。' },
];

export default function ChibaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "千葉のゲーム買取おすすめ店舗｜千葉駅・船橋・柏エリア別ガイド", "datePublished": "2026-05-19", "dateModified": "2026-06-12", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較している編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'エリア別', href: '/' }, { name: '千葉' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(251,191,36,0.2)', color: '#FBBF24' }}>エリア別ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            千葉のゲーム買取おすすめ店舗ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            千葉駅・船橋・柏のエリア別に、ゲーム買取店を紹介しています。大手チェーンから専門店まで、千葉県内で目的に合った買取店をお選びいただけます。
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
              千葉県内でも、仕事が忙しい方や大量のゲームを売りたい方にはオンラインサービスがおすすめです。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社に一括で査定を依頼でき、自宅にいながら最も高い買取業者を探せます。送料無料の業者も多数あります。</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ウリエル（出張買取）</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ゲームの出張買取の対象地域に千葉県が含まれています。自宅で査定を受け、その場で現金化できます。出張費は無料です。</p>
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />千葉で高く売るためのポイント</h2>
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
            千葉で<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>を見つける方法
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
