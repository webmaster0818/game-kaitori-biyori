import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';
import KaitoriWorldCta from '@/components/KaitoriWorldCta';

const PAGE_TITLE = 'マリオカート8 デラックスの買取価格【2026年11月】駿河屋・ゲオ・ブックオフの実測比較';
const CHECKED = '2026年11月17日';
const DESCRIPTION =
  'マリオカート8 デラックス（Switch）の買取価格を2026年11月17日に駿河屋・ゲオ宅配買取・ブックオフの公式ページで確認しました。通常版はゲオ宅配買取の2,000円、コース追加パス同梱版は駿河屋とゲオの6,000円が最も高い価格です。';

// 2026-11-17 に各社公式の買取検索で当編集部が確認した値（国内版パッケージ）
// 駿河屋: suruga-ya.jp/kaitori の検索結果に表示される買取価格（美品・未開封の上乗せ前）
// ゲオ: buy.geo-online.co.jp（ゲオの宅配買取）の検索結果に表示される「最高価格」
// ブックオフ宅配: sell.bookoff.co.jp の買取価格検索に表示される「参考買取価格」
// ブックオフ店舗: bookoff.co.jp「ゲームの高価買取情報」（最終更新日 2026年11月12日の表記）
type Price = number | null;
type Row = { edition: string; code: string; surugaya: Price; geo: Price; bookoffTakuhai: Price; bookoffStore: Price };
const rows: Row[] = [
  { edition: '通常版', code: 'HAC-P-AABPA', surugaya: 1800, geo: 2000, bookoffTakuhai: 1500, bookoffStore: 1500 },
  { edition: '＋コース追加パス（同梱版）', code: 'HAC-P-AABPK', surugaya: 6000, geo: 6000, bookoffTakuhai: 5500, bookoffStore: null },
];
const shops = [
  { key: 'surugaya', label: '駿河屋' },
  { key: 'geo', label: 'ゲオ宅配買取' },
  { key: 'bookoffTakuhai', label: 'ブックオフ宅配買取' },
  { key: 'bookoffStore', label: 'ブックオフ店舗' },
] as const;
type ShopKey = (typeof shops)[number]['key'];
function fmt(v: Price) {
  return v === null ? '掲載なし' : `${v.toLocaleString()}円`;
}
function best(row: Row): ShopKey[] {
  const vals = shops.map((s) => [s.key, row[s.key]] as const).filter((e): e is readonly [ShopKey, number] => typeof e[1] === 'number');
  const max = Math.max(...vals.map((e) => e[1]));
  return vals.filter((e) => e[1] === max).map((e) => e[0]);
}

const sources = [
  { name: '駿河屋', url: 'https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=%E3%83%9E%E3%83%AA%E3%82%AA%E3%82%AB%E3%83%BC%E3%83%888%20%E3%83%87%E3%83%A9%E3%83%83%E3%82%AF%E3%82%B9', label: '駿河屋 買取検索「マリオカート8 デラックス」' },
  { name: 'ゲオ', url: 'https://buy.geo-online.co.jp/search/result/?word=%E3%83%9E%E3%83%AA%E3%82%AA%E3%82%AB%E3%83%BC%E3%83%888', label: 'ゲオの買取（宅配買取）検索「マリオカート8」' },
  { name: 'ブックオフ宅配買取', url: 'https://sell.bookoff.co.jp/online/search/keyword/%E3%83%9E%E3%83%AA%E3%82%AA%E3%82%AB%E3%83%BC%E3%83%888', label: 'ブックオフ宅配買取 買取価格検索「マリオカート8」' },
  { name: 'ブックオフ店舗', url: 'https://www.bookoff.co.jp/selllist/game/index.html', label: 'ブックオフ「ゲームの高価買取情報」' },
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: DESCRIPTION,
  keywords: ['マリオカート 買取', 'マリオカート8 買取', 'マリオカート8 デラックス 買取', 'マリカ8 買取価格', 'マリオカート8 デラックス コース追加パス 買取'],
  openGraph: {
    images: ['/og.png'],
    title: PAGE_TITLE,
    description: '駿河屋・ゲオ宅配買取・ブックオフの公式買取価格を2026年11月17日に確認し、通常版とコース追加パス同梱版を比較しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

export default function MarioKartPage() {
  const faqs = [
    {
      q: 'マリオカート8 デラックスの買取はどこが高いですか？',
      a: `${CHECKED}に各社公式の買取検索で確認したところ、通常版はゲオ宅配買取の2,000円が最も高く、駿河屋1,800円、ブックオフ（宅配買取・店舗）1,500円の順でした。＋コース追加パス同梱版は駿河屋とゲオ宅配買取が同額の6,000円、ブックオフ宅配買取が5,500円です。駿河屋の宅配買取では通信買取手数料（660〜990円）が差し引かれるため、手取りで比べる場合はこの点も考慮が必要です。`,
    },
    {
      q: '「コース追加パス」同梱版はどのくらい高く売れますか？',
      a: `${CHECKED}の確認では、＋コース追加パス同梱版（HAC-P-AABPK）の買取価格は通常版の約3.0〜3.7倍でした（駿河屋6,000円／通常版1,800円、ゲオ宅配買取6,000円／2,000円、ブックオフ宅配買取5,500円／1,500円）。ダウンロードで購入したコース追加パスはニンテンドーアカウントに紐づくため、ソフトと一緒に売ることはできません。パッケージの表記で版をご確認ください。`,
    },
    {
      q: 'マリオカート ワールド（Switch 2）の買取価格はどこで確認できますか？',
      a: 'Nintendo Switch 2用のマリオカート ワールドは、別ページ「マリオカート ワールドの買取価格」で掲載しています。本ページはNintendo Switch用のマリオカート8 デラックスを対象としています。',
    },
    {
      q: '買取価格は変わりますか？',
      a: `変わります。当サイトが2026年10月15日に駿河屋公式で確認した価格は通常版2,500円・＋コース追加パス同梱版5,500円で、${CHECKED}には通常版1,800円（700円下落）・同梱版6,000円（500円上昇）でした。価格の上下を予測することは難しいため、売却前に各社の最新価格をご確認ください。`,
    },
    {
      q: 'Switch本体とのセット（同梱版）の買取価格は掲載していますか？',
      a: `${CHECKED}に駿河屋・ゲオ宅配買取・ブックオフ宅配買取で「マリオカート8 デラックスセット」を検索しましたが、本体同梱版は単独の商品として表示されなかったため、価格は未確認です。本体の買取価格は各社の本体の買取ページでご確認ください。`,
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: PAGE_TITLE, datePublished: '2026-08-14', dateModified: '2026-11-17', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'マリオカート8 デラックスの買取価格' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>タイトル別買取価格</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">マリオカート8 デラックスの買取価格【2026年11月】駿河屋・ゲオ・ブックオフの実測比較</h1>
          <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: '#CBD5E1' }}>
            {CHECKED}に駿河屋・ゲオ宅配買取・ブックオフの公式買取ページで確認したところ、通常版は<strong className="text-white">ゲオ宅配買取の2,000円</strong>、＋コース追加パス同梱版は<strong className="text-white">駿河屋とゲオ宅配買取の6,000円</strong>が最も高い価格でした。
          </p>
          <p className="text-xs leading-relaxed" style={{ color: '#94A3B8' }}>
            本ページはNintendo Switch用の「マリオカート8 デラックス」を対象としています。Nintendo Switch 2用の「マリオカート ワールド」は<Link href="/software/mario-kart-world/" className="underline text-white">マリオカート ワールドの買取価格</Link>のページに掲載しています。
          </p>
          <p className="text-xs mt-2" style={{ color: '#94A3B8' }}>最終更新：2026年11月17日（価格の確認日：{CHECKED}）</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-12" id="compare">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />マリオカート8 デラックスの店舗別 買取価格【{CHECKED}・各社公式】</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>版（型番）</th>
                  {shops.map((s) => <th key={s.key}>{s.label}</th>)}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => {
                  const top = best(row);
                  return (
                    <tr key={row.code}>
                      <td className="font-bold text-sm">{row.edition}<br /><span className="text-xs font-normal">{row.code}</span></td>
                      {shops.map((s) => (
                        <td key={s.key} className="text-sm whitespace-nowrap" style={top.includes(s.key) ? { color: 'var(--color-electric-green)', fontWeight: 700 } : undefined}>
                          {fmt(row[s.key])}{top.includes(s.key) && '（最高値）'}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3 leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
            出典（いずれも{CHECKED}閲覧）：
            {sources.map((s, i) => (
              <span key={s.url}>{i > 0 && '／'}<a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="underline">{s.label}</a></span>
            ))}
            。駿河屋は検索結果に表示される買取価格（美品・未開封の上乗せ前）、ゲオは宅配買取の検索結果に表示される「最高価格」、ブックオフ宅配買取は「参考買取価格」、ブックオフ店舗は「ゲームの高価買取情報」の掲載価格（最終更新日 2026年11月12日の表記）です。ブックオフ店舗の一覧には＋コース追加パス同梱版の掲載がありませんでした。各社とも、商品の状態や在庫状況により実際の買取価格は変動すると記載しています。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />比較の結果について</h2>
          <div className="glass-card p-5 space-y-3">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              通常版は、ゲオ宅配買取（2,000円）が駿河屋（1,800円）を200円、ブックオフ（1,500円）を500円上回りました。＋コース追加パス同梱版は駿河屋とゲオ宅配買取が同額の6,000円で、ブックオフ宅配買取（5,500円）より500円高い結果です。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              手取りで比べる際は手数料の扱いにご注意ください。駿河屋の宅配買取では通信買取手数料（660〜990円）が差し引かれます。ゲオの宅配買取は送料以外の手数料はかからないと定めており、ブックオフ宅配買取は公式サイトで送料・手数料を無料と案内しています（{CHECKED}確認）。
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />通常版と「＋コース追加パス」同梱版の価格差</h2>
          <div className="glass-card p-5">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              マリオカート8 デラックスには、通常版（HAC-P-AABPA）のほかに「＋コース追加パス」同梱版（HAC-P-AABPK・2023年10月6日発売）があり、買取価格が大きく異なります。{CHECKED}の確認では、同梱版は通常版の約3.0〜3.7倍（駿河屋6,000円／1,800円、ゲオ宅配買取6,000円／2,000円、ブックオフ宅配買取5,500円／1,500円）でした。パッケージの表記で版を確認してから売却先を選ぶことをおすすめします。
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />前回確認時（2026年10月15日）からの変化</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>版</th><th>店舗</th><th>10月15日</th><th>11月17日</th><th>差</th></tr>
              </thead>
              <tbody>
                <tr><td className="text-sm">通常版</td><td className="text-sm">駿河屋</td><td className="text-sm">2,500円</td><td className="text-sm">1,800円</td><td className="text-sm">−700円</td></tr>
                <tr><td className="text-sm">通常版</td><td className="text-sm">ブックオフ店舗</td><td className="text-sm">1,500円</td><td className="text-sm">1,500円</td><td className="text-sm">±0円</td></tr>
                <tr><td className="text-sm">＋コース追加パス</td><td className="text-sm">駿河屋</td><td className="text-sm">5,500円</td><td className="text-sm">6,000円</td><td className="text-sm">＋500円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>10月15日の値は当サイトが同じ公式ページで確認した記録です。10月15日時点では、ゲオの高価買取リストに通常版の掲載がありませんでした。</p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />マリオカート8 デラックスを売る前の確認事項</h2>
          <div className="space-y-4">
            {[
              { title: '版（通常版／＋コース追加パス同梱版）を確認する', description: '上表のとおり、同梱版は通常版の約3.0〜3.7倍の買取価格でした（2026年11月17日確認）。型番（HAC-P-AABPA／HAC-P-AABPK）でも判別できます。' },
              { title: '売却先は版ごとに選ぶ', description: '2026年11月17日の確認では、通常版はゲオ宅配買取、同梱版は駿河屋とゲオ宅配買取が最も高い価格でした。版によって最も高い店舗が異なる場合があります。' },
              { title: '付属品をそろえる', description: '駿河屋の表示価格は完品（付属品あり）かつ状態良好の場合の価格です。ケースの破損や付属品の欠品は減額の対象になります。' },
              { title: '売却直前に最新価格を確認する', description: '駿河屋の通常版は、2026年10月15日の2,500円から11月17日の1,800円に下がりました。価格は日々変動するため、売却前に各社の最新価格をご確認ください。' },
            ].map((tip, i) => (
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

        <section className="glass-card-dark p-8 text-center">
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>マリオカート8 デラックスの<span style={{ color: 'var(--color-electric-green)' }}>売却先</span>の選び方</h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>版の違いと店舗によって買取価格が異なります。売却前に、各社の最新の買取価格をご確認ください。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/compare/kaitori-ranking/" className="btn-primary py-3 px-8">おすすめランキングを見る</Link>
          </div>
        </section>

        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連するソフト買取ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/software/mario-kart-world/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>マリオカート ワールドの買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>Nintendo Switch 2用ソフト</p>
            </Link>
            <Link href="/software/smash-bros/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>スマブラSPの買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>公式価格の実測比較</p>
            </Link>
            <Link href="/software/high-value/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>高く売れるソフトランキング</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>公式買取価格で横断比較</p>
            </Link>
          </div>
        </section>
        <KaitoriWorldCta compact />
        <AuthorBox />
      </div>
    </>
  );
}
