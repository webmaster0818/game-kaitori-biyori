import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: '新品ゲームと中古ゲームの買取の違い｜未開封品は高く売れる？【2026年版】',
  description:
    '新品・未開封ゲームと中古ゲームの買取価格差を実例で比較。未開封品売却時の注意点（盗品疑惑対策）、レシート要否、コンディション基準まで徹底解説。',
  keywords: ['ゲーム 新品 中古 買取 違い', '未開封 ゲーム 買取', 'ゲーム 新品 売る', '未開封品 買取価格'],
  openGraph: {
    title: '新品ゲームと中古ゲームの買取の違い｜未開封品は高く売れる？【2026年版】',
    description: '新品・未開封ゲームと中古ゲームの買取価格差を実例で比較。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const priceDifference = [
  { title: 'ゼルダの伝説 ティアーズ オブ ザ キングダム', newPrice: '5,500〜6,500円', usedPrice: '4,500〜5,500円', diff: '約1,000円', note: '人気タイトルは差が小さい' },
  { title: 'FINAL FANTASY VII REBIRTH', newPrice: '5,000〜6,000円', usedPrice: '3,500〜5,000円', diff: '約1,000〜1,500円', note: '発売から時間経過で差が拡大' },
  { title: 'Nintendo Switch（有機EL）', newPrice: '32,000〜38,000円', usedPrice: '25,000〜32,000円', diff: '約5,000〜7,000円', note: 'ハードは差が大きい' },
  { title: 'PS5 Pro', newPrice: '65,000〜75,000円', usedPrice: '55,000〜70,000円', diff: '約5,000〜10,000円', note: '新品未開封のプレミアが顕著' },
  { title: 'DualSense ワイヤレスコントローラー', newPrice: '5,000〜6,000円', usedPrice: '3,000〜4,500円', diff: '約1,500〜2,000円', note: '消耗品のため差が大きい' },
];

const conditionGrades = [
  { grade: '未開封（新品）', description: 'シュリンクラップが未開封。タグ・シール等も未剥がし。', priceImpact: '査定額 最大（定価の70〜90%）', note: 'レシート推奨' },
  { grade: '美品（ほぼ新品）', description: '開封済みだがキズ・汚れなし。付属品完備、説明書も折り目なし。', priceImpact: '未開封の-5〜10%', note: '最も取引が多い' },
  { grade: '良品', description: '軽微なキズ・使用感あり。動作に問題なく、主要付属品あり。', priceImpact: '未開封の-15〜25%', note: '一般的な中古品' },
  { grade: '可', description: '目立つキズ・汚れ・黄ばみあり。動作は問題なし。', priceImpact: '未開封の-30〜50%', note: '箱なし・付属品欠品含む' },
  { grade: '難あり', description: '動作不良・パーツ欠品・重度の損傷あり。', priceImpact: '大幅減額 or 買取不可', note: 'ジャンク扱いになる場合も' },
];

const unopenedCautions = [
  { caution: '盗品疑惑リスク', detail: '未開封品を大量に持ち込むと、盗品を疑われることがあります。特にコンビニや家電量販店のセキュリティシール付きの場合は警戒されます。購入時のレシートを必ず保管しておきましょう。', importance: '重要' },
  { caution: 'レシートの保管', detail: '未開封品の正当性を証明するため、購入レシートがあると査定がスムーズです。レシートがない場合でも買取は可能ですが、身分証明書の確認がより厳格になる場合があります。', importance: '重要' },
  { caution: '初回特典コードの有効期限', detail: '未開封でも初回特典のダウンロードコードに有効期限がある場合、期限切れだと「新品」扱いにならないことがあります。特典コードの期限を確認してから売却しましょう。', importance: '注意' },
  { caution: 'シュリンクの状態', detail: 'シュリンクラップ（ビニール包装）に破れやめくれがあると「開封済み」扱いになり、新品価格が適用されません。保管時はシュリンクを傷つけないよう注意しましょう。', importance: '注意' },
  { caution: '購入から時間が経った未開封品', detail: '発売から長期間経過した未開封品は、「転売目的での大量購入」を疑われることがあります。個人使用目的であったことを説明できるようにしておくと安心です。', importance: '参考' },
];

const faqs = [
  { q: '未開封の新品ゲームはどれくらい高く売れますか？', a: '未開封品は中古品と比べて平均10〜20%高い査定額がつきます。例えばソフトなら500〜1,500円、ハードなら5,000〜10,000円の差が出ることが一般的です。ただし人気タイトルは中古でも需要が高いため、差が小さくなる傾向があります。' },
  { q: '未開封品を売る時にレシートは必須ですか？', a: 'レシートは必須ではありませんが、あると査定がスムーズに進みます。未開封品を古物営業法に基づいて買い取る場合、買取業者は本人確認と商品の出所確認が義務付けられているため、レシートがあると正規購入品であることの証明になります。' },
  { q: '未開封品で盗品と疑われることはありますか？', a: 'はい、未開封品を大量に持ち込んだり、同一タイトルを複数持ち込んだりすると、盗品として疑われる可能性があります。特に発売直後の新作を未開封で売却する場合は注意が必要です。レシートを見せる、身分証明書を提示するなどの対策で問題なく売却できます。' },
  { q: '中古ゲームのコンディションはどうやって判定されますか？', a: '一般的に「未開封」「美品」「良品」「可」「難あり」の5段階で判定されます。外箱のキズ・汚れ、ディスクの状態、付属品の有無、動作確認の結果を総合的に評価します。同じ「中古品」でも美品と可では30〜40%の価格差がつくことがあります。' },
  { q: '開封済みでも「ほぼ新品」として高く売る方法はありますか？', a: 'はい、付属品をすべて揃え、本体やケースを丁寧にクリーニングし、元の梱包状態に近づけることで「美品」判定を受けやすくなります。特にゲーム機は箱の中の仕切りや保護材まで揃っていると高評価です。クリーニングだけで500〜2,000円の差が出ることもあります。' },
  { q: '新品を買ってすぐ売ると損しませんか？', a: '発売直後（1週間以内）であれば、新品の買取価格は定価の70〜90%になることが多いため、実質負担額を1,000〜2,000円に抑えられます。特に人気タイトルは買取価格の下落が緩やかなため、早期売却すれば「レンタル感覚」でプレイできます。中古で買って中古で売るより、差額が小さいケースもあります。' },
];

export default function NewVsUsedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "新品ゲームと中古ゲームの買取の違い｜未開封品は高く売れる？【2026年版】", "datePublished": "2026-03-15", "dateModified": "2026-05-24", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '新品と中古の買取の違い' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            新品ゲームと中古ゲームの買取の違い
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            「未開封の新品ゲームは高く売れる？」「中古との価格差は？」という疑問に実例つきで回答。新品（未開封）と中古の買取価格差、コンディション別の査定基準、未開封品を売る際の注意点（盗品疑惑対策・レシート要否）まで徹底解説します。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 価格差比較表 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />新品と中古の買取価格差（実例）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>商品名</th>
                  <th>新品（未開封）</th>
                  <th>中古（良品）</th>
                  <th>差額</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {priceDifference.map((row) => (
                  <tr key={row.title}>
                    <td className="font-bold text-sm">{row.title}</td>
                    <td className="font-bold" style={{ color: 'var(--color-electric-green)' }}>{row.newPrice}</td>
                    <td className="text-sm">{row.usedPrice}</td>
                    <td className="text-sm">{row.diff}</td>
                    <td className="text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>※ 2026年5月時点の参考価格。店舗・時期により変動します。</p>
        </section>

        {/* コンディション基準 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />コンディション別 査定基準</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>グレード</th>
                  <th>状態</th>
                  <th>買取価格への影響</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {conditionGrades.map((row) => (
                  <tr key={row.grade}>
                    <td className="font-bold">{row.grade}</td>
                    <td className="text-sm">{row.description}</td>
                    <td className="text-sm font-bold" style={{ color: 'var(--color-electric-green)' }}>{row.priceImpact}</td>
                    <td className="text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 未開封品の注意点 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />未開封品を売る際の注意点</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>注意事項</th>
                  <th>詳細</th>
                  <th>重要度</th>
                </tr>
              </thead>
              <tbody>
                {unopenedCautions.map((row) => (
                  <tr key={row.caution}>
                    <td className="font-bold">{row.caution}</td>
                    <td className="text-sm">{row.detail}</td>
                    <td className="font-bold text-sm" style={{ color: row.importance === '重要' ? '#EF4444' : 'var(--color-electric-green)' }}>{row.importance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 高く売るコツ */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />中古品を少しでも高く売るコツ</h2>
          <div className="glass-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>付属品を完備する</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                  外箱、説明書、ケーブル類、コントローラーなどをすべて揃えましょう。特に外箱の有無で2,000〜5,000円の差がつくことがあります。購入時から保管しておくのがベストです。
                </p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>クリーニングを丁寧に</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                  本体やケースの指紋・ホコリを除去し、ディスクは専用クリーナーで拭きましょう。見た目の印象で査定額が500〜2,000円変わります。特にコントローラーのスティック周りは念入りに。
                </p>
              </div>
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
            あなたのゲームの<span style={{ color: 'var(--color-electric-green)' }}>正確な査定額</span>を確認
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            新品・中古問わず、一括査定で最高値がすぐにわかります。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連記事</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/knowledge/preparation/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>売る前の準備</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>初期化・データ消去の手順</p>
            </Link>
            <Link href="/knowledge/boxless/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>箱なし買取ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なしでも高く売るコツ</p>
            </Link>
            <Link href="/knowledge/price-guide/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取相場ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ハード・ソフト別の相場一覧</p>
            </Link>
          </div>
        </section>

        <p className="text-xs mt-8 text-center" style={{ color: 'var(--color-text-light)' }}>最終更新: 2026年5月</p>
        <AuthorBox />
      </div>
    </>
  );
}
