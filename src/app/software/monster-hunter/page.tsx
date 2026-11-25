import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'
import KaitoriWorldCta from '@/components/KaitoriWorldCta';

export const metadata: Metadata = {
  title: 'モンハンの買取価格はいくら？ワイルズ・ライズの相場を店舗横断で比較・売り時も解説',
  description:
    'モンハンワイルズ・ストーリーズ3・ストーリーズ2・ライズ・アイスボーンの買取価格を、駿河屋・ブックオフ・ゲオの公式買取ページで2026年11月25日に確認した価格で比較しています。JANコードと出典URLを明記しています。',
  keywords: ['モンハン 買取', 'モンスターハンター 買取価格', 'モンハンワイルズ 買取', 'モンハンライズ 売る', 'モンハン 相場'],
  openGraph: {
    images: ['/og.png'],
    title: 'モンハンの買取価格はいくら？店舗横断で相場比較',
    description: 'モンハンシリーズ10商品の買取価格を、駿河屋・ブックオフ・ゲオの公式買取ページで2026年11月25日に確認した価格で比較しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

// 2026-11-25 各社公式買取ページで確認（推測値・比較サイトの値は使用しない。掲載がない店は「—」）
// 駿河屋=公式買取検索 search_buy?search_word=<JAN> の掲載価格（JAN・型番で照合）。「メールにてお見積」表示は価格非公表として扱う
// ブックオフ=高価買取情報 ゲーム（bookoff.co.jp/selllist/game/index.html〜index_6.html・「最終更新日 2026年11月19日」表記）。モンハン作品の掲載なし（PlayStation系ソフトの掲載もなし）
// ゲオ=高価買取品リスト PS5/Switch/Switch2（geo-online.co.jp/store_info/buy/PS5/・/Switch/・/Switch2/）をヘッドレスChromeで取得。モンハン作品の掲載なし（PS4のリストは存在しない）
// Switch 2版ワイルズの発売予定日=カプコン公式 https://www.monsterhunter.com/wilds/ja-jp/ の「2026年12月4日（金）発売予定（Nintendo Switch™ 2）」表記（2026-11-25確認）
// data/price-history.csv（当サイトの週次実測）にモンハン作品の記録はなし
const SURVEY_DATE_LABEL = '2026年11月25日';
const surugayaUrl = (jan: string) => `https://www.suruga-ya.jp/kaitori/search_buy?search_word=${jan}`;

const priceData = [
  { title: 'モンスターハンターワイルズ', platform: 'PS5', jan: '4976219131797', surugaya: '1,000円', bookoff: '—', geo: '—', note: 'ゲオのPS5高価買取品リストには掲載なし' },
  { title: 'モンスターハンターワイルズ デラックスエディション', platform: 'Switch 2', jan: '4976219141383', surugaya: '価格の掲載なし', bookoff: '—', geo: '—', note: '駿河屋は「メールにてお見積」表示。カプコン公式サイトではNintendo Switch 2版は2026年12月4日発売予定と案内されています' },
  { title: 'モンスターハンターストーリーズ3 -運命の双竜-', platform: 'PS5', jan: '4976219137737', surugaya: '1,800円', bookoff: '—', geo: '—', note: '型番 ELJM-30820' },
  { title: 'モンスターハンターストーリーズ3 -運命の双竜-', platform: 'Switch 2', jan: '4976219137744', surugaya: '2,000円', bookoff: '—', geo: '—', note: '型番 POT-P-AAWXA。ゲオのSwitch2高価買取品リストには掲載なし' },
  { title: 'モンスターハンターストーリーズ2 〜破滅の翼〜', platform: 'Switch', jan: '4976219118156', surugaya: '1,200円', bookoff: '—', geo: '—', note: '型番 HAC-P-AS44A（通常版）' },
  { title: 'モンスターハンターライズ', platform: 'Switch', jan: '4976219115803', surugaya: '400円', bookoff: '—', geo: '—', note: '型番 HAC-P-AXSEA（通常版）' },
  { title: 'モンスターハンターライズ ＋ サンブレイク セット', platform: 'Switch', jan: '4976219122177', surugaya: '700円', bookoff: '—', geo: '—', note: '型番 HAC-4-AXSEAR1' },
  { title: 'モンスターハンターライズ＋サンブレイク セット Best Price', platform: 'Switch', jan: '4976219135603', surugaya: '1,100円', bookoff: '—', geo: '—', note: '型番 HAC-4-AXSEAR3。駿河屋の商品名に「サンブレイクのDLコードは使用できません」と記載があります' },
  { title: 'モンスターハンターライズ モンスターハンターストーリーズ2 ツインパック', platform: 'Switch', jan: '4976219120777', surugaya: '2,100円', bookoff: '—', geo: '—', note: '型番 CPCS-01176' },
  { title: 'モンスターハンターワールド：アイスボーン マスターエディション Best Price', platform: 'PS4', jan: '4976219114011', surugaya: '700円', bookoff: '—', geo: '—', note: '型番 PLJM-16710。通常版（JAN 4976219102018）は駿河屋で「メールにてお見積」表示' },
];

const shopComparison = [
  { shop: '駿河屋', kind: '公式買取検索の掲載価格（JANコードで検索）', url: 'https://www.suruga-ya.jp/kaitori/', urlLabel: 'suruga-ya.jp/kaitori/', scope: '上表の全商品をJANコードで検索しました。「メールにてお見積」表示の商品は「価格の掲載なし」としています' },
  { shop: 'ブックオフ', kind: '高価買取情報（ゲーム）の店舗買取価格。ページ上の表記は「最終更新日 2026年11月19日」です', url: 'https://www.bookoff.co.jp/selllist/game/index.html', urlLabel: 'bookoff.co.jp/selllist/game/', scope: '2026年11月25日時点の高価買取リスト（Switch・Switch2・DS・3DS・本体）にモンハン作品の掲載はありませんでした' },
  { shop: 'ゲオ', kind: '高価買取品リスト（PS5・Switch・Switch2）の店頭参考買取価格', url: 'https://geo-online.co.jp/store_info/buy/PS5/', urlLabel: 'geo-online.co.jp/store_info/buy/PS5/・/Switch/・/Switch2/', scope: '3つのリストのいずれにもモンハン作品の掲載はありませんでした。PS4の高価買取品リストはありません。ゲオ宅配買取は2026年11月19日から新規受付を停止しています' },
  { shop: 'カプコン（発売情報）', kind: 'モンスターハンターワイルズ公式サイトの発売日表記', url: 'https://www.monsterhunter.com/wilds/ja-jp/', urlLabel: 'monsterhunter.com/wilds/ja-jp/', scope: '「2026年12月4日（金）発売予定（Nintendo Switch™ 2）」の表記を確認しました（価格情報ではありません）' },
];

const tips = [
  { title: '同じタイトルでも版（型番）ごとに価格が異なります', description: '駿河屋では、モンスターハンターライズ（通常版・HAC-P-AXSEA）が400円、ライズ＋サンブレイク セット（HAC-4-AXSEAR1）が700円、ライズ＋サンブレイク セット Best Price（HAC-4-AXSEAR3）が1,100円でした（2026年11月25日確認）。お手持ちのパッケージの型番・JANコードで検索してから価格をご確認ください。' },
  { title: 'ワイルズはPS5版とSwitch 2版で状況が異なります', description: 'PS5版は駿河屋で1,000円の価格が掲載されています。Switch 2版（デラックスエディション）は、カプコン公式サイトで2026年12月4日発売予定と案内されており、駿河屋では「メールにてお見積」表示で価格の掲載がありませんでした。発売後の価格は、各社の公式買取ページでご確認ください。' },
  { title: 'ストーリーズ3はSwitch 2版とPS5版で200円の差がありました', description: 'モンスターハンターストーリーズ3は、駿河屋でSwitch 2版2,000円・PS5版1,800円でした。ハードの異なる版をお持ちの場合も、それぞれのJANコードで価格をご確認ください。' },
  { title: 'ブックオフ・ゲオでは店頭での査定額をご確認ください', description: '2026年11月25日時点で、ブックオフの高価買取情報（ゲーム）とゲオの高価買取品リスト（PS5・Switch・Switch2）には、モンハン作品の掲載がありませんでした。両社で売却する場合は、店頭での査定額をご確認ください。ゲオ宅配買取は2026年11月19日から新規受付を停止しています。' },
];

const faqs = [
  { q: 'モンハンで現在最も高く売れるのはどれですか？', a: '2026年11月25日に当サイトが駿河屋で確認した範囲では、モンスターハンターライズ モンスターハンターストーリーズ2 ツインパック（2,100円）、モンスターハンターストーリーズ3（Switch 2版・2,000円）、同PS5版（1,800円）の順でした。ブックオフ・ゲオの高価買取リストにはモンハン作品の掲載がありませんでした。価格は日々変動するため、売却直前に各社の公式買取ページをご確認ください。' },
  { q: 'モンハンワイルズ（PS5）の買取価格はいくらですか？', a: '2026年11月25日の確認では、駿河屋の買取価格は1,000円でした（JAN 4976219131797）。ブックオフの高価買取情報、ゲオのPS5高価買取品リストには掲載がありませんでした。' },
  { q: 'Switch 2版のモンハンワイルズは発売されていますか？', a: 'カプコンの「モンスターハンターワイルズ」公式サイトでは、Nintendo Switch 2版の発売日を2026年12月4日（金）発売予定と案内しています（2026年11月25日確認）。駿河屋のSwitch 2版デラックスエディション（JAN 4976219141383）は「メールにてお見積」表示で、価格の掲載はありませんでした。' },
  { q: 'モンハンライズ・サンブレイクはいくらで売れますか？', a: '駿河屋では、ライズ（通常版）400円、ライズ＋サンブレイク セット700円、ライズ＋サンブレイク セット Best Price 1,100円でした（2026年11月25日確認）。Best Price版は駿河屋の商品名に「サンブレイクのDLコードは使用できません」と記載があります。版によって価格が異なるため、JANコードでご確認ください。' },
  { q: 'アイスボーン マスターエディションは売れますか？', a: '駿河屋では、Best Price版（JAN 4976219114011）が700円でした。通常版（JAN 4976219102018）は「メールにてお見積」表示で、価格の掲載はありませんでした（2026年11月25日確認）。' },
];

const PAGE_TITLE = 'モンハンの買取価格はいくら？ワイルズ・ライズの相場を店舗横断で比較・売り時も解説';

export default function MonsterHunterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": PAGE_TITLE, "datePublished": "2026-06-18", "dateModified": "2026-11-25", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'モンハンの買取価格' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>シリーズ別買取価格</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">モンハンの買取価格</h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            モンスターハンターワイルズ（PS5／Switch 2）、ストーリーズ3（PS5／Switch 2）、ストーリーズ2、ライズ／サンブレイク、ワールド：アイスボーンの買取価格を、駿河屋・ブックオフ・ゲオの公式買取ページで確認した価格で比較しています。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>調査日: {SURVEY_DATE_LABEL}（駿河屋・ブックオフ・ゲオの公式買取ページで確認）</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/compare/kaitori-ranking/" className="btn-primary py-2.5 px-6">おすすめ買取サービスを見る</Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Price Table */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />モンハン主要タイトルの店舗別買取価格（{SURVEY_DATE_LABEL}確認）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>タイトル</th><th>ハード</th><th>駿河屋</th><th>ブックオフ</th><th>ゲオ（店頭参考）</th></tr>
              </thead>
              <tbody>
                {priceData.map((g) => (
                  <tr key={g.jan}>
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
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋 公式買取検索（JANコードで検索・価格のリンク先）、ブックオフ 高価買取情報（ゲーム）、ゲオ 高価買取品リスト（PS5・Switch・Switch2）。いずれも{SURVEY_DATE_LABEL}に当サイトが確認した掲載価格です。「—」は各社の高価買取リストに掲載がなかったことを示します。価格は完品を前提とした参考価格で、状態・在庫により変動します。売却前に、各社の公式買取ページにて最新の価格をご確認ください。</p>
        </section>

        {/* Sources */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />価格の確認方法と出典</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>確認先</th><th>確認した内容</th><th>出典</th><th>掲載範囲</th></tr>
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
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>確認日：{SURVEY_DATE_LABEL}。当サイトでは、各社の公式ページで確認できた価格のみを掲載しています。当サイトの週次調査（価格履歴）にはモンハン作品の記録がないため、過去からの値動きは掲載していません。</p>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />モンハンを売る前に確認したいこと</h2>
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
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>モンハンを<span style={{ color: 'var(--color-electric-green)' }}>納得の価格</span>で売却するために</h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>同じタイトルでも、ハードや版（型番）によって買取価格は異なります。売却前に、JANコードで複数店の公式買取価格をご確認ください。</p>
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
            <Link href="/software/ps5-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS5ソフト買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最新タイトルの買取価格</p>
            </Link>
            <Link href="/software/zelda/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゼルダの伝説買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>シリーズの価格一覧</p>
            </Link>
            <Link href="/price-index/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取価格インデックス</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>実測データにもとづく店舗別の最高値</p>
            </Link>
            <Link href="/review/kaitori-world/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取ワールドの評判</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>人気タイトルを高く売る業者</p>
            </Link>
            <Link href="/condition-guide/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>状態別 買取許容度マップ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なし・傷ありの査定影響</p>
            </Link>
          </div>
        </section>
        <KaitoriWorldCta compact />
        <AuthorBox />
      </div>
    </>
  );
}
