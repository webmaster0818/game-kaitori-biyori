import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ハードオフのゲーム買取価格表はある？評判・口コミ97件の集計と他店の公開価格（2026年10月）',
  description:
    'ハードオフはゲームの買取価格表を公開していません。代わりに使えるオファー買取の評判（App Storeレビュー97件を集計）、ジャンク買取、4つの買取方式と、価格を公開している5店のSwitch 2実測価格（2026年10月20日）を掲載しています。',
  keywords: ['ハードオフ ゲーム買取', 'ハードオフ 買取 評判', 'ハードオフ ジャンク 買取', 'ハードオフ ゲーム 安い', 'ハードオフ 宅配買取'],
  openGraph: {
    images: ['/og.png'],
    title: 'ハードオフのゲーム買取価格表はある？評判・口コミを検証',
    description: 'ジャンク買取に対応し、全国1,000店超を展開するハードオフのゲーム買取を、公式情報と口コミ傾向で検証しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: '全国1,000店超の実店舗網（東証プライム上場）', description: '運営の株式会社ハードオフコーポレーションは東証プライム上場（証券コード2674）。公式のIR情報によれば店舗数（直営・FC合計）は1,078店舗（2026年3月期）と国内最大級で、「近所に店がある」アクセス性が最大の強みです。' },
  { title: '壊れた品も対象の「ジャンク買取」', description: '公式FAQに「壊れていてもジャンク品として店頭にて販売しています。喜んで買取させていただきます」と明記されています。動作しないゲーム機・欠品ソフトなど、他店で断られる品にも値が付く可能性がある点がハードオフの特徴です（ジャンク買取は店頭が基本）。' },
  { title: '店頭・宅配・出張・オファーの4方式', description: '公式の買取方式は①店頭（即現金化）②宅配（送料・手数料無料、梱包資材あり）③出張④オファー買取の4つです。オファー買取はアプリ/Webに出品すると全国のハードオフグループ店舗から最大5件の買取オファーが届き、「売る前に値段が分かる」仕組みです。' },
  { title: '査定はデータベース＋店舗の地域性で変動', description: '公式FAQによれば、査定はグループ内の商品データベースを基準にスタッフが1点ずつ目視確認し、店舗の地域性（売れやすい・売れにくい）も価格の変動要因になります。そのため、同じ品でも店舗によって査定額が変わる場合があります。' },
];

const dislikeReasons = [
  { reason: '「安い」と言われやすい', fact: 'ゲームの買取価格表は公式に公開されておらず、実際に査定に出すまで金額が分かりません。人気タイトルや高額品では「専門店より安かった」という口コミ傾向が複数のレビューサイトで見られます。高く売りたい品は、当サイトの公式価格を実測した価格インデックスでゲオ・ブックオフ等の公表価格を確認してから持ち込むことをおすすめします。' },
  { reason: '店舗・地域で査定に差がある', fact: '公式FAQが「店舗の地域性も価格変動の要因」と明記しているとおり、店舗による査定差は仕組み上のものです。時間があれば複数店舗・複数社での相見積もり（オファー買取の活用も含む）が有効です。' },
  { reason: '電話での事前査定は基本不可', fact: '公式FAQで電話査定は基本的に行っていないとされています。事前に金額を知りたい場合は、アプリの「オファー買取」で写真出品して見積もりを集める方法が公式の代替手段です。' },
];

const faqs = [
  { q: 'ハードオフのゲーム買取は安いですか？', a: '品物によって異なります。ハードオフは買取価格表を公開しておらず、グループのデータベースと店舗の地域性で査定額が決まる仕組みのため、人気タイトルはゲーム専門店やゲオ・ブックオフの公表価格より安くなる場合があります。一方、他店で断られるジャンク品・古い機種に値が付くのは強みです。人気作は当サイトの価格インデックスで相場を確認してから売却先を選ぶことをおすすめします。' },
  { q: '壊れたゲーム機でも本当に買い取ってもらえますか？', a: '公式FAQに「壊れていてもジャンク品として店頭にて販売しています。喜んで買取させていただきます」と明記されています。ジャンク品の買取・販売はハードオフの代表的な取り組みです（ジャンクは店頭買取が基本で、販売時の保証対象外という扱い）。' },
  { q: 'ハードオフに宅配買取はありますか？', a: 'あります。公式の宅配買取は送料・手数料が会社負担で、梱包資材の発送サービスもあります。ゲームは買取強化カテゴリに含まれています。査定日数やキャンセル時の返送条件は公式ページに明記がないため、申込前に確認することをおすすめします。' },
  { q: 'オファー買取とは何ですか？', a: '公式アプリ/Webに売りたい品を出品すると、全国のハードオフグループ店舗が査定して最大5件の買取オファー（見積もり）が届く仕組みです。金額を承認すると自宅集荷され、最終査定の確定後2〜4営業日で入金されます。送料は無料です（取扱対象外品などは着払いで返却）。「売る前に値段が分かる」点で、価格表非公開という弱点を補えます。' },
  { q: '古物商許可は取得していますか？', a: '株式会社ハードオフコーポレーションは新潟県公安委員会の古物商許可（許可番号461060001043）を取得している正規のリユース事業者です。東証プライム上場企業（証券コード2674）でもあります。' },
  { q: 'レトロゲームを売るならハードオフとレトログのどちらが適していますか？', a: '「近所の店で今日現金化したい・ジャンクも一緒に処分したい」場合はハードオフ、「レア品を含むレトロゲームの相場を事前に確認して宅配で送りたい」場合は機種別の買取価格表を公開しているレトログが適しています。プレミア品は複数社で比較することをおすすめします。' },
];

export default function HardoffReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ハードオフのゲーム買取は安い？評判・口コミとジャンク買取・4つの買取方式を検証", "datePublished": "2026-07-03", "dateModified": "2026-10-23", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ハードオフ' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>店頭・ジャンクOK</span>
            <span className="tag-pill text-xs" style={{ background: 'rgba(59,130,246,0.2)', color: '#93C5FD' }}>2026年10月22日 更新</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ハードオフのゲーム買取<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>「安い？」の実態とジャンク買取を検証</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ハードオフは全国1,000店超を展開する東証プライム上場のリユース最大手です。「壊れていても買い取ってくれる」ことで知られる一方、「査定が安い」という声もあります。公式情報（会社概要・FAQ・IR資料）と口コミ傾向をもとに、ゲーム買取の実態と効果的な使い方を整理しました。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.hardoff.co.jp/sell/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
              公式サイトで買取方法を見る
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
          <div className="glass-card p-6" style={{ borderLeft: '4px solid var(--color-electric-green)' }}>
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>ジャンク品・まとめ処分に強みがあり、人気作は事前の相場確認が必要な買取店</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              ハードオフは、壊れたゲーム機や古い周辺機器まで「ジャンク」として買い取る公式方針を持つ、全国1,000店超の最大手です。近所の店で即日現金化でき、他店で断られる品の受け皿になります。一方で買取価格表は非公開で、査定はデータベース＋店舗の地域性で変動するため、<strong>人気タイトルは専門店やゲオ・ブックオフの公表価格より安くなることがあります</strong>。「動くか分からない品・大量処分」はハードオフ、「人気作・プレミア品」は<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>公式価格を実測した価格インデックス</Link>で相場を確認してから売却先を選ぶ使い分けをおすすめします。
            </p>
          </div>
        </section>

        {/* 価格表の代わり（2026-10-22 追加） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ハードオフのゲーム買取価格表はある？</h2>
          <div className="glass-card p-6">
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-light)' }}>
              ハードオフは、ゲームの買取価格表を公式に公開していません（査定は店舗ごとに行われ、店舗の地域性も価格の変動要因になると公式FAQに記載されています）。売る前に金額を知る方法は、アプリの「オファー買取」で見積もりを受け取る方法です。比較の目安として、買取価格を公開している店舗の価格を当サイトで実測した結果を以下に掲載します。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
                <thead>
                  <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
                    <th className="text-left py-2 pr-4" style={{ color: 'var(--color-deep-blue)' }}>Switch 2本体（日本語・国内専用）</th>
                    <th className="text-right py-2" style={{ color: 'var(--color-deep-blue)' }}>公式掲載の買取価格</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4">ハードオフ</td><td className="py-2 text-right">価格表の公開なし（店頭査定・オファー買取）</td></tr>
                  <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4">買取ルデヤ（新品・未開封のみ）</td><td className="py-2 text-right">49,000円</td></tr>
                  <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4">駿河屋</td><td className="py-2 text-right">38,000円</td></tr>
                  <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4">ソフマップ（ラクウル）</td><td className="py-2 text-right">36,000円</td></tr>
                  <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4">ふるいち</td><td className="py-2 text-right">36,000円</td></tr>
                  <tr><td className="py-2 pr-4">ブックオフ（店頭）</td><td className="py-2 text-right">35,000円</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm leading-relaxed mt-4" style={{ color: 'var(--color-text-light)' }}>
              ハードオフで査定を受ける際は、上記のような公開価格を控えておくと、提示額が妥当かどうかを判断しやすくなります。他の機種・ソフトの実測価格は<Link href="/hardware/switch2/" style={{ color: 'var(--color-electric-green)' }}>Switch2 買取価格（5店比較）</Link>、<Link href="/software/high-value/" style={{ color: 'var(--color-electric-green)' }}>高く売れるゲームソフト</Link>、<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>価格インデックス</Link>に掲載しています。
            </p>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：各店の公式買取ページ（2026年10月20日 当サイト実測）。価格は日々変動するため、売却の直前に各社の公式ページでご確認ください。</p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ハードオフのゲーム買取 4つの特徴</h2>
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />運営会社情報（公式サイト・IR資料より）</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>運営会社</th><td className="py-2">株式会社ハードオフコーポレーション（東証プライム・証券コード2674）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>本社</th><td className="py-2">新潟県新発田市新栄町3丁目1番13号</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>店舗数</th><td className="py-2">1,078店舗（直営・FC合計、2026年3月期。公式IR「ひと目でわかるハードオフコーポレーション」より）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>古物商許可</th><td className="py-2">新潟県公安委員会 許可番号461060001043</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>買取方式</th><td className="py-2">店頭買取／宅配買取／出張買取／オファー買取（アプリ・Web）</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ハードオフ公式サイト（会社概要・古物営業法に基づく表示・売りたい・よくあるご質問・IR情報）。2026年10月23日確認</p>
          </div>
        </section>

        {/* 安いと言われる理由 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />「ハードオフは安い」と言われる理由と対策</h2>
          <div className="space-y-4">
            {dislikeReasons.map((r, i) => (
              <div key={i} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>理由{i + 1}：{r.reason}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{r.fact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Review Tendency（2026-10-22 件数集計） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ハードオフの評判・口コミ（件数を数えた結果）</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-light)' }}>
            当サイトでは、公開されている口コミを2026年10月22日に1件ずつ読み、内容別に件数を数えました。ゲームに関する口コミは少数のため、ゲーム以外の品目も含めた傾向としてご覧ください。
          </p>
          <div className="glass-card p-6 overflow-x-auto mb-4">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <thead>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
                  <th className="text-left py-2 pr-4" style={{ color: 'var(--color-deep-blue)' }}>出典</th>
                  <th className="text-left py-2 pr-4" style={{ color: 'var(--color-deep-blue)' }}>評価・件数</th>
                  <th className="text-left py-2" style={{ color: 'var(--color-deep-blue)' }}>うちゲーム関連</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4">App Store「ハードオフのオファー買取」</td><td className="py-2 pr-4">4.47（2,082件の評価）。最新のレビュー97件（2019年11月〜2026年10月）の内訳は★5 30件・★4 15件・★3 10件・★2 10件・★1 32件</td><td className="py-2">97件中2件</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4">App Store「ハードオフ」公式アプリ</td><td className="py-2 pr-4">4.55（20,205件の評価）</td><td className="py-2">—（買取以外の機能を含むアプリの評価です）</td></tr>
                <tr><td className="py-2 pr-4">ウリドキ（HARD-OFF）</td><td className="py-2 pr-4">2.4（口コミ11件・2017〜2023年）</td><td className="py-2">11件中1件（レトロゲーム機・評価1.7）</td></tr>
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>オファー買取レビュー97件で多い不満</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・オファーが来ない・ほとんど来ない：10件（うちフィギュア・ホビー・トレカの出品3件、レトロゲーム機1件）</li>
                <li>・オファーが5件までしか届かない仕様への不満：3件（先に届いた低い金額で枠が埋まる、という指摘）</li>
                <li>・相場より安い金額のオファーだった：2件</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-electric-green)' }}>ゲームに関する投稿（全文の要旨）</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・PS4：出品後数時間で5件のオファーが届き、最高31,500円。近くの系列店のチラシでは33,000円だった（App Store・★3・2021年12月）</li>
                <li>・レトロゲーム機本体4台：オファーがなかなか届かず、届いた金額は3,000円だった（App Store・★1・2024年5月）</li>
                <li>・レトロゲーム機・ソフト：買取額が低く、約1週間後の店頭価格は大きく上回っていた（ウリドキ・評価1.7・2023年6月）</li>
              </ul>
            </div>
          </div>
          <p className="text-sm leading-relaxed mt-4" style={{ color: 'var(--color-text-light)' }}>
            件数から言えることは、「動作するゲーム機本体にはオファーが集まりやすい一方、レトロ品や需要の読みにくい品は金額がつきにくい場合がある」という点です。投稿数が少ないため、ゲームソフトの査定額の傾向までは判断できません。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：App Store（日本）の評価・カスタマーレビュー、ウリドキ「HARD-OFF」口コミページ（いずれも2026年10月22日確認・当サイト集計）。1件の投稿が複数の項目に該当する場合は、それぞれに数えています。個別の体験を保証するものではありません。</p>
        </section>

        {/* Recommended */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ハードオフの利用が適している方</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・壊れた・動作未確認のゲーム機やソフトをまとめて処分したい方</li>
              <li>・近所の店舗で今日中に現金化したい方</li>
              <li>・引っ越し・大掃除でゲーム以外の不用品も一緒に売りたい方</li>
              <li>・売る前に金額を知りたい方（オファー買取の写真出品を活用）</li>
            </ul>
            <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
              一方、人気タイトル・プレミア品を1円でも高く売りたい方は、<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>買取価格インデックス</Link>で公表価格のある店と比較するか、<Link href="/review/retrog/" style={{ color: 'var(--color-electric-green)' }}>レトロ専門のレトログ</Link>・<Link href="/review/surugaya/" style={{ color: 'var(--color-electric-green)' }}>駿河屋</Link>との相見積もりをおすすめします。
            </p>
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
            ジャンク品も動作品も<span style={{ color: 'var(--color-electric-green)' }}>まとめて</span>売却できるハードオフ
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            全国1,000店超の店頭買取に加え、宅配・出張・オファー買取に対応しています。壊れた品も買い取ることが公式方針です。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.hardoff.co.jp/sell/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              公式サイトで買取方法を見る
            </a>
            <Link href="/" className="btn-outline py-3 px-8" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#CBD5E1' }}>
              他のサービスと比較
            </Link>
          </div>
        </section>

        {/* 関連記事 */}
        <section style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--color-accent-soft-weak)', borderRadius: '12px', borderLeft: '3px solid var(--color-electric-green)' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>関連記事</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/review/retrog/" style={{ color: 'var(--color-electric-green)' }}>レトログの評判・口コミ（レトロ専門・価格表公開）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取価格インデックス（最も高い買取店の確認）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/condition-guide/" style={{ color: 'var(--color-electric-green)' }}>状態別ゲーム買取 許容度マップ（箱なし・傷・ジャンク）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/software/retro-sell-guide/" style={{ color: 'var(--color-electric-green)' }}>実家のレトロゲームを売るなら？</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/which-is-best/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取店の用途別おすすめ比較</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/review/bookoff/" style={{ color: 'var(--color-electric-green)' }}>ブックオフのゲーム買取は安い？評判を検証</Link></li>
          </ul>
        </section>

        <AuthorBox />
      </div>
    </>
  );
}
