import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = '攻略本の買取価格｜最近の公式ガイドは300〜1,000円、高額はファミコン期の攻略本（駿河屋）【2026年11月18日実測】';
const DESCRIPTION =
  'ゲーム攻略本の買取価格を駿河屋の公式買取検索で2026年11月18日に確認しました。2023年以降の公式ガイドブックは300〜1,000円、掲載価格の高い順の上位はファミコン期の攻略本やたまごっちの大百科で、最高は300,000円でした。付録・帯の扱いなど減額の条件もまとめています。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['攻略本 買取', '攻略本 買取価格', 'ゲーム 攻略本 売る', '攻略本 高額', '公式ガイドブック 買取'],
  alternates: { canonical: 'https://gamekaitori-biyori.com/knowledge/strategy-guide/' },
  openGraph: {
    images: ['/og.png'],
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const SURVEY_DATE = '2026年11月18日';
const SURUGAYA_SEARCH = 'https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=';
const SURUGAYA_RULES = 'https://www.suruga-ya.jp/man/hyou/kaitorihin.html';

// 駿河屋 公式買取検索「攻略本」を「価格の高い順」で並べた上位（2026-11-18）。駿河屋の分類が「攻略本PC」の商品を除いた10冊
const topItems = [
  { name: 'MOTHER 完全攻略マニュアル', cat: 'ファミコン', release: '1989/11/10', price: 300000 },
  { name: 'やさしいたまごっち大百科', cat: '—', release: '1998/09/28', price: 90000 },
  { name: 'ドラクエIV パーフェクトデータ', cat: 'ファミコン', release: '1990/05/25', price: 90000 },
  { name: 'まんがスーパーマリオブラザーズ3完全攻略', cat: '—', release: '—', price: 88000 },
  { name: 'デビルっちのたまごっち大百科', cat: '—', release: '1998/09/28', price: 54000 },
  { name: 'バーチャル・ストライカー2 完全必勝法', cat: '—', release: '1998/03/01', price: 44000 },
  { name: 'アーケードゲーム必勝法大百科（ケイブンシャの大百科295）', cat: 'アーケード', release: '1987/05/05', price: 30000 },
  { name: 'KKB ハート オブ ダークネス 究極本', cat: '—', release: '—', price: 30000 },
  { name: 'MSXアドベンチャーゲーム ヒント集', cat: '—', release: '1986/09/20', price: 30000 },
  { name: 'アクセラ 幻獣旅団 公式ガイドブック', cat: 'スーパーファミコン', release: '1998/06/01', price: 28000 },
];

// 同日の「公式ガイドブック」「ポケットモンスター 公式ガイドブック」「ドラゴンクエスト 公式ガイドブック」「ファイナルファンタジー アルティマニア」「ゼルダの伝説 攻略本」の検索結果から、2019年以降の発売のもの
const recentItems = [
  { name: 'ドラゴンクエスト1＆2 公式ガイドブック（HD-2D版）', release: '2025/11/27', price: 1000 },
  { name: 'ファイナルファンタジー7 リバース アルティマニア', release: '2024/04/12', price: 1000 },
  { name: 'ドラゴンクエストXI 過ぎ去りし時を求めて S 公式ガイドブック', release: '2019/10/26', price: 850 },
  { name: 'ドラゴンクエスト 7 Reimagined 公式ガイドブック', release: '2026/03/05', price: 800 },
  { name: 'ゼルダの伝説 ティアーズ オブ ザ キングダム ザ・コンプリートガイド', release: '2023/09/01', price: 600 },
  { name: 'ファイナルファンタジーXVI アルティマニア', release: '2023/09/07', price: 450 },
  { name: 'ポケットモンスター スカーレット・バイオレット 公式ガイドブック パルデア図鑑完成ガイド', release: '2023/02/02', price: 450 },
  { name: 'ポケットモンスター ソード・シールド 公式ガイドブック 完全ストーリー攻略+ガラル図鑑（第2刷）', release: '2019/12/07', price: 300 },
];

const yen = (v: number) => `${v.toLocaleString('ja-JP')}円`;
const linkStyle = { color: 'var(--color-electric-green)', fontWeight: 700 } as const;

const faqs = [
  { q: '攻略本はいくらで売れますか？', a: '2026年11月18日に駿河屋の公式買取検索で確認したところ、2019年以降に発売された公式ガイドブック8冊の掲載価格は300〜1,000円でした。一方、「価格の高い順」の上位にはファミコン期の攻略本やたまごっちの大百科が並び、最高は「MOTHER 完全攻略マニュアル」の300,000円でした。' },
  { q: '高く売れる攻略本の特徴は？', a: '今回確認した上位10冊のうち、発売日の分かる8冊はすべて1986〜1998年の発売でした。ファミコン向けの攻略本が2冊、たまごっちの大百科が2冊入っています。新しい公式ガイドブックは発売から日が浅くても1,000円以下の掲載が中心です。' },
  { q: '付録がなくなっている攻略本も売れますか？', a: '駿河屋の減額基準リストでは、書籍全般（コミック・攻略本・写真集等）について「付録（付属CD、ポスター等）が欠品している場合は、減額または、買取不可」と記載されています。付録付きの攻略本は、付録をそろえて送ってください。' },
  { q: '帯がない攻略本は減額されますか？', a: '駿河屋の減額基準リストには「はがき、チラシ、帯の有無は減額対象とはなりません」と記載されています。' },
  { q: '少し傷んだ攻略本でも売れますか？', a: '駿河屋は、本の背表紙部分上の小さな破れなど、通常の使用で自然についてしまう傷みや汚れは減額の対象にならないと記載しています。ただし、高額商品は少しの傷みでも減額の対象になる場合があるとしています。' },
];

export default function StrategyGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: '攻略本の買取価格｜最近の公式ガイドは300〜1,000円、高額はファミコン期の攻略本（駿河屋）', datePublished: '2026-11-18', dateModified: '2026-11-18', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '攻略本の買取価格' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            攻略本の買取価格<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>最近の公式ガイドブックと高額な攻略本を駿河屋の公式ページで確認【{SURVEY_DATE}実測】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            {SURVEY_DATE}の駿河屋の公式買取検索では、2019年以降に発売された公式ガイドブック8冊の買取価格は300〜1,000円でした。高い順の上位はファミコン期の攻略本やたまごっちの大百科で、数万円以上の掲載が並びます。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：{SURVEY_DATE}（価格は同日に駿河屋の公式買取検索で確認）</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：最近の公式ガイドは1,000円以下、古い攻略本に高額のものがあります</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>2019年以降の公式ガイドブック：</span>確認した8冊は300〜1,000円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>高額な攻略本：</span>上位10冊は28,000〜300,000円。発売日の分かる8冊はすべて1986〜1998年の発売です。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>減額の条件：</span>付録の欠品は減額または買取不可、帯・はがき・チラシの有無は減額されません（駿河屋の記載）。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>掲載価格は状態による減額前の金額で、査定額を保証するものではありません。売却の直前に公式ページでご確認ください。</p>
        </section>

        <section className="mb-12" id="top">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />買取価格の高い攻略本（駿河屋・{SURVEY_DATE}実測）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            駿河屋の公式買取検索で「攻略本」を検索して「価格の高い順」に並べ、駿河屋の分類が攻略本の商品を上から10冊並べました。分類が「攻略本PC」（パソコンゲーム向け）の商品は除いています。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>攻略本</th><th>対象機種（駿河屋の分類）</th><th>発売日（駿河屋の記載）</th><th>買取価格</th></tr></thead>
              <tbody>
                {topItems.map((it) => (
                  <tr key={it.name}>
                    <td className="font-bold text-sm">{it.name}</td>
                    <td className="text-sm">{it.cat}</td>
                    <td className="text-sm">{it.release}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(it.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('攻略本')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 公式買取検索「攻略本」</a>を価格の高い順に表示（{SURVEY_DATE}確認）。「完全攻略本」で検索した結果には、ほかにスーパーマリオ64 完全クリアガイド（8,500円）、ファミコンのアテナ完全攻略本（付録付・24,000円）などもありました。対象機種・発売日が駿河屋に記載されていない商品は「—」としています。
          </p>
        </section>

        <section className="mb-12" id="recent">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />最近の公式ガイドブックの買取価格</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>攻略本</th><th>発売日（駿河屋の記載）</th><th>買取価格</th></tr></thead>
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
            出典：駿河屋 公式買取検索<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('公式ガイドブック')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>「公式ガイドブック」</a>・<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('ポケットモンスター 公式ガイドブック')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>「ポケットモンスター 公式ガイドブック」</a>・<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('ドラゴンクエスト 公式ガイドブック')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>「ドラゴンクエスト 公式ガイドブック」</a>・<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('ファイナルファンタジー アルティマニア')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>「ファイナルファンタジー アルティマニア」</a>・<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('ゼルダの伝説 攻略本')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>「ゼルダの伝説 攻略本」</a>（{SURVEY_DATE}確認）。
          </p>
          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>実測から分かること</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>発売が新しくても1,000円以下：</span>2026年3月発売の「ドラゴンクエスト 7 Reimagined 公式ガイドブック」も800円でした。最近の攻略本は、まとめて売っても1冊あたり数百円が目安です。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>同じシリーズでも刷・版で別の商品：</span>ポケットモンスターの公式ガイドブックは「第2刷」と明記された商品が別に登録されていました。奥付で版・刷を確認すると、査定の商品と照合しやすくなります。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>古い攻略本は個別に価格を調べる：</span>上位10冊の最低（28,000円）でも、最近の公式ガイドブックの最高（1,000円）の28倍でした。古い攻略本は、まとめ売りに入れる前に書名で買取検索を確認してください。</li>
            </ul>
          </div>
        </section>

        <section className="mb-12" id="rules">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />査定で減額される条件（駿河屋の公式記載）</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・書籍全般（コミック・攻略本・写真集等）は、付録（付属CD、ポスター等）が欠品している場合、減額または買取不可となります。</li>
            <li>・はがき、チラシ、帯の有無は減額対象とはなりません。</li>
            <li>・本の背表紙部分上の小さな破れなど、通常の使用で自然についてしまう傷みや汚れは減額の対象とはなりません。ただし、高額商品は少しの傷みでも減額の対象になる場合があります。</li>
            <li>・ペット臭・タバコ臭などの臭いがついた商品は、大幅な減額対象です。</li>
            <li>・古い商品の経年劣化は、減額対象とはなりません。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SURUGAYA_RULES} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 減額基準リスト</a>（{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />売る前に確認すること</h2>
          <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>付録をそろえる：</span>ポスター・CD・マップなどの付録は、欠品すると減額または買取不可です。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>書名と版を確かめる：</span>同じタイトルでも版・刷・機種で別の商品として扱われます。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ゲームと一緒に送る：</span>ソフトと同時に送る方法は<Link href="/knowledge/bulk/" style={linkStyle}>まとめ売りのコツ</Link>、古いソフトの売り方は<Link href="/software/retro-soft/" style={linkStyle}>レトロゲームソフトの買取</Link>で解説しています。</li>
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
            <Link href="/software/retro-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>レトロゲームソフトの買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ファミコン・スーファミのソフト</p>
            </Link>
            <Link href="/knowledge/bulk/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>まとめ売りのコツ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>大量のゲームを売るとき</p>
            </Link>
            <Link href="/knowledge/boxless/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>箱なし・説明書なしの買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>付属品が欠けたときの査定</p>
            </Link>
          </div>
        </section>
      </div>

      <AuthorBox />
    </>
  );
}
