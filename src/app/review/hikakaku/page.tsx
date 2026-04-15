import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ヒカカク！の口コミ・評判｜最大20社一括査定のゲーム買取比較',
  description:
    'ヒカカク！のゲーム買取を徹底レビュー。最大20社に一括査定できる買取比較サイトの特徴・メリット・デメリット・利用手順を詳しく解説。ゲーム機・レトロゲーム・ゲームソフトを最高値で売りたい方必見。',
  keywords: ['ヒカカク', 'ヒカカク 口コミ', 'ヒカカク ゲーム買取', 'ゲーム 一括査定', 'ゲーム買取 比較'],
  openGraph: {
    title: 'ヒカカク！の口コミ・評判｜最大20社一括査定のゲーム買取比較',
    description: 'ヒカカク！のゲーム買取を徹底レビュー。最大20社一括査定の特徴・使い方を解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: '最大20社一括査定', description: '一度の申込みで最大20社の買取業者から見積もりが届きます。手間なく最高値を見つけられる業界最大級の比較プラットフォームです。面倒な個別申込みは不要です。' },
  { title: 'ゲーム専門業者多数', description: 'ゲーム買取に特化した専門業者が多数参加。レトロゲームからSwitch・PS5の最新ゲームまで、専門知識を持った業者による適正な査定が受けられます。' },
  { title: '完全無料で利用可能', description: '査定申込みから結果の受取りまで完全無料。利用料・手数料は一切かかりません。気軽に複数社の買取価格を比較できます。' },
  { title: '全国対応', description: '参加業者は全国に展開。宅配買取対応の業者が多いため、地方にお住まいの方でも最高値での買取が実現できます。一部業者は出張買取・店舗買取にも対応。' },
];

const steps = [
  { step: 1, title: '商品情報を入力', description: '売りたいゲームの名前・状態・付属品の有無をフォームに入力します。写真のアップロードでより正確な査定が可能です。' },
  { step: 2, title: '一括査定を申し込む', description: '入力内容を確認して送信するだけ。最大20社の買取業者に一括で査定依頼が送られます。個別に申し込む手間はありません。' },
  { step: 3, title: '査定結果を比較', description: '各業者から査定結果が届きます。買取価格・サービス内容・口コミを比較して、最も条件の良い業者を選びましょう。' },
  { step: 4, title: '買取を依頼', description: '納得のいく業者が見つかったら、その業者の手順に従って買取を依頼。宅配キットの手配から集荷まで、業者がサポートしてくれます。' },
];

const targets = [
  { category: 'ゲーム機本体', items: ['Nintendo Switch（有機EL・通常・Lite）', 'PlayStation 5 / PS4 / PS3', 'Xbox Series X/S', 'Nintendo 3DS / DS', 'レトロゲーム機（ファミコン・スーファミ・ゲームボーイ等）'] },
  { category: 'ゲームソフト', items: ['Switch用ソフト', 'PS5 / PS4用ソフト', 'レトロゲームソフト', '限定版・コレクターズエディション', '未開封品'] },
  { category: '周辺機器', items: ['コントローラー', 'ヘッドセット', 'アーケードスティック', 'メモリーカード', 'ケーブル・充電器'] },
];

const faqs = [
  { q: 'ヒカカク！の利用に料金はかかりますか？', a: 'いいえ、完全無料です。査定申込みから結果の受取りまで、利用料・手数料は一切かかりません。何度利用しても無料です。' },
  { q: '査定結果はどのくらいで届きますか？', a: '早い業者では当日中に査定結果が届きます。通常は1〜3営業日程度です。業者数が多いほど全ての結果が揃うまでに時間がかかる場合があります。' },
  { q: '査定後にキャンセルできますか？', a: 'はい、査定結果に納得できなければキャンセル可能です。査定はあくまで見積もりなので、買取を強制されることはありません。' },
  { q: 'レトロゲームでも高値がつきますか？', a: 'はい、ヒカカク！にはレトロゲーム専門の買取業者が多数参加しています。特に箱・説明書付きの完品や希少タイトルは、一般的なリサイクルショップより大幅に高い査定がつくことがあります。' },
  { q: '壊れたゲーム機も査定してもらえますか？', a: 'ジャンク品の買取に対応している業者も参加しています。故障の程度によりますが、まずは査定を申し込んでみることをおすすめします。パーツ取り目的での買取もあります。' },
  { q: '個人情報は安全ですか？', a: 'ヒカカク！はプライバシーポリシーに基づき個人情報を適切に管理しています。査定情報は参加業者にのみ共有され、第三者への提供はありません。SSL暗号化通信にも対応しています。' },
];

export default function HikakakuReviewPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ヒカカク！' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="rank-badge rank-badge-1">1</span>
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>おすすめ1位</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ヒカカク！<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>徹底レビュー</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            最大20社に一括査定できる国内最大級の買取比較サイト。ゲーム機・レトロゲーム・ゲームソフトの買取に対応し、無料で最高値を見つけられます。複数社の見積もりを手間なく比較したい方に最適なサービスです。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
              公式サイトで無料査定
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ヒカカク！の4つの特徴</h2>
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
                <li>+ 一度の申込みで最大20社に査定依頼</li>
                <li>+ 完全無料で利用できる</li>
                <li>+ ゲーム専門の買取業者が多数参加</li>
                <li>+ レトロゲームの査定に強い</li>
                <li>+ 全国対応（宅配買取メイン）</li>
                <li>+ 口コミ・評判を参考にできる</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- 複数業者から連絡が来る場合がある</li>
                <li>- 地域により対応業者数に差がある</li>
                <li>- ヒカカク！自体が買取を行うわけではない</li>
                <li>- 実際の買取価格は査定後に変わる場合あり</li>
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

        {/* Target Items */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />買取対象</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {targets.map((t) => (
              <div key={t.category} className="glass-card p-5">
                <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>{t.category}</h3>
                <ul className="space-y-1.5 text-sm" style={{ color: 'var(--color-text-light)' }}>
                  {t.items.map((item) => <li key={item}>・{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* User Reviews */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />利用者の口コミ</h2>
          <div className="space-y-4">
            {[
              { initial: 'T.K', age: '30代男性', rating: 4, text: 'Switchソフト15本をまとめて査定に出しました。一括で複数社の見積もりが届くのは本当に便利。最高値と最安値で4,000円以上の差があり、比較して正解でした。ただ、業者からの電話が立て続けに来たのは少し面倒でした。' },
              { initial: 'M.S', age: '20代女性', rating: 5, text: '引っ越し前にPS4本体とソフトをまとめて売りたくて利用。申込みが簡単で、翌日には5社から見積もりが届きました。結果、近所のゲームショップより8,000円も高く売れて大満足です。' },
              { initial: 'Y.N', age: '40代男性', rating: 4, text: 'ファミコンソフトのコレクションを整理するために使いました。レトロゲーム専門の業者が複数見つかり、希少タイトルの価値をしっかり評価してもらえたのが嬉しかったです。一般のリサイクルショップとは査定額が全然違いました。' },
              { initial: 'A.H', age: '30代女性', rating: 3, text: '査定自体は便利ですが、地方在住のため対応してくれる業者が3社しかなく、都市部との差を感じました。宅配買取メインの業者は全国対応でしたが、もう少し選択肢があると嬉しいです。' },
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
            ヒカカク！で<span style={{ color: 'var(--color-electric-green)' }}>無料一括査定</span>してみませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            最大20社の買取価格を比較して、あなたのゲームを最高値で売りましょう。申込みは無料・簡単です。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              無料で一括査定する
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
            <Link href="/review/uriel/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-orange text-xs mb-2 inline-block">2位</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取ウリエル</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>出張買取対応・即日現金化</p>
            </Link>
            <Link href="/review/tifana/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-blue text-xs mb-2 inline-block">3位</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ティファナ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ホビー系買取に強いリサイクルショップ</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
