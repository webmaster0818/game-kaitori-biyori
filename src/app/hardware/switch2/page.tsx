import FuruichiCta from '@/components/FuruichiCta';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PriceMatrix } from '@/components/PriceIndex';
import { hardwarePrices, HARDWARE_SURVEY_DATE } from '@/data/prices';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'Switch2 買取価格｜日本語版・多言語版・セット別に5店の公式価格を比較（2026年10月20日実測）',
  description:
    'Switch2の買取価格を5店の公式掲載価格で2026年10月20日に実測しました。日本語・国内専用版は新品未開封49,000円（ルデヤ）、中古も対象の店舗で35,000〜38,000円、多言語版は82,600円（ルデヤ）／60,000円（駿河屋）。セット別価格と店ごとの条件も掲載しています。',
  keywords: ['switch2 買取価格', 'switch2 相場', 'switch2 買取', 'switch2 本体 買取価格', 'switch2 多言語版 買取価格', 'switch2 新品 買取価格'],
  openGraph: {
    images: ['/og.png'],
    title: 'Switch2 買取価格｜5店の公式価格をモデル別に比較（2026年10月20日実測）',
    description: 'Switch 2本体（日本語版・多言語版・各セット）の買取価格を5店の公式ページで実測し、条件の違いとあわせて比較しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const switch2Overview = [
  { item: '正式名称', detail: 'Nintendo Switch 2' },
  { item: '発売日', detail: '2025年6月5日（日本含む全世界同時発売）' },
  { item: '現在の定価', detail: '日本語・国内専用版 59,980円（2026年5月25日に49,980円から値上げ）／多言語対応版 69,980円' },
  { item: '主なモデル', detail: '国内専用版／多言語対応版（Nintendo Storeのみで販売）／マリオカート ワールドセット（生産終了）／Pokémon LEGENDS Z-A Edition（生産終了）／スプラトゥーン レイダース セット（2026年7月23日発売・64,980円）／ゼルダの伝説 40周年 アニバーサリーエディション（2026年10月29日発売予定・62,980円）' },
  { item: '主な特徴', detail: '大型ディスプレイ、マグネット式Joy-Con 2、後方互換対応' },
  { item: '後方互換', detail: 'Nintendo Switchの物理/ダウンロードソフトに対応' },
];

// 2026年10月20日に各社公式買取ページで実測した Switch 2 本体の買取価格（null=掲載なし／価格非公表）
// ルデヤ=検索結果の新品未開封価格(12:09時点) / 駿河屋=公式買取検索の掲載価格 / ラクウル=買取アイテム検索の参考価格(画像表示を目視) / ふるいち=Switch2高価買取情報の買取上限金額 / ブックオフ=高価買取リスト(店頭価格・10/15更新表記)
const SWITCH2_SURVEY_DATE = '2026年10月20日';
const switch2BuybackPrices: { model: string; code: string; rudeya: number | null; surugaya: number | null; rakuuru: number | null; furuichi: number | null; bookoff: number | null }[] = [
  { model: '日本語・国内専用', code: 'BEE-S-KB6CA', rudeya: 49000, surugaya: 38000, rakuuru: 36000, furuichi: 36000, bookoff: 35000 },
  { model: '多言語対応', code: 'BEE-S-KB6AA', rudeya: 82600, surugaya: 60000, rakuuru: null, furuichi: null, bookoff: null },
  { model: 'マリオカート ワールド セット', code: 'BEE-S-KB6PA', rudeya: 58500, surugaya: 38000, rakuuru: 36000, furuichi: 36000, bookoff: null },
  { model: 'Pokémon LEGENDS Z-A セット', code: 'BEE-S-KB6PC', rudeya: 56000, surugaya: 39000, rakuuru: 36000, furuichi: null, bookoff: null },
  { model: 'スプラトゥーン レイダース セット', code: 'BEE-S-KB6PE', rudeya: 51000, surugaya: 37000, rakuuru: 36000, furuichi: null, bookoff: null },
];
const yen = (v: number | null) => (v == null ? '—' : `${v.toLocaleString('ja-JP')}円`);
const switch2Stores = [
  { name: '買取ルデヤ', cond: '新品・未開封のみ（印有減額なし）', url: 'https://kaitori-rudeya.com/' },
  { name: '駿河屋', cond: '公式買取検索の掲載価格。状態による価格区分の表示なし（査定で変動）', url: 'https://www.suruga-ya.jp/kaitori/kaitori.html' },
  { name: 'ソフマップ（ラクウル）', cond: '買取アイテム検索の参考価格。状態・付属品により変動', url: 'https://raku-uru.sofmap.com/search/product_list.aspx?gid=009240110010' },
  { name: '古本市場（ふるいち）', cond: '高価買取情報の買取上限金額。査定結果で決定', url: 'https://www.furu1.net/kaitori/sell_game/switch2' },
  { name: 'ブックオフ', cond: '高価買取リストの店舗買取価格（最終更新日 2026年10月15日の表記）。店舗により異なる', url: 'https://www.bookoff.co.jp/selllist/game/index.html' },
];

const judgmentCriteria = [
  {
    scenario: '早めの売却をおすすめする方',
    conditions: [
      'Switch 2の購入を予定している',
      '旧型Switchを通常モデル・Liteで使用中',
      '手持ちのソフトの大半がダウンロード版',
      '少しでも高い買取価格を得たい',
    ],
    reason: '中古品の買取価格は、一般に時間の経過とともに下がる傾向があります。遊ばなくなった旧型は、状態がよいうちに複数店の価格を確認して売却することをおすすめします。',
  },
  {
    scenario: '売却を急がなくてもよい方',
    conditions: [
      '有機ELモデルを使用中で満足している',
      'まだ遊びたいSwitchのソフトがある',
      'Switch 2の対応ソフトが充実するまで待ちたい',
    ],
    reason: '2026年10月15日の実測では、有機ELモデルは旧型の中で買取価格が最も高い水準でした（ゲオ25,000円）。使い続ける予定があれば急ぐ必要はありませんが、遊び終えた時点で早めに売却することをおすすめします。',
  },
  {
    scenario: '保管をおすすめする方',
    conditions: [
      '限定版・特別デザインのSwitchを所有',
      'コレクションとして保管したい',
      '箱・付属品を完品で保管している限定モデル',
    ],
    reason: '限定版のSwitchはコレクター需要があり、通常版より高い価格が提示される場合があります。ただし将来の価格は保証されないため、完品で保管しつつ定期的に買取価格を確認することをおすすめします。',
  },
];

const tips = [
  { title: '箱・付属品を完備して査定に出す', description: '箱・Joy-Con・ドック・ACアダプター・HDMIケーブルの欠品は減額の対象になります。減額幅は店舗ごとに異なり、公表されていない場合が多いため、付属品をそろえてから査定に出すことをおすすめします。' },
  { title: '本体を清掃・初期化してから売る', description: '画面の汚れやJoy-Conの汚れを拭き取り、本体を初期化してから査定に出すことをおすすめします。外観の印象により査定額が変わります。' },
  { title: '複数社で査定を比較する', description: '1社のみで決めず、複数社の査定額を比較することをおすすめします。ヒカカク！では最大20社に一括で査定を申し込めるため、最高値を効率よく確認できます。' },
  { title: 'ソフトやコントローラーもまとめて売る', description: 'Switch 2に後方互換があるとはいえ、ソフトもまとめて売ればボーナス査定がつく業者もあります。不要なソフトはまとめて売却することをおすすめします。' },
];

const services = [
  { name: 'ヒカカク！', feature: '最大20社一括査定', area: '全国対応', method: '出張買取・宅配買取・店舗買取', point: '複数業者の競争により最高値を狙えます。Switchの売却に特に適しています。' },
  { name: '買取ウリエル', feature: '出張買取・即日現金化', area: '東京・神奈川・千葉・埼玉（ゲーム）', method: '出張買取', point: '自宅で査定を受け、その場で現金化できます。Switch 2の購入資金にすぐ充てられます。' },
  { name: 'ティファナ', feature: '店舗+宅配買取', area: '東京近郊', method: '店舗・宅配', point: 'ゲーム周辺機器もまとめて売却できます。Switch本体とソフトのセット売却に適しています。' },
];

const faqs = [
  { q: 'Switch 2の発売後、旧型Switchの買取価格はどうなっていますか？', a: '当サイトが2026年10月15日に各社公式ページで実測した旧型Switchの買取価格は、有機ELモデルがゲオ25,000円・駿河屋16,000円、通常モデル（ネオン）がゲオ17,000円・駿河屋12,000円、Liteがゲオ15,000円・駿河屋10,000円でした（ページ下部の定期実測表を参照）。店舗による差が大きいため、複数店の価格を確認してから売却することをおすすめします。' },
  { q: 'Switch 2に後方互換があるなら旧型を売っても問題ありませんか？', a: 'はい、Switch 2はNintendo Switchのソフト（物理・ダウンロード両方）に後方互換があるため、旧型を売ってもSwitch 2でこれまでのソフトを引き続きプレイできます。ダウンロード版はニンテンドーアカウントに紐づいているため、Switch 2で再ダウンロード可能です。' },
  { q: '限定版のSwitchも値下がりしますか？', a: '限定版・特別デザインのSwitchは、モデルによって買取価格の動きが異なります。生産終了後に通常版より高い価格が提示される例もありますが、将来の価格を確実に予測することはできません。売却を検討する場合は、売却直前に各社の公式買取ページで価格をご確認ください。' },
  { q: 'Joy-Conを売却してSwitch 2用に買い替えてもよいですか？', a: 'Switch 2のJoy-Conはマグネット式に変更されているため、旧型Joy-Conはそのまま装着できません（別売りアタッチメントが必要）。旧型Joy-Conを使い続ける予定がなければ、本体と一緒に売却するほうが査定額の面で有利です。' },
  { q: 'Switch 2はいつ発売ですか？定価はいくらですか？', a: 'Nintendo Switch 2は2025年6月5日に日本を含む全世界で同時発売されました。発売時の価格は国内専用版49,980円（税込）でしたが、2026年5月25日に59,980円へ値上げされています。多言語対応版は69,980円です。' },
  { q: 'Switch 2本体の買取価格は今いくらですか？', a: '2026年10月20日に各社公式ページで実測した日本語・国内専用版の買取価格は、買取ルデヤ49,000円（新品・未開封のみ）、駿河屋38,000円、ソフマップ（ラクウル）36,000円、ふるいち36,000円、ブックオフ35,000円（店頭）でした。多言語対応版はルデヤ82,600円（新品・未開封）、駿河屋60,000円です。店ごとに対象の状態が異なり、価格は日々変動するため、売却の直前に各社の公式買取ページにてご確認ください。' },
  { q: 'Switch 2の多言語版の買取価格はいくらですか？', a: '2026年10月20日の実測では、多言語対応版（BEE-S-KB6AA）は買取ルデヤが82,600円（新品・未開封のみ）、駿河屋が60,000円でした。ソフマップ（ラクウル）・ふるいち・ブックオフでは同日の公開リストに多言語版の掲載はありませんでした。多言語対応版は任天堂のNintendo Storeのみで販売されており（希望小売価格69,980円）、ルデヤの新品価格は希望小売価格を上回っています。' },
  { q: '定価の値上げでSwitch 2の買取価格は上がりましたか？', a: '店舗によって動きが異なります。当サイトの実測では、日本語・国内専用版の買取ルデヤ（新品・未開封）は2026年6月12日の47,000円から10月20日には49,000円に上がった一方、ふるいちの掲載価格は46,000円から36,000円に下がっています。値上げ（2026年5月25日、49,980円→59,980円）だけで買取価格が決まるわけではないため、売却時点の価格をご確認ください。' },
];

export default function Switch2Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Switch2 買取価格｜日本語版・多言語版・セット別に5店の公式価格を比較", "datePublished": "2026-05-19", "dateModified": "2026-10-20", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'Switch 2 買取価格' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(239,68,68,0.2)', color: '#F87171' }}>特集</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            Switch2の買取価格<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>日本語版・多言語版・セット別に5店の公式価格を比較（2026年10月20日実測）</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            Switch 2本体（日本語・国内専用）の買取価格は、2026年10月20日の実測で新品未開封49,000円（買取ルデヤ）、中古も対象とする店舗の公開価格で35,000〜38,000円でした。多言語版は82,600円（ルデヤ新品）／60,000円（駿河屋）です。5店の公式掲載価格と条件の違い、旧型Switchの売却判断をまとめています。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
        <FuruichiCta variant="strip" />
        </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Switch 2 Buyback Prices（2026-10-20 実測） */}
        <section className="mb-12" id="price">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />Switch2の買取価格（5店の公式掲載価格・{SWITCH2_SURVEY_DATE}実測）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            {SWITCH2_SURVEY_DATE}に、各店の公式買取ページに掲載されているSwitch 2本体の買取価格を確認しました。新品・未開封のみを対象とする買取ルデヤが最も高く、日本語・国内専用版は49,000円（希望小売価格59,980円の81.7%）でした。開封済み・中古も対象とする店舗の公開価格は35,000〜38,000円で、最も高いのは駿河屋の38,000円です。店ごとに対象となる状態が異なるため、同じ条件の価格同士でご比較ください。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>モデル（型番）</th>
                  <th>買取ルデヤ<br /><span className="text-xs font-normal">新品未開封のみ</span></th>
                  <th>駿河屋</th>
                  <th>ソフマップ<br /><span className="text-xs font-normal">ラクウル</span></th>
                  <th>ふるいち</th>
                  <th>ブックオフ<br /><span className="text-xs font-normal">店頭</span></th>
                </tr>
              </thead>
              <tbody>
                {switch2BuybackPrices.map((row) => (
                  <tr key={row.code}>
                    <td className="font-bold text-sm">{row.model}<br /><span className="text-xs font-normal">{row.code}</span></td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(row.rudeya)}</td>
                    <td className="text-sm">{yen(row.surugaya)}</td>
                    <td className="text-sm">{yen(row.rakuuru)}</td>
                    <td className="text-sm">{yen(row.furuichi)}</td>
                    <td className="text-sm">{yen(row.bookoff)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>「—」は{SWITCH2_SURVEY_DATE}の公開ページに価格の掲載がないことを示します。ゼルダの伝説 40周年 アニバーサリーエディション（2026年10月29日発売予定）は、ルデヤが60,000円（申込一時停止中）、駿河屋は「メールにてお見積」の表示でした。ゲオは公式オンラインサービスが2026年10月17日からメンテナンスで停止しており、価格を確認できなかったため掲載していません。</p>
          <div className="overflow-x-auto mt-6">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>店舗</th>
                  <th>掲載価格の条件</th>
                  <th>出典（公式）</th>
                </tr>
              </thead>
              <tbody>
                {switch2Stores.map((s) => (
                  <tr key={s.name}>
                    <td className="font-bold text-sm">{s.name}</td>
                    <td className="text-sm">{s.cond}</td>
                    <td className="text-sm"><a href={s.url} target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>公式買取ページ</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>実測から分かること</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>新品未開封のみの価格と中古も対象の価格で約1.1万円の差：</span>日本語・国内専用版は、ルデヤの新品未開封49,000円に対し、中古も対象とする店舗の最高値は駿河屋の38,000円でした。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>多言語版は国内版より高値：</span>多言語対応版はルデヤ82,600円（希望小売価格69,980円の118.0%）、駿河屋60,000円で、いずれも国内版を2万円以上上回りました。多言語対応版はNintendo Storeのみの販売です。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>セットの上乗せは新品で大きい：</span>ルデヤではマリオカート ワールド セットが58,500円と本体単体より9,500円高い一方、駿河屋・ソフマップ・ふるいちでは本体単体とセットの差が0〜1,000円でした。</li>
            </ul>
          </div>
          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>価格に影響している要因</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>
                <span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>① 2026年5月25日の定価値上げ：</span>
                任天堂は国内専用版の希望小売価格を49,980円から59,980円に改定しました（2026年5月8日発表）。当サイトの実測では、ルデヤの新品未開封価格は6月12日の47,000円から10月20日の49,000円に上がった一方、ふるいちの掲載価格は46,000円から36,000円に下がっており、店舗によって動きが異なります。
              </li>
              <li>
                <span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>② 同梱版の生産終了：</span>
                マリオカート ワールドセットとPokémon LEGENDS Z-A Editionは生産終了しています。新品未開封の買取では、ルデヤがマリオカート ワールド セット58,500円・Z-A セット56,000円と、本体単体（49,000円）より高い価格を提示しています。
              </li>
            </ul>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：任天堂 価格改定リリース（2026年5月8日）、<a href="https://www.nintendo.com/jp/hardware/switch2/lineup/index.html" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>任天堂公式 商品ラインナップ</a>（{SWITCH2_SURVEY_DATE}確認）、各店の公式買取ページ（{SWITCH2_SURVEY_DATE}実測）</p>
          </div>
        </section>

        {/* Switch 2 Overview */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />Nintendo Switch 2とは</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            Nintendo Switch 2は、2025年6月5日に発売された任天堂の次世代ゲーム機です。旧型Switchとの後方互換を備えつつ、大幅な性能向上が図られています。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>詳細</th>
                </tr>
              </thead>
              <tbody>
                {switch2Overview.map((row) => (
                  <tr key={row.item}>
                    <td className="font-bold">{row.item}</td>
                    <td>{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：任天堂公式 商品ラインナップ、任天堂ニュースリリース（2026年9月8日・ゼルダの伝説 40周年 アニバーサリーエディション）。{SWITCH2_SURVEY_DATE}確認</p>
        </section>

        {/* Judgment Criteria */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />売却時期の判断基準</h2>
          <div className="space-y-6">
            {judgmentCriteria.map((item) => (
              <div key={item.scenario} className="glass-card p-6">
                <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>{item.scenario}</h3>
                <ul className="space-y-2 mb-4">
                  {item.conditions.map((cond) => (
                    <li key={cond} className="text-sm flex items-start gap-2" style={{ color: 'var(--color-text-light)' }}>
                      <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-electric-green)' }} />
                      {cond}
                    </li>
                  ))}
                </ul>
                <p className="text-sm p-3 rounded-lg" style={{ background: 'var(--color-bg-alt)', color: 'var(--color-text-light)' }}>{item.reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />旧型Switchを高く売るための5つのコツ</h2>
          <div className="space-y-4">
            {tips.map((tip, i) => (
              <div key={tip.title} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{tip.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Comparison */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />おすすめ買取サービス3選</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>サービス</th>
                  <th>特徴</th>
                  <th>対応エリア</th>
                  <th>買取方法</th>
                  <th>おすすめポイント</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.name}>
                    <td className="font-bold">{s.name}</td>
                    <td>{s.feature}</td>
                    <td>{s.area}</td>
                    <td>{s.method}</td>
                    <td className="text-sm">{s.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            旧型Switchを<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>で売却するために
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            Switch 2へ乗り換える場合は、旧型を少しでも高く売却し、Switch 2の購入資金に充てることをおすすめします。
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
            <Link href="/hardware/switch/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Nintendo Switch買取ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>モデル別の買取相場・高く売るコツ</p>
            </Link>
            <Link href="/hardware/ps5/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PlayStation 5</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS5の買取相場・高く売るコツ</p>
            </Link>
            <Link href="/compare/shop-vs-online/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>店舗 vs 宅配買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>どちらが有利かを比較</p>
            </Link>
          </div>
          <h3 className="font-bold mb-4 mt-8" style={{ color: 'var(--color-deep-blue)' }}>Switch 2を高く売る業者・状態別の査定</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/review/kaitori-world/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取ワールドの評判</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>Switch 2本体に強みのある宅配買取の実態</p>
            </Link>
            <Link href="/review/uriel/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ウリエルの評判</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>本体の高額買取で名前が挙がる店</p>
            </Link>
            <Link href="/condition-guide/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>状態別 買取許容度マップ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なし・傷ありの場合の減額目安</p>
            </Link>
          </div>
        </section>
              {/* 本体実測価格（定期実測・2026-07-04開始） */}
      <section className="mb-12">
        <h2 className="section-heading mb-6"><span className="section-heading-bar" />Switch・Switch 2本体の店舗別 買取価格【定期実測】</h2>
        <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>当サイトが各社公式買取ページで実測した本体の参考買取価格です（{HARDWARE_SURVEY_DATE.replace(/-/g, '/')}調査・完品前提）。最新の全機種比較は<Link href="/price-index/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>価格インデックス</Link>をご覧ください。</p>
        <PriceMatrix list={hardwarePrices.filter((h) => h.title.includes('Switch'))} />
      </section>

      <AuthorBox />
      </div>
    </>
  );
}
