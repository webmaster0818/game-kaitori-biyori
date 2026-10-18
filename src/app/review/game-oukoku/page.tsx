import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ゲーム王国の評判・口コミ｜ヒカカク2,485件の星分布と公式条件で検証【2026年10月】',
  description:
    'ゲーム王国の評判・口コミを、ヒカカクの口コミ2,485件の星分布（★4以上94.8%・★1〜2は27件）と公式FAQ・利用規約（2026年10月18日確認）で検証しています。送料無料は佐川急便の集荷限定、査定後キャンセルは返送料無料で一部返送も可能です。',
  keywords: ['ゲーム王国 買取', 'ゲーム王国 口コミ', 'ゲーム王国 査定', 'ゲーム買取 専門', 'ゲーム王国 評判'],
  openGraph: {
    images: ['/og.png'],
    title: 'ゲーム王国の評判・口コミ｜ヒカカク2,485件の星分布で検証【2026年10月】',
    description: 'ゲーム王国の評判・口コミを、ヒカカク2,485件の星分布と公式FAQ・利用規約で検証しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: 'ゲーム専門の宅配買取', description: 'ゲーム機本体・ソフト・周辺機器に絞った宅配買取サービスです。事前にLINE仮査定（無料）で価格の目安を確認できますが、公式FAQでは「仮査定は価格保証ではない」と明記されています。' },
  { title: '初回の合計買取価格10%アップ', description: '初めて宅配買取を利用する方は、合計買取価格が10%アップします（申込みで自動適用・買取価格が1円以上つく商品すべてが対象）。同業他社からの申込み、大破品、発送後にキャンセルして返送した場合は対象外です（公式サービス案内 2026年10月1日更新）。' },
  { title: '送料・査定料・振込手数料が無料', description: '送料・査定料・振込手数料はすべてゲーム王国の負担です。ただし送料無料は佐川急便の集荷限定で、他の運送業者や元払い発送は対象外です（公式FAQ明記）。無料の梱包キットは1申込につき2箱まで届けてもらえます。' },
  { title: '故障品・箱なし・レトロもOK', description: '起動しない本体や箱・付属品のないソフト、PS2・ファミコン・ゲームボーイなどのレトロゲーム、黄ばみのある本体まで買取対象と公式FAQに明記されています。海賊版・改造品・大破品は対象外です。入金は振込情報の確認後、最短当日〜翌営業日です。' },
];

const steps = [
  { step: 1, title: '買取申込み', description: 'ゲーム王国の公式サイトから買取申込みフォームに入力します。売りたいゲームの情報や希望の連絡方法を選択します。' },
  { step: 2, title: '梱包・発送', description: '売りたいゲームを梱包し、ゲーム王国が手配する佐川急便の集荷で発送します。送り状は集荷時にドライバーから受け取ります。営業所への持ち込みや他社便は送料無料の対象外です。段ボールが必要な場合は無料の宅配買取キット（1人2箱まで）を届けてもらえます。' },
  { step: 3, title: '査定・結果通知', description: '商品到着後、ゲーム専門スタッフが査定します。結果はメールで通知されます。通常1〜3営業日で査定が完了します。' },
  { step: 4, title: '入金', description: '査定額に承諾し振込情報を提出すると、内容確認後に最短当日〜翌営業日（土日除く）に振込手続きが行われます（利用規約では原則3営業日以内）。査定後のキャンセルも返送料無料（ゲーム王国負担）です。' },
];

const faqs = [
  { q: 'ゲーム王国はどんなゲームが買取対象ですか？', a: 'Switch 2・Switch・PS5〜PS2などに加え、ファミコン・ゲームボーイなどのレトロゲームまで全世代のゲーム機本体・ソフト・周辺機器が対象です。公式サイトに記載のないゲームもLINEで相談できます。' },
  { q: '初回10%UPは何回利用できますか？', a: '初めてゲーム王国の宅配買取を利用する方が対象のため、利用できるのは初回のみです。申込みで自動適用され、別途の手続きは不要です。商品発送後にキャンセルして返送した場合は対象外になります（公式サービス案内 2026年10月1日更新）。' },
  { q: '査定にどのくらい時間がかかりますか？', a: '公式の案内では、商品到着から約1〜3営業日で査定結果が連絡されます。点数が多い場合は日数が延びる場合があります。' },
  { q: '査定額に納得できない場合は？', a: '査定後のキャンセルは可能で、返送料はゲーム王国負担（無料）と公式FAQに明記されています。公式FAQでは「一部商品のみの返送も承っております」とされており、一部だけ売って残りを返送してもらうことも可能です。返送には3営業日ほどかかり、買取成立後のキャンセルはできません。' },
  { q: 'ゲーム機本体も買取対象ですか？', a: 'はい、ゲーム機本体も買取対象です。付属品（コントローラー、ケーブル、箱など）が揃っているほど査定額がアップします。動作確認済みの商品であれば高額査定が期待できます。' },
  { q: '壊れたゲーム機や箱なしソフトは買取できますか？', a: 'はい、故障品・箱なし・付属品欠品でも買取対応と公式に明記されています。ただし参考買取価格は完品基準のため、状態に応じた減額があります。' },
  { q: '送料は本当に無料ですか？', a: '送料・査定料・振込手数料は無料ですが、送料無料は佐川急便の集荷を利用した場合に限られます。佐川急便の元払いや他社便で送った場合は自己負担、他社の着払いは送料が買取金額から差し引かれます（公式「買取の流れ」）。梱包キットは1申込につき2箱まで無料です。' },
  { q: 'ゲーム王国の運営会社はどこですか？', a: '大阪市東成区の株式会社Ultimate Life（2013年10月設立、大阪府公安委員会 古物商許可 第621180142468号）が運営しています。' },
];

export default function GameOukokuReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲーム王国の評判・口コミ｜ヒカカク2,485件の星分布と公式条件で検証", "datePublished": "2026-03-15", "dateModified": "2026-10-18", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ゲーム王国' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ゲーム専門</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲーム王国<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>レビュー</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲーム王国は株式会社Ultimate Lifeが運営するゲーム専門の宅配買取サービスです。初回の合計買取価格10%アップ、佐川急便の集荷での送料無料、最短当日〜翌営業日の振込手続きが公式に案内されています。ヒカカクの口コミは2,485件で総合4.64（2026年10月18日確認）です。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://gameoukoku.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
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
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>手数料無料で全国から利用できる、古物商許可を持つ宅配専業の買取サービス</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              ゲーム王国は株式会社Ultimate Life（大阪府公安委員会 古物商許可 第621180142468号・2013年設立）が運営する正規の宅配買取事業者です。査定料・キャンセル料・返送料・振込手数料はすべて無料で、査定額に納得できなければ無料で返送してもらえるため、「怪しい・詐欺」とされるほどの根拠は確認できません（断定ではなく確認項目ベースの評価）。送料無料が<strong>佐川急便の集荷を利用した場合に限る</strong>点と、佐川急便の営業所への持ち込みはできない点を事前にご確認ください。査定後のキャンセルは返送料無料で、一部の商品だけ返送してもらうことも可能です（公式FAQ）。宅配専業のため、全国どこからでもまとめて送って売りたい方に適しています。
            </p>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              関連：<Link href="/software/high-value/" style={{ color: 'var(--color-electric-green)' }}>高く売れるソフトを実測データで確認する</Link>／<Link href="/compare/mercari-vs-kaitori/" style={{ color: 'var(--color-electric-green)' }}>メルカリと買取どちらが得か手取り額を比較する</Link>
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
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>キャンセル</th><td className="py-2">査定後キャンセルの返送料はゲーム王国負担（無料）。一部商品のみの返送も可能。返送は約3営業日。買取成立後のキャンセルは不可</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ゲーム王国公式サイト（会社概要・FAQ・買取の流れ）2026年10月18日確認</p>
          </div>
        </section>

        {/* Fee 4-point */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ゲーム王国の手数料：出張費・査定料・キャンセル料・返送料の4項目</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>出張費</th><td className="py-2">－（宅配買取専業のため出張買取なし）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>査定料</th><td className="py-2">無料</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>キャンセル料</th><td className="py-2">無料</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>返送料（売らない場合）</th><td className="py-2">無料（ゲーム王国負担）。一部商品のみの返送も可能</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ゲーム王国公式サイト（会社概要・FAQ・利用規約 第12条）2026年10月18日確認。査定額に納得できなければ費用負担なしで返送してもらえます。</p>
          </div>
        </section>

        {/* Price Examples */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />公式の参考買取価格の例（2026年10月18日確認）</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <thead>
                <tr className="border-b-2" style={{ borderColor: 'rgba(0,0,0,0.1)' }}><th className="text-left py-2 pr-4" style={{ color: 'var(--color-deep-blue)' }}>商品</th><th className="text-left py-2" style={{ color: 'var(--color-deep-blue)' }}>参考買取価格</th></tr>
              </thead>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4">PlayStation 5 Pro（CFI-7000B01）</td><td className="py-2 font-bold" style={{ color: 'var(--color-electric-green)' }}>75,000円</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4">PlayStation 5（CFI-2000）</td><td className="py-2 font-bold" style={{ color: 'var(--color-electric-green)' }}>45,000円</td></tr>
                <tr><td className="py-2 pr-4">Nintendo Switch 有機ELモデル</td><td className="py-2 font-bold" style={{ color: 'var(--color-electric-green)' }}>18,000円</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ゲーム王国公式 機種別買取価格ページ（PS5・Switch、2026年10月18日閲覧）。2026年6月12日時点はPS5 Pro 70,000円・PS5 40,000円でした。参考価格は付属品完備・動作良好が前提で、欠品・状態により減額されます。価格は日々変動します。</p>
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
                              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>否定的な口コミに多い内容</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・状態による減額で期待より低い査定になった</li>
                <li>・LINE仮査定の目安より本査定が低くなった（公式FAQでも仮査定は価格保証ではないと明記）</li>
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
                <li>+ ゲーム専門の宅配買取で、故障品・箱なし・レトロゲームも対象</li>
                <li>+ 初回の合計買取価格10%アップ（自動適用）</li>
                <li>+ 送料無料（佐川急便の集荷利用時）</li>
                <li>+ 最短当日〜翌営業日に振込手続き</li>
                <li>+ キャンセル時の返送料も無料・一部返送も可能</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- 送料無料は佐川急便の集荷のみ（営業所持ち込み・他社便は対象外）</li>
                <li>- LINE仮査定は価格保証ではない</li>
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ゲーム王国の利用が適している方</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・故障品・箱なし・レトロゲームを含めてまとめて売りたい方</li>
              <li>・初めて利用して初回10%アップを適用したい方</li>
              <li>・できるだけ早く入金してほしい方</li>
                            <li>・リサイクルショップの査定額に不満がある方</li>
            </ul>
          </div>
        </section>

        {/* Third-party ratings */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />第三者サイトの口コミ評価（件数つき）</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <thead>
                <tr className="border-b-2" style={{ borderColor: 'rgba(0,0,0,0.1)' }}><th className="text-left py-2 pr-4" style={{ color: 'var(--color-deep-blue)' }}>掲載先</th><th className="text-left py-2 pr-4" style={{ color: 'var(--color-deep-blue)' }}>評価・件数</th><th className="text-left py-2" style={{ color: 'var(--color-deep-blue)' }}>星別の件数</th></tr>
              </thead>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4">ヒカカク！</td><td className="py-2 pr-4 font-bold">4.64（2,485件）</td><td className="py-2">★5 1,762件／★4 595件／★3 101件／★2 15件／★1 12件</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4">ウリドキ</td><td className="py-2 pr-4 font-bold">4.5（300件以上）</td><td className="py-2">星別の内訳は非公開</td></tr>
                <tr><td className="py-2 pr-4">ゲーム王国公式サイト</td><td className="py-2 pr-4 font-bold">高評価率 約98%</td><td className="py-2">3〜5点を高評価として集計（2026年1月時点・ヒカカクと自社に寄せられた声の合計）</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ヒカカク！ゲーム王国の口コミページ、ウリドキ ゲーム王国の口コミページ、ゲーム王国公式トップ（いずれも2026年10月18日確認）。</p>
          </div>
          <div className="glass-card p-6 mt-4">
            <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>星分布から読み取れること</h3>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・ヒカカクの2,485件のうち★4以上は2,357件（94.8%）、★1〜2は27件（1.1%）です。</li>
              <li>・公式の「約98%」は★3を高評価に含めた数字のため、★4以上で数えた94.8%とは基準が異なります。</li>
              <li>・ヒカカク・ウリドキは利用者の投稿型の口コミサイトです。利用後に投稿する方の声に偏る可能性があるため、評価は目安としてご覧ください。</li>
            </ul>
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
            ゲーム王国の<span style={{ color: 'var(--color-electric-green)' }}>初回10%アップ</span>査定を利用する
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            佐川急便の集荷を利用すれば送料・返送料は無料のため、費用負担なく査定を依頼できます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://gameoukoku.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              無料で買取申込みする
            </a>
            <Link href="/" className="btn-outline py-3 px-8" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#CBD5E1' }}>
              他のサービスと比較
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のサービスのレビュー</h3>
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
        <section style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--color-accent-soft-weak)', borderRadius: '12px', borderLeft: '3px solid var(--color-electric-green)' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>関連記事</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/which-is-best/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取店の用途別おすすめ比較</Link></li>
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
