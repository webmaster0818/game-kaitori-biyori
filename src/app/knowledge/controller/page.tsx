import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ゲームコントローラーの買取相場｜Joy-Con・DualSense・Eliteまで【2026年版】',
  description:
    'PS5・Switch・Switch 2・Xbox用コントローラー22品の駿河屋の買取価格を、型番・JANコードで検索して2026年11月26日に実測した表で掲載しています。限定モデルと通常モデルの差、付属品の注意点、売る前の手入れもまとめています。',
  keywords: ['コントローラー 買取', 'Joy-Con 買取', 'DualSense 買取', 'Xbox コントローラー 売る'],
  openGraph: {
    images: ['/og.png'],
    title: 'ゲームコントローラーの買取相場｜Joy-Con・DualSense・Eliteまで【2026年版】',
    description: 'ゲームコントローラー22品の駿河屋の買取価格を、2026年11月26日に型番・JANコードで実測した表で掲載しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

type Row = { model: string; code: string; jan: string; price: string; note?: string };

const CHECKED = '2026年11月26日';

const ps5Controllers: Row[] = [
  { model: 'DualSense（ホワイト）', code: 'CFI-ZCT2J', jan: '4948872417303', price: '4,300円' },
  { model: 'DualSense（ミッドナイト ブラック）', code: 'CFI-ZCT1J01', jan: '4948872415163', price: '3,300円' },
  { model: 'DualSense（コズミック レッド）', code: 'CFI-ZCT2J02', jan: '4948872417228', price: '5,000円' },
  { model: 'DualSense Edge', code: 'CFI-ZCP1J', jan: '4948872415712', price: '15,000円' },
  { model: 'DualSense Edge（ホワイト・新型番）', code: 'CFI-ZCP2J', jan: '4948872417969', price: 'メールにてお見積', note: '金額の表示なし' },
];

const switchControllers: Row[] = [
  { model: 'Joy-Con（L）ネオンブルー／（R）ネオンレッド', code: 'HAC-A-JACAA', jan: '4902370536027', price: '2,500円' },
  { model: 'Joy-Con（L）ネオンレッド／（R）ネオンブルー', code: 'HAC-A-JAEAA', jan: '4902370536034', price: '2,700円' },
  { model: 'Joy-Con（L）ネオンブルー（片方のみ）', code: 'HAC-A-JLBAA', jan: '4902370535938', price: '1,300円' },
  { model: 'Nintendo Switch Proコントローラー', code: 'HAC-A-FSSKA', jan: '4902370535730', price: '1,800円' },
  { model: 'Joy-Con 2（L）ライトブルー／（R）ライトレッド', code: 'BEE-A-JAAAA', jan: '4902370552744', price: '4,300円', note: 'Switch 2 用' },
  { model: 'Joy-Con 2（R）ライトレッド（片方のみ）', code: 'BEE-A-JRKCA', jan: '4902370552720', price: '2,200円', note: 'Switch 2 用' },
  { model: 'Nintendo Switch 2 Proコントローラー', code: 'BEE-A-FSSKA', jan: '4902370552843', price: '3,300円', note: 'Switch 2 用' },
];

const xboxControllers: Row[] = [
  { model: 'Xbox ワイヤレス コントローラー（カーボン ブラック）', code: 'EP2-29931', jan: '4549576262710', price: '4,500円' },
  { model: 'Xbox Elite ワイヤレス コントローラー シリーズ 2', code: 'FST-00009', jan: '4549576126906', price: '5,600円' },
  { model: 'Xbox Elite ワイヤレス コントローラー シリーズ 2 Core（ホワイト）', code: '4IK-00003', jan: '4549576186054', price: '5,000円' },
];

const limitedModels: Row[] = [
  { model: 'DualSense ゴッド・オブ・ウォー ラグナロク リミテッドエディション', code: 'CFI-ZCT1JZ1', jan: '4948872415620', price: '8,100円', note: '通常の黒（3,300円）より4,800円高い' },
  { model: 'DualSense "原神" リミテッドエディション', code: 'CFI-ZCT2JZE', jan: '4948872417457', price: '7,500円', note: '通常の白（4,300円）より3,200円高い' },
  { model: 'DualSense "アストロボット" リミテッドエディション', code: 'CFI-ZCT1JZ3', jan: '4948872416306', price: '5,800円', note: '通常の白（4,300円）より1,500円高い' },
  { model: 'DualSense Edge 30周年アニバーサリー リミテッドエディション', code: 'CFI-ZCP1J30', jan: '4948872416504', price: '36,000円', note: '通常の Edge（15,000円）の2.4倍' },
  { model: 'Nintendo Switch Proコントローラー モンスターハンターライズエディション', code: 'HAC-A-FSSKN', jan: '4902370547627', price: '3,200円', note: '通常の Proコン（1,800円）より1,400円高い' },
  { model: 'Nintendo Switch Proコントローラー ゼルダの伝説 ティアーズ オブ ザ キングダムエディション', code: 'HAC-A-FSSKU', jan: '4902370550504', price: '3,200円', note: '通常の Proコン（1,800円）より1,400円高い' },
  { model: 'Nintendo Switch 2 Proコントローラー ゼルダの伝説 40周年 アニバーサリーエディション', code: 'BEE-A-FSTDA', jan: '4902370554564', price: '8,000円', note: 'ディスプレイスタンド付き。通常の Switch 2 Proコン（3,300円）より4,700円高い' },
  { model: 'Xbox Elite シリーズ 2 Halo Infinite リミテッドエディション', code: 'RFZ-00005', jan: '4549576167893', price: '17,000円', note: '通常の Elite シリーズ 2（5,600円）の約3倍' },
];

const suruUrl = (jan: string) => `https://www.suruga-ya.jp/kaitori/search_buy?search_word=${jan}`;

function PriceTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>商品（型番）</th>
            <th>駿河屋 買取価格</th>
            <th>備考</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.jan}>
              <td className="text-sm"><span className="font-bold">{row.model}</span><br /><span className="text-xs" style={{ color: 'var(--color-text-light)' }}>{row.code}／JAN {row.jan}</span></td>
              <td className="font-bold"><a href={suruUrl(row.jan)} target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }} className="underline">{row.price}</a></td>
              <td className="text-xs">{row.note ?? ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const cleaningTips = [
  { part: 'ボタン周り・表面', method: 'マイクロファイバークロスで乾拭きし、ボタンの隙間のほこりは綿棒で取り除きます。水分を直接かけないようにしてください。' },
  { part: 'アナログスティック', method: 'スティックの根元にたまった汚れを綿棒で取り除きます。汚れを落としたうえで、スティックが勝手に動く症状（ドリフト）が残るかを確かめておくと、査定時に状態を正しく伝えられます。' },
  { part: '充電端子', method: 'エアダスターでほこりを飛ばします。端子に汚れが残ると、査定時の動作確認で充電できないと判断されるおそれがあります。' },
  { part: '付属品', method: 'DualSense Edge や Xbox Elite は、交換用スティック・背面ボタン・ケース・ケーブルなどの付属品が多いモデルです。購入時の内容物をそろえてから送ります。' },
];

const faqs = [
  { q: 'ゲームコントローラーだけでも買い取ってもらえますか？', a: `はい。駿河屋の買取検索では、コントローラー単体に個別の買取価格が付いています（${CHECKED}確認）。本ページの表は、すべて駿河屋で型番・JANコードを検索した結果です。ほかの買取店の単体買取の可否・最低金額は、各社の買取ページでご確認ください。` },
  { q: '限定モデルはどれくらい高く売れますか？', a: `モデルによって差が大きく、${CHECKED}の駿河屋の実測では、DualSense ゴッド・オブ・ウォー ラグナロク リミテッドエディションが8,100円（通常の黒は3,300円）、Xbox Elite シリーズ 2 Halo Infinite リミテッドエディションが17,000円（通常の Elite シリーズ 2 は5,600円）でした。一方、アストロボット版のように差が1,500円程度のものもあり、限定モデルであれば一律に高くなるわけではありません。` },
  { q: 'DualSense Edge の買取価格はいくらですか？', a: `${CHECKED}の駿河屋の買取価格は、DualSense Edge（CFI-ZCP1J）が15,000円、30周年アニバーサリー リミテッドエディションが36,000円でした。新型番のホワイト（CFI-ZCP2J）は金額が表示されず「メールにてお見積」でした。駿河屋の買取価格は箱・説明書・付属品がそろっている前提のため、交換用パーツやケースもそろえて送ることをおすすめします。` },
  { q: 'Switch の Proコントローラーと Joy-Con はどちらが高く売れますか？', a: `${CHECKED}の駿河屋の実測では、Joy-Con（L）ネオンブルー／（R）ネオンレッドのセットが2,500円、Nintendo Switch Proコントローラー（通常版）が1,800円で、Joy-Con のセットのほうが高い結果でした。Switch 2 用は Joy-Con 2 のセットが4,300円、Switch 2 Proコントローラーが3,300円です。` },
  { q: '箱なしや付属品が欠けている場合はどうなりますか？', a: '駿河屋の買取価格は、箱・説明書・付属品がそろっている前提の通常買取価格で、必要な付属品が欠けると減額されると案内されています（駿河屋「減額基準リスト」）。減額の幅は商品ごとに異なり、当サイトでは実測していません。箱なしで売る場合の考え方は、箱なし買取ガイドをご覧ください。' },
  { q: 'スティックが勝手に動く（ドリフト）コントローラーも売れますか？', a: '動作に不具合があるものは、通常の買取価格どおりにはならず、減額やジャンク扱いになるのが一般的です。扱いは買取店ごとに異なるため、申し込みの際に症状を正確に伝えてください。修理してから売るかどうかを考える場合は、メーカーの修理受付ページで受付条件と料金を確認してから判断してください。' },
];

export default function ControllerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲームコントローラーの買取相場｜Joy-Con・DualSense・Eliteまで【2026年版】", "datePublished": "2026-03-15", "dateModified": "2026-11-26", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: 'コントローラー買取相場' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲームコントローラーの買取相場
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            Joy-Con・DualSense・DualSense Edge・Xbox Eliteなど、コントローラー22品の駿河屋の買取価格を、2026年11月26日に型番・JANコードで検索して実測しました。限定モデルと通常モデルの差、付属品の注意点、売る前の手入れもまとめています。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-8 rounded-xl p-5" style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.3)' }}>
          <h2 className="font-extrabold mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：通常モデルは1,800〜5,600円（片方のみの Joy-Con を除く）、上位モデル・限定モデルは差が大きい</h2>
          <ul className="text-sm space-y-1.5" style={{ color: 'var(--color-text)' }}>
            <li>・{CHECKED}に駿河屋の買取検索で、コントローラー22品を型番・JANコードで1品ずつ検索しました。</li>
            <li>・通常モデル（片方のみの Joy-Con を除く）は Switch Proコントローラーの1,800円から Xbox Elite シリーズ 2 の5,600円まででした。DualSense Edge は15,000円です。</li>
            <li>・限定モデルは、通常モデルより1,400円高いものから約3倍のものまであり、モデルによって大きく異なります。</li>
            <li>・価格は日々変わります。売る前に、表の金額のリンク（駿河屋の検索結果）で最新の価格をご確認ください。</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />PS5コントローラー（DualSense）の買取価格</h2>
          <PriceTable rows={ps5Controllers} />
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />Switch・Switch 2 コントローラー（Joy-Con・Proコン）の買取価格</h2>
          <PriceTable rows={switchControllers} />
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>同じネオンカラーでも、左右の色の組み合わせ（型番）で価格が異なりました。売るときは本体裏や箱の型番を確認してください。</p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />Xboxコントローラーの買取価格</h2>
          <PriceTable rows={xboxControllers} />
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />限定モデルの買取価格と通常モデルとの差</h2>
          <PriceTable rows={limitedModels} />
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>差額・倍率は、同じ日に測った駿河屋の通常モデルの買取価格と比べて当サイトで計算したものです。</p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />測り方と注意点</h2>
          <ul className="text-sm space-y-2" style={{ color: 'var(--color-text)' }}>
            <li>・{CHECKED}に、駿河屋の買取検索（suruga-ya.jp/kaitori）で型番・JANコードを入力し、表示された買取価格を転記しました。金額のリンク先は、その JAN コードでの検索結果です。</li>
            <li>・駿河屋の買取価格は、箱・説明書・付属品がそろっている前提の通常買取価格です。必要な付属品が欠けると減額されます（駿河屋「減額基準リスト」）。</li>
            <li>・「メールにてお見積」と表示された商品は、金額が出ていないためそのまま記載しています。</li>
            <li>・ほかの買取店の価格は測っていないため、本ページでは比べていません。本体の買取価格を3社で比べた表は <Link href="/hardware/ps5/" className="underline">PS5</Link>・<Link href="/hardware/switch/" className="underline">Switch</Link> の各ページにあります。</li>
          </ul>
        </section>

        {/* クリーニング方法 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />売る前のクリーニング方法</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>箇所</th>
                  <th>クリーニング方法</th>
                </tr>
              </thead>
              <tbody>
                {cleaningTips.map((row) => (
                  <tr key={row.part}>
                    <td className="font-bold">{row.part}</td>
                    <td className="text-sm">{row.method}</td>
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
            コントローラーの<span style={{ color: 'var(--color-electric-green)' }}>買取価格</span>の確認
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            限定モデルは通常モデルとの差が大きいものがあります。型番を確かめたうえで、各社の買取価格をご確認ください。
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
            <Link href="/hardware/ps5/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS5買取ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS5本体の相場と売り方</p>
            </Link>
            <Link href="/hardware/switch/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switch買取ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>Switch本体の相場と売り方</p>
            </Link>
            <Link href="/knowledge/boxless/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>箱なし買取ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なしでも高く売るためのポイント</p>
            </Link>
          </div>
        </section>

        <p className="text-xs mt-8 text-center" style={{ color: 'var(--color-text-light)' }}>最終更新: 2026年11月26日（買取価格は駿河屋で実測）</p>
        <AuthorBox />
      </div>
    </>
  );
}
