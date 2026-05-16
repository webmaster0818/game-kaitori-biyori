import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ゲーム買取の年齢制限｜未成年でも売れる方法と必要書類',
  description:
    'ゲーム買取における年齢制限を古物営業法の観点から徹底解説。18歳未満の未成年がゲームを売る方法、保護者同意で対応可能な店舗一覧、必要書類チェックリスト、同意書の準備方法まで完全ガイド。',
  keywords: ['ゲーム買取 未成年', 'ゲーム買取 年齢制限', '古物営業法 未成年', 'ゲーム 売る 18歳未満'],
  openGraph: {
    title: 'ゲーム買取の年齢制限｜未成年でも売れる方法と必要書類',
    description: 'ゲーム買取の年齢制限を古物営業法の観点から解説。未成年が売る方法と必要書類を紹介。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const legalPoints = [
  { title: '古物営業法とは', description: '古物営業法（こぶつえいぎょうほう）は、盗品の売買を防止し、被害の迅速な回復を目的とした法律です。中古品の買取を行う業者は古物商許可が必要で、買取時の本人確認が義務づけられています。' },
  { title: '18歳未満は原則買取不可', description: '古物営業法第21条により、18歳未満の者からの古物の買受けは原則として禁止されています。これは未成年者の判断能力の保護と、盗品売買の防止が目的です。' },
  { title: '保護者同伴・同意で可能な場合がある', description: '店舗によっては、保護者が同伴する場合や、保護者の同意書を提出することで18歳未満でも買取に応じてもらえることがあります。ただしこれは店舗独自の対応であり、法律上の義務ではありません。' },
  { title: '18歳以上でも身分証明書は必須', description: '18歳以上であっても、古物営業法により買取時の本人確認は必須です。運転免許証、マイナンバーカード、パスポート、学生証（顔写真付き）などの身分証明書を必ず持参してください。' },
];

const shopAgePolicy = [
  { shop: 'ゲオ', policy: '18歳未満は保護者同伴が必要。保護者の身分証明書も必要。', minAge: '制限なし（保護者同伴時）' },
  { shop: 'ブックオフ', policy: '18歳未満は保護者の同意書が必要。16歳未満は保護者同伴必須。', minAge: '16歳（同伴時）' },
  { shop: '駿河屋', policy: '18歳未満は利用不可。宅配買取は18歳以上のみ。', minAge: '18歳' },
  { shop: 'ネットオフ', policy: '18歳未満は利用不可。', minAge: '18歳' },
  { shop: 'ヒカカク！', policy: '提携業者により異なる。多くは18歳以上。', minAge: '業者による' },
  { shop: 'ウリエル', policy: '18歳未満は保護者同伴で対応可能。出張買取は保護者在宅必須。', minAge: '制限なし（保護者同伴時）' },
  { shop: 'ハードオフ', policy: '18歳未満は保護者同伴が必要。同意書でも可。', minAge: '制限なし（保護者同伴時）' },
  { shop: 'トレジャーファクトリー', policy: '18歳未満は保護者同伴必須。電話確認の場合あり。', minAge: '制限なし（保護者同伴時）' },
];

const requiredDocs = [
  { doc: '本人の身分証明書', detail: '学生証（顔写真付き）、マイナンバーカード、健康保険証+住民票など。顔写真付きが望ましい。', required: true },
  { doc: '保護者の身分証明書', detail: '運転免許証、マイナンバーカード、パスポートなど。保護者同伴時に必要。', required: true },
  { doc: '保護者同意書', detail: '保護者が署名・捺印した同意書。店舗指定のフォーマットがある場合はそちらを使用。', required: true },
  { doc: '親子関係を証明する書類', detail: '住民票や戸籍抄本など。姓が異なる場合に求められることがある。', required: false },
  { doc: '売却物の所有を証明するもの', detail: '購入時のレシートや保証書。高額商品の場合に求められることがある。', required: false },
];

const consentGuide = [
  '店舗の公式サイトから同意書テンプレートをダウンロード（ある場合）',
  'テンプレートがない場合は、日付・保護者氏名・未成年者氏名・住所・電話番号・「買取に同意します」の旨を記載',
  '保護者が自筆で署名し、認印を押印',
  '身分証明書のコピーを同封（求められた場合）',
  '店舗に持参または郵送（宅配買取の場合は荷物に同封）',
];

const faqs = [
  { q: '高校生でもゲームを売ることはできますか？', a: '高校生（18歳未満）の場合、単独での買取は原則として法律で禁止されています。ただし、ゲオやブックオフなど一部の店舗では保護者同伴または保護者の同意書があれば買取に応じてもらえます。事前に店舗に確認することをおすすめします。' },
  { q: '保護者の同意書はどこで手に入りますか？', a: '多くの買取店舗では公式サイトに同意書のテンプレートが掲載されています。テンプレートがない場合は、白紙に必要事項（日付、保護者氏名、未成年者氏名、同意の旨）を記載し、保護者の署名・捺印をもらえば有効です。' },
  { q: '宅配買取で未成年が利用できるサービスはありますか？', a: '宅配買取は本人確認が厳格なため、18歳未満が利用できるサービスはほぼありません。保護者名義で申し込み、保護者の身分証明書で本人確認を行う方法が現実的です。' },
  { q: '18歳の高校生は年齢制限に引っかかりますか？', a: '18歳であれば古物営業法上の年齢制限はクリアしています。ただし高校在学中の場合、店舗によっては「高校生不可」というルールを設けていることがあるため、事前確認が必要です。' },
  { q: '親に内緒でゲームを売ることはできますか？', a: '18歳未満の場合、法律上保護者の同意なしに買取してもらうことはできません。18歳以上であれば法的には問題ありませんが、高額なゲーム機を売却する場合はトラブル防止のため家族に相談することをおすすめします。' },
  { q: 'フリマアプリ（メルカリなど）なら年齢制限はありませんか？', a: 'メルカリは18歳未満でも保護者の同意があれば利用可能です。ただし、売上金の受け取りに銀行口座が必要で、未成年名義の口座開設には保護者の同意が必要です。また、個人間取引のためトラブルリスクも考慮しましょう。' },
];

export default function AgeRestrictionPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '年齢制限・未成年の買取' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲーム買取の年齢制限ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            未成年でもゲームは売れる？古物営業法に基づく年齢制限の解説から、保護者同意で対応可能な店舗一覧、必要書類チェックリストまで完全網羅。2026年5月最新情報。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新: 2026年5月</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Legal */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />古物営業法と年齢制限の基礎知識</h2>
          <div className="space-y-4">
            {legalPoints.map((item, i) => (
              <div key={item.title} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shop Age Policy Table */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />店舗別 未成年対応一覧</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>店舗名</th>
                  <th>対応ポリシー</th>
                  <th>最低年齢</th>
                </tr>
              </thead>
              <tbody>
                {shopAgePolicy.map((row) => (
                  <tr key={row.shop}>
                    <td className="font-bold">{row.shop}</td>
                    <td className="text-sm">{row.policy}</td>
                    <td className="text-sm font-bold" style={{ color: row.minAge === '18歳' ? '#EF4444' : 'var(--color-electric-green)' }}>{row.minAge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※ 各店舗のポリシーは変更される場合があります。最新情報は各店舗の公式サイトでご確認ください。</p>
        </section>

        {/* Required Documents */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />必要書類チェックリスト</h2>
          <div className="space-y-3">
            {requiredDocs.map((item) => (
              <div key={item.doc} className="glass-card p-4 flex items-start gap-3">
                <span className="text-lg shrink-0">{item.required ? '必須' : '任意'}</span>
                <div>
                  <h3 className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>{item.doc}</h3>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-text-light)' }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Consent Guide */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />保護者同意書の準備方法</h2>
          <div className="glass-card p-6">
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
              保護者同意書は、未成年者がゲームを売却することに保護者が同意していることを証明する書類です。以下の手順で準備しましょう。
            </p>
            <ol className="space-y-3">
              {consentGuide.map((step, i) => (
                <li key={i} className="text-sm flex items-start gap-3" style={{ color: 'var(--color-text-light)' }}>
                  <strong className="shrink-0" style={{ color: 'var(--color-deep-blue)' }}>Step {i + 1}.</strong>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
              <h4 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>同意書に記載すべき項目</h4>
              <ul className="text-xs space-y-1" style={{ color: 'var(--color-text-light)' }}>
                <li>- 作成日</li>
                <li>- 保護者の氏名・住所・電話番号・署名・捺印</li>
                <li>- 未成年者の氏名・生年月日</li>
                <li>- 「上記の者が古物（ゲーム等）を売却することに同意します」の文言</li>
                <li>- 売却先の店舗名（わかる場合）</li>
              </ul>
            </div>
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
            年齢をクリアしたら<span style={{ color: 'var(--color-electric-green)' }}>一括査定</span>してみましょう
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            必要書類を揃えたら、複数社に査定依頼して最高値を見つけましょう。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連するお役立ち情報</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/knowledge/preparation/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>売る前の準備ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>初期化・データ消去の手順</p>
            </Link>
            <Link href="/knowledge/data-delete/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>データ削除・初期化方法</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>機種別の完全ガイド</p>
            </Link>
            <Link href="/compare/mercari-vs-kaitori/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>メルカリ vs 買取業者</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>フリマアプリとの比較</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
