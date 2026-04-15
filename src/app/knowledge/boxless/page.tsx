import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '箱なし・付属品なしでもゲームは売れる？減額目安と対処法【2025年】',
  description:
    '箱なし・説明書なし・ケーブルなしでもゲーム機やソフトは売れるのか徹底解説。付属品の有無による減額目安（箱なし-20%等）、付属品がない場合の対処法、3社の対応比較まで完全網羅。',
  keywords: ['ゲーム 箱なし 買取', '説明書なし', 'ゲーム 付属品なし 売れる', '箱なし 買取価格'],
  openGraph: {
    title: '箱なし・付属品なしでもゲームは売れる？減額目安と対処法【2025年】',
    description: '箱なし・付属品なしでもゲームは売れるか、減額目安を徹底解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const deductionGuide = [
  { item: '外箱', deduction: '-10〜20%', note: 'ハードは箱ありで1,000〜3,000円UP。レトロゲームは箱の有無で2〜5倍の差がつくことも。' },
  { item: '説明書', deduction: '-5〜10%', note: '現行ハードはオンラインマニュアルが主流のため影響は小さい。レトロゲームは影響大。' },
  { item: 'ACアダプター（充電器）', deduction: '-10〜20%', note: '純正品の欠品は大きな減額要因。汎用品で代用できる場合もある。' },
  { item: 'HDMIケーブル', deduction: '-3〜5%', note: '汎用品で代用可能なため減額幅は小さい。' },
  { item: 'コントローラー', deduction: '-15〜30%', note: 'メインコントローラーの欠品は大幅減額。Joy-Conなしのスイッチは特に影響大。' },
  { item: 'ソフトのケース', deduction: '-5〜15%', note: 'ディスクのみでも買取可能だが、ケースなしは減額対象。' },
  { item: 'スタンド・ドック（Switch）', deduction: '-10〜15%', note: 'TV出力に必要なドックの欠品は減額幅が大きい。' },
];

const workarounds = [
  { title: '汎用品で代用する', description: 'HDMIケーブルやACアダプターは汎用品で代用できる場合があります。100均やAmazonで安く購入して同梱すれば、減額を回避できることもあります。ただし純正品と非純正品では査定額が異なる業者もあります。' },
  { title: 'まとめ売りで減額をカバー', description: '付属品が欠品していても、複数のゲーム機やソフトをまとめて売ることでボーナスがつき、減額分をカバーできる場合があります。' },
  { title: '「箱なし歓迎」の業者を選ぶ', description: '業者によって箱なしの減額幅は異なります。ヒカカク！で複数社に査定を依頼し、箱なしでも高値をつけてくれる業者を見つけましょう。' },
  { title: 'フリマアプリで箱だけ購入', description: 'メルカリなどで「ゲーム機の箱のみ」が出品されていることがあります。数百円で購入できる場合もあり、箱ありにすることで減額を回避できます。' },
];

const services = [
  { name: 'ヒカカク！', feature: '最大20社一括査定', boxless: '箱なし対応業者を含む一括査定', point: '箱なしでも最高値の業者を自動で発見' },
  { name: '買取ウリエル', feature: '出張買取・即日現金化', boxless: '箱なし・付属品なしでも出張査定OK', point: '付属品の状態を現物確認で適正査定' },
  { name: 'ティファナ', feature: '店舗+宅配買取', boxless: '箱なしでも店頭持ち込みOK', point: '付属品なしでもまとめて引き取り対応' },
];

const faqs = [
  { q: '箱なしでもゲーム機は売れますか？', a: 'はい、箱なしでも買取可能です。ただし箱ありと比較して10〜20%程度の減額になります。特にレトロゲームは箱の有無で買取価格が大きく変わるため、箱がある場合は必ず同梱しましょう。' },
  { q: '説明書がなくても売れますか？', a: 'はい、売れます。現行ハードはオンラインマニュアルが主流なので、説明書の有無による減額は5〜10%程度と比較的小さいです。ただしレトロゲームの説明書は希少価値が高く、影響が大きくなります。' },
  { q: 'コントローラーなしでも売れますか？', a: '売れますが、15〜30%程度の大幅な減額になります。特にSwitchのJoy-Conは本体操作に必須のため、欠品時の減額が大きいです。可能であれば単品で購入して同梱することをおすすめします。' },
  { q: '付属品をなくした場合、買ってから売ったほうが得ですか？', a: 'ケースバイケースです。純正ACアダプターを3,000円で買って、減額を5,000円回避できるなら得です。まず箱なし・付属品なしの状態で査定を受け、減額幅を確認してから判断しましょう。' },
  { q: 'ケーブルだけ欠品している場合の減額はどのくらいですか？', a: 'HDMIケーブルは汎用品のため減額は3〜5%程度と小さいです。ACアダプター（充電器）は10〜20%程度の減額になります。USBケーブルも汎用品のため影響は小さいです。' },
  { q: '非純正品の付属品でも同梱したほうがいいですか？', a: 'はい、非純正品でも同梱したほうが減額を軽減できます。ただし業者によっては純正品と非純正品で査定額が異なる場合があります。「純正品なし・社外品あり」として申告しましょう。' },
];

export default function BoxlessPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '箱なし・付属品なし' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            箱なし・付属品なしでもゲームは売れる？
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            箱・説明書・ケーブルなしでもゲーム機やソフトは売れるのか、付属品の有無による減額目安、付属品がない場合の対処法、3社の対応比較まで徹底解説します。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Deduction Guide */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />付属品の有無による減額目安</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>※ 減額幅は業者・機種により異なります。あくまで目安としてご参照ください。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>付属品</th>
                  <th>欠品時の減額目安</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {deductionGuide.map((row) => (
                  <tr key={row.item}>
                    <td className="font-bold">{row.item}</td>
                    <td className="font-bold" style={{ color: '#EF4444' }}>{row.deduction}</td>
                    <td className="text-sm">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Workarounds */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />付属品がない場合の対処法</h2>
          <div className="space-y-4">
            {workarounds.map((item, i) => (
              <div key={item.title} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Comparison */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />3社の箱なし・付属品なし対応比較</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>サービス</th>
                  <th>特徴</th>
                  <th>箱なし対応</th>
                  <th>おすすめポイント</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.name}>
                    <td className="font-bold">{s.name}</td>
                    <td>{s.feature}</td>
                    <td>{s.boxless}</td>
                    <td>{s.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            箱なしでも<span style={{ color: 'var(--color-electric-green)' }}>高く売れる</span>業者があります
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            付属品なしでも最高値をつけてくれる業者を複数社比較で見つけましょう。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>お役立ち情報</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/knowledge/broken/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ジャンク品買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>壊れたゲーム機でも売れる？</p>
            </Link>
            <Link href="/knowledge/preparation/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>売る前の準備</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>初期化・データ消去の手順</p>
            </Link>
            <Link href="/knowledge/bulk/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>まとめ売り</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>まとめ売りのメリットとコツ</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
