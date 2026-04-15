import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'PS5買取おすすめ3選｜プレステ5を高く売るコツ【2025年】',
  description:
    'PS5通常版・デジタルエディション・PS5 Proの買取相場とおすすめ買取サービス3社を比較。プレステ5を高く売るコツ、コントローラー・PS VR2の買取、初期化手順まで完全解説。',
  keywords: ['PS5 買取', 'プレステ5 売る', 'PS5 買取相場', 'PS5 デジタルエディション 買取', 'PS5 Pro 買取'],
  openGraph: {
    title: 'PS5買取おすすめ3選｜プレステ5を高く売るコツ【2025年】',
    description: 'PS5通常版・デジタルエディション・PS5 Proの買取相場と高く売るコツを解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const priceData = [
  { model: 'PS5（通常版・ディスクドライブ搭載）', good: '35,000〜45,000円', fair: '25,000〜34,000円', poor: '15,000〜24,000円' },
  { model: 'PS5 デジタル・エディション', good: '28,000〜36,000円', fair: '20,000〜27,000円', poor: '12,000〜19,000円' },
  { model: 'PS5 Pro', good: '55,000〜70,000円', fair: '40,000〜54,000円', poor: '25,000〜39,000円' },
];

const tips = [
  { title: '外箱・付属品を完備する', description: '箱、コントローラー、電源ケーブル、HDMIケーブル、USBケーブル、スタンドが揃っていると高額査定に。特に外箱の有無は3,000〜5,000円の差になることも。' },
  { title: '本体・コントローラーを清掃する', description: '白い本体は汚れが目立ちやすいため、査定前に柔らかい布で拭き上げましょう。コントローラーのスティック周りの手垢も丁寧に清掃すると印象が良くなります。' },
  { title: 'ファームウェアを最新にする', description: '最新のシステムソフトウェアにアップデートしておくと査定がスムーズに。買取業者側の動作確認が容易になり、減額リスクを下げられます。' },
  { title: '需要が高い時期に売る', description: '大型タイトルの発売前後や年末商戦は本体の需要が高まるタイミング。逆にPS5の値下げや新モデル発表直後は中古相場が下がりやすいので注意。' },
  { title: '複数社の査定を比較する', description: 'ヒカカク！で最大20社に一括査定して最高値を見つけましょう。業者によって5,000円以上の差が出ることも珍しくありません。' },
];

const services = [
  { name: 'ヒカカク！', feature: '最大20社一括査定', area: '全国対応', method: '宅配買取メイン', point: 'PS5は高額商品のため複数社比較が特に有効', rank: 1 },
  { name: '買取ウリエル', feature: '出張買取・即日現金化', area: '関東・関西', method: '出張買取', point: '重いPS5を梱包不要、その場で現金化', rank: 2 },
  { name: 'ティファナ', feature: '店舗+宅配買取', area: '東京近郊', method: '店舗・宅配', point: 'コントローラーやVRもまとめて買取可能', rank: 3 },
];

const faqs = [
  { q: 'PS5の買取相場はどのくらいですか？', a: '通常版（ディスクドライブ搭載）で25,000〜45,000円、デジタル・エディションで20,000〜36,000円、PS5 Proで40,000〜70,000円が目安です。箱・付属品の有無と本体の状態で大きく変動します。' },
  { q: 'DualSenseコントローラーだけでも売れますか？', a: 'はい、DualSenseコントローラー単品でも3,000〜5,000円程度で買取可能です。限定カラーモデルはさらに高値がつくことがあります。DualSense Edgeは8,000〜12,000円程度です。' },
  { q: 'PS VR2は買い取ってもらえますか？', a: 'はい、PS VR2も買取対象です。買取相場は30,000〜50,000円程度。付属品完備・美品であれば高額査定が期待できます。' },
  { q: 'PS5の初期化方法を教えてください', a: '「設定」→「システム」→「システムソフトウェア」→「本体をリセット」→「リセット」の順に操作します。PSNアカウントのサインアウトとゲームのライセンス解除もお忘れなく。' },
  { q: 'ディスク版とデジタル版、どちらが高く売れますか？', a: 'ディスクドライブ搭載の通常版の方が需要が高く、デジタル・エディションより5,000〜10,000円ほど高い買取価格になる傾向があります。' },
  { q: 'PS5に拡張SSDを増設していますが査定に影響しますか？', a: '増設SSD自体は取り外して別売りすることをおすすめします。PS5本体の査定には基本的に影響しませんが、SSD付きでもプラス査定にならないケースが多いです。' },
];

export default function PS5Page() {
  return (
    <>
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'PlayStation 5' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            PlayStation 5 買取ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            PS5通常版・デジタルエディション・PS5 Proの買取相場を徹底調査。高く売るためのコツ、DualSenseコントローラーやPS VR2の買取情報、初期化手順までPS5を売る前に必要な情報をすべてまとめました。
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

        {/* Tips */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />PS5を高く売るコツ</h2>
          <div className="space-y-4">
            {tips.map((tip, i) => (
              <div key={tip.title} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{tip.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{tip.description}</p>
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
                  <th>PS5の強み</th>
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

        {/* Controller & VR */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />コントローラー・PS VR2の買取</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>DualSense</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>買取相場: 3,000〜5,000円</p>
              <p className="text-xs mt-1" style={{ color: 'var(--color-text-lighter)' }}>限定カラーはさらに高値に</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>DualSense Edge</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>買取相場: 8,000〜12,000円</p>
              <p className="text-xs mt-1" style={{ color: 'var(--color-text-lighter)' }}>プロ仕様コントローラー</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>PS VR2</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>買取相場: 30,000〜50,000円</p>
              <p className="text-xs mt-1" style={{ color: 'var(--color-text-lighter)' }}>付属品完備で高額査定</p>
            </div>
          </div>
        </section>

        {/* Reset Steps */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />売る前の初期化手順</h2>
          <div className="glass-card p-6">
            <ol className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>1. セーブデータのバックアップ</strong> - PS Plus クラウドストレージまたはUSBドライブにバックアップ</li>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>2. PSNアカウントからサインアウト</strong> - 「設定」→「ユーザーとアカウント」→「その他」→「サインアウト」</li>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>3. ゲームのライセンス解除</strong> - 「設定」→「ユーザーとアカウント」→「その他」→「いつも使うPS5として解除」</li>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>4. 本体をリセット</strong> - 「設定」→「システム」→「システムソフトウェア」→「本体をリセット」→「リセット」</li>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>5. 完了確認</strong> - 初期設定画面が表示されれば初期化完了</li>
            </ol>
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
            PS5を<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>で売りませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            複数社の買取価格を比較して、あなたのPS5を一番高く買い取ってくれるサービスを見つけましょう。
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
            <Link href="/hardware/switch/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Nintendo Switch</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>Switch/Lite/OLEDの買取相場</p>
            </Link>
            <Link href="/hardware/ps4/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PlayStation 4</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS4の買取相場・古くても売れる理由</p>
            </Link>
            <Link href="/hardware/xbox/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Xbox</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>Xbox Series X/Sの買取相場</p>
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
