import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Steam Deckの買取相場｜モデル別価格とお得な売り方【2026年版】',
  description:
    'Steam Deck LCD/OLEDモデル別・容量別の買取相場を一覧表で紹介。売却前の準備（SteamOS初期化・アカウント解除）、メルカリvs買取店比較まで徹底解説。',
  keywords: ['Steam Deck 買取 相場', 'Steam Deck 売る', 'スチームデック 買取', 'Steam Deck 買取価格'],
  openGraph: {
    title: 'Steam Deckの買取相場｜モデル別価格とお得な売り方【2026年版】',
    description: 'Steam Deck LCD/OLEDモデル別の買取相場を比較。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const priceData = [
  { model: 'Steam Deck LCD 64GB', good: '20,000〜28,000円', fair: '15,000〜19,000円', poor: '8,000〜14,000円', note: 'eMMCストレージ。microSD運用が基本' },
  { model: 'Steam Deck LCD 256GB', good: '25,000〜33,000円', fair: '18,000〜24,000円', poor: '10,000〜17,000円', note: 'NVMe SSD。最も流通量が多い' },
  { model: 'Steam Deck LCD 512GB', good: '30,000〜40,000円', fair: '22,000〜29,000円', poor: '13,000〜21,000円', note: '防眩ガラス搭載。限定キャリングケース付き' },
  { model: 'Steam Deck OLED 512GB', good: '45,000〜55,000円', fair: '35,000〜44,000円', poor: '25,000〜34,000円', note: 'OLED画面。バッテリー50Wh' },
  { model: 'Steam Deck OLED 1TB', good: '55,000〜68,000円', fair: '42,000〜54,000円', poor: '30,000〜41,000円', note: '最上位モデル。スモークブラック仕上げ' },
  { model: 'Steam Deck OLED 1TB（限定版）', good: '65,000〜80,000円', fair: '50,000〜64,000円', poor: '35,000〜49,000円', note: 'ホワイトモデル等の限定カラー' },
];

const preparationSteps = [
  { step: '1. Steamアカウントからのログアウト', detail: '設定 → アカウント → ログアウトを実行。Steam Guardの認証も解除しておくと、次のユーザーがスムーズに利用できます。', importance: '必須' },
  { step: '2. SteamOS初期化（ファクトリーリセット）', detail: '設定 → システム → ファクトリーリセット。全データが消去され、出荷状態に戻ります。個人情報保護のため必ず実行してください。', importance: '必須' },
  { step: '3. microSDカードの取り出し', detail: 'microSDカードに保存したゲームデータは個人のSteamアカウントに紐づくため、必ず取り出してから売却しましょう。', importance: '必須' },
  { step: '4. 外観のクリーニング', detail: '画面は柔らかい布で拭き、本体の指紋やホコリを除去。スティック周りとボタンの隙間は綿棒で清掃すると査定額がアップします。', importance: '推奨' },
  { step: '5. 付属品の確認と梱包', detail: 'キャリングケース、充電器（45W USB-C）、取扱説明書、外箱を揃えましょう。外箱の有無で3,000〜5,000円の差がつきます。', importance: '推奨' },
  { step: '6. 動作確認', detail: '電源が入ること、ボタン・スティック・タッチパッド・画面タッチがすべて反応することを確認。ジョイスティックのドリフトがないかもチェックしましょう。', importance: '推奨' },
];

const mercariVsBuyback = [
  { item: '売却価格', mercari: '相場の90〜100%', buyback: '相場の70〜85%', verdict: 'メルカリが高い' },
  { item: '手数料', mercari: '10%＋送料', buyback: '無料（宅配便も無料が多い）', verdict: '買取店が有利' },
  { item: '手間', mercari: '出品・質問対応・梱包・発送', buyback: '申し込み・梱包・発送のみ', verdict: '買取店が楽' },
  { item: '売却までの期間', mercari: '数日〜数週間', buyback: '3〜5日', verdict: '買取店が早い' },
  { item: 'トラブルリスク', mercari: '受取後クレーム・すり替え', buyback: 'ほぼなし', verdict: '買取店が安全' },
  { item: '実質手取り', mercari: '相場の75〜85%', buyback: '相場の70〜85%', verdict: 'ほぼ同等' },
];

const faqs = [
  { q: 'Steam Deckの買取相場はいくらですか？', a: 'LCD 256GBモデルで25,000〜33,000円（良品）、OLED 512GBモデルで45,000〜55,000円（良品）が目安です。容量とモデル（LCD/OLED）で大きく異なり、OLEDモデルはLCDの1.5〜2倍の買取価格になります。外箱・付属品完備だとさらに3,000〜5,000円プラスされます。' },
  { q: 'Steam Deckを売る前にやるべきことは？', a: '必ず行うべきことは3つです。1つ目はSteamアカウントからのログアウト、2つ目はSteamOS初期化（ファクトリーリセット）、3つ目はmicroSDカードの取り出しです。個人情報保護とスムーズな査定のため、これらは必須です。加えて外観クリーニングと付属品の確認もおすすめします。' },
  { q: 'メルカリと買取店、どちらで売るのがお得ですか？', a: '手取り額はほぼ同等です。メルカリは高値で売れますが10%の手数料と送料がかかるため、実質手取りは相場の75〜85%。買取店は買取価格自体は低めですが手数料ゼロのため実質70〜85%。手間やトラブルリスクを考えると、初めてなら買取店がおすすめです。' },
  { q: 'LCDモデルとOLEDモデルで買取価格はどれくらい違いますか？', a: '同容量で比較するとOLEDモデルはLCDモデルの約1.5〜2倍の買取価格です。例えば512GBの場合、LCDモデルが30,000〜40,000円に対し、OLEDモデルは45,000〜55,000円です。OLEDの画面品質とバッテリー性能の向上が高く評価されています。' },
  { q: 'カスタマイズ（SSD換装・Windows導入）したSteam Deckは売れますか？', a: 'SSD換装は問題なく売れます。むしろ容量アップで高値がつくことも。ただしWindowsを導入した場合は、SteamOSに戻してから売却することをおすすめします。買取業者によってはカスタマイズ品の査定を断るケースもあるため、事前に確認しましょう。' },
  { q: 'Steam Deckのジョイスティックにドリフトがあるとどうなりますか？', a: 'ジョイスティックのドリフト（勝手に入力が入る症状）があると大幅減額されます。良品の50〜70%程度まで下がることが多く、修理してから売った方が手取りが増えるケースもあります。売却前に必ず動作チェックを行いましょう。' },
];

export default function SteamDeckPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'Steam Deck' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            Steam Deckの買取相場
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ValveのポータブルPC「Steam Deck」のLCD/OLEDモデル別・容量別の買取相場を徹底調査。売却前の準備（SteamOS初期化・アカウント解除）、メルカリvs買取店の比較、付属品の有無による価格差まで、Steam Deckをお得に売るための情報を完全網羅しました。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* モデル別価格表 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />モデル別・容量別 買取相場</h2>
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
                {priceData.map((row) => (
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
          <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>※ 2026年5月時点の参考価格。外箱・付属品完備の場合。</p>
        </section>

        {/* 売却前の準備 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />売却前の準備チェックリスト</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>手順</th>
                  <th>詳細</th>
                  <th>重要度</th>
                </tr>
              </thead>
              <tbody>
                {preparationSteps.map((row) => (
                  <tr key={row.step}>
                    <td className="font-bold text-sm">{row.step}</td>
                    <td className="text-sm">{row.detail}</td>
                    <td className="font-bold text-sm" style={{ color: row.importance === '必須' ? '#EF4444' : 'var(--color-electric-green)' }}>{row.importance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* メルカリ vs 買取店 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />メルカリ vs 買取店 比較</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>比較項目</th>
                  <th>メルカリ</th>
                  <th>買取店</th>
                  <th>判定</th>
                </tr>
              </thead>
              <tbody>
                {mercariVsBuyback.map((row) => (
                  <tr key={row.item}>
                    <td className="font-bold">{row.item}</td>
                    <td className="text-sm">{row.mercari}</td>
                    <td className="text-sm">{row.buyback}</td>
                    <td className="text-sm font-bold" style={{ color: 'var(--color-electric-green)' }}>{row.verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* LCD vs OLED */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />LCD vs OLED 買取価格の違い</h2>
          <div className="glass-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>LCDモデル</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                  初代モデル。買取相場はOLEDの60〜70%程度。バッテリー劣化が進んでいるものは減額対象。64GBモデルは流通が少なく相場がやや高め。512GBモデルの防眩ガラスは評価が高い。
                </p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>OLEDモデル</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                  最新モデル。画面品質・バッテリー性能の向上で高評価。1TBモデルは最も人気が高く買取価格も安定。限定カラーモデルはさらにプレミアがつく。発売から日が浅いため価格維持率も良好。
                </p>
              </div>
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
            Steam Deckの<span style={{ color: 'var(--color-electric-green)' }}>買取価格</span>を今すぐ確認
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            モデルや状態で価格が大きく変わるSteam Deck。一括査定で最高値をチェック。
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
            <Link href="/hardware/switch/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switch買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>Nintendo Switch本体の相場</p>
            </Link>
            <Link href="/knowledge/preparation/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>売る前の準備</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>初期化・データ消去の手順</p>
            </Link>
            <Link href="/compare/mercari-vs-kaitori/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>メルカリvs買取店</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>フリマと買取店の比較</p>
            </Link>
          </div>
        </section>

        <p className="text-xs mt-8 text-center" style={{ color: 'var(--color-text-light)' }}>最終更新: 2026年5月</p>
      </div>
    </>
  );
}
