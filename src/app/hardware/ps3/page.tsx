import FuruichiCta from '@/components/FuruichiCta';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = 'PS3買取価格｜本体は型番別に8,000〜22,000円、駿河屋とふるいちの公式価格を比較【2026年11月15日実測】';
const DESCRIPTION =
  'PS3（プレイステーション3）の買取価格を、駿河屋とふるいち（古本市場）の公式買取ページで2026年11月15日に確認しました。本体はCECH-2000A〜4300Cの型番・カラー別に8,000〜22,000円、ふるいちの特選ソフト6本は駿河屋と比べて5本で差が500円以内でした。減額の条件も掲載しています。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['PS3 買取', 'PS3 買取価格', 'プレステ3 買取', 'PS3 本体 買取', 'PS3 ソフト 買取'],
  alternates: { canonical: 'https://gamekaitori-biyori.com/hardware/ps3/' },
  openGraph: {
    images: ['/og.png'],
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const SURVEY_DATE = '2026年11月15日';
const SURUGAYA_SEARCH = 'https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=';
const FURUICHI_URL = 'https://www.furu1.net/kaitori/sell_game/ps3';
const SURUGAYA_RULES = 'https://www.suruga-ya.jp/man/hyou/kaitorihin.html';

// 駿河屋 公式買取検索で型番を検索し、掲載された本体単体（同梱版・ソフトセットを除く）の買取価格（2026-11-15）
const bodies = [
  { code: 'CECH-4300C', name: 'チャコール・ブラック（HDD 500GB）', price: 17000 },
  { code: 'CECH-4200B', name: 'チャコール・ブラック（HDD 250GB）', price: 12000 },
  { code: 'CECH-4200BLW', name: 'クラシック・ホワイト（HDD 250GB）', price: 13000 },
  { code: 'CECH-4000B', name: 'チャコール・ブラック（HDD 250GB）', price: 8800 },
  { code: 'CECH-4000BLW', name: 'クラシック・ホワイト（HDD 250GB）', price: 12000 },
  { code: 'CECH-4000BAZ', name: 'アズライト・ブルー（HDD 250GB）', price: 22000 },
  { code: 'CECH-4000BGA', name: 'ガーネット・レッド（HDD 250GB）', price: 17000 },
  { code: 'CECH-3000A', name: 'チャコール・ブラック（HDD 160GB）', price: 8800 },
  { code: 'CECH-3000ALW', name: 'クラシック・ホワイト（HDD 160GB）', price: 14000 },
  { code: 'CECH-2000A', name: 'チャコール・ブラック（HDD 120GB）', price: 8000 },
];

// ふるいち「PS3 高価買取情報」の特選タイトル6本（買取上限金額）と、同じタイトルの駿河屋 公式買取検索の掲載価格（2026-11-15）
type Cell = number | 'mail' | null;
const softs: { title: string; furuichi: number; surugaya: Cell; note: string }[] = [
  { title: 'サイレントヒル ダウンプア', furuichi: 4600, surugaya: 4700, note: '' },
  { title: 'サイレントヒル HDエディション', furuichi: 4000, surugaya: 'mail', note: '駿河屋は「メールにてお見積」の表示' },
  { title: '頭文字D エクストリームステージ', furuichi: 3300, surugaya: 3200, note: '駿河屋は通常版（廉価版は2,700円）' },
  { title: 'ぼくのなつやすみ3 北国篇 小さなボクの大草原', furuichi: 2000, surugaya: 2500, note: '駿河屋は通常版' },
  { title: 'アーマード・コア4', furuichi: 2200, surugaya: 2200, note: '駿河屋は通常版（ベスト版は1,900円）' },
  { title: 'グランツーリスモ6 初回限定版 15周年アニバーサリーボックス', furuichi: 1200, surugaya: 1300, note: '駿河屋の通常版は1,000円' },
];

const yen = (v: Cell) => (v === 'mail' ? 'メールにてお見積' : v == null ? '—' : `${v.toLocaleString('ja-JP')}円`);
const linkStyle = { color: 'var(--color-electric-green)', fontWeight: 700 } as const;

const faqs = [
  { q: 'PS3本体の買取価格はいくらですか？', a: '2026年11月15日に駿河屋の公式買取検索で確認した本体単体の買取価格は、最後の型番であるCECH-4300C（チャコール・ブラック・HDD 500GB）が17,000円、CECH-4200Bが12,000円、CECH-4000Bが8,800円、CECH-3000Aが8,800円、CECH-2000Aが8,000円でした。カラーモデルはブラックより高く、CECH-4000Bのアズライト・ブルーは22,000円です。いずれも付属品・状態による減額前の掲載価格です。' },
  { q: 'PS3はどのモデルが高く売れますか？', a: '当サイトの確認では、チャコール・ブラック同士で比べると最も新しいCECH-4300Cが17,000円で最も高く、CECH-4000BとCECH-3000Aは8,800円でした。同じ型番ではカラーモデルが高い傾向があり、CECH-4000Bはブラック8,800円に対してアズライト・ブルー22,000円・ガーネット・レッド17,000円でした。' },
  { q: 'PS3ソフトは駿河屋とふるいちのどちらが高いですか？', a: 'ふるいちが高価買取情報に掲載しているPS3ソフト6本のうち、駿河屋で価格を照合できた5本では、駿河屋が高いものが3本、ふるいちが高いものが1本、同額が1本でした。差は最大500円（ぼくのなつやすみ3）です。タイトルによって高い店が入れ替わるため、売る前に両方の公式ページで確認することをおすすめします。' },
  { q: '箱や説明書がないPS3でも買い取ってもらえますか？', a: '駿河屋の買取基準では、箱（ケース）・説明書・動作に必要な付属品機器の欠品は大幅な減額対象とされています。また、動作不良品や動作に必要なコントローラー・ケーブル類が欠品しているゲーム機は、一部の商品のみ買取可能と記載されています。付属品をそろえてから査定に出すことをおすすめします。' },
  { q: 'ふるいちの「買取価格」はそのまま支払われますか？', a: 'ふるいちの公式ページでは、掲載金額は買取上限金額（税込）であり、支払う金額を保証するものではなく、査定の結果で決まると記載されています。付属品の欠品や破損・汚損がある場合は減額または買取不可となる場合があり、店舗により取り扱い商品が異なるとも記載されています。' },
];

export default function PS3Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'PS3買取価格｜本体は型番別に8,000〜22,000円、駿河屋とふるいちの公式価格を比較', datePublished: '2026-11-15', dateModified: '2026-11-15', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'PS3 買取価格' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            PS3の買取価格<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>本体の型番別価格とソフト6本を駿河屋・ふるいちの公式ページで比較【{SURVEY_DATE}実測】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            PS3本体の買取価格は、{SURVEY_DATE}の駿河屋の公式買取検索で型番・カラー別に8,000〜22,000円でした。チャコール・ブラックでは最後の型番CECH-4300Cが17,000円で最も高く、旧型のCECH-2000Aは8,000円です。ソフトはふるいちの高価買取情報に掲載された6本を駿河屋の価格と照合しました。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：{SURVEY_DATE}（価格は同日に各店の公式ページで確認）</p>
        </div>
        <FuruichiCta variant="strip" />
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：本体は型番とカラーで2倍以上の差、ソフトは店ごとの差が小さいため両店の確認が目安です</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>本体（駿河屋）：</span>CECH-4300C 17,000円、CECH-4200B 12,000円、CECH-4000B・CECH-3000A 8,800円、CECH-2000A 8,000円（いずれもチャコール・ブラック）。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>カラーモデルは高め：</span>CECH-4000Bはブラック8,800円に対し、アズライト・ブルー22,000円（2.5倍）、ガーネット・レッド17,000円でした。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ソフト（ふるいち特選6本）：</span>駿河屋で照合できた5本のうち、駿河屋が高い3本・ふるいちが高い1本・同額1本で、差はいずれも500円以内でした。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>掲載価格は付属品・状態による減額前の金額で、査定額を保証するものではありません。売却の直前に各店の公式ページでご確認ください。</p>
        </section>

        <section className="mb-12" id="body">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />PS3本体の型番別 買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            駿河屋の公式買取検索で型番を1つずつ検索し、本体単体の掲載価格を記録しました。ソフト同梱版・限定パッケージは除いています。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>型番</th><th>カラー・容量</th><th>駿河屋 買取価格</th><th>出典</th></tr>
              </thead>
              <tbody>
                {bodies.map((b) => (
                  <tr key={b.code}>
                    <td className="font-bold text-sm">{b.code}</td>
                    <td className="text-sm">{b.name}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(b.price)}</td>
                    <td className="text-sm"><a href={`${SURUGAYA_SEARCH}${encodeURIComponent(b.code.replace(/(LW|AZ|GA)$/, ''))}`} target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>駿河屋 買取検索</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>実測から分かること</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>新しい型番ほど高いとは限りません：</span>チャコール・ブラックではCECH-4300C（17,000円）が最も高い一方、CECH-4000B（8,800円）はCECH-3000A（8,800円）と同額で、CECH-4200B（12,000円）を下回りました。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ホワイトはブラックより1,000〜5,200円高い：</span>CECH-4200Bで+1,000円、CECH-4000Bで+3,200円、CECH-3000Aで+5,200円でした。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>限定カラーは最も高い水準：</span>CECH-4000Bのアズライト・ブルー22,000円は、今回確認した本体単体の中で最高値でした。</li>
            </ul>
          </div>
        </section>

        <section className="mb-12" id="soft">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />PS3ソフトの買取価格：ふるいちの特選6本を駿河屋と比較</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            ふるいち（古本市場）の「PS3 高価買取情報」に掲載されている特選タイトル6本の買取上限金額と、同じタイトルを駿河屋の公式買取検索で調べた掲載価格を並べました。駿河屋は版（通常版・廉価版など）ごとに価格が分かれているため、ふるいちの掲載と同じ版の価格を記載しています。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>タイトル</th><th>ふるいち<br /><span className="text-xs font-normal">買取上限金額</span></th><th>駿河屋</th><th>備考</th></tr>
              </thead>
              <tbody>
                {softs.map((s) => (
                  <tr key={s.title}>
                    <td className="font-bold text-sm">{s.title}</td>
                    <td className="text-sm">{yen(s.furuichi)}</td>
                    <td className="text-sm">{yen(s.surugaya)}</td>
                    <td className="text-xs">{s.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
            価格を照合できた5本では、駿河屋が高いものが3本（差100〜500円）、ふるいちが高いものが1本（頭文字D エクストリームステージ・差100円）、同額が1本（アーマード・コア4）でした。ふるいちの公式ページには、店舗限定のレトロゲームソフト買取UPキャンペーン（11月30日まで）の告知がありますが、PS3ソフトが対象かどうかは同ページでは確認できませんでした。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={FURUICHI_URL} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>古本市場 PS3（プレイステーション3）高価買取情報</a>、駿河屋 公式買取検索（いずれも{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12" id="rules">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />査定で減額される条件（各店の公式記載）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>店舗</th><th>公式に記載されている条件</th></tr></thead>
              <tbody>
                <tr>
                  <td className="font-bold text-sm">駿河屋</td>
                  <td className="text-sm">箱（ケース）・説明書・動作に必要な付属品機器の欠品は大幅な減額対象です。本体・付属品・パッケージの傷み・汚れ・日焼けは減額対象で、程度により買取不可となります。ゲーム機本体は内蔵電池切れも減額対象です。動作不良品や、コントローラー・ケーブル類が欠品しているゲーム機は一部の商品のみ買取可能です。</td>
                </tr>
                <tr>
                  <td className="font-bold text-sm">ふるいち</td>
                  <td className="text-sm">掲載金額は買取上限金額（税込）で、常に変動する可能性があります。発売時期やバージョンにより同一商品でも上限金額が適用されない場合があります。支払額は査定の結果で決まり、付属品の欠品や破損・汚損がある場合は減額または買取不可となる場合があります。日本国内正規品の価格で、輸入盤等は対象外です。</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SURUGAYA_RULES} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 買取品の状態について</a>、<a href={FURUICHI_URL} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>古本市場 PS3 高価買取情報</a>（いずれも{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />PS3を売る前に確認すること</h2>
          <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>型番とカラーを確認する：</span>同じPS3でも、上の表のとおり型番とカラーで買取価格が2倍以上変わります。型番を確認してから各店の価格を調べると、比較がしやすくなります。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>付属品をそろえる：</span>駿河屋は動作に必要な付属品の欠品を大幅な減額対象としています。コントローラー・電源ケーブル・AVケーブルと箱・説明書をそろえてから査定に出すことをおすすめします。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>データを消去する：</span>本体に保存したセーブデータなどは、消去してから査定に出してください。売る前の準備全般は<Link href="/knowledge/preparation/" style={linkStyle}>売る前の準備</Link>で解説しています。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>動作しない本体は扱いを確認する：</span>動作不良品の扱いは店舗ごとに異なります。<Link href="/knowledge/broken/" style={linkStyle}>壊れたゲーム機の買取</Link>もあわせてご覧ください。</li>
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
            <Link href="/hardware/ps4/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS4買取ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS4本体の買取価格</p>
            </Link>
            <Link href="/hardware/psp/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PSP買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>型番別の本体価格とソフト比較</p>
            </Link>
            <Link href="/hardware/ps-vita/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS Vita買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PCH-1000・2000のカラー別価格</p>
            </Link>
          </div>
        </section>
      </div>

      <AuthorBox />
    </>
  );
}
