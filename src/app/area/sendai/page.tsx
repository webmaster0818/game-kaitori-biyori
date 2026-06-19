import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: '仙台のゲーム買取おすすめ店舗｜仙台駅・一番町・泉エリア別ガイド【2026年6月】',
  description:
    '仙台でゲームを高く売れる買取店をエリア別に紹介。仙台駅前（ソフマップ・らしんばん）、一番町・クリスロード、泉中央（ゲーム堂・駿河屋）の実店舗を比較。宅配買取の代替も解説。',
  keywords: ['仙台 ゲーム買取', '仙台 ゲーム 売る', '仙台 ゲーム 高価買取', 'ゲーム堂 仙台', '駿河屋 仙台'],
  openGraph: {
    title: '仙台のゲーム買取おすすめ店舗｜仙台駅・一番町・泉エリア別ガイド【2026年6月】',
    description: '仙台のゲーム買取店をエリア別に紹介。仙台駅前・一番町・泉中央の実店舗を比較。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const areas = [
  {
    name: '仙台駅周辺エリア',
    description: '仙台駅西口のイービーンズ（E BeanS）を中心に、ゲーム・アニメ・トレカの中古店が集まります。駅近でアクセス良好です。',
    shops: [
      { name: 'ソフマップ 仙台駅前店（E BeanS 1F）', feature: '駅西口徒歩3分。新品・中古ゲーム、フィギュア、ガンプラを扱う。ゲーム買取に対応。', genre: '全般・ホビー', priceLevel: '中' },
      { name: 'らしんばん 仙台店（E BeanS 8F）', feature: 'アニメグッズ・フィギュア中心。中古ゲーム・DVDも買取。サブカル系に強い。', genre: 'アニメ・フィギュア・ゲーム', priceLevel: '中' },
      { name: 'シーガル 仙台駅前店', feature: 'トレカ主体（遊戯王・ポケカ等）に加えビデオゲーム・ホビーも。宮城・山形・福島の地場チェーン。', genre: 'トレカ・ゲーム・ホビー', priceLevel: '中' },
    ],
  },
  {
    name: '一番町・中心部エリア',
    description: 'クリスロード商店街など青葉区中央の中心部。商業地のため大型店は限られますが、総合中古のブックオフが利用しやすいです。',
    shops: [
      { name: 'ブックオフ 仙台クリスロード店', feature: 'ガレリアクリスロード内。本・ゲーム・トレカを幅広く対応。中心部で手軽に売れる。', genre: '全般・トレカ', priceLevel: '中' },
    ],
  },
  {
    name: '泉・宮城野エリア（ゲーム専門・大型）',
    description: '泉中央や宮城野区には、レトロ含むゲーム専門店や大型ホビー店があり、専門性の高い査定が期待できます。',
    shops: [
      { name: 'ゲーム堂 仙台店（泉中央）', feature: '泉中央駅徒歩約4分。Switch/PS5の新作から昭和・平成レトロまで扱うゲーム専門店。店頭買取に強い。', genre: 'ゲーム専門・レトロ', priceLevel: '中〜高' },
      { name: '駿河屋 フォレオ東仙台店（宮城野区）', feature: 'フォレオ東仙台内の大型ホビー店。ゲーム・フィギュア・プラモ・トレカに対応。事前ネット査定（あんしん買取）も可能。', genre: '全般・ホビー', priceLevel: '中〜高' },
    ],
  },
];

const highPriceTips = [
  { tip: '仙台駅前で複数店を回る', detail: 'E BeanSにはソフマップ・らしんばんが入居し、近隣にシーガルもあります。ゲーム＋アニメ＋トレカをまとめて売るなら駅前で2〜3店比較が効率的です。' },
  { tip: 'レトロ・専門タイトルはゲーム堂・駿河屋へ', detail: 'レトロや専門性の高いタイトルは、泉中央のゲーム堂仙台店や駿河屋フォレオ東仙台店の方が一般チェーンより高値をつけやすい傾向です。' },
  { tip: '駿河屋は事前ネット査定を活用', detail: '駿河屋フォレオ東仙台店は「あんしん買取」で事前に概算がわかります。持ち込み前に査定額の目安を把握しておくと安心です。' },
];

const faqs = [
  { q: '仙台でゲームを最も高く買い取ってくれる店はどこですか？', a: '新作・一般ソフトはゲオやブックオフ、レトロや専門タイトルは泉中央のゲーム堂仙台店、フィギュアやプラモも一緒なら駿河屋フォレオ東仙台店が高値の傾向です。複数店での比較がおすすめです。' },
  { q: '仙台駅周辺で即日現金化できますか？', a: 'はい。ソフマップ仙台駅前店やブックオフ仙台クリスロード店などでは、身分証提示で即日現金化が可能です。点数次第ですが10点程度なら15〜30分が目安です。' },
  { q: '仙台にまんだらけはありますか？', a: '2026年6月時点で、まんだらけの仙台店は確認できません。アニメ・サブカル系の中古はらしんばん仙台店やソフマップ仙台駅前店が担っています。' },
  { q: '東北在住ですが宅配買取の方がお得ですか？', a: '大量に売る場合や近くに専門店がない場合は宅配買取が便利です。ヒカカク！なら最大20社に一括査定でき、送料無料の業者も多いため、東北在住でも高値を狙えます。' },
];

export default function SendaiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "仙台のゲーム買取おすすめ店舗｜仙台駅・一番町・泉エリア別ガイド", "datePublished": "2026-06-18", "dateModified": "2026-06-18", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'エリア別', href: '/' }, { name: '仙台' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(251,191,36,0.2)', color: '#FBBF24' }}>エリア別ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">仙台のゲーム買取おすすめ店舗ガイド</h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            仙台駅前・一番町・泉中央のエリア別にゲーム買取店を紹介。駅前のソフマップ・らしんばんから、泉中央のゲーム専門店ゲーム堂まで、仙台で自分に合った買取店が見つかります。
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
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>近くに店舗がない・大量に売りたい場合は、東北からでも使えるオンライン買取が便利です。</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}><h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！</h3><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社に一括査定。自宅から最高値を比較できる。送料無料の業者多数。</p></div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}><h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>ゲーム王国（宅配買取）</h3><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>東北からも送料無料（佐川集荷）。故障品・箱なしもOKで最短当日入金。</p></div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}><h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>駿河屋（宅配買取）</h3><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>レトロゲームの宅配買取に強い。全国どこからでも送料無料で利用可能。</p></div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />仙台で高く売るコツ</h2>
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
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>仙台で<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>を見つけよう</h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>店舗持ち込みでもオンラインでも、複数社の査定を比較するのが高く売るコツです。</p>
          <div className="flex flex-wrap justify-center gap-4"><Link href="/" className="btn-primary py-3 px-8">おすすめランキングを見る</Link></div>
        </section>

        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のエリアガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/area/sapporo/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>札幌のゲーム買取</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>すすきの・大通・札幌駅エリア別ガイド</p></Link>
            <Link href="/area/tokyo/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>東京のゲーム買取</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>秋葉原・新宿・池袋エリア別ガイド</p></Link>
            <Link href="/area/saitama/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>埼玉のゲーム買取</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>大宮・川口エリア別ガイド</p></Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
