import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ティファナの口コミ・評判｜ヒカカク530件の星分布と宅配停止中の売り方を公式で確認【2026年11月】',
  description:
    'ティファナの口コミ・評判を、ヒカカク!の530件（総合4.06・星1は66件）の星分布で確認しています。宅配買取は2026年11月18日時点で一時停止中のため、出張買取（無料）と店頭買取（東京15・埼玉3店舗）の条件を公式情報で整理しています。',
  keywords: ['ティファナ', 'ティファナ 口コミ', 'ティファナ ゲーム買取', 'トレカ 買取', 'フィギュア 買取', 'ホビー 買取'],
  openGraph: {
    images: ['/og.png'],
    title: 'ティファナの口コミ・評判｜ヒカカク530件の星分布と宅配停止中の売り方を公式で確認【2026年11月】',
    description: 'ヒカカク!530件の星分布と、宅配停止中の出張買取・店頭買取の条件を公式情報で確認しています（2026年11月18日）。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: 'ゲーム・トレカ・フィギュアを公式で案内', description: '公式サイトのゲーム・トレカ・フィギュアの各ページで、Switch・PS5・PS4・3DS・Vita・XBOX・レトロ機・周辺機器、ポケモンカード・遊戯王・デュエル・マスターズ・ヴァイスシュヴァルツ・スポーツトレカ等が買取対象として案内されています（2026年11月18日確認）。' },
  { title: '出張買取は無料・1点から', description: '公式の出張買取ページに「出張買取は完全無料」「キャンセル料など、お客様に費用を請求することは一切ございません」と記載されています。支払いはその場で現金です（公式FAQ・2026年11月18日確認）。' },
  { title: '店頭買取は東京15・埼玉3店舗', description: '公式の店舗一覧（/access/）に東京都15件・埼玉県3件が掲載されています（豪徳寺はリサイクルショップとReuse&Vintageの2件）。店頭は予約不要・査定当日に現金払いです（2026年11月18日確認）。' },
  { title: '宅配買取は一時停止中', description: '公式の宅配買取ページに「システムリニューアルのため一時停止」と表示されており、再開時期の記載はありません（2026年11月18日確認）。' },
];

const steps = [
  { step: 1, title: '買取方法を選ぶ', description: '宅配買取は2026年11月18日時点で一時停止中のため、出張買取（東京・埼玉・神奈川・千葉の一部地域）か店頭買取を選びます。出張買取は公式サイトの申込フォームまたは電話で申し込みます。' },
  { step: 2, title: '商品を準備する', description: '売りたいアイテムをまとめて準備します。付属品や箱がある場合は一緒に用意します。店頭買取は18歳未満・高校生は利用できません（公式・店頭買取ページ）。' },
  { step: 3, title: '査定', description: '出張買取は自宅で、店頭買取は店舗で査定を受けます。査定額に納得できない場合は、出張・店頭ともに無料でキャンセルできると公式に記載されています。' },
  { step: 4, title: '現金受取り・完了', description: '出張買取・店頭買取とも、同意書に署名したうえでその場で現金で支払われます。店頭買取はクーリングオフの対象外で、買取成立後の返却はできません（公式・店頭買取ページ）。' },
];

const targets = [
  { category: 'ゲーム', items: ['Nintendo Switch・3DS', 'PS5・PS4・PS Vita', 'XBOX', 'レトロゲーム機（昔のゲーム機）', 'ゲーム周辺機器・ゲームソフト'] },
  { category: 'トレーディングカード', items: ['ポケモンカード', '遊戯王', 'デュエル・マスターズ', 'ヴァイスシュヴァルツ', 'スポーツトレカ・アイドルトレカ'] },
  { category: 'フィギュア・ホビー', items: ['アニメ・ゲーム作品のフィギュア', 'プライズ品', 'レトロ玩具'] },
];

const faqs = [
  { q: 'ティファナの口コミ・評判はどうですか？', a: 'ヒカカク!では総合4.06点・530件で、星5が307件、星4が101件、星3が35件、星2が21件、星1が66件です（2026年11月18日閲覧）。星4以上が約77%ですが、星1も約12%あり、評価は分かれています。みん評は2026年11月18日時点でページを閲覧できず、確認できていません。' },
  { q: 'ティファナの宅配買取は使えますか？', a: '2026年11月18日時点で、公式の宅配買取ページに「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止しております」と表示されています。再開時期の記載はありません。現在は出張買取か店頭買取を利用することになります。' },
  { q: 'ティファナの店舗はどこにありますか？', a: '公式の店舗一覧には東京都15件（瑞江・中延・大山・阿佐ヶ谷・吉祥寺・高円寺・豪徳寺・十条・新小岩・都立家政・西荻窪・東中野・富士見台・武蔵小山・Reuse&Vintage豪徳寺）と埼玉県3件（イオンモール上尾・川口・イオンモール川口前川）が掲載されています（2026年11月18日確認）。店頭でゲーム・トレカを買い取るかは店舗ごとに異なる可能性があるため、持ち込む前に店舗へ確認することをおすすめします。' },
  { q: '出張買取の対応エリアと費用は？', a: '公式の出張買取ページでは「東京都、埼玉県、神奈川県、千葉県の一部地域」と案内されています（FAQでは「東京、埼玉、神奈川の一部地域」と記載）。出張費・査定料・キャンセル料は無料です（2026年11月18日確認）。' },
  { q: 'レトロゲームやプライズフィギュアも売れますか？', a: '公式の「買取できないもの」ページで、昔のゲーム機・レトロ玩具・プライズ品は「買取できます」と案内されています（2026年11月18日確認）。査定額は状態や付属品によって変わります。' },
  { q: '出張買取の支払いとキャンセルは？', a: '公式FAQに「その場で現金にてお支払い」「キャンセル可能です。キャンセル費用なども一切ございません」と記載されています。出張買取は条件によりクーリングオフの対象となる場合があり、詳細は公式の出張買取ページに記載されています。' },
];

export default function TifanaReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ティファナの口コミ・評判｜ヒカカク530件の星分布と宅配停止中の売り方を公式で確認【2026年11月】", "datePublished": "2026-03-15", "dateModified": "2026-11-18", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ティファナ' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="rank-badge rank-badge-3">3</span>
            <span className="tag-pill text-xs" style={{ background: 'rgba(148,163,184,0.2)', color: '#CBD5E1' }}>おすすめ3位</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ティファナ<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>評判・口コミのレビュー</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ティファナは、株式会社ゼロプラスが運営するリサイクルショップです。ゲーム・トレーディングカード・フィギュアも買取対象として公式に案内されています。本記事では、ヒカカク!の口コミ530件の星分布と、宅配買取の停止中に使える出張買取・店頭買取の条件を、公式情報（2026年11月18日確認）で整理しています。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
              公式サイトで買取を申込む
            </a>
            <Link href="/" className="btn-outline py-2.5 px-6" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}>
              ランキングに戻る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-lg p-4 mb-8 text-sm leading-relaxed" style={{ background: '#FEF3C7', border: '1px solid #FCD34D', color: '#78350F' }}>
          <p className="font-bold mb-1">【お知らせ・2026年11月18日確認】ティファナの宅配買取は一時停止中です</p>
          <p>ティファナ公式の宅配買取ページに「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止しております」と掲載されています。再開時期の記載はありません。店頭買取・出張買取は公式サイトで案内されています。本記事の宅配買取の条件は停止前（2026年6月18日）に確認した内容です。</p>
          <p className="text-xs mt-1">出典：<a href="https://tifana.net/shipping/" target="_blank" rel="noopener noreferrer nofollow" className="underline">ティファナ公式「宅配買取」</a>（2026年11月18日確認）</p>
        </div>
        <section className="glass-card p-6 mb-10">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：ティファナの口コミと今の売り方（2026年11月18日確認）</h2>
          <ul className="space-y-2 text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
            <li>・<strong>口コミ</strong>：ヒカカク!で総合4.06点・530件。星4以上が408件（約77%）、星1が66件（約12%）で、評価は分かれています。</li>
            <li>・<strong>宅配買取</strong>：システムリニューアルのため一時停止中で、再開時期の記載はありません。</li>
            <li>・<strong>出張買取</strong>：出張費・査定料・キャンセル料は無料で、その場で現金払いです。対応は東京・埼玉・神奈川・千葉の一部地域です。</li>
            <li>・<strong>店頭買取</strong>：東京15件・埼玉3件。予約不要・査定当日に現金払いで、18歳未満・高校生は利用できません。</li>
            <li>・<strong>向いている方</strong>：上記エリアに住んでいて、ゲームとホビーを自宅でまとめて査定してほしい方。エリア外の方は宅配買取の再開を待つか、<Link href="/review/hikakaku/" className="underline">ヒカカク!</Link>などで他社を比較する方法があります。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：<a href="https://www.tifana.net/visit/" target="_blank" rel="noopener noreferrer nofollow" className="underline">公式・出張買取</a>／<a href="https://www.tifana.net/tento/" target="_blank" rel="noopener noreferrer nofollow" className="underline">公式・店頭買取</a>／<a href="https://www.tifana.net/access/" target="_blank" rel="noopener noreferrer nofollow" className="underline">公式・店舗一覧</a>／<a href="https://hikakaku.com/company/10468/" target="_blank" rel="noopener noreferrer nofollow" className="underline">ヒカカク!「ティファナ」</a>（いずれも2026年11月18日閲覧）</p>
        </section>
        {/* Features */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ティファナの4つの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pros/Cons */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />メリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-electric-green)' }}>メリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>+ ゲーム・トレカ・フィギュアが公式の買取対象</li>
                <li>+ 出張買取は出張費・キャンセル料が無料</li>
                <li>+ 出張・店頭とも当日に現金で受け取れる</li>
                <li>+ 昔のゲーム機・レトロ玩具・プライズ品も買取対象</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- 宅配買取が一時停止中（2026年11月18日時点・再開時期未定）</li>
                <li>- 出張・店頭とも東京近郊が中心</li>
                <li>- 店頭買取は18歳未満・高校生は利用不可、クーリングオフ対象外</li>
                <li>- ヒカカク!の口コミで星1が66件（約12%）ある</li>
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
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ティファナ公式 <a href="https://www.tifana.net/hobby/game/" target="_blank" rel="noopener noreferrer nofollow" className="underline">ゲーム</a>・<a href="https://www.tifana.net/hobby/toreca/" target="_blank" rel="noopener noreferrer nofollow" className="underline">トレカ</a>・<a href="https://www.tifana.net/hobby/figure/" target="_blank" rel="noopener noreferrer nofollow" className="underline">フィギュア</a>の各買取ページ（2026年11月18日確認）。各ページで案内されている方法は出張買取と宅配買取（停止中）です。</p>
        </section>

        {/* 公式仕様・会社情報 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ティファナの公式仕様・会社情報（2026年11月18日確認）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <tbody>
                <tr><th>運営会社</th><td className="text-sm">株式会社ゼロプラス（1999年設立・代表取締役 吉木謙介）</td></tr>
                <tr><th>古物商許可</th><td className="text-sm">東京都公安委員会 第304409905763号</td></tr>
                <tr><th>所在地</th><td className="text-sm">東京都杉並区清水3-31-9（2025年10月に移転）</td></tr>
                <tr><th>買取方法</th><td className="text-sm">出張買取・店頭買取（東京15件・埼玉3件）。宅配買取は2026年11月18日時点でシステムリニューアルのため一時停止中</td></tr>
                <tr><th>費用</th><td className="text-sm">出張費・査定料・キャンセル料は無料（宅配買取は停止前の2026年6月18日時点で送料・宅配キット無料）</td></tr>
                <tr><th>支払い</th><td className="text-sm">出張・店頭とも査定当日に現金払い</td></tr>
                <tr><th>キャンセル</th><td className="text-sm">出張・店頭とも無料でキャンセル可能。店頭買取はクーリングオフ対象外</td></tr>
                <tr><th>対応品目</th><td className="text-sm">ゲーム機・ソフト（Switch/3DS/PS5/PS4/Vita/XBOX/レトロ機）、トレカ、フィギュアほか（ブランド品・贈答品なども対象）</td></tr>
                <tr><th>利用条件</th><td className="text-sm">店頭買取は18歳未満・高校生は利用不可</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：<a href="https://www.z-plus.jp/index" target="_blank" rel="noopener noreferrer nofollow" className="underline">株式会社ゼロプラス 会社概要</a>、ティファナ公式（出張買取・店頭買取・店舗一覧・FAQ）、いずれも2026年11月18日確認。</p>
        </section>

        {/* 口コミ（出典付き） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ティファナの口コミ・評判（ヒカカク!530件の星分布）</h2>
          <div className="glass-card p-6">
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
              買取比較サイト「ヒカカク!」のティファナの口コミは<strong>総合4.06点・530件</strong>です（2026年11月18日閲覧・最新投稿は2026年11月16日）。星別の件数は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="comparison-table">
                <thead><tr><th>評価</th><th>件数</th><th>割合</th></tr></thead>
                <tbody>
                  <tr><td>星5</td><td>307件</td><td>約58%</td></tr>
                  <tr><td>星4</td><td>101件</td><td>約19%</td></tr>
                  <tr><td>星3</td><td>35件</td><td>約7%</td></tr>
                  <tr><td>星2</td><td>21件</td><td>約4%</td></tr>
                  <tr><td>星1</td><td>66件</td><td>約12%</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
              割合は当サイトが件数から算出しました（四捨五入のため合計は100%になりません）。ヒカカク!は「悪い・ひどい・買取が安い」に当たる口コミの比率を16.4%と表示しています。星4以上が約77%を占める一方、星1も66件あり、評価は二極化しています。なお、ヒカカク!のページには「直近1ヶ月間の査定実績0件」と表示されており、宅配買取の停止の影響と考えられますが、理由は記載されていません。
            </p>
            <p className="text-sm mt-3" style={{ color: 'var(--color-text-light)' }}>
              口コミサイト「みん評」は2026年6月18日の閲覧時に2.68点・57件でしたが、2026年11月18日はページを閲覧できず、最新の値は確認できていません。
            </p>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：<a href="https://hikakaku.com/company/10468/" target="_blank" rel="noopener noreferrer nofollow" className="underline">ヒカカク!「ティファナ」</a>（2026年11月18日閲覧）。当サイトでは体験談の創作は行っていません。</p>
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
            ゲーム・ホビーの<span style={{ color: 'var(--color-electric-green)' }}>コレクション整理</span>はティファナで
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            出張買取は東京・埼玉・神奈川・千葉の一部地域で無料です。宅配買取は2026年11月18日時点で一時停止中です。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              公式サイトで買取を申込む
            </a>
            <Link href="/" className="btn-outline py-3 px-8" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#CBD5E1' }}>
              他のサービスと比較
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のサービスとの比較</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/review/hikakaku/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-green text-xs mb-2 inline-block">1位</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社一括査定の買取比較サイト</p>
            </Link>
            <Link href="/review/uriel/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-orange text-xs mb-2 inline-block">2位</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取ウリエル</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>出張買取対応・即日現金化</p>
            </Link>
          </div>
        </section>
        {/* 関連記事 */}
        <section style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--color-accent-soft-weak)', borderRadius: '12px', borderLeft: '3px solid var(--color-electric-green)' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>関連記事</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/kaitori-ranking/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取おすすめランキング15選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/switch/" style={{ color: 'var(--color-electric-green)' }}>Switch買取おすすめ3選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/retro/" style={{ color: 'var(--color-electric-green)' }}>レトロゲーム機買取ガイド</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/method/shop/" style={{ color: 'var(--color-electric-green)' }}>店舗持ち込み買取の流れとコツ</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/preparation/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取前の準備ガイド</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/price-guide/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取価格ガイド</Link></li>
          </ul>
        </section>

        <AuthorBox />
      </div>
    </>
  );
}
