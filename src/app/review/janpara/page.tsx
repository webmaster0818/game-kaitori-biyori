import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'じゃんぱらのゲーム機買取の評判・口コミ｜本体特化の実力と火曜5%アップを検証',
  description:
    'じゃんぱらのゲーム機本体買取を検証しています。Switch 2未使用47,000円・PS5 46,000円等の公開上限価格（2026年7月7日確認）、毎週火曜の中古5%アップ（店頭限定）、ソフマップ完全子会社＝ビックカメラグループという資本関係まで公式情報で解説します。',
  keywords: ['じゃんぱら 買取 評判', 'じゃんぱら ゲーム機 買取', 'じゃんぱら Switch 買取', 'じゃんぱら 宅配買取', 'じゃんじゃん火曜日'],
  openGraph: {
    images: ['/og.png'],
    title: 'じゃんぱらのゲーム機買取の評判・口コミ｜検証',
    description: 'ゲーム機本体の買取に特化したじゃんぱらを、公開上限価格と公式情報にもとづいて検証しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: 'ゲーム機「本体」に強い買取専門店', description: 'PC・スマホ・デジタル機器の買取販売店を61店舗展開する専門店で、ゲーム関連ではSwitch 2・PS5等の本体買取が主力です。当サイトの実測（2026年7月7日）では、Switch 2未使用 上限47,000円・PS5（CFI-1000A01）未使用46,000円等が公開されていました。ソフトの価格掲載例は確認できなかったため、実質的には本体の売却先といえます。' },
  { title: 'ソフマップの完全子会社（ビックカメラグループ）', description: '2021年12月にソフマップが全株式を取得し、完全子会社となりました。ドスパラ系と紹介している古い記事もありますが、現在は該当しません（前身は旧サードウェーブエクスチェンジ）。売上高198億円（2025年8月期）・全国61店舗の規模を持つ、大手グループの企業です。' },
  { title: '未使用/中古別の上限価格を事前公開', description: '公式の買取検索で未使用・中古それぞれの上限価格が公開されており、セルフ見積→買取申請という流れのため、発送前に金額の目安を把握できます。店頭では平均60分で査定が完了し、その場で現金で支払われます。' },
  { title: '毎週火曜は中古の最終査定額5%アップ（常設）', description: '「じゃんじゃん火曜日」として毎週火曜に中古品の最終査定額が5%アップする常設キャンペーンがあります。ただし、店頭限定（宅配は対象外）・会員限定・新品は対象外のため、店舗に来店できる方向けの特典です。' },
];

const dislikeReasons = [
  { reason: '査定が細かく厳しめという口コミ傾向', fact: '上限価格は「完品・無傷」が前提と公式に定義されており、微細な傷や付属品の欠品（外箱・保証書も付属品として扱われます）で減額されます。減額率は公開されていないため、箱なし・傷ありの場合は上限価格から大きく下がることを想定しておくことをおすすめします。状態の良い本体ほど、じゃんぱらでの売却に適しています。' },
  { reason: '宅配の振込日数が明記されていない', fact: '宅配では査定完了まで1週間前後かかる場合があり、査定確定後の振込までの具体的な日数は公式ページで確認できませんでした。お急ぎの場合は、店頭買取（平均60分・その場で現金払い）が確実です。受取方法は、銀行振込のほかセブン銀行ATMでの受取（10万円以下）も選べます。' },
  { reason: 'ゲームソフトの売却先には適さない', fact: '公式FAQの対象カテゴリにゲームソフトの記載はあるものの、買取検索では価格の掲載例を確認できませんでした。ソフトはゲオ・ブックオフ等の買取価格を公表している店舗で売却し、じゃんぱらは本体の売却に利用する使い分けをおすすめします。' },
];

const faqs = [
  { q: 'じゃんぱらはゲームソフトも買い取ってくれますか？', a: '公式FAQの対象カテゴリにゲーム関連の記載はありますが、買取価格検索でソフトの掲載例は確認できませんでした（2026年7月7日時点）。価格が公開されているのはSwitch 2・PS5等の本体類です。ソフトは公表価格のあるゲオ・ブックオフ・駿河屋等との比較をおすすめします。' },
  { q: '買取価格はどこで確認できますか？', a: '公式の買取検索（buy.janpara.co.jp）で未使用・中古別の上限価格が公開されています。当サイト確認時点（2026年7月7日）ではSwitch 2（BEE-S-KB6CA）未使用47,000円・PS5（CFI-1000A01）未使用46,000円・Switch有機EL ホワイト未使用36,000円等でした。上限は完品・無傷前提の価格です。' },
  { q: '「じゃんじゃん火曜日」とは何ですか？', a: '毎週火曜日に中古品の最終査定額が5%アップする常設キャンペーンです。ただし店頭限定（宅配買取は対象外）・会員限定・新品（未使用品）は対象外・他キャンペーンと併用不可という条件があります（2026年7月7日公式確認）。店舗に持ち込める方は、火曜日の利用をおすすめします。' },
  { q: '宅配買取の送料・返送料はかかりますか？', a: '発送はコンビニ/PUDOからのQR発送または自宅回収で、送料の顧客負担はありません。査定不成立時の返送も会社負担です。ただし買取対象外品（規定外の品）の返送のみ着払い＝顧客負担になります。梱包は3箱まで、1箱あたり200cm以内/30kg以下です。' },
  { q: '本人確認はどうやりますか？', a: '宅配では、会員登録と事前のオンラインeKYC（書類と顔の撮影、またはマイナンバーカードのIC読取）が必須です。店頭では、運転免許証等の本人確認書類の原本1点（コピー不可）が必要です。18歳未満の方は、保護者の同意書と電話確認が必要です。' },
  { q: 'じゃんぱらとソフマップはどう違いますか？', a: 'じゃんぱらは2021年12月からソフマップの完全子会社で、同じビックカメラグループです。じゃんぱらは本体・デジタル機器に特化し、店頭61店舗と火曜日の5%アップに強みがあります。ソフマップ（ラクウル）は、ゲーム約2.9万件の価格公開とキャンセル時の返送無料に強みがあります。本体を売却する際は、両社の公開価格を比較することをおすすめします。' },
];

export default function JanparaReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "じゃんぱらのゲーム機買取の評判・口コミと火曜5%アップを検証", "datePublished": "2026-07-07", "dateModified": "2026-07-07", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較している編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'じゃんぱら' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>本体特化・61店舗</span>
            <span className="tag-pill text-xs" style={{ background: 'rgba(59,130,246,0.2)', color: '#93C5FD' }}>2026年7月7日 更新</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            じゃんぱらのゲーム機買取<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>本体特化の実力と火曜5%を検証</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            じゃんぱらは、PC・スマホ・デジタル機器の買取専門店です（全国61店舗・ソフマップの完全子会社）。Switch 2やPS5などゲーム機本体の上限価格を未使用/中古別に公開しており、毎週火曜日は店頭での中古品の査定額が5%アップします。当サイトでは、査定基準の厳しさなどの注意点も含め、公式情報（2026年7月7日確認）にもとづいて整理しました。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://buy.janpara.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
              公式サイトで買取価格を見る
            </a>
            <Link href="/" className="btn-outline py-2.5 px-6" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}>
              ランキングに戻る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Conclusion */}
        <section className="mb-12">
          <div className="glass-card p-6" style={{ borderLeft: '4px solid var(--color-electric-green)' }}>
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>状態の良いゲーム機本体の売却に適した店舗</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              じゃんぱらは<strong>ゲーム機本体の売却に適した店舗</strong>です。当サイトの実測ではSwitch 2未使用 上限47,000円・PS5未使用46,000円等が公開されており（2026年7月7日）、店頭では平均60分で現金化でき、<strong>毎週火曜日は中古品の査定額が5%アップ（店頭限定）</strong>します。一方、査定は「完品・無傷」を基準とした細かいもので、外箱・保証書の欠品も減額の対象です。ソフトの価格掲載は確認できないため、ソフトはゲオ・ブックオフ等の公表価格と<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>公式価格を実測した価格インデックス</Link>で比較し、本体はじゃんぱらと同グループの<Link href="/review/sofmap/" style={{ color: 'var(--color-electric-green)' }}>ソフマップ（ラクウル）</Link>の価格と比較することをおすすめします。
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />じゃんぱらの4つの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Company Info */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />運営会社情報（公式サイトより）</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>運営会社</th><td className="py-2">株式会社じゃんぱら（創立1997年・ソフマップ完全子会社＝ビックカメラグループ）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>本社</th><td className="py-2">東京都千代田区神田須田町2-2-3</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>規模</th><td className="py-2">店舗61・売上高198億円（2025年8月期）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>買取方式</th><td className="py-2">店頭（平均60分・現金）／おまかせ宅配／法人買取（個人向け出張なし）</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>費用</th><td className="py-2">宅配送料 顧客負担なし／査定不成立時の返送 会社負担（買取対象外品のみ着払い）</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：じゃんぱら公式サイト（会社概要・沿革・おまかせ宅配・買取FAQ・eKYCガイド）。2026年7月7日確認</p>
          </div>
        </section>

        {/* 注意点 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />利用前の注意点と対策</h2>
          <div className="space-y-4">
            {dislikeReasons.map((r, i) => (
              <div key={i} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>注意点{i + 1}：{r.reason}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{r.fact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Review Tendency */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />口コミの傾向（レビューサイト調査）</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-electric-green)' }}>好意的な口コミに多い内容</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・査定から支払いまでが早い（店頭はその場で現金払い）</li>
                <li>・人気機種は想定より高い査定額が付いた</li>
                <li>・全国61店舗で持ち込みやすい</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>否定的な口コミに多い内容</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・微細な傷でも減額され査定が厳しい</li>
                <li>・減額の根拠説明が物足りない</li>
                <li>・フリマアプリで売却した方が高かった</li>
              </ul>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※レビューサイト・比較メディアに掲載されている口コミの傾向を当サイトで整理したものです（2026年7月調査）。個別の体験を保証するものではありません。</p>
        </section>

        {/* Recommended */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />おすすめできる方</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・状態の良いSwitch 2・PS5等の本体を売りたい方（完品・無傷ほど有利）</li>
              <li>・店頭で今日中に現金化したい方（平均60分査定）</li>
              <li>・火曜日に店舗へ行ける方（中古5%アップの常設特典）</li>
              <li>・スマホ・PCなどデジタル機器も一緒に売りたい方</li>
            </ul>
            <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
              本体を売却する際は、同グループの<Link href="/review/sofmap/" style={{ color: 'var(--color-electric-green)' }}>ソフマップ（ラクウル）</Link>の公開価格とも比較することをおすすめします。売却時期の判断には、<Link href="/hardware/switch2/" style={{ color: 'var(--color-electric-green)' }}>Switch 2売却ガイド</Link>と<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>価格インデックス（本体実測表）</Link>が参考になります。
            </p>
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
            状態の良い本体の売却は<span style={{ color: 'var(--color-electric-green)' }}>火曜日の店頭</span>がおすすめです
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            未使用/中古別の上限価格を事前に公開しています。毎週火曜日は、中古品の最終査定額が5%アップします（店頭限定）。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://buy.janpara.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              公式サイトで買取価格を見る
            </a>
            <Link href="/" className="btn-outline py-3 px-8" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#CBD5E1' }}>
              他のサービスと比較
            </Link>
          </div>
        </section>

        {/* 関連記事 */}
        <section style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--color-accent-soft-weak)', borderRadius: '12px', borderLeft: '3px solid var(--color-electric-green)' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>関連記事</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/review/sofmap/" style={{ color: 'var(--color-electric-green)' }}>ソフマップ（ラクウル）の評判・口コミ（同グループ）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/switch2/" style={{ color: 'var(--color-electric-green)' }}>Switch 2の売却時期と売却先</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取価格インデックス（本体実測表あり）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/condition-guide/" style={{ color: 'var(--color-electric-green)' }}>状態別ゲーム買取 許容度マップ（箱なし・傷）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/which-is-best/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取業者の用途別おすすめ比較</Link></li>
          </ul>
        </section>

        <AuthorBox />
      </div>
    </>
  );
}
