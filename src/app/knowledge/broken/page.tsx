import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '壊れたゲーム機でも売れる？ジャンク品買取ガイド【2025年】',
  description:
    '壊れたゲーム機やジャンク品でも買取できる理由と、買取可能な故障の種類を徹底解説。3社のジャンク対応比較、査定額の目安（正常品の何%か）まで完全網羅。諦める前に確認を。',
  keywords: ['壊れたゲーム機 買取', 'ジャンク 売れる', 'ゲーム機 故障 買取', 'Switch 壊れた 売る'],
  openGraph: {
    title: '壊れたゲーム機でも売れる？ジャンク品買取ガイド【2025年】',
    description: '壊れたゲーム機やジャンク品でも買取できる理由と対応業者を徹底解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const reasons = [
  { title: '部品取り需要', description: '壊れた本体でも、液晶画面、基板、コントローラー、外装パーツなどは修理用の部品として需要があります。特に廃番モデルの部品は希少価値が高いです。' },
  { title: '修理再販', description: '故障箇所を修理して中古品として再販するビジネスモデルがあります。軽度の故障であれば、安く仕入れて修理し利益を出せるため、買取業者にとっても価値があります。' },
  { title: 'レアモデルの外装需要', description: '限定カラーや特別デザインのモデルは、外装だけでも需要があります。本体が動かなくても外装の状態が良ければ買取可能なケースがあります。' },
  { title: '基板の貴金属回収', description: '完全に壊れた本体でも、基板に含まれる金やレアメタルの回収目的で買取されるケースがあります（ただし買取額は非常に低い）。' },
];

const faultTypes = [
  { fault: '電源が入らない', buyable: '可', estimate: '正常品の10〜30%' },
  { fault: '画面表示不良（線、ドット欠け）', buyable: '可', estimate: '正常品の20〜40%' },
  { fault: 'Joy-Conドリフト（Switch）', buyable: '可', estimate: '正常品の60〜80%' },
  { fault: 'ディスク読み込み不良', buyable: '可', estimate: '正常品の20〜40%' },
  { fault: 'コントローラーボタン不良', buyable: '可', estimate: '正常品の30〜50%' },
  { fault: '充電不良・バッテリー膨張', buyable: '可', estimate: '正常品の10〜30%' },
  { fault: 'Wi-Fi/Bluetooth接続不良', buyable: '可', estimate: '正常品の30〜50%' },
  { fault: '水没・水濡れ', buyable: '業者による', estimate: '正常品の5〜20%' },
  { fault: '本体の割れ・破損', buyable: '業者による', estimate: '正常品の5〜15%' },
  { fault: '改造・CFW導入済み', buyable: '不可の場合が多い', estimate: '買取拒否〜正常品の10%' },
];

const services = [
  { name: 'ヒカカク！', feature: '最大20社一括査定', junk: 'ジャンク対応業者も含めて一括査定可能', point: 'ジャンク専門業者を含む最大20社で最高値を発見' },
  { name: '買取ウリエル', feature: '出張買取・即日現金化', junk: 'ジャンク品の出張査定対応', point: '壊れたゲーム機を自宅で査定・即日現金化' },
  { name: 'ティファナ', feature: '店舗+宅配買取', junk: '店頭でジャンク品の即時査定', point: '動作確認不要で持ち込みOK' },
];

const estimateGuide = [
  { condition: 'Joy-Conドリフトのみ（Switch）', percentage: '60〜80%', note: '修理が簡単なため減額幅が小さい' },
  { condition: '画面の傷・軽度の表示不良', percentage: '40〜60%', note: '画面交換で対応可能' },
  { condition: 'ディスクドライブ故障', percentage: '20〜40%', note: '部品交換が必要だが需要あり' },
  { condition: '電源不良', percentage: '10〜30%', note: '原因の特定が難しいため低め' },
  { condition: '水没・重度の破損', percentage: '5〜15%', note: '部品取りとしての価値のみ' },
];

const faqs = [
  { q: '壊れたゲーム機でも本当に売れますか？', a: 'はい、多くの買取業者でジャンク品の買取に対応しています。部品取りや修理再販の需要があるため、完全に壊れていても値段がつくケースがほとんどです。ただし買取価格は正常品より大幅に下がります。' },
  { q: 'ジャンク品の買取価格はどのくらいですか？', a: '故障の程度により異なりますが、正常品の5〜80%程度が目安です。Joy-Conドリフト程度の軽度な不具合なら正常品の60〜80%、電源不良や水没は10〜20%程度になります。' },
  { q: '故障の内容を正直に伝えるべきですか？', a: 'はい、必ず正直に伝えてください。故障を隠して売ると、後から返品や減額を求められることがあります。正直に申告したほうが信頼されて適正な査定を受けられます。' },
  { q: '修理してから売ったほうが高く売れますか？', a: '一概には言えません。修理費用が買取価格の上昇分を上回るケースもあります。まずはジャンク品として査定してもらい、修理費用と比較してから判断するのがおすすめです。' },
  { q: '改造・CFW導入したゲーム機は売れますか？', a: '多くの買取業者では改造品の買取を断っています。未改造の状態に戻しても痕跡が残ることがあり、買取価格は大幅に下がるか買取拒否になるケースが多いです。' },
  { q: 'バッテリーが膨張しているゲーム機は売れますか？', a: '対応業者は限られますが、買取可能なケースはあります。バッテリー膨張は安全上のリスクがあるため、梱包時は衝撃を与えないよう注意し、事前に買取業者に相談してください。' },
];

export default function BrokenPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: 'ジャンク品買取' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            壊れたゲーム機でも売れる？ジャンク品買取ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            壊れたゲーム機やジャンク品でも買取してもらえる理由、買取可能な故障の種類、3社のジャンク対応比較、査定額の目安まで徹底解説。捨てる前にぜひ確認してください。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Why junk sells */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ジャンク品でも売れる理由</h2>
          <div className="space-y-4">
            {reasons.map((item, i) => (
              <div key={item.title} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fault Types */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />買取可能な故障の種類</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>故障内容</th>
                  <th>買取可否</th>
                  <th>査定額の目安</th>
                </tr>
              </thead>
              <tbody>
                {faultTypes.map((row) => (
                  <tr key={row.fault}>
                    <td className="font-bold">{row.fault}</td>
                    <td>{row.buyable}</td>
                    <td>{row.estimate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Service Comparison */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />3社のジャンク対応比較</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>サービス</th>
                  <th>特徴</th>
                  <th>ジャンク対応</th>
                  <th>おすすめポイント</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.name}>
                    <td className="font-bold">{s.name}</td>
                    <td>{s.feature}</td>
                    <td>{s.junk}</td>
                    <td>{s.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Estimate Guide */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />査定額の目安（正常品の何%か）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>故障状態</th>
                  <th>正常品比</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {estimateGuide.map((row) => (
                  <tr key={row.condition}>
                    <td className="font-bold">{row.condition}</td>
                    <td style={{ color: 'var(--color-electric-green)' }} className="font-bold">{row.percentage}</td>
                    <td className="text-sm">{row.note}</td>
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
            壊れたゲーム機も<span style={{ color: 'var(--color-electric-green)' }}>お金に変わる</span>かもしれません
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            捨てる前にまず査定を。ジャンク品でも値段がつくケースがほとんどです。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>お役立ち情報</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/knowledge/boxless/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>箱なし・付属品なし</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なしでも売れるか詳しく解説</p>
            </Link>
            <Link href="/knowledge/price-guide/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取相場ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ハード・ソフト別の相場一覧</p>
            </Link>
            <Link href="/knowledge/preparation/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>売る前の準備</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>初期化・データ消去の手順</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
