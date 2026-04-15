import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '3DS・DS買取おすすめ3選｜生産終了で今後値上がりの可能性【2025年】',
  description:
    '3DS・3DS LL・New 3DS・2DS・DS・DS Liteの買取相場とおすすめ買取サービス3社を比較。生産終了ハードの今後の価値、SDカードのデータ消去方法、高く売るコツを徹底解説。',
  keywords: ['3DS 買取', 'DS 売る', '3DS 買取相場', 'New 3DS 買取', 'DS Lite 買取'],
  openGraph: {
    title: '3DS・DS買取おすすめ3選｜生産終了で今後値上がりの可能性【2025年】',
    description: '3DS/DS各モデルの買取相場と生産終了ハードの値上がりの可能性を解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const priceData = [
  { model: 'Nintendo 3DS', good: '5,000〜9,000円', fair: '3,000〜4,500円', poor: '1,000〜2,500円' },
  { model: 'Nintendo 3DS LL', good: '6,000〜11,000円', fair: '3,500〜5,500円', poor: '1,500〜3,000円' },
  { model: 'New Nintendo 3DS', good: '8,000〜15,000円', fair: '5,000〜7,500円', poor: '2,500〜4,500円' },
  { model: 'New Nintendo 3DS LL', good: '9,000〜16,000円', fair: '5,500〜8,500円', poor: '3,000〜5,000円' },
  { model: 'Nintendo 2DS', good: '4,000〜7,000円', fair: '2,000〜3,500円', poor: '800〜1,500円' },
  { model: 'Nintendo DS', good: '2,000〜4,000円', fair: '1,000〜1,800円', poor: '300〜800円' },
  { model: 'Nintendo DS Lite', good: '2,500〜5,000円', fair: '1,200〜2,200円', poor: '500〜1,000円' },
];

const futureValue = [
  { title: '生産終了で供給が減少', description: '3DSは2020年に、DSは2013年に生産終了。新品の流通がなくなったため、状態の良い中古品の価値は今後も上昇が見込まれます。' },
  { title: 'eショップ終了の影響', description: 'ニンテンドーeショップの終了により、パッケージ版ソフトの価値が相対的に上昇。本体需要もそれに伴い高まっています。' },
  { title: '限定モデルのプレミア化', description: 'ポケモン・モンハン・ゼルダなどのコラボ限定モデルは年々プレミア価格が上昇。状態が良ければ定価以上の買取額も珍しくありません。' },
];

const services = [
  { name: 'ヒカカク！', feature: '最大20社一括査定', area: '全国対応', method: '宅配買取メイン', point: '3DS/DS専門業者への一括査定で最高値', rank: 1 },
  { name: '買取ウリエル', feature: '出張買取・即日現金化', area: '関東・関西', method: '出張買取', point: '複数台まとめて出張買取対応', rank: 2 },
  { name: 'ティファナ', feature: '店舗+宅配買取', area: '東京近郊', method: '店舗・宅配', point: '3DSソフト・攻略本もまとめて売れる', rank: 3 },
];

const faqs = [
  { q: '3DSの買取相場はどのくらいですか？', a: 'モデルや状態によりますが、通常の3DSで3,000〜9,000円、New 3DSで5,000〜15,000円が目安です。限定カラーや特別モデルはさらに高値がつきます。' },
  { q: '古いDSでも買い取ってもらえますか？', a: 'はい、初代DSやDS Liteも買取可能です。動作品であれば1,000〜5,000円程度の値段がつきます。限定カラーや状態の良いものはさらに高額に。' },
  { q: '3DSのSDカードのデータはどう消去しますか？', a: '本体の「設定」→「データ管理」→「Nintendo 3DSデータ管理」→「ソフト管理」からソフトデータを削除できます。SDカードはPCに接続してフォーマットするか、本体の「設定」→「その他の設定」→「初期化」→「本体の初期化」で全データを消去できます。' },
  { q: '生産終了した3DS/DSの価値は今後上がりますか？', a: '上昇傾向にあります。特にeショップ終了後はパッケージ版ソフトの需要が高まっており、それに伴い本体の需要も増加しています。限定モデルや状態の良い完品は特に値上がりが期待されます。' },
  { q: '画面に傷がある3DSでも売れますか？', a: 'はい、買取可能です。ただし画面の傷は減額要因となります。上画面・下画面ともに傷が少ないほど高額査定に。保護フィルムが貼ってある状態なら傷なしと同等の評価がつくことがあります。' },
  { q: '3DSのソフトと本体をまとめて売った方がお得ですか？', a: 'はい、まとめ売りで査定額がアップするサービスが多いです。特にティファナやウリエルではまとめ売りボーナスがつくことがあります。ヒカカク！では本体・ソフトそれぞれの最高値業者を見つけることも可能です。' },
];

export default function ThreeDSPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'Nintendo 3DS・DS' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            Nintendo 3DS・DS 買取ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            3DS・3DS LL・New 3DS・2DS・DS・DS Liteの買取相場を徹底調査。生産終了により今後の値上がりが期待されるモデルも。SDカードのデータ消去方法、おすすめ買取サービス3社の比較も合わせて解説します。
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
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>※ 2025年時点の参考相場です。限定モデルや特別カラーはさらに高額になる場合があります。</p>
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

        {/* Future Value */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />生産終了で今後値上がりの可能性</h2>
          <div className="space-y-4">
            {futureValue.map((v) => (
              <div key={v.title} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{v.description}</p>
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
                  <th>3DS/DSの強み</th>
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

        {/* SD Card Data */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />SDカードのデータ消去手順</h2>
          <div className="glass-card p-6">
            <ol className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>1. ニンテンドーネットワークIDの確認</strong> - 「設定」→「ニンテンドーネットワークID設定」でIDを確認・メモ</li>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>2. ソフトデータの削除</strong> - 「設定」→「データ管理」→「Nintendo 3DSデータ管理」からダウンロードソフトのデータを削除</li>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>3. 本体の初期化</strong> - 「設定」→「その他の設定」→「初期化」→「本体の初期化」を実行</li>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>4. SDカードのフォーマット</strong> - SDカードをPCに接続してフォーマット、または本体に挿入したまま初期化</li>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>5. SDカードの取り外し</strong> - 個人データが残らないよう、SDカードは抜いてから査定に出すのが安心</li>
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
            3DS・DSを<span style={{ color: 'var(--color-electric-green)' }}>高値</span>で売りませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            生産終了ハードは値上がり前に査定に出すのもアリ。複数社の買取価格を比較して最高値で売りましょう。
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
            <Link href="/hardware/gameboy/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲームボーイ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>GB/GBC/GBAの買取相場</p>
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
