import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ブックオフの口コミ・評判｜全国最大手リサイクルショップのゲーム買取',
  description:
    'ブックオフのゲーム買取を徹底レビュー。全国900店舗超を展開する最大手リサイクルショップの特徴・メリット・デメリット・利用手順を詳しく解説。店頭即現金化や本・DVDとのまとめ売りも可能。',
  keywords: ['ブックオフ 買取', 'ブックオフ ゲーム買取 口コミ', 'ブックオフ 査定', 'ゲーム 店頭買取', 'ブックオフ 評判'],
  openGraph: {
    title: 'ブックオフの口コミ・評判｜全国最大手リサイクルショップのゲーム買取',
    description: 'ブックオフのゲーム買取を徹底レビュー。全国900店舗超の店頭買取と宅配買取を解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: '全国900店舗超の圧倒的ネットワーク', description: '日本全国に900店舗以上を展開。自宅の近くにほぼ確実に店舗があるため、思い立ったらすぐに持ち込み買取が可能です。駅前や商業施設内にも多く出店しています。' },
  { title: '店頭で即日現金化', description: '店舗に持ち込めばその場で査定、その日のうちに現金を受け取れます。急いで現金が必要な方には最大のメリット。混雑時でも通常30分〜1時間程度で査定が完了します。' },
  { title: '本・CD・DVDも同時買取', description: 'ゲーム以外にも本・CD・DVD・ブルーレイなどをまとめて売ることができます。部屋の整理や引っ越しの際にワンストップで不用品を処分できる便利さが魅力です。' },
  { title: 'アプリ会員特典', description: 'ブックオフ公式アプリの会員になると、買取価格UPクーポンや限定キャンペーンの情報が届きます。会員ランクに応じたボーナスもあり、リピーターほどお得になります。' },
];

const steps = [
  { step: 1, title: '店舗に持ち込む / 宅配申込み', description: '近くのブックオフ店舗にゲームを持ち込むか、公式サイトから宅配買取を申し込みます。店舗の場合は本人確認書類をお忘れなく。' },
  { step: 2, title: '査定', description: '店舗の場合はその場でスタッフが査定。宅配の場合は商品到着後に査定が行われ、結果はメールで通知されます。' },
  { step: 3, title: '金額確認', description: '査定金額を確認します。店舗買取なら口頭で提示、宅配買取ならメールで通知。納得できなければキャンセルも可能です。' },
  { step: 4, title: '現金受取り', description: '店舗買取ならその場で現金を受取り。宅配買取なら指定口座への振込となります。店舗買取なら最短30分で完了します。' },
];

const faqs = [
  { q: 'ブックオフの店頭買取に必要なものは？', a: '本人確認書類（運転免許証、健康保険証、パスポートなど）が必要です。18歳未満の方は保護者の同意書も必要となります。売りたい商品と一緒にお持ちください。' },
  { q: '宅配買取の送料はかかりますか？', a: '買取点数が一定数以上（通常10点以上）であれば送料無料です。点数が少ない場合は送料がかかることがありますので、公式サイトで最新の条件をご確認ください。' },
  { q: '査定額はどのくらいで出ますか？', a: '店頭買取なら通常30分〜1時間程度。混雑時は2時間ほどかかることもあります。宅配買取は商品到着後3〜7営業日程度です。' },
  { q: 'レトロゲームも買い取ってもらえますか？', a: '買取対象ではありますが、店舗スタッフのレトロゲームに関する知識にばらつきがあるため、希少価値のあるタイトルが適正に評価されないことがあります。レトロゲームは専門店の利用も検討してみてください。' },
  { q: 'ゲーム以外のものも一緒に売れますか？', a: 'はい、本・CD・DVD・ブルーレイ・スマートフォン・タブレットなど幅広い商品を買い取っています。まとめて売ることで手間が省けます。' },
  { q: '買取価格を事前に調べることはできますか？', a: 'ブックオフ公式アプリやWebサイトで一部商品の買取参考価格を確認できます。ただし、実際の査定額は商品の状態によって変動しますのであくまで参考値としてお考えください。' },
];

export default function BookoffReviewPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ブックオフ' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>全国最大手</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ブックオフ<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>徹底レビュー</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            全国900店舗超を展開する日本最大手のリサイクルショップ。店頭に持ち込めばその日のうちに現金化でき、本やDVDと一緒にまとめ売りも可能です。アプリ会員なら買取価格UPクーポンも利用できる、圧倒的な利便性が強みのサービスです。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.bookoff.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
              公式サイトを見る
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ブックオフの4つの特徴</h2>
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
                <li>+ 店舗数が全国最多で圧倒的なアクセス性</li>
                <li>+ 店頭持ち込みで即日現金化</li>
                <li>+ ゲーム以外（本・CD・DVD）もまとめ売り可能</li>
                <li>+ アプリ会員特典で買取額UP</li>
                <li>+ 宅配買取にも対応</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- 人気タイトル以外は査定額が低めになりがち</li>
                <li>- レトロゲームの知識・査定にスタッフ間でばらつき</li>
                <li>- 混雑時は店頭査定に時間がかかる</li>
                <li>- 希少品の価値が見落とされることがある</li>
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
              <li>・近くにブックオフ店舗がある方</li>
              <li>・その日のうちに現金化したい方</li>
              <li>・本やDVDなどゲーム以外もまとめて売りたい方</li>
              <li>・引っ越しや大掃除で大量の不用品を処分したい方</li>
              <li>・手軽にサッと売りたい方</li>
            </ul>
          </div>
        </section>

        {/* User Reviews */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />利用者の口コミ</h2>
          <div className="space-y-4">
            {[
              { initial: 'Y.K', age: '20代男性', rating: 4, text: '引っ越し前日にSwitch本体とソフト5本、漫画30冊を持ち込みました。1時間くらいで全部査定してもらえて、合計8,500円。急いでいたので即現金化できたのは本当に助かりました。ゲームの査定額はまあまあですが、利便性は最高です。' },
              { initial: 'M.I', age: '30代女性', rating: 3, text: 'PS4ソフト10本を持ち込みましたが、人気タイトル以外は100円以下の査定が多くてがっかり。有名な作品は1,000円以上つきましたが、マイナーなものはほぼ値段がつかず。大量に売るなら他のサービスと比較した方がいいかも。' },
              { initial: 'T.S', age: '40代男性', rating: 2, text: 'スーパーファミコンのソフトを30本ほど持ち込んだのですが、ほとんど値段がつきませんでした。中にはプレミア価格のタイトルもあったのに、一律で安く査定された印象。レトロゲームは専門店に持っていくべきだと学びました。' },
              { initial: 'A.W', age: '20代女性', rating: 5, text: 'アプリ会員クーポンで買取20%UPの時に利用。Switchソフト8本で9,200円になりました。クーポンなしだと7,600円くらいだったそうなので、キャンペーン時期を狙うのがおすすめです。スタッフさんの対応も丁寧でした。' },
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
            ブックオフで<span style={{ color: 'var(--color-electric-green)' }}>手軽にゲーム買取</span>しませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            全国900店舗超で店頭即日現金化。本やDVDもまとめて売れる便利さが魅力です。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.bookoff.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              公式サイトを見る
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
            <Link href="/review/geo/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-orange text-xs mb-2 inline-block">大手</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲオ宅配買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>まとめ売りで最大35%UP</p>
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
