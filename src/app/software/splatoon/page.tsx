import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'
import { SeriesPriceTable, TodayBestBanner } from '@/components/PriceIndex'
import KaitoriWorldCta from '@/components/KaitoriWorldCta';

export const metadata: Metadata = {
  title: 'スプラトゥーンの買取価格｜スプラ3・2を駿河屋・ブックオフ・ゲオの公式価格で比較【2026年11月】',
  description:
    'スプラトゥーン3・2・レイダースの買取価格を、駿河屋・ブックオフ・ゲオの公式買取ページで2026年11月20日に確認した価格で比較しています。通常版・エキスパンション・パス付き・オクト・エキスパンション同梱版を掲載し、出典URLを明記しています。',
  keywords: ['スプラトゥーン 買取', 'スプラ3 買取価格', 'スプラトゥーン3 売る', 'スプラ2 買取', 'スプラトゥーン 相場'],
  openGraph: {
    images: ['/og.png'],
    title: 'スプラトゥーンの買取価格｜駿河屋・ブックオフ・ゲオの公式価格で比較【2026年11月】',
    description: 'スプラトゥーン3・2・レイダースの買取価格を、駿河屋・ブックオフ・ゲオの公式買取ページで2026年11月20日に確認した価格で比較しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

// 2026-11-20 各社公式買取ページで確認（推測値・比較サイトの値は使用しない。掲載がない店は「—」）
// 駿河屋=公式買取検索 search_buy?search_word=<JAN> の掲載価格（JAN・型番で照合）。「メールにてお見積」表示は価格非公表として扱う
// ブックオフ=高価買取情報 ゲーム（bookoff.co.jp/selllist/game/index.html〜index_7.html・「最終更新日 2026年11月19日」表記）の店舗買取価格
// ゲオ=高価買取品リスト Switch/Switch2（geo-online.co.jp/store_info/buy/Switch/・/Switch2/）の店頭参考買取価格（ヘッドレスChromeで取得）
const SURVEY_DATE_LABEL = '2026年11月20日';
const surugayaUrl = (jan: string) => `https://www.suruga-ya.jp/kaitori/search_buy?search_word=${jan}`;

const priceData = [
  { title: 'スプラトゥーン3（通常版）', platform: 'Switch', jan: '4902370550337', surugaya: '2,500円', bookoff: '2,400円', geo: '3,000円', note: '当サイトの10/15→11/19調査では、駿河屋3,000→2,500円・ブックオフ2,500→2,400円に下がり、ゲオは3,000円で変わっていません' },
  { title: 'スプラトゥーン3 + エキスパンション・パス', platform: 'Switch', jan: '4902370552287', surugaya: '5,500円', bookoff: '—', geo: '—', note: 'ブックオフ・ゲオの高価買取リストには掲載なし' },
  { title: 'スプラトゥーン2（通常版）', platform: 'Switch', jan: '4902370537253', surugaya: '価格の掲載なし', bookoff: '—', geo: '—', note: '駿河屋は「メールにてお見積」表示で価格の掲載がありません。ブックオフ・ゲオの高価買取リストにも掲載なし' },
  { title: 'スプラトゥーン2 + オクト・エキスパンション', platform: 'Switch', jan: '4902370548846', surugaya: '2,400円', bookoff: '—', geo: '—', note: 'ブックオフ・ゲオの高価買取リストには掲載なし' },
  { title: 'スプラトゥーン レイダース', platform: 'Switch 2', jan: '4902370554359', surugaya: '2,400円', bookoff: '2,000円', geo: '—', note: 'ゲオのSwitch2高価買取品リストには掲載なし' },
];

const shopComparison = [
  { shop: '駿河屋', kind: '公式買取検索の掲載価格（JANコードで検索）', url: 'https://www.suruga-ya.jp/kaitori/', urlLabel: 'suruga-ya.jp/kaitori/', scope: '上表の全タイトルを検索しました。スプラトゥーン2（通常版）は「メールにてお見積」表示のため価格を掲載していません' },
  { shop: 'ブックオフ', kind: '高価買取情報（ゲーム）の店舗買取価格。ページ上の表記は「最終更新日 2026年11月19日」です', url: 'https://www.bookoff.co.jp/selllist/game/index.html', urlLabel: 'bookoff.co.jp/selllist/game/', scope: '高価買取リストに掲載のあるタイトルのみ掲載しています' },
  { shop: 'ゲオ', kind: '高価買取品リスト（Switch・Switch2）の店頭参考買取価格', url: 'https://geo-online.co.jp/store_info/buy/Switch/', urlLabel: 'geo-online.co.jp/store_info/buy/Switch/・/Switch2/', scope: '高価買取品リストに掲載のあるタイトルのみ掲載しています。ゲオ宅配買取は2026年11月19日から新規受付を停止しているため、店頭の参考価格として掲載しています' },
];

const tips = [
  { title: 'スプラトゥーン3（通常版）はゲオの店頭参考価格が最も高い結果でした', description: '2026年11月20日の確認では、ゲオ3,000円・駿河屋2,500円・ブックオフ2,400円でした。当サイトの調査では、10月15日から11月19日にかけて駿河屋は500円、ブックオフは100円下がっています。売却前に、複数店の最新の価格をご確認ください。' },
  { title: 'エキスパンション・パス付きの版は駿河屋で価格が掲載されています', description: 'スプラトゥーン3 + エキスパンション・パスは駿河屋で5,500円と、同じ駿河屋の通常版（2,500円）より3,000円高い価格でした。ブックオフ・ゲオの高価買取リストには掲載がないため、両社では店頭での査定額をご確認ください。付属品の扱いは店舗ごとに異なるため、各社の買取条件もあわせてご確認ください。' },
  { title: 'スプラトゥーン2はオクト・エキスパンション同梱版かどうかをご確認ください', description: 'スプラトゥーン2（通常版）は、今回確認した3社とも価格の掲載がありませんでした（駿河屋は「メールにてお見積」表示）。オクト・エキスパンション同梱版は駿河屋で2,400円の価格が掲載されています。' },
  { title: 'Switch 2向けのスプラトゥーン レイダースも買取対象です', description: 'スプラトゥーン レイダース（Nintendo Switch 2、2026年7月23日発売）は、駿河屋2,400円・ブックオフ2,000円でした。ゲオのSwitch2高価買取品リストには2026年11月20日時点で掲載がありません。' },
];

const faqs = [
  { q: 'スプラトゥーンで現在最も高く売れるのはどれですか？', a: '2026年11月20日に当サイトが確認した範囲では、駿河屋のスプラトゥーン3 + エキスパンション・パス（5,500円）が最も高い価格でした。スプラトゥーン3（通常版）はゲオ3,000円・駿河屋2,500円・ブックオフ2,400円です。価格は日々変動するため、売却直前に各社の公式買取ページをご確認ください。' },
  { q: 'スプラ3の買取価格は下がっていますか？', a: '当サイトの調査では、スプラトゥーン3（通常版）は2026年10月15日から11月19日にかけて、駿河屋が3,000円から2,500円、ブックオフが2,500円から2,400円に下がりました。ゲオは3,000円で変わっていません。11月20日の確認でも同じ価格でした。今後の値動きは予測できないため、売却前に最新の価格をご確認ください。' },
  { q: 'スプラ2はいくらで売れますか？', a: 'スプラトゥーン2（通常版）は、2026年11月20日に確認した駿河屋・ブックオフ・ゲオのいずれも価格の掲載がありませんでした（駿河屋は「メールにてお見積」表示）。オクト・エキスパンション同梱版は駿河屋で2,400円です。通常版は店頭または見積もりで価格をご確認ください。' },
  { q: 'スプラ3の通常版とパス付きでは、買取価格はどのくらい違いますか？', a: '駿河屋では、通常版2,500円に対しエキスパンション・パス付きは5,500円で、3,000円の差がありました（2026年11月20日確認）。ブックオフ・ゲオの高価買取リストにはパス付きの掲載がないため、両社での価格差は確認できていません。' },
];

const PAGE_TITLE = 'スプラトゥーンの買取価格｜スプラ3・2を駿河屋・ブックオフ・ゲオの公式価格で比較【2026年11月】';

export default function SplatoonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": PAGE_TITLE, "datePublished": "2026-06-18", "dateModified": "2026-11-20", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'スプラトゥーンの買取価格' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>シリーズ別買取価格</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">スプラトゥーンの買取価格</h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            スプラトゥーン3（通常版／エキスパンション・パス付き）、スプラトゥーン2（通常版／オクト・エキスパンション同梱版）、スプラトゥーン レイダースの買取価格を、駿河屋・ブックオフ・ゲオの公式買取ページで確認した価格で比較しています。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>調査日: {SURVEY_DATE_LABEL}（駿河屋・ブックオフ・ゲオの公式買取ページで確認）</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/compare/kaitori-ranking/" className="btn-primary py-2.5 px-6">おすすめ買取サービスを見る</Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 店舗横断の実測価格（価格DBから動的挿入） */}
        <TodayBestBanner keyword="スプラトゥーン" />
        <SeriesPriceTable keyword="スプラトゥーン" heading="スプラトゥーンの店舗別 買取価格【公式価格の実測データ】" />

        {/* Price Table */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />スプラトゥーン主要タイトルの店舗別買取価格（{SURVEY_DATE_LABEL}確認）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>タイトル</th><th>ハード</th><th>駿河屋</th><th>ブックオフ</th><th>ゲオ（店頭参考）</th></tr>
              </thead>
              <tbody>
                {priceData.map((g) => (
                  <tr key={g.title + g.platform}>
                    <td className="font-bold text-sm">{g.title}{g.note && <span className="block text-xs font-normal" style={{ color: 'var(--color-text-light)' }}>{g.note}</span>}</td>
                    <td className="text-sm">{g.platform}</td>
                    <td className="text-sm"><a href={surugayaUrl(g.jan)} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>{g.surugaya}</a></td>
                    <td className="text-sm">{g.bookoff}</td>
                    <td className="text-sm">{g.geo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋 公式買取検索（JANコードで検索・価格のリンク先）、ブックオフ 高価買取情報（ゲーム）、ゲオ 高価買取品リスト（Switch・Switch2）。いずれも{SURVEY_DATE_LABEL}に当サイトが確認した掲載価格です。「—」は各社の高価買取リストに掲載がなかったことを示します。価格は完品を前提とした参考価格で、状態・在庫により変動します。売却前に、各社の公式買取ページにて最新の価格をご確認ください。</p>
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
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>確認日：{SURVEY_DATE_LABEL}。当サイトでは、各社の公式ページで確認できた価格のみを掲載しています。</p>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />スプラトゥーンを高く売るコツ</h2>
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
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>スプラトゥーンを<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>で売るために</h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>エキスパンション・パス付きや同梱版かどうか、また店舗によって買取価格は異なります。売却前に、複数店の公式買取価格をご確認ください。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/compare/kaitori-ranking/" className="btn-primary py-3 px-8">おすすめランキングを見る</Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連するソフト買取ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/software/high-value/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>高く売れるソフトランキング</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>公式買取価格で横断比較</p>
            </Link>
            <Link href="/software/zelda/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゼルダの伝説買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>シリーズの相場一覧</p>
            </Link>
            <Link href="/software/switch-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switchソフト買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>人気タイトルの買取相場</p>
            </Link>
          </div>
        </section>
        <KaitoriWorldCta compact />
        <AuthorBox />
      </div>
    </>
  );
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/software/high-value/" className="block bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl p-5 text-center shadow hover:opacity-95 transition">
            <span className="font-bold text-lg">📈 最新の「高く売れるゲームソフト」ランキングを見る</span>
            <span className="block text-sm opacity-90 mt-1">ブックオフ・ゲオ・駿河屋の公式買取価格を定期的に実測更新中</span>
          </Link>
        </div>
      </section>
}
