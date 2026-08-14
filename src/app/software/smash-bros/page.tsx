import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';
import { SeriesPriceTable } from '@/components/PriceIndex';
import KaitoriWorldCta from '@/components/KaitoriWorldCta';
import { getPricesByKeyword, analyzeTitle, STORE_LABELS, PRICE_SURVEY_DATE } from '@/data/prices';

const KEYWORD = 'スマッシュブラザーズ';
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
    title: `スマブラSPの買取価格はいくら？【${MONTH}】ブックオフ・ゲオ・駿河屋を毎週実測比較`,
    description: `大乱闘スマッシュブラザーズ SPECIALの買取価格を、ブックオフ・ゲオ・駿河屋の公式買取ページで毎週実測して比較。${best ? `${SURVEY}実測の最高値は${best}。` : ''}店舗間の価格差と高く売るコツも、実測データだけで解説します。`,
    keywords: ['スマブラSP 買取', 'スマブラ 買取価格', '大乱闘スマッシュブラザーズ SPECIAL 買取', 'スマブラ 売る'],
    openGraph: {
      title: `スマブラSPの買取価格はいくら？【${MONTH}】`,
      description: 'ブックオフ・ゲオ・駿河屋の公式買取価格を毎週実測して比較。',
      type: 'article',
      locale: 'ja_JP',
      siteName: 'ゲーム買取びより',
    },
  };
}

export default function SmashBrosPage() {
  const a = main();
  const bestTxt = a ? `${a.best.price.toLocaleString()}円(${STORE_LABELS[a.best.store]})` : null;
  const gapTxt = a && a.gap > 0 ? `${a.gap.toLocaleString()}円` : null;

  const faqs = [
    {
      q: 'スマブラSPの買取価格は今いくらですか？',
      a: a
        ? `${SURVEY}の実測では、公表買取価格の最高値は${bestTxt}です(完品基準)。3社とも公表リストに掲載がある定番タイトルで、当ページの表は毎週の実測で更新しています。`
        : '当ページの表(毎週実測)をご覧ください。',
    },
    {
      q: 'どの店に売るのが一番高いですか？',
      a: a
        ? `${SURVEY}の実測では${STORE_LABELS[a.best.store]}が${a.best.price.toLocaleString()}円で最高値でした${gapTxt ? `(最安の公表価格との差は${gapTxt})` : ''}。ただし公表価格は毎週動くため、売る直前に当ページの実測表で最新の最高値を確認してください。`
        : '当ページの実測表で最新の最高値を確認してください。',
    },
    {
      q: '発売から時間が経ったスマブラSPでも高く売れますか？',
      a: '売れます。2018年発売ながら対戦人気が続く定番タイトルで、Switchソフトの中でも公表買取価格が高い部類を維持しています(実測表参照)。ただしSwitch 2世代への移行が進むと下落リスクがあるため、遊び終えているなら早めの判断が無難です。',
    },
    {
      q: 'スマブラSPを高く売るコツはありますか？',
      a: '①パッケージ・説明書を揃えた完品にする ②3社の公表価格を見比べて最高値の店に売る(店舗間で数百円の差・実測) ③毎週の実測表で価格の動きを確認し、下がる前に売る——の3点です。',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: `スマブラSPの買取価格はいくら？【${MONTH}】`, datePublished: '2026-08-14', dateModified: PRICE_SURVEY_DATE, author: { '@type': 'Person', name: '中村 大輝', description: 'ゲームコレクター歴15年、レトロゲーム買取査定経験者' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'スマブラSPの買取価格' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>タイトル別買取相場</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">スマブラSPの買取価格【{MONTH}】</h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            大乱闘スマッシュブラザーズ SPECIALの買取価格を、ブックオフ・ゲオ・駿河屋の公式買取ページで毎週実測して比較しています。
            {bestTxt && <>今回の実測({SURVEY})の公表最高値は<strong className="text-white">{bestTxt}</strong>。</>}
            店舗間の価格差も実測値で確認できます。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>調査時点: {SURVEY}(各社公式買取ページの公表値・完品基準)</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/compare/kaitori-ranking/" className="btn-primary py-2.5 px-6">おすすめ買取サービスを見る</Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <SeriesPriceTable keyword={KEYWORD} heading="スマブラSPの店舗別 買取価格【毎週更新の実測データ】" />

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />スマブラSPを高く売るコツ</h2>
          <div className="space-y-4">
            {[
              { title: '3社の公表価格を見比べてから売る', description: 'スマブラSPは3社とも公表リストに載る定番タイトルで、店舗間で公表価格に差があります(実測表参照)。最高値の店を選ぶだけで手取りが変わります。' },
              { title: '完品状態で売る', description: '各社の公表価格はパッケージ・説明書ありの完品基準です。ケース割れや欠品は減額対象になります。' },
              { title: '対戦人気があるうちに売る', description: '発売から年数が経っても公表価格が高い部類を維持していますが、Switch 2世代への移行が進むと下落リスクがあります。毎週の実測表で動きを確認しましょう。' },
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
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>スマブラSPを<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>で売りませんか？</h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>店舗間の価格差で手取りが変わります。売る前に毎週実測の公表価格をチェックしましょう。</p>
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
            <Link href="/software/mario-kart/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>マリオカート8 デラックスの買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>パス版との価格差も実測</p>
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
