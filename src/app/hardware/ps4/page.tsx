import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'PS4買取おすすめ3選｜プレステ4はまだ売れる！【2025年相場】',
  description:
    'PS4・PS4 Slim・PS4 Proの買取相場とおすすめ買取サービス3社を比較。古いPS4でもまだ売れる理由、高く売るコツ、初期化手順までプレステ4を売る前に知っておきたい情報を完全解説。',
  keywords: ['PS4 買取', 'プレステ4 売る いくら', 'PS4 買取相場', 'PS4 Pro 買取', 'PS4 Slim 買取'],
  openGraph: {
    title: 'PS4買取おすすめ3選｜プレステ4はまだ売れる！【2025年相場】',
    description: 'PS4・PS4 Slim・PS4 Proの買取相場と古くても売れる理由を解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const priceData = [
  { model: 'PS4（初期型・CUH-1000系）', good: '8,000〜12,000円', fair: '5,000〜7,000円', poor: '2,000〜4,000円' },
  { model: 'PS4 Slim（CUH-2000系）', good: '12,000〜18,000円', fair: '8,000〜11,000円', poor: '4,000〜7,000円' },
  { model: 'PS4 Pro（CUH-7000系）', good: '18,000〜25,000円', fair: '12,000〜17,000円', poor: '6,000〜11,000円' },
];

const whySellReasons = [
  { title: 'PS5未対応タイトルの需要', description: 'PS4専用タイトルや、PS4版を好むユーザーが一定数存在します。特に海外では依然としてPS4の需要が高い状況です。' },
  { title: '価格帯の人気', description: 'PS5より手頃な価格で購入できるため、ライトゲーマーや子供用として中古PS4の需要があります。' },
  { title: '豊富なソフトライブラリ', description: 'PS4には数千タイトルの名作が揃っており、過去の作品を楽しみたいユーザーの需要が継続しています。' },
  { title: 'メディアプレイヤーとしての価値', description: 'Blu-ray再生、動画配信サービスの視聴など、ゲーム以外の用途でも需要があります。' },
];

const tips = [
  { title: '付属品を揃える', description: 'コントローラー、電源ケーブル、HDMIケーブル、USBケーブルが揃っていると高額査定に。特にDUALSHOCK 4の状態が重要です。' },
  { title: '本体を清掃する', description: 'ホコリがたまりやすいPS4は、査定前に通気口やUSBポート周りを丁寧に掃除しましょう。外観の清潔さは査定額に直結します。' },
  { title: 'HDDの容量をアピール', description: '500GBモデルより1TB・2TBモデルの方が高値がつきます。容量の大きいモデルは確実にアピールポイントにしましょう。' },
  { title: '動作確認を済ませておく', description: 'ディスクの読み取り、Wi-Fi接続、コントローラーの反応など、基本的な動作確認をしておくとスムーズに査定が進みます。' },
  { title: '複数社で比較する', description: 'PS4は業者間で査定額の差が大きいジャンル。ヒカカク！の一括査定で最高値を見つけることが特に重要です。' },
];

const services = [
  { name: 'ヒカカク！', feature: '最大20社一括査定', area: '全国対応', method: '宅配買取メイン', point: '業者間の価格差が大きいPS4は一括比較が必須', rank: 1 },
  { name: '買取ウリエル', feature: '出張買取・即日現金化', area: '関東・関西', method: '出張買取', point: '古いPS4でも出張で手軽に現金化', rank: 2 },
  { name: 'ティファナ', feature: '店舗+宅配買取', area: '東京近郊', method: '店舗・宅配', point: 'PS4ソフトや周辺機器もまとめて売れる', rank: 3 },
];

const faqs = [
  { q: '古いPS4でも買い取ってもらえますか？', a: 'はい、初期型（CUH-1000系）でも買取可能です。動作品であれば2,000円以上の値段がつくのが一般的です。ジャンク品でもパーツ取り需要があるため買取してくれる業者もあります。' },
  { q: 'PS4の買取相場はどのくらいですか？', a: 'モデルや状態によりますが、初期型で5,000〜12,000円、Slimで8,000〜18,000円、Proで12,000〜25,000円が目安です。箱・付属品完備の美品であれば上限に近い査定額が期待できます。' },
  { q: 'PS4のコントローラーだけでも売れますか？', a: 'はい、DUALSHOCK 4単品でも1,500〜3,000円程度で買取可能です。限定カラーや特別モデルはさらに高値がつきます。スティックの状態が良いものほど査定額が上がります。' },
  { q: 'PS4の初期化方法を教えてください', a: '「設定」→「初期化」→「PS4を初期化する」→「フル」を選択します。事前にPSNアカウントのサインアウトと「いつも使うPS4」の登録解除を行ってください。' },
  { q: 'PS4とPS4 Proはどちらが高く売れますか？', a: 'PS4 Proの方が高値がつきます。4K対応やハイパフォーマンスモードを求めるユーザーの需要があり、Proは通常のPS4より5,000〜10,000円ほど高い買取価格になります。' },
  { q: 'ディスクを読み込まないPS4でも売れますか？', a: 'ジャンク品として買取可能な場合があります。買取価格は大幅に下がりますが、パーツ取り需要があるため1,000〜3,000円程度の値段がつくことがあります。ヒカカク！でジャンク対応の業者を探すのがおすすめです。' },
];

export default function PS4Page() {
  return (
    <>
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'PlayStation 4' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            PlayStation 4 買取ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            PS4・PS4 Slim・PS4 Proの買取相場を徹底調査。古いPS4でもまだまだ売れる理由と、少しでも高く売るためのコツをお伝えします。おすすめ買取サービス3社の比較情報もあわせてご確認ください。
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

        {/* Why Still Sells */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />古いPS4でもまだ売れる理由</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whySellReasons.map((r) => (
              <div key={r.title} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{r.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{r.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />PS4を高く売るコツ</h2>
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
                  <th>PS4の強み</th>
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
            PS4を<span style={{ color: 'var(--color-electric-green)' }}>今すぐ</span>査定してみませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            古いPS4でもまだまだ値段がつきます。複数社の買取価格を比較して最高値で売りましょう。
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
