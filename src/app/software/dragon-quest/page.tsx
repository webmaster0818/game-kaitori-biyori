import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ドラクエシリーズの買取相場｜全タイトル価格一覧【2026年版】',
  description:
    'ドラクエ3リメイク・DQ11等の全タイトル買取相場を一覧表で掲載。店舗別比較、レトロドラクエの価値、価格推移まで徹底解説。',
  keywords: ['ドラクエ 買取 相場', 'ドラゴンクエスト 買取', 'DQ3 リメイク 買取', 'ドラクエ 売る'],
  openGraph: {
    title: 'ドラクエシリーズの買取相場｜全タイトル価格一覧【2026年版】',
    description: 'ドラクエシリーズ全タイトルの買取相場を店舗別に徹底比較。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const priceData = [
  { title: 'ドラゴンクエストIII そして伝説へ… HD-2D版', platform: 'Switch/PS5', price: '3,500〜5,000円', trend: '安定', note: '2024年発売のHD-2Dリメイク。高い人気を維持' },
  { title: 'ドラゴンクエストXI 過ぎ去りし時を求めて S', platform: 'Switch', price: '2,000〜3,200円', trend: '安定', note: 'Switch版は追加要素ありで人気' },
  { title: 'ドラゴンクエストXI 過ぎ去りし時を求めて', platform: 'PS4', price: '800〜1,500円', trend: 'やや下降', note: 'S版に需要が移行' },
  { title: 'ドラゴンクエストX オフライン', platform: 'Switch/PS5', price: '1,500〜2,500円', trend: '安定', note: 'オフラインで遊べるDQ10' },
  { title: 'ドラゴンクエストビルダーズ2', platform: 'Switch/PS4', price: '1,500〜2,500円', trend: '安定', note: 'マインクラフト系で幅広い人気' },
  { title: 'ドラゴンクエストヒーローズ I・II', platform: 'Switch', price: '1,000〜2,000円', trend: '安定', note: 'アクションRPGとして一定の需要' },
  { title: 'ドラゴンクエストトレジャーズ', platform: 'Switch', price: '800〜1,500円', trend: 'やや下降', note: 'スピンオフ作品' },
  { title: 'ドラゴンクエストモンスターズ3', platform: 'Switch', price: '2,500〜3,800円', trend: '安定', note: 'モンスター育成の人気シリーズ' },
  { title: 'ドラゴンクエストV（SFC）', platform: 'SFC', price: '1,000〜3,000円', trend: '上昇', note: '箱・説明書完備は高額。名作の誉れ高い' },
  { title: 'ドラゴンクエストIII（FC）', platform: 'FC', price: '500〜2,000円', trend: '安定', note: '流通量多。箱付き美品は高値' },
];

const shopComparison = [
  { shop: 'ヒカカク！', dq3Remake: '4,200〜5,000円', dq11S: '2,500〜3,200円', dqMonsters3: '3,000〜3,800円', feature: '一括査定で最高値を比較可能' },
  { shop: 'ゲオ（GEO）', dq3Remake: '3,500〜4,500円', dq11S: '2,000〜2,800円', dqMonsters3: '2,500〜3,200円', feature: '即日現金化。Pontaポイント付き' },
  { shop: 'ブックオフ', dq3Remake: '3,000〜4,000円', dq11S: '1,800〜2,500円', dqMonsters3: '2,000〜3,000円', feature: '店頭持込で即査定' },
  { shop: '駿河屋', dq3Remake: '3,800〜4,800円', dq11S: '2,200〜3,000円', dqMonsters3: '2,800〜3,500円', feature: 'レトロDQの査定が強い' },
];

const retroDQValues = [
  { title: 'ドラクエI（FC）箱付き完品', value: '3,000〜8,000円', detail: '初版とリピート版で価格差あり。ゴールドカートリッジは特にプレミア。' },
  { title: 'ドラクエII（FC）箱付き完品', value: '2,000〜5,000円', detail: '初版の方が価値が高い。マップ付きだとさらにプラス。' },
  { title: 'ドラクエIII（FC）箱付き完品', value: '2,000〜6,000円', detail: '社会現象を起こした伝説のタイトル。状態良好品は高額。' },
  { title: 'ドラクエIV（FC）箱付き完品', value: '1,500〜4,000円', detail: 'FC最後のDQ。AIパーティシステムが特徴。' },
  { title: 'ドラクエV（SFC）箱付き完品', value: '3,000〜8,000円', detail: 'シリーズ最高傑作との呼び声。コレクター需要が非常に高い。' },
  { title: 'ドラクエVI（SFC）箱付き完品', value: '2,000〜5,000円', detail: 'SFC最後のDQ。ムドー戦は語り草。' },
];

const faqs = [
  { q: 'ドラクエシリーズで最も高く売れるタイトルは何ですか？', a: '現行タイトルではDQ3 HD-2Dリメイクが3,500〜5,000円で最も高値です。レトロ作品ではSFC版ドラクエVの箱付き完品が3,000〜8,000円で取引されています。ドラクエは国民的RPGのため中古市場での需要が安定しており、他のシリーズと比べて値崩れしにくいのが特徴です。' },
  { q: 'ドラクエ3 HD-2Dリメイクはいつ売るべきですか？', a: '今後DQ1・DQ2のHD-2Dリメイクが発表される可能性があるため、その発表前が理想的です。また、ドラクエ12の続報が出ると旧作の需要が一時的に変動する可能性もあります。現時点では価格が安定しているため、遊び終えたら早めに売却するのがおすすめです。' },
  { q: 'レトロドラクエ（FC・SFC）はどこで売るのがお得ですか？', a: 'レトロゲーム専門の買取店がおすすめです。駿河屋やまんだらけ等はレトロゲームの査定に強く、箱・説明書・マップ等の付属品を正当に評価してくれます。一般的な買取店では「古いゲーム」として安値をつけられることがあるため、専門店を利用しましょう。' },
  { q: 'ドラクエのSwitch版とPS版、どちらが高く売れますか？', a: 'DQ3リメイクやDQ11Sなど、Switch版の方がPS版より500〜1,500円ほど高値がつく傾向があります。Switchの携帯モードで遊べる利便性と、Switch自体のユーザー数の多さが理由です。売却を考慮するなら、マルチプラットフォームのDQはSwitch版を購入するのがお得です。' },
  { q: 'ドラクエのスピンオフ作品は売れますか？', a: 'はい、売れます。特にドラクエモンスターズ3は2,500〜3,800円と好相場です。ビルダーズ2も1,500〜2,500円で安定しています。ただしヒーローズやトレジャーズなど、評価が分かれた作品は1,000〜2,000円程度とやや低めです。本編と比べるとスピンオフは値下がりが早い傾向があります。' },
  { q: 'ドラクエ12が発売されたら旧作の価格はどうなりますか？', a: 'ドラクエ12が発売されると、短期的にはシリーズ全体への注目が高まり、旧作の需要も上がる可能性があります。ただし中長期的には最新作に需要が集中するため、旧作は緩やかに下落する傾向です。DQ12の発売前にプレイ済みの旧作を売却するのが安全な判断と言えます。' },
];

export default function DragonQuestPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'ドラクエ買取相場' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ソフト別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ドラクエシリーズの買取相場
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            国民的RPG「ドラゴンクエスト」シリーズの全タイトル買取相場を一覧表で紹介。DQ3 HD-2Dリメイクからファミコン初代まで、店舗別の価格比較、レトロドラクエのプレミア価値、価格推移の傾向を徹底解説します。ドラクエソフトを最高値で売却するためのガイドです。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 全タイトル買取相場 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ドラクエ全タイトル買取相場</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>タイトル</th>
                  <th>機種</th>
                  <th>買取相場</th>
                  <th>傾向</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row) => (
                  <tr key={row.title}>
                    <td className="font-bold text-sm">{row.title}</td>
                    <td className="text-sm">{row.platform}</td>
                    <td className="font-bold" style={{ color: 'var(--color-electric-green)' }}>{row.price}</td>
                    <td className="text-sm">{row.trend}</td>
                    <td className="text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>※ 2026年5月時点の参考価格。状態・付属品により変動します。</p>
        </section>

        {/* 店舗別比較 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />店舗別 買取価格比較</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>買取店</th>
                  <th>DQ3リメイク</th>
                  <th>DQ11S</th>
                  <th>DQモンスターズ3</th>
                  <th>特徴</th>
                </tr>
              </thead>
              <tbody>
                {shopComparison.map((row) => (
                  <tr key={row.shop}>
                    <td className="font-bold">{row.shop}</td>
                    <td className="text-sm" style={{ color: 'var(--color-electric-green)' }}>{row.dq3Remake}</td>
                    <td className="text-sm">{row.dq11S}</td>
                    <td className="text-sm">{row.dqMonsters3}</td>
                    <td className="text-xs">{row.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* レトロドラクエの価値 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />レトロドラクエのプレミア価値</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>タイトル</th>
                  <th>買取相場</th>
                  <th>詳細</th>
                </tr>
              </thead>
              <tbody>
                {retroDQValues.map((row) => (
                  <tr key={row.title}>
                    <td className="font-bold text-sm">{row.title}</td>
                    <td className="font-bold" style={{ color: 'var(--color-electric-green)' }}>{row.value}</td>
                    <td className="text-sm">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 価格推移の傾向 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ドラクエの価格推移傾向</h2>
          <div className="glass-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>値崩れしにくいタイトル</h3>
                <ul className="text-sm space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・ナンバリング本編（特にDQ3、DQ5、DQ11）</li>
                  <li>・HD-2Dリメイク版</li>
                  <li>・モンスターズシリーズ</li>
                  <li>・レトロ完品（箱・説明書・マップ付き）</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>値崩れしやすいタイトル</h3>
                <ul className="text-sm space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・スピンオフ作品（ヒーローズ、トレジャーズ）</li>
                  <li>・上位版が出た旧バージョン（DQ11無印）</li>
                  <li>・オンライン専用タイトル</li>
                  <li>・セール対象になった作品</li>
                </ul>
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
            ドラクエソフトの<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>を今すぐチェック
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            店舗によって買取価格が大きく異なります。一括査定で最高値を見つけましょう。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連記事</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/software/switch-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switchソフト買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>任天堂ソフトの相場一覧</p>
            </Link>
            <Link href="/software/retro-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>レトロソフト買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>レトロゲームの相場一覧</p>
            </Link>
            <Link href="/knowledge/timing/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>売り時ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最適な売却タイミング</p>
            </Link>
          </div>
        </section>

        <p className="text-xs mt-8 text-center" style={{ color: 'var(--color-text-light)' }}>最終更新: 2026年5月</p>
      </div>
    </>
  );
}
