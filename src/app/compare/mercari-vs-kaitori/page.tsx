import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'メルカリ vs 買取業者｜ゲームを売るならどっちが得？徹底比較【2025年】',
  description:
    'メルカリと買取業者を12項目で徹底比較。手取り額・手数料・送料・手間・時間・トラブルリスク・大量売り・レトロゲーム・新作ゲーム・周辺機器・返品リスク・個人情報の違いを解説。Switch売却時の手取り金額シミュレーション付き。',
  keywords: ['メルカリ vs 買取業者 どっちが得', 'メルカリ ゲーム 手数料', 'メルカリ 買取 比較', 'ゲーム メルカリ 買取業者'],
  openGraph: {
    title: 'メルカリ vs 買取業者｜ゲームを売るならどっちが得？徹底比較【2025年】',
    description: 'メルカリと買取業者の12項目比較とSwitch売却シミュレーション。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const comparisonItems = [
  { item: '手取り額', mercari: '販売価格から手数料10%+送料を引いた額', kaitori: '査定額がそのまま手取り（手数料無料が多い）', winner: '商品による' },
  { item: '手数料', mercari: '販売価格の10%', kaitori: '無料が多い', winner: '買取業者' },
  { item: '送料', mercari: '出品者負担が主流（750円〜1,700円）', kaitori: '送料無料が多い', winner: '買取業者' },
  { item: '手間', mercari: '撮影・出品文作成・質問対応・梱包・発送', kaitori: '申し込み→送るだけ / 持ち込むだけ', winner: '買取業者' },
  { item: '売却までの時間', mercari: '数時間〜数週間（いつ売れるか不明）', kaitori: '宅配: 3〜7日 / 店舗: 即日', winner: '買取業者' },
  { item: 'トラブルリスク', mercari: '値下げ交渉・受取評価遅延・すり替え詐欺', kaitori: '業者との取引でトラブル極少', winner: '買取業者' },
  { item: '大量売り', mercari: '1点ずつ出品が基本で非常に手間', kaitori: 'まとめ売りボーナスあり、大量処分に最適', winner: '買取業者' },
  { item: 'レトロゲーム', mercari: 'コレクター需要で高値がつくことあり', kaitori: '一部業者は買取不可、専門業者はヒカカク！で探せる', winner: 'メルカリ' },
  { item: '新作ゲーム', mercari: '相場に近い価格で素早く売れる', kaitori: '相場の60〜70%程度', winner: 'メルカリ' },
  { item: '周辺機器', mercari: '需要があれば売れるが時間がかかる', kaitori: 'ティファナ等でまとめて買取可能', winner: '買取業者' },
  { item: '返品リスク', mercari: '「思っていたのと違う」で返品要求されることも', kaitori: '売却後の返品なし', winner: '買取業者' },
  { item: '個人情報', mercari: '匿名配送で住所・名前を開示しなくてOK', kaitori: '身分証提出が必要', winner: 'メルカリ' },
];

const simulation = {
  title: 'Nintendo Switch（通常モデル・美品）売却シミュレーション',
  mercari: {
    salePrice: '25,000円',
    fee: '-2,500円（10%）',
    shipping: '-1,000円（らくらくメルカリ便）',
    total: '21,500円',
  },
  kaitori: {
    hikakaku: '20,000〜22,000円（最大20社比較）',
    uriel: '18,000〜21,000円（出張買取）',
    tifana: '17,000〜20,000円（店舗買取）',
  },
};

const matrix = [
  { situation: 'レアゲーム・限定版を1本売る', recommend: 'メルカリ', reason: 'コレクター需要で市場価格に近い高値が狙える' },
  { situation: '新作ゲームをクリア後すぐ売る', recommend: 'メルカリ', reason: '発売直後は需要が高くメルカリで高値売却しやすい' },
  { situation: '大量のソフト（20本以上）をまとめて処分', recommend: '買取業者', reason: '1点ずつ出品する手間が省けてまとめ売りボーナスも' },
  { situation: 'ゲーム機本体+周辺機器をセットで売る', recommend: '買取業者', reason: 'セットでまとめて査定、梱包や送料の心配も不要' },
  { situation: '即日現金が必要', recommend: '買取業者（店舗/出張）', reason: '店舗持ち込みまたは出張買取で当日現金化' },
  { situation: 'トラブルを絶対に避けたい', recommend: '買取業者', reason: '業者との取引でクレーム・すり替え等のリスクなし' },
];

const faqs = [
  { q: 'メルカリと買取業者、手取り額はどちらが多い？', a: '商品によります。人気の新作ゲームや限定版はメルカリのほうが高くなりがちです。ただしメルカリは手数料10%+送料がかかるため、実際の手取りは表示価格より3,000円以上少なくなることも。一方、買取業者は手数料・送料無料が多く、査定額がそのまま手取りになります。' },
  { q: 'メルカリの手数料10%は高すぎませんか？', a: '手数料10%は一見高く感じますが、メルカリのユーザー数（月間2,000万人以上）による「売れやすさ」を考えると妥当ともいえます。ただし1万円のゲームを売ると手数料1,000円+送料750円=1,750円が引かれるため、手取りは8,250円。買取業者の査定額が9,000円なら業者のほうが得です。' },
  { q: 'メルカリで売れなかった場合はどうすればいい？', a: '1〜2週間出品して売れなければ、値下げするか買取業者に切り替えるのがおすすめです。メルカリで売れ残っている間にも商品の価値は下がっていくため、早めの判断が大切。ヒカカク！で一括査定すれば最高値の業者がすぐ見つかります。' },
  { q: 'メルカリのすり替え詐欺とは？', a: '購入者が「不良品だった」と偽って別の商品（壊れた同型機等）を返送してくる詐欺です。ゲーム機本体で特に報告があります。メルカリ事務局に相談すれば対応してもらえる場合もありますが、完全には防げません。買取業者ではこのリスクはゼロです。' },
  { q: 'ゲーム機本体はメルカリと買取業者どちらがお得？', a: 'Switch等の人気機種はメルカリで高値が狙えますが、送料（大型サイズ1,000〜1,700円）+手数料10%を引くと、買取業者とほぼ同等か業者が有利になるケースも多いです。梱包の手間やトラブルリスクを加味すると、トータルでは買取業者がおすすめです。' },
  { q: 'メルカリと買取業者を両方使うのが最強？', a: 'はい、最も賢い戦略です。レアゲームや限定版など高値がつくものはメルカリで、通常のソフトや大量処分は買取業者にまとめて売る。この使い分けで手間と利益のバランスを最大化できます。' },
];

export default function MercariVsKaitoriPage() {
  return (
    <>
      <Breadcrumb items={[{ name: '比較', href: '/' }, { name: 'メルカリ vs 買取業者' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(96,165,250,0.2)', color: '#60A5FA' }}>比較ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            メルカリ vs 買取業者 どっちが得？
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            メルカリでゲームを売るか、買取業者に任せるか。手取り額・手数料・送料・手間・トラブルリスクなど12項目で徹底比較。Switch売却時の手取りシミュレーションと、状況別の結論マトリクスであなたに最適な売り方がわかります。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />12項目徹底比較</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>比較項目</th>
                  <th>メルカリ</th>
                  <th>買取業者</th>
                  <th>有利</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((row) => (
                  <tr key={row.item}>
                    <td className="font-bold">{row.item}</td>
                    <td className="text-sm">{row.mercari}</td>
                    <td className="text-sm">{row.kaitori}</td>
                    <td className="font-bold" style={{ color: row.winner === '買取業者' ? 'var(--color-electric-green)' : row.winner === 'メルカリ' ? '#60A5FA' : 'var(--color-text-light)' }}>{row.winner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Simulation */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />金額シミュレーション</h2>
          <div className="glass-card p-6">
            <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>{simulation.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h4 className="font-bold text-sm mb-3" style={{ color: '#60A5FA' }}>メルカリで売った場合</h4>
                <div className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                  <div className="flex justify-between"><span>販売価格</span><span>{simulation.mercari.salePrice}</span></div>
                  <div className="flex justify-between"><span>手数料</span><span style={{ color: '#F87171' }}>{simulation.mercari.fee}</span></div>
                  <div className="flex justify-between"><span>送料</span><span style={{ color: '#F87171' }}>{simulation.mercari.shipping}</span></div>
                  <div className="border-t pt-2 mt-2 flex justify-between font-bold" style={{ borderColor: 'var(--color-border)', color: 'var(--color-deep-blue)' }}>
                    <span>手取り</span><span style={{ color: '#60A5FA' }}>{simulation.mercari.total}</span>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h4 className="font-bold text-sm mb-3" style={{ color: 'var(--color-electric-green)' }}>買取業者で売った場合（手取り = 査定額）</h4>
                <div className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                  <div className="flex justify-between"><span>ヒカカク！</span><span style={{ color: 'var(--color-electric-green)' }}>{simulation.kaitori.hikakaku}</span></div>
                  <div className="flex justify-between"><span>買取ウリエル</span><span>{simulation.kaitori.uriel}</span></div>
                  <div className="flex justify-between"><span>ティファナ</span><span>{simulation.kaitori.tifana}</span></div>
                </div>
                <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※ 手数料・送料は業者負担のため査定額がそのまま手取りに</p>
              </div>
            </div>
            <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
              メルカリで25,000円で売れた場合の手取りは21,500円。ヒカカク！で22,000円の査定が出れば、手間もリスクも少ない買取業者のほうがお得になります。
            </p>
          </div>
        </section>

        {/* Decision Matrix */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />結論マトリクス: 状況別おすすめ</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>状況</th>
                  <th>おすすめ</th>
                  <th>理由</th>
                </tr>
              </thead>
              <tbody>
                {matrix.map((row) => (
                  <tr key={row.situation}>
                    <td className="font-bold text-sm">{row.situation}</td>
                    <td className="font-bold" style={{ color: row.recommend.includes('メルカリ') ? '#60A5FA' : 'var(--color-electric-green)' }}>{row.recommend}</td>
                    <td className="text-sm" style={{ color: 'var(--color-text-light)' }}>{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            買取業者の<span style={{ color: 'var(--color-electric-green)' }}>査定額</span>を無料でチェック
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            メルカリに出品する前に、買取業者の査定額を確認しておくと判断基準になります。手数料・送料ゼロの手取り額と比較してみましょう。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連する売り方ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/method/app/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>フリマアプリ vs 買取業者</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>メルカリ・ラクマの10項目比較</p>
            </Link>
            <Link href="/method/online/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>宅配買取ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>流れ・梱包のコツ・送料比較</p>
            </Link>
            <Link href="/method/high-price/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>高く売るコツ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>買取価格を最大化する10のテクニック</p>
            </Link>
          </div>
          <div className="mt-4">
            <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他の比較ガイド</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/compare/hikakaku-vs-uriel/" className="glass-card p-4 card-hover block">
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク vs ウリエル</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>2大サービスの違いを徹底比較</p>
              </Link>
              <Link href="/compare/shop-vs-online/" className="glass-card p-4 card-hover block">
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>店舗 vs 宅配</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>あなたに合った売り方はどっち？</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
