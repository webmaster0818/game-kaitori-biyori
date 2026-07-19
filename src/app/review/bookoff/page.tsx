import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ブックオフのゲーム買取は安い？評判・口コミ【2026年7月】高価買取リストと減額の実態を検証',
  description:
    'ブックオフのゲーム買取は安い？全国900店舗超の最大手を公式仕様と口コミで徹底検証。店頭即日現金化・本やDVDのまとめ売りが強みな一方、人気作以外やレトロは査定が伸びにくい傾向も。宅配の送料・返送料・古物商許可番号（神奈川県公安委員会 第452760001146号）まで掲載。送る前に毎週実測の価格DBで相場を確認できます。',
  keywords: ['ブックオフ 買取', 'ブックオフ ゲーム買取 口コミ', 'ブックオフ 査定', 'ゲーム 店頭買取', 'ブックオフ 評判'],
  openGraph: {
    title: 'ブックオフのゲーム買取は安い？評判・口コミ【2026年7月】減額の実態を検証',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ブックオフの口コミ・評判｜全国最大手リサイクルショップのゲーム買取", "datePublished": "2026-03-15", "dateModified": "2026-06-18", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
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
        {/* Conclusion */}
        <section className="mb-12">
          <div className="glass-card p-6" style={{ borderLeft: '4px solid var(--color-electric-green)' }}>
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>結論：「近くで今すぐ・まとめて処分」に強い最大手。ただし査定は相場次第</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              ブックオフは全国900店舗超で<strong>店頭に持ち込めば即日現金化</strong>でき、本・CD・DVDもまとめて売れる手軽さが最大の強みです（宅配は集荷・振込手数料とも無料）。一方、口コミでは「査定額の低さ」への不満が最多で、<strong>人気作以外・状態の悪い品・レトロや希少タイトルは値が伸びにくい</strong>傾向があります。「安いのでは？」と不安な方は、送る前に当サイトが<strong>毎週実測している買取価格DB</strong>で今の相場と他店の価格を確認してから決めるのが安全です。
            </p>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              関連：<Link href="/software/high-value/" style={{ color: 'var(--color-electric-green)' }}>今どこが一番高い？ゲーム買取価格DB（実測）で確認する</Link>／<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>今週の買取価格インデックスを見る</Link>
            </p>
          </div>
        </section>

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

        {/* 公式仕様・会社情報 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ブックオフ宅配買取の公式仕様・会社情報（2026年6月18日時点）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <tbody>
                <tr><th>運営会社</th><td className="text-sm">ブックオフコーポレーション株式会社</td></tr>
                <tr><th>古物商許可</th><td className="text-sm">神奈川県公安委員会 第452760001146号</td></tr>
                <tr><th>所在地</th><td className="text-sm">神奈川県相模原市南区古淵2-14-20</td></tr>
                <tr><th>送料</th><td className="text-sm">宅配買取は集荷・振込手数料とも無料（お客様負担なし）。1申込で最大19箱まで</td></tr>
                <tr><th>申込点数の条件</th><td className="text-sm">書籍・コミック10点以上／ゲーム・DVD・CDのいずれか3点以上／買取1,000円以上のソフト1点、ほかジャンルは1点から</td></tr>
                <tr><th>入金</th><td className="text-sm">商品到着（集荷）から1週間程度で振込</td></tr>
                <tr><th>キャンセル返送料</th><td className="text-sm">返送はお客様負担（目安1箱1,300円前後）。「かんたん承認」コースは返却不可で、返送を残すには「あんしん返送コース」を選択</td></tr>
                <tr><th>梱包キット</th><td className="text-sm">無料ダンボール提供は終了。手持ちの箱・厚手紙袋を利用、または公式で1枚200円（税込）購入</td></tr>
                <tr><th>本人確認</th><td className="text-sm">運転免許証・マイナンバーカード（表面）等の画像アップロード</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ブックオフ宅配買取公式（sell.bookoff.co.jp）・規制対応開示・サポートFAQ（2026年6月18日閲覧）。※公式の「ゲーム高価買取情報」に載る価格は<strong>店舗での買取価格</strong>で、宅配買取の価格とは異なる旨が公式に明記されています。</p>
        </section>

        {/* 口コミ傾向（出典付き） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />口コミ・評判の傾向</h2>
          <div className="glass-card p-6">
            <p className="text-sm mb-3" style={{ color: 'var(--color-text-light)' }}>
              買取比較サイト「ヒカカク!」でのブックオフの総合評価は<strong>3.32点（5点満点）・口コミ1,759件</strong>、否定的評価は約23.4%（2026年6月18日閲覧）。賛否が分かれる「使い方次第」のサービスです。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold mb-1" style={{ color: 'var(--color-electric-green)' }}>良い評価の傾向</p>
                <ul className="space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・集荷無料・送料無料で手軽に大量処分できる</li>
                  <li>・対応が早く、まとめて引き取ってもらえる</li>
                  <li>・最新ゲーム（Switch/PS5新作）は高価買取の対象</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-1" style={{ color: 'var(--color-accent-orange)' }}>気になる評価の傾向</p>
                <ul className="space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・査定額の低さへの不満が最多</li>
                  <li>・古いソフト・状態の悪いものは値がつきにくい</li>
                  <li>・専門店に比べレトロ・希少タイトルは安くなりがち</li>
                </ul>
              </div>
            </div>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ヒカカク!「ブックオフ」口コミページ（2026年6月18日閲覧）。評価は個人の体験に基づくもので、品目・状態により異なります。当サイトでは体験談の創作は行っていません。</p>
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
        {/* 関連記事 */}
        <section style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(0,230,118,0.05)', borderRadius: '12px', borderLeft: '3px solid var(--color-electric-green)' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>関連記事</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/which-is-best/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取はどこがいい？用途別おすすめ比較</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/kaitori-ranking/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取おすすめランキング15選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/switch/" style={{ color: 'var(--color-electric-green)' }}>Switch買取おすすめ3選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/ps5/" style={{ color: 'var(--color-electric-green)' }}>PS5買取おすすめ3選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/method/shop/" style={{ color: 'var(--color-electric-green)' }}>店舗持ち込み買取の流れとコツ</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/preparation/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取前の準備ガイド</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/bulk/" style={{ color: 'var(--color-electric-green)' }}>まとめ売りで高く売るコツ</Link></li>
          </ul>
        </section>

        <AuthorBox />
      </div>
    </>
  );
}
