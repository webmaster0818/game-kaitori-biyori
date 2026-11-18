import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';
import { hardwarePrices, analyzeTitle, STORE_LABELS, HARDWARE_SURVEY_DATE, type StoreKey } from '@/data/prices';

// 2026-11-18: 「ゲーム機 買取」「ゲーム機 買取 おすすめ」の受け皿として、結論ボックス・選び方・FAQを追加。価格は src/data/prices.ts の hardwarePrices（11/18 実測）
const PAGE_TITLE = 'ゲーム機の買取はどこがいい？本体の買取価格ランキング｜Switch 2・PS5を4社の公式価格で比較【2026年11月】';
const PAGE_DESCRIPTION =
  'ゲーム機の買取はどこがいいか、Switch 2・Switch有機EL・旧型Switch・Switch Lite・PS5 Slim・PS5旧型の7機種を、ブックオフ・ゲオ・駿河屋・レトログの公式買取価格で2026年11月18日に実測して比較しました。機種ごとの最高値の店と差額、売る前の注意点を掲載しています。';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: ['ゲーム機 買取 おすすめ', 'ゲーム機 買取', 'ゲーム機 買取 ランキング', '本体 買取 どこが高い', 'Switch2 買取 比較', 'PS5 買取 比較', 'ゲーム機本体 買取価格'],
  openGraph: {
    images: ['/og.png'],
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const surveyDateJa = (() => {
  const [y, m, d] = HARDWARE_SURVEY_DATE.split('-').map(Number);
  return `${y}年${m}月${d}日`;
})();

const faqs = [
  {
    q: 'ゲーム機を売るならどこがいいですか？',
    a: '機種によって最も高い店が異なります。2026年11月18日に各社の公式買取価格を確認したところ、Switch 2（日本語・国内専用）・PS5 Slim デジタル・エディション・PS5旧型（CFI-1200A01）は駿河屋、Switch 有機ELモデル・旧型Switch（HAD-S-KABAH）・Switch Liteはゲオが最高値でした。PS5 Slim 通常版はゲオと駿河屋が同額の60,000円です。売却前に、お持ちの機種の型番で各社の最新価格をご確認ください。',
  },
  {
    q: 'Switch 2はどこが一番高く売れますか？',
    a: '2026年11月18日時点の日本語・国内専用モデル（BEE-S-KB6CA）の公式買取価格は、駿河屋が37,000円、ブックオフ（宅配買取の参考買取価格）とゲオがともに35,000円で、駿河屋が最も高い結果でした。レトログの価格表にはSwitch 2の掲載がありませんでした。新品未開封品の価格や他の買取店との比較は、Switch 2の買取価格ページでご説明しています。',
  },
  {
    q: 'PS5はどこが高く売れますか？',
    a: '2026年11月18日時点で、PS5 Slim 通常版（CFI-2000A01）はゲオと駿河屋が60,000円、ブックオフが57,000円です。PS5 Slim デジタル・エディション（CFI-2000B01）は駿河屋56,000円、ゲオ53,000円、ブックオフ25,000円で、店による差が31,000円ありました。旧型の通常版（CFI-1200A01）は駿河屋50,000円、ゲオ48,000円、ブックオフ39,000円、レトログ36,000円です。',
  },
  {
    q: '箱や付属品がないと買取価格は下がりますか？',
    a: '下がる場合があります。ブックオフ宅配買取の買取価格検索では、箱・説明書のない本体（【箱説なし】）に別の参考買取価格が掲載されており、2026年11月18日時点でPS5 Slim 通常版は57,000円に対して54,500円、Switch 有機ELモデルは12,001円に対して9,600円でした。駿河屋は公式の減額基準で、必須付属品の欠品や本体・パッケージの傷み・汚れ、ゲーム機本体の内蔵電池切れを減額対象としています（2026年11月15日確認）。',
  },
  {
    q: '宅配買取の送料や、キャンセル時の返送料はかかりますか？',
    a: '各社の公式情報では、ブックオフは送料・手数料無料で、「あんしん返送」を選んで承認しなかった場合の返却送料はお客様負担です。ゲオは送料無料で、査定後に返品を選んだ場合の返送料もゲオ負担です（査定前の自己都合キャンセル等は利用者負担）。駿河屋は「あんしん買取」が見積金額3,000円以上、「かんたん買取」が30点以上で着払いにでき、承諾前のキャンセルの返送料は利用者負担です。レトログは買取成立時の送料が無料で、査定に納得できない場合の返却送料も2026年11月1日から同社負担です（一部例外あり）。確認日は各レビューページに記載しています。',
  },
];

export default function HardwareRankingPage() {
  const ranked = hardwarePrices
    .map((t) => {
      const a = analyzeTitle(t);
      if (!a) return null;
      const entries = (Object.entries(a.prices) as [StoreKey, number][]).filter(([, v]) => typeof v === 'number');
      const topStores = entries.filter(([, v]) => v === a.best.price).map(([s]) => s);
      const lowStores = entries.filter(([, v]) => v === a.low).map(([s]) => s);
      return { ...a, topStores, lowStores, storeCount: entries.length };
    })
    .filter((a): a is NonNullable<typeof a> => a !== null)
    .sort((a, b) => b.best.price - a.best.price);

  const storeNames = (keys: StoreKey[]) => keys.map((k) => STORE_LABELS[k]).join('・');

  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'ゲーム機本体の買取価格ランキング',
    itemListElement: ranked.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `${r.title}（最高値 ${r.best.price.toLocaleString()}円・${storeNames(r.topStores)}）`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": PAGE_TITLE, "description": PAGE_DESCRIPTION, "datePublished": "2026-09-01", "dateModified": HARDWARE_SURVEY_DATE, "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: '本体別', href: '/' }, { name: '本体買取価格ランキング' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(245,158,11,0.2)', color: '#F59E0B' }}>本体買取ランキング</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲーム機の買取はどこがいい？本体の買取価格ランキング
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ブックオフ・ゲオ・駿河屋・レトログが公式に公表しているゲーム機本体の買取価格を定期的に実測し、<strong>4社の中で最も高い価格</strong>の順に掲載したランキングです。同じ本体でも店によって2,000円から3万円以上の差があるため、売却先を一覧で比較いただけます。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>価格調査日: {surveyDateJa}（各社公式買取ページで実測）</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 結論ボックス */}
        <section className="mb-12 rounded-xl border-2 p-5 md:p-6 bg-white" style={{ borderColor: '#F59E0B' }}>
          <h2 className="text-lg md:text-xl font-extrabold mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：ゲーム機を売るならどこがいいか（{surveyDateJa}実測）</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text)' }}>
            最も高い店は機種によって異なります。{surveyDateJa}の公式買取価格では、<strong>Switch 2・PS5 Slim デジタル・エディション・PS5旧型（CFI-1200A01）は駿河屋</strong>、<strong>Switch 有機ELモデル・旧型Switch・Switch Liteはゲオ</strong>が最高値でした。PS5 Slim 通常版はゲオと駿河屋が同額です。1社だけで決めず、お持ちの機種の型番で比較されることをおすすめします。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="text-left border-b border-gray-200">
                  <th className="py-2 pr-3">本体</th>
                  <th className="py-2 pr-3">最高値の店</th>
                  <th className="py-2 pr-3">最安の店</th>
                  <th className="py-2">店ごとの差額</th>
                </tr>
              </thead>
              <tbody>
                {ranked.map((r) => (
                  <tr key={r.title} className="border-b border-gray-100 align-top">
                    <td className="py-2 pr-3 font-bold">{r.title}</td>
                    <td className="py-2 pr-3 whitespace-nowrap">{storeNames(r.topStores)} {r.best.price.toLocaleString()}円</td>
                    <td className="py-2 pr-3 whitespace-nowrap">{r.storeCount > 1 ? `${storeNames(r.lowStores)} ${r.low.toLocaleString()}円` : '—'}</td>
                    <td className="py-2 font-extrabold whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>{r.storeCount > 1 ? `${r.gap.toLocaleString()}円` : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="text-sm font-extrabold mt-5 mb-2" style={{ color: 'var(--color-deep-blue)' }}>売る前の注意</h3>
          <ul className="text-sm leading-relaxed space-y-2" style={{ color: 'var(--color-text)' }}>
            <li>・<strong>本体の初期化</strong>：駿河屋は、ゲーム機本体はデータを削除・初期化してから送るよう案内しています（2026年11月15日確認）。手順は<Link href="/hardware/switch2/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>Switch 2</Link>・<Link href="/hardware/ps5/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>PS5</Link>の各ページでご説明しています。</li>
            <li>・<strong>付属品の有無</strong>：ブックオフ宅配買取では箱・説明書なしの価格が別に掲載されており、PS5 Slim 通常版は57,000円が54,500円、Switch 有機ELモデルは12,001円が9,600円になります（{surveyDateJa}確認）。駿河屋も必須付属品の欠品を減額対象としています。</li>
            <li>・<strong>送料・返送料</strong>：4社とも宅配買取の送料を無料にする条件がありますが、キャンセル時の返送料の扱いは異なります（ゲオは査定後の返品の返送料も同社負担、ブックオフ「あんしん返送」の返却送料はお客様負担など）。詳しくは<Link href="/review/bookoff/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>ブックオフ</Link>・<Link href="/review/geo/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>ゲオ</Link>・<Link href="/review/surugaya/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>駿河屋</Link>・<Link href="/review/retrog/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>レトログ</Link>の各レビュー（2026年11月11日〜16日に公式情報を確認）をご覧ください。</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-2"><span className="section-heading-bar" />本体の最高値ランキング（{surveyDateJa}実測）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl shadow border border-gray-100 min-w-[640px]">
              <thead>
                <tr className="text-left" style={{ background: 'var(--color-deep-blue)', color: '#fff' }}>
                  <th className="p-3">順位</th>
                  <th className="p-3">本体</th>
                  <th className="p-3">最高値（店）</th>
                  <th className="p-3">各社の公表価格</th>
                </tr>
              </thead>
              <tbody>
                {ranked.map((r, i) => (
                  <tr key={r.title} className="border-t border-gray-100 align-top">
                    <td className="p-3 font-extrabold" style={{ color: i < 3 ? '#F59E0B' : 'var(--color-text-light)' }}>{i + 1}位</td>
                    <td className="p-3 font-bold">{r.title}</td>
                    <td className="p-3 whitespace-nowrap font-extrabold" style={{ color: 'var(--color-deep-blue)' }}>
                      {r.best.price.toLocaleString()}円<span className="block text-xs font-normal" style={{ color: 'var(--color-text-light)' }}>{storeNames(r.topStores)}</span>
                    </td>
                    <td className="p-3 text-xs" style={{ color: 'var(--color-text-light)' }}>
                      {(Object.entries(r.prices) as [StoreKey, number][]).map(([s, v]) => `${STORE_LABELS[s]} ${v.toLocaleString()}円`).join(' / ')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            ※{surveyDateJa}に、型番で照合した国内版の価格です。出典：ブックオフ宅配買取の買取価格検索（箱・説明書ありの「参考買取価格」）、ゲオ宅配買取の買取価格検索（「最高価格」）、駿河屋の公式買取検索、レトログの買取価格表（Switch・PS5、ページの更新表記は2026年9月14日）。各社の価格表に掲載のない機種は空欄にしています。ブックオフは買取価格検索に「ブックオフ店舗・宅配買取サービスともに、こちらの価格をお約束するものではありません」と記載しています。状態・時期により変動するため、売却の直前に各社公式ページにて最新情報をご確認ください。機種別の詳しい解説は、下記の各本体ページをご覧ください。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-4"><span className="section-heading-bar" />ゲーム機の買取店の選び方</h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>
            <div>
              <h3 className="font-extrabold mb-1" style={{ color: 'var(--color-deep-blue)' }}>1. 機種ごとに高い店が異なります</h3>
              <p>{surveyDateJa}の実測では、Switch 2とPS5（Slim 通常版はゲオと同額）は駿河屋、Switchの有機ELモデル・旧型・Liteはゲオが最高値でした。同じ店でも機種によって順位が入れ替わるため、「この店が常に高い」とは言えません。上の表で、お持ちの機種の最高値を確認されることをおすすめします。</p>
            </div>
            <div>
              <h3 className="font-extrabold mb-1" style={{ color: 'var(--color-deep-blue)' }}>2. 状態と付属品で金額が変わります</h3>
              <p>掲載価格は完品を前提とした金額で、付属品の欠品や傷・汚れがあると減額される場合があります。ブックオフ宅配買取では箱・説明書なしの価格が別に掲載されており、PS5 Slim 通常版で2,500円、Switch 有機ELモデルで2,401円の差がありました（{surveyDateJa}確認）。駿河屋は公式の減額基準リストで減額の対象を公開しています。</p>
            </div>
            <div>
              <h3 className="font-extrabold mb-1" style={{ color: 'var(--color-deep-blue)' }}>3. 宅配買取と店頭買取の違い</h3>
              <p>本ページの価格は、各社がオンラインで公表している宅配買取の価格です。レトログは宅配で完結するサービスで、店頭に持ち込む必要はありません。ブックオフの店舗向け「高価買取リスト」には「店舗により買取価格が異なる」と記載されているため、店頭で売る場合は、ご利用予定の店舗で価格をご確認ください。</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-4"><span className="section-heading-bar" />よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card p-4">
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>Q. {faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>A. {faq.a}</p>
              </div>
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

        <section className="mb-12">
          <h2 className="section-heading mb-4"><span className="section-heading-bar" />機種別の詳しい解説</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/hardware/switch2/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Nintendo Switch 2</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>値動きの大きい最新機の売り時</p>
            </Link>
            <Link href="/hardware/switch/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switch（有機EL・旧型・Lite）</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>世代交代期のモデル別相場</p>
            </Link>
            <Link href="/hardware/ps5/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS5（Slim・旧型）</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>型番別の買取相場</p>
            </Link>
            <Link href="/hardware/steam-deck/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Steam Deck</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>OLED/LCD別の売り時</p>
            </Link>
            <Link href="/software/high-value/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>高く売れるゲームソフトランキング</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ソフト版の最高値ランキング</p>
            </Link>
            <Link href="/price-index/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲーム買取価格インデックス</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>実測データにもとづく最高値の確認</p>
            </Link>
          </div>
        </section>

        <AuthorBox />
      </div>
    </>
  );
}
