import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: '名古屋のゲーム買取おすすめ店舗｜大須・栄・名駅エリア別ガイド',
  description:
    '名古屋でゲームを高く売れる買取店舗をエリア別に徹底紹介。大須商店街、栄、名古屋駅周辺の人気店舗と特徴を比較。名古屋ローカルチェーンやオンライン代替サービスも紹介。',
  keywords: ['ゲーム買取 名古屋', 'ゲーム買取 おすすめ 名古屋', 'ゲーム買取 大須', 'ゲーム買取 栄', 'ゲーム買取 名駅'],
  openGraph: {
    title: '名古屋のゲーム買取おすすめ店舗｜大須・栄・名駅エリア別ガイド',
    description: '名古屋のゲーム買取店をエリア別に紹介。大須・栄・名駅の人気店舗を比較。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const areas = [
  {
    name: '大須エリア',
    description: '名古屋最大のサブカルチャー・電気街。大須商店街を中心にゲーム・アニメ系の専門店が多数。東京の秋葉原、大阪の日本橋に次ぐゲーム買取の激戦区です。',
    shops: [
      { name: '駿河屋 名古屋大須店', feature: 'レトロゲーム・レアソフトの買取に強い。ネット通販と連動した安定の高額査定。大須エリア最大級のゲーム取扱い。', genre: 'レトロ・レア全般', priceLevel: '高' },
      { name: 'スーパーポテト 名古屋大須店', feature: 'レトロゲーム専門店。ファミコンからPS2世代まで幅広く取り扱い。店内のレトロゲーム試遊コーナーも人気。', genre: 'レトロゲーム全般', priceLevel: '中〜高' },
      { name: 'まんだらけ 名古屋店', feature: '大須商店街内のサブカルチャー総合店。レトロゲーム・限定版の買取に強く、コレクター向けの査定力が高い。', genre: 'レトロ・プレミア', priceLevel: '高（レア品）' },
      { name: 'ゲオ 大須店', feature: '安定のゲオ。新作ゲームの買取がメイン。即日現金化に対応。', genre: '全般', priceLevel: '中' },
      { name: 'ブックオフ 大須赤門通店', feature: '大須商店街の入口付近。ゲーム・書籍・DVDを幅広く取り扱い。買い物ついでに持ち込みやすい立地。', genre: '全般', priceLevel: '中' },
      { name: 'トレーダー 名古屋大須店', feature: '新作ゲーム・フィギュアの買取に特化。発売直後の高額買取に定評あり。', genre: '新作・フィギュア', priceLevel: '高（新作）' },
    ],
  },
  {
    name: '栄エリア',
    description: '名古屋の中心部・繁華街。百貨店やショッピングモールが立ち並ぶエリアで、大手チェーン店が中心。仕事帰りや買い物ついでに立ち寄りやすい。',
    shops: [
      { name: 'ブックオフ 栄スカイル店', feature: '栄の中心部でアクセス抜群。ゲーム・DVD・書籍を幅広く取り扱い。まとめ売りボーナスあり。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオ 栄三丁目店', feature: '駅近で立ち寄りやすい。安定のゲオブランドで査定もスピーディ。', genre: '全般', priceLevel: '中' },
      { name: 'ハードオフ 栄店', feature: 'ゲーム機本体やジャンク品の買取にも対応。壊れた本体でも値段がつくことがある。', genre: '本体・ジャンク', priceLevel: '低〜中' },
    ],
  },
  {
    name: '名古屋駅（名駅）エリア',
    description: '東海地方最大のターミナル駅周辺。新幹線の乗降客も多く、出張ついでの買取にも便利。大型チェーン店が揃っています。',
    shops: [
      { name: 'ブックオフ 名古屋駅西店', feature: '名古屋駅から徒歩圏内。新幹線の待ち時間に立ち寄れる立地。ゲーム・書籍の買取に対応。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオ 名駅南店', feature: '名古屋駅南側で利便性が高い。ゲームソフトの買取価格を事前にアプリで確認可能。', genre: '全般', priceLevel: '中' },
      { name: 'トレジャーファクトリー 名古屋駅前店', feature: 'ゲームだけでなく家電・楽器・ブランド品も一括で売れる総合リサイクルショップ。', genre: '全般・家電', priceLevel: '中' },
    ],
  },
];

const localChains = [
  { name: 'お宝創庫（おたからそうこ）', description: '名古屋を拠点に東海・関西で展開するリサイクルショップチェーン。ゲーム・フィギュア・トレカの買取に特化。査定が丁寧で地元からの信頼が厚い。', area: '名古屋市内・豊田・岡崎・春日井など', strength: 'ゲーム・フィギュア・トレカ' },
  { name: '買取王国', description: '愛知県を中心に展開する買取専門チェーン。ゲーム・ホビー・家電・楽器まで幅広い。大型店舗が多く、駐車場完備で車でのまとめ売りに便利。', area: '名古屋市内・一宮・春日井・半田など', strength: '総合リサイクル・大型店舗' },
  { name: 'ホビーステーション', description: 'トレカ・ゲームの専門チェーン。特にポケモンカード・遊戯王カードの買取に強いが、ゲームソフト・ゲーム機も取り扱い。', area: '大須・名古屋駅周辺', strength: 'トレカ・ゲーム' },
];

const faqs = [
  { q: '名古屋でゲームを最も高く買い取ってくれる店はどこですか？', a: 'ゲームの種類によって異なります。レトロゲームなら大須の駿河屋やまんだらけ、新作ゲームならトレーダーが高額査定で評判です。大須エリアは徒歩で回れる範囲に店舗が集中しているため、2〜3店で査定してもらい比較するのがおすすめです。' },
  { q: '大須商店街へのアクセス方法は？', a: '地下鉄鶴舞線「大須観音」駅から徒歩2分、または地下鉄名城線「上前津」駅から徒歩3分です。大須商店街は南北に広がる商店街で、ゲーム系の店舗は主に赤門通り〜万松寺通り沿いに集中しています。' },
  { q: '名古屋で出張買取に対応している店舗はありますか？', a: 'ウリエルが名古屋市内を含む愛知県全域で出張買取に対応しています。お宝創庫も一部エリアで出張買取を実施しています。出張費・査定費は無料です。' },
  { q: 'お宝創庫は名古屋発祥ですか？', a: 'はい、お宝創庫は愛知県を拠点とする地元チェーンです。ゲーム・フィギュア・トレカの買取に特化しており、名古屋市内に複数店舗を展開しています。査定が丁寧でスタッフの知識が豊富と評判です。' },
  { q: '車で大量のゲームを持ち込みたい場合はどこがおすすめ？', a: '買取王国がおすすめです。郊外に大型店舗が多く、駐車場完備で車でのまとめ売りに最適です。お宝創庫も駐車場のある店舗が多いです。大須エリアは駐車場が少ないため、大量持ち込みには不向きです。' },
  { q: '名古屋在住ですが、宅配買取のほうが得な場合はありますか？', a: 'はい、あります。宅配買取は店舗コストが低い分、買取価格が高めになる傾向があります。特に大量のゲームをまとめて売りたい場合や、大須に出向く時間がない場合はヒカカク！での一括査定がおすすめです。送料無料の業者が多数あります。' },
];

export default function NagoyaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "名古屋のゲーム買取おすすめ店舗｜大須・栄・名駅エリア別ガイド", "datePublished": "2026-03-15", "dateModified": "2026-05-24", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'エリア別', href: '/' }, { name: '名古屋' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(251,191,36,0.2)', color: '#FBBF24' }}>エリア別ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            名古屋のゲーム買取おすすめ店舗ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            大須・栄・名古屋駅のエリア別にゲーム買取店を徹底紹介。名古屋ローカルチェーンの情報からオンライン代替まで、あなたに合った売り方が見つかります。
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />名古屋ローカルチェーン</h2>
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
              名古屋市外や愛知県内の郊外にお住まいの方には、全国対応のオンラインサービスがおすすめです。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社に一括査定。全国対応で送料無料の業者多数。</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ウリエル（出張買取）</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>愛知県全域で出張対応。自宅で査定・即金化。</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ネットオフ</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>送料無料・梱包キット無料。手軽さNo.1。</p>
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
            名古屋で<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>を見つけよう
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            大須の店舗持ち込みでもオンラインでも、複数社の査定を比較するのが高く売るコツです。
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
