import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ラクウル（ソフマップ宅配買取）の評判・口コミ｜返却送料・振込はいつ・誕生月5%【2026年10月】',
  description:
    'ソフマップの宅配買取「ラクウル」の評判を、みん評192件の評点を集計して整理しています。査定額に不満で返却する場合の送料（原則無料と例外）、銀行振込のタイミングと手数料250円、ウォレットの180日期限、誕生月5%増額の条件を公式規約で確認しました（2026年10月20日）。',
  keywords: ['ラクウル 評判', 'ラクウル 口コミ', 'ラクウル 返却 送料', 'ラクウル 銀行振込 いつ', 'ラクウル 誕生月', 'ソフマップ 買取 評判'],
  openGraph: {
    images: ['/og.png'],
    title: 'ラクウル（ソフマップ宅配買取）の評判・口コミ｜返却送料・振込・誕生月【2026年10月】',
    description: 'ラクウルの返却送料・振込のタイミング・誕生月キャンペーンを公式規約で確認し、口コミ192件の評点を集計しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: 'ビックカメラグループによる運営', description: '運営の株式会社ソフマップは2010年からビックカメラの完全子会社です（資本金1億円・店舗22）。1982年創業の老舗PC・ゲーム販売店で、2018年に買取アプリ「ラクウル」をリリースしました。大手家電グループの傘下であることが、信頼性の大きな裏付けとなっています。' },
  { title: '送料・査定料・キャンセル返送料がすべて無料', description: '宅配買取は集荷送料・査定料に加えて、キャンセル時の返送料まで無料と公式FAQに明記されています。返送料が着払い（利用者負担）の業者も多い中、査定額に納得できない場合に無料で返送してもらえる点は、複数社を比較して売却先を決めたい方に適しています。' },
  { title: '買取価格の事前公開（ゲーム約2.9万件掲載)', description: '公式の買取アイテム検索でゲームカテゴリ29,174件の参考価格が公開されています（2026年10月20日確認）。同日の確認では、Nintendo Switch 2本体（日本語・国内専用）と同梱セット3種がいずれも36,000円で掲載されており、送る前に金額の目安を確認できます。' },
  { title: '3つの集荷スタイルとeKYC完結', description: '「箱なし集荷（梱包箱を持ってきてもらう）」「箱あり集荷」「自分で発送」の3方式があり、梱包箱は無料です。本人確認はマイナンバーカード読取か自撮りのeKYCでオンライン完結します（18歳以上・国内居住者）。' },
];

const dislikeReasons = [
  { reason: '銀行振込に手数料250円/回がかかる', fact: '買取代金はいったん「ウォレット」に入り、銀行口座への引き出しには手数料250円/回がかかります（残高250円以下は引出不可）。ビック買取マネーや店舗での現金受取なら手数料無料なので、ビックカメラ・ソフマップで買い物する方はビック買取マネーでの受取を選ぶと手数料がかかりません。' },
  { reason: '振込までの日数は公式に明示されていない', fact: '公式の案内は「振込は金融機関窓口の営業時間帯に行われる」「営業時間外のご依頼は各金融機関の翌営業日のお取り扱い」という内容で、何日で着金するかの日数は示されていません。また、引き出し操作をしない限り振込は行われません。急ぎで現金が必要な場合は、店頭買取（22店舗）の利用をご検討ください。' },
  { reason: '減額率の数値は非公開', fact: '公式の「買取に出す前に」では、起動に必要なオプションが同梱されていないと査定金額が大きく下がると案内されていますが、具体的な減額率は公開されていません（2026年10月20日確認）。欠品がある場合は、参考価格から下がることを前提に見積もることをおすすめします。' },
];

// ラクウル公式（利用規約 第17条・よくあるご質問・引き出しの操作手順・各キャンペーンページ）で2026年10月20日に確認した内容
const rakuuruFacts = [
  { item: '集荷・査定の費用', fact: '無料（集荷・返却の送料はソフマップ負担）', note: '梱包箱も無料。1回の申込は最大3箱、1箱あたり3辺合計160cm以内・25kg以下' },
  { item: '査定額に不満で返却する場合の送料', fact: '原則無料（キャンセルに伴う返送費用はソフマップ負担）', note: '例外：規約違反、買取対象外と明示された物品を送った場合、いたずら等と判断された場合は、送料実費と手間賃を着払いで請求される場合があります' },
  { item: '返却品が届くまで', fact: '取引完了から3〜4日後に発送', note: '査定結果の表示から14日以内に回答がない場合も返送されます。まとめて1つの金額で査定された物品は、一部だけを売る・返すことはできません' },
  { item: '返却品を受け取れなかった場合', fact: '再度の返送は利用者負担', note: '受け取られずに戻った日から30日を経過すると、所有権を放棄したものとみなされます' },
  { item: '買取代金の入り方', fact: '買取確定後に「ウォレット」へ加算', note: '自動では振り込まれません。ウォレットから「銀行振込」「ビック買取マネー入金」「お店で現金受取」のいずれかを操作します' },
  { item: '銀行振込のタイミング', fact: '金融機関窓口の営業時間帯に振込', note: '営業時間外の依頼は各金融機関の翌営業日の取扱い。長期休業や混雑時は時間がかかる場合あり。着金までの日数は明示されていません' },
  { item: '銀行振込の手数料', fact: '1回の引き出しごとに250円（税込）', note: 'ウォレット残高250円以下は引き出し不可。1回の上限は100万円未満。ビック買取マネー・店頭現金受取は手数料無料' },
  { item: 'ウォレットの有効期限', fact: '売買契約日から180日', note: '期限を過ぎると手数料250円を差し引いて登録口座へ振り込まれ、250円に満たない残高は消失します' },
];

const rakuuruCampaigns = [
  { name: 'お誕生月お祝い！買取5%増額', detail: '誕生月に宅配買取を申し込んで売ると買取金額が5%増額。対象月内であれば何度でも利用可能', cond: '宅配買取限定（出張買取は対象外）。他キャンペーンとの併用不可。「自分で配送する」場合は伝票受取から14日以内に発送' },
  { name: '初回ご利用キャンペーン', detail: '宅配買取の初回利用時に取引合計金額へ500円増額', cond: '店舗買取・来店予約・出張買取は対象外。他キャンペーンとの併用不可（誕生月5%増額は併用可）' },
  { name: '買取金額増額チケット', detail: 'チケット原本を買取品に同梱し、買取合計2,000円以上で額面分を増額', cond: '5月1日〜翌年4月30日の1年間に1人5枚まで。一部サービス・クーポン・キャンペーンとは併用不可。出張買取では利用不可' },
];

const reviewScoreDist = [
  { label: '★5', count: 21 },
  { label: '★4', count: 8 },
  { label: '★3', count: 7 },
  { label: '★2', count: 16 },
  { label: '★1', count: 130 },
  { label: '評点なし', count: 10 },
];

const reviewThemes = [
  { theme: '査定額・減額に触れた口コミ', words: '減額／安い・安く／低い／査定額・査定金額', total: 105, low: 82, high: 13 },
  { theme: '返却・返送に触れた口コミ', words: '返却／返送', total: 25, low: 23, high: 2 },
  { theme: '査定や手続きの日数に触れた口コミ', words: '遅／時間がかか／1週間・一週間 等', total: 35, low: 22, high: 8 },
  { theme: '振込・手数料・入金に触れた口コミ', words: '振込・振り込み／手数料／入金', total: 11, low: 3, high: 6 },
  { theme: 'ゲーム機・ゲームソフトに触れた口コミ', words: 'ゲーム／Switch・スイッチ／PS5・PS4・プレステ／ソフト', total: 18, low: 13, high: 1 },
];

const faqs = [
  { q: 'ラクウルで査定額に納得できず返却する場合、送料はかかりますか？', a: '原則としてかかりません。ラクウル利用規約 第17条に「買取りのキャンセルに伴う物品の返送費用は、甲（ソフマップ）が負担する」と定められています（2026年10月20日確認）。ただし、規約違反があった場合、買取対象外と明示されている物品を送った場合、いたずらと判断された場合などは、送料実費と手間賃を着払いで請求される場合があります。返却品は取引完了から3〜4日後に発送されます。' },
  { q: 'ラクウルの銀行振込はいつ入金されますか？', a: '買取が確定すると代金はまず「ウォレット」に入り、利用者が「銀行振込」を操作してはじめて振込手続きが行われます。公式の案内では、振込は金融機関窓口の営業時間帯に行われ、営業時間外の依頼は各金融機関の翌営業日の取扱いとなります。着金までの日数は明示されていないため、長期休業前は余裕をもって操作することをおすすめします。振込手数料は1回250円です。' },
  { q: 'ラクウルの誕生月キャンペーンの条件は？', a: '誕生月に宅配買取を申し込んで売ると、買取金額が5%増額されます。対象月内であれば何度でも利用できます。宅配買取限定で出張買取は対象外、他のキャンペーンとの併用はできません（初回+500円とは併用可と初回キャンペーン側に記載があります）。条件は予告なく変更される場合があるため、ご利用前に公式キャンペーンページをご確認ください。' },
  { q: 'ウォレットの代金をそのままにしておくとどうなりますか？', a: 'ウォレット内の代金には売買契約日から180日間の有効期限があります。期限を過ぎると、手数料250円を差し引いた金額が登録口座へ振り込まれます。残高が250円に満たない場合は消失すると利用規約に定められています。' },
  { q: 'ラクウルの宅配買取は本当に無料ですか？', a: '集荷送料・査定料・キャンセル時の返送料は無料と公式FAQに記載されています（2026年10月20日確認）。梱包箱の送付も無料です。費用がかかるのは、買取代金を銀行振込で受け取る場合の手数料250円/回と、上記の例外にあたる場合の返送費用です。' },
  { q: '買取価格は事前に分かりますか？', a: '公式サイトの買取アイテム検索（raku-uru.sofmap.com）でゲームカテゴリ29,174件の参考価格が公開されています（2026年10月20日確認）。同日の確認では、Nintendo Switch 2本体（日本語・国内専用）と同梱セット3種がいずれも36,000円で掲載されていました。商品の状態や付属品の有無により買取金額は変動するため、参考値としてご覧ください。' },
  { q: '本人確認はどのように行いますか？', a: 'オンラインのeKYC（マイナンバーカード読み取り方式、または自撮り方式）で完結します。対応書類はマイナンバーカード・運転免許証・運転経歴証明書・在留カード・パスポートです。' },
  { q: 'キャンペーンはありますか？', a: '初回の宅配買取で+500円、誕生月は宅配買取が5%増額、年間5枚まで使える買取金額増額チケットが公式に案内されています。2026年10月20日の確認では、「秋の買い替え応援 買取祭！」としてPS5ソフト・Nintendo Switch 2ソフトなどを対象にしたキャンペーンページと、ゲーム機本体・ゲームソフトの高額買取ページも掲載されていました。対象・条件は時期によって変わるため、ご利用前に公式キャンペーンページにて最新情報をご確認ください。' },
  { q: 'ソフマップとじゃんぱらの関係は？', a: '同一グループです。じゃんぱらは2021年12月にソフマップが全株式を取得した完全子会社で、どちらもビックカメラグループに属します。ゲーム機本体の売却先として比較する際は、この資本関係も参考になります。' },
];

export default function SofmapReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ラクウル（ソフマップ宅配買取）の評判・口コミ｜返却送料・振込のタイミング・誕生月キャンペーン", "datePublished": "2026-07-07", "dateModified": "2026-10-20", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ソフマップ（ラクウル）' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>宅配・返送料無料</span>
            <span className="tag-pill text-xs" style={{ background: 'rgba(59,130,246,0.2)', color: '#93C5FD' }}>2026年10月20日 更新</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ラクウル（ソフマップの宅配買取）の評判・口コミ<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>返却送料・振込のタイミング・誕生月キャンペーンを公式規約で確認</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            「ラクウル」は、ビックカメラ傘下のソフマップが運営する宅配買取です。査定額に納得できずに返却する場合の返送料は原則無料で、返却品は取引完了から3〜4日後に発送されます。買取代金は「ウォレット」に入り、銀行振込を選ぶと金融機関の営業時間帯に振り込まれます（手数料250円/回）。誕生月は宅配買取が5%増額されます。当サイトでは、ラクウル公式の利用規約・FAQ（2026年10月20日確認）と、口コミ192件の評点の集計をもとに整理しています。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://raku-uru.sofmap.com/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
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
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>比較しながら売却先を決めたい方に適した仕組み（受取方法には注意が必要）</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              ラクウルは<strong>キャンセル時の返送料が原則無料</strong>なので、査定額を見てから売却を決めたい方に適した宅配買取です。買取の参考価格も事前公開されており、2026年10月20日の確認ではSwitch 2本体（日本語・国内専用）が36,000円でした。注意点は受取方法で、<strong>銀行振込は手数料250円/回</strong>がかかり、ウォレットの代金には180日の期限があります。ビック買取マネー・店頭受取であれば手数料は無料です。ソフト中心なら公表価格の高い店と、本体なら同グループの<Link href="/review/janpara/" style={{ color: 'var(--color-electric-green)' }}>じゃんぱら</Link>とも比べて、<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>公式価格を実測した価格インデックス</Link>で相場を確認してから送ることをおすすめします。
            </p>
          </div>
        </section>

        {/* 返却送料・振込・期限（公式規約・FAQで確認） */}
        <section className="mb-12" id="return-payment">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ラクウルの返却送料・振込のタイミング・ウォレットの期限</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            査定額に納得できない場合の返却と、買取代金の受け取りについて、ラクウル公式の利用規約（第17条ほか）・よくあるご質問・引き出しの操作手順で確認した内容です。返送料は原則無料ですが、例外の条件が規約に定められています。また、買取代金は自動では振り込まれず、ウォレットから引き出しの操作が必要です。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>公式の記載</th>
                  <th>補足・条件</th>
                </tr>
              </thead>
              <tbody>
                {rakuuruFacts.map((row) => (
                  <tr key={row.item}>
                    <td className="font-bold text-sm">{row.item}</td>
                    <td className="text-sm">{row.fact}</td>
                    <td className="text-sm">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ラクウル公式 <a href="https://raku-uru.sofmap.com/contents/?cid=W_TERMS" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>利用規約</a>（第17条 買取りのキャンセル・返送等、ウォレットの規定）、<a href="https://raku-uru.sofmap.com/contents/?cid=W_GUIDE_FAQ" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>よくあるご質問</a>、<a href="https://raku-uru.sofmap.com/contents/?cid=W_GUIDE_HIKIDASHI" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>買取代金引き出しの操作手順</a>。2026年10月20日確認。</p>
          <div className="glass-card p-5 mt-4">
            <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>「通常約2日程度」は口座確認手続きの目安です</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              公式の引き出し手順ページにある「通常で約2日程度、休日を挟む場合は4〜5日程度」という記載は、旧方式（自撮りを行わない本人確認）で登録した方が、ビック買取マネー入金や店頭での現金受取を使えるようにするための「銀行口座確認手続き（1円振込）」にかかる日数です。買取代金の銀行振込にかかる日数ではありません。当ページでも以前はこの日数を振込の目安として記載していたため、2026年10月20日に訂正しました。
            </p>
          </div>
        </section>

        {/* キャンペーン */}
        <section className="mb-12" id="campaign">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ラクウルの誕生月キャンペーン・初回特典・増額チケット</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            ラクウル公式のキャンペーン情報ページに掲載されている、ゲームの宅配買取にも使える常設の特典です。いずれも宅配買取（アプリ・ブラウザからの申込）が中心で、出張買取は対象外です。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>キャンペーン</th>
                  <th>内容</th>
                  <th>主な条件</th>
                </tr>
              </thead>
              <tbody>
                {rakuuruCampaigns.map((c) => (
                  <tr key={c.name}>
                    <td className="font-bold text-sm">{c.name}</td>
                    <td className="text-sm">{c.detail}</td>
                    <td className="text-sm">{c.cond}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
            誕生月5%増額は他のキャンペーンと併用できませんが、初回+500円のページには「お誕生月お祝い！買取5%増額キャンペーン」を除くと記載されており、初回利用が誕生月に重なる場合は両方の対象となります。このほか2026年10月20日の確認では、「秋の買い替え応援 買取祭！」としてPS5ソフト・Nintendo Switch 2ソフトなどを対象にしたキャンペーンページが掲載されていました。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ラクウル公式 <a href="https://raku-uru.sofmap.com/campaign.aspx" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>キャンペーン情報</a>（お誕生月お祝い！買取5%増額キャンペーン、初回ご利用キャンペーン、買取金額増額チケット ご利用案内）。2026年10月20日確認。キャンペーンは予告なく変更・終了する場合があります。</p>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ラクウルの4つの特徴</h2>
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
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>運営会社</th><td className="py-2">株式会社ソフマップ（ビックカメラ完全子会社・資本金1億円）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>本社</th><td className="py-2">東京都千代田区外神田1-16-9</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>店舗数</th><td className="py-2">22店舗（店頭買取対応）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>買取方式</th><td className="py-2">宅配（ラクウル）／店頭／出張（家電・家具、エリア限定）</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>費用</th><td className="py-2">集荷送料・査定料 無料／キャンセル返送料 原則無料／銀行振込手数料250円/回（ビック買取マネー・店頭受取は無料）</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ソフマップ公式サイト（会社概要・沿革）、ラクウル公式（ご利用ガイド・FAQ・利用規約）。資本金・本社所在地・販売店舗数（関東13・東北1・関西4・東海1・中国四国九州3の計22店舗）・費用は2026年10月20日に再確認</p>
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
          <h2 className="section-heading mb-6" id="reviews"><span className="section-heading-bar" />ラクウルの評判・口コミ（3つの評価源と192件の集計）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            ラクウルの評判は、評価する場所によって大きく異なります。アプリストアの評価はアプリの使いやすさを含めた評価で高めである一方、口コミサイト「みん評」では査定額への不満が中心です。当サイトでは、みん評に掲載されている口コミ192件をすべて確認し、評点と話題を数えました。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>評価源</th>
                  <th>評点</th>
                  <th>件数</th>
                  <th>評価の対象</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-bold text-sm">App Store（ラクウル アプリ）</td><td className="text-sm">4.3 / 5</td><td className="text-sm">2,383件の評価</td><td className="text-sm">アプリ（申込・本人確認・ウォレット操作など）</td></tr>
                <tr><td className="font-bold text-sm">Google Play（ラクウル アプリ）</td><td className="text-sm">4.0 / 5</td><td className="text-sm">480件のレビュー</td><td className="text-sm">アプリ</td></tr>
                <tr><td className="font-bold text-sm">みん評（ラクウルの口コミ・評判）</td><td className="text-sm">2.72 / 5（同サイト表示値）</td><td className="text-sm">192件</td><td className="text-sm">買取サービス全体（宅配・店頭を含む）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：<a href="https://apps.apple.com/jp/app/id1410308806" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>App Store</a>、<a href="https://play.google.com/store/apps/details?id=com.sofmap.rakuuru" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>Google Play</a>、<a href="https://minhyo.jp/raku-uru" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>みん評</a>。いずれも2026年10月20日確認。みん評は「サイトの性質上、厳しい声は多くなります」と自ら注記しています。</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>みん評192件の評点分布（当サイト集計）</h3>
              <ul className="space-y-1 text-sm" style={{ color: 'var(--color-text-light)' }}>
                {reviewScoreDist.map((d) => (
                  <li key={d.label}>{d.label}：{d.count}件</li>
                ))}
              </ul>
              <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>評点のある182件を単純平均すると1.76です。同サイトの表示値（2.72）とは算出方法が異なると考えられます。2024年以降の投稿は74件で、評点のある70件のうち57件が★1でした。</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>口コミに多い話題（当サイト集計）</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                {reviewThemes.map((t) => (
                  <li key={t.theme}>・{t.theme}：{t.total}件（★2以下 {t.low}件／★4以上 {t.high}件）</li>
                ))}
              </ul>
              <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>本文に各語（例：{reviewThemes[0].words}）を含む口コミを数えたもので、1件が複数の話題に重複して数えられています。</p>
            </div>
          </div>
          <div className="glass-card p-5 mt-6">
            <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>集計から読み取れること</h3>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・192件の半数以上（105件）が査定額や減額に触れており、公開されている参考価格から状態・付属品を理由に減額されたという内容が中心です。参考価格は上限の目安として見ることをおすすめします。</li>
              <li>・返却に触れた25件は、返却品の傷や返却までの日数への不満が中心で、返送料を請求されたという投稿は1件でした。規約上も返送料は原則無料で、例外（買取対象外品の送付など）に当たる場合に費用が発生します。</li>
              <li>・振込・手数料・入金に触れた11件は★4以上が6件で、受け取りの段階では大きな不満は少ない傾向です。</li>
            </ul>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※口コミは投稿者個人の体験で、宅配買取と店頭買取の両方を含みます。当サイトは集計のみを行い、個別の内容の真偽は確認していません。</p>
          </div>
        </section>

        {/* Recommended */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />こんな方におすすめ</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・査定額を見てから売るか決めたい方（キャンセル返送無料）</li>
              <li>・大手グループの宅配買取に安心して送りたい方</li>
              <li>・ビックカメラ/ソフマップで買い物する方（買取マネー受取なら手数料無料＋初回+500円）</li>
              <li>・誕生月が近い方（宅配5%増額を月内に何度でも利用可）</li>
            </ul>
            <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
              人気ソフトを1本ずつ高く売りたい方は、<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>買取価格インデックス</Link>で公表価格を比較してから売却先を選ぶことをおすすめします。
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
            返送料まで<span style={{ color: 'var(--color-electric-green)' }}>無料</span>のため、査定のみの利用も可能です
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            ゲーム約2.9万件の買取参考価格を事前に公開しています。初回の宅配買取は+500円、誕生月は5%増額です。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://raku-uru.sofmap.com/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
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
            <li style={{ marginBottom: '0.5rem' }}><Link href="/review/janpara/" style={{ color: 'var(--color-electric-green)' }}>じゃんぱらの評判・口コミ（同グループ・本体特化）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取価格インデックス（現在最も高い業者の確認）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/switch2/" style={{ color: 'var(--color-electric-green)' }}>Switch 2を売るならいつ・どこ？</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/which-is-best/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取はどこがいい？用途別おすすめ比較</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/review/geo/" style={{ color: 'var(--color-electric-green)' }}>ゲオのゲーム買取の評判を検証</Link></li>
          </ul>
        </section>

        <AuthorBox />
      </div>
    </>
  );
}
