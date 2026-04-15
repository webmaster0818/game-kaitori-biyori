import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ティファナの口コミ・評判｜ゲーム・トレカ・フィギュアのホビー系買取',
  description:
    'ティファナのゲーム買取を徹底レビュー。ゲーム・トレカ・フィギュア・レトロ玩具など幅広いホビー系アイテムの買取に対応するリサイクルショップ。店舗買取・宅配買取の特徴・メリット・利用手順を詳しく解説。',
  keywords: ['ティファナ', 'ティファナ 口コミ', 'ティファナ ゲーム買取', 'トレカ 買取', 'フィギュア 買取', 'ホビー 買取'],
  openGraph: {
    title: 'ティファナの口コミ・評判｜ゲーム・トレカ・フィギュアのホビー系買取',
    description: 'ティファナのゲーム買取を徹底レビュー。ホビー系買取の特徴と使い方を解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: 'ゲーム・トレカ・フィギュア幅広い', description: 'ゲームソフト・ゲーム機だけでなく、トレーディングカード・フィギュア・プラモデル・レトロ玩具など、ホビー系アイテムを幅広く取り扱っています。コレクション整理にぴったりのサービスです。' },
  { title: '店舗買取+宅配買取', description: '東京近郊の店舗への持ち込み買取と、全国対応の宅配買取の2つの方法から選べます。店舗ならその場で査定・現金化、宅配なら自宅から手軽に送れます。' },
  { title: 'ホビー専門査定士', description: 'ゲーム・ホビーに精通した専門の査定士が在籍。市場相場を熟知しているため、レアアイテムの価値を見逃しません。トレカの高額カードやプレミアフィギュアも適正価格で査定。' },
  { title: '東京近郊に店舗展開', description: '東京都内を中心に複数の店舗を展開。直接持ち込んでその場で査定・即現金化が可能です。スタッフとの対面査定で安心感があります。遠方の方は宅配買取をご利用ください。' },
];

const steps = [
  { step: 1, title: '買取方法を選ぶ', description: '店舗買取か宅配買取を選びます。店舗買取なら最寄りの店舗へ直接お持ちください。宅配買取は公式サイトから申込みフォームに入力します。' },
  { step: 2, title: '商品を準備・持込み/発送', description: '売りたいアイテムをまとめて準備。店舗買取なら営業時間内に持ち込み、宅配買取なら梱包して発送します。付属品や箱があれば一緒に入れましょう。' },
  { step: 3, title: '専門査定士が査定', description: 'ホビー専門の査定士が一点一点丁寧に査定。ゲームの状態・希少性・市場相場を踏まえた適正価格を算出します。トレカやフィギュアも同時に査定可能です。' },
  { step: 4, title: '現金受取り・完了', description: '店舗買取ならその場で現金を受け取り。宅配買取の場合は査定結果に同意後、指定口座へ振込みされます。キャンセルの場合は返送対応します。' },
];

const targets = [
  { category: 'ゲーム', items: ['ゲーム機本体（Switch・PS5・PS4・レトロ）', 'ゲームソフト全般', '限定版・特典付きソフト', 'ゲーム周辺機器・コントローラー', 'アーケード基板'] },
  { category: 'トレーディングカード', items: ['ポケモンカード', '遊戯王カード', 'マジック：ザ・ギャザリング', 'ワンピースカード', 'その他TCG全般'] },
  { category: 'フィギュア・ホビー', items: ['美少女フィギュア', 'ロボットフィギュア', 'プラモデル（ガンプラ等）', 'レトロ玩具・ソフビ', '特撮・アニメグッズ'] },
];

const faqs = [
  { q: 'ティファナの店舗はどこにありますか？', a: '東京都内を中心に複数の店舗を展開しています。最新の店舗情報・営業時間は公式サイトでご確認ください。駅から近い立地の店舗が多く、アクセスしやすいのが特徴です。' },
  { q: 'トレカとゲームを一緒に売ることはできますか？', a: 'はい、もちろん可能です。ティファナではゲーム・トレカ・フィギュアなどホビー系アイテムをまとめて査定できます。ジャンルの異なるアイテムを一度に売れるのが大きなメリットです。' },
  { q: '宅配買取の送料はかかりますか？', a: '買取成立の場合、送料は無料です。キャンセル時の返送料については公式サイトでご確認ください。大量に送る場合はまとめて梱包すると効率的です。' },
  { q: 'フィギュアの箱がなくても買取してもらえますか？', a: 'はい、箱なしでも買取可能です。ただし、フィギュアは箱ありの方が大幅に査定額が上がります。特にプライズフィギュアは箱の有無で数百円〜数千円の差が出ることがあります。' },
  { q: 'レトロゲームやレトロ玩具の買取にも対応していますか？', a: 'はい、ティファナはレトロゲーム・レトロ玩具の買取にも力を入れています。ファミコンソフトやスーファミソフト、昭和のブリキ玩具やソフビ人形なども査定対象です。希少品は特に高額査定の可能性があります。' },
  { q: '出張買取はやっていますか？', a: '現在、ティファナでは出張買取サービスは行っていません。店舗への持ち込みまたは宅配買取でのご利用となります。大量のアイテムがある場合は宅配買取がおすすめです。' },
];

export default function TifanaReviewPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ティファナ' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="rank-badge rank-badge-3">3</span>
            <span className="tag-pill text-xs" style={{ background: 'rgba(148,163,184,0.2)', color: '#CBD5E1' }}>おすすめ3位</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ティファナ<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>徹底レビュー</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲーム・トレーディングカード・フィギュア・レトロ玩具など、幅広いホビー系アイテムの買取に対応するリサイクルショップ。ホビー専門の査定士が在籍し、コレクションの価値を見逃しません。ゲームと一緒にホビーグッズもまとめて売りたい方に最適なサービスです。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
              公式サイトで買取を申込む
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ティファナの4つの特徴</h2>
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
                <li>+ ゲーム・トレカ・フィギュアをまとめて売れる</li>
                <li>+ ホビー専門査定士による適正査定</li>
                <li>+ 店舗持ち込みで即現金化</li>
                <li>+ レトロゲーム・レトロ玩具にも対応</li>
                <li>+ 宅配買取で全国対応</li>
                <li>+ コレクション整理に最適</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- 出張買取に非対応</li>
                <li>- 店舗は東京近郊がメイン</li>
                <li>- 一括査定機能はない</li>
                <li>- ゲーム単品の査定額は大手に劣る場合も</li>
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
          <div className="mt-6 glass-card p-5">
            <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>トレカ買取のポイント</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              ポケモンカードや遊戯王カードなどの高額カードは、スリーブやローダーで保護した状態でお持ちください。カードの状態（キズ・白かけ・反り）が査定額に大きく影響します。大量のノーマルカードも重量買取で対応可能です。高額カードのみ個別査定し、残りはまとめ買取というスタイルも選べます。
            </p>
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
            ゲーム・ホビーの<span style={{ color: 'var(--color-electric-green)' }}>コレクション整理</span>はティファナで
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            ゲーム・トレカ・フィギュア、まとめて売って一気にスッキリ。ホビー専門の査定士がしっかり査定します。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              公式サイトで買取を申込む
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
            <Link href="/review/uriel/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-orange text-xs mb-2 inline-block">2位</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取ウリエル</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>出張買取対応・即日現金化</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
