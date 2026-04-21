import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ゲオ宅配買取の口コミ・評判｜まとめ売りで最大35%UP',
  description:
    'ゲオ宅配買取のゲーム買取を徹底レビュー。まとめ売りで最大35%UPの大手チェーン宅配買取サービスの特徴・メリット・デメリット・利用手順を詳しく解説。Pontaポイント連携や無料宅配キットも魅力。',
  keywords: ['ゲオ 買取', 'ゲオ宅配買取 口コミ', 'ゲオ ゲーム買取', 'ゲーム まとめ売り', 'ゲオ 査定'],
  openGraph: {
    title: 'ゲオ宅配買取の口コミ・評判｜まとめ売りで最大35%UP',
    description: 'ゲオ宅配買取のゲーム買取を徹底レビュー。まとめ売りボーナスや宅配キット無料の特徴を解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: 'まとめ売りで最大35%UP', description: 'ゲームソフトやゲーム機をまとめて売ると買取価格が最大35%アップ。不要なゲームをまとめて整理するほどお得になる仕組みです。キャンペーン時期によってはさらにボーナスが付くことも。' },
  { title: '全国900店舗グループの安心感', description: '全国に約900店舗を展開するゲオグループが運営。大手ならではの安定した査定基準と、万が一のトラブル時も安心のサポート体制が整っています。' },
  { title: '段ボール・送料無料', description: '宅配買取に必要な段ボールは無料で届けてくれます。もちろん送料も無料。自宅にいながら梱包して集荷を依頼するだけで買取が完了します。' },
  { title: 'Pontaポイント連携', description: '買取金額に応じてPontaポイントが貯まります。現金での受取りはもちろん、Pontaポイントでの受取りを選べばローソンやシェルなど提携先で幅広く利用可能です。' },
];

const steps = [
  { step: 1, title: 'Web申込み', description: 'ゲオ宅配買取の公式サイトから買取申込みフォームに必要事項を入力します。会員登録がまだの方は同時に登録も可能です。' },
  { step: 2, title: '梱包・集荷', description: '無料の宅配キット（段ボール）が届いたら、売りたいゲームを梱包。集荷日を指定すれば自宅まで取りに来てくれます。' },
  { step: 3, title: '査定', description: 'ゲオの査定センターに届き次第、専門スタッフが査定を行います。査定結果はメールで通知されます。' },
  { step: 4, title: '入金', description: '査定額に同意すると、指定の銀行口座に振込またはPontaポイントで受取り。最短2営業日で入金されます。' },
];

const faqs = [
  { q: 'ゲオ宅配買取の送料はかかりますか？', a: 'いいえ、送料は無料です。段ボールなどの宅配キットも無料で届けてもらえます。着払い伝票も同梱されているので、自己負担は一切ありません。' },
  { q: 'まとめ売りボーナスの条件は？', a: '買取点数に応じてボーナスが加算されます。例えばゲームソフト5点以上で10%UP、10点以上で20%UP、20点以上で最大35%UPなど。キャンペーン内容は時期によって変動しますので公式サイトで最新情報をご確認ください。' },
  { q: '査定にどのくらい時間がかかりますか？', a: '商品到着後、通常2〜5営業日で査定結果がメールで届きます。繁忙期（年末年始・引っ越しシーズン）はもう少しかかる場合があります。' },
  { q: 'レトロゲームも買い取ってもらえますか？', a: 'ゲオ宅配買取ではPS3・Wii世代以降のゲームが主な対象です。ファミコンやスーパーファミコンなどのレトロゲームは買取対象外となる場合があります。レトロゲームは専門店への査定がおすすめです。' },
  { q: '買取金額の受取り方法は？', a: '銀行口座への振込またはPontaポイントでの受取りを選べます。Pontaポイントの場合は振込手数料がかからないメリットがあります。' },
  { q: '査定額に納得できない場合は？', a: '査定額に納得できない場合はキャンセル可能です。ただし返送料はお客様負担となる場合がありますので、事前に確認しておきましょう。' },
];

export default function GeoReviewPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ゲオ宅配買取' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>大手チェーン</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲオ宅配買取<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>徹底レビュー</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            全国約900店舗を展開するゲオグループの宅配買取サービス。まとめ売りで最大35%UPのボーナスが魅力で、段ボール無料・送料無料と手軽に利用できます。Pontaポイント連携で日常使いにも便利な大手ならではの安心サービスです。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://geo-online.co.jp/kaitori/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ゲオ宅配買取の4つの特徴</h2>
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
                <li>+ 大手チェーンの安心感・信頼性</li>
                <li>+ まとめ売りボーナスが最大35%と大きい</li>
                <li>+ 宅配キット（段ボール）が無料</li>
                <li>+ 送料完全無料</li>
                <li>+ Pontaポイントで受取り可能</li>
                <li>+ 店舗持ち込みも選べる</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- 査定額が専門店より低めになりがち</li>
                <li>- レトロゲームの個別査定は弱い</li>
                <li>- 繁忙期は査定に時間がかかる</li>
                <li>- キャンセル時の返送料が自己負担の場合あり</li>
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
              <li>・ゲームソフトをまとめて売りたい方</li>
              <li>・大手の安心感を重視する方</li>
              <li>・Pontaポイントを貯めている・使いたい方</li>
              <li>・自宅から手軽に宅配買取を利用したい方</li>
              <li>・近くにゲオ店舗があり、店舗持ち込みも検討している方</li>
            </ul>
          </div>
        </section>

        {/* User Reviews */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />利用者の口コミ</h2>
          <div className="space-y-4">
            {[
              { initial: 'K.T', age: '20代男性', rating: 4, text: 'Switchソフト12本をまとめて宅配買取に出しました。まとめ売りボーナスで20%UPになり、合計で12,000円に。段ボールも無料で届くし、集荷も自宅に来てくれるので楽でした。ただ、個別の査定額を見ると専門店より少し安いかなという印象。' },
              { initial: 'S.M', age: '30代女性', rating: 5, text: '引っ越し前にPS4本体とソフト8本を売りました。Pontaポイントで受取りを選んだら手数料がかからず、全額ポイントで受取れました。ローソンでの買い物に使えて便利です。申込みからすべてスマホで完結したのも良かったです。' },
              { initial: 'H.Y', age: '40代男性', rating: 3, text: 'ゲーム機2台とソフト20本をまとめて出しました。35%UPボーナスが付いたのは嬉しかったですが、レトロゲーム（PS2ソフト）は値段がほとんどつかず。現行機のソフトなら問題ないですが、古いゲームは他で売った方がいいかもしれません。' },
              { initial: 'R.N', age: '20代女性', rating: 4, text: '初めての宅配買取で不安でしたが、大手のゲオなので安心して利用できました。査定結果も3日で届いて思ったより早かったです。金額は可もなく不可もなくですが、手軽さを考えたら十分満足です。' },
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
            ゲオ宅配買取で<span style={{ color: 'var(--color-electric-green)' }}>まとめ売りボーナス</span>を活用しませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            不要なゲームをまとめて売るほどお得に。段ボール無料・送料無料で自宅から簡単に買取申込みできます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://geo-online.co.jp/kaitori/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
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
            <Link href="/review/bookoff/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-orange text-xs mb-2 inline-block">大手</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ブックオフ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>全国900店舗超・店頭即現金化</p>
            </Link>
            <Link href="/review/netoff/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-blue text-xs mb-2 inline-block">まとめ売り</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ネットオフ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ゲーム・本・DVD一括買取</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
