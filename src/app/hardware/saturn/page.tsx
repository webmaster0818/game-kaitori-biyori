import FuruichiCta from '@/components/FuruichiCta';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = 'セガサターンの買取価格｜本体10,000円・スケルトン60,000円・Vサターン27,000円（駿河屋）【2026年11月17日実測】';
const DESCRIPTION =
  'セガサターンの買取価格を駿河屋の公式買取検索で2026年11月17日に確認しました。本体（HST-0004）10,000円、スケルトン本体60,000円、Vサターン27,000円、ジャンク品500円です。モデル別・周辺機器の価格と減額条件をまとめています。';

export const metadata: Metadata = {
  title: 'セガサターンの買取価格｜本体10,000円・スケルトン60,000円・Vサターン27,000円（駿河屋）【2026年11月17日実測】',
  description: DESCRIPTION,
  keywords: ['セガサターン 買取', 'セガサターン 買取価格', 'セガサターン 本体 買取', 'Vサターン 買取', 'スケルトン セガサターン 買取'],
  alternates: { canonical: 'https://gamekaitori-biyori.com/hardware/saturn/' },
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

// 駿河屋 公式買取検索「セガサターン 本体」（1〜2ページ目）「Vサターン」の掲載価格（2026-11-17）。bihin は「美品」欄の価格（無い商品は null）
const bodies = [
  { name: 'セガサターン本体', code: 'HST-0004', release: '1995/07/04', price: 10000, bihin: 12000 },
  { name: 'セガサターン本体 + バーチャファイターリミックス', code: 'HST-0001', release: '1995/06/16', price: 11000, bihin: 13100 },
  { name: 'セガサターン本体 + バーチャファイターリミックス（グレー）', code: 'HST-0005', release: '1995/06/16', price: 14000, bihin: 16800 },
  { name: 'セガサターン本体 + クリスマスナイツ冬季限定版（白）', code: 'HST-0017', release: '1996/11/22', price: 15000, bihin: 18000 },
  { name: 'Vサターン本体（ビクターサターン）', code: 'RG-JX1', release: '1994/11/22', price: 27000, bihin: 32400 },
  { name: 'Vサターン本体（ビクターサターン）', code: 'RG-JX2', release: '1996/06/06', price: 32000, bihin: 38400 },
  { name: 'Vサターン スペシャルパック（バトルバ同梱）', code: 'RG-JX2S', release: '—', price: 44000, bihin: 52800 },
  { name: 'スケルトン セガサターン本体［ダービースタリオン発売記念 特別限定版］', code: 'HST-0022', release: '1999/03/25', price: 52000, bihin: 62400 },
  { name: 'スケルトン セガサターン本体', code: 'HST-0021', release: '1998/04/04', price: 60000, bihin: 72000 },
  { name: 'スケルトン セガサターン本体［1998 SPECIAL CAMPAIGN ORIGINAL］', code: 'HST-0020', release: '1998/04/04', price: 61000, bihin: 73200 },
  { name: 'セガサターン本体 トイザらス限定バージョン', code: 'HST-3220', release: '1997年', price: 66000, bihin: 79200 },
  { name: '［状態：ジャンク品］セガサターン本体', code: '—', release: '—', price: 500, bihin: null },
  { name: '［状態：ジャンク品］Vサターン本体', code: '—', release: '—', price: 1200, bihin: null },
];

const parts = [
  { name: 'セガサターン コントロールパッド', code: 'HSS-0101', price: 600 },
  { name: 'セガサターン レーシングコントローラー（ミストグレー）', code: 'HSS-0141', price: 2100 },
  { name: 'セガサターン S端子ケーブル', code: 'HSS-0105', price: 2800 },
  { name: 'セガサターン モデム（初期型）', code: 'HSS-0127', price: 2800 },
  { name: 'セガサターン バーチャスティック（ホワイト）', code: 'HSS-0136', price: 5900 },
  { name: 'HITACHI ハイサターン コントロールパッド', code: 'HSS-0118', price: 6100 },
];

const yen = (v: number) => `${v.toLocaleString('ja-JP')}円`;
const linkStyle = { color: 'var(--color-electric-green)', fontWeight: 700 } as const;

const faqs = [
  { q: 'セガサターン本体の買取価格はいくらですか？', a: '2026年11月17日に駿河屋の公式買取検索で確認した掲載価格は、本体単品（HST-0004）が10,000円、美品の場合は12,000円でした。付属品・状態による減額前の金額です。' },
  { q: '一番高く買い取られているセガサターン本体はどれですか？', a: '同日の掲載では、セガサターン本体 トイザらス限定バージョン（HST-3220）の66,000円（美品79,200円）が最も高く、次いでスケルトン本体［1998 SPECIAL CAMPAIGN ORIGINAL］の61,000円、スケルトン本体（HST-0021）の60,000円でした。' },
  { q: '動かないセガサターンも買い取ってもらえますか？', a: '駿河屋には「［状態：ジャンク品］セガサターン本体」の商品があり、2026年11月17日の掲載価格は500円でした。Vサターンのジャンク品は1,200円です。通常の本体（10,000円）と比べると大きく下がります。' },
  { q: '古くて黄ばんでいる本体は減額されますか？', a: '駿河屋の減額基準リストには「古い商品の経年劣化は、減額対象とはなりません」と記載されています。一方で、傷み・汚れ・日焼けや、タバコ臭などの臭いは減額対象とされています。どこまでが経年劣化と判断されるかは査定で決まります。' },
  { q: '海外版のセガサターンも売れますか？', a: '駿河屋の買取検索には「海外版 セガサターン本体（国内ソフト使用不可）」が掲載されており、2026年11月17日の価格は14,000円（美品18,200円）でした。' },
];

export default function SaturnPage() {
  const sorted = [...bodies].sort((a, b) => b.price - a.price);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'セガサターンの買取価格｜本体10,000円・スケルトン60,000円・Vサターン27,000円（駿河屋）', datePublished: '2026-11-17', dateModified: '2026-11-17', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'セガサターン 買取価格' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            セガサターンの買取価格<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>通常本体・スケルトン・Vサターン・ジャンク品を駿河屋の公式ページで確認【{SURVEY_DATE}実測】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            セガサターンの買取価格は、{SURVEY_DATE}の駿河屋の公式買取検索で本体単品10,000円、スケルトン本体60,000円、Vサターン（RG-JX1）27,000円でした。同じセガサターンでもモデルによって買取価格が最大で6倍以上異なります。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：{SURVEY_DATE}（価格は同日に駿河屋の公式買取検索で確認）</p>
        </div>
        <FuruichiCta variant="strip" />
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：通常の本体は10,000円、限定・スケルトン本体は50,000円以上です</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>通常の本体（HST-0004）：</span>10,000円（美品12,000円）。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>スケルトン本体・トイザらス限定：</span>52,000〜66,000円。通常の本体の5.2〜6.6倍です。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>Vサターン：</span>RG-JX1が27,000円、RG-JX2が32,000円で、通常のセガサターン本体より高く掲載されています。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ジャンク品：</span>セガサターン本体500円、Vサターン本体1,200円。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>掲載価格は付属品・状態による減額前の金額で、査定額を保証するものではありません。売却の直前に公式ページでご確認ください。</p>
        </section>

        <section className="mb-12" id="price">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />本体のモデル別買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            駿河屋の公式買取検索で「セガサターン 本体」（1〜2ページ目）と「Vサターン」を検索し、国内版の本体の掲載価格を高い順に並べました。「美品」は駿河屋が状態の良い商品に設定している価格です。
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
            出典：<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('セガサターン 本体')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 公式買取検索「セガサターン 本体」</a>、<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('Vサターン')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>「Vサターン」</a>（{SURVEY_DATE}確認）。トイザらス限定バージョンの発売日は駿河屋の記載が「1997/00/00」のため、年のみ記載しています。
          </p>
          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>実測から分かること</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>本体の色・限定版で価格が大きく変わる：</span>最も高いトイザらス限定バージョン（66,000円）は、通常の本体（10,000円）の6.6倍でした。売る前に本体の型番（本体裏面や外箱の表記）を確認してください。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>同梱版は本体単品より高い：</span>バーチャファイターリミックス同梱版（HST-0001）は11,000円、グレー版（HST-0005）は14,000円で、本体単品より1,000〜4,000円高く掲載されていました。同梱ソフトがそろっているかで査定が変わる可能性があります。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ジャンク品は通常品の5%：</span>セガサターン本体のジャンク品（500円）は、動作品（10,000円）の5%でした。動作するかどうかが価格を最も大きく左右します。</li>
            </ul>
          </div>
        </section>

        <section className="mb-12" id="parts">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />周辺機器の買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>周辺機器</th><th>型番</th><th>買取価格</th></tr></thead>
              <tbody>
                {parts.map((it) => (
                  <tr key={it.code}>
                    <td className="font-bold text-sm">{it.name}</td>
                    <td className="text-sm">{it.code}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(it.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
            標準のコントロールパッド（600円）より、バーチャスティック（5,900円）やハイサターン用のコントロールパッド（6,100円）のほうが高く掲載されていました。本体と一緒に売る場合も、周辺機器の型番を分けて査定に出すと金額を確かめやすくなります。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('セガサターン 本体')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 公式買取検索</a>（{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12" id="rules">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />査定で減額される条件（駿河屋の公式記載）</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・箱（ケース）・説明書・動作に必要な付属品機器が欠品している場合は、大幅な減額対象です。</li>
            <li>・本体・付属品・パッケージの傷み・汚れ・日焼けは減額対象で、程度によっては買取不可となります。</li>
            <li>・ペット臭・タバコ臭などの臭いがついた商品は、大幅な減額対象です。</li>
            <li>・古い商品の経年劣化は、減額対象とはなりません。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SURUGAYA_RULES} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 減額基準リスト</a>（{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />売る前に確認すること</h2>
          <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>型番を確かめる：</span>HST-0004・HST-0021・RG-JX1など、型番によって掲載価格が異なります。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>動作を確認する：</span>動作品とジャンク品では価格に20倍の差がありました。電源・映像出力・ディスクの読み込みを確認してから申し込んでください。</li>
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
            <Link href="/hardware/retro/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>レトロゲーム機の買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ファミコン・スーファミ本体</p>
            </Link>
            <Link href="/hardware/neogeo/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ネオジオの買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ネオジオCD・ポケット・mini</p>
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
