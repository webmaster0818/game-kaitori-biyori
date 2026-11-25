import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'
import KaitoriWorldCta from '@/components/KaitoriWorldCta';

export const metadata: Metadata = {
  title: 'PS5ソフト買取おすすめ3選｜プレステ5ソフトを高く売るコツ【2026年】',
  description:
    'PS5ソフト10本の買取価格を、駿河屋とゲオの公式買取ページで2026年11月25日に確認した価格で比較しています。限定版・通常版の価格差の実測、ダウンロード版の注意点、買取サービス3社の比較を掲載しています。',
  keywords: ['PS5ソフト 買取', 'プレステ5 ソフト 売る', 'PS5 ソフト 買取相場'],
  openGraph: {
    images: ['/og.png'],
    title: 'PS5ソフト買取おすすめ3選｜プレステ5ソフトを高く売るコツ【2026年】',
    description: 'PS5ソフト10本の買取価格を、駿河屋・ブックオフ・ゲオの公式買取ページで2026年11月25日に確認した価格で比較しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

// 2026-11-25 各社公式買取ページで確認（推測値・比較サイトの値は使用しない。掲載がない店は「—」）
// 駿河屋=公式買取検索 search_buy?search_word=<JAN> の掲載価格（JAN・型番で照合）。「メールにてお見積」表示は価格非公表として扱う
// ブックオフ=高価買取情報 ゲーム（bookoff.co.jp/selllist/game/index.html〜index_6.html・「最終更新日 2026年11月19日」表記）。PS5ソフトの掲載なし
// ゲオ=高価買取品リスト PS5（geo-online.co.jp/store_info/buy/PS5/・掲載17タイトル）の店頭参考買取価格（ヘッドレスChromeで取得）。「通常）」表記は通常版
// data/price-history.csv（当サイトの週次実測）にPS5ソフトの記録はなし（PS5本体のみ）
const SURVEY_DATE_LABEL = '2026年11月25日';
const surugayaUrl = (jan: string) => `https://www.suruga-ya.jp/kaitori/search_buy?search_word=${jan}`;

const priceData = [
  { title: 'EA SPORTS FC 27', jan: '4938833024893', surugaya: '4,600円', bookoff: '—', geo: '5,000円', note: '型番 ELJM-31019' },
  { title: 'ACE COMBAT 8: WINGS OF THEVE（通常版）', jan: '4580891516072', surugaya: '4,000円', bookoff: '—', geo: '5,000円', note: '型番 ELJM-30901' },
  { title: 'ファイナルファンタジー レゾナンス', jan: '4988601012171', surugaya: '4,500円', bookoff: '—', geo: '4,000円', note: '型番 ELJM-30964' },
  { title: 'バイオハザード レクイエム（通常版）', jan: '4976219137492', surugaya: '3,500円', bookoff: '—', geo: '2,500円', note: '型番 ELJM-30814' },
  { title: 'グランツーリスモ7', jan: '4948872016186', surugaya: '価格の掲載なし', bookoff: '—', geo: '3,000円', note: '型番 ECJS-00017。駿河屋は「メールにてお見積」表示' },
  { title: 'Stellar Blade（ステラーブレイド）', jan: '4948872016858', surugaya: '2,400円', bookoff: '—', geo: '3,000円', note: '型番 ECJS-00034' },
  { title: '007 ファースト・ライト', jan: '8809459216602', surugaya: '2,500円', bookoff: '—', geo: '3,000円', note: '型番 ELJM-30834' },
  { title: 'プラグマタ（通常版）', jan: '4976219137799', surugaya: '2,500円', bookoff: '—', geo: '2,800円', note: '型番 ELJM-30823' },
  { title: '首都高バトル / Tokyo Xtreme Racer', jan: '4994934000051', surugaya: '2,700円', bookoff: '—', geo: '2,500円', note: '型番 ELJM-30827' },
  { title: '紅の砂漠（通常版）', jan: '4580717790976', surugaya: '2,500円', bookoff: '—', geo: '2,500円', note: '型番 ELJM-30776' },
];

const shopComparison = [
  { shop: '駿河屋', kind: '公式買取検索の掲載価格（JANコードで検索）', url: 'https://www.suruga-ya.jp/kaitori/', urlLabel: 'suruga-ya.jp/kaitori/', scope: '上表と限定版比較の全商品をJANコードで検索しました。「メールにてお見積」表示の商品は「価格の掲載なし」としています' },
  { shop: 'ブックオフ', kind: '高価買取情報（ゲーム）の店舗買取価格。ページ上の表記は「最終更新日 2026年11月19日」です', url: 'https://www.bookoff.co.jp/selllist/game/index.html', urlLabel: 'bookoff.co.jp/selllist/game/', scope: '2026年11月25日時点の高価買取リスト（Switch・Switch2・DS・3DS・本体）にPS5ソフトの掲載はありませんでした' },
  { shop: 'ゲオ', kind: '高価買取品リスト（PS5）の店頭参考買取価格', url: 'https://geo-online.co.jp/store_info/buy/PS5/', urlLabel: 'geo-online.co.jp/store_info/buy/PS5/', scope: 'リスト掲載の17タイトルから10タイトルを選び、駿河屋の価格と並べています。ゲオ宅配買取は2026年11月19日から新規受付を停止しているため、店頭の参考価格として掲載しています' },
];

// 同一タイトルの版違い（駿河屋・JANコード検索・2026-11-25）
const editionData = [
  { title: 'ELDEN RING', a: 'コレクターズエディション（JAN 4949776471026）', aPrice: '20,000円', b: 'SHADOW OF THE ERDTREE EDITION 通常版（JAN 4949776471033）', bPrice: '2,200円' },
  { title: 'バイオハザード レクイエム', a: 'デラックスエディション（JAN 4976219138048）', aPrice: '3,500円', b: '通常版（JAN 4976219137492）', bPrice: '3,500円' },
  { title: 'プラグマタ', a: 'デラックスエディション（JAN 4976219138642）', aPrice: '2,500円', b: '通常版（JAN 4976219137799）', bPrice: '2,500円' },
  { title: 'ACE COMBAT 8: WINGS OF THEVE', a: 'ACE of ACES BOX（JAN 4580891516096）', aPrice: '価格の掲載なし', b: '通常版（JAN 4580891516072）', bPrice: '4,000円' },
  { title: '紅の砂漠', a: 'コレクターズエディション（JAN 4580717790990）', aPrice: '価格の掲載なし', b: '通常版（JAN 4580717790976）', bPrice: '2,500円' },
];

const services = [
  { name: 'ヒカカク！', feature: '最大20社一括査定', area: '全国対応', method: '出張買取・宅配買取・店舗買取', point: '複数社の比較で最高値を確認可能', rank: 1 },
  { name: '買取ウリエル', feature: '出張買取・即日現金化', area: '東京・神奈川・千葉・埼玉（ゲーム）', method: '出張買取', point: '大量のソフトを自宅で即日現金化', rank: 2 },
  { name: 'ティファナ', feature: '店舗買取（宅配は一時停止中）', area: '東京近郊', method: '店舗（宅配は一時停止中）', point: 'PS5本体とソフトをまとめて売れる', rank: 3 },
];

const tips = [
  { title: '店舗によって高いほうが入れ替わります', description: '2026年11月25日の確認では、EA SPORTS FC 27・ACE COMBAT 8・Stellar Blade・007 ファースト・ライト・プラグマタはゲオの店頭参考価格が、ファイナルファンタジー レゾナンス・バイオハザード レクイエム・首都高バトルは駿河屋の価格が高い結果でした。売却前に、複数店の最新の価格をご確認ください。' },
  { title: '限定版が必ず高いとは限りません', description: '駿河屋では、ELDEN RING コレクターズエディションが20,000円と通常版（2,200円）を大きく上回る一方、バイオハザード レクイエムとプラグマタはデラックスエディションと通常版が同じ価格でした。版ごとにJANコードで価格をご確認ください。' },
  { title: 'ブックオフでは店頭での査定額をご確認ください', description: '2026年11月25日時点で、ブックオフの高価買取情報（ゲーム）にはPS5ソフトの掲載がありませんでした。ブックオフで売却する場合は、店頭での査定額をご確認ください。' },
];

const faqs = [
  { q: 'PS5ソフトで現在高く売れるのはどれですか？', a: '2026年11月25日に当サイトが確認した範囲では、EA SPORTS FC 27（ゲオ5,000円・駿河屋4,600円）、ACE COMBAT 8: WINGS OF THEVE 通常版（ゲオ5,000円・駿河屋4,000円）、ファイナルファンタジー レゾナンス（駿河屋4,500円・ゲオ4,000円）が上位でした。限定版では、駿河屋のELDEN RING コレクターズエディションが20,000円でした。価格は日々変動するため、売却直前に各社の公式買取ページをご確認ください。' },
  { q: 'ダウンロード版のPS5ソフトは売れますか？', a: 'ダウンロード版はPlayStation Networkのアカウントで購入するもので、ディスクがないため買取店に売却することはできません。売却を予定している場合は、パッケージ版をお選びください。' },
  { q: '限定版やコレクターズエディションは高く売れますか？', a: 'タイトルによって異なります。駿河屋では、ELDEN RING コレクターズエディションが20,000円（通常版2,200円）でしたが、バイオハザード レクイエムとプラグマタはデラックスエディションと通常版が同じ価格でした。ACE COMBAT 8 ACE of ACES BOXと紅の砂漠 コレクターズエディションは「メールにてお見積」表示で、価格の掲載はありませんでした（2026年11月25日確認）。' },
  { q: 'PS5ソフトとPS4ソフトの買取価格は違いますか？', a: '同じタイトルでも異なる場合があります。駿河屋では、ペルソナ5 ザ・ロイヤルがPS5版1,500円・PS4版400円でした。一方、EA SPORTS FC 27はPS5版・PS4版ともに4,600円で同じでした（2026年11月25日確認）。お手持ちの版のJANコードでご確認ください。' },
  { q: 'ブックオフではPS5ソフトを買い取っていますか？', a: '当サイトが確認したのは、ブックオフの高価買取情報（ゲーム）の掲載内容です。2026年11月25日時点でこのリストにPS5ソフトの掲載はありませんでした。リストに掲載のない商品の買取可否や価格は、店頭でご確認ください。' },
];

export default function PS5SoftPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "PS5ソフト買取おすすめ3選｜プレステ5ソフトを高く売るコツ【2026年】", "datePublished": "2026-03-15", "dateModified": "2026-11-25", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'PS5ソフト' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ソフト別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            PS5ソフト 買取ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            当サイトでは、PS5ソフト10本の買取価格を駿河屋・ブックオフ・ゲオの公式買取ページで確認し、比較しています。限定版と通常版の価格差、ダウンロード版の注意点、買取サービス3社の比較もあわせて掲載しています。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>調査日: {SURVEY_DATE_LABEL}（駿河屋・ブックオフ・ゲオの公式買取ページで確認）</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Price Table */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />PS5ソフト10本の店舗別買取価格（{SURVEY_DATE_LABEL}確認）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>タイトル</th><th>駿河屋</th><th>ブックオフ</th><th>ゲオ（店頭参考）</th></tr>
              </thead>
              <tbody>
                {priceData.map((g) => (
                  <tr key={g.jan}>
                    <td className="font-bold text-sm">{g.title}{g.note && <span className="block text-xs font-normal" style={{ color: 'var(--color-text-light)' }}>{g.note}</span>}</td>
                    <td className="text-sm"><a href={surugayaUrl(g.jan)} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>{g.surugaya}</a></td>
                    <td className="text-sm">{g.bookoff}</td>
                    <td className="text-sm">{g.geo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋 公式買取検索（JANコードで検索・価格のリンク先）、ブックオフ 高価買取情報（ゲーム）、ゲオ 高価買取品リスト（PS5）。いずれも{SURVEY_DATE_LABEL}に当サイトが確認した掲載価格です。「—」は各社の高価買取リストに掲載がなかったことを示します。価格は完品を前提とした参考価格で、状態・在庫により変動します。売却前に、各社の公式買取ページにて最新の価格をご確認ください。</p>
        </section>

        {/* Sources */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />価格の確認方法と出典</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>買取店</th><th>確認した価格</th><th>出典</th><th>掲載範囲</th></tr>
              </thead>
              <tbody>
                {shopComparison.map((s) => (
                  <tr key={s.shop}>
                    <td className="font-bold text-sm">{s.shop}</td>
                    <td className="text-sm">{s.kind}</td>
                    <td className="text-sm"><a href={s.url} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>{s.urlLabel}</a></td>
                    <td className="text-sm">{s.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>確認日：{SURVEY_DATE_LABEL}。当サイトでは、各社の公式ページで確認できた価格のみを掲載しています。当サイトの週次調査（価格履歴）にはPS5ソフトの記録がないため、過去からの値動きは掲載していません。</p>
        </section>

        {/* Limited Editions */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />限定版と通常版の買取価格（駿河屋・{SURVEY_DATE_LABEL}確認）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>タイトル</th><th>限定版</th><th>限定版の価格</th><th>通常版</th><th>通常版の価格</th></tr>
              </thead>
              <tbody>
                {editionData.map((e) => (
                  <tr key={e.title}>
                    <td className="font-bold text-sm">{e.title}</td>
                    <td className="text-sm">{e.a}</td>
                    <td className="text-sm">{e.aPrice}</td>
                    <td className="text-sm">{e.b}</td>
                    <td className="text-sm">{e.bPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋 公式買取検索（各JANコードで検索）。「価格の掲載なし」は「メールにてお見積」表示を示します。付属品の欠品があると査定額が変わる場合があるため、各社の買取条件もあわせてご確認ください。</p>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />PS5ソフトを売る前に確認したいこと</h2>
          <div className="space-y-4">
            {tips.map((tip, i) => (
              <div key={tip.title} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{tip.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DL Warning */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ダウンロード版の売却に関する注意点</h2>
          <div className="glass-card p-6" style={{ borderLeft: '4px solid #EF4444' }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-light)' }}>
              PS5のダウンロード版ソフトはPlayStation Networkのアカウントで購入するもので、ディスクがないため買取店に売却することはできません。以下の点にご注意ください。
            </p>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>売却予定がある場合：</strong>パッケージ版をお選びください。</li>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>PS5 デジタル・エディション：</strong>ディスクドライブを搭載していないモデルです。パッケージ版ソフトを利用するかどうかを考慮して、本体をお選びください。</li>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>付属品：</strong>限定版の付属品や封入物の扱いは買取店ごとに異なります。各社の買取条件をご確認ください。</li>
            </ul>
          </div>
        </section>

        {/* Service Comparison */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />おすすめ買取サービス3社比較</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>サービス</th>
                  <th>特徴</th>
                  <th>対応エリア</th>
                  <th>買取方法</th>
                  <th>PS5ソフト買取の強み</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.name}>
                    <td className="font-bold">{s.name}</td>
                    <td>{s.feature}</td>
                    <td>{s.area}</td>
                    <td>{s.method}</td>
                    <td>{s.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) }) }} />
        </section>

        {/* CTA */}
        <section className="glass-card-dark p-8 text-center">
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>
            PS5ソフトを<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>で売るために
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            タイトルや版によって、高い価格を提示している店舗は異なります。売却前に、複数店の公式買取価格をご確認ください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のソフト買取ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/software/switch-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switchソフト</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>Switchソフトの買取相場・高く売るコツ</p>
            </Link>
            <Link href="/software/ps4-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS4ソフト</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS4ソフトの買取価格・版ごとの違い</p>
            </Link>
            <Link href="/software/retro-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>レトロゲームソフト</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>プレミアソフトの買取相場</p>
            </Link>
          </div>
        </section>
        <KaitoriWorldCta compact />
        <AuthorBox />
      </div>
    </>
  );
}
