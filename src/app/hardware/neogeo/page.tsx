import FuruichiCta from '@/components/FuruichiCta';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = 'ネオジオの買取価格｜ネオジオCD 31,000円・ネオジオポケットカラー16,000円・NEOGEO mini 3,800円（駿河屋）【2026年11月17日実測】';
const DESCRIPTION =
  'ネオジオの買取価格を駿河屋の公式買取検索で2026年11月17日に確認しました。ネオジオCD本体31,000〜32,000円、ネオジオポケットカラー16,000〜28,000円、NEOGEO mini 3,800円です。ROMソフトの価格とSNK公式の収録内容も掲載しています。';

export const metadata: Metadata = {
  title: 'ネオジオの買取価格｜ネオジオCD 31,000円・ネオジオポケットカラー16,000円・NEOGEO mini 3,800円（駿河屋）【2026年11月17日実測】',
  description: DESCRIPTION,
  keywords: ['ネオジオ 買取', 'ネオジオ 買取価格', 'ネオジオCD 買取', 'ネオジオポケット 買取', 'NEOGEO mini 買取'],
  alternates: { canonical: 'https://gamekaitori-biyori.com/hardware/neogeo/' },
  openGraph: {
    images: ['/og.png'],
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const SURVEY_DATE = '2026年11月17日';
const SURUGAYA_SEARCH = 'https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=';
const SURUGAYA_RULES = 'https://www.suruga-ya.jp/man/hyou/kaitorihin.html';
const SNK_MINI = 'https://www.snk-corp.co.jp/neogeomini/';

type Row = { name: string; price: number; bihin: number | null };

// 駿河屋 公式買取検索「ネオジオ 本体」「NEOGEO mini」「ネオジオROM」の掲載価格（2026-11-17）
const groups: { label: string; query: string; rows: Row[] }[] = [
  {
    label: 'ネオジオCD',
    query: 'ネオジオ 本体',
    rows: [
      { name: 'ネオジオCD本体（トップローディングタイプ）', price: 32000, bihin: 38400 },
      { name: 'ネオジオCD本体 フロント', price: 31000, bihin: 37200 },
      { name: '［状態：ジャンク品］ネオジオCD本体', price: 3300, bihin: null },
    ],
  },
  {
    label: 'ネオジオポケット・ポケットカラー',
    query: 'ネオジオ 本体',
    rows: [
      { name: 'ネオジオポケット本体 サムライスピリッツ!限定スペシャルBOX', price: 42000, bihin: 48300 },
      { name: 'ネオジオポケットカラー パールブルー', price: 28000, bihin: 36400 },
      { name: 'ネオ・ジオポケットカラー本体 カモフラージュブルー', price: 28000, bihin: 36400 },
      { name: 'ネオ・ジオポケットカラー本体 プラチナブルー', price: 23000, bihin: 27600 },
      { name: 'ネオ・ジオポケットカラー本体（カーボンブラック）', price: 16000, bihin: 20800 },
      { name: '［状態：ジャンク品］ネオジオポケットカラー本体', price: 3000, bihin: null },
    ],
  },
  {
    label: 'ネオジオ（ROM）本体・周辺機器',
    query: 'ネオジオ 本体',
    rows: [
      { name: 'ネオジオマージャンコントローラー', price: 120000, bihin: 144000 },
      { name: '［状態：ジャンク品］ネオジオROM本体', price: 8500, bihin: 10200 },
      { name: 'ネオジオコントローラー（NGL-0）', price: 4300, bihin: null },
      { name: 'ネオジオ メモリーカード（NEO-IC8）', price: 2400, bihin: null },
    ],
  },
  {
    label: 'NEOGEO mini',
    query: 'NEOGEO mini',
    rows: [
      { name: 'NEOGEO mini 本体 サムライスピリッツ 特別限定セット', price: 35000, bihin: 42000 },
      { name: 'NEOGEO mini 本体 サムライスピリッツ限定版セット（覇王丸）', price: 15000, bihin: 17900 },
      { name: 'NEOGEO mini 本体 サムライスピリッツ限定版セット（橘右京）', price: 11000, bihin: 13300 },
      { name: 'NEOGEO mini 本体 サムライスピリッツ限定版セット（ナコルル）', price: 11000, bihin: 13200 },
      { name: 'NEOGEO mini 本体 クリスマス限定版', price: 7900, bihin: 9500 },
      { name: 'NEOGEO mini 本体 インターナショナル版', price: 4000, bihin: null },
      { name: 'NEOGEO mini 本体', price: 3800, bihin: null },
      { name: 'NEOGEO mini PAD 白', price: 2100, bihin: null },
      { name: 'NEOGEO mini PAD 黒', price: 1700, bihin: null },
    ],
  },
  {
    label: 'ROMカセット（ソフト）の例',
    query: 'ネオジオROM',
    rows: [
      { name: 'ネオジオカップ\'98 THE ROAD TO THE VICTORY', price: 450000, bihin: 481500 },
      { name: 'ザ・キング・オブ・ファイターズ96', price: 23000, bihin: 25300 },
      { name: 'ワールドヒーローズ2', price: 10000, bihin: 13000 },
      { name: '餓狼伝説スペシャル', price: 9000, bihin: 9000 },
      { name: '龍虎の拳2', price: 8800, bihin: null },
    ],
  },
];

const yen = (v: number) => `${v.toLocaleString('ja-JP')}円`;
const linkStyle = { color: 'var(--color-electric-green)', fontWeight: 700 } as const;

const faqs = [
  { q: 'ネオジオCDの買取価格はいくらですか？', a: '2026年11月17日に駿河屋の公式買取検索で確認した掲載価格は、トップローディングタイプが32,000円（美品38,400円）、フロントローディングが31,000円（美品37,200円）でした。ジャンク品は3,300円です。' },
  { q: 'NEOGEO miniはいくらで売れますか？', a: '同日の駿河屋の掲載価格は、通常の本体が3,800円、インターナショナル版が4,000円でした。サムライスピリッツの限定セットは11,000〜35,000円で、通常の本体より高く掲載されています。' },
  { q: '動かないネオジオ本体も売れますか？', a: '駿河屋にはジャンク品の商品があり、ネオジオROM本体8,500円、ネオジオCD本体3,300円、ネオジオポケットカラー本体3,000円が掲載されていました（2026年11月17日）。' },
  { q: 'NEOGEO miniには何本のゲームが入っていますか？', a: 'SNKの公式サイトでは、NEOGEO miniは40作品を収録し、NEOGEO mini INTERNATIONAL Ver.とは40タイトルのうち14タイトルが異なると案内されています（2026年11月17日確認）。' },
  { q: 'ROMソフトはどれくらいの価格がつきますか？', a: 'タイトルによって大きく異なります。同日の駿河屋の掲載では、『龍虎の拳2』8,800円、『ザ・キング・オブ・ファイターズ96』23,000円、『ネオジオカップ\'98 THE ROAD TO THE VICTORY』450,000円でした。' },
];

export default function NeogeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'ネオジオの買取価格｜ネオジオCD・ネオジオポケットカラー・NEOGEO mini（駿河屋）', datePublished: '2026-11-17', dateModified: '2026-11-17', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'ネオジオ 買取価格' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ネオジオの買取価格<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>ネオジオCD・ネオジオポケット・NEOGEO mini・ROMソフトを駿河屋の公式ページで確認【{SURVEY_DATE}実測】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ネオジオの買取価格は、{SURVEY_DATE}の駿河屋の公式買取検索でネオジオCD本体が31,000〜32,000円、ネオジオポケットカラーが16,000〜28,000円、NEOGEO miniが3,800円でした。同じ「ネオジオ」でも、機種によって買取価格の水準が大きく異なります。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：{SURVEY_DATE}（価格は同日に駿河屋の公式買取検索で確認）</p>
        </div>
        <FuruichiCta variant="strip" />
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：ネオジオCDは3万円台、NEOGEO miniは4,000円前後です</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ネオジオCD本体：</span>31,000〜32,000円（美品37,200〜38,400円）。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ネオジオポケットカラー：</span>本体色により16,000〜28,000円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>NEOGEO mini：</span>通常の本体3,800円。サムライスピリッツ限定セットは11,000〜35,000円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ROMソフト：</span>1本8,800円から450,000円まで、タイトルによる差が大きく出ています。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>掲載価格は付属品・状態による減額前の金額で、査定額を保証するものではありません。今回確認した検索結果（「ネオジオ 本体」「ネオジオROM」の各1ページ目）には、ジャンク品以外のネオジオROM本体（動作品）は表示されませんでした。</p>
        </section>

        {groups.map((g) => (
          <section className="mb-12" key={g.label}>
            <h2 className="section-heading mb-6"><span className="section-heading-bar" />{g.label}の買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
            <div className="overflow-x-auto">
              <table className="comparison-table">
                <thead><tr><th>商品</th><th>買取価格</th><th>美品</th></tr></thead>
                <tbody>
                  {g.rows.map((r) => (
                    <tr key={r.name}>
                      <td className="font-bold text-sm">{r.name}</td>
                      <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(r.price)}</td>
                      <td className="text-sm">{r.bihin ? yen(r.bihin) : '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              出典：<a href={`${SURUGAYA_SEARCH}${encodeURIComponent(g.query)}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 公式買取検索「{g.query}」</a>（{SURVEY_DATE}確認）。
            </p>
          </section>
        ))}

        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>実測から分かること</h2>
          <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ポケットカラーは色で最大12,000円の差：</span>カーボンブラック（16,000円）とパールブルー・カモフラージュブルー（28,000円）では12,000円の差がありました。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>NEOGEO miniは限定セットが通常版の約3〜9倍：</span>通常の本体3,800円に対し、サムライスピリッツ限定版セットは11,000〜15,000円、特別限定セットは35,000円でした。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ジャンク品でも値段がつく：</span>ネオジオROM本体はジャンク品で8,500円が掲載されており、動作しない本体でも買取の対象になっています。</li>
          </ul>
        </section>

        <section className="mb-12" id="mini">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />NEOGEO miniの収録内容（SNK公式）</h2>
          <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
            SNKの公式サイトでは、NEOGEO miniは「NEOGEO」のラインアップから40作品を収録し、『ザ・キング・オブ・ファイターズ』『餓狼伝説』『メタルスラッグ』などが含まれると案内されています。また、NEOGEO mini INTERNATIONAL Ver.とは40タイトルのうち14タイトルが異なります。駿河屋の買取検索でも、通常の本体（3,800円）とインターナショナル版（4,000円）は別の商品として掲載されていました。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SNK_MINI} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>SNK NEOGEO mini 公式サイト</a>（{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12" id="rules">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />査定で減額される条件（駿河屋の公式記載）</h2>
          <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
            駿河屋の減額基準リストでは、箱（ケース）・説明書・動作に必要な付属品機器の欠品は大幅な減額対象とされています。本体・付属品・パッケージの傷み・汚れ・日焼けも減額対象で、程度によっては買取不可となります。古い商品の経年劣化は減額対象とはならないと記載されています。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SURUGAYA_RULES} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 減額基準リスト</a>（{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />売る前に確認すること</h2>
          <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>機種と色を確認する：</span>ネオジオCDはローディング方式、ネオジオポケットカラーは本体色で価格が異なります。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>NEOGEO miniは国内版かインターナショナル版かを確認する：</span>収録タイトルが14本異なり、買取検索でも別の商品として扱われています。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ソフトは1本ずつ価格を調べる：</span>ROMカセットはタイトルによって価格差が大きいため、<Link href="/software/retro-soft/" style={linkStyle}>レトロゲームソフトの買取</Link>もあわせてご確認ください。</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary>{faq.q}</summary>
                <div className="faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) }) }} />
        </section>

        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連記事</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/hardware/retro/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>レトロゲーム機の買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ファミコン・スーファミ本体</p>
            </Link>
            <Link href="/hardware/saturn/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>セガサターンの買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>本体・スケルトン・Vサターン</p>
            </Link>
            <Link href="/hardware/pc-engine/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PCエンジンの買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>本体・DUO・CD-ROM2・mini</p>
            </Link>
          </div>
        </section>
      </div>

      <AuthorBox />
    </>
  );
}
