import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ホビーコレクトの口コミ・評判｜箱なし・ジャンクOKの宅配買取',
  description:
    'ホビーコレクトのゲーム買取を徹底レビュー。箱なし・ジャンク品もOKの宅配買取サービスの特徴・メリット・デメリット・利用手順を詳しく解説。事前査定で安心、送料無料、最短3日入金。',
  keywords: ['ホビーコレクト 買取', 'ホビーコレクト 口コミ', 'ゲーム ジャンク 買取', '箱なし ゲーム買取', 'ホビーコレクト 評判'],
  openGraph: {
    title: 'ホビーコレクトの口コミ・評判｜箱なし・ジャンクOKの宅配買取',
    description: 'ホビーコレクトのゲーム買取を徹底レビュー。箱なし・ジャンクOKの特徴を解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: '箱なし・ジャンク品もOK', description: '箱や説明書がなくても買取OK。さらに壊れたゲーム機（電源が入らない、画面割れなど）も買取対象です。他社で断られた商品でも、ホビーコレクトなら値段がつく可能性があります。' },
  { title: '事前査定で安心', description: '商品を送る前にWebフォームや電話で事前査定が受けられます。おおよその買取金額がわかってから発送できるので、「送ったのに査定額が低すぎた」という不満を防げます。' },
  { title: '送料完全無料', description: '宅配買取の送料は完全無料。着払い伝票を使って発送するだけなので、費用の心配は一切ありません。梱包用の段ボールも無料で手配できます。' },
  { title: '最短3日で入金', description: '商品到着後、最短3営業日で査定が完了し入金されます。スピーディーな対応で、不用品を早く現金化したい方にも好評です。' },
];

const steps = [
  { step: 1, title: '事前査定（任意）', description: '公式サイトのフォームまたは電話で事前査定を依頼。商品名・状態・付属品の情報を伝えると、おおよその買取金額を教えてもらえます。' },
  { step: 2, title: '買取申込み・梱包', description: '公式サイトから買取を申込み、売りたいゲームを段ボールに梱包します。段ボールが必要な場合は無料で届けてもらえます。' },
  { step: 3, title: '発送・査定', description: '着払いで発送。到着後、専門スタッフが査定を行い、結果をメールまたは電話で通知します。' },
  { step: 4, title: '入金', description: '査定額に同意すれば、最短3営業日で指定口座に入金。スピーディーに現金化できます。' },
];

const faqs = [
  { q: 'どのくらい壊れていても買取してもらえますか？', a: '電源が入らない、画面が割れている、ディスクの読み込みができないなど、多くの故障品が買取対象です。ただし、水没や著しい破損（パーツの大部分が欠損）の場合は買取不可となることもあります。まずは事前査定でご確認ください。' },
  { q: '箱なしだとどのくらい査定額が下がりますか？', a: '商品によって異なりますが、箱・説明書なしの場合、完品と比べて20〜50%程度査定額が下がることが一般的です。ただし、ホビーコレクトは箱なしでも買取してくれる点が他社との大きな違いです。' },
  { q: '事前査定と実際の査定額は同じですか？', a: '事前査定はあくまで概算です。実際の商品を確認した際に、状態が事前の説明と異なる場合は査定額が変動することがあります。ただし大きく乖離することは少ないです。' },
  { q: 'ゲーム以外のホビー商品も買取対象ですか？', a: 'はい、フィギュア・プラモデル・トレーディングカード・鉄道模型なども買取対象です。ゲームとホビー商品をまとめて送ることもできます。' },
  { q: '査定に納得できない場合は？', a: 'キャンセル可能です。返送料は無料なので、査定額に納得できなければそのまま返送してもらえます。リスクなく査定を試せます。' },
  { q: '入金方法は選べますか？', a: '銀行口座への振込が基本です。振込手数料はホビーコレクトが負担してくれるため、査定額がそのまま受取り金額となります。' },
];

export default function HobbyCollectReviewPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ホビーコレクト' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ジャンクOK</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ホビーコレクト<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>徹底レビュー</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            箱なし・説明書なし・ジャンク品でも買取OKの宅配買取サービス。壊れたゲーム機も査定対象で、他社で断られた商品にも値段がつく可能性があります。事前査定で金額を確認してから送れる安心感と、最短3日の入金スピードが魅力です。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://hobby-collect.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
              公式サイトで事前査定
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ホビーコレクトの4つの特徴</h2>
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
                <li>+ 箱なし・説明書なしでも買取OK</li>
                <li>+ 壊れたゲーム機（ジャンク品）もOK</li>
                <li>+ 事前査定で金額を確認してから発送できる</li>
                <li>+ 送料・返送料ともに無料</li>
                <li>+ 最短3日で入金のスピード対応</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- 店舗買取は非対応（宅配のみ）</li>
                <li>- 現行機以外のソフトは査定額が低め</li>
                <li>- ジャンク品の査定額はかなり安い場合も</li>
                <li>- 知名度が大手に比べると低い</li>
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
              <li>・箱や説明書がないゲームを売りたい方</li>
              <li>・壊れたゲーム機を処分したい方</li>
              <li>・他社で買取を断られた商品がある方</li>
              <li>・送る前に査定額を確認したい方</li>
              <li>・フィギュアやプラモデルも一緒に売りたい方</li>
            </ul>
          </div>
        </section>

        {/* User Reviews */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />利用者の口コミ</h2>
          <div className="space-y-4">
            {[
              { initial: 'T.M', age: '30代男性', rating: 4, text: '電源の入らないPS4を他社では断られ続けていましたが、ホビーコレクトでは2,500円の値段がつきました。壊れていても買い取ってくれるのはありがたい。事前査定で「2,000〜3,000円」と言われていたので、ほぼ想定通りでした。' },
              { initial: 'Y.I', age: '20代女性', rating: 5, text: '引っ越しで箱を全部捨ててしまったSwitchソフト15本を買取に。箱なしでも全部値段がつきました。もちろん箱ありより安くなりましたが、捨てるよりずっと良いです。送料も返送料も無料なのが良心的。' },
              { initial: 'K.O', age: '40代男性', rating: 3, text: 'ジャンクのPS3とPSP、ソフト10本を送りました。ジャンク品は1台500円程度とかなり安かったですが、引き取ってもらえるだけ助かります。ソフトの方は普通の査定額でした。ジャンク品の査定額にはあまり期待しない方がいいです。' },
              { initial: 'A.K', age: '30代女性', rating: 4, text: '事前査定ができるのが決め手で利用しました。フォームに商品の写真と状態を入力すると、翌日には査定額の目安が届きました。実際の査定額もほぼ同じで安心。3日で入金されたのもポイント高いです。' },
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
            ホビーコレクトで<span style={{ color: 'var(--color-electric-green)' }}>箱なし・ジャンク品</span>も買取しませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            他社で断られた商品でも買取OK。事前査定で金額を確認してから送れるので安心です。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://hobby-collect.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              無料で事前査定する
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
            <Link href="/review/kaitori-world/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-orange text-xs mb-2 inline-block">ホビー総合</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>カイトリワールド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>フィギュア・ホビー総合買取</p>
            </Link>
            <Link href="/review/game-oukoku/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-blue text-xs mb-2 inline-block">ゲーム専門</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲーム王国</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ゲーム専門の正確な査定</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
