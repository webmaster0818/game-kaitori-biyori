import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ゲーム宅配買取おすすめ15社比較【2026年7月】送料・返送料・ダンボール無料・査定日数で選ぶ',
  description:
    'ゲームの宅配買取15社を実務比較。送料・キャンセル時の返送料・無料ダンボール（梱包キット）・箱なし/故障品対応・レトロ対応・査定日数を、各社公式の確認済み情報（2026年6〜7月確認）で一覧化。毎週実測の買取価格DBと合わせて、高く・損せず売れる宅配買取が選べます。',
  keywords: ['ゲーム 宅配買取', 'ゲーム 宅配買取 おすすめ', 'ゲーム 宅配買取 比較', '宅配買取 送料', '宅配買取 ダンボール無料', '宅配買取 返送料'],
  openGraph: {
    title: 'ゲーム宅配買取おすすめ15社比較【2026年7月】送料・返送料・ダンボール・査定日数で選ぶ',
    description: '15社の送料・返送料・梱包キット・箱なし対応・レトロ対応・査定日数を公式の確認済み情報で実務比較。毎週実測の買取価格DB付き。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

// 比較データはすべて各社レビュー（src/app/review/*）の確認済み値からの転記。
// 数値・条件の創作はせず、出典・確認日を踏襲。不明・サービス対象外は「要確認」「-」とする。
const serviceComparison = [
  {
    name: 'ゲーム王国',
    href: '/review/game-oukoku/',
    shipping: '無料（佐川急便の集荷限定）',
    returnFee: 'ゲーム王国負担（無料）',
    cancel: '査定後キャンセル可。部分キャンセル不可の指摘あり',
    kit: '梱包キット2箱まで無料',
    nobox: '故障品・箱なし・付属品欠品も対応（公式明記）',
    retro: '全世代対象とFAQに記載／一方でPS2等が対象外の口コミも（要確認）',
    speed: '到着後1〜3営業日で査定連絡',
  },
  {
    name: 'ホビーコレクト',
    href: '/review/hobby-collect/',
    shipping: '無料（往路は会社負担・佐川集荷）',
    returnFee: '自己負担（1箱2,000円前後の指摘あり・公式に表記揺れ、要確認）',
    cancel: 'キャンセル可',
    kit: '無料（申込時に依頼）',
    nobox: '箱・説明書なし、壊れたゲーム機も対象（完品比20〜50%減）',
    retro: '対応（レトロ機・ソフト）',
    speed: '到着後 最短当日〜7日目安（繁忙期は2週間の口コミ）',
  },
  {
    name: 'ゲオ宅配買取',
    href: '/review/geo/',
    shipping: '無料（佐川集荷・伝票記入不要・1点からOK）',
    returnFee: 'ゲオ負担（無料）※対象外品の返送は自己負担',
    cancel: '商品ごとに承認/返品。14日未回答で返品扱い',
    kit: 'なし（ダンボールは自分で用意・紙袋も可）',
    nobox: '箱なし可（減額あり）。未開封品・同一タイトル複数は買取不可',
    retro: 'レトロゲーム買取対応を開始（2026年7月確認）。ジャンク本体もWEB限定で可',
    speed: '到着翌営業日から5営業日以内（繁忙期遅延あり）',
  },
  {
    name: 'ネットオフ',
    href: '/review/netoff/',
    shipping: '無料（自宅集荷・コンビニ持込とも無料）',
    returnFee: '自己負担（関東800円〜・北海道1,200円・沖縄2,400円）。自動承認は返送不可',
    cancel: 'キャンセル可。値段がつかない品は無料引取りも選択可',
    kit: 'ダンボール6箱まで無料',
    nobox: '要確認（明示記載なし）',
    retro: 'PS3・Wii世代以降が主対象。レトロは対象外が多い',
    speed: '査定結果は通常3〜7営業日（入金は最短2日）',
  },
  {
    name: 'カイトリワールド',
    href: '/review/kaitori-world/',
    shipping: '査定3,000円以上で無料（未満は宅配便500円等を差引）',
    returnFee: '1点から返送無料。承諾後・自動承認申込は返送不可。全品返送等は着払い',
    cancel: '自動承認は通知から7日未回答で承認扱い',
    kit: 'ダンボール最大10箱まで無料',
    nobox: '箱なしでも対象になる場合あり（完品前提のため減額）',
    retro: '要確認（レトロ専門の明示なし）',
    speed: '査定連絡は到着日（混雑時1〜2日）',
  },
  {
    name: '駿河屋',
    href: '/review/surugaya/',
    shipping: 'あんしん買取は見積3,000円以上／かんたん買取は30点以上で無料',
    returnFee: '自己負担。「自動承諾」選択時はキャンセル・返送不可',
    cancel: '自己負担で返送可（自動承諾は不可）',
    kit: '要確認（梱包キットの記載なし）',
    nobox: 'ソフト単体でも可（完品比で大幅減額）',
    retro: '強い（ファミコン〜セガサターン・PCエンジン等）',
    speed: '到着後 通常4〜14日程度（繁忙期さらに遅延の口コミ）',
  },
  {
    name: 'ブックオフ宅配',
    href: '/review/bookoff/',
    shipping: '無料（集荷・振込手数料とも無料／最大19箱）',
    returnFee: '自己負担（目安1箱1,300円前後）。かんたん承認は返却不可',
    cancel: 'キャンセル可。返送を残すには「あんしん返送コース」を選択',
    kit: '無料提供は終了（自前の箱・厚手紙袋／公式1枚200円）',
    nobox: '要確認（状態が悪い品は値がつきにくい）',
    retro: '対象だがレトロの評価にばらつきあり',
    speed: '到着後3〜7営業日程度',
  },
  {
    name: '買取王子',
    href: '/review/kaitori-ouji/',
    shipping: '無料（点数条件なしで全国無料）',
    returnFee: '買取王子負担（無料）※不成立でも無料返送',
    cancel: '承諾前ならキャンセル可（金銭リスクなし）',
    kit: '無料（段ボールの取り寄せ可・自分の箱でも可）',
    nobox: '要確認',
    retro: '要確認',
    speed: '承諾後、順次振込（査定日数は要確認）',
  },
  {
    name: 'レトログ',
    href: '/review/retrog/',
    shipping: '買取成立時無料',
    returnFee: '自己負担（部分返品不可・全点返送のみ）',
    cancel: '可（返送は全点・自己負担）',
    kit: '宅配キット最大10箱まで無料（小・大2サイズ）',
    nobox: '箱なし・説明書なし・電源が入らないジャンク級も可（公式明記）',
    retro: '専門（約40機種の買取価格表を公式公開）',
    speed: '査定1〜3営業日・了承+本人確認後2営業日以内に入金',
  },
  {
    name: 'ソフマップ（ラクウル）',
    href: '/review/sofmap/',
    shipping: '無料（査定料・キャンセル返送料も無料）',
    returnFee: 'ソフマップ負担（無料）',
    cancel: 'キャンセル可（返送料も無料）',
    kit: '梱包箱の送付無料',
    nobox: '要確認',
    retro: '要確認',
    speed: '振込への引き出し約2日目安（休日を挟むと4〜5日）※銀行振込は手数料250円/回',
  },
  {
    name: 'トレーダー',
    href: '/review/trader/',
    shipping: '5点以上で無料',
    returnFee: '着払い（自己負担）',
    cancel: '可（キャンセル時の返送は着払い）',
    kit: '要確認（記載なし）',
    nobox: '箱・説明書の傷での減額が厳しめ',
    retro: '対応（レトロ・海外ゲームまで対象）',
    speed: '到着3日以内に査定・承諾後2〜3日で振込',
  },
  {
    name: 'じゃんぱら',
    href: '/review/janpara/',
    shipping: '無料（3箱まで・200cm以内/30kg以下）',
    returnFee: 'じゃんぱら負担（無料）※買取対象外品のみ着払い',
    cancel: '査定不成立時の返送も会社負担',
    kit: '要確認',
    nobox: '箱なし・傷ありは減額前提（状態の良い本体向き）',
    retro: '要確認（PC・スマホ・ゲーム機本体が主力）',
    speed: '査定完了まで1週間前後の場合あり（振込日数は公式記載なし）',
  },
  {
    name: 'ブックサプライ',
    href: '/review/booksupply/',
    shipping: '査定合計2,000円以上で無料',
    returnFee: '自己負担が生じる場合あり（少額品の返送）',
    cancel: '承認前キャンセル可',
    kit: 'ダンボール無料（公式トップに明記）',
    nobox: '要確認',
    retro: '要確認',
    speed: '要確認',
  },
  {
    name: 'ハードオフ',
    href: '/review/hardoff/',
    shipping: '無料（梱包資材の発送サービスあり）',
    returnFee: '取扱対象外品などは着払い（通常時の条件は公式明記なし・要確認）',
    cancel: '要確認（公式明記なし）',
    kit: '梱包資材の発送サービスあり',
    nobox: 'ジャンク対応（オファー買取で売る前に値段が分かる）',
    retro: '対応',
    speed: 'オファー買取は金額確定後2〜4営業日で入金（査定日数は明記なし）',
  },
  {
    name: 'ティファナ',
    href: '/review/tifana/',
    shipping: '無料（宅配キット・出張費も無料）',
    returnFee: '要確認（公式サイトで要確認）',
    cancel: '返送対応あり（条件は要確認）',
    kit: '宅配キット無料',
    nobox: '箱なし可（フィギュア等は箱ありと差が大きい）',
    retro: 'ホビー・レトロ玩具系に強い',
    speed: '査定完了後 最短即日〜3営業日以内',
  },
];

const chooseGuide = [
  { title: '箱なし・傷あり・故障品を売りたいなら', description: '故障品・箱なし・付属品欠品まで明確に対応すると公式に書いてあるのは「ゲーム王国」「ホビーコレクト」「レトログ（電源が入らないジャンク級も可）」。ハードオフはオファー買取でジャンクも売る前に値段が分かります。ゲオも箱なし可（減額あり）ですが、未開封品・同一タイトル複数は買取不可なので注意。' },
  { title: 'キャンセルの返送料を抑えたいなら', description: '査定額に納得できずキャンセルする時の返送料が「無料（業者負担）」と明記されているのは「ゲーム王国」「ゲオ宅配買取」「買取王子（不成立でも無料）」「ソフマップ」「じゃんぱら」。多くのサービスはキャンセル返送料が自己負担です。さらに各社の「自動承認/自動承諾」は、一定日数の未回答や選択で返送・キャンセルが不可になる点に注意してください。' },
  { title: '梱包用のダンボールを用意したくないなら', description: '無料の梱包キット（ダンボール）があるのは「カイトリワールド（最大10箱）」「レトログ（最大10箱）」「ネットオフ（6箱）」「ゲーム王国（2箱）」「ホビーコレクト」「買取王子」「ブックサプライ」「ソフマップ」「ティファナ」。ゲオは自分で用意（丈夫な紙袋も可）、ブックオフは無料提供を終了しています（公式で1枚200円購入可）。' },
  { title: 'レトロゲームを高く売りたいなら', description: 'レトロゲームは「駿河屋」と「レトログ（約40機種の価格表を公式公開）」が専門性トップクラス。トレーダーはレトロ・海外ゲームまで対象です。ゲオも2026年7月確認でレトロゲーム買取を開始しましたが、名前書き・端子サビは不可。ネットオフはレトロ対象外が多いため専門店を選びましょう。' },
  { title: '売る前に金額の見当をつけたいなら', description: 'ハードオフの「オファー買取」は出品すると最大5件の見積もりが届き、売る前に値段が分かります。レトログは機種別の買取価格表を公式公開。当サイトの毎週実測の買取価格DBなら、主要タイトルの各社買取価格を送る前に横並びで比較できます。' },
];

const steps = [
  { title: 'STEP 1: 申し込み', description: '公式サイトから買取申し込み。氏名・住所・買取希望品を入力します。多くのサービスは24時間365日受付で、深夜でもスマホから申し込めます。' },
  { title: 'STEP 2: 梱包・発送', description: 'ダンボールにゲームソフトや本体を梱包して発送。無料の梱包キットを提供してくれるサービス（カイトリワールド・レトログ・ネットオフ・ゲーム王国・ホビーコレクト・買取王子など）もあります。集荷依頼をすれば自宅から一歩も出ずにOK。' },
  { title: 'STEP 3: 査定・見積もり', description: '届いた商品を専門スタッフが査定。サービスにより到着後1〜14日程度で査定結果がメールまたはマイページで届きます。繁忙期は遅延する場合があります。' },
  { title: 'STEP 4: 入金（またはキャンセル）', description: '査定額に同意すれば、指定口座に振り込み。納得できなければキャンセル（返送）も可能です。ただしキャンセル時の返送料負担と、自動承認の期限には注意しましょう。' },
];

const packingTips = [
  { title: 'ダンボールのサイズ選び', description: '大きすぎると中で動いて破損リスクが上がります。商品に合ったサイズを選びましょう。無料梱包キットがない場合はスーパーの空き箱でも問題ありません。' },
  { title: '緩衝材でしっかり保護', description: '輸送中の傷は減額の原因になります。プチプチ（エアキャップ）や新聞紙で隙間を埋め、特にゲーム機本体は角を重点的に保護しましょう。' },
  { title: 'ソフトはまとめてビニール袋に', description: '水濡れ防止のため、ゲームソフトはまとめてビニール袋に入れてからダンボールへ。' },
  { title: '付属品は本体と一緒に梱包', description: 'コントローラー、ケーブル、説明書、外箱は本体とセットで送ると高額査定に。完品状態が査定額の前提になっているサービスが多いです。' },
];

const faqs = [
  { q: 'ゲーム宅配買取で送料が無料なのはどこですか？', a: '多くのサービスで発送時の送料は無料です。点数・金額の条件なしで無料なのは買取王子・ゲオ宅配買取（1点からOK）・ゲーム王国・ホビーコレクト・ネットオフ・じゃんぱら・ソフマップ・ハードオフ・ティファナなど。条件付きはトレーダー（5点以上）、ブックサプライ（査定2,000円以上）、カイトリワールド（査定3,000円以上）、駿河屋（見積3,000円以上または30点以上）、レトログ（買取成立時）です（2026年6〜7月確認）。' },
  { q: 'キャンセル（返送）した場合の返送料はかかりますか？', a: 'キャンセル時の返送料が無料（業者負担）と明記されているのはゲーム王国・ゲオ宅配買取・買取王子（不成立でも無料）・ソフマップ・じゃんぱらです。ネットオフ・ホビーコレクト・駿河屋・ブックオフ・トレーダー（着払い）・レトログ（全点返送のみ）は自己負担になります。また各社の「自動承認/自動承諾」を選ぶと返送・キャンセルができなくなる点に注意してください（カイトリワールドは通知から7日未回答で承認扱い、ゲオは14日未回答で返品扱いなど条件が異なります）。' },
  { q: '無料の梱包キット（ダンボール）がもらえるのはどこですか？', a: '無料の梱包キット・ダンボールを提供しているのはカイトリワールド（最大10箱）、レトログ（最大10箱・2サイズ）、ネットオフ（6箱）、ゲーム王国（2箱）、ホビーコレクト、買取王子、ブックサプライ、ソフマップ、ティファナです。ゲオ宅配買取は自分でダンボールを用意する必要があり（丈夫な紙袋も可）、ブックオフは無料提供を終了して公式で1枚200円での購入になります（2026年6〜7月確認）。' },
  { q: '箱なし・傷あり・壊れたゲーム機でも宅配買取してもらえますか？', a: '故障品・箱なし・付属品欠品でも買取対応すると公式に明記しているのはゲーム王国・ホビーコレクト・レトログ（電源が入らないジャンク級も可）です（完品と比べると査定額は下がります）。ゲオも箱なし可で、動かない本体をジャンク品としてWEB限定買取しています。駿河屋やカイトリワールドも箱なしソフト単体を買い取りますが、完品前提のため減額されます。ゲオの未開封品・同一タイトル複数買取不可には注意しましょう。' },
  { q: 'レトロゲームの宅配買取はどこがいいですか？', a: 'レトロゲームの専門性は駿河屋（ファミコン〜セガサターン・PCエンジン等）とレトログ（レトロ専門・約40機種の買取価格表を公式公開）がトップクラスです。トレーダーはレトロ・海外ゲームまで対象。ゲオも2026年7月確認時点で「レトロゲーム買取はじめました」と対応を開始しています（名前書き・端子サビは不可）。ネットオフはレトロ対象外が多いため専門店がおすすめです。' },
  { q: '宅配買取の査定にはどのくらい時間がかかりますか？', a: 'サービスにより異なり、カイトリワールドは到着日（混雑時1〜2日）、ゲーム王国・レトログは到着後1〜3営業日、トレーダーは到着3日以内、ゲオは到着翌営業日から5営業日以内、ネットオフ・ブックオフは3〜7営業日、駿河屋は通常4〜14日程度が目安です。年末年始や引越しシーズンなどの繁忙期はさらに遅れることがあります。' },
  { q: '宅配買取と店頭買取・フリマアプリはどちらが高く売れますか？', a: '一概には言えませんが、宅配買取は人件費・店舗コストが低い分、専門店では高値がつきやすい傾向があります。確実なのは売る前に各社の買取価格を比較することです。当サイトでは主要タイトルの買取価格を毎週各社公式サイトで実測し、価格DBとして公開しています。フリマアプリとの比較はメルカリvs買取店の徹底比較をご覧ください。' },
];

export default function OnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲーム宅配買取おすすめ15社比較｜送料・返送料・ダンボール無料・査定日数で選ぶ", "datePublished": "2026-03-15", "dateModified": "2026-07-28", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: '売り方', href: '/' }, { name: '宅配買取 比較' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>宅配買取 実務比較ハブ</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲーム宅配買取おすすめ15社比較｜送料・返送料・ダンボール・査定日数で選ぶ
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            「送料は本当に無料？」「キャンセルしたら返送料は？」「ダンボールはもらえる？」——宅配買取で本当に迷うポイントを、15サービスの<strong>送料・返送料・キャンセル条件・梱包キット・箱なし/故障品対応・レトロ対応・査定日数</strong>で横並び比較。数値はすべて各社公式の確認済み情報（2026年6〜7月確認）に基づき、各社の検証レビューにリンクしています。買取価格は<Link href="/price-index/" style={{ color: '#34D399' }}>毎週実測の価格DB</Link>で送る前に比較できます。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="#comparison" className="btn-primary py-2.5 px-6">
              15社比較表をすぐ見る
            </Link>
            <Link href="/price-index/" className="btn-outline py-2.5 px-6" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}>
              今週の買取価格DB
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Service Comparison (main) */}
        <section id="comparison" className="mb-12 scroll-mt-20">
          <h2 className="section-heading mb-3"><span className="section-heading-bar" />ゲーム宅配買取 15サービス実務比較表</h2>
          <p className="text-sm mb-6" style={{ color: 'var(--color-text-light)' }}>
            送料・キャンセル時の返送料・キャンセル条件（自動承認の有無）・梱包キット・箱なし/故障品対応・レトロ対応・査定期間で比較。サービス名から各社の詳細レビューに移動できます。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>サービス</th>
                  <th>送料</th>
                  <th>返送料（キャンセル時）</th>
                  <th>キャンセル条件</th>
                  <th>梱包キット</th>
                  <th>箱なし・故障品</th>
                  <th>レトロ対応</th>
                  <th>査定期間</th>
                </tr>
              </thead>
              <tbody>
                {serviceComparison.map((s) => (
                  <tr key={s.name}>
                    <td className="font-bold"><Link href={s.href} style={{ color: 'var(--color-electric-green)' }}>{s.name}</Link></td>
                    <td>{s.shipping}</td>
                    <td>{s.returnFee}</td>
                    <td>{s.cancel}</td>
                    <td>{s.kit}</td>
                    <td>{s.nobox}</td>
                    <td>{s.retro}</td>
                    <td>{s.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：各社公式サイト（買取案内・FAQ・特定商取引法に基づく表記）。確認日は各社レビュー記事に明記（2026年6月12日〜7月28日）。キャンペーン・送料条件は変更される場合があるため、申込前に必ず公式サイトの最新情報をご確認ください。「要確認」は公式に明示がない・出典間で表記揺れがある項目です。なお、ウリエル（出張買取専門）・古本市場ふるいち（宅配ふるいちオンライン2026年6月30日終了・店頭中心）・ワンダーレックス（宅配でのゲーム買取可否が公式に明記なし）は宅配買取の比較表から除外しています。一括査定のヒカカクは買取店ではないため別枠です。
          </p>
        </section>

        {/* 価格DB導線（差別化の核） */}
        <section className="mb-12">
          <div className="glass-card-dark p-6">
            <h2 className="text-lg font-extrabold mb-2" style={{ color: '#FFFFFF' }}>条件で絞ったら、<span style={{ color: 'var(--color-electric-green)' }}>買取価格</span>で最終決定</h2>
            <p className="text-sm mb-4" style={{ color: '#94A3B8' }}>
              手数料条件が同じでも、同じソフトの買取価格は業者間で数百〜数千円変わります。当サイトは主要タイトル・本体の買取価格を毎週各社公式サイトで実測しています。送る前に価格DBで比較するのが「高く売る」最短ルートです。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/price-index/" className="btn-primary py-2.5 px-6">今週の買取価格DBを見る</Link>
              <Link href="/software/high-value/" className="btn-outline py-2.5 px-6" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}>高く売れるソフトランキング</Link>
            </div>
          </div>
        </section>

        {/* Choose Guide */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />目的別の選び方</h2>
          <div className="space-y-4">
            {chooseGuide.map((g) => (
              <div key={g.title} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{g.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{g.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cancel/Return注意 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />キャンセル・返送で損しないための注意点</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>「自動承認/自動承諾」は返送不可になりやすい：</span>多くのサービスにある自動承認の仕組みは、一定日数の未回答や選択でキャンセル・返送ができなくなります（カイトリワールドは7日未回答で承認、ゲオは14日未回答で返品など条件が異なります）。査定結果は早めに確認しましょう。</li>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>キャンセル時の返送料は自己負担が多い：</span>返送料が無料（業者負担）と明記されているのはゲーム王国・ゲオ宅配買取・買取王子・ソフマップ・じゃんぱら。ネットオフ・ホビーコレクト・駿河屋・ブックオフ・トレーダー・レトログは自己負担になります。</li>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>買取対象外の品の返送は別扱い：</span>ゲオやじゃんぱらは査定不満時の返送は会社負担ですが、買取対象外品の返送は着払い（自己負担）になります（破棄を選べば無料の場合あり）。</li>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>査定額は完品が前提：</span>掲載されている買取価格は箱・説明書付きの完品が前提のサービスが多く、箱なし・傷ありは減額されます。</li>
            </ul>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />宅配買取の流れ 4ステップ</h2>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={step.title} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{step.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
            ゲオ宅配買取の具体的な手順（ダンボール・本人確認・キャンセルの詳細）は<Link href="/guide/geo-takuhai/" style={{ color: 'var(--color-electric-green)' }}>ゲオ宅配買取のやり方 完全ガイド</Link>で解説しています。
          </p>
        </section>

        {/* Packing Tips */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />梱包のコツ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {packingTips.map((tip) => (
              <div key={tip.title} className="glass-card p-5">
                <h3 className="font-bold mb-2 text-sm" style={{ color: 'var(--color-deep-blue)' }}>{tip.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{tip.description}</p>
              </div>
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
            自宅から<span style={{ color: 'var(--color-electric-green)' }}>条件と価格で選んで</span>ゲームを売ろう
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            宅配買取は送料・返送料・梱包キット・対応ジャンルで満足度が大きく変わります。比較表で条件を絞り、毎週実測の価格DBで最終決定しましょう。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
            <Link href="/price-index/" className="btn-outline py-3 px-8">
              今週の買取価格DB
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連ガイド・レビュー</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/guide/geo-takuhai/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲオ宅配買取のやり方</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ダンボール・日数・キャンセルまで完全ガイド</p>
            </Link>
            <Link href="/method/shop/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>店舗買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>即日現金化・持ち込み買取ガイド</p>
            </Link>
            <Link href="/method/high-price/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>高く売るコツ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>買取価格を最大化する10のテクニック</p>
            </Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
