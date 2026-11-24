import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'
import HardwareMeasured from '@/components/HardwareMeasured';

export const metadata: Metadata = {
  title: 'PS4買取おすすめ3選｜プレステ4はまだ売れる【2026年相場】',
  description:
    'PS4・PS4 Slim・PS4 Proの買取相場とおすすめ買取サービス3社を比較しています。古いPS4でも売却できる理由、高く売るコツ、初期化手順など、PlayStation 4を売却する前にご確認いただきたい情報を解説します。',
  keywords: ['PS4 買取', 'プレステ4 売る いくら', 'PS4 買取相場', 'PS4 Pro 買取', 'PS4 Slim 買取'],
  openGraph: {
    images: ['/og.png'],
    title: 'PS4買取おすすめ3選｜プレステ4はまだ売れる【2026年相場】',
    description: 'PS4・PS4 Slim・PS4 Proの買取相場と、古いモデルでも売却できる理由について解説しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const whySellReasons = [
  { title: 'PS5未対応タイトルの需要', description: 'PS4専用タイトルや、PS4版を好むユーザーが一定数存在します。' },
  { title: '価格帯の人気', description: 'PS5より手頃な価格で購入できるため、ライトゲーマーや子供用として中古PS4の需要があります。' },
  { title: '豊富なソフトライブラリ', description: 'PS4には数千タイトルの名作がそろっており、過去の作品を楽しみたいユーザーの需要が継続しています。' },
  { title: 'メディアプレイヤーとしての価値', description: 'Blu-ray再生、動画配信サービスの視聴など、ゲーム以外の用途でも需要があります。' },
];

const tips = [
  { title: '付属品を揃える', description: 'コントローラー、電源ケーブル、HDMIケーブル、USBケーブルがそろっていると高額査定につながります。特にDUALSHOCK 4の状態が重要です。' },
  { title: '本体を清掃する', description: 'ホコリがたまりやすいPS4は、査定前に通気口やUSBポート周りを丁寧に清掃することをおすすめします。外観の清潔さは査定額に直結します。' },
  { title: 'HDDの容量を伝える', description: '500GBモデルより1TB・2TBモデルのほうが高値がつきます。容量の大きいモデルは、査定時に必ず申告することをおすすめします。' },
  { title: '動作確認を済ませておく', description: 'ディスクの読み取り、Wi-Fi接続、コントローラーの反応など、基本的な動作確認を済ませておくと、査定が円滑に進みます。' },
  { title: '複数社で比較する', description: 'PS4は業者間で査定額の差が大きいジャンルです。ヒカカク！の一括査定で最高値を確認することが特に重要です。' },
];

const services = [
  { name: 'ヒカカク！', feature: '最大20社一括査定', area: '全国対応', method: '出張買取・宅配買取・店舗買取', point: '業者間の価格差が大きいPS4は一括比較が有効', rank: 1 },
  { name: '買取ウリエル', feature: '出張買取・即日現金化', area: '東京・神奈川・千葉・埼玉（ゲーム）', method: '出張買取', point: '古いPS4でも出張で手軽に現金化', rank: 2 },
  { name: 'ティファナ', feature: '店舗買取（宅配は一時停止中）', area: '東京近郊', method: '店舗（宅配は一時停止中）', point: 'PS4ソフトや周辺機器もまとめて売却可能', rank: 3 },
];

const faqs = [
  { q: '古いPS4でも買い取ってもらえますか？', a: 'はい、初期型（CUH-1000系）も買取の対象です。当サイトが2026年11月24日に確認した時点では、初期型の買取価格は駿河屋で9,700円（CUH-1000AB01）〜13,000円（CUH-1200AB01）、ブックオフの宅配買取で8,000円（箱説なしは6,000円）でした。ジャンク品の扱いは店によって異なるため、各社の買取条件をご確認ください。' },
  { q: 'PS4の買取相場はどのくらいですか？', a: '当サイトが2026年11月24日に各社の公式ページで確認した金額は、初期型（CUH-1200AB01）が駿河屋13,000円・ブックオフ8,000円・ゲオ16,000円、Slim（CUH-2200AB01）が14,000円・10,000円・18,000円、Pro（CUH-7200BB01）が16,000円・12,001円・22,000円でした。ゲオは状態が最も良い場合の「最高価格」、ブックオフは宅配買取の参考価格です。' },
  { q: 'PS4のコントローラーだけでも売れますか？', a: 'DUALSHOCK 4は単品でも買取の対象になっています。当サイトではコントローラー単品の買取価格を実測していないため、金額は各社の買取価格検索でご確認ください。' },
  { q: 'PS4の初期化方法を教えてください', a: '「設定」→「初期化」→「PS4を初期化する」→「フル」を選択します。事前にPSNアカウントのサインアウトと「いつも使うPS4」の登録解除を行ってください。' },
  { q: 'PS4とPS4 Proはどちらが高く売れますか？', a: '2026年11月24日の実測では、3社ともPS4 Proのほうが高く、駿河屋は初期型13,000円に対してPro 16,000円、ゲオは16,000円に対して22,000円でした。' },
  { q: 'ディスクを読み込まないPS4でも売れますか？', a: '動作に不具合がある本体の扱いは店によって異なります。当サイトではジャンク品の買取価格を実測していないため、各社の買取条件（ジャンク品・動作不良品の扱い）をご確認ください。' },
];

export default function PS4Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "PS4買取おすすめ3選｜プレステ4はまだ売れる【2026年相場】", "datePublished": "2026-03-15", "dateModified": "2026-11-24", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'PlayStation 4' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            PlayStation 4 買取ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            PS4・PS4 Slim・PS4 Proの買取相場を調査しました。古いPS4でも売却できる理由と、少しでも高く売るためのコツについて解説します。おすすめ買取サービス3社の比較情報もあわせてご確認ください。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <HardwareMeasured family="PS4" label="PS4" />

        {/* Why Still Sells */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />古いPS4でも売却できる理由</h2>
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
            PS4の<span style={{ color: 'var(--color-electric-green)' }}>無料査定</span>のご案内
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            古いPS4でも買取価格がつきます。複数社の買取価格を比較し、最高値で売却することをおすすめします。
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
        <AuthorBox />
      </div>
    </>
  );
}
