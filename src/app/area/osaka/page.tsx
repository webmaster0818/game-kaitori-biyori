import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: '大阪のゲーム買取おすすめ店舗｜日本橋・梅田・難波エリア別ガイド【2026年6月】',
  description:
    '大阪でゲームを高く売れる買取店舗をエリア別に徹底紹介。日本橋でんでんタウン、梅田、難波の人気店舗と特徴を比較。大阪ローカルチェーンやオンライン代替サービスも紹介。',
  keywords: ['ゲーム買取 大阪', 'ゲーム買取 おすすめ 大阪', 'ゲーム買取 日本橋', 'ゲーム買取 梅田', 'ゲーム買取 難波'],
  openGraph: {
    title: '大阪のゲーム買取おすすめ店舗｜日本橋・梅田・難波エリア別ガイド【2026年6月】',
    description: '大阪のゲーム買取店をエリア別に紹介。日本橋・梅田・難波の人気店舗を比較。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const areas = [
  {
    name: '日本橋（でんでんタウン）エリア',
    description: '大阪の「秋葉原」とも呼ばれる電気街。オタロードを中心にゲーム・アニメ系の専門店が密集。レトロゲームやレアアイテムの買取に強い店舗が多いのが特徴です。',
    shops: [
      { name: '駿河屋 日本橋オタロード店', feature: 'レトロゲーム・レアソフトの買取に強い。ネット通販と連動した安定の高額査定。品揃えも大阪屈指。', genre: 'レトロ・レア全般', priceLevel: '高' },
      { name: 'スーパーポテト 大阪日本橋店', feature: 'レトロゲーム専門の有名店。ファミコンからPS2世代まで幅広く取り扱い。プレミアソフトの目利きに定評。', genre: 'レトロゲーム全般', priceLevel: '中〜高' },
      { name: 'まんだらけ グランドカオス', feature: '日本橋最大級のサブカルチャー店。レトロゲーム・限定版・プレミアソフトの買取で高評価。', genre: 'レトロ・プレミア', priceLevel: '高（レア品）' },
      { name: 'ゲオ 日本橋店', feature: '安定のゲオ。新作ゲームの買取価格が分かりやすい。即日現金化に対応。', genre: '全般', priceLevel: '中' },
      { name: 'トレーダー 日本橋店', feature: '新作ゲーム・フィギュアの買取が得意。発売直後は高価格での買取実績あり。', genre: '新作・フィギュア', priceLevel: '高（新作）' },
    ],
  },
  {
    name: '梅田エリア',
    description: '大阪最大のターミナル。JR大阪駅・各私鉄駅から直結で、アクセス抜群。大型チェーン店が中心で、仕事帰りや買い物ついでに寄りやすいエリアです。',
    shops: [
      { name: 'ブックオフ SUPER BAZAAR 梅田茶屋町店', feature: '梅田最大級の品揃え。ゲーム・書籍・DVD・家電まで一括買取OK。まとめ売りボーナスあり。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオ 梅田店', feature: '駅近で利便性が高い。ゲームソフトの買取価格を店頭で確認可能。', genre: '全般', priceLevel: '中' },
      { name: 'トレジャーファクトリー 梅田店', feature: 'ゲームだけでなく、家電・楽器・ブランド品もまとめて売れる総合リサイクルショップ。', genre: '全般・家電', priceLevel: '中' },
      { name: 'まんだらけ 梅田店', feature: 'レトロゲーム・限定版の買取に強い。マニア向けの品揃えと査定力が魅力。', genre: 'レトロ・プレミア', priceLevel: '高（レア品）' },
    ],
  },
  {
    name: '難波エリア',
    description: '観光客も多い繁華街。なんばCITYやなんばパークス周辺に買取店が点在。日本橋エリアへも徒歩圏内。',
    shops: [
      { name: 'ブックオフ なんば戎橋店', feature: 'なんばの中心地にあり、アクセス抜群。ゲーム・DVD・書籍を幅広く取り扱い。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオ 難波千日前店', feature: '千日前通り沿いで立ち寄りやすい。安定の買取価格で即日現金化。', genre: '全般', priceLevel: '中' },
      { name: 'ハードオフ 難波店', feature: 'ゲーム機本体・ジャンク品の買取に対応。壊れた本体でも値段がつくことがある。', genre: '本体・ジャンク', priceLevel: '低〜中' },
    ],
  },
];

const localChains = [
  { name: 'お宝創庫（おたからそうこ）', description: '関西・中部を中心に展開するリサイクルショップチェーン。ゲーム・フィギュア・カードゲームの買取に強い。査定が丁寧で評判が良い。', area: '大阪市内・堺・東大阪など', strength: 'ゲーム・フィギュア・トレカ' },
  { name: '万代書店', description: '関西を中心に展開する大型リサイクルショップ。ゲーム・トレカ・おもちゃ・古着まで幅広い。大きな店舗が多く品揃え豊富。', area: '大阪・兵庫・京都など', strength: '総合リサイクル・トレカ' },
  { name: '宇宙堂（うちゅうどう）', description: '大阪の老舗ゲーム買取店。レトロゲームの目利きに定評があり、地元のゲームファンに愛されている。', area: '日本橋エリア', strength: 'レトロゲーム' },
];

const faqs = [
  { q: '大阪でゲームを最も高く買い取ってくれる店はどこですか？', a: 'ゲームの種類によって異なります。レトロゲームなら日本橋の駿河屋やまんだらけ、新作ゲームならトレーダーが高額査定で評判です。複数店で査定してもらい比較するのがおすすめです。日本橋エリアは徒歩で回れる範囲に店舗が集中しています。' },
  { q: '日本橋でんでんタウンへのアクセス方法は？', a: '地下鉄堺筋線「恵美須町」駅から徒歩すぐ、または南海「なんば」駅から徒歩10分です。オタロードは恵美須町駅1A出口を出てすぐの通りで、ゲーム系の店舗が南北に並んでいます。' },
  { q: '大阪で出張買取に対応している店舗はありますか？', a: 'ウリエルが大阪府全域で出張買取に対応しています。出張費・査定費無料で、自宅にいながらその場で現金化できます。お宝創庫も一部エリアで出張買取を実施しています。' },
  { q: 'お宝創庫の評判はどうですか？', a: '査定が丁寧でスタッフの対応が良いと評判です。特にフィギュアやトレカの買取に力を入れており、ゲームと合わせて売りたい場合におすすめです。ただし、レトロゲームの査定は駿河屋やまんだらけのほうが高くなる傾向があります。' },
  { q: '大阪在住ですが、宅配買取のほうが得な場合はありますか？', a: 'はい、あります。宅配買取は店舗コストが低い分、買取価格が高めになる傾向があります。特に大量のゲームをまとめて売りたい場合や、日本橋や梅田に出向く時間がない場合はヒカカク！での一括査定がおすすめです。' },
  { q: '大阪と東京、どちらで売ったほうが高くなりますか？', a: '大手チェーン（ゲオ・ブックオフ等）は全国統一価格のため差はありません。ただし、レトロゲームやレアソフトは店舗の在庫状況によって異なるため、ヒカカク！の一括査定で全国の業者に査定を依頼するのが最も確実です。' },
];

export default function OsakaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "大阪のゲーム買取おすすめ店舗｜日本橋・梅田・難波エリア別ガイド", "datePublished": "2026-03-15", "dateModified": "2026-06-12", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'エリア別', href: '/' }, { name: '大阪' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(251,191,36,0.2)', color: '#FBBF24' }}>エリア別ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            大阪のゲーム買取おすすめ店舗ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            日本橋でんでんタウン・梅田・難波のエリア別にゲーム買取店を徹底紹介。大阪ローカルチェーンの情報からオンライン代替まで、あなたに合った売り方が見つかります。
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

        {/* Local Chains */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />大阪ローカルチェーン</h2>
          <div className="space-y-4">
            {localChains.map((chain) => (
              <div key={chain.name} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{chain.name}</h3>
                <p className="text-sm mb-3" style={{ color: 'var(--color-text-light)' }}>{chain.description}</p>
                <div className="flex flex-wrap gap-4 text-xs">
                  <span className="px-3 py-1 rounded-full" style={{ background: 'var(--color-bg-alt)', color: 'var(--color-deep-blue)' }}>エリア: {chain.area}</span>
                  <span className="px-3 py-1 rounded-full" style={{ background: 'var(--color-bg-alt)', color: 'var(--color-deep-blue)' }}>強み: {chain.strength}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Online Alternative */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />店舗に行けない場合のオンライン代替</h2>
          <div className="glass-card p-6">
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
              大阪府内在住でも、店舗に行く時間がない方や大量のゲームを売りたい方にはオンラインサービスがおすすめです。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社に一括査定。自宅から最高値を見つけられる。</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ウリエル（出張買取）</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>大阪府全域で出張対応。自宅で査定・即金化。</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ネットオフ</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>送料無料・梱包キット無料で手軽。</p>
              </div>
            </div>
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
            大阪で<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>を見つけよう
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            日本橋の店舗持ち込みでもオンラインでも、複数社の査定を比較するのが高く売るコツです。
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
            <Link href="/area/nagoya/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>名古屋のゲーム買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>大須・栄・名駅エリア別ガイド</p>
            </Link>
            <Link href="/compare/kaitori-ranking/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取おすすめランキング</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>2026年最新15社比較</p>
            </Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
