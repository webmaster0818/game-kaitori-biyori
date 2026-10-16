import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ヒカカク vs ウリエル比較｜ゲーム買取どっちがおすすめ？【2026年】',
  description:
    'ヒカカク！と買取ウリエルを10項目で比較しています。査定方法・対応エリア・査定スピード・買取方法・ゲーム専門度・手数料・口コミ・使いやすさの違いを解説し、一括比較ならヒカカク、出張買取ならウリエルという使い分けの目安もご紹介します。',
  keywords: ['ヒカカク ウリエル 比較', 'ヒカカク 評判', 'ウリエル 買取 口コミ', 'ゲーム買取 おすすめ', 'ヒカカク ウリエル どっち'],
  openGraph: {
    images: ['/og.png'],
    title: 'ヒカカク vs ウリエル比較｜ゲーム買取どっちがおすすめ？【2026年】',
    description: 'ヒカカク！と買取ウリエルを10項目で比較しています。使い分けの目安もご紹介します。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const comparisonItems = [
  { item: '査定方法', hikakaku: '最大20社に一括査定依頼', uriel: '自社の専門査定士が1社で査定', point: 'ヒカカクは複数社比較、ウリエルは丁寧な単独査定' },
  { item: '対応エリア', hikakaku: '全国対応（宅配買取メイン）', uriel: '関東・関西中心（出張買取）、宅配は全国', point: '出張買取はウリエルのエリア限定' },
  { item: '査定スピード', hikakaku: '業者による（1〜5営業日）', uriel: '出張: 即日 / 宅配: 1〜3営業日', point: '即日査定ならウリエルの出張買取' },
  { item: '買取方法', hikakaku: '宅配買取がメイン（業者により異なる）', uriel: '出張買取・宅配買取・店舗買取', point: 'ウリエルは3つの方法から選べる' },
  { item: 'ゲーム専門度', hikakaku: 'ゲーム専門業者も含む20社以上', uriel: '総合買取（ゲーム以外も幅広く対応）', point: 'ゲーム専門業者を探すならヒカカク' },
  { item: '手数料', hikakaku: '利用無料（業者への仲介手数料なし）', uriel: '査定無料・出張無料・送料無料', point: 'どちらも利用者の負担なし' },
  { item: '口コミ・評判', hikakaku: '業者ごとの口コミ・評価を確認できる', uriel: '対面接客の丁寧さに高評価', point: '情報量はヒカカク、接客はウリエル' },
  { item: '使いやすさ', hikakaku: 'Web上で一括査定を申し込める（操作が簡単）', uriel: '電話・Web・LINEから申し込み可', point: '申し込み方法の選択肢はウリエル' },
  { item: 'まとめ売り', hikakaku: '業者によりボーナスあり', uriel: 'ゲーム以外もまとめて売れる', point: '不用品まとめ処分ならウリエル' },
  { item: '価格交渉', hikakaku: '複数社の競争により高値がつきやすい', uriel: '出張買取時にその場で交渉可能', point: 'アプローチが異なる' },
];

const hikakakuFor = [
  '最高値で売りたい人（複数社比較で最高値を狙える）',
  'ゲーム専門の買取業者を見つけたい人',
  '自分のペースでじっくり比較検討したい人',
  '地方在住で近くに店舗がない人',
  '宅配買取メインで手軽に売りたい人',
];

const urielFor = [
  '自宅まで来てほしい人（出張買取対応）',
  'ゲーム以外の不用品もまとめて売りたい人',
  '対面で査定員と相談しながら売りたい人',
  '即日現金化したい人',
  'LINEや電話で気軽に相談したい人',
];

const faqs = [
  { q: 'ヒカカク！とウリエルは、どちらがおすすめですか？', a: '最高値で売りたい場合はヒカカク！（最大20社の一括査定で業者間の競争が生まれます）、手間なく出張で売りたい場合は買取ウリエル（自宅で査定を受け、即日現金化できます）をおすすめします。どちらも無料のため、まずヒカカク！で相場を把握し、ウリエルの出張買取と比較する方法も有効です。' },
  { q: 'ヒカカク！は本当に無料で使えますか？', a: 'はい、無料で利用できます。ヒカカク！は利用者から手数料を受け取っていません。買取業者側がヒカカク！に手数料を支払う仕組みのため、利用者は無料で最大20社の一括査定を利用できます。' },
  { q: 'ウリエルの出張買取はどのエリアに対応していますか？', a: '関東・関西を中心に出張買取に対応しています。対応エリアは拡大中のため、お住まいの地域が対象かどうかは公式サイトまたは電話にてご確認ください。宅配買取は全国対応です。' },
  { q: '両方を併用することはできますか？', a: 'はい、併用をおすすめします。まずヒカカク！で一括査定を行って相場を把握し、その金額をもとにウリエルの出張買取で交渉する方法が最も有利です。' },
  { q: 'ゲーム以外も売りたい場合はどちらが良いですか？', a: 'ゲーム以外（家電・ブランド品・貴金属など）もまとめて売りたい場合は、買取ウリエルが適しています。出張買取で全ジャンルを一度に査定してもらえるため、不用品の一括処分に向いています。' },
];

export default function HikakakuVsUrielPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ヒカカク vs ウリエル比較｜ゲーム買取どっちがおすすめ？【2026年】", "datePublished": "2026-03-15", "dateModified": "2026-05-24", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: '比較', href: '/' }, { name: 'ヒカカク vs ウリエル' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(96,165,250,0.2)', color: '#60A5FA' }}>比較ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ヒカカク！ vs 買取ウリエル 比較
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            一括査定のヒカカク！と出張買取の買取ウリエルについて、ゲームを売る際にどちらが適しているかを10項目で比較します。目的に応じた使い分けの目安もあわせてご紹介します。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />10項目比較表</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>比較項目</th>
                  <th>ヒカカク！</th>
                  <th>買取ウリエル</th>
                  <th>ポイント</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((row) => (
                  <tr key={row.item}>
                    <td className="font-bold">{row.item}</td>
                    <td className="text-sm">{row.hikakaku}</td>
                    <td className="text-sm">{row.uriel}</td>
                    <td className="text-sm" style={{ color: 'var(--color-text-light)' }}>{row.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Who should use what */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />使い分けガイド</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-4" style={{ color: 'var(--color-electric-green)' }}>ヒカカク！がおすすめな人</h3>
              <p className="text-xs mb-3" style={{ color: 'var(--color-text-light)' }}>一括比較で最高値を狙いたい方向け</p>
              <ul className="space-y-2">
                {hikakakuFor.map((item) => (
                  <li key={item} className="text-sm flex items-start gap-2" style={{ color: 'var(--color-text-light)' }}>
                    <span className="shrink-0 mt-1" style={{ color: 'var(--color-electric-green)' }}>&#9679;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-4" style={{ color: '#F59E0B' }}>買取ウリエルがおすすめな人</h3>
              <p className="text-xs mb-3" style={{ color: 'var(--color-text-light)' }}>出張買取で手間なく売りたい方向け</p>
              <ul className="space-y-2">
                {urielFor.map((item) => (
                  <li key={item} className="text-sm flex items-start gap-2" style={{ color: 'var(--color-text-light)' }}>
                    <span className="shrink-0 mt-1" style={{ color: '#F59E0B' }}>&#9679;</span>
                    {item}
                  </li>
                ))}
              </ul>
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
            まずは<span style={{ color: 'var(--color-electric-green)' }}>無料査定</span>で比較
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            どちらのサービスも無料で利用できます。まずはヒカカク！で相場を確認し、ウリエルの出張買取と比較することをおすすめします。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他の比較ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/compare/shop-vs-online/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>店舗 vs 宅配</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>目的に合った売り方を比較</p>
            </Link>
            <Link href="/compare/mercari-vs-kaitori/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>メルカリ vs 買取業者</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>12項目の詳細比較・金額シミュレーション</p>
            </Link>
          </div>
          <div className="mt-4">
            <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>サービス詳細レビュー</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/review/hikakaku/" className="glass-card p-4 card-hover block">
                <span className="tag-pill tag-pill-green text-xs mb-2 inline-block">1位</span>
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社一括査定</p>
              </Link>
              <Link href="/review/uriel/" className="glass-card p-4 card-hover block">
                <span className="tag-pill tag-pill-orange text-xs mb-2 inline-block">2位</span>
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取ウリエル</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>出張買取・即日現金化</p>
              </Link>
              <Link href="/review/tifana/" className="glass-card p-4 card-hover block">
                <span className="tag-pill tag-pill-blue text-xs mb-2 inline-block">3位</span>
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ティファナ</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>店舗+宅配買取</p>
              </Link>
            </div>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
