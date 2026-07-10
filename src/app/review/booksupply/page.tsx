import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ブックサプライの評判・口コミは悪い？【2026年7月】ゲーム宅配買取の手数料・実態を検証',
  description:
    'ブックサプライの評判・口コミは「悪い」「怪しい」と言われる？運営は株式会社ブックサプライ（大阪府公安委員会 古物商許可 第622271206036号）。査定料・振込手数料・ダンボール無料の宅配買取で、Switch・PS5などゲーム機・ソフトも対象。送料無料の条件（査定合計2,000円以上）や返送時の注意点まで公式情報（2026年7月確認）で正直に検証します。',
  keywords: ['ブックサプライ', 'ブックサプライ 評判', 'ブックサプライ 口コミ', 'ブックサプライ 怪しい', 'ブックサプライ ゲーム'],
  openGraph: {
    title: 'ブックサプライの評判・口コミは悪い？【2026年7月】ゲーム宅配買取の実態を検証',
    description: 'ブックサプライの評判と「悪い・怪しい」と言われる理由を公式情報で検証。ゲーム宅配買取の手数料・送料条件を解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: '本・CD・DVDに加えゲームも対象', description: 'Nintendo Switch・PS5・PS4・Xboxなどのゲーム機本体、バーコードのあるゲームソフトが買取対象です。本・漫画・CD・DVDとまとめて1回の宅配で売れるため、断捨離・引っ越しでまとめて処分したい人に向いています。' },
  { title: '査定料・振込手数料・ダンボールが無料', description: '査定手数料と振込手数料は無料、梱包用のダンボールも無料で送ってもらえます（公式トップに明記）。宅配買取で気になる細かな手数料が少なく、始めやすいのが特徴です。' },
  { title: 'リアルタイムお試し査定', description: '送る前にバーコードや商品名を入力すると、その時点の目安査定額を確認できる「お試し査定」機能があります。梱包前におおよその金額感をつかめるため、送るかどうかの判断に使えます。' },
  { title: '2000年創業の老舗宅配買取', description: '運営は株式会社ブックサプライ（2000年設立・大阪府吹田市）。古物商許可を持つ正規の買取事業者で、宅配買取を長く手がけている点は安心材料の一つです。' },
];

const steps = [
  { step: 1, title: 'Webで申込み・ダンボール受取', description: '公式サイトから宅配買取を申し込みます。手持ちの箱でも、無料のダンボールを取り寄せてもOKです。' },
  { step: 2, title: '商品を詰めて集荷・発送', description: 'ゲーム機・ソフトや本などを箱に詰めて発送します。本人確認書類の提出を忘れずに。集荷にも対応しています。' },
  { step: 3, title: '査定・結果通知', description: '商品到着後に査定が行われ、結果が通知されます。承認前であればキャンセルも可能です。' },
  { step: 4, title: '承諾で入金', description: '査定額に納得したら承諾して入金へ。振込手数料は無料です。納得できない場合はキャンセルできます（少額品の返送は送料負担が生じる場合があります）。' },
];

const targets = [
  { category: 'ゲーム', items: ['ゲーム機本体（Switch・Switch2・PS5・PS4・Xbox等）', 'ゲームソフト（バーコードのあるもの）', '周辺機器'] },
  { category: '本・メディア', items: ['書籍・漫画・専門書', 'CD・DVD・Blu-ray', '教科書・参考書'] },
  { category: 'その他対応品目', items: ['携帯端末（スマホ等）', '金券・商品券・切手', '貴金属'] },
];

const faqs = [
  { q: 'ブックサプライは「悪い」「怪しい」という評判は本当ですか？', a: '運営元は株式会社ブックサプライ（大阪府公安委員会 古物商許可 第622271206036号・2000年設立）で、公式サイトに会社概要・利用ガイドラインを掲載した正規の宅配買取事業者です。「悪い・怪しい」と言われる背景には、宅配買取全般で起こりやすい「事前のお試し査定より最終査定額が低く感じる」「本の査定額が想定より安い」といった不満が挙げられます（断定ではなく確認項目ベースの評価）。ゲーム機・DVDなどは相対的に評価が良いという声が多く、査定料・振込手数料は無料のため、承認前であれば費用なくキャンセルして判断できます。' },
  { q: '送料は無料ですか？条件はありますか？', a: '公式のガイドラインでは、査定合計金額が2,000円以上の場合は送料無料です。2,000円未満の場合は1箱につき500円が査定額から差し引かれる扱いとなっているため、少量だけ送ると実質的な負担が生じることがあります。まとめて送るほど条件を満たしやすくなります（2026年7月時点の公式記載）。' },
  { q: '査定に納得できなかったら返してもらえますか？費用はかかりますか？', a: '承認前であればキャンセルが可能です。ただし、値段が付かない品や少額品を返送する場合は返送の送料負担が生じるケースがあり、また受取拒否・長期保管切れの場合はキャンセル料が発生すると公式に記載されています。金銭リスクを避けたい場合は、返送料まで完全無料の他社（買取王子など）と比較検討するのも一つの方法です。' },
  { q: '振込手数料はかかりますか？', a: '現在の公式トップページでは「振込＆査定手数料も無料」と明記されています。過去の一部情報では振込手数料が有料と紹介されていたケースもありますが、2026年7月時点の公式表記は無料です。料金は改定される場合があるため、申込前に公式サイトで最新の条件をご確認ください。' },
  { q: 'ゲームソフトやゲーム機はどのくらいの値段が付きますか？', a: '個別タイトルの固定価格表は公開されておらず、送る前の「お試し査定」で目安額を確認する形です。買取価格は時期や在庫状況で変動します。ゲームを少しでも高く売りたい場合は、当サイトの毎週実測の買取価格インデックスで専門店の価格と比べてから判断するのがおすすめです。' },
  { q: '箱や付属品がなくても買取してもらえますか？', a: '一般に宅配買取では、箱・説明書・付属品がなくても買取対象になりますが、揃っている方が査定額は高くなります。特にゲーム機本体は付属品の有無が査定額に影響しやすいため、可能な範囲で揃えて送るのがおすすめです。詳細な可否は公式のガイドラインをご確認ください。' },
];

export default function BooksupplyReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ブックサプライの評判・口コミは悪い？ゲーム宅配買取の手数料・実態を検証", "datePublished": "2026-07-10", "dateModified": "2026-07-10", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map((f) => ({"@type": "Question", "name": f.q, "acceptedAnswer": {"@type": "Answer", "text": f.a}}))}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ブックサプライ' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ブックサプライの評判・口コミは悪い？<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>ゲーム宅配買取の実態を検証</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            本・CD・DVDに加え、Switch・PS5などゲーム機・ソフトもまとめて売れる老舗の宅配買取。査定料・振込手数料・ダンボールが無料で始めやすい一方、送料無料には条件があります。「悪い・怪しい」と言われる理由の実態と、向く人・注意点を公式情報で整理しました。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.booksupply.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-accent py-2.5 px-6">
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
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>結論：本もゲームもまとめて宅配で処分したい人向け。古物商許可ありの老舗事業者</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              ブックサプライは株式会社ブックサプライ（大阪府公安委員会 古物商許可 第622271206036号・2000年設立）が運営する宅配買取サービスです。査定料・振込手数料・ダンボールが無料で、Switch・PS5などのゲーム機・ソフトも本やCD・DVDとまとめて売れます。「悪い・怪しい」と検索されるほどの根拠は確認できません（断定ではなく確認項目ベースの評価）。ただし<strong>送料無料は査定合計2,000円以上が条件</strong>で、少量だと1箱500円が差し引かれる点、<strong>値段が付かない品の返送には送料負担が生じる場合がある</strong>点は事前に押さえておきましょう。ゲーム単体を1点でも高く売りたい用途より、まとめ処分に向くサービスです。
            </p>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              関連：<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>今週どこが一番高いか価格を確認する</Link>／<Link href="/review/kaitori-ouji/" style={{ color: 'var(--color-electric-green)' }}>返送料まで完全無料の宅配買取（買取王子）と比較する</Link>／<Link href="/compare/mercari-vs-kaitori/" style={{ color: 'var(--color-electric-green)' }}>メルカリと買取どちらが得か手取り額を試算する</Link>
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ブックサプライの4つの特徴</h2>
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
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>運営会社</th><td className="py-2">株式会社ブックサプライ（2000年設立）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>所在地</th><td className="py-2">大阪府吹田市垂水町3-18-9</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>古物商許可</th><td className="py-2">大阪府公安委員会 第622271206036号</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>買取方法</th><td className="py-2">宅配買取（提携書店での店頭買取もあり）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>主な取扱品目</th><td className="py-2">ゲーム機・ゲームソフト／本・漫画・CD・DVD／携帯端末／金券・貴金属 など</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>費用</th><td className="py-2">査定料・振込手数料・ダンボール無料。送料は査定合計2,000円以上で無料（未満は1箱500円差引）</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ブックサプライ公式サイト（トップ・買取ガイドライン・会社概要）2026年7月10日確認</p>
          </div>
        </section>

        {/* Fee 4-point */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />手数料は？送料・査定料・キャンセル料・振込手数料【4点チェック】</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>送料</th><td className="py-2">査定合計2,000円以上で無料。2,000円未満は1箱につき500円を査定額から差引（ダンボールは無料）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>査定料</th><td className="py-2">無料（公式トップに明記）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: '#B45309' }}>キャンセル・返送料</th><td className="py-2">承認前ならキャンセル可。ただし<strong style={{ color: '#B45309' }}>値段が付かない品・少額品の返送には送料負担が生じる場合あり</strong>。受取拒否・長期保管切れはキャンセル料が発生</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>振込手数料</th><td className="py-2">無料（現行公式表記。旧情報で有料の記載があるため申込前に要確認）</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ブックサプライ公式サイト（トップ・買取ガイドライン）2026年7月10日確認。返送料まで完全無料を求める場合は、返送料無料を明記する他社との比較がおすすめです。</p>
          </div>
        </section>

        {/* Suspicious? */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />「悪い・怪しい」と言われる理由の実態</h2>
          <div className="space-y-4">
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>理由1：お試し査定より最終査定額が低く感じる</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>送る前の「お試し査定」はあくまで目安で、実際の状態・需要・在庫状況によって最終査定額が下がることがあります。事前の期待値と差が出ると「悪い」と感じやすいのが宅配買取に共通する構造です。金額感をつかむには、当サイトの実測価格DBと併用して相場を把握しておくと納得しやすくなります。</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>理由2：本・古い商品の査定額が安い</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>発行から時間が経った本や需要の落ちた商品は、定価の数％以下になることがあります。一方で、ゲーム機・ソフトやDVDは相対的に評価が良いという声が多く、何を売るかで満足度が変わります。ブックサプライは「本もゲームもまとめて送りたい」用途に向くサービスです。</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>理由3：少額だと送料・返送料の負担が出る</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>送料無料は査定合計2,000円以上が条件で、少量だと1箱500円が差し引かれます。また値段が付かない品の返送には送料負担が生じる場合があります。金銭リスクをゼロにしたい場合は、まとめて送って条件を満たすか、返送料まで無料の他社を選ぶと安心です。</p>
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
                <li>+ 本・CD・DVD・ゲームをまとめて1回で売れる</li>
                <li>+ 査定料・振込手数料・ダンボールが無料</li>
                <li>+ 送る前に「お試し査定」で目安額を確認できる</li>
                <li>+ 2000年創業・古物商許可ありの老舗で安心感</li>
                <li>+ ゲーム機・DVDは相対的に評価が良いという声</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- 送料無料に「査定合計2,000円以上」の条件がある</li>
                <li>- 値段が付かない品の返送に送料負担が出る場合がある</li>
                <li>- 本・古い商品の査定額は低くなりやすい</li>
                <li>- 宅配専門でその場での現金化はできない</li>
                <li>- 個別タイトルの固定価格表は非公開</li>
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
            ※ 取扱品目・買取可否は変更される場合があります。詳しくは公式サイトのガイドラインをご確認ください。
          </p>
        </section>

        {/* Review Tendency */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />口コミの傾向（レビューサイト・比較メディア調査）</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-electric-green)' }}>好意的な口コミに多い内容</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・まとめて送るだけで処分でき手間が少ない</li>
                <li>・ゲーム機・DVDは思ったより値が付いた</li>
                <li>・ダンボール無料で始めやすい</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>否定的な口コミに多い内容</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・本の査定額が想定より安かった</li>
                <li>・お試し査定と最終査定額に差があった</li>
                <li>・少額だと送料・返送料の負担が気になる</li>
              </ul>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※主要レビューサイト・比較メディアに掲載されている口コミの傾向を当サイトで整理したものです（2026年7月調査）。個別の体験を保証するものではありません。ゲームを高く売りたい場合は、<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>毎週実測の買取価格インデックス</Link>で専門店の価格と比較してから判断するのがおすすめです。</p>
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
          <a href="https://www.booksupply.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-accent py-3 px-8 inline-block">
            ブックサプライの公式サイトを見る
          </a>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※料金・条件は変更される場合があります。申込前に公式サイトで最新情報をご確認ください。</p>
        </section>

        {/* Internal Links */}
        <section className="mt-4">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のサービスもチェック</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/review/kaitori-ouji/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取王子</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>送料・返送料まで完全無料の宅配買取</p>
            </Link>
            <Link href="/review/netoff/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ネットオフ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>本・ゲームをまとめて売れる大手宅配買取</p>
            </Link>
          </div>
        </section>

        {/* 関連記事 */}
        <section style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(0,230,118,0.05)', borderRadius: '12px', borderLeft: '3px solid var(--color-electric-green)' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>関連記事</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取価格インデックス（今どこが一番高い？）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/condition-guide/" style={{ color: 'var(--color-electric-green)' }}>状態別ゲーム買取 許容度マップ（箱なし・傷・ジャンク）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/mercari-vs-kaitori/" style={{ color: 'var(--color-electric-green)' }}>メルカリ vs 買取 手取り額シミュレーション</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/kaitori-ranking/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取おすすめランキング15選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/shop-vs-online/" style={{ color: 'var(--color-electric-green)' }}>店舗買取 vs 宅配買取の比較</Link></li>
          </ul>
        </section>

        <AuthorBox />
      </div>
    </>
  );
}
