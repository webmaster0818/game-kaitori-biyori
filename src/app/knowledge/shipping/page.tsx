import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ゲーム買取の送料・梱包ガイド｜無料キット・安全な梱包方法',
  description:
    'ゲーム買取の送料無料サービス10社を比較。無料梱包キット対応店、自分で安全に梱包する方法、壊れやすいレトロゲームや限定版の梱包テクニックまで徹底解説。送料で損しない賢い売り方がわかります。',
  keywords: ['ゲーム買取 送料', 'ゲーム買取 梱包', '宅配買取 送料無料', 'ゲーム 梱包方法', '無料梱包キット'],
  openGraph: {
    title: 'ゲーム買取の送料・梱包ガイド｜無料キット・安全な梱包方法',
    description: '送料無料の買取店10社比較と安全な梱包方法を徹底解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const shippingComparison = [
  { shop: 'ヒカカク！', freeShipping: '提携業者による', minItems: '-', freeKit: '業者による', returnShipping: '業者による', note: '複数業者に一括査定。送料条件は各業者で異なる。' },
  { shop: 'ウリエル', freeShipping: '無料', minItems: '1点〜', freeKit: 'あり', returnShipping: '無料', note: '出張買取なら送料・梱包不要。宅配も全国送料無料。' },
  { shop: '駿河屋', freeShipping: '条件付き無料', minItems: '30点以上or3,000円以上', freeKit: 'なし', returnShipping: '有料（自己負担）', note: '条件を満たさないと着払い不可。事前見積もり推奨。' },
  { shop: 'ネットオフ', freeShipping: '無料', minItems: '5点〜', freeKit: 'あり（ダンボール6箱まで）', returnShipping: '有料（自己負担）', note: '集荷サービスあり。ダンボール無料は初回のみの場合あり。' },
  { shop: 'ゲオ（宅配買取）', freeShipping: '無料', minItems: '5点〜', freeKit: 'なし', returnShipping: '有料', note: '店舗持ち込みなら送料不要。宅配は自分でダンボール用意。' },
  { shop: 'ブックオフオンライン', freeShipping: '無料', minItems: '10点〜', freeKit: 'あり（ダンボール・緩衝材）', returnShipping: '無料', note: '10点以上で送料無料。集荷サービスあり。' },
  { shop: 'トレジャーファクトリー', freeShipping: '無料', minItems: '1点〜', freeKit: 'なし', returnShipping: '有料', note: '宅配買取は全国対応。ダンボールは自分で用意。' },
  { shop: 'ゲーム王国', freeShipping: '無料', minItems: '1点〜', freeKit: 'なし', returnShipping: '無料', note: '査定キャンセル時も返送料無料。' },
  { shop: 'ホビーコレクト', freeShipping: '無料', minItems: '1点〜', freeKit: 'あり', returnShipping: '無料', note: '梱包キット無料。査定キャンセルも返送料無料で安心。' },
  { shop: '買取王子', freeShipping: '無料', minItems: '1点〜', freeKit: 'あり（ダンボール5箱まで）', returnShipping: '無料', note: 'ダンボール無料、集荷無料、返送無料の三拍子。' },
];

const packingSteps = [
  { title: 'ダンボールを用意する', description: '本体より一回り大きいダンボールを用意します。スーパーやドラッグストアで無料でもらえます。宅配買取の無料キットを利用するのもおすすめ。', tip: '家電量販店のダンボールは丈夫でおすすめです。' },
  { title: 'ゲーム機本体を緩衝材で包む', description: '本体をプチプチ（エアキャップ）で2〜3重に包みます。特に画面・端子部分は厚めに保護しましょう。', tip: 'プチプチがない場合は新聞紙やタオルで代用可能です。' },
  { title: 'コントローラー・付属品を個別に包む', description: 'コントローラー、ACアダプター、ケーブル類はそれぞれ個別にプチプチで包みます。ケーブルは束ねてから包むと絡みません。', tip: 'スティック部分が折れやすいので特に注意しましょう。' },
  { title: 'ゲームソフトを保護する', description: 'ディスク類はケースに入れた状態で、カートリッジ類は端子に触れないようビニール袋に入れてからプチプチで包みます。', tip: 'ディスクは重ねず、立てて入れると割れにくいです。' },
  { title: 'ダンボールの底に緩衝材を敷く', description: 'ダンボールの底に丸めた新聞紙やプチプチを敷き、衝撃を吸収するクッション層を作ります。', tip: '底面のクッションは3cm以上が理想です。' },
  { title: '商品を配置し隙間を埋める', description: '一番重いもの（本体）を中央に置き、周囲に付属品やソフトを配置。隙間は新聞紙やプチプチで埋めます。', tip: '箱を振って中身が動かないことを確認しましょう。' },
  { title: '上部にも緩衝材を入れて封をする', description: '上部にも緩衝材を入れ、ガムテープでしっかり封をします。「ワレモノ注意」のシールを貼ると安心です。', tip: '透明テープよりクラフトテープの方が剥がれにくいです。' },
];

const fragileItems = [
  { item: 'レトロゲーム機（ファミコン・スーファミ等）', risk: 'プラスチック経年劣化で割れやすい', packing: '本体全体を厚めのプチプチ（4重以上）で包む。端子部分にはカバーを付ける。箱があれば箱ごと梱包。' },
  { item: '限定版・コレクターズエディション', risk: '外箱の角が潰れると価値が大幅に下がる', packing: '外箱の角にダンボールの切れ端を当てて保護。箱全体をプチプチで2重に包む。さらに大きめのダンボールに入れる。' },
  { item: 'ディスク類（CD/DVD/Blu-ray）', risk: '輸送中の振動で傷がつく', packing: '必ずケースに入れた状態で梱包。ケースごとプチプチで包む。立てて入れ、重ねない。' },
  { item: 'コントローラー（スティック付き）', risk: 'スティックが折れる・押し込まれる', packing: 'スティック周りにティッシュや綿を詰めてからプチプチで包む。他の物と当たらないように配置。' },
  { item: '携帯ゲーム機（3DS・Switch Lite等）', risk: '画面が割れる・ヒンジが壊れる', packing: '画面にマイクロファイバー布を当て、プチプチで3重に包む。3DSは閉じた状態で梱包。' },
];

const faqs = [
  { q: '送料無料の条件を満たさない場合、送料はいくらかかりますか？', a: '一般的に宅急便の着払い料金（60サイズで約800〜1,000円、100サイズで約1,300〜1,600円）がかかります。送料を抑えたい場合は、買取点数の条件を満たすか、送料無料の業者を選びましょう。ホビーコレクトや買取王子は1点から送料無料です。' },
  { q: '自分でダンボールを用意する場合、どこで手に入りますか？', a: 'スーパーマーケット、ドラッグストア、コンビニで無料でもらえることが多いです。Amazon等の通販で届いた段ボールの再利用もOKです。100均でもダンボールを購入できます。強度が心配な場合はホームセンターで新品を購入しましょう。' },
  { q: '緩衝材（プチプチ）はどこで買えますか？', a: '100均（ダイソー・セリア等）で手軽に購入できます。ホームセンターならロールで大量購入可能です。プチプチがない場合は、新聞紙を丸めたもの、タオル、古い衣類でも代用できます。' },
  { q: '集荷サービスとは何ですか？', a: '宅配業者が自宅まで荷物を取りに来てくれるサービスです。ブックオフオンライン、ネットオフ、買取王子などが対応しています。コンビニに持ち込む手間が省けるため、大量のゲームを売る場合に特に便利です。' },
  { q: '査定金額に納得できなかった場合、返送料はかかりますか？', a: '業者によって異なります。ホビーコレクト・買取王子・ウリエル・ブックオフオンラインは返送料無料です。駿河屋・ゲオ・トレジャーファクトリーは返送料が自己負担となるため、事前に確認しましょう。' },
  { q: '複数の業者に同時に送ることはできますか？', a: 'はい、可能です。むしろ複数社に査定を依頼して比較するのがおすすめです。ただし、同じ商品を複数社に送ることはできないため、手持ちのゲームを分けて送るか、1社ずつ順番に査定を依頼しましょう。' },
];

export default function ShippingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲーム買取の送料・梱包ガイド｜無料キット・安全な梱包方法", "datePublished": "2026-03-15", "dateModified": "2026-05-24", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '送料・梱包ガイド' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲーム買取の送料・梱包完全ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            送料無料で利用できる買取店10社を徹底比較。無料梱包キット対応店の情報から、自分で安全に梱包する方法、壊れやすいレトロゲームの保護テクニックまで完全網羅します。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新: 2026年5月</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Shipping Comparison Table */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />送料無料の買取店10社比較</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>店舗名</th>
                  <th>送料</th>
                  <th>最低点数</th>
                  <th>無料キット</th>
                  <th>返送料</th>
                </tr>
              </thead>
              <tbody>
                {shippingComparison.map((row) => (
                  <tr key={row.shop}>
                    <td className="font-bold">{row.shop}</td>
                    <td className="text-sm" style={{ color: row.freeShipping === '無料' ? 'var(--color-electric-green)' : 'var(--color-text-light)' }}>{row.freeShipping}</td>
                    <td className="text-sm">{row.minItems}</td>
                    <td className="text-sm" style={{ color: row.freeKit === 'あり' || row.freeKit.startsWith('あり') ? 'var(--color-electric-green)' : 'var(--color-text-light)' }}>{row.freeKit}</td>
                    <td className="text-sm" style={{ color: row.returnShipping === '無料' ? 'var(--color-electric-green)' : '#EF4444' }}>{row.returnShipping}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※ 各社の条件は変更される場合があります。最新情報は各社の公式サイトでご確認ください。（2026年5月時点）</p>
        </section>

        {/* Packing Steps */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />安全な梱包方法 7ステップ</h2>
          <div className="space-y-4">
            {packingSteps.map((item, i) => (
              <div key={item.title} className="glass-card p-5">
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{item.title}</h3>
                    <p className="text-sm mb-2" style={{ color: 'var(--color-text-light)' }}>{item.description}</p>
                    <p className="text-xs px-3 py-1 rounded-full inline-block" style={{ background: 'var(--color-bg-alt)', color: 'var(--color-deep-blue)' }}>
                      Tip: {item.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fragile Items */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />壊れやすいアイテムの梱包方法</h2>
          <div className="space-y-4">
            {fragileItems.map((item) => (
              <div key={item.item} className="glass-card p-5" style={{ borderLeft: '4px solid #F59E0B' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{item.item}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg" style={{ background: 'rgba(239,68,68,0.05)' }}>
                    <p className="text-xs font-bold mb-1" style={{ color: '#EF4444' }}>リスク</p>
                    <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{item.risk}</p>
                  </div>
                  <div className="p-3 rounded-lg" style={{ background: 'rgba(16,185,129,0.05)' }}>
                    <p className="text-xs font-bold mb-1" style={{ color: 'var(--color-electric-green)' }}>梱包方法</p>
                    <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{item.packing}</p>
                  </div>
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
            梱包が完了したら<span style={{ color: 'var(--color-electric-green)' }}>一括査定</span>してみましょう
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            送料無料の買取店に複数査定を依頼して、最高値を見つけましょう。
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
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>10項目の完全チェックリスト</p>
            </Link>
            <Link href="/knowledge/data-delete/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>データ削除・初期化方法</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>機種別の完全ガイド</p>
            </Link>
            <Link href="/compare/shop-vs-online/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>店舗 vs 宅配買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>どっちがお得か徹底比較</p>
            </Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
