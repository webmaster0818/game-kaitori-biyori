import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ゲームボーイ買取おすすめ3選｜GB・GBC・GBAの買取相場【2025年】',
  description:
    'ゲームボーイ・ゲームボーイカラー・ゲームボーイアドバンス・GBA SPの買取相場とおすすめ買取サービス3社を比較。コレクター人気の理由、プレミアソフト情報、状態による価格差を徹底解説。',
  keywords: ['ゲームボーイ 買取', 'ゲームボーイアドバンス 買取', 'GBA 買取', 'ゲームボーイカラー 買取', 'GB 売る'],
  openGraph: {
    title: 'ゲームボーイ買取おすすめ3選｜GB・GBC・GBAの買取相場【2025年】',
    description: 'ゲームボーイ各モデルの買取相場とコレクター人気の理由を解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const priceData = [
  { model: 'ゲームボーイ（初代）', good: '3,000〜8,000円', fair: '1,500〜2,500円', poor: '500〜1,000円' },
  { model: 'ゲームボーイポケット', good: '2,500〜6,000円', fair: '1,200〜2,200円', poor: '400〜1,000円' },
  { model: 'ゲームボーイカラー', good: '3,000〜7,000円', fair: '1,500〜2,500円', poor: '500〜1,200円' },
  { model: 'ゲームボーイアドバンス', good: '4,000〜10,000円', fair: '2,000〜3,500円', poor: '800〜1,800円' },
  { model: 'ゲームボーイアドバンスSP', good: '5,000〜12,000円', fair: '3,000〜4,500円', poor: '1,500〜2,500円' },
  { model: 'ゲームボーイミクロ', good: '15,000〜35,000円', fair: '8,000〜14,000円', poor: '4,000〜7,000円' },
];

const collectorReasons = [
  { title: 'ノスタルジー需要', description: '1989年の初代ゲームボーイ発売当時に子供だった世代（30〜40代）が、懐かしさから再購入するケースが増加。特に実機でプレイしたい層が多いです。' },
  { title: '海外コレクターの高い需要', description: '日本のゲームボーイは海外で「Japanese Original」として高い価値を持ちます。限定カラーや日本語版ソフトは海外オークションで高額取引されています。' },
  { title: 'MOD（改造）文化の盛り上がり', description: 'ゲームボーイにバックライト液晶やIPS液晶を搭載するMODが世界的に流行。MOD素材としてジャンク品でも需要があります。' },
  { title: 'レトロゲームブームの波及', description: 'レトロゲーム全体のブームにより、ゲームボーイも再評価。特にゲームボーイミクロは生産数の少なさから高額化が顕著です。' },
];

const premiumSoftware = [
  { title: 'ポケットモンスター 赤・緑・青・ピカチュウ', price: '箱説付き: 3,000〜10,000円', note: '初版は特にプレミア' },
  { title: 'ポケットモンスター 金・銀・クリスタル', price: '箱説付き: 2,000〜8,000円', note: 'クリスタルが最も高値' },
  { title: 'マザー1+2（GBA）', price: '箱説付き: 3,000〜6,000円', note: '名作RPGとして根強い人気' },
  { title: 'ファイアーエムブレム 封印の剣（GBA）', price: '箱説付き: 2,000〜5,000円', note: 'FEシリーズの人気タイトル' },
];

const conditionDifference = [
  { condition: '未開封品', multiplier: '通常の3〜10倍', description: 'シュリンク付き未開封は最高ランク。保存状態が良いほど価値が高い。' },
  { condition: '完品（箱・説明書付き）', multiplier: '通常の2〜5倍', description: '箱と説明書が揃った完品は、裸の本体と比べて大幅に高値に。' },
  { condition: '本体のみ（動作品）', multiplier: '基準価格', description: '動作する本体のみ。液晶の状態やボタンの反応で査定額が変動。' },
  { condition: 'ジャンク品', multiplier: '基準の1/3〜1/5', description: '故障品でもMOD需要があるため値段がつく。液晶割れは特に減額。' },
];

const services = [
  { name: 'ヒカカク！', feature: '最大20社一括査定', area: '全国対応', method: '宅配買取メイン', point: 'レトロゲーム専門業者が多数、GBの価値を正しく評価', rank: 1 },
  { name: '買取ウリエル', feature: '出張買取・即日現金化', area: '関東・関西', method: '出張買取', point: 'コレクション一式を出張で一度に買取', rank: 2 },
  { name: 'ティファナ', feature: '店舗+宅配買取', area: '東京近郊', method: '店舗・宅配', point: 'ゲームボーイ本体・ソフト・周辺機器をまとめて売れる', rank: 3 },
];

const faqs = [
  { q: 'ゲームボーイの買取相場はどのくらいですか？', a: 'モデルや状態により異なります。初代ゲームボーイは1,500〜8,000円、ゲームボーイアドバンスSPは3,000〜12,000円、ゲームボーイミクロは8,000〜35,000円が目安です。限定カラーや完品はさらに高値に。' },
  { q: '壊れたゲームボーイでも売れますか？', a: 'はい、ジャンク品でもMOD（改造）素材としての需要があるため買取可能です。液晶が映らない、ボタンが効かないなどの故障でも値段がつくことがあります。ただし買取価格は動作品と比べて大幅に下がります。' },
  { q: 'ゲームボーイのソフトだけでも売れますか？', a: 'はい、ソフト単体でも買取可能です。特にポケモンシリーズやファイアーエムブレムなどの人気タイトルは単体でも数千円の値段がつきます。箱・説明書付きの完品はさらに高額です。' },
  { q: 'ゲームボーイミクロはなぜ高いのですか？', a: 'ゲームボーイミクロは2005年に発売された最後のゲームボーイシリーズで、生産期間が短く流通量が少ないためです。コンパクトなデザインも人気で、コレクターアイテムとしての価値が高まっています。' },
  { q: 'ゲームボーイの電池交換は必要ですか？', a: '買取に出す際は電池交換は不要です。カートリッジ内蔵電池が切れているソフトでも買取可能です。ただし電池が生きている方がわずかにプラス査定になることがあります。' },
  { q: 'どのサービスがゲームボーイ買取におすすめですか？', a: 'ヒカカク！がおすすめです。レトロゲーム・ゲームボーイ専門の買取業者が複数参加しており、一般的なリサイクルショップでは適正に評価されにくいゲームボーイの価値を正しく査定してくれます。' },
];

export default function GameboyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'ゲームボーイ' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲームボーイ 買取ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲームボーイ・ゲームボーイカラー・ゲームボーイアドバンス・GBA SPの買取相場を徹底調査。コレクター人気が高まり続けるゲームボーイの価値、プレミアソフト情報、状態による価格差まで完全網羅。
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />モデル別 買取相場一覧</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>※ 2025年時点の参考相場です。限定カラーや特別モデルはさらに高額になる場合があります。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>モデル</th>
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

        {/* Collector Reasons */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />コレクター人気の理由</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {collectorReasons.map((r) => (
              <div key={r.title} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{r.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{r.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Premium Software */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />プレミアソフト情報</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>タイトル</th>
                  <th>買取相場</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {premiumSoftware.map((s) => (
                  <tr key={s.title}>
                    <td className="font-bold">{s.title}</td>
                    <td style={{ color: 'var(--color-electric-green)' }} className="font-bold">{s.price}</td>
                    <td className="text-sm" style={{ color: 'var(--color-text-light)' }}>{s.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: 'var(--color-text-lighter)' }}>※ 上記は一般的な人気タイトルの例です。希少なタイトルはさらに高額になる場合があります。</p>
        </section>

        {/* Condition Difference */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />状態による価格差</h2>
          <div className="space-y-4">
            {conditionDifference.map((c) => (
              <div key={c.condition} className="glass-card p-5 flex items-start gap-4">
                <div className="shrink-0">
                  <span className="tag-pill tag-pill-green text-xs">{c.multiplier}</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{c.condition}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{c.description}</p>
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
                  <th>ゲームボーイの強み</th>
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
            ゲームボーイを<span style={{ color: 'var(--color-accent-orange)' }}>お宝価格</span>で売りませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            押し入れに眠っているゲームボーイ、思わぬ高額査定がつくかもしれません。まずは無料査定でチェック。
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
            <Link href="/hardware/3ds/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Nintendo 3DS・DS</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>3DS/DSの買取相場</p>
            </Link>
            <Link href="/hardware/retro/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>レトロゲーム</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ファミコン・スーファミの買取相場</p>
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
