import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ドラクエの買取価格ランキング【2026年10月】ドラクエ3は1,600円・ドラクエ11 Sは2,200円｜駿河屋の実測',
  description:
    'ドラクエ3（HD-2D）はSwitch版1,600円・PS5版1,000円、ドラクエ11 SはSwitch版2,200円・Switch 2版2,800円です（2026年10月30日・駿河屋公式）。シリーズ19件の買取価格ランキングと、買取ルデヤ・ブックオフとの店舗別比較、レトロドラクエの価格を掲載しています。',
  keywords: ['ドラクエ 買取 相場', 'ドラゴンクエスト 買取', 'DQ3 リメイク 買取', 'ドラクエ 売る'],
  openGraph: {
    images: ['/og.png'],
    title: 'ドラクエの買取価格ランキング【2026年10月】ドラクエ3は1,600円・ドラクエ11 Sは2,200円｜駿河屋の実測',
    description: 'ドラクエのソフト19件の買取価格を駿河屋公式で実測し、店舗別に比較しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

// 2026-10-20 駿河屋公式の買取検索で確認した国内版の通常の買取価格（美品・未開封の上乗せ前）。高い順。価格が「メールにてお見積」の商品は含めていません
const priceData = [
  { title: 'ドラゴンクエストヒーローズI・II for Nintendo Switch', platform: 'Switch', price: 3000, note: '' },
  { title: 'ドラゴンクエストXI 過ぎ去りし時を求めて S', platform: 'Switch 2', price: 2800, note: 'Switch版（2,000円）より800円高い' },
  { title: 'ドラゴンクエストI＆II', platform: 'Switch', price: 2400, note: '' },
  { title: 'ドラゴンクエストX 目覚めし五つの種族 オフライン［通常版］', platform: 'Switch', price: 2300, note: 'デラックス版は2,200円、超デラックス版は5,500円' },
  { title: 'ドラゴンクエストI＆II', platform: 'Switch 2', price: 2200, note: 'Switch版より200円安い' },
  { title: 'ドラゴンクエストXI 過ぎ去りし時を求めて S 新価格版', platform: 'Switch', price: 2200, note: '' },
  { title: 'ドラゴンクエストVII Reimagined', platform: 'Switch', price: 2100, note: '' },
  { title: 'ドラゴンクエストXI 過ぎ去りし時を求めて S', platform: 'Switch', price: 2000, note: 'ゴージャス版は2,200円、夢のゴージャス版は5,300円' },
  { title: 'ドラゴンクエストX 目覚めし五つの種族 オフライン［通常版］', platform: 'PS5', price: 1900, note: 'デラックス版も同額' },
  { title: 'ドラゴンクエストVII Reimagined', platform: 'Switch 2', price: 1900, note: '' },
  { title: 'ドラゴンクエストIII そして伝説へ… HD-2D版', platform: 'Switch', price: 1600, note: '買取ルデヤの新品未開封は3,500円' },
  { title: 'ドラゴンクエストI＆II', platform: 'PS5', price: 1600, note: '' },
  { title: 'ドラゴンクエストビルダーズ2 破壊神シドーとからっぽの島 新価格版', platform: 'Switch', price: 1600, note: '' },
  { title: 'ドラゴンクエストXI 過ぎ去りし時を求めて S', platform: 'PS4', price: 1500, note: 'PS4版の無印（S以前の版）は価格の掲載なし' },
  { title: 'ドラゴンクエストVII Reimagined', platform: 'PS5', price: 1500, note: '' },
  { title: 'ドラゴンクエストモンスターズ3 魔族の王子とエルフの旅［通常版］', platform: 'Switch', price: 1300, note: 'マスターズ版は1,100円' },
  { title: 'ドラゴンクエストIII そして伝説へ… HD-2D版', platform: 'PS5', price: 1000, note: 'Switch版より600円安い' },
  { title: 'ドラゴンクエストビルダーズ2 破壊神シドーとからっぽの島 新価格版', platform: 'PS4', price: 800, note: 'Switch版の半額' },
  { title: 'ドラゴンクエスト トレジャーズ 蒼き瞳と大空の羅針盤', platform: 'Switch', price: 500, note: '' },
];

// 2026-10-20 各社公式で同じタイトルの買取価格が読めたものだけを掲載
const shopComparison = [
  { title: 'ドラゴンクエストIII そして伝説へ… HD-2D版', platform: 'Switch', other: '買取ルデヤ 3,500円（新品・ビニール未開封のみ）', suruga: 1600 },
  { title: 'ドラゴンクエストI＆II', platform: 'Switch', other: '買取ルデヤ 3,000円（新品・ビニール未開封のみ）', suruga: 2400 },
  { title: 'ドラゴンクエストI＆II', platform: 'Switch 2', other: '買取ルデヤ 4,000円（新品・ビニール未開封のみ）', suruga: 2200 },
  { title: 'ドラゴンクエストVII Reimagined', platform: 'Switch', other: '買取ルデヤ 4,600円（新品・ビニール未開封のみ）', suruga: 2100 },
  { title: 'ドラゴンクエストVII Reimagined', platform: 'Switch 2', other: '買取ルデヤ 4,500円（新品・ビニール未開封のみ）', suruga: 1900 },
  { title: 'ドラゴンクエストXI 過ぎ去りし時を求めて S', platform: 'Switch 2', other: 'ブックオフ 2,500円（高価買取情報・10月15日更新）', suruga: 2800 },
];

// 2026-10-20 駿河屋公式の買取検索で確認したFC・SFCの国内版ソフトの買取価格
const retroDQValues = [
  { title: 'ドラゴンクエスト', platform: 'FC', value: '7,500円', detail: '美品は18,000円' },
  { title: 'ドラゴンクエストII', platform: 'FC', value: '2,200円', detail: '' },
  { title: 'ドラゴンクエストIII', platform: 'FC', value: '価格の掲載なし', detail: 'メールでの見積もり対象' },
  { title: 'ドラゴンクエストIV', platform: 'FC', value: '1,500円', detail: '『導きの書』とのセット商品は14,000円' },
  { title: 'ドラゴンクエストI・II', platform: 'SFC', value: '1,200円', detail: '外箱のみは300円' },
  { title: 'ドラゴンクエストIII そして伝説へ…', platform: 'SFC', value: '価格の掲載なし', detail: 'メールでの見積もり対象' },
  { title: 'ドラゴンクエストV 天空の花嫁', platform: 'SFC', value: '価格の掲載なし', detail: 'メールでの見積もり対象' },
  { title: 'ドラゴンクエストVI 幻の大地', platform: 'SFC', value: '価格の掲載なし', detail: 'メールでの見積もり対象' },
];

// 2026-10-30 駿河屋公式の買取検索でタイトル名を指定して再確認した価格（検索の多いドラクエ3・ドラクエ11・モンスターズ3）
const titleChecks = [
  {
    id: 'dq3',
    heading: 'ドラクエ3（HD-2D版）の買取価格',
    rows: [
      { edition: '通常版', platform: 'Switch', price: '1,600円' },
      { edition: '通常版', platform: 'PS5', price: '1,000円' },
      { edition: 'ブック型収納ボックス付き・勇者と旅の仲間コンプリートセット', platform: 'Switch／PS5', price: 'メールにてお見積' },
    ],
    note: '10月20日の確認時と同じ価格でした。限定版・セット商品は価格の掲載がなく、見積もりの扱いです。新品・ビニール未開封であれば、買取ルデヤではSwitch版が3,500円でした（10月19日確認）。',
  },
  {
    id: 'dq11',
    heading: 'ドラクエ11（XI S・無印）の買取価格',
    rows: [
      { edition: 'XI S', platform: 'Switch 2', price: '2,800円' },
      { edition: 'XI S', platform: 'Switch', price: '2,200円' },
      { edition: 'XI S 新価格版', platform: 'Switch', price: '2,200円' },
      { edition: 'XI S 夢のゴージャス版', platform: 'Switch', price: '5,300円' },
      { edition: 'XI S', platform: 'PS4', price: '1,500円' },
      { edition: '無印（S以前の版）', platform: 'PS4／3DS', price: 'メールにてお見積' },
    ],
    note: 'Switch版のXI Sは「価格上昇中」の表示があり、10月20日の2,000円から200円上がっていました。無印（2017年発売のPS4版・3DS版）は価格の掲載がなく、見積もりの扱いです。',
  },
  {
    id: 'dqm3',
    heading: 'ドラクエモンスターズ3の買取価格',
    rows: [
      { edition: '通常版', platform: 'Switch', price: '1,300円' },
      { edition: 'マスターズ版', platform: 'Switch', price: '1,100円' },
    ],
    note: '10月20日の確認時と同じ価格でした。中古品のマスターズ版は、駿河屋の商品名で「通常版と同じゲーム内容」と案内されています。',
  },
];

const faqs = [
  { q: 'ドラクエシリーズで最も高く売れるタイトルは何ですか？', a: '2026年10月20日の駿河屋公式では、現行機種のソフトではヒーローズI・II（Switch）の3,000円が最も高く、DQ3 HD-2DはSwitch版1,600円でした。レトロ作品ではFC版『ドラゴンクエスト』が7,500円（美品は18,000円）、FC版ドラゴンクエストIVと『導きの書』のセット商品が14,000円で、現行機種のソフトより高い買取価格の作品もあります。新品未開封の場合は、買取ルデヤでDQ3 HD-2D（Switch版）が3,500円でした。' },
  { q: 'ドラクエ3 HD-2Dリメイクはいつ売るべきですか？', a: '買取ルデヤの新品未開封の買取価格は、2026年6月14日の4,500円から10月19日には3,500円へと約22%下がっています（当編集部の定点確認）。続編にあたるHD-2D版『ドラゴンクエストI＆II』もすでに発売されており、DQ3の価格が今後上がる材料は見当たりません。遊び終えた場合は、早めの売却をおすすめします。' },
  { q: 'レトロドラクエ（FC・SFC）はどこで売るのが有利ですか？', a: 'レトロ作品は、買取店や作品によって買取価格の掲載状況が異なります。2026年10月20日の駿河屋公式の買取検索では、SFC版『ドラゴンクエストI・II』に1,200円（外箱のみは300円）の買取価格が掲載されていた一方、SFC版ドラゴンクエストVとFC版ドラゴンクエストIIIは価格の掲載がなく、メールでの見積もり対象でした。GB版ドラゴンクエストIIIは外箱のみ（700円）・説明書のみ（400円）にも個別の買取価格が付いており、付属品にも価値があります。価格が掲載されていない作品は、複数の店舗で見積もりを取って比較することをおすすめします。' },
  { q: 'ドラクエのSwitch版とPS版、どちらが高く売れますか？', a: '2026年10月20日の駿河屋公式で、同じタイトルのSwitch版とPS版の買取価格を比べた6組（DQ3 HD-2D、I＆II、VII Reimagined、Xオフライン、XI S、ビルダーズ2新価格版）では、すべてSwitch版が400〜800円高い結果でした。一方、Switch版とSwitch 2版の比較では、I＆IIとVII ReimaginedはSwitch 2版が200円安く、XI SはSwitch 2版が800円高い価格で、タイトルによって異なります。価格差の理由は買取店から公表されていないため、売却前に機種ごとの買取価格をご確認ください。' },
  { q: 'ドラクエのスピンオフ作品は売れますか？', a: 'はい、売却できます。2026年10月20日の駿河屋公式では、ヒーローズI・II（Switch）が3,000円で、当編集部が調べたドラクエ19件の中で最も高い買取価格でした。一方、モンスターズ3は1,300円（マスターズ版は1,100円）、ビルダーズ2の新価格版はSwitch版1,600円・PS4版800円、トレジャーズは500円で、同じスピンオフでも作品によって最大6倍の差があります。' },
  { q: 'ドラクエ12が発売されたら旧作の価格はどうなりますか？', a: '新作の発売で旧作の買取価格がどう動くかは、現時点で根拠をもって予測することはできません。参考として、2026年10月20日の駿河屋公式では、2025年10月発売の『ドラゴンクエストI＆II』（Switch版2,400円）が、2024年11月発売のDQ3 HD-2D（Switch版1,600円）や2026年2月発売の『ドラゴンクエストVII Reimagined』（Switch版2,100円）より高い買取価格でした。発売時期の新しさと買取価格は必ずしも一致しないため、売却を検討する際は、その時点の各社の買取価格をご確認ください。' },
];

export default function DragonQuestPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ドラクエの買取価格ランキング【2026年10月】ドラクエ3は1,600円・ドラクエ11 Sは2,200円｜駿河屋の実測", "datePublished": "2026-03-15", "dateModified": "2026-10-30", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'ドラクエ買取相場' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ソフト別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ドラクエシリーズの買取相場
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            「ドラゴンクエスト」シリーズの現行機種向けソフト19件の買取価格を、2026年10月20日に駿河屋公式で確認してランキングにしました。ドラクエ3・ドラクエ11・モンスターズ3は10月30日に再確認しています。買取ルデヤ・ブックオフとの店舗別の価格比較、レトロドラクエの価値についても解説します。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* タイトル別の買取価格（10/30 再確認） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ドラクエ3・ドラクエ11の買取価格【2026年10月30日・駿河屋公式】</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>検索の多いドラクエ3（HD-2D版）・ドラクエ11・モンスターズ3について、2026年10月30日に駿河屋公式の買取検索でタイトル名を指定して再確認しました。ドラクエ3はSwitch版1,600円・PS5版1,000円、ドラクエ11 SはSwitch版2,200円・Switch 2版2,800円です。</p>
          <nav className="flex flex-wrap gap-2 mb-6 text-xs">
            {titleChecks.map((t) => (
              <a key={t.id} href={`#${t.id}`} className="tag-pill">{t.heading}</a>
            ))}
          </nav>
          {titleChecks.map((t) => (
            <div key={t.id} id={t.id} className="mb-8">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>{t.heading}</h3>
              <div className="overflow-x-auto">
                <table className="comparison-table">
                  <thead>
                    <tr><th>版</th><th>機種</th><th>駿河屋の買取価格</th></tr>
                  </thead>
                  <tbody>
                    {t.rows.map((row) => (
                      <tr key={row.edition + row.platform}>
                        <td className="text-sm">{row.edition}</td>
                        <td className="text-sm">{row.platform}</td>
                        <td className="font-bold text-sm whitespace-nowrap" style={{ color: 'var(--color-electric-green)' }}>{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>{t.note}</p>
            </div>
          ))}
          <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋公式の買取検索（2026年10月30日閲覧）。表示は国内版の通常の買取価格で、美品・未開封の上乗せは含めていません。買取価格は日々変動します。下のランキングは10月20日に19件をまとめて確認した時点の価格です。</p>
        </section>

        {/* 全タイトル買取価格ランキング */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ドラクエ買取価格ランキング【2026年10月20日・駿河屋公式】</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>駿河屋公式の買取検索で、現行機種（Switch・Switch 2・PS5・PS4）のドラクエ国内版ソフト19件の買取価格を確認し、高い順に並べました。1位はスピンオフのヒーローズI・II（3,000円）で、HD-2D版ドラゴンクエストIIIはSwitch版1,600円・PS5版1,000円でした。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>順位</th>
                  <th>タイトル</th>
                  <th>機種</th>
                  <th>駿河屋の買取価格</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row, i) => (
                  <tr key={row.title + row.platform}>
                    <td className="text-sm text-center">{i + 1}</td>
                    <td className="font-bold text-sm">{row.title}</td>
                    <td className="text-sm">{row.platform}</td>
                    <td className="font-bold whitespace-nowrap" style={{ color: 'var(--color-electric-green)' }}>{row.price.toLocaleString()}円</td>
                    <td className="text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋公式の買取検索（2026年10月20日閲覧）。順位と価格差は当編集部が算出しました。表示は通常の買取価格で、美品・未開封の上乗せや海外版、限定版は備考に記載したもの以外含めていません。PS4版のドラゴンクエストX オフライン、ビルダーズ2の通常版（新価格版以外）、SFC版ドラゴンクエストV、FC版ドラゴンクエストIIIは、同日時点で価格の掲載がなく「メールにてお見積」の扱いでした。買取価格は日々変動し、ほかの買取店では価格が異なります。</p>
        </section>

        {/* 店舗別比較（公式価格の実測） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />店舗別 買取価格比較【2026年10月20日・各社公式】</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>駿河屋のほか、同じタイトルの買取価格を公式サイトで確認できた買取ルデヤ・ブックオフの価格を並べました。買取ルデヤは新品・ビニール未開封のみが対象のため、中古品の価格である駿河屋とは条件が異なります。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>タイトル</th><th>機種</th><th>駿河屋（通常の買取価格）</th><th>ほかの買取店（条件）</th></tr>
              </thead>
              <tbody>
                {shopComparison.map((row) => (
                  <tr key={row.title + row.platform}>
                    <td className="font-bold text-sm">{row.title}</td>
                    <td className="text-sm">{row.platform}</td>
                    <td className="font-bold text-sm whitespace-nowrap" style={{ color: 'var(--color-electric-green)' }}>{row.suruga.toLocaleString()}円</td>
                    <td className="text-sm">{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋公式の買取検索、買取ルデヤ公式の買取検索、ブックオフ公式「ゲームの高価買取情報」（いずれも2026年10月20日閲覧。ブックオフの掲載は同年10月15日更新分）。新品未開封の買取ルデヤは、駿河屋の約1.3〜2.4倍でした（VII ReimaginedのSwitch 2版が2.4倍）。DQ11 SのSwitch 2版は駿河屋（2,800円）がブックオフ（2,500円）より300円高い価格でした。ゲオ公式の買取価格ページは同日に当編集部の環境から閲覧できなかったため、掲載していません。</p>
        </section>

        {/* レトロドラクエの買取価格 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />レトロドラクエの買取価格【2026年10月20日・駿河屋公式】</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>タイトル</th>
                  <th>機種</th>
                  <th>駿河屋の買取価格</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {retroDQValues.map((row) => (
                  <tr key={row.title + row.platform}>
                    <td className="font-bold text-sm">{row.title}</td>
                    <td className="text-sm">{row.platform}</td>
                    <td className="font-bold whitespace-nowrap" style={{ color: 'var(--color-electric-green)' }}>{row.value}</td>
                    <td className="text-sm">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋公式の買取検索（2026年10月20日閲覧）。「価格の掲載なし」の作品は、同日時点で買取価格が表示されず「メールにてお見積」の扱いでした。箱・説明書の有無など買取の条件は、駿河屋公式の案内をご確認ください。</p>
        </section>

        {/* 実測データから分かること */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />実測データから分かること【2026年10月20日】</h2>
          <div className="glass-card p-6">
            <ul className="text-sm space-y-2" style={{ color: 'var(--color-text-light)' }}>
              <li>・発売が新しい作品ほど高いとは限りません。駿河屋のSwitch版では、2025年10月発売のI＆II（2,400円）が、2026年2月発売のVII Reimagined（2,100円）や2024年11月発売のDQ3 HD-2D（1,600円）より高い価格でした。</li>
              <li>・スピンオフ作品でも価格の差が大きく、ヒーローズI・II（3,000円）とトレジャーズ（500円）では6倍の差があります。</li>
              <li>・限定版・セット商品は通常版より高い価格でした（Xオフライン超デラックス版5,500円／通常版2,300円、XI S 夢のゴージャス版5,300円／通常版2,000円、FC版IV＋『導きの書』セット14,000円／単品1,500円）。</li>
              <li>・新品未開封の場合、買取ルデヤの買取価格は駿河屋の約1.3〜2.4倍でした。また、当編集部の定点確認では、買取ルデヤのDQ3 HD-2D（新品未開封）は2026年6月14日の4,500円から10月19日には3,500円に下がっています。</li>
            </ul>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>いずれも特定の日の公開価格にもとづく比較で、今後の価格の動きを示すものではありません。</p>
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

        <p className="text-xs mt-8 text-center" style={{ color: 'var(--color-text-light)' }}>最終更新: 2026年10月30日</p>
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
