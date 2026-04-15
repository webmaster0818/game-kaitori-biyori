import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ゲーム買取相場ガイド｜ハード・ソフト別の価格目安【2025年最新】',
  description:
    'ゲーム機・ソフトの買取相場をハード別・ソフト別に一覧表で徹底解説。Switch・PS5・PS4・3DS・レトロゲームの買取価格目安、相場が変動する5つの要因、相場の調べ方まで完全網羅。',
  keywords: ['ゲーム買取 相場', 'ゲーム いくらで売れる', 'ゲーム機 買取価格', 'Switch 買取相場'],
  openGraph: {
    title: 'ゲーム買取相場ガイド｜ハード・ソフト別の価格目安【2025年最新】',
    description: 'ゲーム機・ソフトの買取相場をハード別・ソフト別に一覧表で徹底解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const hardwarePrices = [
  { hardware: 'Nintendo Switch（通常モデル）', good: '18,000〜22,000円', fair: '12,000〜17,000円' },
  { hardware: 'Nintendo Switch（有機ELモデル）', good: '25,000〜32,000円', fair: '18,000〜24,000円' },
  { hardware: 'Nintendo Switch Lite', good: '10,000〜14,000円', fair: '7,000〜9,000円' },
  { hardware: 'PlayStation 5（通常版）', good: '35,000〜45,000円', fair: '25,000〜34,000円' },
  { hardware: 'PlayStation 5（デジタル版）', good: '25,000〜35,000円', fair: '18,000〜24,000円' },
  { hardware: 'PlayStation 4 Pro', good: '15,000〜22,000円', fair: '10,000〜14,000円' },
  { hardware: 'PlayStation 4（通常版）', good: '10,000〜15,000円', fair: '5,000〜9,000円' },
  { hardware: 'Nintendo 3DS LL', good: '5,000〜8,000円', fair: '2,000〜4,000円' },
  { hardware: 'New Nintendo 3DS LL', good: '8,000〜12,000円', fair: '4,000〜7,000円' },
  { hardware: 'レトロハード（ファミコン等）', good: '3,000〜15,000円', fair: '1,000〜5,000円' },
];

const softwarePrices = [
  { category: 'Switch人気タイトル', range: '3,000〜5,500円', example: 'ゼルダ・マリオ・ポケモン等' },
  { category: 'PS5人気タイトル', range: '2,500〜6,000円', example: 'FF・バイオ・エルデンリング等' },
  { category: 'PS4人気タイトル', range: '800〜2,500円', example: 'ペルソナ・ゴーストオブツシマ等' },
  { category: '3DSソフト', range: '500〜3,000円', example: 'ポケモン・モンハン・どうぶつの森等' },
  { category: 'レトロプレミアソフト', range: '5,000〜200,000円', example: 'バトルガレッガ・レンダリングレンジャー等' },
];

const fluctuationFactors = [
  { title: '新型ハードの発表・発売', description: '後継機の発表直後に旧モデルの買取価格が10〜30%下落するのが一般的です。新型の噂が出始めたら早めに売却を検討しましょう。' },
  { title: '季節需要（年末商戦・夏休み等）', description: '年末年始や夏休みはゲームの需要が高まるため、その直前（10〜11月、6〜7月）に買取価格が上がる傾向があります。' },
  { title: 'ソフトの新作発売', description: '人気シリーズの新作が発売されると、対応ハードの需要が高まり買取価格が上昇します。逆に旧作ソフトは下落する傾向です。' },
  { title: '市場の在庫状況', description: '中古市場に在庫が余っているとき は買取価格が下がります。逆に品薄状態では買取価格が上昇します。' },
  { title: 'メディア露出・SNSバズ', description: 'テレビ番組やSNSでゲームが話題になると一時的に需要が高まり、買取価格が上昇することがあります。' },
];

const howToCheck = [
  { title: 'ヒカカク！で一括査定', description: '最大20社に一括査定できるヒカカク！なら、現在の最高買取価格がすぐに分かります。無料で利用できるため、まず相場を確認するのにおすすめです。' },
  { title: 'フリマアプリの相場を確認', description: 'メルカリやラクマで同じ商品の売買履歴を確認すれば、個人間取引の相場が分かります。ただし買取業者の価格とは異なるため参考程度に。' },
  { title: '買取業者のWebサイト', description: '各買取業者のWebサイトで公開されている買取価格表を確認する方法もあります。ただし表示価格は最高値のため、実際の査定額は状態により下がることがあります。' },
];

const services = [
  { name: 'ヒカカク！', feature: '最大20社一括査定', area: '全国対応', method: '宅配買取メイン', point: '相場把握に最適・最高値を自動で発見', rank: 1 },
  { name: '買取ウリエル', feature: '出張買取・即日現金化', area: '関東・関西', method: '出張買取', point: '相場を確認後すぐに出張買取で現金化', rank: 2 },
  { name: 'ティファナ', feature: '店舗+宅配買取', area: '東京近郊', method: '店舗・宅配', point: '店頭で即座に相場確認・その場で買取', rank: 3 },
];

const faqs = [
  { q: 'ゲームの買取相場はどうやって調べればいいですか？', a: 'ヒカカク！で一括査定するのが最も簡単で正確です。最大20社の買取価格を無料で比較でき、現在の最高値がすぐに分かります。メルカリの売買履歴も参考になりますが、個人売買と業者買取では価格が異なります。' },
  { q: '買取相場より安い金額を提示されました。なぜですか？', a: '買取相場はあくまで「美品・付属品完備」の場合の目安です。傷・汚れ・付属品欠品があると減額されます。また、業者により査定基準が異なるため、複数社で見積もりを取ることをおすすめします。' },
  { q: 'ゲームの買取価格が高い時期はいつですか？', a: '年末商戦前（10〜11月）と新学期前（2〜3月）が最も高値がつきやすい時期です。逆に新型ハード発売直後は旧モデルの価格が下がります。' },
  { q: '古いゲーム機でも買取相場はありますか？', a: 'はい、レトロゲーム機にも買取相場があります。ファミコンで3,000〜15,000円、スーパーファミコンで3,000〜10,000円程度が目安です。特に箱付き美品はプレミア価格がつくことがあります。' },
  { q: '買取相場は毎日変わりますか？', a: '日単位で大きく変動することは稀ですが、週〜月単位では変動します。特に新型ハードの発表、人気タイトルの発売、年末商戦などのイベント前後は変動が大きくなります。' },
  { q: '買取価格と販売価格の差はどのくらいですか？', a: '一般的に買取価格は中古販売価格の50〜70%程度です。業者の利益や検品・クリーニングコストがこの差になります。ヒカカク！で複数社に査定を依頼すれば、この差を最小限に抑えられます。' },
];

export default function PriceGuidePage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '買取相場ガイド' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲーム買取相場ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲーム機・ソフトの買取相場をハード別・ソフト別に一覧表で徹底解説。相場が変動する5つの要因、相場の調べ方まで、ゲームを売る前に知っておきたい価格情報を完全網羅しています。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hardware Price Table */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ハード別 買取相場一覧</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>※ 2025年時点の参考相場です。実際の買取価格は状態・付属品・時期により変動します。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>ハード</th>
                  <th>美品（箱あり）</th>
                  <th>良品（箱なし）</th>
                </tr>
              </thead>
              <tbody>
                {hardwarePrices.map((row) => (
                  <tr key={row.hardware}>
                    <td className="font-bold">{row.hardware}</td>
                    <td style={{ color: 'var(--color-electric-green)' }} className="font-bold">{row.good}</td>
                    <td>{row.fair}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Software Price Table */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ソフト別 買取相場目安</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>カテゴリ</th>
                  <th>買取相場</th>
                  <th>代表タイトル</th>
                </tr>
              </thead>
              <tbody>
                {softwarePrices.map((row) => (
                  <tr key={row.category}>
                    <td className="font-bold">{row.category}</td>
                    <td style={{ color: 'var(--color-electric-green)' }} className="font-bold">{row.range}</td>
                    <td>{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Fluctuation Factors */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />相場が変動する5つの要因</h2>
          <div className="space-y-4">
            {fluctuationFactors.map((item, i) => (
              <div key={item.title} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Check */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />相場の調べ方</h2>
          <div className="space-y-4">
            {howToCheck.map((item, i) => (
              <div key={item.title} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Comparison */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />おすすめ買取サービス3社比較</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>サービス</th>
                  <th>特徴</th>
                  <th>対応エリア</th>
                  <th>買取方法</th>
                  <th>相場確認の強み</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.name}>
                    <td className="font-bold">{s.name}</td>
                    <td>{s.feature}</td>
                    <td>{s.area}</td>
                    <td>{s.method}</td>
                    <td>{s.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            あなたのゲームの<span style={{ color: 'var(--color-electric-green)' }}>正確な相場</span>を知りませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            最大20社に一括査定して、あなたのゲームの最高買取価格を確認しましょう。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>ハード別買取ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/hardware/switch/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Nintendo Switch</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>Switchの買取相場・高く売るコツ</p>
            </Link>
            <Link href="/hardware/ps5/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PlayStation 5</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS5の買取相場・高く売るコツ</p>
            </Link>
            <Link href="/hardware/retro/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>レトロゲーム</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ファミコン・スーファミの買取相場</p>
            </Link>
          </div>
          <div className="mt-4">
            <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>お役立ち情報</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/knowledge/timing/" className="glass-card p-4 card-hover block">
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>売り時ガイド</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>いつ売るのがベストか</p>
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
          </div>
        </section>
      </div>
    </>
  );
}
