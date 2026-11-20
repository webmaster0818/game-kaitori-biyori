import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

const PAGE_TITLE = 'トレーダー買取の買取価格検索の使い方・受付時間と評判｜秋葉原本店B1F・2号店3F、必要な身分証、通信買取の手数料・送料【2026年11月】';
const PAGE_DESCRIPTION =
  'トレーダー（秋葉原）の買取価格は公式e-trader.jpの「買取検索 TVゲーム」で調べられ、最新の金額は店舗へ電話で確認できます。店頭買取は本店B1F・2号店3F（11〜20時・身分証が必要）、通信買取は対象5本以上で送料無料・手数料500〜800円です（11月20日公式確認）。';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: ['トレーダー 買取', 'トレーダー買取', 'トレーダー 買取価格', 'トレーダー 買取検索', 'トレーダー 買取 評判', 'トレーダー 秋葉原 買取', 'e-trader 買取', 'トレーダー 通信買取'],
  openGraph: {
    images: ['/og.png'],
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: '1999年設立・秋葉原の老舗ゲームショップ', description: '株式会社トレーダー（東京都千代田区外神田・古物商許可301039903890）が運営しています。公式の店舗案内に掲載されている店舗は、本店（外神田4-2-1）と2号店（外神田1-4-9）の2店舗で、いずれも11時〜20時・年中無休です（2026年11月20日公式確認）。比較サイトの一部には3号店・新宿店の記載がありますが、公式の店舗案内には掲載されていません。買取サイトはe-trader.jpで、新品通販のtrader.co.jpとは別サイトです。' },
  { title: 'レトロ・海外ゲームの売場を持つ店舗', description: '本店2Fにレトロゲーム、本店1F・2Fに海外ゲームの売場があると公式のフロア案内に記載されています（2026年11月20日確認）。公式の「買取できるアイテム」には「TVゲーム」が挙げられています。ただし、通信買取の送料無料の対象機種一覧にファミコン・スーパーファミコン・NINTENDO64・初代PlayStation等は含まれていないため、レトロゲームを宅配で売る場合は送料の負担をご確認ください。' },
  { title: '参考買取価格をWEBで公開', description: '公式の「買取検索 TVゲーム」で、付属品がすべてそろった状態の買取上限価格を調べられます。公式のよくある質問では、WEBの価格は店頭の価格と随時連動しておらず「数日前の参考価格」と案内されています。最新の金額は各店舗が電話で回答しています（グッズ類を除く。2026年11月20日確認）。' },
  { title: '査定3日以内・承諾後2営業日で振込', description: '通信買取は、商品到着日を含め3日以内に査定し、結果をメールで案内すると公式に明記されています。承諾の連絡から振込までは銀行営業日で2日後で、午前11時までの連絡が当日分の承諾として扱われます（初回で身分証のコピーを使う場合は、簡易書留による住所確認の後の振込。2026年11月20日確認）。' },
];

const dislikeReasons = [
  { reason: 'キャンセル時の返送は着払い（利用者負担）', fact: '査定額に納得できず返送してもらう場合、返送は当店指定の配送会社による着払い（送料は利用者負担）と公式に記載されています。キャンセル品や買取不可品を店頭で受け取ることもできません（2026年11月20日確認）。返送無料のソフマップ（ラクウル）等と異なり、送ってから売却を検討する使い方には適していません。送る前に参考価格をご確認ください。' },
  { reason: '宅配は振込時に通信買取手数料が差し引かれる', fact: '通信買取では、振込時にお申込み1件につき通信買取手数料（佐川急便飛脚宅配便160サイズまでは500円、その他の運送サービスは800円）が買取代金から差し引かれると公式に記載されています（2026年3月15日に改定のお知らせあり。2026年11月20日確認）。少額の売却では手数料の比重が大きくなるため、1点から手数料無料で売れる店頭買取と比べてご検討ください。' },
  { reason: '送料無料には対象機種・5本以上などの条件がある', fact: '宅配の送料無料は、対象商品が5本以上含まれ、佐川飛脚宅配便（通常サイズ）・ヤマト宅急便・ゆうパックの着払いで送ることが条件です。TVゲームで対象となるのは、PS5・PS4・PS3・PS2・PSP・PS Vita、Nintendo Switch 2・Switch・3DS・DS・Wii U・Wii・ゲームキューブ・ゲームボーイアドバンス、Xbox Series・Xbox One・Xbox 360のソフト・本体・周辺機器です。箱や説明書が欠品している商品は数に含まれず、種類の異なる商品の合算（例：ゲーム3点と成年コミック5点）も対象外です。元払いで送った場合の送料は返金されません（2026年11月20日公式確認）。' },
  { reason: '出張買取なし・本人確認は書類同梱式', fact: '買取方法は店頭と通信（宅配）の2種で、出張買取の公式記載はありません。また通信買取の本人確認はeKYCではなく、本人確認書類のコピーを荷物に同梱する方式です。住民票の写しの原本以外を使う場合は、身分証の住所宛てに転送不可の簡易書留が届くまで振込されません（2026年11月20日公式確認）。' },
];

const faqs = [
  { q: 'トレーダーの買取価格はどこで調べられますか？', a: '公式サイト e-trader.jp のメニュー「買取」→「買取検索 TVゲーム」で、機種・タイトルから調べられます。表示されるのは付属品がすべてそろった状態の買取上限価格で、WEBの価格は「数日前の参考価格」と公式に案内されています。最新の金額は各店舗に電話で問い合わせると回答してもらえます（本店 03-3255-3493／2号店 03-3255-0777。グッズ類は現品での査定）。いずれの金額も買取を保証するものではありません（2026年11月20日公式確認）。' },
  { q: '買取価格検索で売りたいゲームが見つからない場合は売れませんか？', a: '売れる場合があります。通信買取のよくある質問に「検索に表示されない商品の買取も行っております」と記載されています。事前に金額を知りたい場合は店舗へ電話で問い合わせるか、店頭で査定を受けてください。オンライン専用・オンライン認証が必要なゲーム（一部の未開封品を除く）、改造ハード、正常に動作しないもの、ひどく破損しているものは買取対象外です（2026年11月20日公式確認）。' },
  { q: '店頭買取はどこで、何時まで受け付けていますか？', a: '本店（千代田区外神田4-2-1）はB1F、2号店（千代田区外神田1-4-9）は3Fが買取フロアです。買取営業時間は全店舗11:00〜20:00・年中無休で、閉店時刻まで受け付けています。混雑状況や点数によって当日中に査定が終わらない場合は、預かりのうえ翌日以降の支払いとなります。営業時間は変更される場合があるため、来店前に公式サイトのトップページをご確認ください（2026年11月20日公式確認）。' },
  { q: '店頭買取に必要なものは何ですか？', a: '毎回、申込者本人の身分証が必要です。公式に挙げられているのは、マイナンバーカード・運転免許証・運転経歴証明書・在留カード・特別永住者証明書・パスポート（2020年2月3日以前発行のもの）・障がい者手帳・学生証・住民票の写し（マイナンバーの記載がないもの・発行3か月以内）・健康保険資格確認書です。健康保険証は2025年12月2日以降は使えません。18歳未満の方は保護者直筆の承諾書も必要で、買取時に保護者へ電話確認があります（2026年11月20日公式確認）。' },
  { q: '店頭での待ち時間はどのくらいですか？', a: '公式に待ち時間の目安は示されていません。受付時に点数などを確認したうえで、おおよその査定完了時刻が案内されます。受付番号札のQRコードを読み取ると、店外でも査定が終わったかを確認でき、公式サイトの「査定終了番号」ページ（本店・2号店）にも終了した番号が表示されます（2026年11月20日公式確認）。' },
  { q: 'トレーダーのゲーム買取の送料は無料ですか？', a: '対象商品が5本以上含まれ、指定の宅配便（佐川飛脚宅配便の通常サイズ・ヤマト宅急便・ゆうパック）の着払いで送る場合に無料です。TVゲームはPS5〜PS2・PSP・PS Vita、Switch 2・Switch・3DS・DS・Wii U・Wii・ゲームキューブ・ゲームボーイアドバンス、Xbox Series・Xbox One・Xbox 360が対象で、それ以外の機種は対象外です。成年コミックは20冊以上、グッズ類は30点以上が条件です。条件を満たさない場合は元払い＝利用者負担になります（2026年11月20日公式確認）。' },
  { q: '宅配買取に手数料はかかりますか？', a: 'かかります。振込時に通信買取手数料として、お申込み1件につき佐川急便飛脚宅配便160サイズまでは500円、その他の運送サービスは800円が差し引かれると公式に記載されています。店頭買取は1点から手数料無料です（2026年11月20日公式確認）。' },
  { q: '通信買取の申込手順を教えてください。', a: '通信買取利用規約に同意のうえ、申込用紙・商品・本人確認書類（初回）をダンボール箱に詰め、「〒101-0021 東京都千代田区外神田4-2-1 トレーダー本店ビル 通信買取部」宛てに送ります。申込用紙を印刷できない場合は、氏名・住所・電話番号・職業・生年月日・年齢・メールアドレス・振込先・品物の数などを記入した紙で代用できます。事前の連絡は不要ですが、300本以上またはダンボール10箱以上の場合は送付前の相談が案内されています。通信買取の問い合わせ先は03-3255-3464（11:00〜18:00）です（2026年11月20日公式確認）。' },
  { q: '本人確認はどのように行いますか？', a: '通信買取の初回は、本人確認書類（運転免許証・マイナンバーカード表面・健康保険資格確認書・日本国発行のパスポート等）のコピー、または住民票の写しの原本を、申込用紙・商品と一緒に箱に同梱します。住民票原本以外の場合は、書類記載の住所宛てに転送不可の簡易書留が送られて本人確認が行われます（再送が必要になった場合は実費460円を差し引き）。2回目以降は、初回に発行された通信買取IDとパスワードを申込用紙に記入すれば書類の同封は不要です。振込先は本人名義の口座に限られます（2026年11月20日公式確認）。' },
  { q: 'キャンペーンはありますか？', a: '常設のキャンペーンはなく、期間限定で開催されています。2026年11月20日の公式確認では、店頭買取限定の「買取アップキャンペーン」（11月11日〜11月29日・本店B1F/2号店3Fの買取フロア。対象はPCゲームソフト・同人ソフト・ガンプラ〔未作成品〕・一般向けBlu-ray/DVDで、CD・アニメ書籍・アダルト作品と通信買取は対象外）が開催中です。通信買取限定の「買取UPキャンペーン」は11月4日〜11月20日到着分で終了し、11月20日時点で次回の告知はありません。いずれも他の買取アップとの重複はなく、予告なく変更・終了する場合があると公式に記載されています。ご利用前に公式サイトにて最新情報をご確認ください。' },
  { q: '同じソフトを複数本売れますか？', a: '本数の上限はありませんが、在庫状況により減額の対象となる場合や、購入を証明するレシート等の提示が必要になる場合があると公式に記載されています。オンライン専用・オンライン認証必須のソフトは原則買取対象外です（一部の未開封品を除く。2026年11月20日公式確認）。' },
];

export default function TraderReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": PAGE_TITLE, "description": PAGE_DESCRIPTION, "datePublished": "2026-07-07", "dateModified": "2026-11-20", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'トレーダー' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>秋葉原・レトロ対応</span>
            <span className="tag-pill text-xs" style={{ background: 'rgba(59,130,246,0.2)', color: '#93C5FD' }}>2026年11月20日 更新</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            トレーダー買取の買取価格検索の使い方・受付時間と評判<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>秋葉原の店頭買取と通信買取の条件を検証</span>
          </h1>
          <div className="rounded-lg p-4 mb-4 text-sm leading-relaxed" style={{ background: 'rgba(255,255,255,0.08)', color: '#E2E8F0' }}>
            <p className="font-bold mb-2" style={{ color: '#FFFFFF' }}>トレーダー買取で売るまでの3ステップ（2026年11月20日 公式確認）</p>
            <ol className="space-y-1.5">
              <li><strong>1. いくらになるか調べる</strong>：e-trader.jp のメニュー「買取」→「<a href="https://www.e-trader.jp/kensaku_tvgame/" target="_blank" rel="noopener noreferrer nofollow" className="underline">買取検索 TVゲーム</a>」で機種・タイトルを検索します。表示は付属品完備の上限価格で、WEBの価格は「数日前の参考価格」です。最新の金額は店舗へ電話で確認できます（本店 03-3255-3493／2号店 03-3255-0777）。検索に出ない商品も買取対象になる場合があります。</li>
              <li><strong>2. 店頭に持ち込む</strong>：本店（外神田4-2-1）B1F・2号店（外神田1-4-9）3Fの買取フロアへ、本人の身分証を持参します。11:00〜20:00・年中無休、1点から手数料無料で、承諾後その場で支払い。受付番号札のQRコードで、査定の終了を店外から確認できます。</li>
              <li><strong>3. 来店できない場合は通信買取</strong>：申込用紙・商品・身分証（初回）を箱に詰めて送ります。対象5本以上かつ指定宅配便の着払いで送料無料、振込時に手数料500円（佐川160サイズまで）・800円（その他）を差し引き、キャンセル時の返送は着払いです。</li>
            </ol>
            <p className="mt-2"><strong>キャンペーン</strong>：店頭限定の買取アップ（11/11〜11/29。対象はPCゲームソフト・同人ソフト・ガンプラ・一般向けBlu-ray/DVD）は開催中です。通信買取限定の買取UP（11/4〜11/20到着分）は11月20日で終了し、同日時点で次回の告知はありません。</p>
          </div>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            トレーダーは、1999年に設立され、秋葉原に本店・2号店の2店舗を構える老舗です。レトロゲーム・海外ゲームの売場を持ち、買取の参考価格をWEBで公開していますが、宅配買取には「対象機種5本以上で送料無料」「振込時に通信買取手数料500円〜800円」「キャンセル返送は着払い」という他社と異なる条件があります。当サイトでは、公式情報（2026年11月20日確認）をもとに適した利用場面を整理しています。
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
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>秋葉原の店舗を利用できる方、対象機種を5点以上まとめて送る方に適した買取店</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              トレーダーは、秋葉原の店頭に持ち込める場合、1点から手数料無料でその場で現金化できる買取店です。宅配は<strong>対象機種5本以上で送料無料・査定3日以内・承諾後2営業日で振込</strong>と日数が明確な一方、<strong>振込時に通信買取手数料（500円〜800円）が差し引かれ、キャンセル時の返送は着払い（利用者負担）</strong>のため、送る前に公式の参考価格や店舗への電話で金額の目安をご確認ください。少量のみの売却や、査定額を見てから決めたい場合は返送無料の<Link href="/review/sofmap/" style={{ color: 'var(--color-electric-green)' }}>ソフマップ（ラクウル）</Link>、人気作の相場比較は<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>公式価格を実測した価格インデックス</Link>をご利用ください。
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
            <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>買取価格を調べる：公式の買取検索（e-trader.jp）</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              トレーダーの買取価格は、買取サイト<strong>e-trader.jp</strong>の買取検索で公開されています。検索ページへは e-trader.jp のメニュー「買取」→「買取検索 TVゲーム」の順に進みます（フィギュア・ブルーレイ/DVDにも別の検索ページがあります）。同サイトには、表示価格は付属品がすべてそろった状態での上限価格であること、最新の価格ではないこと、ネット認証のあるゲームは未開封品のみ買取ること、本体は査定時に初期化することが記載されています。公式のよくある質問によると、店頭の買取金額は1日に複数回変わる場合がある一方、WEBの価格は随時更新されておらず「数日前の参考価格」とのことです（2026年11月20日確認）。当サイト実測（2026年7月7日）ではマリオカート8 デラックス3,800円・Switch有機EL 26,000円等が掲載されていました（7月7日時点の記録です。公式は情報の収集・抽出を禁止しているため、当サイトでは価格表の取得を行っていません）。他社と比べたい場合は、当サイトの<a href="/price-index/" className="underline font-bold" style={{ color: 'var(--color-deep-blue)' }}>最新の実測価格比較</a>とあわせてご確認ください。
            </p>
          </div>
          <div className="glass-card p-6 mb-4">
            <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>買取検索で見つからない・金額が違うとき</h3>
            <ul className="text-sm leading-relaxed space-y-1.5" style={{ color: 'var(--color-text-light)' }}>
              <li>・<strong>検索に出ない商品</strong>：通信買取のよくある質問に「検索に表示されない商品の買取も行っております」と記載されています。</li>
              <li>・<strong>最新の金額を知りたい</strong>：各店舗が電話で回答しています（本店 03-3255-3493／2号店 03-3255-0777）。案内されるのは上限金額のみで、グッズ類は現品を見ての査定です。</li>
              <li>・<strong>査定額が検索結果と違う</strong>：WEBの価格はリアルタイムで連動しておらず、通信買取は「査定時点での買取価格」で査定されます。送付時点・到着時点の価格での買取保証はありません。箱や説明書がない場合は大幅な減額になると案内されています。</li>
            </ul>
            <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>出典：トレーダー公式 <a href="https://www.e-trader.jp/qa/" target="_blank" rel="nofollow noopener" className="underline">よくある質問</a>・<a href="https://www.e-trader.jp/t_kaitori_qa/" target="_blank" rel="nofollow noopener" className="underline">通信買取 よくある質問</a>（2026年11月20日閲覧）</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>店頭買取（本店B1F・2号店3F）</h3>
              <ol className="text-sm leading-relaxed space-y-1.5" style={{ color: 'var(--color-text-light)' }}>
                <li>1. 売りたい商品と本人の身分証（毎回必要）を持参し、本店B1F（外神田4-2-1・JR秋葉原駅電気街口から徒歩3分）または2号店3F（外神田1-4-9・同徒歩2分）の買取フロアへ（11時〜20時・年中無休）</li>
                <li>2. 買取フロアの「買取お申込用紙」に記入してスタッフへ渡すと、おおよその査定完了時刻の案内とQRコード付きの受付番号札を受け取ります</li>
                <li>3. 番号札のQRコードまたは公式の「査定終了番号」ページで終了を確認して買取フロアへ戻り、金額に納得した場合はその場で支払い（1点から・手数料無料）。精算後のキャンセルはできません</li>
              </ol>
              <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>18歳未満の方は保護者直筆の承諾書が必要です。キャラクターグッズ（缶バッジ・ぬいぐるみ・タペストリー等）の店頭買取は本店のみ・火〜金曜の受付で、ゲームソフト等の特典グッズは曜日に関係なく買取対象です。</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>宅配（通信）買取</h3>
              <ol className="text-sm leading-relaxed space-y-1.5" style={{ color: 'var(--color-text-light)' }}>
                <li>1. 申込用紙・商品・本人確認書類（初回）をダンボール箱に詰め、トレーダー本店ビル 通信買取部宛てに発送。<strong>対象機種5本以上かつ指定宅配便の着払いで送料無料</strong>（満たさない場合は元払い）</li>
                <li>2. <strong>到着日を含め3日以内に査定</strong>し、メールで商品ごとの結果を案内（@e-trader.jp からのメールの受信設定を確認）</li>
                <li>3. 査定結果メールへの返信または電話で承諾すると、<strong>銀行営業日で2日後に振込</strong>（<strong>通信買取手数料500円〜800円を差し引き</strong>）。キャンセル時の返送は<strong>着払い（利用者負担）</strong></li>
              </ol>
              <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>到着確認の問い合わせは受け付けておらず、配送伝票の番号で各自確認するよう案内されています。キャンペーン終了前や月末は査定に時間がかかる場合があります。</p>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：トレーダー公式（<a href="https://www.e-trader.jp/kaitori_shop/" target="_blank" rel="nofollow noopener" className="underline">店頭買取</a>・<a href="https://www.e-trader.jp/t_kaitori/" target="_blank" rel="nofollow noopener" className="underline">通信買取</a>・<a href="https://www.e-trader.jp/trader-shop/" target="_blank" rel="nofollow noopener" className="underline">店舗案内</a>・TVゲーム買取・キャラクターグッズ買取受付日のお知らせ・キャンペーン告知）2026年11月20日確認。手順・条件は変更される場合があります。</p>
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
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>店舗</th><td className="py-2">本店（外神田4-2-1・買取フロアB1F・TEL 03-3255-3493）・2号店（外神田1-4-9・買取フロア3F・TEL 03-3255-0777）。11時〜20時・年中無休（出張買取の記載なし）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>通信買取の窓口</th><td className="py-2">TEL 03-3255-3464（受付 11:00〜18:00）</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>宅配条件</th><td className="py-2">対象機種5本以上・指定宅配便の着払いで送料無料／振込時に通信買取手数料500円（佐川160サイズまで）・800円（その他）／キャンセル返送は着払い／査定3日以内・承諾後2営業日で振込</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：トレーダー公式サイト（会社概要・店舗案内・通信買取・通信買取 よくある質問）2026年11月20日確認。上場・親会社の記載はなし（確認不可）</p>
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

        {/* 評判について（出典つき） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />トレーダー買取の評判について：確認できた口コミと公式の案内</h2>
          <div className="glass-card p-6">
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-light)' }}>
              当サイトでは、出典を示せる口コミのみを掲載しています。2026年11月20日に買取比較サイト「ウリドキ」の店舗ページを確認したところ、トレーダー本店の口コミは0件、2号店は1件（評価4.3・2017年10月27日投稿）でした。その1件では「査定が早く正確」「本店は混雑して査定に時間がかかる時が多いが、2号店はあまり混雑しない」と書かれています。投稿から9年以上が経過しており件数も少ないため、当サイトでは評判の傾向を断定していません。
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-light)' }}>
              混雑や査定額について気になる方は、次の公式の案内を参考にしてください。混雑時は受付時に査定完了の目安時刻が案内され、番号札のQRコードで店外から終了を確認できます。査定額は、箱や説明書がない場合に大幅な減額となり、同じ商品を複数売る場合も減額されることがあると公式に記載されています。
            </p>
            <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>出典：<a href="https://uridoki.net/shops/1639" target="_blank" rel="nofollow noopener" className="underline">ウリドキ トレーダー秋葉原2号店</a>・<a href="https://uridoki.net/shops/1638" target="_blank" rel="nofollow noopener" className="underline">トレーダー本店</a>（2026年11月20日閲覧。同ページの営業時間の記載は公式と異なるため、営業時間は公式の店舗案内に従っています）、トレーダー公式 店頭買取・よくある質問（2026年11月20日確認）。</p>
          </div>
        </section>

        {/* Recommended */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />こんな方におすすめ</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・秋葉原の店頭に持ち込める方（1点から手数料無料・その場で支払い）</li>
              <li>・送料無料の対象機種を5本以上まとめて送れる方（通信買取手数料500円〜800円を差し引いても見合う量）</li>
              <li>・査定・振込の日数が明確な業者を選びたい方（3日以内査定・承諾後2営業日で振込）</li>
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
            参考買取価格を公式サイトで公開しています（最新の金額は店舗へ電話で確認できます）。対象機種を5本以上まとめて送ると宅配の送料が無料です（通信買取手数料は別途差し引き）。
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
