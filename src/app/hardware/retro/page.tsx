import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'レトロゲーム買取おすすめ3選｜ファミコン・スーファミの買取相場【2025年】',
  description:
    'ファミコン・スーファミ・メガドライブ・PCエンジン・ネオジオなどレトロゲームの買取相場とおすすめ買取サービス3社を比較。プレミアがつく条件5つ、高く売るコツ、注意点を徹底解説。',
  keywords: ['レトロゲーム 買取', 'ファミコン 売る', 'スーファミ 買取', 'レトロゲーム 買取相場', 'ネオジオ 買取'],
  openGraph: {
    title: 'レトロゲーム買取おすすめ3選｜ファミコン・スーファミの買取相場【2025年】',
    description: 'レトロゲーム機の買取相場とプレミアがつく条件を徹底解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const priceData = [
  { model: 'ファミリーコンピュータ', good: '3,000〜8,000円', fair: '1,500〜2,500円', poor: '500〜1,000円' },
  { model: 'スーパーファミコン', good: '3,000〜7,000円', fair: '1,500〜2,500円', poor: '500〜1,000円' },
  { model: 'メガドライブ', good: '5,000〜12,000円', fair: '3,000〜4,500円', poor: '1,000〜2,500円' },
  { model: 'PCエンジン', good: '8,000〜20,000円', fair: '4,000〜7,000円', poor: '2,000〜3,500円' },
  { model: 'ネオジオ（AES）', good: '30,000〜80,000円', fair: '15,000〜29,000円', poor: '8,000〜14,000円' },
  { model: 'セガサターン', good: '5,000〜10,000円', fair: '2,500〜4,500円', poor: '1,000〜2,000円' },
  { model: 'NINTENDO 64', good: '4,000〜8,000円', fair: '2,000〜3,500円', poor: '800〜1,500円' },
  { model: 'ドリームキャスト', good: '4,000〜8,000円', fair: '2,000〜3,500円', poor: '800〜1,500円' },
  { model: 'ゲームキューブ', good: '5,000〜12,000円', fair: '3,000〜4,500円', poor: '1,500〜2,500円' },
];

const popularReasons = [
  { title: 'コレクター需要の高まり', description: '30〜50代の大人が子供時代に遊んだゲームを再び手に入れたいという「懐かしさ需要」が年々増加しています。' },
  { title: '生産終了による希少性', description: '新品が手に入らないため、状態の良い中古品ほど価値が上がります。特に箱・説明書付きの完品は非常に高値で取引されています。' },
  { title: '海外コレクターの参入', description: '日本のレトロゲームは海外でも高い人気があり、海外コレクターの購入により相場が上昇傾向にあります。' },
  { title: 'レトロゲーム実況の影響', description: 'YouTubeやTwitchでのレトロゲーム実況が人気を集め、視聴者が実際にプレイしたくなることで需要が増加しています。' },
];

const premiumConditions = [
  { title: '箱・説明書付きの完品', description: '箱なし（裸）と完品では買取価格が2〜10倍以上変わることも。特にファミコン・スーファミの完品は非常に高値です。' },
  { title: '希少タイトル・限定版', description: '生産数が少ないタイトルや限定版はプレミア価格に。ネオジオのソフトは特に高額で、100万円を超えるタイトルも存在します。' },
  { title: '未開封品', description: 'シュリンク（ビニール包装）付きの未開封品は、中古品の何倍もの価格がつきます。状態を維持している方は開封せずに査定に出しましょう。' },
  { title: '動作品であること', description: '正常に動作することが大前提。ジャンク品は買取価格が大幅に下がります。売る前に動作確認を行いましょう。' },
  { title: '状態の良さ（黄ばみなし）', description: 'スーパーファミコンなどは経年による黄ばみが発生しやすく、黄ばみの少ない本体は高値がつきます。保管環境が重要です。' },
];

const services = [
  { name: 'ヒカカク！', feature: '最大20社一括査定', area: '全国対応', method: '宅配買取メイン', point: 'レトロゲーム専門業者が多数参加、最高値を見つけやすい', rank: 1 },
  { name: '買取ウリエル', feature: '出張買取・即日現金化', area: '関東・関西', method: '出張買取', point: '大量のレトロゲームを一度に出張買取', rank: 2 },
  { name: 'ティファナ', feature: '店舗+宅配買取', area: '東京近郊', method: '店舗・宅配', point: 'ゲーム・トレカ・フィギュアと一緒に売れる', rank: 3 },
];

const faqs = [
  { q: 'レトロゲームの買取相場はどのくらいですか？', a: '機種や状態により大きく異なります。ファミコン本体で1,500〜8,000円、ネオジオ（AES）は15,000〜80,000円と幅広いです。ソフト単体でも希少タイトルは数万円〜数十万円の価値がつくことがあります。' },
  { q: '動かないレトロゲーム機でも売れますか？', a: 'ジャンク品でも買取可能な業者があります。パーツ取り需要やコレクター向けの外装需要があるため、壊れていても諦めずに査定に出してみてください。ただし買取価格は動作品と比べて大幅に下がります。' },
  { q: 'ソフトだけでも買い取ってもらえますか？', a: 'はい、ソフト単体でも買取可能です。特にレトロゲームのソフトは本体以上に高額になることも多いです。希少タイトルは裸（カートリッジのみ）でも数千円〜数万円の値段がつきます。' },
  { q: 'レトロゲームを売る前にやるべきことは？', a: '動作確認、端子部分の清掃（接点復活剤の使用）、外装の拭き掃除が基本です。箱や説明書がある場合は必ず一緒に査定に出してください。付属品の有無で価格が大きく変わります。' },
  { q: 'どのサービスがレトロゲームの買取に一番おすすめですか？', a: 'ヒカカク！がおすすめです。レトロゲーム専門の買取業者が多数参加しており、一括査定で最高値を見つけやすいのが最大の強みです。専門知識のある業者による適正査定が期待できます。' },
  { q: 'レトロゲームの相場は今後どうなりますか？', a: '全体的に上昇傾向が続いています。コレクター人口の増加と供給量の減少により、特に希少タイトルや状態の良い完品は今後も値上がりが予想されます。売り時を逃さないことが重要です。' },
];

export default function RetroPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'レトロゲーム' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            レトロゲーム 買取ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ファミコン・スーファミ・メガドライブ・PCエンジン・ネオジオなど、レトロゲーム機の買取相場を機種別に徹底調査。プレミアがつく条件5つ、注意点、おすすめ買取サービス3社の比較まで完全網羅。お宝が眠っているかもしれません。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* What is Retro */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />レトロゲームとは？人気の理由</h2>
          <div className="glass-card p-6 mb-6">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              一般的に「レトロゲーム」とは、1980年代〜2000年代前半に発売されたゲーム機・ソフトを指します。ファミコン、スーパーファミコン、メガドライブ、PCエンジン、ネオジオ、セガサターン、NINTENDO 64、ドリームキャスト、ゲームキューブなどが代表的です。近年はコレクター需要の高まりにより買取相場が上昇傾向にあります。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularReasons.map((r) => (
              <div key={r.title} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{r.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{r.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Price Table */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />機種別 買取相場一覧</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>※ 本体のみの参考相場です。ソフトの相場はタイトルにより大きく異なります。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>機種</th>
                  <th>完品（箱・説明書あり）</th>
                  <th>良品</th>
                  <th>傷・汚れあり</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row) => (
                  <tr key={row.model}>
                    <td className="font-bold">{row.model}</td>
                    <td style={{ color: 'var(--color-electric-green)' }} className="font-bold">{row.good}</td>
                    <td>{row.fair}</td>
                    <td>{row.poor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Premium Conditions */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />プレミアがつく5つの条件</h2>
          <div className="space-y-4">
            {premiumConditions.map((c, i) => (
              <div key={c.title} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-accent-orange)', opacity: 0.3 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{c.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{c.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Notes */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />売る前の注意点</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>動作確認を行う</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                電源が入るか、映像が出力されるか、コントローラーが反応するかを事前に確認しましょう。動作品とジャンク品では買取価格が大きく異なります。
              </p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>端子・外装の清掃</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                カートリッジの端子は接点復活剤で清掃、本体は乾いた柔らかい布で拭き上げましょう。黄ばみは漂白せず、そのままの状態で査定に出すのが無難です。
              </p>
            </div>
          </div>
        </section>

        {/* Service Comparison */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />おすすめ買取サービス3社比較</h2>
          <div className="glass-card p-4 mb-4" style={{ borderLeft: '4px solid var(--color-electric-green)' }}>
            <p className="text-sm font-bold" style={{ color: 'var(--color-deep-blue)' }}>
              レトロゲームの買取には特にヒカカク！がおすすめです。レトロゲーム専門の買取業者が多数参加しており、一般のリサイクルショップでは見逃される価値を正しく評価してくれます。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>サービス</th>
                  <th>特徴</th>
                  <th>対応エリア</th>
                  <th>買取方法</th>
                  <th>レトロゲームの強み</th>
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
            レトロゲームを<span style={{ color: 'var(--color-accent-orange)' }}>お宝価格</span>で売りませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            押し入れに眠っているレトロゲーム、思わぬ高額査定がつくかもしれません。まずは無料査定でチェック。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のハード買取ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/hardware/gameboy/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲームボーイ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>GB/GBC/GBAの買取相場</p>
            </Link>
            <Link href="/hardware/3ds/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Nintendo 3DS・DS</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>3DS/DSの買取相場</p>
            </Link>
            <Link href="/hardware/switch/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Nintendo Switch</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>Switch/Lite/OLEDの買取相場</p>
            </Link>
          </div>
          <div className="mt-4">
            <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>買取サービスの詳細レビュー</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/review/hikakaku/" className="glass-card p-4 card-hover block">
                <span className="tag-pill tag-pill-green text-xs mb-2 inline-block">1位</span>
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社一括査定</p>
              </Link>
              <Link href="/review/uriel/" className="glass-card p-4 card-hover block">
                <span className="tag-pill tag-pill-orange text-xs mb-2 inline-block">2位</span>
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取ウリエル</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>出張買取・即日現金化</p>
              </Link>
              <Link href="/review/tifana/" className="glass-card p-4 card-hover block">
                <span className="tag-pill tag-pill-blue text-xs mb-2 inline-block">3位</span>
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ティファナ</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>店舗+宅配買取</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
