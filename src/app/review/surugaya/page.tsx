import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '駿河屋の口コミ・評判｜レトロゲーム・限定版に強い老舗買取',
  description:
    '駿河屋のゲーム買取を徹底レビュー。レトロゲーム・限定版・コレクターアイテムに強い老舗の特徴・メリット・デメリット・利用手順を詳しく解説。買取価格公開で安心の査定。',
  keywords: ['駿河屋 買取', '駿河屋 口コミ', '駿河屋 ゲーム買取', 'レトロゲーム 買取', '駿河屋 査定'],
  openGraph: {
    title: '駿河屋の口コミ・評判｜レトロゲーム・限定版に強い老舗買取',
    description: '駿河屋のゲーム買取を徹底レビュー。レトロゲーム高額査定の老舗サービスを解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: 'レトロゲーム高額査定', description: 'ファミコン・スーパーファミコン・セガサターン・PCエンジンなど、レトロゲームの査定力は業界トップクラス。一般のリサイクルショップでは値段がつかないタイトルにも、コレクター市場を熟知した適正価格を提示してくれます。' },
  { title: 'コレクターアイテム専門知識', description: '限定版、初回特典付き、未開封品、希少品など、コレクター価値のあるアイテムの査定に精通。箱・説明書の状態まで細かく評価してくれるため、保管状態の良いアイテムほど高値がつきます。' },
  { title: '買取価格がサイトで公開', description: '駿河屋の公式サイトでは多くの商品の買取価格が事前に公開されています。送る前におおよその金額がわかるため、他社との比較や売り時の判断がしやすい透明性の高いサービスです。' },
  { title: '通販サイト併設で相場に精通', description: '駿河屋は中古ゲームの通販サイトも運営しており、リアルタイムの市場相場を把握しています。販売価格に基づいた買取価格設定のため、相場に見合った適正な査定が期待できます。' },
];

const steps = [
  { step: 1, title: '買取申込み', description: '駿河屋公式サイトの「かんたん買取」から申込み。売りたい商品のジャンルや点数を入力します。事前に買取価格を検索して確認することもできます。' },
  { step: 2, title: '梱包・発送', description: '商品を丁寧に梱包して発送します。送料は買取点数や金額の条件を満たせば無料。レトロゲームは特に緩衝材でしっかり保護して送りましょう。' },
  { step: 3, title: '査定', description: '到着後、専門スタッフが1点ずつ丁寧に査定。レトロゲームや希少品は特に時間をかけて評価されます。査定完了までは通常2〜3週間程度かかります。' },
  { step: 4, title: '入金', description: '査定結果に同意したら、銀行口座への振込で入金。査定結果はマイページで商品ごとの内訳を確認できます。' },
];

const faqs = [
  { q: '駿河屋の査定にはどのくらい時間がかかりますか？', a: '通常2〜3週間程度です。繁忙期（年末年始・大型連休前後）はさらに時間がかかることがあります。査定を急ぐ方は「スピード買取」オプション（買取価格が通常より低め）もあります。' },
  { q: 'レトロゲームの箱なし・説明書なしでも買取できますか？', a: 'はい、ソフト単体でも買取可能です。ただし、箱・説明書付きの完品と比べると査定額は大幅に下がります。特にレトロゲームは完品かどうかで10倍以上の差がつくこともあります。' },
  { q: '買取価格の事前確認はどこでできますか？', a: '駿河屋公式サイトの「買取検索」から商品名やJANコードで検索できます。ただし表示価格は「完品・美品」の場合の上限価格であり、実際の査定では状態に応じて変動します。' },
  { q: '送料は無料ですか？', a: '買取点数30点以上または見積もり金額3,000円以上の場合、送料無料となります。条件を満たさない場合は送料がお客様負担となりますのでご注意ください。' },
  { q: '店舗での買取はできますか？', a: 'はい、静岡市内に複数の店舗があり、店頭買取にも対応しています。ただし全国展開はしていないため、ほとんどの方は宅配買取の利用となります。' },
  { q: '現行のSwitchやPS5のソフトも高く売れますか？', a: '現行タイトルも買取対象ですが、駿河屋の強みはレトロゲームや希少品の査定です。現行タイトルの買取価格は他の大手サービスと同等程度か、やや控えめなことが多いです。' },
];

export default function SurugayaReviewPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: '駿河屋' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>レトロゲーム専門</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            駿河屋<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>徹底レビュー</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            レトロゲーム・限定版・コレクターアイテムの買取に強い老舗サービス。ファミコンからセガサターンまで、一般的なリサイクルショップでは評価されにくい希少タイトルを適正価格で査定してくれます。買取価格が公開されている透明性も魅力です。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.suruga-ya.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
              公式サイトで買取価格を確認
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />駿河屋の4つの特徴</h2>
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
                <li>+ レトロゲームの査定力が業界トップクラス</li>
                <li>+ 限定版・希少品・コレクターアイテムに強い</li>
                <li>+ 買取価格がサイトで事前に確認できる</li>
                <li>+ 通販併設で相場に精通した適正査定</li>
                <li>+ 商品ごとの査定内訳が確認可能</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- 査定に時間がかかる（通常2〜3週間）</li>
                <li>- 一般的な現行タイトルの査定は平均的</li>
                <li>- 店舗買取は静岡のみ</li>
                <li>- 少量だと送料がかかる場合あり</li>
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
              <li>・レトロゲーム（ファミコン・スーファミ・セガサターン等）を売りたい方</li>
              <li>・限定版や初回特典付きのゲームを持っている方</li>
              <li>・コレクションを手放すことを検討しているコレクターの方</li>
              <li>・事前に買取価格を確認してから売りたい方</li>
              <li>・希少品を適正価格で評価してほしい方</li>
            </ul>
          </div>
        </section>

        {/* User Reviews */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />利用者の口コミ</h2>
          <div className="space-y-4">
            {[
              { initial: 'N.T', age: '40代男性', rating: 5, text: 'ファミコンソフト50本とスーパーファミコンソフト30本を買取に出しました。一般のリサイクルショップでは全部で3,000円と言われたものが、駿河屋では合計42,000円に。レアタイトルの価値をしっかり理解してくれる唯一の存在だと思います。' },
              { initial: 'K.M', age: '30代男性', rating: 4, text: 'PCエンジンのソフトを中心に20本ほど送りました。事前にサイトで買取価格を確認してから送ったので、ほぼ想定通りの金額でした。ただ査定完了まで3週間かかったのが少しストレスでした。急ぎでなければ問題ないです。' },
              { initial: 'S.H', age: '50代男性', rating: 5, text: '30年以上大切にしてきたゲームコレクションの一部を整理。限定版の箱・説明書付き完品はかなりの高額査定がつきました。商品ごとの内訳も確認でき、納得感がありました。コレクターなら駿河屋一択です。' },
              { initial: 'Y.A', age: '20代女性', rating: 3, text: 'Switchのソフト10本を売りましたが、駿河屋では現行タイトルの査定は普通でした。レトロゲーム向けのサービスなので、最新ゲームだけなら他のサービスの方が良いかもしれません。査定に時間がかかるのもマイナスポイント。' },
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
            駿河屋で<span style={{ color: 'var(--color-electric-green)' }}>レトロゲームを高額査定</span>しませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            一般のリサイクルショップでは評価されない希少タイトルも、駿河屋なら適正価格で買取。まずは買取価格をチェック。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.suruga-ya.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              買取価格を確認する
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
