import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

export const metadata: Metadata = {
  title: 'ゲーム買取はどこがいい？結論と用途別おすすめ【2026年7月】毎週実測の価格で比較',
  description:
    'ゲーム買取はどこがいい？高く売りたい・早く売りたい・レトロ・箱なしジャンク・まとめ売り・宅配・店舗で即現金・フリマと迷う、の用途別に最適な売り先を提示。送料・返送料・キャンセル・査定期間・古物商番号を主要サービスで横断比較（各社公式・確認日つき）。どこで売るか迷ったら本ハブで決められます。',
  keywords: ['ゲーム買取 どこがいい', 'ゲーム買取 おすすめ', 'ゲームを売るならどこがいい', 'ゲーム買取 どこで売る', 'ゲーム買取 比較', 'ゲーム買取 用途別'],
  openGraph: {
    title: 'ゲーム買取はどこがいい？結論と用途別おすすめ【2026年7月】毎週実測の価格で比較',
    description: '高く・早く・レトロ・箱なし・まとめ売り・宅配・店舗・フリマ比較。用途別に最適な売り先を提示し、送料/返送料/キャンセル/査定期間/古物商を横断比較。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

// 各レビューページ（src/app/review/*/page.tsx）の確認済みデータを転記。
// 数値・条件は各社公式＋確認日に基づく。新規リサーチによる創作はしていない。
type UseCase = {
  title: string;
  label: string;
  color: string;
  lead: string;
  picks: { name: string; reviewPath?: string; why: string }[];
  toolLink?: { href: string; label: string };
};

const useCases: UseCase[] = [
  {
    title: '高く売りたい',
    label: '高額重視',
    color: '#EF4444',
    lead: '同じソフトでも業者によって査定額は差が出ます。レトロ・レアは専門店、現行品は複数社比較が基本です。',
    picks: [
      { name: '駿河屋', reviewPath: '/review/surugaya/', why: 'ネット通販の相場データに基づく査定で、レトロ・限定版・希少品の評価が高い傾向。ただし条件未達だと送料が発生し返送料は自己負担のため、手取りは事前に確認を（2026年6月18日時点）。' },
      { name: 'ゲーム王国', reviewPath: '/review/game-oukoku/', why: '現行機（Switch 2/PS5等）からレトロまでゲーム専門の宅配買取。初回査定額10%UP特典あり（1人1回限り）。送料・査定料・振込手数料無料（2026年6月12日確認）。' },
    ],
    toolLink: { href: '/price-index/', label: '今週のゲーム買取価格を確認する' },
  },
  {
    title: '早く売りたい',
    label: 'スピード',
    color: 'var(--color-electric-green)',
    lead: '入金スピードは「査定連絡の早さ」と「承諾後の振込日数」で決まります。宅配なら集荷の早い専門店が有利です。',
    picks: [
      { name: 'カイトリワールド', reviewPath: '/review/kaitori-world/', why: '査定連絡は商品到着日（混雑時1〜2日）、承諾後すぐ振込手続き（特商法表記では承諾メール到着から最短2営業日）。申込時価格を5日間保証する「価格保証買取」も選べます（2026年6月12日確認）。' },
      { name: 'ゲーム王国', reviewPath: '/review/game-oukoku/', why: '到着後1〜3営業日で査定連絡、振込情報確認後は最短当日〜翌営業日（土日除く）で入金（2026年6月12日確認）。' },
    ],
    toolLink: { href: '/method/online/', label: '宅配買取の流れを確認する' },
  },
  {
    title: 'レトロ・プレミア品',
    label: 'レトロ/レア',
    color: '#F59E0B',
    lead: 'ファミコン・スーファミ・ゲームボーイ等の旧世代は、相場を正しく評価できる専門店でないと値がつかないことがあります。',
    picks: [
      { name: '駿河屋', reviewPath: '/review/surugaya/', why: 'ファミコン・スーファミ・セガサターン・PCエンジン等のレトロや限定版・コレクターアイテムに対応。箱・説明書の有無で評価が変わるため状態を整えてから（2026年6月18日時点）。' },
      { name: 'ゲーム王国', reviewPath: '/review/game-oukoku/', why: 'ファミコン・ゲームボーイ等レトロから現行機まで全世代対応。故障品・箱なし・付属品欠品もOK（ゲーム以外は買取不可、2026年6月12日確認）。' },
    ],
    toolLink: { href: '/software/retro-sell-guide/', label: 'レトロゲームの売り方ガイドを見る' },
  },
  {
    title: '箱なし・傷あり・ジャンク',
    label: '状態に不安',
    color: '#8B5CF6',
    lead: '箱なし・説明書なし・動作不良でも買い取る業者なら、捨てる前に値がつく可能性があります。状態別の目安は状態マップで確認できます。',
    picks: [
      { name: 'ホビーコレクト', reviewPath: '/review/hobby-collect/', why: '箱なし・説明書なし・電源が入らない/画面割れ等のジャンクもOKと明記。送料無料・梱包キット無料（キャンセル時の返送料は自己負担。FAQと公式仕様表で表記揺れがあるため申込前に要確認、2026年6月18日時点）。' },
      { name: 'ゲーム王国', reviewPath: '/review/game-oukoku/', why: '故障品・箱なし・付属品欠品OK。査定後キャンセルの返送料はゲーム王国負担（部分キャンセル不可の口コミあり、2026年6月12日確認）。' },
    ],
    toolLink: { href: '/condition-guide/', label: '箱なし・傷ありでも売れるか状態別マップで確認する' },
  },
  {
    title: 'まとめ売り・大量',
    label: '大量処分',
    color: '#0EA5E9',
    lead: 'まとめ売りは「送料無料の点数条件」と「無料梱包材の箱数」で手間とコストが変わります。',
    picks: [
      { name: 'ブックオフ', reviewPath: '/review/bookoff/', why: '宅配買取は集荷・振込手数料無料で1申込最大19箱まで。ゲーム以外（本・CD・DVD等）もまとめられる。返送はお客様負担（目安1箱1,300円前後）、無料ダンボール提供は終了（2026年6月18日時点）。' },
      { name: 'カイトリワールド', reviewPath: '/review/kaitori-world/', why: '買取ダンボール最大10箱まで無料。査定3,000円以上で送料無料（未満は宅配便500円を差し引き）。フィギュア・鉄道模型・プラモも対応（2026年6月12日確認）。' },
    ],
    toolLink: { href: '/knowledge/bulk/', label: 'まとめ売りのコツを確認する' },
  },
  {
    title: '宅配で売りたい',
    label: '宅配派',
    color: '#14B8A6',
    lead: '自宅から送って完結したい人向け。送料無料の条件・無料梱包キット・返送料を必ず確認しましょう。',
    picks: [
      { name: 'ゲーム王国', reviewPath: '/review/game-oukoku/', why: '送料・査定料・振込手数料無料（佐川急便の集荷限定）、梱包キットは1申込2箱まで無料。店舗持ち込みは非対応の宅配専門（2026年6月12日確認）。' },
      { name: 'カイトリワールド', reviewPath: '/review/kaitori-world/', why: '宅配専門。買取ダンボール最大10箱まで無料、振込手数料無料。査定3,000円以上で送料無料。18歳未満は利用不可（2026年6月12日確認）。' },
    ],
    toolLink: { href: '/method/online/', label: '宅配買取ガイドを見る' },
  },
  {
    title: '店舗で即現金',
    label: '即日現金',
    color: '#F97316',
    lead: 'その日に現金が欲しいなら、店頭持ち込みか出張買取が選択肢。即日査定・即日支払いに対応します。',
    picks: [
      { name: 'ブックオフ', reviewPath: '/review/bookoff/', why: '全国900店舗超で店頭持ち込みなら即日現金化。店頭査定は通常30分〜1時間程度（最短30分）。ゲーム以外もまとめて持ち込める（2026年6月18日時点）。' },
      { name: 'ウリエル', reviewPath: '/review/uriel/', why: '出張買取で査定後その場で現金受取（出張費・査定料・キャンセル料すべて無料）。ゲーム買取の対象は東京・神奈川・千葉・埼玉の1都3県に限定（2026年6月12日確認）。' },
    ],
    toolLink: { href: '/method/shop/', label: '店舗買取ガイドを見る' },
  },
  {
    title: 'フリマと迷う',
    label: 'フリマ比較',
    color: '#EC4899',
    lead: 'メルカリ等のフリマは自分で価格を決められる反面、販売手数料・送料・梱包の手間がかかります。実質手取りで比較しましょう。',
    picks: [
      { name: 'メルカリ vs 買取業者シミュ', reviewPath: '/compare/mercari-vs-kaitori/', why: '販売手数料・送料を差し引いた実質手取りをシミュレーションで比較できます。手間と時間も含めて自分に合う方法を選べます。' },
    ],
    toolLink: { href: '/compare/mercari-vs-kaitori/', label: 'フリマと業者の実質手取りをシミュレーションする' },
  },
];

// 横断比較表：各レビューページ（src/app/review/*/page.tsx）から転記した確認済みの値のみ。
// 不明な項目は「要確認」と明記し空欄を埋めない。
const comparisonTable = [
  {
    name: '駿河屋',
    reviewPath: '/review/surugaya/',
    shipping: 'あんしん買取＝見積3,000円以上で無料／かんたん買取＝30点以上で無料（1箱買取額1,500円未満は別途送料の場合あり）',
    returnFee: '自己負担（「自動承諾」選択時はキャンセル・返送不可）',
    fee: '査定料の明示記載なし（要確認）',
    cancel: '可（自動承諾選択時は不可）',
    period: '到着後 通常4〜14日程度／承諾後3営業日以内に振込',
    genre: 'レトロ・限定版・希少品＋現行Switch/PS5',
    license: '静岡県公安委員会 第491140002748号',
    confirmed: '2026年6月18日時点',
  },
  {
    name: 'ゲオ',
    reviewPath: '/review/geo/',
    shipping: '送料・査定料・振込手数料すべて無料（1点〜、集荷は佐川急便。無料梱包キットなし）',
    returnFee: '不満時の返送はゲオ負担（無料）／買取対象外品の返送は自己負担（破棄なら無料）',
    fee: '送料・査定料・振込手数料が無料',
    cancel: '可（査定連絡から14日未回答でキャンセル＝返品扱い）',
    period: '到着翌営業日〜5営業日以内に査定／承諾後すみやかに振込',
    genre: 'PS3・Wii世代以降中心（レトロは対象外の場合あり、未開封不可）',
    license: '記載なし（公式参照／要確認）',
    confirmed: '2026年6月12日確認',
  },
  {
    name: 'ブックオフ',
    reviewPath: '/review/bookoff/',
    shipping: '宅配は集荷・振込手数料無料（1申込最大19箱）／送料無料条件は通常10点以上目安',
    returnFee: '自己負担（目安1箱1,300円前後）。「かんたん承認」は返却不可、返送は「あんしん返送コース」',
    fee: '集荷・振込手数料無料／無料ダンボール提供は終了（公式販売1枚200円税込）',
    cancel: '可（あんしん返送コース選択時）',
    period: '宅配は到着後3〜7営業日程度／入金は到着から1週間程度。店頭は30分〜1時間',
    genre: '全般（ゲーム・本・CD・DVD・スマホ等）',
    license: '神奈川県公安委員会 第452760001146号',
    confirmed: '2026年6月18日時点',
  },
  {
    name: 'カイトリワールド',
    reviewPath: '/review/kaitori-world/',
    shipping: '査定3,000円以上で無料（未満は宅配便500円／宅配便以外200円を差し引き）',
    returnFee: '不満時は1点から返送無料（買取承諾後・自動承認は返送不可。全品返送等は着払い＝自己負担）',
    fee: '振込手数料無料／買取ダンボール最大10箱まで無料',
    cancel: '可（自動承認＝通知から7日未回答で承認扱い）',
    period: '査定連絡は到着日（混雑時1〜2日）／承諾後すぐ振込（特商法表記で最短2営業日）',
    genre: 'ゲーム機・ソフト・フィギュア・鉄道模型・ホビー（18歳未満不可）',
    license: '東京都公安委員会 第306701605637号',
    confirmed: '2026年6月12日確認',
  },
  {
    name: 'ホビーコレクト',
    reviewPath: '/review/hobby-collect/',
    shipping: '送料無料（往路会社負担・佐川急便が自宅集荷）',
    returnFee: '自己負担（FAQと公式仕様表で表記揺れあり／要確認）',
    fee: '振込手数料無料／梱包キット無料',
    cancel: '可（査定額に納得できなければ返送）',
    period: '到着後 最短当日〜7日目安／承諾後 最短24時間〜数日で振込',
    genre: 'ゲーム・フィギュア・ホビー・トレカ（箱なし・ジャンクもOK）',
    license: '石川県公安委員会 第511010011942号',
    confirmed: '2026年6月18日時点',
  },
  {
    name: 'ウリエル',
    reviewPath: '/review/uriel/',
    shipping: '出張買取のため送料項目なし（出張費無料）',
    returnFee: '出張買取のため返送料の概念なし（キャンセル料無料）',
    fee: '出張費・査定料・キャンセル料すべて無料',
    cancel: '可（査定額を聞いてから断ってもキャンセル料なし／成立後8日以内クーリングオフ）',
    period: '即日現金化（査定後その場で現金受取。査定30分〜1時間程度）',
    genre: 'ゲーム機・ソフト・周辺機器ほか20種類以上（ゲーム買取は東京・神奈川・千葉・埼玉に限定）',
    license: '愛知県公安委員会 第542791100800号',
    confirmed: '2026年6月12日確認',
  },
  {
    name: 'ゲーム王国',
    reviewPath: '/review/game-oukoku/',
    shipping: '送料・査定料・振込手数料無料（佐川急便の集荷限定／他社・元払いは対象外。梱包キット1申込2箱まで無料）',
    returnFee: '査定後キャンセルの返送料はゲーム王国負担（無料）。部分キャンセル不可の口コミあり',
    fee: '送料・査定料・振込手数料無料',
    cancel: '可（査定後キャンセル可・返送料無料）',
    period: '到着後1〜3営業日で査定連絡／振込情報確認後 最短当日〜翌営業日（土日除く）',
    genre: 'ゲーム専門（Switch 2〜レトロ全世代。故障・箱なし・欠品OK／ゲーム以外不可）',
    license: '大阪府公安委員会 第621180142468号',
    confirmed: '2026年6月12日確認',
  },
];

const tools = [
  { href: '/price-index/', title: '今週の買取価格（価格インデックス）', desc: '主要ソフト・本体の最新買取価格の目安を毎週更新。売り時の判断に。' },
  { href: '/compare/mercari-vs-kaitori/', title: 'メルカリ vs 買取 実質手取りシミュ', desc: '手数料・送料を差し引いた実質手取りで、フリマと業者を比較。' },
  { href: '/condition-guide/', title: '状態別買取マップ（condition-guide）', desc: '箱なし・傷あり・ジャンクが「いくらで・どこで売れるか」を状態別に整理。' },
];

const faqs = [
  {
    q: 'ゲーム買取はどこがいいですか？',
    a: '売りたい物と優先したいことで変わります。レトロ・レア・プレミア品は相場データに基づく駿河屋やゲーム専門のゲーム王国、現行機を早く売るならカイトリワールドやゲーム王国、まとめて処分するならブックオフやカイトリワールド、その日に現金化したいなら店頭持ち込みのブックオフや出張のウリエル（対応エリア限定）が候補です。まずは価格インデックスで相場の目安を確認し、用途別の項目で自分に合う売り先を選ぶのがおすすめです。',
  },
  {
    q: 'ゲームを高く売るにはどうすればいいですか？',
    a: '①箱・説明書・付属品をそろえて状態を整える、②発売直後や品薄など需要が高い時期に売る、③同じ品でも査定額に差が出るため複数社で比較する、の3点が基本です。レトロ・レアは一般リサイクル店より専門店のほうが高くなりやすい一方、駿河屋のように条件未達で送料・返送料が発生する業者は手取りで比較しましょう。最新の目安は価格インデックスで確認できます。',
  },
  {
    q: '宅配と店舗、どっちで売るのがいいですか？',
    a: 'すぐ現金が欲しい・対面で確認したいなら、即日現金化できる店頭持ち込み（ブックオフ等）や出張買取（ウリエル等、対応エリア限定）が向きます。自宅から手間なく送りたい・点数が多いなら宅配買取（ゲーム王国・カイトリワールド等）が便利です。宅配は送料無料の点数条件・無料梱包材の箱数・返送料を申込前に確認してください。',
  },
  {
    q: '箱なし・動かないジャンクのゲームでも売れますか？',
    a: 'ホビーコレクトやゲーム王国は、箱なし・説明書なし・電源が入らない/画面割れ等のジャンクも買取対象と明記しています。値がつくかは状態次第のため、捨てる前に状態別マップで目安を確認し、対応業者へ送るのがおすすめです。',
  },
  {
    q: 'メルカリ（フリマ）と買取業者はどちらが得ですか？',
    a: 'フリマは自分で価格を決められる分、高く売れる可能性がある一方、販売手数料・送料・梱包やトラブル対応の手間がかかります。買取業者は手間が少なく早い反面、利益分が差し引かれます。販売手数料・送料を引いた実質手取りで比べられるシミュレーションで確認するのが確実です。',
  },
  {
    q: '査定をキャンセルしたら返送料はかかりますか？',
    a: '業者により異なります。ゲオやゲーム王国はキャンセル時の返送料が無料、ブックオフ・駿河屋・カイトリワールドは条件によって自己負担が発生します（「自動承諾／自動承認」を選ぶと返送・キャンセル不可になる業者もあります）。本ページの横断比較表で各社の返送料・キャンセル条件を確認してから申し込んでください。',
  },
];

export default function WhichIsBestPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲーム買取はどこがいい？用途別おすすめ比較【2026年】", "datePublished": "2026-06-27", "dateModified": "2026-06-27", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: '比較', href: '/' }, { name: 'ゲーム買取はどこがいい？用途別おすすめ比較' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(96,165,250,0.2)', color: '#60A5FA' }}>用途別比較ハブ</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲーム買取はどこがいい？結論と用途別おすすめ【2026年7月】
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            「ゲーム買取はどこがいい？」「どこで売るのが正解？」——答えは<strong>売りたい物と優先したいこと</strong>で変わります。ランキングを上から眺めるのではなく、<strong>高く・早く・レトロ・箱なし・まとめ売り・宅配・店舗・フリマ比較</strong>の用途別に最適な売り先を提示。送料・返送料・キャンセル・査定期間・古物商番号は各社公式と確認日つきで横断比較できます。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新: 2026年7月19日</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/price-index/" className="btn-primary py-2.5 px-6">
              今週の買取価格を確認する
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 先に結論（2026-07 P3: ヘッドクエリ直答） */}
        <section className="mb-12">
          <div className="glass-card p-6" style={{ borderLeft: '4px solid var(--color-electric-green)' }}>
            <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>先に結論：迷ったらこの3択</h2>
            <ul className="text-sm leading-relaxed space-y-2" style={{ color: 'var(--color-text-light)' }}>
              <li>・<strong>1円でも高く売りたい</strong> → 店ごとに価格が毎週動きます。<Link href="/price-index/" className="underline font-bold" style={{ color: 'var(--color-deep-blue)' }}>今週の実測価格比較（2026年7月19日更新）</Link>で「今どこが高いか」を確認してから売るのが最短です</li>
              <li>・<strong>宅配でまとめて手軽に</strong> → 送料・査定料・振込手数料無料の<Link href="/review/game-oukoku/" className="underline font-bold" style={{ color: 'var(--color-deep-blue)' }}>ゲーム王国</Link>／段ボール最大10箱無料の<Link href="/review/kaitori-world/" className="underline font-bold" style={{ color: 'var(--color-deep-blue)' }}>カイトリワールド</Link>（いずれも公式確認済みの条件）</li>
              <li>・<strong>今日中に現金化したい</strong> → 全国900店舗超の<Link href="/review/bookoff/" className="underline font-bold" style={{ color: 'var(--color-deep-blue)' }}>ブックオフ店頭</Link>（店頭査定は通常30分〜1時間程度）</li>
            </ul>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※条件は各社公式の確認日つきで下の比較表に整理しています。レトロ・箱なし・フリマとの比較など、あなたの状況別の正解は次の8パターンからどうぞ。</p>
          </div>
        </section>

        {/* Use-case quick nav */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />用途から最適な売り先を選ぶ</h2>
          <div className="flex flex-wrap gap-2">
            {useCases.map((uc, i) => (
              <a key={uc.title} href={`#use-${i}`} className="px-3 py-1.5 rounded-full text-xs font-bold" style={{ background: 'var(--color-bg-alt)', color: 'var(--color-deep-blue)' }}>
                {uc.title}
              </a>
            ))}
          </div>
        </section>

        {/* Use-case recommendations */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />用途別おすすめの売り先</h2>
          <div className="space-y-6">
            {useCases.map((uc, i) => (
              <div key={uc.title} id={`use-${i}`} className="glass-card p-6" style={{ borderLeft: `4px solid ${uc.color}` }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: 'var(--color-bg-alt)', color: uc.color }}>{uc.label}</span>
                  <h3 className="font-bold text-lg" style={{ color: 'var(--color-deep-blue)' }}>{uc.title}</h3>
                </div>
                <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>{uc.lead}</p>
                <div className="space-y-3">
                  {uc.picks.map((p) => (
                    <div key={p.name} className="p-3 rounded-lg" style={{ background: 'rgba(16,185,129,0.05)' }}>
                      <p className="text-sm font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{p.name}</p>
                      <p className="text-xs mb-2" style={{ color: 'var(--color-text-light)' }}>{p.why}</p>
                      {p.reviewPath ? (
                        <Link href={p.reviewPath} className="text-xs font-bold inline-flex items-center gap-1" style={{ color: 'var(--color-electric-green)' }}>
                          {p.name}の詳細・評判を見る →
                        </Link>
                      ) : null}
                    </div>
                  ))}
                </div>
                {uc.toolLink ? (
                  <div className="mt-4 pt-3" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                    <Link href={uc.toolLink.href} className="text-sm font-bold inline-flex items-center gap-1" style={{ color: 'var(--color-electric-green)' }}>
                      {uc.toolLink.label} →
                    </Link>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        {/* Cross comparison table */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />主要サービス横断比較表</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            送料・返送料・手数料・キャンセル可否・査定期間・対応ジャンル・古物商番号を横断比較。値はすべて各サービスの個別レビューに掲載した確認済みデータ（各社公式・確認日つき）からの転記です。確認できない項目は「要確認」と明記しています。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>サービス</th>
                  <th>送料</th>
                  <th>返送料</th>
                  <th>手数料</th>
                  <th>キャンセル</th>
                  <th>査定期間・入金</th>
                  <th>対応ジャンル</th>
                  <th>古物商番号</th>
                  <th>確認日</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row) => (
                  <tr key={row.name}>
                    <td className="font-bold">
                      {row.reviewPath ? (
                        <Link href={row.reviewPath} style={{ color: 'var(--color-electric-green)' }}>{row.name}</Link>
                      ) : row.name}
                    </td>
                    <td className="text-sm">{row.shipping}</td>
                    <td className="text-sm">{row.returnFee}</td>
                    <td className="text-sm">{row.fee}</td>
                    <td className="text-sm">{row.cancel}</td>
                    <td className="text-sm">{row.period}</td>
                    <td className="text-sm">{row.genre}</td>
                    <td className="text-sm">{row.license}</td>
                    <td className="text-sm">{row.confirmed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            ※ 価格・条件は各社公式および各サービスのレビューに記載した確認日時点の情報です。時期・在庫・キャンペーンにより変動するため、申込前に必ず公式の最新情報をご確認ください。古物商番号は各社公式の特定商取引法表記・会社概要に基づきます。ゲオは古物商番号を確認できなかったため「公式参照／要確認」としています。
          </p>
        </section>

        {/* Tools */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />売り先選びに役立つ独自ツール</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tools.map((t) => (
              <Link key={t.href} href={t.href} className="glass-card p-5 card-hover block">
                <p className="font-bold text-sm mb-1" style={{ color: 'var(--color-deep-blue)' }}>{t.title}</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>{t.desc}</p>
              </Link>
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
            迷ったら<span style={{ color: 'var(--color-electric-green)' }}>今週の買取価格</span>から確認
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            相場の目安をつかんでから、用途に合った売り先を選べば失敗しにくくなります。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/price-index/" className="btn-primary py-3 px-8">
              今週の買取価格を見る
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連する比較・ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/compare/kaitori-ranking/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取おすすめランキング15選</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>主要サービスを総合ランキングで比較</p>
            </Link>
            <Link href="/compare/shop-vs-online/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>店舗 vs 宅配買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>どっちがお得か徹底比較</p>
            </Link>
            <Link href="/compare/hikakaku-vs-uriel/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク vs ウリエル</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>2大サービスの違いを比較</p>
            </Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
