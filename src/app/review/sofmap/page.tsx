import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ソフマップ買取（ラクウル）の評判・口コミ【2026年8月】送料・返送料無料の実態と注意点',
  description:
    'ソフマップの宅配買取「ラクウル」を徹底検証。集荷送料・査定料・キャンセル返送料すべて無料、Switch 2本体40,000円等の実測掲載例（2026年7月7日確認）、銀行振込手数料250円の注意点、初回+500円・誕生月5%のキャンペーンまで公式情報で解説します。',
  keywords: ['ソフマップ 買取 評判', 'ラクウル 評判', 'ソフマップ ゲーム買取', 'ラクウル 送料', 'ソフマップ 宅配買取'],
  openGraph: {
    title: 'ソフマップ買取（ラクウル）の評判・口コミ【2026年8月】検証',
    description: '送料・返送料無料のラクウルを公式情報と実測掲載例で徹底検証。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: 'ビックカメラグループの安心感', description: '運営の株式会社ソフマップは2010年からビックカメラの完全子会社（資本金1億円・店舗22）。1982年創業の老舗PC・ゲーム販売店で、2018年に買取アプリ「ラクウル」をリリースしました。大手家電グループ傘下という信頼性が最大の下支えです。' },
  { title: '送料・査定料・キャンセル返送料がすべて無料', description: '宅配買取は集荷送料・査定料に加えて、キャンセル時の返送料まで無料と公式FAQに明記されています。返送料が着払い（利用者負担）の業者も多い中、「査定額に納得できなければタダで戻せる」のは比較検討派に大きなメリットです。' },
  { title: '買取価格の事前公開（ゲーム約2.9万件掲載)', description: '公式の買取価格検索でゲームカテゴリ28,822件の上限価格が公開されています（2026年7月7日確認）。当サイト実測ではNintendo Switch 2本体 上限40,000円・PS5 Pro 83,000円・マリオカート ワールド5,700円等が掲載されており、送る前に金額の目安を確認できます。' },
  { title: '3つの集荷スタイルとeKYC完結', description: '「箱なし集荷（梱包箱を持ってきてもらう）」「箱あり集荷」「自分で発送」の3方式で、梱包箱は無料。本人確認はマイナンバーカード読取か自撮りのeKYCでオンライン完結します（18歳以上・国内居住者）。' },
];

const dislikeReasons = [
  { reason: '銀行振込に手数料250円/回がかかる', fact: '買取代金はいったん「ウォレット」に入り、銀行口座への引き出しには手数料250円/回がかかります（残高250円以下は引出不可）。ビック買取マネーや店舗での現金受取なら手数料無料なので、ビックカメラ・ソフマップで買い物する方はポイント系での受取が実質お得です。' },
  { reason: '振込までの日数に公式の保証がない', fact: '引き出しの所要日数は「通常約2日程度・休日を挟むと4〜5日」という案内ベースで、確定的な保証記載はありません。急ぎで現金が必要な方は店頭買取（22店舗）の利用が確実です。' },
  { reason: '減額率の数値は非公開', fact: '箱・説明書・ケーブル欠品で減額、コントローラー欠品等で大幅減額と公式に明記されていますが、具体的な減額率は非公開です。欠品がある場合は上限価格から下がる前提で見積もりましょう。' },
];

const faqs = [
  { q: 'ラクウルの宅配買取は本当に無料ですか？', a: 'はい。集荷送料・査定料・キャンセル時の返送料まですべて無料と公式FAQに明記されています（2026年7月7日確認）。梱包箱の送付も無料です。ただし買取代金を銀行振込で受け取る場合のみ手数料250円/回がかかります。' },
  { q: '買取価格は事前に分かりますか？', a: '公式サイトの買取価格検索（raku-uru.sofmap.com）でゲーム約2.9万件の上限価格が公開されています。当サイト確認時点（2026年7月7日）ではSwitch 2本体 上限40,000円・PS5（ディスク搭載）52,000円等が掲載されていました。上限価格は完品・良品前提で変動するため、参考値としてご覧ください。' },
  { q: '本人確認はどうやりますか？', a: 'オンラインのeKYC（マイナンバーカードのIC読取、または書類+自撮り撮影）で完結します。対応書類はマイナンバーカード・運転免許証・運転経歴証明書・在留カード・パスポートです。' },
  { q: 'キャンペーンはありますか？', a: '初回の宅配買取で+500円（店頭・出張は対象外）、誕生月は宅配買取が5%増額（月内何度でも）が公式に案内されています。また2026年8月7日の確認では、ゲーム機本体・ゲームソフトの高額買取キャンペーンページも公式に掲載されています。対象・条件は時期で変わるため公式キャンペーンページでご確認ください。' },
  { q: '振込までどのくらいかかりますか？', a: '査定承認後、ウォレットから銀行口座への引き出しは通常約2日程度（休日を挟むと4〜5日）が目安とされていますが、公式に日数の保証はありません。お急ぎの場合は全国22店舗での店頭買取なら即日現金化できます。' },
  { q: 'ソフマップとじゃんぱらの関係は？', a: '実は同一グループです。じゃんぱらは2021年12月にソフマップが全株式を取得した完全子会社で、どちらもビックカメラグループに属します。ゲーム機本体の売却先として比較する際は、この資本関係も知っておくと良いでしょう。' },
];

export default function SofmapReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ソフマップ買取（ラクウル）の評判・口コミと送料無料の実態を徹底検証", "datePublished": "2026-07-07", "dateModified": "2026-07-07", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ソフマップ（ラクウル）' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>宅配・返送料無料</span>
            <span className="tag-pill text-xs" style={{ background: 'rgba(59,130,246,0.2)', color: '#93C5FD' }}>2026年7月7日 更新</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ソフマップ買取（ラクウル）の評判<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>送料・返送料無料の実態を検証</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ビックカメラ傘下の老舗ソフマップが運営する宅配買取「ラクウル」。集荷送料・査定料・キャンセル返送料まで無料で、ゲーム約2.9万件の買取上限価格を事前公開しています。一方で銀行振込には手数料250円がかかるなど、知っておくべき注意点も。公式情報（2026年7月7日確認）で実態を整理しました。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://raku-uru.sofmap.com/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
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
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>結論：「比較しながら売りたい人」に優しい設計、受取方法だけ要注意</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              ラクウルは<strong>キャンセル時の返送料まで無料</strong>なので、「査定額を見てから決めたい」比較検討派が使いやすい宅配買取です。買取上限価格も事前公開されており、当サイト実測ではSwitch 2本体 上限40,000円等を確認しました（2026年7月7日）。注意点は受取方法で、<strong>銀行振込は手数料250円/回</strong>。ビック買取マネー・店頭受取なら無料です。ソフト中心なら公表価格の高い店と、本体なら同グループの<Link href="/review/janpara/" style={{ color: 'var(--color-electric-green)' }}>じゃんぱら</Link>とも比べて、<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>毎週実測の価格インデックス</Link>で相場確認してから送るのが確実です。
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ラクウルの4つの特徴</h2>
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
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>運営会社</th><td className="py-2">株式会社ソフマップ（ビックカメラ完全子会社・資本金1億円）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>本社</th><td className="py-2">東京都千代田区外神田1-16-9</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>店舗数</th><td className="py-2">22店舗（店頭買取対応）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>買取方式</th><td className="py-2">宅配（ラクウル）／店頭／出張（家電・家具、エリア限定）</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>費用</th><td className="py-2">集荷送料・査定料・キャンセル返送料 無料／銀行振込手数料250円/回（ポイント・店頭受取は無料）</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ソフマップ公式サイト（会社概要・沿革・ラクウル買取ガイド/FAQ）。2026年7月7日確認</p>
          </div>
        </section>

        {/* 注意点 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />利用前に知っておきたい注意点と対策</h2>
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
                <li>・ビックカメラグループなので安心して送れた</li>
                <li>・送料も返送料も無料で気軽に試せた</li>
                <li>・思ったより高く売れた（人気本体・新作）</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>否定的な口コミに多い内容</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・繁忙期に宅配査定が1週間以上かかった</li>
                <li>・店頭買取の待ち時間が長い</li>
                <li>・減額の理由が分かりにくい</li>
              </ul>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※レビューサイト・比較メディアに掲載されている口コミの傾向を当サイトで整理したものです（2026年7月調査）。個別の体験を保証するものではありません。</p>
        </section>

        {/* Recommended */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />こんな方におすすめ</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・査定額を見てから売るか決めたい方（キャンセル返送無料）</li>
              <li>・大手グループの宅配買取に安心して送りたい方</li>
              <li>・ビックカメラ/ソフマップで買い物する方（買取マネー受取なら手数料ゼロ＋初回+500円）</li>
              <li>・誕生月が近い方（宅配5%増額を月内何度でも使える）</li>
            </ul>
            <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
              人気ソフトを1本ずつ高く売りたい方は、<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>買取価格インデックス</Link>で公表価格を比較してから売り先を選ぶのがおすすめです。
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
            返送料まで<span style={{ color: 'var(--color-electric-green)' }}>無料</span>だから、まず査定だけでも
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            ゲーム約2.9万件の買取上限価格を事前公開。初回宅配は+500円、誕生月は5%増額です。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://raku-uru.sofmap.com/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              公式サイトで買取価格を見る
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
            <li style={{ marginBottom: '0.5rem' }}><Link href="/review/janpara/" style={{ color: 'var(--color-electric-green)' }}>じゃんぱらの評判・口コミ（同グループ・本体特化）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取価格インデックス（今どこが一番高い？）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/switch2/" style={{ color: 'var(--color-electric-green)' }}>Switch 2を売るならいつ・どこ？</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/which-is-best/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取はどこがいい？用途別おすすめ比較</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/review/geo/" style={{ color: 'var(--color-electric-green)' }}>ゲオのゲーム買取の評判を検証</Link></li>
          </ul>
        </section>

        <AuthorBox />
      </div>
    </>
  );
}
