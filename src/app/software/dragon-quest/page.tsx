import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ドラクエの買取価格【2026年11月】ドラクエ11 Sは2,400円・ドラクエ3は1,600円｜駿河屋とゲオの実測比較',
  description:
    'ドラクエ11 SはSwitch版2,400円・Switch 2版2,800円、ドラクエ3（HD-2D）はSwitch版1,600円です（2026年11月15日・駿河屋公式）。ゲオ宅配買取の最高買取価格との比較、シリーズ19件のランキング、無印ドラクエ11やレトロ作品の価格も掲載しています。',
  keywords: ['ドラクエ11s 買取', 'ドラクエ11 買取価格', 'ドラクエ3 買取価格', 'ドラクエ 買取価格 ゲオ', 'ドラゴンクエスト 買取'],
  openGraph: {
    images: ['/og.png'],
    title: 'ドラクエの買取価格【2026年11月】ドラクエ11 Sは2,400円・ドラクエ3は1,600円｜駿河屋とゲオの実測比較',
    description: 'ドラクエのソフトの買取価格を駿河屋公式とゲオ宅配買取で実測し、タイトル・機種別に比較しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

// 2026-11-15 駿河屋公式の買取検索で確認した国内版の通常の買取価格（美品・未開封の上乗せ前）。高い順。価格が「メールにてお見積」の商品は含めていません
const priceData = [
  { title: 'ドラゴンクエストヒーローズI・II for Nintendo Switch', platform: 'Switch', price: 3100, note: '10月20日は3,000円' },
  { title: 'ドラゴンクエストXI 過ぎ去りし時を求めて S', platform: 'Switch 2', price: 2800, note: 'Switch版（2,400円）より400円高い' },
  { title: 'ドラゴンクエストI＆II', platform: 'Switch', price: 2600, note: '「価格上昇中」の表示。10月20日は2,400円' },
  { title: 'ドラゴンクエストX 目覚めし五つの種族 オフライン［通常版］', platform: 'Switch', price: 2500, note: '「価格上昇中」の表示。デラックス版は2,200円、超デラックス版は5,500円' },
  { title: 'ドラゴンクエストXI 過ぎ去りし時を求めて S', platform: 'Switch', price: 2400, note: '「価格上昇中」の表示。ゴージャス版は2,300円、夢のゴージャス版は5,300円' },
  { title: 'ドラゴンクエストI＆II', platform: 'Switch 2', price: 2200, note: 'Switch版より400円安い' },
  { title: 'ドラゴンクエストXI 過ぎ去りし時を求めて S 新価格版', platform: 'Switch', price: 2200, note: '' },
  { title: 'ドラゴンクエストVII Reimagined', platform: 'Switch', price: 1900, note: '10月20日は2,100円' },
  { title: 'ドラゴンクエストVII Reimagined', platform: 'Switch 2', price: 1900, note: 'Switch版と同額' },
  { title: 'ドラゴンクエストX 目覚めし五つの種族 オフライン［通常版］', platform: 'PS5', price: 1900, note: 'デラックス版も同額' },
  { title: 'ドラゴンクエストIII そして伝説へ… HD-2D版', platform: 'Switch', price: 1600, note: '10月20日・30日と同額' },
  { title: 'ドラゴンクエストI＆II', platform: 'PS5', price: 1600, note: '' },
  { title: 'ドラゴンクエストビルダーズ2 破壊神シドーとからっぽの島 新価格版', platform: 'Switch', price: 1600, note: '' },
  { title: 'ドラゴンクエストXI 過ぎ去りし時を求めて S', platform: 'PS4', price: 1600, note: '10月20日は1,500円。PS4版の無印（S以前の版）は価格の掲載なし' },
  { title: 'ドラゴンクエストVII Reimagined', platform: 'PS5', price: 1500, note: '' },
  { title: 'ドラゴンクエストモンスターズ3 魔族の王子とエルフの旅［通常版］', platform: 'Switch', price: 1300, note: 'マスターズ版は1,100円' },
  { title: 'ドラゴンクエストIII そして伝説へ… HD-2D版', platform: 'PS5', price: 1000, note: 'Switch版より600円安い' },
  { title: 'ドラゴンクエストビルダーズ2 破壊神シドーとからっぽの島 新価格版', platform: 'PS4', price: 1000, note: '10月20日は800円' },
  { title: 'ドラゴンクエスト トレジャーズ 蒼き瞳と大空の羅針盤', platform: 'Switch', price: 600, note: '「価格上昇中」の表示。10月20日は500円' },
];

// 駿河屋公式の買取検索で、同じ商品を 2026-10-20・10-30・11-15 に確認して価格が動いたもの（10-30 は一部タイトルのみ確認）
const priceChanges = [
  { title: 'ドラゴンクエストXI S', platform: 'Switch', d1020: '2,000円', d1030: '2,200円', d1115: '2,400円' },
  { title: 'ドラゴンクエストXI S', platform: 'PS4', d1020: '1,500円', d1030: '1,500円', d1115: '1,600円' },
  { title: 'ドラゴンクエストXI S ゴージャス版', platform: 'Switch', d1020: '2,200円', d1030: '—', d1115: '2,300円' },
  { title: 'ドラゴンクエストI＆II', platform: 'Switch', d1020: '2,400円', d1030: '—', d1115: '2,600円' },
  { title: 'ドラゴンクエストX オフライン［通常版］', platform: 'Switch', d1020: '2,300円', d1030: '—', d1115: '2,500円' },
  { title: 'ドラゴンクエストヒーローズI・II', platform: 'Switch', d1020: '3,000円', d1030: '—', d1115: '3,100円' },
  { title: 'ドラゴンクエストビルダーズ2 新価格版', platform: 'PS4', d1020: '800円', d1030: '—', d1115: '1,000円' },
  { title: 'ドラゴンクエスト トレジャーズ', platform: 'Switch', d1020: '500円', d1030: '—', d1115: '600円' },
  { title: 'ドラゴンクエストVII Reimagined', platform: 'Switch', d1020: '2,100円', d1030: '—', d1115: '1,900円' },
];

// 2026-11-15 駿河屋公式の買取検索と、ゲオの宅配買取（buy.geo-online.co.jp）の「最高買取価格」を同日に確認
const geoComparison = [
  { title: 'ドラゴンクエストXI S', platform: 'Switch', suruga: '2,400円', geo: '2,500円' },
  { title: 'ドラゴンクエストXI S', platform: 'Switch 2', suruga: '2,800円', geo: '2,500円' },
  { title: 'ドラゴンクエストXI S', platform: 'PS4', suruga: '1,600円', geo: '2,500円' },
  { title: 'ドラゴンクエストXI S ゴージャス版', platform: 'Switch', suruga: '2,300円', geo: '2,500円' },
  { title: 'ドラゴンクエストXI S 夢のゴージャス版', platform: 'Switch', suruga: '5,300円', geo: '3,800円' },
  { title: 'ドラゴンクエストXI（無印）', platform: 'PS4', suruga: 'メールにてお見積', geo: '100円' },
  { title: 'ドラゴンクエストXI（無印）', platform: '3DS', suruga: 'メールにてお見積', geo: '50円' },
  { title: 'ドラゴンクエストIII HD-2D版', platform: 'Switch', suruga: '1,600円', geo: '1,500円' },
  { title: 'ドラゴンクエストIII HD-2D版', platform: 'PS5', suruga: '1,000円', geo: '1,300円' },
  { title: 'ドラゴンクエストI＆II', platform: 'Switch', suruga: '2,600円', geo: '2,000円' },
  { title: 'ドラゴンクエストI＆II', platform: 'Switch 2', suruga: '2,200円', geo: '1,500円' },
  { title: 'ドラゴンクエストI＆II', platform: 'PS5', suruga: '1,600円', geo: '2,000円' },
  { title: 'ドラゴンクエストVII Reimagined', platform: 'Switch', suruga: '1,900円', geo: '2,500円' },
  { title: 'ドラゴンクエストVII Reimagined', platform: 'Switch 2', suruga: '1,900円', geo: '1,500円' },
  { title: 'ドラゴンクエストVII Reimagined', platform: 'PS5', suruga: '1,500円', geo: '2,000円' },
  { title: 'ドラゴンクエストX オフライン［通常版］', platform: 'Switch', suruga: '2,500円', geo: '2,500円' },
  { title: 'ドラゴンクエストX オフライン［通常版］', platform: 'PS5', suruga: '1,900円', geo: '1,000円' },
  { title: 'ドラゴンクエストモンスターズ3［通常版］', platform: 'Switch', suruga: '1,300円', geo: '1,000円' },
  { title: 'ドラゴンクエストヒーローズI・II', platform: 'Switch', suruga: '3,100円', geo: '3,000円' },
  { title: 'ドラゴンクエスト トレジャーズ', platform: 'Switch', suruga: '600円', geo: '100円' },
  { title: 'ドラゴンクエストモンスターズ ジョーカー3 プロフェッショナル', platform: '3DS', suruga: '5,000円', geo: '3,000円' },
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

// 駿河屋公式の買取検索で確認したレトロ・旧機種の国内版ソフトの買取価格（2026-11-15 確認。FC版III・IVのみ 2026-10-20 確認）。ゲオは同日の宅配買取の最高買取価格
const retroDQValues = [
  { title: 'ドラゴンクエスト', platform: 'FC', value: '7,500円', detail: '美品は18,000円、外箱のみは1,600円' },
  { title: 'ドラゴンクエストII', platform: 'FC', value: '2,200円', detail: '' },
  { title: 'ドラゴンクエストIII', platform: 'FC', value: '価格の掲載なし', detail: 'メールでの見積もり対象（10月20日確認）' },
  { title: 'ドラゴンクエストIV', platform: 'FC', value: '1,500円', detail: '『導きの書』とのセット商品は14,000円（10月20日確認）' },
  { title: 'ドラゴンクエストI・II', platform: 'SFC', value: '1,200円', detail: '外箱のみは300円' },
  { title: 'ドラゴンクエストIII そして伝説へ…', platform: 'SFC', value: '価格の掲載なし', detail: 'メールでの見積もり対象' },
  { title: 'ドラゴンクエストV 天空の花嫁', platform: 'SFC', value: '価格の掲載なし', detail: 'メールでの見積もり対象' },
  { title: 'ドラゴンクエストVI 幻の大地', platform: 'SFC', value: '価格の掲載なし', detail: 'メールでの見積もり対象' },
  { title: 'トルネコの大冒険3アドバンス', platform: 'GBA', value: '7,000円', detail: '「価格上昇中」の表示。美品は8,400円、外箱のみは1,400円' },
  { title: 'トルネコの大冒険3 ～不思議のダンジョン～', platform: 'PS2', value: '1,800円', detail: '「価格上昇中」の表示' },
  { title: 'ドラゴンクエストVIII 空と海と大地と呪われし姫君', platform: '3DS', value: '2,400円', detail: 'ゲオ宅配買取は3,000円。PS2版は価格の掲載なし' },
  { title: 'ドラゴンクエストV 天空の花嫁', platform: 'DS', value: '1,800円', detail: 'ゲオ宅配買取は2,000円' },
  { title: 'ドラゴンクエストIV 導かれし者たち', platform: 'DS', value: '800円', detail: 'ゲオ宅配買取は1,000円' },
  { title: 'ドラゴンクエストVI 幻の大地', platform: 'DS', value: '750円', detail: 'ゲオ宅配買取は500円' },
];

// 2026-11-15 駿河屋公式の買取検索でタイトル名を指定して確認した価格（検索の多いドラクエ11・ドラクエ3・モンスターズ3）
const titleChecks = [
  {
    id: 'dq11',
    heading: 'ドラクエ11（XI S・無印）の買取価格',
    rows: [
      { edition: 'XI S', platform: 'Switch 2', price: '2,800円' },
      { edition: 'XI S', platform: 'Switch', price: '2,400円' },
      { edition: 'XI S 新価格版', platform: 'Switch', price: '2,200円' },
      { edition: 'XI S ゴージャス版', platform: 'Switch', price: '2,300円' },
      { edition: 'XI S 夢のゴージャス版', platform: 'Switch', price: '5,300円' },
      { edition: 'XI S', platform: 'PS4', price: '1,600円' },
      { edition: '無印 ダブルパック 勇者のつるぎボックス', platform: 'PS4＋3DS', price: '3,900円' },
      { edition: '無印（S以前の版）', platform: 'PS4／3DS', price: 'メールにてお見積' },
    ],
    note: 'Switch版のXI Sは「価格上昇中」の表示があり、10月20日の2,000円、10月30日の2,200円から2,400円に上がっていました。PS4版のXI Sも1,500円から1,600円に上がっています。無印（2017年発売のPS4版・3DS版）の単品は価格の掲載がなく、見積もりの扱いでした。PS4版と3DS版をセットにした「ダブルパック 勇者のつるぎボックス」には3,900円の価格が表示されていました。',
  },
  {
    id: 'dq3',
    heading: 'ドラクエ3（HD-2D版）の買取価格',
    rows: [
      { edition: '通常版', platform: 'Switch', price: '1,600円' },
      { edition: '通常版', platform: 'PS5', price: '1,000円' },
      { edition: 'SFC版（1996年）・GB版（2000年）', platform: 'SFC／GB', price: 'メールにてお見積' },
    ],
    note: '10月20日・30日の確認時と同じ価格でした。新品・ビニール未開封であれば、買取ルデヤではSwitch版が3,500円でした（10月19日確認）。',
  },
  {
    id: 'dqm3',
    heading: 'ドラクエモンスターズ3の買取価格',
    rows: [
      { edition: '通常版', platform: 'Switch', price: '1,300円' },
      { edition: 'マスターズ版', platform: 'Switch', price: '1,100円' },
      { edition: 'ジョーカー3 プロフェッショナル', platform: '3DS', price: '5,000円' },
    ],
    note: '10月20日・30日の確認時と同じ価格でした。中古品のマスターズ版は、駿河屋の商品名で「通常版と同じゲーム内容」と案内されています。3DS版のジョーカー3 プロフェッショナルは「価格上昇中」の表示がありました。2026年12月3日発売予定の『ドラゴンクエストモンスターズ4 枯れ木の国のビアンカ・フローラ』は、11月15日時点では全機種「メールにてお見積」の扱いです。',
  },
];

const faqs = [
  { q: 'ドラクエ11 Sの買取価格はいくらですか？', a: '2026年11月15日の駿河屋公式の買取検索では、通常の買取価格がSwitch版2,400円、Switch 2版2,800円、PS4版1,600円、Switch版の新価格版2,200円、ゴージャス版2,300円、夢のゴージャス版5,300円でした。同じ日のゲオの宅配買取の最高買取価格は、Switch版・Switch 2版・PS4版・ゴージャス版がいずれも2,500円、夢のゴージャス版が3,800円です。どちらが高いかは機種と版によって異なるため、売却前に両方の価格をご確認ください。' },
  { q: '無印のドラクエ11（PS4・3DS）は売れますか？', a: '2026年11月15日時点で、駿河屋公式では無印のPS4版・3DS版とも単品の価格が掲載されておらず「メールにてお見積」の扱いでした。ゲオの宅配買取の最高買取価格はPS4版100円・3DS版50円です。駿河屋では、PS4版と3DS版をセットにした「ダブルパック 勇者のつるぎボックス」に3,900円の価格が表示されていました。' },
  { q: 'ゲオではドラクエはいくらで売れますか？', a: '2026年11月15日にゲオの宅配買取サイト（ゲオの買取）で確認した最高買取価格は、ドラクエ11 SがSwitch版・Switch 2版・PS4版とも2,500円、ドラクエ3（HD-2D版）がSwitch版1,500円・PS5版1,300円、I＆IIがSwitch版・PS5版2,000円、VII ReimaginedがSwitch版2,500円でした。ゲオのガイドラインでは、宅配買取の価格はゲオの店頭の買取価格とは同一ではないと定められています。店頭の買取価格を掲載する公式ページは同日に閲覧できず、確認できませんでした。' },
  { q: 'ドラクエシリーズで最も高く売れるタイトルは何ですか？', a: '2026年11月15日の駿河屋公式では、現行機種のソフトではヒーローズI・II（Switch）の3,100円が最も高く、次いでドラクエ11 SのSwitch 2版が2,800円でした。限定版では、Xオフライン超デラックス版が5,500円、XI S 夢のゴージャス版が5,300円です。3DSのモンスターズ ジョーカー3 プロフェッショナルも5,000円で、旧機種のソフトでも現行機種より高い作品があります。' },
  { q: 'ドラクエ3 HD-2Dリメイクはいつ売るべきですか？', a: '駿河屋のSwitch版の買取価格は、2026年10月20日・10月30日・11月15日の3回とも1,600円で変わっていません。一方、買取ルデヤの新品未開封の買取価格は、6月14日の4,500円から10月19日には3,500円へと約22%下がっていました（当編集部の定点確認）。価格が上がる根拠は確認できていないため、遊び終えた場合は、その時点の各社の価格を比べて早めに売却することをおすすめします。' },
  { q: 'レトロドラクエ（FC・SFC）はどこで売るのが有利ですか？', a: 'レトロ作品は、買取店や作品によって買取価格の掲載状況が異なります。2026年11月15日の駿河屋公式の買取検索では、SFC版『ドラゴンクエストI・II』に1,200円（外箱のみは300円）、FC版『ドラゴンクエストII』に2,200円の買取価格が掲載されていた一方、SFC版・GB版のドラゴンクエストIIIは価格の掲載がなく、メールでの見積もり対象でした。価格が掲載されていない作品は、複数の店舗で見積もりを取って比較することをおすすめします。' },
  { q: 'ドラクエのSwitch版とPS版、どちらが高く売れますか？', a: '2026年11月15日の駿河屋公式で、同じタイトルのSwitch版とPS版の買取価格を比べた6組（DQ3 HD-2D、I＆II、VII Reimagined、Xオフライン、XI S、ビルダーズ2新価格版）では、すべてSwitch版が400〜1,000円高い結果でした。ゲオの宅配買取の最高買取価格では、I＆IIとXI SはSwitch版とPS版が同額で、差の大きさは店舗によって異なります。価格差の理由は買取店から公表されていないため、売却前に機種ごとの価格をご確認ください。' },
  { q: 'ドラクエのスピンオフ作品は売れますか？', a: 'はい、売却できます。2026年11月15日の駿河屋公式では、ヒーローズI・II（Switch）が3,100円で、当編集部が調べた現行機種のドラクエ19件の中で最も高い買取価格でした。一方、モンスターズ3は1,300円（マスターズ版は1,100円）、ビルダーズ2の新価格版はSwitch版1,600円・PS4版1,000円、トレジャーズは600円で、同じスピンオフでも作品によって約5倍の差があります。' },
];

export default function DragonQuestPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ドラクエの買取価格【2026年11月】ドラクエ11 Sは2,400円・ドラクエ3は1,600円｜駿河屋とゲオの実測比較", "datePublished": "2026-03-15", "dateModified": "2026-11-15", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'ドラクエ買取相場' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ソフト別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ドラクエの買取価格・相場<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>ドラクエ11 S・ドラクエ3・シリーズ19件を駿河屋とゲオで比較（2026年11月）</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            2026年11月15日に駿河屋公式の買取検索で確認した通常の買取価格は、ドラクエ11 SがSwitch版2,400円・Switch 2版2,800円・PS4版1,600円、ドラクエ3（HD-2D版）がSwitch版1,600円・PS5版1,000円です。同じ日にゲオの宅配買取で表示された最高買取価格は、ドラクエ11 SがSwitch版・Switch 2版・PS4版とも2,500円、ドラクエ3がSwitch版1,500円・PS5版1,300円でした。無印のドラクエ11（PS4・3DS）は、駿河屋では価格の掲載がなく、ゲオではPS4版100円・3DS版50円です。当サイトでは、シリーズ19件のランキング、10月からの価格の動き、レトロドラクエの価格もあわせて掲載しています。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* タイトル別の買取価格（11/15 確認） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ドラクエ11・ドラクエ3の買取価格【2026年11月15日・駿河屋公式】</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>検索の多いドラクエ11・ドラクエ3（HD-2D版）・モンスターズ3について、2026年11月15日に駿河屋公式の買取検索でタイトル名を指定して確認しました。ドラクエ11 SはSwitch版2,400円・Switch 2版2,800円、ドラクエ3はSwitch版1,600円・PS5版1,000円です。</p>
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
          <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>出典：<a href="https://www.suruga-ya.jp/kaitori/kaitori.html" target="_blank" rel="noopener noreferrer nofollow" className="underline">駿河屋公式の買取検索</a>（2026年11月15日閲覧）。表示は国内版の通常の買取価格で、美品・未開封の上乗せは含めていません。駿河屋の表示価格は完品（付属品あり）かつ状態良好の場合の価格で、宅配買取では通信買取手数料（660〜990円）が差し引かれます。買取価格は日々変動します。</p>
        </section>

        {/* ゲオとの比較 */}
        <section className="mb-12" id="geo">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ドラクエの買取価格をゲオと比較【2026年11月15日・各社公式】</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>ゲオの宅配買取サイト（ゲオの買取）で「ドラゴンクエスト」を検索し、表示された最高買取価格を、同じ日の駿河屋の買取価格と並べました。両社の価格を比べられる19組のうち、駿河屋が高いものが11組、ゲオが高いものが7組、同額が1組で、どちらが高いかはタイトルと機種によって異なります。ドラクエ11 SのPS4版はゲオ（2,500円）が駿河屋（1,600円）より900円高く、夢のゴージャス版は駿河屋（5,300円）がゲオ（3,800円）より1,500円高い結果でした。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>タイトル</th><th>機種</th><th>駿河屋（通常の買取価格）</th><th>ゲオ宅配買取（最高買取価格）</th></tr>
              </thead>
              <tbody>
                {geoComparison.map((row) => (
                  <tr key={row.title + row.platform}>
                    <td className="font-bold text-sm">{row.title}</td>
                    <td className="text-sm">{row.platform}</td>
                    <td className="text-sm whitespace-nowrap">{row.suruga}</td>
                    <td className="text-sm whitespace-nowrap">{row.geo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：<a href="https://buy.geo-online.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline">ゲオの買取（宅配買取）</a>の検索結果、駿河屋公式の買取検索（いずれも2026年11月15日閲覧）。ゲオの宅配買取のガイドラインでは、買取価格は査定日の価格が基準となり、セカンドリテイリンググループの店舗（ゲオの店頭）の買取価格とは同一ではないと定められています。このため、表のゲオの価格は店頭買取の価格ではありません。また、サイト上の価格は参考価格で、申込品の買取価格を保証するものではないとされています。送料以外の手数料はかからないと定められています。ゲオの店頭の買取価格を掲載している公式ページ（geo-online.co.jp）は、同日に当編集部の環境から閲覧できず（403エラー）、確認できませんでした。</p>
        </section>

        {/* 10月からの価格の動き */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />10月からの買取価格の動き【駿河屋公式・当編集部の定点確認】</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>当編集部が2026年10月20日・10月30日・11月15日に駿河屋公式の買取検索で確認した価格のうち、変動があった商品をまとめました。ドラクエ11 SのSwitch版は約1か月で2,000円から2,400円に上がっています。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>タイトル</th><th>機種</th><th>10月20日</th><th>10月30日</th><th>11月15日</th></tr>
              </thead>
              <tbody>
                {priceChanges.map((row) => (
                  <tr key={row.title + row.platform}>
                    <td className="font-bold text-sm">{row.title}</td>
                    <td className="text-sm">{row.platform}</td>
                    <td className="text-sm whitespace-nowrap">{row.d1020}</td>
                    <td className="text-sm whitespace-nowrap">{row.d1030}</td>
                    <td className="font-bold text-sm whitespace-nowrap" style={{ color: 'var(--color-electric-green)' }}>{row.d1115}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋公式の買取検索（2026年10月20日・10月30日・11月15日閲覧）。「—」は10月30日に確認していない商品です。ドラクエ3（HD-2D版）・モンスターズ3・ドラクエ11 SのSwitch 2版は3回とも同じ価格でした。過去の価格の動きは、今後の価格を示すものではありません。</p>
        </section>

        {/* 全タイトル買取価格ランキング */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ドラクエ買取価格ランキング【2026年11月15日・駿河屋公式】</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>駿河屋公式の買取検索で、現行機種（Switch・Switch 2・PS5・PS4）のドラクエ国内版ソフト19件の買取価格を確認し、高い順に並べました。1位はスピンオフのヒーローズI・II（3,100円）で、2位はドラクエ11 SのSwitch 2版（2,800円）でした。HD-2D版ドラゴンクエストIIIはSwitch版1,600円・PS5版1,000円です。</p>
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
          <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋公式の買取検索（2026年11月15日閲覧）。順位と価格差は当編集部が算出しました。同額の商品は順不同です。表示は通常の買取価格で、美品・未開封の上乗せや海外版、限定版は備考に記載したもの以外含めていません。PS4版のドラゴンクエストX オフライン（通常版・デラックス版）と、ビルダーズ2の通常版（新価格版以外、Switch・PS4）は、同日時点で価格の掲載がなく「メールにてお見積」の扱いでした。買取価格は日々変動し、ほかの買取店では価格が異なります。</p>
        </section>

        {/* 店舗別比較（公式価格の実測） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />買取ルデヤ・ブックオフとの比較【2026年10月20日時点・各社公式】</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>2026年10月20日に、駿河屋のほか、同じタイトルの買取価格を公式サイトで確認できた買取ルデヤ・ブックオフの価格を並べました。駿河屋の価格も10月20日時点のもので、11月15日の価格は上のランキングをご覧ください。買取ルデヤは新品・ビニール未開封のみが対象のため、中古品の価格である駿河屋とは条件が異なります。</p>
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
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋公式の買取検索、買取ルデヤ公式の買取検索、ブックオフ公式「ゲームの高価買取情報」（いずれも2026年10月20日閲覧。ブックオフの掲載は同年10月15日更新分）。新品未開封の買取ルデヤは、駿河屋の約1.3〜2.4倍でした（VII ReimaginedのSwitch 2版が2.4倍）。DQ11 SのSwitch 2版は駿河屋（2,800円）がブックオフ（2,500円）より300円高い価格でした。ゲオの宅配買取の価格は、11月15日に確認した<a href="#geo" className="underline">ゲオとの比較</a>に掲載しています。</p>
        </section>

        {/* レトロドラクエの買取価格 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />レトロ・旧機種ドラクエの買取価格【2026年11月15日・駿河屋公式】</h2>
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
          <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋公式の買取検索（2026年11月15日閲覧。FC版ドラゴンクエストIII・IVは10月20日閲覧で、11月15日は検索で該当商品を確認できていません）、ゲオの買取（宅配買取）の検索結果（2026年11月15日閲覧）。「価格の掲載なし」の作品は、確認時点で買取価格が表示されず「メールにてお見積」の扱いでした。駿河屋の減額基準リストでは、箱・説明書などの必須付属品の欠品は大幅な減額対象とされています。FC版ドラゴンクエスト・FC版II・SFC版I・IIの価格は、10月20日の確認時と同じでした。</p>
        </section>

        {/* 実測データから分かること */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />実測データから分かること【2026年11月15日】</h2>
          <div className="glass-card p-6">
            <ul className="text-sm space-y-2" style={{ color: 'var(--color-text-light)' }}>
              <li>・発売が新しい作品ほど高いとは限りません。駿河屋のSwitch版では、2025年10月発売のI＆II（2,600円）が、2026年2月発売のVII Reimagined（1,900円）や2024年11月発売のDQ3 HD-2D（1,600円）より高い価格でした。2019年発売のXI S（2,400円）もVII Reimaginedより高い価格です。</li>
              <li>・スピンオフ作品でも価格の差が大きく、ヒーローズI・II（3,100円）とトレジャーズ（600円）では約5倍の差があります。</li>
              <li>・限定版・セット商品は通常版より高い価格でした（Xオフライン超デラックス版5,500円／通常版2,500円、XI S 夢のゴージャス版5,300円／通常版2,400円、XI ダブルパック 勇者のつるぎボックス3,900円／無印単品は価格の掲載なし）。</li>
              <li>・駿河屋とゲオの宅配買取を比べると、同じタイトルでも機種によって高い店が入れ替わります。VII ReimaginedはSwitch版・PS5版ではゲオが高く、Switch 2版では駿河屋が高い価格でした。</li>
              <li>・新品未開封の場合、10月20日時点で買取ルデヤの買取価格は駿河屋の約1.3〜2.4倍でした。また、当編集部の定点確認では、買取ルデヤのDQ3 HD-2D（新品未開封）は2026年6月14日の4,500円から10月19日には3,500円に下がっています。</li>
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

        <p className="text-xs mt-8 text-center" style={{ color: 'var(--color-text-light)' }}>最終更新: 2026年11月15日</p>
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
