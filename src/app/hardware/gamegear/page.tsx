import FuruichiCta from '@/components/FuruichiCta';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = 'ゲームギアの買取価格｜本体38,000円・カラー本体42,000〜72,000円・ミクロ5,000円〜（駿河屋）【2026年11月19日実測】';
const DESCRIPTION =
  'ゲームギアの買取価格を駿河屋の公式買取検索で2026年11月19日に確認しました。本体38,000円、カラー本体42,000〜72,000円、ソフト同梱版35,000〜75,000円、ゲームギアミクロ5,000〜14,000円、ジャンク品の本体1,500円です。高額ソフトと減額条件もまとめています。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['ゲームギア 買取', 'ゲームギア 買取価格', 'ゲームギア 本体 買取', 'ゲームギアミクロ 買取', 'ゲームギア ソフト 買取'],
  alternates: { canonical: 'https://gamekaitori-biyori.com/hardware/gamegear/' },
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

// 駿河屋 公式買取検索「ゲームギアハード」を価格の高い順に表示した結果と「ゲームギア 本体」の結果（2026-11-19）。国内版の本体のみ
const colors = [
  { name: 'ゲームギア本体（スモーク）', code: 'HGG-3213', release: '1994/11/10', price: 72000, bihin: 86400 },
  { name: 'ゲームギア本体（ブラック）', code: '—', release: '1995/09/22', price: 48000, bihin: 57600 },
  { name: 'ゲームギア本体（ブルー）', code: 'HGG-3211', release: '1994/11/10', price: 48000, bihin: 57600 },
  { name: 'ゲームギア本体（イエロー）', code: '—', release: '1994/11/10', price: 42000, bihin: 50400 },
  { name: 'ゲームギアレッド', code: '—', release: '1994/12/09', price: 38000, bihin: 45600 },
  { name: 'ゲームギア本体', code: '—', release: '—', price: 38000, bihin: 45600 },
];

const bundles = [
  { name: 'ゲームギア本体+1（コカコーラキッド）', code: 'HGG-3208', price: 75000 },
  { name: 'ゲームギア本体 ホワイト［TVチューナー+キャリングケース同梱限定版］', code: '—', price: 72000 },
  { name: 'ゲームギア+なぞぷよ', code: 'HGHGG-3230', price: 65000 },
  { name: 'ゲームギア本体+レイアース', code: 'HGG-3214', price: 57000 },
  { name: 'ゲームギア本体+Jリーグ', code: 'HGG-3209', price: 45000 },
  { name: 'ゲームギア本体 + ぷよぷよ通', code: '—', price: 45000 },
  { name: 'ゲームギア本体+忍空', code: '—', price: 45000 },
  { name: 'ゲームギア+1 ソニック2', code: 'HGG-3203', price: 38000 },
  { name: 'ゲームギア本体 + ソニックドリフト', code: '—', price: 35000 },
];

// 「ゲームギアミクロ」の検索結果（同日）
const micros = [
  { name: 'ゲームギアミクロ 4色セット DXパック スモークコレクターズエディション［セガストア限定］', price: 36000 },
  { name: 'ゲームギアミクロ ピンズ＆コレクションボックス［楽天ブックス限定］', price: 18000 },
  { name: 'ゲームギアミクロ ホワイト', price: 14000 },
  { name: 'ゲームギアミクロ ブラック', price: 7500 },
  { name: 'ゲームギアミクロ ブルー', price: 7400 },
  { name: 'ゲームギアミクロ イエロー', price: 5300 },
  { name: 'ゲームギアミクロ レッド', price: 5000 },
];

// 「ゲームギアソフト」を価格の高い順に表示した上位（同日）
const softs = [
  { name: 'GG ズールのゆめぼうけん', release: '1994/07/29', price: 490000 },
  { name: 'パンツァードラグーンMINI', release: '1996/11/22', price: 132000 },
  { name: 'GG フォアマンフォーリアル', release: '1995/10/27', price: 112000 },
  { name: 'T2 ジャッジメントデイ', release: '1994/09/30', price: 94000 },
  { name: '剣勇伝説ヤイバ', release: '1994/09/09', price: 84000 },
];

const yen = (v: number) => `${v.toLocaleString('ja-JP')}円`;
const linkStyle = { color: 'var(--color-electric-green)', fontWeight: 700 } as const;
const src = (q: string, label: string) => (
  <a href={`${SURUGAYA_SEARCH}${encodeURIComponent(q)}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>{label}</a>
);

const faqs = [
  { q: 'ゲームギア本体の買取価格はいくらですか？', a: '2026年11月19日に駿河屋の公式買取検索で確認した掲載価格は、「ゲームギア本体」が38,000円（美品45,600円）でした。カラー本体はイエロー42,000円、ブルー・ブラック48,000円、スモーク72,000円です。付属品・状態による減額前の金額です。' },
  { q: 'ゲームギアミクロはいくらで売れますか？', a: '同日の掲載価格は、ホワイト14,000円、ブラック7,500円、ブルー7,400円、イエロー5,300円、レッド5,000円でした。4色セットのDXパック（セガストア限定）は36,000円です。' },
  { q: '動かないゲームギアも買い取ってもらえますか？', a: '駿河屋には「［状態：ジャンク品］ゲームギア本体」の商品があり、2026年11月19日の掲載価格は1,500円でした。動作品の「ゲームギア本体」（38,000円）の約3.9%です。' },
  { q: '高く売れるゲームギアのソフトはありますか？', a: '同日に「ゲームギアソフト」を価格の高い順に表示したところ、最高は「GG ズールのゆめぼうけん」の490,000円でした。上位5本はすべて84,000円以上で、いずれも1994〜1996年の発売です。ソフトは書名で個別に買取検索を確認してください。' },
  { q: '古くて黄ばんだ本体は減額されますか？', a: '駿河屋の減額基準リストには「古い商品の経年劣化は、減額対象とはなりません」と記載されています。一方で、傷み・汚れ・日焼け、内蔵電池切れは減額対象とされています。' },
];

export default function GameGearPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'ゲームギアの買取価格｜本体38,000円・カラー本体42,000〜72,000円・ミクロ5,000円〜（駿河屋）', datePublished: '2026-11-19', dateModified: '2026-11-19', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'ゲームギア 買取価格' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲームギアの買取価格<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>本体・カラー本体・同梱版・ゲームギアミクロを駿河屋の公式ページで確認【{SURVEY_DATE}実測】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲームギアの買取価格は、{SURVEY_DATE}の駿河屋の公式買取検索で「ゲームギア本体」38,000円、カラー本体42,000〜72,000円でした。2020年発売のゲームギアミクロは、単品で5,000〜14,000円です。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：{SURVEY_DATE}（価格は同日に駿河屋の公式買取検索で確認）</p>
        </div>
        <FuruichiCta variant="strip" />
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：本体は38,000円、カラーや同梱版はさらに高く掲載されています</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>本体：</span>「ゲームギア本体」38,000円（美品45,600円）。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>カラー本体：</span>イエロー42,000円、ブルー・ブラック48,000円、スモーク72,000円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ソフト同梱版：</span>35,000〜75,000円。最高は「ゲームギア本体+1（コカコーラキッド）」です。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ゲームギアミクロ：</span>単品5,000〜14,000円。色によって約2.8倍の差があります。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ジャンク品：</span>本体1,500円。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>掲載価格は付属品・状態による減額前の金額で、査定額を保証するものではありません。駿河屋の買取価格は随時変わるため、売却の直前に公式ページでご確認ください。</p>
        </section>

        <section className="mb-12" id="price">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />本体のカラー別買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>本体</th><th>型番</th><th>発売日（駿河屋の記載）</th><th>買取価格</th><th>美品</th></tr></thead>
              <tbody>
                {colors.map((it) => (
                  <tr key={it.name}>
                    <td className="font-bold text-sm">{it.name}</td>
                    <td className="text-sm">{it.code}</td>
                    <td className="text-sm">{it.release}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(it.price)}</td>
                    <td className="text-sm">{yen(it.bihin)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：駿河屋 公式買取検索{src('ゲームギアハード', '「ゲームギアハード」')}（価格の高い順）・{src('ゲームギア 本体', '「ゲームギア 本体」')}（{SURVEY_DATE}確認）。型番・発売日が駿河屋に記載されていない商品は「—」としています。
          </p>
          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>実測から分かること</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>色で最大34,000円の差：</span>スモーク（72,000円）は「ゲームギア本体」（38,000円）の約1.9倍でした。本体の色と型番を確かめてから申し込むと、査定の商品と照合しやすくなります。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>同梱ソフトがそろうと高い：</span>表のソフト同梱版9商品のうち8商品は、「ゲームギア本体」と同額の38,000円以上でした。同梱ソフトと外箱が残っていれば、一緒に送ってください。</li>
            </ul>
          </div>
        </section>

        <section className="mb-12" id="bundle">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ソフト同梱版・限定版の買取価格</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>本体セット</th><th>型番</th><th>買取価格</th></tr></thead>
              <tbody>
                {bundles.map((it) => (
                  <tr key={it.name}>
                    <td className="font-bold text-sm">{it.name}</td>
                    <td className="text-sm">{it.code}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(it.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋 公式買取検索{src('ゲームギアハード', '「ゲームギアハード」')}（{SURVEY_DATE}確認）。</p>
        </section>

        <section className="mb-12" id="micro">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ゲームギアミクロの買取価格</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>商品</th><th>買取価格</th></tr></thead>
              <tbody>
                {micros.map((it) => (
                  <tr key={it.name}>
                    <td className="font-bold text-sm">{it.name}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(it.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
            単品ではホワイト（14,000円）が最も高く、レッド（5,000円）の2.8倍でした。限定セットは中身の模型・ピンズなどがそろっていることが前提の価格です。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋 公式買取検索{src('ゲームギアミクロ', '「ゲームギアミクロ」')}（{SURVEY_DATE}確認）。</p>
        </section>

        <section className="mb-12" id="soft">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />買取価格の高いゲームギアソフト</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>ソフト</th><th>発売日（駿河屋の記載）</th><th>買取価格</th></tr></thead>
              <tbody>
                {softs.map((it) => (
                  <tr key={it.name}>
                    <td className="font-bold text-sm">{it.name}</td>
                    <td className="text-sm">{it.release}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(it.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋 公式買取検索{src('ゲームギアソフト', '「ゲームギアソフト」')}を価格の高い順に表示した上位5本（{SURVEY_DATE}確認）。</p>
        </section>

        <section className="mb-12" id="junk">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />動かない本体（ジャンク品）の買取価格</h2>
          <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
            駿河屋の「［状態：ジャンク品］ゲームギア本体」は1,500円、「【ジャンク品】ゲームギア本体（レイアースレッドカラー）」は5,900円でした。動作品の「ゲームギア本体」（38,000円）と比べると約3.9%で、動作するかどうかで金額が大きく変わります。故障したゲーム機の売り方は<Link href="/knowledge/broken/" style={linkStyle}>壊れたゲーム機の買取</Link>で解説しています。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋 公式買取検索{src('ジャンク品 ゲームギア本体', '「ジャンク品 ゲームギア本体」')}（{SURVEY_DATE}確認）。</p>
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
            <Link href="/hardware/megadrive/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>メガドライブの買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>本体・ミニ・メガCD</p>
            </Link>
            <Link href="/hardware/wonderswan/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ワンダースワンの買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>初代・カラー・スワンクリスタル</p>
            </Link>
            <Link href="/hardware/gameboy/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲームボーイの買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>GB・GBA系の本体</p>
            </Link>
          </div>
        </section>
      </div>

      <AuthorBox />
    </>
  );
}
