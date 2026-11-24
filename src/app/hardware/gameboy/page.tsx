import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'
import HardwareMeasured from '@/components/HardwareMeasured';

export const metadata: Metadata = {
  title: 'ゲームボーイ買取おすすめ3選｜GB・GBC・GBAの買取相場【2026年】',
  description:
    'ゲームボーイ・ゲームボーイカラー・ゲームボーイアドバンス・GBA SPの買取相場とおすすめ買取サービス3社を比較しています。コレクター人気の理由、プレミアソフト情報、状態による価格差についても解説します。',
  keywords: ['ゲームボーイ 買取', 'ゲームボーイアドバンス 買取', 'GBA 買取', 'ゲームボーイカラー 買取', 'GB 売る'],
  openGraph: {
    images: ['/og.png'],
    title: 'ゲームボーイ買取おすすめ3選｜GB・GBC・GBAの買取相場【2026年】',
    description: 'ゲームボーイ各モデルの買取相場とコレクター人気の理由について解説しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const collectorReasons = [
  { title: 'ノスタルジー需要', description: '1989年の初代ゲームボーイ発売当時に子供だった世代（30〜40代）が、懐かしさから再購入するケースが増えています。特に、実機でのプレイを希望する層が多く見られます。' },
  { title: '海外コレクターの高い需要', description: '日本のゲームボーイは海外で「Japanese Original」として高い価値を持ちます。限定カラーや日本語版ソフトは海外オークションで高額取引されています。' },
  { title: 'MOD（改造）文化の盛り上がり', description: 'ゲームボーイにバックライト液晶やIPS液晶を搭載するMODが世界的に広がっています。MOD素材としてジャンク品でも需要があります。' },
  { title: 'レトロゲームブームの波及', description: 'レトロゲーム全体のブームにより、ゲームボーイも再評価されています。特にゲームボーイミクロは生産数の少なさから高額化が顕著です。' },
];

const conditionDifference = [
  { condition: '未開封品', multiplier: '店により異なる（当サイトでは未実測）', description: 'シュリンク付きの未開封品は最高ランクです。保存状態が良いほど価値が高くなります。' },
  { condition: '完品（箱・説明書付き）', multiplier: '駿河屋の通常買取価格の前提', description: '駿河屋の通常買取価格は、箱・説明書・付属品がそろっていることが前提で、必要な付属品が欠けると大きく減額されます（駿河屋「減額基準リスト」）。' },
  { condition: '本体のみ（動作品）', multiplier: '店により異なる', description: '動作する本体のみの状態です。液晶の状態やボタンの反応により査定額が変動します。' },
  { condition: 'ジャンク品', multiplier: '店により異なる（当サイトでは未実測）', description: '故障品でもMOD需要があるため、値段がつきます。液晶割れは特に減額の対象となります。' },
];

const services = [
  { name: 'ヒカカク！', feature: '最大20社一括査定', area: '全国対応', method: '出張買取・宅配買取・店舗買取', point: 'レトロゲーム専門業者が多数参加し、GBの価値を適正に評価', rank: 1 },
  { name: '買取ウリエル', feature: '出張買取・即日現金化', area: '東京・神奈川・千葉・埼玉（ゲーム）', method: '出張買取', point: 'コレクション一式を出張で一度に買取', rank: 2 },
  { name: 'ティファナ', feature: '店舗買取（宅配は一時停止中）', area: '東京近郊', method: '店舗（宅配は一時停止中）', point: 'ゲームボーイ本体・ソフト・周辺機器をまとめて売却可能', rank: 3 },
];

const faqs = [
  { q: 'ゲームボーイの買取相場はどのくらいですか？', a: '当サイトが2026年11月24日に確認した駿河屋の買取価格（箱・説明書・付属品そろい）は、初代16,000円、ポケット13,000円、カラー13,000円、アドバンス16,000円、アドバンスSP 15,000円、ミクロ26,000円でした。ゲオは初代を掲載しておらず、ブックオフの宅配買取は初代・ポケット・カラーを掲載していませんでした。' },
  { q: '壊れたゲームボーイでも売れますか？', a: 'はい、ジャンク品でもMOD（改造）素材としての需要があるため買取可能です。液晶が映らない、ボタンが効かないなどの故障でも値段がつくことがあります。ただし買取価格は動作品と比べて大幅に下がります。' },
  { q: 'ゲームボーイのソフトだけでも売れますか？', a: 'はい、ソフト単体も買取の対象です。当サイトではゲームボーイのソフトの買取価格を実測していないため、金額は各社の買取価格検索でご確認ください。' },
  { q: 'ゲームボーイミクロはなぜ高いのですか？', a: 'ゲームボーイミクロは2005年に発売された最後のゲームボーイシリーズで、生産期間が短く流通量が少ないためです。コンパクトなデザインも人気で、コレクターアイテムとしての価値が高まっています。' },
  { q: 'ゲームボーイの電池交換は必要ですか？', a: '買取に出す際は電池交換は不要です。カートリッジ内蔵電池が切れているソフトでも買取可能です。ただし、電池が残っているほうが、わずかにプラス査定となることがあります。' },
  { q: 'どのサービスがゲームボーイ買取におすすめですか？', a: 'ヒカカク！をおすすめします。レトロゲーム・ゲームボーイ専門の買取業者が複数参加しており、一般的なリサイクルショップでは適正に評価されにくいゲームボーイの価値を、適正に査定する業者を探せます。' },
];

export default function GameboyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲームボーイ買取おすすめ3選｜GB・GBC・GBAの買取相場【2026年】", "datePublished": "2026-03-15", "dateModified": "2026-11-24", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'ゲームボーイ' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲームボーイ 買取ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲームボーイ・ゲームボーイカラー・ゲームボーイアドバンス・GBA SPの買取相場を調査しました。コレクター人気が高まり続けるゲームボーイの価値、プレミアソフト情報、状態による価格差について解説します。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <HardwareMeasured family="Game Boy" label="ゲームボーイ" />

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
            ゲームボーイを<span style={{ color: 'var(--color-accent-orange)' }}>適正価格</span>で売却するために
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            長く保管しているゲームボーイにも、高額査定がつく可能性があります。まずは無料査定で買取価格をご確認ください。
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
        <AuthorBox />
      </div>
    </>
  );
}
