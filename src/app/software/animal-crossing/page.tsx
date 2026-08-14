import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';
import { SeriesPriceTable } from '@/components/PriceIndex';
import KaitoriWorldCta from '@/components/KaitoriWorldCta';
import { getPricesByKeyword, analyzeTitle, STORE_LABELS, PRICE_SURVEY_DATE } from '@/data/prices';

const KEYWORD = 'どうぶつの森';
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
    title: `あつ森(あつまれ どうぶつの森)の買取価格はいくら？【${MONTH}】毎週実測比較`,
    description: `あつまれ どうぶつの森の買取価格を、ブックオフ・ゲオ・駿河屋の公式買取ページで毎週実測して比較。${best ? `${SURVEY}実測の最高値は${best}。` : ''}Switch 2 Editionとの価格差や高く売るコツも、実測データだけで解説します。`,
    keywords: ['あつ森 買取', 'あつまれどうぶつの森 買取価格', 'あつ森 売る', 'どうぶつの森 買取相場'],
    openGraph: {
      title: `あつ森の買取価格はいくら？【${MONTH}】`,
      description: 'ブックオフ・ゲオ・駿河屋の公式買取価格を毎週実測して比較。',
      type: 'article',
      locale: 'ja_JP',
      siteName: 'ゲーム買取びより',
    },
  };
}

export default function AnimalCrossingPage() {
  const a = main();
  const bestTxt = a ? `${a.best.price.toLocaleString()}円(${STORE_LABELS[a.best.store]})` : null;

  const faqs = [
    {
      q: 'あつ森の買取価格は今いくらですか？',
      a: a
        ? `${SURVEY}の実測では、公表買取価格の最高値は${bestTxt}です(完品・通常版基準)。3社とも公表リストに掲載がある定番タイトルで、当ページの表は毎週の実測で更新しています。`
        : '当ページの表(毎週実測)をご覧ください。',
    },
    {
      q: 'Switch 2 Editionのあつ森はいくらで売れますか？',
      a: `${SURVEY}の実測では、Switch 2 Editionはブックオフ2,500円・駿河屋2,700円と、通常版(ブックオフ2,200円・駿河屋2,400円)より数百円高い公表価格でした。パッケージの版を確認してから査定に出しましょう。`,
    },
    {
      q: '発売から時間が経ったあつ森でも売れますか？',
      a: '売れます。2020年発売ながら3社の公表買取リストに継続掲載されている定番タイトルです。直近の実測ではブックオフが2,000円→2,200円へ増額するなど、公表価格が動くことがあるため、売る直前に当ページの実測表で確認するのがおすすめです。',
    },
    {
      q: 'あつ森を高く売るコツはありますか？',
      a: '①パッケージ・説明書を揃えた完品にする ②通常版かSwitch 2 Editionかを確認する ③毎週の実測表で最高値の店を確認してから持ち込む——の3点です。同じソフトでも店舗間で公表価格に差があります。',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: `あつ森(あつまれ どうぶつの森)の買取価格はいくら？【${MONTH}】`, datePublished: '2026-08-14', dateModified: PRICE_SURVEY_DATE, author: { '@type': 'Person', name: '中村 大輝', description: 'ゲームコレクター歴15年、レトロゲーム買取査定経験者' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'あつ森の買取価格' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>タイトル別買取相場</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">あつ森(あつまれ どうぶつの森)の買取価格【{MONTH}】</h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            あつまれ どうぶつの森の買取価格を、ブックオフ・ゲオ・駿河屋の公式買取ページで毎週実測して比較しています。
            {bestTxt && <>今回の実測({SURVEY})の公表最高値は<strong className="text-white">{bestTxt}</strong>。</>}
            Switch 2 Editionとの価格差も実測値で確認できます。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>調査時点: {SURVEY}(各社公式買取ページの公表値・完品基準)</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/compare/kaitori-ranking/" className="btn-primary py-2.5 px-6">おすすめ買取サービスを見る</Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <SeriesPriceTable keyword={KEYWORD} heading="あつまれ どうぶつの森の店舗別 買取価格【毎週更新の実測データ】" />

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />版違いに注意：通常版とSwitch 2 Edition</h2>
          <div className="glass-card p-5">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              あつ森には従来のSwitch版のほかに「Nintendo Switch 2 Edition」があり、公表買取価格が異なります。
              {SURVEY}の実測では<strong style={{ color: 'var(--color-deep-blue)' }}>Switch 2 Editionがブックオフ2,500円・駿河屋2,700円</strong>と、通常版より数百円高い水準でした。
              お手持ちのパッケージがどちらの版かを確認してから売却先を選びましょう。
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />あつ森を高く売るコツ</h2>
          <div className="space-y-4">
            {[
              { title: '3社の公表価格を見比べてから売る', description: 'あつ森は3社とも公表リストに載る定番タイトルで、店舗間で数百円の差があります(実測表参照)。売る店を選ぶだけで手取りが変わります。' },
              { title: '版(通常版/Switch 2 Edition)を確認する', description: 'Switch 2 Editionは通常版より高い公表価格(実測)。パッケージ表記で判別できます。' },
              { title: '完品状態で売る', description: '各社の公表価格はパッケージ・説明書ありの完品基準です。欠品は減額対象になります。' },
              { title: '公表価格の増額タイミングを逃さない', description: '直近の実測ではブックオフが2,000円→2,200円へ増額しました。毎週の実測表で価格の動きを見て、上がったタイミングで売るのが有利です。' },
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
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>あつ森を<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>で売りませんか？</h2>
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
            <Link href="/software/mario-kart/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>マリオカート8 デラックスの買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>パス版との価格差も実測</p>
            </Link>
            <Link href="/software/smash-bros/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>スマブラSPの買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>毎週実測の店舗比較</p>
            </Link>
          </div>
        </section>
        <KaitoriWorldCta compact />
        <AuthorBox />
      </div>
    </>
  );
}
