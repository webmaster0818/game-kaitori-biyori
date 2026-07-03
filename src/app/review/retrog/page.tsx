import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'レトログの評判・口コミは怪しい？【2026年7月】レトロゲーム専門買取の実態・公開価格表を検証',
  description:
    'レトログ（RETROG・株式会社山徳）の評判・口コミを徹底検証。約40機種の買取価格表を公式公開、箱なし・説明書なし・電源が入らないジャンク級も買取可という公式明記の実態、送料無料・宅配キット最大10箱・査定1〜3営業日の条件、キャンセル時の注意点（全点返送・返送料自己負担）まで公式情報（2026年7月確認）で解説します。',
  keywords: ['レトログ 評判', 'レトログ 口コミ', 'レトログ 買取', 'レトロゲーム 買取 宅配', 'レトログ 怪しい'],
  openGraph: {
    title: 'レトログの評判・口コミは怪しい？【2026年7月】レトロ専門買取を検証',
    description: 'レトロゲーム専門宅配買取レトログの実態を公式情報と口コミ傾向で検証。価格表公開・ジャンクOKの実力とは。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: 'レトロゲーム専門の宅配買取', description: 'ファミコン・スーパーファミコン・ディスクシステムなど約40機種を専門に扱う宅配買取サービス。箱に詰めて送るだけで自宅で完結し、店頭に持ち込む必要がありません。' },
  { title: '機種別の買取価格表を公式公開', description: '公式サイトの買取価格リストで、機種ごとに本体・ソフト・周辺機器の高額買取価格を公開しています。「送ってみるまで分からない」業者が多い中、事前に相場を確認できるのは大きな安心材料です（当サイトの週次価格調査でも参照している公開データです）。' },
  { title: '箱なし・説明書なし・ジャンク級もOKと公式明記', description: '公式サイトに、箱・説明書がなくても、汚れ・傷が多くても、電源が入らない・映像が映らない・音が出ない状態でも買取可能と明記されています。レトロゲーム特有の「状態が悪い品」の受け皿になります。' },
  { title: '無料の宅配キット最大10箱・スピード対応', description: '梱包用の無料宅配キット（小・大2サイズ）を最大10箱まで用意。査定は到着から通常1〜3営業日、買取了承・本人確認後2営業日以内に入金という明確なスピード表記があります。送料は買取成立時無料です。' },
];

const dislikeReasons = [
  { reason: '「査定が安かった」という声', fact: 'まとめ売りした際の総額が期待より低かったという口コミがレビューサイトに見られます（レア品を含む大量売却で他社査定の方が高かったという報告例も）。機種別価格表に載る人気品は相場が明確ですが、リストにない品は評価が分かれやすいため、プレミア品は単品査定の専門店（駿河屋等）との比較がおすすめです。' },
  { reason: 'キャンセル時は全点返送・返送料が自己負担', fact: '公式の取引条件で、査定に納得できない場合のキャンセルは「すべての品物の返送」のみ（一部だけ返してもらうことは不可）で、返送料は自己負担です。大量に送ってからキャンセルすると返送費がかさむため、迷う品・レア品は最初から分けておくのが安全です。' },
  { reason: '「怪しい」と検索されることがある', fact: '運営の株式会社山徳は1990年設立・石川県野々市市の実在企業で、古物商許可（石川県公安委員会 第511010007835号）を取得済み。着物買取「着物10」など複数のリユースサービスを運営する会社で、いわゆる実態不明の業者ではありません。「怪しい」という検索は宅配買取そのものへの警戒感が主因とみられます。' },
];

const faqs = [
  { q: 'レトログは怪しい業者ですか？', a: '運営元は株式会社山徳（石川県野々市市・1990年設立）で、石川県公安委員会の古物商許可（第511010007835号）を取得した正規のリユース事業者です。会社は「着物10」「トレトク」など複数の宅配買取サービスを運営しています。買取価格表を公式公開している点も透明性の面で評価できます。' },
  { q: '箱なし・説明書なしのレトロゲームでも売れますか？', a: 'はい。公式サイトに、箱・説明書がない品、汚れや傷が多い品、電源が入らない・映像が映らない・音が出ないといった動作不良品でも買取可能と明記されています。他店で断られた状態の品の受け皿として使えます。' },
  { q: '送料やダンボール代はかかりますか？', a: '買取成立時の送料は無料で、無料の宅配キット（小・大2サイズ）を最大10箱まで送ってもらえます。自分の箱で送ることも可能です。なお査定に納得できずキャンセルする場合の返送料は自己負担になります。' },
  { q: '査定や入金はどのくらいのスピードですか？', a: '公式の取引の流れによれば、査定は品物到着から通常1〜3営業日、買取金額の了承と本人確認の完了後、2営業日以内に振込されます。' },
  { q: '買取価格は事前に分かりますか？', a: '公式サイトの買取価格リストで、ファミコン等約40機種の本体・ソフト・周辺機器の高額買取価格が公開されています。リスト掲載品は事前に金額の目安が分かります（リスト外の品は査定次第です）。' },
  { q: 'キャンセルはできますか？', a: 'できますが、条件に注意が必要です。査定額に納得できない場合は「すべての品物」の返送のみ可能（一部返送は不可）で、返送料は自己負担です。手放すか迷っている品やレア品は、最初から送らずに単品査定の業者と比較するのがおすすめです。' },
  { q: 'まとめ売りの特典はありますか？', a: '公式キャンペーンとして「初回利用かつ自分の箱で10点以上送ると買取金額500円アップ（仕分け不要）」が確認できます（2026年7月時点）。キャンペーンは変更される場合があるため、最新の内容は公式サイトでご確認ください。' },
];

export default function RetrogReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "レトログの評判・口コミは怪しい？レトロゲーム専門宅配買取の実態・公開価格表を徹底検証", "datePublished": "2026-07-03", "dateModified": "2026-07-03", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'レトログ' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>レトロ専門・宅配</span>
            <span className="tag-pill text-xs" style={{ background: 'rgba(59,130,246,0.2)', color: '#93C5FD' }}>2026年7月3日 更新</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            レトログの評判・口コミ<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>「怪しい」は本当か徹底検証</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ファミコン〜レトロゲーム約40機種を専門に扱う宅配買取「レトログ」。機種別の買取価格表を公式公開し、箱なし・動作不良でも買取可を明記する専門店です。運営会社・買取条件・キャンセル時の注意点まで、公式サイトの一次情報をもとに整理しました。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://kaitori-retrog.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
              公式サイトで買取価格表を見る
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
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>結論：レトロの「状態が悪い品・まとめ売り」に強い。レア単品は比較を</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              レトログは、古物商許可を持つ株式会社山徳（1990年設立）が運営するレトロゲーム専門の宅配買取で、<strong>約40機種の買取価格表を公式公開</strong>し、<strong>箱なし・説明書なし・電源が入らない品も買取可と明記</strong>している点が強みです。送料・宅配キット無料、査定1〜3営業日・入金2営業日以内とスピード表記も明確。一方、<strong>キャンセルは全点返送のみ・返送料自己負担</strong>のため、手放すか迷うレア品は最初から送らず、<Link href="/review/surugaya/" style={{ color: 'var(--color-electric-green)' }}>駿河屋</Link>など単品査定の専門店と比較するのが賢い使い方です。
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />レトログの4つの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Company Info */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />運営会社情報（公式サイトより）</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>運営会社</th><td className="py-2">株式会社山徳（1990年9月設立・資本金1,000万円）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>所在地</th><td className="py-2">石川県野々市市上林4丁目477番</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>古物商許可</th><td className="py-2">石川県公安委員会 第511010007835号</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>グループサービス</th><td className="py-2">着物10（着物買取）／推しトク／トレトク／ビーレコード など</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>買取方式</th><td className="py-2">宅配買取専門（無料宅配キット最大10箱・送料無料※キャンセル返送は自己負担）</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：レトログ公式サイト・株式会社山徳 会社概要。2026年7月3日確認</p>
          </div>
        </section>

        {/* 注意点 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />利用前に知っておくべき3つのポイント</h2>
          <div className="space-y-4">
            {dislikeReasons.map((r, i) => (
              <div key={i} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>ポイント{i + 1}：{r.reason}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{r.fact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Review Tendency */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />口コミの傾向（レビューサイト調査）</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-electric-green)' }}>好意的な口コミに多い内容</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・ファミコン等の古い品や動作不良品にも値が付いた</li>
                <li>・査定〜入金までのスピードが速かった</li>
                <li>・宅配キットが無料で梱包の手間が少なかった</li>
                <li>・仕分け不要でまとめて送れて楽だった</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>否定的な口コミに多い内容</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・大量に送った割に総額が期待より低かった</li>
                <li>・キャンセル時の返送料の負担が大きかった</li>
                <li>・レア品の評価が専門の単品査定より低いと感じた</li>
              </ul>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※みん評（口コミ161件）・ウリドキ（総合4.0・レビュー300件超）等のレビューサイトに掲載されている口コミの傾向を当サイトで整理したものです（2026年7月調査）。個別の体験を保証するものではありません。</p>
        </section>

        {/* Recommended */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />こんな方におすすめ</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・実家の片付けなどでレトロゲームを箱ごとまとめて処分したい方</li>
              <li>・箱なし・説明書なし・動作不明の品を宅配で送りたい方</li>
              <li>・売る前に機種別の価格表で相場の目安を確認したい方</li>
              <li>・店頭に持ち込まず自宅で完結させたい方</li>
            </ul>
            <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
              レア品・プレミア品を1点ずつ高く売りたい場合は、限定版に強い<Link href="/review/surugaya/" style={{ color: 'var(--color-electric-green)' }}>駿河屋</Link>や、店頭で即現金化できる<Link href="/review/hardoff/" style={{ color: 'var(--color-electric-green)' }}>ハードオフ</Link>との相見積もりがおすすめです。
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
            レトロゲームを<span style={{ color: 'var(--color-electric-green)' }}>箱ごとまとめて</span>売るなら
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            約40機種の価格表を公開。箱なし・動作不良もOK、宅配キット無料で自宅完結です。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://kaitori-retrog.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              公式サイトで買取価格表を見る
            </a>
            <Link href="/software/retro-sell-guide/" className="btn-outline py-3 px-8" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#CBD5E1' }}>
              レトロの売り方ガイドを見る
            </Link>
          </div>
        </section>

        {/* 関連記事 */}
        <section style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(0,230,118,0.05)', borderRadius: '12px', borderLeft: '3px solid var(--color-electric-green)' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>関連記事</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/review/hardoff/" style={{ color: 'var(--color-electric-green)' }}>ハードオフのゲーム買取は安い？評判を検証（ジャンクOK）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/review/surugaya/" style={{ color: 'var(--color-electric-green)' }}>駿河屋の評判・口コミ（レトロ・限定版に強い）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/software/retro-sell-guide/" style={{ color: 'var(--color-electric-green)' }}>実家のレトロゲームを売るなら？高く売る4つのコツ</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/retro/" style={{ color: 'var(--color-electric-green)' }}>レトロゲームの買取相場</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/condition-guide/" style={{ color: 'var(--color-electric-green)' }}>状態別ゲーム買取 許容度マップ（箱なし・傷・ジャンク）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取価格インデックス（毎週実測）</Link></li>
          </ul>
        </section>

        <AuthorBox />
      </div>
    </>
  );
}
