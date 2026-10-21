import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'
import { hardwarePrices, analyzeTitle, HARDWARE_SURVEY_DATE, type PriceAnalysis } from '@/data/prices';

export const metadata: Metadata = {
  title: 'ゲーム買取相場ガイド｜ハード・ソフト別の価格目安【2026年最新】',
  description:
    'ゲーム機・ソフトの買取相場を一覧表で解説します。Switch・PS5本体は各社の公式買取ページで実測した価格（2026年10月15日）を掲載し、ソフト別の目安、相場が変動する5つの要因、相場の調べ方もまとめています。',
  keywords: ['ゲーム買取 相場', 'ゲーム いくらで売れる', 'ゲーム機 買取価格', 'Switch 買取相場'],
  openGraph: {
    images: ['/og.png'],
    title: 'ゲーム買取相場ガイド｜ハード・ソフト別の価格目安【2026年最新】',
    description: 'ゲーム機・ソフトの買取相場を、ハード別・ソフト別の一覧表で解説します。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

// 2026-10-19: 2026年の参考相場（出典なし）を 10/15 実測（hardwarePrices）に置き換え。実測の無い機種の行は外す
const surveyDate = HARDWARE_SURVEY_DATE.replace(/-/g, '/');
const hardwareRows = hardwarePrices
  .map(analyzeTitle)
  .filter((x): x is PriceAnalysis => x !== null);

const softwarePrices = [
  { category: 'Switch人気タイトル', range: '3,000〜5,500円', example: 'ゼルダ・マリオ・ポケモン等' },
  { category: 'PS5人気タイトル', range: '2,500〜6,000円', example: 'FF・バイオ・エルデンリング等' },
  { category: 'PS4人気タイトル', range: '800〜2,500円', example: 'ペルソナ・ゴーストオブツシマ等' },
  { category: '3DSソフト', range: '500〜3,000円', example: 'ポケモン・モンハン・どうぶつの森等' },
  { category: 'レトロプレミアソフト', range: '5,000〜200,000円', example: 'バトルガレッガ・レンダリングレンジャー等' },
];

const fluctuationFactors = [
  { title: '新型ハードの発表・発売', description: '後継機の発表直後に旧モデルの買取価格が10〜30%下落するのが一般的です。新型の情報が出始めた段階で、早めに売却を検討することをおすすめします。' },
  { title: '季節需要（年末商戦・夏休み等）', description: '年末年始や夏休みはゲームの需要が高まるため、その直前（10〜11月、6〜7月）に買取価格が上がる傾向があります。' },
  { title: 'ソフトの新作発売', description: '人気シリーズの新作が発売されると、対応ハードの需要が高まり買取価格が上昇します。一方、旧作ソフトは下落する傾向があります。' },
  { title: '市場の在庫状況', description: '中古市場で在庫が余っているときは買取価格が下がり、品薄の状態では買取価格が上昇します。' },
  { title: 'メディア露出・SNSでの話題化', description: 'テレビ番組やSNSでゲームが話題になると一時的に需要が高まり、買取価格が上昇することがあります。' },
];

const howToCheck = [
  { title: 'ヒカカク！での一括査定', description: '最大20社に一括で査定を依頼できるヒカカク！では、現在の各社の買取価格をまとめて確認できます。無料で利用できるため、まず相場を確認する方法としておすすめです。' },
  { title: 'フリマアプリでの相場確認', description: 'メルカリやラクマで同じ商品の売買履歴を確認すると、個人間取引の相場が分かります。ただし、買取業者の価格とは異なるため、参考程度にご覧ください。' },
  { title: '買取業者のWebサイト', description: '各買取業者のWebサイトで公開されている買取価格表を確認する方法もあります。ただし表示価格は最高値のため、実際の査定額は状態により下がることがあります。' },
];

const services = [
  { name: 'ヒカカク！', feature: '最大20社一括査定', area: '全国対応', method: '宅配買取メイン', point: '相場の把握に適しており、各社の査定額を比較可能', rank: 1 },
  { name: '買取ウリエル', feature: '出張買取・即日現金化', area: '東京・神奈川・千葉・埼玉（ゲーム）', method: '出張買取', point: '相場の確認後、出張買取ですぐに現金化', rank: 2 },
  { name: 'ティファナ', feature: '店舗+宅配買取', area: '東京近郊', method: '店舗・宅配', point: '店頭で相場を確認し、その場で買取', rank: 3 },
];

const faqs = [
  { q: 'ゲームの買取相場はどうやって調べればよいですか？', a: 'ヒカカク！の一括査定が簡便な方法です。最大20社の買取価格を無料で比較でき、現在の最高値を確認できます。メルカリの売買履歴も参考になりますが、個人売買と業者買取では価格が異なります。' },
  { q: '買取相場より安い金額を提示されました。なぜですか？', a: '買取相場はあくまで「美品・付属品完備」の場合の目安です。傷・汚れ・付属品欠品があると減額されます。また、業者により査定基準が異なるため、複数社で見積もりを取ることをおすすめします。' },
  { q: 'ゲームの買取価格が高い時期はいつですか？', a: '年末商戦前（10〜11月）と新学期前（2〜3月）が最も高値がつきやすい時期です。逆に新型ハード発売直後は旧モデルの価格が下がります。' },
  { q: '古いゲーム機でも買い取ってもらえますか？', a: 'はい、ファミコンやスーパーファミコンなどのレトロゲーム機も買取の対象です。当サイトではレトロゲーム機本体の買取価格を実測していないため、金額は各社の買取価格表でご確認ください。箱や説明書がそろっていると査定に有利です。' },
  { q: '買取相場は毎日変わりますか？', a: '日単位で大きく変動することはまれですが、週〜月単位では変動します。特に新型ハードの発表、人気タイトルの発売、年末商戦などのイベント前後は変動が大きくなります。' },
  { q: '買取価格と販売価格の差はどのくらいですか？', a: '一般的に買取価格は中古販売価格の50〜70%程度です。業者の利益や検品・クリーニングコストがこの差になります。ヒカカク！で複数社に査定を依頼すれば、この差を最小限に抑えられます。' },
];

export default function PriceGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲーム買取相場ガイド｜ハード・ソフト別の価格目安【2026年最新】", "datePublished": "2026-03-15", "dateModified": "2026-10-19", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '買取相場ガイド' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲーム買取相場ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲーム機・ソフトの買取相場を、ハード別・ソフト別の一覧表で解説します。相場が変動する5つの要因や相場の調べ方など、ゲームを売る前に確認しておくべき価格情報をまとめています。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hardware Price Table */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ハード別 買取価格一覧（{surveyDate}実測）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>※ {surveyDate}に、ブックオフ・ゲオ・駿河屋・レトログの公式買取ページで実測した完品前提の価格です（実測できたモデルのみ掲載しています）。実際の買取価格は状態・付属品・時期により変動します。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>ハード</th>
                  <th>買取価格（実測の最安〜最高）</th>
                  <th>実測した店舗数</th>
                </tr>
              </thead>
              <tbody>
                {hardwareRows.map((row) => (
                  <tr key={row.title}>
                    <td className="font-bold">{row.title}</td>
                    <td style={{ color: 'var(--color-electric-green)' }} className="font-bold">
                      {row.low === row.best.price ? `${row.best.price.toLocaleString()}円` : `${row.low.toLocaleString()}〜${row.best.price.toLocaleString()}円`}
                    </td>
                    <td className="text-sm">{Object.keys(row.prices).length}社</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Software Price Table */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ソフト別 買取相場目安</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>カテゴリ</th>
                  <th>買取相場</th>
                  <th>代表タイトル</th>
                </tr>
              </thead>
              <tbody>
                {softwarePrices.map((row) => (
                  <tr key={row.category}>
                    <td className="font-bold">{row.category}</td>
                    <td style={{ color: 'var(--color-electric-green)' }} className="font-bold">{row.range}</td>
                    <td>{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Fluctuation Factors */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />相場が変動する5つの要因</h2>
          <div className="space-y-4">
            {fluctuationFactors.map((item, i) => (
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

        {/* How to Check */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />相場の調べ方</h2>
          <div className="space-y-4">
            {howToCheck.map((item, i) => (
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
                  <th>相場確認の強み</th>
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
            お手持ちのゲームの<span style={{ color: 'var(--color-electric-green)' }}>正確な相場</span>の確認
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            最大20社に一括で査定を依頼し、お手持ちのゲームの買取価格を比較することをおすすめします。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>ハード別買取ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/hardware/switch/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Nintendo Switch</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>Switchの買取相場と高く売るためのポイント</p>
            </Link>
            <Link href="/hardware/ps5/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PlayStation 5</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS5の買取相場と高く売るためのポイント</p>
            </Link>
            <Link href="/hardware/retro/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>レトロゲーム</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ファミコン・スーファミの買取相場</p>
            </Link>
          </div>
          <div className="mt-4">
            <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>お役立ち情報</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/knowledge/timing/" className="glass-card p-4 card-hover block">
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>売り時ガイド</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>売却に適した時期</p>
              </Link>
              <Link href="/knowledge/preparation/" className="glass-card p-4 card-hover block">
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>売る前の準備</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>初期化・データ消去の手順</p>
              </Link>
              <Link href="/knowledge/bulk/" className="glass-card p-4 card-hover block">
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>まとめ売り</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>まとめ売りのメリットとコツ</p>
              </Link>
            </div>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
