import FuruichiCta from '@/components/FuruichiCta';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = 'VRゴーグルの買取価格｜Meta Quest 3 56,100円・Quest 3S 32,100円・Quest 2 14,100円・PICO 4 16,000円（駿河屋）【2026年11月19日実測】';
const DESCRIPTION =
  'VRゴーグルの買取価格を駿河屋の公式買取検索で2026年11月19日に確認しました。Meta Quest 3 128GB 56,100円、Quest 3S 128GB 32,100円、Quest 2 128GB 14,100円、PICO 4 128GB 16,000円です。周辺機器の価格と減額条件もまとめています。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['VRゴーグル 買取', 'VRヘッドセット 買取', 'Meta Quest 3 買取', 'Quest 2 買取', 'PICO 4 買取'],
  alternates: { canonical: 'https://gamekaitori-biyori.com/hardware/vr-headset/' },
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

// 駿河屋 公式買取検索「Meta Quest 3」「Meta Quest 2」「Oculus Quest」「PICO 4」の掲載価格（2026-11-19）。ヘッドセット本体のみ
const headsets = [
  { name: 'Meta Quest Pro', code: '899-00411-01', release: '2022/10/26', price: 59100 },
  { name: 'Meta Quest 3 128GB', code: '899-00591-01', release: '2023/10/10', price: 56100 },
  { name: 'Meta Quest 3 512GB', code: '899-00594-01', release: '2023/10/10', price: 55100 },
  { name: 'Meta Quest 3S 256GB', code: 'SK-1000210-01', release: '2024/10/15', price: 36100 },
  { name: 'Meta Quest 3S 128GB', code: 'SK-1000204-01', release: '2024/10/15', price: 32100 },
  { name: 'PICO 4 Ultra 256GB', code: '—', release: '—', price: 29000 },
  { name: 'PICO 4 256GB', code: 'A8110', release: '—', price: 28000 },
  { name: 'PICO 4 128GB', code: '—', release: '2022/10/07', price: 16000 },
  { name: 'Oculus Quest 2 256GB', code: '301-00353-01', release: '2020/10/13', price: 15100 },
  { name: 'Meta Quest 2 256GB（ライトグレー）', code: '301-00353-02', release: '2021/08/31', price: 15100 },
  { name: 'Oculus Quest 2 128GB', code: '899-00183-02', release: '2021/08/24', price: 14100 },
  { name: 'Pico G2 4K', code: 'A7510', release: '—', price: 10500 },
];

const parts = [
  { name: 'Oculus Quest2 コントローラー（L）', price: 2800 },
  { name: 'Meta Quest 3 携帯用ケース［899-00588-01］', price: 2500 },
  { name: 'Meta Quest 3 Eliteストラップ［899-00560-02］', price: 2400 },
  { name: 'Meta Quest 3 Eliteストラップ［899-00510-01］', price: 1600 },
  { name: 'Meta Quest 3 シリコン接顔部［899-00590-01］', price: 1200 },
];

// 「VRゴーグル」の検索結果のうち、スマートフォン用のゴーグル
const phoneGoggles = [
  { name: 'スマホ用VRゴーグル（LEGGERO）［GB078］', price: 700 },
  { name: 'エレコム 2D3D両用 VRゴーグル［VRG-2D3D02BK］', price: 400 },
];

const yen = (v: number) => `${v.toLocaleString('ja-JP')}円`;
const linkStyle = { color: 'var(--color-electric-green)', fontWeight: 700 } as const;
const src = (q: string, label: string) => (
  <a href={`${SURUGAYA_SEARCH}${encodeURIComponent(q)}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>{label}</a>
);

const faqs = [
  { q: 'Meta Quest 3の買取価格はいくらですか？', a: '2026年11月19日に駿河屋の公式買取検索で確認した掲載価格は、Meta Quest 3 128GB（899-00591-01）が56,100円、512GB（899-00594-01）が55,100円でした。この日は128GBのほうが1,000円高く掲載されていました。' },
  { q: 'Meta Quest 3Sはいくらで売れますか？', a: '同日の掲載価格は、Meta Quest 3S 128GBが32,100円、256GBが36,100円でした。Meta Quest 3 128GB（56,100円）の約57%です。' },
  { q: 'Oculus Quest 2はまだ売れますか？', a: '売れます。同日の掲載価格は、128GB（899-00183-02）が14,100円、256GBが15,100円でした。64GB（301-00352-01）は掲載価格がなく「メールにてお見積」と表示されていました。' },
  { q: 'スマホ用のVRゴーグルは売れますか？', a: '駿河屋の「VRゴーグル」の検索結果では、エレコム 2D3D両用 VRゴーグル（VRG-2D3D02BK）が400円、スマホ用VRゴーグル（LEGGERO）が700円でした。掲載価格のない商品も多く、一体型のヘッドセットとは価格帯が大きく異なります。' },
  { q: 'PS VR2の買取価格は？', a: 'PlayStation VR・PS VR2の買取価格は、別のページ（PSVR買取価格）で駿河屋の掲載価格を2026年11月16日に確認しています。PS VR2は22,000円でした。' },
];

export default function VrHeadsetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'VRゴーグルの買取価格｜Meta Quest 3 56,100円・Quest 3S 32,100円・Quest 2 14,100円・PICO 4 16,000円（駿河屋）', datePublished: '2026-11-19', dateModified: '2026-11-19', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'VRゴーグル 買取価格' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            VRゴーグルの買取価格<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>Meta Quest・PICOのヘッドセットとスマホ用ゴーグルを駿河屋の公式ページで確認【{SURVEY_DATE}実測】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            VRゴーグルの買取価格は、{SURVEY_DATE}の駿河屋の公式買取検索でMeta Quest 3 128GBが56,100円、Quest 3S 128GBが32,100円、Quest 2 128GBが14,100円でした。PICO 4は128GBが16,000円、256GBが28,000円です。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：{SURVEY_DATE}（価格は同日に駿河屋の公式買取検索で確認）</p>
        </div>
        <FuruichiCta variant="strip" />
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：Meta Quest 3は5万円台、Quest 2は1万5千円前後です</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>Meta Quest 3：</span>128GB 56,100円、512GB 55,100円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>Meta Quest 3S：</span>128GB 32,100円、256GB 36,100円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>Quest 2：</span>128GB 14,100円、256GB 15,100円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>PICO：</span>PICO 4 128GB 16,000円、256GB 28,000円、PICO 4 Ultra 29,000円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>スマホ用ゴーグル：</span>400〜700円。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>掲載価格は付属品・状態による減額前の金額で、査定額を保証するものではありません。売却の直前に公式ページでご確認ください。</p>
        </section>

        <section className="mb-12" id="price">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />VRヘッドセットの機種別買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>機種</th><th>型番</th><th>発売日（駿河屋の記載）</th><th>買取価格</th></tr></thead>
              <tbody>
                {headsets.map((it) => (
                  <tr key={it.name}>
                    <td className="font-bold text-sm">{it.name}</td>
                    <td className="text-sm">{it.code}</td>
                    <td className="text-sm">{it.release}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(it.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：駿河屋 公式買取検索{src('Meta Quest 3', '「Meta Quest 3」')}・{src('Meta Quest 2', '「Meta Quest 2」')}・{src('Oculus Quest', '「Oculus Quest」')}・{src('PICO 4', '「PICO 4」')}（{SURVEY_DATE}確認）。型番・発売日が駿河屋に記載されていない商品は「—」としています。Oculus Quest 2 64GB（301-00352-01）は掲載価格がなく「メールにてお見積」でした。
          </p>
          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>実測から分かること</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>容量が大きいほど高いとは限らない：</span>Meta Quest 3は128GB（56,100円）が512GB（55,100円）より1,000円高く掲載されていました。容量ではなく型番で価格を確認してください。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>Quest 3とQuest 3Sの差：</span>同じ128GBで比べると、Quest 3S（32,100円）はQuest 3（56,100円）より24,000円低い掲載価格でした。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>PICO 4は容量で1.75倍：</span>PICO 4は256GB（28,000円）が128GB（16,000円）の1.75倍でした。</li>
            </ul>
          </div>
        </section>

        <section className="mb-12" id="parts">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />コントローラー・ストラップなど周辺機器の買取価格</h2>
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
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋 公式買取検索{src('Meta Quest 3', '「Meta Quest 3」')}・{src('Meta Quest 2', '「Meta Quest 2」')}（{SURVEY_DATE}確認）。サードパーティ製のストラップ・ケースには掲載価格のない商品も多くありました。</p>
        </section>

        <section className="mb-12" id="phone">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />スマホ用VRゴーグルの買取価格</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>商品</th><th>買取価格</th></tr></thead>
              <tbody>
                {phoneGoggles.map((it) => (
                  <tr key={it.name}>
                    <td className="font-bold text-sm">{it.name}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(it.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
            スマートフォンを差し込んで使うゴーグルは数百円の掲載でした。エレコムの別型番（VRG-2D3D01BK）など、掲載価格のない商品も検索結果に並んでいます。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋 公式買取検索{src('VRゴーグル', '「VRゴーグル」')}（{SURVEY_DATE}確認）。</p>
        </section>

        <section className="mb-12" id="rules">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />査定で減額される条件（駿河屋の公式記載）</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・箱（ケース）・説明書・動作に必要な付属品機器が欠品している場合は、大幅な減額対象です。</li>
            <li>・同梱特典品のないものは減額対象です。</li>
            <li>・本体・付属品・パッケージの傷み・汚れ・日焼けは減額対象で、程度によっては買取不可となります。</li>
            <li>・ペット臭・タバコ臭などの臭いがついた商品は、大幅な減額対象です。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：<a href={SURUGAYA_RULES} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 減額基準リスト</a>（減額共通注意事項・{SURVEY_DATE}確認）。</p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />売る前に確認すること</h2>
          <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>型番を確かめる：</span>同じ機種でも容量・色で型番が異なり、掲載価格も変わります。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>付属品をそろえる：</span>コントローラー・充電ケーブルなど動作に必要な付属品が欠けると大幅な減額対象です。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>データを消す：</span>本体の初期化の考え方は<Link href="/knowledge/data-delete/" style={linkStyle}>ゲーム機のデータ削除</Link>で解説しています。</li>
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
            <Link href="/hardware/psvr/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PSVR買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>初代PSVR・PS VR2</p>
            </Link>
            <Link href="/hardware/steam-deck/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Steam Deckの買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>携帯型ゲーミングPC</p>
            </Link>
            <Link href="/hardware/virtual-boy/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>バーチャルボーイの買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>本体・ソフト・付属品</p>
            </Link>
          </div>
        </section>
      </div>

      <AuthorBox />
    </>
  );
}
