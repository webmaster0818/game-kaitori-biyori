import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: '買取王子の評判・口コミはひどい？【2026年7月】手数料完全無料の実態・運営会社を徹底検証',
  description:
    '買取王子の評判・口コミは「ひどい」と言われる？運営は株式会社ティーバイティー（愛知県公安委員会 古物商許可 第542520A52400号）。宅配専門で出張費・査定料・キャンセル料・返送料すべて無料、送料も点数条件なしで全国無料という手数料構造を公式情報（2026年7月確認）で検証。ゲーム機・ソフトの宅配買取が向く人・注意点まで正直に解説します。',
  keywords: ['買取王子', '買取王子 評判', '買取王子 ひどい', '買取王子 口コミ', '買取王子 ゲーム'],
  openGraph: {
    title: '買取王子の評判・口コミはひどい？【2026年7月】手数料完全無料の実態を検証',
    description: '買取王子の評判と「ひどい」と言われる理由を公式情報で検証。手数料完全無料の宅配買取の実態を解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: '手数料が完全無料', description: '査定料・キャンセル料・返送料がすべて無料。買取が不成立でも返送料は買取王子が負担するため、査定に出す時点での金銭リスクがゼロです。宅配買取で不安になりがちな「売らなかったら送料を取られる」心配がありません。' },
  { title: '送料は点数条件なしで全国無料', description: '多くの宅配買取が「◯点以上・◯円以上で送料無料」と条件を付ける中、買取王子は点数・金額の条件なしで全国送料無料。少量でも気軽に送れます（公式サービスページに明記）。' },
  { title: '幅広いジャンルをまとめ売り', description: 'ゲーム機本体・ソフトに加え、本・DVD・家電・ブランド品など幅広い品目に対応。ジャンルを分けずに1回でまとめて送れるため、断捨離とセットで使いやすいのが特徴です。' },
  { title: '宅配専門（店頭・出張なし）', description: '買取方式は宅配買取のみ。店頭持ち込みや出張訪問はありません。自宅から送るだけで完結する一方、その場で現金化したい場合は出張買取の他社（買取ウリエル等）が向きます。' },
];

const steps = [
  { step: 1, title: 'Webで申込み・集荷依頼', description: '公式サイトから申し込み、宅配キット（段ボール）を無料で取り寄せるか、自分の箱で発送します。集荷依頼もWebで完結します。' },
  { step: 2, title: '商品を詰めて発送', description: 'ゲームや売りたい品を箱に詰めて発送。送料は点数・金額の条件なしで全国無料です。本人確認書類の提出も忘れずに。' },
  { step: 3, title: '査定・結果通知', description: '商品到着後に査定が行われ、結果が通知されます。査定料は無料です。' },
  { step: 4, title: '承諾で入金／不成立でも無料返送', description: '査定額に納得すれば入金へ。納得できなければキャンセルでき、返送料も買取王子負担で無料です。金銭的なリスクなく試せます。' },
];

const faqs = [
  { q: '買取王子は「ひどい」「怪しい」という評判は本当ですか？', a: '運営元は株式会社ティーバイティー（愛知県公安委員会 古物商許可 第542520A52400号）で、公式サイトに会社概要・特定商取引法に基づく表記が掲載された正規の買取事業者です。「ひどい」と言われる背景には、宅配買取全般で起こりやすい「フリマ相場より査定額が低い」「一括査定で個別金額が分かりにくい」といった不満が挙げられます。査定料・キャンセル料・返送料はすべて無料なので、金銭的な損失なく査定額を確認して判断できます。' },
  { q: '査定に納得できなかったら費用はかかりますか？', a: 'かかりません。査定料・キャンセル料・返送料はすべて無料で、買取が成立しなかった場合の返送料も買取王子が負担します。送料も点数・金額の条件なしで無料のため、査定に出す時点での金銭リスクはありません。' },
  { q: '送料は本当に無料ですか？条件はありますか？', a: '点数・金額の条件なしで全国送料無料です。「◯点以上」「◯円以上」といった条件を付ける宅配買取が多い中、買取王子は少量でも送料無料で送れる点が強みです（公式サービスページに記載）。' },
  { q: 'ゲーム機やソフトも買い取ってもらえますか？', a: 'はい、ゲーム機本体・各種ソフトが買取対象です。本・DVD・家電・ブランド品などと一緒にまとめて送れるため、ゲーム以外の不用品もあわせて処分したい方に向いています。個別タイトルの高値を狙う場合は、当サイトの毎週実測の価格DBで各社を比較してから決めるのがおすすめです。' },
  { q: '店頭持ち込みや出張買取はできますか？', a: '買取王子は宅配買取専門で、店頭持ち込み・出張訪問はありません。自宅から送るだけで完結しますが、その場で現金化したい場合は出張買取対応の他社を検討してください。' },
  { q: '入金はどのくらいで届きますか？', a: '査定結果に承諾した後、順次振込が行われます。振込にかかる手数料も無料です。混雑状況により前後するため、急ぐ場合は申込時に納期を確認しましょう。' },
];

export default function KaitoriOujiReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "買取王子の評判・口コミはひどい？手数料完全無料の実態・運営会社を徹底検証", "datePublished": "2026-07-09", "dateModified": "2026-07-09", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map((f) => ({"@type": "Question", "name": f.q, "acceptedAnswer": {"@type": "Answer", "text": f.a}}))}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: '買取王子' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            買取王子の評判・口コミはひどい？<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>手数料完全無料の実態を検証</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲーム機・ソフトから本・家電まで幅広くまとめ売りできる宅配専門の買取サービス。査定料・キャンセル料・返送料・送料がすべて無料で、金銭リスクなく試せるのが最大の特徴です。「ひどい」と言われる理由の実態と、向く人・注意点を公式情報で整理しました。
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
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>結論：手数料ゼロで「まとめて送るだけ」。金銭リスクなく試せる宅配買取。古物商許可ありの正規事業者</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              買取王子は株式会社ティーバイティー（愛知県公安委員会 古物商許可 第542520A52400号）が運営する宅配専門の買取サービスです。査定料・キャンセル料・返送料がすべて無料で、送料も<strong>点数・金額の条件なしで全国無料</strong>。買取不成立でも返送料は自社負担のため、「やってみて損する」リスクがなく、「ひどい・怪しい」とされるほどの根拠は確認できません（断定ではなく確認項目ベースの評価）。一方で<strong>宅配専門（店頭・出張なし）</strong>で、その場で現金化はできない点と、一括査定のため個別タイトルの高値を狙う用途には向かない点だけは押さえておきましょう。ゲームも本も家電もまとめて処分したい人に向きます。
            </p>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              関連：<Link href="/software/high-value/" style={{ color: 'var(--color-electric-green)' }}>今どのソフトが高く売れるか毎週実測で確認する</Link>／<Link href="/compare/mercari-vs-kaitori/" style={{ color: 'var(--color-electric-green)' }}>メルカリと買取どちらが得か手取り額を比較する</Link>
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />手数料は？出張費・査定料・キャンセル料・返送料【4点チェック】</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>出張費</th><td className="py-2">－（宅配買取専門のため出張買取なし）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>査定料</th><td className="py-2">無料（送料も点数・金額の条件なしで全国無料）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>キャンセル料</th><td className="py-2">無料</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: '#047857' }}>返送料（売らない場合）</th><td className="py-2"><strong style={{ color: '#047857' }}>無料（買取不成立でも買取王子が負担）</strong>。査定に出す時点での金銭リスクがない点が最大の強みです</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：買取王子公式サイト（サービス案内・特定商取引法に基づく表記）2026年7月9日確認。返送料まで含めて完全無料は宅配買取の中でも数少ない構成です。</p>
          </div>
        </section>

        {/* Suspicious? */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />「ひどい・怪しい」と言われる理由の実態</h2>
          <div className="glass-card p-6">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              「買取王子 ひどい」と検索されるのは、宅配買取全般に共通する<strong>「フリマ相場より査定額が低く感じる」「一括査定でまとめて金額が出るため、1点ごとの評価が分かりにくい」</strong>といった不満が背景にあると考えられます（断定ではなく確認項目ベースの評価）。買取王子自体は古物商許可を持つ正規事業者で、査定料・キャンセル料・返送料・送料がすべて無料のため、<strong>納得できなければ費用ゼロで返してもらえます</strong>。高く売りたい特定タイトルがある場合は、フリマや専門店との比較・当サイトの毎週実測価格DBの併用で、損のない売り方を選べます。
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
