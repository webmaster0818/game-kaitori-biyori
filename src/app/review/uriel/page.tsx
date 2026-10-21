import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'
import KaitoriWorldCta from '@/components/KaitoriWorldCta';

// 公式サイト・第三者サイト・駿河屋の確認日（このページの数値はすべてこの日に確認）
const CHECKED = '2026年10月21日';

export const metadata: Metadata = {
  title: 'ウリエル買取の評判・口コミ｜ゲームの対象地域・店舗・価格例を公式と10/21実測で検証',
  description:
    '買取専門店ウリエルのゲーム買取を公式サイトと口コミ件数で検証しています（2026年10月21日確認）。ゲームの対象は1都3県、買取方法は出張・催事・店舗（川崎）で宅配はありません。ヒカカクの口コミは3件・2.67点、ゲームソフトはクーリングオフ対象外です。',
  keywords: ['ウリエル 買取', '買取ウリエル', 'ウリエル 評判', 'ウリエル 口コミ', 'ウリエル ゲーム買取', 'ウリエル 店舗'],
  openGraph: {
    images: ['/og.png'],
    title: 'ウリエル買取の評判・口コミ｜ゲームの対象地域・店舗・価格例を検証',
    description: '買取専門店ウリエルのゲーム買取の条件・口コミ件数・価格例を、公式サイトと駿河屋の実測（2026年10月21日）で検証しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const cellTh = 'text-left py-2 pr-4 whitespace-nowrap align-top';
const rowBorder = { borderColor: 'rgba(0,0,0,0.06)' };
const thColor = { color: 'var(--color-deep-blue)' };
const linkColor = { color: 'var(--color-electric-green)' };

// ゲーム買取の条件（公式サイト 2026-10-21 確認）
const summary: { label: string; value: string }[] = [
  { label: 'ゲームの対象地域', value: '東京都・神奈川県・千葉県・埼玉県（ゲーム買取ページのFAQに明記）' },
  { label: '買取方法', value: '出張買取・催事買取・店舗買取の3種類。宅配買取は買取方法の一覧に掲載されていません' },
  { label: '費用', value: '出張料・査定料・買取手数料・キャンセル料は無料' },
  { label: '支払い', value: '買取成立後、その場で現金払い（振込の案内はありません）' },
  { label: '出張の日時', value: '最短で翌日以降。訪問時間は原則10:00〜17:00（時間外は要相談）' },
  { label: '店舗', value: 'ウリエル川崎 ラ チッタデッラ店（11:00〜21:00・最終受付20:00・要予約）。川崎店以外は準備中' },
  { label: 'クーリングオフ', value: '出張買取のみ対象（店舗買取は対象外）。ゲームソフトは法令上の対象外の物品です（下記で説明）' },
  { label: '利用条件', value: '本人確認書類が必要。18歳未満は利用不可、18・19歳は同意書または委任状が必要' },
  { label: 'ゲーム機の注意点', value: 'データを初期化していないゲーム機・ソフトは買取を断ると公式に明記' },
  { label: '価格表', value: 'ゲームの買取価格表は公開されていません（公式の買取事例は2022〜2023年の3件のみ）' },
];

// ウリエル公式の買取事例（ゲーム買取ページ掲載）と、駿河屋の買取検索に表示された価格（2026-10-21）
const hardwareExamples = [
  { uriel: '初代PlayStation 機器 数点：3,000円（2022年4月4日・東京都港区）', ref: 'プレイステーション本体 SCPH-7000：5,100円／SCPH-9000：6,500円（いずれも本体1台）' },
  { uriel: 'PlayStation 4 機器 数点：10,500円（2023年6月1日・千葉県千葉市）', ref: 'PS4本体 ジェットブラック 500GB（CUH-2200AB01）：14,000円' },
  { uriel: 'Nintendo Switch本体と周辺機器 数点：19,000円（2022年2月17日・横浜市）', ref: 'Switch本体 ネオン 2019年8月モデル（HAD-S-KABAH）：12,000円／有機ELモデル ホワイト（HEG-S-KAAAA）：14,000円' },
];

// ウリエル公式が「高値が付きやすい」と挙げるシリーズの代表作（駿河屋 2026-10-21）
const softExamples = [
  { title: 'ゼルダの伝説 ティアーズ オブ ザ キングダム［通常版］', hw: 'Switch', price: '2,500円' },
  { title: 'ポケットモンスター スカーレット', hw: 'Switch', price: '2,000円' },
  { title: 'ドラゴンクエストXI 過ぎ去りし時を求めて S 新価格版', hw: 'Switch', price: '2,200円' },
  { title: 'ファイナルファンタジーVII リバース［新価格版］', hw: 'PS5', price: '1,800円' },
];

const features = [
  { title: '出張買取が中心', description: '査定士が自宅を訪問し、その場で査定・現金払いを行います。訪問当日に査定する品物を追加することもできます。玄関先での査定や女性スタッフの希望も、事前に伝えることができると公式に案内されています。' },
  { title: 'ゲーム以外とまとめて売れる', description: '公式の買取品目一覧には、着物・切手・古銭・ブランド品・貴金属・お酒・時計・オーディオ・楽器・カメラ・ホビーなど20項目（ゲーム・遺品整理を含む）が掲載されています。公式FAQでは、ゲームとまとめて売ることで高値が付く場合があると説明しています。' },
  { title: '費用は無料・その場で現金', description: '出張料・査定料・買取手数料・キャンセル料は無料です。査定額を聞いてから断ることもできます。店舗買取でも、買取が成立した場合はその場で現金を受け取れます。' },
  { title: 'ゲームの対象は1都3県', description: '出張買取の対応エリアは関東・中部・近畿・中国・四国・九州（沖縄県を除く）に広がっていますが、ゲームの買取は東京・神奈川・千葉・埼玉に限られています。1都3県以外の方は、宅配買取に対応したゲーム専門店をご検討ください。' },
];

const steps = [
  { step: 1, title: '電話・メール・LINEで申込み', description: '公式サイトのフリーダイヤル（24時間受付・年末年始を除く）、メールフォーム、LINEから申し込みます。希望日時と売りたい品物を伝えます。査定のみの依頼もできます。電話だけでの査定は受け付けていません。' },
  { step: 2, title: '査定士が訪問', description: '最短で翌日以降、原則10:00〜17:00の間に訪問します。予約状況や訪問先によっては希望日に対応できない場合があります。' },
  { step: 3, title: 'その場で査定・価格提示', description: '査定士が品物を確認し、その場で買取価格を提示します。査定額の根拠を説明する方針が公式に示されています。納得できない場合は断ることができ、費用はかかりません。' },
  { step: 4, title: '本人確認・現金受取り', description: '本人確認書類を提示し（コピーを取られます）、その場で現金を受け取ります。出張買取は契約書面を受け取った日から8日以内のクーリングオフが可能ですが、ゲームソフトは対象外の物品です。' },
];

const targets = [
  { category: 'ゲーム（公式に記載のあるもの）', items: ['ゲーム機本体（新作・中古・レトロ）', 'ゲームソフト・大量のゲームカセット', 'コントローラーのみ・コード類', '壊れたゲーム機（状態により査定）'] },
  { category: 'ホビー・趣味', items: ['ホビー・フィギュア', 'カメラ', 'オーディオ・レコード', '楽器', 'ゴルフ用品'] },
  { category: 'その他の主な品目', items: ['着物・毛皮', '切手・古銭', 'ブランド品・ブランド食器', '金・貴金属・宝石・時計', 'お酒・香水・骨董品'] },
];

const faqs = [
  { q: 'ウリエルでゲームを売ると、どのくらいの金額になりますか？', a: 'ウリエルはゲームの買取価格表を公開していないため、事前に金額を確認する方法は出張査定のみです。公式サイトの買取事例は、初代PlayStation機器数点3,000円（2022年）、PS4機器数点10,500円（2023年）、Switch本体と周辺機器数点19,000円（2022年）の3件です。売る前に、駿河屋などゲーム専門店の公開価格を調べておくと、提示額と比べて判断しやすくなります（当サイトが2026年10月21日に確認した価格は本文の表をご覧ください）。' },
  { q: 'ゲームの出張買取はどの地域で利用できますか？', a: 'ゲームの買取は東京都・神奈川県・千葉県・埼玉県が対象です（公式ゲーム買取ページのFAQ・2026年10月21日確認）。出張買取全体の対応エリアは関東・中部・近畿・中国・四国・九州（沖縄県を除く）ですが、ゲームは1都3県に限られます。' },
  { q: 'ウリエルに店舗はありますか？', a: '店舗買取は「ウリエル川崎 ラ チッタデッラ店」（神奈川県川崎市川崎区小川町4-1 ラ チッタデッラ内 マッジョーレ2階・11:00〜21:00・最終受付20:00）で行っています。事前の電話予約が必要で、川崎店以外の店舗は準備中と案内されています。店舗の買取品目一覧にゲームの個別表記はないため、ゲームを持ち込む場合は予約時にご確認ください。' },
  { q: '宅配買取はできますか？送料や振込はどうなりますか？', a: '2026年10月21日時点で、公式サイトの買取方法の一覧は出張・催事・店舗の3種類で、宅配買取は掲載されていません。そのため送料・振込のタイミングに関する案内もなく、支払いはその場での現金払いです。宅配で売りたい場合は、宅配買取に対応したゲーム専門店をご検討ください。' },
  { q: '売った後にクーリングオフはできますか？', a: 'ウリエルの公式ページでは、クーリングオフは出張買取のみ適用（店舗買取は対象外）と案内しています。また、特定商取引法施行令第34条で定める物品の具体例（消費者庁）には「家庭用コンピュータゲームに用いられるプログラムを記録した物」が含まれており、ゲームソフトは訪問購入のクーリングオフの対象外です。ゲーム機本体はこの具体例に記載がありませんが、契約前に書面と査定士の説明で扱いをご確認ください。' },
  { q: 'ウリエルは「やばい」「怪しい」のでしょうか？', a: '運営元の株式会社クオーレは、愛知県公安委員会の古物商許可（第542791100800号）を取得し、2011年3月に設立された会社です。出張料・査定料・キャンセル料は無料で、査定額を聞いてから断ることができます。一方、ヒカカクの口コミは3件・総合2.67点と件数が少なく、ゲームに関する投稿はありません。評判を判断する材料が少ないため、提示額は他社の公開価格と比べてから決めることをおすすめします。' },
  { q: 'キャンペーンは実施されていますか？', a: '2026年10月は、広告やWebサイトを見て出張買取を申し込み、1回の成約金額が5,000円以上の方から抽選で2名に買取金額を含めて7倍の金額を還元するキャンペーンが案内されています（対象期間 2026年10月1日〜31日）。抽選のため、全員の買取額が上がるものではありません。ゲーム買取ページには「出張買取限定で買取価格20%UP」「30%UP」の記載もありますが、条件や期間の記載がないため、申込み時にご確認ください。' },
  { q: '売る前に準備しておくことはありますか？', a: 'ゲーム機・ソフトのデータ初期化が必要です。公式サイトでは、初期化されていないゲーム機・ソフトは個人情報保護の観点から買取を断ると明記しています。あわせて運転免許証・マイナンバーカードなどの本人確認書類をご用意ください。付属品がなくても買取は可能ですが、揃っている方が高価買取につながりやすいと案内されています。' },
];

export default function UrielReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ウリエル買取の評判・口コミ｜ゲームの対象地域・店舗・価格例を公式と実測で検証", "datePublished": "2026-03-15", "dateModified": "2026-10-21", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: '買取ウリエル' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="rank-badge rank-badge-2">2</span>
            <span className="tag-pill text-xs" style={{ background: 'rgba(245,158,11,0.2)', color: '#FBBF24' }}>おすすめ2位</span>
            <span className="tag-pill text-xs" style={{ background: 'rgba(255,255,255,0.12)', color: '#E2E8F0' }}>公式・口コミ確認日 {CHECKED}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            買取ウリエル<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>評判・口コミとゲーム買取の条件</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            買取専門店ウリエルは、株式会社クオーレが運営する出張買取中心の総合買取サービスです。ゲームの買取は東京・神奈川・千葉・埼玉が対象で、査定士が自宅を訪問し、その場で現金を支払います。当サイトでは、公式サイトの条件・口コミの件数・専門店の公開価格を{CHECKED}に確認し、このページに掲載しています。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="btn-accent py-2.5 px-6">
              公式サイトで出張買取を申込む
            </a>
            <Link href="/" className="btn-outline py-2.5 px-6" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}>
              ランキングに戻る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Conclusion */}
        <section className="mb-12">
          <div className="glass-card p-6" style={{ borderLeft: '4px solid var(--color-accent-orange)' }}>
            <h2 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>1都3県で、ゲームとほかの品物を自宅でまとめて売りたい方に向いたサービスです</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-light)' }}>
              出張料・査定料・キャンセル料は無料で、査定額を聞いてから断ることができます。一方で、ゲームの買取価格表は公開されておらず、第三者サイトの口コミも少ないため、金額を事前に比べにくい点にご注意ください。根拠は以下のとおりです。
            </p>
            <ul className="text-sm leading-relaxed space-y-1.5" style={{ color: 'var(--color-text-light)' }}>
              <li>・<strong>対象地域</strong>：ゲームの買取は東京・神奈川・千葉・埼玉のみです（出張買取全体は沖縄県を除く関東〜九州）。</li>
              <li>・<strong>買取方法</strong>：出張・催事・店舗（川崎）の3種類です。宅配買取は掲載されていないため、送料や振込の案内はありません。</li>
              <li>・<strong>口コミ</strong>：ヒカカクの口コミは3件・総合2.67点で、ゲームに関する投稿は0件です。公式サイトのお客様の声274件のうち、ゲームの声は3件です。</li>
              <li>・<strong>クーリングオフ</strong>：出張買取のみ対象です。ゲームソフトは法令上、訪問購入のクーリングオフの対象外です。</li>
              <li>・<strong>価格</strong>：公式の買取事例は2022〜2023年の3件のみです。専門店の公開価格（{CHECKED}実測）を本文に掲載しています。</li>
            </ul>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              関連：<Link href="/price-index/" style={linkColor}>現在最も高い業者を価格で確認する</Link>／<Link href="/condition-guide/" style={linkColor}>箱なし・傷ありでも売れるか状態別マップで確認する</Link>／<Link href="/compare/hikakaku-vs-uriel/" style={linkColor}>ヒカカク！とウリエルを比較する</Link>
            </p>
          </div>
        </section>

        {/* Summary table */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ウリエルのゲーム買取の条件一覧（{CHECKED}確認）</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                {summary.map((r, i) => (
                  <tr key={r.label} className={i < summary.length - 1 ? 'border-b' : ''} style={rowBorder}>
                    <th className={cellTh} style={thColor}>{r.label}</th>
                    <td className="py-2">{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              出典：買取専門店ウリエル公式サイトの<a href="https://www.uriel-cuore.co.jp/hobby/game/" target="_blank" rel="noopener noreferrer nofollow" style={linkColor}>ゲーム買取</a>・<a href="https://www.uriel-cuore.co.jp/visit/" target="_blank" rel="noopener noreferrer nofollow" style={linkColor}>出張買取</a>・<a href="https://www.uriel-cuore.co.jp/shop/" target="_blank" rel="noopener noreferrer nofollow" style={linkColor}>店頭・持込買取</a>・<a href="https://www.uriel-cuore.co.jp/coolingoff/" target="_blank" rel="noopener noreferrer nofollow" style={linkColor}>クーリングオフ</a>の各ページ（{CHECKED}確認）。条件は変更される場合があるため、ご利用前に公式サイトにて最新情報をご確認ください。
            </p>
          </div>
        </section>

        {/* Price examples */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />買取価格の例：ウリエルの公式事例と専門店の公開価格（{CHECKED}実測）</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-light)' }}>
            ウリエルはゲームの買取価格表を公開していません。そのため当サイトでは、公式サイトに掲載されている買取事例と、同じ種類のゲーム機について駿河屋の買取検索に表示された価格を並べて掲載しています。出張査定の提示額を判断する際の目安としてご利用ください。
          </p>
          <div className="glass-card p-6 overflow-x-auto mb-4">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <thead>
                <tr className="border-b-2" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
                  <th className="text-left py-2 pr-4" style={thColor}>ウリエル公式の買取事例（買取日・地域）</th>
                  <th className="text-left py-2" style={thColor}>駿河屋の買取価格（{CHECKED}）</th>
                </tr>
              </thead>
              <tbody>
                {hardwareExamples.map((r, i) => (
                  <tr key={r.uriel} className={i < hardwareExamples.length - 1 ? 'border-b' : ''} style={rowBorder}>
                    <td className="py-2 pr-4 align-top">{r.uriel}</td>
                    <td className="py-2 align-top">{r.ref}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              ウリエルの事例は「機器 数点」「本体と周辺機器 数点」の合計額で、点数・型番・状態は公開されていません。買取日も2022〜2023年のため、駿河屋の現在価格とは条件が異なり、金額の高低を直接比べることはできません。駿河屋の価格は公式の買取検索に表示された金額で、付属品・状態の条件は駿河屋の規定によります。
            </p>
          </div>
          <div className="glass-card p-6 overflow-x-auto">
            <h3 className="font-bold mb-2" style={thColor}>ウリエルが「高値が付きやすい」と挙げるシリーズの代表作</h3>
            <p className="text-sm mb-3" style={{ color: 'var(--color-text-light)' }}>
              ウリエルのゲーム買取ページでは、ドラゴンクエスト・ファイナルファンタジー・ポケットモンスター・ゼルダの伝説を高値が付きやすいタイトルとして挙げています。各シリーズの代表作について、駿河屋の買取価格を確認した結果は以下のとおりです。
            </p>
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <thead>
                <tr className="border-b-2" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
                  <th className="text-left py-2 pr-4" style={thColor}>タイトル</th>
                  <th className="text-left py-2 pr-4" style={thColor}>機種</th>
                  <th className="text-right py-2" style={thColor}>駿河屋の買取価格</th>
                </tr>
              </thead>
              <tbody>
                {softExamples.map((r, i) => (
                  <tr key={r.title} className={i < softExamples.length - 1 ? 'border-b' : ''} style={rowBorder}>
                    <td className="py-2 pr-4">{r.title}</td>
                    <td className="py-2 pr-4 whitespace-nowrap">{r.hw}</td>
                    <td className="py-2 text-right font-bold whitespace-nowrap">{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              出典：<a href="https://www.suruga-ya.jp/kaitori/kaitori.html" target="_blank" rel="noopener noreferrer nofollow" style={linkColor}>駿河屋公式の買取検索</a>（{CHECKED}閲覧）、<a href="https://www.uriel-cuore.co.jp/hobby/game/" target="_blank" rel="noopener noreferrer nofollow" style={linkColor}>ウリエル公式 ゲーム買取ページ</a>（同日確認）。ソフト1本あたりの価格は1,800〜2,500円で、点数が少ない場合は出張よりも宅配・店頭の専門店の方が金額を確認しやすい場合があります。価格は日々変動するため目安としてご覧ください。ほかの業者の価格は<Link href="/price-index/" style={linkColor}>買取価格インデックス</Link>に掲載しています。
            </p>
          </div>
        </section>

        {/* Reviews */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />口コミ・評判：件数と評点（{CHECKED}確認）</h2>
          <div className="glass-card p-6 overflow-x-auto mb-4">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <thead>
                <tr className="border-b-2" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
                  <th className="text-left py-2 pr-4" style={thColor}>掲載先</th>
                  <th className="text-left py-2 pr-4" style={thColor}>評価・件数</th>
                  <th className="text-left py-2" style={thColor}>内訳</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b" style={rowBorder}>
                  <td className="py-2 pr-4 align-top">ヒカカク！（投稿型の口コミサイト）</td>
                  <td className="py-2 pr-4 align-top font-bold whitespace-nowrap">2.67（3件）</td>
                  <td className="py-2 align-top">★5 1件／★4 0件／★3 0件／★2 1件／★1 1件。投稿日は2022年9月9日（オーディオ機器・★5）、2022年9月30日（★1）、2025年8月20日（時計・アクセサリー・バッグ・★2）で、ゲームの投稿はありません</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">ウリエル公式「お客様の声」</td>
                  <td className="py-2 pr-4 align-top font-bold whitespace-nowrap">274件（ゲーム3件）</td>
                  <td className="py-2 align-top">全28ページを当サイトで集計。ゲームの声は埼玉県春日部市（30代男性）・横浜市（50代男性）・東京都大田区（60代男性）の3件で、いずれも出張買取です。運営会社が掲載している声である点にご留意ください</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              出典：<a href="https://hikakaku.com/company/23566/reviews/" target="_blank" rel="noopener noreferrer nofollow" style={linkColor}>ヒカカク！ウリエルのクチコミ一覧</a>、<a href="https://www.uriel-cuore.co.jp/voice/" target="_blank" rel="noopener noreferrer nofollow" style={linkColor}>ウリエル公式 お客様の声</a>（いずれも{CHECKED}確認）。件数・評点は確認日時点のものです。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-electric-green)' }}>公式のゲームの声に書かれている内容</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・連絡した当日に返事があり、日程調整で待たされなかった（春日部市）</li>
                <li>・初めての利用で、想像していた以上の金額だった（横浜市）</li>
                <li>・壊れたソフトや古いソフトも買い取ってもらえた（大田区）</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>ヒカカクの低評価2件に書かれている内容</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・時計は1本数千円、バッグは千円の査定で、素材が不明なアクセサリーは査定不可だった（★2・2025年）</li>
                <li>・「非常に不満。口車に乗って売ってしまった。」（★1・2022年・本文はこの1文のみ）</li>
              </ul>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            上記は各掲載先の投稿を当サイトで要約したものです。第三者サイトの件数が3件と少なく、ゲームの投稿もないため、評判だけでゲームの査定額の傾向を判断することはできません。
          </p>
        </section>

        {/* Suspicious? */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />「やばい・怪しい」と検索される理由と確認できる事実</h2>
          <div className="space-y-4">
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={thColor}>理由1：出張買取そのものへの警戒感</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>過去に問題となった強引な訪問買取の印象から、出張買取を警戒する方は少なくありません。ウリエルを運営する株式会社クオーレは古物商許可（愛知県公安委員会 第542791100800号）を取得しています。出張買取は利用者からの申込みを受けて訪問する方式で、出張料・査定料・キャンセル料は無料です。</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={thColor}>理由2：査定額を事前に確認できない</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>ゲームの買取価格表がなく、電話だけの査定も受け付けていないため、金額は訪問後に初めて分かります。ヒカカクの低評価2件も査定額や対応への不満でした。訪問前に専門店の公開価格を調べておくと、提示額が妥当かどうかを判断しやすくなります。</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={thColor}>理由3：対面では断りにくいと感じる方がいる</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>査定額に納得できない場合は、その場で断ることができ、キャンセル料はかかりません。ただし、ゲームソフトはクーリングオフの対象外のため、売った後に取り消すことは前提にせず、その場で判断することが大切です。玄関先での査定や女性スタッフの希望も事前に伝えることができます。</p>
            </div>
          </div>
        </section>

        {/* Cooling-off */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />クーリングオフの扱い：ゲームソフトは対象外です</h2>
          <div className="glass-card p-6">
            <ul className="text-sm leading-relaxed space-y-2" style={{ color: 'var(--color-text-light)' }}>
              <li>・ウリエルの公式ページでは、クーリングオフは<strong>出張買取のみ</strong>適用で、店舗買取は対象外と案内しています。</li>
              <li>・訪問購入（出張買取）のクーリングオフは、契約書面を受け取った日から8日以内に行うことができます。</li>
              <li>・消費者庁が公開している「特定商取引に関する法律施行令第34条で規定する物品の具体例」には、CD・DVD・ブルーレイディスクとともに「コンピューター用ソフト（家庭用コンピュータゲームに用いられるプログラムを記録した物を含む。）」が記載されています。このため<strong>ゲームソフトは訪問購入の規制の対象外</strong>で、クーリングオフもできません。</li>
              <li>・ゲーム機本体は同じ具体例の一覧に記載がありません。本体を含めて売る場合は、契約前に書面と査定士の説明でクーリングオフの扱いをご確認ください。</li>
            </ul>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              出典：<a href="https://www.uriel-cuore.co.jp/coolingoff/" target="_blank" rel="noopener noreferrer nofollow" style={linkColor}>ウリエル公式 クーリングオフ</a>、<a href="https://www.no-trouble.caa.go.jp/what/doortodoorpurchases/" target="_blank" rel="noopener noreferrer nofollow" style={linkColor}>消費者庁 特定商取引法ガイド「訪問購入」</a>および同ページ掲載の<a href="https://www.no-trouble.caa.go.jp/pdf/20230421la02_10.pdf" target="_blank" rel="noopener noreferrer nofollow" style={linkColor}>施行令第34条で規定する物品の具体例（PDF）</a>（いずれも{CHECKED}確認）。個別の取引への適用は、契約書面の記載や消費生活センターへの相談でご確認ください。
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />買取ウリエルの4つの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={thColor}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Company Info */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />運営会社情報（公式サイトより）</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={rowBorder}><th className={cellTh} style={thColor}>運営会社</th><td className="py-2">株式会社クオーレ（2011年3月設立・資本金5,000万円）</td></tr>
                <tr className="border-b" style={rowBorder}><th className={cellTh} style={thColor}>所在地</th><td className="py-2">愛知県大府市柊山町8-53-2（東京支社：東京都品川区東品川／東京営業所：品川区南大井／大阪営業所：大阪市天王寺区）</td></tr>
                <tr className="border-b" style={rowBorder}><th className={cellTh} style={thColor}>古物商許可</th><td className="py-2">愛知県公安委員会 第542791100800号</td></tr>
                <tr className="border-b" style={rowBorder}><th className={cellTh} style={thColor}>買取方法</th><td className="py-2">出張買取・催事買取（関東の商業施設・スーパー等で開催）・店舗買取（川崎 ラ チッタデッラ店）</td></tr>
                <tr className="border-b" style={rowBorder}><th className={cellTh} style={thColor}>出張エリア</th><td className="py-2">関東・中部・近畿・中国・四国・九州（沖縄県を除く）。ゲームの買取は東京・神奈川・千葉・埼玉</td></tr>
                <tr><th className={cellTh} style={thColor}>受付</th><td className="py-2">フリーダイヤル 0120-242-556（24時間受付・年末年始を除く）・メール・LINE</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：<a href="https://www.uriel-cuore.co.jp/company/" target="_blank" rel="noopener noreferrer nofollow" style={linkColor}>買取専門店ウリエル公式 会社概要</a>・出張買取・催事買取・店頭買取の各ページ（{CHECKED}確認）。</p>
          </div>
        </section>

        {/* Fee 4-point */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />手数料の確認：出張費・査定料・キャンセル料・返送料の4項目</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={rowBorder}><th className={cellTh} style={thColor}>出張費</th><td className="py-2">無料</td></tr>
                <tr className="border-b" style={rowBorder}><th className={cellTh} style={thColor}>査定料</th><td className="py-2">無料（店舗買取・催事買取も無料）</td></tr>
                <tr className="border-b" style={rowBorder}><th className={cellTh} style={thColor}>キャンセル料</th><td className="py-2">無料。査定額を聞いた後に断ることができます</td></tr>
                <tr><th className={cellTh} style={thColor}>返送料</th><td className="py-2">該当なし（宅配買取の案内がないため）。店舗で値段が付かなかった品物は持ち帰りとなります</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：買取専門店ウリエル公式サイト（出張買取・店頭買取・ゲーム買取のFAQ、{CHECKED}確認）。</p>
          </div>
        </section>

        {/* Pros/Cons */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />メリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-electric-green)' }}>メリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>+ 梱包・発送をせずに自宅で売却が完結する</li>
                <li>+ 買取成立後、その場で現金を受け取れる</li>
                <li>+ ゲーム以外の品物（公式一覧で20項目）とまとめて査定を受けられる</li>
                <li>+ 出張費・査定料・キャンセル料が無料</li>
                <li>+ 玄関先での査定や女性スタッフを希望できる</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- ゲームの買取は東京・神奈川・千葉・埼玉のみ</li>
                <li>- ゲームの買取価格表がなく、金額は訪問後まで分からない</li>
                <li>- 宅配買取の案内がなく、在宅での立ち会いが必要</li>
                <li>- ゲームソフトはクーリングオフの対象外</li>
                <li>- 第三者サイトの口コミが3件と少ない</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />出張買取の利用手順（4ステップ）</h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-accent-orange)', opacity: 0.3 }}>
                  {String(s.step).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={thColor}>{s.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Target Items */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />買取対象</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {targets.map((t) => (
              <div key={t.category} className="glass-card p-5">
                <h3 className="font-bold mb-3" style={thColor}>{t.category}</h3>
                <ul className="space-y-1.5 text-sm" style={{ color: 'var(--color-text-light)' }}>
                  {t.items.map((item) => <li key={item}>・{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs mt-4" style={{ color: 'var(--color-text-lighter)' }}>
            ※ 品目ごとに対応地域が異なり、ゲームは東京・神奈川・千葉・埼玉が対象です。催事買取では自転車・医療器具・大型家具・家電、データを消去していない携帯電話は買取不可と案内されています。詳しくは公式サイトをご確認ください。
          </p>
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
            買取ウリエルの<span style={{ color: 'var(--color-accent-orange)' }}>出張買取</span>を利用する
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            東京・神奈川・千葉・埼玉の方は、自宅でゲームの査定を受け、その場で現金化できます。出張費・査定料は無料です。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="btn-accent py-3 px-8">
              無料で出張買取を申込む
            </a>
            <Link href="/" className="btn-outline py-3 px-8" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#CBD5E1' }}>
              他のサービスと比較
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={thColor}>他のサービスとの比較</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/review/hikakaku/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-green text-xs mb-2 inline-block">1位</span>
              <p className="font-bold text-sm" style={thColor}>ヒカカク！</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社一括査定の買取比較サイト</p>
            </Link>
            <Link href="/review/tifana/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-blue text-xs mb-2 inline-block">3位</span>
              <p className="font-bold text-sm" style={thColor}>ティファナ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ホビー系の買取に強みを持つリサイクルショップ</p>
            </Link>
          </div>
        </section>
        {/* 関連記事 */}
        <section style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--color-accent-soft-weak)', borderRadius: '12px', borderLeft: '3px solid var(--color-electric-green)' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>関連記事</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/" style={linkColor}>ゲーム買取おすすめ比較（目的別の3つの選択肢・最新の最高値）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/price-index/" style={linkColor}>ゲーム買取価格インデックス（現在最も高い業者の確認）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/hikakaku-vs-uriel/" style={linkColor}>ヒカカク！とウリエルの比較</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/condition-guide/" style={linkColor}>状態別ゲーム買取 許容度マップ（箱なし・傷・ジャンク）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/mercari-vs-kaitori/" style={linkColor}>メルカリ vs 買取 手取り額シミュレーション</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/kaitori-ranking/" style={linkColor}>ゲーム買取おすすめランキング15選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/ps5/" style={linkColor}>PS5買取おすすめ3選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/switch/" style={linkColor}>Switch買取おすすめ3選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/data-delete/" style={linkColor}>ゲーム機のデータ初期化の方法</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/shop-vs-online/" style={linkColor}>店舗買取 vs 宅配買取の比較</Link></li>
          </ul>
        </section>

        <KaitoriWorldCta compact />
        <AuthorBox />
      </div>
    </>
  );
}
