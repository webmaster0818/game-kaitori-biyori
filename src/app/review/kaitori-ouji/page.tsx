import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

const PAGE_TITLE = '買取王子はやばい？評判・口コミと運営会社・古物商許可を公式で確認【2026年11月】';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description:
    '買取王子はやばいのかを、運営会社（株式会社ティーバイティー・1989年創立）、古物商許可番号、送料・返送料・入金日数・18歳未満の扱いなど公式の条件（2026年11月17日確認）とヒカカク566件の星分布で確認しています。',
  keywords: ['買取王子', '買取王子 やばい', '買取王子 評判', '買取王子 ひどい', '買取王子 口コミ', '買取王子 ゲーム'],
  openGraph: {
    images: ['/og.png'],
    title: PAGE_TITLE,
    description: '買取王子の運営会社・古物商許可・ゲーム買取の条件を公式で確認し、ヒカカクの星分布とあわせて「やばい」と言われる理由を整理しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const CHECKED = '2026年11月17日';

// 1画面目の結論ボックス（すべて公式で 2026-11-17 に確認）
const facts: { label: string; value: string; src: string }[] = [
  { label: '運営会社', value: '株式会社ティーバイティー（代表取締役社長 片桐 拓也）', src: '会社概要' },
  { label: '所在地・創立', value: '愛知県豊明市間米町敷田1225-12／1989年11月創立', src: '会社概要' },
  { label: '古物商許可', value: '愛知県公安委員会 第542520A52400号', src: '会社概要' },
  { label: '送料', value: '無料（箱数・査定金額を問わず買取王子が負担）。買取箱も無料', src: 'トップ' },
  { label: '最低点数', value: '制限なし（1点から申込可）', src: 'トップ' },
  { label: '手数料', value: '査定料・振込手数料は無料。その他の手数料も「原則無料」', src: 'FAQ・特商法表記' },
  { label: '返送料（売らない場合）', value: '無料。ただし返却は全品のみで、自動承認を選んだ場合は返却不可', src: 'FAQ・特商法表記' },
  { label: '値段がつかなかった品', value: '買取王子が引き取り。その品だけの返送は不可', src: 'FAQ' },
  { label: '査定・入金', value: '査定は到着日から最短当日〜4日ほど（お知らせ欄）。銀行振込は手続きの翌日〜2営業日程度、Amazonギフトカードは原則即時', src: 'お知らせ・FAQ' },
  { label: '18歳未満', value: '利用不可', src: 'FAQ' },
  { label: '同一タイトル', value: '個人からは同じタイトルの3点以上は買取不可', src: '特商法表記' },
];

const sources = [
  { name: '会社概要', url: 'https://www.kaitoriouji.jp/company/' },
  { name: 'トップ', url: 'https://www.kaitoriouji.jp/' },
  { name: 'よくあるご質問（FAQ）', url: 'https://www.kaitoriouji.jp/faq/' },
  { name: '特定商取引法に基づく表記', url: 'https://www.kaitoriouji.jp/tokusho/' },
  { name: 'お知らせ・査定状況', url: 'https://www.kaitoriouji.jp/notice/' },
  { name: 'プラスアップキャンペーン', url: 'https://www.kaitoriouji.jp/plusup/' },
];

// ヒカカク 買取王子ページ（2026-11-17 取得）
const HIKAKAKU = { url: 'https://hikakaku.com/company/7/', score: '2.04', stars: [63, 77, 39, 26, 361] as const, latest: '2024年9月22日' };
const hkTotal = HIKAKAKU.stars.reduce((a, b) => a + b, 0);
const pct = (n: number) => `${((n / hkTotal) * 100).toFixed(1)}%`;

const features = [
  { title: '送料・査定料・返送料が無料', description: '送料は箱数や査定金額を問わず買取王子が負担し、買取箱も無料で届きます。査定額に納得できない場合の返送料も無料です。ただし返却は送った商品すべてが対象で、一部だけの返却はできません。' },
  { title: '1点から申し込める', description: '申込点数の制限はなく、1点から利用できます。多くの宅配買取が設けている「◯点以上で送料無料」といった条件は、公式トップには記載されていません。' },
  { title: 'ゲームと他ジャンルを同じ箱で送れる', description: 'ゲームのほか、本・DVD・家電・ブランド品など多くのジャンルに対応しています。古着は取扱いを終了しています（公式メニューに「※取扱い終了」と表示）。' },
  { title: 'ゲームは宅配買取のみ', description: '店頭での買取窓口はなく、ゲームは宅配買取で受け付けています。公式トップに出張買取の案内がありますが、対象はピアノです。集荷は宅配業者が行い、スタッフがその場で査定する出張買取ではありません（公式FAQ）。' },
];

const steps = [
  { step: 1, title: 'Webで申込み・買取箱の依頼', description: '公式サイトから申し込みます。箱がない場合は、買取箱（段ボール）を無料で取り寄せられます。申込時に「査定結果を確認して承認」か「自動承認（すぐにお支払い）」を選びます。' },
  { step: 2, title: '梱包して集荷を待つ', description: '佐川急便が自宅まで集荷に来ます（送り状の記入は不要）。最短で翌日午前中の集荷です。本人確認書類はマイページからのアップロードが推奨されており、コピーの同封も可能です。' },
  { step: 3, title: '査定・結果の通知', description: '査定結果はメールで通知されます。2026年11月17日時点の公式お知らせ欄では、到着日から最短当日〜4日ほどで査定が完了していると案内されています。事前の見積もりは行っていません。' },
  { step: 4, title: '承認で入金／キャンセルで返送', description: '承認すると入金に進みます。銀行振込は手続きの翌日〜2営業日程度、Amazonギフトカードは原則即時発行です。初回は本人確認のため銀行振込のみです。承認しない場合は全品が無料で返送されます。承認後のキャンセルはできません。' },
];

const faqs = [
  { q: '買取王子は「やばい」「怪しい」業者ですか？', a: '運営会社は1989年創立の株式会社ティーバイティー（愛知県豊明市）で、愛知県公安委員会の古物商許可（第542520A52400号）を公式の会社概要に掲載しています。送料・返送料・振込手数料は無料で、条件も公式FAQと特定商取引法に基づく表記に明記されています。一方、ヒカカクでは566件中★1が361件（63.8%）で、評価は低めです。当サイトでは、事業者としての実体は確認できる一方、査定額に不満を持つ利用者が多いサービスと判断しています。' },
  { q: '査定に納得できなかったら費用はかかりますか？', a: 'かかりません。査定額に納得できない場合の返送料は無料です。ただし返却は送った商品すべてが対象で、一部だけの返却はできません。申込時に「自動承認（すぐにお支払い）」を選んだ場合は返却できません（公式FAQ・特定商取引法に基づく表記、2026年11月17日確認）。' },
  { q: '送料無料に条件はありますか？', a: '公式トップでは、送料は箱数や査定金額を問わず買取王子が負担すると案内されています。申込点数の制限もなく、1点から利用できます（2026年11月17日確認）。' },
  { q: '18歳未満でも利用できますか？', a: '利用できません。公式FAQに「18歳未満のお客様はご利用いただくことができません」と記載されています（2026年11月17日確認）。' },
  { q: '同じゲームソフトを何本もまとめて売れますか？', a: '個人の場合、同じタイトルの3点以上は買取の対象外です。万引き品の売却を防ぐためと、特定商取引法に基づく表記に記載されています（2026年11月17日確認）。' },
  { q: '入金はどのくらいで届きますか？', a: '銀行振込は手続きの翌日〜2営業日程度、Amazonギフトカードは原則即時発行です（公式FAQ）。初回は本人確認のため銀行振込のみです。査定は到着日から最短当日〜4日ほどで完了していると公式のお知らせ欄に掲載されています（2026年11月17日確認）。' },
];

export default function KaitoriOujiReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": PAGE_TITLE, "datePublished": "2026-07-09", "dateModified": "2026-11-17", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較している編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map((f) => ({"@type": "Question", "name": f.q, "acceptedAnswer": {"@type": "Answer", "text": f.a}}))}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: '買取王子' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            買取王子はやばい？<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>評判・口コミと運営会社・古物商許可を公式で確認</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            買取王子は、愛知県の株式会社ティーバイティーが運営する宅配買取サービスです。当サイトでは、運営会社・古物商許可・ゲーム買取の条件を公式サイトで{CHECKED}に確認し、第三者サイト（ヒカカク）の評価とあわせて整理しています。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.kaitoriouji.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-accent py-2.5 px-6">
              公式サイトで宅配買取を申込む
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
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>買取王子は古物商許可を持つ1989年創立の会社が運営しています。評価が低い理由は主に査定額です</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-light)' }}>
              運営会社・所在地・古物商許可番号は公式の会社概要に掲載されており、送料・返送料・入金日数などの条件も公式FAQと特定商取引法に基づく表記に明記されています。当サイトでは、詐欺的な業者と判断する根拠は確認していません。一方で、第三者サイトのヒカカクでは{hkTotal}件中★1が{HIKAKAKU.stars[4]}件（{pct(HIKAKAKU.stars[4])}）を占め、総合評価は{HIKAKAKU.score}点です。事前の見積もりがなく、値段がつかなかった品は返送されないため、<strong>高く売りたいゲームは他社と比べてから送ること</strong>をおすすめします。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
                <tbody>
                  {facts.map((f) => (
                    <tr key={f.label} className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                      <th className="text-left py-2 pr-4 whitespace-nowrap align-top" style={{ color: 'var(--color-deep-blue)' }}>{f.label}</th>
                      <td className="py-2">{f.value}<span className="text-xs ml-1">（公式{f.src}）</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              確認日：{CHECKED}。出典：{sources.map((s, i) => (
                <span key={s.url}>{i > 0 && '／'}<a href={s.url} target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>買取王子 {s.name}</a></span>
              ))}
            </p>
            <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>
              関連：<Link href="/software/high-value/" style={{ color: 'var(--color-electric-green)' }}>高く売れるソフトを実測データで確認する</Link>／<Link href="/compare/mercari-vs-kaitori/" style={{ color: 'var(--color-electric-green)' }}>メルカリと買取の手取り額を比較する</Link>
            </p>
          </div>
        </section>

        {/* Third-party rating */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />第三者サイトの評価（ヒカカク）</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-light)' }}>
              買取比較サイト「ヒカカク！」の買取王子のページに掲載されている星の件数を、当サイトで{CHECKED}に取得して集計しました。ゲーム以外（本・DVD・家電など）の利用者も含みます。
            </p>
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <thead>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
                  <th className="text-left py-2 pr-4" style={{ color: 'var(--color-deep-blue)' }}>評価</th>
                  <th className="text-right py-2 pr-4" style={{ color: 'var(--color-deep-blue)' }}>件数</th>
                  <th className="text-right py-2" style={{ color: 'var(--color-deep-blue)' }}>割合</th>
                </tr>
              </thead>
              <tbody>
                {[5, 4, 3, 2, 1].map((s, i) => (
                  <tr key={s} className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                    <td className="py-2 pr-4">★{s}</td>
                    <td className="py-2 pr-4 text-right">{HIKAKAKU.stars[i]}件</td>
                    <td className="py-2 text-right">{pct(HIKAKAKU.stars[i])}</td>
                  </tr>
                ))}
                <tr><td className="py-2 pr-4 font-bold">合計</td><td className="py-2 pr-4 text-right font-bold">{hkTotal}件</td><td className="py-2 text-right">総合評価 {HIKAKAKU.score}点</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              出典：<a href={HIKAKAKU.url} target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>ヒカカク！ 買取王子の買取情報・口コミ・評判</a>（{CHECKED}取得）。同ページの見出しは「2024年9月最新」で、最新の投稿日は{HIKAKAKU.latest}です。2024年10月以降の投稿は反映されていないため、現在の状況とは異なる可能性があります。みん評の買取王子のページは、当サイトの環境からは閲覧できなかったため掲載していません。
            </p>
          </div>
        </section>

        {/* Why "yabai" */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />「やばい」「ひどい」と言われる理由と公式の条件</h2>
          <div className="glass-card p-6">
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-light)' }}>
              ヒカカク！の★1〜2は{HIKAKAKU.stars[3] + HIKAKAKU.stars[4]}件（{pct(HIKAKAKU.stars[3] + HIKAKAKU.stars[4])}）で、同ページの集計でも「悪い・ひどい・買取が安い」というクチコミの比率は68.4%と表示されています（{CHECKED}取得）。公式の条件のうち、査定額への不満につながりやすい点は次のとおりです。
            </p>
            <ul className="text-sm leading-relaxed list-disc pl-5 space-y-1" style={{ color: 'var(--color-text-light)' }}>
              <li>事前の見積もりは行っていません（公式FAQ「トラブル防止のため、事前のお見積り金額はご案内いたしておりません」）。</li>
              <li>値段がつかなかった品は買取王子が引き取り、その品だけの返送は受け付けていません（公式FAQ）。</li>
              <li>返却は全品のみで、一部だけ売って残りを返してもらうことはできません。自動承認を選んだ場合は返却自体ができません（公式FAQ・特定商取引法に基づく表記）。</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--color-text-light)' }}>
              当サイトでは、買取王子は「送料をかけずに不要品をまとめて手放したい方」に向いており、「特定のゲームを1円でも高く売りたい方」には他社との比較が欠かせないと考えています。高く売りたいタイトルがある場合は、<Link href="/software/high-value/" style={{ color: 'var(--color-electric-green)' }}>当サイトが公式価格を実測しているページ</Link>で各社の買取価格を確認してから送ることをおすすめします。
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />買取王子の4つの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{f.description}</p>
              </div>
            ))}
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            キャンペーン：{CHECKED}時点で、査定金額100円以上の商品の点数に応じて買取金額を上乗せする「プラスアップキャンペーン」（5〜9点で+500円〜200点以上で+60,000円）が公式サイトに掲載されています。終了日は掲載されていないため、申込前に<a href="https://www.kaitoriouji.jp/plusup/" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>公式のキャンペーンページ</a>でご確認ください。
          </p>
        </section>

        {/* Company Info */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />運営会社情報（公式サイトより）</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>サービス提供者</th><td className="py-2">株式会社ティーバイティー</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>創立</th><td className="py-2">1989年11月</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>代表者</th><td className="py-2">代表取締役社長 片桐 拓也</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>所在地</th><td className="py-2">〒470-1132 愛知県豊明市間米町敷田1225-12</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>古物許可証番号</th><td className="py-2">愛知県公安委員会 第542520A52400号</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>直営店</th><td className="py-2">東海地区で中古ゴルフクラブ10店舗・本DVD10店舗・中古ブランド2店舗の買取販売店を運営（特定商取引法に基づく表記）</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>支払方法</th><td className="py-2">買取王子ポイント・Amazonギフトカード・選べるe-GIFT・銀行振込（初回は銀行振込のみ）</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：<a href="https://www.kaitoriouji.jp/company/" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>買取王子 会社概要</a>・<a href="https://www.kaitoriouji.jp/tokusho/" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>特定商取引法に基づく表記</a>・<a href="https://www.kaitoriouji.jp/faq/" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>よくあるご質問</a>（{CHECKED}確認）</p>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />利用の流れ（4ステップ）</h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="glass-card p-5 flex gap-4">
                <div className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-white" style={{ background: 'var(--color-deep-blue)' }}>{s.step}</div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：買取王子 公式トップ・よくあるご質問・お知らせ（{CHECKED}確認）</p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="glass-card p-5">
                <summary className="font-bold cursor-pointer" style={{ color: 'var(--color-deep-blue)' }}>{f.q}</summary>
                <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--color-text-light)' }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-8 text-center">
          <a href="https://www.kaitoriouji.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-accent py-3 px-8 inline-block">
            買取王子の公式サイトを見る
          </a>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※料金・条件は変更される場合があります。ご利用前に、公式サイトにて最新情報をご確認ください。</p>
        </section>

        <AuthorBox />
      </div>
    </>
  );
}
