import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ゲームコントローラーの買取相場｜Joy-Con・DualSense・Eliteまで【2026年版】',
  description:
    'PS5/Switch/Xbox用コントローラーの買取相場をプラットフォーム別に一覧表で掲載。限定カラープレミア、箱なしの影響、クリーニング方法、おすすめ買取店まで徹底解説。',
  keywords: ['コントローラー 買取', 'Joy-Con 買取', 'DualSense 買取', 'Xbox コントローラー 売る'],
  openGraph: {
    title: 'ゲームコントローラーの買取相場｜Joy-Con・DualSense・Eliteまで【2026年版】',
    description: 'ゲームコントローラーのプラットフォーム別買取相場を徹底比較。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const ps5Controllers = [
  { model: 'DualSense ワイヤレスコントローラー（白）', good: '3,500〜4,500円', fair: '2,500〜3,400円', poor: '1,000〜2,400円', note: '標準カラー。最も流通量が多い' },
  { model: 'DualSense ワイヤレスコントローラー（黒/赤/青等）', good: '4,000〜5,000円', fair: '3,000〜3,900円', poor: '1,500〜2,900円', note: 'カラバリはやや高値' },
  { model: 'DualSense Edge', good: '12,000〜16,000円', fair: '8,000〜11,000円', poor: '4,000〜7,000円', note: 'プロコン。背面ボタン付き' },
  { model: 'DualSense（限定モデル）', good: '5,000〜10,000円', fair: '3,500〜4,900円', poor: '2,000〜3,400円', note: 'ゲームコラボ等の限定カラー' },
];

const switchControllers = [
  { model: 'Joy-Con（L/R）セット（ネオンブルー/レッド）', good: '4,000〜5,500円', fair: '2,500〜3,900円', poor: '1,000〜2,400円', note: '標準カラー。ドリフト問題に注意' },
  { model: 'Joy-Con（限定カラー）', good: '5,000〜8,000円', fair: '3,500〜4,900円', poor: '1,500〜3,400円', note: 'ゼルダ/スプラ等のコラボカラー' },
  { model: 'Nintendo Switch Proコントローラー', good: '4,000〜5,500円', fair: '2,500〜3,900円', poor: '1,000〜2,400円', note: '人気高い。ゲームコラボ版は高値' },
  { model: 'Proコントローラー（限定モデル）', good: '5,500〜9,000円', fair: '3,500〜5,400円', poor: '2,000〜3,400円', note: 'ゼルダ/モンハン等のコラボ' },
];

const xboxControllers = [
  { model: 'Xbox ワイヤレスコントローラー（標準）', good: '3,000〜4,000円', fair: '2,000〜2,900円', poor: '800〜1,900円', note: 'PC兼用で需要あり' },
  { model: 'Xbox Elite ワイヤレスコントローラー Series 2', good: '8,000〜12,000円', fair: '5,000〜7,900円', poor: '3,000〜4,900円', note: 'プロ仕様。パーツ完備で高値' },
  { model: 'Xbox Elite ワイヤレスコントローラー Series 2 Core', good: '5,000〜7,000円', fair: '3,500〜4,900円', poor: '1,500〜3,400円', note: 'Eliteの廉価版' },
  { model: 'Xbox Design Lab コントローラー', good: '3,500〜6,000円', fair: '2,500〜3,400円', poor: '1,000〜2,400円', note: 'カスタムデザイン。希少性で価格変動' },
];

const limitedColorPremium = [
  { controller: 'DualSense GOD OF WAR モデル', premium: '＋2,000〜5,000円', rarity: '高' },
  { controller: 'Joy-Con ゼルダの伝説 特別デザイン', premium: '＋1,500〜3,000円', rarity: '高' },
  { controller: 'Proコン モンスターハンターライズ', premium: '＋1,500〜4,000円', rarity: '中' },
  { controller: 'DualSense スパイダーマン2 モデル', premium: '＋1,500〜3,000円', rarity: '中' },
  { controller: 'Xbox Elite Series 2 Halo モデル', premium: '＋3,000〜6,000円', rarity: '高' },
  { controller: 'Joy-Con ポケモン Let\'s Go カラー', premium: '＋2,000〜4,000円', rarity: '高' },
];

const boxImpact = [
  { item: 'DualSense（標準カラー）', withBox: '3,500〜4,500円', withoutBox: '2,500〜3,500円', diff: '約1,000円' },
  { item: 'DualSense Edge', withBox: '12,000〜16,000円', withoutBox: '8,000〜12,000円', diff: '約4,000円' },
  { item: 'Joy-Con（L/R）セット', withBox: '4,000〜5,500円', withoutBox: '2,500〜4,000円', diff: '約1,500円' },
  { item: 'Switch Proコントローラー', withBox: '4,000〜5,500円', withoutBox: '2,500〜4,000円', diff: '約1,500円' },
  { item: 'Xbox Elite Series 2', withBox: '8,000〜12,000円', withoutBox: '5,000〜8,000円', diff: '約3,000円' },
];

const cleaningTips = [
  { part: 'ボタン周り', method: '綿棒にイソプロピルアルコールを含ませ、ボタンの隙間を優しく拭き取ります。爪楊枝でゴミを取り除くのも効果的ですが、キズをつけないよう注意。', effect: '見た目の印象が大幅改善。査定額+500〜1,000円の効果。' },
  { part: 'アナログスティック', method: 'スティックの根元に溜まった汚れを綿棒で除去。スティックのゴム部分は消毒用ウェットティッシュで拭き上げます。', effect: 'ドリフトと汚れの区別がつくため、不要な減額を防げる。' },
  { part: '本体表面', method: 'マイクロファイバークロスで乾拭き。頑固な汚れには中性洗剤を薄めた液で拭いた後、乾拭き。', effect: '第一印象を決める最も重要なポイント。' },
  { part: '充電端子', method: 'エアダスターでホコリを吹き飛ばし、綿棒で端子部分を清掃。接触不良の原因になるため重要。', effect: '動作確認時のトラブルを未然に防止。' },
];

const faqs = [
  { q: 'ゲームコントローラーだけでも買取してもらえますか？', a: 'はい、コントローラー単体での買取に対応している店が多いです。ヒカカク！、ゲオ、ブックオフ、駿河屋などの主要買取店はコントローラーのみの査定に対応しています。ただし、一部のオンライン買取では最低買取金額（500〜1,000円）を設けている場合があるので事前確認をおすすめします。' },
  { q: 'Joy-Conのスティックドリフトがある場合、買取してもらえますか？', a: 'はい、ドリフトがあっても買取可能ですが、大幅な減額（良品の40〜60%程度）になります。任天堂の無償修理対象であれば修理してから売った方がお得です。ドリフトの修理費用は有償でも2,000〜3,000円程度のため、修理後の買取価格との差額を計算して判断しましょう。' },
  { q: '限定カラーのコントローラーはどれくらいプレミアがつきますか？', a: 'ゲームコラボの限定カラーは標準モデルの1.5〜2倍の買取価格になることがあります。例えばGOD OF WAR限定DualSenseは＋2,000〜5,000円、ゼルダ限定Joy-Conは＋1,500〜3,000円のプレミアです。箱付き完品であることがプレミア価格の条件になるケースが多いです。' },
  { q: '箱なしのコントローラーはどれくらい減額されますか？', a: '標準モデルで約1,000〜1,500円、高額モデル（DualSense Edge、Xbox Elite等）で約3,000〜4,000円の減額です。限定モデルの場合はさらに差が大きくなります。コントローラーの箱は比較的コンパクトなので、購入時から保管しておくことを強くおすすめします。' },
  { q: 'DualSense Edgeの買取相場はいくらですか？', a: '良品で12,000〜16,000円、並品で8,000〜11,000円が目安です。付属の背面ボタンパーツ、スティックキャップ、USB-Cケーブルが揃っているかが重要なポイントです。定価が約30,000円と高額なため、買取でも他のコントローラーより高値がつきます。' },
  { q: 'コントローラーを高く売るコツは何ですか？', a: '最も効果的なのは「クリーニング」と「付属品の完備」です。ボタン周り・スティック・表面を丁寧に清掃するだけで500〜2,000円の査定額アップが期待できます。また、箱・説明書・ケーブルを揃えることで1,000〜4,000円のプラスになります。複数のコントローラーがあればまとめ売りボーナスも活用しましょう。' },
];

export default function ControllerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲームコントローラーの買取相場｜Joy-Con・DualSense・Eliteまで【2026年版】", "datePublished": "2026-03-15", "dateModified": "2026-05-24", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: 'コントローラー買取相場' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲームコントローラーの買取相場
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            Joy-Con・DualSense・DualSense Edge・Xbox Elite、主要ゲームコントローラーの買取相場をプラットフォーム別に一覧表で紹介。限定カラーのプレミア価格、箱なし時の減額幅、売る前のクリーニング方法、おすすめ買取店まで完全網羅しました。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* PS5コントローラー */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />PS5コントローラー（DualSense）買取相場</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>モデル</th>
                  <th>良品</th>
                  <th>並品</th>
                  <th>難あり</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {ps5Controllers.map((row) => (
                  <tr key={row.model}>
                    <td className="font-bold text-sm">{row.model}</td>
                    <td className="font-bold" style={{ color: 'var(--color-electric-green)' }}>{row.good}</td>
                    <td className="text-sm">{row.fair}</td>
                    <td className="text-sm">{row.poor}</td>
                    <td className="text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Switchコントローラー */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />Switchコントローラー（Joy-Con/Proコン）買取相場</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>モデル</th>
                  <th>良品</th>
                  <th>並品</th>
                  <th>難あり</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {switchControllers.map((row) => (
                  <tr key={row.model}>
                    <td className="font-bold text-sm">{row.model}</td>
                    <td className="font-bold" style={{ color: 'var(--color-electric-green)' }}>{row.good}</td>
                    <td className="text-sm">{row.fair}</td>
                    <td className="text-sm">{row.poor}</td>
                    <td className="text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Xboxコントローラー */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />Xboxコントローラー買取相場</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>モデル</th>
                  <th>良品</th>
                  <th>並品</th>
                  <th>難あり</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {xboxControllers.map((row) => (
                  <tr key={row.model}>
                    <td className="font-bold text-sm">{row.model}</td>
                    <td className="font-bold" style={{ color: 'var(--color-electric-green)' }}>{row.good}</td>
                    <td className="text-sm">{row.fair}</td>
                    <td className="text-sm">{row.poor}</td>
                    <td className="text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 限定カラープレミア */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />限定カラーのプレミア価格</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>コントローラー</th>
                  <th>プレミア額</th>
                  <th>希少性</th>
                </tr>
              </thead>
              <tbody>
                {limitedColorPremium.map((row) => (
                  <tr key={row.controller}>
                    <td className="font-bold text-sm">{row.controller}</td>
                    <td className="font-bold" style={{ color: 'var(--color-electric-green)' }}>{row.premium}</td>
                    <td className="text-sm">{row.rarity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 箱なしの影響 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />箱なしの買取価格への影響</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>コントローラー</th>
                  <th>箱あり</th>
                  <th>箱なし</th>
                  <th>差額</th>
                </tr>
              </thead>
              <tbody>
                {boxImpact.map((row) => (
                  <tr key={row.item}>
                    <td className="font-bold text-sm">{row.item}</td>
                    <td className="font-bold" style={{ color: 'var(--color-electric-green)' }}>{row.withBox}</td>
                    <td className="text-sm">{row.withoutBox}</td>
                    <td className="text-sm font-bold" style={{ color: '#EF4444' }}>-{row.diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* クリーニング方法 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />売る前のクリーニング方法</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>箇所</th>
                  <th>クリーニング方法</th>
                  <th>効果</th>
                </tr>
              </thead>
              <tbody>
                {cleaningTips.map((row) => (
                  <tr key={row.part}>
                    <td className="font-bold">{row.part}</td>
                    <td className="text-sm">{row.method}</td>
                    <td className="text-sm">{row.effect}</td>
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
            コントローラーの<span style={{ color: 'var(--color-electric-green)' }}>買取価格</span>を今すぐ確認
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            限定モデルは思わぬ高値がつくことも。まずは無料で一括査定してみましょう。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連記事</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/hardware/ps5/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS5買取ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS5本体の相場と売り方</p>
            </Link>
            <Link href="/hardware/switch/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switch買取ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>Switch本体の相場と売り方</p>
            </Link>
            <Link href="/knowledge/boxless/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>箱なし買取ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なしでも高く売るコツ</p>
            </Link>
          </div>
        </section>

        <p className="text-xs mt-8 text-center" style={{ color: 'var(--color-text-light)' }}>最終更新: 2026年5月</p>
        <AuthorBox />
      </div>
    </>
  );
}
