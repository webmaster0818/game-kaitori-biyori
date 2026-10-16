import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: '買取王子の評判・口コミはひどい？【2026年7月】手数料無料の実態・運営会社を検証',
  description:
    '買取王子の評判・口コミが「ひどい」と言われる理由を検証しています。運営は株式会社ティーバイティー（愛知県公安委員会 古物商許可 第542520A52400号）です。宅配専門で、査定料・キャンセル料・返送料は無料、送料も点数の条件なしで全国無料という手数料体系を、公式情報（2026年7月確認）をもとに解説します。',
  keywords: ['買取王子', '買取王子 評判', '買取王子 ひどい', '買取王子 口コミ', '買取王子 ゲーム'],
  openGraph: {
    images: ['/og.png'],
    title: '買取王子の評判・口コミはひどい？【2026年7月】手数料無料の実態を検証',
    description: '買取王子の評判と「ひどい」と言われる理由を、公式情報にもとづいて検証しています。手数料無料の宅配買取の実態について解説します。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: '手数料無料', description: '査定料・キャンセル料・返送料は無料です。買取が不成立の場合も返送料は買取王子が負担するため、査定に出す時点で費用が発生することはありません。売却しなかった場合に送料を請求される心配がない点が特徴です。' },
  { title: '送料は点数条件なしで全国無料', description: '多くの宅配買取が「◯点以上・◯円以上で送料無料」といった条件を設けている中、買取王子は点数・金額の条件なしで全国送料無料です。少量の品物でも送料をかけずに送れます（公式サービスページに明記）。' },
  { title: '幅広いジャンルをまとめ売り', description: 'ゲーム機本体・ソフトに加え、本・DVD・家電・ブランド品など幅広い品目に対応しています。ジャンルを分けずに1回でまとめて送れるため、不用品の整理とあわせて利用しやすい点が特徴です。' },
  { title: '宅配専門（店頭・出張なし）', description: '買取方式は宅配買取のみで、店頭持ち込みや出張訪問はありません。自宅から発送するだけで手続きが完結する一方、その場で現金化したい場合は、出張買取に対応した他社（買取ウリエル等）が適しています。' },
];

const steps = [
  { step: 1, title: 'Webで申込み・集荷依頼', description: '公式サイトから申し込み、宅配キット（段ボール）を無料で取り寄せるか、自分の箱で発送します。集荷依頼もWebで行えます。' },
  { step: 2, title: '商品を詰めて発送', description: 'ゲームなど売りたい品を箱に詰めて発送します。送料は点数・金額の条件なしで全国無料です。本人確認書類の提出も忘れずに行ってください。' },
  { step: 3, title: '査定・結果通知', description: '商品到着後に査定が行われ、結果が通知されます。査定料は無料です。' },
  { step: 4, title: '承諾で入金／不成立でも無料返送', description: '査定額に納得した場合は入金に進みます。納得できない場合はキャンセルでき、返送料も買取王子の負担で無料です。費用をかけずに査定を受けられます。' },
];

const faqs = [
  { q: '買取王子は「ひどい」「怪しい」という評判は本当ですか？', a: '運営元は株式会社ティーバイティー（愛知県公安委員会 古物商許可 第542520A52400号）で、公式サイトに会社概要・特定商取引法に基づく表記を掲載している正規の買取事業者です。「ひどい」と言われる背景には、宅配買取全般で生じやすい「フリマ相場より査定額が低い」「一括査定のため個別の金額が分かりにくい」といった不満があると考えられます。査定料・キャンセル料・返送料は無料のため、費用をかけずに査定額を確認したうえで判断できます。' },
  { q: '査定に納得できなかったら費用はかかりますか？', a: 'かかりません。査定料・キャンセル料・返送料は無料で、買取が成立しなかった場合の返送料も買取王子が負担します。送料も点数・金額の条件なしで無料のため、査定に出す時点で費用は発生しません。' },
  { q: '送料無料に条件はありますか？', a: '点数・金額の条件なしで全国送料無料です。「◯点以上」「◯円以上」といった条件を設ける宅配買取が多い中、買取王子は少量でも送料無料で送れる点に強みがあります（公式サービスページに記載）。' },
  { q: 'ゲーム機やソフトも買い取ってもらえますか？', a: 'はい、ゲーム機本体・各種ソフトが買取対象です。本・DVD・家電・ブランド品などと一緒にまとめて送れるため、ゲーム以外の不用品もあわせて処分したい方に適しています。特定のタイトルをより高く売りたい場合は、当サイトが公式価格を実測している価格DBで各社を比較してから決めることをおすすめします。' },
  { q: '店頭持ち込みや出張買取はできますか？', a: '買取王子は宅配買取専門で、店頭持ち込み・出張訪問はありません。自宅から発送するだけで手続きが完結しますが、その場で現金化したい場合は、出張買取に対応した他社をご検討ください。' },
  { q: '入金はどのくらいで届きますか？', a: '査定結果に承諾した後、順次振込が行われます。振込にかかる手数料も無料です。混雑状況により前後するため、お急ぎの場合は申込時に入金までの目安をご確認ください。' },
];

export default function KaitoriOujiReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "買取王子の評判・口コミはひどい？手数料無料の実態・運営会社を検証", "datePublished": "2026-07-09", "dateModified": "2026-07-09", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較している編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map((f) => ({"@type": "Question", "name": f.q, "acceptedAnswer": {"@type": "Answer", "text": f.a}}))}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: '買取王子' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            買取王子の評判・口コミはひどい？<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>手数料無料の実態を検証</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            買取王子は、ゲーム機・ソフトから本・家電まで幅広い品目をまとめて売却できる宅配専門の買取サービスです。査定料・キャンセル料・返送料・送料がすべて無料で、費用をかけずに査定を受けられる点が最大の特徴です。当サイトでは、「ひどい」と言われる理由の実態と、適している方・注意点を公式情報にもとづいて整理しました。
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
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>評価の要点：古物商許可を持つ正規事業者による、手数料無料の宅配買取サービスです</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              買取王子は株式会社ティーバイティー（愛知県公安委員会 古物商許可 第542520A52400号）が運営する宅配専門の買取サービスです。査定料・キャンセル料・返送料がすべて無料で、送料も<strong>点数・金額の条件なしで全国無料</strong>です。買取不成立の場合も返送料は同社が負担するため、査定に出すことで費用が発生することはなく、「ひどい・怪しい」とされるほどの根拠は確認できません（断定ではなく、確認項目にもとづく評価です）。一方で、<strong>宅配専門（店頭・出張なし）</strong>のためその場で現金化できない点と、一括査定のため特定タイトルをより高く売りたい用途には適さない点にご注意ください。ゲーム・本・家電をまとめて処分したい方に適しています。
            </p>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              関連：<Link href="/software/high-value/" style={{ color: 'var(--color-electric-green)' }}>高く売れるソフトを実測データで確認する</Link>／<Link href="/compare/mercari-vs-kaitori/" style={{ color: 'var(--color-electric-green)' }}>メルカリと買取の手取り額を比較する</Link>
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
        </section>

        {/* Company Info */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />運営会社情報（公式サイトより）</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>運営会社</th><td className="py-2">株式会社ティーバイティー</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>古物商許可</th><td className="py-2">愛知県公安委員会 第542520A52400号</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>買取方式</th><td className="py-2">宅配買取専門（店頭・出張なし）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>対応品目</th><td className="py-2">ゲーム機・ソフト、本、DVD、家電、ブランド品など幅広く対応</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>送料</th><td className="py-2">点数・金額の条件なしで全国無料</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：買取王子公式サイト（特定商取引法に基づく表記・サービス案内）2026年7月9日確認</p>
          </div>
        </section>

        {/* Fee 4-point */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />手数料の確認：出張費・査定料・キャンセル料・返送料の4項目</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>出張費</th><td className="py-2">－（宅配買取専門のため出張買取なし）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>査定料</th><td className="py-2">無料（送料も点数・金額の条件なしで全国無料）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>キャンセル料</th><td className="py-2">無料</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: '#047857' }}>返送料（売らない場合）</th><td className="py-2"><strong style={{ color: '#047857' }}>無料（買取不成立でも買取王子が負担）</strong>。査定に出す時点で費用が発生しない点が最大の強みです</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：買取王子公式サイト（サービス案内・特定商取引法に基づく表記）2026年7月9日確認。返送料まで含めてすべて無料とする料金体系は、宅配買取の中でも多くありません。</p>
          </div>
        </section>

        {/* Suspicious? */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />「ひどい・怪しい」と言われる理由の実態</h2>
          <div className="glass-card p-6">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              「買取王子 ひどい」と検索されるのは、宅配買取全般に共通する<strong>「フリマ相場より査定額が低く感じる」「一括査定でまとめて金額が出るため、1点ごとの評価が分かりにくい」</strong>といった不満が背景にあると考えられます（断定ではなく、確認項目にもとづく評価です）。買取王子自体は古物商許可を持つ正規事業者で、査定料・キャンセル料・返送料・送料がすべて無料のため、<strong>査定額に納得できない場合は、費用をかけずに返送を受けられます</strong>。高く売りたい特定のタイトルがある場合は、フリマアプリや専門店との比較、当サイトが定期的に実測している価格DBを併用することで、適した売却方法を選べます。
            </p>
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
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※料金・条件は変更される場合があります。申込前に公式サイトで最新情報をご確認ください。</p>
        </section>

        <AuthorBox />
      </div>
    </>
  );
}
