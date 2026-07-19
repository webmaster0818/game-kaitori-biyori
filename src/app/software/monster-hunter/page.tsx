import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'モンハンの買取価格はいくら？【2026年7月】ワイルズ・ライズの相場を店舗横断で比較・売り時も解説',
  description:
    'モンスターハンターシリーズの買取相場を2026年6月の調査データで一覧化。ワイルズ・ライズ・サンブレイク・ストーリーズ2・ワールド/アイスボーンを店舗横断で比較。新作の影響と高く売るコツも解説します。',
  keywords: ['モンハン 買取', 'モンスターハンター 買取価格', 'モンハンワイルズ 買取', 'モンハンライズ 売る', 'モンハン 相場'],
  openGraph: {
    title: 'モンハンの買取価格はいくら？【2026年7月】店舗横断で相場比較',
    description: 'モンハンシリーズの買取相場を店舗横断で比較。新作の影響も解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

// 2026年6月時点。各社公式買取ページおよび買取価格比較サイトの集計値（完品前提・店舗/状態/在庫により変動）
const priceData = [
  { title: 'モンスターハンターワイルズ', platform: 'PS5', price: '800〜1,450円', trend: '下降', note: '定価9,900円だが供給過多で発売後に急落。店舗差大' },
  { title: 'モンスターハンターワイルズ', platform: 'Switch2', price: '未発売（開発中）', trend: '—', note: '2026年6月に開発中が正式発表。発売時期未定' },
  { title: 'モンスターハンターライズ', platform: 'Switch', price: '300〜900円', trend: '低位安定', note: '廉価版登場で相場は低水準' },
  { title: 'モンスターハンターライズ + サンブレイク セット', platform: 'Switch', price: '500〜1,000円', trend: '低位安定', note: '拡張同梱でもセットは1,000円前後' },
  { title: 'モンスターハンターストーリーズ2 〜破滅の翼〜', platform: 'Switch', price: '未開封2,000円前後 / 中古は低位', note: '未開封プレミアと中古で価格差が極端', trend: '二極化' },
  { title: 'モンスターハンターワールド：アイスボーン マスターエディション', platform: 'PS4', price: '500〜1,300円', trend: '安定', note: '通常版とBest Price版で査定差あり' },
];

const shopComparison = [
  { shop: 'ゲーム買取ブラザーズ', wilds: '1,450円', rise: '900円', riseSet: '1,000円', feature: '多くのタイトルで上位の高査定' },
  { shop: 'ゲオ（GEO）', wilds: '800〜1,300円', rise: '500円', riseSet: '500円', feature: '即日現金化。店頭持込も可' },
  { shop: 'ブックオフ', wilds: '300〜1,001円', rise: '500円', riseSet: '—', feature: '店頭で手軽。価格はやや控えめ' },
  { shop: '駿河屋', wilds: '（要確認）', rise: '300円', riseSet: '800円', feature: 'セット・限定版の評価が比較的高い' },
  { shop: 'ネットオフ', wilds: '（要確認）', rise: '195円', riseSet: '260円', feature: 'まとめ売り向き。単体は控えめ' },
];

const tips = [
  { title: '新作ワイルズは「早売り」が鉄則', description: 'モンハンワイルズは定価9,900円ながら、供給過多（カプコンが追加生産が想定以下と公表）で発売後に急落しています。新作・話題作は発売直後〜数ヶ月が最も高いため、遊び終えたら早めの売却が有利です。' },
  { title: 'Switch2版ワイルズの発表に注意', description: '2026年6月にSwitch2版ワイルズの開発が正式発表されました。発売されるとPS5版の中古相場をさらに押し下げる可能性があります。PS5版を持っている場合は発売前の売却が無難です。' },
  { title: 'ライズ系は低水準＝まとめ売りも検討', description: 'ライズ・サンブレイクセットは廉価版の登場で500〜1,000円台の低水準です。単体で高値は狙いにくいため、他のソフトとまとめて売り、送料・手数料を抑える方が手取りで有利なことがあります。' },
  { title: 'ストーリーズ2は未開封かどうかが決定的', description: 'ストーリーズ2は未開封だと2,000円前後のプレミアがつく一方、開封済み中古はほぼ値がつかないこともあります。未開封品は専門店・フリマも含めて比較しましょう。' },
];

const faqs = [
  { q: 'モンハンで今いちばん高く売れるのはどれですか？', a: '2026年6月時点では、最新作のモンスターハンターワイルズ（PS5）が800〜1,450円で相対的に高めですが、供給過多で発売後に急落しており、定価9,900円からは大きく下がっています。ストーリーズ2は未開封なら2,000円前後のプレミアがつきます。ライズ・サンブレイク系は500〜1,000円台の低水準です。' },
  { q: 'モンハンワイルズはなぜ買取が安いのですか？', a: '人気作ですが出荷・流通量が多く、カプコンが追加生産（リピート）販売が想定を下回ったと公表するなど供給過多気味で、中古相場が弱含みです。定価9,900円に対し2026年6月には店舗により800円台まで下落しています。さらにSwitch2版の開発も発表されており、PS5版の下押し要因になっています。' },
  { q: 'モンハンワイルズはいつ売るべきですか？', a: 'できるだけ早めがおすすめです。新作は発売直後が最も高く、時間とともに下落します。特にワイルズはSwitch2版の開発が発表済みで、発売されるとPS5版がさらに下がる可能性があります。遊び終えているなら早期売却が有利です。' },
  { q: 'モンハンライズ・サンブレイクは高く売れますか？', a: '残念ながら低水準です。ライズ単体で300〜900円、ライズ＋サンブレイクのセットでも500〜1,000円程度です。廉価版（Best Price）が発売されたことも相場の下押し要因です。単体で高く売るのは難しいため、他のソフトとまとめて売り、送料無料条件を満たして手取りを上げるのが現実的です。' },
  { q: 'モンハンストーリーズ2が「0円」と表示されることがあるのはなぜですか？', a: 'ストーリーズ2は中古の通常状態だと需要が弱く、店舗によっては買取0円表示になることがあります。一方で未開封品は2,000円前後のプレミアがつきます。状態（未開封か否か）で価格差が極端なシリーズなので、未開封なら必ず複数店で査定を比較してください。' },
];

const PAGE_TITLE = 'モンハンの買取価格【2026年6月】ワイルズ・ライズ等の相場と売り時';

export default function MonsterHunterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": PAGE_TITLE, "datePublished": "2026-06-18", "dateModified": "2026-06-18", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'モンハンの買取価格' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>シリーズ別買取相場</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">モンハンの買取価格【2026年6月】</h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            モンスターハンターワイルズ（PS5）、ライズ／サンブレイク、ストーリーズ2、ワールド／アイスボーンなど主要タイトルの買取相場を2026年6月の調査データで一覧化しました。新作の供給過多やSwitch2版発表が相場に与える影響も解説します。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>調査時点: 2026年6月（各社公式買取ページ・買取価格比較サイト集計）</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/compare/kaitori-ranking/" className="btn-primary py-2.5 px-6">おすすめ買取サービスを見る</Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Price Table */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />モンハン主要タイトルの買取相場一覧</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>タイトル</th><th>ハード</th><th>買取相場</th><th>傾向</th></tr>
              </thead>
              <tbody>
                {priceData.map((g) => (
                  <tr key={g.title + g.platform}>
                    <td className="font-bold text-sm">{g.title}<span className="block text-xs font-normal" style={{ color: 'var(--color-text-light)' }}>{g.note}</span></td>
                    <td className="text-sm">{g.platform}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{g.price}</td>
                    <td className="text-sm">{g.trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：各社公式買取ページおよび買取価格比較サイトの集計（2026年6月時点）。完品前提で、店舗・状態・在庫により変動します。売却直前に各社公式でご確認ください。</p>
        </section>

        {/* Shop Comparison */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />店舗横断比較</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>買取店</th><th>ワイルズ(PS5)</th><th>ライズ</th><th>ライズ+サンブレイク</th><th>特徴</th></tr>
              </thead>
              <tbody>
                {shopComparison.map((s) => (
                  <tr key={s.shop}>
                    <td className="font-bold text-sm">{s.shop}</td>
                    <td className="text-sm">{s.wilds}</td>
                    <td className="text-sm">{s.rise}</td>
                    <td className="text-sm">{s.riseSet}</td>
                    <td className="text-sm">{s.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※2026年6月時点の集計値。新作ワイルズは特に店舗差・時期差が大きいため、複数社の比較を推奨します。</p>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />モンハンを高く売るコツ</h2>
          <div className="space-y-4">
            {tips.map((tip, i) => (
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

        {/* FAQ */}
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

        {/* CTA */}
        <section className="glass-card-dark p-8 text-center">
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>モンハンを<span style={{ color: 'var(--color-electric-green)' }}>高値のうちに</span>売りませんか？</h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>新作ほど下落が早い分野です。Switch2版の発表もあり、PS5版は早めの比較・売却が有利。複数店をチェックしましょう。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/compare/kaitori-ranking/" className="btn-primary py-3 px-8">おすすめランキングを見る</Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連するソフト買取ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/software/high-value/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>高く売れるソフトランキング</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>公式買取価格で横断比較</p>
            </Link>
            <Link href="/software/ps5-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS5ソフト買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最新タイトルの買取相場</p>
            </Link>
            <Link href="/software/zelda/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゼルダの伝説買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>シリーズの相場一覧</p>
            </Link>
            <Link href="/price-index/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取価格インデックス</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>毎週更新・今どこが一番高い？</p>
            </Link>
            <Link href="/review/kaitori-world/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取ワールドの評判</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>人気タイトルを高く売る業者</p>
            </Link>
            <Link href="/condition-guide/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>状態別 買取許容度マップ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なし・傷ありの査定影響</p>
            </Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
