import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'
import { SeriesPriceTable, TodayBestBanner } from '@/components/PriceIndex'

export const metadata: Metadata = {
  title: 'ポケモンソフトの買取価格ランキング【2026年10月】駿河屋19本の実測｜Z-Aは1,700円',
  description:
    'ポケモンソフト19本の買取価格を2026年10月19日に駿河屋公式で調べ、ランキングにしました。1位はGBAのエメラルド（12,000円）、追加コンテンツ同梱版は通常版の2.6〜4.7倍、最新作のPokemon LEGENDS Z-Aは1,700円です。高く売るコツとおすすめの買取店も解説します。',
  keywords: ['ポケモン ゲーム 買取 相場', 'ポケモン ソフト 売る', 'ポケモンSV 買取', 'ポケモン 買取価格'],
  openGraph: {
    images: ['/og.png'],
    title: 'ポケモンソフトの買取価格ランキング【2026年10月】駿河屋19本の実測｜Z-Aは1,700円',
    description: 'ポケモンソフト別の買取相場と高く売るコツを解説します。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

// 2026-10-19 駿河屋公式の買取検索で確認した国内版の買取価格（美品・未開封の上乗せ前の通常の買取価格）。高い順
const priceData = [
  { title: 'ポケットモンスター エメラルド［ワイヤレスアダプタ同梱］', platform: 'GBA', price: 12000, note: '美品は14,400円' },
  { title: 'ポケットモンスター エメラルド［廉価版］', platform: 'GBA', price: 9400, note: '美品は10,400円' },
  { title: 'ポケットモンスター ソード ＋ エキスパンションパス', platform: 'Switch', price: 9000, note: '通常版ソード（1,900円）の約4.7倍' },
  { title: 'ポケットモンスター ハートゴールド（ポケウォーカー同梱）', platform: 'DS', price: 8000, note: '' },
  { title: 'ポケットモンスター ソウルシルバー（ポケウォーカー同梱）', platform: 'DS', price: 7000, note: '' },
  { title: 'ポケットモンスター バイオレット ＋ ゼロの秘宝', platform: 'Switch', price: 6000, note: '通常版バイオレット（1,800円）の約3.3倍' },
  { title: 'ポケットモンスター Let\'s Go! ピカチュウ モンスターボール Plusセット', platform: 'Switch', price: 5800, note: '' },
  { title: 'ポケットモンスター スカーレット ＋ ゼロの秘宝', platform: 'Switch', price: 5200, note: '通常版スカーレット（2,000円）の2.6倍' },
  { title: 'ポケットモンスター Let\'s Go! イーブイ モンスターボール Plusセット', platform: 'Switch', price: 5000, note: '' },
  { title: 'ポケットモンスター Let\'s Go! イーブイ（通常版）', platform: 'Switch', price: 2500, note: '同じ作品のピカチュウ版より600円高い' },
  { title: 'ポケットモンスター スカーレット', platform: 'Switch', price: 2000, note: '' },
  { title: 'ポケットモンスター プラチナ', platform: 'DS', price: 2000, note: '未開封は30,000円' },
  { title: 'ポケットモンスター ソード', platform: 'Switch', price: 1900, note: '' },
  { title: 'ポケットモンスター Let\'s Go! ピカチュウ（通常版）', platform: 'Switch', price: 1900, note: '' },
  { title: 'ポケットモンスター バイオレット', platform: 'Switch', price: 1800, note: '' },
  { title: 'Pokemon LEGENDS アルセウス', platform: 'Switch', price: 1800, note: '' },
  { title: 'Pokemon LEGENDS Z-A', platform: 'Switch / Switch 2', price: 1700, note: 'Switch版・Nintendo Switch 2 Editionとも同額' },
  { title: 'ポケットモンスター シャイニングパール', platform: 'Switch', price: 1400, note: '' },
  { title: 'ポケットモンスター ブリリアントダイヤモンド', platform: 'Switch', price: 1100, note: '' },
];

const sellingTips = [
  { tip: '遊び終えたら早めに売る', detail: '2026年10月19日の駿河屋公式では、2025年発売の最新作『Pokemon LEGENDS Z-A』（1,700円）でも、2022年発売のスカーレット（2,000円）より安い買取価格でした。新しい作品ほど高いとは限らず、流通量が増えると価格は下がるため、遊び終えた時点での売却をおすすめします。' },
  { tip: '追加コンテンツ同梱版は別格', detail: '駿河屋公式では、追加コンテンツ同梱のパッケージ版（ソード＋エキスパンションパス 9,000円、バイオレット＋ゼロの秘宝 6,000円）が、通常版の約2.6〜4.7倍で買い取られています（2026年10月19日）。ダウンロード購入したDLCはアカウントに紐づくため、ソフトと一緒に売ることはできません。' },
  { tip: 'レトロ作品はケース・説明書を揃える', detail: '駿河屋公式ではエメラルドの外箱のみ・説明書のみにも個別の買取価格（外箱のみ1,500〜2,200円、説明書のみ800円）が付いており、付属品にも価値があります。特にハートゴールド・ソウルシルバーの歩数計（ポケウォーカー）付きは大幅なプレミアが付きます。' },
  { tip: '限定版・特典付きを活用する', detail: 'ダブルパック（2本セット）やSteelbook付き、コンビニ特典付きなどの限定版は通常版より高値がつきます。外箱や特典を保管しておくと査定額が上がります。' },
];

const recommendedShops = [
  { shop: 'ヒカカク！', feature: '最大20社一括査定', merit: 'ポケモンソフトは業者間の価格差が大きいため、一括査定での比較が有利' },
  { shop: 'ゲオ（GEO）', feature: '店頭即日査定', merit: '全国1,000店以上で即日現金化。ポケモンソフトの在庫需要が高い' },
  { shop: '駿河屋', feature: 'レトロゲーム高価買取', merit: 'DS以前のポケモンソフトを適正なプレミア価格で査定' },
];

const faqs = [
  { q: 'ポケモンのソフトはどれくらいで売れますか？', a: '2026年10月19日の駿河屋公式では、Switchの通常版は1,100〜2,500円（最新作のPokemon LEGENDS Z-Aは1,700円、スカーレットは2,000円）でした。追加コンテンツ同梱版は5,200〜9,000円、DSのハートゴールド（ポケウォーカー同梱）は8,000円、GBAのエメラルドは9,400〜12,000円です。' },
  { q: 'ポケモンソフトを高く売る最適なタイミングはいつですか？', a: '遊び終えた時点で早めに売ることをおすすめします。2026年10月19日の駿河屋公式では、2025年発売のPokemon LEGENDS Z-A（1,700円）が2022年発売のスカーレット（2,000円）より安く、発売が新しいほど高いとは限りません。新作の発表や発売で旧作の需要が動く可能性もあるため、売却前に最新の買取価格をご確認ください。' },
  { q: 'セーブデータは消去した方がよいですか？', a: 'はい、売却前にセーブデータを消去することをおすすめします。個人情報の保護のほか、買取業者側の初期化作業が不要になるため、スムーズな査定につながります。Switchのポケモンはソフト内にセーブデータがある場合と本体にある場合があるため、事前にご確認ください。' },
  { q: 'レトロポケモン（DS・GBA・GB）のソフトは売れますか？', a: 'はい、売却できます。現行ソフトより高く売れるものもあります。2026年10月19日の駿河屋公式では、ハートゴールド（ポケウォーカー同梱）が8,000円、ソウルシルバーが7,000円、エメラルドが9,400〜12,000円です。一方、プラチナは通常の買取価格が2,000円（未開封は30,000円）で、旧作でも作品によって差があります。駿河屋やまんだらけなどのレトロゲーム専門店は高価買取に強みがあります。' },
  { q: 'ダウンロード版のポケモンは売れますか？', a: 'いいえ、ダウンロード版はニンテンドーアカウントに紐づいているため売却できません。売却を前提とする場合は、パッケージ版の購入をおすすめします。パッケージ版の方がリセールバリューがあるため、実質的なコストが安くなる場合もあります。' },
  { q: 'ポケモンカードゲームも一緒に売れますか？', a: 'ゲームソフトとポケモンカードを同時に買い取る店もあります。ヒカカク！やブックオフ、駿河屋などはカードも対象です。ただし、レアカードは専門のカードショップの方が高値がつくことが多いため、分けて売ることもご検討ください。' },
];

export default function PokemonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ポケモンソフトの買取価格ランキング【2026年10月】駿河屋19本の実測｜Z-Aは1,700円", "datePublished": "2026-03-15", "dateModified": "2026-10-19", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'ポケモン買取相場' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ソフト別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ポケモンゲームソフトの買取相場
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ポケモン本編・LEGENDSシリーズの国内版ソフト19本の買取価格を、2026年10月19日に駿河屋公式で確認してランキングにしました。追加コンテンツ同梱版や、GBA・DSの旧作が高く売れる理由、高く売るコツ、おすすめの買取店についても解説します。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <TodayBestBanner keyword="ポケットモンスター" />
        <SeriesPriceTable keyword="ポケットモンスター" heading="ポケモン(SV)の店舗別 買取価格【公式価格の実測データ】" />
        {/* 買取相場表 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ポケモンソフト買取価格ランキング【2026年10月19日・駿河屋公式】</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>駿河屋公式の買取検索で、ポケモン本編・LEGENDSシリーズの国内版ソフト19件の買取価格を確認し、高い順に並べました。上位は追加コンテンツ同梱版とGBA・DSの旧作が占め、Switchの通常版は1,100〜2,500円に集まっています。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>順位</th>
                  <th>タイトル</th>
                  <th>機種</th>
                  <th>駿河屋の買取価格</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row, i) => (
                  <tr key={row.title}>
                    <td className="text-sm text-center">{i + 1}</td>
                    <td className="font-bold text-sm">{row.title}</td>
                    <td className="text-sm">{row.platform}</td>
                    <td className="font-bold whitespace-nowrap" style={{ color: 'var(--color-electric-green)' }}>{row.price.toLocaleString()}円</td>
                    <td className="text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋公式の買取検索（2026年10月19日閲覧）。順位と倍率は当編集部が算出しました。表示は通常の買取価格で、美品・未開封の上乗せや、海外版・ダブルパックは含めていません。買取価格は日々変動し、ほかの買取店では価格が異なります。</p>
        </section>

        {/* 高く売るコツ */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ポケモンソフトを高く売るコツ</h2>
          <div className="glass-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sellingTips.map((item) => (
                <div key={item.tip} className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                  <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{item.tip}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* おすすめ買取店 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ポケモンソフトにおすすめの買取店</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>買取店</th>
                  <th>特徴</th>
                  <th>ポケモンソフトに適している理由</th>
                </tr>
              </thead>
              <tbody>
                {recommendedShops.map((row) => (
                  <tr key={row.shop}>
                    <td className="font-bold">{row.shop}</td>
                    <td className="text-sm">{row.feature}</td>
                    <td className="text-sm">{row.merit}</td>
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
            ポケモンソフトの<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>の確認方法
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            ポケモンは業者間の価格差が大きいシリーズです。一括査定で各社の価格を比較することをおすすめします。
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
            <Link href="/software/switch-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switchソフト買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>任天堂ソフトの相場一覧</p>
            </Link>
            <Link href="/hardware/switch/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switch本体買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>Switch本体の相場と売り方</p>
            </Link>
            <Link href="/knowledge/timing/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>売り時ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最適な売却タイミング</p>
            </Link>
            <Link href="/price-index/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取価格インデックス</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>実測データにもとづく店舗別の最高値</p>
            </Link>
            <Link href="/review/kaitori-world/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取ワールドの評判</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>人気ソフトを高く売る業者</p>
            </Link>
          </div>
        </section>

        <p className="text-xs mt-8 text-center" style={{ color: 'var(--color-text-light)' }}>最終更新: 2026年5月</p>
        <AuthorBox />
      </div>
    </>
  );
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/software/high-value/" className="block bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl p-5 text-center shadow hover:opacity-95 transition">
            <span className="font-bold text-lg">📈 最新の「高く売れるゲームソフト」ランキングを見る</span>
            <span className="block text-sm opacity-90 mt-1">ブックオフ・ゲオ・駿河屋の公式買取価格を定期的に実測更新中</span>
          </Link>
        </div>
      </section>
}
