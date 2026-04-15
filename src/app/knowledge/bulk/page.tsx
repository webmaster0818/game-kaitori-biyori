import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ゲームまとめ売りガイド｜大量買取のメリットとコツ【2025年】',
  description:
    'ゲーム機・ソフトのまとめ売りのメリット5つとコツを徹底解説。3社のまとめ売りボーナス比較、最適な梱包方法、引越し時の大量処分ガイドまで完全網羅。まとめ売りで買取価格を最大化しましょう。',
  keywords: ['ゲーム まとめ売り', '大量 買取', 'ゲーム 一括買取', 'ゲーム 大量処分'],
  openGraph: {
    title: 'ゲームまとめ売りガイド｜大量買取のメリットとコツ【2025年】',
    description: 'ゲームのまとめ売りメリット5つとコツを徹底解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const merits = [
  { title: 'まとめ売りボーナスで査定額UP', description: '多くの買取サービスでは、一定数以上をまとめて売るとボーナスがつきます。10本以上で10%、30本以上で20%のボーナスがつくケースもあり、1本ずつ売るより確実にお得です。' },
  { title: '送料無料になりやすい', description: '宅配買取では一定数以上のまとめ売りで送料無料になるサービスが多いです。1〜2本では送料負担が必要でも、まとめ売りなら無料になることがほとんどです。' },
  { title: '手間を大幅に削減', description: '1本ずつフリマアプリで出品するのに比べ、まとめ売りなら梱包・発送が1回で済みます。写真撮影、やりとり、梱包の手間を考えると、時間効率は圧倒的にまとめ売りが上です。' },
  { title: '値段がつかないソフトも引き取り', description: '単品では買取不可のソフトも、まとめ売りなら一緒に引き取ってもらえるケースがあります。処分に困っていたソフトもまとめて片付きます。' },
  { title: '梱包キット無料提供', description: '大量買取の場合、ダンボールや緩衝材などの梱包キットを無料で送ってくれるサービスがあります。自分で梱包材を用意する必要がありません。' },
];

const services = [
  { name: 'ヒカカク！', feature: '最大20社一括査定', bonus: '業者により異なる（最大20社比較で最高ボーナスを発見）', shipping: '業者による', point: '複数社のボーナス込み価格を比較可能' },
  { name: '買取ウリエル', feature: '出張買取・即日現金化', bonus: '大量買取時に査定額上乗せ交渉可', shipping: '出張費無料', point: '大量のゲームを自宅で一括査定・即日現金化' },
  { name: 'ティファナ', feature: '店舗+宅配買取', bonus: '5点以上で送料無料・ボーナスあり', shipping: '5点以上で無料', point: 'ゲーム以外（トレカ・フィギュア）もまとめて売れる' },
];

const packingTips = [
  { title: 'ゲーム機は緩衝材で包む', description: 'ハード本体はプチプチ（気泡緩衝材）で全面を包みます。特に液晶画面や角の部分は厚めに保護しましょう。' },
  { title: 'ソフトはケースごと立てて並べる', description: 'ソフトは本のように立てて並べるのがベスト。重ねると下のケースが割れることがあります。隙間には新聞紙やプチプチを詰めましょう。' },
  { title: '重いものは下、軽いものは上', description: 'ゲーム機やコントローラーなど重いものを箱の下に、ソフトなど軽いものを上に配置します。運搬時の破損リスクを減らせます。' },
  { title: 'ダンボールは二重底にする', description: '大量のゲームを入れると重くなるため、ダンボールの底を二重にするか、底にテープを十字に貼って補強しましょう。' },
  { title: '付属品は本体と同梱', description: 'コントローラーやケーブルなどの付属品は、対応する本体と同じ箱に入れましょう。別の箱に入れると組み合わせが分からなくなります。' },
];

const movingGuide = [
  { title: '引越し1ヶ月前：査定に出す', description: 'まず一括査定で買取価格を確認します。引越し日に間に合うよう、1ヶ月前には行動を開始しましょう。' },
  { title: '引越し2週間前：宅配キット受け取り・梱包', description: '宅配買取の場合、梱包キットの到着に数日かかります。余裕を持って手配し、空いた時間で梱包します。' },
  { title: '引越し1週間前：発送 or 出張買取', description: '宅配便で発送するか、買取ウリエルの出張買取を依頼します。出張買取なら即日現金化で引越し費用に充てられます。' },
  { title: '買取不可のものはリサイクル', description: '買取対象外のゲームは自治体のリサイクルや不用品回収を利用しましょう。ゲーム機は小型家電リサイクル対象です。' },
];

const faqs = [
  { q: 'まとめ売りは何本から対象ですか？', a: 'サービスにより異なりますが、一般的に5〜10本以上からまとめ売りボーナスが適用されます。ティファナでは5点以上から送料無料になります。ヒカカク！で各業者のボーナス条件を比較するのがおすすめです。' },
  { q: 'ゲーム以外のものもまとめて売れますか？', a: 'はい、ティファナではゲーム・トレカ・フィギュア・DVDなどをまとめて売ることができます。買取ウリエルでも幅広いジャンルの出張買取に対応しています。' },
  { q: 'まとめ売りのボーナスはどのくらいですか？', a: '業者により異なりますが、10〜30%のボーナスがつくケースがあります。例えば10本で10%ボーナスなら、合計買取額が10,000円の場合11,000円になります。' },
  { q: '古いソフトと新しいソフトを混ぜて売れますか？', a: 'はい、問題ありません。PS4ソフトとSwitchソフト、レトロゲームなど異なるハードのソフトを一緒に売ることができます。' },
  { q: '値段がつかないソフトがあった場合はどうなりますか？', a: '多くの業者ではまとめ売りの場合、値段がつかないソフトも一緒に引き取ってくれます。返送を希望する場合は事前に確認しましょう（返送料は自己負担の場合あり）。' },
  { q: 'ダンボールは自分で用意する必要がありますか？', a: '宅配買取の場合、梱包キット（ダンボール・緩衝材）を無料提供してくれるサービスが多いです。自分で用意する場合は、スーパーやドラッグストアでもらえるダンボールでもOKです。' },
];

export default function BulkPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: 'まとめ売り' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲーム まとめ売りガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲーム機・ソフトのまとめ売りのメリット5つ、3社のまとめ売りボーナス比較、最適な梱包方法、引越し時の大量処分ガイドまで、まとめ売りで買取価格を最大化する方法を徹底解説します。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Merits */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />まとめ売りのメリット5つ</h2>
          <div className="space-y-4">
            {merits.map((item, i) => (
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

        {/* Service Comparison */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />3社のまとめ売りボーナス比較</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>サービス</th>
                  <th>特徴</th>
                  <th>まとめ売りボーナス</th>
                  <th>送料</th>
                  <th>おすすめポイント</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.name}>
                    <td className="font-bold">{s.name}</td>
                    <td>{s.feature}</td>
                    <td>{s.bonus}</td>
                    <td>{s.shipping}</td>
                    <td>{s.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Packing Tips */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />最適な梱包方法</h2>
          <div className="space-y-4">
            {packingTips.map((tip, i) => (
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

        {/* Moving Guide */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />引越し時の大量処分ガイド</h2>
          <div className="glass-card p-6">
            <ol className="space-y-4">
              {movingGuide.map((step, i) => (
                <li key={step.title} className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                  <strong style={{ color: 'var(--color-deep-blue)' }}>Step {i + 1}. {step.title}</strong>
                  <p className="mt-1">{step.description}</p>
                </li>
              ))}
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
            まとめ売りで<span style={{ color: 'var(--color-electric-green)' }}>買取額アップ</span>を狙いましょう
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            遊ばなくなったゲームをまとめて売って、お得に現金化しましょう。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>お役立ち情報</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/knowledge/price-guide/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取相場ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ハード・ソフト別の相場一覧</p>
            </Link>
            <Link href="/knowledge/preparation/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>売る前の準備</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>初期化・データ消去の手順</p>
            </Link>
            <Link href="/knowledge/boxless/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>箱なし・付属品なし</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なしでも売れるか詳しく解説</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
