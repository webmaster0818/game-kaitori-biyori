import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'PS4ソフト買取おすすめ3選｜プレステ4ソフトを高く売るコツ【2025年】',
  description:
    'PS4ソフトの買取相場と人気タイトルの価格目安を徹底解説。値崩れしにくいソフトの特徴、廉価版との違い、おすすめ買取サービス3社比較まで完全網羅。古いソフトでもまだ売れます。',
  keywords: ['PS4ソフト 買取', 'プレステ4 ソフト 売る', 'PS4 ソフト 買取相場'],
  openGraph: {
    title: 'PS4ソフト買取おすすめ3選｜プレステ4ソフトを高く売るコツ【2025年】',
    description: 'PS4ソフトの買取相場と値崩れしにくいソフトの特徴を徹底解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const priceData = [
  { title: 'ペルソナ5 ザ・ロイヤル', price: '1,500〜2,500円' },
  { title: 'Ghost of Tsushima', price: '1,500〜2,500円' },
  { title: 'ファイナルファンタジーVII リメイク', price: '1,000〜2,000円' },
  { title: 'The Last of Us Part II', price: '1,000〜1,800円' },
  { title: 'デス・ストランディング', price: '800〜1,500円' },
  { title: 'ドラゴンクエストXI S', price: '1,000〜1,800円' },
  { title: 'SEKIRO: SHADOWS DIE TWICE', price: '1,500〜2,500円' },
  { title: 'モンスターハンターワールド：アイスボーン', price: '800〜1,500円' },
  { title: 'キングダム ハーツIII', price: '500〜1,200円' },
  { title: 'バイオハザード RE:2', price: '1,000〜1,800円' },
];

const stableFeatures = [
  { title: '独占タイトル', description: 'PS4でしか遊べない独占タイトルは中古需要が安定しています。Ghost of TsushimaやペルソナなどのPS独占作品は値崩れしにくい傾向があります。' },
  { title: '高評価の名作', description: 'メタスコア90以上の名作は長期的に需要が安定します。SEKIROやThe Last of Usシリーズなどは発売から年数が経っても一定の買取価格を維持しています。' },
  { title: 'シリーズの完結作品', description: 'シリーズの集大成となるタイトルはファン需要が根強く、値崩れしにくい傾向があります。ペルソナ5 ザ・ロイヤルなどが好例です。' },
  { title: 'オンライン非依存', description: 'オフラインで完結するシングルプレイゲームは、サーバー終了の影響を受けないため長期的に価値が安定します。' },
];

const budgetDiff = [
  { item: '通常版（初回版）', description: '初回版・通常版は買取価格が最も高い。特に初回特典付きは付加価値あり。' },
  { item: 'Greatest Hits（廉価版）', description: '廉価版は通常版より30〜50%程度安い買取価格になります。パッケージが異なるため区別されます。' },
  { item: 'PSVR対応版', description: 'PSVR対応タイトルはVR機器の需要に左右されます。VRユーザー向けの希少タイトルは高値がつくことも。' },
];

const services = [
  { name: 'ヒカカク！', feature: '最大20社一括査定', area: '全国対応', method: '宅配買取メイン', point: '古いPS4ソフトでも高値の業者を発見', rank: 1 },
  { name: '買取ウリエル', feature: '出張買取・即日現金化', area: '関東・関西', method: '出張買取', point: 'PS4本体とまとめて即日現金化', rank: 2 },
  { name: 'ティファナ', feature: '店舗+宅配買取', area: '東京近郊', method: '店舗・宅配', point: '低価格ソフトもまとめて引取OK', rank: 3 },
];

const faqs = [
  { q: 'PS4ソフトはまだ売れますか？', a: 'はい、PS4は現役ハードとしてまだ需要があり、人気タイトルであれば1,000〜2,500円程度で買取されます。PS5との互換性もあるため、PS4ソフトの需要は当分続く見込みです。' },
  { q: '廉価版（Greatest Hits）は買取価格が安くなりますか？', a: 'はい、通常版と比較して30〜50%程度安くなります。廉価版はパッケージに「PlayStation Hits」等の表記があり、査定時に区別されます。' },
  { q: 'PS4ソフトの買取相場はどのくらいですか？', a: '人気タイトルで800〜2,500円程度が相場です。発売から年数が経っているため新品時ほどの価格にはなりませんが、名作・独占タイトルは比較的高値を維持しています。' },
  { q: 'ディスクに傷があっても売れますか？', a: '動作に支障のない軽微な傷であれば買取可能です。ただし読み取りエラーが起きるレベルの傷がある場合は買取不可または大幅減額になります。' },
  { q: 'PS4ソフトをまとめて売るとお得ですか？', a: 'はい、まとめ売りボーナスがつくサービスがあります。特に1本あたりの買取価格が低いPS4ソフトは、まとめ売りで効率的に現金化するのがおすすめです。' },
  { q: 'PS4とPS5のクロスジェネレーション版はどちらが高く売れますか？', a: '一般的にPS5版のほうが高値ですが、同梱のPS4版ディスクも需要があります。PS5を持っていないユーザー向けの需要があるため、PS4版も一定の価格で買取されます。' },
];

export default function PS4SoftPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'PS4ソフト' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ソフト別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            PS4ソフト 買取ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            PS4ソフトの買取相場を人気タイトルで徹底調査。値崩れしにくいソフトの特徴、廉価版との買取価格の違い、おすすめ買取サービス3社比較まで、PS4ソフトを売る前に知っておきたい情報を完全網羅しています。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Price Table */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />人気タイトル買取相場</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>※ 2025年時点の参考相場です。状態・付属品・時期により変動します。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>タイトル</th>
                  <th>買取相場（美品）</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row) => (
                  <tr key={row.title}>
                    <td className="font-bold">{row.title}</td>
                    <td style={{ color: 'var(--color-electric-green)' }} className="font-bold">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Stable Features */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />値崩れしにくいソフトの特徴</h2>
          <div className="space-y-4">
            {stableFeatures.map((item, i) => (
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

        {/* Budget Diff */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />通常版と廉価版の買取価格の違い</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>版種</th>
                  <th>特徴・買取への影響</th>
                </tr>
              </thead>
              <tbody>
                {budgetDiff.map((row) => (
                  <tr key={row.item}>
                    <td className="font-bold">{row.item}</td>
                    <td>{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                  <th>PS4ソフト買取の強み</th>
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
            PS4ソフトを<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>で売りませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            古いソフトでもまだ売れます。複数社を比較して最高値を見つけましょう。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のソフト買取ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/software/switch-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switchソフト</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>Switchソフトの買取相場・高く売るコツ</p>
            </Link>
            <Link href="/software/ps5-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS5ソフト</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS5ソフトの買取相場・限定版の価値</p>
            </Link>
            <Link href="/software/retro-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>レトロゲームソフト</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>プレミアソフトの買取相場</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
