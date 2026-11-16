import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'Steam Deckの買取相場【2026年11月】ゲオ・駿河屋・ブックオフの価格比較｜Steam Frameの買取価格とモデル別相場',
  description:
    'Steam Deckの買取価格を2026年11月16日に各社公式で確認しました。駿河屋はOLED 512GBが75,000円・1TBが85,000円、LCD 256GBが45,000円です。ゲオ・ブックオフの宅配買取には本体の掲載がありませんでした。新品未開封の価格とSteam Frameの買取価格も掲載しています。',
  keywords: ['Steam Deck 買取 相場', 'Steam Deck 買取 ゲオ', 'Steam Deck 買取 駿河屋', 'Steam Deck 買取 ブックオフ', 'Steam Frame 買取', 'Steam Deck 買取価格'],
  openGraph: {
    images: ['/og.png'],
    title: 'Steam Deckの買取相場【2026年11月】ゲオ・駿河屋・ブックオフの価格比較｜Steam Frameの買取価格とモデル別相場',
    description: 'Steam Deckのモデル別の買取価格を、ゲオ・駿河屋・ブックオフ・買取ルデヤの公式掲載価格で比較しています（2026年11月16日確認）。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

// 2026-11-16 実測。ゲオ=buy.geo-online.co.jp 検索「Steam Deck」該当なし／ブックオフ=sell.bookoff.co.jp 検索「Steam Deck」本体なし（コントローラー2件のみ）・店舗の高価買取リスト(ゲーム/家電, 11/12更新)にも掲載なし
// 駿河屋=suruga-ya.jp/kaitori 検索「steam deck」1〜3ページ／買取ルデヤ=kaitori-rudeya.com/category/detail/55（16時07分現在表記・新品未開封のみ）
const storeTable = [
  { model: 'LCD 64GB', geo: '掲載なし', suruga: '26,000〜28,000円', bookoff: '掲載なし', ludeya: '掲載なし', top: '駿河屋' },
  { model: 'LCD 256GB', geo: '掲載なし', suruga: '45,000円', bookoff: '掲載なし', ludeya: '掲載なし', top: '駿河屋' },
  { model: 'LCD 512GB', geo: '掲載なし', suruga: '48,000円', bookoff: '掲載なし', ludeya: '掲載なし', top: '駿河屋' },
  { model: 'OLED 512GB', geo: '掲載なし', suruga: '75,000円', bookoff: '掲載なし', ludeya: '138,300円', top: '未開封：ルデヤ／開封済み：駿河屋' },
  { model: 'OLED 1TB', geo: '掲載なし', suruga: '85,000円', bookoff: '掲載なし', ludeya: '164,600円', top: '未開封：ルデヤ／開封済み：駿河屋' },
  { model: 'OLED 1TB ホワイト（限定）', geo: '掲載なし', suruga: '85,000円', bookoff: '掲載なし', ludeya: '164,600円', top: '未開封：ルデヤ／開封済み：駿河屋' },
];

// 旧表（10/19・6/12）からの変更点を明示。中古レンジ（家電高く売れるドットコム 6/12）は再確認できなかったため掲載を取り下げ
const priceData = [
  { model: 'Steam Deck LCD 64GB', new: '—', used: '26,000〜28,000円', note: 'eMMC。駿河屋は型番により26,000円（V004281-30/-40）と28,000円（キャリングケース付き V004281-50）' },
  { model: 'Steam Deck LCD 256GB', new: '掲載なし（6/12は50,200円）', used: '45,000円', note: '生産終了。買取ルデヤの一覧からは11月16日時点で外れています' },
  { model: 'Steam Deck LCD 512GB', new: '—', used: '48,000円', note: '駿河屋は型番違い（V004287-30/-40/-50）とも48,000円' },
  { model: 'Steam Deck OLED 512GB', new: '138,300円（10/19は135,300円）', used: '75,000円', note: '定価137,980円（2026年6月1日改定）を0.2%上回る水準です' },
  { model: 'Steam Deck OLED 1TB', new: '164,600円（10/19は163,300円）', used: '85,000円', note: '定価167,980円（同）の98.0%' },
  { model: 'Steam Deck OLED 1TB（白・限定）', new: '164,600円（10/19は162,600円）', used: '85,000円', note: '11月16日時点では通常色の1TBと同額です' },
];

const preparationSteps = [
  { step: '1. Steamアカウントからのログアウト', detail: '設定 → アカウント → ログアウトを実行。Steam Guardの認証も解除しておくと、次の利用者が円滑に利用できます。', importance: '必須' },
  { step: '2. SteamOS初期化（ファクトリーリセット）', detail: '設定 → システム → ファクトリーリセット。全データが消去され、出荷状態に戻ります。個人情報保護のため必ず実行してください。', importance: '必須' },
  { step: '3. microSDカードの取り出し', detail: 'microSDカードに保存したゲームデータは個人のSteamアカウントに紐づくため、必ず取り出してから売却してください。', importance: '必須' },
  { step: '4. 外観のクリーニング', detail: '画面は柔らかい布で拭き、本体の指紋やホコリを除去します。スティック周りとボタンの隙間は綿棒で清掃しておくと、外観の状態を確認してもらいやすくなります。', importance: '推奨' },
  { step: '5. 付属品の確認と梱包', detail: 'キャリングケース、充電器（45W USB-C）、取扱説明書、外箱をそろえることをおすすめします。付属品・外箱の欠品による減額の基準は買取店ごとに異なります（例：駿河屋は公式の「減額基準リスト」を公開しています。買取ルデヤは新品の箱開封のみで3,000円減額と表示しています。2026年11月16日確認）。', importance: '推奨' },
  { step: '6. 動作確認', detail: '電源が入ること、ボタン・スティック・タッチパッド・画面タッチがすべて反応することを確認します。ジョイスティックのドリフトがないかもご確認ください。', importance: '推奨' },
];

const mercariVsBuyback = [
  { item: '売却価格', mercari: '出品者が決める（売れるかどうかは価格次第）', buyback: '各社の掲載買取価格から状態に応じて減額', verdict: '条件により異なる' },
  { item: '手数料', mercari: '販売価格の10%＋送料', buyback: '宅配の送料無料を案内する店が多い（店ごとに要確認）', verdict: '買取店が有利' },
  { item: '手間', mercari: '出品・質問対応・梱包・発送', buyback: '申し込み・梱包・発送のみ', verdict: '買取店が手軽' },
  { item: '売却までの期間', mercari: '購入者が見つかるまで', buyback: '到着・査定後に入金（日数は店ごとに異なる）', verdict: '買取店は見通しが立てやすい' },
  { item: 'トラブルへの対応', mercari: '購入者との取引は当事者間で対応', buyback: '査定額に不満なら返送（送料の負担は店ごとに異なる）', verdict: '買取店は相手が事業者' },
];

const faqs = [
  { q: 'Steam Deckはゲオでいくらで買い取ってもらえますか？', a: '2026年11月16日にゲオ宅配買取の公式買取価格検索（buy.geo-online.co.jp）で「Steam Deck」「Steam Deck OLED」を検索したところ、該当する商品は表示されませんでした。そのため、ゲオ宅配買取での買取価格は現在掲載しておりません。ゲオ店舗での買取可否・価格は、ご利用予定の店舗へ直接お問い合わせください。' },
  { q: 'Steam Deckは駿河屋でいくらで買い取ってもらえますか？', a: '2026年11月16日に駿河屋の公式買取ページで確認した掲載価格は、OLED 512GBが75,000円、OLED 1TB（通常色・ホワイト限定とも）が85,000円、LCD 512GBが48,000円、LCD 256GBが45,000円、LCD 64GBが26,000〜28,000円（型番による）です。掲載価格は状態の指定がない金額で、公式の「減額基準リスト」に該当する場合は減額されます。在庫状況や更新のタイミングでも変動するとの注記があります。' },
  { q: 'Steam Deckはブックオフでいくらで買い取ってもらえますか？', a: '2026年11月16日にブックオフ宅配買取の公式買取価格検索（sell.bookoff.co.jp）で「Steam Deck」を検索したところ、表示されたのは対応コントローラー2件のみで、本体は掲載されていませんでした。ブックオフ公式の店舗向け「高価買取リスト」（ゲーム・家電、2026年11月12日更新）にも掲載はありませんでした。店舗での買取可否・価格は、ご利用予定の店舗へお問い合わせください。' },
  { q: 'Steam Deckの買取相場はいくらですか？', a: '2026年11月16日の確認では、新品・未開封なら買取ルデヤでOLED 512GBが138,300円、OLED 1TBが164,600円です（買取ルデヤは中古品・免税品の買取不可）。開封済み・中古品で価格を確認できたのは駿河屋で、OLED 512GBが75,000円、OLED 1TBが85,000円です。同じOLED 512GBでも、未開封と中古品で6万円以上の差があります。売却前に複数社の最新価格をご確認ください。' },
  { q: 'Steam Frameは買取してもらえますか？いくらですか？', a: 'Steam FrameはValveのVRヘッドセットで、Steam公式ストアでは日本・韓国・台湾・香港ではKOMODO経由で販売すると案内されています（2026年11月16日確認）。国内では2026年9月15日にKOMODO STATIONで発売されました（GameBusiness.jp報道）。2026年11月16日時点で買取価格を確認できたのは買取ルデヤのみで、新品未開封品に限り256GBが190,000円、1TBが238,000円です。駿河屋・ゲオ宅配買取・ブックオフ宅配買取の買取価格検索には、Steam Frame本体の掲載はありませんでした。開封済み・中古品の買取価格は、確認した範囲では公開されていません。' },
  { q: '定価の値上げで買取価格は上がりますか？', a: '新品未開封品の買取価格は上昇しています。国内販売元のKOMODOは2026年6月1日にOLED 512GBの定価を99,800円から137,980円へ、1TBを114,800円から167,980円へ改定しました（3月に続き2回目。ファミ通・GameBusiness.jp報道）。買取ルデヤの新品未開封OLED 512GBの買取価格は、6月12日の118,400円から11月16日には138,300円になっています。中古品の価格は状態により大きく異なるため、査定前に最新の掲載価格をご確認ください。' },
  { q: 'LCDモデルは生産終了しましたが、まだ売れますか？', a: 'はい、売却できます。2026年11月16日時点で、駿河屋はLCD 256GBを45,000円、LCD 512GBを48,000円、LCD 64GBを26,000〜28,000円で掲載しています。一方、新品未開封のLCD 256GBを6月12日時点で50,200円で掲載していた買取ルデヤの一覧からは、11月16日時点でLCDモデルが外れていました。' },
  { q: 'Steam Deckを売る前に行うべきことは何ですか？', a: '必ず行うべきことは3つです。1つ目はSteamアカウントからのログアウト、2つ目はSteamOS初期化（ファクトリーリセット）、3つ目はmicroSDカードの取り出しです。個人情報の保護と円滑な査定のため、これらは必須です。加えて外観クリーニングと付属品の確認もおすすめします。' },
  { q: 'メルカリと買取店では、どちらで売るほうが有利ですか？', a: 'メルカリは販売価格の10%が手数料としてかかり、送料も出品者の負担となる場合があります。買取店は掲載買取価格から状態に応じた減額がありますが、宅配の送料無料を案内する店が多く、購入者とのやり取りが発生しません。手取り額は出品価格・状態・送料で変わるため、買取店の掲載価格と、メルカリで手数料・送料を差し引いた額を比べてからご判断ください。' },
  { q: 'LCDモデルとOLEDモデルで買取価格はどれくらい違いますか？', a: '駿河屋の2026年11月16日時点の掲載価格で比べると、512GBはLCDが48,000円、OLEDが75,000円で、LCDはOLEDの64%です。LCD 256GB（45,000円）はOLED 512GBの60%です。割合は当サイトが掲載価格から算出したもので、状態による減額は含みません。' },
  { q: 'カスタマイズ（SSD換装・Windows導入）したSteam Deckは売れますか？', a: '買取の可否や査定の扱いは買取店ごとに異なります。Windowsを導入した場合は、SteamOSに戻してから売却することをおすすめします。また、買取業者によってはカスタマイズ品の査定を断るケースもあるため、事前に買取店へご確認ください。' },
  { q: 'Steam Deckのジョイスティックにドリフトがあるとどうなりますか？', a: 'ジョイスティックのドリフト（触れていないのに入力が入る症状）は動作不良として減額の対象となり、買取店によっては買取不可となる場合があります。減額の幅は買取店ごとに異なるため、売却前に動作確認を行い、症状がある場合は申込時に申告してください。' },
];

export default function SteamDeckPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Steam Deckの買取相場｜モデル別価格とお得な売り方", "datePublished": "2026-03-15", "dateModified": "2026-11-16", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'Steam Deck' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            Steam Deckの買取相場
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ValveのポータブルPC「Steam Deck」の買取価格を、ゲオ宅配買取・駿河屋・ブックオフ宅配買取・買取ルデヤの公式ページで2026年11月16日に確認し、モデル別に比較しています。売却前の準備（SteamOS初期化・アカウント解除）、メルカリと買取店の比較もご説明します。
          </p>
          <p className="text-xs mb-4" style={{ color: '#94A3B8' }}>更新日：2026年11月16日</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 買取店別 価格表（1画面目） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />Steam Deckの買取価格 買取店別比較（2026年11月16日確認）</h2>
          <div className="glass-card p-5 mb-4" style={{ borderLeft: '4px solid var(--color-electric-green)' }}>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li><strong>ゲオでいくら？</strong>ゲオ宅配買取の公式買取価格検索では、Steam Deck本体は掲載されていませんでした（「Steam Deck」「Steam Deck OLED」とも該当なし）。</li>
              <li><strong>駿河屋でいくら？</strong>OLED 512GBが75,000円、OLED 1TBが85,000円、LCD 256GBが45,000円です。今回確認した買取店のうち、開封済み・中古品の価格を掲載していたのは駿河屋のみです。</li>
              <li><strong>ブックオフでいくら？</strong>ブックオフ宅配買取の買取価格検索、および店舗向けの高価買取リストには、Steam Deck本体の掲載はありませんでした。</li>
              <li><strong>新品未開封の場合</strong>は、買取ルデヤがOLED 512GBで138,300円、1TBで164,600円と最も高い掲載価格でした（中古品・免税品は買取不可）。</li>
            </ul>
          </div>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>モデル</th>
                  <th>ゲオ宅配買取</th>
                  <th>駿河屋</th>
                  <th>ブックオフ宅配買取</th>
                  <th>買取ルデヤ（新品未開封のみ）</th>
                  <th>最高値</th>
                </tr>
              </thead>
              <tbody>
                {storeTable.map((row) => (
                  <tr key={row.model}>
                    <td className="font-bold text-sm">{row.model}</td>
                    <td className="text-sm">{row.geo}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{row.suruga}</td>
                    <td className="text-sm">{row.bookoff}</td>
                    <td className="text-sm">{row.ludeya}</td>
                    <td className="text-xs">{row.top}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>確認日：2026年11月16日。出典：ゲオ宅配買取 買取価格検索（buy.geo-online.co.jp）、駿河屋 買取検索「steam deck」（suruga-ya.jp/kaitori）、ブックオフ宅配買取 買取価格検索（sell.bookoff.co.jp）およびブックオフ公式「高価買取リスト」ゲーム・家電（bookoff.co.jp/selllist、2026年11月12日更新分）、買取ルデヤ「Steamの買取価格一覧」（kaitori-rudeya.com、2026年11月16日16時07分現在の表記）。「掲載なし」は各社の価格検索に表示されなかったことを示し、買取を受け付けていないという意味ではありません。駿河屋の価格は状態の指定がない掲載価格で、公式の減額基準により減額される場合があります。買取ルデヤは箱を開封しただけの完品は3,000円減額です。店舗での買取価格は宅配買取と異なる場合があるため、店舗へ直接お問い合わせください。</p>
        </section>

        {/* モデル別価格表 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />モデル別・容量別 買取価格（前回調査との比較）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>モデル</th>
                  <th>新品未開封（買取ルデヤ）</th>
                  <th>駿河屋の掲載価格</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row) => (
                  <tr key={row.model}>
                    <td className="font-bold text-sm">{row.model}</td>
                    <td className="font-bold" style={{ color: 'var(--color-electric-green)' }}>{row.new}</td>
                    <td className="text-sm">{row.used}</td>
                    <td className="text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>※ 2026年11月16日に確認した各社の掲載価格です。かっこ内は前回調査（OLEDは2026年10月19日、LCDは2026年6月12日）の価格です。前回まで掲載していた家電高く売れるドットコムの状態別レンジ（2026年6月12日閲覧）は、今回再確認できなかったため掲載を取りやめ、駿河屋の掲載価格に置き換えました。定価に対する割合は、KOMODOの2026年6月1日改定後の定価（ファミ通・GameBusiness.jp報道）をもとに当サイトが算出しました。KOMODO STATIONには今回アクセスできなかったため、11月16日時点の定価は再確認できていません。</p>
        </section>

        {/* Steam Frame */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />Steam Frameの買取価格（2026年11月16日確認）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>Valveのワイヤレス型VRヘッドセット「Steam Frame」は、2026年9月15日に日本・台湾・香港のKOMODO STATIONで発売されました。Steam公式ストアでも、日本・韓国・台湾・香港ではKOMODO経由で販売すると案内されています（2026年11月16日確認）。国内で買取価格を公開している買取店は、当サイトが2026年11月16日に確認した範囲では買取ルデヤのみで、対象は新品未開封品に限られます。駿河屋・ゲオ宅配買取・ブックオフ宅配買取の買取価格検索には、Steam Frame本体は掲載されていませんでした。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>モデル</th>
                  <th>国内定価（税込）</th>
                  <th>新品未開封の買取価格</th>
                  <th>定価に対する割合</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold text-sm">Steam Frame 256GB</td>
                  <td className="text-sm">199,980円</td>
                  <td className="font-bold" style={{ color: 'var(--color-electric-green)' }}>190,000円（10/19は185,000円）</td>
                  <td className="text-sm">95.0%</td>
                </tr>
                <tr>
                  <td className="font-bold text-sm">Steam Frame 1TB</td>
                  <td className="text-sm">244,980円</td>
                  <td className="font-bold" style={{ color: 'var(--color-electric-green)' }}>238,000円（10/19は235,000円）</td>
                  <td className="text-sm">97.2%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>出典：定価はGameBusiness.jp（2026年9月15日の発売報道）、買取価格は買取ルデヤ公式（2026年11月16日16時07分現在の掲載価格）、販売地域はSteam公式ストアのSteam Frameページ（2026年11月16日確認）。定価に対する割合は当サイトが算出しました。開封済み・中古品の買取価格は、上記の確認時点では公開されている例が見つかっていません。買取価格は日々変動するため、売却前に最新の掲載価格をご確認ください。</p>
        </section>

        {/* 売却前の準備 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />売却前の準備チェックリスト</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>手順</th>
                  <th>詳細</th>
                  <th>重要度</th>
                </tr>
              </thead>
              <tbody>
                {preparationSteps.map((row) => (
                  <tr key={row.step}>
                    <td className="font-bold text-sm">{row.step}</td>
                    <td className="text-sm">{row.detail}</td>
                    <td className="font-bold text-sm" style={{ color: row.importance === '必須' ? '#EF4444' : 'var(--color-electric-green)' }}>{row.importance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：付属品・外箱の減額基準は駿河屋公式「減額基準リスト」、買取ルデヤ公式の商品表示（いずれも2026年11月16日確認）。基準は買取店ごとに異なり、変更される場合があります。</p>

          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>買取価格に影響している3つの要因</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>① 6月1日に定価が大幅値上げ：</span>国内販売元KOMODOが2026年6月1日に価格改定し、OLED 512GBは137,980円（旧99,800円）、1TBは167,980円（旧114,800円）となりました。2026年3月に続き3か月で2回目の値上げで、理由はメモリ・ストレージのコスト上昇とされています。買取ルデヤの新品未開封OLED 512GBの買取価格は、6月12日の118,400円から11月16日には138,300円になっています。</li>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>② LCDモデルの生産終了：</span>最後まで残っていたLCD 256GBも2026年2月頃に在庫切れ・生産終了が報じられ、現行ラインナップはOLED 512GB/1TBの2モデルのみとなっています。LCDは新品で入手できないため、売却先は中古品を扱う買取店に限られます（11月16日時点で駿河屋はLCD 256GBを45,000円で掲載）。</li>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>③ 国内の品薄：</span>公式ストアでは売り切れと再入荷が繰り返されていると報じられています（2026年6月時点）。なおValveの新型（Steam Machine・Steam Frame）は、Steam公式ストアで日本ではKOMODO経由で購入できると案内されています（2026年11月16日確認）。Steam Deck後継機の公式発表は、2026年6月12日時点ではありませんでした。</li>
            </ul>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ファミ通（2026年6月価格改定報道）、TechPowerUp（LCD生産終了）、テクノエッジ（再入荷）、Steam公式ストア（Steam Machine・Steam Frameの販売案内、2026年11月16日確認）、買取ルデヤ・駿河屋公式（2026年11月16日確認）。そのほかは2026年6月12日確認です。</p>
          </div>
        </section>

        {/* メルカリ vs 買取店 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />メルカリ vs 買取店 比較</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>比較項目</th>
                  <th>メルカリ</th>
                  <th>買取店</th>
                  <th>判定</th>
                </tr>
              </thead>
              <tbody>
                {mercariVsBuyback.map((row) => (
                  <tr key={row.item}>
                    <td className="font-bold">{row.item}</td>
                    <td className="text-sm">{row.mercari}</td>
                    <td className="text-sm">{row.buyback}</td>
                    <td className="text-sm font-bold" style={{ color: 'var(--color-electric-green)' }}>{row.verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* LCD vs OLED */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />LCD vs OLED 買取価格の違い</h2>
          <div className="glass-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>LCDモデル</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                  初代モデルです。駿河屋の掲載価格（2026年11月16日）では、LCD 512GBが48,000円、256GBが45,000円、64GBが26,000〜28,000円で、LCD 512GBはOLED 512GB（75,000円）の64%です。64GBと256GB・512GBの差は17,000〜22,000円です。
                </p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>OLEDモデル</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                  2023年11月発売の現行モデルです。駿河屋の掲載価格（2026年11月16日）は512GBが75,000円、1TBが85,000円です。限定のホワイト1TBは、駿河屋・買取ルデヤとも通常色の1TBと同額で、11月16日時点では限定カラーによる上乗せは確認できませんでした。新品未開封なら買取ルデヤで512GBが138,300円、1TBが164,600円です。
                </p>
              </div>
            </div>
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
            Steam Deckの<span style={{ color: 'var(--color-electric-green)' }}>買取価格</span>の確認方法
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            Steam Deckはモデルや状態によって価格が大きく変わります。売却前に複数の買取店の最新の掲載価格をご確認ください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連記事</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/hardware/switch/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switch買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>Nintendo Switch本体の相場</p>
            </Link>
            <Link href="/knowledge/preparation/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>売る前の準備</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>初期化・データ消去の手順</p>
            </Link>
            <Link href="/compare/mercari-vs-kaitori/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>メルカリvs買取店</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>フリマと買取店の比較</p>
            </Link>
          </div>
        </section>

        <p className="text-xs mt-8 text-center" style={{ color: 'var(--color-text-light)' }}>最終更新: 2026年11月16日</p>
        <AuthorBox />
      </div>
    </>
  );
}
