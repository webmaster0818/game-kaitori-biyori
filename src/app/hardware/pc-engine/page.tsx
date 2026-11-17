import FuruichiCta from '@/components/FuruichiCta';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = 'PCエンジンの買取価格｜本体14,000円・GT 95,000円・DUO 39,000円・mini 13,000円（駿河屋）【2026年11月17日実測】';
const DESCRIPTION =
  'PCエンジンの買取価格を駿河屋の公式買取検索で2026年11月17日に確認しました。本体14,000円、GT 95,000円、DUO 39,000円、CD-ROM2 26,000円、PCエンジン mini 13,000円です。モデル別の価格表とコナミ公式の収録タイトル数を掲載しています。';

export const metadata: Metadata = {
  title: 'PCエンジンの買取価格｜本体14,000円・GT 95,000円・DUO 39,000円・mini 13,000円（駿河屋）【2026年11月17日実測】',
  description: DESCRIPTION,
  keywords: ['PCエンジン 買取', 'PCエンジン 買取価格', 'PCエンジン 本体 買取', 'PCエンジンGT 買取', 'PCエンジン mini 買取', 'PCエンジンDUO 買取'],
  alternates: { canonical: 'https://gamekaitori-biyori.com/hardware/pc-engine/' },
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
const KONAMI_LINEUP = 'https://www.konami.com/games/pcemini/lineup/jp/ja/';

// 駿河屋 公式買取検索「PCエンジン 本体」「PCエンジン Duo」「PCエンジン CD-ROM2」「PCエンジン mini」の掲載価格（2026-11-17）
const models = [
  { name: 'PCエンジンGT本体', code: 'PI-TG6', group: '携帯型', price: 95000, bihin: 114000, junk: 13000 },
  { name: 'PCエンジン スーパーグラフィックス本体', code: 'PI-TG4', group: '据え置き', price: 60000, bihin: 72000, junk: null },
  { name: 'PCエンジンDUO-RX', code: 'PCE-DUORX', group: 'CD一体型', price: 52000, bihin: 62400, junk: 9100 },
  { name: 'PCエンジンDUO-R', code: 'PI-TG10', group: 'CD一体型', price: 42000, bihin: 50400, junk: 5600 },
  { name: 'PCエンジン DUO', code: 'PI-TG8', group: 'CD一体型', price: 39000, bihin: 46800, junk: 3700 },
  { name: 'スーパーCD-ROM2', code: 'PI-CD1', group: 'CD-ROM', price: 38000, bihin: 45600, junk: 5300 },
  { name: 'PCエンジン CD-ROM2（後期型）', code: 'CDR-30A', group: 'CD-ROM', price: 31000, bihin: 37200, junk: null },
  { name: 'PCエンジン CD-ROM2', code: 'CDR-30', group: 'CD-ROM', price: 26000, bihin: 31200, junk: 2400 },
  { name: 'PCエンジン コアグラフィックス2', code: '—', group: '据え置き', price: 23000, bihin: 27600, junk: null },
  { name: 'PCエンジン コアグラフィックス本体', code: 'PI-TG3', group: '据え置き', price: 17000, bihin: 20400, junk: null },
  { name: 'PCエンジン本体', code: 'PI-TG001', group: '据え置き', price: 14000, bihin: 14800, junk: 2000 },
  { name: 'PCエンジン mini', code: 'HTG-008', group: '復刻版', price: 13000, bihin: null, junk: null },
];

const miniParts = [
  { name: 'PCエンジン mini ターボパッド', code: 'HTG-003', price: 5000 },
  { name: 'PCエンジン mini コントロールパッド', code: 'HTG-002', price: 3300 },
  { name: 'ACアダプタ for PCエンジンmini', code: 'HTG-005', price: 1700 },
  { name: 'PCエンジン mini マルチタップ', code: 'HTG-004', price: 400 },
];

const yen = (v: number) => `${v.toLocaleString('ja-JP')}円`;
const linkStyle = { color: 'var(--color-electric-green)', fontWeight: 700 } as const;

const faqs = [
  { q: 'PCエンジン本体の買取価格はいくらですか？', a: '2026年11月17日に駿河屋の公式買取検索で確認した掲載価格は、初代のPCエンジン本体（PI-TG001）が14,000円（美品14,800円）、ジャンク品が2,000円でした。' },
  { q: 'PCエンジンで一番高く売れるモデルはどれですか？', a: '同日の掲載では、携帯型のPCエンジンGT（PI-TG6）が95,000円（美品114,000円）で最も高く、次いでスーパーグラフィックス（60,000円）、DUO-RX（52,000円）でした。' },
  { q: 'PCエンジン miniの買取価格はいくらですか？', a: '駿河屋の掲載価格は13,000円でした（2026年11月17日）。ターボパッド（HTG-003）は単品で5,000円、コントロールパッド（HTG-002）は3,300円です。' },
  { q: 'PCエンジン miniには何本のゲームが入っていますか？', a: 'コナミのPCエンジン mini 公式サイトのラインナップでは、日本語の収録タイトルが34本、英語（ターボグラフィックス-16）の収録タイトルが24本、合計58本が掲載されています（2026年11月17日確認）。' },
  { q: '壊れたPCエンジンGTでも売れますか？', a: '駿河屋にはジャンク品のPCエンジンGT本体が掲載されており、2026年11月17日の価格は13,000円でした。ジャンク品でも、初代PCエンジン本体の動作品（14,000円）に近い金額です。' },
];

export default function PcEnginePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'PCエンジンの買取価格｜本体・GT・DUO・CD-ROM2・mini（駿河屋）', datePublished: '2026-11-17', dateModified: '2026-11-17', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'PCエンジン 買取価格' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            PCエンジンの買取価格<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>本体・GT・DUO・CD-ROM2・PCエンジン miniを駿河屋の公式ページで確認【{SURVEY_DATE}実測】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            PCエンジンの買取価格は、{SURVEY_DATE}の駿河屋の公式買取検索で初代本体14,000円、PCエンジンGT 95,000円、PCエンジンDUO 39,000円、PCエンジン mini 13,000円でした。モデルによって買取価格が約7倍異なります。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：{SURVEY_DATE}（価格は同日に駿河屋の公式買取検索で確認）</p>
        </div>
        <FuruichiCta variant="strip" />
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：初代本体は14,000円、GTは95,000円、CD一体型のDUOは39,000〜52,000円です</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>初代PCエンジン本体（PI-TG001）：</span>14,000円（美品14,800円）。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>PCエンジンGT：</span>95,000円（美品114,000円）。今回の調査で最も高いモデルです。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>DUOシリーズ：</span>DUO 39,000円、DUO-R 42,000円、DUO-RX 52,000円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>PCエンジン mini：</span>13,000円。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>掲載価格は付属品・状態による減額前の金額で、査定額を保証するものではありません。売却の直前に公式ページでご確認ください。</p>
        </section>

        <section className="mb-12" id="price">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />モデル別の買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            駿河屋の公式買取検索で「PCエンジン 本体」「PCエンジン Duo」「PCエンジン CD-ROM2」「PCエンジン mini」を検索し、国内版の本体の掲載価格を高い順に並べました。ジャンク品の列は、同じモデルの「［状態：ジャンク品］」商品の価格です。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>モデル</th><th>型番</th><th>種類</th><th>買取価格</th><th>美品</th><th>ジャンク品</th></tr>
              </thead>
              <tbody>
                {models.map((m) => (
                  <tr key={m.name}>
                    <td className="font-bold text-sm">{m.name}</td>
                    <td className="text-sm">{m.code}</td>
                    <td className="text-sm">{m.group}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(m.price)}</td>
                    <td className="text-sm">{m.bihin ? yen(m.bihin) : '—'}</td>
                    <td className="text-sm">{m.junk ? yen(m.junk) : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：駿河屋 公式買取検索 <a href={`${SURUGAYA_SEARCH}${encodeURIComponent('PCエンジン 本体')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>「PCエンジン 本体」</a>・<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('PCエンジン Duo')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>「PCエンジン Duo」</a>・<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('PCエンジン CD-ROM2')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>「PCエンジン CD-ROM2」</a>・<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('PCエンジン mini')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>「PCエンジン mini」</a>（{SURVEY_DATE}確認）。「—」は今回の検索結果に該当商品が表示されなかったことを示します。
          </p>
          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>実測から分かること</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>最高値と最安値で約7倍：</span>PCエンジンGT（95,000円）は、初代本体（14,000円）の約6.8倍でした。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>CD-ROM関連は2万円台後半から：</span>CD-ROM2（26,000円）・スーパーCD-ROM2（38,000円）・DUOシリーズ（39,000〜52,000円）は、初代本体（14,000円）やコアグラフィックス（17,000〜23,000円）より高く掲載されていました。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>GTはジャンク品でも13,000円：</span>他のモデルのジャンク品（2,000〜9,100円）と比べて高く、初代本体の動作品（14,000円）との差は1,000円でした。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>復刻版のminiは初代本体に近い価格：</span>PCエンジン mini（13,000円）と初代本体（14,000円）の差は1,000円でした。</li>
            </ul>
          </div>
        </section>

        <section className="mb-12" id="mini">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />PCエンジン miniの収録タイトルと周辺機器</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            コナミのPCエンジン mini 公式サイトのラインナップには、対応言語が日本語の収録タイトル34本（『イースI・II』『悪魔城ドラキュラX 血の輪廻』『ときめきメモリアル』など）と、英語のターボグラフィックス-16の収録タイトル24本、合計58本が掲載されています。周辺機器の駿河屋の掲載価格は次のとおりです。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>周辺機器</th><th>型番</th><th>駿河屋 買取価格</th></tr></thead>
              <tbody>
                {miniParts.map((p) => (
                  <tr key={p.code}>
                    <td className="font-bold text-sm">{p.name}</td>
                    <td className="text-sm">{p.code}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(p.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={KONAMI_LINEUP} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>コナミ PCエンジン mini 公式サイト ラインナップ</a>、<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('PCエンジン mini')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 公式買取検索</a>（いずれも{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12" id="rules">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />査定で減額される条件（駿河屋の公式記載）</h2>
          <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
            駿河屋の減額基準リストでは、箱（ケース）・説明書・動作に必要な付属品機器の欠品は大幅な減額対象とされています。本体・付属品・パッケージの傷み・汚れ・日焼け、ペット臭・タバコ臭などの臭いも減額対象です。古い商品の経年劣化は減額対象とはならないと記載されています。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SURUGAYA_RULES} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 減額基準リスト</a>（{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />売る前に確認すること</h2>
          <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>モデル名と型番を確かめる：</span>PI-TG001・PI-TG3・PI-TG6など、型番ごとに掲載価格が異なります。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>接続用の部品もそろえる：</span>駿河屋では「SUPER CD-ROM2用 本体接続ケーブル」（1,700円）など、接続用の部品も別の商品として掲載されています。本体と一緒に保管している部品は、まとめて査定に出してください。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ソフトとまとめて売る：</span>HuCARD・CD-ROMソフトの売り方は<Link href="/software/retro-soft/" style={linkStyle}>レトロゲームソフトの買取</Link>で解説しています。</li>
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
            <Link href="/hardware/retro/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>レトロゲーム機の買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ファミコン・スーファミ本体</p>
            </Link>
            <Link href="/hardware/saturn/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>セガサターンの買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>本体・スケルトン・Vサターン</p>
            </Link>
            <Link href="/hardware/neogeo/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ネオジオの買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ネオジオCD・ポケット・mini</p>
            </Link>
          </div>
        </section>
      </div>

      <AuthorBox />
    </>
  );
}
