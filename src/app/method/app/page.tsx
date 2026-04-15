import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'フリマアプリ vs 買取業者｜メルカリ・ラクマとゲーム買取を徹底比較【2025年】',
  description:
    'メルカリ・ラクマなどのフリマアプリとゲーム買取業者を10項目で徹底比較。手間・時間・手数料・送料・トラブルリスク・価格差まで。それぞれ向いている人と最適な使い分けがわかります。',
  keywords: ['ゲーム 買取アプリ', 'メルカリ vs 買取', 'メルカリ ゲーム売る', 'ラクマ ゲーム買取', 'フリマアプリ 買取業者 比較'],
  openGraph: {
    title: 'フリマアプリ vs 買取業者｜メルカリ・ラクマとゲーム買取を徹底比較【2025年】',
    description: 'メルカリ・ラクマと買取業者、ゲームを売るならどっちがお得？10項目で比較。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const comparisonItems = [
  { item: '手間', flea: '撮影・出品・質問対応・梱包・発送を全て自分で', kaitori: '申し込んで送るだけ（宅配）/ 持ち込むだけ（店舗）', winner: '買取業者' },
  { item: '売却までの時間', flea: '即売れることもあるが、数日〜数週間かかることも', kaitori: '宅配: 3〜7日 / 店舗: 即日', winner: '状況による' },
  { item: '手数料', flea: 'メルカリ10%・ラクマ6%（売上から自動天引き）', kaitori: '手数料無料が多い', winner: '買取業者' },
  { item: '送料', flea: '出品者負担が主流（らくらくメルカリ便750円〜）', kaitori: '送料無料が多い（宅配買取の場合）', winner: '買取業者' },
  { item: 'トラブルリスク', flea: '値下げ交渉・受取評価遅延・クレーム・返品要求あり', kaitori: '業者との取引のためトラブル極少', winner: '買取業者' },
  { item: '売却価格', flea: '相場に近い価格で売れる可能性あり', kaitori: '相場の50〜70%程度が一般的', winner: 'フリマアプリ' },
  { item: 'まとめ売り', flea: '1点ずつ出品が基本（セット売りは買い手が限られる）', kaitori: 'まとめ売りボーナスあり。大量処分に向いている', winner: '買取業者' },
  { item: 'レトロゲーム', flea: 'コレクター需要で高値がつくことも', kaitori: '一部業者は買取不可。ヒカカク！なら専門業者を見つけやすい', winner: 'フリマアプリ' },
  { item: '個人情報', flea: '匿名配送可能（メルカリ・ラクマとも対応）', kaitori: '氏名・住所・身分証の提出が必要', winner: 'フリマアプリ' },
  { item: '現金化スピード', flea: '売上金の振込申請→翌営業日以降', kaitori: '店舗: 即日現金 / 宅配: 1〜5営業日', winner: '状況による' },
];

const fleaFor = [
  '1点あたりの価値が高いレアゲーム・限定版を売りたい人',
  '撮影・出品・梱包の手間が苦にならない人',
  '少しでも高く売りたい人（時間をかけてOK）',
  'フリマアプリの操作に慣れている人',
  '匿名で売りたい人',
];

const kaitoriFor = [
  '大量のゲームソフトをまとめて処分したい人',
  '手間をかけずにサクッと売りたい人',
  'トラブルを避けたい人',
  '即日現金化したい人（店舗買取）',
  'フリマアプリの操作が面倒な人',
];

const faqs = [
  { q: 'メルカリとラクマ、ゲームを売るならどちらがおすすめ？', a: 'ユーザー数が圧倒的に多いメルカリのほうが売れやすいです。ただしメルカリの手数料は10%、ラクマは6%なので、確実に売れる人気タイトルならラクマのほうが手取りは多くなります。' },
  { q: 'メルカリで売れなかったゲームは買取業者に出すべき？', a: 'はい、フリマアプリで売れ残ったゲームは買取業者に出すのが効率的です。特にまとめ売りならボーナスがつくことも。ヒカカク！で一括査定すれば最高値を見つけられます。' },
  { q: 'フリマアプリの手数料はどのくらいかかりますか？', a: 'メルカリは販売価格の10%、ラクマは6%が手数料として差し引かれます。さらに売上金を銀行口座に振り込む際の振込手数料（メルカリ200円・ラクマ210円）もかかります。' },
  { q: '買取業者の方が確実に売れますか？', a: 'はい、買取業者はほぼ確実に買い取ってくれます。フリマアプリは「いつ売れるかわからない」リスクがありますが、買取業者なら値段さえ合意すれば確実に売却完了。ジャンク品でも買い取ってくれる業者もあります。' },
  { q: 'ゲーム機本体はフリマアプリと買取業者どっちが得？', a: 'Switch等の人気機種は、フリマアプリで相場に近い価格で売れることが多いです。ただし梱包の手間、送料（大型サイズ）、トラブルリスクを考慮すると、買取業者のほうがトータルではお得な場合もあります。' },
  { q: '両方を使い分けるのはアリですか？', a: 'むしろ最適な戦略です。レアゲームや限定版など高値がつくものはフリマアプリで、普通のソフトや大量処分は買取業者に出す使い分けがおすすめ。手間と利益のバランスを考えて判断しましょう。' },
];

export default function AppPage() {
  return (
    <>
      <Breadcrumb items={[{ name: '売り方', href: '/' }, { name: 'フリマアプリ vs 買取業者' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>売り方ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            フリマアプリ vs 買取業者 徹底比較
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            メルカリ・ラクマでゲームを売るか、買取業者に任せるか。手間・手数料・送料・トラブルリスクなど10項目で徹底比較。あなたに合った売り方が見つかります。
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />10項目で徹底比較</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>比較項目</th>
                  <th>フリマアプリ</th>
                  <th>買取業者</th>
                  <th>有利</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((row) => (
                  <tr key={row.item}>
                    <td className="font-bold">{row.item}</td>
                    <td className="text-sm">{row.flea}</td>
                    <td className="text-sm">{row.kaitori}</td>
                    <td className="font-bold" style={{ color: row.winner === '買取業者' ? 'var(--color-electric-green)' : row.winner === 'フリマアプリ' ? '#60A5FA' : 'var(--color-text-light)' }}>{row.winner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Who should use what */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />それぞれ向いている人</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-4" style={{ color: '#60A5FA' }}>フリマアプリが向いている人</h3>
              <ul className="space-y-2">
                {fleaFor.map((item) => (
                  <li key={item} className="text-sm flex items-start gap-2" style={{ color: 'var(--color-text-light)' }}>
                    <span className="shrink-0 mt-1" style={{ color: '#60A5FA' }}>&#9679;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-4" style={{ color: 'var(--color-electric-green)' }}>買取業者が向いている人</h3>
              <ul className="space-y-2">
                {kaitoriFor.map((item) => (
                  <li key={item} className="text-sm flex items-start gap-2" style={{ color: 'var(--color-text-light)' }}>
                    <span className="shrink-0 mt-1" style={{ color: 'var(--color-electric-green)' }}>&#9679;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />結論: 手間なら業者、最大値ならフリマ</h2>
          <div className="glass-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-electric-green)' }}>手間を省きたいなら → 買取業者</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                  撮影・出品・質問対応・梱包・発送の全てをプロに任せられます。特に大量処分やまとめ売りは圧倒的に楽。ヒカカク！で一括査定すれば最高値も逃しません。
                </p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: '#60A5FA' }}>最大値で売りたいなら → フリマアプリ</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                  レアゲームや限定版は市場価格に近い金額で売れる可能性があります。ただし手数料・送料・トラブルリスクを差し引いた「手取り額」で比較することが大切。
                </p>
              </div>
            </div>
            <p className="text-sm mt-4 leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              理想的な使い分けは、レアゲームや高額タイトルはフリマアプリで、通常のソフトや大量処分は買取業者に出すこと。両方を賢く活用しましょう。
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
            まずは<span style={{ color: 'var(--color-electric-green)' }}>買取業者の査定額</span>をチェック
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            フリマアプリで出品する前に、買取業者の査定額を知っておくと判断基準になります。
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
            <Link href="/method/shop/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>店舗買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>即日現金化・持ち込み買取ガイド</p>
            </Link>
            <Link href="/method/high-price/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>高く売るコツ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>買取価格を最大化する10のテクニック</p>
            </Link>
          </div>
          <div className="mt-4">
            <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連する比較ガイド</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/compare/mercari-vs-kaitori/" className="glass-card p-4 card-hover block">
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>メルカリ vs 買取業者</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>12項目の詳細比較・金額シミュレーション</p>
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
