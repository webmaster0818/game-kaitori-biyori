import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = 'PS4コントローラー（DUALSHOCK 4）の買取価格｜カラー・型番別1,600〜5,000円、限定版は最大11,000円【2026年11月16日実測】';
const DESCRIPTION =
  'PS4コントローラー（DUALSHOCK 4）の買取価格を駿河屋の公式買取検索で2026年11月16日に確認しました。通常カラーは1,600〜5,000円、ジェット・ブラックは新旧とも1,800円、限定デザインは最大11,000円です。SIE公式の修理料金4,950円との比較も掲載しています。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['PS4 コントローラー 買取', 'DUALSHOCK4 買取', 'デュアルショック4 買取価格', 'CUH-ZCT2J 買取'],
  alternates: { canonical: 'https://gamekaitori-biyori.com/knowledge/ps4-controller/' },
  openGraph: {
    images: ['/og.png'],
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const SURVEY_DATE = '2026年11月16日';
const SURUGAYA_SEARCH = 'https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=';
const SURUGAYA_RULES = 'https://www.suruga-ya.jp/man/hyou/kaitorihin.html';
const SIE_REPAIR = 'https://www.playstation.com/ja-jp/support/hardware/repairs/';

// 駿河屋 公式買取検索（CUH-ZCT2J／CUH-ZCT1J で検索）の国内版・通常カラーの掲載価格（2026-11-16）
const zct2 = [
  { code: 'CUH-ZCT2J', color: 'ジェット・ブラック', price: 1800 },
  { code: 'CUH-ZCT2J11', color: 'マグマ・レッド', price: 1800 },
  { code: 'CUH-ZCT2J12', color: 'ウェイブ・ブルー', price: 1800 },
  { code: 'CUH-ZCT2J22', color: 'ミッドナイト・ブルー', price: 2100 },
  { code: 'CUH-ZCT2J30', color: 'レッド・カモフラージュ', price: 2500 },
  { code: 'CUH-ZCT2J23', color: 'ベリー・ブルー', price: 3200 },
  { code: 'CUH-ZCT2J28', color: 'チタン・ブルー', price: 3700 },
  { code: 'CUH-ZCT2J21', color: 'スチール・ブラック', price: 3900 },
  { code: 'CUH-ZCT2JZH', color: 'サンセット・オレンジ（ゲオ限定カラー）', price: 4600 },
  { code: 'CUH-ZCT2J29', color: 'エレクトリック・パープル', price: 4800 },
  { code: 'CUH-ZCT2J27', color: 'ローズ・ゴールド', price: 5000 },
];
const zct1 = [
  { code: 'CUH-ZCT1J02', color: 'ウェイブ・ブルー', price: 1600 },
  { code: 'CUH-ZCT1J10', color: 'グレー・ブルー', price: 1700 },
  { code: 'CUH-ZCT1J', color: 'ジェット・ブラック', price: 1800 },
  { code: 'CUH-ZCT1J01', color: 'マグマ・レッド', price: 2000 },
  { code: 'CUH-ZCT1J03', color: 'グレイシャー・ホワイト', price: 2000 },
  { code: 'CUH-ZCT1J06', color: 'ゴールド', price: 2000 },
  { code: 'CUH-ZCT1J08', color: 'スチール・ブラック', price: 2000 },
  { code: 'CUH-ZCT1J07', color: 'シルバー', price: 2100 },
  { code: 'CUH-ZCT1J09', color: 'クリスタル', price: 2200 },
  { code: 'CUH-ZCT1J04', color: 'アーバン・カモフラージュ', price: 2700 },
];
const limited = [
  { name: '『ペルソナ５ ザ・ロイヤル』Limited Edition（ジェット・ブラック／グレイシャー・ホワイト）', price: 11000 },
  { name: 'Marvel’s Spider-Man Limited Edition', price: 9900 },
  { name: 'DEATH STRANDING LIMITED EDITION', price: 5000 },
  { name: 'メタルギアソリッド5 LIMITED PACK オリジナルデザイン', price: 4100 },
  { name: 'ドラゴンクエスト ロト エディション', price: 3600 },
  { name: 'Days of Play リミテッドエディション', price: 3500 },
];

const yen = (v: number) => `${v.toLocaleString('ja-JP')}円`;
const linkStyle = { color: 'var(--color-electric-green)', fontWeight: 700 } as const;

const faqs = [
  { q: 'PS4のコントローラーはいくらで売れますか？', a: '2026年11月16日に駿河屋の公式買取検索で確認した国内版の通常カラーは、型番・色により1,600〜5,000円でした。最も多いジェット・ブラックは新型（CUH-ZCT2J）・旧型（CUH-ZCT1J）とも1,800円です。いずれも状態による減額前の掲載価格です。' },
  { q: '新型（CUH-ZCT2J）と旧型（CUH-ZCT1J）で価格は違いますか？', a: 'ジェット・ブラックは同じ1,800円でしたが、カラーモデルは新型のほうが高い傾向がありました。新型はローズ・ゴールド5,000円、エレクトリック・パープル4,800円など、旧型はアーバン・カモフラージュ2,700円が最高でした。型番はコントローラー背面のラベルなどで確認できます。' },
  { q: '壊れたコントローラーは修理と売却のどちらがよいですか？', a: 'SIEの修理料金表では、DUALSHOCK 4の修理／交換は4,950円（税込）です。ジェット・ブラックの買取価格（1,800円）を上回るため、通常カラーでは修理費のほうが高くなります。スティックが勝手に動く場合は、SIEが案内している背面のリセットボタンでのリセットを先にお試しください。' },
  { q: '限定デザインのコントローラーは高く売れますか？', a: '同日の駿河屋では、『ペルソナ５ ザ・ロイヤル』Limited Editionが11,000円、Marvel’s Spider-Man Limited Editionが9,900円で、ジェット・ブラック（1,800円）の5倍以上の価格でした。ただし限定デザインでも3,500〜3,600円のものもあり、モデルによって差があります。' },
  { q: '海外版のDUALSHOCK 4も売れますか？', a: '駿河屋の検索結果では、EU版（ゴールド）が1,500円、海外版のエレクトリック・パープルが4,600円で掲載されていた一方、「メールにてお見積」の表示になっている海外版もありました。国内版と同じ価格とは限らないため、型番で個別にご確認ください。' },
];

export default function Ps4ControllerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'PS4コントローラー（DUALSHOCK 4）の買取価格｜カラー・型番別1,600〜5,000円、限定版は最大11,000円', datePublished: '2026-11-16', dateModified: '2026-11-16', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: 'PS4コントローラーの買取価格' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            PS4コントローラー（DUALSHOCK 4）の買取価格<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>新型・旧型のカラー別価格と限定デザインを駿河屋の公式ページで確認【{SURVEY_DATE}実測】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            DUALSHOCK 4の買取価格は、{SURVEY_DATE}の駿河屋の公式買取検索で国内版の通常カラーが1,600〜5,000円でした。ジェット・ブラックは新型・旧型とも1,800円で、SIEの修理料金4,950円を下回ります。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：{SURVEY_DATE}（価格は同日に駿河屋の公式買取検索で確認）</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：黒は1,800円、カラーモデルは最大5,000円、限定デザインは最大11,000円です</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>新型（CUH-ZCT2J）：</span>ジェット・ブラック1,800円、ローズ・ゴールド5,000円など11色で1,800〜5,000円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>旧型（CUH-ZCT1J）：</span>10色で1,600〜2,700円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>限定デザイン：</span>『ペルソナ５ ザ・ロイヤル』Limited Edition 11,000円が最高でした。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>掲載価格は状態による減額前の金額で、査定額を保証するものではありません。売却の直前に公式ページでご確認ください。</p>
        </section>

        <section className="mb-12" id="zct2">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />新型（CUH-ZCT2J）のカラー別 買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            駿河屋の公式買取検索で「CUH-ZCT2J」を検索し、国内版の通常カラー単品の掲載価格を安い順に並べました。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>型番</th><th>カラー</th><th>駿河屋 買取価格</th></tr></thead>
              <tbody>
                {zct2.map((c) => (
                  <tr key={c.code}>
                    <td className="font-bold text-sm">{c.code}</td>
                    <td className="text-sm">{c.color}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(c.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={`${SURUGAYA_SEARCH}CUH-ZCT2J`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 公式買取検索「CUH-ZCT2J」</a>（{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12" id="zct1">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />旧型（CUH-ZCT1J）のカラー別 買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>型番</th><th>カラー</th><th>駿河屋 買取価格</th></tr></thead>
              <tbody>
                {zct1.map((c) => (
                  <tr key={c.code}>
                    <td className="font-bold text-sm">{c.code}</td>
                    <td className="text-sm">{c.color}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(c.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={`${SURUGAYA_SEARCH}CUH-ZCT1J`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 公式買取検索「CUH-ZCT1J」</a>（{SURVEY_DATE}確認）。
          </p>
          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>実測から分かること</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>黒は新旧で同額：</span>ジェット・ブラックは新型・旧型とも1,800円でした。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>新型のカラーモデルは差が大きい：</span>新型は同じ通常カラーでも1,800円（マグマ・レッドなど）から5,000円（ローズ・ゴールド）まで約2.8倍の開きがありました。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>旧型は2,000円前後に集中：</span>旧型10色のうち7色が1,700〜2,100円でした。</li>
            </ul>
          </div>
        </section>

        <section className="mb-12" id="limited">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />限定デザインの買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>商品</th><th>駿河屋 買取価格</th></tr></thead>
              <tbody>
                {limited.map((c) => (
                  <tr key={c.name}>
                    <td className="font-bold text-sm">{c.name}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(c.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('ワイヤレスコントローラー DUALSHOCK4')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 公式買取検索</a>（{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12" id="repair">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />修理費との比較とリセット方法（SIE公式）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            SIEの修理料金表（2026年3月現在）では、ワイヤレスコントローラー（DUALSHOCK 4）の修理／交換は4,950円（税込）です。通常カラーの買取価格（1,600〜5,000円）と比べると、ローズ・ゴールド（5,000円）を除く全色で修理費のほうが高くなります。
          </p>
          <div className="glass-card p-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>スティックが勝手に動く・反応が悪いとき（SIEの案内）</h3>
            <ol className="space-y-2 text-sm list-decimal pl-5" style={{ color: 'var(--color-text-light)' }}>
              <li>PS4をオフにして電源ケーブルを外します。</li>
              <li>コントローラーの背面、L2ボタン付近にある小さいリセットボタンを見つけます。</li>
              <li>爪楊枝など先の細いもので、穴の中のボタンを3〜5秒間長押しします。</li>
              <li>USBケーブルでPS4本体とコントローラーを接続し、PSボタンを押します。ペアリングされるとライトバーが青になります。</li>
            </ol>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SIE_REPAIR} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>SIE 修理サービス（コントローラーのトラブル・修理料金）</a>（{SURVEY_DATE}確認）。ほかの機種の修理代は<Link href="/knowledge/repair/" style={linkStyle}>ゲーム機の修理料金</Link>にまとめています。
          </p>
        </section>

        <section className="mb-12" id="rules">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />査定で減額される条件（駿河屋の公式記載）</h2>
          <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
            駿河屋の買取基準では、箱（ケース）・説明書・付属品の欠品は大幅な減額対象です。本体・付属品・パッケージの傷み・汚れ・日焼けも減額対象で、程度により買取不可となります。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SURUGAYA_RULES} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 減額基準リスト</a>（{SURVEY_DATE}確認）。
          </p>
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
            <Link href="/knowledge/controller/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲームコントローラーの買取相場</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>Joy-Con・DualSense・Elite</p>
            </Link>
            <Link href="/hardware/ps4/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS4買取ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS4本体の買取価格</p>
            </Link>
            <Link href="/knowledge/ps4-lifespan/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS4の寿命と修理受付</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>型番別の受付終了日</p>
            </Link>
          </div>
        </section>
      </div>

      <AuthorBox />
    </>
  );
}
