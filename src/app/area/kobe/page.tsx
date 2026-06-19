import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: '神戸のゲーム買取おすすめ店舗｜三宮・元町・ハーバーランドエリア別ガイド【2026年6月】',
  description:
    '神戸でゲームを高く売れる買取店をエリア別に紹介。三宮（駿河屋・ゲームショップBARON・ゲオ・じゃんぱら）、神戸駅ハーバーランド（ソフマップ）の実店舗を比較。宅配買取の代替も解説。',
  keywords: ['神戸 ゲーム買取', '三宮 ゲーム 売る', '神戸 ゲーム 高価買取', '駿河屋 三宮', 'ゲームショップ BARON'],
  openGraph: {
    title: '神戸のゲーム買取おすすめ店舗｜三宮・元町・ハーバーランドエリア別ガイド【2026年6月】',
    description: '神戸のゲーム買取店をエリア別に紹介。三宮・元町・ハーバーランドの実店舗を比較。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const areas = [
  {
    name: '三宮・元町エリア',
    description: '神戸の買取店はセンター街・さんプラザ・センタープラザ周辺の三宮に圧倒的に集中。総合・専門・ホビー系が徒歩圏に密集し、用途で使い分けられます。元町駅周辺もこのエリアの徒歩圏です。',
    shops: [
      { name: '駿河屋 神戸三宮2号店', feature: 'さんプラザビル2F。ゲームソフトが豊富で、フィギュア・プラモにも強い。系列で1号店・買取センターも展開。', genre: '全般・ホビー', priceLevel: '中〜高' },
      { name: 'ゲームショップBARON', feature: '三ノ宮の中古ゲーム専門店。Switch/PS等の新作からスーファミ/N64などレトロまで。店内に試遊スペースあり。', genre: 'ゲーム専門・レトロ', priceLevel: '中〜高' },
      { name: 'ブックオフ 三宮センター街店', feature: 'センター街2丁目のビル5F。ゲームソフト・本体に加え本・トレカも対応する大型総合店。', genre: '全般', priceLevel: '中' },
      { name: 'ゲオモバイル 三宮センター街店', feature: 'センター街内。新作・中古ゲームと中古スマホ買取が中心。', genre: '新作・スマホ', priceLevel: '中' },
      { name: 'じゃんぱら 三宮駅前店 ほか', feature: '三宮に複数店。ゲーム機本体・コントローラー等の周辺機器買取に強く、買取価格をHPで検索可能。', genre: 'ゲーム機・周辺機器', priceLevel: '中' },
      { name: 'イエローサブマリン 三宮店', feature: 'センタープラザ西館2F。TCG（ポケカ・遊戯王等）・ガンプラ・ボードゲーム中心のホビー店。', genre: 'トレカ・ホビー', priceLevel: '中〜高（トレカ）' },
    ],
  },
  {
    name: '神戸駅・ハーバーランドエリア',
    description: 'JR神戸駅側のハーバーランドには大型商業施設があり、ゲーム機・PC・家電をまとめて売りたい方に便利です。',
    shops: [
      { name: 'ソフマップ 神戸ハーバーランド店', feature: 'umie NORTH MALL内、JR神戸駅徒歩約5分。家庭用ゲーム機・ソフトを含む幅広い買取。当日支払いは閉店2時間前まで。', genre: '全般・PC・家電', priceLevel: '中' },
    ],
  },
];

const highPriceTips = [
  { tip: '三宮で複数店を回る', detail: '三宮のセンター街・さんプラザ周辺に駿河屋・BARON・ブックオフ・ゲオ・じゃんぱら・イエローサブマリンが密集しています。2〜3店で査定を比較すれば最高値を見つけやすいです。' },
  { tip: 'レトロ・専門タイトルはBARON・駿河屋へ', detail: 'レトロや専門性の高いタイトルは、ゲームショップBARONや駿河屋神戸三宮2号店が一般チェーンより高値をつけやすい傾向です。' },
  { tip: '本体・周辺機器はじゃんぱらで事前確認', detail: 'ゲーム機本体やコントローラー等の周辺機器は、じゃんぱらが買取価格をHPで検索できます。事前に相場を把握してから持ち込むと効率的です。' },
];

const faqs = [
  { q: '神戸でゲームを最も高く買い取ってくれる店はどこですか？', a: '新作・一般ソフトはゲオやブックオフ、レトロや専門タイトルはゲームショップBARONや駿河屋神戸三宮2号店が高値の傾向です。三宮エリアで複数店を比較するのがおすすめです。' },
  { q: '三宮で即日現金化できますか？', a: 'はい。ブックオフ三宮センター街店やゲオモバイル三宮センター街店などでは、身分証提示で即日現金化が可能です。点数次第ですが10点程度なら15〜30分が目安です。' },
  { q: 'ゲーム機本体を高く売るならどこですか？', a: 'じゃんぱら三宮の各店は、ゲーム機本体・周辺機器の買取に強く、買取価格をHPで事前に確認できます。本体は付属品（ケーブル・コントローラー）が揃っていると査定額が上がります。' },
  { q: '関西在住ですが宅配買取の方がお得ですか？', a: '大量に売る場合や近くに専門店がない場合は宅配買取が便利です。ヒカカク！なら最大20社に一括査定でき、送料無料の業者も多いため、関西在住でも高値を狙えます。' },
];

export default function KobePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "神戸のゲーム買取おすすめ店舗｜三宮・元町・ハーバーランドエリア別ガイド", "datePublished": "2026-06-18", "dateModified": "2026-06-18", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'エリア別', href: '/' }, { name: '神戸' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(251,191,36,0.2)', color: '#FBBF24' }}>エリア別ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">神戸のゲーム買取おすすめ店舗ガイド</h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            買取店が密集する三宮（駿河屋・ゲームショップBARON・ゲオ・じゃんぱら）から、神戸駅ハーバーランドのソフマップまで、神戸でゲームを高く売れる買取店をエリア別に紹介します。
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />店舗に行けない場合のオンライン代替</h2>
          <div className="glass-card p-6">
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>近くに店舗がない・大量に売りたい場合は、関西からでも使えるオンライン買取が便利です。</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}><h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！</h3><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社に一括査定。自宅から最高値を比較できる。送料無料の業者多数。</p></div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}><h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ゲーム王国（宅配買取）</h3><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>関西からも送料無料（佐川集荷）。故障品・箱なしもOKで最短当日入金。</p></div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}><h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>駿河屋（宅配買取）</h3><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>レトロゲームの宅配買取に強い。全国どこからでも送料無料で利用可能。</p></div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />神戸で高く売るコツ</h2>
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
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>神戸で<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>を見つけよう</h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>店舗持ち込みでもオンラインでも、複数社の査定を比較するのが高く売るコツです。</p>
          <div className="flex flex-wrap justify-center gap-4"><Link href="/" className="btn-primary py-3 px-8">おすすめランキングを見る</Link></div>
        </section>

        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のエリアガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/area/osaka/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>大阪のゲーム買取</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>日本橋・梅田・難波エリア別ガイド</p></Link>
            <Link href="/area/kyoto/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>京都のゲーム買取</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>河原町・寺町・京都駅エリア別ガイド</p></Link>
            <Link href="/area/hiroshima/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>広島のゲーム買取</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>紙屋町・広島駅・西区エリア別ガイド</p></Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
