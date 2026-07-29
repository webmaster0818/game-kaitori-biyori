import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'
import KaitoriWorldCta from '@/components/KaitoriWorldCta';

export const metadata: Metadata = {
  title: '古本市場（ふるいち）のゲーム買取の評判・口コミは？【2026年7月】店頭買取の実態・宅配終了を検証',
  description:
    '古本市場（ふるいち）のゲーム買取を検証。運営は東証スタンダード上場の株式会社テイツー（埼玉県公安委員会 古物商許可 第431100002846号）。上場企業の安心感と店頭ですぐ現金化できる強み、レトロゲームの強さ、そして宅配「ふるいちオンライン」が2026年6月30日で終了した点まで公式情報（2026年7月確認）で正直に解説します。',
  keywords: ['古本市場 買取', 'ふるいち 買取', 'ふるいち ゲーム 買取', '古本市場 評判', 'テイツー 買取'],
  openGraph: {
    title: '古本市場（ふるいち）のゲーム買取の評判・口コミは？【2026年7月】店頭買取の実態を検証',
    description: '古本市場（ふるいち）のゲーム買取を、上場運営テイツーの公式情報で検証。店頭買取の強みと宅配終了の注意点を解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: '東証スタンダード上場企業が運営', description: '運営は株式会社テイツー（東証スタンダード上場・岡山市）。上場企業ならではの情報開示・コンプライアンス体制があり、「実態不明の業者では」という不安が少ないのが安心材料です。' },
  { title: 'その場で査定・即日現金化（店頭）', description: '店頭買取なので、持ち込めばその場で査定・現金受取りが可能。宅配のように発送・入金待ちの時間がなく、すぐに現金化したい人に向きます。' },
  { title: 'レトロゲーム・周辺機器に強い', description: 'ファミコン・スーファミ等のレトロゲームから最新機種まで幅広く買取。ゲーム専門の買取実績が長く、周辺機器や本・トレカもまとめて持ち込めます。' },
  { title: '宅配「ふるいちオンライン」は終了済み', description: '宅配買取だった「ふるいちオンライン」は2026年6月30日でサービス終了しました。現在の買取は店頭買取が中心です。宅配で送って売りたい場合は、宅配対応の他社を検討してください。' },
];

const steps = [
  { step: 1, title: '売りたい品と本人確認書類を準備', description: 'ゲーム機・ソフト・周辺機器などをまとめ、運転免許証などの本人確認書類を用意します（古物営業法により必須）。' },
  { step: 2, title: '最寄りの古本市場・ふるいち店舗へ持ち込み', description: '全国の店舗に持ち込みます。店舗により買取対象・在庫状況が異なるため、事前に取扱いを確認しておくとスムーズです。' },
  { step: 3, title: 'その場で査定・価格提示', description: 'スタッフがその場で査定し、買取価格を提示します。査定料は無料で、納得できなければキャンセルも可能です。' },
  { step: 4, title: '現金受取り・完了', description: '査定額に納得したら、その場で現金を受け取って完了です。宅配のような入金待ちがありません。' },
];

const faqs = [
  { q: '古本市場（ふるいち）は宅配買取に対応していますか？', a: '宅配買取だった「ふるいちオンライン」は2026年6月30日23:00でサービスを終了しました。2026年7月時点の買取は店頭買取が中心です。自宅から送って売りたい場合は、宅配対応の他社（買取王子・ゲーム王国・カイトリワールド等）を検討してください。' },
  { q: '古本市場の運営会社は信頼できますか？', a: '運営は株式会社テイツー（本社：岡山市南区／東証スタンダード上場）で、埼玉県公安委員会の古物商許可 第431100002846号を取得しています。上場企業として情報開示やコンプライアンス体制が整っており、実態不明の業者ではありません。' },
  { q: 'レトロゲームも買い取ってもらえますか？', a: 'はい、ファミコン・スーパーファミコン・ゲームボーイなどのレトロゲームから最新機種まで幅広く買取対象です。古本市場・ふるいちはゲーム買取の実績が長く、周辺機器やトレカ・本もまとめて持ち込めます。付属品の有無や動作状態で査定額が変わるため、揃えて持ち込むのがおすすめです。' },
  { q: '査定料やキャンセル料はかかりますか？', a: '店頭買取のため出張費はなく、査定料は無料です。査定額に納得できなければその場でキャンセルできます。持ち込みなので、宅配のような返送料の概念もありません。' },
  { q: '店頭買取と宅配買取はどちらが得ですか？', a: '店頭は「その場で現金化できる・送料や返送のやり取りが不要」、宅配は「自宅から送れて店舗に行く手間がない」という違いがあります。古本市場は現在店頭中心なので、すぐ現金化したい・近くに店舗がある人に向きます。高値を狙うなら、当サイトの毎週実測の価格DBで各社の買取価格を比較してから決めるのが確実です。' },
  { q: '売る前に買取価格を調べる方法はありますか？', a: 'ふるいちの買取価格ページで一部タイトルの参考価格が公開されています。あわせて当サイトでは毎週、ブックオフ・ゲオなど各社の実際の買取価格を調査して掲載しているため、「今どこが一番高いか」を比較してから売り先を選べます。' },
];

export default function FuruichiReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "古本市場（ふるいち）のゲーム買取の評判・口コミは？店頭買取の実態・宅配終了を検証", "datePublished": "2026-07-09", "dateModified": "2026-07-09", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map((f) => ({"@type": "Question", "name": f.q, "acceptedAnswer": {"@type": "Answer", "text": f.a}}))}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: '古本市場（ふるいち）' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            古本市場（ふるいち）のゲーム買取の評判は？<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>店頭買取の実態を検証</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            東証スタンダード上場の株式会社テイツーが運営する、ゲーム・本・トレカに強い買取チェーン。上場企業の安心感と、店頭でその場で現金化できる手軽さが強みです。一方で宅配「ふるいちオンライン」は2026年6月末で終了。現在の買取方法と向く人・注意点を公式情報で正直に整理しました。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.furu1.net/kaitori/" target="_blank" rel="noopener noreferrer nofollow" className="btn-accent py-2.5 px-6">
              古本市場の買取情報を見る
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
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>結論：上場企業の安心感＋店頭で即現金化。近くに店舗があるレトロ〜最新ゲーム売却に向く</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              古本市場（ふるいち）は東証スタンダード上場の株式会社テイツー（埼玉県公安委員会 古物商許可 第431100002846号）が運営する買取チェーンです。上場企業ならではの信頼性と、<strong>店頭でその場で査定・現金化できる</strong>手軽さ、レトロゲームへの強さが魅力です。ただし<strong>宅配買取「ふるいちオンライン」は2026年6月30日で終了</strong>しており、現在は店頭買取が中心です。自宅から送って売りたい場合は宅配対応の他社が必要になる点に注意してください。近くに店舗があり、すぐ現金化したい・レトロゲームをまとめて売りたい人に向きます。
            </p>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              関連：<Link href="/software/high-value/" style={{ color: 'var(--color-electric-green)' }}>今どのソフトが高く売れるか毎週実測で確認する</Link>／<Link href="/review/kaitori-ouji/" style={{ color: 'var(--color-electric-green)' }}>宅配で送って売りたい人向けの買取王子を見る</Link>
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />古本市場（ふるいち）ゲーム買取の4つの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{f.title}</h3>
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
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>運営会社</th><td className="py-2">株式会社テイツー（東証スタンダード上場）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>本社</th><td className="py-2">岡山県岡山市南区豊浜町2-2</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>古物商許可</th><td className="py-2">埼玉県公安委員会 第431100002846号</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>買取方式</th><td className="py-2">店頭買取（宅配「ふるいちオンライン」は2026年6月30日で終了）</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>対応品目</th><td className="py-2">ゲーム機・ソフト（レトロ〜最新）、周辺機器、本、トレカなど</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：株式会社テイツー公式（会社概要）、古本市場公式買取ページ、ふるいちオンライン終了告知 2026年7月9日確認</p>
          </div>
        </section>

        {/* Fee 4-point */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />手数料は？出張費・査定料・キャンセル料・返送料【4点チェック】</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>出張費</th><td className="py-2">－（店頭買取のため出張なし）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>査定料</th><td className="py-2">無料</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>キャンセル料</th><td className="py-2">無料（その場でお断り可）</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>返送料（売らない場合）</th><td className="py-2">－（店頭に持ち込む方式のため返送の概念なし。持ち帰るだけ）</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：古本市場公式買取ページ 2026年7月9日確認。宅配買取は終了しているため、送料・返送料に関する項目は店頭前提で整理しています。</p>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />店頭買取の流れ（4ステップ）</h2>
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
          <a href="https://www.furu1.net/kaitori/" target="_blank" rel="noopener noreferrer nofollow" className="btn-accent py-3 px-8 inline-block">
            古本市場の買取情報を見る
          </a>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※買取方式・条件・取扱いは店舗や時期により変わります。来店前に公式サイトで最新情報をご確認ください。</p>
        </section>

        <KaitoriWorldCta compact />
        <AuthorBox />
      </div>
    </>
  );
}
