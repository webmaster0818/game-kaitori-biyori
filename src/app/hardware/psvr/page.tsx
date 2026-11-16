import FuruichiCta from '@/components/FuruichiCta';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = 'PSVR買取価格｜初代は型番別に4,000〜9,900円、PS VR2は22,000円（駿河屋）【2026年11月16日実測】';
const DESCRIPTION =
  'PSVRの買取価格を駿河屋の公式買取検索で2026年11月16日に確認しました。初代はCUHJ-16000が4,000円、Camera同梱版CUH-ZVR2が7,500円、PS VR2は22,000円です。SIE公式の修理受付の状況（CUH-ZVR1は2023年12月20日に終了）も掲載しています。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['PSVR 買取', 'PSVR 買取価格', 'PlayStation VR 買取', 'PS VR2 買取', 'CUH-ZVR2 買取'],
  alternates: { canonical: 'https://gamekaitori-biyori.com/hardware/psvr/' },
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
const SURUGAYA_SEARCH = 'https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=';
const SURUGAYA_RULES = 'https://www.suruga-ya.jp/man/hyou/kaitorihin.html';
const SIE_END = 'https://www.playstation.com/ja-jp/support/hardware/repairs-no-longer-available/';
const SIE_REPAIR = 'https://www.playstation.com/ja-jp/support/hardware/repairs/';

// 駿河屋 公式買取検索の掲載価格（国内版・2026-11-16）。search は検索に使った語
const psvr1 = [
  { name: 'PlayStation VR［Camera同梱版］CUH-ZVR2', code: 'CUHJ-16003', price: 7500, search: 'CUH-ZVR2' },
  { name: 'PlayStation VR［Camera同梱版］（初期型）', code: 'CUHJ-16001', price: 5500, search: 'CUH-ZVR1' },
  { name: 'PlayStation VR（初期型・Camera非同梱）', code: 'CUHJ-16000', price: 4000, search: 'CUHJ-16000' },
  { name: 'PlayStation VR Days of Play Special Pack', code: 'CUHJ-16004', price: 9900, search: 'CUHJ-16004' },
  { name: 'PlayStation VR “PlayStation VR WORLDS” 特典封入版', code: 'CUHJ-16012', price: 4700, search: 'CUH-ZVR2' },
  { name: 'VRヘッドセット 単品［CUH-ZVR2］', code: 'CUH-ZVR2', price: 1200, search: 'CUH-ZVR2' },
];
const psvr2 = [
  { name: 'PlayStation VR2', code: 'CFIJ-17000', price: 22000 },
  { name: 'PlayStation VR2 Horizon Call of the Mountain 同梱版', code: 'CFIJ-17001', price: 22000 },
  { name: 'PlayStation VR2 PCアダプター', code: 'CFI-ZVP1J', price: 3900 },
  { name: 'PlayStation VR2 Sense コントローラー充電スタンド', code: 'CFI-ZSS1J', price: 1300 },
];

const yen = (v: number) => `${v.toLocaleString('ja-JP')}円`;
const linkStyle = { color: 'var(--color-electric-green)', fontWeight: 700 } as const;

const faqs = [
  { q: 'PSVR（初代）の買取価格はいくらですか？', a: '2026年11月16日に駿河屋の公式買取検索で確認した国内版の掲載価格は、Camera同梱版のCUH-ZVR2（CUHJ-16003）が7,500円、初期型Camera同梱版（CUHJ-16001）が5,500円、初期型のCamera非同梱版（CUHJ-16000）が4,000円でした。Days of Play Special Pack（CUHJ-16004）は9,900円です。' },
  { q: 'PS VR2の買取価格はいくらですか？', a: '同日の駿河屋の掲載価格は、PlayStation VR2（CFIJ-17000）とHorizon Call of the Mountain同梱版（CFIJ-17001）がともに22,000円でした。PCアダプター（CFI-ZVP1J）は3,900円です。' },
  { q: '初代PSVRはまだ修理できますか？', a: 'SIEのアフターサービス受付終了製品の一覧では、PlayStation VRのCUH-ZVR1は2023年12月20日に受付を終了したと記載されています。同ページでは、専用の周辺機器も同様に受付を終了したとしています。CUH-ZVR2は同一覧に記載がありませんが、SIEの修理料金表にも初代PSVRの項目はありませんでした（2026年11月16日確認）。' },
  { q: 'ヘッドセットだけでも売れますか？', a: '駿河屋ではCUH-ZVR2のVRヘッドセット単品が1,200円で掲載されていました。セット品（7,500円）と比べると大きく下がるため、プロセッサーユニットやケーブル類がそろっている場合はセットで査定に出すほうが有利です。' },
  { q: '海外版のPSVRも買い取ってもらえますか？', a: '駿河屋の検索結果には北米版（1,500円）やEU版（2,500円）なども掲載されていましたが、国内版より低い価格でした。海外版は店舗によって扱いが異なるため、事前に各店の買取条件をご確認ください。' },
];

export default function PsvrPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'PSVR買取価格｜初代は型番別に4,000〜9,900円、PS VR2は22,000円（駿河屋）', datePublished: '2026-11-16', dateModified: '2026-11-16', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'PSVR 買取価格' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            PSVR・PS VR2の買取価格<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>初代の型番別価格とPS VR2を駿河屋の公式ページで確認【{SURVEY_DATE}実測】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            初代PlayStation VRの買取価格は、{SURVEY_DATE}の駿河屋の公式買取検索で国内版のセット品が4,000〜9,900円、PS VR2は22,000円でした。初代のCUH-ZVR1はSIEのアフターサービスが終了しています。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：{SURVEY_DATE}（価格は同日に駿河屋の公式買取検索で確認）</p>
        </div>
        <FuruichiCta variant="strip" />
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：初代は後期型のCamera同梱版が7,500円、PS VR2は22,000円です</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>初代PSVR：</span>CUH-ZVR2のCamera同梱版7,500円、初期型Camera同梱版5,500円、初期型Camera非同梱版4,000円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>PS VR2：</span>通常版・Horizon同梱版ともに22,000円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>修理：</span>初代のCUH-ZVR1はSIEのアフターサービスが2023年12月20日に終了しています。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>掲載価格は付属品・状態による減額前の金額で、査定額を保証するものではありません。売却の直前に公式ページでご確認ください。</p>
        </section>

        <section className="mb-12" id="psvr1">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />初代PSVRの買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            駿河屋の公式買取検索で型番を検索し、国内版の掲載価格を記録しました。「メールにてお見積」の表示だった商品は載せていません。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>商品</th><th>型番</th><th>駿河屋 買取価格</th><th>出典</th></tr>
              </thead>
              <tbody>
                {psvr1.map((b) => (
                  <tr key={b.code + b.name}>
                    <td className="font-bold text-sm">{b.name}</td>
                    <td className="text-sm">{b.code}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(b.price)}</td>
                    <td className="text-sm"><a href={`${SURUGAYA_SEARCH}${encodeURIComponent(b.search)}`} target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>駿河屋 買取検索</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>実測から分かること</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>後期型（CUH-ZVR2）は初期型より2,000円高い：</span>Camera同梱版同士で比べると、CUH-ZVR2の7,500円に対し、初期型は5,500円でした。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>Camera同梱かどうかで1,500円の差：</span>初期型ではCamera同梱版5,500円、非同梱版4,000円でした。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ヘッドセット単品は1,200円：</span>セット品の6分の1程度です。付属品をそろえて売るほうが有利です。</li>
            </ul>
          </div>
        </section>

        <section className="mb-12" id="psvr2">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />PS VR2の買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>商品</th><th>型番</th><th>駿河屋 買取価格</th></tr>
              </thead>
              <tbody>
                {psvr2.map((b) => (
                  <tr key={b.code}>
                    <td className="font-bold text-sm">{b.name}</td>
                    <td className="text-sm">{b.code}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(b.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
            PS VR2は、通常版とHorizon Call of the Mountain同梱版が同じ22,000円でした。SIEの修理料金表（2026年3月現在）では、PS VR2のVRヘッドセットの交換が37,400円、部品交換が16,500円、コントローラーの交換／補充が11,000円です。ヘッドセットの交換費用が買取価格を上回るため、故障した場合は修理と売却のどちらが得かを比べて判断することをおすすめします。PS5本体と合わせて売る場合は<Link href="/hardware/ps5/" style={linkStyle}>PS5の買取</Link>もご覧ください。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('PlayStation VR2')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 公式買取検索</a>、<a href={SIE_REPAIR} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>SIE 修理サービス（修理料金）</a>（いずれも{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12" id="support">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />修理受付の状況（SIE公式）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>製品</th><th>SIE公式の記載</th></tr></thead>
              <tbody>
                <tr><td className="font-bold text-sm">PlayStation VR CUH-ZVR1</td><td className="text-sm">アフターサービス受付終了（2023年12月20日）。専用の周辺機器も同様に受付終了</td></tr>
                <tr><td className="font-bold text-sm">PlayStation VR CUH-ZVR2</td><td className="text-sm">受付終了製品の一覧に記載なし。修理料金表にも初代PSVRの項目なし</td></tr>
                <tr><td className="font-bold text-sm">PlayStation VR2</td><td className="text-sm">修理料金表に掲載あり（VRヘッドセットの交換37,400円など・2026年3月現在）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SIE_END} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>SIE アフターサービス受付終了製品</a>、<a href={SIE_REPAIR} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>SIE 修理サービス</a>（いずれも{SURVEY_DATE}確認）。CUH-ZVR2の修理可否は、SIEのサポート窓口でご確認ください。
          </p>
        </section>

        <section className="mb-12" id="rules">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />査定で減額される条件（駿河屋の公式記載）</h2>
          <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
            駿河屋の買取基準では、箱（ケース）・説明書・動作に必要な付属品機器の欠品は大幅な減額対象です。本体・付属品・パッケージの傷み・汚れ・日焼けも減額対象で、程度により買取不可となります。動作不良品や、コントローラー・ケーブル類が欠品しているゲーム機は一部の商品のみ買取可能とされています。PSVRはヘッドセット・プロセッサーユニット・接続ケーブル類の点数が多いため、売る前にそろっているかを確認してください。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SURUGAYA_RULES} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 減額基準リスト</a>（{SURVEY_DATE}確認）。
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
            <Link href="/hardware/ps4/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS4買取ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS4本体の買取価格</p>
            </Link>
            <Link href="/hardware/ps5/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS5買取ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS5本体の買取価格</p>
            </Link>
            <Link href="/knowledge/repair/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲーム機の修理料金</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>修理代と買取価格の比較</p>
            </Link>
          </div>
        </section>
      </div>

      <AuthorBox />
    </>
  );
}
