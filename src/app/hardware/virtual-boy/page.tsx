import FuruichiCta from '@/components/FuruichiCta';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = 'バーチャルボーイの買取価格｜本体32,000円・ジャンク4,000円・ソフト最高460,000円（駿河屋）【2026年11月19日実測】';
const DESCRIPTION =
  'バーチャルボーイの買取価格を駿河屋の公式買取検索で2026年11月19日に確認しました。本体（VUE-S-RA-JPN）32,000円、ジャンク品4,000円、付属コントローラ8,400円です。ソフトは「バーチャルボーリング」460,000円が最高でした。付属品・外箱だけの価格と減額条件もまとめています。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['バーチャルボーイ 買取', 'バーチャルボーイ 買取価格', 'バーチャルボーイ 本体 買取', 'バーチャルボーイ ソフト 買取', 'バーチャルボーリング 買取'],
  alternates: { canonical: 'https://gamekaitori-biyori.com/hardware/virtual-boy/' },
  openGraph: {
    images: ['/og.png'],
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const SURVEY_DATE = '2026年11月19日';
const SURUGAYA_SEARCH = 'https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=';
const SURUGAYA_RULES = 'https://www.suruga-ya.jp/man/hyou/kaitorihin.html';

// 駿河屋 公式買取検索「バーチャルボーイ」「ジャンク品 バーチャルボーイ」の掲載価格（2026-11-19）
const bodies = [
  { name: 'バーチャルボーイ デモ用セット本体', code: 'VUE-S-RA(JPN)', price: 98000, bihin: 117600 },
  { name: 'バーチャルボーイ本体', code: 'VUE-S-RA-JPN', price: 32000, bihin: 38400 },
  { name: '［状態：ジャンク品］バーチャルボーイ本体', code: '—', price: 4000, bihin: null },
];

const parts = [
  { name: 'バーチャルボーイ付属コントローラ', code: 'VUE-007', price: 8400 },
  { name: 'バーチャルボーイ付属スタンド', code: '—', price: 2600 },
  { name: 'バーチャルボーイ付属アイシェードホルダー', code: '—', price: 1900 },
];

// 「バーチャルボーイソフト」を価格の高い順に表示し、国内版のソフト本体（外箱のみ・説明書のみ・海外版を除く）を上から7本
const softs = [
  { name: 'バーチャルボーリング', release: '1995/12/22', price: 460000, bihin: 542800 },
  { name: 'バーチャルラボ', release: '1995/12/08', price: 250000, bihin: 300000 },
  { name: 'SDガンダム ディメンションウォー', release: '1995/12/22', price: 210000, bihin: 252000 },
  { name: 'スペースインベーダーズ バーチャルコレクション', release: '1995/12/01', price: 112000, bihin: 133300 },
  { name: 'ワリオランド アワゾンの秘宝', release: '1995/12/07', price: 42000, bihin: 50000 },
  { name: 'インスマウスの館', release: '1995/10/13', price: 32000, bihin: 37400 },
  { name: 'ジャックブラザーズの迷路でヒーホー', release: '1995/09/29', price: 19000, bihin: 22200 },
];

const yen = (v: number) => `${v.toLocaleString('ja-JP')}円`;
const linkStyle = { color: 'var(--color-electric-green)', fontWeight: 700 } as const;
const src = (q: string, label: string) => (
  <a href={`${SURUGAYA_SEARCH}${encodeURIComponent(q)}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>{label}</a>
);

const faqs = [
  { q: 'バーチャルボーイ本体の買取価格はいくらですか？', a: '2026年11月19日に駿河屋の公式買取検索で確認した掲載価格は、バーチャルボーイ本体（VUE-S-RA-JPN）が32,000円（美品38,400円）でした。付属品・状態による減額前の金額です。' },
  { q: '動かないバーチャルボーイも売れますか？', a: '駿河屋には「［状態：ジャンク品］バーチャルボーイ本体」の商品があり、同日の掲載価格は4,000円でした。動作品（32,000円）の12.5%です。' },
  { q: '高く売れるバーチャルボーイのソフトはありますか？', a: '同日に「バーチャルボーイソフト」を価格の高い順に表示したところ、国内版の最高は「バーチャルボーリング」の460,000円でした。「バーチャルラボ」250,000円、「SDガンダム ディメンションウォー」210,000円が続きます。' },
  { q: '外箱や説明書だけでも売れますか？', a: '駿河屋には外箱だけ・説明書だけの商品もあります。同日の掲載価格は「［外箱のみ］バーチャルボーリング」52,000円、「［説明書のみ］バーチャルボーリング」20,000円、「［外箱のみ］SDガンダム ディメンションウォー」28,000円でした。' },
  { q: 'コントローラーやスタンドだけでも売れますか？', a: '売れます。同日の掲載価格は、付属コントローラ（VUE-007）8,400円、付属スタンド2,600円、付属アイシェードホルダー1,900円でした。本体と一緒に送る場合は、動作に必要な付属品が欠けると大幅な減額対象になる点にご注意ください。' },
];

export default function VirtualBoyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'バーチャルボーイの買取価格｜本体32,000円・ジャンク4,000円・ソフト最高460,000円（駿河屋）', datePublished: '2026-11-19', dateModified: '2026-11-19', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'バーチャルボーイ 買取価格' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            バーチャルボーイの買取価格<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>本体・付属品・ソフトを駿河屋の公式ページで確認【{SURVEY_DATE}実測】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            バーチャルボーイの買取価格は、{SURVEY_DATE}の駿河屋の公式買取検索で本体32,000円、ジャンク品4,000円でした。ソフトは本体より高いものが多く、「バーチャルボーリング」は460,000円で掲載されています。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：{SURVEY_DATE}（価格は同日に駿河屋の公式買取検索で確認）</p>
        </div>
        <FuruichiCta variant="strip" />
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：本体は32,000円、ソフトは数十万円のものがあります</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>本体（VUE-S-RA-JPN）：</span>32,000円（美品38,400円）。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ジャンク品：</span>4,000円（動作品の12.5%）。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>付属品：</span>コントローラ8,400円、スタンド2,600円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ソフト：</span>国内版の上位7本は19,000〜460,000円。上位4本は本体より高い100,000円以上です。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>掲載価格は付属品・状態による減額前の金額で、査定額を保証するものではありません。売却の直前に公式ページでご確認ください。</p>
        </section>

        <section className="mb-12" id="price">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />本体の買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>本体</th><th>型番</th><th>買取価格</th><th>美品</th></tr></thead>
              <tbody>
                {bodies.map((it) => (
                  <tr key={it.name}>
                    <td className="font-bold text-sm">{it.name}</td>
                    <td className="text-sm">{it.code}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(it.price)}</td>
                    <td className="text-sm">{it.bihin ? yen(it.bihin) : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：駿河屋 公式買取検索{src('バーチャルボーイ', '「バーチャルボーイ」')}・{src('ジャンク品 バーチャルボーイ', '「ジャンク品 バーチャルボーイ」')}（{SURVEY_DATE}確認）。商品名は駿河屋の表記のとおりです。
          </p>
        </section>

        <section className="mb-12" id="parts">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />付属品だけの買取価格</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>付属品</th><th>型番</th><th>買取価格</th></tr></thead>
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
          <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
            付属コントローラだけで8,400円と、本体（32,000円）の約26%の価格が付いていました。本体が故障していても、付属品が残っていれば別々に価格を確認する価値があります。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋 公式買取検索{src('バーチャルボーイ', '「バーチャルボーイ」')}（{SURVEY_DATE}確認）。</p>
        </section>

        <section className="mb-12" id="soft">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />買取価格の高いバーチャルボーイソフト</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>ソフト</th><th>発売日（駿河屋の記載）</th><th>買取価格</th><th>美品</th></tr></thead>
              <tbody>
                {softs.map((it) => (
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
            出典：駿河屋 公式買取検索{src('バーチャルボーイソフト', '「バーチャルボーイソフト」')}を価格の高い順に表示し、外箱のみ・説明書のみ・海外版の商品を除いた上位7本（{SURVEY_DATE}確認）。
          </p>
          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>実測から分かること</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>高額ソフトは1995年12月発売に集中：</span>上位4本はすべて1995年12月の発売でした。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>外箱・説明書にも価格が付く：</span>「［外箱のみ］バーチャルボーリング」は52,000円、「［説明書のみ］バーチャルボーリング」は20,000円でした。中身のソフトと別に保管している場合も、外箱・説明書を捨てずに価格を確認してください。</li>
            </ul>
          </div>
        </section>

        <section className="mb-12" id="rules">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />査定で減額される条件（駿河屋の公式記載）</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・箱（ケース）・説明書・動作に必要な付属品機器が欠品している場合は、大幅な減額対象です。</li>
            <li>・本体・付属品・パッケージの傷み・汚れ・日焼けは減額対象で、程度によっては買取不可となります。</li>
            <li>・ゲーム機本体は、内蔵電池切れがあると減額対象です。</li>
            <li>・古い商品の経年劣化は、減額対象とはなりません。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：<a href={SURUGAYA_RULES} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 減額基準リスト</a>（{SURVEY_DATE}確認）。</p>
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
            <Link href="/hardware/n64/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ニンテンドー64の買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>本体・限定カラー</p>
            </Link>
            <Link href="/hardware/vr-headset/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>VRゴーグルの買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>Meta Quest・PICO</p>
            </Link>
            <Link href="/software/retro-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>レトロゲームソフトの買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ファミコン・スーファミのソフト</p>
            </Link>
          </div>
        </section>
      </div>

      <AuthorBox />
    </>
  );
}
