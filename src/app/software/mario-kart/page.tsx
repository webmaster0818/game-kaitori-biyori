import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';
import { SeriesPriceTable } from '@/components/PriceIndex';
import KaitoriWorldCta from '@/components/KaitoriWorldCta';
import { getPricesByKeyword, analyzeTitle, STORE_LABELS, PRICE_SURVEY_DATE } from '@/data/prices';

const KEYWORD = 'マリオカート';
const MONTH = `${PRICE_SURVEY_DATE.slice(0, 4)}年${Number(PRICE_SURVEY_DATE.slice(5, 7))}月`;
const SURVEY = `${PRICE_SURVEY_DATE.replace(/-0?(\d+)-0?(\d+)/, '年$1月$2日')}`;

function main() {
  const row = getPricesByKeyword(KEYWORD)[0];
  return row ? analyzeTitle(row) : null;
}

export function generateMetadata(): Metadata {
  const a = main();
  const best = a ? `${a.best.price.toLocaleString()}円(${STORE_LABELS[a.best.store]})` : '';
  return {
    title: `マリオカート8 デラックスの買取価格はいくら？【${MONTH}】公式買取価格を毎週実測比較`,
    description: `マリオカート8 デラックスの買取価格を、ブックオフ・ゲオ・駿河屋の公式買取ページで毎週実測して比較。${best ? `${SURVEY}実測の最高値は${best}。` : ''}コース追加パス同梱版との価格差や高く売るコツも、実測データだけで解説します。`,
    keywords: ['マリオカート8 デラックス 買取', 'マリカ8 買取価格', 'マリオカート 売る', 'マリオカート8 買取相場'],
    openGraph: {
      title: `マリオカート8 デラックスの買取価格はいくら？【${MONTH}】`,
      description: 'ブックオフ・ゲオ・駿河屋の公式買取価格を毎週実測して比較。',
      type: 'article',
      locale: 'ja_JP',
      siteName: 'ゲーム買取びより',
    },
  };
}

export default function MarioKartPage() {
  const a = main();
  const bestTxt = a ? `${a.best.price.toLocaleString()}円(${STORE_LABELS[a.best.store]})` : null;

  const faqs = [
    {
      q: 'マリオカート8 デラックスの買取価格は今いくらですか？',
      a: a
        ? `${SURVEY}の実測では、公表買取価格の最高値は${bestTxt}です(完品・通常版基準)。ゲオは同日の高価買取リストに掲載がありませんでした(買取不可の意味ではなく、リスト外は店頭査定になります)。当ページの表は毎週の実測で更新しています。`
        : '当ページの表(毎週実測)をご覧ください。',
    },
    {
      q: '「コース追加パス」同梱版は高く売れますか？',
      a: `はい。${SURVEY}の実測では、駿河屋で「＋コース追加パス」版が6,500円と、通常版(2,100円)の3倍以上の公表価格でした。お持ちのパッケージがどちらの版かを必ず確認してから査定に出しましょう。`,
    },
    {
      q: 'マリオカート8 デラックスは発売から年数が経っていますが、まだ売れますか？',
      a: '売れます。2017年発売のロングセラーですが、Switch世代の定番タイトルとして各社の公表買取リストに継続掲載されています。ただしSwitch 2世代の新作マリオカートの普及が進むと下落しやすくなるため、遊び終えているなら早めの売却が無難です。',
    },
    {
      q: '高く売るコツはありますか？',
      a: '①パッケージ・説明書などを揃えた完品にする ②「＋コース追加パス」版かどうかを確認する(価格が大きく違います) ③売る直前に当サイトの毎週実測表で最高値の店を確認する——の3点です。同じソフトでも店舗間で公表価格に差があります。',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: `マリオカート8 デラックスの買取価格はいくら？【${MONTH}】`, datePublished: '2026-08-14', dateModified: PRICE_SURVEY_DATE, author: { '@type': 'Person', name: '中村 大輝', description: 'ゲームコレクター歴15年、レトロゲーム買取査定経験者' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'マリオカート8 デラックスの買取価格' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>タイトル別買取相場</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">マリオカート8 デラックスの買取価格【{MONTH}】</h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            マリオカート8 デラックスの買取価格を、ブックオフ・ゲオ・駿河屋の公式買取ページで毎週実測して比較しています。
            {bestTxt && <>今回の実測({SURVEY})の公表最高値は<strong className="text-white">{bestTxt}</strong>。</>}
            コース追加パス同梱版との価格差も実測値で確認できます。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>調査時点: {SURVEY}(各社公式買取ページの公表値・完品基準)</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/compare/kaitori-ranking/" className="btn-primary py-2.5 px-6">おすすめ買取サービスを見る</Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <SeriesPriceTable keyword={KEYWORD} heading="マリオカート8 デラックスの店舗別 買取価格【毎週更新の実測データ】" />

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />版違いに注意：通常版と「＋コース追加パス」版</h2>
          <div className="glass-card p-5">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              マリオカート8 デラックスには通常版のほかに「＋コース追加パス」同梱版があり、買取価格が大きく異なります。
              {SURVEY}の実測では、駿河屋の公表価格で<strong style={{ color: 'var(--color-deep-blue)' }}>通常版2,100円に対しパス版6,500円</strong>と3倍以上の差がありました。
              パッケージ表記を確認してから売却先を選ぶだけで、手取りが大きく変わります。
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />マリオカートを高く売るコツ</h2>
          <div className="space-y-4">
            {[
              { title: '版(通常版/パス版)を最初に確認する', description: '「＋コース追加パス」版は通常版の3倍以上の公表価格(駿河屋6,500円 vs 2,100円・実測)。パッケージ右上の表記で判別できます。' },
              { title: '掲載リストの有無で店を選ぶ', description: 'ゲオは高価買取リストに掲載がない週があり、その場合は店頭査定になります。公表価格を出している店(実測表参照)に持ち込む方が価格が読めます。' },
              { title: '完品状態で売る', description: '各社の公表価格はパッケージ・説明書ありの完品基準です。ケース割れや欠品は減額対象になります。' },
              { title: '新作マリオカートの普及前に判断する', description: 'Switch 2世代の新作の普及が進むと旧作は下落しやすくなります。遊び終えているなら、毎週の実測表で価格を見ながら早めに動くのが無難です。' },
            ].map((tip, i) => (
              <div key={tip.title} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{tip.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />よくある質問</h2>
          <div>
            {faqs.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary>{faq.q}</summary>
                <div className="faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) }) }} />
        </section>

        <section className="glass-card-dark p-8 text-center">
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>マリオカートを<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>で売りませんか？</h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>版の違いと店舗差で手取りが変わります。売る前に毎週実測の公表価格をチェックしましょう。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/compare/kaitori-ranking/" className="btn-primary py-3 px-8">おすすめランキングを見る</Link>
          </div>
        </section>

        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連するソフト買取ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/software/high-value/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>高く売れるソフトランキング</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>公式買取価格で横断比較</p>
            </Link>
            <Link href="/software/smash-bros/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>スマブラSPの買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>毎週実測の店舗比較</p>
            </Link>
            <Link href="/software/animal-crossing/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>あつ森の買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>Switch 2 Edition対応</p>
            </Link>
          </div>
        </section>
        <KaitoriWorldCta compact />
        <AuthorBox />
      </div>
    </>
  );
}
