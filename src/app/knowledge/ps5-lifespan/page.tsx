import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = 'PS5の寿命は？壊れやすい型番の情報と全型番の修理受付状況、メーカー保証・修理料金・型番別の買取価格【2026年11月】';
const DESCRIPTION =
  'PS5の寿命をSIE公式の受付終了製品一覧で確認しました。PS5は全型番が修理受付中です。壊れやすい型番に関する公式データの有無と海外の報道、メーカー保証と延長保証、SIEの修理料金（メイン基板の交換30,800円など）、駿河屋の型番別買取価格をまとめています。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['PS5 寿命', 'PS5 何年もつ', 'PS5 修理 料金', 'PS5 保証期間', 'PS5 延長保証'],
  alternates: { canonical: 'https://gamekaitori-biyori.com/knowledge/ps5-lifespan/' },
  openGraph: {
    images: ['/og.png'],
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const SURVEY_DATE = '2026年11月18日';
const SIE_END = 'https://www.playstation.com/ja-jp/support/hardware/repairs-no-longer-available/';
const SIE_REPAIR = 'https://www.playstation.com/ja-jp/support/hardware/repairs/';
const SIE_WARRANTY = 'https://www.playstation.com/ja-jp/support/hardware/repairs-extended-warranty-service/';
const UPDATED = '2026年11月28日';
const SIE_PS5 = 'https://www.playstation.com/ja-jp/ps5/';
const SIE_SUPPORT_PS5 = 'https://www.playstation.com/ja-jp/support/hardware/ps5/';
const SURUGAYA_SEARCH = 'https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=';

// 駿河屋 公式買取検索で型番を検索した掲載価格（2026-11-18）。発売日は駿河屋の記載
const models = [
  { code: 'CFI-1000A01', kind: 'PS5（初期型・ディスクドライブ搭載）', release: '2020/11/12', price: 50000 },
  { code: 'CFI-1000B01', kind: 'PS5 デジタル・エディション（初期型）', release: '2020/11/12', price: 41000 },
  { code: 'CFI-1100A01', kind: 'PS5（ディスクドライブ搭載）', release: '2021/08/24', price: 50000 },
  { code: 'CFI-1200A01', kind: 'PS5（ディスクドライブ搭載）', release: '2022/09/15', price: 50000 },
  { code: 'CFI-1200B01', kind: 'PS5 デジタル・エディション', release: '2022/09/15', price: 42000 },
  { code: 'CFI-2000A01', kind: 'PS5（slimモデル）', release: '2023/11/10', price: 60000 },
  { code: 'CFI-2000B01', kind: 'PS5（slimモデル）デジタル・エディション', release: '2023/11/10', price: 56000 },
  { code: 'CFI-2200B01', kind: 'PS5 デジタル・エディション 日本語専用', release: '2025/11/21', price: 38000 },
  { code: 'CFI-7000B01', kind: 'PS5 Pro', release: '2024/11/07', price: 110000 },
  { code: 'CFI-7100B01', kind: 'PS5 Pro', release: '2025/12/23', price: 96000 },
];

// SIE「修理サービス」の修理料金（税込・2026-11-18確認）。null は料金表に項目なし
const fees = [
  { part: 'DualSense ワイヤレスコントローラーの修理／交換', ps5: 7480, ps5other: 7480, de: 7480, pro: 7480 },
  { part: '外装部品の交換', ps5: 11000, ps5other: 11550, de: 11000, pro: 11000 },
  { part: 'ディスク読取／駆動ブロックの修理／交換', ps5: 12100, ps5other: 13200, de: null, pro: null },
  { part: '電源ブロックの交換', ps5: 13200, ps5other: 14300, de: 13200, pro: 13200 },
  { part: 'メイン基板の交換', ps5: 30800, ps5other: 33000, de: 30250, pro: 58300 },
];

// SIE「アフターサービス受付終了製品」のPS4の記載（参考・2026-11-18確認）
const ps4End = [
  { series: 'CUH-1000／CUH-1100シリーズ', end: '2020年12月25日' },
  { series: 'CUH-1200シリーズ', end: '2022年1月31日' },
  { series: 'CUH-2000シリーズ', end: '2022年12月22日' },
  { series: 'CUH-7000シリーズ（PS4 Pro）', end: '2023年1月31日' },
  { series: 'CUH-2100シリーズ', end: '2023年10月31日' },
  { series: 'CUH-7100シリーズ（PS4 Pro）', end: '2023年12月20日' },
  { series: 'CUH-7200シリーズ（PS4 Pro）', end: '2025年11月30日' },
];

const yen = (v: number | null) => (v == null ? '—' : `${v.toLocaleString('ja-JP')}円`);
const linkStyle = { color: 'var(--color-electric-green)', fontWeight: 700 } as const;

const faqs = [
  { q: 'PS5の寿命は何年ですか？', a: 'SIEは本体の寿命を年数では公表していません。当サイトでは、メーカーの修理が受けられる期間をひとつの目安として、SIEのアフターサービス受付終了製品の一覧を確認しました。2026年11月18日時点で、一覧にPS5の型番は1つも記載されておらず、2020年11月12日発売（駿河屋の記載）の初期型CFI-1000も修理を受け付けています。' },
  { q: 'PS5に壊れやすい型番はありますか？', a: 'SIEは型番別の故障率や故障件数を公表しておらず、当サイトでも型番ごとの壊れやすさを示す公式のデータは確認できませんでした（2026年11月28日時点）。海外では、初期型のCFI-1000・CFI-1100で冷却に使われている液体金属のずれや漏れを指摘する報道（BGR 2026年10月30日、iXBT 2026年8月6日）がありますが、分解した愛好家や修理業者の少数の事例にもとづくもので、SIEの見解ではありません。なお、駿河屋の買取価格はCFI-1000A01・CFI-1100A01・CFI-1200A01のいずれも50,000円で、型番による差は付いていません（2026年11月18日）。' },
  { q: 'PS5の保証期間はどのくらいですか？', a: 'SIEの延長保証サービスのページでは、メーカー保証期間はお買い上げ日から1年間と記載されています。延長保証（PS5 4,400円・PS5 Pro 5,000円）はメーカー保証の1年目が終わるまでに加入が必要です。2026年11月16日〜2027年1月29日のキャンペーン期間に加入すると、保証期間が6か月延長され最大3年6か月になるとSIEは案内しています。' },
  { q: '保証が切れたPS5は修理と売却のどちらがよいですか？', a: 'SIEの修理料金（オンライン修理）はメイン基板の交換30,800円、電源ブロックの交換13,200円です。駿河屋のCFI-1200A01の買取価格は50,000円（2026年11月18日・動作品の掲載価格）で、メイン基板の交換料金を上回っています。PS4（CUH-2200）ではメイン基板の交換料金が買取価格を上回っていたため、PS5は修理して使い続ける選択肢を取りやすい状況です。' },
  { q: 'PS5を長く使うために気をつけることは？', a: 'SIEのサポートページでは、PS5の側面と背面の通風孔をふさがないこと、本体の周囲に少なくとも10cmの空間を確保すること、通風孔やその周囲にほこりをためないことが案内されています。通気性の悪い場所では本体に熱がこもり、冷却が追いつかないと電源が切れる構造になっていると記載されています。' },
  { q: 'PS4はいつ修理受付が終わりましたか？', a: 'SIEの一覧では、PS4の初期型CUH-1000シリーズが2020年12月25日、PS4 Proの最後の型番CUH-7200シリーズが2025年11月30日に受付を終了しています。PS4の型番別の詳細は「PS4の寿命」のページにまとめています。' },
];

export default function Ps5LifespanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'PS5の寿命は？壊れやすい型番の情報と全型番の修理受付状況、メーカー保証・修理料金・型番別の買取価格', datePublished: '2026-11-18', dateModified: '2026-11-28', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: 'PS5の寿命' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            PS5の寿命と壊れやすい型番・修理・保証の期間<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>修理受付の状況・保証・修理料金・買取価格をSIEと駿河屋の公式ページで確認【{SURVEY_DATE}】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            SIEはPS5の寿命を年数で公表していません。メーカー修理の受付期間で見ると、{SURVEY_DATE}時点でSIEのアフターサービス受付終了製品の一覧にPS5の型番は1つもなく、2020年発売の初期型を含むすべての型番が修理を受け付けています。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：{UPDATED}（修理受付・保証・修理料金・買取価格は{SURVEY_DATE}にSIE・駿河屋の公式ページで確認）</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：PS5は全型番がメーカー修理を受けられます</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>修理受付：</span>SIEの受付終了製品の一覧にPS5の記載はありません（{SURVEY_DATE}確認）。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>保証：</span>メーカー保証はお買い上げ日から1年。延長保証（PS5 4,400円）は1年目のうちに加入が必要です。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>修理料金：</span>メイン基板の交換30,800円、電源ブロックの交換13,200円（オンライン修理・税込）。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>壊れやすい型番：</span>SIEは型番別の故障率を公表していません。初期型（CFI-1000・1100）の液体金属を指摘する海外報道はありますが、少数の事例報告です（<a href="#fragile" style={linkStyle}>詳しく</a>）。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>買取価格：</span>初期型CFI-1000A01も駿河屋で50,000円。メイン基板の交換料金より高い掲載価格です。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>修理受付の状況は変わることがあります。受付終了の予定はSIEの一覧でご確認ください。</p>
        </section>

        <section className="mb-12" id="fragile">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />壊れやすい型番はある？公式の情報と海外の報道（{UPDATED}確認）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            結論として、SIEは型番別の故障率や故障件数を公表しておらず、当サイトでも型番ごとの壊れやすさを比べられる公式のデータは確認できませんでした。確認できた情報を、出典の種類ごとに分けて掲載しています。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>出典</th><th>内容</th><th>受け止め方</th></tr></thead>
              <tbody>
                <tr><td className="font-bold text-sm">SIE サポートページ</td><td className="text-sm">PS5のサポート情報を「CFI-1000 model group」と「CFI-2000／2100／7000 model group」の2つに分けて案内しています。</td><td className="text-sm">設計の世代の区切りを示すもので、故障の多さを示すものではありません。</td></tr>
                <tr><td className="font-bold text-sm">SIE PS5製品ページ</td><td className="text-sm">新デザインのPS5は、従来モデルと比べてサイズが30%以上小型化し、重さはディスクドライブ搭載モデルで18%、デジタル・エディションで24%軽くなったと記載しています。</td><td className="text-sm">内部の設計が変わったことは公式に確認できますが、耐久性の比較は記載されていません。</td></tr>
                <tr><td className="font-bold text-sm">BGR（米国・2026年10月30日）</td><td className="text-sm">中古で買う場合は初期型のCFI-1000／1100を避けるよう述べ、理由に冷却用の液体金属が漏れる可能性を挙げています。根拠は愛好家による分解とされ、調べた台数は示されていません。</td><td className="text-sm">報道機関による指摘で、SIEの見解ではありません。</td></tr>
                <tr><td className="font-bold text-sm">iXBT（2026年8月6日）</td><td className="text-sm">修理を扱うYouTubeチャンネル「TronicsFix」が、過熱の相談があったPS5を2台分解し、いずれも液体金属がずれていたと伝えています。</td><td className="text-sm">2台の事例報告で、型番全体の故障率を示すものではありません。</td></tr>
              </tbody>
            </table>
          </div>
          <ul className="space-y-2 text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>買取価格には差が出ていません：</span>駿河屋の掲載価格は、CFI-1000A01・CFI-1100A01・CFI-1200A01のいずれも50,000円でした（{SURVEY_DATE}・<a href="#price" style={linkStyle}>型番別の買取価格</a>）。買取の現場では、初期型だから減額という扱いは見られません。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>型番の確認：</span>型番は本体と箱に記載されています。中古で購入する場合や手放す場合は、型番とメーカー保証・延長保証の残り期間をあわせて確認すると判断しやすくなります。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>熱への対策：</span>SIEは型番を分けずに、通風孔をふさがず本体の周囲に10cm以上の空間を確保するよう案内しています。熱で電源が落ちる症状が続く場合は、<a href="#fee" style={linkStyle}>SIEの修理料金</a>と買取価格を比べて判断してください。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SIE_SUPPORT_PS5} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>SIE PS5 サポート</a>・<a href={SIE_PS5} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>SIE PS5製品ページ</a>（{UPDATED}確認）、<a href="https://bgr.com/2297719/used-playstation-5-model-avoid-launch/" target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>BGR</a>（2026年10月30日）、<a href="https://ixbt.games/en/news/2026/08/06/426687-starye-ps5-vse-cashhe-peregrevaiutsia-servis-ukazal-na-konstruktivnyi-nedostatok-sony.html" target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>iXBT</a>（2026年8月6日）。海外報道は事例の報告であり、型番ごとの故障率を示すものではありません。
          </p>
        </section>

        <section className="mb-12" id="end">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />修理受付の状況（SIE公式・{SURVEY_DATE}確認）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            SIEの「アフターサービス受付終了製品」には、PlayStation・PS2・PSP・PS3・PS4・PS Vitaなどの型番と終了日が記載されています。{SURVEY_DATE}時点で、PS5（型番CFI-で始まる製品）は一覧に記載がありませんでした。参考として、前の世代のPS4の受付終了日は次のとおりです。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>PS4の型番</th><th>アフターサービス受付終了日</th></tr></thead>
              <tbody>
                {ps4End.map((r) => (
                  <tr key={r.series}>
                    <td className="font-bold text-sm">{r.series}</td>
                    <td className="text-sm">{r.end}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
            PS4は型番ごとに受付を終了しており、CUH-2200シリーズのみ一覧に記載がありません。PS5も同じように型番単位で終了日が決まる可能性があるため、本体の型番（箱と本体に記載）を控えておくと確認しやすくなります。PS4の型番別の買取価格は<Link href="/knowledge/ps4-lifespan/" style={linkStyle}>PS4の寿命</Link>にまとめています。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SIE_END} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>SIE アフターサービス受付終了製品</a>（{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12" id="warranty">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />メーカー保証と延長保証（SIE公式）</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>メーカー保証：</span>お買い上げ日から1年間。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>延長保証の料金：</span>PS5 4,400円、PS5 Pro 5,000円（税込）。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>加入期限：</span>メーカー保証期間（1年目）が終了するまで。保証書を紛失した場合や購入日が確認できない場合は対象外です。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>キャンペーン：</span>2026年11月16日11時〜2027年1月29日18時に加入すると、保証期間が6か月延長され最大3年6か月（メーカー保証1年＋延長保証2年6か月）になります。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>終了条件：</span>延長保証中に修理を2回おこなった場合、または本体の交換をおこなった場合に終了します。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>対象外：</span>ファクトリーリファービッシュ品は加入できません。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SIE_WARRANTY} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>SIE PlayStation延長保証サービス</a>（{SURVEY_DATE}確認・ページの更新日は2026年9月16日）。
          </p>
        </section>

        <section className="mb-12" id="fee">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />保証期間外の修理料金（SIE公式・税込）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>修理内容</th><th>PS5（オンライン修理）</th><th>PS5（オンライン修理以外）</th><th>デジタル・エディション（オンライン修理）</th><th>PS5 Pro（オンライン修理）</th></tr></thead>
              <tbody>
                {fees.map((f) => (
                  <tr key={f.part}>
                    <td className="font-bold text-sm">{f.part}</td>
                    <td className="text-sm">{yen(f.ps5)}</td>
                    <td className="text-sm">{yen(f.ps5other)}</td>
                    <td className="text-sm">{yen(f.de)}</td>
                    <td className="text-sm">{yen(f.pro)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
            SIEは、見積もりが10,500円（税込）以上になった場合にメール／SMSで連絡し、修理するかキャンセルするかを選べると案内しています。修理期間は修理品の到着後、通常数日〜7日ほどです。PS5 Proのメイン基板の交換（58,300円）は、通常のPS5（30,800円）の約1.9倍です。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SIE_REPAIR} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>SIE 修理サービス（修理料金）</a>（{SURVEY_DATE}確認）。料金は参考料金で、実際の修理料金とは異なる場合があるとSIEは記載しています。Switch・PS4を含む修理料金の比較は<Link href="/knowledge/repair/" style={linkStyle}>ゲーム機の修理料金</Link>にまとめています。
          </p>
        </section>

        <section className="mb-12" id="price">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />型番別の買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>型番</th><th>モデル</th><th>発売日（駿河屋の記載）</th><th>買取価格</th></tr></thead>
              <tbody>
                {models.map((m) => (
                  <tr key={m.code}>
                    <td className="font-bold text-sm">{m.code}</td>
                    <td className="text-sm">{m.kind}</td>
                    <td className="text-sm">{m.release}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(m.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>実測から分かること</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>初期型でも価格が下がっていない：</span>ディスクドライブ搭載のCFI-1000A01・CFI-1100A01・CFI-1200A01は、いずれも50,000円で同じ掲載価格でした。発売から約6年たった初期型でも、型番による差は付いていません。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>修理料金より買取価格が高い：</span>CFI-1200A01の買取価格（50,000円）は、メイン基板の交換料金（30,800円）の約1.6倍です。PS4のCUH-2200（買取14,000円・メイン基板の交換16,500円、2026年11月16日確認）とは逆の関係です。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>slimモデルが最も高い：</span>PS5 Proを除くと、CFI-2000A01（60,000円）が最も高い掲載価格でした。</li>
            </ul>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('CFI-1200A01')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 公式買取検索（型番で検索）</a>（{SURVEY_DATE}確認）。動作品・付属品完備の掲載価格で、査定額を保証するものではありません。PS5の買取業者の比較は<Link href="/hardware/ps5/" style={linkStyle}>PS5の買取</Link>をご覧ください。
          </p>
        </section>

        <section className="mb-12" id="care">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />長く使うためにSIEが案内していること</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・PS5の側面と背面の通風孔がふさがっていないことを確認する。</li>
            <li>・本体の周囲に、少なくとも10cmの空間を確保する。</li>
            <li>・本体を狭い所や雑然とした場所に置かない。通風孔やその周囲にほこりをためない。</li>
            <li>・通気性の悪い場所では本体に熱がこもり、冷却ファンが高速回転します。それでも冷却が追いつかないときは電源が切れる構造です。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SIE_REPAIR} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>SIE 修理サービス（よくある質問）</a>（{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />修理か売却かの判断</h2>
          <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>保証期間内の場合：</span>メーカー保証（1年）または延長保証の範囲で修理を申し込めます。購入証明書（レシート等）が必要です。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>保証期間外で故障した場合：</span>上の修理料金と買取価格を比べてください。動作しない場合の売り方は<Link href="/knowledge/broken/" style={linkStyle}>壊れたゲーム機の買取</Link>で解説しています。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>売る前の準備：</span>データのバックアップと初期化が必要です。手順は<Link href="/knowledge/data-delete/" style={linkStyle}>データ消去の方法</Link>で解説しています。</li>
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
            <Link href="/hardware/ps5/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS5の買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>買取業者の比較</p>
            </Link>
            <Link href="/knowledge/ps4-lifespan/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS4の寿命</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>型番別の修理受付終了日</p>
            </Link>
            <Link href="/knowledge/switch-lifespan/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switchの寿命</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>修理受付と買取価格</p>
            </Link>
          </div>
        </section>
      </div>

      <AuthorBox />
    </>
  );
}
