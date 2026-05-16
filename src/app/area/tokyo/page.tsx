import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '東京のゲーム買取おすすめ店舗｜秋葉原・新宿・池袋エリア別ガイド',
  description:
    '東京でゲームを高く売れる買取店舗をエリア別に徹底紹介。秋葉原（駿河屋・BEEP・スーパーポテト）、新宿（ブックオフ・ゲオ）、池袋、中野の人気店舗と特徴を比較。オンライン代替サービスも紹介。',
  keywords: ['ゲーム買取 東京', 'ゲーム買取 おすすめ 東京', 'ゲーム買取 秋葉原', 'ゲーム買取 新宿', 'ゲーム買取 池袋'],
  openGraph: {
    title: '東京のゲーム買取おすすめ店舗｜秋葉原・新宿・池袋エリア別ガイド',
    description: '東京のゲーム買取店をエリア別に紹介。秋葉原・新宿・池袋・中野の人気店舗を比較。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const areas = [
  {
    name: '秋葉原エリア',
    description: '日本最大の電気街・オタク文化の聖地。ゲーム買取専門店が密集しており、レトロゲームやレアアイテムの高価買取に強い店舗が多数。',
    shops: [
      { name: '駿河屋 秋葉原本館', feature: 'レトロゲーム・レアソフトに特化。在庫豊富で買取価格も高め。ネット通販の買取価格を店頭でも適用。', genre: 'レトロ・レア全般', priceLevel: '高' },
      { name: 'BEEP 秋葉原', feature: 'PC-98やX68000などレトロPC系ゲームに超強い。マニア向けの希少品は驚きの高額査定も。', genre: 'レトロPC・アーケード基板', priceLevel: '非常に高（レア品）' },
      { name: 'スーパーポテト 秋葉原店', feature: 'レトロゲーム専門の有名店。ファミコンからPS2世代まで幅広く取り扱い。観光客にも人気。', genre: 'レトロゲーム全般', priceLevel: '中〜高' },
      { name: 'トレーダー 秋葉原本店', feature: '新作ゲームの買取に強い。発売直後の買取価格は業界トップクラス。フィギュアも取扱い。', genre: '新作・最新ゲーム', priceLevel: '高（新作）' },
      { name: 'ブックオフ 秋葉原駅前店', feature: '幅広いジャンルを取り扱い。安定した査定額。身分証があればその場で現金化。', genre: '全般', priceLevel: '中' },
    ],
  },
  {
    name: '新宿エリア',
    description: '巨大ターミナル駅周辺に大型チェーン店が揃う。アクセスの良さが魅力で、仕事帰りにサッと売りたい人におすすめ。',
    shops: [
      { name: 'ブックオフ SUPER BAZAAR 新宿西口店', feature: '新宿最大級の品揃え。ゲーム・書籍・DVD・家電まで一括で売れる。まとめ売りボーナスあり。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオ 新宿歌舞伎町店', feature: '全国チェーンの安定感。ゲームソフトの買取価格表が店頭で確認可能。スマホ買取も対応。', genre: '全般・スマホ', priceLevel: '中' },
      { name: 'トレーダー 新宿店', feature: '新作ゲーム・フィギュアの買取に特化。秋葉原本店に次ぐ規模。', genre: '新作・フィギュア', priceLevel: '高（新作）' },
      { name: 'まんだらけ 新宿店', feature: 'レトロゲーム・限定版・プレミアソフトの買取に強い。コレクター向けの査定に定評あり。', genre: 'レトロ・プレミア', priceLevel: '高（レア品）' },
    ],
  },
  {
    name: '池袋エリア',
    description: 'サンシャイン通りを中心にゲーム・アニメ系の店舗が多数。新宿・秋葉原に次ぐ買取激戦区。',
    shops: [
      { name: 'ブックオフ 池袋サンシャイン60通り店', feature: '駅近でアクセス抜群。ゲーム・CD・DVD・本まで幅広く対応。即日現金化。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオ 池袋サンシャイン60通り店', feature: '安定のゲオ。買取価格検索アプリで事前に相場を確認可能。', genre: '全般', priceLevel: '中' },
      { name: 'まんだらけ 池袋店', feature: 'アニメ・ゲーム関連グッズ全般。限定版やコレクターズアイテムの査定に強い。', genre: 'レトロ・限定版', priceLevel: '高（レア品）' },
      { name: '駿河屋 池袋店', feature: 'レトロゲームからフィギュアまで幅広い。ネット買取と同等の価格で査定。', genre: 'レトロ・全般', priceLevel: '中〜高' },
    ],
  },
  {
    name: '中野エリア',
    description: '中野ブロードウェイを中心としたサブカルチャーの聖地。レトロゲーム・レアゲームの専門店が集結。',
    shops: [
      { name: 'まんだらけ 中野店（中野ブロードウェイ内）', feature: 'まんだらけの本店。フロアごとにジャンルが分かれ、レトロゲーム・レアソフトの買取で日本屈指。', genre: 'レトロ・レア全般', priceLevel: '非常に高（レア品）' },
      { name: 'ゲーム専門店 中野ブロードウェイ各店', feature: 'ブロードウェイ内に小規模なゲーム専門店が複数。店舗ごとに得意ジャンルが異なるため、回って比較するのがおすすめ。', genre: '各店舗による', priceLevel: '店舗による' },
      { name: 'ブックオフ 中野早稲田通り店', feature: '中野ブロードウェイから徒歩圏内。幅広いジャンルに安定対応。', genre: '全般', priceLevel: '中' },
    ],
  },
];

const highPriceTips = [
  { tip: '複数店で査定してもらう', detail: '秋葉原・中野では徒歩圏内に複数の買取店があるため、2〜3店で査定してもらって比較しましょう。特にレアゲームは店舗ごとに査定額が大きく異なります。' },
  { tip: '新作は発売直後に売る', detail: '新作ゲームは発売後1〜2週間以内が最も高く売れます。クリア後すぐに売却するのがベスト。トレーダーやゲオが新作の買取に強いです。' },
  { tip: 'レトロゲームは専門店に持ち込む', detail: 'ファミコンやスーファミのソフトをブックオフに持ち込むと数十円〜数百円ですが、駿河屋やBEEPなら数千円〜数万円になることも。専門店の目利きは段違いです。' },
  { tip: '付属品・箱を揃える', detail: '箱・説明書・付属品が揃っているだけで査定額が2〜5倍になることがあります。特にレトロゲームは箱の有無で大きく変わります。' },
  { tip: '宅配買取との併用', detail: '持ち込みで即金が必要なもの以外は、ヒカカク！やウリエルの宅配買取で相見積もりを取ると、さらに高く売れる可能性があります。' },
];

const faqs = [
  { q: '東京でゲームを最も高く買い取ってくれる店はどこですか？', a: 'ゲームの種類によって異なります。新作ゲームならトレーダー、レトロゲームなら駿河屋やBEEP、プレミアソフトならまんだらけがそれぞれ高額査定で評判です。複数店で査定してもらい比較するのがおすすめです。' },
  { q: '秋葉原で買取してもらうのに予約は必要ですか？', a: '基本的に予約不要で、店頭に直接持ち込めば査定してもらえます。ただし、大量（50点以上）の場合は事前に電話連絡しておくとスムーズです。駿河屋は混雑時に査定に1〜2時間かかることがあります。' },
  { q: '都内で出張買取に対応している店舗はありますか？', a: 'ウリエルが東京都内全域で出張買取に対応しています。出張費・査定費無料で、自宅にいながらその場で現金化できます。大量のゲームを売りたい場合に特に便利です。' },
  { q: '東京在住ですが、宅配買取のほうが得な場合はありますか？', a: 'はい、あります。宅配買取は店舗運営コストが低い分、買取価格が高めになる傾向があります。特にまとめ売りや、店舗に行く時間がない場合はヒカカク！での一括査定がおすすめです。' },
  { q: '週末と平日、どちらが査定に有利ですか？', a: '買取価格自体は曜日で変わりませんが、平日のほうが店内が空いており査定が早く終わります。また、スタッフに余裕がある分、丁寧に査定してもらえる傾向があります。' },
  { q: '中野ブロードウェイへのアクセス方法は？', a: 'JR中央線・総武線、東京メトロ東西線「中野駅」北口から徒歩5分です。駅前のアーケード商店街を抜けるとブロードウェイの入口に到着します。2〜4階にゲーム・フィギュア系の買取店が集中しています。' },
];

export default function TokyoPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'エリア別', href: '/' }, { name: '東京' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(251,191,36,0.2)', color: '#FBBF24' }}>エリア別ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            東京のゲーム買取おすすめ店舗ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            秋葉原・新宿・池袋・中野のエリア別にゲーム買取店を徹底紹介。レトロゲーム専門店から大手チェーンまで、あなたに合った店舗が見つかります。
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
              東京都内在住でも、仕事が忙しい方や大量のゲームを売りたい方にはオンラインサービスがおすすめです。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社に一括査定。自宅から最高値を見つけられる。送料無料の業者多数。</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ウリエル（出張買取）</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>東京都全域で出張対応。自宅で査定・即金化。出張費無料。</p>
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />東京で高く売るコツ</h2>
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
            東京で<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>を見つけよう
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
            <Link href="/area/osaka/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>大阪のゲーム買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>日本橋・梅田・難波エリア別ガイド</p>
            </Link>
            <Link href="/area/nagoya/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>名古屋のゲーム買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>大須・栄・名駅エリア別ガイド</p>
            </Link>
            <Link href="/compare/shop-vs-online/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>店舗 vs 宅配買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>どっちがお得か徹底比較</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
