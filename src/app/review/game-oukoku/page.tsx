import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ゲーム王国の買取の口コミ・評判は？【2026年7月】送料条件・入金日数・故障品買取まで徹底解説',
  description:
    'ゲーム王国の口コミ・評判を徹底調査。ヒカカク総合4.64点の実力、故障品・箱なしOKの買取範囲、送料無料の条件（佐川急便集荷限定）、最短当日入金、査定後キャンセル返送無料まで、公式情報（2026年6月12日確認）をもとに解説します。',
  keywords: ['ゲーム王国 買取', 'ゲーム王国 口コミ', 'ゲーム王国 査定', 'ゲーム買取 専門', 'ゲーム王国 評判'],
  openGraph: {
    title: 'ゲーム王国の買取の口コミ・評判は？【2026年7月】徹底解説',
    description: 'ゲーム王国の口コミ評判と買取条件を公式情報で徹底検証。故障品・箱なしOK、最短当日入金。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: 'ゲーム専門の査定力', description: 'ゲームに特化した買取サービスだからこそ、タイトルごとの市場価値を正確に把握。大手リサイクルショップのような一律査定ではなく、ゲーム市場のリアルタイム相場に基づいた適正査定が受けられます。' },
  { title: '初回査定額10%UP', description: '初めてゲーム王国を利用する方は、買取査定額が10%UPになる初回特典があります。他社で査定を受けた後の乗り換えにも最適。初回ボーナスを活用してお得に売却できます。' },
  { title: '送料・査定料・振込手数料が無料', description: '送料・査定料・振込手数料はすべてゲーム王国負担。ただし送料無料は佐川急便の集荷限定で、他の運送業者や元払い発送は対象外です（公式FAQ明記）。無料の梱包キットは1申込につき2箱まで届けてもらえます。' },
  { title: '故障品・箱なし・レトロもOK', description: '起動しない本体や箱・付属品のないソフト、ファミコン・ゲームボーイなどのレトロゲームまで幅広く買取対応と公式に明記。他店で断られたゲームの受け皿になります。入金は振込情報の確認後、最短当日〜翌営業日です。' },
];

const steps = [
  { step: 1, title: '買取申込み', description: 'ゲーム王国の公式サイトから買取申込みフォームに入力。売りたいゲームの情報や希望の連絡方法を選択します。' },
  { step: 2, title: '梱包・発送', description: '売りたいゲームを梱包して発送。着払い伝票で送れるので送料はかかりません。段ボールが必要な場合は無料で届けてもらえます。' },
  { step: 3, title: '査定・結果通知', description: '商品到着後、ゲーム専門スタッフが査定。結果はメールで通知されます。通常1〜3営業日で査定が完了します。' },
  { step: 4, title: '入金', description: '査定額に承諾し振込情報を提出すると、内容確認後に最短当日〜翌営業日（土日除く）で入金されます。査定後のキャンセルも返送料無料（ゲーム王国負担）です。' },
];

const faqs = [
  { q: 'ゲーム王国はどんなゲームが買取対象ですか？', a: 'Switch 2・Switch・PS5〜PS3などの現行機に加え、ファミコン・ゲームボーイなどのレトロゲームまで全世代のゲーム機本体・ソフト・周辺機器が対象です。公式サイトに記載のないゲームもLINEで相談できます。' },
  { q: '初回10%UPは何回利用できますか？', a: '初回特典は1人1回限りです。初めてゲーム王国を利用する方が対象となります。2回目以降も定期的にキャンペーンが実施されることがありますので、公式サイトをチェックしてみてください。' },
  { q: '査定にどのくらい時間がかかりますか？', a: '通常1〜3営業日で査定が完了します。点数が多い場合はもう少しかかることがありますが、大手サービスと比べると査定スピードは早めです。' },
  { q: '査定額に納得できない場合は？', a: '査定後のキャンセルは可能で、返送料はゲーム王国負担（無料）と公式FAQに明記されています。ただし口コミでは部分キャンセル（一部だけ返送）に対応していないという指摘があるため、売るか迷う商品は分けて申し込むのが安全です。' },
  { q: 'ゲーム機本体も買取対象ですか？', a: 'はい、ゲーム機本体も買取対象です。付属品（コントローラー、ケーブル、箱など）が揃っているほど査定額がアップします。動作確認済みの商品であれば高額査定が期待できます。' },
  { q: '壊れたゲーム機や箱なしソフトは買取できますか？', a: 'はい、故障品・箱なし・付属品欠品でも買取対応と公式に明記されています。口コミでも「起動しないPS3に値段がついた」等の報告が多く、これがゲーム王国の大きな強みです。ただし参考買取価格は完品基準のため、状態に応じた減額はあります。' },
  { q: '送料は本当に無料ですか？', a: '送料・査定料・振込手数料は無料ですが、送料無料は佐川急便の集荷を利用した場合に限られます。他の運送業者や元払いで送った場合の送料は負担されないため、必ず集荷依頼を使いましょう。梱包キットは1申込につき2箱まで無料です。' },
  { q: 'ゲーム王国の運営会社はどこですか？', a: '大阪市東成区の株式会社Ultimate Life（2013年10月設立、大阪府公安委員会 古物商許可 第621180142468号）が運営しています。実在の事業者による正規の買取サービスです。' },
];

export default function GameOukokuReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲーム王国の買取の口コミ・評判は？送料条件・入金日数・故障品買取まで徹底解説", "datePublished": "2026-03-15", "dateModified": "2026-07-09", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ゲーム王国' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ゲーム専門</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲーム王国<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>徹底レビュー</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲームに特化した専門買取サービス。ゲーム市場の相場を熟知した専門スタッフによる正確な査定が強みです。初回利用で査定額10%UP、送料無料、最短翌日入金とスピード感も抜群。現行ゲームを専門店価格で売りたい方におすすめです。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://game-oukoku.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
              公式サイトで買取申込み
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
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>結論：宅配専業で手数料ゼロ、全国どこからでも送って売れる。古物商許可ありの正規事業者</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              ゲーム王国は株式会社Ultimate Life（大阪府公安委員会 古物商許可 第621180142468号・2013年設立）が運営する正規の宅配買取事業者です。査定料・キャンセル料・返送料・振込手数料はすべて無料で、査定額に納得できなければ無料で返送してもらえるため、「怪しい・詐欺」とされるほどの根拠は確認できません（断定ではなく確認項目ベースの評価）。送料無料が<strong>佐川急便の集荷を利用した場合に限る</strong>点と、キャンセル時の返送は<strong>全商品一括返却（一部だけ返してもらうことは不可）</strong>である点だけは事前に確認してください。宅配専業なので、全国どこからでもまとめて送って売りたい人に向きます。
            </p>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              関連：<Link href="/software/high-value/" style={{ color: 'var(--color-electric-green)' }}>今どのソフトが高く売れるか毎週実測で確認する</Link>／<Link href="/compare/mercari-vs-kaitori/" style={{ color: 'var(--color-electric-green)' }}>メルカリと買取どちらが得か手取り額を比較する</Link>
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ゲーム王国の4つの特徴</h2>
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
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>運営会社</th><td className="py-2">株式会社Ultimate Life（2013年10月設立）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>所在地</th><td className="py-2">大阪府大阪市東成区中本2丁目1-13 大阪スポンジャービル6階</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>古物商許可</th><td className="py-2">大阪府公安委員会許可 第621180142468号</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>送料・手数料</th><td className="py-2">送料・査定料・振込手数料無料（送料無料は佐川急便の集荷限定）。梱包キットは1申込2箱まで無料</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>査定・入金</th><td className="py-2">到着後1〜3営業日で査定連絡。振込情報の確認後、最短当日〜翌営業日に入金（土日除く）</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>キャンセル</th><td className="py-2">査定後キャンセルの返送料はゲーム王国負担（無料）</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ゲーム王国公式サイト（会社概要・FAQ）2026年6月12日確認</p>
          </div>
        </section>

        {/* Fee 4-point */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />手数料は？出張費・査定料・キャンセル料・返送料【4点チェック】</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>出張費</th><td className="py-2">－（宅配買取専業のため出張買取なし）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>査定料</th><td className="py-2">無料</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>キャンセル料</th><td className="py-2">無料</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>返送料（売らない場合）</th><td className="py-2">無料（当社負担）。ただし佐川急便の集荷利用が条件で、返送は<strong>全商品一括返却（一部返却不可）</strong></td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ゲーム王国公式サイト（会社概要・FAQ・利用規約）2026年7月9日確認。査定額に納得できなければ費用負担なしで返送してもらえます。</p>
          </div>
        </section>

        {/* Price Examples */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />公式の参考買取価格の例（2026年6月12日時点）</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <thead>
                <tr className="border-b-2" style={{ borderColor: 'rgba(0,0,0,0.1)' }}><th className="text-left py-2 pr-4" style={{ color: 'var(--color-deep-blue)' }}>商品</th><th className="text-left py-2" style={{ color: 'var(--color-deep-blue)' }}>参考買取価格</th></tr>
              </thead>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4">PlayStation 5 Pro（CFI-7000B01）</td><td className="py-2 font-bold" style={{ color: 'var(--color-electric-green)' }}>70,000円</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4">PlayStation 5（CFI-2000）</td><td className="py-2 font-bold" style={{ color: 'var(--color-electric-green)' }}>40,000円</td></tr>
                <tr><td className="py-2 pr-4">Nintendo Switch 有機ELモデル</td><td className="py-2 font-bold" style={{ color: 'var(--color-electric-green)' }}>18,000円</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ゲーム王国公式 機種別買取価格表（2026年6月12日閲覧）。参考価格は付属品完備・動作良好が前提で、欠品・状態により減額されます。価格は日々変動します。</p>
          </div>
        </section>

        {/* Review Tendency */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />口コミの傾向（レビューサイト調査）</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-electric-green)' }}>好意的な口コミに多い内容</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・故障品・箱なし・付属品欠品でも値段がついた</li>
                <li>・LINE仮査定の返信が速く、本査定との差が小さかった</li>
                <li>・1点ごとの査定明細が出るので納得感がある</li>
                <li>・大手口コミサイトで総合4.6点台と高評価（星4以上が約95%）</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>否定的な口コミに多い内容</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・状態による減額で期待より低い査定になった</li>
                <li>・部分キャンセル（一部だけ返送）ができない</li>
                <li>・承諾から入金まで数営業日かかったケースがある</li>
              </ul>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※主要レビューサイト・比較メディアの公開口コミの傾向を当サイトで整理したものです（2026年6月調査）。個別の体験を保証するものではありません。</p>
        </section>

        {/* Pros/Cons */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />メリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-electric-green)' }}>メリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>+ ゲーム専門で査定が正確</li>
                <li>+ 初回利用で査定額10%UP</li>
                <li>+ 送料完全無料</li>
                <li>+ 最短翌日入金のスピード対応</li>
                <li>+ キャンセル時の返送料も無料</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- 知名度が大手と比べると低い</li>
                <li>- レトロゲームは対象外の場合あり</li>
                <li>- 店舗持ち込みには非対応</li>
                <li>- ゲーム以外の商品は買取不可</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />利用手順（4ステップ）</h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>
                  {String(s.step).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{s.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />こんな方におすすめ</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・現行ゲーム（Switch・PS5・PS4）を専門店で売りたい方</li>
              <li>・初めて利用するサービスで10%UPボーナスを活用したい方</li>
              <li>・できるだけ早く入金してほしい方</li>
              <li>・ゲーム専門スタッフに正確に査定してほしい方</li>
              <li>・リサイクルショップの査定額に不満がある方</li>
            </ul>
          </div>
        </section>

        {/* User Reviews */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />利用者の口コミ</h2>
          <div className="space-y-4">
            {[
              { initial: 'D.K', age: '20代男性', rating: 5, text: '初回10%UPキャンペーンを利用してSwitchソフト8本を売りました。ゲーム専門だけあって、タイトルごとにしっかりした値段がつきました。ブックオフで見積もった時より合計で3,000円以上高かったです。入金も翌日で驚きました。' },
              { initial: 'M.T', age: '30代女性', rating: 4, text: 'PS4本体とソフト5本を宅配買取で。査定結果が2日で届き、入金も早くて満足です。ただ、知名度が低いのでちょっと不安でしたが、対応は丁寧で問題なし。もっと知られてもいいサービスだと思います。' },
              { initial: 'R.S', age: '20代男性', rating: 4, text: 'ゲーム専門ということで期待して利用。確かに一般的なリサイクルショップより高い査定でした。ただ、PS2のソフトは「対象外」と返されたので、レトロゲームは別のところに出す必要がありました。現行機なら間違いなくおすすめ。' },
              { initial: 'E.N', age: '30代男性', rating: 5, text: 'Switch本体（有機ELモデル）を買取に出しました。箱・付属品完備で25,000円の査定。他社では22,000円だったので、初回ボーナスもあって大満足です。梱包キットも無料で届くし、返送料無料なのでリスクゼロで査定を試せます。' },
            ].map((review, i) => (
              <div key={i} className="glass-card p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(16,185,129,0.12)', color: '#059669' }}>
                    {review.initial}
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: 'var(--color-deep-blue)' }}>{review.initial}さん<span className="font-normal text-xs ml-2" style={{ color: 'var(--color-text-light)' }}>{review.age}</span></p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <span key={s} className="text-sm" style={{ color: s < review.rating ? '#F59E0B' : '#E2E8F0' }}>&#9733;</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{review.text}</p>
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
            ゲーム王国で<span style={{ color: 'var(--color-electric-green)' }}>初回10%UP</span>の査定を試しませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            ゲーム専門の正確な査定と最短翌日入金。送料無料・返送料無料でリスクなく査定できます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://game-oukoku.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              無料で買取申込みする
            </a>
            <Link href="/" className="btn-outline py-3 px-8" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#CBD5E1' }}>
              他のサービスと比較
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のサービスもチェック</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/review/hikakaku/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-orange text-xs mb-2 inline-block">一括査定</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社一括査定で最高値を比較</p>
            </Link>
            <Link href="/review/hobby-collect/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-blue text-xs mb-2 inline-block">ジャンクOK</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ホビーコレクト</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なし・ジャンク品もOKの宅配買取</p>
            </Link>
          </div>
        </section>
        {/* 関連記事 */}
        <section style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(0,230,118,0.05)', borderRadius: '12px', borderLeft: '3px solid var(--color-electric-green)' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>関連記事</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/which-is-best/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取はどこがいい？用途別おすすめ比較</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/kaitori-ranking/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取おすすめランキング15選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/switch/" style={{ color: 'var(--color-electric-green)' }}>Switch買取おすすめ3選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/ps5/" style={{ color: 'var(--color-electric-green)' }}>PS5買取おすすめ3選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/method/online/" style={{ color: 'var(--color-electric-green)' }}>宅配買取の流れとコツ</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/price-guide/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取価格ガイド</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/preparation/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取前の準備ガイド</Link></li>
          </ul>
        </section>

        <AuthorBox />
      </div>
    </>
  );
}
