import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = 'ゲームのサントラの買取価格｜最近の作品は400〜5,500円、高額は1990年代のCD（駿河屋）【2026年11月19日実測】';
const DESCRIPTION =
  'ゲームのサウンドトラック（サントラCD）の買取価格を駿河屋の公式買取検索で2026年11月19日に確認しました。2015年以降のゼルダ・FF・ペルソナ・スプラトゥーンのサントラは400〜5,500円、価格の高い順の上位は1990年代のCDで最高250,000円でした。初回限定盤との差と減額の条件もまとめています。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['ゲーム サントラ 買取', 'サントラ 買取', 'ゲーム サウンドトラック 買取', 'ゲームミュージック CD 買取', 'サントラ 高額'],
  alternates: { canonical: 'https://gamekaitori-biyori.com/knowledge/game-soundtrack/' },
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

// 駿河屋 公式買取検索「サウンドトラック」を価格の高い順に表示し、分類が「ゲームミュージックCD」の商品を上から10枚（2026-11-19）
const topItems = [
  { name: '「コンバットチョロQ」オリジナルサウンドアルバム', release: '1999/04/23', price: 250000 },
  { name: 'アートカミオン芸術伝 爆走音盤 サウンドトラック', release: '2000/02/21', price: 170000 },
  { name: 'ディディーコングレーシング オリジナルサウンドトラック', release: '1998/04/01', price: 160000 },
  { name: '「チョロQ3」オリジナル・サウンド・コレクション+SE集 VOL.1 爆走編', release: '1998/04/01', price: 145000 },
  { name: 'スーパードンキーコング3 謎のクレミス島 オリジナル・サウンドトラック', release: '1997/01/22', price: 144000 },
  { name: 'スーパードンキーコング2 ディクシー＆ディディー オリジナル・サウンド・ヴァージョン', release: '1996/03/25', price: 144000 },
  { name: '宮田まこ / 星のカービィ～夢の泉の物語～［ステッカー付］', release: '1994/07/21', price: 140000 },
  { name: '「WAVERACE 64」オリジナル・サウンドトラック', release: '1997/11/19', price: 130000 },
  { name: 'ARMORED CORE ORIGINAL SOUNDTRACK 20th ANNIVERSARY BOX LIMITED EDITION', release: '2018/11/01', price: 120000 },
  { name: 'THE ORIGINAL DONKEY KONG COUNTRY 2 SOUNDTRACK［輸入盤］', release: '—', price: 120000 },
];

// 同日の「ゼルダの伝説 オリジナルサウンドトラック」「FINAL FANTASY ORIGINAL SOUNDTRACK」「ペルソナ5 オリジナル・サウンドトラック」「Splatoon ORIGINAL SOUNDTRACK」の検索結果から、2015年以降の発売のもの
const recentItems = [
  { name: '「ゼルダの伝説 ティアーズ オブ ザ キングダム」オリジナル・サウンドトラック［初回数量限定生産盤］', release: '2024/07/31', price: 5500 },
  { name: '「ゼルダの伝説 ティアーズ オブ ザ キングダム」オリジナル・サウンドトラック［通常盤］', release: '2024/07/31', price: 4900 },
  { name: '「FINAL FANTASY 7 REMAKE」Original Soundtrack -Special edit version-［初回生産限定盤］', release: '2020/05/27', price: 4200 },
  { name: 'ゼルダの伝説 ブレス オブ ザ ワイルド オリジナルサウンドトラック［初回数量限定生産盤］', release: '2018/04/25', price: 4100 },
  { name: 'ゼルダの伝説 スカイウォードソード オリジナル・サウンドトラック［初回数量限定生産盤］', release: '2021/11/23', price: 2900 },
  { name: 'FINAL FANTASY XV Original Soundtrack Volume 2', release: '2018/03/21', price: 2400 },
  { name: 'ゼルダの伝説 スカイウォードソード オリジナル・サウンドトラック［通常盤］', release: '2021/11/23', price: 2300 },
  { name: 'Splatoon3 ORIGINAL SOUNDTRACK -Ordertune-', release: '2024/12/11', price: 2200 },
  { name: 'PS4版 ペルソナ5 ザ・ロイヤル オリジナル・サウンドトラック', release: '2022/02/22', price: 2100 },
  { name: 'FINAL FANTASY V PIXEL REMASTER Original Soundtrack CD', release: '2026/02/18', price: 2000 },
  { name: 'ゼルダの伝説 ブレス オブ ザ ワイルド オリジナルサウンドトラック［通常盤］', release: '2018/04/25', price: 1800 },
  { name: '「FINAL FANTASY VII REMAKE」Original Soundtrack［通常盤］', release: '2020/05/27', price: 1800 },
  { name: '『ペルソナ5』オリジナル・サウンドトラック', release: '2017/01/17', price: 1600 },
  { name: 'Splatoon3 ORIGINAL SOUNDTRACK -Splatune3-', release: '2023/04/26', price: 1600 },
  { name: 'Splatoon2 ORIGINAL SOUNDTRACK -Splatune2-', release: '2017/11/29', price: 500 },
  { name: 'Splatoon ORIGINAL SOUNDTRACK -Splatune-', release: '2015/10/21', price: 400 },
];

const editions = [
  { title: 'ゼルダの伝説 ブレス オブ ザ ワイルド', limited: 4100, normal: 1800 },
  { title: 'FINAL FANTASY VII REMAKE', limited: 4200, normal: 1800 },
  { title: 'ゼルダの伝説 スカイウォードソード', limited: 2900, normal: 2300 },
  { title: 'ゼルダの伝説 ティアーズ オブ ザ キングダム', limited: 5500, normal: 4900 },
];

const yen = (v: number) => `${v.toLocaleString('ja-JP')}円`;
const ratio = (a: number, b: number) => `${Math.round((a / b) * 10) / 10}倍`;
const linkStyle = { color: 'var(--color-electric-green)', fontWeight: 700 } as const;
const src = (q: string, label: string) => (
  <a href={`${SURUGAYA_SEARCH}${encodeURIComponent(q)}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>{label}</a>
);

const faqs = [
  { q: 'ゲームのサントラはいくらで売れますか？', a: '2026年11月19日に駿河屋の公式買取検索で確認したところ、2015年以降に発売されたゼルダ・FF・ペルソナ・スプラトゥーンのサントラ16枚の掲載価格は400〜5,500円でした。一方、「サウンドトラック」を価格の高い順に並べた上位10枚は120,000〜250,000円でした。' },
  { q: '高く売れるサントラの特徴は？', a: '今回確認した上位10枚のうち、発売日の分かる9枚中8枚は1994〜2000年の発売でした。チョロQシリーズが2枚、スーパードンキーコングシリーズが2枚入っています。新しい作品のサントラは数千円以下の掲載が中心です。' },
  { q: '初回限定盤は通常盤より高いですか？', a: '同じタイトルの初回限定盤と通常盤を比べると、4タイトルすべてで初回限定盤のほうが高く、ブレス オブ ザ ワイルドは約2.3倍（4,100円と1,800円）でした。駿河屋は同梱特典品のないものを減額対象としているため、初回盤の特典は一緒に送ってください。' },
  { q: '傷のあるCDも売れますか？', a: '駿河屋の減額基準リストでは、CDに修復不可能なディスクキズがあるものは買取不可とされています。一方、CDセンターホールの小さなヒビ割れや、ジャケットを取り出す際につくケース爪の跡など、通常の使用で自然につく傷みは減額の対象とならないと記載されています。' },
  { q: 'はがきやチラシがなくても大丈夫ですか？', a: '駿河屋の減額基準リストでは、CDについて「はがき、チラシの有無は減額対象とはなりません」と記載されています。' },
];

export default function GameSoundtrackPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'ゲームのサントラの買取価格｜最近の作品は400〜5,500円、高額は1990年代のCD（駿河屋）', datePublished: '2026-11-19', dateModified: '2026-11-19', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: 'ゲームのサントラの買取価格' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲームのサントラの買取価格<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>最近の人気作と高額なサウンドトラックを駿河屋の公式ページで確認【{SURVEY_DATE}実測】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            {SURVEY_DATE}の駿河屋の公式買取検索では、2015年以降に発売されたゲームのサントラ16枚の買取価格は400〜5,500円でした。価格の高い順の上位は1990年代のCDが中心で、10万円を超える掲載が並びます。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：{SURVEY_DATE}（価格は同日に駿河屋の公式買取検索で確認）</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：最近のサントラは数千円以下、1990年代のCDに高額のものがあります</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>2015年以降の人気作：</span>確認した16枚は400〜5,500円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>高額なサントラ：</span>上位10枚は120,000〜250,000円。発売日の分かる9枚中8枚が1994〜2000年の発売です。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>初回限定盤：</span>4タイトルすべてで通常盤より高く、最大約2.3倍でした。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>減額の条件：</span>修復不可能なディスクキズは買取不可、はがき・チラシの有無は減額されません（駿河屋の記載）。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>掲載価格は状態による減額前の金額で、査定額を保証するものではありません。売却の直前に公式ページでご確認ください。</p>
        </section>

        <section className="mb-12" id="top">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />買取価格の高いゲームのサントラ（駿河屋・{SURVEY_DATE}実測）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            駿河屋の公式買取検索で「サウンドトラック」を検索して「価格の高い順」に並べ、駿河屋の分類が「ゲームミュージックCD」の商品を上から10枚並べました。レコード（LP）や映画のサントラは除いています。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>CD</th><th>発売日（駿河屋の記載）</th><th>買取価格</th></tr></thead>
              <tbody>
                {topItems.map((it) => (
                  <tr key={it.name}>
                    <td className="font-bold text-sm">{it.name}</td>
                    <td className="text-sm">{it.release}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(it.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：駿河屋 公式買取検索{src('サウンドトラック', '「サウンドトラック」')}を価格の高い順に表示（{SURVEY_DATE}確認）。発売日が駿河屋に記載されていない商品は「—」としています。
          </p>
        </section>

        <section className="mb-12" id="recent">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />最近の人気作のサントラの買取価格</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>CD</th><th>発売日（駿河屋の記載）</th><th>買取価格</th></tr></thead>
              <tbody>
                {recentItems.map((it) => (
                  <tr key={it.name}>
                    <td className="font-bold text-sm">{it.name}</td>
                    <td className="text-sm">{it.release}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(it.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：駿河屋 公式買取検索{src('ゼルダの伝説 オリジナルサウンドトラック', '「ゼルダの伝説 オリジナルサウンドトラック」')}・{src('FINAL FANTASY ORIGINAL SOUNDTRACK', '「FINAL FANTASY ORIGINAL SOUNDTRACK」')}・{src('ペルソナ5 オリジナル・サウンドトラック', '「ペルソナ5 オリジナル・サウンドトラック」')}・{src('Splatoon ORIGINAL SOUNDTRACK', '「Splatoon ORIGINAL SOUNDTRACK」')}（{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12" id="edition">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />初回限定盤と通常盤の差</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>タイトル</th><th>初回限定盤</th><th>通常盤</th><th>差</th></tr></thead>
              <tbody>
                {editions.map((it) => (
                  <tr key={it.title}>
                    <td className="font-bold text-sm">{it.title}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(it.limited)}</td>
                    <td className="text-sm">{yen(it.normal)}</td>
                    <td className="text-sm">{ratio(it.limited, it.normal)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>実測から分かること</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>盤の種類で価格が変わる：</span>同じタイトルでも初回限定盤と通常盤は別の商品として価格が付いています。品番（ティアーズ オブ ザ キングダムなら初回盤 COCX-42298、通常盤 COCX-42307）で盤の種類を確認してください。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>古い作品でも価格は作品次第：</span>「ゼルダの伝説 ムジュラの仮面 オリジナル・サウンドトラック」（2000年）は13,500円で、2015年発売の「ムジュラの仮面 3D」のサントラ（2,500円）の5.4倍でした。古いサントラは、まとめ売りに入れる前に作品名で買取検索を確認してください。</li>
            </ul>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：上の表と同じ駿河屋 公式買取検索の結果（{SURVEY_DATE}確認）。</p>
        </section>

        <section className="mb-12" id="rules">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />査定で減額される条件（駿河屋の公式記載）</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・CDに修復不可能なディスクキズがあるものは買取不可となります。</li>
            <li>・CDのはがき、チラシの有無は減額対象とはなりません。</li>
            <li>・同梱特典品のないものは減額対象となります。</li>
            <li>・CDジャケットを取り出す際につくケース爪の跡や、CDセンターホールの小さなヒビ割れなど、通常の使用で自然につく傷みは減額の対象とはなりません。ただし、高額商品は少しの傷みでも減額の対象になる場合があります。</li>
            <li>・レコードは、型番違い・ジャケットの欠品・レコード本体のみの場合は大幅な減額対象です。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：<a href={SURUGAYA_RULES} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 減額基準リスト</a>（{SURVEY_DATE}確認）。</p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />売る前に確認すること</h2>
          <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ディスクの傷を確かめる：</span>修復できない傷があると買取不可です。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>特典をそろえる：</span>初回盤の同梱特典がないと減額対象です。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ゲームと一緒に送る：</span>まとめて送る方法は<Link href="/knowledge/bulk/" style={linkStyle}>まとめ売りのコツ</Link>、攻略本は<Link href="/knowledge/strategy-guide/" style={linkStyle}>攻略本の買取価格</Link>で解説しています。</li>
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
            <Link href="/knowledge/strategy-guide/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>攻略本の買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>公式ガイドと高額な攻略本</p>
            </Link>
            <Link href="/knowledge/bulk/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>まとめ売りのコツ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>大量のゲームを売るとき</p>
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
