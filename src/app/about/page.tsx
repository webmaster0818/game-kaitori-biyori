import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '運営者情報・編集方針｜ゲーム買取びより',
  description:
    'ゲーム買取びよりの運営者情報と編集方針。買取価格は各社公式サイトの一次情報を調査日付き・出典付きで掲載し、月次で定点更新しています。情報収集の方法・更新体制・記事の作り方を透明性をもって公開します。',
  openGraph: {
    title: '運営者情報・編集方針｜ゲーム買取びより',
    description: 'ゲーム買取びよりの運営者情報・編集方針・データ収集方法を公開。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const dataPolicy = [
  {
    title: '買取価格は「公式サイトの一次情報」のみ',
    body: '当サイトに掲載するゲームの買取価格は、ブックオフ・ゲオ・駿河屋・レトログ・カイトリワールドなど各社の公式買取ページで実際に確認した値のみを使用します。推測値・他サイトからの転載・架空の価格は一切掲載しません。各価格には「いつ時点・どの店・出典」を明記しています。',
  },
  {
    title: '調査日と出典を必ず明記',
    body: '買取価格やサービス仕様（送料条件・入金日数・キャンセル条件など）は変動するため、各データに調査日を添えています。出典が公式サイトのどのページかをたどれる形で記載し、読者が自分でも一次情報を確認できるようにしています。',
  },
  {
    title: '主要ページは定点更新',
    body: '「高く売れるゲームソフトランキング」など相場性の高いページは、各社公式の買取価格を定期的に再調査して更新しています。古い情報のまま放置せず、料金改定・キャンペーン・新モデル発売などの変化を反映します。',
  },
  {
    title: '業者レビューは公式仕様＋口コミ傾向の両面で',
    body: '各買取サービスのレビューは、公式サイトで確認できる事実（運営会社・古物商許可・料金・ルール）を基礎に、レビューサイトやSNSで見られる口コミの傾向を整理して掲載します。個別の体験談を創作することはありません。',
  },
];

const flow = [
  { step: 1, title: '対策キーワードの検索意図を分析', desc: '読者がそのキーワードで何を知りたいかを整理し、上位サイトの構成を調査して不足している情報を洗い出します。' },
  { step: 2, title: '公式一次情報を調査', desc: '買取各社・メーカー公式・公的機関の情報を確認し、価格・仕様・事実を出典付きで収集します。' },
  { step: 3, title: '記事化・監修', desc: '収集した事実をもとに、ゲーム買取に精通した監修者の視点で読者が判断しやすい形に編集します。' },
  { step: 4, title: '公開後も定期見直し', desc: '公開して終わりにせず、相場やサービス内容の変化に応じて調査日とともに更新します。' },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "AboutPage", "name": "運営者情報・編集方針", "publisher": {"@type": "Organization", "name": "ゲーム買取びより", "url": "https://gamekaitori-biyori.com/"}}) }} />
      <Breadcrumb items={[{ name: '運営者情報・編集方針' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">運営者情報・編集方針</h1>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: '#CBD5E1' }}>
            「ゲーム買取びより」は、ゲームをできるだけ高く・安心して売りたい方のための買取情報メディアです。掲載する買取価格やサービス情報を、公式の一次情報をもとに出典・調査日付きで提供することを編集の基本方針としています。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 運営者情報 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />運営者情報</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>サイト名</th><td className="py-2">ゲーム買取びより</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>運営目的</th><td className="py-2">ゲーム機・ゲームソフトの買取サービスを、公式の一次情報に基づき中立・正確に比較できる環境を提供すること</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>掲載分野</th><td className="py-2">ゲーム買取（宅配・店頭・出張）、ハード/ソフト別買取相場、業者レビュー、売り方ガイド</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>収益について</th><td className="py-2">一部のリンクはアフィリエイトプログラムを利用しています。掲載順位や評価は広告の有無で操作せず、公式情報と編集基準に基づいて決定しています</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>お問い合わせ</th><td className="py-2">掲載内容の誤り・更新のご指摘は<Link href="/content-policy/" style={{ color: 'var(--color-electric-green)' }}>記事制作ポリシー</Link>に沿って随時対応します</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* データ方針 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />データの取り扱い方針</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dataPolicy.map((d) => (
              <div key={d.title} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{d.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{d.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 監修者 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />記事の監修者</h2>
          <div className="glass-card p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shrink-0 border-2" style={{ borderColor: 'var(--color-electric-green)', color: 'var(--color-deep-blue)', background: 'rgba(0, 230, 118, 0.08)' }}>中</div>
              <div className="flex-1">
                <p className="font-bold text-base mb-1" style={{ color: 'var(--color-deep-blue)' }}>中村 大輝<span className="text-xs font-normal ml-2" style={{ color: 'var(--color-navy)', opacity: 0.5 }}>（なかむら だいき）</span></p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-[10px] px-2 py-0.5 rounded-full border" style={{ borderColor: 'var(--color-accent-orange)', color: 'var(--color-accent-orange)' }}>ゲームコレクター歴15年</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full border" style={{ borderColor: 'var(--color-accent-orange)', color: 'var(--color-accent-orange)' }}>レトロゲーム買取査定経験者</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-navy)', opacity: 0.8 }}>
                  15年以上のゲームコレクション経験を持ち、レトロゲームから最新ゲームまで幅広く精通。買取サービスは30社以上を実際に利用・比較してきた経験をもとに、各記事の事実確認と買取の実務的な観点からの監修を担当しています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 記事制作フロー */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />記事制作の4ステップ</h2>
          <div className="space-y-4">
            {flow.map((s) => (
              <div key={s.step} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>{String(s.step).padStart(2, '0')}</div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{s.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card-dark p-8 text-center">
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>編集方針について</h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>記事の評価基準や制作フローの詳細は、記事制作ポリシーで公開しています。</p>
          <Link href="/content-policy/" className="btn-primary py-3 px-8 inline-block">記事制作ポリシーを見る</Link>
        </section>
      </div>
    </>
  );
}
