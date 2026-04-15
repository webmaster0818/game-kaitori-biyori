import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'PS5ソフト買取おすすめ3選｜プレステ5ソフトを高く売るコツ【2025年】',
  description:
    'PS5ソフトの買取相場と人気タイトル10本の価格目安を徹底解説。FF・バイオハザード・エルデンリングなど高額買取タイトル、限定版の価値、DL版は売れない注意点、おすすめ買取サービス3社比較まで完全網羅。',
  keywords: ['PS5ソフト 買取', 'プレステ5 ソフト 売る', 'PS5 ソフト 買取相場'],
  openGraph: {
    title: 'PS5ソフト買取おすすめ3選｜プレステ5ソフトを高く売るコツ【2025年】',
    description: 'PS5ソフトの買取相場と人気タイトル10本の価格目安を徹底解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const priceData = [
  { title: 'ファイナルファンタジーVII リバース', price: '4,500〜6,000円' },
  { title: 'バイオハザード RE:4', price: '3,000〜4,000円' },
  { title: 'エルデンリング', price: '3,000〜4,500円' },
  { title: "Marvel's Spider-Man 2", price: '3,500〜5,000円' },
  { title: 'ファイナルファンタジーXVI', price: '2,500〜3,500円' },
  { title: 'ホグワーツ・レガシー', price: '2,500〜3,500円' },
  { title: 'ゴッド・オブ・ウォー ラグナロク', price: '2,500〜3,500円' },
  { title: 'グランツーリスモ7', price: '2,000〜3,000円' },
  { title: 'Stellar Blade', price: '3,500〜4,500円' },
  { title: 'ドラゴンズドグマ 2', price: '3,000〜4,000円' },
];

const limitedInfo = [
  { title: 'コレクターズエディション', description: 'フィギュアやアートブック付きの限定版は通常版の2〜5倍の買取価格がつくことがあります。特に初回生産分は希少性が高く、未開封品はさらにプレミアがつきます。' },
  { title: 'スチールブックケース', description: 'スチールブック仕様の限定パッケージは、ゲームをプレイ済みでもケース自体にコレクター需要があります。通常版より1,000〜3,000円程度高値がつく傾向です。' },
  { title: '初回特典・予約特典', description: 'DLCコードは使用済みでも、物理特典（アートカード、ステッカー等）が揃っていれば査定額アップの対象になります。' },
];

const services = [
  { name: 'ヒカカク！', feature: '最大20社一括査定', area: '全国対応', method: '宅配買取メイン', point: '複数社の競争で最高値を狙える', rank: 1 },
  { name: '買取ウリエル', feature: '出張買取・即日現金化', area: '関東・関西', method: '出張買取', point: '大量のソフトを自宅で即日現金化', rank: 2 },
  { name: 'ティファナ', feature: '店舗+宅配買取', area: '東京近郊', method: '店舗・宅配', point: 'PS5本体とソフトをまとめて売れる', rank: 3 },
];

const faqs = [
  { q: 'PS5ソフトの買取相場はどのくらいですか？', a: '人気タイトルで2,500〜6,000円程度が相場です。新作は発売直後が最も高く、FFやバイオハザードなどのビッグタイトルは比較的値崩れしにくい傾向があります。' },
  { q: 'ダウンロード版のPS5ソフトは売れますか？', a: 'いいえ、ダウンロード版はPSNアカウントに紐づいているため買取できません。売却を考えている方はパッケージ版の購入をおすすめします。PS5デジタル・エディションをお持ちの方はご注意ください。' },
  { q: '限定版やコレクターズエディションは高く売れますか？', a: 'はい、通常版の2〜5倍の買取価格がつくこともあります。特にフィギュアやアートブック付きの限定版は、未開封品であればさらにプレミアがつきます。' },
  { q: 'PS5ソフトとPS4ソフトの買取価格は違いますか？', a: 'はい、一般的にPS5版のほうが高値で買取されます。ただし一部のクロスジェネレーションタイトルではPS4版も需要があり、価格差が小さいこともあります。' },
  { q: 'ソフトのケースや説明書がなくても売れますか？', a: 'ソフト単体でも買取可能ですが、ケースなしだと500〜1,500円程度の減額になります。ディスクに傷がないことが最低条件です。' },
  { q: '海外版のPS5ソフトは売れますか？', a: '海外版も買取可能な業者はありますが、日本語版と比較して大幅に安くなるケースがほとんどです。ヒカカク！で海外版の取扱がある業者を検索するのがおすすめです。' },
];

export default function PS5SoftPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'PS5ソフト' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ソフト別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            PS5ソフト 買取ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            PlayStation 5ソフトの買取相場を人気タイトル10本で徹底調査。限定版の価値、ダウンロード版の注意点、おすすめ買取サービス3社の比較まで、PS5ソフトを売る前に知っておきたい情報を完全網羅しています。
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />人気タイトル買取相場10選</h2>
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

        {/* Limited Editions */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />限定版の価値</h2>
          <div className="space-y-4">
            {limitedInfo.map((item, i) => (
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

        {/* DL Warning */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ダウンロード版は売れない - 注意点</h2>
          <div className="glass-card p-6" style={{ borderLeft: '4px solid #EF4444' }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-light)' }}>
              PS5のダウンロード版ソフトはPSNアカウントに紐づいているため、第三者への譲渡・買取ができません。以下の点にご注意ください。
            </p>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>売却予定がある場合：</strong>必ずパッケージ版を購入しましょう。</li>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>PS5デジタル・エディション：</strong>ディスクドライブがないため、全てDL版になります。将来の売却を考慮するなら通常版（ディスクドライブ付き）がおすすめです。</li>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>DLCコード：</strong>ソフトに付属するDLCコードは使用済みでも買取価格に大きく影響しませんが、未使用なら若干のプラス査定になります。</li>
            </ul>
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
                  <th>PS5ソフト買取の強み</th>
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
            PS5ソフトを<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>で売りませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            複数社の買取価格を比較して、あなたのソフトを一番高く買い取ってくれるサービスを見つけましょう。
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
            <Link href="/software/ps4-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS4ソフト</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS4ソフトの買取相場・値崩れしにくいソフト</p>
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
