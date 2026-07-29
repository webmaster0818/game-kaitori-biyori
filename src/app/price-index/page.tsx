import PriceTrendChart from "@/components/PriceTrendChart";
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';
import { PriceMatrix, PriceDiffRanking, PriceFreshnessNote } from '@/components/PriceIndex';
import { PRICE_SURVEY_DATE, PRICE_PREV_SURVEY_DATE, HARDWARE_SURVEY_DATE, STORE_LABELS, crossStorePrices, hardwarePrices, priceDiffRanking, priceMoves } from '@/data/prices';
import KaitoriWorldCta from '@/components/KaitoriWorldCta';

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
const moves = priceMoves();
const risers = moves.filter((m) => m.delta > 0);
const fallers = moves.filter((m) => m.delta < 0);

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

        {/* 今週の値動き（先週比） */}
        {PRICE_PREV_SURVEY_DATE && moves.length > 0 && (
          <section className="mb-12">
            <h2 className="section-heading mb-6"><span className="section-heading-bar" />今週の値動き（先週比）</h2>
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
              前回調査（{PRICE_PREV_SURVEY_DATE}）から今回（{PRICE_SURVEY_DATE}）で買取価格が動いたタイトルです。<strong>上がっているうちに売る</strong>のが基本戦略です。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass-card p-5">
                <h3 className="font-bold mb-3" style={{ color: '#00E676' }}>📈 高騰（先週比プラス）</h3>
                {risers.length > 0 ? (
                  <ul className="space-y-2">
                    {risers.map((m) => (
                      <li key={m.title + m.store} className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                        <strong>{m.title}</strong>（{STORE_LABELS[m.store]}）：{m.from.toLocaleString()}円 → <strong>{m.to.toLocaleString()}円</strong> <span style={{ color: '#00E676' }}>(+{m.delta.toLocaleString()}円)</span>
                      </li>
                    ))}
                  </ul>
                ) : <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>今週は上昇したタイトルはありませんでした。</p>}
              </div>
              <div className="glass-card p-5">
                <h3 className="font-bold mb-3" style={{ color: '#F87171' }}>📉 急落（先週比マイナス）</h3>
                {fallers.length > 0 ? (
                  <ul className="space-y-2">
                    {fallers.map((m) => (
                      <li key={m.title + m.store} className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                        <strong>{m.title}</strong>（{STORE_LABELS[m.store]}）：{m.from.toLocaleString()}円 → <strong>{m.to.toLocaleString()}円</strong> <span style={{ color: '#F87171' }}>({m.delta.toLocaleString()}円)</span>
                      </li>
                    ))}
                  </ul>
                ) : <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>今週は下落したタイトルはありませんでした。</p>}
              </div>
            </div>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※ブックオフ・ゲオの公式買取価格の先週比。駿河屋は今回自動取得できなかったため先週比の対象外です。価格は完品想定の参考値で変動します。</p>
          </section>
        )}

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />価格推移グラフ（週次実測）</h2>
          <PriceTrendChart />
        </section>

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

        {/* ゲーム機本体の実測価格（v5 S1・2026-07-04開始） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ゲーム機本体の店舗横断 買取価格（週次実測）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            Switch→Switch 2の世代交代期に合わせて、<strong>本体の買取価格も週次実測を開始しました</strong>（{HARDWARE_SURVEY_DATE.replace(/-/g, '/')}調査）。完品（箱・付属品あり・正常動作）前提の参考価格です。
          </p>
          <PriceMatrix list={hardwarePrices} />
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            ※ゲオは店頭参考買取価格（傷・汚れが目立たず付属品欠品なしの場合）。レトログはレトロゲーム特化のため現行機は他店より大幅に低めです。PS5旧型（CFI-1000〜1200）の通常品はゲオが価格を公表していません。状態・店舗・時期により変動するため、売却前に各公式でご確認ください。
          </p>
          <p className="text-sm mt-3" style={{ color: 'var(--color-text-light)' }}>
            Switch 2はブックオフ4.0万・ゲオ4.0万・駿河屋4.1万とほぼ横並び。旧型Switch・有機ELの売却を検討中の方は<Link href="/hardware/switch2/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>Switch2時代の旧型の売り時解説</Link>もどうぞ。
          </p>
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

        {/* 業者レビューへの導線（ブランドクラスタ連携） */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>各買取業者の評判・口コミを見る</h3>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>価格を確認したら、実際に売る業者の送料・入金日数・減額条件・口コミもチェックしましょう。</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Link href="/review/kaitori-world/" className="glass-card p-3 card-hover block text-sm font-bold" style={{ color: 'var(--color-deep-blue)' }}>カイトリワールドの評判</Link>
            <Link href="/review/geo/" className="glass-card p-3 card-hover block text-sm font-bold" style={{ color: 'var(--color-deep-blue)' }}>ゲオ宅配買取の評判</Link>
            <Link href="/review/surugaya/" className="glass-card p-3 card-hover block text-sm font-bold" style={{ color: 'var(--color-deep-blue)' }}>駿河屋の評判</Link>
            <Link href="/review/bookoff/" className="glass-card p-3 card-hover block text-sm font-bold" style={{ color: 'var(--color-deep-blue)' }}>ブックオフの評判</Link>
            <Link href="/review/game-oukoku/" className="glass-card p-3 card-hover block text-sm font-bold" style={{ color: 'var(--color-deep-blue)' }}>ゲーム王国の評判</Link>
            <Link href="/review/hikakaku/" className="glass-card p-3 card-hover block text-sm font-bold" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！の評判</Link>
          </div>
        </section>

        {/* 関連 */}
        <section className="mt-8">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/condition-guide/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>状態別 買取許容度マップ</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なし・傷・ジャンクはどこで売れる？</p></Link>
            <Link href="/compare/mercari-vs-kaitori/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>メルカリvs買取 手取り比較</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>実質手取りシミュレーター</p></Link>
            <Link href="/software/high-value/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>高く売れるソフトランキング</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>公式買取価格で横断比較</p></Link>
          </div>
        </section>
        <KaitoriWorldCta />
        <AuthorBox />
      </div>
    </>
  );
}
