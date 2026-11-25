import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'
import KaitoriWorldCta from '@/components/KaitoriWorldCta';

export const metadata: Metadata = {
  title: 'PS4ソフト買取おすすめ3選｜プレステ4ソフトを高く売るコツ【2026年】',
  description:
    'PS4ソフト10本の買取価格を、駿河屋の公式買取検索で2026年11月25日に確認した価格で掲載しています。通常版と廉価版・GOTY版の価格差の実測、ブックオフ・ゲオの掲載状況、買取サービス3社の比較を掲載しています。',
  keywords: ['PS4ソフト 買取', 'プレステ4 ソフト 売る', 'PS4 ソフト 買取相場'],
  openGraph: {
    images: ['/og.png'],
    title: 'PS4ソフト買取おすすめ3選｜プレステ4ソフトを高く売るコツ【2026年】',
    description: 'PS4ソフト10本の買取価格を、駿河屋・ブックオフ・ゲオの公式買取ページで2026年11月25日に確認した結果で掲載しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

// 2026-11-25 各社公式買取ページで確認（推測値・比較サイトの値は使用しない。掲載がない店は「—」）
// 駿河屋=公式買取検索 search_buy?search_word=<JAN> の掲載価格（JAN・型番で照合）。「メールにてお見積」表示は価格非公表として扱う
// ブックオフ=高価買取情報 ゲーム（bookoff.co.jp/selllist/game/index.html〜index_6.html・「最終更新日 2026年11月19日」表記）。PS4ソフトの掲載なし
// ゲオ=高価買取品リスト（geo-online.co.jp/store_info/buy/）。カテゴリはPS5・Switch・Switch2等でPS4のリストはなし（/store_info/buy/PS4/ は一覧ページに戻る）
// data/price-history.csv（当サイトの週次実測）にPS4ソフトの記録はなし
const SURVEY_DATE_LABEL = '2026年11月25日';
const surugayaUrl = (jan: string) => `https://www.suruga-ya.jp/kaitori/search_buy?search_word=${jan}`;

const priceData = [
  { title: 'EA SPORTS FC 27', jan: '4938833024916', surugaya: '4,600円', note: '型番 PLJM-17467' },
  { title: 'SEKIRO: SHADOWS DIE TWICE GAME OF THE YEAR EDITION', jan: '4949776442033', surugaya: '2,300円', note: '型番 PLJM-16714' },
  { title: 'グランツーリスモ7', jan: '4948872016193', surugaya: '2,300円', note: '型番 PCJS-66091' },
  { title: 'SEKIRO: SHADOWS DIE TWICE', jan: '4949776442019', surugaya: '2,000円', note: '型番 PLJM-16322' },
  { title: 'バイオハザード RE:2（通常版）', jan: '4976219098427', surugaya: '1,200円', note: '型番 PLJM-16288' },
  { title: 'モンスターハンターワールド：アイスボーン マスターエディション Best Price', jan: '4976219114011', surugaya: '700円', note: '型番 PLJM-16710' },
  { title: 'DEATH STRANDING VALUE SELECTION', jan: '4948872016001', surugaya: '500円', note: '型番 PCJS-66080' },
  { title: 'ペルソナ5 ザ・ロイヤル（通常版）', jan: '4984995903606', surugaya: '400円', note: '型番 PLJM-16428' },
  { title: 'ファイナルファンタジーVII リメイク', jan: '4988601010443', surugaya: '価格の掲載なし', note: '型番 PLJM-16478。駿河屋は「メールにてお見積」表示' },
  { title: 'キングダムハーツIII', jan: '4988601010160', surugaya: '価格の掲載なし', note: '型番 PLJM-16164。駿河屋は「メールにてお見積」表示' },
];

const shopComparison = [
  { shop: '駿河屋', kind: '公式買取検索の掲載価格（JANコードで検索）', url: 'https://www.suruga-ya.jp/kaitori/', urlLabel: 'suruga-ya.jp/kaitori/', scope: '上表と版違い比較の全商品をJANコードで検索しました。「メールにてお見積」表示の商品は「価格の掲載なし」としています' },
  { shop: 'ブックオフ', kind: '高価買取情報（ゲーム）の店舗買取価格。ページ上の表記は「最終更新日 2026年11月19日」です', url: 'https://www.bookoff.co.jp/selllist/game/index.html', urlLabel: 'bookoff.co.jp/selllist/game/', scope: '2026年11月25日時点の高価買取リスト（Switch・Switch2・DS・3DS・本体）にPS4ソフトの掲載はありませんでした' },
  { shop: 'ゲオ', kind: '高価買取品リストの店頭参考買取価格', url: 'https://geo-online.co.jp/store_info/buy/', urlLabel: 'geo-online.co.jp/store_info/buy/', scope: '高価買取品リストのカテゴリはPS5・Switch・Switch2などで、PS4のリストはありませんでした。ゲオ宅配買取は2026年11月19日から新規受付を停止しています' },
];

// 同一タイトルの版違い（駿河屋・JANコード検索・2026-11-25）
const editionData = [
  { title: 'SEKIRO: SHADOWS DIE TWICE', a: '通常版（JAN 4949776442019）', aPrice: '2,000円', b: 'GAME OF THE YEAR EDITION（JAN 4949776442033）', bPrice: '2,300円' },
  { title: 'DEATH STRANDING', a: 'スペシャルエディション（JAN 4948872311472）', aPrice: '1,400円', b: 'VALUE SELECTION（JAN 4948872016001）', bPrice: '500円' },
  { title: 'モンスターハンターワールド：アイスボーン マスターエディション', a: '通常版（JAN 4976219102018）', aPrice: '価格の掲載なし', b: 'Best Price（JAN 4976219114011）', bPrice: '700円' },
];

const services = [
  { name: 'ヒカカク！', feature: '最大20社一括査定', area: '全国対応', method: '出張買取・宅配買取・店舗買取', point: '古いPS4ソフトでも高値の業者を探しやすい', rank: 1 },
  { name: '買取ウリエル', feature: '出張買取・即日現金化', area: '東京・神奈川・千葉・埼玉（ゲーム）', method: '出張買取', point: 'PS4本体とまとめて即日現金化', rank: 2 },
  { name: 'ティファナ', feature: '店舗買取（宅配は一時停止中）', area: '東京近郊', method: '店舗（宅配は一時停止中）', point: '低価格ソフトもまとめて引取可', rank: 3 },
];

const tips = [
  { title: '同じタイトルでも版によって価格が異なります', description: '駿河屋では、SEKIRO: SHADOWS DIE TWICEの通常版が2,000円、GAME OF THE YEAR EDITIONが2,300円でした。DEATH STRANDINGはスペシャルエディション1,400円、VALUE SELECTION 500円です（2026年11月25日確認）。パッケージのJANコード・型番で検索してから価格をご確認ください。' },
  { title: 'PS5版がある作品は、お手持ちの版をご確認ください', description: '駿河屋では、グランツーリスモ7のPS4版が2,300円、PS5版は「メールにてお見積」表示でした。ペルソナ5 ザ・ロイヤルはPS4版400円・PS5版1,500円です。同じタイトルでもハードごとに価格が異なるため、版を確かめてから検索してください。' },
  { title: 'ブックオフ・ゲオでは店頭での査定額をご確認ください', description: '2026年11月25日時点で、ブックオフの高価買取情報（ゲーム）にはPS4ソフトの掲載がなく、ゲオの高価買取品リストにはPS4のカテゴリがありませんでした。両社で売却する場合は、店頭での査定額をご確認ください。' },
];

const faqs = [
  { q: 'PS4ソフトはまだ売れますか？', a: '駿河屋の公式買取検索では、2026年11月25日時点でPS4ソフトの買取価格が掲載されています。当サイトが確認した10本では、EA SPORTS FC 27が4,600円、SEKIRO GAME OF THE YEAR EDITIONとグランツーリスモ7が2,300円でした。一方、ファイナルファンタジーVII リメイクとキングダムハーツIIIは「メールにてお見積」表示で、価格の掲載はありませんでした。' },
  { q: '廉価版や再販版は買取価格が安くなりますか？', a: 'タイトルによって異なります。駿河屋では、DEATH STRANDINGのVALUE SELECTION（500円）はスペシャルエディション（1,400円）より低い価格でした。一方、SEKIROはGAME OF THE YEAR EDITION（2,300円）が通常版（2,000円）より高い価格でした（2026年11月25日確認）。一律の割合で比べることはできないため、版ごとにJANコードでご確認ください。' },
  { q: 'ブックオフやゲオではPS4ソフトの買取価格を確認できますか？', a: '2026年11月25日時点で、ブックオフの高価買取情報（ゲーム）にはPS4ソフトの掲載がなく、ゲオの高価買取品リストにはPS4のカテゴリがありませんでした。リストに掲載のない商品の買取可否や価格は、店頭でご確認ください。なお、ゲオ宅配買取は2026年11月19日から新規受付を停止しています。' },
  { q: 'PS4版とPS5版はどちらが高く売れますか？', a: 'タイトルによって異なります。駿河屋では、ペルソナ5 ザ・ロイヤルはPS5版1,500円・PS4版400円でPS5版が高く、EA SPORTS FC 27はPS4版・PS5版ともに4,600円でした。グランツーリスモ7はPS4版2,300円に対し、PS5版は「メールにてお見積」表示でした（2026年11月25日確認）。' },
  { q: 'ディスクに傷があっても売れますか？', a: '買取の可否や減額の基準は買取店ごとに異なります。本ページの価格は完品を前提とした掲載価格です。状態に不安がある場合は、各社の買取条件をご確認のうえ、査定をご依頼ください。' },
];

export default function PS4SoftPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "PS4ソフト買取おすすめ3選｜プレステ4ソフトを高く売るコツ【2026年】", "datePublished": "2026-03-15", "dateModified": "2026-11-25", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'PS4ソフト' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ソフト別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            PS4ソフト 買取ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            当サイトでは、PS4ソフト10本の買取価格を駿河屋の公式買取検索で確認し、ブックオフ・ゲオの高価買取リストの掲載状況とあわせて掲載しています。通常版と廉価版・GOTY版の価格差、買取サービス3社の比較もまとめました。
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />PS4ソフト10本の買取価格（{SURVEY_DATE_LABEL}確認）</h2>
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
                    <td className="text-sm">—</td>
                    <td className="text-sm">—</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋 公式買取検索（JANコードで検索・価格のリンク先）。{SURVEY_DATE_LABEL}に当サイトが確認した掲載価格です。ブックオフ・ゲオの「—」は、両社の高価買取リストにPS4ソフトの掲載がなかったことを示します。価格は完品を前提とした参考価格で、状態・在庫により変動します。売却前に、各社の公式買取ページにて最新の価格をご確認ください。</p>
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
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>確認日：{SURVEY_DATE_LABEL}。当サイトでは、各社の公式ページで確認できた価格のみを掲載しています。当サイトの週次調査（価格履歴）にはPS4ソフトの記録がないため、過去からの値動きは掲載していません。</p>
        </section>

        {/* Edition Diff */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />通常版と廉価版・GOTY版の買取価格の違い（駿河屋・{SURVEY_DATE_LABEL}確認）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>タイトル</th><th>版</th><th>価格</th><th>版</th><th>価格</th></tr>
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
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋 公式買取検索（各JANコードで検索）。「価格の掲載なし」は「メールにてお見積」表示を示します。廉価版・再販版が通常版より低いとは限らないため、版ごとにご確認ください。</p>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />PS4ソフトを売る前に確認したいこと</h2>
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
                  <th>PS4ソフト買取の強み</th>
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
            PS4ソフトを<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>で売るために
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            同じタイトルでも、版やハードによって買取価格は異なります。売却前に、JANコードで複数社の公式買取価格をご確認ください。
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
            <Link href="/software/ps5-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS5ソフト</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS5ソフトの買取価格・限定版との比較</p>
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
