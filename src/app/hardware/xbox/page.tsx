import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Xbox買取おすすめ3選｜Series X/S・Xbox Oneの買取相場【2025年】',
  description:
    'Xbox Series X・Series S・Xbox Oneの買取相場とおすすめ買取サービス3社を比較。日本でのXbox需要の実態、Game Passの注意点、高く売るコツを徹底解説。',
  keywords: ['Xbox 買取', 'Xbox Series X 買取', 'Xbox Series S 買取', 'Xbox One 買取', 'Xbox 売る'],
  openGraph: {
    title: 'Xbox買取おすすめ3選｜Series X/S・Xbox Oneの買取相場【2025年】',
    description: 'Xbox Series X/S・Xbox Oneの買取相場とXbox需要の実態を解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const priceData = [
  { model: 'Xbox Series X', good: '30,000〜40,000円', fair: '22,000〜29,000円', poor: '12,000〜21,000円' },
  { model: 'Xbox Series S', good: '15,000〜22,000円', fair: '10,000〜14,000円', poor: '5,000〜9,000円' },
  { model: 'Xbox One X', good: '10,000〜16,000円', fair: '6,000〜9,000円', poor: '3,000〜5,000円' },
  { model: 'Xbox One S', good: '6,000〜10,000円', fair: '3,000〜5,000円', poor: '1,000〜2,000円' },
  { model: 'Xbox One（初期型）', good: '4,000〜7,000円', fair: '2,000〜3,000円', poor: '500〜1,500円' },
];

const demandInfo = [
  { title: '日本国内の需要は限定的', description: '日本ではPlayStationやSwitchが圧倒的なシェアを持つため、Xboxの中古需要は限られています。そのため買取価格もPS5と比べると低めの傾向があります。' },
  { title: '海外輸出での需要あり', description: '一方、海外（特に北米・欧州）ではXboxの人気は高く、海外輸出を行う買取業者であれば相場より高めの買取価格を提示してくれることがあります。' },
  { title: 'ヒカカク！で専門業者を探す', description: '一般的なリサイクルショップよりも、Xbox取扱いに慣れた専門業者の方が適正価格で買い取ってくれます。ヒカカク！なら専門業者を見つけやすいのでおすすめです。' },
];

const services = [
  { name: 'ヒカカク！', feature: '最大20社一括査定', area: '全国対応', method: '宅配買取メイン', point: 'Xbox専門業者・海外輸出業者も参加', rank: 1 },
  { name: '買取ウリエル', feature: '出張買取・即日現金化', area: '関東・関西', method: '出張買取', point: 'Xboxも出張買取対応で手間なし', rank: 2 },
  { name: 'ティファナ', feature: '店舗+宅配買取', area: '東京近郊', method: '店舗・宅配', point: 'ゲーム全般を幅広く取扱い', rank: 3 },
];

const faqs = [
  { q: 'Xboxは日本でも買い取ってもらえますか？', a: 'はい、買取可能です。日本国内での需要は限られますが、海外輸出を行う業者や専門業者であれば適正価格で買い取ってもらえます。ヒカカク！で複数社に査定依頼するのがおすすめです。' },
  { q: 'Xbox Series Xの買取相場はどのくらいですか？', a: '状態や付属品の有無によりますが、22,000〜40,000円が目安です。箱・付属品完備の美品であれば上限に近い金額が期待できます。' },
  { q: 'Game Passに加入したままでも売れますか？', a: '売ること自体は可能ですが、必ず売却前にGame Passのサブスクリプションを解除し、Microsoftアカウントからサインアウトしてください。アカウントに紐づいたゲームライセンスは譲渡できません。' },
  { q: 'Xbox Oneの初期化方法を教えてください', a: '「設定」→「システム」→「本体の情報」→「本体のリセット」→「すべてリセットして削除」を選択します。Microsoftアカウントのサインアウトも忘れずに行ってください。' },
  { q: 'Xboxのコントローラーだけでも売れますか？', a: 'はい、Xboxワイヤレスコントローラー単品でも2,000〜4,000円程度で買取可能です。Eliteコントローラーは5,000〜10,000円と高額査定が期待できます。限定デザインモデルはさらに高値に。' },
  { q: 'Xboxのゲームソフトは買い取ってもらえますか？', a: 'はい、パッケージ版のXboxソフトは買取対象です。ただし日本語版の需要は低いため、買取価格は控えめな傾向があります。北米版などは海外需要がある場合もあります。' },
];

export default function XboxPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'Xbox' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            Xbox 買取ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            Xbox Series X・Series S・Xbox Oneの買取相場を徹底調査。日本でのXbox需要の実態、Game Passの注意点、おすすめ買取サービス3社の比較まで、Xboxを売る前に知っておきたい情報をまとめました。
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
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>※ 2025年時点の参考相場です。実際の買取価格は状態・付属品・時期により変動します。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>モデル</th>
                  <th>美品（箱あり）</th>
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

        {/* Xbox Demand */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />Xbox需要の実態</h2>
          <div className="space-y-4">
            {demandInfo.map((info) => (
              <div key={info.title} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{info.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{info.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Game Pass Notice */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />Game Pass 売却前の注意点</h2>
          <div className="glass-card p-6">
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-light)' }}>
              Xbox Game Passに加入中の方は、売却前に以下の手順を必ず行ってください。アカウントに紐づいたゲームライセンスやサブスクリプションは本体を譲渡しても引き継がれません。
            </p>
            <ol className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>1. Game Passサブスクリプションの確認</strong> - 自動更新をオフにするか、サブスクリプションをキャンセル</li>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>2. Microsoftアカウントからサインアウト</strong> - 「設定」→「アカウント」→「サインアウト」</li>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>3. 「ホームXbox」の登録解除</strong> - 他のユーザーがあなたのゲームにアクセスできなくなるよう解除</li>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>4. 本体のリセット</strong> - 「設定」→「システム」→「本体の情報」→「本体のリセット」→「すべてリセットして削除」</li>
            </ol>
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
                  <th>Xboxの強み</th>
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
            Xboxを<span style={{ color: 'var(--color-electric-green)' }}>高く売る</span>なら今すぐ査定
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            Xbox専門業者に査定してもらえば、一般的なリサイクルショップより高値がつく可能性があります。
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
            <Link href="/hardware/ps5/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PlayStation 5</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS5の買取相場・高く売るコツ</p>
            </Link>
            <Link href="/hardware/switch/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Nintendo Switch</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>Switch/Lite/OLEDの買取相場</p>
            </Link>
            <Link href="/hardware/retro/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>レトロゲーム</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ファミコン・スーファミの買取相場</p>
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
