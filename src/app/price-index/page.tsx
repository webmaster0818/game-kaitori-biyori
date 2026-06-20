import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';
import { PriceMatrix, PriceDiffRanking, PriceFreshnessNote } from '@/components/PriceIndex';
import { PRICE_SURVEY_DATE, crossStorePrices, priceDiffRanking } from '@/data/prices';

export const metadata: Metadata = {
  title: 'ゲーム買取価格インデックス【毎週更新】今どこが一番高い？店舗横断の実測比較',
  description:
    'ブックオフ・ゲオ・駿河屋の公式買取価格を毎週調査し、人気ゲームソフトを店舗横断で比較。同じソフトでも店で1,000円以上差がつく実測データを掲載。売る前に「今どこが一番高いか」が一目でわかります。',
  keywords: ['ゲーム 買取価格', 'ゲームソフト 買取 相場', 'ゲーム 買取 比較', '高く売れるゲームソフト', 'ゲーム 買取 どこが高い'],
  openGraph: {
    title: 'ゲーム買取価格インデックス【毎週更新】今どこが一番高い？',
    description: 'ブックオフ・ゲオ・駿河屋の公式買取価格を毎週調査し店舗横断で比較。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const topGap = priceDiffRanking()[0];

export default function PriceIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲーム買取価格インデックス【毎週更新】今どこが一番高い？店舗横断の実測比較", "datePublished": "2026-06-20", "dateModified": PRICE_SURVEY_DATE, "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'ゲーム買取価格インデックス' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(0,230,118,0.2)', color: '#00E676' }}>毎週更新・実測データ</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">ゲーム買取価格インデックス</h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ブックオフ・ゲオ・駿河屋が公式に公開している買取価格を<strong>毎週調査</strong>し、人気ソフトを店舗横断で比較。「売る前に、今どこが一番高いか」が一目でわかります。同じソフトでも店によって差がつくのが中古ゲーム買取の実態です。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終調査日: {PRICE_SURVEY_DATE}（各社公式買取ページ）</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {topGap && (
          <div className="glass-card p-5 mb-10">
            <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
              💡 今週の注目: <strong>「{topGap.title}」は店によって最大 {topGap.gap.toLocaleString()}円の差</strong>。今いちばん高いのは{topGap.best.price.toLocaleString()}円の店舗です。下の比較表で各ソフトの最高値店をチェックしましょう。
            </p>
          </div>
        )}

        {/* 価格差ランキング（柱1の核） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />どこで売るかで一番差がつくゲームランキング</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            同じソフトでも、買取店によって価格は変わります。<strong>最高値の店と最安の店の差が大きい順</strong>に並べました。差が大きいタイトルほど「店選び」で手取りが変わります。
          </p>
          <PriceDiffRanking limit={10} />
          <PriceFreshnessNote />
        </section>

        {/* 店舗横断マトリクス */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />人気ソフトの店舗横断 買取価格マトリクス</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            人気タイトルごとに、ブックオフ・ゲオ・駿河屋の買取価格を横並びで比較。<span style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>◎＝そのソフトで最高値の店</span>です。
          </p>
          <PriceMatrix list={crossStorePrices} />
          <PriceFreshnessNote />
        </section>

        {/* 使い方・売り方 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />このデータの使い方</h2>
          <div className="space-y-4">
            <div className="glass-card p-5"><h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>1. 売りたいソフトの「最高値の店」を確認</h3><p className="text-sm" style={{ color: 'var(--color-text-light)' }}>マトリクスで◎が付いている店が、そのソフトで現在いちばん高い店です。同じソフトでも店で数百〜1,000円以上変わります。</p></div>
            <div className="glass-card p-5"><h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>2. 複数本まとめるなら「実質手取り」で判断</h3><p className="text-sm" style={{ color: 'var(--color-text-light)' }}>送料無料の条件・振込手数料・梱包材まで含めた手取りで比べると逆転することもあります。<Link href="/compare/mercari-vs-kaitori/" className="text-petrol" style={{ color: 'var(--color-electric-green)' }}>メルカリとの比較</Link>もあわせてどうぞ。</p></div>
            <div className="glass-card p-5"><h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>3. 売り時を逃さない</h3><p className="text-sm" style={{ color: 'var(--color-text-light)' }}>新作は発売直後ほど高く、その後は下落します。当サイトは毎週価格を更新しているので、売る直前に最新の数字を確認してください。</p></div>
          </div>
        </section>

        {/* 関連 */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/software/high-value/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>高く売れるソフトランキング</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>公式買取価格で横断比較</p></Link>
            <Link href="/compare/kaitori-ranking/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取おすすめランキング</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>15社を徹底比較</p></Link>
            <Link href="/method/high-price/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>高く売るコツ</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>買取価格を最大化</p></Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
