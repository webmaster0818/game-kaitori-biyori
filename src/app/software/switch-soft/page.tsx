import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Switchソフト買取おすすめ3選｜任天堂ソフトを高く売るコツ【2025年】',
  description:
    'Nintendo Switchソフトの買取相場と人気タイトル10本の価格目安を徹底解説。ゼルダ・マリオ・ポケモンなど高く売れるソフトの特徴、新作を早めに売るべき理由、おすすめ買取サービス3社比較まで完全網羅。',
  keywords: ['Switchソフト 買取', '任天堂 ソフト 売る', 'Switch ソフト 買取相場', 'ニンテンドースイッチ ソフト 売る'],
  openGraph: {
    title: 'Switchソフト買取おすすめ3選｜任天堂ソフトを高く売るコツ【2025年】',
    description: 'Switchソフトの買取相場と人気タイトル10本の価格目安を徹底解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const priceData = [
  { title: 'ゼルダの伝説 ティアーズ オブ ザ キングダム', price: '4,500〜5,500円' },
  { title: 'スーパーマリオブラザーズ ワンダー', price: '4,000〜5,000円' },
  { title: 'スプラトゥーン3', price: '3,500〜4,500円' },
  { title: 'ポケットモンスター スカーレット・バイオレット', price: '3,000〜4,000円' },
  { title: 'あつまれ どうぶつの森', price: '2,500〜3,500円' },
  { title: '大乱闘スマッシュブラザーズ SPECIAL', price: '3,500〜4,500円' },
  { title: 'マリオカート8 デラックス', price: '3,500〜4,500円' },
  { title: 'ゼルダの伝説 ブレス オブ ザ ワイルド', price: '3,000〜4,000円' },
  { title: 'リングフィット アドベンチャー', price: '3,000〜4,500円' },
  { title: 'ファイアーエムブレム 風花雪月', price: '2,000〜3,000円' },
];

const features = [
  { title: '定番タイトルは値崩れしにくい', description: 'マリオカート8やスマブラSPなど、長く遊ばれるタイトルは中古需要が安定しており、発売から数年経っても高値がつきやすい傾向があります。' },
  { title: '限定版・特典付きはプレミア化', description: 'コレクターズエディションや初回特典付きのソフトはプレミアがつくことがあります。特典を未開封のまま保管しておくと査定額アップに繋がります。' },
  { title: 'パッケージの状態が重要', description: 'ケースの傷、説明書の有無、帯の状態などが査定に影響します。日頃からケースに入れて保管し、直射日光を避けましょう。' },
  { title: '新作は発売1〜2ヶ月以内が売り時', description: 'ソフトの買取価格は発売直後が最も高く、時間が経つほど下落します。クリア後にすぐ売ることで、購入価格の50〜70%を回収できるケースもあります。' },
  { title: 'まとめ売りでボーナス', description: '複数本まとめて売ると買取ボーナスがつくサービスがあります。遊ばなくなったソフトを一度にまとめて売ることで効率的に高額査定を狙えます。' },
];

const services = [
  { name: 'ヒカカク！', feature: '最大20社一括査定', area: '全国対応', method: '宅配買取メイン', point: 'ソフト1本からでも複数社比較で最高値', rank: 1 },
  { name: '買取ウリエル', feature: '出張買取・即日現金化', area: '関東・関西', method: '出張買取', point: '大量のソフトをまとめて即日現金化', rank: 2 },
  { name: 'ティファナ', feature: '店舗+宅配買取', area: '東京近郊', method: '店舗・宅配', point: 'ゲーム・トレカ・フィギュアもまとめて売れる', rank: 3 },
];

const bulkTips = [
  { title: 'ジャンルを揃えて売る', description: '同じジャンルのソフトをまとめると、買取業者も再販しやすいため査定額アップに繋がることがあります。' },
  { title: '10本以上でボーナス', description: '多くの買取サービスでは10本以上のまとめ売りでボーナスキャンペーンが適用されます。ティファナでは5本以上から送料無料になります。' },
  { title: '状態が悪いものも混ぜてOK', description: 'まとめ売りなら、単品では値段がつかないソフトも一緒に引き取ってもらえる場合があります。選別の手間を省けるのもメリットです。' },
];

const faqs = [
  { q: 'Switchソフトの買取相場はどのくらいですか？', a: '人気タイトルで3,000〜5,500円程度が相場です。新作は発売直後が最も高く、時間経過とともに下がります。定番タイトル（マリカ・スマブラ等）は値崩れしにくい傾向があります。' },
  { q: 'ダウンロード版のソフトは売れますか？', a: 'いいえ、ダウンロード版はアカウントに紐づいているため買取できません。売却を検討している場合はパッケージ版の購入をおすすめします。' },
  { q: 'ソフトのケースや説明書がなくても売れますか？', a: 'はい、ソフト単体でも買取可能です。ただしケースなしだと500〜1,000円程度の減額になることが多いです。' },
  { q: '新作ソフトはいつ売るのがベストですか？', a: '発売から1〜2ヶ月以内が最も高値がつきます。特にクリアまでが短いゲームは、早めに売ることで購入価格の50〜70%を回収できます。' },
  { q: 'まとめ売りするとお得ですか？', a: 'はい、多くの買取サービスでまとめ売りボーナスがあります。10本以上で10〜20%のボーナスがつくサービスもあり、1本ずつ売るより効率的です。' },
  { q: '買取価格が一番高いのはどこですか？', a: 'ソフトによって最高値を出す業者は異なります。ヒカカク！で最大20社に一括査定すれば、そのソフトの最高値を簡単に見つけられます。' },
];

export default function SwitchSoftPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'Switchソフト' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ソフト別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            Switchソフト 買取ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            Nintendo Switchソフトの買取相場を人気タイトル10本で徹底調査。高く売れるソフトの特徴、新作を早めに売るべき理由、まとめ売りのコツまで、Switchソフトを売る前に知っておきたい情報を完全網羅しています。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Price Table */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />人気タイトル買取相場10選</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>※ 2025年時点の参考相場です。状態・付属品・時期により変動します。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>タイトル</th>
                  <th>買取相場（美品）</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row) => (
                  <tr key={row.title}>
                    <td className="font-bold">{row.title}</td>
                    <td style={{ color: 'var(--color-electric-green)' }} className="font-bold">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />高く売れるソフトの特徴</h2>
          <div className="space-y-4">
            {features.map((item, i) => (
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

        {/* Why sell early */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />新作は早めに売るべき理由</h2>
          <div className="glass-card p-6">
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-light)' }}>
              ゲームソフトの買取価格は発売直後が最も高く、一般的に以下のような価格推移をたどります。
            </p>
            <div className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <strong style={{ color: 'var(--color-deep-blue)' }}>発売〜1ヶ月：</strong>定価の60〜80%で買取。最も高値がつく時期。
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <strong style={{ color: 'var(--color-deep-blue)' }}>1〜3ヶ月：</strong>定価の40〜60%に下落。まだ比較的高値。
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <strong style={{ color: 'var(--color-deep-blue)' }}>3ヶ月〜1年：</strong>定価の20〜40%に下落。セール時期はさらに下がる。
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <strong style={{ color: 'var(--color-deep-blue)' }}>1年以降：</strong>定番タイトル以外は定価の10〜20%まで下落。
              </div>
            </div>
          </div>
        </section>

        {/* Service Comparison */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />おすすめ買取サービス3社比較</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>サービス</th>
                  <th>特徴</th>
                  <th>対応エリア</th>
                  <th>買取方法</th>
                  <th>ソフト買取の強み</th>
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

        {/* Bulk Tips */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />まとめ売りのコツ</h2>
          <div className="space-y-4">
            {bulkTips.map((tip, i) => (
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
            Switchソフトを<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>で売りませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            複数社の買取価格を比較して、あなたのソフトを一番高く買い取ってくれるサービスを見つけましょう。
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
            <Link href="/software/ps5-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS5ソフト</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS5ソフトの買取相場・高く売るコツ</p>
            </Link>
            <Link href="/software/ps4-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS4ソフト</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS4ソフトの買取相場・値崩れしにくいソフト</p>
            </Link>
            <Link href="/software/retro-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>レトロゲームソフト</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>プレミアソフトの買取相場</p>
            </Link>
          </div>
          <div className="mt-4">
            <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>お役立ち情報</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/knowledge/price-guide/" className="glass-card p-4 card-hover block">
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取相場ガイド</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ハード・ソフト別の相場一覧</p>
              </Link>
              <Link href="/knowledge/preparation/" className="glass-card p-4 card-hover block">
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>売る前の準備</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>初期化・データ消去の手順</p>
              </Link>
              <Link href="/knowledge/timing/" className="glass-card p-4 card-hover block">
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>売り時ガイド</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>いつ売るのがベストか</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
