import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '買取ウリエルの口コミ・評判｜出張買取でゲームを即日現金化',
  description:
    '買取ウリエルのゲーム買取を徹底レビュー。出張買取対応・経験豊富な査定士・即日現金化が魅力。関東・関西エリア対応。ゲーム以外も含め20種類以上の品目をまとめて売れる総合買取サービスの特徴を詳しく解説。',
  keywords: ['買取ウリエル', 'ウリエル 口コミ', 'ウリエル ゲーム買取', '出張買取 ゲーム', 'ゲーム 即日現金化'],
  openGraph: {
    title: '買取ウリエルの口コミ・評判｜出張買取でゲームを即日現金化',
    description: '買取ウリエルのゲーム買取を徹底レビュー。出張買取・即日現金化の特徴を解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: '出張買取対応', description: '自宅にいながらプロの査定士が訪問して査定・買取を行います。重いゲーム機や大量のソフトを運ぶ手間がなく、忙しい方や荷物が多い方に最適です。予約も簡単にWebから行えます。' },
  { title: '経験豊富な査定士', description: '買取業界で経験を積んだプロの査定士が担当。ゲームだけでなく幅広いジャンルの知識を持っているため、付加価値を見逃さず適正な価格で査定してくれます。' },
  { title: '即日現金化', description: '出張買取・店舗買取なら査定後その場で現金を受け取れます。急な出費や引っ越し前の処分など、すぐに現金が必要な場面で非常に便利です。宅配買取の場合も最短翌営業日に振込対応。' },
  { title: '関東・関西エリア対応', description: '出張買取は関東・関西の主要都市をカバー。東京・神奈川・千葉・埼玉・大阪・京都・兵庫など、都市部を中心に広いエリアで利用できます。宅配買取なら全国対応です。' },
];

const steps = [
  { step: 1, title: 'Web・電話で申込み', description: '公式サイトのフォームまたは電話で出張買取・宅配買取を申し込みます。希望日時や売りたい品目を伝えましょう。相談だけでもOKです。' },
  { step: 2, title: '査定士が訪問（出張の場合）', description: '指定日時に査定士が自宅に訪問。玄関先での査定も可能です。宅配買取の場合は無料キットが届くので、商品を梱包して発送します。' },
  { step: 3, title: 'その場で査定・価格提示', description: '一点一点丁寧に査定し、その場で買取価格を提示。不明点があれば質問できます。まとめ売りでの上乗せ交渉も可能です。' },
  { step: 4, title: '現金受取り・完了', description: '査定額に納得したらその場で現金を受け取り。キャンセルも無料なので、価格に満足できない場合はお断りできます。' },
];

const targets = [
  { category: 'ゲーム関連', items: ['ゲーム機本体（Switch・PS5・PS4等）', 'ゲームソフト各種', 'コントローラー・周辺機器', 'ゲーミングデバイス'] },
  { category: 'ホビー・趣味', items: ['フィギュア', 'プラモデル', 'トレーディングカード', 'DVD・Blu-ray'] },
  { category: 'その他対応品目', items: ['ブランド品', '貴金属・ジュエリー', '家電製品', '楽器', '骨董品・美術品'] },
];

const faqs = [
  { q: '出張買取は本当に無料ですか？', a: 'はい、出張費・査定料・キャンセル料すべて無料です。査定結果に納得できなければ、その場でお断りいただいて構いません。費用は一切発生しません。' },
  { q: '出張買取の対応エリアはどこですか？', a: '関東エリア（東京・神奈川・千葉・埼玉・茨城・栃木・群馬）と関西エリア（大阪・京都・兵庫・奈良・滋賀・和歌山）が主な対応エリアです。詳細は公式サイトでご確認ください。' },
  { q: 'ゲーム以外のものも一緒に売れますか？', a: 'はい、買取ウリエルは20種類以上の品目に対応しています。ブランド品・貴金属・家電・楽器など、ゲームと一緒にまとめて売ることで査定額がアップする場合もあります。' },
  { q: '査定にはどのくらいの時間がかかりますか？', a: '出張買取の場合、品数にもよりますが通常30分〜1時間程度です。ゲームソフトが大量にある場合はもう少し時間がかかることがあります。事前に品数をお伝えいただけるとスムーズです。' },
  { q: '箱や付属品がなくても買取してもらえますか？', a: 'はい、箱・説明書・付属品がなくても買取可能です。ただし、付属品が揃っている方が査定額は高くなります。特にゲーム機本体は付属品の有無が査定額に大きく影響します。' },
  { q: '宅配買取の場合、入金までどのくらいかかりますか？', a: '商品到着後、通常1〜3営業日で査定結果をご連絡します。買取成立後は最短翌営業日に指定口座へ振込みいたします。' },
];

export default function UrielReviewPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: '買取ウリエル' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="rank-badge rank-badge-2">2</span>
            <span className="tag-pill text-xs" style={{ background: 'rgba(245,158,11,0.2)', color: '#FBBF24' }}>おすすめ2位</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            買取ウリエル<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>徹底レビュー</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            出張買取に強みを持つ総合買取サービス。経験豊富な査定士が自宅まで訪問し、ゲームを含む20種類以上の品目をその場で査定・即日現金化。関東・関西エリアで利用でき、まとめて売りたい方に特におすすめです。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="btn-accent py-2.5 px-6">
              公式サイトで出張買取を申込む
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />買取ウリエルの4つの特徴</h2>
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
                <li>+ 自宅にいながら出張買取で楽々</li>
                <li>+ その場で現金化できる</li>
                <li>+ ゲーム以外も20種類以上まとめて売れる</li>
                <li>+ 出張費・査定料・キャンセル料すべて無料</li>
                <li>+ 経験豊富な査定士による丁寧な査定</li>
                <li>+ まとめ売りで査定額アップの可能性</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- 出張買取は関東・関西エリア限定</li>
                <li>- ゲーム専門サービスではない</li>
                <li>- レトロゲームの専門性はヒカカク！に劣る</li>
                <li>- 出張訪問時に在宅が必要</li>
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
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-accent-orange)', opacity: 0.3 }}>
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
          <p className="text-xs mt-4" style={{ color: 'var(--color-text-lighter)' }}>
            ※ 上記以外にも多数の品目に対応しています。詳しくは公式サイトをご確認ください。
          </p>
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
            買取ウリエルで<span style={{ color: 'var(--color-accent-orange)' }}>出張買取</span>を試してみませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            自宅にいながらプロの査定士がゲームを査定。その場で現金化できます。出張費・査定料は完全無料です。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="btn-accent py-3 px-8">
              無料で出張買取を申込む
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
              <span className="tag-pill tag-pill-green text-xs mb-2 inline-block">1位</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社一括査定の買取比較サイト</p>
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
