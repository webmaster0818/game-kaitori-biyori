import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'トレーダーのゲーム買取｜買取価格の調べ方・使い方・送料【2026年】秋葉原の老舗',
  description:
    'トレーダー（秋葉原）のゲーム買取価格は公式e-trader.jpの買取価格検索で調べられます（1日1回程度更新・実測例マリオカート8DX 3,800円）。店頭持ち込みと宅配のやり方、送料（5点以上で無料・キャンセル返送は着払い）、査定3日以内・振込2〜3日の流れまで公式情報で解説。他社との今週の価格比較も。',
  keywords: ['トレーダー 買取', 'トレーダー 買取価格', 'トレーダー 買取検索', 'トレーダー 秋葉原 買取', 'e-trader 買取', 'トレーダー ゲーム買取'],
  openGraph: {
    title: 'トレーダーのゲーム買取｜買取価格の調べ方・使い方・送料【2026年】',
    description: '秋葉原の老舗トレーダーのゲーム買取価格の調べ方・宅配のやり方・送料を公式情報で解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: '1999年設立・秋葉原の老舗ゲームショップ', description: '株式会社トレーダー（東京都千代田区外神田・古物商許可301039903890）が運営。秋葉原に本店・2号店の実店舗を構える、ゲーム売買の老舗として知られる存在です。買取サイトはe-trader.jpで、新品通販のtrader.co.jpとは別サイトです。' },
  { title: 'レトロ・海外ゲームまで届く品揃えの広さ', description: '現行機はもちろん、レトロゲームや海外ゲームまで買取対象に含む広いカバレッジが特徴。秋葉原の店頭では珍しいタイトルの持ち込みにも対応してきた実績があり、品揃え・マニア対応への好意的な言及が口コミ傾向でも見られます。' },
  { title: '参考買取価格を毎日更新で公開', description: '公式の買取価格検索でTVゲームの参考価格が公開されており、「数日前の参考買取価格・1日1回程度更新」と更新頻度まで公式に注記されています。当サイト実測（2026年7月7日）ではマリオカート8 デラックス3,800円・Switch有機EL 26,000円等が掲載されていました。' },
  { title: '査定3日以内・振込2〜3日のスピード感', description: '宅配（通信買取）は商品到着日を含め3日以内に査定案内、承諾後2〜3日で振込という日数が公式に明記されています。日数が読める点は、記載のない業者より計画を立てやすいポイントです。' },
];

const dislikeReasons = [
  { reason: 'キャンセル時の返送は着払い（利用者負担）', fact: '査定額に納得できず返送してもらう場合、返送料は着払い＝利用者負担と規約に明記されています。返送無料のソフマップ（ラクウル）等と違い、「とりあえず送って考える」使い方には向きません。送る前に参考価格の確認が必須です。' },
  { reason: '送料無料には5点以上の条件がある', fact: '宅配の送料無料は対象商品（TVゲーム・PCゲーム・BD/DVD・フィギュア・プラモデル）5点以上が条件。満たさない場合は元払い＝利用者負担です。少量売却なら店頭か、送料条件のない他社が有利です。' },
  { reason: '出張買取はない・本人確認は書類同梱式', fact: '買取方法は店頭と宅配の2種で、出張買取の公式記載はありません。また本人確認はeKYCではなく、本人確認書類のコピーを荷物に同梱する昔ながらの方式です（免許証・マイナンバーカード表面・パスポート等）。' },
];

const faqs = [
  { q: 'トレーダーのゲーム買取の送料は無料ですか？', a: '対象商品（TVゲーム・PCゲーム・BD/DVD・フィギュア・プラモデル）5点以上で送料無料です（成年コミックは20冊以上・グッズは30点以上）。5点未満は元払い＝利用者負担になります。また査定額に納得できなかった場合の返送は着払い＝利用者負担です（2026年7月7日規約確認）。' },
  { q: '買取価格は事前に分かりますか？', a: '公式の買取検索（e-trader.jp）でTVゲームの参考買取価格が公開されています。「数日前の参考価格・1日1回程度更新・買取保証なし」と公式に注記されているため、あくまで目安です。当サイト確認時点（2026年7月7日）ではマリオカート8 デラックス3,800円・Switch有機ELネオン26,000円等でした。' },
  { q: '査定や振込までどのくらいかかりますか？', a: '商品到着日を含め3日以内に査定結果の案内、承諾後2〜3日で振込と公式に明記されています（初回は本人確認書類の確認後）。日数が公式に示されている点は安心材料です。' },
  { q: '本人確認はどうやりますか？', a: '本人確認書類（運転免許証・マイナンバーカード表面・健康保険資格確認書・パスポート・3ヶ月以内の住民票原本のいずれか）のコピーを商品と一緒に箱に同梱する方式です。振込先は本人名義の口座に限られます。' },
  { q: 'キャンペーンはありますか？', a: '常設キャンペーンの記載はなく、期間限定型です。2026年7月7日確認時点では、通信買取限定（7/8〜7/23到着分）でPS5・Switch・Switch 2ソフト等の査定1,000円以上の対象商品1本につき+200円のキャンペーンが告知されていました。時期により内容が変わるため公式サイトでご確認ください。' },
  { q: '同じソフトを複数本売れますか？', a: '規約上、同一タイトルを複数売る場合は減額の対象になることがあります。またオンライン専用・オンライン認証必須のソフトも減額対象です（未開封は除く）。まとめ売り前に規約の確認をおすすめします。' },
];

export default function TraderReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "トレーダーのゲーム買取の評判・口コミと送料条件を徹底検証", "datePublished": "2026-07-07", "dateModified": "2026-07-07", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'トレーダー' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>秋葉原・レトロ対応</span>
            <span className="tag-pill text-xs" style={{ background: 'rgba(59,130,246,0.2)', color: '#93C5FD' }}>2026年7月7日 更新</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            トレーダーのゲーム買取<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>秋葉原の老舗｜買取価格の調べ方・使い方・送料</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            1999年設立・秋葉原に実店舗を構える老舗トレーダー。レトロから海外ゲームまで届く品揃えと毎日更新の参考価格公開が強みですが、宅配買取には「5点以上で送料無料」「キャンセル返送は着払い」という他社と異なる条件があります。公式情報（2026年7月7日確認）で使いどころを整理しました。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.e-trader.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
              公式サイトで買取価格を見る
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
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>結論：「秋葉原に行ける人・5点以上まとめて送る人」の選択肢</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              トレーダーは秋葉原の店頭に持ち込めるならレトロ・海外ゲーム含め幅広く相談できる老舗です。宅配は<strong>5点以上で送料無料・査定3日以内・振込2〜3日</strong>と日数が明確な一方、<strong>キャンセル時の返送が着払い（利用者負担）</strong>のため、送る前に公式の参考価格で金額の目安を必ず確認しましょう。「少量だけ・査定を見てから決めたい」なら返送無料の<Link href="/review/sofmap/" style={{ color: 'var(--color-electric-green)' }}>ソフマップ（ラクウル）</Link>、人気作の相場比較は<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>毎週実測の価格インデックス</Link>が便利です。
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />トレーダーのゲーム買取 4つの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 使い方・価格の調べ方（2026-07 追加: 「トレーダー 買取」の利用意図に直答） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />トレーダー買取の使い方と価格の調べ方</h2>
          <div className="glass-card p-6 mb-4">
            <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>買取価格を調べる：公式の買取価格検索（e-trader.jp）</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              トレーダーの買取価格は、買取サイト<strong>e-trader.jp</strong>の買取価格検索で公開されています。公式に「数日前の参考買取価格・1日1回程度更新」と注記されているとおり、目安として使うのが正解です（実際の査定額は商品の状態で変わります）。当サイト実測（2026年7月7日）ではマリオカート8 デラックス3,800円・Switch有機EL 26,000円等が掲載されていました。他社と比べたい場合は、当サイトの<a href="/price-index/" className="underline font-bold" style={{ color: 'var(--color-deep-blue)' }}>今週の実測価格比較（毎週更新）</a>とあわせて確認すると「今どこが高いか」まで分かります。
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>店頭買取（秋葉原本店・2号店）</h3>
              <ol className="text-sm leading-relaxed space-y-1.5" style={{ color: 'var(--color-text-light)' }}>
                <li>1. 売りたい商品と本人確認書類（古物営業法で必要）を持って店舗へ</li>
                <li>2. 店頭で査定を受け、金額に納得すればその場で現金化</li>
                <li>3. レトロ・海外ゲームなど珍しいタイトルの持ち込みにも対応してきた老舗です</li>
              </ol>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>宅配（通信）買取</h3>
              <ol className="text-sm leading-relaxed space-y-1.5" style={{ color: 'var(--color-text-light)' }}>
                <li>1. <strong>対象商品5点以上で送料無料</strong>（5点未満は条件を要確認）</li>
                <li>2. 商品を発送 → <strong>到着日を含め3日以内に査定案内</strong></li>
                <li>3. 承諾後<strong>2〜3日で振込</strong>。キャンセル時の返送は<strong>着払い（利用者負担）</strong>な点だけ注意</li>
              </ol>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：トレーダー公式（e-trader.jp 通信買取ガイド・買取規約）2026年7月7日確認。手順・条件は変更される場合があります。</p>
        </section>

        {/* Company Info */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />運営会社情報（公式サイトより）</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>運営会社</th><td className="py-2">株式会社トレーダー（設立1999年3月）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>本社</th><td className="py-2">東京都千代田区外神田4-2-1 トレーダー本店ビル</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>古物商許可</th><td className="py-2">東京都公安委員会 301039903890</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>店舗</th><td className="py-2">秋葉原本店・2号店（出張買取の記載なし）</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>宅配条件</th><td className="py-2">対象5点以上で送料無料／キャンセル返送は着払い／査定3日以内・振込2〜3日</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：トレーダー公式サイト（会社概要・通信買取ガイド・買取規約）。2026年7月7日確認。上場・親会社の記載はなし（確認不可）</p>
          </div>
        </section>

        {/* 注意点 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />利用前に知っておきたい注意点と対策</h2>
          <div className="space-y-4">
            {dislikeReasons.map((r, i) => (
              <div key={i} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>注意点{i + 1}：{r.reason}</h3>
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
                <li>・レトロ・海外ゲームまで扱う品揃えの広さ</li>
                <li>・秋葉原店頭での接客への好意的な言及</li>
                <li>・参考価格が公開されていて目安が立てやすい</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>否定的な口コミに多い内容</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・査定額が他店と比べて低かった</li>
                <li>・箱・説明書の傷での減額が厳しい</li>
                <li>・混雑時は店頭で1時間程度待った</li>
              </ul>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※レビューサイト・比較メディアに掲載されている口コミの傾向を当サイトで整理したものです（2026年7月調査）。個別の体験を保証するものではありません。</p>
        </section>

        {/* Recommended */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />こんな方におすすめ</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・秋葉原の店頭に持ち込める方（レトロ・海外ゲームの相談も）</li>
              <li>・対象商品を5点以上まとめて送れる方（送料無料条件クリア）</li>
              <li>・査定・振込の日数が明確な業者がいい方（3日以内査定・2〜3日振込）</li>
              <li>・売る物の参考価格を事前に確認してから送りたい方</li>
            </ul>
            <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
              返送料をかけたくない比較検討派は<Link href="/review/sofmap/" style={{ color: 'var(--color-electric-green)' }}>ソフマップ（ラクウル）</Link>、レトロ専門の相見積もりは<Link href="/review/retrog/" style={{ color: 'var(--color-electric-green)' }}>レトログ</Link>との比較がおすすめです。
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
            レトロも海外ゲームも、<span style={{ color: 'var(--color-electric-green)' }}>秋葉原の老舗</span>に相談
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            参考買取価格を毎日更新で公開。5点以上まとめれば宅配送料無料です。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.e-trader.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              公式サイトで買取価格を見る
            </a>
            <Link href="/" className="btn-outline py-3 px-8" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#CBD5E1' }}>
              他のサービスと比較
            </Link>
          </div>
        </section>

        {/* 関連記事 */}
        <section style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(0,230,118,0.05)', borderRadius: '12px', borderLeft: '3px solid var(--color-electric-green)' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>関連記事</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/review/retrog/" style={{ color: 'var(--color-electric-green)' }}>レトログの評判・口コミ（レトロ専門・価格表公開）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/review/sofmap/" style={{ color: 'var(--color-electric-green)' }}>ソフマップ（ラクウル）の評判・口コミ（返送料無料）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取価格インデックス（今どこが一番高い？）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/software/retro-sell-guide/" style={{ color: 'var(--color-electric-green)' }}>実家のレトロゲームを売るなら？</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/which-is-best/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取はどこがいい？用途別おすすめ比較</Link></li>
          </ul>
        </section>

        <AuthorBox />
      </div>
    </>
  );
}
