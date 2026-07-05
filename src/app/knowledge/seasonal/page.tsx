import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ゲーム買取の最適な時期カレンダー｜月別おすすめ売り時【2026年7月版】',
  description:
    'ゲーム買取の月別売り時カレンダー。ジャンル別（スポーツ/RPG）の価格変動パターン、新作発売2週間ルール、年末年始・GW・夏休みのピーク時期を視覚的に解説。',
  keywords: ['ゲーム買取 時期 いつがいい', 'ゲーム 売り時 カレンダー', 'ゲーム 買取 月別', 'ゲーム 売る時期'],
  openGraph: {
    title: 'ゲーム買取の最適な時期カレンダー｜月別おすすめ売り時【2026年7月版】',
    description: 'ゲーム買取の月別売り時カレンダーで最適な売却タイミングを解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const monthlyCalendar = [
  { month: '1月', score: 4, label: 'おすすめ', event: 'お年玉需要', detail: 'お年玉でゲームを買う子供が多く、中古市場の需要が急上昇。年末に売り損ねた人はこの時期に。' },
  { month: '2月', score: 2, label: '普通', event: '閑散期', detail: '年末年始の反動で需要が低下。バレンタイン関連の需要はゲームにはほぼ影響なし。' },
  { month: '3月', score: 4, label: 'おすすめ', event: '春休み・引越し', detail: '春休みで需要UP。引越しシーズンで手放す人が増えるが、同時に買い手も多い。卒業祝い需要も。' },
  { month: '4月', score: 2, label: '普通', event: '新学期', detail: '新生活で落ち着かず需要やや低下。GW前に購入需要がじわじわ上昇し始める。' },
  { month: '5月', score: 3, label: 'やや良い', event: 'GW', detail: 'ゴールデンウィーク中は在宅ゲーム需要が高まる。GW前半に売るのがベスト。' },
  { month: '6月', score: 2, label: '普通', event: '梅雨・夏商戦前', detail: '需要は落ち着く時期ですが、2026年は5月末の任天堂値上げで中古需要が増し、例年より相場が堅い状況です。夏休み需要の先回りで6月下旬の売却も有効。' },
  { month: '7月', score: 5, label: '最高', event: '夏休み・ボーナス', detail: '夏休み突入とボーナス時期が重なり、年間トップクラスの需要。7月上旬〜中旬が狙い目。' },
  { month: '8月', score: 4, label: 'おすすめ', event: '夏休み・お盆', detail: '夏休み継続で需要は高水準。お盆期間中は特にゲーム需要が集中する。' },
  { month: '9月', score: 2, label: '普通', event: '新学期', detail: '夏休み明けで一時的に需要低下。秋の新作ラッシュに備える買い替え需要が底を支える。' },
  { month: '10月', score: 4, label: 'おすすめ', event: '年末商戦準備', detail: '年末商戦を見据えて買取価格が上昇開始。新作ラッシュ前の売却がおすすめ。' },
  { month: '11月', score: 5, label: '最高', event: 'ブラックフライデー', detail: 'クリスマスプレゼント需要で年間最高値。11月中旬までに売却すると最も高値がつきやすい。' },
  { month: '12月', score: 4, label: 'おすすめ', event: 'クリスマス', detail: 'クリスマス前は高需要。ただし25日を過ぎると急落するため、中旬までの売却を推奨。' },
];

const genreSeasonality = [
  { genre: 'スポーツゲーム', best: '8〜9月（新シーズン前）', worst: '新シーズン版発売直後', detail: 'FIFAやNBA2Kは毎年新作が出るため、新作発売と同時に旧作が暴落。新作発売2週間前が売り時。' },
  { genre: 'RPG（ドラクエ・FF等）', best: '発売後2週間以内', worst: '発売3ヶ月以降', detail: 'クリアまでの時間が長いため、早期売却できれば高値。廉価版発表で急落することも。' },
  { genre: 'アクション・格闘', best: '発売直後〜1ヶ月', worst: '次回作発表後', detail: 'オンライン対戦の旬がある。プレイヤー人口が多い時期（大会前後）は需要が高い。' },
  { genre: 'パーティーゲーム', best: '年末年始・GW前', worst: '1月下旬〜2月', detail: '家族や友人と遊ぶ需要が季節イベントに直結。マリオパーティ等は年末前が最高値。' },
  { genre: '音楽・リズムゲーム', best: '安定（季節変動小）', worst: '大幅なアプデ後', detail: '継続プレイが多く季節変動が少ない。ただし無料アプデで大型コンテンツ追加後は下がる。' },
  { genre: 'レトロゲーム', best: '年末・GW前', worst: '特になし（安定）', detail: 'コレクター需要のため季節変動が小さい。ただしプレミア品は年末の需要増で上がることも。' },
];

const twoWeekRule = [
  { period: '発売日〜3日', priceRetention: '90〜95%', action: '超高値。フラゲ組に需要あり。', recommended: true },
  { period: '4日〜1週間', priceRetention: '80〜90%', action: '最高値ゾーン。クリア前でも売り時。', recommended: true },
  { period: '1〜2週間', priceRetention: '70〜80%', action: 'まだ高値。短いゲームはここがリミット。', recommended: true },
  { period: '2週間〜1ヶ月', priceRetention: '50〜70%', action: '中古流通が増え始め下落加速。', recommended: false },
  { period: '1〜3ヶ月', priceRetention: '30〜50%', action: 'セール・廉価版の影響で大幅下落。', recommended: false },
  { period: '3ヶ月以降', priceRetention: '10〜30%', action: '定番作品以外は底値圏。', recommended: false },
];

const faqs = [
  { q: 'ゲームを売るのに一番いい時期はいつですか？', a: '年間で最も高値がつくのは11月（ブラックフライデー・クリスマス需要）と7月（夏休み・ボーナス時期）です。この2つの時期は買取価格が通常時より10〜20%高くなる傾向があります。逆に6月と2月は需要が低く、買取価格も低めです。' },
  { q: '新作ゲームは発売後何日以内に売るべきですか？', a: '理想は発売後2週間以内です。この期間は定価の70〜90%の買取価格がつきます。2週間を過ぎると中古の流通量が増え、価格が急落し始めます。特にクリアまでが短いゲームは1週間以内の売却を推奨します。' },
  { q: 'スポーツゲームの売り時はいつですか？', a: 'スポーツゲーム（FIFA、NBA2K、パワプロ等）は毎年新作が発売されるため、新作の発売日前に売るのが鉄則です。新作発売と同時に旧作の買取価格が50〜70%下落します。新作発売の2〜4週間前に売却するのがベストタイミングです。' },
  { q: 'ゴールデンウィーク前に売るのは良い判断ですか？', a: 'はい、特にパーティーゲームやファミリー向けタイトルは GW前に需要が高まります。GWに家族や友人と遊ぶために中古ゲームを購入する人が増えるため、4月下旬〜5月上旬は比較的高値がつきやすい時期です。' },
  { q: '年末年始に売る場合、12月と1月どちらがいいですか？', a: 'クリスマスプレゼント需要がある12月中旬までが最も高値です。12月25日を過ぎると需要が急落します。1月はお年玉需要で再び上昇しますが、12月中旬ほどの高値にはなりにくいため、可能であれば12月中旬までの売却をおすすめします。' },
  { q: 'レトロゲームも季節で買取価格が変わりますか？', a: 'レトロゲームはコレクター需要が中心のため、現行ゲームほど季節変動はありません。ただし年末やGW前にはコレクターの購買意欲が高まる傾向があり、プレミア品は通常時より5〜15%高値がつくこともあります。急いで売る必要がなければ、この時期を狙うのも手です。' },
];

export default function SeasonalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲーム買取の最適な時期カレンダー｜月別おすすめ売り時【2026年7月版】", "datePublished": "2026-03-15", "dateModified": "2026-06-12", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '買取時期カレンダー' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲーム買取の最適な時期カレンダー
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            「ゲームを売るならいつがベスト？」月別の需要カレンダー、ジャンル別の価格変動パターン、新作発売の「2週間ルール」まで、ゲーム買取の最適な売り時を視覚的に解説します。年末年始・GW・夏休みのピーク時期を逃さず、最高値で売却しましょう。
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />2026年の売り時を左右する具体イベント（実データ付き）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>一般的なカレンダーに加え、2026年は相場を動かす確定イベントが複数あります。公式発表・報道と当サイトの週次実測で確認済みの事実のみ掲載しています（2026年7月5日更新）。</p>
          <div className="space-y-4">
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>5月25日: 任天堂が全Switchモデルを値上げ → 旧型の買取相場が実際に上昇</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>Switch2が49,980円→59,980円、有機ELが37,980円→47,980円、通常モデルが32,978円→43,980円、Liteが21,978円→29,980円に値上げ（任天堂公式発表）。新品が高くなった結果、買取業者の調査では2019年型Switchの買取相場が4月の約3,000〜12,000円から5月には約5,000〜19,000円へ上昇した実例が報告されています。「新型が出ると旧型は下がる」という一般論と逆の動きで、<strong>旧型Switchはいまが近年で有利な売り時</strong>です。</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>7月: ポケモン旧作（SV）の下落が実測で開始 — 新作サイクルの初動</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>当サイトの週次実測（6/25→7/2）で、ポケモンスカーレット駿河屋2,000円→1,800円、バイオレット ブックオフ1,500円→1,200円・駿河屋2,000円→1,400円の下落を観測。Switch2版新作「Pokémon LEGENDS Z-A」のSwitch2セット品が既に買取市場に流通しており（駿河屋で41,000〜43,000円・7/4実測）、<strong>新作の足音とともに旧作から先に下がる</strong>典型パターンが始まっています。ポケモン旧作の売却は先送りしないのが実測の答えです。</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>7月〜: 本体の買取価格も週次実測を開始（Switch→Switch2世代交代ウォッチ）</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>Switch2本体はブックオフ4.0万・ゲオ4.0万・駿河屋4.1万の横並び、旧型Switchはゲオ2.0万・駿河屋1.8万で底堅い水準（2026年7月4日実測）。世代交代期の本体相場は「Switch2の供給安定＝旧型下落」の転換点がいつ来るかが焦点で、当サイトの<Link href="/price-index/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>価格インデックス</Link>で毎週追跡します。旧型の売り時シグナルが出たらこのページでも更新します。</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>11月19日: GTA6発売（PS5/Xbox Series X|S）</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>年末商戦の最大級タイトル。PS5本体・周辺の需要が高まる一方、遊ばなくなった他のPS5ソフトを処分して購入資金にする動きも出ます。PS5関連を売るなら需要が立ち上がる10月〜11月中旬が狙い目です。</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>その他の確定イベント</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・7月1日: Nintendo Switch Online料金改定（任天堂公式発表）</li>
                <li>・9月1日: Switch2の海外価格値上げ（米国449.99→499.99ドル）</li>
                <li>・2月に大作ラッシュ実績（ドラクエVII Reimagined、仁王3、バイオハザード レクイエム等）→ 続編・関連旧作は発売前が売り時</li>
              </ul>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：任天堂公式リリース（2026年5月8日）、AUTOMATON（GTA6発売日報道）、当サイト週次実測（ソフト2026年7月2日・本体2026年7月4日）</p>
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
            新作ゲームの買取価格は発売後2週間を境に急落します。このタイミングを逃さないことが高値売却の鍵です。
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
                  年間最高のピーク。クリスマスプレゼント需要で買取価格が10〜20%上昇。11月中旬が最も高値。12月25日以降は急落するため注意。
                </p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>夏休みシーズン（7〜8月）</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                  夏休み＋ボーナス時期の相乗効果。7月上旬〜中旬がベスト。お盆期間も高需要で、ファミリー向けタイトルが特に高値に。
                </p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>春休み・GW（3〜5月）</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                  春休みの引越し需要＋GWの在宅需要。3月の卒業・進学シーズンとGW前が売り時。パーティーゲームの需要が特に高まる。
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
            売り時は<span style={{ color: 'var(--color-electric-green)' }}>今</span>かもしれません
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            時期を逃すと価格が下がります。まずは無料で一括査定してみましょう。
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
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>高価買取のコツ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>高く売るための完全ガイド</p>
            </Link>
          </div>
        </section>

        <p className="text-xs mt-8 text-center" style={{ color: 'var(--color-text-light)' }}>最終更新: 2026年5月</p>
        <AuthorBox />
      </div>
    </>
  );
}
