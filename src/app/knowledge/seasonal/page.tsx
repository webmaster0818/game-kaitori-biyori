import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ゲーム買取の最適な時期カレンダー｜月別おすすめ売り時【2026年7月版】',
  description:
    'ゲーム買取の売り時を月別のカレンダーで解説します。ジャンル別（スポーツ/RPG等）の価格変動パターン、新作発売後の「2週間ルール」、年末年始・GW・夏休みのピーク時期についてもまとめています。',
  keywords: ['ゲーム買取 時期 いつがいい', 'ゲーム 売り時 カレンダー', 'ゲーム 買取 月別', 'ゲーム 売る時期'],
  openGraph: {
    images: ['/og.png'],
    title: 'ゲーム買取の最適な時期カレンダー｜月別おすすめ売り時【2026年7月版】',
    description: 'ゲーム買取の月別の売り時カレンダーで、売却に適したタイミングを解説します。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const monthlyCalendar = [
  { month: '1月', score: 4, label: 'おすすめ', event: 'お年玉需要', detail: 'お年玉でゲームを購入する子どもが多く、中古市場の需要が大きく高まります。年末に売却できなかった場合は、この時期の売却をおすすめします。' },
  { month: '2月', score: 2, label: '普通', event: '閑散期', detail: '年末年始の反動で需要が低下します。バレンタイン関連の需要は、ゲームにはほとんど影響しません。' },
  { month: '3月', score: 4, label: 'おすすめ', event: '春休み・引越し', detail: '春休みで需要が高まります。引越しシーズンで手放す人が増える一方、買い手も多い時期です。卒業祝いの需要もあります。' },
  { month: '4月', score: 2, label: '普通', event: '新学期', detail: '新生活の時期のため、需要はやや低下します。GW前には購入需要が徐々に上昇し始めます。' },
  { month: '5月', score: 3, label: 'やや良い', event: 'GW', detail: 'ゴールデンウィーク中は在宅でのゲーム需要が高まります。GW前半の売却をおすすめします。' },
  { month: '6月', score: 2, label: '普通', event: '梅雨・夏商戦前', detail: '需要は落ち着く時期ですが、2026年は5月末の任天堂値上げで中古需要が増し、例年より相場が堅い状況です。夏休み需要に先立って、6月下旬に売却する方法も有効です。' },
  { month: '7月', score: 5, label: '最高', event: '夏休み・ボーナス', detail: '夏休みの開始とボーナス時期が重なり、年間でも上位の需要がある時期です。7月上旬〜中旬の売却をおすすめします。' },
  { month: '8月', score: 4, label: 'おすすめ', event: '夏休み・お盆', detail: '夏休みが続くため、需要は高い水準にあります。お盆期間中は特にゲーム需要が集中します。' },
  { month: '9月', score: 2, label: '普通', event: '新学期', detail: '夏休み明けで一時的に需要が低下します。秋の新作ラッシュに備えた買い替え需要が下支えします。' },
  { month: '10月', score: 4, label: 'おすすめ', event: '年末商戦準備', detail: '年末商戦を見据えて買取価格が上昇し始めます。新作ラッシュ前の売却をおすすめします。' },
  { month: '11月', score: 5, label: '最高', event: 'ブラックフライデー', detail: 'クリスマスプレゼントの需要により、年間で最も高値がつきやすい時期です。11月中旬までの売却で、最も高値がつきやすくなります。' },
  { month: '12月', score: 4, label: 'おすすめ', event: 'クリスマス', detail: 'クリスマス前は需要が高まります。ただし、25日を過ぎると急落するため、中旬までの売却をおすすめします。' },
];

const genreSeasonality = [
  { genre: 'スポーツゲーム', best: '8〜9月（新シーズン前）', worst: '新シーズン版発売直後', detail: 'FIFAやNBA2Kは毎年新作が発売されるため、新作の発売と同時に旧作の価格が大きく下落します。新作発売の2週間前が売り時です。' },
  { genre: 'RPG（ドラクエ・FF等）', best: '発売後2週間以内', worst: '発売3ヶ月以降', detail: 'クリアまでに時間がかかるため、早期に売却できれば高値がつきます。廉価版の発表で急落することもあります。' },
  { genre: 'アクション・格闘', best: '発売直後〜1ヶ月', worst: '次回作発表後', detail: 'オンライン対戦には盛り上がる時期があります。プレイヤー人口が多い時期（大会前後）は需要が高まります。' },
  { genre: 'パーティーゲーム', best: '年末年始・GW前', worst: '1月下旬〜2月', detail: '家族や友人と遊ぶ需要が、季節のイベントと連動します。マリオパーティ等は年末前に最も高値がつきます。' },
  { genre: '音楽・リズムゲーム', best: '安定（季節変動小）', worst: '大型アップデート後', detail: '継続してプレイされることが多く、季節変動は小さめです。ただし、無料アップデートで大型コンテンツが追加された後は下がります。' },
  { genre: 'レトロゲーム', best: '年末・GW前', worst: '特になし（安定）', detail: 'コレクター需要が中心のため、季節変動は小さめです。ただし、プレミア品は年末の需要増で上がることもあります。' },
];

const twoWeekRule = [
  { period: '発売日〜3日', priceRetention: '90〜95%', action: '非常に高値。発売日前後に入手したい層の需要あり', recommended: true },
  { period: '4日〜1週間', priceRetention: '80〜90%', action: '最も高値の時期。クリア前でも売り時', recommended: true },
  { period: '1〜2週間', priceRetention: '70〜80%', action: '高値を維持。短時間でクリアできるゲームはこの期間が目安', recommended: true },
  { period: '2週間〜1ヶ月', priceRetention: '50〜70%', action: '中古の流通が増え始め、下落が加速', recommended: false },
  { period: '1〜3ヶ月', priceRetention: '30〜50%', action: 'セール・廉価版の影響で大幅に下落', recommended: false },
  { period: '3ヶ月以降', priceRetention: '10〜30%', action: '定番作品以外は底値圏', recommended: false },
];

const faqs = [
  { q: 'ゲームを売るのに最も適した時期はいつですか？', a: '年間で最も高値がつくのは11月（ブラックフライデー・クリスマス需要）と7月（夏休み・ボーナス時期）です。この2つの時期は買取価格が通常時より10〜20%高くなる傾向があります。逆に6月と2月は需要が低く、買取価格も低めです。' },
  { q: '新作ゲームは発売後何日以内に売るべきですか？', a: '理想は発売後2週間以内です。この期間は定価の70〜90%の買取価格がつきます。2週間を過ぎると中古の流通量が増え、価格が急落し始めます。特にクリアまでが短いゲームは1週間以内の売却を推奨します。' },
  { q: 'スポーツゲームの売り時はいつですか？', a: 'スポーツゲーム（FIFA、NBA2K、パワプロ等）は毎年新作が発売されるため、新作の発売日前に売ることが基本です。新作発売と同時に旧作の買取価格が50〜70%下落します。新作発売の2〜4週間前の売却をおすすめします。' },
  { q: 'ゴールデンウィーク前に売るのは良い判断ですか？', a: 'はい、特にパーティーゲームやファミリー向けタイトルは、GW前に需要が高まります。GWに家族や友人と遊ぶために中古ゲームを購入する人が増えるため、4月下旬〜5月上旬は比較的高値がつきやすい時期です。' },
  { q: '年末年始に売る場合、12月と1月のどちらが適していますか？', a: 'クリスマスプレゼント需要がある12月中旬までが最も高値です。12月25日を過ぎると需要が急落します。1月はお年玉需要で再び上昇しますが、12月中旬ほどの高値にはなりにくいため、可能であれば12月中旬までの売却をおすすめします。' },
  { q: 'レトロゲームも季節で買取価格が変わりますか？', a: 'レトロゲームはコレクター需要が中心のため、現行ゲームほど季節変動はありません。ただし年末やGW前にはコレクターの購買意欲が高まる傾向があり、プレミア品は通常時より5〜15%高値がつくこともあります。急いで売る必要がない場合は、この時期を選ぶ方法もあります。' },
];

export default function SeasonalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲーム買取の最適な時期カレンダー｜月別おすすめ売り時【2026年7月版】", "datePublished": "2026-03-15", "dateModified": "2026-06-12", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '買取時期カレンダー' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲーム買取の最適な時期カレンダー
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲームを売るのに適した時期について、月別の需要カレンダー、ジャンル別の価格変動パターン、新作発売後の「2週間ルール」を用いて解説します。年末年始・GW・夏休みのピーク時期を把握し、高値での売却にお役立てください。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 月別カレンダー */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />月別 売り時カレンダー</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>月</th>
                  <th>おすすめ度</th>
                  <th>主なイベント</th>
                  <th>ポイント</th>
                </tr>
              </thead>
              <tbody>
                {monthlyCalendar.map((row) => (
                  <tr key={row.month}>
                    <td className="font-bold">{row.month}</td>
                    <td className="font-bold" style={{ color: row.score >= 4 ? 'var(--color-electric-green)' : row.score >= 3 ? '#FBBF24' : 'var(--color-text-light)' }}>
                      {'★'.repeat(row.score)}{'☆'.repeat(5 - row.score)}<br />
                      <span className="text-xs">{row.label}</span>
                    </td>
                    <td className="text-sm font-bold">{row.event}</td>
                    <td className="text-sm">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ジャンル別変動 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />2026年の売り時を左右する具体的なイベント（実測データあり）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>一般的なカレンダーに加え、2026年は相場を動かす確定イベントが複数あります。公式発表・報道と当サイトの定期実測で確認済みの事実のみ掲載しています（2026年7月5日更新）。</p>
          <div className="space-y-4">
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>5月25日: 任天堂が全Switchモデルを値上げ → 旧型の買取相場が実際に上昇</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>Switch 2が49,980円→59,980円、有機ELが37,980円→47,980円、通常モデルが32,978円→43,980円、Liteが21,978円→29,980円に値上げされました（任天堂公式発表）。新品が高くなった結果、買取業者の調査では2019年型Switchの買取相場が4月の約3,000〜12,000円から5月には約5,000〜19,000円へ上昇した実例が報告されています。「新型が出ると旧型は下がる」という一般論とは逆の動きであり、<strong>旧型Switchは現在、近年でも有利な売り時</strong>といえます。</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>7月: ポケモン旧作（SV）の下落が実測で開始 — 新作サイクルの初動</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>当サイトの定期実測（6/25→7/2）で、ポケモンスカーレット駿河屋2,000円→1,800円、バイオレット ブックオフ1,500円→1,200円・駿河屋2,000円→1,400円の下落を確認しました。Switch 2版新作「Pokémon LEGENDS Z-A」のSwitch 2セット品がすでに買取市場に流通しており（駿河屋で41,000〜43,000円・7/4実測）、<strong>新作の登場に先立って旧作から価格が下がる</strong>典型的なパターンが始まっています。実測の結果から、ポケモン旧作の売却は先送りしないことをおすすめします。</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>7月〜: 本体の買取価格の定期実測を開始（Switch→Switch 2の世代交代の追跡）</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>Switch 2本体はブックオフ4.0万・ゲオ4.0万・駿河屋4.1万でほぼ同水準、旧型Switchはゲオ2.0万・駿河屋1.8万で底堅い水準です（2026年7月4日実測）。世代交代期の本体相場は、Switch 2の供給が安定し旧型が下落に転じる時期が焦点であり、当サイトの<Link href="/price-index/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>価格インデックス</Link>で継続的に追跡します。旧型の売り時を示す動きが確認された場合は、このページでもお知らせします。</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>11月19日: GTA6発売（PS5/Xbox Series X|S）</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>年末商戦で最大級のタイトルです。PS5本体・周辺機器の需要が高まる一方、遊ばなくなった他のPS5ソフトを売却して購入資金にする動きも予想されます。PS5関連の売却は、需要が高まる10月〜11月中旬をおすすめします。</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>その他の確定イベント</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・7月1日: Nintendo Switch Online料金改定（任天堂公式発表）</li>
                <li>・9月1日: Switch 2の海外価格値上げ（米国449.99→499.99ドル）</li>
                <li>・2月に大作の発売が集中（ドラクエVII Reimagined、仁王3、バイオハザード レクイエム等）→ 続編・関連旧作は発売前が売り時</li>
              </ul>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：任天堂公式リリース（2026年5月8日）、AUTOMATON（GTA6発売日報道）、当サイト定期実測（ソフト2026年7月2日・本体2026年7月4日）</p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ジャンル別 価格変動パターン</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>ジャンル</th>
                  <th>売り時</th>
                  <th>避けるべき時期</th>
                  <th>詳細</th>
                </tr>
              </thead>
              <tbody>
                {genreSeasonality.map((row) => (
                  <tr key={row.genre}>
                    <td className="font-bold">{row.genre}</td>
                    <td className="text-sm font-bold" style={{ color: 'var(--color-electric-green)' }}>{row.best}</td>
                    <td className="text-sm" style={{ color: '#EF4444' }}>{row.worst}</td>
                    <td className="text-sm">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 2週間ルール */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />新作の「2週間ルール」</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            新作ゲームの買取価格は、発売後2週間を境に急落する傾向があります。この時期を逃さないことが、高値で売却するためのポイントです。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>経過期間</th>
                  <th>価格維持率</th>
                  <th>状況</th>
                </tr>
              </thead>
              <tbody>
                {twoWeekRule.map((row) => (
                  <tr key={row.period}>
                    <td className="font-bold">{row.period}</td>
                    <td className="font-bold" style={{ color: row.recommended ? 'var(--color-electric-green)' : '#EF4444' }}>{row.priceRetention}</td>
                    <td className="text-sm">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ピーク時期 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />年間3大ピーク時期</h2>
          <div className="glass-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>年末商戦（11〜12月）</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                  年間で最も大きなピークです。クリスマスプレゼントの需要で、買取価格が10〜20%上昇します。11月中旬が最も高値になりやすく、12月25日以降は急落するためご注意ください。
                </p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>夏休みシーズン（7〜8月）</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                  夏休みとボーナス時期が重なり、需要が高まります。7月上旬〜中旬の売却をおすすめします。お盆期間も需要が高く、ファミリー向けタイトルは特に高値がつきやすくなります。
                </p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>春休み・GW（3〜5月）</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                  春休みの引越し需要とGWの在宅需要が重なる時期です。3月の卒業・進学シーズンとGW前が売り時で、パーティーゲームの需要が特に高まります。
                </p>
              </div>
            </div>
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
            <span style={{ color: 'var(--color-electric-green)' }}>現在</span>の買取価格の確認
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            時期を逃すと価格が下がることがあります。まずは無料の一括査定のご利用をおすすめします。
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
            <Link href="/knowledge/timing/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>売り時ガイド（総合）</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>タイミング全般の解説</p>
            </Link>
            <Link href="/knowledge/price-guide/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取相場ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ハード・ソフト別の相場一覧</p>
            </Link>
            <Link href="/method/high-price/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>高価買取のポイント</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>高く売るためのガイド</p>
            </Link>
          </div>
        </section>

        <p className="text-xs mt-8 text-center" style={{ color: 'var(--color-text-light)' }}>最終更新: 2026年5月</p>
        <AuthorBox />
      </div>
    </>
  );
}
