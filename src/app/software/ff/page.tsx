import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const PAGE_TITLE = 'FF（ファイナルファンタジー）の買取価格【2026年11月】駿河屋・ゲオの実測比較｜シリーズ一覧';
const CHECKED = '2026年11月17日';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description:
    'FF7 リバース・FF16・FF7 リメイク インターグレード・FF10/10-2 HDなどFFシリーズの買取価格を、2026年11月17日に駿河屋とゲオ宅配買取の公式ページで確認して比較しました。比べられた15組のうち10組で駿河屋が高い結果です。',
  keywords: ['ff 買取 価格', 'FF 買取', 'ファイナルファンタジー 買取', 'FF7リバース 買取', 'FF16 買取', 'FF7 リメイク 買取'],
  openGraph: {
    images: ['/og.png'],
    title: PAGE_TITLE,
    description: 'FFシリーズの買取価格を駿河屋とゲオ宅配買取の公式ページで2026年11月17日に確認し、タイトル・機種別に比較しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

// 2026-11-17 に各社公式の買取検索で当編集部が確認した値（国内版パッケージ）
// 駿河屋: suruga-ya.jp/kaitori の検索結果に表示される買取価格（美品・未開封の上乗せ前）。'quote' は「メールにてお見積」表示
// ゲオ: buy.geo-online.co.jp（ゲオの宅配買取）の検索結果に表示される「最高価格」。null は検索結果に表示なし
type Price = number | 'quote' | null;
type Row = { title: string; platform: string; surugaya: Price; geo: Price; note?: string };
const compareRows: Row[] = [
  { title: 'FF7 リバース', platform: 'PS5', surugaya: 1500, geo: 2000, note: 'ゲオは同名の商品が3件表示され、いずれも2,000円。駿河屋の新価格版は2,000円' },
  { title: 'FF7 リバース', platform: 'Switch 2', surugaya: 3000, geo: 3500 },
  { title: 'FF7 リバース デラックスエディション', platform: 'PS5', surugaya: 5100, geo: null },
  { title: 'FF7 リバース コレクターズエディション', platform: 'PS5', surugaya: 16000, geo: null },
  { title: 'FF16（FINAL FANTASY XVI）', platform: 'PS5', surugaya: 'quote', geo: 500 },
  { title: 'FF16 DELUXE EDITION', platform: 'PS5', surugaya: 3100, geo: null },
  { title: 'FF16 Collector’s Edition', platform: 'PS5', surugaya: 13000, geo: null },
  { title: 'FF7 リメイク インターグレード', platform: 'PS5', surugaya: 2300, geo: 1300, note: '駿河屋の新価格版は「メールにてお見積」' },
  { title: 'FF7 リメイク インターグレード', platform: 'Switch 2', surugaya: 2900, geo: 2000 },
  { title: 'FF7 リメイク', platform: 'PS4', surugaya: 'quote', geo: 100 },
  { title: 'クライシス コア -FF7- リユニオン', platform: 'Switch', surugaya: 2000, geo: 1000 },
  { title: 'クライシス コア -FF7- リユニオン', platform: 'PS5', surugaya: 1300, geo: 500 },
  { title: 'クライシス コア -FF7- リユニオン', platform: 'PS4', surugaya: 1100, geo: 100 },
  { title: 'FF I-VI コレクション（2023年4月20日発売）', platform: 'Switch', surugaya: 11000, geo: null },
  { title: 'FF I-VI コレクション メモリアルパッケージ', platform: 'Switch', surugaya: 5000, geo: 9500 },
  { title: 'FF I-VI コレクション メモリアルパッケージ', platform: 'PS4', surugaya: 5000, geo: 5500 },
  { title: 'FF I-VI ピクセルリマスター FF35周年限定特装版', platform: 'PS4', surugaya: 42000, geo: null },
  { title: 'FF I-VI ピクセルリマスター FF35周年限定特装版', platform: 'Switch', surugaya: 27000, geo: null },
  { title: 'FF10/10-2 HDリマスター', platform: 'Switch 2', surugaya: 4000, geo: 4000 },
  { title: 'FF10/10-2 HDリマスター', platform: 'Switch', surugaya: 3500, geo: 3000 },
  { title: 'FF10/10-2 HDリマスター', platform: 'PS4', surugaya: 2400, geo: 1500 },
  { title: 'FF12 ザ ゾディアック エイジ', platform: 'Switch', surugaya: 2400, geo: 2000 },
  { title: 'FF12 ザ ゾディアック エイジ', platform: 'PS4', surugaya: 1000, geo: 500 },
  { title: 'FF12 ザ ゾディアック エイジ コレクターズエディション', platform: 'PS4', surugaya: 18000, geo: 4000 },
];

// 旧作（駿河屋のみ。同日のゲオ宅配買取の検索結果には表示なし）
const retroRows: Row[] = [
  { title: 'FF7 インターナショナル', platform: 'PS', surugaya: 1000, geo: null },
  { title: 'FF7 インターナショナル［PSone Books］', platform: 'PS', surugaya: 600, geo: null },
  { title: 'FF7', platform: 'PS', surugaya: 'quote', geo: null },
  { title: 'FF6', platform: 'SFC', surugaya: 'quote', geo: null },
];

function fmt(v: Price) {
  if (v === 'quote') return '見積';
  if (v === null) return '—';
  return `${v.toLocaleString()}円`;
}
const pairs = compareRows.filter((r): r is Row & { surugaya: number; geo: number } => typeof r.surugaya === 'number' && typeof r.geo === 'number');
const surugayaWins = pairs.filter((r) => r.surugaya > r.geo).length;
const geoWins = pairs.filter((r) => r.geo > r.surugaya).length;
const ties = pairs.filter((r) => r.geo === r.surugaya).length;

const faqs = [
  { q: 'FFソフトの買取はどこが高いですか？', a: `${CHECKED}に駿河屋とゲオ宅配買取の公式ページで確認したところ、両社の価格を比べられた${pairs.length}組のうち、駿河屋が高いものが${surugayaWins}組、ゲオが高いものが${geoWins}組、同額が${ties}組でした。クライシス コア リユニオン、FF10/10-2 HD（Switch・PS4）、FF12 ザ ゾディアック エイジなどは駿河屋が高く、FF7 リバース（PS5・Switch 2）とFF I-VI コレクション メモリアルパッケージはゲオが高い結果です。駿河屋の宅配買取では通信買取手数料（660〜990円）が差し引かれるため、差が小さい場合は手取りでの比較をおすすめします。` },
  { q: 'FF7 リバースの買取価格はいくらですか？', a: `${CHECKED}の確認では、PS5版は駿河屋1,500円（新価格版2,000円）、ゲオ宅配買取2,000円でした。Switch 2版は駿河屋3,000円、ゲオ宅配買取3,500円です。PS5のデラックスエディションは駿河屋で5,100円、コレクターズエディションは16,000円でした。` },
  { q: 'FF16の買取価格はいくらですか？', a: `${CHECKED}の確認では、PS5の通常版は駿河屋が「メールにてお見積」で価格の表示がなく、ゲオ宅配買取は500円でした。駿河屋ではDELUXE EDITIONが3,100円、Collector’s Editionが13,000円です。` },
  { q: '限定版は通常版よりどれくらい高く売れますか？', a: `${CHECKED}の駿河屋の価格では、FF7 リバースのコレクターズエディション（16,000円）は通常版（1,500円）の約10.7倍、FF12 ザ ゾディアック エイジのコレクターズエディション（18,000円）は通常版（1,000円）の18倍でした。FF I-VI ピクセルリマスター FF35周年限定特装版はPS4版42,000円、Switch版27,000円です。限定版の価格は特典がそろった状態が前提のため、付属品の有無をご確認ください。` },
  { q: '同じタイトルでも機種によって価格は違いますか？', a: `違います。${CHECKED}の駿河屋の価格では、クライシス コア リユニオンはSwitch版2,000円・PS5版1,300円・PS4版1,100円、FF10/10-2 HDはSwitch 2版4,000円・Switch版3,500円・PS4版2,400円でした。今回確認したタイトルでは、Switch・Switch 2版がPS4・PS5版より高い傾向がありましたが、すべてのタイトルに当てはまるとは限りません。` },
  { q: 'SFC・PS1の旧作FFは売れますか？', a: `${CHECKED}の駿河屋では、PSのFF7 インターナショナルが1,000円、PSone Books版が600円でした。PSのFF7とSFCのFF6は「メールにてお見積」で、価格の表示はありませんでした。同日のゲオ宅配買取の検索結果には、これらの旧作は表示されませんでした。` },
];

const sources = [
  { label: '駿河屋公式の買取検索', url: 'https://www.suruga-ya.jp/kaitori/kaitori.html' },
  { label: 'ゲオの買取（宅配買取）', url: 'https://buy.geo-online.co.jp/' },
];

export default function FFPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: PAGE_TITLE, datePublished: '2026-03-15', dateModified: '2026-11-17', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'FFシリーズの買取価格' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ソフト別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            FF（ファイナルファンタジー）の買取価格【2026年11月】駿河屋・ゲオの実測比較
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: '#CBD5E1' }}>
            FFシリーズの主要タイトルについて、{CHECKED}に駿河屋とゲオ宅配買取の公式ページで買取価格を確認しました。両社の価格を比べられた{pairs.length}組のうち、<strong className="text-white">駿河屋が高いものが{surugayaWins}組、ゲオが高いものが{geoWins}組、同額が{ties}組</strong>です。FF7 リバースはゲオ、クライシス コア リユニオンやFF10/10-2 HDは駿河屋が高く、どちらが高いかはタイトルと機種によって異なります。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新：2026年11月17日（価格の確認日：{CHECKED}）</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 比較表 */}
        <section className="mb-12" id="compare">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />FFシリーズの買取価格 駿河屋・ゲオ比較【{CHECKED}・各社公式】</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>タイトル</th>
                  <th>機種</th>
                  <th>駿河屋</th>
                  <th>ゲオ宅配買取</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => {
                  const both = typeof row.surugaya === 'number' && typeof row.geo === 'number';
                  const sTop = both && (row.surugaya as number) >= (row.geo as number);
                  const gTop = both && (row.geo as number) >= (row.surugaya as number);
                  return (
                    <tr key={row.title + row.platform}>
                      <td className="font-bold text-sm">{row.title}</td>
                      <td className="text-sm whitespace-nowrap">{row.platform}</td>
                      <td className="text-sm whitespace-nowrap" style={sTop ? { color: 'var(--color-electric-green)', fontWeight: 700 } : undefined}>{fmt(row.surugaya)}</td>
                      <td className="text-sm whitespace-nowrap" style={gTop ? { color: 'var(--color-electric-green)', fontWeight: 700 } : undefined}>{fmt(row.geo)}</td>
                      <td className="text-xs">{row.note ?? ''}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3 leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={sources[0].url} target="_blank" rel="noopener noreferrer nofollow" className="underline">{sources[0].label}</a>、<a href={sources[1].url} target="_blank" rel="noopener noreferrer nofollow" className="underline">{sources[1].label}</a>の検索結果（いずれも{CHECKED}閲覧、タイトル名で検索）。駿河屋は国内版の通常の買取価格（美品・未開封の上乗せ前）、「見積」は「メールにてお見積」の表示で価格の掲載がないものです。ゲオは宅配買取の検索結果に表示される「最高価格」で、「—」は検索結果に表示がなかったものです。ゲオの宅配買取の価格は店頭買取の価格とは同一ではないと定められています。緑字は両社を比べて高い方（同額は両方）を示します。
          </p>
        </section>

        {/* 結果の読み取り */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />比較の結果について</h2>
          <div className="glass-card p-5 space-y-3">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              ゲオが高かったのは、FF7 リバース（PS5 2,000円・Switch 2 3,500円）とFF I-VI コレクション メモリアルパッケージ（Switch 9,500円・PS4 5,500円）の4組です。特にメモリアルパッケージのSwitch版は、ゲオ（9,500円）が駿河屋（5,000円）を4,500円上回りました。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              駿河屋が高かったのは、FF7 リメイク インターグレード、クライシス コア リユニオン（3機種）、FF10/10-2 HD（Switch・PS4）、FF12 ザ ゾディアック エイジ（通常版2機種・コレクターズエディション）などです。FF12 ザ ゾディアック エイジ コレクターズエディション（PS4）は、駿河屋18,000円に対しゲオ4,000円でした。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              FF16の通常版（PS5）とFF7 リメイク（PS4）は、駿河屋が「メールにてお見積」、ゲオがそれぞれ500円・100円でした。限定版の多くはゲオの検索結果に表示がなく、価格を確認できたのは駿河屋のみです。
            </p>
          </div>
        </section>

        {/* 旧作 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />PS・SFCの旧作FFの買取価格【{CHECKED}・駿河屋公式】</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>タイトル</th><th>機種</th><th>駿河屋</th></tr>
              </thead>
              <tbody>
                {retroRows.map((row) => (
                  <tr key={row.title + row.platform}>
                    <td className="font-bold text-sm">{row.title}</td>
                    <td className="text-sm">{row.platform}</td>
                    <td className="text-sm whitespace-nowrap">{fmt(row.surugaya)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋公式の買取検索（{CHECKED}閲覧）。同日のゲオ宅配買取の検索結果には、これらの旧作は表示されませんでした。</p>
        </section>

        {/* 売る前の確認事項 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />FFソフトを売る前の確認事項</h2>
          <div className="glass-card p-6">
            <ul className="text-sm space-y-3" style={{ color: 'var(--color-text-light)' }}>
              <li>・<strong>版を確認する</strong>：FF7 リバース（PS5）は駿河屋で通常版1,500円、新価格版2,000円、デラックスエディション5,100円、コレクターズエディション16,000円と、版によって価格が異なります（{CHECKED}確認）。</li>
              <li>・<strong>機種を確認する</strong>：今回確認したタイトルでは、同じ作品でもSwitch・Switch 2版がPS4・PS5版より高い傾向がありました（例：クライシス コア リユニオンの駿河屋価格 Switch 2,000円／PS5 1,300円／PS4 1,100円）。</li>
              <li>・<strong>限定版は特典をそろえる</strong>：限定版の価格は付属品がそろった状態が前提です。欠品があると減額の対象になります。</li>
              <li>・<strong>手数料を含めて比べる</strong>：駿河屋の宅配買取では通信買取手数料（660〜990円）が差し引かれます。ゲオの宅配買取は送料以外の手数料はかからないと定めています。</li>
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
            FFソフトの<span style={{ color: 'var(--color-electric-green)' }}>買取価格</span>の確認方法
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            FFシリーズは版と機種によって買取価格が異なります。売却前に、各社の最新の買取価格をご確認ください。
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
            <Link href="/software/dragon-quest/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ドラクエの買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>駿河屋・ゲオの実測比較</p>
            </Link>
            <Link href="/software/ps5-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS5ソフト買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS5ソフトの買取価格</p>
            </Link>
            <Link href="/software/high-value/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>高く売れるソフトランキング</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>公式買取価格で横断比較</p>
            </Link>
          </div>
        </section>

        <p className="text-xs mt-8 text-center" style={{ color: 'var(--color-text-light)' }}>最終更新：2026年11月17日</p>
        <AuthorBox />
      </div>
    </>
  );
}
