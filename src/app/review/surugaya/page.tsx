import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: '駿河屋のゲーム買取の評判・口コミ｜レトロゲームの買取価格と手数料・送料を公式で検証【2026年11月】',
  description:
    '駿河屋のゲーム買取を、公式の買取Q&A・減額基準・買取検索（2026年11月15日確認）とヒカカク493件の星分布で検証しています。送料無料の条件、通信買取手数料660〜990円、査定4〜14日、レトロゲームの買取価格と箱・説明書の扱いをまとめています。',
  keywords: ['駿河屋 ゲーム 買取', '駿河屋 レトロゲーム 買取', '駿河屋 買取 評判', '駿河屋 口コミ', '駿河屋 査定'],
  openGraph: {
    images: ['/og.png'],
    title: '駿河屋のゲーム買取の評判・口コミ｜レトロゲームの買取価格と手数料・送料を公式で検証【2026年11月】',
    description: '駿河屋のゲーム買取を、公式の送料・手数料・減額基準とレトロゲームの買取価格、ヒカカク493件の星分布で検証しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: 'レトロゲームの買取に対応', description: 'ファミコン・スーパーファミコン・セガサターン・PCエンジンなどのレトロゲームを買取対象としています。公式の減額基準リストでは「古い商品の経年劣化は減額対象とはなりません」と明記されています。一方で箱・説明書の欠品は減額対象です。' },
  { title: '箱・説明書は欠品で大幅減額の対象', description: '公式の減額基準リストでは、箱（ケース）・説明書などの必須付属品の欠品は「大幅な減額対象」とされています。買取検索ではソフト本体とは別に「外箱のみ」「説明書のみ」の商品にも価格が表示される場合があります。あんしん買取では、付属品の欠品などのコンディションを任意で入力して事前に見積もりを受けられます（公式「コンディション選択について」）。' },
  { title: '買取価格がサイトで公開', description: '駿河屋の公式サイトでは多くの商品の買取価格が事前に公開されています。送る前におおよその金額が分かるため、他社と比較してから申し込めます。ただし表示価格は完品・良品を前提とした上限価格で、価格が表示されず「メールにてお見積」となる商品もあります。' },
  { title: '全国160店舗と宅配の2系統', description: '駿河屋リアルストア110店舗・フレンドリーショップ50店舗（2026年10月16日時点・公式店舗一覧）があり、宅配の「あんしん買取」「かんたん買取」と店頭買取を選べます。宅配では通信買取手数料（660〜990円）が買取金額から差し引かれます。あんしん買取の見積もりを対象店舗へ持ち込む「あんしん持込」では、通信買取と同じ価格で買い取ると案内されています。' },
];

const steps = [
  { step: 1, title: 'マイページ登録・買取申込み', description: 'マイページに登録し、「あんしん買取」（売りたい商品を検索して売却カートに入れ、事前に見積もりを受ける方式）か「かんたん買取」（申込フォームに入力して商品を詰めて送る方式）で申し込みます。あんしん買取の見積もりは申込の翌々日以降にメールで届き、メール送信から5日以内に商品が到着した場合のみ価格が保証されます。' },
  { step: 2, title: '梱包・発送', description: 'あんしん買取は見積額3,000円以上、かんたん買取は30点以上で着払い（送料無料）、条件に満たない場合は元払いで送ります。1箱あたりの買取金額が1,500円未満の場合は送料を請求される場合があります。申込から20日以内に荷物が届かない場合、申込は無効です。ゲーム機本体などはデータを削除・初期化してから送るよう案内されています。' },
  { step: 3, title: '査定', description: '公式の査定目安は荷物の到着から通常4〜14日程度で、申込点数が多い場合や混雑時はさらにかかることがあります。あんしん買取は1点ずつの査定価格、かんたん買取は合計点数と合計金額のみが通知されます。' },
  { step: 4, title: '承諾・入金', description: '査定結果をマイページの売却履歴から承諾すると、金融機関の3営業日以内に銀行口座へ送金されます（土日祝は送金なし）。初回は住所確認の転送不要の簡易書留ハガキを受け取った後に振込手続きとなります。査定価格の連絡から5日以内に承諾がない場合は、承諾したものとみなされます。' },
];

const faqs = [
  { q: '駿河屋の査定にはどのくらい時間がかかりますか？', a: '公式の査定目安は商品到着後4〜14日程度、査定承諾後の入金は3営業日以内です。土日祝は金融機関が休みのため送金されません。初回は住所確認の簡易書留を受け取った後に振込手続きとなります。' },
  { q: 'レトロゲームの箱なし・説明書なしでも買取できますか？', a: 'ソフト単体でも申し込めますが、公式の減額基準リストでは箱（ケース）・説明書などの必須付属品の欠品は「大幅な減額対象」とされています。一方で、古い商品の経年劣化は減額対象外で、カセットタイプのゲームは、はがき・チラシの有無も原則として減額対象外です（2026年11月15日確認）。あんしん買取では、付属品なしなどのコンディションを任意で入力して事前に見積もりを受けられます。' },
  { q: '買取価格の事前確認はどこでできますか？', a: '駿河屋公式サイトの買取検索で、商品名・型番・JANコードから検索できます。駿河屋アプリにはバーコードで検索する機能もあります。表示価格は完品（付属品あり）かつ状態良好の場合の価格で、実際の査定では状態に応じて変動します。価格が表示されない商品は「メールにてお見積」の扱いです。' },
  { q: '同じゲームソフトを複数本まとめて売れますか？', a: '公式の買取Q&Aでは、個人が同一タイトルを複数売る場合は入手経路を確認する場合があり、個人の所有の範囲を超えると判断された場合は業者扱いになると案内されています。事前の連絡なく同一タイトルが多数含まれていた場合は、取引が無効となり着払いで返送される場合があります。あんしん買取では、商品備考欄に複数になった理由・購入店舗・購入時期を記載するよう求められています。' },
  { q: '送料や手数料はかかりますか？', a: '送料は「あんしん買取」が見積金額3,000円以上、「かんたん買取」が30点以上で着払いにでき、条件に満たない場合は元払いで送ります。1箱あたり1,500円未満の場合は送料を請求される場合があります。別途、通信買取手数料として「かんたん買取」は銀行振込660円・現金書留880円、「あんしん買取」は銀行振込880円・現金書留990円が買取合計額から差し引かれます。買取金額が5万円を超える場合は現金書留を利用できません（公式 買取Q&A、2026年11月15日確認）。' },
  { q: '査定額に納得できない場合はキャンセルできますか？', a: '承諾前であればキャンセルできますが、返送料は利用者負担です。一部の商品だけのキャンセルは、あんしん買取で見積もりを受けた商品を自動承諾なしで申し込んだ場合に限られ、かんたん買取と、あんしん買取に追加で同梱した商品は一部だけのキャンセルを受け付けていません。自動承諾を選んだ場合は、あんしん買取・かんたん買取ともに荷物到着後のキャンセル・返送はできません。また、あんしん買取で状態に不備がない場合や減額が見積もり合計の5％未満の場合は、承諾の手続きが省略されて入金に進みます（公式 買取Q&A・あんしん買取、2026年11月15日確認）。' },
  { q: '駿河屋ではレトロゲームはいくらで売れますか？', a: '2026年11月15日の駿河屋公式の買取検索では、スーパーファミコンのクロノトリガーが2,500円（10月28日は2,200円）、スーパーメトロイドが8,100円、ファミコンのMOTHERが11,000円（美品22,000円）、スーパーファミコンのレンダリング・レンジャーR2が290,400円でした。MOTHERの外箱のみ2,000円・説明書のみ1,500円のように、付属品だけにも買取価格が付くタイトルがあります。価格は日々変わるため、売却前に商品ページでご確認ください。' },
  { q: '店舗での買取はできますか？', a: '公式の店舗一覧では、駿河屋リアルストア110店舗・フレンドリーショップ50店舗の計160店舗（2026年10月16日時点）が全国にあります。秋葉原・池袋・名古屋・大阪日本橋などには買取センターもあります。通常の店頭持込は店舗の在庫状況や商品状態で価格が変わる場合がありますが、あんしん買取の査定結果メールの取引番号を対象店舗に持ち込む「あんしん持込」では、通信買取と同じ価格で買い取ると公式の買取Q&Aで案内されています（ネットの通信買取キャンペーンは店舗では適用外）。対象店舗は公式の「O2O買取サービスあんしん持込」のページに掲載されています。' },
  { q: '現行のSwitchやPS5のソフトも買取対象ですか？', a: '現行タイトルも買取対象で、商品ページで買取価格を事前に確認できます。宅配では通信買取手数料（660〜990円）が差し引かれるため、少数のソフトを売る場合は手数料を引いた手取りで他社と比較することをおすすめします。' },
];

const retroPrices = [
  { title: 'レンダリング・レンジャーR2（SFC）', price: '290,400円', note: '美品 345,600円／外箱のみ 56,000円／説明書のみ 23,800円' },
  { title: 'ポケットモンスター 青（GB・JANコード付き）', price: '14,000円', note: '外箱のみ 1,800円／JANコード無し版は8,000円（10月28日は7,200円）' },
  { title: 'MOTHER（FC）', price: '11,000円', note: '美品 22,000円／外箱のみ 2,000円／説明書のみ 1,500円' },
  { title: 'スーパーメトロイド（SFC）', price: '8,100円', note: '外箱のみ 1,500円' },
  { title: 'ゴールデンアイ007（N64）', price: '6,600円', note: '外箱のみ 1,200円' },
  { title: 'ロックマン7 宿命の対決（SFC）', price: '6,000円', note: '美品 7,200円／外箱のみ 800円／説明書のみ 700円' },
  { title: 'ゼルダの伝説 神々のトライフォース（SFC）', price: '4,000円', note: '—' },
  { title: 'ゼルダの伝説 時のオカリナ（N64）', price: '3,400円', note: '10月28日は3,200円' },
  { title: '星のカービィ スーパーデラックス（SFC）', price: '2,700円', note: '外箱のみ 400円' },
  { title: 'クロノトリガー（SFC）', price: '2,500円', note: '外箱のみ 800円（10月28日は本体2,200円・外箱のみ600円）' },
  { title: 'スーパーマリオブラザーズ3（FC）', price: '2,200円', note: '外箱のみ 700円' },
  { title: 'スーパーマリオカート（SFC）', price: '1,200円', note: '—' },
];

export default function SurugayaReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "駿河屋のゲーム買取の評判・口コミ｜レトロゲームの買取価格と手数料・送料を公式で検証", "datePublished": "2026-03-15", "dateModified": "2026-11-15", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: '駿河屋' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>現行ゲーム・レトロゲーム買取</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            駿河屋のゲーム買取<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>評判・口コミとレトロゲームの買取価格（2026年11月）</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            駿河屋は、商品ごとの買取価格を公式サイトで公開している中古ホビー・ゲームの買取サービスです。ヒカカクの口コミは493件・総合2.57点で、★1が213件、★5が95件と評価が分かれています（2026年11月15日確認）。評価が分かれる主な理由は、宅配の通信買取手数料（660〜990円）、査定期間（到着後4〜14日）、箱・説明書の欠品による減額です。レトロゲームの買取価格は、2026年11月15日の公式買取検索でスーパーファミコンのクロノトリガーが2,500円、ファミコンのMOTHERが11,000円でした（下の表）。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.suruga-ya.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
              公式サイトで買取価格を確認
            </a>
            <Link href="/" className="btn-outline py-2.5 px-6" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}>
              ランキングに戻る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 結論 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />駿河屋でゲームを売る方法の結論（2026年11月15日・公式確認）</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>売り方：</strong>宅配の「あんしん買取」（1点ずつ事前に見積もり）・「かんたん買取」（商品を詰めて送るだけ、通知は合計額のみ）と、店頭買取があります。あんしん買取の見積もりを対象店舗に持ち込む「あんしん持込」では、通信買取と同じ価格で買い取ると案内されています。</li>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>送料：</strong>あんしん買取は見積額3,000円以上、かんたん買取は30点以上で着払い（無料）です。条件に満たない場合は元払いで、1箱あたりの買取金額が1,500円未満の場合は送料を請求される場合があります。</li>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>手数料：</strong>宅配では通信買取手数料が買取合計額から差し引かれます（かんたん買取は銀行振込660円・現金書留880円、あんしん買取は銀行振込880円・現金書留990円）。数本だけ売る場合は、手数料を引いた手取りで他社と比べることをおすすめします。</li>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>価格の調べ方：</strong>公式の買取検索で商品名・型番・JANコードから通常の買取価格を確認できます。表示は完品（付属品あり）かつ状態良好の場合の価格で、価格が出ない商品は「メールにてお見積」です。</li>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>レトロゲーム：</strong>古い商品の経年劣化は減額対象外ですが、箱・説明書などの必須付属品の欠品は大幅な減額対象です。「外箱のみ」「説明書のみ」にも価格が付く商品があります（下の表）。</li>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>入金：</strong>査定は荷物の到着から通常4〜14日で、承諾の確認後、金融機関の3営業日以内に銀行振込されます（土日祝は送金なし）。初回は住所確認の簡易書留ハガキの受け取りが必要です。</li>
            </ul>
            <p className="text-xs mt-4" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋公式の<a href="https://www.suruga-ya.jp/man/kaitori/kaitoritop.html" target="_blank" rel="noopener noreferrer nofollow" className="underline">買取TOP</a>・<a href="https://www.suruga-ya.jp/man/kaitoriqa/kaitoriqa.html" target="_blank" rel="noopener noreferrer nofollow" className="underline">買取Q&A</a>・<a href="https://www.suruga-ya.jp/man/hyou/kaitorihin.html" target="_blank" rel="noopener noreferrer nofollow" className="underline">減額基準リスト</a>・<a href="https://www.suruga-ya.jp/man/kaitori/shop_ansin.html" target="_blank" rel="noopener noreferrer nofollow" className="underline">O2O買取サービスあんしん持込</a>（いずれも2026年11月15日閲覧）。詳しい条件は下の「公式仕様」の表をご覧ください。</p>
          </div>
        </section>

        {/* レトロゲーム買取価格の例 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />駿河屋のレトロゲーム買取価格（2026年11月15日確認）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>駿河屋公式の買取検索で、レトロゲームの定番ソフトの買取価格を確認しました。駿河屋はソフト本体に加えて、外箱のみ・説明書のみの付属品にも買取価格を表示しています。箱・説明書が手元に残っている場合は、本体と別に価格を確認できます。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>タイトル（機種）</th><th>本体の買取価格</th><th>付属品のみ・美品の価格</th></tr></thead>
              <tbody>
                {retroPrices.map((r) => (
                  <tr key={r.title}><td className="font-bold">{r.title}</td><td style={{ color: 'var(--color-electric-green)' }} className="font-bold">{r.price}</td><td className="text-sm">{r.note}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>出典：<a href="https://www.suruga-ya.jp/kaitori/kaitori.html" target="_blank" rel="noopener noreferrer nofollow" className="underline">駿河屋公式の買取検索</a>（2026年11月15日閲覧。10月28日にも同じ12本を確認し、変動があったものは備考に記載）。表示は通常の買取価格で、実際の査定では状態・付属品により減額される場合があります。宅配で売る場合は通信買取手数料（660〜990円）が差し引かれます。ドラゴンクエストV 天空の花嫁（SFC）は10月28日時点で「メールにてお見積」の表示で、価格は出ていませんでした。ほかのタイトルは<Link href="/software/retro-soft/" className="underline">レトロゲームソフト10本の買取価格</Link>、ポケモンのカセットは<Link href="/software/pokemon/" className="underline">ポケモンソフトの買取価格ランキング</Link>をご覧ください。</p>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />駿河屋の4つの特徴</h2>
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
                <li>+ レトロゲームも買取対象で、古い商品の経年劣化は減額対象外</li>
                <li>+ 全国160店舗（2026年10月16日時点）と宅配の両方で売れる</li>
                <li>+ 買取価格がサイトで事前に確認できる</li>
                <li>+ あんしん買取（自動承諾なし）なら見積もり済み商品の一部だけ返却も可能</li>
                <li>+ 商品ごとの査定内訳が確認可能</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- 査定に時間がかかる（公式目安は到着後4〜14日）</li>
                <li>- 宅配は通信買取手数料660〜990円が差し引かれる</li>
                <li>- キャンセル時の返送料は自己負担</li>
                <li>- 少量だと送料がかかる場合あり（1箱1,500円未満など）</li>
                <li>- 査定結果の連絡から5日以内に返答しないと承諾扱いになる</li>
                <li>- かんたん買取は合計額のみの通知で、一部だけのキャンセル不可</li>
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
              <li>・レトロゲーム（ファミコン・スーパーファミコン・セガサターン等）を売りたい方</li>
              <li>・限定版や初回特典付きのゲームを持っている方</li>
              <li>・コレクションを手放すことを検討しているコレクターの方</li>
              <li>・事前に買取価格を確認してから売りたい方</li>
              <li>・査定に2週間程度かかっても問題ない方</li>
            </ul>
          </div>
        </section>

        {/* 公式仕様・会社情報 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />駿河屋の公式仕様・会社情報（2026年11月15日再確認）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <tbody>
                <tr><th>運営会社</th><td className="text-sm">株式会社駿河屋（旧・株式会社エーツー、2025年5月1日社名変更）</td></tr>
                <tr><th>古物商許可</th><td className="text-sm">静岡県公安委員会 第491140002748号</td></tr>
                <tr><th>所在地</th><td className="text-sm">静岡県静岡市葵区伝馬町5-4</td></tr>
                <tr><th>送料無料の条件</th><td className="text-sm">「あんしん買取」＝見積金額3,000円以上で無料（着払い）／「かんたん買取」＝買取点数30点以上で無料（ゆうパック着払い）。1箱あたり買取金額1,500円未満は別途送料の場合あり</td></tr>
                <tr><th>通信買取手数料</th><td className="text-sm">かんたん買取：銀行振込660円・現金書留880円／あんしん買取：銀行振込880円・現金書留990円（買取合計額から差引）</td></tr>
                <tr><th>査定日数</th><td className="text-sm">あんしん買取の見積もり連絡は2〜4日。商品到着後の査定は通常4〜14日程度</td></tr>
                <tr><th>返答期限</th><td className="text-sm">査定結果の連絡から5日以内に返答がない場合は承諾とみなされる</td></tr>
                <tr><th>入金</th><td className="text-sm">承諾の確認後、金融機関の3営業日以内に送金（土日祝は送金なし）。初回は住所確認の簡易書留の受け取りが必要。買取金額が5万円を超える場合は現金書留を利用できない</td></tr>
                <tr><th>キャンセル</th><td className="text-sm">承諾前はキャンセル可（返送料は自己負担）。一部商品のみのキャンセルは、あんしん買取で見積もり済みの商品を自動承諾なしで申し込んだ場合のみ。かんたん買取・追加同梱品は一部キャンセル不可。自動承諾を選ぶと荷物到着後のキャンセル・返送不可。承諾後のキャンセル不可</td></tr>
                <tr><th>見積もりの保証</th><td className="text-sm">あんしん買取の見積価格は、見積メール送信から5日以内に商品が到着した場合のみ保証。状態に不備がない、または減額が見積合計の5％未満の場合は承諾手続きが省略され入金へ</td></tr>
                <tr><th>店舗</th><td className="text-sm">駿河屋リアルストア110店舗・フレンドリーショップ50店舗（2026年10月16日時点）</td></tr>
                <tr><th>本人確認</th><td className="text-sm">本人確認書類の画像アップロード（2025年12月2日以降、健康保険証は不可・資格確認書は可）</td></tr>
                <tr><th>事前価格確認</th><td className="text-sm">「あんしん買取」は事前見積もり可／「かんたん買取」は合計のみで個別価格は不可。商品ページに買取価格表示あり</td></tr>
                <tr><th>同一タイトルの複数売却</th><td className="text-sm">入手経路を確認する場合あり。個人の所有の範囲を超えると判断されると業者扱い</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋公式の<a href="https://www.suruga-ya.jp/man/kaitoriqa/kaitoriqa.html" target="_blank" rel="noopener noreferrer nofollow" className="underline">買取Q&A</a>・<a href="https://www.suruga-ya.jp/man/kaitori/ansin.html" target="_blank" rel="noopener noreferrer nofollow" className="underline">あんしん買取</a>・<a href="https://www.suruga-ya.jp/man/kaitori/kantan.html" target="_blank" rel="noopener noreferrer nofollow" className="underline">かんたん買取</a>・<a href="https://www.suruga-ya.jp/man/hyou/kaitorihin.html" target="_blank" rel="noopener noreferrer nofollow" className="underline">減額基準リスト</a>（2026年11月15日閲覧）、特定商取引法表記・店舗一覧（2026年10月18日閲覧）。運営会社・古物商許可・店舗数は10月18日時点の確認です。11月15日時点で、「かんたん買取の一時停止」「買取処理遅延」の告知は表示されていません。また、公式の買取ページには「平日の店頭持込で買取価格10％アップ」の案内文がHTML上に残っていますが、表示期間が2025年1月22日から2月4日までに設定されたもので、11月15日時点では表示されていません。</p>
        </section>

        {/* 口コミ傾向（出典付き） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />口コミ・評判の傾向</h2>
          <div className="glass-card p-6">
            <p className="text-sm mb-3" style={{ color: 'var(--color-text-light)' }}>
              買取比較サイト「ヒカカク!」での駿河屋の総合評価は<strong>2.57点（5点満点）・口コミ493件</strong>（2026年11月15日再確認。10月18日の確認時から件数・星別件数とも変化はありませんでした）です。星別の件数は次のとおりで、★1が全体の43.2%を占める一方、★4以上も36.3%あり<strong>評価が二極化</strong>しています。ヒカカクのページでは「悪い・ひどい・買取が安いというクチコミの比率は55.4%」と表示されており、★1と★2の合計（273件）の割合と一致します。
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="comparison-table">
                <thead><tr><th>星</th><th>件数</th><th>割合</th></tr></thead>
                <tbody>
                  <tr><td>★5</td><td>95件</td><td>19.3%</td></tr>
                  <tr><td>★4</td><td>84件</td><td>17.0%</td></tr>
                  <tr><td>★3</td><td>41件</td><td>8.3%</td></tr>
                  <tr><td>★2</td><td>60件</td><td>12.2%</td></tr>
                  <tr><td>★1</td><td>213件</td><td>43.2%</td></tr>
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold mb-1" style={{ color: 'var(--color-electric-green)' }}>良い評価の傾向</p>
                <ul className="space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・あんしん買取で事前見積もり通りの金額がついた</li>
                  <li>・レア・限定版で他社より高い査定になった</li>
                  <li>・減額時に理由を説明してくれた</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-1" style={{ color: 'var(--color-accent-orange)' }}>気になる評価の傾向</p>
                <ul className="space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・手数料・送料の実費で手取りが目減りした</li>
                  <li>・事前見積もりと最終査定額に差が出た（完品前提のため）</li>
                  <li>・繁忙期は査定・入金に時間がかかった</li>
                </ul>
              </div>
            </div>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：<a href="https://hikakaku.com/company/47/reviews/" target="_blank" rel="noopener noreferrer nofollow" className="underline">ヒカカク!「駿河屋 買取」のクチコミ一覧</a>（星別件数は2026年11月15日確認、傾向の整理は2026年6月18日閲覧分）。割合は当サイトで算出しています。ヒカカクは店頭買取と宅配買取の口コミを合算しているため、宅配だけの評価とは異なる可能性があります。当サイトでは体験談の創作は行っていません。</p>
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
            駿河屋で<span style={{ color: 'var(--color-electric-green)' }}>レトロゲームの査定</span>を依頼する
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            送る前に公式サイトの商品ページで買取価格を確認できます。手数料（660〜990円）を差し引いた手取り額で比較してから申し込むことをおすすめします。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.suruga-ya.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              買取価格を確認する
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
              <span className="tag-pill tag-pill-orange text-xs mb-2 inline-block">一括査定</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社の一括査定で最高値を比較</p>
            </Link>
            <Link href="/review/game-oukoku/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-blue text-xs mb-2 inline-block">ゲーム専門</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲーム王国</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ゲーム専門スタッフによる査定</p>
            </Link>
          </div>
        </section>
        {/* 関連記事 */}
        <section style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--color-accent-soft-weak)', borderRadius: '12px', borderLeft: '3px solid var(--color-electric-green)' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>関連記事</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/which-is-best/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取はどこがいい？用途別おすすめ比較</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/kaitori-ranking/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取おすすめランキング15選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/retro/" style={{ color: 'var(--color-electric-green)' }}>レトロゲーム機買取ガイド</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/gameboy/" style={{ color: 'var(--color-electric-green)' }}>ゲームボーイ買取ガイド</Link></li>
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
