import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ワンダーレックスの評判・口コミはひどい？【2026年7月】ゲーム買取の実態・手数料を検証',
  description:
    'ワンダーレックス（WonderREX）の評判・口コミについて、「ひどい」「怪しい」と言われる理由を検証しています。運営はREXT株式会社（RIZAPグループ／東京都公安委員会 古物商許可 第307732117178号）で、店頭・宅配・出張の3方式でゲーム・レトロゲームに対応する正規の買取事業者です。',
  keywords: ['ワンダーレックス', 'ワンダーレックス 評判', 'ワンダーレックス 口コミ', 'ワンダーレックス 怪しい', 'ワンダーレックス ゲーム', 'WonderREX 買取'],
  openGraph: {
    images: ['/og.png'],
    title: 'ワンダーレックスの評判・口コミはひどい？【2026年7月】ゲーム買取の実態を検証',
    description: 'ワンダーレックスの評判と「ひどい・怪しい」と言われる理由を、公式情報をもとに検証しています。RIZAPグループで古物商許可を持つ正規事業者です。ゲーム買取の手数料・実態について解説します。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: 'RIZAPグループの正規リユース事業者', description: '運営はREXT株式会社（RIZAPグループ企業）。東京都公安委員会の古物商許可（第307732117178号・令和3年5月14日）を持つ正規の買取・リユース事業者です。上場グループの傘下で運営体制が明確な点は、安心材料の一つといえます。' },
  { title: '店頭・宅配・出張の3方式に対応', description: '買取方法は店頭・宅配・出張の3方式です。茨城・千葉を中心に約36店舗の実店舗を構える店頭買取が業態の中心で、その場で査定・現金化したい方に適しています。宅配・出張にも対応しています。' },
  { title: 'ゲーム・レトロゲームが買取対象', description: '公式の取扱品目「ゲーム・CD・DVD」にゲーム／レトロゲーム、ゲーム機／レトロゲーム機本体が明記されています。旧世代のレトロ機・ソフトも対象に含まれる点は、レトロゲームを処分したい方にとって選択肢の一つになります。' },
  { title: '査定料無料・お手持ちの段ボール利用で加算特典', description: '査定料は店頭・宅配とも無料です。宅配買取は送料も無料です。さらに、ご自身で用意した段ボールで送ると成約額に+500円が加算される特典があります（成約額3,000円以上が対象）。' },
];

const steps = [
  { step: 1, title: '買取方法を選ぶ（店頭・宅配・出張）', description: '店頭・宅配・出張の3方式から選びます。ゲームは店頭導線が中心の業態のため、確実に売りたい場合は近くの店舗（茨城・千葉中心）への持ち込みが分かりやすい選択です。' },
  { step: 2, title: '申込み・持ち込み／発送', description: '宅配の場合は公式サイトから申し込み、商品を梱包して発送します（送料無料）。店頭の場合はそのまま持ち込みます。いずれも本人確認書類の提出が必要です。' },
  { step: 3, title: '査定・結果提示', description: '商品を査定し、買取金額が提示されます。査定料は無料です。店頭ならその場で結果が分かり、そのままキャンセルしても無料です。' },
  { step: 4, title: '成約で支払い', description: '金額に納得した場合は成約し、支払いに進みます。宅配の振込手数料は無料です。宅配で成約しない場合、返送料はお客様のご負担となる点にご注意ください。' },
];

const targets = [
  { category: 'ゲーム', items: ['ゲームソフト・レトロゲーム', 'ゲーム機本体・レトロゲーム機本体', '周辺機器（品目により可否あり・要確認）'] },
  { category: 'メディア・ホビー', items: ['CD・DVD・Blu-ray', 'トレカ（専門店推奨の声あり）', 'ホビー・フィギュア等（店舗による）'] },
  { category: 'その他対応品目', items: ['ブランド品・貴金属・時計', 'カメラ・家電', '衣類・雑貨 など幅広く'] },
];

const faqs = [
  { q: 'ワンダーレックスは「ひどい」「怪しい」という評判は本当ですか？', a: '運営元はREXT株式会社（RIZAPグループ企業）で、東京都公安委員会の古物商許可（第307732117178号・令和3年5月14日）を持つ正規のリユース事業者です。会社情報・許可番号が公開されており、「怪しい」といえる根拠は確認できません（断定ではなく、確認項目にもとづく評価です）。「ひどい」と言われる背景には、ブランド・貴金属は専門査定である一方で衣類・雑貨は相場より安く感じるという声や、査定員の知識にばらつきがある、土日は査定待ちが長い、といった実店舗のリユース業態に共通しやすい不満が挙げられます。ゲームやトレカは専門店の方が高いこともあるため、当サイトの価格インデックスで比較してから判断することをおすすめします。' },
  { q: '宅配買取でゲームは売れますか？', a: '公式の取扱品目にはゲーム／レトロゲーム、ゲーム機本体が明記されており、店頭ではゲームが買取対象です。ただし公式の宅配買取ページの訴求はブランド・貴金属・時計・カメラが中心で、宅配でのゲーム買取可否は公式に明記がありません（要確認）。ゲームは店頭導線が中心と考えられるため、宅配で送りたい場合は事前に公式へゲームの宅配買取が可能か問い合わせることをおすすめします。' },
  { q: '送料・返送料・査定料はかかりますか？', a: '査定料は店頭・宅配とも無料です。宅配買取の送料は無料、振込手数料も無料です。ただし宅配でキャンセル（成約しない）場合の返送料はお客様負担となります。店頭ではその場でのキャンセルも無料です。出張買取の出張費については公式に明記がないため、ご利用前に公式サイトにてご確認ください。' },
  { q: '自分で用意した段ボールで送ると得になりますか？', a: '公式では、自分で用意した段ボールを使って宅配買取に送ると成約額に+500円が加算される特典があります（成約額3,000円以上が対象）。まとめて送り、成約額が条件を満たす場合は買取金額が増えます。適用条件は変更される場合があるため、申込前に公式で最新の条件をご確認ください。' },
  { q: 'ゲームの実際の買取価格はいくらですか？', a: 'ゲーム系の個別タイトルの買取価格は公式に公開されておらず、実際の金額は問い合わせが必要です。買取価格は時期・在庫・状態で変動します。1点でも高く売りたい場合は、当サイトの公式価格を実測した買取価格インデックスで専門店の価格と比べてから判断することをおすすめします。レトロゲームやプレミア価格が付くソフトは、ゲーム専門店の方が高くなるケースがあります。' },
  { q: 'クーリングオフや店舗の場所について教えてください。', a: '買取（売却）は原則クーリングオフの対象外で、ワンダーレックスの公式にクーリングオフに関する明示記載は確認できませんでした（確認不可）。店舗は茨城・千葉を中心に約36店舗を展開しています。最新の店舗一覧・営業時間・取扱可否は公式サイトでご確認ください。' },
];

export default function WonderrexReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ワンダーレックスの評判・口コミはひどい？ゲーム買取の実態・手数料を検証", "datePublished": "2026-07-10", "dateModified": "2026-07-10", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map((f) => ({"@type": "Question", "name": f.q, "acceptedAnswer": {"@type": "Answer", "text": f.a}}))}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ワンダーレックス' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ワンダーレックスの評判・口コミはひどい？<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>ゲーム買取の実態を検証</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ワンダーレックスは、RIZAPグループのREXT株式会社が運営する、店頭・宅配・出張に対応したリユース買取サービスです。茨城・千葉を中心とした約36店舗での店頭買取が中心で、ゲーム／レトロゲームも買取対象です。ただし、宅配でのゲーム買取可否と実際の買取価格は公式に明記がないため、事前の確認が必要です。当サイトでは、「ひどい・怪しい」と言われる理由の実態と、適した利用者・注意点を公式情報をもとに整理しています。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.wonderrex.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-accent py-2.5 px-6">
              公式サイトで買取を確認する
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
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>RIZAPグループで古物商許可を持つ正規事業者、店頭中心でゲーム・レトロゲームに対応（宅配でのゲーム買取可否と価格は要確認）</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              ワンダーレックス（WonderREX）はREXT株式会社（RIZAPグループ企業／東京都公安委員会 古物商許可 第307732117178号）が運営する正規のリユース買取サービスです。店頭・宅配・出張の3方式に対応し、公式の取扱品目にゲーム／レトロゲーム、ゲーム機本体が明記されています。会社情報・許可番号が公開されており、「怪しい」といえる根拠は確認できません（断定ではなく、確認項目にもとづく評価です）。一方で<strong>ゲームの買取は茨城・千葉を中心とした店頭が主体で、宅配でのゲーム買取可否は公式に明記がない</strong>点、また<strong>ゲーム系の実際の買取価格は公式に公開されておらず、問い合わせが必要</strong>な点にご注意ください。近くに店舗がある方や、まとめて処分したい方に適したサービスです。
            </p>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              関連：<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>現在最も高い業者を価格で確認する</Link>／<Link href="/review/hikakaku/" style={{ color: 'var(--color-electric-green)' }}>専門店の宅配買取（ヒカカク系）と比較する</Link>／<Link href="/review/kaitori-ouji/" style={{ color: 'var(--color-electric-green)' }}>返送料まで無料の宅配買取（買取王子）と比較する</Link>
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ワンダーレックスの4つの特徴</h2>
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
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>運営会社</th><td className="py-2">REXT株式会社（RIZAPグループ企業／非上場）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>所在地</th><td className="py-2">東京都新宿区西新宿8-17-1 住友不動産新宿グランドタワー36階</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>古物商許可</th><td className="py-2">東京都公安委員会 第307732117178号（令和3年5月14日）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>買取方法</th><td className="py-2">店頭・宅配・出張の3方式（茨城・千葉を中心に約36店舗の店頭が中心）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>主な取扱品目</th><td className="py-2">ゲーム／レトロゲーム・ゲーム機本体／CD・DVD／ブランド品・貴金属・時計・カメラ・家電・衣類 など幅広く</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>費用</th><td className="py-2">査定料無料（店頭・宅配とも）。宅配は送料・振込手数料無料。宅配キャンセル時の返送料はお客様負担</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ワンダーレックス（WonderREX）公式サイト（会社概要・買取案内）2026年7月10日確認。宅配でのゲーム買取可否は公式に明記なし＝要確認。</p>
          </div>
        </section>

        {/* Fee 4-point */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />手数料の確認：送料・査定料・キャンセル料・振込手数料の4項目</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>送料／出張費</th><td className="py-2">宅配買取の送料は無料。出張買取の出張費は<strong>公式に明記なし＝要確認</strong></td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>査定料</th><td className="py-2">無料（店頭・宅配とも）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: '#B45309' }}>キャンセル・返送料</th><td className="py-2"><strong style={{ color: '#B45309' }}>宅配のキャンセル（成約しない）時の返送料はお客様負担</strong>。店頭はその場でのキャンセルも無料</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>振込手数料</th><td className="py-2">無料（宅配）</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ワンダーレックス公式サイト（買取案内）2026年7月10日確認。補足特典：自分で用意した段ボールで送ると成約額に+500円加算（成約額3,000円以上が対象）。返送料まで無料のサービスを希望する場合は、返送料無料を明記している他社との比較をおすすめします。</p>
          </div>
        </section>

        {/* Suspicious? */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />「ひどい・怪しい」と言われる理由の実態</h2>
          <div className="space-y-4">
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>理由1：品目によって査定額の差が大きい</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>ブランド品・貴金属は専門査定で評価される一方、衣類・雑貨は相場より安く感じるという声が見られます。総合リユース業態では品目ごとに評価の得意・不得意が出やすく、「安い」と感じるかは何を売るかで変わります。ゲームやトレカは専門店の方が高くなることがあるため、当サイトの実測価格DBで相場を把握してから判断することをおすすめします（断定ではなく、確認項目にもとづく評価です）。</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>理由2：査定員の知識にばらつき・土日は待ち時間が長い</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>店舗ごと・査定員ごとに専門知識に差があるという指摘や、土日は査定待ちが長くなるという声があります。レトロゲームやプレミアソフトなど専門性が高い品は、査定担当や店舗によって評価が分かれる可能性があります。急がない場合は平日の利用を、専門性が高い品は複数社での相見積もりをおすすめします（確認項目にもとづく一般論です）。</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>理由3：宅配キャンセル時の返送料が自己負担</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>宅配買取で成約しなかった場合、返送料はお客様負担となります。査定額に納得できず返送すると費用が生じ得るため、これが不満につながることがあります。費用負担を避けたい場合は、店頭でその場査定（キャンセル無料）を利用するか、返送料まで無料の他社と比較することをおすすめします。</p>
            </div>
          </div>
        </section>

        {/* Pros/Cons */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />メリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-electric-green)' }}>メリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>+ RIZAPグループで古物商許可を持つ正規事業者</li>
                <li>+ 店頭・宅配・出張の3方式から選べる</li>
                <li>+ ゲーム／レトロゲーム・ゲーム機本体が買取対象</li>
                <li>+ 査定料無料、宅配は送料・振込手数料も無料</li>
                <li>+ 自分で用意した段ボールの利用で成約額+500円の特典（3,000円以上対象）</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- 宅配でのゲーム買取可否は公式に明記なし（要確認）</li>
                <li>- ゲーム系の実際の買取価格は非公開（問い合わせが必要）</li>
                <li>- 宅配キャンセル時の返送料はお客様負担</li>
                <li>- 店頭は茨城・千葉中心で地域が限られる</li>
                <li>- レトロゲーム・トレカは専門店の方が高いことがある</li>
              </ul>
            </div>
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

        {/* Target Items */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />買取対象</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {targets.map((t) => (
              <div key={t.category} className="glass-card p-5">
                <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>{t.category}</h3>
                <ul className="space-y-1.5 text-sm" style={{ color: 'var(--color-text-light)' }}>
                  {t.items.map((item) => <li key={item}>・{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs mt-4" style={{ color: 'var(--color-text-lighter)' }}>
            ※ 取扱品目・買取可否は店舗や時期により変更される場合があります。特に宅配でのゲーム買取可否は公式に明記がないため、事前に公式サイト・店舗へご確認ください。
          </p>
        </section>

        {/* Review Tendency */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />口コミの傾向（レビューサイト・比較メディア調査）</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-electric-green)' }}>好意的な口コミに多い内容</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・ブランド品・貴金属は専門的に査定してもらえた</li>
                <li>・幅広い品をまとめて店頭で処分できた</li>
                <li>・RIZAPグループの企業が運営している</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>否定的な口コミに多い内容</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・衣類・雑貨は相場より安く感じた</li>
                <li>・査定員の知識にばらつきがある／土日は待ち時間が長い</li>
                <li>・トレカ・レトロゲームは専門店の方が高いことがある</li>
              </ul>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※主要レビューサイト・比較メディアに掲載されている口コミの傾向を当サイトで整理したものです（2026年7月調査）。個別の体験を保証するものではありません。ゲームを高く売りたい場合は、<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>公式価格を実測した買取価格インデックス</Link>で専門店の価格と比較してから判断することをおすすめします。</p>
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
          <a href="https://www.wonderrex.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-accent py-3 px-8 inline-block">
            ワンダーレックスの公式サイトを見る
          </a>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※料金・条件・取扱品目は変更される場合があります。特に宅配でのゲーム買取可否や実際の買取価格は、申込前に公式サイトで最新情報をご確認ください。</p>
        </section>

        {/* Internal Links */}
        <section className="mt-4">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のサービスとの比較</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/review/kaitori-ouji/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取王子</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>送料・返送料まで無料の宅配買取</p>
            </Link>
            <Link href="/review/hikakaku/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>複数店の買取価格をまとめて比較できる</p>
            </Link>
          </div>
        </section>

        {/* 関連記事 */}
        <section style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--color-accent-soft-weak)', borderRadius: '12px', borderLeft: '3px solid var(--color-electric-green)' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>関連記事</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取価格インデックス（現在最も高い業者の確認）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/condition-guide/" style={{ color: 'var(--color-electric-green)' }}>状態別ゲーム買取 許容度マップ（箱なし・傷・ジャンク）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/kaitori-ranking/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取おすすめランキング15選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/shop-vs-online/" style={{ color: 'var(--color-electric-green)' }}>店舗買取 vs 宅配買取の比較</Link></li>
          </ul>
        </section>

        <AuthorBox />
      </div>
    </>
  );
}
