import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ゲーム店舗買取ガイド｜即日現金化・持ち込み時の注意点【2026年】',
  description:
    'ゲームの店舗買取（持ち込み買取）について解説します。即日現金化までの流れ、メリット・デメリット、ティファナの店舗情報、持ち込み時の注意点をまとめています。近くのゲーム買取店をお探しの方は参考にしてください。',
  keywords: ['ゲーム 店舗買取', '近くのゲーム買取店', 'ゲーム 持ち込み買取', 'ゲーム 即日現金化', 'ゲーム買取 店頭'],
  openGraph: {
    images: ['/og.png'],
    title: 'ゲーム店舗買取ガイド｜即日現金化・持ち込み時の注意点【2026年】',
    description: 'ゲームの店舗買取の流れ、即日現金化のポイント、持ち込み時の注意点を解説します。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const steps = [
  { title: 'STEP 1: 店舗を選ぶ', description: '自宅から近い買取店を探します。ティファナのように、事前にWeb査定で概算を確認できるサービスもあります。営業時間・定休日も事前にご確認ください。' },
  { title: 'STEP 2: 商品を持ち込む', description: 'ゲーム本体・ソフト・付属品をまとめて店舗へ持参します。本人確認書類（運転免許証・マイナンバーカード等）もお忘れなくお持ちください。' },
  { title: 'STEP 3: 店頭査定', description: 'スタッフが目の前で動作と状態を確認します。査定は通常10〜30分程度で完了しますが、混雑時は1時間ほどかかることもあります。' },
  { title: 'STEP 4: 即日現金化', description: '査定額に同意すれば、その場で現金を受け取れます。交渉により金額が上がる可能性もあります。' },
];

const merits = [
  { title: '即日現金化できる', description: '持ち込んだその日に現金が手に入ります。数日〜1週間程度かかる宅配買取と比べて大幅に早く、急な出費にも対応できます。' },
  { title: '対面で交渉できる', description: '査定額に納得できない場合は、その場で直接交渉できます。付属品の価値を伝えることで、増額につながるケースもあります。' },
  { title: '商品状態を直接見せられる', description: '美品であることをスタッフに直接伝えられます。写真では伝わりにくい状態の良さを実物で示せる点は、大きなメリットです。' },
  { title: '梱包・発送の手間がない', description: '宅配買取のような段ボール・緩衝材の準備や発送手続きは不要です。商品を持参するだけで手続きできます。' },
  { title: '査定額が気に入らなければ持ち帰れる', description: '宅配買取のキャンセル時の返送とは異なり、その場で持ち帰れます。返送を待つ時間もかかりません。' },
];

const demerits = [
  { title: '店舗まで行く必要がある', description: '重いゲーム機や大量のソフトを運ぶ負担があり、車がない場合は特に不便です。近くに買取店がない地域もあります。' },
  { title: '営業時間に制約がある', description: '多くの買取店の営業時間は10:00〜20:00です。平日に仕事がある方は、土日しか利用できない場合があります。混雑する週末は待ち時間も長くなります。' },
  { title: '比較検討がしにくい', description: '複数店舗を回って査定額を比較するのは手間がかかるため、1店舗の査定額で決めてしまいがちです。' },
];

const tifanaInfo = [
  { item: '運営会社', value: '株式会社ティファナ' },
  { item: '公式サイト', value: 'tifana.net' },
  { item: '買取方法', value: '店舗買取・宅配買取' },
  { item: '対応エリア（店舗）', value: '東京都内を中心に複数店舗' },
  { item: '営業時間', value: '店舗により異なる（公式サイトで要確認）' },
  { item: '本人確認書類', value: '運転免許証・パスポート・マイナンバーカード等' },
  { item: '特徴', value: 'ゲーム以外のホビー・家電・ブランド品も幅広く買取' },
];

const cautions = [
  { title: '本人確認書類を必ず持参する', description: '古物営業法により、買取時には本人確認が義務づけられています。運転免許証、マイナンバーカード、パスポートなどの顔写真付き本人確認書類を必ずお持ちください。' },
  { title: '18歳未満は保護者同伴が必要', description: '未成年者からの買取には保護者の同意書または同伴が必要です。事前に店舗へご確認ください。' },
  { title: '付属品はすべて持参する', description: '箱、説明書、ケーブル類、コントローラーなど、付属品がそろっているほど高額査定につながります。付属品を後日持参しての追加査定は、基本的に受け付けられません。' },
  { title: '事前にデータ消去・初期化', description: 'ゲーム機本体は、個人データの消去・初期化を済ませてから持ち込んでください。店頭で時間を取られず、スムーズに査定を受けられます。' },
  { title: '複数店舗の相場を事前に確認する', description: 'ヒカカク！で事前にネット査定額を確認しておくと、店舗の査定額が妥当かどうか判断しやすくなります。交渉材料にも使えます。' },
];

const faqs = [
  { q: '店舗買取で即日現金化できますか？', a: 'はい、即日現金化は店舗買取の最大のメリットです。査定に同意すれば、その場で現金を受け取れます。査定時間は通常10〜30分程度で、混雑時は1時間ほどかかる場合があります。' },
  { q: '持ち込み前にやるべきことはありますか？', a: 'ゲーム機本体の初期化・データ消去、付属品の確認、外装の清掃を済ませてください。本人確認書類の持参も必須です。事前にヒカカク！で相場を確認しておくと、交渉に役立ちます。' },
  { q: '店舗買取と宅配買取では、どちらが高く売れますか？', a: '一概には言えませんが、宅配買取のほうが人件費・店舗コストが低い分、買取金額が高くなる傾向があります。ただし店舗買取では対面交渉で増額できる可能性があるため、交渉に慣れている方は店舗のほうが有利な場合もあります。' },
  { q: 'ティファナの店舗はどこにありますか？', a: 'ティファナは東京都内を中心に複数の店舗を展開しています。最新の店舗情報・営業時間はtifana.netの公式サイトでご確認いただけます。店舗買取のほか宅配買取にも対応しています。' },
  { q: '大量のゲームソフトを持ち込んでも大丈夫ですか？', a: 'はい、大量の持ち込みにも対応しています。ただし査定に時間がかかるため、50本以上の場合は事前に店舗へ連絡しておくとスムーズです。宅配買取のほうが負担が少ない場合もあります。' },
  { q: '店頭での査定額に納得できない場合はどうすればよいですか？', a: 'その場で断って商品を持ち帰れます。キャンセル料はかかりません。他の店舗やネット買取の査定額と比較してから改めて売却先を決めることをおすすめします。' },
];

export default function ShopPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲーム店舗買取ガイド｜即日現金化・持ち込み時の注意点【2026年】", "datePublished": "2026-03-15", "dateModified": "2026-05-24", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: '売り方', href: '/' }, { name: '店舗買取' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>売り方ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲーム店舗買取ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲームソフトや本体を店舗に持ち込めば、即日現金化が可能です。店舗買取の流れ、メリット・デメリット、持ち込み時の注意点、ティファナの店舗情報について解説します。
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />店舗買取の流れ</h2>
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />店舗買取のメリット5つ</h2>
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />店舗買取のデメリット3つ</h2>
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

        {/* Instant Cash */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />即日現金化のポイント</h2>
          <div className="glass-card p-6">
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-light)' }}>
              店舗買取の最大の特長は、持ち込んだその日に現金が手に入ることです。即日現金化をスムーズに進めるポイントをまとめました。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>平日の午前中の利用</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>土日や夕方は混雑しやすい傾向があります。平日の午前中であれば、待ち時間が少なく査定を受けられます。</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>事前にWeb査定で相場確認</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>ヒカカク！やティファナのWeb査定で、事前に概算を把握できます。金額に納得したうえで持ち込めます。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tifana Info */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ティファナの店舗情報</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <tbody>
                {tifanaInfo.map((row) => (
                  <tr key={row.item}>
                    <td className="font-bold">{row.item}</td>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※ 最新の店舗情報・営業時間はティファナ公式サイトでご確認ください。</p>
        </section>

        {/* Cautions */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />持ち込み時の注意点</h2>
          <div className="space-y-4">
            {cautions.map((c, i) => (
              <div key={c.title} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: '#FBBF24', opacity: 0.4 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{c.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{c.description}</p>
                </div>
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
            まずは<span style={{ color: 'var(--color-electric-green)' }}>無料査定</span>で相場を確認
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            店舗に行く前に、ネットで相場をご確認ください。最高値を把握してから持ち込むことで、交渉も有利に進められます。
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
            <Link href="/method/online/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>宅配買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>自宅から送るだけのネット買取ガイド</p>
            </Link>
            <Link href="/method/app/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>フリマアプリ vs 買取業者</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>メルカリと買取業者を比較</p>
            </Link>
            <Link href="/method/high-price/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>高く売るコツ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>買取価格を最大化する10のテクニック</p>
            </Link>
          </div>
          <div className="mt-4">
            <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>比較ガイド</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/compare/shop-vs-online/" className="glass-card p-4 card-hover block">
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>店舗 vs 宅配</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>目的に合った売り方を比較</p>
              </Link>
              <Link href="/compare/hikakaku-vs-uriel/" className="glass-card p-4 card-hover block">
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク vs ウリエル</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>2大サービスの違いを比較</p>
              </Link>
            </div>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
