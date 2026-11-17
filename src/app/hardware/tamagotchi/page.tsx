import FuruichiCta from '@/components/FuruichiCta';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = 'たまごっちの買取価格｜Tamagotchi Uni 4,000〜8,200円・Smart 3,300〜13,000円・Paradise 1,400〜2,000円（駿河屋）【2026年11月17日実測】';
const DESCRIPTION =
  'たまごっちの買取価格を駿河屋の公式買取検索で2026年11月17日に確認しました。Tamagotchi Uniは4,000〜8,200円、Smartは3,300〜13,000円、Paradiseは1,400〜2,000円です。シリーズ別・限定セットの価格差をまとめています。';

export const metadata: Metadata = {
  title: 'たまごっちの買取価格｜Tamagotchi Uni 4,000〜8,200円・Smart 3,300〜13,000円・Paradise 1,400〜2,000円（駿河屋）【2026年11月17日実測】',
  description: DESCRIPTION,
  keywords: ['たまごっち 買取', 'たまごっち 買取価格', 'Tamagotchi Uni 買取', 'Tamagotchi Smart 買取', 'たまごっちパラダイス 買取'],
  alternates: { canonical: 'https://gamekaitori-biyori.com/hardware/tamagotchi/' },
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
const BANDAI_PARADISE = 'https://tamagotchi-official.com/jp/series/paradise/';
const BANDAI_UNI = 'https://tamagotchi-official.com/jp/series/uni/';

// 駿河屋 公式買取検索「Tamagotchi Uni」「Tamagotchi Smart」「Tamagotchi Paradise」の掲載価格（2026-11-17・カテゴリ「おもちゃ」）
const series = [
  {
    label: 'Tamagotchi Uni',
    query: 'Tamagotchi Uni',
    rows: [
      { name: 'Tamagotchi Uni Angel Festival', price: 8200 },
      { name: 'Tamagotchi Uni Sanrio characters', price: 7600 },
      { name: 'Tamagotchi Uni Blue', price: 6000 },
      { name: 'Tamagotchi Uni Prism White（プレミアムバンダイ限定）', price: 5000 },
      { name: 'Tamagotchi Uni Purple', price: 4200 },
      { name: 'Tamagotchi Uni Aurora Pink（プレミアムバンダイ限定）', price: 4000 },
    ],
  },
  {
    label: 'Tamagotchi Smart',
    query: 'Tamagotchi Smart',
    rows: [
      { name: 'Tamagotchi Smart サンリオキャラクターズ スペシャルセット', price: 13000 },
      { name: 'Tamagotchi Smart アニバーサリーパーティーセット', price: 11000 },
      { name: 'Tamagotchi Smart 25thアニバーサリーセット（プレミアムバンダイ抽選販売限定）', price: 6700 },
      { name: 'Tamagotchi Smart Coralpink', price: 4000 },
      { name: 'Tamagotchi Smart ワンピーススペシャルセット', price: 4000 },
      { name: 'Tamagotchi Smart NiziUスペシャルセット', price: 3900 },
      { name: 'Tamagotchi Smart Mintblue', price: 3300 },
    ],
  },
  {
    label: 'Tamagotchi Paradise',
    query: 'Tamagotchi Paradise',
    rows: [
      { name: 'Tamagotchi Paradise - Orange Tropics Premium Set', price: 2000 },
      { name: 'Tamagotchi Paradise - Orange Tropics', price: 1500 },
      { name: 'Tamagotchi Paradise - White Glacier', price: 1400 },
    ],
  },
];

const yen = (v: number) => `${v.toLocaleString('ja-JP')}円`;
const linkStyle = { color: 'var(--color-electric-green)', fontWeight: 700 } as const;

const faqs = [
  { q: 'たまごっちの買取価格はいくらですか？', a: '2026年11月17日に駿河屋の公式買取検索で確認した掲載価格は、Tamagotchi Uniが4,000〜8,200円、Tamagotchi Smartが3,300〜13,000円、Tamagotchi Paradiseが1,400〜2,000円でした。シリーズと色・コラボの種類で価格が異なります。' },
  { q: '一番高く買い取られているたまごっちはどれですか？', a: '今回確認した範囲では、Tamagotchi Smart サンリオキャラクターズ スペシャルセットの13,000円が最も高い掲載価格でした。' },
  { q: '新しいたまごっちのほうが高く売れますか？', a: '必ずしもそうではありません。同日の掲載では、駿河屋の記載で2026年7月発売のTamagotchi Paradise - Orange Tropics・White Glacier（1,400〜1,500円）より、2021〜2022年発売のTamagotchi Smart（3,300〜13,000円）のほうが高く掲載されていました。' },
  { q: '初代（1996年）のたまごっちは売れますか？', a: '駿河屋の買取検索で「初代 たまごっち」を検索したところ、2026年11月17日の結果に表示されたのはグッズ類で、初代の本体は表示されませんでした。初代の本体を売る場合は、商品名・型番で個別に検索するか、店舗に問い合わせて確認してください。' },
  { q: 'たまごっちのゲームソフトも買い取ってもらえますか？', a: '駿河屋の買取検索では、Nintendo Switch用ソフト『たまごっちのプチプチおみせっち おまちど-さま!』が2,100円、Nintendo Switch 2 Edition が2,300円で掲載されていました（2026年11月17日）。' },
];

export default function TamagotchiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'たまごっちの買取価格｜Tamagotchi Uni・Smart・Paradise（駿河屋）', datePublished: '2026-11-17', dateModified: '2026-11-17', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'たまごっち 買取価格' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            たまごっちの買取価格<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>Tamagotchi Uni・Smart・Paradiseを駿河屋の公式ページで確認【{SURVEY_DATE}実測】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            たまごっちの買取価格は、{SURVEY_DATE}の駿河屋の公式買取検索でTamagotchi Uniが4,000〜8,200円、Tamagotchi Smartが3,300〜13,000円、Tamagotchi Paradiseが1,400〜2,000円でした。同じシリーズでも、コラボ版・限定セットは通常色より高く掲載される傾向がありました。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：{SURVEY_DATE}（価格は同日に駿河屋の公式買取検索で確認）</p>
        </div>
        <FuruichiCta variant="strip" />
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：Uni・Smartは4,000円前後から、コラボ・限定セットは1万円を超える商品もあります</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>Tamagotchi Uni：</span>4,000〜8,200円。Angel Festival・Sanrio charactersが7,600円以上です。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>Tamagotchi Smart：</span>3,300〜13,000円。サンリオキャラクターズ スペシャルセット（13,000円）とアニバーサリーパーティーセット（11,000円）が1万円を超えています。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>Tamagotchi Paradise：</span>1,400〜2,000円。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>掲載価格は付属品・状態による減額前の金額で、査定額を保証するものではありません。売却の直前に公式ページでご確認ください。</p>
        </section>

        {series.map((s) => (
          <section className="mb-12" key={s.label}>
            <h2 className="section-heading mb-6"><span className="section-heading-bar" />{s.label}の買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
            <div className="overflow-x-auto">
              <table className="comparison-table">
                <thead><tr><th>商品</th><th>駿河屋 買取価格</th></tr></thead>
                <tbody>
                  {s.rows.map((r) => (
                    <tr key={r.name}>
                      <td className="font-bold text-sm">{r.name}</td>
                      <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(r.price)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              出典：<a href={`${SURUGAYA_SEARCH}${encodeURIComponent(s.query)}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 公式買取検索「{s.query}」</a>（{SURVEY_DATE}確認）。
            </p>
          </section>
        ))}

        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>実測から分かること</h2>
          <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>高い商品は通常色の約2〜4倍：</span>Tamagotchi Smartでは、Mintblue（3,300円）に対しサンリオキャラクターズ スペシャルセットが13,000円で約3.9倍でした。Tamagotchi Uniでも、Aurora Pink（4,000円）に対しAngel Festivalが8,200円で約2倍でした。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>コラボならどれも高いわけではない：</span>Tamagotchi SmartのNiziUスペシャルセット（3,900円）やワンピーススペシャルセット（4,000円）は、通常色のCoralpink（4,000円）と同程度でした。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>Paradiseは他のシリーズより低い：</span>Tamagotchi Paradiseの掲載価格（1,400〜2,000円）は、Uni・Smartの最安値（3,300〜4,000円）を下回っていました。バンダイ公式サイトでは、Paradiseシリーズの新商品「Neon Planets」が2026年11月21日発売と案内されています（Neon Planetsの買取価格は今回の検索結果に表示されませんでした）。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={BANDAI_PARADISE} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>たまごっち公式サイト Tamagotchi Paradise</a>、<a href={BANDAI_UNI} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>Tamagotchi Uni</a>（バンダイ・{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12" id="rules">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />査定で減額される条件（駿河屋の公式記載）</h2>
          <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
            駿河屋の減額基準リストでは、箱（ケース）・説明書・動作に必要な付属品機器の欠品は大幅な減額対象とされています。同梱特典品がないもの、本体・付属品・パッケージの傷み・汚れ・日焼けも減額対象です。スペシャルセットのように付属品が多い商品は、セット内容がそろっているかを確認してから査定に出してください。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SURUGAYA_RULES} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 減額基準リスト</a>（{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />売る前に確認すること</h2>
          <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>シリーズ名と色・セット名を確認する：</span>同じシリーズでも、色やコラボの種類ごとに別の商品として価格が付いています。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>セットの付属品をそろえる：</span>スペシャルセット・プレミアムセットは、同梱品の欠品が減額対象になります。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ゲームソフトと一緒に売る：</span>たまごっちのNintendo Switchソフトも買取の対象です。Switchソフトの売り方は<Link href="/software/switch-soft/" style={linkStyle}>Switchソフトの買取</Link>で解説しています。</li>
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
            <Link href="/hardware/gameboy/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲームボーイの買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>GB・GBA系の本体</p>
            </Link>
            <Link href="/software/switch-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switchソフトの買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ソフトを高く売るコツ</p>
            </Link>
            <Link href="/knowledge/bulk/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>まとめ売り</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>本体・ソフトを一緒に売る</p>
            </Link>
          </div>
        </section>
      </div>

      <AuthorBox />
    </>
  );
}
