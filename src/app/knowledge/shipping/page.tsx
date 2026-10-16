import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ゲーム買取の送料・梱包ガイド｜無料キット・安全な梱包方法',
  description:
    'ゲーム買取の送料無料サービス10社を比較しています。無料梱包キットに対応する店舗、ご自身で安全に梱包する方法、壊れやすいレトロゲームや限定版の梱包方法について解説します。送料の負担を抑えて売却するための情報をまとめています。',
  keywords: ['ゲーム買取 送料', 'ゲーム買取 梱包', '宅配買取 送料無料', 'ゲーム 梱包方法', '無料梱包キット'],
  openGraph: {
    images: ['/og.png'],
    title: 'ゲーム買取の送料・梱包ガイド｜無料キット・安全な梱包方法',
    description: '送料無料の買取店10社の比較と、安全な梱包方法について解説します。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const shippingComparison = [
  { shop: 'ヒカカク！', freeShipping: '提携業者による', minItems: '-', freeKit: '業者による', returnShipping: '業者による', note: '複数業者に一括査定。送料条件は各業者で異なります。' },
  { shop: 'ウリエル', freeShipping: '無料', minItems: '1点〜', freeKit: 'あり', returnShipping: '無料', note: '出張買取なら送料・梱包は不要です。宅配も全国送料無料です。' },
  { shop: '駿河屋', freeShipping: '条件付き無料', minItems: '30点以上または3,000円以上', freeKit: 'なし', returnShipping: '有料（自己負担）', note: '条件を満たさない場合は着払い不可です。事前の見積もりをおすすめします。' },
  { shop: 'ネットオフ', freeShipping: '無料', minItems: '5点〜', freeKit: 'あり（段ボール6箱まで）', returnShipping: '有料（自己負担）', note: '集荷サービスあり。段ボールの無料提供は初回のみの場合があります。' },
  { shop: 'ゲオ（宅配買取）', freeShipping: '無料', minItems: '5点〜', freeKit: 'なし', returnShipping: '有料', note: '店舗持ち込みなら送料は不要です。宅配の場合は段ボールをご自身で用意します。' },
  { shop: 'ブックオフオンライン', freeShipping: '無料', minItems: '10点〜', freeKit: 'あり（段ボール・緩衝材）', returnShipping: '無料', note: '10点以上で送料無料。集荷サービスあり。' },
  { shop: 'トレジャーファクトリー', freeShipping: '無料', minItems: '1点〜', freeKit: 'なし', returnShipping: '有料', note: '宅配買取は全国対応。段ボールはご自身で用意します。' },
  { shop: 'ゲーム王国', freeShipping: '無料', minItems: '1点〜', freeKit: 'なし', returnShipping: '無料', note: '査定キャンセル時も返送料無料です。' },
  { shop: 'ホビーコレクト', freeShipping: '無料', minItems: '1点〜', freeKit: 'あり', returnShipping: '無料', note: '梱包キット無料。査定キャンセル時も返送料無料です。' },
  { shop: '買取王子', freeShipping: '無料', minItems: '1点〜', freeKit: 'あり（段ボール5箱まで）', returnShipping: '無料', note: '段ボール・集荷・返送がいずれも無料です。' },
];

const packingSteps = [
  { title: '段ボールを用意する', description: '本体より一回り大きい段ボールを用意します。スーパーやドラッグストアで無料で入手できることがあります。宅配買取の無料キットの利用もおすすめします。', tip: '家電量販店の段ボールは丈夫なため、おすすめです。' },
  { title: 'ゲーム機本体を緩衝材で包む', description: '本体をプチプチ（エアキャップ）で2〜3重に包みます。特に画面・端子部分は厚めに保護してください。', tip: 'プチプチがない場合は新聞紙やタオルで代用可能です。' },
  { title: 'コントローラー・付属品を個別に包む', description: 'コントローラー、ACアダプター、ケーブル類はそれぞれ個別にプチプチで包みます。ケーブルは束ねてから包むと絡みません。', tip: 'スティック部分は折れやすいため、特にご注意ください。' },
  { title: 'ゲームソフトを保護する', description: 'ディスク類はケースに入れた状態で、カートリッジ類は端子に触れないようビニール袋に入れてからプチプチで包みます。', tip: 'ディスクは重ねず、立てて入れると割れにくくなります。' },
  { title: '段ボールの底に緩衝材を敷く', description: '段ボールの底に丸めた新聞紙やプチプチを敷き、衝撃を吸収するクッション層を作ります。', tip: '底面のクッションは3cm以上が理想です。' },
  { title: '商品を配置し隙間を埋める', description: '最も重いもの（本体）を中央に置き、周囲に付属品やソフトを配置します。隙間は新聞紙やプチプチで埋めます。', tip: '箱を振って中身が動かないことをご確認ください。' },
  { title: '上部にも緩衝材を入れて封をする', description: '上部にも緩衝材を入れ、ガムテープでしっかり封をします。「ワレモノ注意」のシールを貼ると安心です。', tip: '透明テープよりクラフトテープの方が剥がれにくく、梱包に適しています。' },
];

const fragileItems = [
  { item: 'レトロゲーム機（ファミコン・スーファミ等）', risk: 'プラスチックの経年劣化により割れやすい', packing: '本体全体を厚めのプチプチ（4重以上）で包みます。端子部分にはカバーを付け、箱がある場合は箱ごと梱包します。' },
  { item: '限定版・コレクターズエディション', risk: '外箱の角が潰れると価値が大幅に下がる', packing: '外箱の角に段ボールの切れ端を当てて保護し、箱全体をプチプチで2重に包みます。そのうえで、大きめの段ボールに入れます。' },
  { item: 'ディスク類（CD/DVD/Blu-ray）', risk: '輸送中の振動で傷がつく', packing: '必ずケースに入れた状態で梱包し、ケースごとプチプチで包みます。重ねずに立てて入れます。' },
  { item: 'コントローラー（スティック付き）', risk: 'スティックが折れる・押し込まれる', packing: 'スティック周りにティッシュや綿を詰めてからプチプチで包み、他の物と当たらないように配置します。' },
  { item: '携帯ゲーム機（3DS・Switch Lite等）', risk: '画面が割れる・ヒンジが壊れる', packing: '画面にマイクロファイバー布を当て、プチプチで3重に包みます。3DSは閉じた状態で梱包します。' },
];

const faqs = [
  { q: '送料無料の条件を満たさない場合、送料はいくらかかりますか？', a: '一般的に宅急便の着払い料金（60サイズで約800〜1,000円、100サイズで約1,300〜1,600円）がかかります。送料を抑えたい場合は、買取点数の条件を満たすか、送料無料の業者を選ぶことをおすすめします。ホビーコレクトや買取王子は1点から送料無料です。' },
  { q: '自分で段ボールを用意する場合、どこで手に入りますか？', a: 'スーパーマーケット、ドラッグストア、コンビニで無料で入手できることが多くあります。Amazon等の通販で届いた段ボールを再利用しても問題ありません。100円ショップでも段ボールを購入できます。強度が気になる場合は、ホームセンターで新品の購入をおすすめします。' },
  { q: '緩衝材（プチプチ）はどこで買えますか？', a: '100円ショップ（ダイソー・セリア等）で手軽に購入できます。ホームセンターならロールで大量購入可能です。プチプチがない場合は、新聞紙を丸めたもの、タオル、古い衣類でも代用できます。' },
  { q: '集荷サービスとは何ですか？', a: '宅配業者が自宅まで荷物を引き取りに来るサービスです。ブックオフオンライン、ネットオフ、買取王子などが対応しています。コンビニに持ち込む手間が省けるため、大量のゲームを売る場合に特に適しています。' },
  { q: '査定金額に納得できなかった場合、返送料はかかりますか？', a: '業者によって異なります。ホビーコレクト・買取王子・ウリエル・ブックオフオンラインは返送料無料です。駿河屋・ゲオ・トレジャーファクトリーは返送料が自己負担となるため、事前にご確認ください。' },
  { q: '複数の業者に同時に送ることはできますか？', a: 'はい、可能です。複数社に査定を依頼して比較することをおすすめします。ただし、同じ商品を複数社に送ることはできないため、手持ちのゲームを分けて送るか、1社ずつ順番に査定を依頼してください。' },
];

export default function ShippingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲーム買取の送料・梱包ガイド｜無料キット・安全な梱包方法", "datePublished": "2026-03-15", "dateModified": "2026-05-24", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '送料・梱包ガイド' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲーム買取の送料・梱包ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            送料無料で利用できる買取店10社を比較しています。無料梱包キットに対応する店舗の情報、ご自身で安全に梱包する方法、壊れやすいレトロゲームの保護方法について解説します。
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
            梱包が完了しましたら<span style={{ color: 'var(--color-electric-green)' }}>一括査定</span>のご利用をおすすめします
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            送料無料の買取店に複数の査定を依頼し、査定額を比較することをおすすめします。
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
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>10項目のチェックリスト</p>
            </Link>
            <Link href="/knowledge/data-delete/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>データ削除・初期化方法</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>機種別の手順ガイド</p>
            </Link>
            <Link href="/compare/shop-vs-online/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>店舗 vs 宅配買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>店舗買取と宅配買取の比較</p>
            </Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
