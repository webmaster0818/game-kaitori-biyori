import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'レトロゲームソフト買取おすすめ3選｜プレミアソフトを高く売るコツ【2025年】',
  description:
    'レトロゲームソフトの買取相場とプレミアソフトTOP10を徹底解説。バトルガレッガ・レイディアントシルバーガンなど高額買取タイトル、プレミアがつく理由、偽物の見分け方、保管方法、おすすめ買取サービス3社比較。',
  keywords: ['レトロゲームソフト 買取', 'プレミアソフト', 'レトロゲーム 売る', 'ファミコン ソフト 買取'],
  openGraph: {
    title: 'レトロゲームソフト買取おすすめ3選｜プレミアソフトを高く売るコツ【2025年】',
    description: 'レトロゲームソフトの買取相場とプレミアソフトTOP10を徹底解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const premiumData = [
  { title: 'バトルガレッガ（セガサターン）', price: '50,000〜80,000円' },
  { title: 'レイディアントシルバーガン（セガサターン）', price: '40,000〜70,000円' },
  { title: 'レンダリング・レンジャーR2（スーパーファミコン）', price: '100,000〜200,000円' },
  { title: 'ゴールデンアイ 007（N64・未開封）', price: '30,000〜50,000円' },
  { title: 'MOTHER（ファミコン・箱説明書付き）', price: '15,000〜25,000円' },
  { title: 'クロノ・トリガー（SFC・美品）', price: '5,000〜10,000円' },
  { title: '魂斗羅 ザ・ハードコア（メガドライブ）', price: '20,000〜35,000円' },
  { title: 'パンツァードラグーン サーガ（セガサターン）', price: '30,000〜50,000円' },
  { title: 'ロックマン7 宿命の対決!（SFC）', price: '8,000〜15,000円' },
  { title: 'スーパーマリオRPG（SFC・箱説付き）', price: '5,000〜8,000円' },
];

const premiumReasons = [
  { title: '生産数が少ない', description: '発売当時の出荷本数が少ないタイトルは、現存する数も限られるため希少価値が高まります。特にサターンやメガドライブの末期タイトルに多い傾向です。' },
  { title: 'ジャンルの名作', description: 'シューティングや格闘ゲームなど、コアなファン層を持つジャンルの名作は、コレクター需要により高値が安定しています。' },
  { title: 'リメイク・移植がない', description: '他のハードに移植されていないタイトルは、オリジナル版でしか遊べないため需要が高まります。' },
  { title: '状態の良い完品が少ない', description: '箱・説明書・付属品が全て揃った「完品」は年々減少しているため、完品の買取価格は上昇傾向にあります。' },
];

const fakeWarnings = [
  { title: '基板の確認', description: 'カセットを開けて基板を確認しましょう。偽物は基板の作りが粗く、正規品と異なるチップが使われています。特に高額ソフトは要注意です。' },
  { title: 'ラベルの印刷品質', description: '偽物はラベルの印刷がにじんでいたり、色味が異なることがあります。正規品と見比べてフォントや色を確認しましょう。' },
  { title: 'カセットの成形品質', description: '偽物はカセットの金型が異なるため、微妙にサイズや形状が違うことがあります。ネジの種類や位置も確認ポイントです。' },
];

const storageTips = [
  { title: '直射日光を避ける', description: 'ラベルの日焼け・変色を防ぐため、暗所で保管しましょう。日焼けしたラベルは買取価格の大幅な減額原因になります。' },
  { title: '湿気対策', description: '基板の腐食や端子の酸化を防ぐため、乾燥剤と一緒に保管するのがベストです。特に梅雨時期は要注意。' },
  { title: '箱は潰さない', description: '箱の有無で買取価格が2〜5倍変わることもあります。箱は立てて保管し、潰れないよう注意しましょう。' },
  { title: '端子の清掃', description: '定期的に接点復活剤で端子を清掃すると、動作不良を防げます。売る前にも端子のクリーニングを忘れずに。' },
];

const services = [
  { name: 'ヒカカク！', feature: '最大20社一括査定', area: '全国対応', method: '宅配買取メイン', point: 'レトロゲーム専門店も含む最大20社で最高値', rank: 1 },
  { name: '買取ウリエル', feature: '出張買取・即日現金化', area: '関東・関西', method: '出張買取', point: 'コレクション一式を自宅で査定・即日現金化', rank: 2 },
  { name: 'ティファナ', feature: '店舗+宅配買取', area: '東京近郊', method: '店舗・宅配', point: 'ゲーム・トレカ・フィギュアもまとめて売れる', rank: 3 },
];

const faqs = [
  { q: 'レトロゲームソフトの買取相場はどのくらいですか？', a: 'タイトルにより大きく異なります。一般的なソフトは100〜1,000円程度ですが、プレミアソフトは数万〜数十万円の買取価格がつくこともあります。希少性・状態・付属品の有無で大きく変動します。' },
  { q: '箱や説明書がなくても売れますか？', a: 'はい、カセット単体でも買取可能です。ただしレトロゲームの場合、完品（箱・説明書付き）との価格差が非常に大きく、完品の2分の1〜5分の1程度になることもあります。' },
  { q: '偽物かどうか不安です。どうすれば見分けられますか？', a: 'カセットの基板、ラベルの印刷品質、カセットの成形品質を確認しましょう。高額ソフトの場合はヒカカク！で専門業者に査定を依頼し、プロの目で判断してもらうのが確実です。' },
  { q: '動作確認できない古いソフトでも売れますか？', a: 'はい、動作未確認でも買取可能な業者はあります。ただし動作保証ありの場合より減額されます。可能であれば本体を借りるなどして動作確認してから売ると高値がつきます。' },
  { q: 'レトロゲームはどこで売るのがベストですか？', a: 'ヒカカク！での一括査定がおすすめです。レトロゲーム専門の買取店も含めて最大20社に査定を依頼でき、専門店ならではの適正な高値がつきやすいです。一般のリサイクルショップでは価値が正しく評価されないことがあります。' },
  { q: 'レトロゲームの価値は今後上がりますか？', a: '希少なプレミアソフトは年々価値が上昇する傾向にあります。コレクター需要は根強く、特に状態の良い完品は市場から減り続けるため、長期的には値上がりが期待できます。ただし全てのソフトが値上がりするわけではありません。' },
];

export default function RetroSoftPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'レトロゲームソフト' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ソフト別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            レトロゲームソフト 買取ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            レトロゲームソフトの買取相場をプレミアソフトTOP10で徹底調査。プレミアがつく理由、偽物の見分け方、正しい保管方法、おすすめ買取サービス3社の比較まで、レトロゲームを売る前に知っておきたい情報を完全網羅しています。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Premium Table */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />プレミアソフトTOP10</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>※ 2025年時点の参考相場です。状態・付属品により大きく変動します。完品（箱・説明書付き）の場合の目安です。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>タイトル</th>
                  <th>買取相場（完品）</th>
                </tr>
              </thead>
              <tbody>
                {premiumData.map((row) => (
                  <tr key={row.title}>
                    <td className="font-bold">{row.title}</td>
                    <td style={{ color: 'var(--color-electric-green)' }} className="font-bold">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Premium Reasons */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />プレミアがつく理由</h2>
          <div className="space-y-4">
            {premiumReasons.map((item, i) => (
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

        {/* Fake Warnings */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />偽物に注意！見分けるポイント</h2>
          <div className="glass-card p-6" style={{ borderLeft: '4px solid #EF4444' }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-light)' }}>
              高額なレトロゲームソフトには偽物（リプロダクション品）が出回っています。以下のポイントで確認しましょう。
            </p>
            <div className="space-y-4">
              {fakeWarnings.map((item, i) => (
                <div key={item.title} className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                  <strong style={{ color: 'var(--color-deep-blue)' }}>{i + 1}. {item.title}</strong>
                  <p className="text-sm mt-1" style={{ color: 'var(--color-text-light)' }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Storage Tips */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />正しい保管方法</h2>
          <div className="space-y-4">
            {storageTips.map((tip, i) => (
              <div key={tip.title} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{tip.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Comparison */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />おすすめ買取サービス3社比較</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>レトロゲームは専門性の高いジャンルのため、一般のリサイクルショップよりも専門店のほうが適正な高値がつきます。ヒカカク！なら専門店を含む最大20社に一括査定できます。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>サービス</th>
                  <th>特徴</th>
                  <th>対応エリア</th>
                  <th>買取方法</th>
                  <th>レトロゲームの強み</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.name}>
                    <td className="font-bold">{s.name}</td>
                    <td>{s.feature}</td>
                    <td>{s.area}</td>
                    <td>{s.method}</td>
                    <td>{s.point}</td>
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
            レトロゲームを<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>で売りませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            お手持ちのレトロゲームの正しい価値を知りましょう。専門店を含む最大20社に一括査定できます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のソフト買取ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/software/switch-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switchソフト</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>Switchソフトの買取相場・高く売るコツ</p>
            </Link>
            <Link href="/software/ps5-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS5ソフト</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS5ソフトの買取相場・限定版の価値</p>
            </Link>
            <Link href="/software/ps4-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS4ソフト</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS4ソフトの買取相場・値崩れしにくいソフト</p>
            </Link>
          </div>
          <div className="mt-4">
            <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>お役立ち情報</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/knowledge/price-guide/" className="glass-card p-4 card-hover block">
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取相場ガイド</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ハード・ソフト別の相場一覧</p>
              </Link>
              <Link href="/knowledge/boxless/" className="glass-card p-4 card-hover block">
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>箱なし・付属品なし</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なしでも売れるか詳しく解説</p>
              </Link>
              <Link href="/knowledge/bulk/" className="glass-card p-4 card-hover block">
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>まとめ売り</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>まとめ売りのメリットとコツ</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
