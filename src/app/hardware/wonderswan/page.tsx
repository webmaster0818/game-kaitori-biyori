import FuruichiCta from '@/components/FuruichiCta';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = 'ワンダースワンの買取価格｜初代8,500〜12,000円・カラー8,100〜22,000円・スワンクリスタル22,000〜40,000円（駿河屋）【2026年11月19日実測】';
const DESCRIPTION =
  'ワンダースワンの買取価格を駿河屋の公式買取検索で2026年11月19日に確認しました。初代の本体8,500〜12,000円、ワンダースワンカラー8,100〜22,000円、スワンクリスタル22,000〜40,000円です。限定版・高額ソフト・ジャンク品の価格と減額条件もまとめています。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['ワンダースワン 買取', 'ワンダースワン 買取価格', 'ワンダースワンカラー 買取', 'スワンクリスタル 買取', 'ワンダースワン ソフト 買取'],
  alternates: { canonical: 'https://gamekaitori-biyori.com/hardware/wonderswan/' },
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

// 駿河屋 公式買取検索「ワンダースワン本体」「ワンダースワンカラー 本体」「スワンクリスタル」の掲載価格（2026-11-19）。通常カラーの本体のみ
const models = [
  {
    model: 'スワンクリスタル（2002年）',
    items: [
      { name: 'スワンクリスタル本体（クリアブラック）', code: 'SWJ-555T2B', price: 40000, bihin: 52000 },
      { name: 'スワンクリスタル本体（クリアブルー）', code: 'SWJ-555T2B', price: 32000, bihin: 38400 },
      { name: 'スワンクリスタル本体（ブルーバイオレット）', code: 'SWJ-555T1B', price: 24000, bihin: null },
      { name: 'スワンクリスタル本体（ワインレッド）', code: 'SWJ-555T1R', price: 22000, bihin: 28600 },
    ],
  },
  {
    model: 'ワンダースワンカラー（2000年）',
    items: [
      { name: 'ワンダースワンカラー本体 クリスタルオレンジ', code: 'SWJ-777C1D', price: 22000, bihin: 28600 },
      { name: 'ワンダースワンカラー本体 クリスタルブルー', code: 'SWJ-777C1B', price: 16000, bihin: 20800 },
      { name: 'ワンダースワンカラー本体 ピュアクリスタル', code: '—', price: 16000, bihin: 20800 },
      { name: 'ワンダースワンカラー本体 パールピンク', code: 'SWJ-777C2P', price: 11500, bihin: 15000 },
      { name: 'ワンダースワンカラー本体 パールブルー', code: 'SWJ-777C2B', price: 11000, bihin: 14300 },
      { name: 'ワンダースワンカラー本体 クリスタルブラック', code: 'SWJ-777C1K', price: 8100, bihin: 9700 },
    ],
  },
  {
    model: 'ワンダースワン（1999年）',
    items: [
      { name: 'ワンダースワン本体 スケルトンブルー', code: 'SWJ-77701B', price: 12000, bihin: 14400 },
      { name: 'ワンダースワン本体 シャーベットメロン', code: 'SWJ-77704S', price: 12000, bihin: 15600 },
      { name: 'ワンダースワン本体 スケルトンピンク', code: 'SWJ-77701P', price: 9500, bihin: 11500 },
      { name: 'ワンダースワン本体 ソーダブルー', code: 'SWJ-77704R', price: 8500, bihin: 11100 },
      { name: 'ワンダースワン本体 シルバーメタリック', code: 'SWJ-77702M', price: 8500, bihin: 11100 },
    ],
  },
];

// 「ワンダースワン 本体」「スワンクリスタル」「ワンダースワンカラー 本体」を価格の高い順に表示した結果のうち、限定カラー・キャラクター仕様の本体
const limited = [
  { name: 'ワンダースワン本体 コロコロコミックプレゼント版（迷彩）', price: 110000 },
  { name: 'ワンダースワン本体 電撃王限定カラー', price: 110000 },
  { name: 'スワンクリスタル本体 ワンピースグランドバトル仕様（ブルーバイオレット）', price: 95000 },
  { name: 'スワンクリスタル（ワインレッド：電撃GAMES版）', price: 80000 },
  { name: 'ワンダースワンカラー本体 ガンダムバージョン', price: 50000 },
  { name: 'ワンダースワンカラー本体 シャアザクバージョン', price: 42000 },
];

const junks = [
  { name: 'ワンダースワン本体', price: 400 },
  { name: 'ワンダースワンカラー本体', price: 1200 },
  { name: 'スワンクリスタル本体', price: 3900 },
];

// 「ワンダースワンソフト」を価格の高い順に表示した上位5本
const softs = [
  { name: 'DICING KNIGHT（だいしんぐないと）［中野イベント専売版］', price: 600000 },
  { name: 'DICING KNIGHT.（だいしんぐないと ピリオド）', price: 360000 },
  { name: 'SDガンダム オペレーションU.C. スペシャルパッケージ', price: 192000 },
  { name: 'デジモンアドベンチャー キャンペーン限定バージョン', price: 140000 },
  { name: 'RUN=DIM（ランディム）', price: 79000 },
];

const yen = (v: number) => `${v.toLocaleString('ja-JP')}円`;
const linkStyle = { color: 'var(--color-electric-green)', fontWeight: 700 } as const;
const src = (q: string, label: string) => (
  <a href={`${SURUGAYA_SEARCH}${encodeURIComponent(q)}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>{label}</a>
);

const faqs = [
  { q: 'ワンダースワンの買取価格はいくらですか？', a: '2026年11月19日に駿河屋の公式買取検索で確認した通常カラーの本体の掲載価格は、初代のワンダースワンが8,500〜12,000円、ワンダースワンカラーが8,100〜22,000円、スワンクリスタルが22,000〜40,000円でした。付属品・状態による減額前の金額です。' },
  { q: '一番高く売れるのはどの本体ですか？', a: '通常カラーでは、スワンクリスタル本体（クリアブラック）の40,000円が最高でした。限定カラーでは、コロコロコミックプレゼント版（迷彩）と電撃王限定カラーが110,000円です。' },
  { q: '動かないワンダースワンも売れますか？', a: '駿河屋にはジャンク品の商品があり、同日の掲載価格はワンダースワン本体400円、ワンダースワンカラー本体1,200円、スワンクリスタル本体3,900円でした。動作品より大幅に低い金額です。' },
  { q: '高く売れるワンダースワンのソフトはありますか？', a: '同日に「ワンダースワンソフト」を価格の高い順に表示したところ、最高は「DICING KNIGHT［中野イベント専売版］」の600,000円でした。上位5本はすべて79,000円以上です。' },
  { q: '同じ型番でも価格が違うのはなぜですか？', a: '駿河屋ではスワンクリスタルのクリアブラックとクリアブルーに同じ型番（SWJ-555T2B）が記載され、価格は40,000円と32,000円で異なりました。色ごとに別の商品として価格が付いているため、型番だけでなく本体の色も確認してください。' },
];

export default function WonderSwanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'ワンダースワンの買取価格｜初代8,500〜12,000円・カラー8,100〜22,000円・スワンクリスタル22,000〜40,000円（駿河屋）', datePublished: '2026-11-19', dateModified: '2026-11-19', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'ワンダースワン 買取価格' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ワンダースワンの買取価格<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>初代・カラー・スワンクリスタルを色別に駿河屋の公式ページで確認【{SURVEY_DATE}実測】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ワンダースワンの買取価格は、{SURVEY_DATE}の駿河屋の公式買取検索で、通常カラーの本体が初代8,500〜12,000円、ワンダースワンカラー8,100〜22,000円、スワンクリスタル22,000〜40,000円でした。最後に発売されたスワンクリスタルが最も高い価格帯です。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：{SURVEY_DATE}（価格は同日に駿河屋の公式買取検索で確認）</p>
        </div>
        <FuruichiCta variant="strip" />
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：スワンクリスタルが22,000〜40,000円で最も高い価格帯です</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>スワンクリスタル：</span>22,000〜40,000円。クリアブラックが最高です。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ワンダースワンカラー：</span>8,100〜22,000円。クリスタルオレンジが最高です。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>初代ワンダースワン：</span>8,500〜12,000円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>限定カラー：</span>42,000〜110,000円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ジャンク品：</span>400〜3,900円。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>掲載価格は付属品・状態による減額前の金額で、査定額を保証するものではありません。駿河屋の買取価格は随時変わり、限定版の一部は同じ日のうちにも価格が変わっていたため表から除いています。売却の直前に公式ページでご確認ください。</p>
        </section>

        <section className="mb-12" id="price">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />本体の色別買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
          {models.map((m) => (
            <div key={m.model} className="mb-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>{m.model}</h3>
              <div className="overflow-x-auto">
                <table className="comparison-table">
                  <thead><tr><th>本体</th><th>型番</th><th>買取価格</th><th>美品</th></tr></thead>
                  <tbody>
                    {m.items.map((it) => (
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
            </div>
          ))}
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：駿河屋 公式買取検索{src('ワンダースワン本体', '「ワンダースワン本体」')}・{src('ワンダースワンカラー 本体', '「ワンダースワンカラー 本体」')}・{src('スワンクリスタル', '「スワンクリスタル」')}（{SURVEY_DATE}確認）。型番が駿河屋に記載されていない商品は「—」、美品の価格の設定がない商品は「—」としています。
          </p>
          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>実測から分かること</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>カラーは色で約2.7倍の差：</span>ワンダースワンカラーはクリスタルオレンジ（22,000円）がクリスタルブラック（8,100円）の約2.7倍でした。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>カラーの最高とクリスタルの最低が同額：</span>ワンダースワンカラーの最高（22,000円）は、スワンクリスタルの最低（ワインレッド・22,000円）と同じでした。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>本体の見分け方：</span>駿河屋の型番の記載では、SWJ-777C で始まるものがワンダースワンカラー、SWJ-555T で始まるものがスワンクリスタルとして登録されていました（初代は SWJ-777 の後に数字が続きます）。</li>
            </ul>
          </div>
        </section>

        <section className="mb-12" id="limited">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />限定カラー・キャラクター仕様の本体</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>本体</th><th>買取価格</th></tr></thead>
              <tbody>
                {limited.map((it) => (
                  <tr key={it.name}>
                    <td className="font-bold text-sm">{it.name}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(it.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋 公式買取検索{src('ワンダースワン 本体', '「ワンダースワン 本体」')}・{src('スワンクリスタル', '「スワンクリスタル」')}を価格の高い順に表示（{SURVEY_DATE}確認）。</p>
        </section>

        <section className="mb-12" id="soft">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />買取価格の高いワンダースワンソフト</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>ソフト</th><th>買取価格</th></tr></thead>
              <tbody>
                {softs.map((it) => (
                  <tr key={it.name}>
                    <td className="font-bold text-sm">{it.name}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(it.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋 公式買取検索{src('ワンダースワンソフト', '「ワンダースワンソフト」')}を価格の高い順に表示した上位5本（{SURVEY_DATE}確認）。</p>
        </section>

        <section className="mb-12" id="junk">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />動かない本体（ジャンク品）の買取価格</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>本体（ジャンク品）</th><th>買取価格</th></tr></thead>
              <tbody>
                {junks.map((it) => (
                  <tr key={it.name}>
                    <td className="font-bold text-sm">{it.name}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(it.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
            故障したゲーム機の売り方は<Link href="/knowledge/broken/" style={linkStyle}>壊れたゲーム機の買取</Link>で解説しています。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋 公式買取検索{src('ジャンク品 ワンダースワン', '「ジャンク品 ワンダースワン」')}・{src('スワンクリスタル', '「スワンクリスタル」')}（{SURVEY_DATE}確認）。</p>
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
            <Link href="/hardware/gamegear/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲームギアの買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>本体・同梱版・ミクロ</p>
            </Link>
            <Link href="/hardware/neogeo/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ネオジオの買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ネオジオCD・ネオジオポケット</p>
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
