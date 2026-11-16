import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = 'PS4の寿命は？修理受付が続くのはCUH-2200のみ、型番別の受付終了日と買取価格【2026年11月16日確認】';
const DESCRIPTION =
  'PS4の寿命をSIE公式のアフターサービス受付終了製品の一覧で2026年11月16日に確認しました。受付終了一覧に載っていないのはCUH-2200のみです。型番別の受付終了日、SIEの修理料金、駿河屋の型番別買取価格（10,000〜16,000円）を並べて掲載しています。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['PS4 寿命', 'PS4 何年もつ', 'PS4 修理 受付終了', 'PS4 サポート終了', 'PS4 買い替え'],
  alternates: { canonical: 'https://gamekaitori-biyori.com/knowledge/ps4-lifespan/' },
  openGraph: {
    images: ['/og.png'],
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const SURVEY_DATE = '2026年11月16日';
const SIE_END = 'https://www.playstation.com/ja-jp/support/hardware/repairs-no-longer-available/';
const SIE_REPAIR = 'https://www.playstation.com/ja-jp/support/hardware/repairs/';
const SURUGAYA_SEARCH = 'https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=';

// SIE「アフターサービス受付終了製品」のPS4の記載（2026-11-16確認）と、駿河屋 公式買取検索のジェット・ブラック本体単体の掲載価格（同日）
type Row = { series: string; kind: string; end: string; sample: string | null; price: number | null };
const rows: Row[] = [
  { series: 'CUH-1000', kind: 'PS4', end: '2020年12月25日', sample: null, price: null },
  { series: 'CUH-1100', kind: 'PS4', end: '2020年12月25日', sample: 'CUH-1100AB01（500GB）', price: 10000 },
  { series: 'CUH-1200', kind: 'PS4', end: '2022年1月31日', sample: 'CUH-1200AB01（500GB）', price: 13000 },
  { series: 'CUH-2000', kind: 'PS4（薄型）', end: '2022年12月22日', sample: null, price: null },
  { series: 'CUH-2100', kind: 'PS4（薄型）', end: '2023年10月31日', sample: 'CUH-2100AB01（500GB）', price: 13000 },
  { series: 'CUH-2200', kind: 'PS4（薄型）', end: '一覧に記載なし（受付継続）', sample: 'CUH-2200AB01（500GB）／BB01（1TB）', price: 14000 },
  { series: 'CUH-7000', kind: 'PS4 Pro', end: '2023年1月31日', sample: 'CUH-7000BB01（1TB）', price: 13000 },
  { series: 'CUH-7100', kind: 'PS4 Pro', end: '2023年12月20日', sample: 'CUH-7100BB01（1TB）', price: 14000 },
  { series: 'CUH-7200', kind: 'PS4 Pro', end: '2025年11月30日', sample: 'CUH-7200BB01（1TB）', price: 16000 },
];

const fees = [
  { part: 'ワイヤレスコントローラー（DUALSHOCK 4）の修理／交換', online: 4950, other: 4950 },
  { part: '外装部品の交換', online: 5500, other: 6600 },
  { part: '電源ブロックの交換', online: 6600, other: 7700 },
  { part: 'ディスク読取、駆動ブロックの修理／交換', online: 7150, other: 8250 },
  { part: 'ハードディスクの修理／交換（1TB）', online: 7150, other: 11550 },
  { part: 'メイン基板の交換', online: 16500, other: 18700 },
];

const yen = (v: number | null) => (v == null ? '—' : `${v.toLocaleString('ja-JP')}円`);
const linkStyle = { color: 'var(--color-electric-green)', fontWeight: 700 } as const;

const faqs = [
  { q: 'PS4の寿命は何年ですか？', a: 'SIEは本体の寿命を年数では公表していません。当サイトでは、メーカーの修理が受けられる期間をひとつの目安として、SIEのアフターサービス受付終了製品の一覧を確認しました。2026年11月16日時点で、PS4はCUH-2200シリーズ以外のすべての型番が受付を終了しています。' },
  { q: '自分のPS4がまだ修理できるか確認する方法は？', a: 'SIEによると、型番は製品が入っていた箱と本体に記載されています。型番がCUH-22で始まる場合は、受付終了製品の一覧に記載がありません（2026年11月16日確認）。それ以外の型番は、一覧に記載された日付でアフターサービスを終了しています。' },
  { q: 'PS4 Proはいつまで修理できましたか？', a: 'SIEの一覧では、CUH-7000シリーズが2023年1月31日、CUH-7100シリーズが2023年12月20日、最後の型番であるCUH-7200シリーズが2025年11月30日に受付を終了しています。' },
  { q: '壊れたPS4は修理と売却のどちらがよいですか？', a: 'CUH-2200の場合、SIEの修理料金はオンライン修理でメイン基板の交換16,500円、電源ブロックの交換6,600円などです。駿河屋のCUH-2200AB01の買取価格は14,000円（2026年11月16日・動作品の掲載価格）のため、メイン基板の交換は買取価格を上回ります。修理受付を終えた型番は、動作しない状態での買取を含めて売却を検討することになります。' },
  { q: 'PS4の周辺機器も修理受付が終わっていますか？', a: 'SIEの一覧には、専用の周辺機器も本体と同様にアフターサービスの受付を終了していると記載されています。一方で、修理料金表にはDUALSHOCK 4の修理／交換（4,950円）など、PS4周辺機器の項目も掲載されています。個別の可否はSIEのサポート窓口でご確認ください。' },
];

export default function Ps4LifespanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'PS4の寿命は？修理受付が続くのはCUH-2200のみ、型番別の受付終了日と買取価格', datePublished: '2026-11-16', dateModified: '2026-11-16', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: 'PS4の寿命' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            PS4の寿命と修理受付の終了日<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>型番別の受付終了日・修理料金・買取価格をSIEと駿河屋の公式ページで確認【{SURVEY_DATE}】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            SIEはPS4の寿命を年数で公表していません。メーカー修理の受付期間で見ると、{SURVEY_DATE}時点でPS4はCUH-2200シリーズ以外のすべての型番がアフターサービスを終了しています。最後まで受付が続いたPS4 ProのCUH-7200も2025年11月30日に終了しました。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：{SURVEY_DATE}（SIE・駿河屋の公式ページを同日に確認）</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：修理できるのはCUH-2200のみ。ほかの型番は動くうちに売るか、故障時は修理以外の手段を考えることになります</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>受付終了：</span>CUH-1000〜2100（2020年12月〜2023年10月）、PS4 ProのCUH-7000〜7200（2023年1月〜2025年11月）。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>受付継続：</span>CUH-2200シリーズは一覧に記載がありません。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>買取価格：</span>駿河屋のジェット・ブラック本体は型番別に10,000〜16,000円。CUH-2200のメイン基板交換（16,500円）は買取価格（14,000円）を上回ります。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>受付状況・料金・買取価格は変わることがあります。判断の直前に各社の公式ページでご確認ください。</p>
        </section>

        <section className="mb-12" id="end">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />型番別のアフターサービス受付終了日と買取価格</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            SIEの受付終了製品の一覧に記載された日付と、駿河屋の公式買取検索で同じシリーズのジェット・ブラック本体単体（限定版・同梱版を除く）を検索した掲載価格を並べました。CUH-1000とCUH-2000は本体単体の通常版の掲載を確認できなかったため、価格を空欄にしています。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>シリーズ</th><th>種類</th><th>SIEの受付終了日</th><th>駿河屋で確認した型番</th><th>駿河屋 買取価格</th></tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.series}>
                    <td className="font-bold text-sm">{r.series}</td>
                    <td className="text-sm">{r.kind}</td>
                    <td className="text-sm">{r.end}</td>
                    <td className="text-xs">{r.sample ?? '—'}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(r.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SIE_END} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>SIE アフターサービス受付終了製品</a>、<a href={`${SURUGAYA_SEARCH}CUH-2200AB01`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 公式買取検索</a>（各型番で検索・いずれも{SURVEY_DATE}確認）。駿河屋の価格は付属品・状態による減額前の掲載価格です。
          </p>
          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>一覧から分かること</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>受付期間は型番ごとに異なる：</span>同じ薄型でもCUH-2000は2022年12月22日、CUH-2100は2023年10月31日に終了し、CUH-2200は継続しています。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>新しい型番ほど買取価格が高い傾向：</span>通常モデルはCUH-1100の10,000円からCUH-2200の14,000円（CUH-1200とCUH-2100は同じ13,000円）、ProはCUH-7000の13,000円からCUH-7200の16,000円まで、おおむね型番が新しいほど高くなっていました。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>受付終了済みでも値段はついている：</span>受付を終えたCUH-7200も16,000円で掲載されており、動作品であれば買取の対象です。</li>
            </ul>
          </div>
        </section>

        <section className="mb-12" id="fee">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />PS4の修理料金（SIE公式・2026年3月現在）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>修理内容</th><th>オンライン修理</th><th>オンライン修理以外</th></tr></thead>
              <tbody>
                {fees.map((f) => (
                  <tr key={f.part}>
                    <td className="font-bold text-sm">{f.part}</td>
                    <td className="text-sm">{yen(f.online)}</td>
                    <td className="text-sm">{yen(f.other)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
            料金は税込で、検査料・部品代・送料を含みます。PS4 Proも同じ料金です。SIEによると、修理品は着払いで送り、修理後は元払いで返送されます。修理代金が10,500円（税込）以上になる場合は、メール／SMSで見積もりの連絡があります。オンライン修理以外のハードディスク交換は容量の区別なく11,550円です。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SIE_REPAIR} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>SIE 修理サービス（修理料金）</a>（{SURVEY_DATE}確認）。Switch・PS5を含む修理料金の比較は<Link href="/knowledge/repair/" style={linkStyle}>ゲーム機の修理料金</Link>にまとめています。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />修理か売却かの判断の目安</h2>
          <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>CUH-2200で故障した場合：</span>電源ブロック（6,600円）やディスクドライブ（7,150円）の修理は買取価格（14,000円）より安く、修理して使い続ける選択肢があります。メイン基板の交換（16,500円）は買取価格を上回ります。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>受付終了済みの型番の場合：</span>メーカー修理は受けられません。動作するうちに売る場合は上の表の価格が目安になります。動作しない場合は<Link href="/knowledge/broken/" style={linkStyle}>壊れたゲーム機の買取</Link>をご覧ください。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>売る前の準備：</span>データのバックアップと初期化、「いつも使うPS4」の登録解除が必要です。手順は<Link href="/knowledge/data-delete/" style={linkStyle}>データ消去の方法</Link>で解説しています。</li>
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
            <Link href="/hardware/ps4/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS4買取ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS4本体の買取価格</p>
            </Link>
            <Link href="/knowledge/switch-lifespan/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switchの寿命</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>バッテリーの劣化と交換費用</p>
            </Link>
            <Link href="/knowledge/ps4-controller/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS4コントローラーの買取価格</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>DUALSHOCK 4のカラー別価格</p>
            </Link>
          </div>
        </section>
      </div>

      <AuthorBox />
    </>
  );
}
