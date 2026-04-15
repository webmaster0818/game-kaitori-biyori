import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ゲーム宅配買取おすすめ3選｜ネット買取の流れ・梱包のコツ【2025年】',
  description:
    'ゲームソフト・本体の宅配買取を徹底解説。ネット買取の流れ4ステップ、梱包のコツ、送料負担の比較、メリット・デメリットからおすすめ3社の比較まで完全ガイド。自宅にいながらゲームを高く売る方法がわかります。',
  keywords: ['ゲーム 宅配買取', 'ゲーム ネット買取', 'ゲーム 宅配 おすすめ', 'ゲーム買取 送料無料', 'ゲーム 郵送買取'],
  openGraph: {
    title: 'ゲーム宅配買取おすすめ3選｜ネット買取の流れ・梱包のコツ【2025年】',
    description: 'ゲームの宅配買取の流れ、梱包のコツ、おすすめ3社を徹底比較。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const steps = [
  { title: 'STEP 1: 申し込み', description: '公式サイトから買取申し込み。氏名・住所・買取希望品を入力します。多くのサービスは24時間365日受付で、深夜でもスマホから申し込めます。' },
  { title: 'STEP 2: 梱包・発送', description: 'ダンボールにゲームソフトや本体を梱包して発送。無料の宅配キットを提供してくれるサービスもあります。集荷依頼をすれば自宅から一歩も出ずにOK。' },
  { title: 'STEP 3: 査定・見積もり', description: '届いた商品を専門スタッフが査定。通常1〜3営業日で査定結果がメールまたはマイページで届きます。商品ごとの明細が確認できるサービスが増えています。' },
  { title: 'STEP 4: 入金', description: '査定額に同意すれば、指定口座に振り込み。最短即日〜3営業日以内に入金されます。査定額に納得できなければキャンセル（返送）も可能です。' },
];

const merits = [
  { title: '自宅から一歩も出なくてOK', description: '集荷サービスを利用すれば、梱包して渡すだけ。店舗まで重いゲーム機を運ぶ必要がありません。' },
  { title: '全国どこでも利用可能', description: '地方在住でも都市部と同じサービスを受けられます。近くに買取店がない方に特におすすめ。' },
  { title: '複数社の比較が簡単', description: 'ヒカカク！のような一括査定サービスを使えば、最大20社の見積もりを同時に取れます。' },
  { title: '大量のゲームもまとめて売れる', description: 'ダンボールに詰めるだけなので、50本・100本単位のソフトも一度に売却できます。' },
  { title: '対面のプレッシャーがない', description: '店舗での対面査定と違い、じっくり査定額を検討してからOK/NGを判断できます。' },
];

const demerits = [
  { title: '現金化まで時間がかかる', description: '発送〜入金まで最短でも2〜3日、通常1週間程度かかります。即日現金化は難しいです。' },
  { title: '梱包の手間がある', description: 'ダンボールの用意、緩衝材の準備、丁寧な梱包が必要。雑な梱包だと輸送中の破損リスクも。' },
  { title: '実物を見せての交渉ができない', description: '店舗買取のように「もう少し上がりませんか？」という直接交渉は基本的にできません。' },
];

const serviceComparison = [
  { name: 'ヒカカク！', shipping: '業者による（多くは無料）', kit: '業者による', speed: '1〜5営業日', cancel: '業者による', point: '最大20社一括査定で最高値を狙える' },
  { name: '買取ウリエル', shipping: '送料無料', kit: '無料キットあり', speed: '1〜3営業日', cancel: '返送無料', point: '宅配のほか出張買取も選べる' },
  { name: 'ティファナ', shipping: '送料無料', kit: '無料キットあり', speed: '1〜3営業日', cancel: '返送無料', point: 'ゲーム以外のホビー品もまとめ売り可' },
];

const packingTips = [
  { title: 'ダンボールのサイズ選び', description: '大きすぎると中で動いて破損リスクが上がります。商品に合ったサイズを選びましょう。100サイズ（3辺合計100cm以内）が目安です。' },
  { title: '緩衝材でしっかり保護', description: 'プチプチ（エアキャップ）や新聞紙で隙間を埋めましょう。特にゲーム機本体は角を重点的に保護。' },
  { title: 'ソフトはまとめてビニール袋に', description: '水濡れ防止のため、ゲームソフトはまとめてビニール袋に入れてからダンボールへ。' },
  { title: '付属品は本体と一緒に梱包', description: 'コントローラー、ケーブル、説明書、外箱は本体とセットで送ると高額査定に。バラバラにならないよう輪ゴムやジップロックで整理。' },
];

const faqs = [
  { q: '宅配買取の送料は自己負担ですか？', a: '多くの買取サービスでは送料無料です。ヒカカク！経由の業者やウリエル、ティファナはいずれも送料無料で利用できます。ただし査定額に納得できずキャンセルする場合、返送料が自己負担になるサービスもあるため事前に確認しましょう。' },
  { q: '宅配キットは無料でもらえますか？', a: 'ウリエルやティファナでは無料の宅配キット（ダンボール・緩衝材・着払い伝票）を提供しています。ヒカカク！経由の業者も多くが無料キットを用意しています。自分でダンボールを用意すれば、より早く発送できます。' },
  { q: '査定額に納得できない場合はどうなりますか？', a: 'キャンセル可能です。ウリエルやティファナでは返送料無料でキャンセルできます。ヒカカク！経由の業者は返送料の扱いが業者ごとに異なるため、申し込み前に確認してください。' },
  { q: '何本から宅配買取を利用できますか？', a: 'ほとんどのサービスで1本から利用可能です。ただし、まとめ売りボーナス（10点以上で査定額UP等）があるサービスも多いため、ある程度まとめて送るほうがお得です。' },
  { q: '宅配買取の査定にはどのくらい時間がかかりますか？', a: '商品到着後、通常1〜3営業日で査定結果が届きます。繁忙期（年末年始・引越しシーズン）は5営業日程度かかる場合もあります。' },
  { q: '壊れたゲーム機でも宅配買取で売れますか？', a: '動作不良のゲーム機でもジャンク品として買取してくれるサービスがあります。ティファナではジャンク品の買取にも対応しています。ただし買取額は大幅に下がるため、事前に査定額を確認してから送ることをおすすめします。' },
];

export default function OnlinePage() {
  return (
    <>
      <Breadcrumb items={[{ name: '売り方', href: '/' }, { name: '宅配買取' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>売り方ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲーム宅配買取 完全ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            自宅から一歩も出ずにゲームを売れる宅配買取。ネット買取の流れ4ステップ、梱包のコツ、送料比較、おすすめ3社の違いまで、初めての方にもわかりやすく解説します。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Steps */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />宅配買取の流れ 4ステップ</h2>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={step.title} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{step.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Merits */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />宅配買取のメリット5つ</h2>
          <div className="space-y-4">
            {merits.map((merit, i) => (
              <div key={merit.title} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{merit.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{merit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Demerits */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />宅配買取のデメリット3つ</h2>
          <div className="space-y-4">
            {demerits.map((demerit, i) => (
              <div key={demerit.title} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: '#F87171', opacity: 0.3 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{demerit.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{demerit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Comparison */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />3社の宅配買取対応比較</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>サービス</th>
                  <th>送料</th>
                  <th>宅配キット</th>
                  <th>査定スピード</th>
                  <th>キャンセル</th>
                  <th>ポイント</th>
                </tr>
              </thead>
              <tbody>
                {serviceComparison.map((s) => (
                  <tr key={s.name}>
                    <td className="font-bold">{s.name}</td>
                    <td>{s.shipping}</td>
                    <td>{s.kit}</td>
                    <td>{s.speed}</td>
                    <td>{s.cancel}</td>
                    <td>{s.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Packing Tips */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />梱包のコツ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {packingTips.map((tip) => (
              <div key={tip.title} className="glass-card p-5">
                <h3 className="font-bold mb-2 text-sm" style={{ color: 'var(--color-deep-blue)' }}>{tip.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{tip.description}</p>
              </div>
            ))}
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
            自宅から<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>でゲームを売ろう
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            宅配買取なら自宅にいながら複数社の査定を比較できます。まずは無料査定から始めましょう。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他の売り方ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/method/shop/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>店舗買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>即日現金化・持ち込み買取ガイド</p>
            </Link>
            <Link href="/method/app/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>フリマアプリ vs 買取業者</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>メルカリと買取業者を徹底比較</p>
            </Link>
            <Link href="/method/high-price/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>高く売るコツ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>買取価格を最大化する10のテクニック</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
