import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ゲームの売り時ガイド｜いつ売るのがベスト？年間カレンダー【2025年】',
  description:
    'ゲーム機・ソフトの売り時を月別カレンダーで徹底解説。新型発表前後の価格変動、新作ソフトの価格下落カーブ、年末年始・夏休みの需要上昇など、最適な売却タイミングを完全ガイド。',
  keywords: ['ゲーム 売り時', 'いつ売るのがベスト', 'ゲーム 売るタイミング', 'ゲーム機 売り時'],
  openGraph: {
    title: 'ゲームの売り時ガイド｜いつ売るのがベスト？年間カレンダー【2025年】',
    description: 'ゲーム機・ソフトの売り時を月別カレンダーで徹底解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const calendar = [
  { month: '1月', demand: '高', reason: 'お年玉需要で中古ゲームが売れる。年末に貰ったゲームの買い替え需要も。' },
  { month: '2月', demand: '中', reason: '年末年始の需要が落ち着く。新学期前の買い替え需要がじわじわ上昇。' },
  { month: '3月', demand: '高', reason: '新学期・春休み前で需要UP。引越しシーズンで売却も増えるが需要も高い。' },
  { month: '4月', demand: '中', reason: '新学期が始まり少し落ち着く。GW前の購入需要がやや上昇。' },
  { month: '5月', demand: '中', reason: 'GW期間中はゲーム需要が高まる。GW後は一時的に落ち着く。' },
  { month: '6月', demand: 'やや低', reason: 'E3等のゲームイベント後は新作情報で旧作の需要が下がることも。梅雨で在宅需要は微増。' },
  { month: '7月', demand: '高', reason: '夏休み直前で需要が急上昇。ボーナス時期で購買力も高い。売り時。' },
  { month: '8月', demand: '高', reason: '夏休み中で需要が継続。お盆シーズンは特にゲーム需要が高い。' },
  { month: '9月', demand: '中', reason: '夏休み後でやや落ち着く。秋の新作ラッシュ前の買い替え需要あり。' },
  { month: '10月', demand: '高', reason: '年末商戦に向けて需要が上昇。新作ラッシュでハード需要も高まる。売り時。' },
  { month: '11月', demand: '最高', reason: 'ブラックフライデー・年末商戦突入。クリスマスプレゼント需要で買取価格が年間最高値に。' },
  { month: '12月', demand: '高', reason: 'クリスマス前は高需要。年末に向けて需要は高止まり。25日を過ぎると下降。' },
];

const newModelImpact = [
  { timing: '噂・リーク段階', impact: '旧モデルの買取価格が5〜10%程度下落。確定情報ではないため影響は限定的。' },
  { timing: '公式発表直後', impact: '旧モデルの買取価格が10〜20%下落。発表日から1週間が最も急落する期間。' },
  { timing: '新型発売直前（1ヶ月前）', impact: '旧モデルの買取価格が20〜30%下落。この時点で売却するのは遅い。' },
  { timing: '新型発売後', impact: '旧モデルの買取価格が30〜50%下落。ただし品薄の場合は新型の高値が続くことも。' },
];

const softwareCurve = [
  { period: '発売〜1週間', percentage: '定価の70〜80%', note: '最高値。クリア前に売るなら超短期で回転。' },
  { period: '1週間〜1ヶ月', percentage: '定価の50〜70%', note: 'まだ高値。クリア直後に売るならこのタイミング。' },
  { period: '1〜3ヶ月', percentage: '定価の30〜50%', note: '中古の流通量が増え始め、価格が徐々に下落。' },
  { period: '3ヶ月〜半年', percentage: '定価の20〜30%', note: 'セールや廉価版の影響で下落が加速。' },
  { period: '半年〜1年', percentage: '定価の10〜20%', note: '定番タイトル以外はここまで下がることが多い。' },
];

const faqs = [
  { q: 'ゲームを売る最適なタイミングはいつですか？', a: '年末商戦前の10〜11月が最も高値がつきやすい時期です。また夏休み前の7月も需要が高まります。逆に新型ハードの発表直後は旧モデルの価格が下がるため、発表前に売るのがベストです。' },
  { q: '新型ゲーム機が発表されたらすぐ売るべきですか？', a: 'はい、発表直後に価格が急落するため、発表のニュースを見たらすぐに売却を検討しましょう。公式発表から1週間以内に売るのが理想的です。' },
  { q: '新作ソフトはいつ売るのがベストですか？', a: 'クリア後すぐ（発売から1〜2週間以内）が最高値です。ソフトの買取価格は時間経過とともに確実に下がるため、遊び終えたらすぐに売ることをおすすめします。' },
  { q: '年末年始に売ると高く売れますか？', a: 'はい、特にクリスマス前（12月上旬〜中旬）は需要が最も高い時期です。ただし年末年始は買取業者の対応が遅くなることもあるため、11月中に査定に出すのがベストです。' },
  { q: '引越しのタイミングで売るのは良い判断ですか？', a: 'はい、引越しは売却の良いタイミングです。まとめ売りでボーナスがつくサービスを利用すると効率的です。特に3月の引越しシーズンは需要も高いため、高値がつきやすいです。' },
  { q: 'ゲームの価値は時間が経つと必ず下がりますか？', a: '一般的には下がりますが、レトロゲームのプレミアソフトなど、時間経過で価値が上がるものもあります。ただし現行ハードのゲームは基本的に早く売るほど高値がつきます。' },
];

export default function TimingPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '売り時ガイド' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲームの売り時ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲーム機・ソフトをいつ売るのがベストなのか、年間の売り時カレンダー、新型発表前後の価格変動、新作ソフトの価格下落カーブまで、最適な売却タイミングを徹底解説します。
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />年末年始・夏休みは需要UP</h2>
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
                  夏休みに入る子供向けの需要が高まります。ボーナス時期とも重なるため購買力が高く、7月上旬に売却すると良い価格がつきやすい傾向があります。
                </p>
              </div>
            </div>
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
            売り時は<span style={{ color: 'var(--color-electric-green)' }}>今</span>かもしれません
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            迷っている間にも価格は下がります。まずは無料で一括査定してみましょう。
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
      </div>
    </>
  );
}
