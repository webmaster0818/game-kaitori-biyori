import FuruichiCta from '@/components/FuruichiCta';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = 'PSP買取価格｜PSP-3000は16,000円・PSP goは18,000円、駿河屋とふるいちの公式価格を比較【2026年11月15日実測】';
const DESCRIPTION =
  'PSPの買取価格を駿河屋とふるいち（古本市場）の公式ページで2026年11月15日に確認しました。本体はPSP goが18,000円、PSP-3000が16,000円、PSP-2000が10,000円、PSP-1000が8,800〜9,600円です。ソフト6本の2店比較と減額の条件も掲載しています。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['PSP 買取', 'PSP 買取価格', 'PSP 本体 買取', 'PSP go 買取', 'PSP ソフト 買取'],
  alternates: { canonical: 'https://gamekaitori-biyori.com/hardware/psp/' },
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
const FURUICHI_URL = 'https://www.furu1.net/kaitori/sell_game/psp';
const SURUGAYA_RULES = 'https://www.suruga-ya.jp/man/hyou/kaitorihin.html';

// 駿河屋 公式買取検索の掲載価格（本体単体・バリューパック等のセットと海外版を除く・2026-11-15）
const bodies = [
  { code: 'PSP-N1000', model: 'PSP go', name: 'ピアノ・ブラック', price: 18000, q: 'PSP go' },
  { code: 'PSP-3000PB', model: 'PSP-3000', name: 'ピアノ・ブラック', price: 16000, q: 'PSP-3000 PB' },
  { code: 'PSP-2000PB', model: 'PSP-2000', name: 'ピアノ・ブラック', price: 10000, q: 'プレイステーション・ポータブル ピアノ・ブラック' },
  { code: 'PSP-1000', model: 'PSP-1000', name: 'ブラック', price: 9600, q: 'プレイステーション・ポータブル ブラック' },
  { code: 'PSP-1000PK', model: 'PSP-1000', name: 'ピンク', price: 8800, q: 'PSP-1000' },
];

// ふるいち「PSP 高価買取情報」の特選タイトル6本（買取上限金額）と、同じタイトルの駿河屋 公式買取検索の掲載価格（2026-11-15）
type Cell = number | 'mail' | null;
const softs: { title: string; furuichi: number; surugaya: Cell; note: string }[] = [
  { title: 'ペルソナ2 罰', furuichi: 6000, surugaya: null, note: '駿河屋の買取検索ではPSP版ソフトの掲載を確認できず' },
  { title: 'ぼくのなつやすみ ポータブル2 ナゾナゾ姉妹と沈没船の秘密!', furuichi: 5000, surugaya: 5500, note: '駿河屋は通常版（Best版は「メールにてお見積」）' },
  { title: '機動戦士ガンダム ギレンの野望 アクシズの脅威V', furuichi: 4800, surugaya: 4300, note: '駿河屋は通常版' },
  { title: 'フェイト/エクストラCCC', furuichi: 2000, surugaya: 1600, note: '駿河屋は通常版（Best版2,300円・限定版3,400円）' },
  { title: 'ぼくのなつやすみ4 瀬戸内少年探偵団、ボクと秘密の地図', furuichi: 1700, surugaya: 1800, note: '駿河屋は通常版（Best版2,300円）' },
  { title: 'スーパーロボット大戦A ポータブル', furuichi: 1300, surugaya: 'mail', note: '駿河屋は「メールにてお見積」の表示' },
];

const yen = (v: Cell) => (v === 'mail' ? 'メールにてお見積' : v == null ? '照合できず' : `${v.toLocaleString('ja-JP')}円`);
const linkStyle = { color: 'var(--color-electric-green)', fontWeight: 700 } as const;

const faqs = [
  { q: 'PSP本体の買取価格はいくらですか？', a: '2026年11月15日に駿河屋の公式買取検索で確認した本体単体の買取価格は、PSP go（PSP-N1000・ピアノ・ブラック）が18,000円、PSP-3000（ピアノ・ブラック）が16,000円、PSP-2000（ピアノ・ブラック）が10,000円、PSP-1000がブラック9,600円・ピンク8,800円でした。いずれも付属品・状態による減額前の掲載価格です。' },
  { q: 'PSPはどのモデルが高く売れますか？', a: '当サイトの確認では、PSP goの18,000円が最も高く、次いでPSP-3000の16,000円でした。PSP-2000は10,000円、PSP-1000は8,800〜9,600円で、PSP-3000とPSP-2000の差は6,000円です。PSP-E1000は同日の駿河屋の買取検索では国内版本体の掲載を確認できませんでした。' },
  { q: 'PSPソフトは駿河屋とふるいちのどちらが高いですか？', a: 'ふるいちが高価買取情報に掲載しているPSPソフト6本のうち、駿河屋で価格を照合できた4本では、駿河屋が高いものが2本（ぼくのなつやすみ ポータブル2・ぼくのなつやすみ4）、ふるいちが高いものが2本（ギレンの野望 アクシズの脅威V・フェイト/エクストラCCC）で、差は100〜500円でした。タイトルごとに高い店が異なるため、両方の公式ページで確認することをおすすめします。' },
  { q: 'バリューパックやセット品も買い取ってもらえますか？', a: '駿河屋の買取検索には、PSP本体のバリューパックも別の商品として掲載されています。例えばPSP-3000 ピアノ・ブラックのバリューパック（PSP-3000KPB）は24,000円で、本体単体（16,000円）より高い価格でした（2026年11月15日確認）。セットの内容物が欠けると減額対象となるため、購入時の内容物をそろえて査定に出すことをおすすめします。' },
  { q: 'バッテリーが劣化したPSPでも売れますか？', a: '駿河屋の買取基準では、動作に必要な付属品機器の欠品は大幅な減額対象とされ、動作不良品は一部の商品のみ買取可能と記載されています。バッテリーの劣化に限った基準は公開ページでは確認できなかったため、査定前に各店へお問い合わせください。' },
];

export default function PSPPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'PSP買取価格｜PSP-3000は16,000円・PSP goは18,000円、駿河屋とふるいちの公式価格を比較', datePublished: '2026-11-15', dateModified: '2026-11-15', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'PSP 買取価格' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            PSPの買取価格<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>PSP-1000〜3000・PSP goの本体価格とソフト6本を駿河屋・ふるいちで比較【{SURVEY_DATE}実測】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            PSP本体の買取価格は、{SURVEY_DATE}の駿河屋の公式買取検索でPSP goが18,000円、PSP-3000が16,000円、PSP-2000が10,000円、PSP-1000が8,800〜9,600円でした。ソフトはふるいちの高価買取情報に掲載された6本を駿河屋の価格と照合しています。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：{SURVEY_DATE}（価格は同日に各店の公式ページで確認）</p>
        </div>
        <FuruichiCta variant="strip" />
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：本体はPSP goとPSP-3000が高く、ソフトはタイトルごとに高い店が異なります</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>本体（駿河屋）：</span>PSP go 18,000円、PSP-3000 16,000円、PSP-2000 10,000円、PSP-1000 8,800〜9,600円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>PSP-3000とPSP-2000の差は6,000円：</span>同じピアノ・ブラックで比べると、PSP-3000はPSP-2000の1.6倍でした。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ソフト（ふるいち特選6本）：</span>駿河屋で照合できた4本は、駿河屋が高い2本・ふるいちが高い2本で、差は100〜500円でした。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>掲載価格は付属品・状態による減額前の金額で、査定額を保証するものではありません。売却の直前に各店の公式ページでご確認ください。</p>
        </section>

        <section className="mb-12" id="body">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />PSP本体のモデル別 買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            駿河屋の公式買取検索で、国内版の本体単体の掲載価格を記録しました。バリューパックなどのセット品と海外版は除いています。PSP-E1000は、同日の検索では国内版本体の掲載を確認できませんでした。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>モデル</th><th>型番・カラー</th><th>駿河屋 買取価格</th><th>出典</th></tr>
              </thead>
              <tbody>
                {bodies.map((b) => (
                  <tr key={b.code}>
                    <td className="font-bold text-sm">{b.model}</td>
                    <td className="text-sm">{b.code}（{b.name}）</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(b.price)}</td>
                    <td className="text-sm"><a href={`${SURUGAYA_SEARCH}${encodeURIComponent(b.q)}`} target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>駿河屋 買取検索</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>実測から分かること</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>PSP goが最も高い：</span>PSP go（18,000円）が、今回確認した国内版本体単体の中で最高値でした。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>PSP-2000とPSP-1000の差は小さい：</span>PSP-2000（10,000円）とPSP-1000 ブラック（9,600円）の差は400円で、PSP-3000との差（6,000円）に比べて小さくなっています。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>セット品は別の価格：</span>PSP-3000 ピアノ・ブラックのバリューパック（PSP-3000KPB）は24,000円で、本体単体より8,000円高い掲載でした。</li>
            </ul>
          </div>
        </section>

        <section className="mb-12" id="soft">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />PSPソフトの買取価格：ふるいちの特選6本を駿河屋と比較</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            ふるいち（古本市場）の「PSP 高価買取情報」に掲載されている特選タイトル6本の買取上限金額と、同じタイトルを駿河屋の公式買取検索で調べた掲載価格です。駿河屋は版ごとに価格が分かれているため、通常版の価格を記載し、他の版の価格は備考に示しました。
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
            照合できた4本の差は100〜500円で、高い店はタイトルごとに入れ替わりました。駿河屋ではBest版・限定版が通常版より高い例（フェイト/エクストラCCCのBest版2,300円など）があるため、手元のソフトの版を確認してから比較することをおすすめします。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={FURUICHI_URL} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>古本市場 PSP（プレイステーションポータブル）高価買取情報</a>、駿河屋 公式買取検索（いずれも{SURVEY_DATE}確認）。
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
                  <td className="text-sm">箱（ケース）・説明書・動作に必要な付属品機器の欠品は大幅な減額対象です。本体・付属品・パッケージの傷み・汚れ・日焼けは減額対象で、程度により買取不可となります。動作不良品や、動作に必要な付属品が欠品しているゲーム機は一部の商品のみ買取可能です。</td>
                </tr>
                <tr>
                  <td className="font-bold text-sm">ふるいち</td>
                  <td className="text-sm">掲載金額は買取上限金額（税込）で、常に変動する可能性があります。支払額は査定の結果で決まり、付属品の欠品や破損・汚損がある場合は減額または買取不可となる場合があります。店舗により取り扱い商品が異なり、日本国内正規品の価格（輸入盤等は対象外）です。</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SURUGAYA_RULES} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 買取品の状態について</a>、<a href={FURUICHI_URL} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>古本市場 PSP 高価買取情報</a>（いずれも{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />PSPを売る前に確認すること</h2>
          <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>モデルを確認する：</span>PSP-3000とPSP-2000は外見が似ていますが、買取価格は6,000円異なります。型番を確認してから価格を調べることをおすすめします。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>メモリースティックを抜く：</span>セーブデータや写真が残ったメモリースティックは、本体から抜いて手元に残すか、データを消去してから査定に出してください。売る前の準備全般は<Link href="/knowledge/preparation/" style={linkStyle}>売る前の準備</Link>で解説しています。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>付属品をそろえる：</span>ACアダプター・バッテリーパック・箱・説明書の欠品は減額の対象になります。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>動作しない本体：</span><Link href="/knowledge/broken/" style={linkStyle}>壊れたゲーム機の買取</Link>もあわせてご覧ください。</li>
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
            <Link href="/hardware/ps-vita/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS Vita買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PCH-1000・2000のカラー別価格</p>
            </Link>
            <Link href="/hardware/ps3/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS3買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>型番別の本体価格とソフト比較</p>
            </Link>
            <Link href="/hardware/3ds/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>3DS・DS買取ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>携帯ゲーム機の買取</p>
            </Link>
          </div>
        </section>
      </div>

      <AuthorBox />
    </>
  );
}
