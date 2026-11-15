import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = 'Switchの寿命は？バッテリーは約800回の充電で80%、交換費用と売却の目安【2026年11月15日確認】';
const DESCRIPTION =
  'Nintendo Switchの寿命を任天堂の公式情報で確認しました。本体のバッテリーは約800回の充電で新品時の約80%、Joy-Conは約500回で約80%になります。バッテリー交換の修理代（11月16日から7,150円）、モデル別の持続時間、修理受付の状況、売却の目安を掲載しています。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['Switch 寿命', 'Switch バッテリー 寿命', 'Switch 何年使える', 'Joy-Con 寿命', 'Switch バッテリー交換'],
  alternates: { canonical: 'https://gamekaitori-biyori.com/knowledge/switch-lifespan/' },
  openGraph: {
    images: ['/og.png'],
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const CHECK_DATE = '2026年11月15日';
const linkStyle = { color: 'var(--color-electric-green)', fontWeight: 700 } as const;
const ext = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>{label}</a>
);

// 任天堂公式：充電回数と容量の目安（a_id/34219）
const cycles = [
  { item: '本体（Switch・有機ELモデル・Switch Lite）', cycles: 800, capacity: '約80%' },
  { item: 'Joy-Con', cycles: 500, capacity: '約80%' },
  { item: 'Proコントローラー', cycles: 500, capacity: '約70%' },
];

// 任天堂公式：バッテリー持続時間の目安（a_id/34211）・電池容量（a_id/34142）
const durations = [
  { model: 'Switch（旧モデル・2019年8月30日以前に発売）', hours: '約2.5〜6.5時間', zelda: '約3時間', mah: '—' },
  { model: 'Switch（現行モデル HAC-001(-01)）', hours: '約4.5〜9.0時間', zelda: '約5.5時間', mah: '4,310mAh' },
  { model: 'Switch（有機ELモデル HEG-001）', hours: '約4.5〜9.0時間', zelda: '—', mah: '4,310mAh' },
  { model: 'Switch Lite（HDH-001）', hours: '約3.0〜7.0時間', zelda: '約4時間', mah: '3,570mAh' },
  { model: 'Switch 2（参考）', hours: '約2〜6.5時間', zelda: '—', mah: '5,220mAh' },
];

// バッテリー交換などの修理参考価格（任天堂・税込）
const batteryFees = [
  { item: 'Switch・有機ELモデル・Switch Lite のバッテリー（「上記以外の部品」）', before: '6,050円', after: '7,150円' },
  { item: 'Joy-Con（1本・スティック・ボタンの不具合やバッテリー）', before: '2,860円', after: '改定の記載なし（2,860円）' },
  { item: 'Switch 2 のバッテリー交換', before: '9,900円', after: '11,000円' },
];

const faqs = [
  { q: 'Switchは何年くらい使えますか？', a: '任天堂は本体の使用年数としての寿命を公表していません。公表されているのはバッテリーの目安で、本体は約800回の充電で新品時の約80%、Joy-Conは約500回で約80%になります。当サイトの試算では、1日1回充電する場合、本体は約2年2か月、Joy-Conは約1年4か月でこの水準に達します。バッテリーは修理で交換できます。' },
  { q: 'Switchのバッテリーの寿命はどう判断しますか？', a: '任天堂のQ&Aでは「充電できなくなったり、充電しても使用できる時間が短くなったりした場合は、バッテリーの寿命です」とし、新しいバッテリーへの交換が必要と案内しています。' },
  { q: 'Switchのバッテリー交換はいくらですか？', a: '任天堂の修理参考価格（税込）では、Switch・有機ELモデル・Switch Liteのバッテリーは「上記以外の部品」として6,050円です（2026年11月15日到着分まで）。2026年11月16日到着分からは7,150円に改定されます。オンライン修理受付で申し込むと修理代金が5％割引になります。' },
  { q: '長い間使わないSwitchはどう保管すればよいですか？', a: '任天堂は「バッテリーを内蔵した機器は、半年に一度は充電してください」「長期間使用しないと充電できなくなることがあります」と案内しています。しまっておく場合も、半年に一度は充電することをおすすめします。' },
  { q: 'Joy-Conのスティックが勝手に動くのは寿命ですか？', a: '任天堂のQ&Aでは、スティックに触れていないのにキャラクターや画面が動く場合、本体の更新、シンクロボタンを押す、スティックの補正、コントローラーの再登録、無線環境の見直しを順に試し、改善しない場合はコントローラーを任天堂サービスセンターに送るよう案内しています。Joy-Conの修理は1本2,860円で、本体の送付は不要です。' },
  { q: 'Switchの修理受付はいつまで続きますか？', a: '2026年11月15日時点で、Switchファミリーは任天堂の修理対象に含まれ、受付終了の一覧にも掲載されていません。任天堂の修理サービス規程では、修理用部品の保有期間は原則として製品製造終了後6年間とされています。終了予定の告知は当サイトでは確認できていませんが、任天堂のお知らせ一覧の一部は取得できなかったため、最新情報は任天堂サポートでご確認ください。' },
];

export default function SwitchLifespanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Switchの寿命は？バッテリーは約800回の充電で80%、交換費用と売却の目安', datePublished: '2026-11-15', dateModified: '2026-11-15', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: 'Switchの寿命' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            Switchの寿命<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>バッテリーの劣化の目安・交換費用・修理受付の状況と売却の目安【{CHECK_DATE}確認】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            任天堂は本体の使用年数としての寿命を公表していませんが、バッテリーについては「約800回繰り返して充電した場合、新品購入時の約80%」と案内しています。バッテリーは修理で交換でき、Switch・有機ELモデル・Liteの修理参考価格は2026年11月16日到着分から7,150円です。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：{CHECK_DATE}（任天堂の公式ページで確認）</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：寿命の目安はバッテリーで、本体は約800回、Joy-Conは約500回の充電で容量が約80%になります</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>1日1回充電した場合の試算：</span>本体は約2年2か月、Joy-Conは約1年4か月で新品時の約80%に達します（当サイトの計算）。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>バッテリーは交換できる：</span>本体のバッテリー交換は6,050円、2026年11月16日到着分から7,150円です（任天堂の修理参考価格）。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>修理受付は継続中：</span>Switchファミリーは2026年11月15日時点で修理対象です。部品の保有期間は原則として製造終了後6年間です。</li>
          </ul>
        </section>

        <section className="mb-12" id="battery">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />バッテリーの劣化の目安（任天堂公式）と当サイトの試算</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            任天堂のQ&Aには「内蔵バッテリーは特性上、充放電を繰り返すと、満充電時に使用できる時間が少しずつ短くなります」と記載されています。公式の充電回数をもとに、1日あたりの充電回数ごとに容量が目安の水準に達するまでの期間を試算しました。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>対象</th><th>公式の目安</th><th>1日1回充電の場合<br /><span className="text-xs font-normal">当サイト試算</span></th><th>2日に1回充電の場合<br /><span className="text-xs font-normal">当サイト試算</span></th></tr></thead>
              <tbody>
                {cycles.map((c) => {
                  const m1 = Math.round((c.cycles / 365) * 12);
                  const m2 = Math.round(((c.cycles * 2) / 365) * 12);
                  const fmt = (m: number) => `約${Math.floor(m / 12)}年${m % 12 ? `${m % 12}か月` : ''}`;
                  return (
                    <tr key={c.item}>
                      <td className="font-bold text-sm">{c.item}</td>
                      <td className="text-sm">約{c.cycles}回の充電で新品時の{c.capacity}</td>
                      <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{fmt(m1)}</td>
                      <td className="text-sm">{fmt(m2)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            試算は「公式の充電回数 ÷ 1年あたりの充電回数」で計算した目安です。実際の劣化は使い方・温度などで変わり、目安の回数を超えてもすぐに使えなくなるわけではありません。出典：{ext('https://support-jp.nintendo.com/app/answers/detail/a_id/34219/', '任天堂サポート「バッテリーの寿命について」')}（{CHECK_DATE}確認）。
          </p>
        </section>

        <section className="mb-12" id="duration">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />モデル別のバッテリー持続時間（新品時の目安）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            同じSwitchでも、2019年8月30日以前に発売された旧モデルと現行モデルでは持続時間が異なります。劣化を判断するときは、お手持ちのモデルの新品時の目安と比べてください。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>モデル</th><th>持続時間の目安</th><th>ゼルダの伝説 ブレス オブ ザ ワイルドの場合</th><th>電池容量</th></tr></thead>
              <tbody>
                {durations.map((d) => (
                  <tr key={d.model}>
                    <td className="font-bold text-sm">{d.model}</td>
                    <td className="text-sm">{d.hours}</td>
                    <td className="text-sm">{d.zelda}</td>
                    <td className="text-sm">{d.mah}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            「—」は公式ページで値を確認できなかった項目です。任天堂は「目安の時間です。使用状況によって短くなることがあります。」と記載しています。出典：{ext('https://support-jp.nintendo.com/app/answers/detail/a_id/34211/', '任天堂サポート バッテリー持続時間')}、{ext('https://support-jp.nintendo.com/app/answers/detail/a_id/34142', '定格の一覧')}、{ext('https://www.nintendo.com/jp/hardware/switch/modal/specs/body.html', 'Nintendo Switch 本体仕様')}（いずれも{CHECK_DATE}確認）。
          </p>
        </section>

        <section className="mb-12" id="fee">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />バッテリー交換の修理代（任天堂の修理参考価格）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>修理の内容</th><th>11月15日到着分まで</th><th>11月16日到着分から</th></tr></thead>
              <tbody>
                {batteryFees.map((f) => (
                  <tr key={f.item}>
                    <td className="font-bold text-sm">{f.item}</td>
                    <td className="text-sm">{f.before}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{f.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
            当サイトが2026年10月15日に実測した動作品の買取価格（ゲオ）は、Switch Liteが15,000円、Switch（現行パッケージ）が17,000円、有機ELモデルが25,000円でした。11月16日以降のバッテリー交換費用7,150円は、それぞれの買取価格の48%・42%・29%にあたります。CPU基板の故障など、ほかの修理との比較は<Link href="/knowledge/repair/" style={linkStyle}>ゲーム機の修理料金</Link>にまとめています。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：{ext('https://support.nintendo.com/jp/repair/price_switch.html', '任天堂 Nintendo Switch 修理参考価格')}、{ext('https://support.nintendo.com/jp/repair/price_switch2.html', 'Nintendo Switch 2 修理参考価格')}（いずれも{CHECK_DATE}確認）。買取価格は当サイトの定期実測（<Link href="/price-index/" style={linkStyle}>価格インデックス</Link>）。
          </p>
        </section>

        <section className="mb-12" id="care">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />長く使うために任天堂が案内していること</h2>
          <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>半年に一度は充電する：</span>「ゲーム機に内蔵されているバッテリーは、あまり長い間、充電も使用もしていない状態が続くと、充電できなくなることがあります」として、半年に一度の充電を案内しています。任天堂は、修理品の主な故障例の1つに「本体やJoy-Conの充電池の劣化」を挙げています。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>スティックの不具合は手順を試してから：</span>スティックに触れていないのに画面が動く場合は、本体の更新・シンクロボタン・スティックの補正・コントローラーの再登録・無線環境の見直しを試し、改善しなければ修理に出すよう案内しています。Joy-Conの修理は1本2,860円です。Switch Liteはコントローラー一体型のため、本体ごと修理に出します。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>保証期間を確認する：</span>Switch本体・Joy-Conの保証期間は購入日から1年間です。正常な使用のもとで起きた故障は、保証期間内であれば無償で修理すると案内されています。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：{ext('https://support.nintendo.com/jp/switch/notice/index.html', '任天堂 Nintendo Switch ご使用上の注意')}、{ext('https://support-jp.nintendo.com/app/answers/detail/a_id/33812', 'スティックが勝手に動く場合')}、{ext('https://support-jp.nintendo.com/app/answers/detail/a_id/36699/', '保証期間')}、{ext('https://support-jp.nintendo.com/app/answers/detail/a_id/32324/', '保証期間内の修理')}（いずれも{CHECK_DATE}確認）。
          </p>
        </section>

        <section className="mb-12" id="sell">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />売却を考えるときの目安</h2>
          <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>バッテリーだけが弱っている場合：</span>交換費用（7,150円）は動作品の買取価格の3〜5割です。使い続ける予定があれば交換、遊ばなくなった場合は動くうちに売却するのが目安です。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>電源が入らないなど基板の故障：</span>11月16日以降のCPU基板の修理代（Switch・Lite 24,200円、有機ELモデル26,400円）は動作品の買取価格を上回ります。故障品としての買取も含めて検討することをおすすめします（<Link href="/knowledge/broken/" style={linkStyle}>壊れたゲーム機の買取</Link>）。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>売る前の準備：</span>本体の初期化やデータの扱いは<Link href="/knowledge/data-delete/" style={linkStyle}>売る前のデータ消去</Link>、モデル別の買取価格は<Link href="/hardware/switch/" style={linkStyle}>Switch買取ガイド</Link>をご覧ください。</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary>{faq.q}</summary>
                <div className="faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) }) }} />
        </section>

        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連記事</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/knowledge/repair/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲーム機の修理料金</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>任天堂・SIEの公式価格と受付状況</p>
            </Link>
            <Link href="/hardware/switch/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switch買取ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>モデル別の買取価格</p>
            </Link>
            <Link href="/hardware/switch2/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switch 2 買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>5店の公式価格を比較</p>
            </Link>
          </div>
        </section>
      </div>

      <AuthorBox />
    </>
  );
}
