import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = 'ゲーム機の修理料金と受付状況｜任天堂・SIEの公式価格と、修理か売却かの判断材料【2026年11月15日確認】';
const DESCRIPTION =
  'Switch・Switch 2・PS5・PS4の修理料金を任天堂とSIEの公式ページで2026年11月15日に確認しました。任天堂は11月16日到着分から本体の修理価格を改定します。修理受付を終了した機種の一覧と、修理代と買取価格の比較も掲載しています。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['ゲーム機 修理', 'Switch 修理 料金', 'PS5 修理 料金', 'ゲーム機 修理 値段', 'ゲーム機 修理 売る'],
  alternates: { canonical: 'https://gamekaitori-biyori.com/knowledge/repair/' },
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
const yen = (v: number) => `${v.toLocaleString('ja-JP')}円`;
const ext = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>{label}</a>
);

// 任天堂 修理参考価格（税込）。before=2026年11月15日到着分まで / after=2026年11月16日到着分から（公式ページの表記）
const nintendo = [
  { model: 'Switch（有機ELモデル）', part: 'CPU基板', before: 16500, after: 26400 },
  { model: 'Switch（有機ELモデル）', part: '有機ELディスプレイ＋CPU基板の一部部品', before: 12100, after: 13200 },
  { model: 'Switch（有機ELモデル）', part: '上記以外の部品（バッテリー・スタンドなど）', before: 6050, after: 7150 },
  { model: 'Switch', part: 'CPU基板', before: 14300, after: 24200 },
  { model: 'Switch', part: '液晶ユニット＋CPU基板の一部部品', before: 9900, after: 11000 },
  { model: 'Switch', part: '上記以外の部品', before: 6050, after: 7150 },
  { model: 'Switch Lite', part: 'CPU基板', before: 14300, after: 24200 },
  { model: 'Switch Lite', part: '液晶ユニット＋CPU基板の一部部品', before: 9900, after: 11000 },
  { model: 'Switch Lite', part: '上記以外の部品（バッテリー・ボタン・スティックなど）', before: 6050, after: 7150 },
  { model: 'Switch 2', part: 'CPU基板（電源が入らない・充電できない等）', before: 27500, after: 37400 },
  { model: 'Switch 2', part: '液晶ユニット＋CPU基板の一部部品', before: 15400, after: 16500 },
  { model: 'Switch 2', part: 'CPU基板・液晶以外の部品（ゲームカードスロット・バッテリー交換）', before: 9900, after: 11000 },
];

// SIE オンライン修理受付の参考料金（税込・公式ページの2026年3月時点の表示）
const sie = [
  { model: 'PS5', part: 'メイン基板', online: 30800, other: 33000 },
  { model: 'PS5', part: '電源ブロック', online: 13200, other: 14300 },
  { model: 'PS5', part: 'ディスク読取／駆動ブロック', online: 12100, other: 13200 },
  { model: 'PS5', part: '外装部品', online: 11000, other: 11550 },
  { model: 'PS5 Pro', part: 'メイン基板', online: 58300, other: 60500 },
  { model: 'PS4／PS4 Pro', part: 'メイン基板', online: 16500, other: 18700 },
  { model: 'PS4／PS4 Pro', part: '電源ブロック', online: 6600, other: 7700 },
  { model: 'PS4／PS4 Pro', part: 'ディスク読取・駆動ブロック', online: 7150, other: 8250 },
  { model: 'PS4／PS4 Pro', part: '外装部品', online: 5500, other: 6600 },
];

// 修理代（任天堂は11/16以降の価格・SIEはオンライン料金）と、当サイトが2026年10月15日に実測した動作品の買取価格（最高値）の比較
const ratio = [
  { model: 'Switch Lite', buy: 15000, buyNote: 'ゲオ', repairs: [{ part: 'CPU基板', fee: 24200 }, { part: 'バッテリー・ボタン・スティックなど', fee: 7150 }] },
  { model: 'Switch（現行パッケージ）', buy: 17000, buyNote: 'ゲオ', repairs: [{ part: 'CPU基板', fee: 24200 }, { part: '液晶ユニット等', fee: 11000 }] },
  { model: 'Switch（有機ELモデル）', buy: 25000, buyNote: 'ゲオ', repairs: [{ part: 'CPU基板', fee: 26400 }, { part: '有機ELディスプレイ等', fee: 13200 }] },
  { model: 'PS5 Slim 通常版（CFI-2000）', buy: 60000, buyNote: 'ゲオ・駿河屋', repairs: [{ part: 'メイン基板', fee: 30800 }, { part: '電源ブロック', fee: 13200 }] },
];

// 修理受付を終了した主な機種（各社公式ページの記載）
const ended = [
  { maker: '任天堂', model: 'ニンテンドー3DSシリーズ（全機種）', date: '2025年9月4日に全機種の受付終了（New 2DS LLが最後）' },
  { maker: '任天堂', model: 'Wii U本体・周辺機器', date: '2024年7月3日（部品の在庫がなくなったため終了）' },
  { maker: 'SIE', model: 'PS Vita（PCH-1000・1100・2000）', date: '2024年4月25日' },
  { maker: 'SIE', model: 'PS3（最終型番 CECH-4300）', date: '2022年4月30日（CECH-2000は2016年3月31日、CECH-4000は2018年11月30日など型番ごとに異なる）' },
  { maker: 'SIE', model: 'PSP-3000', date: '2019年9月30日（PSP go：2016年7月31日、PSP-1000・2000：2014年3月31日）' },
  { maker: 'SIE', model: 'PS4（CUH-1000〜2100・7000〜7200）', date: 'CUH-1000／1100は2020年12月25日、CUH-7200は2025年11月30日など型番ごとに異なる' },
];

const faqs = [
  { q: 'Switchの修理料金はいくらですか？', a: '任天堂の修理参考価格（税込）では、Switch・Switch LiteのCPU基板が14,300円、バッテリーなど「上記以外の部品」が6,050円です（2026年11月15日到着分まで）。2026年11月16日到着分からはCPU基板24,200円、上記以外の部品7,150円に改定されます。Joy-Conは1本2,860円で、改定の記載はありません。水濡れ・落下・改造などによる故障は参考価格を超える場合があります。' },
  { q: '任天堂の修理価格はいつから上がりますか？', a: '任天堂の公式ページには「2026年11月16日（月）に弊社に到着した修理品から」Nintendo Switch本体の修理価格を改定すると記載されています。基準は申込日ではなく、任天堂サービスセンターへの到着日です。Switch 2本体も同じ趣旨の改定が記載されています。' },
  { q: 'PS5の修理料金はいくらですか？', a: 'SIEのオンライン修理受付の参考料金（税込）では、PS5のメイン基板が30,800円、電源ブロックが13,200円、ディスク読取／駆動ブロックが12,100円、外装部品が11,000円です（オンライン以外の申込はそれぞれ高くなります）。料金には送料・検査料・部品代が含まれ、見積額が10,500円以上のときは連絡があり、修理かキャンセルかを選べます。' },
  { q: 'PS Vita・PSP・PS3は修理に出せますか？', a: 'SIEの公式ページでは、PS VitaはPCH-1000・1100・2000のいずれも2024年4月25日、PSP-3000は2019年9月30日、PS3の最終型番CECH-4300は2022年4月30日で修理受付を終了しています。メーカー修理ができないため、動かなくなった本体は売却を含めて検討することになります。' },
  { q: '修理と売却のどちらが得ですか？', a: '当サイトの比較では、Switch LiteのCPU基板の修理代（2026年11月16日以降24,200円）は、動作品の買取価格（2026年10月15日実測・ゲオ15,000円）を上回りました。一方、PS5 Slimのメイン基板の修理代30,800円は、買取価格60,000円の約半分です。故障箇所と機種で判断が分かれるため、修理の見積額と、故障品・動作品それぞれの買取価格を比べてから決めることをおすすめします。' },
  { q: '修理に出すとデータは消えますか？', a: '任天堂の修理サービス規程には、修理内容によって本体保存メモリーやmicroSDカードなどのデータが消滅したり使用できなくなる可能性があると記載されています。SIEのアフターサービス規定にも、修理・交換にともないデータが変更または失われる場合があると記載されています。両社とも事前のバックアップを案内しています。' },
];

export default function RepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'ゲーム機の修理料金と受付状況｜任天堂・SIEの公式価格と、修理か売却かの判断材料', datePublished: '2026-11-15', dateModified: '2026-11-15', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: 'ゲーム機の修理料金' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲーム機の修理料金と受付状況<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>任天堂・SIEの公式価格、受付終了機種、修理代と買取価格の比較【{CHECK_DATE}確認】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            任天堂は2026年11月16日到着分から、Switch本体のCPU基板の修理価格を14,300円から24,200円（有機ELモデルは16,500円から26,400円）に改定します。PS5のメイン基板はSIEのオンライン受付で30,800円です。PS Vita・PSP・PS3と3DS・Wii Uはメーカーの修理受付を終了しています。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：{CHECK_DATE}（料金・受付状況は同日に各社の公式ページで確認）</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：基板の故障は修理代が買取価格に近いか上回るため、見積と買取価格を比べてから決めることをおすすめします</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>任天堂は11月16日到着分から値上げ：</span>Switch・LiteのCPU基板は24,200円、バッテリーなど「上記以外の部品」は7,150円になります。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>修理代が買取価格を上回る例：</span>Switch LiteのCPU基板（24,200円）は、動作品の買取価格（ゲオ15,000円・2026年10月15日実測）を9,200円上回ります。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>メーカー修理ができない機種：</span>PS Vita（2024年4月25日終了）、PSP-3000（2019年9月30日終了）、PS3 CECH-4300（2022年4月30日終了）、3DSシリーズ（2025年9月4日に全機種終了）などです。</li>
          </ul>
        </section>

        <section className="mb-12" id="nintendo">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />任天堂の修理参考価格（Switch・Switch 2）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            任天堂の公式ページには「修理部品の価格高騰により、2026年11月16日（月）に弊社に到着した修理品から」本体の修理価格を改定すると記載されています。改定前と改定後の参考価格（税込）を並べました。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>機種</th><th>修理・交換箇所</th><th>11月15日到着分まで</th><th>11月16日到着分から</th></tr></thead>
              <tbody>
                {nintendo.map((r) => (
                  <tr key={r.model + r.part}>
                    <td className="font-bold text-sm">{r.model}</td>
                    <td className="text-sm">{r.part}</td>
                    <td className="text-sm">{yen(r.before)}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(r.after)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="space-y-2 text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
            <li>・改定の記載がない項目：Joy-Con 1本2,860円、Proコントローラー4,290円、Joy-Con 2 1本3,960円、Switch 2 Proコントローラー6,490円。Switch Liteはコントローラー一体型のため、スティックの不具合は本体修理（上記以外の部品）として扱われます。</li>
            <li>・「水濡れ、落下、改造等による故障に関しては、不具合症状、交換箇所が複数になり、参考価格を超える高額修理となる場合があります。」と記載されています。</li>
            <li>・申込はオンライン修理受付からで、修理代金が5％割引になります。修理品は任天堂サービスセンター（京都府宇治市）へ宅配便で送り、直接の持ち込みはできません。保証期間外の送料は利用者負担（デジタル送り状を使う場合は全国一律720円）、返送の送料は任天堂負担です。</li>
            <li>・修理期間は、サービスセンター到着後、通常10日から2週間ほどです。保証期間はSwitchが購入日から1年間、Switch 2の本体セットが初回設定日から1年間です。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：{ext('https://support.nintendo.com/jp/repair/price_switch.html', '任天堂 Nintendo Switch 修理参考価格')}、{ext('https://support.nintendo.com/jp/repair/price_switch2.html', 'Nintendo Switch 2 修理参考価格')}、{ext('https://support.nintendo.com/jp/repair/price.html', '修理参考価格（共通の注記）')}、{ext('https://support.nintendo.com/jp/repair/online.html', 'オンライン修理受付')}、{ext('https://support-jp.nintendo.com/app/answers/detail/a_id/32313/', '送料について')}、{ext('https://support-jp.nintendo.com/app/answers/detail/a_id/32283/', '修理期間')}、{ext('https://support-jp.nintendo.com/app/answers/detail/a_id/36699/', 'Switchの保証期間')}、{ext('https://support-jp.nintendo.com/app/answers/detail/a_id/38845/', 'Switch 2の保証期間')}（いずれも{CHECK_DATE}確認）。
          </p>
        </section>

        <section className="mb-12" id="sie">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />SIEの修理料金（PS5・PS4）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            SIEのオンライン修理受付サービスに掲載されている参考料金（税込・送料、検査料、部品代を含む）です。公式ページの表示は2026年3月時点で、予告なく変更される場合があると記載されています。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>機種</th><th>部位</th><th>オンライン申込</th><th>オンライン以外</th></tr></thead>
              <tbody>
                {sie.map((r) => (
                  <tr key={r.model + r.part}>
                    <td className="font-bold text-sm">{r.model}</td>
                    <td className="text-sm">{r.part}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(r.online)}</td>
                    <td className="text-sm">{yen(r.other)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="space-y-2 text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
            <li>・コントローラーはDualSense 7,480円、DUALSHOCK 4 4,950円です。</li>
            <li>・見積額が10,500円（税込）以上のときはメールまたはSMSで連絡があり、修理するかキャンセルするかを選べます。発送は着払いで、返却時に宅配業者へ支払います。</li>
            <li>・修理期間は、修理品の到着後通常「数日から7日」程度です。保証期間は新品の購入日から1年間で、保証書（購入日と店舗印のあるもの）または購入証明書の原本が必要です。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：{ext('https://www.playstation.com/ja-jp/support/hardware/repairs/', 'PlayStation オンライン修理受付サービス')}、{ext('https://www.playstation.com/ja-jp/support/hardware/repairs-after-service-terms/', 'アフターサービス規定')}（いずれも{CHECK_DATE}確認）。
          </p>
        </section>

        <section className="mb-12" id="compare">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />修理代と買取価格の比較（当サイト集計）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            上の修理代（任天堂は11月16日以降の価格、SIEはオンライン料金）を、当サイトが2026年10月15日に各社の公式買取ページで実測した動作品の買取価格（確認した店舗の最高値）と比べました。故障した本体の買取価格は動作品より低くなるため、この比較は「修理して使い続ける費用が、動く本体を売った場合の金額に対してどのくらいか」の目安です。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>機種</th><th>動作品の買取価格<br /><span className="text-xs font-normal">2026年10月15日実測</span></th><th>修理箇所</th><th>修理代</th><th>買取価格に対する割合</th></tr></thead>
              <tbody>
                {ratio.flatMap((r) => r.repairs.map((rp, i) => (
                  <tr key={r.model + rp.part}>
                    <td className="font-bold text-sm">{i === 0 ? r.model : ''}</td>
                    <td className="text-sm">{i === 0 ? `${yen(r.buy)}（${r.buyNote}）` : ''}</td>
                    <td className="text-sm">{rp.part}</td>
                    <td className="text-sm">{yen(rp.fee)}</td>
                    <td className="font-bold text-sm" style={{ color: rp.fee > r.buy ? '#DC2626' : 'var(--color-electric-green)' }}>{Math.round((rp.fee / r.buy) * 100)}%</td>
                  </tr>
                )))}
              </tbody>
            </table>
          </div>
          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>比較から分かること</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>Switch系のCPU基板は修理代が買取価格を上回る：</span>Lite（161%）・現行パッケージ（142%）・有機ELモデル（106%）のいずれも、11月16日以降のCPU基板の修理代が動作品の買取価格を超えました。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>バッテリー・液晶の交換は買取価格の半分前後：</span>Liteの「上記以外の部品」7,150円は買取価格の48%、有機ELモデルのディスプレイ13,200円は53%でした。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>PS5は修理代の割合が低い：</span>PS5 Slimはメイン基板でも買取価格の51%、電源ブロックは22%でした。</li>
            </ul>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            買取価格の出典：当サイトの定期実測（ゲオ・駿河屋の公式買取ページ・2026年10月15日）。最新の価格は<Link href="/price-index/" style={linkStyle}>価格インデックス</Link>をご覧ください。修理代は参考価格で、実際の金額は点検後に決まります。
          </p>
        </section>

        <section className="mb-12" id="ended">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />メーカーの修理受付を終了した主な機種</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>メーカー</th><th>機種</th><th>受付終了日（公式の記載）</th></tr></thead>
              <tbody>
                {ended.map((r) => (
                  <tr key={r.model}>
                    <td className="text-sm">{r.maker}</td>
                    <td className="font-bold text-sm">{r.model}</td>
                    <td className="text-sm">{r.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
            任天堂の修理サービス規程では、修理用部品の保有期間は「原則として製品製造終了後6年間」とされ、保有期間満了後は修理を受けられないと記載されています。Switchファミリーは2026年11月15日時点で修理対象に含まれており、受付終了の一覧にも掲載されていません。修理ができない機種の買取価格は、<Link href="/hardware/ps3/" style={linkStyle}>PS3</Link>・<Link href="/hardware/psp/" style={linkStyle}>PSP</Link>・<Link href="/hardware/ps-vita/" style={linkStyle}>PS Vita</Link>・<Link href="/hardware/3ds/" style={linkStyle}>3DS</Link>の各ページでご確認いただけます。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：{ext('https://support.nintendo.com/jp/repair/syuryou.html', '任天堂 修理受付を終了した商品')}、{ext('https://support.nintendo.com/jp/repair/model_check.html', '3DSシリーズの修理受付終了')}、{ext('https://support.nintendo.com/jp/information/2023/0523.html', 'Wii U修理受付終了のお知らせ')}、{ext('https://support.nintendo.com/jp/repair/eula/repair_policy.html', '修理サービス規程')}、{ext('https://www.playstation.com/ja-jp/support/hardware/repairs-no-longer-available/', 'PlayStation 修理受付を終了した製品')}（いずれも{CHECK_DATE}確認）。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />修理に出す前・売る前に確認すること</h2>
          <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>データのバックアップ：</span>任天堂・SIEとも、修理でデータが消える可能性があり、その損害について責任を負わないと規程に記載しています。任天堂はNintendo Switch Onlineの「セーブデータお預かり」、SIEはユーザーごとのバックアップとトロフィーの同期を案内しています。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>連携・登録の解除：</span>任天堂は送付前に「Nintendo みまもり Switch」との連携解除、SIEはPS4の「いつも使うPS4」の登録解除とサインアウトを案内しています。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>保証の確認：</span>任天堂は、正常な使用のもとで起きた故障は保証期間内（Switchは購入日から1年間）であれば無償で修理すると案内し、破損・水濡れ・落下などによる故障は保証期間内でも有償になる場合があると記載しています。SIEの保証期間は新品の購入日から1年間です。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>売却する場合：</span>故障品の買取については<Link href="/knowledge/broken/" style={linkStyle}>壊れたゲーム機の買取</Link>、売る前の準備は<Link href="/knowledge/preparation/" style={linkStyle}>売る前の準備</Link>で解説しています。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：{ext('https://support-jp.nintendo.com/app/answers/detail/a_id/32285/', '任天堂 修理時のデータの扱い')}、{ext('https://support.nintendo.com/jp/repair/packaging/switch.html', '梱包と発送')}、{ext('https://support-jp.nintendo.com/app/answers/detail/a_id/32324/', '保証期間内の修理')}、{ext('https://www.playstation.com/ja-jp/support/hardware/repairs/', 'PlayStation オンライン修理受付サービス')}（いずれも{CHECK_DATE}確認）。
          </p>
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
            <Link href="/knowledge/broken/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>壊れたゲーム機の買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ジャンク品の扱い</p>
            </Link>
            <Link href="/knowledge/switch-lifespan/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switchの寿命</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>バッテリーの劣化と交換費用</p>
            </Link>
            <Link href="/hardware/switch/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switch買取ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>モデル別の買取価格</p>
            </Link>
          </div>
        </section>
      </div>

      <AuthorBox />
    </>
  );
}
