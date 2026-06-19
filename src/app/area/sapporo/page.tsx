import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: '札幌のゲーム買取おすすめ店舗｜すすきの・大通・札幌駅エリア別ガイド【2026年6月】',
  description:
    '札幌でゲームを高く売れる買取店をエリア別に紹介。すすきの・狸小路（駿河屋ノルベサ店・まんだらけ札幌店）、大通、札幌駅周辺の実店舗を比較。宅配買取の代替も解説。',
  keywords: ['札幌 ゲーム買取', 'すすきの ゲーム 売る', '札幌 ゲーム 高価買取', 'まんだらけ 札幌', '駿河屋 札幌'],
  openGraph: {
    title: '札幌のゲーム買取おすすめ店舗｜すすきの・大通・札幌駅エリア別ガイド【2026年6月】',
    description: '札幌のゲーム買取店をエリア別に紹介。すすきの・狸小路・大通の実店舗を比較。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const areas = [
  {
    name: 'すすきの・狸小路エリア',
    description: '中央区南部のすすきの〜狸小路は札幌で最も買取店が集中するエリア。商業施設ノルベサ（南3西5）に駿河屋・まんだらけが入り、買取拠点になっています。',
    shops: [
      { name: '駿河屋 札幌ノルベサ店', feature: 'ノルベサ1F・3F。1Fに買取センター。ゲーム全般に加えトレカ・フィギュアも。通販データに基づく査定。', genre: '全般・トレカ・フィギュア', priceLevel: '中〜高' },
      { name: 'まんだらけ 札幌店', feature: 'ノルベサ2F。レトロ・コレクター品・旧作に強い。店頭/宅配/出張買取に対応。', genre: 'レトロ・コレクター', priceLevel: '高（レア品）' },
      { name: 'ゲオ 札幌狸小路2丁目店', feature: '金市館ビルB1F。新作中心のゲーム全般。買取価格をアプリで事前確認可能。', genre: '新作・全般', priceLevel: '中' },
      { name: 'ジャングル 札幌店', feature: '札幌二番街・二番館ビル1F。フィギュア・ホビーとあわせてゲームも買取。', genre: 'フィギュア・ホビー・ゲーム', priceLevel: '中' },
    ],
  },
  {
    name: '大通エリア',
    description: '中央区中心部の大通エリア。地下鉄でのアクセスが良く、総合中古の大型店が利用しやすい立地です。',
    shops: [
      { name: 'BOOKOFF 札幌南2条店', feature: '南2西1。ゲーム全般を幅広く対応。箱・説明書の欠品でも買取可能なことが多い大型総合店。', genre: '全般', priceLevel: '中' },
    ],
  },
  {
    name: '札幌駅・北区エリア',
    description: '札幌駅の北側、北区エリア。地下鉄駅前型のゲオが利用しやすく、新作・中古の売買に便利です。',
    shops: [
      { name: 'ゲオ 札幌北24条駅前店', feature: '地下鉄北24条駅前・スガイ24 1F。新作中心のゲーム全般＋スマホ買取に対応。', genre: '全般・スマホ', priceLevel: '中' },
      { name: 'ゲオ 札幌南11条店', feature: 'すすきの近接（南11西8）。新作中心のゲーム全般。', genre: '全般', priceLevel: '中' },
    ],
  },
];

const highPriceTips = [
  { tip: 'ノルベサで駿河屋とまんだらけを回る', detail: '南3西5のノルベサには駿河屋（1F・3F）とまんだらけ（2F）が同居しています。レトロ・限定版・トレカは2店で査定を比較すると最高値を見つけやすいです。' },
  { tip: '新作・一般ソフトはゲオで事前確認', detail: 'ゲオ狸小路2丁目店・北24条駅前店などはアプリで買取価格を事前確認できます。新作はゲオで相場を押さえてから持ち込むと効率的です。' },
  { tip: 'レトロ・コレクター品はまんだらけ・駿河屋へ', detail: 'ファミコン〜レトロや限定版・プレミアソフトは、まんだらけ札幌店や駿河屋ノルベサ店の方が一般チェーンより高値をつけやすい傾向です。' },
];

const faqs = [
  { q: '札幌でゲームを最も高く買い取ってくれる店はどこですか？', a: 'ソフトの種類で異なります。新作・一般ソフトはゲオやブックオフ、レトロ・限定版・コレクター品はまんだらけ札幌店や駿河屋札幌ノルベサ店が高値の傾向です。複数店で査定を比較するのがおすすめです。' },
  { q: 'すすきの周辺で即日現金化できますか？', a: 'はい。ゲオ狸小路2丁目店やブックオフ札幌南2条店などでは、身分証提示で即日現金化が可能です。査定時間は点数次第ですが、10点程度なら15〜30分が目安です。' },
  { q: '札幌駅の近くに買取店はありますか？', a: 'JR札幌駅直近の単独ゲーム買取店は限られます。来店買取の中心はすすきの・大通・狸小路エリアで、北区側はゲオ札幌北24条駅前店が駅前型として便利です。' },
  { q: '北海道在住ですが宅配買取の方がお得ですか？', a: '大量に売る場合や近くに店舗がない場合は宅配買取が便利です。ヒカカク！なら最大20社に一括査定でき、送料無料の業者も多いため、北海道在住でも十分に高値を狙えます。' },
];

export default function SapporoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "札幌のゲーム買取おすすめ店舗｜すすきの・大通・札幌駅エリア別ガイド", "datePublished": "2026-06-18", "dateModified": "2026-06-18", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'エリア別', href: '/' }, { name: '札幌' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(251,191,36,0.2)', color: '#FBBF24' }}>エリア別ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">札幌のゲーム買取おすすめ店舗ガイド</h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            すすきの・狸小路・大通・札幌駅周辺のエリア別にゲーム買取店を紹介。ノルベサの駿河屋・まんだらけから駅前型のゲオまで、札幌で自分に合った買取店が見つかります。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新: 2026年6月（各店公式・店舗情報で実在確認）</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {areas.map((area) => (
          <section key={area.name} className="mb-12">
            <h2 className="section-heading mb-6"><span className="section-heading-bar" />{area.name}</h2>
            <p className="text-sm mb-6" style={{ color: 'var(--color-text-light)' }}>{area.description}</p>
            <div className="overflow-x-auto">
              <table className="comparison-table">
                <thead><tr><th>店舗名</th><th>特徴</th><th>得意ジャンル</th><th>価格帯</th></tr></thead>
                <tbody>
                  {area.shops.map((shop) => (
                    <tr key={shop.name}>
                      <td className="font-bold text-sm">{shop.name}</td>
                      <td className="text-sm">{shop.feature}</td>
                      <td className="text-sm">{shop.genre}</td>
                      <td className="text-sm font-bold" style={{ color: shop.priceLevel.includes('高') ? 'var(--color-electric-green)' : 'var(--color-text-light)' }}>{shop.priceLevel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />店舗に行けない場合のオンライン代替</h2>
          <div className="glass-card p-6">
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>近くに店舗がない・大量に売りたい場合は、北海道からでも使えるオンライン買取が便利です。</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}><h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！</h3><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社に一括査定。自宅から最高値を比較できる。送料無料の業者多数。</p></div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}><h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ゲーム王国（宅配買取）</h3><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>北海道からも送料無料（佐川集荷）。故障品・箱なしもOKで最短当日入金。</p></div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}><h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>駿河屋（宅配買取）</h3><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>レトロゲームの宅配買取に強い。全国どこからでも送料無料で利用可能。</p></div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />札幌で高く売るコツ</h2>
          <div className="space-y-4">
            {highPriceTips.map((item, i) => (
              <div key={item.tip} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>{String(i + 1).padStart(2, '0')}</div>
                <div><h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{item.tip}</h3><p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{item.detail}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />よくある質問</h2>
          <div>
            {faqs.map((faq, i) => (<details key={i} className="faq-item"><summary>{faq.q}</summary><div className="faq-answer">{faq.a}</div></details>))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) }) }} />
        </section>

        <section className="glass-card-dark p-8 text-center">
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>札幌で<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>を見つけよう</h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>店舗持ち込みでもオンラインでも、複数社の査定を比較するのが高く売るコツです。</p>
          <div className="flex flex-wrap justify-center gap-4"><Link href="/" className="btn-primary py-3 px-8">おすすめランキングを見る</Link></div>
        </section>

        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のエリアガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/area/sendai/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>仙台のゲーム買取</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>仙台駅・一番町・泉エリア別ガイド</p></Link>
            <Link href="/area/tokyo/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>東京のゲーム買取</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>秋葉原・新宿・池袋エリア別ガイド</p></Link>
            <Link href="/area/osaka/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>大阪のゲーム買取</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>日本橋・梅田・難波エリア別ガイド</p></Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
