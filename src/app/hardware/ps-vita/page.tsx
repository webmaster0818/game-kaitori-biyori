import FuruichiCta from '@/components/FuruichiCta';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = 'PS Vita買取価格｜PCH-2000はカラー別に14,000〜22,000円、駿河屋とふるいちの公式価格を比較【2026年11月15日実測】';
const DESCRIPTION =
  'PS Vitaの買取価格を駿河屋とふるいち（古本市場）の公式ページで2026年11月15日に確認しました。PCH-2000はカラー11色で14,000〜22,000円、PCH-1000 Wi-Fiモデルは12,000〜18,000円です。ソフト6本の2店比較と減額の条件も掲載しています。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['PS Vita 買取', 'PS Vita 買取価格', 'PSVita 本体 買取', 'PCH-2000 買取', 'PS Vita ソフト 買取'],
  alternates: { canonical: 'https://gamekaitori-biyori.com/hardware/ps-vita/' },
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
const FURUICHI_URL = 'https://www.furu1.net/kaitori/sell_game/psvita';
const SURUGAYA_RULES = 'https://www.suruga-ya.jp/man/hyou/kaitorihin.html';

// 駿河屋 公式買取検索「PCH-2000」の本体単体（Wi-Fiモデル）掲載価格（2026-11-15）。高い順
const pch2000 = [
  { color: 'ライトピンク・ホワイト', price: 22000 },
  { color: 'メタリック・レッド', price: 20000 },
  { color: 'ライムグリーン・ホワイト', price: 18000 },
  { color: 'ピンク・ブラック', price: 18000 },
  { color: 'ホワイト', price: 18000 },
  { color: 'ライトブルー・ホワイト', price: 17000 },
  { color: 'ブラック', price: 16000 },
  { color: 'ネオン・オレンジ', price: 16000 },
  { color: 'アクア・ブルー', price: 15000 },
  { color: 'シルバー', price: 15000 },
  { color: 'カーキ・ブラック', price: 14000 },
];

// 駿河屋 公式買取検索「PCH-1000」「PCH-1100」の本体単体 掲載価格（2026-11-15）
const pch1000 = [
  { code: 'PCH-1000 ZA01', name: 'Wi-Fiモデル クリスタル・ブラック', price: 12000, q: 'PCH-1000' },
  { code: 'PCH-1000 ZA02', name: 'Wi-Fiモデル クリスタル・ホワイト', price: 18000, q: 'PCH-1000' },
  { code: 'PCH-1100 AA01', name: '3G/Wi-Fiモデル クリスタル・ブラック（初回限定版）', price: 12000, q: 'PCH-1100' },
  { code: 'PCH-1100 AB02', name: '3G/Wi-Fiモデル クリスタル・ホワイト（初回限定版）', price: 16000, q: 'PCH-1100' },
];

// ふるいち「PS Vita 高価買取情報」の特選タイトル6本（買取上限金額）と、同じタイトルの駿河屋 公式買取検索の掲載価格（2026-11-15）
type Cell = number | 'mail' | null;
const softs: { title: string; furuichi: number; surugaya: Cell; note: string }[] = [
  { title: '英雄伝説 空の軌跡 the 3rd Evolution', furuichi: 3500, surugaya: 4800, note: '駿河屋は通常版（限定版7,200円）' },
  { title: 'ダンジョントラベラーズ2 王立図書館とマモノの封印', furuichi: 2500, surugaya: 2500, note: '駿河屋は通常版（Best版3,600円）' },
  { title: 'ダンジョントラベラーズ2-2 闇堕ちの乙女とはじまりの書', furuichi: 2000, surugaya: 2800, note: '駿河屋は通常版（限定版5,200円）' },
  { title: '英雄伝説 空の軌跡 SC Evolution', furuichi: 1800, surugaya: 2200, note: '駿河屋は通常版（限定版3,600円）' },
  { title: 'ファイナルファンタジー X/X-2 HD Remaster TWIN PACK', furuichi: 1200, surugaya: null, note: '駿河屋の買取検索では国内版PS Vitaソフトの掲載を確認できず' },
  { title: 'サカつく プロサッカークラブをつくろう！', furuichi: 1000, surugaya: 900, note: '' },
];

const yen = (v: Cell) => (v === 'mail' ? 'メールにてお見積' : v == null ? '照合できず' : `${v.toLocaleString('ja-JP')}円`);
const linkStyle = { color: 'var(--color-electric-green)', fontWeight: 700 } as const;

const faqs = [
  { q: 'PS Vita本体の買取価格はいくらですか？', a: '2026年11月15日に駿河屋の公式買取検索で確認した本体単体の買取価格は、PCH-2000（Wi-Fiモデル）がカラー別に14,000〜22,000円（ブラックは16,000円）、PCH-1000（Wi-Fiモデル）がクリスタル・ブラック12,000円・クリスタル・ホワイト18,000円でした。いずれも付属品・状態による減額前の掲載価格です。' },
  { q: 'PCH-1000とPCH-2000はどちらが高く売れますか？', a: '当サイトの確認では、ブラック同士で比べるとPCH-2000（16,000円）がPCH-1000 クリスタル・ブラック（12,000円）より4,000円高い結果でした。ただしPCH-1000のクリスタル・ホワイトは18,000円で、PCH-2000のブラックより高く、カラーによって順序が入れ替わります。' },
  { q: 'PS Vitaで一番高いカラーは何ですか？', a: '2026年11月15日の駿河屋の掲載では、PCH-2000のライトピンク・ホワイトが22,000円で最も高く、メタリック・レッド20,000円が続きました。最も低いのはカーキ・ブラックの14,000円で、同じPCH-2000でもカラーにより8,000円の差がありました。' },
  { q: 'PS Vitaソフトは駿河屋とふるいちのどちらが高いですか？', a: 'ふるいちが高価買取情報に掲載しているPS Vitaソフト6本のうち、駿河屋で価格を照合できた5本では、駿河屋が高いものが3本、ふるいちが高いものが1本（サカつく・差100円）、同額が1本でした。最も差が大きかったのは英雄伝説 空の軌跡 the 3rd Evolutionで、駿河屋4,800円・ふるいち3,500円（差1,300円）です。' },
  { q: 'メモリーカードは本体と一緒に売れますか？', a: 'メモリーカードにはセーブデータなどが残るため、本体と一緒に売る場合はデータを消去してから査定に出してください。周辺機器の買取可否と価格は店舗ごとに異なるため、各店の公式買取ページでご確認ください。' },
];

export default function PSVitaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'PS Vita買取価格｜PCH-2000はカラー別に14,000〜22,000円、駿河屋とふるいちの公式価格を比較', datePublished: '2026-11-15', dateModified: '2026-11-15', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'PS Vita 買取価格' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            PS Vitaの買取価格<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>PCH-2000のカラー別価格・PCH-1000とソフト6本を駿河屋・ふるいちで比較【{SURVEY_DATE}実測】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            PS Vita本体の買取価格は、{SURVEY_DATE}の駿河屋の公式買取検索でPCH-2000がカラー11色で14,000〜22,000円、PCH-1000 Wi-Fiモデルが12,000〜18,000円でした。ソフトはふるいちの高価買取情報に掲載された6本を駿河屋の価格と照合しています。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：{SURVEY_DATE}（価格は同日に各店の公式ページで確認）</p>
        </div>
        <FuruichiCta variant="strip" />
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：PS Vitaはカラーで最大8,000円の差、ソフトは駿河屋が高いタイトルが多い結果でした</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>PCH-2000（駿河屋）：</span>最高はライトピンク・ホワイト22,000円、最低はカーキ・ブラック14,000円、ブラックは16,000円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>PCH-1000（駿河屋）：</span>Wi-Fiモデルのクリスタル・ブラック12,000円、クリスタル・ホワイト18,000円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ソフト（ふるいち特選6本）：</span>駿河屋で照合できた5本は、駿河屋が高い3本（差400〜1,300円）・ふるいちが高い1本（差100円）・同額1本でした。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>掲載価格は付属品・状態による減額前の金額で、査定額を保証するものではありません。売却の直前に各店の公式ページでご確認ください。</p>
        </section>

        <section className="mb-12" id="pch2000">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />PCH-2000のカラー別 買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            駿河屋の公式買取検索で「PCH-2000」を検索し、Wi-Fiモデル本体単体の掲載価格を高い順に並べました。ソフト同梱版・限定パッケージは除いています。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>カラー（PCH-2000）</th><th>駿河屋 買取価格</th></tr></thead>
              <tbody>
                {pch2000.map((b) => (
                  <tr key={b.color}>
                    <td className="font-bold text-sm">{b.color}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(b.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={`${SURUGAYA_SEARCH}PCH-2000`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 買取検索「PCH-2000」</a>（{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12" id="pch1000">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />PCH-1000・PCH-1100の買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>型番</th><th>モデル・カラー</th><th>駿河屋 買取価格</th><th>出典</th></tr></thead>
              <tbody>
                {pch1000.map((b) => (
                  <tr key={b.code}>
                    <td className="font-bold text-sm">{b.code}</td>
                    <td className="text-sm">{b.name}</td>
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
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ブラック同士ではPCH-2000が4,000円高い：</span>PCH-2000 ブラック16,000円に対し、PCH-1000 クリスタル・ブラックは12,000円でした。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ホワイトはブラックより高い：</span>PCH-1000ではホワイトがブラックより6,000円、PCH-1100（初回限定版）では4,000円高い掲載でした。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>3G/Wi-Fiモデルは同額：</span>PCH-1100 クリスタル・ブラック（初回限定版）は12,000円で、Wi-FiモデルのPCH-1000 クリスタル・ブラックと同じでした。</li>
            </ul>
          </div>
        </section>

        <section className="mb-12" id="soft">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />PS Vitaソフトの買取価格：ふるいちの特選6本を駿河屋と比較</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            ふるいち（古本市場）の「PS Vita 高価買取情報」に掲載されている特選タイトル6本の買取上限金額と、同じタイトルを駿河屋の公式買取検索で調べた掲載価格です。駿河屋は通常版の価格を記載し、他の版の価格は備考に示しました。
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
            PS Vitaソフトは、PS3・PSPに比べて店舗間の差が大きいタイトルがありました。駿河屋では限定版が通常版の1.5〜1.9倍の価格で掲載されているため、限定版をお持ちの場合は版を確認してから比較することをおすすめします。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={FURUICHI_URL} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>古本市場 PS Vita（プレイステーションヴィータ）高価買取情報</a>、駿河屋 公式買取検索（いずれも{SURVEY_DATE}確認）。
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
                  <td className="text-sm">掲載金額は買取上限金額（税込）で、常に変動する可能性があります。発売時期やバージョンにより同一商品でも上限金額が適用されない場合があります。支払額は査定の結果で決まり、付属品の欠品や破損・汚損がある場合は減額または買取不可となる場合があります。</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SURUGAYA_RULES} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 買取品の状態について</a>、<a href={FURUICHI_URL} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>古本市場 PS Vita 高価買取情報</a>（いずれも{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />PS Vitaを売る前に確認すること</h2>
          <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>型番とカラーを確認する：</span>PCH-2000だけでもカラーで8,000円の差があります。型番とカラー名を確認してから各店の価格を調べると、比較がしやすくなります。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>データを消去する：</span>本体とメモリーカードのデータは消去してから査定に出してください。売る前の準備全般は<Link href="/knowledge/preparation/" style={linkStyle}>売る前の準備</Link>で解説しています。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>付属品をそろえる：</span>ACアダプター・USBケーブル・箱・説明書の欠品は減額の対象になります。</li>
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
            <Link href="/hardware/psp/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PSP買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PSP-1000〜3000・PSP goの本体価格</p>
            </Link>
            <Link href="/hardware/ps3/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS3買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>型番別の本体価格とソフト比較</p>
            </Link>
            <Link href="/hardware/ps4/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS4買取ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS4本体の買取価格</p>
            </Link>
          </div>
        </section>
      </div>

      <AuthorBox />
    </>
  );
}
