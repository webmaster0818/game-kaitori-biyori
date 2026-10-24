import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';
import KaitoriWorldCta from '@/components/KaitoriWorldCta';
import GeoSuspendedNotice from '@/components/GeoSuspendedNotice';

export const metadata: Metadata = {
  title: '状態別 ゲーム買取 許容度マップ｜箱なし・傷・ジャンクはどこで売れる？',
  description:
    'ディスク傷・箱なし・説明書なし・付属品欠品・ジャンク（故障）・未初期化の状態ごとに、ブックオフ・ゲオ・駿河屋・カイトリワールド・ゲーム王国の買取可否と減額ルールを各社公式情報で比較しています。お手持ちのゲームを最も高く、確実に売却できる店舗をお探しいただけます。',
  keywords: ['ゲーム 箱なし 買取', 'ゲーム 傷 買取', 'ジャンク ゲーム 買取 どこ', 'ゲーム 故障 買取', 'ゲームソフト 説明書なし 買取'],
  openGraph: {
    images: ['/og.png'],
    title: '状態別 ゲーム買取 許容度マップ｜箱なし・傷・ジャンクはどこで売れる？',
    description: '状態ごとに各社の買取可否・減額ルールを公式情報で比較しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

// 各社公式（買取ガイド/FAQ/買取条件）を2026-06-21に確認。◎寛容/○可/△減額・ジャンク査定/✕不可/—不明
type Cell = '◎' | '○' | '△' | '✕' | '—';
const stores = ['ブックオフ', 'ゲオ', '駿河屋', 'カイトリワールド', 'ゲーム王国'] as const;
const conditions: { label: string; cells: Cell[]; note: string }[] = [
  { label: 'ディスク軽い傷／動作未確認', cells: ['△', '△', '○', '△', '○'], note: '「再生不可能な深い傷」は各社共通で買取不可です。駿河屋は、通常使用による自然な傷み・汚れを減額対象外と明記しています。ゲオ・カイトリワールドは、動作が不安定な場合はジャンク査定となります。' },
  { label: '箱なし・説明書なし（ソフト）', cells: ['△', '△', '△', '○', '◎'], note: 'ブックオフは、ディスクタイプは箱・説明書なしの場合に買取不可、カートリッジ（カセット）は買取可能です。駿河屋は必須付属品が欠品していると大幅に減額されます。カイトリワールドは箱なしソフトのみ買取可、ゲーム王国はケースなしソフトも買取と明記しています。' },
  { label: '付属品欠品（本体のケーブル等）', cells: ['△', '△', '△', '—', '○'], note: '本体は各社とも減額の対象です。駿河屋は、本体の主要パーツが欠けている場合は買取不可です。ゲーム王国は付属品なしでも買取しています（例：PS5完品3万円→付属品なし約1.8万円と公式コラムに記載）。' },
  { label: 'ジャンク・故障品（電源入らない等）', cells: ['✕', '○', '○', '○', '◎'], note: 'ブックオフは動作不良の本体を買取対象外としています。ゲオは「動かないゲーム機も買取」、駿河屋は「壊れたゲーム機本体買取強化中（指定機種）」と案内しており、ゲーム王国は故障・落書き・汚れがあっても買取と、最も寛容な条件です。' },
  { label: '未初期化（データ未消去）', cells: ['—', '✕', '—', '—', '○'], note: 'ゲオは、個人情報が削除できない商品や各種ロックが解除されていない商品を買取不可としています（初期化が必要）。ゲーム王国は未初期化でも買取可能です（個人情報が残っている場合は初期化を推奨）。その他の各社は公式に明記がないため、発送前に初期化しておくことをおすすめします。' },
];

const tolerant = [
  { rank: '最も寛容', store: 'ゲーム王国', detail: '故障・箱なし・付属品なし・落書き・汚れ・未初期化のいずれも買取可と公式に明記しています。ジャンク品・箱なし品の受け入れ範囲が最も広い店舗です。' },
  { rank: '寛容', store: 'カイトリワールド', detail: '箱なしソフトのみの買取とジャンク買取を明記しています。動作が不安定な場合はジャンク査定となります。' },
  { rank: 'ジャンク品に正式対応', store: 'ゲオ／駿河屋', detail: '「ジャンク品」「壊れた本体」を正式な区分として買取しています。ただし、参考価格は完品基準のため、欠品・故障がある場合は減額またはジャンク査定となります。' },
  { rank: '最も厳しい', store: 'ブックオフ', detail: 'ディスクタイプは箱・説明書なしの場合は買取不可、動作不良の本体も対象外です。カートリッジソフトは、箱・説明書なしでも買取対象です。' },
];

const faqs = [
  { q: '箱なし・説明書なしのゲームソフトはどこで売れますか？', a: 'カートリッジ（カセット）タイプであれば、ブックオフでも箱・説明書なしで買取可能です。ディスクタイプの箱なしソフトは、ゲーム王国（ケースなしソフトも買取と明記）やカイトリワールド（箱なしソフトのみ買取可）が適しています。駿河屋も買取可能ですが、必須付属品の欠品があると大幅に減額されます（各社公式情報・2026年6月）。' },
  { q: '故障した（電源が入らない）ゲーム機は買い取ってもらえますか？', a: 'ゲーム王国が最も寛容で、故障・落書き・汚れがあっても買取可能と明記しています。ゲオ（動かないゲーム機も買取）、駿河屋（壊れたゲーム機本体買取強化中・指定機種）もジャンク品を正式に買取しています。一方、ブックオフは動作不良本体を買取対象外としています。' },
  { q: 'ディスクに傷があると買い取ってもらえませんか？', a: '軽い傷であれば多くの店舗で買取可能ですが、「再生不可能な深い傷・貫通傷・円周傷」は各社共通で買取不可です。駿河屋は、通常使用でつく自然な傷み・汚れを減額対象外と明記しています。傷がある場合は事前にクリーニングし、複数店舗で査定を比較することをおすすめします。' },
  { q: '本体を売る前にデータの初期化（消去）は必要ですか？', a: 'ゲオは個人情報が削除できない商品やロック未解除の商品を買取不可としているため、初期化と各種ロックの解除が必要です。ゲーム王国は未初期化でも買取可能ですが、個人情報保護の観点から発送前の初期化が推奨されています。その他の各社は公式に明記がないため、トラブル防止の観点から、売却前に初期化しておくことをおすすめします。' },
];

const PAGE_TITLE = '状態別 ゲーム買取 許容度マップ｜箱なし・傷・ジャンクはどこで売れる？';

export default function ConditionGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": PAGE_TITLE, "datePublished": "2026-06-21", "dateModified": "2026-06-21", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較している編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: '売り方ガイド', href: '/' }, { name: '状態別 買取許容度マップ' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'var(--color-accent-soft-strong)', color: 'var(--color-accent)' }}>状態別・公式情報で比較</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">状態別 ゲーム買取 許容度マップ</h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            箱なし・説明書なし・ディスク傷・付属品欠品・ジャンク（故障）・未初期化について、状態ごとにどの店舗で売却できるかを、各社公式情報にもとづいて一覧にしています。一般的な比較サイトでは扱いの少ない、状態別の買取条件をまとめました。
          </p>
          <GeoSuspendedNotice />
          <p className="text-xs" style={{ color: '#94A3B8' }}>各社公式の買取ガイド/FAQ/買取条件を2026年6月21日に確認しています</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 許容度マップ本体 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />状態×店舗 買取許容度マップ</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            <strong>◎</strong>=寛容（そのまま買取） <strong>○</strong>=買取可 <strong>△</strong>=減額・ジャンク査定 <strong>✕</strong>=買取不可 <strong>—</strong>=公式に明記なし
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>状態</th>{stores.map((s) => <th key={s}>{s}</th>)}</tr>
              </thead>
              <tbody>
                {conditions.map((c) => (
                  <tr key={c.label}>
                    <td className="font-bold text-sm">{c.label}</td>
                    {c.cells.map((cell, i) => (
                      <td key={i} className="text-center font-bold" style={{ color: cell === '◎' || cell === '○' ? 'var(--color-electric-green)' : cell === '✕' ? '#F87171' : 'var(--color-text-light)' }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ブックオフ・ゲオ・駿河屋・カイトリワールド・ゲーム王国の各公式買取ガイド/FAQ/買取条件ページ（2026年6月21日確認）。判定は公式記載に基づき当サイトが整理したもので、実際の可否・減額幅は商品・店舗・時期により変動します。</p>
        </section>

        {/* 状態別の詳しい解説 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />状態別の取り扱いと売却先の選び方</h2>
          <div className="space-y-4">
            {conditions.map((c) => (
              <div key={c.label} className="glass-card p-5">
                <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{c.label}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{c.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 寛容度ランキング */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />状態の悪い品に寛容な店舗ランキング</h2>
          <div className="space-y-4">
            {tolerant.map((t, i) => (
              <div key={t.store} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{t.rank}：{t.store}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />よくある質問</h2>
          <div>
            {faqs.map((faq, i) => (<details key={i} className="faq-item"><summary>{faq.q}</summary><div className="faq-answer">{faq.a}</div></details>))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) }) }} />
        </section>

        {/* CTA + 関連 */}
        <section className="glass-card-dark p-8 text-center mb-10">
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>状態の悪い品は<span style={{ color: 'var(--color-electric-green)' }}>売却先の選択</span>が重要です</h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>箱なし・ジャンク品でも、店舗を選べば値段がつく場合があります。まずは複数社の査定を比較することをおすすめします。</p>
          <div className="flex flex-wrap justify-center gap-4"><Link href="/price-index/" className="btn-primary py-3 px-8">最新の最高値を確認する</Link></div>
        </section>

        <section className="mt-4">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/knowledge/boxless/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>箱なしゲームの買取</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なしで高く売るためのポイント</p></Link>
            <Link href="/knowledge/broken/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>故障・ジャンク品の買取</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>壊れたゲームの売り方</p></Link>
            <Link href="/price-index/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲーム買取価格インデックス</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>実測データによる最高値の確認</p></Link>
            <Link href="/review/kaitori-world/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取ワールドの評判</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>状態の悪い品も対象とする宅配買取</p></Link>
            <Link href="/review/uriel/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ウリエルの評判</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>高額査定で評判のある買取店</p></Link>
          </div>
        </section>
        <KaitoriWorldCta compact />
        <AuthorBox />
      </div>
    </>
  );
}
