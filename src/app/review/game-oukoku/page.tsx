import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ゲーム王国の評判・口コミ｜ヒカカク2,485件の94.8%が★4以上・低評価の理由と買取条件【2026年11月】',
  description:
    'ゲーム王国の評判・口コミを、ヒカカク2,485件の星分布（★4以上94.8%・★1〜2は1.1%）と、ウリドキの低評価11件の内容で整理しています。低評価は査定額が事前の目安より低いという内容です。送料無料の条件、振込までの日数、本人確認書類、店頭買取4店舗も公式サイトで確認しています（2026年11月21日確認）。',
  keywords: ['ゲーム王国 評判', 'ゲーム王国 口コミ', 'ゲーム王国 買取', 'ゲーム王国 買取 評判', 'ゲーム王国 査定'],
  openGraph: {
    images: ['/og.png'],
    title: 'ゲーム王国の評判・口コミ｜ヒカカク2,485件の94.8%が★4以上・低評価の理由と買取条件【2026年11月】',
    description: 'ゲーム王国の評判・口コミを、ヒカカク2,485件の星分布とウリドキの低評価11件の内容、公式FAQ・利用規約（2026年11月21日確認）で整理しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: 'ゲーム専門の宅配買取', description: 'ゲーム機本体・ソフト・周辺機器に絞った宅配買取サービスです。事前にLINE仮査定（無料）で価格の目安を確認できますが、公式FAQでは「仮査定は価格保証ではない」と明記されています。' },
  { title: '初回の合計買取価格10%アップ', description: '初めて宅配買取を利用する方は、合計買取価格が10%アップします（申込みで自動適用・買取価格が1円以上つく商品すべてが対象）。同業他社からの申込み、大破品、発送後にキャンセルして返送した場合は対象外です（公式サービス案内 2026年10月1日更新版で確認）。2026年11月21日時点では公式トップに「初めての方は買取価格10%UP」の表示がありますが、条件を記載した詳細ページは表示されなかったため、申込み前に公式サイトでご確認ください。' },
  { title: '送料・査定料・振込手数料が無料', description: '送料・査定料・振込手数料はすべてゲーム王国の負担です。ただし送料無料は佐川急便の集荷限定で、他の運送業者や元払い発送は対象外です（公式FAQ明記）。無料の梱包キットは1申込につき2箱まで届けてもらえます。' },
  { title: '故障品・箱なし・レトロも対象', description: '電源が入らない本体、箱・付属品のない本体やソフト、ファミコン・セガサターンなどのレトロゲームまで買取対象と公式サイトに記載されています。海賊版、個人制作の作品、改造・塗装など復元できない加工品、大きく破損・変形した商品は対象外です。入金は振込情報の確認後、最短当日〜翌営業日です（2026年11月21日確認）。' },
];

const campaigns = [
  { name: '初回利用の買取価格10%アップ', cond: '初めて宅配買取を利用する方が対象（自動適用）。条件の詳細ページは2026年11月21日時点で表示されず、公式トップのバナー表示のみ確認' },
  { name: 'Switch全商品買取10%アップ', cond: '2026年8月1日〜11月30日の申込みが対象。査定10円以上のSwitch本体・ソフト・周辺機器に自動適用。Switch 2・店舗買取・同業他社は対象外' },
  { name: 'ゲーム機本体の買取価格保証', cond: '付属品・状態・動作にかかわらず、対象機種は一定額以上で買取（例：PS5 10,000円、Switch 2 8,000円、PS4 3,000円、Switch 2,000円）。大破品・同業他社は対象外。保証額は毎日更新' },
  { name: 'ゲームソフト10円価格保証／自分で箱を用意すると査定額200円アップ', cond: '公式サービス一覧に掲載（更新日はそれぞれ2026年10月1日・2026年7月9日）。条件は公式ページでご確認ください' },
];

const steps = [
  { step: 1, title: '買取申込み', description: '公式サイトの宅配買取フォームから申し込み、佐川急便の集荷日時を指定します。初回の申込み時にマイページが作成されます。電話・メールでの査定は行っておらず、事前に目安を知りたい場合はLINE仮査定（価格保証ではありません）を利用します。' },
  { step: 2, title: '梱包・発送', description: '売りたいゲームを梱包し、ゲーム王国が手配する佐川急便の集荷で発送します。営業所への持ち込みや他社便は送料無料の対象外です。段ボールが必要な場合は無料の宅配買取キット（組み立て済み・1人2箱まで）を届けてもらえます。' },
  { step: 3, title: '査定・結果通知', description: '商品到着後に動作確認と査定が行われ、3営業日以内にメール（LINEから申し込んだ場合はLINE）で結果が届きます。マイページの査定明細では、1点ごとの査定額と状態ランク、キャンペーンの加算額を確認できます。動作確認の際にデータは初期化されます。' },
  { step: 4, title: '本人確認・入金', description: '査定額に同意したら、マイページから本人確認書類と口座情報を提出します。内容確認後、最短当日〜翌営業日（土日除く）に振込手続きが行われます（利用規約 第8条では原則3営業日以内）。申込み住所を変更した場合は、簡易書留の受取り後の振込になります。査定後のキャンセルは返送料無料（ゲーム王国負担）です。' },
];

const faqs = [
  { q: 'ゲーム王国の評判は良いですか？', a: 'ヒカカクの口コミ2,485件では総合4.64で、★4以上が94.8%、★1〜2は1.1%です（2026年11月21日確認・最新投稿は2026年3月18日）。一方、ウリドキの口コミ一覧の1ページ目20件では11件が★1.7以下で、いずれも査定額が想定より低かったという内容でした（投稿は2021〜2022年）。評価の高さは掲載先によって異なるため、LINE仮査定で目安を確認し、納得できなければ返送料無料でキャンセルできる点を前提に判断されることが判断の目安になります。' },
  { q: 'ゲーム王国はどんなゲームが買取対象ですか？', a: 'Switch 2・Switch・PS5〜PS2・Xbox Series X/Sなどに加え、ファミコン・セガサターン・ドリームキャストなどのレトロゲームまで、ゲーム機本体・ソフト・周辺機器が対象です。新品・未開封品も買取できますが、中古品として査定されます（2026年11月21日確認）。' },
  { q: '初回10%UPは何回利用できますか？', a: '初めてゲーム王国の宅配買取を利用する方が対象のため、利用できるのは初回のみです。申込みで自動適用され、別途の手続きは不要です。商品発送後にキャンセルして返送した場合は対象外になります（公式サービス案内 2026年10月1日更新版）。2026年11月21日時点で条件の詳細ページは表示されなかったため、最新の条件は公式サイトでご確認ください。' },
  { q: '査定にどのくらい時間がかかりますか？', a: '公式FAQでは、商品の到着後3営業日以内にメールで査定完了の案内が届くとされています（2026年11月21日確認）。' },
  { q: '振込までは何日かかりますか？', a: '査定額に同意して本人確認書類と口座情報を提出すると、内容確認後、最短当日または翌営業日（土日除く）に振込手続きが行われます。公式トップでは、商品到着から入金までを平均3営業日以内と案内しています。申込み住所を変更した場合は、簡易書留の受取り後の振込になります（2026年11月21日確認）。' },
  { q: '本人確認書類は何が使えますか？', a: '運転免許証、マイナンバーカード、健康保険資格確認書、住民票（発行から3か月以内）のいずれか1点を、マイページから画像で提出します。学生証、マイナンバー通知カード、パスポートは使えません。書類に申込み住所の記載がない場合は、補完書類が必要です（公式FAQ・買取の流れ、2026年11月21日確認）。' },
  { q: '査定額に納得できない場合は？', a: '査定後のキャンセルは可能で、返送料はゲーム王国負担（無料）と公式FAQに明記されています。一部商品のみの返送も受け付けており、一部だけ売って残りを返送してもらうこともできます。返送準備には1〜3営業日ほどかかり、買取成立後のキャンセルはできません。査定結果の連絡から2週間連絡がない場合は自動的にキャンセル扱いとなり、保管期間を過ぎた商品は無料で引き取り（処分）となります（2026年11月21日確認）。' },
  { q: 'ゲーム機本体も買取対象ですか？', a: 'はい、ゲーム機本体も買取対象です。公式の参考買取価格は付属品が揃い動作に問題がない状態を前提としており、欠品や状態によって減額されます。対象機種には「買取価格保証」があり、付属品・状態・動作にかかわらず一定額以上で買い取るとされています（例：PS5 10,000円、Switch 2 8,000円。2026年11月21日確認）。' },
  { q: '壊れたゲーム機や箱なしソフトは買取できますか？', a: 'はい、故障品・箱なし・付属品欠品でも買取対応と公式に明記されています。ただし参考買取価格は完品基準のため、状態に応じた減額があります。大きく割れている、内部基盤がむき出しになっているなどの大破品は買取できません。' },
  { q: '送料は本当に無料ですか？', a: '送料・査定料・振込手数料は無料ですが、送料無料は佐川急便の集荷を利用した場合に限られます。佐川急便の元払いや他社便で送った場合は自己負担、他社の着払いは送料が買取金額から差し引かれます（公式「買取の流れ」）。梱包キットは1申込につき2箱まで無料です。' },
  { q: '店舗に持ち込んで売ることはできますか？', a: '店頭買取は茨城県の小美玉店・石岡店、兵庫県の明石店・稲美店の4店舗で行っています。それ以外の地域の方は宅配買取の利用が案内されています。なお、佐川急便の営業所への持ち込み発送は受け付けていません（公式FAQ・店舗一覧、2026年11月21日確認）。' },
  { q: 'ゲーム王国の運営会社はどこですか？', a: '大阪市東成区の株式会社Ultimate Life（2013年10月設立、大阪府公安委員会 古物商許可 第621180142468号）が運営しています（公式 会社概要、2026年11月21日確認）。' },
];

export default function GameOukokuReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲーム王国の評判・口コミ｜ヒカカク2,485件の94.8%が★4以上・低評価の理由と買取条件【2026年11月】", "datePublished": "2026-03-15", "dateModified": "2026-11-21", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ゲーム王国' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ゲーム専門</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲーム王国の評判・口コミ<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>買取条件レビュー</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲーム王国は株式会社Ultimate Lifeが運営するゲーム専門の宅配買取サービスです。初回の合計買取価格10%アップ、佐川急便の集荷での送料無料、最短当日〜翌営業日の振込手続きが公式に案内されています。ヒカカクの口コミは2,485件で総合4.64です（2026年10月18日確認・11月21日に再確認し件数・内訳とも変化なし）。公式トップでは、年間成立件数を約7千件（2025年1月〜12月の実績）、宅配買取の運営実績を10年以上（2016年5月17日オープン）、商品到着から入金までを平均3営業日以内と案内しています（2026年11月21日確認）。
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
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>結論：ゲーム王国の評判・口コミ</h2>
            <ul className="space-y-2 text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-light)' }}>
              <li>・<strong>評判</strong>：ヒカカクの口コミ2,485件は総合4.64で、★4以上が2,357件（94.8%）、★1〜2は27件（1.1%）です。</li>
              <li>・<strong>低評価の内容</strong>：ウリドキの口コミ一覧1ページ目20件のうち11件が★1.7以下で、11件とも「査定額が想定より低かった」という内容です。うち4件は事前の目安（事前査定・ホームページの価格）との差に触れています。投稿はいずれも2021〜2022年のものです。</li>
              <li>・<strong>向いている方</strong>：故障品・箱なし・レトロゲームを含めて、全国から宅配でまとめて売りたい方。査定後のキャンセルは返送料無料で、一部だけ返送してもらうこともできます。</li>
              <li>・<strong>注意が必要な方</strong>：参考買取価格やLINE仮査定の金額どおりに売れることを前提にしている方。参考価格は付属品完備・動作良好が前提で、仮査定は価格保証ではないと公式に明記されています。</li>
            </ul>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              運営は株式会社Ultimate Life（大阪府公安委員会 古物商許可 第621180142468号・2013年設立）です。査定料・キャンセル時の返送料・振込手数料はすべて無料で、当サイトで確認した範囲では「怪しい・詐欺」とする根拠は見当たりません（断定ではなく確認項目ベースの評価です）。送料無料は<strong>佐川急便の集荷を利用した場合に限られ</strong>、佐川急便の営業所への持ち込みはできません。
            </p>
            <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>出典：ヒカカク！ゲーム王国の口コミページ、ウリドキ ゲーム王国の口コミページ、ゲーム王国公式サイト（FAQ・買取の流れ・会社概要）。いずれも2026年11月21日確認。口コミの内訳は当サイトで集計しています。</p>
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
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>査定・入金</th><td className="py-2">到着後3営業日以内にメールで査定連絡。振込情報の確認後、最短当日〜翌営業日に入金（土日除く）。受取は本人名義の銀行口座への振込のみ</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>本人確認書類</th><td className="py-2">運転免許証・マイナンバーカード・健康保険資格確認書・住民票（発行3か月以内）のいずれか1点をマイページから提出。学生証・パスポートは不可</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>店頭買取</th><td className="py-2">茨城県（小美玉店・石岡店）と兵庫県（明石店・稲美店）の4店舗のみ。その他の地域は宅配買取</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>利用できる年齢</th><td className="py-2">18歳以上（高校生を含む）。18歳未満の方は保護者の方の申込が必要</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>キャンセル</th><td className="py-2">査定後キャンセルの返送料はゲーム王国負担（無料）。一部商品のみの返送も可能。返送までに1〜3営業日ほど。商品の保管は査定結果の連絡から2週間。買取成立後のキャンセルは不可</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ゲーム王国公式サイト（会社概要・FAQ・買取の流れ・店舗一覧・利用規約 第8条・第9条・第12条）2026年10月18日確認・2026年11月21日に再確認</p>
          </div>
        </section>

        {/* Fee 4-point */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ゲーム王国の手数料：出張費・査定料・キャンセル料・返送料の4項目</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>出張費</th><td className="py-2">－（公式サイトで出張買取の案内は確認できず。宅配買取と4店舗での店頭買取）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>査定料</th><td className="py-2">無料</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>キャンセル料</th><td className="py-2">無料</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>返送料（売らない場合）</th><td className="py-2">無料（ゲーム王国負担）。一部商品のみの返送も可能</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ゲーム王国公式サイト（会社概要・FAQ・利用規約 第12条）2026年11月21日確認。査定額に納得できなければ費用負担なしで返送してもらえます。</p>
          </div>
        </section>

        {/* Price Examples */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />公式の参考買取価格の例（2026年11月21日確認）</h2>
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
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ゲーム王国公式 機種別買取価格ページ（PS5・Switch、2026年10月18日閲覧・2026年11月21日に同額を確認）。2026年6月12日時点はPS5 Pro 70,000円・PS5 40,000円でした。参考価格は付属品完備・動作良好が前提で、欠品・状態により減額されます。価格は日々変動します。</p>
          </div>
        </section>

        {/* Campaigns */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />実施中のキャンペーン・サービス（2026年11月21日確認）</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <thead>
                <tr className="border-b-2" style={{ borderColor: 'rgba(0,0,0,0.1)' }}><th className="text-left py-2 pr-4" style={{ color: 'var(--color-deep-blue)' }}>名称</th><th className="text-left py-2" style={{ color: 'var(--color-deep-blue)' }}>条件・対象外</th></tr>
              </thead>
              <tbody>
                {campaigns.map((c, i) => (
                  <tr key={c.name} className={i < campaigns.length - 1 ? 'border-b' : ''} style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4 font-bold">{c.name}</td><td className="py-2">{c.cond}</td></tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ゲーム王国公式トップ、公式コラム「Switch全商品買取10%UPキャンペーン」（2026年9月26日更新）、「ゲーム機本体『買取価格保証』サービス」（2026年2月2日更新）、公式サービス一覧。いずれも2026年11月21日確認。併用の可否は公式ページに記載がないため確認できていません。</p>
          </div>
        </section>

        {/* Review Tendency */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />低評価の口コミの中身（ウリドキ20件を当サイトで集計）</h2>
          <div className="glass-card p-6">
            <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・ウリドキの口コミ一覧1ページ目に表示される20件（投稿日2021年2月13日〜2022年11月1日）のうち、★1.7以下は11件、★3.0以上は9件です。</li>
              <li>・★1.7以下の11件は、すべて「査定額が想定より低かった」という内容です。</li>
              <li>・うち4件は事前の目安との差（事前査定・ホームページの買取価格・バーコードで確認した価格）、2件は他店（ゲオなど）の買取額との比較に触れています。</li>
              <li>・入金の遅れや対応の悪さを主な理由とする低評価は、この20件には含まれていません。</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--color-text-light)' }}>
              公式の参考買取価格は付属品完備・動作良好が前提で、LINE仮査定も価格保証ではないと明記されています。低評価の多くはこの前提と実際の査定額の差に関するものと当サイトでは整理しています。査定明細は1点ごとに状態ランクつきで表示されるため、金額に納得できない商品だけを返送料無料で返送してもらう方法が取れます。
            </p>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※ウリドキ ゲーム王国の口コミページ（2026年11月21日確認）を当サイトで集計しました。最新の投稿が2022年11月1日のため、現在の査定水準を示すものではありません。ヒカカクでは★1〜2が2,485件中27件（1.1%）で、掲載先によって評価の分布が大きく異なります。</p>
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
                <li>- LINE仮査定は価格保証ではなく、参考買取価格も完品・動作良好が前提</li>
                <li>- 店頭買取は茨城・兵庫の4店舗のみ（その他の地域は宅配買取）</li>
                <li>- 宅配買取の対象はゲーム関連商品のみ</li>
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
              <li>・2026年11月30日までにSwitch本体・ソフト・周辺機器を宅配で売りたい方（Switch全商品10%アップの対象。Switch 2は対象外）</li>
              <li>・査定後、最短当日〜翌営業日の振込手続きを希望する方</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--color-text-light)' }}>
              一方、ウリドキの口コミ一覧1ページ目の低評価11件は、いずれも査定額が想定より低いという内容でした。参考買取価格どおりの金額を前提にしている方は、LINE仮査定や他社の査定額と比べてから決めると判断しやすくなります。
            </p>
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
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4">ヒカカク！</td><td className="py-2 pr-4 font-bold">4.64（2,485件）</td><td className="py-2">★5 1,762件／★4 595件／★3 101件／★2 15件／★1 12件（表示中の最新投稿は2026年3月18日）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4">ウリドキ</td><td className="py-2 pr-4 font-bold">4.5（300件以上）</td><td className="py-2">星別の内訳は非公開。1ページ目20件は★1.7以下11件・★3.0以上9件（最新投稿は2022年11月1日）</td></tr>
                <tr><td className="py-2 pr-4">ゲーム王国公式サイト</td><td className="py-2 pr-4 font-bold">高評価率 約98%</td><td className="py-2">3〜5点を高評価として集計（2026年1月時点・ヒカカクと自社に寄せられた声の合計）</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ヒカカク！ゲーム王国の口コミページ、ウリドキ ゲーム王国の口コミページ、ゲーム王国公式トップ（いずれも2026年10月18日確認・2026年11月21日に再確認し数値に変化なし）。</p>
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
