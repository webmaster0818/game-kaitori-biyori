import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ゲームの売り時はいつ？Switchはいま売るべき？【2026年7月】データで見る最適タイミング',
  description:
    'ゲーム機・ソフトの売り時を月別カレンダーで解説します。新型発表前後の価格変動、新作ソフトの価格下落の推移、年末年始・夏休みの需要上昇など、売却に適したタイミングをまとめています。',
  keywords: ['ゲーム 売り時', 'いつ売るのがベスト', 'ゲーム 売るタイミング', 'ゲーム機 売り時'],
  openGraph: {
    images: ['/og.png'],
    title: 'ゲームの売り時はいつ？Switchはいま売るべき？【2026年7月】データで見る最適タイミング',
    description: 'ゲーム機・ソフトの売り時を月別カレンダーで解説します。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const calendar = [
  { month: '1月', demand: '高', reason: 'お年玉需要で中古ゲームの販売が伸びます。年末にもらったゲームの買い替え需要もあります。' },
  { month: '2月', demand: '中', reason: '年末年始の需要が落ち着きます。新学期前の買い替え需要が徐々に上昇します。' },
  { month: '3月', demand: '高', reason: '新学期・春休み前で需要が高まります。引越しシーズンで売却も増えますが、需要も高い時期です。' },
  { month: '4月', demand: '中', reason: '新学期が始まり、需要はやや落ち着きます。GW前には購入需要がやや上昇します。' },
  { month: '5月', demand: '中', reason: 'GW期間中はゲーム需要が高まり、GW後は一時的に落ち着きます。' },
  { month: '6月', demand: 'やや低', reason: 'E3等のゲームイベント後は、新作情報の影響で旧作の需要が下がることがあります。梅雨の時期は在宅需要がわずかに増えます。' },
  { month: '7月', demand: '高', reason: '夏休み直前で需要が大きく上昇します。ボーナス時期で購買力も高く、売り時です。' },
  { month: '8月', demand: '高', reason: '夏休み中は需要が続きます。お盆シーズンは特にゲーム需要が高まります。' },
  { month: '9月', demand: '中', reason: '夏休み後で需要はやや落ち着きます。秋の新作ラッシュ前の買い替え需要があります。' },
  { month: '10月', demand: '高', reason: '年末商戦に向けて需要が上昇します。新作ラッシュでハード需要も高まり、売り時です。' },
  { month: '11月', demand: '最高', reason: 'ブラックフライデーと年末商戦の時期です。クリスマスプレゼントの需要で、買取価格が年間で最も高くなります。' },
  { month: '12月', demand: '高', reason: 'クリスマス前は需要が高く、年末に向けて高い水準が続きます。25日を過ぎると下降します。' },
];

const newModelImpact = [
  { timing: '噂・リーク段階', impact: '旧モデルの買取価格が5〜10%程度下落します。確定情報ではないため、影響は限定的です。' },
  { timing: '公式発表直後', impact: '旧モデルの買取価格が10〜20%下落します。発表日から1週間が最も急落する期間です。' },
  { timing: '新型発売直前（1ヶ月前）', impact: '旧モデルの買取価格が20〜30%下落します。この時点での売却は、時期として遅くなります。' },
  { timing: '新型発売後', impact: '旧モデルの買取価格が30〜50%下落します。ただし、品薄の場合は新型の高値が続くこともあります。' },
];

const softwareCurve = [
  { period: '発売〜1週間', percentage: '定価の70〜80%', note: '最も高値の時期。クリア前に売る場合は短期間での売却が前提' },
  { period: '1週間〜1ヶ月', percentage: '定価の50〜70%', note: '高値を維持。クリア直後に売る場合の目安となる時期' },
  { period: '1〜3ヶ月', percentage: '定価の30〜50%', note: '中古の流通量が増え始め、価格が徐々に下落' },
  { period: '3ヶ月〜半年', percentage: '定価の20〜30%', note: 'セールや廉価版の影響で下落が加速' },
  { period: '半年〜1年', percentage: '定価の10〜20%', note: '定番タイトル以外は、この水準まで下がることが多い' },
];

const faqs = [
  { q: 'ゲームを売る最適なタイミングはいつですか？', a: '年末商戦前の10〜11月が最も高値がつきやすい時期です。また夏休み前の7月も需要が高まります。逆に新型ハードの発表直後は旧モデルの価格が下がるため、発表前の売却をおすすめします。' },
  { q: '新型ゲーム機が発表されたらすぐ売るべきですか？', a: 'はい、発表直後に価格が急落するため、発表を確認した時点で、速やかに売却を検討することをおすすめします。公式発表から1週間以内の売却が理想的です。' },
  { q: '新作ソフトはいつ売るのが最も適していますか？', a: 'クリア後すぐ（発売から1〜2週間以内）が最も高値です。ソフトの買取価格は時間経過とともに確実に下がるため、遊び終えたらすぐに売ることをおすすめします。' },
  { q: '年末年始に売ると高く売れますか？', a: 'はい、特にクリスマス前（12月上旬〜中旬）は需要が最も高い時期です。ただし年末年始は買取業者の対応が遅くなることもあるため、11月中の査定依頼をおすすめします。' },
  { q: '引越しのタイミングで売るのは良い判断ですか？', a: 'はい、引越しは売却の良いタイミングです。まとめ売りでボーナスがつくサービスを利用すると効率的です。特に3月の引越しシーズンは需要も高いため、高値がつきやすい時期です。' },
  { q: 'ゲームの価値は時間が経つと必ず下がりますか？', a: '一般的には下がりますが、レトロゲームのプレミアソフトなど、時間経過で価値が上がるものもあります。ただし現行ハードのゲームは基本的に早く売るほど高値がつきます。' },
];

export default function TimingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲームの売り時ガイド｜いつ売るのがベスト？年間カレンダー【2026年6月】", "datePublished": "2026-03-15", "dateModified": "2026-06-12", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '売り時ガイド' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲームの売り時ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲーム機・ソフトを売るのに適した時期について、年間の売り時カレンダー、新型発表前後の価格変動、新作ソフトの価格下落の推移を用いて解説します。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Calendar */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />年間の売り時カレンダー</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>月</th>
                  <th>需要</th>
                  <th>ポイント</th>
                </tr>
              </thead>
              <tbody>
                {calendar.map((row) => (
                  <tr key={row.month}>
                    <td className="font-bold">{row.month}</td>
                    <td className="font-bold" style={{ color: row.demand === '最高' || row.demand === '高' ? 'var(--color-electric-green)' : 'var(--color-text-light)' }}>{row.demand}</td>
                    <td className="text-sm">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* New Model Impact */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />新型発表前後の価格変動</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>タイミング</th>
                  <th>旧モデルへの影響</th>
                </tr>
              </thead>
              <tbody>
                {newModelImpact.map((row) => (
                  <tr key={row.timing}>
                    <td className="font-bold">{row.timing}</td>
                    <td>{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Software Price Curve */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />新作ソフトの価格下落カーブ</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>経過期間</th>
                  <th>買取価格目安</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {softwareCurve.map((row) => (
                  <tr key={row.period}>
                    <td className="font-bold">{row.period}</td>
                    <td style={{ color: 'var(--color-electric-green)' }} className="font-bold">{row.percentage}</td>
                    <td className="text-sm">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Peak Seasons */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />年末年始・夏休みの需要の高まり</h2>
          <div className="glass-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>年末商戦（10〜12月）</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                  クリスマスプレゼントやお歳暮の需要で、ゲーム機・ソフトの需要が年間で最も高まります。特に11月が売り時で、買取価格が通常時の10〜20%増しになることもあります。
                </p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>夏休みシーズン（7〜8月）</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                  夏休みに入る子ども向けの需要が高まります。ボーナス時期とも重なるため購買力が高く、7月上旬に売却すると良い価格がつきやすい傾向があります。
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Switch direct answer */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />Switchの売り時【2026年7月時点の見解】</h2>
          <div className="glass-card p-6" style={{ borderLeft: '4px solid var(--color-electric-green)' }}>
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-light)' }}>
              <strong>当サイトでは、遊ばなくなった旧型Switchは現在が近年で最も有利な売り時であると考えています。</strong>理由は3つあります。
            </p>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>① 2026年5月25日の任天堂値上げで旧型相場が上昇：</span>通常モデルの定価が32,978円→43,980円になるなど全モデルが値上げされ（任天堂公式）、買取業者の調査では2019年型の買取相場が4月の約3,000〜12,000円から5月に約5,000〜19,000円へ上昇した実例が報告されています。</li>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>② Switch 2発売後も旧型の相場は大きく下落していない（当サイト実測）：</span>当サイトが2026年7月4日に各社公式買取ページで実測した本体価格は、旧型Switch（ネオン現行版）がゲオ20,000円・駿河屋18,000円、有機ELがゲオ25,000円・駿河屋22,000〜24,000円と底堅い水準です。Switch 2本体はブックオフ4.0万・ゲオ4.0万・駿河屋4.1万で、ほぼ同水準でした。ただし、この状況が続く保証はなく、Switch 2の供給が安定すれば旧型は下落に転じる可能性が高いため、遊んでいない場合は早めの売却をおすすめします（本体の定期実測は<Link href="/price-index/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>価格インデックス</Link>で定期更新）。</li>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>③ ポケモン旧作（SV）の下落が実測で始まっている：</span>当サイトの定期実測で、ポケモンスカーレットは駿河屋2,000円→1,800円（6/25→7/2）、バイオレットはブックオフ1,500円→1,200円・駿河屋2,000円→1,400円と下落が確認されました。Switch 2版の新作ポケモン（LEGENDS Z-A）のセット品がすでに買取市場に流通しており、新作の登場に先立って旧作から価格が下がる動きと考えられます。実測データから、SVを遊び終えている場合は早めの売却をおすすめします。</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--color-text-light)' }}>
              なお、ダウンロード版のソフト資産はニンテンドーアカウントに紐づくため、本体を売ってもSwitch 2で再ダウンロードできます。売却前は、本体の初期化とSDカードの取り外しを忘れずに行ってください。
            </p>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：任天堂公式リリース（2026年5月8日）、当サイト定期実測（ソフト2026年7月2日・本体2026年7月4日、各社公式買取ページ）</p>
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map((faq) => ({
                  '@type': 'Question',
                  name: faq.q,
                  acceptedAnswer: { '@type': 'Answer', text: faq.a },
                })),
              }),
            }}
          />
        </section>

        {/* CTA */}
        <section className="glass-card-dark p-8 text-center">
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>
            <span style={{ color: 'var(--color-electric-green)' }}>現在</span>の買取価格の確認
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            時間の経過とともに価格が下がることがあります。まずは無料の一括査定のご利用をおすすめします。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>お役立ち情報</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/knowledge/price-guide/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取相場ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ハード・ソフト別の相場一覧</p>
            </Link>
            <Link href="/knowledge/preparation/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>売る前の準備</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>初期化・データ消去の手順</p>
            </Link>
            <Link href="/knowledge/bulk/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>まとめ売り</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>まとめ売りのメリットとコツ</p>
            </Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
