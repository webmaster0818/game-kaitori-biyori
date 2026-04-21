import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'カイトリワールドの口コミ・評判｜フィギュア・ホビー総合買取',
  description:
    'カイトリワールドのゲーム買取を徹底レビュー。ゲーム＋フィギュア・プラモデルの総合買取サービスの特徴・メリット・デメリット・利用手順を詳しく解説。最短即日入金、送料無料、梱包キット無料。',
  keywords: ['カイトリワールド 買取', 'カイトリワールド 口コミ', 'フィギュア ゲーム 買取', 'ホビー 買取', 'カイトリワールド 評判'],
  openGraph: {
    title: 'カイトリワールドの口コミ・評判｜フィギュア・ホビー総合買取',
    description: 'カイトリワールドのゲーム買取を徹底レビュー。ホビー総合買取の特徴を解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: 'ゲーム＋フィギュア・プラモまとめ買取', description: 'ゲームだけでなく、フィギュア・プラモデル・ミニカー・ドール・鉄道模型などホビー系全般を一括で買取。ゲームとコレクションをまとめて整理したい方にぴったりのサービスです。' },
  { title: '最短即日入金', description: '査定完了後、最短で即日入金に対応。急いで現金化したい方にも安心のスピード感です。銀行口座への振込で手数料はカイトリワールドが負担します。' },
  { title: '送料完全無料', description: '宅配買取の送料は完全無料。着払い伝票が用意されているため、発送にかかる費用は一切ありません。全国どこからでも利用できます。' },
  { title: '事前見積もりで安心', description: '公式サイトから事前見積もりを依頼できます。商品の写真や情報を送ると、おおよその買取金額を教えてもらえるため、納得してから発送できます。' },
];

const steps = [
  { step: 1, title: '事前見積もり・買取申込み', description: '公式サイトのフォームから事前見積もりまたは買取申込み。売りたい商品の写真や情報を入力すると、スムーズに査定が進みます。' },
  { step: 2, title: '梱包・発送', description: '梱包キットが必要な場合は無料で届きます。商品を丁寧に梱包し、着払いで発送。フィギュアは特に緩衝材でしっかり保護しましょう。' },
  { step: 3, title: '査定', description: '到着後、専門スタッフが1点ずつ査定。ゲームとホビー商品それぞれの市場価値に基づいた適正な価格が提示されます。' },
  { step: 4, title: '入金', description: '査定額に同意すれば、最短即日で指定口座に入金。振込手数料は無料です。' },
];

const faqs = [
  { q: 'カイトリワールドで買取できるホビー商品は？', a: 'フィギュア（美少女フィギュア、アクションフィギュア等）、プラモデル、ミニカー、ドール、鉄道模型、超合金、特撮グッズなど、幅広いホビー商品が対象です。ゲームと一緒にまとめて送ることができます。' },
  { q: '入金はどのくらいで届きますか？', a: '査定完了後、最短即日で入金されます。通常は査定完了から1〜2営業日程度です。商品到着から査定完了までは通常2〜5営業日かかります。' },
  { q: '梱包キットは無料ですか？', a: 'はい、段ボールや緩衝材などの梱包キットは無料で届けてもらえます。買取申込み時にキットの希望を選択してください。' },
  { q: 'フィギュアの箱なしでも買取できますか？', a: '箱なしでも買取可能ですが、フィギュアは箱の有無で査定額が大きく変わります。箱あり・未開封品であれば高額査定が期待できます。' },
  { q: '査定額に納得できない場合は？', a: 'キャンセル可能です。返送をご希望の場合、返送料はお客様負担となりますのでご注意ください。事前見積もりを活用して、発送前におおよその金額を確認しておくことをおすすめします。' },
  { q: '店舗での買取はできますか？', a: 'カイトリワールドは宅配買取専門のサービスです。店舗持ち込みには対応していません。全国どこからでも宅配で利用できます。' },
];

export default function KaitoriWorldReviewPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'カイトリワールド' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ホビー総合</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            カイトリワールド<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>徹底レビュー</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲームとフィギュア・プラモデルなどのホビー商品をまとめて買取できる総合サービス。最短即日入金のスピード感と、送料・梱包キット無料の手軽さが魅力です。ゲームとコレクションを一度に整理したい方におすすめです。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://kaitori-world.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
              公式サイトで見積もり依頼
            </a>
            <Link href="/" className="btn-outline py-2.5 px-6" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}>
              ランキングに戻る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Features */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />カイトリワールドの4つの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pros/Cons */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />メリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-electric-green)' }}>メリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>+ ゲームとフィギュア・ホビーをまとめて売れる</li>
                <li>+ 最短即日入金のスピード対応</li>
                <li>+ 送料完全無料</li>
                <li>+ 梱包キット（段ボール・緩衝材）無料</li>
                <li>+ 事前見積もりで安心</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- ゲーム専門ではないため、ゲーム査定は平均的</li>
                <li>- 店舗持ち込みは非対応</li>
                <li>- キャンセル時の返送料は自己負担</li>
                <li>- 知名度がまだ低い</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />利用手順（4ステップ）</h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>
                  {String(s.step).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{s.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />こんな方におすすめ</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・ゲームとフィギュアをまとめて売りたい方</li>
              <li>・プラモデルや鉄道模型なども一緒に処分したい方</li>
              <li>・できるだけ早く入金してほしい方</li>
              <li>・事前に見積もりを確認してから売りたい方</li>
              <li>・全国から宅配で手軽に買取を利用したい方</li>
            </ul>
          </div>
        </section>

        {/* User Reviews */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />利用者の口コミ</h2>
          <div className="space-y-4">
            {[
              { initial: 'H.S', age: '30代男性', rating: 4, text: 'Switchソフト10本とワンピースのフィギュア8体をまとめて買取に出しました。ゲームとフィギュアを別々の業者に送る手間が省けて便利。査定額はゲーム部分は普通でしたが、フィギュアは予想以上に高くて合計で嬉しい金額になりました。' },
              { initial: 'N.K', age: '20代男性', rating: 5, text: '引っ越し前にゲーム機2台、ソフト20本、プラモデル15個を一気に処分。全部まとめて段ボール3箱で送れました。査定完了の翌日には入金されていて驚きました。梱包キットも無料で届いたので自分で用意する手間もなし。' },
              { initial: 'M.W', age: '40代女性', rating: 3, text: 'ゲームソフトだけの査定額で言うと、ゲーム専門店には及ばない印象です。ただ、子どものフィギュアコレクションも一緒に売れたのは大きなメリット。トータルで考えるとまとめて売れる便利さは評価できます。' },
              { initial: 'J.T', age: '30代男性', rating: 4, text: '事前見積もりで大体の金額を把握してから送りました。実際の査定額は見積もりとほぼ同じ。安心感があります。ただ、キャンセルする場合は返送料がかかるので、事前見積もりは必ず利用した方がいいです。' },
            ].map((review, i) => (
              <div key={i} className="glass-card p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(16,185,129,0.12)', color: '#059669' }}>
                    {review.initial}
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: 'var(--color-deep-blue)' }}>{review.initial}さん<span className="font-normal text-xs ml-2" style={{ color: 'var(--color-text-light)' }}>{review.age}</span></p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <span key={s} className="text-sm" style={{ color: s < review.rating ? '#F59E0B' : '#E2E8F0' }}>&#9733;</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{review.text}</p>
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
            カイトリワールドで<span style={{ color: 'var(--color-electric-green)' }}>ゲーム＋ホビー</span>をまとめて売りませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            ゲームとフィギュア・プラモを一括買取。送料無料・梱包キット無料で手軽に利用できます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://kaitori-world.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              無料で見積もり依頼する
            </a>
            <Link href="/" className="btn-outline py-3 px-8" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#CBD5E1' }}>
              他のサービスと比較
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のサービスもチェック</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/review/hobby-collect/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-orange text-xs mb-2 inline-block">ジャンクOK</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ホビーコレクト</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なし・ジャンク品もOKの宅配買取</p>
            </Link>
            <Link href="/review/surugaya/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-blue text-xs mb-2 inline-block">レトロ専門</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>駿河屋</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>レトロゲーム・限定版に強い老舗</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
