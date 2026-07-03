import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ハードオフのゲーム買取は安い？評判・口コミ【2026年7月】ジャンクOK・4つの買取方式を検証',
  description:
    'ハードオフのゲーム買取を徹底検証。「安い」と言われる理由（価格表非公開・店舗ごとの査定差）、壊れたゲーム機もOKの公式ジャンク買取、店頭・宅配・出張・オファー買取の4方式の使い分け、東証プライム上場・全国1,000店超の実態を公式情報（2026年7月確認）で解説します。',
  keywords: ['ハードオフ ゲーム買取', 'ハードオフ 買取 評判', 'ハードオフ ジャンク 買取', 'ハードオフ ゲーム 安い', 'ハードオフ 宅配買取'],
  openGraph: {
    title: 'ハードオフのゲーム買取は安い？評判・口コミ【2026年7月】検証',
    description: 'ジャンク買取OK・全国1,000店超のハードオフのゲーム買取を、公式情報と口コミ傾向で徹底検証。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: '全国1,000店超の実店舗網（東証プライム上場）', description: '運営の株式会社ハードオフコーポレーションは東証プライム上場（証券コード2674）。IR資料によればリユース店舗は2025年9月末時点で1,042店（直営462・FC580）と国内最大級で、「近所に店がある」アクセス性が最大の強みです。' },
  { title: '壊れていてもOKの「ジャンク買取」文化', description: '公式FAQに「壊れていてもジャンク品として店頭にて販売しています。喜んで買取させていただきます」と明記。動作しないゲーム機・欠品ソフトなど、他店で断られる品にも値が付く可能性があるのがハードオフらしさです（ジャンク買取は店頭が基本）。' },
  { title: '店頭・宅配・出張・オファーの4方式', description: '公式の買取方式は①店頭（即現金化）②宅配（送料・手数料無料、梱包資材あり）③出張④オファー買取の4つ。オファー買取はアプリ/Webに出品すると全国のハードオフグループ店舗から最大5件の買取オファーが届き、「売る前に値段が分かる」仕組みです。' },
  { title: '査定はデータベース＋店舗の地域性で変動', description: '公式FAQによれば、査定はグループ内の商品データベースを基準にスタッフが1点ずつ目視確認し、店舗の地域性（売れやすい・売れにくい）も価格の変動要因になります。つまり同じ品でも店舗によって査定が変わり得る仕組みです。' },
];

const dislikeReasons = [
  { reason: '「安い」と言われがち', fact: 'ゲームの買取価格表は公式に公開されておらず、実際に査定に出すまで金額が分かりません。人気タイトルや高額品では「専門店より安かった」という口コミ傾向が複数のレビューサイトで見られます。高く売りたい品は、当サイトの毎週実測の価格インデックスでゲオ・ブックオフ等の公表価格を確認してから持ち込むのが確実です。' },
  { reason: '店舗・地域で査定に差がある', fact: '公式FAQが「店舗の地域性も価格変動の要因」と明記しているとおり、店舗による査定差は仕組み上のものです。時間があれば複数店舗・複数社での相見積もり（オファー買取の活用も含む）が有効です。' },
  { reason: '電話での事前査定は基本不可', fact: '公式FAQで電話査定は基本的に行っていないとされています。事前に金額を知りたい場合は、アプリの「オファー買取」で写真出品して見積もりを集める方法が公式の代替手段です。' },
];

const faqs = [
  { q: 'ハードオフのゲーム買取は安いですか？', a: '品物によります。ハードオフは買取価格表を公開しておらず、グループのデータベースと店舗の地域性で査定額が決まる仕組みのため、人気タイトルはゲーム専門店やゲオ・ブックオフの公表価格より安くなる場合があります。一方、他店で断られるジャンク品・古い機種に値が付くのは強みです。人気作は当サイトの価格インデックスで相場を確認してから売り先を選ぶのがおすすめです。' },
  { q: '壊れたゲーム機でも本当に買い取ってもらえますか？', a: '公式FAQに「壊れていてもジャンク品として店頭にて販売しています。喜んで買取させていただきます」と明記されています。ジャンク品の買取・販売はハードオフの看板文化です（ジャンクは店頭買取が基本で、販売時の保証対象外という扱い）。' },
  { q: 'ハードオフに宅配買取はありますか？', a: 'あります。公式の宅配買取は送料・手数料が会社負担で、梱包資材の発送サービスもあります。ゲームは買取強化カテゴリに含まれています。査定日数やキャンセル時の返送条件は公式ページに明記がないため、申込前に確認することをおすすめします。' },
  { q: 'オファー買取とは何ですか？', a: '公式アプリ/Webに売りたい品を出品すると、全国のハードオフグループ店舗が査定して最大5件の買取オファー（見積もり）が届く仕組みです。金額を承認すると自宅集荷され、最終査定の確定後2〜4営業日で入金されます。送料は無料です（取扱対象外品などは着払いで返却）。「売る前に値段が分かる」点で、価格表非公開という弱点を補えます。' },
  { q: '古物商許可は取得していますか？', a: '株式会社ハードオフコーポレーションは新潟県公安委員会の古物商許可（許可番号461060001043）を取得している正規のリユース事業者です。東証プライム上場企業（証券コード2674）でもあります。' },
  { q: 'レトロゲームを売るならハードオフとレトログどちらがいいですか？', a: '「近所の店で今日現金化したい・ジャンクも一緒に処分したい」ならハードオフ、「レア品を含むレトロゲームの相場を事前に確認して宅配で送りたい」なら機種別の買取価格表を公開しているレトログが向いています。プレミア品は複数社での比較が確実です。' },
];

export default function HardoffReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ハードオフのゲーム買取は安い？評判・口コミとジャンク買取・4つの買取方式を徹底検証", "datePublished": "2026-07-03", "dateModified": "2026-07-03", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ハードオフ' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>店頭・ジャンクOK</span>
            <span className="tag-pill text-xs" style={{ background: 'rgba(59,130,246,0.2)', color: '#93C5FD' }}>2026年7月3日 更新</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ハードオフのゲーム買取<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>「安い？」の実態とジャンク買取を検証</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            全国1,000店超・東証プライム上場のリユース最大手ハードオフ。「壊れていても買い取ってくれる」文化で知られる一方、「査定が安い」という声もあります。公式情報（会社概要・FAQ・IR資料）と口コミ傾向をもとに、ゲーム買取の実態と賢い使い方を整理しました。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.hardoff.co.jp/sell/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
              公式サイトで買取方法を見る
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
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>結論：「ジャンク・まとめ処分」に最強、人気作は相場確認してから</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              ハードオフは、壊れたゲーム機や古い周辺機器まで「ジャンク」として買い取る公式方針を持つ、全国1,000店超の最大手です。近所の店で即日現金化でき、他店で断られる品の受け皿になります。一方で買取価格表は非公開で、査定はデータベース＋店舗の地域性で変動するため、<strong>人気タイトルは専門店やゲオ・ブックオフの公表価格より安くなることがあります</strong>。「動くか分からない品・大量処分」はハードオフ、「人気作・プレミア品」は<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>毎週実測の価格インデックス</Link>で相場を見てから売り先を選ぶのが賢い使い分けです。
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ハードオフのゲーム買取 4つの特徴</h2>
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />運営会社情報（公式サイト・IR資料より）</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>運営会社</th><td className="py-2">株式会社ハードオフコーポレーション（東証プライム・証券コード2674）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>本社</th><td className="py-2">新潟県新発田市新栄町3丁目1番13号</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>店舗数</th><td className="py-2">リユース店舗1,042店（2025年9月末時点・直営462/FC580。IR中間決算資料より）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>古物商許可</th><td className="py-2">新潟県公安委員会 許可番号461060001043</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>買取方式</th><td className="py-2">店頭買取／宅配買取／出張買取／オファー買取（アプリ・Web）</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ハードオフ公式サイト（会社概要・売りたい・FAQ）、2026年3月期中間決算説明資料。2026年7月3日確認</p>
          </div>
        </section>

        {/* 安いと言われる理由 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />「ハードオフは安い」と言われる理由と対策</h2>
          <div className="space-y-4">
            {dislikeReasons.map((r, i) => (
              <div key={i} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>理由{i + 1}：{r.reason}</h3>
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
                <li>・レトロゲームや古い機種にも値が付いた</li>
                <li>・他店で買取を断られた品を引き取ってもらえた</li>
                <li>・店頭ですぐ現金化できて手軽</li>
                <li>・ジャンクまとめ売りで処分と換金が同時にできた</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>否定的な口コミに多い内容</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・人気タイトルの査定が専門店より安かった</li>
                <li>・店舗や地域によって査定額に差があった</li>
                <li>・事前に金額が分からないまま持ち込む必要がある</li>
              </ul>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※みん評（口コミ130件）等のレビューサイト・比較メディアに掲載されている口コミの傾向を当サイトで整理したものです（2026年7月調査）。個別の体験を保証するものではありません。</p>
        </section>

        {/* Recommended */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />こんな方におすすめ</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・壊れた・動作未確認のゲーム機やソフトをまとめて処分したい方</li>
              <li>・近所の店舗で今日中に現金化したい方</li>
              <li>・引っ越し・大掃除でゲーム以外の不用品も一緒に売りたい方</li>
              <li>・売る前に金額を知りたい方（オファー買取の写真出品を活用）</li>
            </ul>
            <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
              逆に、人気タイトル・プレミア品を1円でも高く売りたい方は、<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>買取価格インデックス</Link>で公表価格のある店と比較するか、<Link href="/review/retrog/" style={{ color: 'var(--color-electric-green)' }}>レトロ専門のレトログ</Link>・<Link href="/review/surugaya/" style={{ color: 'var(--color-electric-green)' }}>駿河屋</Link>との相見積もりをおすすめします。
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
            ジャンクも動作品も、<span style={{ color: 'var(--color-electric-green)' }}>まとめて</span>売るなら
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            全国1,000店超の店頭買取＋宅配・出張・オファー買取。壊れていても買取OKが公式方針です。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.hardoff.co.jp/sell/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              公式サイトで買取方法を見る
            </a>
            <Link href="/" className="btn-outline py-3 px-8" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#CBD5E1' }}>
              他のサービスと比較
            </Link>
          </div>
        </section>

        {/* 関連記事 */}
        <section style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(0,230,118,0.05)', borderRadius: '12px', borderLeft: '3px solid var(--color-electric-green)' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>関連記事</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/review/retrog/" style={{ color: 'var(--color-electric-green)' }}>レトログの評判・口コミ（レトロ専門・価格表公開）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取価格インデックス（今どこが一番高い？）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/condition-guide/" style={{ color: 'var(--color-electric-green)' }}>状態別ゲーム買取 許容度マップ（箱なし・傷・ジャンク）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/software/retro-sell-guide/" style={{ color: 'var(--color-electric-green)' }}>実家のレトロゲームを売るなら？</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/which-is-best/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取はどこがいい？用途別おすすめ比較</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/review/bookoff/" style={{ color: 'var(--color-electric-green)' }}>ブックオフのゲーム買取は安い？評判を検証</Link></li>
          </ul>
        </section>

        <AuthorBox />
      </div>
    </>
  );
}
