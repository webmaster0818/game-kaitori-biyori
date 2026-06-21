import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

export const metadata: Metadata = {
  title: '状態別 ゲーム買取 許容度マップ【2026年6月】箱なし・傷・ジャンクはどこで売れる？',
  description:
    'ディスク傷・箱なし・説明書なし・付属品欠品・ジャンク（故障）・未初期化——状態ごとに、ブックオフ・ゲオ・駿河屋・カイトリワールド・ゲーム王国の買取可否と減額ルールを各社公式情報で比較。あなたのゲームを一番高く・確実に売れる店がわかります。',
  keywords: ['ゲーム 箱なし 買取', 'ゲーム 傷 買取', 'ジャンク ゲーム 買取 どこ', 'ゲーム 故障 買取', 'ゲームソフト 説明書なし 買取'],
  openGraph: {
    title: '状態別 ゲーム買取 許容度マップ【2026年6月】箱なし・傷・ジャンクはどこで売れる？',
    description: '状態ごとに各社の買取可否・減額ルールを公式情報で比較。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

// 各社公式（買取ガイド/FAQ/買取条件）を2026-06-21に確認。◎寛容/○可/△減額・ジャンク査定/✕不可/—不明
type Cell = '◎' | '○' | '△' | '✕' | '—';
const stores = ['ブックオフ', 'ゲオ', '駿河屋', 'カイトリワールド', 'ゲーム王国'] as const;
const conditions: { label: string; cells: Cell[]; note: string }[] = [
  { label: 'ディスク軽い傷／動作未確認', cells: ['△', '△', '○', '△', '○'], note: '各社共通で「再生不可能な深い傷」は買取不可。駿河屋は通常使用の自然な傷み・汚れは減額対象外と明記。ゲオ・カイトリワールドは動作不安定だとジャンク査定。' },
  { label: '箱なし・説明書なし（ソフト）', cells: ['△', '△', '△', '○', '◎'], note: 'ブックオフはディスクタイプは箱・説明書なしだと買取不可／カートリッジ（カセット）はOK。駿河屋は必須付属品欠品で大幅減額。カイトリワールドは箱なしソフトのみ買取可、ゲーム王国はケースなしソフトも買取と明記。' },
  { label: '付属品欠品（本体のケーブル等）', cells: ['△', '△', '△', '—', '○'], note: '本体は各社とも減額方向。駿河屋は本体主要パーツ欠けは買取不可。ゲーム王国は付属品なしでも買取（例：PS5完品3万→付属品なし約1.8万と公式コラムに記載）。' },
  { label: 'ジャンク・故障品（電源入らない等）', cells: ['✕', '○', '○', '○', '◎'], note: 'ブックオフは動作不良本体は買取対象外。ゲオ「動かないゲーム機も買取」、駿河屋「壊れたゲーム機本体買取強化中（指定機種）」、ゲーム王国は故障・落書き・汚れでも買取と最も寛容。' },
  { label: '未初期化（データ未消去）', cells: ['—', '✕', '—', '—', '○'], note: 'ゲオは個人情報削除不可・各種ロック未解除だと買取不可（要初期化）。ゲーム王国は未初期化でも買取可（個人情報残存時は初期化推奨）。他社は公式に明記なし＝発送前の初期化が安全。' },
];

const tolerant = [
  { rank: '最も寛容', store: 'ゲーム王国', detail: '故障・箱なし・付属品なし・落書き・汚れ・未初期化のいずれも買取可と公式に明記。ジャンク／箱なしの間口が最も広い。' },
  { rank: '寛容', store: 'カイトリワールド', detail: '箱なしソフトのみ買取・ジャンク買取を明記。動作不安定はジャンク査定。' },
  { rank: 'ジャンクは正式対応', store: 'ゲオ／駿河屋', detail: '「ジャンク品」「壊れた本体」を正式区分で買取。ただし参考価格は完品基準で、欠品・故障は明確に減額・ジャンク査定。' },
  { rank: '最も厳しい', store: 'ブックオフ', detail: 'ディスクタイプは箱・説明書なしで買取不可、動作不良本体は対象外。カートリッジソフトの箱・説明書なしは許容。' },
];

const faqs = [
  { q: '箱なし・説明書なしのゲームソフトはどこで売れますか？', a: 'カートリッジ（カセット）タイプならブックオフでも箱・説明書なしで買取可能です。ディスクタイプの箱なしは、ゲーム王国（ケースなしソフトも買取と明記）やカイトリワールド（箱なしソフトのみ買取可）が向いています。駿河屋は買取可ですが必須付属品の欠品で大幅減額になります（各社公式情報・2026年6月）。' },
  { q: '故障した（電源が入らない）ゲーム機は買い取ってもらえますか？', a: 'ゲーム王国が最も寛容で、故障・落書き・汚れでも買取可能と明記しています。ゲオ（動かないゲーム機も買取）、駿河屋（壊れたゲーム機本体買取強化中・指定機種）もジャンクを正式に買取しています。一方ブックオフは動作不良本体を買取対象外としています。' },
  { q: 'ディスクに傷があると買い取ってもらえませんか？', a: '軽い傷なら多くの店で買取可能ですが、「再生不可能な深い傷・貫通傷・円周傷」は各社共通で買取不可です。駿河屋は通常使用でつく自然な傷み・汚れは減額対象外と明記しています。傷がある場合は事前にクリーニングし、複数店で査定を比較しましょう。' },
  { q: '本体を売る前にデータの初期化（消去）は必要ですか？', a: 'ゲオは個人情報が削除できない商品やロック未解除の商品を買取不可としているため、初期化と各種ロック解除が必要です。ゲーム王国は未初期化でも買取可ですが、個人情報保護の観点から発送前の初期化が推奨されます。他社は公式に明記がないため、トラブル防止のため売却前の初期化が安全です。' },
];

const PAGE_TITLE = '状態別 ゲーム買取 許容度マップ【2026年6月】箱なし・傷・ジャンクはどこで売れる？';

export default function ConditionGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": PAGE_TITLE, "datePublished": "2026-06-21", "dateModified": "2026-06-21", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: '買い方ガイド', href: '/' }, { name: '状態別 買取許容度マップ' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(0,230,118,0.2)', color: '#00E676' }}>状態別・公式情報で比較</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">状態別 ゲーム買取 許容度マップ</h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            箱なし・説明書なし・ディスク傷・付属品欠品・ジャンク（故障）・未初期化——「この状態、どこなら売れる？」を各社公式情報で一覧化。大手の比較サイトが追いきれない、状態別の"買取の本音"をまとめました。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>各社公式の買取ガイド/FAQ/買取条件を2026年6月21日に確認</p>
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
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ブックオフ・ゲオ・駿河屋・カイトリワールド・ゲーム王国の各公式買取ガイド/FAQ/買取条件ページ（2026年6月21日確認）。判定は公式記載に基づく当サイトの整理で、実際の可否・減額幅は商品・店舗・時期で変動します。</p>
        </section>

        {/* 状態別の詳しい解説 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />状態別のくわしい扱いと売り先の選び方</h2>
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />「状態が悪い品」に寛容な店ランキング</h2>
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
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>状態が悪くても<span style={{ color: 'var(--color-electric-green)' }}>あきらめない</span></h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>箱なし・ジャンクでも、店を選べば値段がつきます。まずは複数社の査定を比較しましょう。</p>
          <div className="flex flex-wrap justify-center gap-4"><Link href="/price-index/" className="btn-primary py-3 px-8">今どこが一番高いか見る</Link></div>
        </section>

        <section className="mt-4">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/knowledge/boxless/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>箱なしゲームの買取</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なしでも高く売るコツ</p></Link>
            <Link href="/knowledge/broken/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>故障・ジャンク品の買取</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>壊れたゲームの売り方</p></Link>
            <Link href="/price-index/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲーム買取価格インデックス</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>毎週更新・今どこが高い？</p></Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
