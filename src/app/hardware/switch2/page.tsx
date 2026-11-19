import FuruichiCta from '@/components/FuruichiCta';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PriceMatrix } from '@/components/PriceIndex';
import { hardwarePrices, HARDWARE_SURVEY_DATE } from '@/data/prices';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'Switch2 買取価格｜未開封はルデヤ51,500円、5店の公式価格をモデル別に比較【2026年11月15日実測】',
  description:
    'Switch2の買取価格を5店の公式ページで2026年11月15日に確認しました。日本語・国内専用版は新品未開封51,500円（買取ルデヤ）、未開封に限定しない店舗は35,000〜37,000円、多言語版は83,200円です。店舗印・付属品など未開封の条件も掲載しています。',
  keywords: ['switch2 買取価格', 'switch2 買取価格 未開封', 'switch2 新品未開封 買取', 'ルデヤ switch2', '買取ルデヤ switch2', 'switch2 多言語版 買取価格'],
  openGraph: {
    images: ['/og.png'],
    title: 'Switch2 買取価格｜未開封はルデヤ51,500円、5店の公式価格をモデル別に比較【2026年11月15日実測】',
    description: 'Switch2の買取価格を5店の公式ページで2026年11月15日に確認しました。日本語・国内専用版は新品未開封51,500円（買取ルデヤ）、未開封に限定しない店舗は35,000〜37,000円、多言語版は83,200円です。店舗印・付属品など未開封の条件も掲載しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const switch2Overview = [
  { item: '正式名称', detail: 'Nintendo Switch 2' },
  { item: '発売日', detail: '2025年6月5日（日本含む全世界同時発売）' },
  { item: '現在の定価', detail: '日本語・国内専用版 59,980円（2026年5月25日に49,980円から値上げ）／多言語対応版 69,980円' },
  { item: '主なモデル', detail: '国内専用版／多言語対応版（Nintendo Storeのみで販売）／マリオカート ワールドセット（生産終了）／Pokémon LEGENDS Z-A Edition（生産終了）／スプラトゥーン レイダース セット（2026年7月23日発売・64,980円）／ゼルダの伝説 40周年 アニバーサリーエディション（2026年10月29日発売・62,980円）' },
  { item: '主な特徴', detail: '大型ディスプレイ、マグネット式Joy-Con 2、後方互換対応' },
  { item: '後方互換', detail: 'Nintendo Switchの物理/ダウンロードソフトに対応' },
];

// 2026年11月15日に各社公式買取ページで再取得した Switch 2 本体の買取価格（null=掲載なし／'unchecked'=前回調査時に未確認）
// ルデヤ=カテゴリ「Nintendo Switch 2」の新品価格(16:03時点表示) / 駿河屋=公式買取検索の掲載価格 / ふるいち=Switch2高価買取情報の買取上限金額 / ブックオフ=高価買取リスト(店舗価格・11/12更新表記)
// ラクウル=11/15はシステムメンテナンス中で確認できず、2026年11月16日に買取アイテム検索（スイッチ2 本体・税込の参考価格）で再取得
const SWITCH2_SURVEY_DATE = '2026年11月15日';
const RAKUURU_DATE = '2026年11月16日';
const PREV_SURVEY_DATE = '2026年10月20日';
type Cell = number | null | 'unchecked';
const switch2BuybackPrices: { model: string; code: string; rudeya: Cell; surugaya: Cell; rakuuru: Cell; furuichi: Cell; bookoff: Cell }[] = [
  { model: '日本語・国内専用', code: 'BEE-S-KB6CA', rudeya: 51500, surugaya: 37000, rakuuru: 36000, furuichi: 36000, bookoff: 35000 },
  { model: '多言語対応', code: 'BEE-S-KB6AA', rudeya: 83200, surugaya: 60000, rakuuru: null, furuichi: null, bookoff: null },
  { model: 'マリオカート ワールド セット', code: 'BEE-S-KB6PA', rudeya: 58500, surugaya: 38000, rakuuru: 36000, furuichi: 36000, bookoff: null },
  { model: 'Pokémon LEGENDS Z-A セット', code: 'BEE-S-KB6PC', rudeya: 56200, surugaya: 39000, rakuuru: 36000, furuichi: null, bookoff: null },
  { model: 'スプラトゥーン レイダース セット', code: 'BEE-S-KB6PE', rudeya: 51000, surugaya: 37000, rakuuru: 36000, furuichi: null, bookoff: null },
  { model: 'ゼルダの伝説 40周年 アニバーサリーエディション', code: 'BEE-S-KL6CC', rudeya: 55000, surugaya: 53000, rakuuru: 45000, furuichi: null, bookoff: null },
  { model: '選べるソフトセット', code: 'BEE-S-KB6MA', rudeya: 58000, surugaya: 37000, rakuuru: null, furuichi: null, bookoff: null },
];
const yen = (v: Cell) => (v === 'unchecked' ? '未確認' : v == null ? '—' : `${v.toLocaleString('ja-JP')}円`);
const switch2Stores = [
  { name: '買取ルデヤ', cond: 'Switch 2カテゴリの掲載はすべて「新品」の価格。本体は「印有減額無し」の表記', date: '2026年11月15日 16時03分の表示', url: 'https://kaitori-rudeya.com/category/detail/214' },
  { name: '駿河屋', cond: '公式買取検索の掲載価格。状態による価格区分の表示なし（付属品欠品・傷み等は減額基準リストに従い減額）', date: '2026年11月15日', url: 'https://www.suruga-ya.jp/kaitori/search_buy?search_word=BEE-S-KB6CA' },
  { name: 'ソフマップ（ラクウル）', cond: '買取アイテム検索の参考価格（税込）。状態区分の表示なし。表示金額は目安で、商品状態・付属品の有無など査定の結果で決定', date: `${RAKUURU_DATE}（11月15日はシステムメンテナンス中で確認できず、翌日に再取得）`, url: 'https://raku-uru.sofmap.com/search/product_list.aspx?gid=009240110010' },
  { name: '古本市場（ふるいち）', cond: '高価買取情報の買取上限金額。査定結果で決定', date: '2026年11月15日', url: 'https://www.furu1.net/kaitori/sell_game/switch2' },
  { name: 'ブックオフ', cond: '高価買取リストの店舗買取価格。店舗により異なる', date: '2026年11月15日確認（ページの最終更新日 2026年11月12日）', url: 'https://www.bookoff.co.jp/selllist/game/index.html' },
];

// 買取ルデヤの公式ページ（2026年11月15日確認）で確認できた Switch 2 の買取条件
const rudeyaConditions = [
  { item: '対象の状態', detail: 'Switch 2カテゴリに掲載されている本体価格はすべて「新品」です。よくある質問では「基本的に新品・未開封の商品を対象」とし、「Nintendo Switch本体に限り、中古品であっても買取」と記載していますが、Switch 2の中古価格はカテゴリページに掲載されていません。' },
  { item: '店舗印（保証書の印）', detail: '本体7モデルはいずれも「印有減額無し」の表記です。店舗印は「保証書に購入店舗の名称と購入日が記載された印」と定義されています。' },
  { item: '購入レシート', detail: 'レシートの提出を求める記載は確認できませんでした。利用規約には、レシートや店舗購入特典など買取商品以外の同梱物は検品時に破棄し、返却しない旨が記載されています。' },
  { item: '選べるソフトセット', detail: '「引換券無し、引換券削り済み買取不可」の表記があります。' },
  { item: '外箱の傷・凹み', detail: '不備箇所の写真とJANコードをメールで送ると減額の目安を案内し、実際の金額は到着後の査定で決まると記載されています。' },
  { item: '検品時の開封', detail: '利用規約に、検品時に未開封品を開封して使用形跡を確認する場合があると記載されています。' },
  { item: '店頭買取', detail: '池袋・秋葉原・新宿・赤羽・川崎・大宮の6店です。来店前に会員登録と買取リクエストが必要で、価格は承認連絡の時点のものが承認当日中の来店に限り保証されます。川崎店は現金の用意がなく銀行振込です。' },
  { item: '郵送買取', detail: '承認連絡の時点の価格が適用され、承認当日中に翌日午前中着指定で発送する必要があります（遠方は翌々日午前中着まで保証）。送料は利用者負担（元払い）で、発行から3か月以内の住民票の原本が必要です。' },
  { item: 'その他', detail: '18歳未満（高校生を含む）からの買取は受け付けていません。整備済み品・展示品は対象外です。振込手数料はルデヤ負担です。' },
];

// 各店の公式ページで確認できた「未開封」「状態」に関する条件（2026年11月15日確認）
const unopenedConditions = [
  { store: '買取ルデヤ', price: '新品の価格のみ掲載', cond: '本体は「印有減額無し」。シュリンク（外装フィルム）の有無についての記載は確認できませんでした。外箱の傷・凹みは写真で減額の目安を案内。', url: 'https://kaitori-rudeya.com/faq' },
  { store: '駿河屋', price: '状態区分なし（1価格）', cond: '必須付属品・同梱特典の欠品、本体・付属品・パッケージの傷み・汚れ・日焼けは減額対象。ゲーム機本体は内蔵電池切れも減額対象。', url: 'https://www.suruga-ya.jp/man/hyou/kaitorihin.html' },
  { store: '古本市場（ふるいち）', price: '買取上限金額を掲載', cond: '上限金額は常に変動し、発売時期やバージョンにより同一商品でも上限金額が適用されない場合があると記載。未開封に関する条件の記載は確認できませんでした。', url: 'https://www.furu1.net/kaitori/sell_game/switch2' },
  { store: 'ソフマップ（ラクウル）', price: '参考価格を掲載（状態区分なし）', cond: '商品ページに「表示金額は目安であり、買取代金を保証するものではありません。買取代金は商品状態、付属品の有無など査定の結果で決定されます」と記載。未開封に関する条件の記載は確認できませんでした（2026年11月16日確認）。', url: 'https://raku-uru.sofmap.com/search/product_detail.aspx?rsku=101545304&jan=4902370553024' },
  { store: 'ブックオフ', price: '店舗の買取価格を掲載', cond: '店舗により買取価格が異なり、予告なく変更する場合があると記載。未開封に関する条件の記載は確認できませんでした。', url: 'https://www.bookoff.co.jp/selllist/game/index.html' },
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
    reason: '2026年11月18日の実測では、有機ELモデルは旧型の中で買取価格が最も高い水準でした（ゲオ25,000円）。使い続ける予定があれば急ぐ必要はありませんが、遊び終えた時点で早めに売却することをおすすめします。',
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
  { name: 'ティファナ', feature: '店舗買取（宅配は一時停止中）', area: '東京近郊', method: '店舗（宅配は一時停止中）', point: 'ゲーム周辺機器もまとめて売却できます。Switch本体とソフトのセット売却に適しています。' },
];

const faqs = [
  { q: 'Switch 2の発売後、旧型Switchの買取価格はどうなっていますか？', a: '当サイトが2026年11月18日に各社公式ページで実測した旧型Switchの買取価格は、有機ELモデル（ホワイト）がゲオ25,000円・駿河屋13,000円、通常モデル（ネオン）がゲオ17,000円・駿河屋12,000円、Liteがゲオ15,000円・駿河屋10,000円でした（ページ下部の定期実測表を参照）。店舗による差が大きいため、複数店の価格を確認してから売却することをおすすめします。' },
  { q: 'Switch 2に後方互換があるなら旧型を売っても問題ありませんか？', a: 'はい、Switch 2はNintendo Switchのソフト（物理・ダウンロード両方）に後方互換があるため、旧型を売ってもSwitch 2でこれまでのソフトを引き続きプレイできます。ダウンロード版はニンテンドーアカウントに紐づいているため、Switch 2で再ダウンロード可能です。' },
  { q: '限定版のSwitchも値下がりしますか？', a: '限定版・特別デザインのSwitchは、モデルによって買取価格の動きが異なります。生産終了後に通常版より高い価格が提示される例もありますが、将来の価格を確実に予測することはできません。売却を検討する場合は、売却直前に各社の公式買取ページで価格をご確認ください。' },
  { q: 'Joy-Conを売却してSwitch 2用に買い替えてもよいですか？', a: 'Switch 2のJoy-Conはマグネット式に変更されているため、旧型Joy-Conはそのまま装着できません（別売りアタッチメントが必要）。旧型Joy-Conを使い続ける予定がなければ、本体と一緒に売却するほうが査定額の面で有利です。' },
  { q: 'Switch 2はいつ発売ですか？定価はいくらですか？', a: 'Nintendo Switch 2は2025年6月5日に日本を含む全世界で同時発売されました。発売時の価格は国内専用版49,980円（税込）でしたが、2026年5月25日に59,980円へ値上げされています。多言語対応版は69,980円です。' },
  { q: 'Switch 2本体の買取価格は今いくらですか？', a: '2026年11月15日に各社公式ページで確認した日本語・国内専用版の買取価格は、買取ルデヤ51,500円（新品）、駿河屋37,000円、ふるいち36,000円（買取上限金額）、ブックオフ35,000円（店舗価格）でした。ソフマップ（ラクウル）は同日システムメンテナンス中だったため11月16日に確認し、36,000円（参考価格）でした。多言語対応版はルデヤ83,200円（新品）、駿河屋60,000円です。店ごとに対象の状態が異なり、価格は日々変動するため、売却の直前に各社の公式買取ページにてご確認ください。' },
  { q: 'Switch 2の多言語版の買取価格はいくらですか？', a: '2026年11月15日の確認では、多言語対応版（BEE-S-KB6AA）は買取ルデヤが83,200円（新品）、駿河屋が60,000円でした。ふるいち・ブックオフでは同日の公開リストに多言語版の掲載はありませんでした（ソフマップ（ラクウル）も11月16日の買取アイテム検索で多言語版の掲載なし）。多言語対応版は任天堂のNintendo Storeのみで販売されており（希望小売価格69,980円）、ルデヤの新品価格は希望小売価格を上回っています。' },
  { q: '定価の値上げでSwitch 2の買取価格は上がりましたか？', a: '店舗によって動きが異なります。当サイトの実測では、日本語・国内専用版の買取ルデヤ（新品）は2026年6月12日の47,000円から10月20日に49,000円、11月15日に51,500円へ上がった一方、ふるいちの掲載価格は6月12日の46,000円から11月15日には36,000円に下がっています。値上げ（2026年5月25日、49,980円→59,980円）だけで買取価格が決まるわけではないため、売却時点の価格をご確認ください。' },
  { q: '買取ルデヤのSwitch 2の買取価格はいくらですか？', a: '2026年11月15日16時03分時点の買取ルデヤ公式ページでは、新品の日本語・国内専用版が51,500円、多言語版が83,200円、マリオカート ワールド セットが58,500円、選べるソフトセットが58,000円、Pokémon LEGENDS Z-A セットが56,200円、ゼルダの伝説 40周年 アニバーサリーエディションが55,000円、スプラトゥーン レイダース セットが51,000円でした。いずれも「印有減額無し」の表記です。利用には会員登録と買取リクエストが必要で、価格は承認連絡の時点のものが適用されます。' },
  { q: 'Switch 2は未開封と開封済みで買取価格がどのくらい違いますか？', a: '同じ店舗で未開封と開封済みの価格を両方公開している店は、当サイトが確認した5店にはありませんでした。2026年11月15日の日本語・国内専用版では、新品の価格のみを掲載する買取ルデヤが51,500円、新品未開封に限定する記載のない駿河屋・ふるいち・ブックオフが35,000〜37,000円で、差は14,500〜16,500円です。開封済みの品は店舗の査定で状態・付属品により価格が決まるため、この差は目安としてご覧ください。' },
  { q: '保証書に店舗印があると減額されますか？', a: '買取ルデヤでは、2026年11月15日時点でSwitch 2本体7モデルすべてに「印有減額無し」と表記されています。同社は店舗印を「保証書に購入店舗の名称と購入日が記載された印」と定義し、ゲーム関連商品は「店舗印あり・減額なし」となるケースが多いと案内しています。他の4店の公開ページでは店舗印に関する記載を確認できなかったため、売却前に各店へご確認ください。' },
  { q: 'Switch 2を売る前に初期化は必要ですか？', a: '必要です。任天堂の公式サポートは、Nintendo Switch 2本体を他の人に譲ったり廃棄したりするときには必ず初期化するよう案内しています。インターネットに接続せずに初期化すると「バーチャルゲームカードを利用できる本体」の登録が消去されないため、インターネットに接続できる環境で初期化してください。microSD Expressカードに保存されているソフトのデータも初期化後は使えなくなります。' },
];

export default function Switch2Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Switch2 買取価格｜未開封はルデヤ51,500円、5店の公式価格をモデル別に比較", "datePublished": "2026-05-19", "dateModified": "2026-11-16", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'Switch 2 買取価格' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(239,68,68,0.2)', color: '#F87171' }}>特集</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            Switch2の買取価格<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>未開封・開封済みの差と5店の公式価格をモデル別に比較【2026年11月15日実測】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            Switch 2本体（日本語・国内専用）の買取価格は、2026年11月15日の確認で新品51,500円（買取ルデヤ・印有減額無し）、新品未開封に限定する記載のない店舗の公開価格で35,000〜37,000円でした。多言語版は83,200円（ルデヤ新品）／60,000円（駿河屋）です。5店の公式掲載価格、未開封の条件、買取ルデヤの利用条件をまとめています。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：2026年11月16日（価格は2026年11月15日に各店の公式ページで確認。ソフマップ（ラクウル）のみ11月16日）</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
        <FuruichiCta variant="strip" />
        </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 結論（1画面目） */}
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：未開封なら買取ルデヤ、開封済みは状態区分のない店舗の価格が目安です</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>買取ルデヤ（新品）：</span>日本語・国内専用版51,500円、多言語版83,200円、マリオカート ワールド セット58,500円（{SWITCH2_SURVEY_DATE} 16時03分の公式ページ表示）。本体はいずれも「印有減額無し」で、保証書に購入店舗の印があっても減額されない表記です。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>未開封と開封済みの差：</span>日本語・国内専用版では、新品のみ掲載のルデヤ51,500円に対し、新品未開封に限定する記載のない駿河屋・ふるいち・ブックオフは35,000〜37,000円で、差は14,500〜16,500円です（目安）。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>未開封の条件：</span>5店の公開ページでは、シュリンク（外装フィルム）の有無を条件とする記載は確認できませんでした。ルデヤは店舗印による減額なし、駿河屋は付属品・同梱特典の欠品や箱の傷みを減額対象としています。詳しくは<a href="#unopened" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>未開封の条件</a>と<a href="#rudeya" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>買取ルデヤの条件</a>をご覧ください。</li>
          </ul>
        </section>

        {/* Switch 2 Buyback Prices（2026-11-15 再取得） */}
        <section className="mb-12" id="price">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />Switch2の買取価格（5店の公式掲載価格・{SWITCH2_SURVEY_DATE}実測）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            {SWITCH2_SURVEY_DATE}に、各店の公式買取ページに掲載されているSwitch 2本体の買取価格を確認しました。新品の価格のみを掲載する買取ルデヤが最も高く、日本語・国内専用版は51,500円（希望小売価格59,980円の85.9%）でした。新品未開封に限定する記載のない店舗の公開価格は35,000〜37,000円で、最も高いのは駿河屋の37,000円です。店ごとに対象となる状態が異なるため、同じ条件の価格同士でご比較ください。ソフマップ（ラクウル）は同日システムメンテナンス中で確認できなかったため、{RAKUURU_DATE}に再取得した値を掲載しています（日本語・国内専用版と同梱セット3種は10月20日と同じ36,000円）。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>モデル（型番）</th>
                  <th>買取ルデヤ<br /><span className="text-xs font-normal">新品</span></th>
                  <th>駿河屋</th>
                  <th>ソフマップ<br /><span className="text-xs font-normal">ラクウル・{RAKUURU_DATE}</span></th>
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
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>「—」は確認日の公開ページに価格の掲載がないことを示します（ソフマップ（ラクウル）列は{RAKUURU_DATE}時点。ラクウルの「スイッチ2 本体」カテゴリの掲載は5モデルで、多言語版・選べるソフトセットは掲載がありませんでした）。ラクウルのゼルダの伝説 40周年 アニバーサリーエディション（45,000円）は、前回は調査対象に含めておらず、今回初めて掲載しました。ラクウルの期間限定キャンペーン「冬に備えよう！買取祭！」のPS4ソフトのページには、Switch 2本体3モデルを例に「査定金額より1,000円増額」とする表示がありますが、本体についての対象条件・期間の説明が見当たらないため、表の価格には含めていません。ゼルダの伝説 40周年 アニバーサリーエディションは、前回（{PREV_SURVEY_DATE}）はルデヤ60,000円（申込一時停止中）、駿河屋「メールにてお見積」の表示でした。選べるソフトセットは駿河屋の掲載上の発売日が2026年11月12日で、ルデヤは「引換券無し、引換券削り済み買取不可」の条件付きです。モンスターハンターワイルズ セット（BEE-S-KB6PF）は、ルデヤが「価格未掲載」、駿河屋が「メールにてお見積」の表示でした。</p>
          <div className="overflow-x-auto mt-6">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>店舗</th>
                  <th>掲載価格の条件</th>
                  <th>確認日</th>
                  <th>出典（公式）</th>
                </tr>
              </thead>
              <tbody>
                {switch2Stores.map((s) => (
                  <tr key={s.name}>
                    <td className="font-bold text-sm">{s.name}</td>
                    <td className="text-sm">{s.cond}</td>
                    <td className="text-sm">{s.date}</td>
                    <td className="text-sm"><a href={s.url} target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>公式買取ページ</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>実測から分かること</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>新品のみの価格と状態区分のない価格で1.45万円以上の差：</span>日本語・国内専用版は、ルデヤの新品51,500円に対し、新品未開封に限定する記載のない店舗の最高値は駿河屋の37,000円でした。前回（{PREV_SURVEY_DATE}）の差は1.1万円（49,000円と38,000円）で、26日間で差が広がっています。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>多言語版は国内版より高値：</span>多言語対応版はルデヤ83,200円（希望小売価格69,980円の118.9%）、駿河屋60,000円で、いずれも国内版を2万円以上上回りました。多言語対応版はNintendo Storeのみの販売です。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>セットの上乗せは新品で大きい：</span>ルデヤではマリオカート ワールド セットが58,500円と本体単体より7,000円高い一方、駿河屋・ふるいちでは本体単体とセットの差が0〜2,000円でした。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>前回からの変化（ルデヤ）：</span>日本語・国内専用版49,000円→51,500円、多言語版82,600円→83,200円、Z-A セット56,000円→56,200円に上がり、マリオカート ワールド セット（58,500円）とスプラトゥーン レイダース セット（51,000円）は据え置きでした。駿河屋は日本語・国内専用版が38,000円→37,000円に下がっています。</li>
            </ul>
          </div>
          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>価格に影響している要因</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>
                <span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>① 2026年5月25日の定価値上げ：</span>
                任天堂は国内専用版の希望小売価格を49,980円から59,980円に改定しました（2026年5月8日発表）。当サイトの実測では、ルデヤの新品価格は6月12日の47,000円から11月15日の51,500円に上がった一方、ふるいちの掲載価格は46,000円から36,000円に下がっており、店舗によって動きが異なります。
              </li>
              <li>
                <span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>② 同梱版の生産終了：</span>
                マリオカート ワールドセットとPokémon LEGENDS Z-A Editionは生産終了しています。新品未開封の買取では、ルデヤがマリオカート ワールド セット58,500円・Z-A セット56,200円と、本体単体（51,500円）より高い価格を提示しています。
              </li>
            </ul>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：任天堂 価格改定リリース（2026年5月8日）、<a href="https://www.nintendo.com/jp/hardware/switch2/lineup/index.html" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>任天堂公式 商品ラインナップ</a>（2026年10月20日確認）、各店の公式買取ページ（{SWITCH2_SURVEY_DATE}実測。ソフマップ（ラクウル）のみ{RAKUURU_DATE}）</p>
          </div>
        </section>

        {/* 買取ルデヤの Switch 2 買取価格と条件 */}
        <section className="mb-12" id="rudeya">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />買取ルデヤのSwitch2買取価格と条件（{SWITCH2_SURVEY_DATE}確認）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            買取ルデヤの公式ページ（カテゴリ「Nintendo Switch 2」）では、{SWITCH2_SURVEY_DATE} 16時03分の時点で、新品の日本語・国内専用版を51,500円、多言語版を83,200円で買い取ると表示していました。モデル別の価格は上の比較表のとおりです。当サイトが同社の公式ページ・よくある質問・利用規約で確認できた条件は次のとおりです。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>公式ページで確認できた内容</th>
                </tr>
              </thead>
              <tbody>
                {rudeyaConditions.map((row) => (
                  <tr key={row.item}>
                    <td className="font-bold text-sm">{row.item}</td>
                    <td className="text-sm">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href="https://kaitori-rudeya.com/category/detail/214" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>買取ルデヤ Nintendo Switch 2の買取価格</a>、<a href="https://kaitori-rudeya.com/faq" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>よくある質問</a>、<a href="https://cloud.kaitori-rudeya.com/foruse" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>利用規約</a>、<a href="https://kaitori-rudeya.com/accessmap" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>アクセスマップ</a>（いずれも{SWITCH2_SURVEY_DATE}確認）。価格は相場により変動し、承認後の価格変更・キャンセルはできないと記載されています。
          </p>
        </section>

        {/* 未開封の条件と開封済みとの差 */}
        <section className="mb-12" id="unopened">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />Switch2の未開封と開封済みの買取価格差・未開封の条件</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            当サイトが{SWITCH2_SURVEY_DATE}に確認した5店のうち、同じ店舗で未開封と開封済みの価格を分けて公開している店はありませんでした。そのため、新品の価格のみを掲載する買取ルデヤと、新品未開封に限定する記載のない店舗の公開価格を比べると、日本語・国内専用版で14,500〜16,500円の差があります。開封済みの品は、各店の査定で状態・付属品により価格が決まるため、この差は目安としてご覧ください。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>店舗</th>
                  <th>価格の区分</th>
                  <th>公式ページに記載された条件</th>
                  <th>出典</th>
                </tr>
              </thead>
              <tbody>
                {unopenedConditions.map((row) => (
                  <tr key={row.store}>
                    <td className="font-bold text-sm">{row.store}</td>
                    <td className="text-sm">{row.price}</td>
                    <td className="text-sm">{row.cond}</td>
                    <td className="text-sm"><a href={row.url} target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>公式ページ</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            確認日：{SWITCH2_SURVEY_DATE}（ソフマップ（ラクウル）は同日システムメンテナンス中だったため{RAKUURU_DATE}）。シュリンク（外装フィルム）や保証書の有無を価格の条件とする記載は、5店の公開ページでは確認できませんでした。売却前に各店へお問い合わせいただくことをおすすめします。
          </p>
        </section>

        {/* 売る前の手続き（任天堂公式） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />Switch2を売る前に必要な手続き（任天堂公式の案内）</h2>
          <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>本体の初期化：</span>任天堂は、Nintendo Switch 2本体を他の人に譲ったり廃棄したりするときには必ず初期化するよう案内しています。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>インターネットに接続して初期化：</span>接続せずに初期化すると「バーチャルゲームカードを利用できる本体」や「特定ソフトの利用券を共有できる本体」の登録が消去されません。初期化できない場合は、ニンテンドーアカウントのウェブサイトから登録を解除できます。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>microSD Expressカード：</span>初期化後は、カードに保存されているソフトのデータも使えなくなります（画面写真・動画は引き続き使えます）。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href="https://support.nintendo.com/jp/switch2/mastery/initialization/index.html" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>任天堂サポート「本体を初期化する｜Nintendo Switch 2 サポート」</a>（{SWITCH2_SURVEY_DATE}確認）。
          </p>
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
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：任天堂公式 商品ラインナップ、任天堂ニュースリリース（2026年9月8日・ゼルダの伝説 40周年 アニバーサリーエディション）。2026年10月20日確認</p>
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
          <p className="text-sm mt-4"><Link href="/hardware/ranking/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>ゲーム機本体の買取価格ランキング</Link></p>
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
