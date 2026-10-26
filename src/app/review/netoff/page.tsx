import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ネットオフの買取の評判・口コミは？ゲーム・本の一括査定の入金日数・デメリットを検証',
  description:
    'ネットオフのゲーム買取をレビューしています。ゲーム・本・CD・DVDをまとめて売却できる宅配買取サービスの特徴・メリット・デメリット・利用手順について解説します。集荷・送料・手数料が無料で、最短2日で入金される点が特徴です（2026年10月26日 公式確認）。',
  keywords: ['ネットオフ 買取', 'ネットオフ 口コミ', 'ネットオフ ゲーム買取', 'ゲーム 本 まとめ売り', 'ネットオフ 評判'],
  openGraph: {
    images: ['/og.png'],
    title: 'ネットオフの買取の評判・口コミは？ゲーム・本の一括査定の入金日数・デメリットを検証',
    description: 'ネットオフのゲーム買取をレビューしています。まとめ買取の特徴と、送料・入金・申込条件を公式情報で解説します。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: 'ゲーム・本・CD・DVDまとめ買取', description: 'ゲームソフト・ゲーム機だけでなく、本・CD・DVD・ブルーレイなど幅広いジャンルをまとめて買い取っています。引っ越しや大掃除で大量の不用品を処分したい方に適したサービスです。' },
  { title: '集荷・送料・手数料が無料', description: '本&ゲーム買取コースは、自宅集荷・コンビニ持込とも無料で、手数料もかかりません。買取用ダンボールは6箱まで無料で届けてもらえます（公式・2026年10月26日確認）。' },
  { title: '最短2日で入金', description: '公式サイトでは、査定後最短2日での振込と案内されています。' },
  { title: '申込時の価格保証', description: '本&ゲーム買取コースでは、申込時の買取価格を保証するサービスがあります。会員限定の買取価格アップキャンペーン（書籍35%・ゲームソフト30%・DVD20%）も告知されています（2026年8月18日付の公式のお知らせ）。実施状況は公式サイトでご確認ください。' },
];

const steps = [
  { step: 1, title: '買取申込み', description: 'ネットオフ公式サイトから買取を申し込み、売りたい商品のジャンルや点数を入力します。初めての方は会員登録（無料）も同時に行えます。' },
  { step: 2, title: '梱包・集荷', description: '売りたい商品を段ボールに梱包します。集荷日を指定すると、自宅まで集荷に来ます。段ボールが必要な場合は、無料で送付を依頼できます。' },
  { step: 3, title: '査定', description: '商品の到着後、スタッフが1点ずつ査定します。査定結果はメールで通知されます。' },
  { step: 4, title: '入金', description: '査定額に同意すると、銀行口座へ振り込まれます。公式サイトでは最短2日での入金と案内されています。' },
];

const faqs = [
  { q: 'ネットオフの送料は無料ですか？', a: 'はい、本&ゲーム買取コースは送料・集荷・手数料とも無料です。ゲームソフトやDVD等のソフト類は3点以上、本のみの場合は30点以上でお送りください（公式・2026年10月26日確認）。段ボールも6箱まで無料で依頼できます。' },
  { q: 'キャンペーンはありますか？', a: '2026年8月18日付の公式のお知らせで、本&ゲーム買取コースの会員限定キャンペーン（書籍35%UP・ゲームソフト30%UP・DVD20%UP）が告知されています。終了日はお知らせに記載がないため、申込み前に公式サイトでご確認ください（2026年10月26日確認）。' },
  { q: 'レトロゲームも買取対象ですか？', a: 'ネットオフではPS3・Wii世代以降のゲームが主な対象です。ファミコンやスーパーファミコンなどのレトロゲームは、対象外となる傾向があります。レトロゲームは、駿河屋などの専門店での売却をおすすめします。' },
  { q: '査定にどのくらいかかりますか？', a: '商品到着後、通常3〜7営業日で査定結果がメールで届きます。商品が大量の場合や繁忙期は、さらに時間がかかる場合があります。' },
  { q: '査定に納得できない場合はキャンセルできますか？', a: 'キャンセルは可能です。ただし、返送を希望する場合は返送料がお客様の負担となります。また、「値段がつかない商品はネットオフで無料引取り」を選択することも可能です。' },
];

export default function NetoffReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ネットオフの買取の評判・口コミは？ゲーム・本の一括査定の入金日数・デメリットを検証", "datePublished": "2026-03-15", "dateModified": "2026-10-26", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較している編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ネットオフ' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>まとめ売り</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ネットオフ<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>レビュー</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ネットオフは、ゲーム・本・CD・DVDなど幅広い品目をまとめて売却できる宅配買取サービスです。集荷・送料・手数料が無料で、公式サイトでは最短2日での入金と案内されています（2026年10月26日確認）。大量の不用品を一度に処分したい方に適しています。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.netoff.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ネットオフの4つの特徴</h2>
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
                <li>+ ゲーム・本・CD・DVDなどをまとめ売り可能</li>
                <li>+ 申込時の買取価格を保証</li>
                <li>+ 最短2日で入金（公式の案内）</li>
                <li>+ 段ボール無料・集荷対応</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- 個別のゲーム査定額は専門店より低め</li>
                <li>- レトロゲームは対象外が多い</li>
                <li>- キャンセル時の返送料は自己負担</li>
                <li>- 査定に1週間程度かかることがある</li>
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />おすすめできる方</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・ゲーム以外にも本・CD・DVDを大量に処分したい方</li>
              <li>・引っ越しや大掃除でまとめて売りたい方</li>
              <li>・送料や手数料をかけずに宅配で売りたい方</li>
              <li>・実績のある大手のサービスを利用したい方</li>
            </ul>
          </div>
        </section>

        {/* 公式仕様・会社情報 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ネットオフ宅配買取の公式仕様・会社情報（2026年6月18日確認・10月26日再確認）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <tbody>
                <tr><th>運営会社</th><td className="text-sm">ネットオフ株式会社（リネットジャパングループ）</td></tr>
                <tr><th>古物商許可</th><td className="text-sm">愛知県公安委員会 第542782100600号</td></tr>
                <tr><th>所在地</th><td className="text-sm">愛知県大府市柊山町三丁目33番地</td></tr>
                <tr><th>送料・集荷</th><td className="text-sm">本＆ゲーム買取コースは送料無料。自宅集荷・コンビニ持込とも無料</td></tr>
                <tr><th>梱包キット</th><td className="text-sm">本・ゲーム・DVD買取用段ボール 6箱まで無料</td></tr>
                <tr><th>申込点数の条件</th><td className="text-sm">ソフト類だけなら3点から（本のみの場合は30点から）</td></tr>
                <tr><th>入金</th><td className="text-sm">最短2日。自動承認は査定案内後の翌営業日に支払手続→3営業日以内（楽天銀行は当日）</td></tr>
                <tr><th>キャンセル返送料</th><td className="text-sm">自己負担（関東800円〜北海道1,200円・沖縄2,400円）。「自動承認」を選ぶと返送不可</td></tr>
                <tr><th>対応ハード</th><td className="text-sm">Switch 2/Switch/3DS、PS5/PS4/Vita/PSP、Xbox One ほか旧ハードも対応</td></tr>
                <tr><th>本人確認</th><td className="text-sm">運転免許証・マイナンバーカード等の画像アップロード、またはオンライン本人確認</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ネットオフ公式（買取案内・「ダンボールプレゼント」・買取Q&A・本人確認案内、2026年6月18日閲覧）。本＆ゲーム買取コースの内容です。</p>
        </section>

        {/* 口コミ傾向（出典付き） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />口コミ・評判の傾向</h2>
          <div className="glass-card p-6">
            <p className="text-sm mb-3" style={{ color: 'var(--color-text-light)' }}>
              ネットオフは、本・ゲーム・DVDをまとめて手軽に処分したい方に適したサービスです。送料・集荷・段ボールが無料である点が評価される一方、<strong>1点あたりの査定額はゲーム専門店より低く</strong>なりやすい傾向があります。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold mb-1" style={{ color: 'var(--color-electric-green)' }}>良い評価の傾向</p>
                <ul className="space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・送料・集荷・段ボールが無料で利用しやすい</li>
                  <li>・本・DVDと一緒にまとめて処分できる</li>
                  <li>・自動承認を選ぶと最短2日で入金</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-1" style={{ color: 'var(--color-accent-orange)' }}>気になる評価の傾向</p>
                <ul className="space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・1点ごとの査定額は低いという声がある</li>
                  <li>・人気タイトル以外は値がつきにくい</li>
                  <li>・ゲームのみを高く売りたい場合は専門店が有利なことがある</li>
                </ul>
              </div>
            </div>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>参考：ヒカカク!（ネットオフ・家電カテゴリ 総合2.53点/393件、2026年6月18日閲覧）。ゲーム買取コース単独の第三者評点は口コミ件数が少なく、上記は公式仕様と一般的な傾向にもとづいて整理したものです。当サイトでは体験談の創作は行っていません。</p>
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
            ネットオフで<span style={{ color: 'var(--color-electric-green)' }}>まとめて売る</span>
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            ゲーム・本・CD・DVDをまとめて売却できます。集荷・送料・手数料は無料です（本&ゲーム買取コース）。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.netoff.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              無料で買取申込みする
            </a>
            <Link href="/" className="btn-outline py-3 px-8" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#CBD5E1' }}>
              他のサービスと比較
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のサービスのレビュー</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/review/geo/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-orange text-xs mb-2 inline-block">大手</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲオ宅配買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>まとめ売りで最大35%UP</p>
            </Link>
            <Link href="/review/bookoff/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-blue text-xs mb-2 inline-block">全国最大手</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ブックオフ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>全国900店舗超・店頭即現金化</p>
            </Link>
          </div>
        </section>
        {/* 関連記事 */}
        <section style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--color-accent-soft-weak)', borderRadius: '12px', borderLeft: '3px solid var(--color-electric-green)' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>関連記事</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/kaitori-ranking/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取おすすめランキング15選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/switch/" style={{ color: 'var(--color-electric-green)' }}>Switch買取おすすめ3選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/3ds/" style={{ color: 'var(--color-electric-green)' }}>3DS買取ガイド</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/method/online/" style={{ color: 'var(--color-electric-green)' }}>宅配買取の流れとポイント</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/bulk/" style={{ color: 'var(--color-electric-green)' }}>まとめ売りで高く売るためのポイント</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/preparation/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取前の準備ガイド</Link></li>
          </ul>
        </section>

        <AuthorBox />
      </div>
    </>
  );
}
