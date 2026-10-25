import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'トレーダー買取の評判と買取価格の調べ方｜秋葉原本店・2号店の店頭と宅配の手数料・送料条件【2026年10月】',
  description:
    'トレーダー（秋葉原）の買取価格は公式e-trader.jpの買取検索で確認できます。店頭（本店B1F・2号店3F、11〜20時）と宅配（対象5本以上で送料無料・手数料500〜800円・返送は着払い）の条件、査定3日以内・振込2〜3日の流れ、口コミの傾向を公式情報（10月25日確認）で解説します。',
  keywords: ['トレーダー 買取', 'トレーダー 買取 評判', 'トレーダー ゲーム買取', 'トレーダー 買取価格', 'トレーダー 秋葉原 買取', 'e-trader 買取', 'トレーダー 宅配買取'],
  openGraph: {
    images: ['/og.png'],
    title: 'トレーダー買取の評判と買取価格の調べ方｜店頭・宅配の条件',
    description: '秋葉原の老舗トレーダーのゲーム買取について、公式情報と参考価格をもとに検証しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: '1999年設立・秋葉原の老舗ゲームショップ', description: '株式会社トレーダー（東京都千代田区外神田・古物商許可301039903890）が運営しています。秋葉原に本店・2号店の実店舗を構える、ゲーム売買の老舗として知られる存在です（本店・2号店とも11時〜20時・年中無休。2026年10月25日公式確認）。買取サイトはe-trader.jpで、新品通販のtrader.co.jpとは別サイトです。' },
  { title: 'レトロ・海外ゲームまで対象とする品揃えの広さ', description: '現行機に加え、レトロゲームや海外ゲームまで買取対象に含む取扱範囲の広さが特徴です。秋葉原の店頭では珍しいタイトルの持ち込みにも対応してきた実績があり、品揃え・マニア対応への好意的な言及が口コミ傾向でも見られます。' },
  { title: '参考買取価格を毎日更新して公開', description: '公式の買取価格検索でTVゲームの参考価格が公開されており、「数日前の参考買取価格・1日1回程度更新」と更新頻度まで公式に注記されています。当サイト実測（2026年7月7日）ではマリオカート8 デラックス3,800円・Switch有機EL 26,000円等が掲載されていました。' },
  { title: '査定3日以内・振込2〜3日の所要日数', description: '宅配（通信買取）は商品到着日から3日以内に査定結果をメールで案内、承諾後の振込処理開始から2〜3日で振込という日数が公式に明記されています（2026年10月25日確認）。所要日数の見通しが立つため、日数の記載がない業者に比べて予定を立てやすくなっています。' },
];

const dislikeReasons = [
  { reason: 'キャンセル時の返送は着払い（利用者負担）', fact: '査定額に納得できず返送してもらう場合、返送料は着払い＝利用者負担と規約に明記されています。返送無料のソフマップ（ラクウル）等と違い、送ってから売却を検討する使い方には適していません。送る前に参考価格をご確認ください。' },
  { reason: '宅配は振込時に通信買取手数料が差し引かれる', fact: '通信買取では、振込時に通信買取手数料（佐川飛脚宅配便160サイズまでは500円、その他は800円）が買取金額から差し引かれると公式に記載されています（2026年10月25日確認）。少額の売却では手数料の比重が大きくなるため、1点から手数料無料で売れる店頭買取と比べてご検討ください。' },
  { reason: '送料無料には5本以上の条件がある', fact: '宅配の送料無料は、送料無料対象商品（PCゲーム・DVD/ブルーレイ・一部のTVゲーム・フィギュア/プラモデル）が5本以上含まれることが条件です（成年コミックは20冊以上、グッズ類は30点以上）。TVゲームは「一部」と記載されており、すべてのソフトが対象とは限りません。満たさない場合は元払い＝利用者負担となります（2026年10月25日公式確認）。' },
  { reason: '出張買取なし・本人確認は書類同梱式', fact: '買取方法は店頭と宅配の2種で、出張買取の公式記載はありません。また本人確認はeKYCではなく、本人確認書類のコピーを荷物に同梱する従来型の方式です（免許証・マイナンバーカード表面・パスポート等）。' },
];

const faqs = [
  { q: 'トレーダーのゲーム買取の送料は無料ですか？', a: '送料無料対象商品（PCゲーム・DVD/ブルーレイ・一部のTVゲーム・フィギュア/プラモデル）が5本以上含まれる場合に送料無料です（成年コミックは20冊以上・グッズ類は30点以上）。条件を満たさない場合は元払い＝利用者負担になります。また査定額に納得できなかった場合の返送は佐川急便の着払い＝利用者負担です（2026年10月25日公式確認）。' },
  { q: '宅配買取に手数料はかかりますか？', a: 'かかります。振込時に通信買取手数料として、佐川飛脚宅配便160サイズまでは500円、その他は800円が差し引かれると公式に記載されています。店頭買取は1点から手数料無料です（2026年10月25日公式確認）。' },
  { q: '店頭買取はどこで受け付けていますか？', a: '本店（千代田区外神田4-2-1）はB1F、2号店（千代田区外神田1-4-9）は3Fが買取フロアです。営業時間はいずれも11時〜20時・年中無休で、査定に承諾するとその場で支払いを受けられます。営業時間は変更される場合があるため、来店前に公式サイトのトップページをご確認ください（2026年10月25日公式確認）。' },
  { q: '買取価格は事前に分かりますか？', a: '公式の買取検索（e-trader.jp）でTVゲームの参考買取価格が公開されています。「数日前の参考価格・1日1回程度更新・買取保証なし」と公式に注記されているため、あくまで目安です。当サイト確認時点（2026年7月7日）ではマリオカート8 デラックス3,800円・Switch有機ELネオン26,000円等でした。' },
  { q: '査定や振込までどのくらいかかりますか？', a: '商品到着日を含め3日以内に査定結果の案内、承諾後2〜3日で振込と公式に明記されています（初回は本人確認書類の確認後）。日数が公式に示されている点は安心材料です。' },
  { q: '本人確認はどのように行いますか？', a: '初回は、本人確認書類（運転免許証・マイナンバーカード表面・健康保険資格確認書・日本国発行のパスポート等）のコピー、または住民票の写しの原本を、申込用紙・商品と一緒に箱に同梱します。住民票原本以外の場合は、書類記載の住所宛てに転送不可の簡易書留が送られて本人確認が行われます。2回目以降は、初回に発行された通信買取IDとパスワードを申込用紙に記入すれば書類の同封は不要です。振込先は本人名義の口座に限られます（2026年10月25日公式確認）。' },
  { q: 'キャンペーンはありますか？', a: '常設キャンペーンの記載はなく、期間限定型です。2026年10月25日の公式確認では、店頭買取限定の「買取アップキャンペーン」が11月1日まで開催されています（宅配は対象外）。10月17日の確認時には、通信買取限定の回（10月7日〜10月23日到着分。対象はブルーレイ・DVDやガンプラで、ゲームソフトは対象外）が開催されていました。7月（7/8〜7/23到着分）には、PS5・Switch・Switch 2ソフト等を対象とした回もありました。対象は回ごとに変わるため、ご利用前に公式サイトにて最新情報をご確認ください。' },
  { q: '同じソフトを複数本売れますか？', a: '規約上、同一タイトルを複数売る場合は減額の対象になることがあります。またオンライン専用・オンライン認証必須のソフトも減額対象です（未開封は除く）。まとめ売り前に規約の確認をおすすめします。' },
];

export default function TraderReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "トレーダーのゲーム買取の評判・口コミと送料条件を検証", "datePublished": "2026-07-07", "dateModified": "2026-10-25", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'トレーダー' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>秋葉原・レトロ対応</span>
            <span className="tag-pill text-xs" style={{ background: 'rgba(59,130,246,0.2)', color: '#93C5FD' }}>2026年10月25日 更新</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            トレーダーのゲーム買取<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>秋葉原の老舗の実力と送料条件を検証</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            トレーダーは、1999年に設立され、秋葉原に実店舗を構える老舗です。レトロから海外ゲームまで対象とする品揃えと、毎日更新される参考価格の公開が強みですが、宅配買取には「対象5本以上で送料無料」「振込時に通信買取手数料500円〜800円」「キャンセル返送は着払い」という他社と異なる条件があります。当サイトでは、公式情報（2026年10月25日確認）をもとに適した利用場面を整理しています。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.e-trader.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
              公式サイトで買取価格を見る
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
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>秋葉原の店舗を利用できる方、5点以上をまとめて送る方に適した買取店</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              トレーダーは、秋葉原の店頭に持ち込める場合、レトロ・海外ゲームを含めて幅広く相談できる老舗です。宅配は<strong>対象5本以上で送料無料・査定3日以内・振込2〜3日</strong>と日数が明確な一方、<strong>振込時に通信買取手数料（500円〜800円）が差し引かれ、キャンセル時の返送は着払い（利用者負担）</strong>のため、送る前に公式の参考価格で金額の目安をご確認ください。少量のみの売却や、査定額を見てから決めたい場合は返送無料の<Link href="/review/sofmap/" style={{ color: 'var(--color-electric-green)' }}>ソフマップ（ラクウル）</Link>、人気作の相場比較は<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>公式価格を実測した価格インデックス</Link>をご利用ください。
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />トレーダーのゲーム買取 4つの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 使い方・価格の調べ方（2026-07 追加: 「トレーダー 買取」の利用意図に直答） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />トレーダー買取の使い方と価格の調べ方</h2>
          <div className="glass-card p-6 mb-4">
            <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>買取価格を調べる：公式の買取価格検索（e-trader.jp）</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              トレーダーの買取価格は、買取サイト<strong>e-trader.jp</strong>の買取価格検索で公開されています。公式に「数日前の参考買取価格・1日1回程度更新」と注記されているとおり、目安としてご利用ください（実際の査定額は商品の状態によって変わります）。当サイト実測（2026年7月7日）ではマリオカート8 デラックス3,800円・Switch有機EL 26,000円等が掲載されていました（価格・注記は7月7日時点の記録です）。他社と比べたい場合は、当サイトの<a href="/price-index/" className="underline font-bold" style={{ color: 'var(--color-deep-blue)' }}>最新の実測価格比較</a>とあわせてご確認いただくと、現在どの業者の価格が高いかまで分かります。
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>店頭買取（本店B1F・2号店3F）</h3>
              <ol className="text-sm leading-relaxed space-y-1.5" style={{ color: 'var(--color-text-light)' }}>
                <li>1. 売りたい商品と本人確認書類（古物営業法で必要）を持参し、本店B1F（外神田4-2-1）または2号店3F（外神田1-4-9）の買取フロアへ（11時〜20時・年中無休）</li>
                <li>2. 店頭で査定を受け、金額に納得した場合はその場で支払い（1点から・手数料無料）</li>
                <li>3. レトロ・海外ゲームなど珍しいタイトルの持ち込みにも対応してきた老舗です</li>
              </ol>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>宅配（通信）買取</h3>
              <ol className="text-sm leading-relaxed space-y-1.5" style={{ color: 'var(--color-text-light)' }}>
                <li>1. 申込用紙・商品・本人確認書類（初回）を箱に詰めて着払いで発送。<strong>対象商品5本以上で送料無料</strong>（満たさない場合は元払い）</li>
                <li>2. 商品を発送 → <strong>到着日を含め3日以内に査定案内</strong></li>
                <li>3. 承諾後<strong>2〜3日で振込</strong>（<strong>通信買取手数料500円〜800円を差し引き</strong>）。キャンセル時の返送は<strong>着払い（利用者負担）</strong>である点に注意</li>
              </ol>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：トレーダー公式（e-trader.jp トップ・店舗案内・通信買取ガイド）2026年10月25日確認、買取規約は2026年7月7日確認。手順・条件は変更される場合があります。</p>
        </section>

        {/* Company Info */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />運営会社情報（公式サイトより）</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>運営会社</th><td className="py-2">株式会社トレーダー（設立1999年3月）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>本社</th><td className="py-2">東京都千代田区外神田4-2-1 トレーダー本店ビル</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>古物商許可</th><td className="py-2">東京都公安委員会 301039903890</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>店舗</th><td className="py-2">本店（外神田4-2-1・買取フロアB1F）・2号店（外神田1-4-9・買取フロア3F）。11時〜20時・年中無休（出張買取の記載なし）</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>宅配条件</th><td className="py-2">対象5本以上で送料無料／振込時に通信買取手数料500円（160サイズまで）・800円（その他）／キャンセル返送は着払い／査定3日以内・振込2〜3日</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：トレーダー公式サイト（会社概要・店舗案内・通信買取ガイド・買取規約）。店舗・宅配条件は2026年10月25日、会社概要・規約は2026年7月7日確認。上場・親会社の記載はなし（確認不可）</p>
          </div>
        </section>

        {/* 注意点 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ご利用前の注意点と対策</h2>
          <div className="space-y-4">
            {dislikeReasons.map((r, i) => (
              <div key={i} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>注意点{i + 1}：{r.reason}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{r.fact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Review Tendency */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />口コミの傾向（レビューサイト調査）</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-electric-green)' }}>好意的な口コミに多い内容</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・レトロ・海外ゲームまで扱う品揃えの広さ</li>
                <li>・秋葉原店頭での接客への好意的な言及</li>
                <li>・参考価格が公開されていて目安が立てやすい</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>否定的な口コミに多い内容</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・査定額が他店と比べて低かった</li>
                <li>・箱・説明書の傷による減額が厳しかった</li>
                <li>・混雑時は店頭で1時間程度待った</li>
              </ul>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※レビューサイト・比較メディアに掲載されている口コミの傾向を当サイトで整理したものです（2026年7月調査）。個別の体験を保証するものではありません。</p>
        </section>

        {/* Recommended */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />こんな方におすすめ</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・秋葉原の店頭に持ち込める方（レトロ・海外ゲームの相談も）</li>
              <li>・対象商品を5本以上まとめて送れる方（送料無料条件クリア。通信買取手数料500円〜800円を差し引いても見合う量）</li>
              <li>・査定・振込の日数が明確な業者を選びたい方（3日以内査定・2〜3日振込）</li>
              <li>・売る物の参考価格を事前に確認してから送りたい方</li>
            </ul>
            <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
              返送料をかけたくない比較検討派は<Link href="/review/sofmap/" style={{ color: 'var(--color-electric-green)' }}>ソフマップ（ラクウル）</Link>、レトロ専門の相見積もりは<Link href="/review/retrog/" style={{ color: 'var(--color-electric-green)' }}>レトログ</Link>との比較をおすすめします。
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
            レトロも海外ゲームも、<span style={{ color: 'var(--color-electric-green)' }}>秋葉原の老舗</span>に相談
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            参考買取価格を毎日更新して公開しています。対象商品を5本以上まとめて送ると宅配の送料が無料です（通信買取手数料は別途差し引き）。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.e-trader.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              公式サイトで買取価格を見る
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
            <li style={{ marginBottom: '0.5rem' }}><Link href="/review/sofmap/" style={{ color: 'var(--color-electric-green)' }}>ソフマップ（ラクウル）の評判・口コミ（返送料無料）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取価格インデックス（現在最も高い業者の確認）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/software/retro-sell-guide/" style={{ color: 'var(--color-electric-green)' }}>実家のレトロゲームを売るなら？</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/which-is-best/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取はどこがいい？用途別おすすめ比較</Link></li>
          </ul>
        </section>

        <AuthorBox />
      </div>
    </>
  );
}
