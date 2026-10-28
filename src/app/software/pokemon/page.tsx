import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'
import { SeriesPriceTable, TodayBestBanner } from '@/components/PriceIndex'

export const metadata: Metadata = {
  title: 'ポケモンソフト（カセット）の買取価格ランキング【2026年10月】GB・GBA・DS・Switch42本を駿河屋で実測',
  description:
    'ポケモンソフト42本（GB・GBA・DS・3DS・Switch）の買取価格を2026年10月28日に駿河屋公式で調べ、ランキングにしました。1位はGBの青（14,000円）、Switchの通常版は1,600〜2,500円です。機種別の価格帯と高く売るコツも解説します。',
  keywords: ['ポケモンソフト 買取価格', 'ポケモンカセット 買取価格', 'ポケモン ゲーム 買取 相場', 'ポケモン ソフト 売る', 'ポケモンSV 買取', 'ポケモン 買取価格'],
  openGraph: {
    images: ['/og.png'],
    title: 'ポケモンソフト（カセット）の買取価格ランキング【2026年10月】GB・GBA・DS・Switch42本を駿河屋で実測',
    description: 'ポケモンソフト42本の駿河屋公式の買取価格（2026年10月28日確認）と、機種別の価格帯・高く売るコツを解説します。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

// 2026-10-28 駿河屋公式の買取検索で確認した国内版の買取価格（美品・未開封の上乗せ前の通常の買取価格）。表示時に高い順へ並べ替える
const priceData = [
  { title: 'ポケットモンスター 青（1999年発売・JANコード付き）', platform: 'GB', price: 14000, note: 'JANコード無し版（1996年）は7,200円' },
  { title: 'ポケットモンスター エメラルド［ワイヤレスアダプタ同梱］', platform: 'GBA', price: 12000, note: '美品は14,400円' },
  { title: 'ポケットモンスター 赤', platform: 'GB', price: 10000, note: '' },
  { title: 'ポケットモンスター エメラルド［廉価版］', platform: 'GBA', price: 9400, note: '美品は10,400円' },
  { title: 'ポケットモンスター ソード ＋ エキスパンションパス', platform: 'Switch', price: 9000, note: '通常版ソード（1,900円）の約4.7倍' },
  { title: 'ポケットモンスター シールド ＋ エキスパンションパス', platform: 'Switch', price: 9000, note: '通常版シールド（1,800円）の5倍' },
  { title: 'ポケットモンスター クリスタルバージョン', platform: 'GB', price: 9000, note: '美品は23,000円' },
  { title: 'ポケットモンスター 緑', platform: 'GB', price: 8500, note: '' },
  { title: 'ポケットモンスター ハートゴールド（ポケウォーカー同梱）', platform: 'DS', price: 8000, note: '' },
  { title: 'ポケットモンスター ソウルシルバー（ポケウォーカー同梱）', platform: 'DS', price: 7000, note: '' },
  { title: 'ポケットモンスター ファイアレッド［ワイヤレスアダプタ同梱］', platform: 'GBA', price: 7000, note: '美品は8,400円' },
  { title: 'ポケットモンスター バイオレット ＋ ゼロの秘宝', platform: 'Switch', price: 6000, note: '通常版バイオレット（2,000円）の3倍' },
  { title: 'ポケットモンスター Let\'s Go! ピカチュウ モンスターボール Plusセット', platform: 'Switch', price: 5800, note: '' },
  { title: 'ポケットモンスター リーフグリーン［ワイヤレスアダプタ同梱］', platform: 'GBA', price: 5800, note: '美品は7,000円' },
  { title: 'ポケットモンスター ピカチュウ', platform: 'GB', price: 5500, note: '' },
  { title: 'ポケットモンスター スカーレット ＋ ゼロの秘宝', platform: 'Switch', price: 5200, note: '通常版スカーレット（2,000円）の2.6倍' },
  { title: 'ポケットモンスター Let\'s Go! イーブイ モンスターボール Plusセット', platform: 'Switch', price: 5000, note: '' },
  { title: 'ポケットモンスター ファイアレッド［廉価版］', platform: 'GBA', price: 4500, note: '美品は5,400円' },
  { title: 'ポケットモンスター リーフグリーン［廉価版］', platform: 'GBA', price: 4400, note: '' },
  { title: 'ポケットモンスター ルビー', platform: 'GBA', price: 4300, note: '' },
  { title: 'ポケットモンスター サファイア', platform: 'GBA', price: 4000, note: '' },
  { title: 'ポケットモンスター Let\'s Go! イーブイ（通常版）', platform: 'Switch', price: 2500, note: '同じ作品のピカチュウ版より300円高い' },
  { title: 'ポケットモンスター ホワイト2', platform: 'DS', price: 2500, note: '' },
  { title: 'ポケットモンスター ブラック2', platform: 'DS', price: 2400, note: '' },
  { title: 'ポケットモンスター Let\'s Go! ピカチュウ（通常版）', platform: 'Switch', price: 2200, note: '10月19日の1,900円から300円上昇' },
  { title: 'ポケットモンスター スカーレット', platform: 'Switch', price: 2000, note: '' },
  { title: 'ポケットモンスター バイオレット', platform: 'Switch', price: 2000, note: '10月19日の1,800円から200円上昇' },
  { title: 'ポケットモンスター プラチナ', platform: 'DS', price: 2000, note: '' },
  { title: 'ポケットモンスター ウルトラサン', platform: '3DS', price: 2000, note: '' },
  { title: 'ポケットモンスター ウルトラムーン', platform: '3DS', price: 2000, note: '' },
  { title: 'ポケットモンスター ソード', platform: 'Switch', price: 1900, note: '' },
  { title: 'ポケットモンスター シールド', platform: 'Switch', price: 1800, note: '' },
  { title: 'Pokemon LEGENDS アルセウス', platform: 'Switch', price: 1800, note: '' },
  { title: 'Pokemon LEGENDS Z-A', platform: 'Switch / Switch 2', price: 1700, note: 'Switch版・Nintendo Switch 2 Editionとも同額' },
  { title: 'ポケットモンスター ブリリアントダイヤモンド', platform: 'Switch', price: 1600, note: '10月19日の1,100円から500円上昇' },
  { title: 'ポケットモンスター シャイニングパール', platform: 'Switch', price: 1600, note: '10月19日の1,400円から200円上昇' },
  { title: 'ポケットモンスター オメガルビー', platform: '3DS', price: 1600, note: '' },
  { title: 'ポケットモンスター ブラック', platform: 'DS', price: 1500, note: '' },
  { title: 'ポケットモンスター ホワイト', platform: 'DS', price: 1300, note: '' },
  { title: 'ポケットモンスター パール', platform: 'DS', price: 1200, note: '' },
  { title: 'ポケットモンスター X', platform: '3DS', price: 1000, note: '' },
  { title: 'ポケットモンスター ムーン', platform: '3DS', price: 400, note: '' },
].sort((a, b) => b.price - a.price);

// 機種別のまとめ（priceData から集計）
const platformOrder = ['GB', 'GBA', 'DS', '3DS', 'Switch'];
const platformSummary = platformOrder.map((pf) => {
  const rows = priceData.filter((r) => r.platform === pf || r.platform.startsWith(`${pf} `));
  const prices = rows.map((r) => r.price);
  return { platform: pf, count: rows.length, min: Math.min(...prices), max: Math.max(...prices) };
});

// 2026-10-28 時点で一覧に買取価格が表示されず「メールにてお見積」だった国内版
const quoteOnly = ['金（GB）', '銀（GB）', 'ダイヤモンド（DS）', 'Y（3DS）', 'アルファサファイア（3DS）', 'サン（3DS）'];

const sellingTips = [
  { tip: '遊び終えたら早めに売る', detail: '2026年10月28日の駿河屋公式では、2025年発売の最新作『Pokemon LEGENDS Z-A』（1,700円）でも、2022年発売のスカーレット（2,000円）より安い買取価格でした。新しい作品ほど高いとは限らず、流通量が増えると価格は下がるため、遊び終えた時点での売却をおすすめします。' },
  { tip: '追加コンテンツ同梱版は別格', detail: '駿河屋公式では、追加コンテンツ同梱のパッケージ版（ソード・シールド＋エキスパンションパス 各9,000円、バイオレット＋ゼロの秘宝 6,000円）が、通常版の約2.6〜5倍で買い取られています（2026年10月28日）。ダウンロード購入したDLCはアカウントに紐づくため、ソフトと一緒に売ることはできません。' },
  { tip: 'レトロ作品はケース・説明書を揃える', detail: '駿河屋公式ではエメラルドの外箱のみにも個別の買取価格（2026年10月28日時点で1,500〜2,200円）が付いており、付属品にも価値があります。ハートゴールド・ソウルシルバーは歩数計（ポケウォーカー）同梱の状態で7,000〜8,000円です。また、ファイアレッド・リーフグリーンはワイヤレスアダプタ同梱版が廉価版より1,400〜2,500円高く、同じ作品でも版によって価格が異なります。' },
  { tip: 'ダブルパックは単品2本の合計と比べる', detail: '2026年10月28日の駿河屋公式では、ダブルパックの買取価格は単品2本の合計と同額か、それより高い結果でした。ウルトラサン・ウルトラムーン（3DS）は4,700円で合計（2,000円＋2,000円）より700円高く、ブリリアントダイヤモンド・シャイニングパールは3,600円で合計（1,600円＋1,600円）より400円高く、ソード・シールドは3,800円で合計（1,900円＋1,800円）より100円高く、スカーレット・バイオレットは4,000円で合計（2,000円＋2,000円）と同額です。' },
];

// 2026-10-20 各社公式で確認できた内容のみ
const recommendedShops = [
  { shop: 'ヒカカク！', feature: '最大20社に一括で査定見積もりを依頼できる（公式サイトの説明）', merit: '複数の買取店の査定額を一度に比べたい場合に利用できます' },
  { shop: '駿河屋', feature: '公式の買取検索で商品ごとの買取価格を公開', merit: '本ページのランキングの42件のほか、ダブルパックや外箱のみにも買取価格が掲載されています（2026年10月28日確認）' },
];

const faqs = [
  { q: 'ポケモンのソフトはどれくらいで売れますか？', a: '2026年10月28日の駿河屋公式では、Switchの通常版は1,600〜2,500円（最新作のPokemon LEGENDS Z-Aは1,700円、スカーレットは2,000円）でした。追加コンテンツ同梱版は5,200〜9,000円、3DSは400〜2,000円、DSは1,200〜8,000円、GBAは4,000〜12,000円、GBは5,500〜14,000円です。' },
  { q: 'ポケモンソフトを高く売る最適なタイミングはいつですか？', a: '遊び終えた時点で早めに売ることをおすすめします。2026年10月28日の駿河屋公式では、2025年発売のPokemon LEGENDS Z-A（1,700円）が2022年発売のスカーレット（2,000円）より安く、発売が新しいほど高いとは限りません。新作の発表や発売で旧作の需要が動く可能性もあるため、売却前に最新の買取価格をご確認ください。' },
  { q: 'セーブデータは消去した方がよいですか？', a: 'はい、売却前にセーブデータを消去することをおすすめします。個人情報の保護のほか、買取業者側の初期化作業が不要になるため、スムーズな査定につながります。Switchのポケモンはソフト内にセーブデータがある場合と本体にある場合があるため、事前にご確認ください。' },
  { q: 'レトロポケモン（DS・GBA・GB）のカセットは売れますか？', a: 'はい、売却できます。現行ソフトより高く売れるものもあります。2026年10月28日の駿河屋公式では、GBの青（JANコード付き）が14,000円、赤が10,000円、クリスタルバージョンが9,000円、GBAのエメラルドが9,400〜12,000円、DSのハートゴールド（ポケウォーカー同梱）が8,000円でした。一方、DSのパールは1,200円、3DSのムーンは400円で、旧作でも作品によって差があります。金・銀・ダイヤモンドなど、一覧に買取価格が表示されず見積もり扱いの作品もあります。' },
  { q: 'ダウンロード版のポケモンは売れますか？', a: 'いいえ、ダウンロード版はニンテンドーアカウントに紐づいているため売却できません。売却を前提とする場合は、パッケージ版の購入をおすすめします。パッケージ版の方がリセールバリューがあるため、実質的なコストが安くなる場合もあります。' },
  { q: 'ポケモンカードゲームも一緒に売れますか？', a: 'ゲームソフトとトレーディングカードの両方を扱う買取店があります。2026年10月20日に各社公式で確認したところ、駿河屋は買取検索でポケモンカードゲームの商品に買取価格を掲載しており、ブックオフは公式サイトでトレカを買取対象として案内しています。ヒカカク！は一括査定の依頼カテゴリに「トレカ」があります。取り扱いの可否や条件は店舗・商品によって異なるため、売却前に各社の買取条件をご確認ください。' },
];

export default function PokemonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ポケモンソフト（カセット）の買取価格ランキング【2026年10月】GB・GBA・DS・Switch42本を駿河屋で実測", "datePublished": "2026-03-15", "dateModified": "2026-10-28", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'ポケモン買取相場' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ソフト別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ポケモンソフト（カセット）の買取価格ランキング
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ポケモン本編・LEGENDSシリーズの国内版ソフト42本（GB・GBA・DS・3DS・Switch）の買取価格を、2026年10月28日に駿河屋公式で確認してランキングにしました。最も高いのはGBの青（14,000円）、Switchの通常版は1,600〜2,500円です。機種別の価格帯、高く売るコツ、おすすめの買取店についても解説します。
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ポケモンソフト買取価格ランキング【2026年10月28日・駿河屋公式・42本】</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>駿河屋公式の買取検索で、ポケモン本編・LEGENDSシリーズの国内版ソフト42件の買取価格を確認し、高い順に並べました。上位はGB・GBAの旧作と追加コンテンツ同梱版が占め、Switchの通常版は1,600〜2,500円、3DSは400〜2,000円に集まっています。</p>
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
          <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋公式の買取検索（2026年10月28日閲覧）。順位・倍率・前回（10月19日）との差は当編集部が算出しました。表示は通常の買取価格で、美品・未開封の上乗せや、海外版・ダブルパック・外箱のみは含めていません。同額の場合の並びは機種・作品の順で、順位の差を示すものではありません。買取価格は日々変動し、ほかの買取店では価格が異なります。</p>
        </section>

        {/* 機種別のまとめ */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />機種別のポケモンカセット・ソフトの買取価格帯</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>上のランキングの42件を機種ごとにまとめました。GB・GBAのカセットは全作品が4,000円以上で、3DS・Switchの通常版より高い傾向があります。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>機種</th>
                  <th>集計した件数</th>
                  <th>駿河屋の買取価格の幅</th>
                </tr>
              </thead>
              <tbody>
                {platformSummary.map((row) => (
                  <tr key={row.platform}>
                    <td className="font-bold">{row.platform}</td>
                    <td className="text-sm">{row.count}件</td>
                    <td className="text-sm whitespace-nowrap">{row.min.toLocaleString()}〜{row.max.toLocaleString()}円</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>なお、{quoteOnly.join('・')}は、2026年10月28日時点で駿河屋公式の一覧に買取価格が表示されず、「メールにてお見積」の扱いでした。これらの作品は、売却前に駿河屋へ見積もりを依頼するか、ほかの買取店の価格をご確認ください。</p>
          <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋公式の買取検索（2026年10月28日閲覧）。件数と価格の幅は当編集部が集計しました。Switchには追加コンテンツ同梱版・モンスターボール Plusセットを含みます。</p>
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
            買取価格は店舗ごとに異なるため、売却前に複数社の価格を比較することをおすすめします。
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

        <p className="text-xs mt-8 text-center" style={{ color: 'var(--color-text-light)' }}>最終更新: 2026年10月28日</p>
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
