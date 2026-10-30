import PriceTrendChart from "@/components/PriceTrendChart";
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';
import { PriceMatrix, PriceDiffRanking, PriceFreshnessNote } from '@/components/PriceIndex';
import { PRICE_SURVEY_DATE, PRICE_PREV_SURVEY_DATE, HARDWARE_SURVEY_DATE, STORE_LABELS, crossStorePrices, hardwarePrices, priceDiffRanking, priceMoves } from '@/data/prices';
import KaitoriWorldCta from '@/components/KaitoriWorldCta';

export const metadata: Metadata = {
  title: 'ゲーム買取価格インデックス【公式価格を実測】今どこが一番高い？店舗横断の実測比較',
  description:
    'ブックオフ・ゲオ・駿河屋の公式買取価格を定期的に調査し、人気ゲームソフトを店舗横断で比較しています。同じソフトでも店舗によって1,000円以上の差が生じる実測データを掲載しています。売却前に、現時点で最も高い店舗を一覧でご確認いただけます。',
  keywords: ['ゲーム 買取価格', 'ゲームソフト 買取 相場', 'ゲーム 買取 比較', '高く売れるゲームソフト', 'ゲーム 買取 どこが高い'],
  openGraph: {
    images: ['/og.png'],
    title: 'ゲーム買取価格インデックス【公式価格を実測】今どこが一番高い？',
    description: 'ブックオフ・ゲオ・駿河屋の公式買取価格を定期的に調査し、店舗横断で比較しています。',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲーム買取価格インデックス【公式価格を実測】今どこが一番高い？店舗横断の実測比較", "datePublished": "2026-06-20", "dateModified": PRICE_SURVEY_DATE, "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較している編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'ゲーム買取価格インデックス' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'var(--color-accent-soft-strong)', color: 'var(--color-accent)' }}>定期実測データ</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">ゲーム買取価格インデックス</h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ブックオフ・ゲオ・駿河屋が公式に公開している買取価格を<strong>定期的に調査</strong>し、人気ソフトを店舗横断で比較しています。売却前に、現時点で最も高い店舗を一覧でご確認いただけます。同じソフトでも店舗によって買取価格に差があるのが、中古ゲーム買取の実態です。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>各社公式の買取価格を定期的に実測しています（最終実測日: {PRICE_SURVEY_DATE}）</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {topGap && (
          <div className="glass-card p-5 mb-10">
            <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
              💡 最新の注目データ: <strong>「{topGap.title}」は店舗によって最大 {topGap.gap.toLocaleString()}円の差があります</strong>。現時点の最高値は{topGap.best.price.toLocaleString()}円です。各ソフトの最高値の店舗は、下の比較表でご確認ください。
            </p>
          </div>
        )}

        {/* 前回実測からの値動き（前回比） */}
        {PRICE_PREV_SURVEY_DATE && moves.length > 0 && (
          <section className="mb-12">
            <h2 className="section-heading mb-6"><span className="section-heading-bar" />前回実測からの値動き（前回比）</h2>
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
              前回調査（{PRICE_PREV_SURVEY_DATE}）から今回（{PRICE_SURVEY_DATE}）で買取価格が変動したタイトルです。<strong>価格が上昇している時期の売却</strong>をおすすめします。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass-card p-5">
                <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent)' }}>📈 高騰（前回比プラス）</h3>
                {risers.length > 0 ? (
                  <ul className="space-y-2">
                    {risers.map((m) => (
                      <li key={m.title + m.store} className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                        <strong>{m.title}</strong>（{STORE_LABELS[m.store]}）：{m.from.toLocaleString()}円 → <strong>{m.to.toLocaleString()}円</strong> <span style={{ color: 'var(--color-accent)' }}>(+{m.delta.toLocaleString()}円)</span>
                      </li>
                    ))}
                  </ul>
                ) : <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>今回は上昇したタイトルはありませんでした。</p>}
              </div>
              <div className="glass-card p-5">
                <h3 className="font-bold mb-3" style={{ color: '#F87171' }}>📉 急落（前回比マイナス）</h3>
                {fallers.length > 0 ? (
                  <ul className="space-y-2">
                    {fallers.map((m) => (
                      <li key={m.title + m.store} className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                        <strong>{m.title}</strong>（{STORE_LABELS[m.store]}）：{m.from.toLocaleString()}円 → <strong>{m.to.toLocaleString()}円</strong> <span style={{ color: '#F87171' }}>({m.delta.toLocaleString()}円)</span>
                      </li>
                    ))}
                  </ul>
                ) : <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>今回は下落したタイトルはありませんでした。</p>}
              </div>
            </div>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※ブックオフ・ゲオ・駿河屋の公式買取価格の前回比です（前回{PRICE_PREV_SURVEY_DATE}→今回{PRICE_SURVEY_DATE}）。どちらかの調査で掲載がなかった店舗は対象外です。価格は完品想定の参考値であり、変動します。</p>
          </section>
        )}

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />価格推移グラフ（定期実測）</h2>
          <PriceTrendChart />
        </section>

        {/* 価格差ランキング（柱1の核） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />売却先による価格差が大きいゲームランキング</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            同じソフトでも、買取店によって価格は異なります。<strong>最高値の店と最安の店の差が大きい順</strong>に掲載しています。差が大きいタイトルほど、売却先の選択によって手取りが変わります。
          </p>
          <PriceDiffRanking limit={10} />
          <PriceFreshnessNote />
        </section>

        {/* 店舗横断マトリクス */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />人気ソフトの店舗横断 買取価格マトリクス</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            人気タイトルごとに、ブックオフ・ゲオ・駿河屋の買取価格を一覧で比較しています。<span style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>◎は、そのソフトで最高値の店舗</span>を示します。
          </p>
          <PriceMatrix list={crossStorePrices} />
          <PriceFreshnessNote />
        </section>

        {/* ゲーム機本体の実測価格（v5 S1・2026-07-04開始） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ゲーム機本体の店舗横断 買取価格（定期実測）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            SwitchからSwitch 2への世代交代期に合わせて、<strong>本体の買取価格についても定期実測を開始しました</strong>（{HARDWARE_SURVEY_DATE.replace(/-/g, '/')}調査）。完品（箱・付属品あり・正常動作）を前提とした参考価格です。
          </p>
          <PriceMatrix list={hardwarePrices} />
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            ※ゲオは店頭参考買取価格です（傷・汚れが目立たず、付属品の欠品がない場合）。レトログはレトロゲームに特化しているため、現行機は他店より大幅に低い価格となっています。PS5旧型（CFI-1000〜1200）の通常品は、ゲオが価格を公表していません。状態・店舗・時期により変動するため、売却前に各社公式サイトにてご確認ください。
          </p>
          <p className="text-sm mt-3" style={{ color: 'var(--color-text-light)' }}>
            Switch 2はブックオフ3.5万円・ゲオ3.5万円・駿河屋3.8万円です（{HARDWARE_SURVEY_DATE.replace(/-/g, '/')}実測）。旧型Switch・有機ELモデルの売却をご検討中の方は、<Link href="/hardware/switch2/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>Switch 2時代の旧型の売り時解説</Link>もあわせてご覧ください。
          </p>
        </section>

        {/* 使い方・売り方 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />このデータの使い方</h2>
          <div className="space-y-4">
            <div className="glass-card p-5"><h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>1. ソフトごとの最高値の店舗を確認</h3><p className="text-sm" style={{ color: 'var(--color-text-light)' }}>マトリクスで◎が付いている店舗が、そのソフトで現在最も高い店舗です。同じソフトでも、店舗によって数百円から1,000円以上の差があります。</p></div>
            <div className="glass-card p-5"><h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>2. まとめ売りは実質手取りで比較</h3><p className="text-sm" style={{ color: 'var(--color-text-light)' }}>送料無料の条件・振込手数料・梱包材まで含めた手取りで比較すると、順位が逆転することもあります。<Link href="/compare/mercari-vs-kaitori/" className="text-petrol" style={{ color: 'var(--color-electric-green)' }}>メルカリとの比較</Link>もあわせてご覧ください。</p></div>
            <div className="glass-card p-5"><h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>3. 売却時期の判断</h3><p className="text-sm" style={{ color: 'var(--color-text-light)' }}>新作は発売直後ほど高く、その後は下落する傾向があります。当サイトでは定期的に価格を実測・更新していますので、売却直前に最新の価格をご確認ください。</p></div>
          </div>
        </section>

        {/* 業者レビューへの導線（ブランドクラスタ連携） */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>各買取業者の評判・口コミ</h3>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>価格を確認したあとは、売却先の送料・入金日数・減額条件・口コミもあわせてご確認ください。</p>
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
            <Link href="/hardware/steam-deck/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Steam Deckの買取相場</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>OLED/LCD別の相場と売り時</p>
            </Link>
            <Link href="/condition-guide/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>状態別 買取許容度マップ</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なし・傷あり・ジャンク品の売却先</p></Link>
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
