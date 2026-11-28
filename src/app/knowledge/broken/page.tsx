import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: '壊れたゲーム機でも売れる？ジャンク品買取ガイド【2026年】',
  description:
    '壊れたゲーム機の買取を、駿河屋・ゲオ・ブックオフ・ハードオフの公式の条件で比べました。駿河屋の故障時の保証額、ゲオのジャンク買取価格、任天堂・ソニーの修理料金も掲載しています（2026年11月確認）。',
  keywords: ['壊れたゲーム機 買取', 'ジャンク 売れる', 'ゲーム機 故障 買取', 'Switch 壊れた 売る'],
  openGraph: {
    images: ['/og.png'],
    title: '壊れたゲーム機でも売れる？ジャンク品買取ガイド【2026年】',
    description: '壊れたゲーム機やジャンク品でも買取できる理由と、対応業者について解説します。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const SURVEY_DATE = '2026年11月28日';
const SRC = {
  surugaJunk: 'https://www.suruga-ya.jp/kaitori/kaitori_tokushu/b_hard_junk.html',
  surugaOk: 'https://www.suruga-ya.jp/kaitori/man/hyou/hukahin.html',
  surugaRules: 'https://www.suruga-ya.jp/kaitori/man/hyou/kaitorihin.html',
  geoJunk: 'https://buy.geo-online.co.jp/buyhard/',
  geoNg: 'https://buy.geo-online.co.jp/help/item/',
  geoStd: 'https://buy.geo-online.co.jp/guide/assessment_standard_hard',
  bookoffFaq: 'https://support-online.bookoff.co.jp/answer/668b481668df3b9a9bdab1af/',
  bookoffStore: 'https://www.bookoff.co.jp/qa/faq/detail/216620.html',
  hardoff: 'https://www.hardoff.co.jp/shop/item/104/',
  nintendo: 'https://support.nintendo.com/jp/repair/price/switch/index.html',
  sony: 'https://www.playstation.com/ja-jp/support/hardware/repairs/',
};

const reasons = [
  { title: '部品取り需要', description: '壊れた本体でも、液晶画面、基板、コントローラー、外装パーツなどは修理用の部品として使われることがあります。' },
  { title: '修理再販', description: '故障箇所を修理して中古品として再販する目的で買い取られることがあります。ハードオフは公式サイトで「壊れていてもジャンク品として店頭にて販売しています」と案内しています。' },
];

const policies = [
  { name: '駿河屋', stance: '動作しない・故障したゲーム機も買取可', detail: '「動作しない、故障したゲーム機につきましては買取が可能です」「リストに無い商品も、まずはお申込み下さい」。一方、壊れたゲーム機本体の特集ページは「下記リストに掲載の機種についてのみ」付属品なし・動作不良でも買い取ると案内しています。「不良品」と書いたメモを貼るなどの申告がないと、掲載価格で買い取らない場合があると記載。', url: SRC.surugaOk, label: 'お売りいただけるもの' },
  { name: 'ゲオ（宅配買取）', stance: '壊れていても・動かなくても買取可', detail: '「壊れていても、動かなくてもゲーム機は買取できます！」。動作確認できない・ディスクを読み込まない・液晶画面のキズ・付属品の欠品などはジャンク品として査定。基板の抜き取りや、水没・火災で原型が残らないものはジャンク品としても引き取り不可。改造品・非ライセンス改造品・自分で修理した跡のあるものは買取不可。', url: SRC.geoStd, label: 'ゲーム機の査定基準' },
  { name: 'ブックオフ（宅配買取）', stance: '動作不良・電源が入らないものは値段がつかない', detail: '「動作不良や電源がはいらないもの」「動作確認に必要な付属品がない」「シリアルナンバーがないもの」「海外版のゲーム機」は値段をつけられないと案内。店頭でも「起動・動作の確認が出来ない場合はお売りいただけません」と記載。', url: SRC.bookoffFaq, label: 'よくある質問' },
  { name: 'ハードオフ', stance: '一部動作不良でも買取可（店頭・宅配）', detail: '「壊れていてもジャンク品として店頭にて販売しています。喜んで買取させていただきます」。箱や付属品が無くても買取可。ゲーム機は店頭・オファー・宅配買取に対応（出張は不可）。損傷や動作異常が著しい場合は値段がつかない場合があるとFAQに記載。', url: SRC.hardoff, label: 'ゲーム機・ソフトの買取' },
];

// 駿河屋「壊れたゲーム機本体買取強化中」の保証額（ページに日付の記載なし・参考価格）
const surugaRows = [
  { model: 'Nintendo Switch 本体', normal: '5,000円', broken: '3,000円（電源落ち、通電不可、液晶難あり）' },
  { model: 'Nintendo Switch Lite 本体', normal: '3,000円', broken: '3,000円（電源落ち、通電不可、液晶難あり）' },
  { model: 'PS4 本体（CUH-1xxx）500GB', normal: '6,000円', broken: '2,500円（破損）' },
  { model: 'New 3DS LL 本体', normal: '3,000円', broken: '1,800円（液晶難あり）／1,000円（電源落ち、通電不可）' },
  { model: '3DS LL 本体', normal: '1,400円', broken: '800円（液晶難あり）／500円（電源落ち、通電不可）' },
];

// ゲオ宅配買取「ジャンクゲーム機本体」の買取価格（公式表記：2026年9月28日時点の価格）
const geoRows = [
  ['Nintendo Switch（有機ELモデル）', '8,000円'], ['Nintendo Switch', '5,000円'], ['Nintendo Switch Lite', '5,000円'],
  ['Newニンテンドー3DS LL・2DS LL', '10,000円'], ['プレイステーション4 500GB', '8,000円'], ['PlayStation Vita', '5,000円'],
  ['PlayStation Portable', '1,500円'], ['ゲームボーイアドバンスSP', '3,000円'], ['NINTENDO 64', '2,000円'],
];

const repairRows = [
  { item: 'Nintendo Switch 液晶画面', price: '11,000円', src: 'nintendo' },
  { item: 'Nintendo Switch CPU基板', price: '24,200円', src: 'nintendo' },
  { item: 'Joy-Con（スティック・ボタン・バッテリー）1本', price: '2,860円', src: 'nintendo' },
  { item: 'PS5 メイン基板（オンライン修理）', price: '30,800円', src: 'sony' },
  { item: 'PS4 メイン基板', price: '16,500円', src: 'sony' },
];

const faqs = [
  { q: '壊れたゲーム機でも売れますか？', a: '会社によって扱いが分かれます。駿河屋・ゲオ（宅配）・ハードオフは動作しないゲーム機も買取の対象と案内しています。一方、ブックオフは動作不良や電源が入らないものには値段をつけられないと案内しています（各社公式・2026年11月28日確認）。' },
  { q: 'ジャンク品の買取価格はどのくらいですか？', a: '当サイトでは「正常品の何%」という目安は出典が確認できないため掲載していません。公式に金額が出ている例として、駿河屋の保証額は Switch 本体が5,000円・電源落ちや液晶難ありで3,000円、ゲオ宅配のジャンク Switch は5,000円（2026年9月28日時点）です。基準・時点が違うため、同じ条件の比較ではありません。' },
  { q: '故障の内容は申告すべきですか？', a: 'はい。駿河屋は「不良品」と書いたメモを貼るなどの申告がない場合、掲載している価格で買い取らない場合があると案内しています。ゲオ宅配も故障品は箱に「故障品」と記載するよう案内しています。' },
  { q: '修理してから売ったほうが高く売れますか？', a: '修理費用と買取額の差で判断します。任天堂の修理参考料金は Switch の液晶画面が11,000円、CPU基板が24,200円です。一方、駿河屋の Switch 本体の保証額は通常5,000円・故障時3,000円で、差は2,000円です。なお、ゲオ宅配は自分で修理した跡のあるものを買取不可としています。' },
  { q: '改造・CFW導入したゲーム機は売れますか？', a: 'ゲオ宅配は「改造品」「非ライセンス改造品」を買取不可としています。駿河屋・ブックオフ・ハードオフのゲーム機の案内では、改造品についての記載を確認できませんでした（2026年11月28日）。任天堂・ソニーは、ソフトウェアを含む改造の痕跡がある場合は修理を受け付けないとしています。' },
  { q: '箱や付属品がなくても売れますか？', a: '駿河屋は箱・説明書のないものも買い取ると案内しています（必須付属品の欠品は減額の対象）。ハードオフも付属品が無くても買取可としています。ブックオフは動作確認に必要な付属品がない場合は値段をつけられないとしています。詳しくは「箱なし・付属品なし」のページをご覧ください。' },
];

export default function BrokenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "壊れたゲーム機でも売れる？ジャンク品買取ガイド【2026年】", "datePublished": "2026-03-15", "dateModified": "2026-11-28", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: 'ジャンク品買取' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            壊れたゲーム機でも売れる？ジャンク品買取ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            壊れたゲーム機を買い取るかどうかは会社によって違います。駿河屋・ゲオ・ハードオフは動作しない本体も買取の対象と案内し、ブックオフは動作不良品には値段をつけられないと案内しています（各社公式・2026年11月28日確認）。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Why junk sells */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ジャンク品でも売れる理由</h2>
          <div className="space-y-4">
            {reasons.map((item, i) => (
              <div key={item.title} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Policies */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />4社の公式の扱い（壊れたゲーム機）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>会社</th><th>壊れたゲーム機</th><th>公式の記載（要約・引用）</th></tr>
              </thead>
              <tbody>
                {policies.map((p) => (
                  <tr key={p.name}>
                    <td className="font-bold">{p.name}</td>
                    <td>{p.stance}</td>
                    <td className="text-sm">{p.detail}（<a href={p.url} target="_blank" rel="noopener noreferrer" className="underline">{p.label}</a>）</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：各社の公式ページ（{SURVEY_DATE}確認）。ゲオの店頭買取のページは当サイトから閲覧できなかったため、宅配買取の条件を掲載しています。ゲオは査定基準のページで「店頭とは異なる場合がございます」と記載しています。</p>
        </section>

        {/* Suruga-ya guaranteed */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />駿河屋：故障の状態ごとの保証額</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>機種</th><th>保証額（通常）</th><th>保証額（故障時）</th></tr>
              </thead>
              <tbody>
                {surugaRows.map((r) => (
                  <tr key={r.model}>
                    <td className="font-bold">{r.model}</td>
                    <td>{r.normal}</td>
                    <td>{r.broken}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：<a href={SRC.surugaJunk} target="_blank" rel="noopener noreferrer" className="underline">駿河屋「壊れたゲーム機本体買取強化中」</a>（{SURVEY_DATE}確認）。ページに更新日の記載はなく、公式は「買取価格はあくまで参考価格です」としています。同じ機種の個別の買取ページの価格とは一致しない場合があります。PS5・Switch 2・Switch 有機ELモデルはこのリストに掲載がありません。</p>
        </section>

        {/* GEO junk prices */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ゲオ宅配買取：ジャンクゲーム機本体の買取価格</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>機種</th><th>買取価格（ジャンク）</th></tr>
              </thead>
              <tbody>
                {geoRows.map(([m, p]) => (
                  <tr key={m}><td className="font-bold">{m}</td><td>{p}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：<a href={SRC.geoJunk} target="_blank" rel="noopener noreferrer" className="underline">ゲオ宅配買取「壊れたゲーム機」</a>（公式表記「2026年9月28日時点の価格」・{SURVEY_DATE}閲覧）。駿河屋の保証額とは時点・基準が異なるため、同じ条件の比較ではありません。</p>
        </section>

        {/* Repair reference */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />参考：メーカー修理の参考料金</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>修理内容</th><th>参考料金（税込）</th></tr>
              </thead>
              <tbody>
                {repairRows.map((r) => (
                  <tr key={r.item}><td className="font-bold">{r.item}</td><td>{r.price}（<a href={SRC[r.src as 'nintendo' | 'sony']} target="_blank" rel="noopener noreferrer" className="underline">{r.src === 'nintendo' ? '任天堂' : 'ソニー'}</a>）</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：任天堂・ソニーの修理料金ページ（{SURVEY_DATE}確認・参考料金のため実際の修理料金とは異なる場合があります）。故障したまま売るか修理してから売るかは、修理料金と買取額の差で判断できます。</p>
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
            壊れたゲーム機にも<span style={{ color: 'var(--color-electric-green)' }}>買取価格</span>がつく場合があります
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            処分する前に、各社の条件を確認してから査定に出すことをおすすめします。会社によっては動作しない本体にも値段がつきます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>お役立ち情報</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/knowledge/boxless/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>箱なし・付属品なし</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なしでも売れるかを解説</p>
            </Link>
            <Link href="/knowledge/price-guide/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取相場ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ハード・ソフト別の相場一覧</p>
            </Link>
            <Link href="/knowledge/preparation/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>売る前の準備</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>初期化・データ消去の手順</p>
            </Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
