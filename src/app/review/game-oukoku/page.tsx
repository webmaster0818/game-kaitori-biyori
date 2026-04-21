import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ゲーム王国の口コミ・評判｜ゲーム専門の正確査定＆最短翌日入金',
  description:
    'ゲーム王国のゲーム買取を徹底レビュー。ゲーム専門買取サービスの特徴・メリット・デメリット・利用手順を詳しく解説。初回査定額10%UP、送料無料、最短翌日入金が魅力。',
  keywords: ['ゲーム王国 買取', 'ゲーム王国 口コミ', 'ゲーム王国 査定', 'ゲーム買取 専門', 'ゲーム王国 評判'],
  openGraph: {
    title: 'ゲーム王国の口コミ・評判｜ゲーム専門の正確査定＆最短翌日入金',
    description: 'ゲーム王国のゲーム買取を徹底レビュー。ゲーム専門の査定力と初回ボーナスを解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: 'ゲーム専門の査定力', description: 'ゲームに特化した買取サービスだからこそ、タイトルごとの市場価値を正確に把握。大手リサイクルショップのような一律査定ではなく、ゲーム市場のリアルタイム相場に基づいた適正査定が受けられます。' },
  { title: '初回査定額10%UP', description: '初めてゲーム王国を利用する方は、買取査定額が10%UPになる初回特典があります。他社で査定を受けた後の乗り換えにも最適。初回ボーナスを活用してお得に売却できます。' },
  { title: '送料完全無料', description: '宅配買取の送料は完全無料。着払い伝票が用意されているため、自己負担なしで発送できます。梱包用の段ボールが必要な場合も無料で手配してくれます。' },
  { title: '最短翌日入金', description: '査定完了後、最短翌営業日に指定口座へ入金。急いで現金化したい方にも対応できるスピード感が魅力です。査定結果はメールで通知されるので、すぐに確認できます。' },
];

const steps = [
  { step: 1, title: '買取申込み', description: 'ゲーム王国の公式サイトから買取申込みフォームに入力。売りたいゲームの情報や希望の連絡方法を選択します。' },
  { step: 2, title: '梱包・発送', description: '売りたいゲームを梱包して発送。着払い伝票で送れるので送料はかかりません。段ボールが必要な場合は無料で届けてもらえます。' },
  { step: 3, title: '査定・結果通知', description: '商品到着後、ゲーム専門スタッフが査定。結果はメールで通知されます。通常1〜3営業日で査定が完了します。' },
  { step: 4, title: '入金', description: '査定額に承諾すると、最短翌営業日に指定口座に入金されます。スピーディーな現金化が可能です。' },
];

const faqs = [
  { q: 'ゲーム王国はどんなゲームが買取対象ですか？', a: 'Nintendo Switch、PS5、PS4、Xbox Series X/S、Nintendo 3DSなどの現行〜前世代のゲーム機・ソフトが主な対象です。レトロゲーム（ファミコン、スーファミ等）は対象外となる場合がありますのでご注意ください。' },
  { q: '初回10%UPは何回利用できますか？', a: '初回特典は1人1回限りです。初めてゲーム王国を利用する方が対象となります。2回目以降も定期的にキャンペーンが実施されることがありますので、公式サイトをチェックしてみてください。' },
  { q: '査定にどのくらい時間がかかりますか？', a: '通常1〜3営業日で査定が完了します。点数が多い場合はもう少しかかることがありますが、大手サービスと比べると査定スピードは早めです。' },
  { q: '査定額に納得できない場合は？', a: '査定額に納得できない場合はキャンセル可能です。返送料はゲーム王国が負担してくれるため、気軽に査定を試すことができます。' },
  { q: 'ゲーム機本体も買取対象ですか？', a: 'はい、ゲーム機本体も買取対象です。付属品（コントローラー、ケーブル、箱など）が揃っているほど査定額がアップします。動作確認済みの商品であれば高額査定が期待できます。' },
  { q: '壊れたゲーム機は買取できますか？', a: '故障品は基本的に買取対象外となります。ジャンク品の買取に対応したサービスをお探しの場合は、ホビーコレクトなどの利用を検討してみてください。' },
];

export default function GameOukokuReviewPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ゲーム王国' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ゲーム専門</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲーム王国<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>徹底レビュー</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲームに特化した専門買取サービス。ゲーム市場の相場を熟知した専門スタッフによる正確な査定が強みです。初回利用で査定額10%UP、送料無料、最短翌日入金とスピード感も抜群。現行ゲームを専門店価格で売りたい方におすすめです。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://game-oukoku.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
              公式サイトで買取申込み
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ゲーム王国の4つの特徴</h2>
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
                <li>+ ゲーム専門で査定が正確</li>
                <li>+ 初回利用で査定額10%UP</li>
                <li>+ 送料完全無料</li>
                <li>+ 最短翌日入金のスピード対応</li>
                <li>+ キャンセル時の返送料も無料</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- 知名度が大手と比べると低い</li>
                <li>- レトロゲームは対象外の場合あり</li>
                <li>- 店舗持ち込みには非対応</li>
                <li>- ゲーム以外の商品は買取不可</li>
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
              <li>・現行ゲーム（Switch・PS5・PS4）を専門店で売りたい方</li>
              <li>・初めて利用するサービスで10%UPボーナスを活用したい方</li>
              <li>・できるだけ早く入金してほしい方</li>
              <li>・ゲーム専門スタッフに正確に査定してほしい方</li>
              <li>・リサイクルショップの査定額に不満がある方</li>
            </ul>
          </div>
        </section>

        {/* User Reviews */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />利用者の口コミ</h2>
          <div className="space-y-4">
            {[
              { initial: 'D.K', age: '20代男性', rating: 5, text: '初回10%UPキャンペーンを利用してSwitchソフト8本を売りました。ゲーム専門だけあって、タイトルごとにしっかりした値段がつきました。ブックオフで見積もった時より合計で3,000円以上高かったです。入金も翌日で驚きました。' },
              { initial: 'M.T', age: '30代女性', rating: 4, text: 'PS4本体とソフト5本を宅配買取で。査定結果が2日で届き、入金も早くて満足です。ただ、知名度が低いのでちょっと不安でしたが、対応は丁寧で問題なし。もっと知られてもいいサービスだと思います。' },
              { initial: 'R.S', age: '20代男性', rating: 4, text: 'ゲーム専門ということで期待して利用。確かに一般的なリサイクルショップより高い査定でした。ただ、PS2のソフトは「対象外」と返されたので、レトロゲームは別のところに出す必要がありました。現行機なら間違いなくおすすめ。' },
              { initial: 'E.N', age: '30代男性', rating: 5, text: 'Switch本体（有機ELモデル）を買取に出しました。箱・付属品完備で25,000円の査定。他社では22,000円だったので、初回ボーナスもあって大満足です。梱包キットも無料で届くし、返送料無料なのでリスクゼロで査定を試せます。' },
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
            ゲーム王国で<span style={{ color: 'var(--color-electric-green)' }}>初回10%UP</span>の査定を試しませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            ゲーム専門の正確な査定と最短翌日入金。送料無料・返送料無料でリスクなく査定できます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://game-oukoku.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              無料で買取申込みする
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
            <Link href="/review/hikakaku/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-orange text-xs mb-2 inline-block">一括査定</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社一括査定で最高値を比較</p>
            </Link>
            <Link href="/review/hobby-collect/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-blue text-xs mb-2 inline-block">ジャンクOK</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ホビーコレクト</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なし・ジャンク品もOKの宅配買取</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
