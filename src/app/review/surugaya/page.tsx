import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: '駿河屋の買取の評判・口コミ｜ヒカカク493件の星分布と手数料・レトロゲームの減額基準を検証【2026年10月】',
  description:
    '駿河屋の買取の評判・口コミを、ヒカカク493件の星分布（★1が213件・★5が95件）と公式の買取Q&A・減額基準（2026年10月18日確認）で検証しています。通信買取手数料660〜990円、査定4〜14日、承諾後3営業日以内の送金、レトロゲームの箱・説明書の扱いをまとめています。',
  keywords: ['駿河屋 買取', '駿河屋 口コミ', '駿河屋 ゲーム買取', 'レトロゲーム 買取', '駿河屋 査定'],
  openGraph: {
    images: ['/og.png'],
    title: '駿河屋の買取の評判・口コミ｜ヒカカク493件の星分布と手数料・レトロゲームの減額基準を検証【2026年10月】',
    description: '駿河屋の買取の評判・口コミを、ヒカカク493件の星分布と公式の手数料・減額基準で検証しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: 'レトロゲームの買取に対応', description: 'ファミコン・スーパーファミコン・セガサターン・PCエンジンなどのレトロゲームを買取対象としています。公式の減額基準リストでは「古い商品の経年劣化は減額対象とはなりません」と明記されています。一方で箱・説明書の欠品は減額対象です。' },
  { title: '箱・説明書の有無で価格が分かれる', description: 'ファミコンなどは「箱説有り」と「箱説無し」で買取価格が分かれており、箱・説明書付きで売る場合は申込時に「箱説有り」と明記する必要があります。限定版・特典付きは付属品の欠品で減額または買取不可となる場合があります。' },
  { title: '買取価格がサイトで公開', description: '駿河屋の公式サイトでは多くの商品の買取価格が事前に公開されています。送る前におおよその金額が分かるため、他社と比較してから申し込めます。ただし表示価格は完品・良品を前提とした上限価格です。' },
  { title: '全国160店舗と宅配の2系統', description: '駿河屋リアルストア110店舗・フレンドリーショップ50店舗（2026年10月16日時点・公式店舗一覧）があり、宅配の「あんしん買取」「かんたん買取」と店頭買取を選べます。宅配では通信買取手数料（660〜990円）が買取金額から差し引かれます。' },
];

const steps = [
  { step: 1, title: '買取申込み', description: '駿河屋公式サイトの「かんたん買取」から申し込みます。売りたい商品のジャンルや点数を入力します。事前に買取価格を検索して確認することもできます。' },
  { step: 2, title: '梱包・発送', description: '商品を丁寧に梱包して発送します。送料は買取点数や金額の条件を満たせば無料です。レトロゲームは特に、緩衝材でしっかり保護して送ることをおすすめします。' },
  { step: 3, title: '査定', description: '到着後、専門スタッフが1点ずつ丁寧に査定します。公式の査定目安は到着後4〜14日程度ですが、点数が多い場合や繁忙期はさらにかかることがあります。' },
  { step: 4, title: '入金', description: '査定結果を承諾すると、金融機関の3営業日以内に送金されます（土日祝は送金なし）。初回は住所確認の簡易書留の受け取り後に振込手続きとなります。査定結果の連絡から5日以内に返答がない場合は承諾したものとみなされます。' },
];

const faqs = [
  { q: '駿河屋の査定にはどのくらい時間がかかりますか？', a: '公式の査定目安は商品到着後4〜14日程度、査定承諾後の入金は3営業日以内です。土日祝は金融機関が休みのため送金されません。初回は住所確認の簡易書留を受け取った後に振込手続きとなります。' },
  { q: 'レトロゲームの箱なし・説明書なしでも買取できますか？', a: 'はい、ソフト単体でも買取可能です。ただし、公式の買取Q&Aでは箱・説明書なしは減額対象とされ、値段がつかない場合もあります。ファミコンなどは「箱説有り」「箱説無し」で価格が分かれており、古い商品の経年劣化は減額対象外です（公式 減額基準リスト）。' },
  { q: '買取価格の事前確認はどこでできますか？', a: '駿河屋公式サイトの「買取検索」から商品名やJANコードで検索できます。ただし表示価格は「完品・美品」の場合の上限価格であり、実際の査定では状態に応じて変動します。' },
  { q: '送料や手数料はかかりますか？', a: '送料は「あんしん買取」が見積金額3,000円以上、「かんたん買取」が30点以上で着払いにできます。1箱あたり1,500円未満の場合は送料を請求される場合があります。別途、通信買取手数料として「かんたん買取」は銀行振込660円・現金書留880円、「あんしん買取」は銀行振込880円・現金書留990円が買取合計額から差し引かれます（公式 買取Q&A）。' },
  { q: '査定額に納得できない場合はキャンセルできますか？', a: '商品発送後に査定額に納得できない場合は、全商品または一部商品を返却してもらえます。返送料は利用者負担です。承諾後のキャンセルはできず、「かんたん買取」で自動承諾を選んだ場合はキャンセル・返送ができません（公式 買取Q&A）。' },
  { q: '店舗での買取はできますか？', a: '公式の店舗一覧では、駿河屋リアルストア110店舗・フレンドリーショップ50店舗の計160店舗（2026年10月16日時点）が全国にあります。秋葉原・池袋・名古屋・大阪日本橋などには買取センターもあります。店頭買取の受付内容は店舗ごとに異なるため、来店前に各店舗のページでご確認ください。' },
  { q: '現行のSwitchやPS5のソフトも買取対象ですか？', a: '現行タイトルも買取対象で、商品ページで買取価格を事前に確認できます。宅配では通信買取手数料（660〜990円）が差し引かれるため、少数のソフトを売る場合は手数料を引いた手取りで他社と比較することをおすすめします。' },
];

export default function SurugayaReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "駿河屋の買取の評判・口コミ｜ヒカカク493件の星分布と手数料・レトロゲームの減額基準を検証", "datePublished": "2026-03-15", "dateModified": "2026-10-18", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: '駿河屋' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>レトロゲーム専門</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            駿河屋<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>評判・口コミのレビュー</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            駿河屋は、商品ごとの買取価格を公式サイトで公開している中古ホビー・ゲームの買取サービスです。ヒカカクの口コミは493件・総合2.57点で、★1が213件、★5が95件と評価が分かれています（2026年10月18日確認）。評価が分かれる主な理由は、宅配の通信買取手数料（660〜990円）、査定期間（到着後4〜14日）、箱・説明書の欠品による減額です。
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
                <li>+ レトロゲームも買取対象で、古い商品の経年劣化は減額対象外</li>
                <li>+ 全国160店舗（2026年10月16日時点）と宅配の両方で売れる</li>
                <li>+ 買取価格がサイトで事前に確認できる</li>
                <li>+ 査定後のキャンセルは一部商品だけの返却も可能</li>
                <li>+ 商品ごとの査定内訳が確認可能</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- 査定に時間がかかる（公式目安は到着後4〜14日）</li>
                <li>- 宅配は通信買取手数料660〜990円が差し引かれる</li>
                <li>- キャンセル時の返送料は自己負担</li>
                <li>- 少量だと送料がかかる場合あり（1箱1,500円未満など）</li>
                <li>- 査定結果の連絡から5日以内に返答しないと承諾扱いになる</li>
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
              <li>・レトロゲーム（ファミコン・スーパーファミコン・セガサターン等）を売りたい方</li>
              <li>・限定版や初回特典付きのゲームを持っている方</li>
              <li>・コレクションを手放すことを検討しているコレクターの方</li>
              <li>・事前に買取価格を確認してから売りたい方</li>
              <li>・査定に2週間程度かかっても問題ない方</li>
            </ul>
          </div>
        </section>

        {/* 公式仕様・会社情報 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />駿河屋の公式仕様・会社情報（2026年10月18日確認）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <tbody>
                <tr><th>運営会社</th><td className="text-sm">株式会社駿河屋（旧・株式会社エーツー、2025年5月1日社名変更）</td></tr>
                <tr><th>古物商許可</th><td className="text-sm">静岡県公安委員会 第491140002748号</td></tr>
                <tr><th>所在地</th><td className="text-sm">静岡県静岡市葵区伝馬町5-4</td></tr>
                <tr><th>送料無料の条件</th><td className="text-sm">「あんしん買取」＝見積金額3,000円以上で無料（着払い）／「かんたん買取」＝買取点数30点以上で無料（ゆうパック着払い）。1箱あたり買取金額1,500円未満は別途送料の場合あり</td></tr>
                <tr><th>通信買取手数料</th><td className="text-sm">かんたん買取：銀行振込660円・現金書留880円／あんしん買取：銀行振込880円・現金書留990円（買取合計額から差引）</td></tr>
                <tr><th>査定日数</th><td className="text-sm">あんしん買取の見積もり連絡は2〜4日。商品到着後の査定は通常4〜14日程度</td></tr>
                <tr><th>返答期限</th><td className="text-sm">査定結果の連絡から5日以内に返答がない場合は承諾とみなされる</td></tr>
                <tr><th>入金</th><td className="text-sm">承諾の確認後、金融機関の3営業日以内に送金（土日祝は送金なし）。初回は住所確認の簡易書留の受け取りが必要</td></tr>
                <tr><th>キャンセル</th><td className="text-sm">全商品または一部商品の返却が可能。返送料は自己負担。承諾後のキャンセル不可。かんたん買取で「自動承諾」を選ぶとキャンセル・返送不可</td></tr>
                <tr><th>店舗</th><td className="text-sm">駿河屋リアルストア110店舗・フレンドリーショップ50店舗（2026年10月16日時点）</td></tr>
                <tr><th>本人確認</th><td className="text-sm">本人確認書類の画像アップロード（2025年12月2日以降、健康保険証は不可・資格確認書は可）</td></tr>
                <tr><th>事前価格確認</th><td className="text-sm">「あんしん買取」は事前見積もり可／「かんたん買取」は合計のみで個別価格は不可。商品ページに買取価格表示あり</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋公式（特定商取引法表記・あんしん買取/かんたん買取案内・買取Q&A・減額基準リスト・店舗一覧、2026年10月18日閲覧）。6月時点で出ていた「かんたん買取の一時停止」告知は、10月18日時点では表示されていません。</p>
        </section>

        {/* 口コミ傾向（出典付き） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />口コミ・評判の傾向</h2>
          <div className="glass-card p-6">
            <p className="text-sm mb-3" style={{ color: 'var(--color-text-light)' }}>
              買取比較サイト「ヒカカク!」での駿河屋の総合評価は<strong>2.57点（5点満点）・口コミ493件</strong>（2026年10月18日確認）です。星別の件数は次のとおりで、★1が全体の43.2%を占める一方、★4以上も36.3%あり<strong>評価が二極化</strong>しています。
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="comparison-table">
                <thead><tr><th>星</th><th>件数</th><th>割合</th></tr></thead>
                <tbody>
                  <tr><td>★5</td><td>95件</td><td>19.3%</td></tr>
                  <tr><td>★4</td><td>84件</td><td>17.0%</td></tr>
                  <tr><td>★3</td><td>41件</td><td>8.3%</td></tr>
                  <tr><td>★2</td><td>60件</td><td>12.2%</td></tr>
                  <tr><td>★1</td><td>213件</td><td>43.2%</td></tr>
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold mb-1" style={{ color: 'var(--color-electric-green)' }}>良い評価の傾向</p>
                <ul className="space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・あんしん買取で事前見積もり通りの金額がついた</li>
                  <li>・レア・限定版で他社より高い査定になった</li>
                  <li>・減額時に理由を説明してくれた</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-1" style={{ color: 'var(--color-accent-orange)' }}>気になる評価の傾向</p>
                <ul className="space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・手数料・送料の実費で手取りが目減りした</li>
                  <li>・事前見積もりと最終査定額に差が出た（完品前提のため）</li>
                  <li>・繁忙期は査定・入金に時間がかかった</li>
                </ul>
              </div>
            </div>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ヒカカク!「駿河屋」口コミページ（星別件数は2026年10月18日確認、傾向の整理は2026年6月18日閲覧分）。割合は当サイトで算出しています。ヒカカクは店頭買取と宅配買取の口コミを合算しているため、宅配だけの評価とは異なる可能性があります。当サイトでは体験談の創作は行っていません。</p>
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
            駿河屋で<span style={{ color: 'var(--color-electric-green)' }}>レトロゲームの査定</span>を依頼する
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            送る前に公式サイトの商品ページで買取価格を確認できます。手数料（660〜990円）を差し引いた手取り額で比較してから申し込むことをおすすめします。
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
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のサービスとの比較</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/review/hikakaku/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-orange text-xs mb-2 inline-block">一括査定</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社の一括査定で最高値を比較</p>
            </Link>
            <Link href="/review/game-oukoku/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-blue text-xs mb-2 inline-block">ゲーム専門</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲーム王国</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ゲーム専門スタッフによる査定</p>
            </Link>
          </div>
        </section>
        {/* 関連記事 */}
        <section style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--color-accent-soft-weak)', borderRadius: '12px', borderLeft: '3px solid var(--color-electric-green)' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>関連記事</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/which-is-best/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取はどこがいい？用途別おすすめ比較</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/kaitori-ranking/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取おすすめランキング15選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/retro/" style={{ color: 'var(--color-electric-green)' }}>レトロゲーム機買取ガイド</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/gameboy/" style={{ color: 'var(--color-electric-green)' }}>ゲームボーイ買取ガイド</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/method/online/" style={{ color: 'var(--color-electric-green)' }}>宅配買取の流れとコツ</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/price-guide/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取価格ガイド</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/preparation/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取前の準備ガイド</Link></li>
          </ul>
        </section>

        <AuthorBox />
      </div>
    </>
  );
}
