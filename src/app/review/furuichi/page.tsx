import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'
import KaitoriWorldCta from '@/components/KaitoriWorldCta';
import FuruichiCta from '@/components/FuruichiCta';

export const metadata: Metadata = {
  title: '古本市場（ふるいち）のゲーム買取の評判・口コミは？【2026年10月】店頭＋宅配買取の条件を検証',
  description:
    '古本市場（ふるいち）のゲーム買取について検証しています。運営は東証スタンダード上場の株式会社テイツー（埼玉県公安委員会 古物商許可 第431100002846号）です。店頭でその場で現金化できる強みに加え、宅配買取も「ふるいち宅配買取」が稼働しています（2026年8月4日確認）。',
  keywords: ['古本市場 買取', 'ふるいち 買取', 'ふるいち ゲーム 買取', 'ふるいち 宅配買取', '古本市場 評判', 'テイツー 買取'],
  openGraph: {
    images: ['/og.png'],
    title: '古本市場（ふるいち）のゲーム買取の評判・口コミは？【2026年10月】店頭＋宅配買取の条件を検証',
    description: '古本市場（ふるいち）のゲーム買取を、上場企業である運営会社テイツーの公式情報で検証しています。店頭買取の強みと、稼働中の「ふるいち宅配買取」の条件（査定額3,000円以上で送料無料）・注意点について解説します。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: '東証スタンダード上場企業が運営', description: '運営は株式会社テイツー（東証スタンダード上場・岡山市）。上場企業ならではの情報開示・コンプライアンス体制があり、「実態不明の業者では」という不安が少ないのが安心材料です。' },
  { title: 'その場で査定・即日現金化（店頭）', description: '店頭買取のため、持ち込めばその場で査定・現金の受け取りが可能です。宅配のような発送・入金待ちの時間がなく、すぐに現金化したい方に適しています。' },
  { title: 'レトロゲーム・周辺機器に強み', description: 'ファミコン・スーファミ等のレトロゲームから最新機種まで幅広く買い取っています。ゲーム専門の買取実績が長く、周辺機器や本・トレカもまとめて持ち込めます。' },
  { title: '宅配買取「ふるいち宅配買取」も利用可能', description: '旧宅配「ふるいちオンライン」は2026年6月30日で終了しましたが、現在は公式サイト上の「ふるいち宅配買取」が稼働しています（2026年8月4日確認）。査定額3,000円以上で送料無料です。ただし3,000円未満は査定額から1,000円が差し引かれ、キャンセル時の返送料は自己負担のため、少量・低額品の宅配にはご注意ください。' },
];

const steps = [
  { step: 1, title: '売りたい品と本人確認書類を準備', description: 'ゲーム機・ソフト・周辺機器などをまとめ、運転免許証などの本人確認書類を用意します（古物営業法により必須）。' },
  { step: 2, title: '最寄りの古本市場・ふるいち店舗へ持ち込み', description: '全国の店舗に持ち込みます。店舗により買取対象・在庫状況が異なるため、ご来店前に取扱いをご確認いただくと、手続きが円滑です。' },
  { step: 3, title: 'その場で査定・価格提示', description: 'スタッフがその場で査定し、買取価格を提示します。査定料は無料で、納得できなければキャンセルも可能です。' },
  { step: 4, title: '現金受取り・完了', description: '査定額に納得したら、その場で現金を受け取って完了です。宅配のような入金待ちがありません。' },
];

const faqs = [
  { q: '古本市場（ふるいち）は宅配買取に対応していますか？', a: 'はい。旧宅配「ふるいちオンライン」は2026年6月30日でサービスを終了しましたが、現在は公式サイト（furu1.net）上の「ふるいち宅配買取」が稼働しており、自宅から送って売ることができます（2026年8月4日確認）。査定額3,000円以上で送料無料（3,000円未満は査定額から1,000円差引）、無料段ボールは集荷時にヤマト運輸が持参します。なお、旧サービス終了と現サービスの関係（開始・再開日）についての公式告知は確認できませんでした。' },
  { q: '古本市場の運営会社は信頼できますか？', a: '運営は株式会社テイツー（本社：岡山市南区／東証スタンダード上場）で、埼玉県公安委員会の古物商許可 第431100002846号を取得しています。上場企業として情報開示やコンプライアンス体制が整っており、実態不明の業者ではありません。' },
  { q: 'レトロゲームも買い取ってもらえますか？', a: 'はい、ファミコン・スーパーファミコン・ゲームボーイなどのレトロゲームから最新機種まで幅広く買取対象です。古本市場・ふるいちはゲーム買取の実績が長く、周辺機器やトレカ・本もまとめて持ち込めます。付属品の有無や動作状態で査定額が変わるため、揃えて持ち込むことをおすすめします。' },
  { q: '査定料やキャンセル料はかかりますか？', a: '店頭買取は出張費なし・査定料無料で、査定額に納得できなければその場でキャンセルできます。宅配買取（ふるいち宅配買取）も査定は無料で集荷時点の費用はかかりませんが、キャンセル時の返送料は自己負担です。また査定額合計が3,000円未満の場合は査定額から1,000円が差し引かれて入金されるため、少量・低額品は店頭持ち込みが適しています。' },
  { q: '宅配買取の査定日数や入金までの流れは？', a: '査定日数の具体的な日数は公式に記載がありません（「到着次第査定」との案内のみ）。集荷はヤマト運輸で、申込当日は不可・申込日の翌々日以降で日程を選択します。査定額を了承すると3営業日以内に指定口座へ振込されます。本人確認は運転免許証・マイナンバーカードなど写真付き書類が必須で、保険証・学生証は利用できません。' },
  { q: '店頭買取と宅配買取はどちらが得ですか？', a: '店頭は「その場で現金化できる・送料や返送のやり取りが不要」、宅配は「自宅から送れて店舗に行く手間がない」という違いがあります。ふるいちは現在両方に対応しており、査定額3,000円以上なら宅配の送料は無料です。ただし宅配は3,000円未満だと1,000円差引・キャンセル時の返送料自己負担があるため、低額品の売却や近くに店舗がある方には店頭買取が適しています。高値での売却を目指す場合は、当サイトの公式価格を実測した価格DBで各社の買取価格を比較してから判断することをおすすめします。' },
  { q: '売る前に買取価格を調べる方法はありますか？', a: 'ふるいち公式の買取価格ページで、Switch 2・PS5などの現行機からファミコン・スーパーファミコン等のレトロ機まで機種別に買取上限金額が公開されています（2026年8月1日時点の掲載を確認。価格は常に変動する可能性あり）。あわせて当サイトでは定期的に、ブックオフ・ゲオなど各社の実際の買取価格を調査して掲載しているため、最も高い買取店を比較してから売却先を選べます。' },
];

export default function FuruichiReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "古本市場（ふるいち）のゲーム買取の評判・口コミは？店頭＋宅配買取の条件を検証", "datePublished": "2026-07-09", "dateModified": "2026-08-04", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map((f) => ({"@type": "Question", "name": f.q, "acceptedAnswer": {"@type": "Answer", "text": f.a}}))}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: '古本市場（ふるいち）' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            古本市場（ふるいち）のゲーム買取の評判は？<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>店頭＋宅配買取の条件を検証</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            東証スタンダード上場の株式会社テイツーが運営する、ゲーム・本・トレカに強みを持つ買取チェーンです。店頭でその場で現金化できる手軽さに加え、宅配も「ふるいち宅配買取」が稼働中で、査定額3,000円以上なら送料無料で自宅から売れます（2026年8月4日確認）。買取方法ごとの条件と、向いている方・注意点を公式情報にもとづいて整理しました。
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
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>総評：上場企業が運営し、店頭での即日現金化と「ふるいち宅配買取」に対応。レトロから最新ゲームまでの売却に適したサービス</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              古本市場（ふるいち）は東証スタンダード上場の株式会社テイツー（埼玉県公安委員会 古物商許可 第431100002846号）が運営する買取チェーンです。上場企業ならではの信頼性と、<strong>店頭でその場で査定・現金化できる</strong>手軽さ、レトロゲームへの強さが魅力です。旧宅配「ふるいちオンライン」は2026年6月30日で終了しましたが、現在は<strong>「ふるいち宅配買取」が稼働しており、査定額3,000円以上で送料無料</strong>で自宅から売れます（2026年8月4日確認）。ただし宅配は<strong>3,000円未満だと査定額から1,000円差引・キャンセル時の返送料は自己負担</strong>のため、低額品は店頭買取が適しています。近くに店舗がありすぐに現金化したい方も、店舗が遠く宅配でまとめて売りたい方も利用できます。
            </p>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              関連：<Link href="/software/high-value/" style={{ color: 'var(--color-electric-green)' }}>高く売れるソフトを実測データで確認する</Link>／<Link href="/review/kaitori-ouji/" style={{ color: 'var(--color-electric-green)' }}>宅配専門の買取王子と比較する</Link>
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

        {/* Takuhai Status */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />宅配買取の経緯：「ふるいちオンライン」終了と「ふるいち宅配買取」の現行条件</h2>
          <div className="glass-card p-6 mb-4">
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-light)' }}>
              宅配買取の経緯を整理します。宅配買取サービスだった<strong>「宅配買取ふるいちオンライン」は2026年6月30日でサービスを終了</strong>しました（当サイト2026年7月9日確認）。その後、公式サイト（furu1.net）上で<strong>「ふるいち宅配買取」</strong>が案内されており、<strong>2026年8月4日時点で稼働中</strong>であることを確認しています。つまり現在のふるいちは<strong>店頭買取＋宅配買取の両対応</strong>です。なお、旧サービス終了と現サービスの関係（正式な開始日・「再開」の告知）は公式サイト上で確認できないため、この点については断定を控えます。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              宅配の流れは「申込フォームで申込 → ヤマト運輸が集荷（申込当日は不可・申込日の翌々日以降で日程選択）→ 到着次第査定 → 査定額を了承後、3営業日以内に振込」です。無料段ボールは<strong>集荷時にヤマト運輸が持参</strong>する方式で、自前の段ボールも使えます（郵便局・コンビニからの自己発送は不可）。
            </p>
          </div>
          <div className="glass-card p-6 overflow-x-auto">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>「ふるいち宅配買取」の条件（公式記載ベース）</h3>
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>送料</th><td className="py-2">査定額3,000円以上で無料。<strong>3,000円未満の場合は査定額から1,000円差引いて入金</strong>（集荷時点では費用は発生しない）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>返送料（キャンセル時）</th><td className="py-2"><strong>自己負担</strong></td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>段ボール</th><td className="py-2">無料段ボールあり（集荷時にヤマト運輸が持参。自前の段ボールも可）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>集荷</th><td className="py-2">ヤマト運輸。申込当日は不可、申込日の翌々日以降で選択</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>査定日数</th><td className="py-2">具体的な日数は公式に記載なし（「到着次第査定」との案内のみ）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>入金</th><td className="py-2">査定了承後、3営業日以内に指定口座へ振込</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>本人確認</th><td className="py-2">写真付き本人確認書類が必須（免許証・マイナンバーカード・パスポート等。<strong>保険証・学生証は不可</strong>）</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>申込点数</th><td className="py-2">1点から可</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              補足：2026年8月1日〜8月31日の宅配買取申込を対象とした買取UPキャンペーンが実施されています（2026年8月4日確認）。恒常的なものではなく、内容は予告なく変更される場合があります。また、買取価格表はSwitch 2・PS5などの現行機からファミコン・スーパーファミコン等のレトロ機まで機種別に公式サイトで公開されています（2026年8月1日時点の買取上限金額として掲載）。
            </p>
            <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>出典：ふるいち公式「ふるいち宅配買取」案内ページ・ゲーム買取価格表ページ 2026年8月4日確認</p>
          </div>
        </section>

        {/* Company Info */}
        <section className="mb-12">
          <FuruichiCta />

          <h2 className="section-heading mb-6"><span className="section-heading-bar" />運営会社情報（公式サイトより）</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>運営会社</th><td className="py-2">株式会社テイツー（東証スタンダード上場）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>本社</th><td className="py-2">岡山県岡山市南区豊浜町2-2</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>古物商許可</th><td className="py-2">埼玉県公安委員会 第431100002846号</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>買取方式</th><td className="py-2">店頭買取＋宅配買取（「ふるいち宅配買取」。旧「ふるいちオンライン」は2026年6月30日で終了）</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>対応品目</th><td className="py-2">ゲーム機・ソフト（レトロ〜最新）、周辺機器、本、トレカなど</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：株式会社テイツー公式（会社概要）、古本市場公式買取ページ 2026年8月4日確認（会社情報・古物商許可番号は2026年7月9日確認時点と一致）</p>
          </div>
        </section>

        {/* Fee 4-point */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />手数料の比較：送料・査定料・キャンセル料・返送料（店頭・宅配）</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <thead>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>項目</th><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>店頭買取</th><th className="text-left py-2 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>宅配買取</th></tr>
              </thead>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>出張費・送料</th><td className="py-2 pr-4">－（持ち込みのため不要）</td><td className="py-2">査定額3,000円以上で送料無料（3,000円未満は査定額から1,000円差引）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>査定料</th><td className="py-2 pr-4">無料</td><td className="py-2">無料（集荷時点で費用発生なし）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>キャンセル料</th><td className="py-2 pr-4">無料（その場でお断り可）</td><td className="py-2">キャンセル自体は可（ただし返送料が発生）</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>返送料（売らない場合）</th><td className="py-2 pr-4">－（持ち帰るだけ）</td><td className="py-2"><strong>自己負担</strong></td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：古本市場公式買取ページ・「ふるいち宅配買取」案内ページ 2026年8月4日確認。宅配の詳細条件（段ボール・集荷・入金・本人確認）は上の「ふるいち宅配買取の条件」表をご覧ください。</p>
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

        {/* 第三者サイトの口コミ状況 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />口コミ・評判：第三者サイトの掲載状況（出典を明記）</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <thead><tr><th className="text-left p-2">サイト</th><th className="p-2">評価</th><th className="p-2">件数</th><th className="text-left p-2">中身</th></tr></thead>
              <tbody>
                <tr><td className="p-2">みん評（ふるいちオンライン）</td><td className="p-2 text-center">2.84</td><td className="p-2 text-center">118件</td><td className="p-2">2026年6月30日に終了した旧宅配「ふるいちオンライン」名義のページ。みん評自身の要約では<strong>低評価は店舗買取についてのものが多い</strong>とされています（検索結果の表示で確認。ページ本体は当サイトの環境から閲覧できませんでした）</td></tr>
                <tr><td className="p-2">ウリドキ（古本市場）</td><td className="p-2 text-center">4.0</td><td className="p-2 text-center">4件</td><td className="p-2">投稿は2017年12月〜2019年12月。分類は古本3件・CD/DVD 1件で、<strong>ゲームの買取についての口コミは0件</strong></td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：<a href="https://minhyo.jp/furuichionline" target="_blank" rel="nofollow noopener" className="underline">みん評 ふるいちオンライン</a>（2026年10月15日・検索結果の表示）、<a href="https://uridoki.net/shops/3352/reviews" target="_blank" rel="noopener" className="underline">ウリドキ 古本市場の口コミ</a>（2026年10月14日取得）。点数・件数は投稿により変わります。</p>
            <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
              口コミの件数が多いのはみん評（118件）で、評価は2.84と低めです。ウリドキは4件と少なく、ゲームの買取に限った口コミはありません。ゲームの買取に限った評判は、口コミからは判断しにくいのが現状です。
              そのため当サイトでは、口コミの点数ではなく、上の「手数料」「宅配買取の条件」など<strong>公式に書かれている条件</strong>で判断することをおすすめしています。
              店頭で売る場合は、減額があったときに「どの点で何円下がったか」をその場で確認しておくと、ほかの店と比べやすくなります。
            </p>
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
          <FuruichiCta />

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
