import FuruichiCta from '@/components/FuruichiCta';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = 'ニンテンドー64の買取価格｜本体6,500円・クリアブラック75,000円・64DD 230,000円（駿河屋）【2026年11月18日実測】';
const DESCRIPTION =
  'ニンテンドー64（NINTENDO64）の買取価格を駿河屋の公式買取検索で2026年11月18日に確認しました。通常の本体6,500円、クリアブルー14,000円、クリアブラック75,000円、64DD本体230,000円、ジャンク品1,000円です。カラー別・コントローラーの価格と減額条件をまとめています。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['ニンテンドー64 買取', 'ニンテンドウ64 買取', 'NINTENDO64 買取価格', 'N64 本体 買取', '64 コントローラー 買取'],
  alternates: { canonical: 'https://gamekaitori-biyori.com/hardware/n64/' },
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

// 駿河屋 公式買取検索「ニンテンドウ64 本体」「NINTENDO64 本体」の掲載価格（2026-11-18）。国内版の本体のみ。bihin は「美品」欄
const bodies = [
  { name: 'ニンテンドウ64本体', release: '1996/06/23', price: 6500, bihin: 7800 },
  { name: 'ニンテンドウ64本体（クリアブルー）', release: '1999/12/01', price: 14000, bihin: 16800 },
  { name: 'ニンテンドウ64本体（クリアレッド）', release: '1999/12/01', price: 16000, bihin: 19200 },
  { name: 'ニンテンドウ64本体（ゴールド）', release: '1998/12/31', price: 30000, bihin: 36000 },
  { name: 'ニンテンドウ64本体［Wゲットだぜキャンペーンセット］', release: '1996/06/23', price: 30000, bihin: 36000 },
  { name: 'ニンテンドウ64本体 ミッドナイトブルー（トイザらス限定）', release: '1999/12/10', price: 31000, bihin: 37200 },
  { name: 'ニンテンドウ64本体（クリアオレンジ 1999年ダイエー優勝限定販売カラー）', release: '—', price: 45000, bihin: 58500 },
  { name: 'ピカチュウNintendo64本体（ブルー＆イエロー）', release: '2000/07/21', price: 56000, bihin: 67200 },
  { name: 'ピカチュウNintendo64本体（オレンジ＆イエロー）', release: '2000/07/21', price: 60000, bihin: 93000 },
  { name: 'ニンテンドウ64本体（クリアグレー）', release: '2000/12/30', price: 61000, bihin: 73200 },
  { name: 'ニンテンドウ64本体（クリアブラック）', release: '1999/12/01', price: 75000, bihin: 97500 },
];

// 同日の「コントローラブロス」「メモリー拡張パック」の検索結果
const parts = [
  { name: 'コントローラブロス（グレー）', price: 700 },
  { name: 'コントローラブロス（ブラック）', price: 700 },
  { name: 'コントローラブロス（ブルー）', price: 800 },
  { name: 'コントローラ ブロス（イエロー）', price: 1100 },
  { name: 'コントローラブロス（クリアブルー）', price: 1400 },
  { name: 'コントローラブロス（クリアレッド）', price: 1400 },
  { name: 'ピカチュウN64コントローラ ブロス（オレンジ＆イエロー）', price: 2700 },
  { name: 'コントローラブロス（クリアブラック）', price: 6300 },
  { name: 'メモリー拡張パック（ハイレゾパック）', price: 3000 },
];

const yen = (v: number) => `${v.toLocaleString('ja-JP')}円`;
const linkStyle = { color: 'var(--color-electric-green)', fontWeight: 700 } as const;

const faqs = [
  { q: 'ニンテンドー64本体の買取価格はいくらですか？', a: '2026年11月18日に駿河屋の公式買取検索で確認した掲載価格は、通常の本体（ニンテンドウ64本体・1996年発売）が6,500円、美品の場合は7,800円でした。付属品・状態による減額前の金額です。' },
  { q: '高く売れるニンテンドー64はどのカラーですか？', a: '同日の掲載では、クリアブラック（75,000円）、クリアグレー（61,000円）、ピカチュウNintendo64 オレンジ＆イエロー（60,000円）の順に高く、通常の本体（6,500円）の約9〜11.5倍でした。クリアブルー（14,000円）・クリアレッド（16,000円）も通常の本体の2倍以上です。' },
  { q: '動かないニンテンドー64も売れますか？', a: '駿河屋には「［状態：ジャンク品］ニンテンドウ64本体」の商品があり、2026年11月18日の掲載価格は1,000円でした。通常の本体の動作品（6,500円）の約15.4%です。' },
  { q: '64DDは買い取ってもらえますか？', a: '駿河屋の買取検索ではニンテンドウ64DD本体の掲載価格が230,000円（美品276,000円、2026年11月18日）でした。64DDのランドネット スタータキット（64DD同梱・基本ソフト7本付）は320,000円です。' },
  { q: 'コントローラーだけでも売れますか？', a: '売れます。同日の掲載価格は、純正のコントローラブロスがグレー・ブラック700円、ブルー800円、クリアブルー・クリアレッド1,400円、クリアブラック6,300円でした。本体と同じく、色によって価格が変わります。' },
];

export default function N64Page() {
  const sorted = [...bodies].sort((a, b) => b.price - a.price);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'ニンテンドー64の買取価格｜本体6,500円・クリアブラック75,000円・64DD 230,000円（駿河屋）', datePublished: '2026-11-18', dateModified: '2026-11-18', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'ニンテンドー64 買取価格' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ニンテンドー64の買取価格<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>通常本体・カラー別・64DD・コントローラーを駿河屋の公式ページで確認【{SURVEY_DATE}実測】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ニンテンドー64の買取価格は、{SURVEY_DATE}の駿河屋の公式買取検索で通常の本体6,500円、クリアブルー14,000円、クリアブラック75,000円でした。同じニンテンドー64でも、本体の色によって掲載価格が最大で11.5倍異なります。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：{SURVEY_DATE}（価格は同日に駿河屋の公式買取検索で確認）。駿河屋の商品名は「ニンテンドウ64」と表記されています。</p>
        </div>
        <FuruichiCta variant="strip" />
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：通常の本体は6,500円、限定カラーは30,000円以上です</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>通常の本体：</span>6,500円（美品7,800円）。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>クリアカラー：</span>クリアブルー14,000円、クリアレッド16,000円、クリアグレー61,000円、クリアブラック75,000円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>限定版：</span>ゴールド30,000円、ミッドナイトブルー（トイザらス限定）31,000円、ピカチュウNintendo64 56,000〜60,000円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ジャンク品：</span>1,000円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>64DD本体：</span>230,000円。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>掲載価格は付属品・状態による減額前の金額で、査定額を保証するものではありません。売却の直前に公式ページでご確認ください。</p>
        </section>

        <section className="mb-12" id="price">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />本体のカラー別買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            駿河屋の公式買取検索で「ニンテンドウ64 本体」と「NINTENDO64 本体」を検索し、国内版の本体の掲載価格を高い順に並べました。北米版などの海外版は除いています。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>本体</th><th>発売日（駿河屋の記載）</th><th>買取価格</th><th>美品</th></tr>
              </thead>
              <tbody>
                {sorted.map((it) => (
                  <tr key={it.name}>
                    <td className="font-bold text-sm">{it.name}</td>
                    <td className="text-sm">{it.release}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(it.price)}</td>
                    <td className="text-sm">{yen(it.bihin)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('ニンテンドウ64 本体')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 公式買取検索「ニンテンドウ64 本体」</a>、<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('NINTENDO64 本体')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>「NINTENDO64 本体」</a>（{SURVEY_DATE}確認）。クリアオレンジの発売日は駿河屋に記載がないため「—」としています。
          </p>
          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>実測から分かること</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>色が価格を最も大きく左右する：</span>クリアブラック（75,000円）は通常の本体（6,500円）の約11.5倍でした。同じ1999年12月1日発売のクリアカラーでも、クリアブルー（14,000円）とクリアブラックでは5倍以上の差があります。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>キャンペーンセットは通常の本体の約4.6倍：</span>「Wゲットだぜキャンペーンセット」は本体の色・発売日が通常の本体と同じですが、30,000円で掲載されていました。セットの内容がそろっているかで査定が変わる可能性があります。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>美品の上乗せは20〜55%：</span>多くの本体は美品価格が通常の1.2〜1.3倍ですが、ピカチュウNintendo64 オレンジ＆イエローは60,000円に対して美品93,000円（1.55倍）でした。</li>
            </ul>
          </div>
        </section>

        <section className="mb-12" id="junk">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />動かない本体・64DDの買取価格</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>［状態：ジャンク品］ニンテンドウ64本体：</span>1,000円（通常の本体の動作品6,500円の約15.4%）。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ニンテンドウ64DD本体：</span>230,000円（美品276,000円）。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>64DD ランドネット スタータキット（64DD同梱・基本ソフト7本付）：</span>320,000円（美品384,000円）。</li>
          </ul>
          <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
            動作しない本体の売り方は<Link href="/knowledge/broken/" style={linkStyle}>壊れたゲーム機の買取</Link>で解説しています。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('ジャンク品 ニンテンドウ64')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 公式買取検索「ジャンク品 ニンテンドウ64」</a>、<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('64DD')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>「64DD」</a>（{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12" id="parts">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />コントローラー・周辺機器の買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>周辺機器</th><th>買取価格</th></tr></thead>
              <tbody>
                {parts.map((it) => (
                  <tr key={it.name}>
                    <td className="font-bold text-sm">{it.name}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(it.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
            純正のコントローラブロスは、標準色（グレー・ブラック）の700円に対して、クリアブラックは6,300円でした。本体と同じく、クリアブラックが最も高く掲載されています。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('コントローラブロス')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 公式買取検索「コントローラブロス」</a>、<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('メモリー拡張パック')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>「メモリー拡張パック」</a>（{SURVEY_DATE}確認）。
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
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>本体の色を確かめる：</span>クリアカラーの中でも、ブルー・レッドとグレー・ブラックでは掲載価格が大きく異なります。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>動作を確認する：</span>電源・映像出力・カセットの読み込みを確認してから申し込んでください。</li>
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
            <Link href="/hardware/gameboy/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲームボーイの買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>GB・GBC・GBA</p>
            </Link>
            <Link href="/hardware/megadrive/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>メガドライブの買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>本体・ミニ・メガCD・32X</p>
            </Link>
          </div>
        </section>
      </div>

      <AuthorBox />
    </>
  );
}
