import FuruichiCta from '@/components/FuruichiCta';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = 'ピクミンの買取価格｜ピクミン4 2,100円・3デラックス2,200円・GC版1+2パック16,000円（駿河屋）【2026年11月17日実測】';
const DESCRIPTION =
  'ピクミンシリーズの買取価格を駿河屋の公式買取検索で2026年11月17日に確認しました。Switch版のピクミン4は2,100円、3 デラックスは2,200円、ゲームキューブ版の「ピクミン 1+2パック」は16,000円です。任天堂公式の価格との比較も掲載しています。';

export const metadata: Metadata = {
  title: 'ピクミンの買取価格｜ピクミン4 2,100円・3デラックス2,200円・GC版1+2パック16,000円（駿河屋）【2026年11月17日実測】',
  description: DESCRIPTION,
  keywords: ['ピクミン 買取', 'ピクミン4 買取', 'ピクミン 買取価格', 'ピクミン3 デラックス 買取', 'ピクミン ゲームキューブ 買取'],
  alternates: { canonical: 'https://gamekaitori-biyori.com/software/pikmin/' },
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
const NINTENDO_PIKMIN4 = 'https://www.nintendo.com/jp/switch/ampya/index.html';

// 駿河屋 公式買取検索「ピクミン ニンテンドースイッチソフト」「ピクミン ゲームキューブ」「ピクミン3 WiiU」の掲載価格（2026-11-17）
const softs = [
  { title: 'ピクミン 1+2パック', platform: 'ゲームキューブ', release: '2004/07/23', price: 16000, bihin: 17400, unopened: 20000 },
  { title: '『スーパーマリオブラザーズ ワンダー・ピクミン 4』ダブルパック', platform: 'Switch', release: '2023/12/08', price: 6700, bihin: null, unopened: null },
  { title: 'ピクミン3 デラックス', platform: 'Switch', release: '2020/10/30', price: 2200, bihin: null, unopened: null },
  { title: 'Pikmin 4（ピクミン4）', platform: 'Switch', release: '2023/07/21', price: 2100, bihin: null, unopened: null },
  { title: 'Pikmin 1+2', platform: 'Switch', release: '2023/09/22', price: 1800, bihin: null, unopened: null },
  { title: 'ピクミン2', platform: 'ゲームキューブ', release: '2004/04/29', price: 800, bihin: 1400, unopened: 2000 },
  { title: 'ピクミン', platform: 'ゲームキューブ', release: '2001/10/26', price: 500, bihin: null, unopened: null },
];

const yen = (v: number) => `${v.toLocaleString('ja-JP')}円`;
const linkStyle = { color: 'var(--color-electric-green)', fontWeight: 700 } as const;

const faqs = [
  { q: 'ピクミン4の買取価格はいくらですか？', a: '2026年11月17日に駿河屋の公式買取検索で確認したNintendo Switch版『Pikmin 4』の掲載価格は2,100円でした。任天堂公式のパッケージ版希望小売価格6,578円（税込）の約32%です。' },
  { q: 'ピクミンシリーズで一番高く売れるソフトはどれですか？', a: '同日の掲載では、ゲームキューブ版の「ピクミン 1+2パック」が16,000円（美品17,400円・未開封20,000円）で最も高い価格でした。' },
  { q: 'ゲームキューブ版のピクミンは高く売れますか？', a: '単品は高くありません。同日の掲載では、ゲームキューブ版『ピクミン』は500円、『ピクミン2』は800円でした。高い価格が付いているのは、2本がセットになった「ピクミン 1+2パック」です。' },
  { q: 'Switch版のPikmin 1+2とゲームキューブ版の1+2パックは同じ価格ですか？', a: '異なります。Switch版『Pikmin 1+2』は1,800円、ゲームキューブ版「ピクミン 1+2パック」は16,000円で、別の商品として掲載されていました。' },
  { q: 'マリオワンダーとのダブルパックはいくらですか？', a: '『スーパーマリオブラザーズ ワンダー・ピクミン 4』ダブルパックは6,700円で掲載されていました（2026年11月17日）。' },
];

export default function PikminPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'ピクミンの買取価格｜ピクミン4・3デラックス・GC版1+2パック（駿河屋）', datePublished: '2026-11-17', dateModified: '2026-11-17', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'ピクミンの買取価格' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ソフト別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ピクミンの買取価格<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>Switch版・ゲームキューブ版のシリーズ7商品を駿河屋の公式ページで確認【{SURVEY_DATE}実測】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ピクミンシリーズの買取価格は、{SURVEY_DATE}の駿河屋の公式買取検索でSwitch版のピクミン4が2,100円、ピクミン3 デラックスが2,200円、Pikmin 1+2が1,800円でした。シリーズで最も高いのはゲームキューブ版の「ピクミン 1+2パック」の16,000円です。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：{SURVEY_DATE}（価格は同日に駿河屋の公式買取検索で確認）</p>
        </div>
        <FuruichiCta variant="strip" />
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：Switch版は1,800〜2,200円、ゲームキューブ版の1+2パックは16,000円です</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>Switch版の単品：</span>ピクミン3 デラックス2,200円、ピクミン4 2,100円、Pikmin 1+2 1,800円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>マリオワンダーとのダブルパック：</span>6,700円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ゲームキューブ版：</span>「ピクミン 1+2パック」16,000円。単品のピクミン500円・ピクミン2 800円とは大きな差があります。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>掲載価格は付属品・状態による減額前の金額で、査定額を保証するものではありません。売却の直前に公式ページでご確認ください。</p>
        </section>

        <section className="mb-12" id="price">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ピクミンシリーズの買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            駿河屋の公式買取検索で「ピクミン ニンテンドースイッチソフト」「ピクミン ゲームキューブ」を検索し、国内版ソフト7商品の掲載価格を高い順に並べました。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>ソフト</th><th>機種</th><th>発売日（駿河屋の記載）</th><th>買取価格</th><th>美品</th><th>未開封</th></tr>
              </thead>
              <tbody>
                {softs.map((s) => (
                  <tr key={s.title + s.platform}>
                    <td className="font-bold text-sm">{s.title}</td>
                    <td className="text-sm">{s.platform}</td>
                    <td className="text-sm">{s.release}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(s.price)}</td>
                    <td className="text-sm">{s.bihin ? yen(s.bihin) : '—'}</td>
                    <td className="text-sm">{s.unopened ? yen(s.unopened) : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('ピクミン ニンテンドースイッチソフト')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 公式買取検索「ピクミン ニンテンドースイッチソフト」</a>、<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('ピクミン ゲームキューブ')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>「ピクミン ゲームキューブ」</a>（{SURVEY_DATE}確認）。「—」は美品・未開封の価格が掲載されていない商品です。Wii U版『ピクミン3』の国内版は、「ピクミン3 WiiU」の検索結果に表示されませんでした。
          </p>
        </section>

        <section className="mb-12" id="ratio">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ピクミン4は定価の約32%（任天堂公式の価格と比較）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            任天堂の公式サイトでは、『ピクミン4』の発売日は2023年7月21日、希望小売価格はパッケージ版6,578円（税込）、ダウンロード版6,500円（税込）と掲載されています。駿河屋の買取価格2,100円は、パッケージ版の希望小売価格の約32%にあたります。
          </p>
          <div className="glass-card p-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>実測から分かること</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>Switch版3本の差は400円：</span>最も高いピクミン3 デラックス（2,200円）と最も低いPikmin 1+2（1,800円）の差は400円で、Switch版の単品3本はほぼ同じ価格帯でした。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ゲームキューブ版はセット品だけが高い：</span>「ピクミン 1+2パック」（16,000円）は、単品2本の合計（1,300円）の約12倍でした。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ダブルパックは単品より高い：</span>マリオワンダーとのダブルパック（6,700円）は、ピクミン4単品（2,100円）より4,600円高く掲載されていました。</li>
            </ul>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={NINTENDO_PIKMIN4} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>任天堂『ピクミン4』公式サイト</a>（{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12" id="rules">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />査定で減額される条件（駿河屋の公式記載）</h2>
          <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
            駿河屋の減額基準リストでは、箱（ケース）・説明書の欠品は大幅な減額対象とされています。ゲームソフトは、通常の使用で自然についてしまう傷みや汚れは減額の対象とはならない一方、商品本体・付属品・パッケージの傷み・汚れ・日焼けは程度によって減額対象となります。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SURUGAYA_RULES} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 減額基準リスト</a>（{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />売る前に確認すること</h2>
          <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ゲームキューブ版はセット品かを確認する：</span>「ピクミン 1+2パック」は単品と別の商品として価格が付いています。外箱の表記を確認してから申し込んでください。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ケースをそろえる：</span>Switchソフトはカードだけでなくケースもそろえて送ります。詳しくは<Link href="/knowledge/boxless/" style={linkStyle}>箱なし・ケースなしの買取</Link>をご覧ください。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ほかのSwitchソフトとまとめる：</span>任天堂タイトルの買取価格は<Link href="/software/switch-soft/" style={linkStyle}>Switchソフトの買取</Link>で比較しています。</li>
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
            <Link href="/software/switch-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switchソフトの買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ソフトを高く売るコツ</p>
            </Link>
            <Link href="/software/mario-kart/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>マリオカートの買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>任天堂タイトルの価格比較</p>
            </Link>
            <Link href="/software/animal-crossing/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>あつ森の買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>どうぶつの森シリーズ</p>
            </Link>
          </div>
        </section>
      </div>

      <AuthorBox />
    </>
  );
}
