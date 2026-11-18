import FuruichiCta from '@/components/FuruichiCta';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = 'メガドライブの買取価格｜本体13,000円・メガドライブ2 18,000円・ミニ2 16,000円（駿河屋）【2026年11月18日実測】';
const DESCRIPTION =
  'メガドライブの買取価格を駿河屋の公式買取検索で2026年11月18日に確認しました。本体（HAA-2510）13,000円、メガドライブ2（HAA-2502）18,000円、メガドライブミニ2 16,000円、ジャンク品1,000円です。メガCD・スーパー32X・ワンダーメガの価格と減額条件もまとめています。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['メガドライブ 買取', 'メガドライブ 買取価格', 'メガドライブ 本体 買取', 'メガドライブミニ 買取', 'メガCD 買取'],
  alternates: { canonical: 'https://gamekaitori-biyori.com/hardware/megadrive/' },
  openGraph: {
    images: ['/og.png'],
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const SURVEY_DATE = '2026年11月18日';
const SURUGAYA_SEARCH = 'https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=';
const SURUGAYA_RULES = 'https://www.suruga-ya.jp/man/hyou/kaitorihin.html';

// 駿河屋 公式買取検索「メガドライブ 本体」「メガドライブミニ」の掲載価格（2026-11-18）。bihin は「美品」欄の価格（無い商品は null）
const bodies = [
  { name: 'メガドライブ本体', code: 'HAA-2510', release: '1988/10/29', price: 13000, bihin: 15600 },
  { name: 'メガドライブ2 本体', code: 'HAA-2502', release: '1993/04/23', price: 18000, bihin: 21600 },
  { name: 'メガドライブ2本体 + ソニック3', code: 'HAA-2504', release: '1994/10/24', price: 23000, bihin: 29900 },
  { name: 'メガドライブ本体［限定発売・ソニックテレホンカード入］', code: '—', release: '—', price: 24000, bihin: 31200 },
  { name: 'メガドライブ +1（ソニック付）', code: 'HAA-2501', release: '—', price: 27000, bihin: 35100 },
  { name: 'メガドライブミニ', code: 'HAA-2520', release: '2019/09/19', price: 6100, bihin: null },
  { name: 'メガドライブミニW', code: 'HAA-2523', release: '2019/09/19', price: 8000, bihin: null },
  { name: 'メガドライブミニ2', code: 'HAA-2524', release: '2022/10/27', price: 16000, bihin: null },
  { name: 'メガドライブミニ2（Amazon.co.jp限定版・ACアダプター同梱）', code: 'HAA-2525', release: '2022/10/27', price: 18000, bihin: null },
];

// 同日の「メガCD」「スーパー32X」「ワンダーメガ」の検索結果（国内版の本体）
const addons = [
  { name: 'メガCD 2', code: 'HAA-2912', price: 23000, bihin: 29900 },
  { name: 'スーパー32X本体', code: 'HMA-0001', price: 36000, bihin: 43200 },
  { name: 'メガCD1 本体', code: '—', price: 100000, bihin: 120000 },
  { name: 'ワンダーメガ2本体', code: 'RG-M2', price: 120000, bihin: 156000 },
  { name: 'WONDER MEGA（セガ）', code: 'HWM-5000', price: 171600, bihin: 205900 },
  { name: 'ワンダーメガ（ビクター）', code: 'RG-M1', price: 264000, bihin: 316800 },
];

// 同日の「ジャンク品 メガドライブ本体」の検索結果
const junks = [
  { name: 'メガドライブ本体', price: 1000, normal: 13000 },
  { name: 'メガドライブ2 本体', price: 2200, normal: 18000 },
  { name: 'メガCD2', price: 4800, normal: 23000 },
  { name: 'スーパー32X本体', price: 6200, normal: 36000 },
];

const parts = [
  { name: 'SGパッド', code: '—', price: 550 },
  { name: 'メガドライブ2用 32X接続ケーブル', code: '—', price: 1800 },
  { name: 'メガドライブミニ ファイティングパッド6B', code: 'HAA-2522', price: 1900 },
  { name: 'メガドライブミニ コントロールパッド', code: 'HAA-2521', price: 5900 },
];

const yen = (v: number) => `${v.toLocaleString('ja-JP')}円`;
const pct = (a: number, b: number) => `${Math.round((a / b) * 1000) / 10}%`;
const linkStyle = { color: 'var(--color-electric-green)', fontWeight: 700 } as const;

const faqs = [
  { q: 'メガドライブ本体の買取価格はいくらですか？', a: '2026年11月18日に駿河屋の公式買取検索で確認した掲載価格は、初代のメガドライブ本体（HAA-2510）が13,000円（美品15,600円）、メガドライブ2本体（HAA-2502）が18,000円（美品21,600円）でした。付属品・状態による減額前の金額です。' },
  { q: 'メガドライブミニはいくらで売れますか？', a: '同日の掲載価格は、メガドライブミニ（HAA-2520）が6,100円、メガドライブミニW（HAA-2523）が8,000円、メガドライブミニ2（HAA-2524）が16,000円でした。ミニ2はミニの約2.6倍です。' },
  { q: '動かないメガドライブも買い取ってもらえますか？', a: '駿河屋には「［状態：ジャンク品］メガドライブ本体」の商品があり、2026年11月18日の掲載価格は1,000円でした。メガドライブ2のジャンク品は2,200円です。動作品と比べると、初代は約7.7%、メガドライブ2は約12.2%の金額になります。' },
  { q: 'メガCDやスーパー32Xも売れますか？', a: '売れます。同日の掲載価格は、メガCD 2（HAA-2912）が23,000円、スーパー32X本体（HMA-0001）が36,000円、メガCD1本体が100,000円でした。本体と組み合わせて使う周辺機器ですが、駿河屋では別の商品として価格が付いています。' },
  { q: '古くて黄ばんだ本体は減額されますか？', a: '駿河屋の減額基準リストには「古い商品の経年劣化は、減額対象とはなりません」と記載されています。一方で、傷み・汚れ・日焼けや、タバコ臭などの臭いは減額対象とされています。どこまでが経年劣化と判断されるかは査定で決まります。' },
];

export default function MegadrivePage() {
  const sorted = [...bodies].sort((a, b) => b.price - a.price);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'メガドライブの買取価格｜本体13,000円・メガドライブ2 18,000円・ミニ2 16,000円（駿河屋）', datePublished: '2026-11-18', dateModified: '2026-11-18', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'メガドライブ 買取価格' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            メガドライブの買取価格<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>初代・メガドライブ2・ミニ・メガCD・スーパー32Xを駿河屋の公式ページで確認【{SURVEY_DATE}実測】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            メガドライブの買取価格は、{SURVEY_DATE}の駿河屋の公式買取検索で初代の本体13,000円、メガドライブ2本体18,000円、メガドライブミニ2 16,000円でした。ソフト同梱版・限定版は23,000〜27,000円で、本体単品より高く掲載されています。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：{SURVEY_DATE}（価格は同日に駿河屋の公式買取検索で確認）</p>
        </div>
        <FuruichiCta variant="strip" />
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：初代の本体は13,000円、メガドライブ2は18,000円です</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>初代（HAA-2510）：</span>13,000円（美品15,600円）。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>メガドライブ2（HAA-2502）：</span>18,000円（美品21,600円）。初代より5,000円高く掲載されています。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>同梱版・限定版：</span>ソニック付きの「メガドライブ +1」が27,000円で、本体の中では最も高い掲載価格でした。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>メガドライブミニ：</span>ミニ6,100円、ミニW 8,000円、ミニ2 16,000円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ジャンク品：</span>初代1,000円、メガドライブ2 2,200円。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>掲載価格は付属品・状態による減額前の金額で、査定額を保証するものではありません。売却の直前に公式ページでご確認ください。</p>
        </section>

        <section className="mb-12" id="price">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />本体のモデル別買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            駿河屋の公式買取検索で「メガドライブ 本体」と「メガドライブミニ」を検索し、国内版の本体の掲載価格を高い順に並べました。「美品」は駿河屋が状態の良い商品に設定している価格で、メガドライブミニには設定がありませんでした。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>本体</th><th>型番</th><th>発売日（駿河屋の記載）</th><th>買取価格</th><th>美品</th></tr>
              </thead>
              <tbody>
                {sorted.map((it) => (
                  <tr key={it.name + it.code}>
                    <td className="font-bold text-sm">{it.name}</td>
                    <td className="text-sm">{it.code}</td>
                    <td className="text-sm">{it.release}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(it.price)}</td>
                    <td className="text-sm">{it.bihin ? yen(it.bihin) : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('メガドライブ 本体')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 公式買取検索「メガドライブ 本体」</a>、<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('メガドライブミニ')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>「メガドライブミニ」</a>（{SURVEY_DATE}確認）。型番・発売日が駿河屋に記載されていない商品は「—」としています。
          </p>
          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>実測から分かること</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>後から出たメガドライブ2のほうが高い：</span>メガドライブ2（18,000円）は初代（13,000円）の約1.4倍でした。本体の型番は本体裏面や外箱で確認できます。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>同梱ソフトがそろうと高い：</span>「メガドライブ2本体 + ソニック3」（23,000円）は、メガドライブ2本体の単品より5,000円高く掲載されていました。同梱されていたソフトが残っていれば一緒に送ると査定がそろいやすくなります。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ミニは世代で差が大きい：</span>メガドライブミニ2（16,000円）は初代のミニ（6,100円）の約2.6倍で、初代のメガドライブ本体（13,000円）より高い掲載価格でした。</li>
            </ul>
          </div>
        </section>

        <section className="mb-12" id="addon">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />メガCD・スーパー32X・ワンダーメガの買取価格</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>本体・拡張機器</th><th>型番</th><th>買取価格</th><th>美品</th></tr></thead>
              <tbody>
                {addons.map((it) => (
                  <tr key={it.name}>
                    <td className="font-bold text-sm">{it.name}</td>
                    <td className="text-sm">{it.code}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(it.price)}</td>
                    <td className="text-sm">{yen(it.bihin)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
            メガCD1本体（100,000円）はメガCD 2（23,000円）の約4.3倍でした。メガドライブとメガCDが一体になったワンダーメガは、ビクター版（RG-M1）が264,000円、セガ版（HWM-5000）が171,600円と、今回確認したメガドライブ関連の本体で最も高い価格帯です。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：駿河屋 公式買取検索<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('メガCD')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>「メガCD」</a>・<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('スーパー32X')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>「スーパー32X」</a>・<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('ワンダーメガ')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>「ワンダーメガ」</a>（{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12" id="junk">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />動かない本体（ジャンク品）の買取価格</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>本体</th><th>ジャンク品</th><th>動作品</th><th>動作品に対する割合</th></tr></thead>
              <tbody>
                {junks.map((it) => (
                  <tr key={it.name}>
                    <td className="font-bold text-sm">{it.name}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(it.price)}</td>
                    <td className="text-sm">{yen(it.normal)}</td>
                    <td className="text-sm">{pct(it.price, it.normal)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
            ジャンク品の価格は動作品の7.7〜20.9%でした。動かない本体でも値段は付きますが、動作するかどうかで金額が大きく変わります。故障したゲーム機の売り方は<Link href="/knowledge/broken/" style={linkStyle}>壊れたゲーム機の買取</Link>で解説しています。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('ジャンク品 メガドライブ本体')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 公式買取検索「ジャンク品 メガドライブ本体」</a>（{SURVEY_DATE}確認）。動作品の価格は上の表の値です。
          </p>
        </section>

        <section className="mb-12" id="parts">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />コントローラー・ケーブルの買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>周辺機器</th><th>型番</th><th>買取価格</th></tr></thead>
              <tbody>
                {parts.map((it) => (
                  <tr key={it.name}>
                    <td className="font-bold text-sm">{it.name}</td>
                    <td className="text-sm">{it.code}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(it.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('メガドライブ パッド')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 公式買取検索「メガドライブ パッド」</a>ほか（{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12" id="rules">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />査定で減額される条件（駿河屋の公式記載）</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・箱（ケース）・説明書・動作に必要な付属品機器が欠品している場合は、大幅な減額対象です。</li>
            <li>・本体・付属品・パッケージの傷み・汚れ・日焼けは減額対象で、程度によっては買取不可となります。</li>
            <li>・ゲーム機本体は、内蔵電池切れがあると減額対象です。</li>
            <li>・古い商品の経年劣化は、減額対象とはなりません。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SURUGAYA_RULES} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 減額基準リスト</a>（{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />売る前に確認すること</h2>
          <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>型番を確かめる：</span>HAA-2510（初代）とHAA-2502（メガドライブ2）では掲載価格が5,000円異なります。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>動作を確認する：</span>電源・映像出力・カートリッジの読み込みを確認してから申し込んでください。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ソフトとまとめて売る：</span>ソフトの売り方は<Link href="/software/retro-soft/" style={linkStyle}>レトロゲームソフトの買取</Link>、ほかのレトロゲーム機は<Link href="/hardware/retro/" style={linkStyle}>レトロゲーム機の買取</Link>で解説しています。</li>
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
            <Link href="/hardware/saturn/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>セガサターンの買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>本体・スケルトン・Vサターン</p>
            </Link>
            <Link href="/hardware/pc-engine/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PCエンジンの買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>本体・DUO・CD-ROM2・mini</p>
            </Link>
            <Link href="/hardware/retro/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>レトロゲーム機の買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ファミコン・スーファミ本体</p>
            </Link>
          </div>
        </section>
      </div>

      <AuthorBox />
    </>
  );
}
