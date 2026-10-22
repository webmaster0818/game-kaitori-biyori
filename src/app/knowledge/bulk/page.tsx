import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ゲームまとめ売りガイド｜大量買取のメリットとコツ【2026年】',
  description:
    'ゲーム機・ソフトのまとめ売りのメリット5つとコツについて解説します。3社のまとめ売りボーナス比較、梱包方法、引越し時の大量処分の手順もまとめています。',
  keywords: ['ゲーム まとめ売り', '大量 買取', 'ゲーム 一括買取', 'ゲーム 大量処分'],
  openGraph: {
    images: ['/og.png'],
    title: 'ゲームまとめ売りガイド｜大量買取のメリットとコツ【2026年】',
    description: 'ゲームのまとめ売りのメリット5つとコツについて解説します。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const merits = [
  { title: 'まとめ売りボーナスによる査定額の上乗せ', description: '多くの買取サービスでは、点数に応じて買取金額を上乗せするキャンペーンを実施している場合があります。条件や上乗せ率は業者・時期ごとに異なるため、申込前に各社の公式キャンペーンページでご確認ください。' },
  { title: '送料無料の条件を満たしやすい', description: '宅配買取では一定数以上のまとめ売りで送料無料となるサービスが多くあります。1〜2本では送料負担が必要でも、まとめ売りなら無料になることがほとんどです。' },
  { title: '手間の大幅な削減', description: '1本ずつフリマアプリで出品するのに比べ、まとめ売りなら梱包・発送が1回で済みます。写真撮影、やりとり、梱包の手間を考えると、時間効率の面ではまとめ売りが優れています。' },
  { title: '値段がつかないソフトの引き取り', description: '単品では買取不可のソフトも、まとめ売りなら一緒に引き取ってもらえるケースがあります。処分に困っていたソフトもまとめて片付きます。' },
  { title: '梱包キットの無料提供', description: '大量買取の場合、段ボールや緩衝材などの梱包キットを無料で送付するサービスがあります。梱包材をご自身で用意する必要はありません。' },
];

const services = [
  { name: 'ヒカカク！', feature: '最大20社一括査定', bonus: '業者により異なる（最大20社のボーナス条件を比較可能）', shipping: '業者による', point: '複数社のボーナス込み価格を比較可能' },
  { name: '買取ウリエル', feature: '出張買取・即日現金化', bonus: '公式FAQでは「まとめて売ると高値が付く場合がある」と説明（固定のボーナス条件の記載なし）', shipping: '出張費無料（ゲームの出張は東京・神奈川・千葉・埼玉）', point: '大量のゲームを自宅で一括査定し、即日現金化' },
  { name: 'ティファナ', feature: '店舗+宅配買取', bonus: '—（条件は公式キャンペーンページで確認）', shipping: '宅配買取は送料・宅配キット無料（買取成立時）', point: 'ゲーム以外（トレカ・フィギュア）もまとめて売れる' },
];

const packingTips = [
  { title: 'ゲーム機は緩衝材で包む', description: 'ハード本体はプチプチ（気泡緩衝材）で全面を包みます。特に液晶画面や角の部分は、厚めに保護することをおすすめします。' },
  { title: 'ソフトはケースごと立てて並べる', description: 'ソフトは本のように立てて並べることをおすすめします。重ねると下のケースが割れることがあります。隙間には新聞紙や気泡緩衝材を詰めてください。' },
  { title: '重いものは下、軽いものは上', description: 'ゲーム機やコントローラーなど重いものを箱の下に、ソフトなど軽いものを上に配置します。運搬時の破損リスクを減らせます。' },
  { title: '段ボールは二重底にする', description: '大量のゲームを入れると重くなるため、段ボールの底を二重にするか、底にテープを十字に貼って補強してください。' },
  { title: '付属品は本体と同梱', description: 'コントローラーやケーブルなどの付属品は、対応する本体と同じ箱に入れてください。別の箱に入れると組み合わせが分からなくなります。' },
];

const movingGuide = [
  { title: '引越し1ヶ月前：査定の依頼', description: 'まず一括査定で買取価格を確認します。引越し日に間に合うよう、1ヶ月前には手続きを始めることをおすすめします。' },
  { title: '引越し2週間前：宅配キット受け取り・梱包', description: '宅配買取の場合、梱包キットの到着に数日かかります。余裕を持って手配し、空いた時間で梱包します。' },
  { title: '引越し1週間前：発送または出張買取', description: '宅配便で発送するか、買取ウリエルの出張買取を依頼します。出張買取なら即日現金化で引越し費用に充てられます。' },
  { title: '買取不可のもののリサイクル', description: '買取対象外のゲームは、自治体のリサイクルや不用品回収をご利用ください。ゲーム機は小型家電リサイクルの対象です。' },
];

const faqs = [
  { q: 'まとめ売りは何本から対象ですか？', a: 'サービスにより異なりますが、一般的に5〜10本以上からまとめ売りボーナスが適用されます。ティファナでは5点以上から送料無料になります。ヒカカク！で各業者のボーナス条件を比較することをおすすめします。' },
  { q: 'ゲーム以外のものもまとめて売れますか？', a: 'はい、ティファナではゲーム・トレカ・フィギュア・DVDなどをまとめて売ることができます。買取ウリエルでも幅広いジャンルの出張買取に対応しています。' },
  { q: 'まとめ売りのボーナスはどのくらいですか？', a: '業者により異なりますが、10〜30%のボーナスがつくケースがあります。例えば10本で10%ボーナスなら、合計の買取金額が10,000円の場合、11,000円になります。' },
  { q: '古いソフトと新しいソフトを混ぜて売れますか？', a: 'はい、問題ありません。PS4ソフトとSwitchソフト、レトロゲームなど異なるハードのソフトを一緒に売ることができます。' },
  { q: '値段がつかないソフトがあった場合はどうなりますか？', a: '多くの業者ではまとめ売りの場合、値段がつかないソフトも一緒に引き取ってくれます。返送を希望する場合は、事前にご確認ください（返送料は自己負担となる場合があります）。' },
  { q: '段ボールは自分で用意する必要がありますか？', a: '宅配買取の場合、梱包キット（段ボール・緩衝材）を無料で提供するサービスが多くあります。ご自身で用意する場合は、スーパーやドラッグストアで入手できる段ボールでも問題ありません。' },
];

export default function BulkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲームまとめ売りガイド｜大量買取のメリットとコツ【2026年】", "datePublished": "2026-03-15", "dateModified": "2026-10-22", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: 'まとめ売り' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲーム まとめ売りガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲーム機・ソフトのまとめ売りのメリット5つ、3社のまとめ売りボーナス比較、梱包方法、引越し時の大量処分の手順について解説します。
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />大量発送時の梱包方法</h2>
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
            まとめ売りによる<span style={{ color: 'var(--color-electric-green)' }}>買取金額の上乗せ</span>
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            遊ばなくなったゲームは、まとめて売ることで効率よく現金化できます。
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
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なしでも売れるかを解説</p>
            </Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
