import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ドラクエの買取価格【2026年10月】ドラクエ3は新品3,500円・中古1,600円｜全タイトル相場',
  description:
    'ドラクエ3 HD-2Dの買取価格を2026年10月19日に各社公式で再調査しました（買取ルデヤ 新品3,500円、駿河屋 Switch版1,600円・PS5版1,000円）。DQ11等の全タイトルの買取相場、店舗別の比較、レトロドラクエの価値も解説します。',
  keywords: ['ドラクエ 買取 相場', 'ドラゴンクエスト 買取', 'DQ3 リメイク 買取', 'ドラクエ 売る'],
  openGraph: {
    images: ['/og.png'],
    title: 'ドラクエの買取価格【2026年10月】ドラクエ3は新品3,500円・中古1,600円｜全タイトル相場',
    description: 'ドラクエシリーズ全タイトルの買取相場を店舗別に比較しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const priceData = [
  { title: 'ドラゴンクエストIII そして伝説へ… HD-2D版', platform: 'Switch/PS5', price: '1,000〜3,500円', trend: 'やや下降', note: '2024年発売のHD-2Dリメイク。10/19時点で新品未開封3,500円（ルデヤ）、中古はSwitch 1,600円・PS5 1,000円（駿河屋）' },
  { title: 'ドラゴンクエストXI 過ぎ去りし時を求めて S', platform: 'Switch', price: '2,000〜3,200円', trend: '安定', note: 'Switch版は追加要素ありで人気' },
  { title: 'ドラゴンクエストXI 過ぎ去りし時を求めて', platform: 'PS4', price: '800〜1,500円', trend: 'やや下降', note: 'S版に需要が移行' },
  { title: 'ドラゴンクエストX オフライン', platform: 'Switch/PS5', price: '1,500〜2,500円', trend: '安定', note: 'オフラインで遊べるDQ10' },
  { title: 'ドラゴンクエストビルダーズ2', platform: 'Switch/PS4', price: '1,500〜2,500円', trend: '安定', note: 'マインクラフト系の作品として幅広い人気' },
  { title: 'ドラゴンクエストヒーローズ I・II', platform: 'Switch', price: '1,000〜2,000円', trend: '安定', note: 'アクションRPGとして一定の需要' },
  { title: 'ドラゴンクエストトレジャーズ', platform: 'Switch', price: '800〜1,500円', trend: 'やや下降', note: 'スピンオフ作品' },
  { title: 'ドラゴンクエストモンスターズ3', platform: 'Switch', price: '2,500〜3,800円', trend: '安定', note: 'モンスター育成の人気シリーズ' },
  { title: 'ドラゴンクエストV（SFC）', platform: 'SFC', price: '1,000〜3,000円', trend: '上昇', note: '箱・説明書完備品は高額。名作として評価が高い' },
  { title: 'ドラゴンクエストIII（FC）', platform: 'FC', price: '500〜2,000円', trend: '安定', note: '流通量が多い。箱付き美品は高値' },
];

const shopComparison = [
  { shop: 'ヒカカク！', dq3Remake: '4,200〜5,000円', dq11S: '2,500〜3,200円', dqMonsters3: '3,000〜3,800円', feature: '一括査定で最高値を比較可能' },
  { shop: 'ゲオ（GEO）', dq3Remake: '3,500〜4,500円', dq11S: '2,000〜2,800円', dqMonsters3: '2,500〜3,200円', feature: '即日現金化。Pontaポイント付き' },
  { shop: 'ブックオフ', dq3Remake: '3,000〜4,000円', dq11S: '1,800〜2,500円', dqMonsters3: '2,000〜3,000円', feature: '店頭持込で即査定' },
  { shop: '駿河屋', dq3Remake: '3,800〜4,800円', dq11S: '2,200〜3,000円', dqMonsters3: '2,800〜3,500円', feature: 'レトロDQの査定に強み' },
];

const retroDQValues = [
  { title: 'ドラクエI（FC）箱付き完品', value: '3,000〜8,000円', detail: '初版とリピート版で価格差あり。ゴールドカートリッジは特にプレミア。' },
  { title: 'ドラクエII（FC）箱付き完品', value: '2,000〜5,000円', detail: '初版の方が価値が高い。マップ付きは査定額が上がる傾向があります。' },
  { title: 'ドラクエIII（FC）箱付き完品', value: '2,000〜6,000円', detail: '発売当時に社会現象となったタイトル。状態良好品は高額。' },
  { title: 'ドラクエIV（FC）箱付き完品', value: '1,500〜4,000円', detail: 'FC最後のDQ。AIパーティシステムが特徴。' },
  { title: 'ドラクエV（SFC）箱付き完品', value: '3,000〜8,000円', detail: 'シリーズ屈指の名作と評される作品。コレクター需要が非常に高い。' },
  { title: 'ドラクエVI（SFC）箱付き完品', value: '2,000〜5,000円', detail: 'SFC最後のDQ。ムドー戦などで知られる人気作。' },
];

const faqs = [
  { q: 'ドラクエシリーズで最も高く売れるタイトルは何ですか？', a: '現行タイトルではDQ3 HD-2Dリメイクが高値の部類で、2026年10月19日時点で買取ルデヤの新品未開封が3,500円、駿河屋のSwitch版が1,600円です。レトロ作品ではSFC版ドラクエVの箱付き完品が3,000〜8,000円で取引されています。ドラクエは国民的RPGのため中古市場での需要が安定しており、他のシリーズと比べて値崩れしにくいのが特徴です。' },
  { q: 'ドラクエ3 HD-2Dリメイクはいつ売るべきですか？', a: '買取ルデヤの新品未開封の買取価格は、2026年6月14日の4,500円から10月19日には3,500円へと約22%下がっています（当編集部の定点確認）。続編にあたるHD-2D版『ドラゴンクエストI＆II』もすでに発売されており、DQ3の価格が今後上がる材料は見当たりません。遊び終えた場合は、早めの売却をおすすめします。' },
  { q: 'レトロドラクエ（FC・SFC）はどこで売るのが有利ですか？', a: 'レトロゲーム専門の買取店が適しています。駿河屋やまんだらけ等はレトロゲームの査定に強みがあり、箱・説明書・マップ等の付属品も適正に評価する傾向があります。一般的な買取店では「古いゲーム」として安値をつけられることがあるため、専門店の利用をおすすめします。' },
  { q: 'ドラクエのSwitch版とPS版、どちらが高く売れますか？', a: 'Switch版の方が高い傾向があります。2026年10月19日の駿河屋公式では、DQ3 HD-2DのSwitch版が1,600円、PS5版が1,000円で、600円の差がありました。Switchの携帯モードで遊べる利便性と、Switch自体のユーザー数の多さが理由です。売却を前提とする場合は、マルチプラットフォームのDQはSwitch版の購入が有利です。' },
  { q: 'ドラクエのスピンオフ作品は売れますか？', a: 'はい、売却できます。特にドラクエモンスターズ3は2,500〜3,800円と相場が堅調です。ビルダーズ2も1,500〜2,500円で安定しています。ただしヒーローズやトレジャーズなど、評価が分かれた作品は1,000〜2,000円程度とやや低めです。本編と比べるとスピンオフは値下がりが早い傾向があります。' },
  { q: 'ドラクエ12が発売されたら旧作の価格はどうなりますか？', a: 'ドラクエ12が発売されると、短期的にはシリーズ全体への注目が高まり、旧作の需要も上がる可能性があります。ただし中長期的には最新作に需要が集中するため、旧作は緩やかに下落する傾向です。DQ12の発売前に、プレイ済みの旧作を売却しておくことをおすすめします。' },
];

export default function DragonQuestPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ドラクエシリーズの買取相場｜全タイトル価格一覧", "datePublished": "2026-03-15", "dateModified": "2026-10-19", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'ドラクエ買取相場' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ソフト別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ドラクエシリーズの買取相場
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            国民的RPG「ドラゴンクエスト」シリーズの全タイトルの買取相場を一覧表で紹介しています。DQ3 HD-2Dリメイクからファミコン初代まで、店舗別の価格比較、レトロドラクエのプレミア価値、価格推移の傾向について解説します。ドラクエソフトをより高く売却するためのガイドです。
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

        {/* 公式買取価格（実値） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />各社公式の実買取価格【ドラクエ3は2026年10月19日、ほかは6月14日調査】</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>各社の公式買取ページで実際に確認できた価格です（完品・状態良好が前提。状態により変動）。上の相場一覧とは異なり、各社が公式に掲載している実際の買取価格です。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>タイトル</th><th>ハード</th><th>買取価格</th><th>店舗</th></tr>
              </thead>
              <tbody>
                <tr><td className="font-bold text-sm">ドラゴンクエストIII そして伝説へ… HD-2D版</td><td className="text-sm">Switch</td><td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>3,500円</td><td className="text-sm">買取ルデヤ（新品・ビニール未開封のみ／10月19日。6月14日は4,500円）</td></tr>
                <tr><td className="font-bold text-sm">ドラゴンクエストIII そして伝説へ… HD-2D版</td><td className="text-sm">Switch</td><td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>1,600円</td><td className="text-sm">駿河屋（10月19日）</td></tr>
                <tr><td className="font-bold text-sm">ドラゴンクエストIII そして伝説へ… HD-2D版</td><td className="text-sm">PS5</td><td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>1,000円</td><td className="text-sm">駿河屋（10月19日）</td></tr>
                <tr><td className="font-bold text-sm">ドラゴンクエストVII リイマジンド</td><td className="text-sm">Switch</td><td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>3,000円</td><td className="text-sm">ゲオ</td></tr>
                <tr><td className="font-bold text-sm">ドラゴンクエストVII Reimagined</td><td className="text-sm">Switch2</td><td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>2,500円</td><td className="text-sm">ブックオフ</td></tr>
                <tr><td className="font-bold text-sm">ドラゴンクエストXI 過ぎ去りし時を求めて S</td><td className="text-sm">Switch</td><td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>3,000円</td><td className="text-sm">ゲオ</td></tr>
                <tr><td className="font-bold text-sm">ドラゴンクエストI＆II</td><td className="text-sm">Switch2</td><td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>2,500円</td><td className="text-sm">ブックオフ</td></tr>
                <tr><td className="font-bold text-sm">ドラゴンクエストヒーローズ I・II</td><td className="text-sm">Switch</td><td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>3,000円</td><td className="text-sm">ゲオ</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ドラクエ3は買取ルデヤ公式の商品ページ（2026年10月19日現在の表記）と駿河屋公式の買取検索（2026年10月19日閲覧）。そのほかは買取ルデヤ公式・ゲオ公式高価買取品一覧・ブックオフ公式「ゲームの高価買取情報」（2026年6月11〜14日確認）。ドラクエ3は同じSwitch版でも、新品未開封の買取（3,500円）と駿河屋の買取価格（1,600円）で約2.2倍の差があります。同じVIIでもゲオ(Switch版3,000円)とブックオフ(Switch 2版2,500円)で差があるため、複数社の価格をご確認いただくことをおすすめします。</p>
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
            ドラクエソフトの<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>の確認方法
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            店舗によって買取価格が大きく異なります。一括査定で各社の価格を比較し、最高値を確認することをおすすめします。
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
            <Link href="/price-index/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取価格インデックス</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>実測データにもとづく店舗別の最高値</p>
            </Link>
            <Link href="/review/kaitori-world/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取ワールドの評判</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>人気ソフトを高く売る業者</p>
            </Link>
          </div>
        </section>

        <p className="text-xs mt-8 text-center" style={{ color: 'var(--color-text-light)' }}>最終更新: 2026年5月</p>
        <AuthorBox />
      </div>
    </>
  );
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/software/high-value/" className="block bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl p-5 text-center shadow hover:opacity-95 transition">
            <span className="font-bold text-lg">📈 最新の「高く売れるゲームソフト」ランキングを見る</span>
            <span className="block text-sm opacity-90 mt-1">ブックオフ・ゲオ・駿河屋の公式買取価格を定期的に実測更新中</span>
          </Link>
        </div>
      </section>
}
