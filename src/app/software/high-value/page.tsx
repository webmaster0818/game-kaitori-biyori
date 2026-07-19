import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: '高く売れるゲームソフトランキング【2026年7月】ブックオフ・ゲオ・駿河屋の公式買取価格で比較',
  description:
    '2026年7月調査の公式買取価格にもとづく、高く売れるゲームソフトランキング。ブックオフ・ゲオ・駿河屋・レトログの最新買取価格を横断比較。同じソフトでも店によって最大1,000円の差が出る実例も掲載。',
  keywords: ['ゲームソフト 高く売れる', '高価買取 ゲーム ランキング', 'ゲーム 買取 高額', 'プレミアソフト 買取', 'ゲームソフト 買取相場'],
  openGraph: {
    title: '高く売れるゲームソフトランキング【2026年7月】公式買取価格で比較',
    description: 'ブックオフ・ゲオ・駿河屋・レトログの2026年7月時点の公式買取価格を横断比較。高く売れるソフトをデータで紹介。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

// 2026年7月9日に各社公式買取ページで確認した価格（駿河屋の限定版リストのみ6/18確認値を継続＝7/9はアクセス不可で再確認できず）。完品前提・店舗/在庫状況により変動
const bookoffList = [
  { title: 'マリオカート ワールド', platform: 'Switch2', price: '5,800円' },
  { title: '真・三國無双 ORIGINS', platform: 'Switch2', price: '5,000円' },
  { title: 'ゼルダの伝説 ティアーズ オブ ザ キングダム Switch2 Edition', platform: 'Switch2', price: '4,800円' },
  { title: 'プラグマタ（通常版）', platform: 'Switch2', price: '4,800円' },
  { title: 'イナズマイレブン 英雄たちのヴィクトリーロード Switch2 Edition', platform: 'Switch2', price: '4,500円' },
  { title: 'スーパーマリオパーティ ジャンボリー Switch2 Edition＋ジャンボリーTV', platform: 'Switch2', price: '4,500円' },
  { title: 'ゼルダの伝説 ブレス オブ ザ ワイルド Switch2 Edition', platform: 'Switch2', price: '4,500円' },
  { title: 'ぽこ あ ポケモン', platform: 'Switch2', price: '4,500円' },
  { title: '星のカービィ ディスカバリー Switch2 Edition＋スターリーワールド', platform: 'Switch2', price: '4,500円' },
];

const geoList = [
  { title: 'ファイナルファンタジータクティクス イヴァリースクロニクルズ', platform: 'Switch', price: '6,000円' },
  { title: 'パワフルプロ野球 2026-2027', platform: 'Switch', price: '4,500円' },
  { title: '空の軌跡 the 1st', platform: 'Switch', price: '4,500円' },
  { title: 'スーパーマリオギャラクシー1+2', platform: 'Switch', price: '4,500円' },
  { title: 'スーパーマリオ 3Dコレクション', platform: 'Switch', price: '4,500円' },
  { title: 'ファイアーエムブレム 風花雪月', platform: 'Switch', price: '4,500円' },
  { title: 'トモダチコレクション わくわく生活', platform: 'Switch', price: '4,300円' },
  { title: 'スプラトゥーン3', platform: 'Switch', price: '4,000円' },
  { title: '桃太郎電鉄2 東日本編+西日本編', platform: 'Switch', price: '4,000円' },
  { title: '大乱闘スマッシュブラザーズ SPECIAL', platform: 'Switch', price: '3,800円' },
];

const surugayaList = [
  { title: 'ロックマン&ロックマンX 5in1 スペシャルBOX', platform: 'Switch', price: '38,000円' },
  { title: 'メモリーズオフ 双想［超限定版］', platform: 'Switch', price: '37,000円' },
  { title: 'ふたごうさぎのご近所ツーリズモ［限定特装版］', platform: 'Switch', price: '34,000円' },
  { title: '逆転裁判123 成歩堂セレクション コンプリート・エディション', platform: 'Switch', price: '32,000円' },
  { title: 'ゼルダの伝説 ブレス オブ ザ ワイルド DELUXE COLLECTOR\'S EDITION', platform: 'Switch', price: '30,000円' },
  { title: 'ENDER LILIES［数量限定版］', platform: 'Switch', price: '28,000円' },
  { title: 'FF I-VI ピクセルリマスター FF35周年記念限定特装版', platform: 'Switch', price: '27,000円' },
  { title: '北米版 PERSONA 4 GOLDEN［Midnight Channel Edition］', platform: 'Switch', price: '26,400円' },
];

const crossCompare = [
  { title: 'スプラトゥーン3', bookoff: '3,300円', geo: '4,000円', diff: 'ゲオが+700円' },
  { title: 'スーパーマリオパーティ ジャンボリー（Switch版）', bookoff: '3,300円', geo: '3,800円', diff: 'ゲオが+500円' },
  { title: 'スーパーマリオ 3Dコレクション', bookoff: '3,800円', geo: '4,500円', diff: 'ゲオが+700円' },
  { title: '大乱闘スマッシュブラザーズ SPECIAL', bookoff: '3,500円', geo: '3,800円', diff: 'ゲオが+300円' },
  { title: 'ゼルダの伝説 ティアーズ オブ ザ キングダム（通常版）', bookoff: '2,800円', geo: '3,000円', diff: 'ゲオが+200円' },
];

const tips = [
  { title: '箱・説明書を揃えて売る', description: '掲載されている買取価格はどの店も「完品」（箱・説明書・付属品あり）が前提です。レトロゲームは完品かどうかで買取価格が2〜10倍変わることがあり、限定版は特典欠品が大幅減額の要因になります。' },
  { title: '複数の店の公式買取価格を見比べる', description: '上の比較表のとおり、同じソフトでも店によって500〜1,000円以上の差がつきます。ブックオフ・ゲオ・駿河屋などは公式サイトで買取価格を公開しているので、売る前に必ず見比べましょう。' },
  { title: '限定版・コレクターズエディションは専門店へ', description: '駿河屋の高価買取リストは限定版・特装版が数万円クラスで並びます。限定版は一般チェーンの店頭より、限定版の販路を持つ専門店の方が高くなりやすい傾向があります。' },
  { title: '新作・話題作は早めに売る', description: '新作ソフトは発売直後〜数ヶ月が最も高値で、その後は下落していくのが基本です。Switch2タイトルのように品薄・話題性のあるソフトは特に早売りが有利です。' },
  { title: '状態を丁寧に保つ', description: 'ケースの日焼け・ディスクの傷・カセット端子の汚れは減額対象です。直射日光を避け、乾燥した場所で保管しましょう。発送前にケースを軽く清掃するだけでも印象が変わります。' },
];

const faqs = [
  { q: '今いちばん高く売れるゲームソフトは何ですか？', a: '2026年7月9日調査時点の公式買取価格では、通常流通のソフトなら「ファイナルファンタジータクティクス イヴァリースクロニクルズ」（ゲオで6,000円）やSwitch2の「マリオカート ワールド」（ブックオフで5,800円）が高値です。限定版では駿河屋の「ロックマン&ロックマンX 5in1 スペシャルBOX」38,000円など、数万円クラスのものもあります。価格は日々変動するため、売る直前に各社の公式買取ページで確認してください。' },
  { q: 'どの店に売るのが一番高いですか？', a: 'ソフトによって異なります。当サイトの調査では、同じ「スーパーマリオ 3Dコレクション」でもブックオフ3,800円・ゲオ4,500円と700円の差がありました。逆にトモダチコレクションはブックオフの方が高いなど、店ごとに得意・不得意があります。複数店の公式価格を見比べるのが確実です。' },
  { q: '箱なしのレトロゲームでも高く売れますか？', a: '箱なし（裸カセット）でも人気タイトルなら値段がつきますが、箱・説明書付きの完品と比べると買取価格は大幅に下がります。完品なら2〜10倍の差がつくことも珍しくありません。' },
  { q: 'ゲームの買取価格は今後上がりますか？', a: 'レトロゲームや限定版は流通量が減るため、人気タイトルは長期的に上昇する傾向があります。一方、最新タイトルは時間の経過とともに下がるのが基本なので、遊び終わったら早めの売却がおすすめです。' },
  { q: '大量のゲームをまとめて売りたい場合はどうすればいいですか？', a: '宅配買取が便利です。駿河屋のあんしん買取は見積金額3,000円以上で送料無料（着払い）になります。カイトリワールドも査定3,000円以上で送料無料・梱包ダンボール最大10箱無料です。各社の送料条件を確認してまとめて送りましょう。' },
];

export default function HighValueSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "高く売れるゲームソフトランキング【2026年7月】ブックオフ・ゲオ・駿河屋の公式買取価格で比較", "datePublished": "2026-05-19", "dateModified": "2026-07-09", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: '高く売れるゲームソフトランキング' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(245,158,11,0.2)', color: '#F59E0B' }}>高価買取ランキング</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            高く売れるゲームソフトランキング【2026年7月】
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ブックオフ・ゲオ・駿河屋・レトログが公式サイトで公開している買取価格を2026年7月9日に調査し（駿河屋の限定版リストのみ6/18確認値を継続（7/9はアクセス不可で再確認できず））、いま実際に高く売れるソフトをまとめました。同じソフトでも店によって差がつく実例も掲載しています。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>価格調査日: 2026年7月9日（各社公式買取ページ）</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Cross-store comparison (Information Gain) */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />同じソフトでも店で差がつく：ブックオフ vs ゲオ 横断比較</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>2026年7月9日に両社の公式買取価格ページで確認した、同一タイトルの買取価格比較です。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>タイトル</th>
                  <th>ブックオフ</th>
                  <th>ゲオ</th>
                  <th>差</th>
                </tr>
              </thead>
              <tbody>
                {crossCompare.map((row) => (
                  <tr key={row.title}>
                    <td className="font-bold text-sm">{row.title}</td>
                    <td className="text-sm">{row.bookoff}</td>
                    <td className="text-sm">{row.geo}</td>
                    <td className="text-sm font-bold" style={{ color: 'var(--color-electric-green)' }}>{row.diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ブックオフ「ゲームの高価買取情報」（2026年7月9日閲覧・店舗買取価格）、ゲオ店舗情報サイト「Switchの高価買取品」（2026年7月9日閲覧・店頭参考買取価格）。店舗・状態により変動します。</p>
        </section>

        {/* BookOff */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ブックオフの高価買取ソフト上位（Switch2・2026年7月9日閲覧）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>タイトル</th><th>ハード</th><th>買取価格</th></tr>
              </thead>
              <tbody>
                {bookoffList.map((g) => (
                  <tr key={g.title}>
                    <td className="font-bold text-sm">{g.title}</td>
                    <td className="text-sm">{g.platform}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{g.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ブックオフ公式「ゲームの高価買取情報」（2026年7月9日閲覧・店舗買取価格）。Switch2の「マリオカート ワールド」5,800円が最高値で、上位はSwitch2の新作・話題作が中心。発売から日が浅いタイトルほど高値がつく傾向です。店舗により異なり、予告なく変更されます。</p>
        </section>

        {/* GEO */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ゲオの高価買取ソフトTOP10（Switch・2026年7月9日閲覧）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>タイトル</th><th>ハード</th><th>店頭参考買取価格</th></tr>
              </thead>
              <tbody>
                {geoList.map((g) => (
                  <tr key={g.title}>
                    <td className="font-bold text-sm">{g.title}</td>
                    <td className="text-sm">{g.platform}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{g.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ゲオ店舗情報サイト「Switchの高価買取品」（2026年7月9日閲覧）。「FFタクティクス イヴァリースクロニクルズ」が6,000円でトップを維持。「スプラトゥーン3」は4,000円を維持。任天堂の定番タイトルは発売から年数が経っても値崩れしにくいことが分かります。</p>
        </section>

        {/* Surugaya */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />駿河屋の高価買取リスト上位（限定版・2026年6月18日閲覧／限定版リストは自動取得できないため前回確認値を継続）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>タイトル</th><th>ハード</th><th>買取価格</th></tr>
              </thead>
              <tbody>
                {surugayaList.map((g) => (
                  <tr key={g.title}>
                    <td className="font-bold text-sm">{g.title}</td>
                    <td className="text-sm">{g.platform}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{g.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋公式 高価買取リスト（Switchソフト・買取価格順、2026年6月18日閲覧／限定版リストは自動取得できないため前回確認値を継続）。上位は限定版・特装版がほぼ独占（最高はロックマン&ロックマンX 5in1 スペシャルBOX 38,000円）。「押し入れの限定版」が数万円になる可能性があるのはこのゾーンです。在庫状況により変動します。</p>
        </section>

        {/* Category Breakdown */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />高額ソフトの3つのカテゴリ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>新作・品薄タイトル</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                Switch2「マリオカート ワールド」5,800円のように、発売から日が浅く需要が供給を上回っているタイトルは高値がつきます。発売直後〜数ヶ月が売りどきです。
              </p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>値崩れしない定番タイトル</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                スマブラSP・マリオ系などの定番は発売から数年経っても4,000〜5,000円クラスを維持。ゲオで「スーパーマリオ 3Dコレクション」5,000円・「スマブラSP」4,000円が続いているのが象徴例です。
              </p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>限定版・特装版</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                駿河屋の上位は25,000〜38,000円の限定版が独占。特典が全て揃った完品であることが条件で、欠品があると大幅減額になります。
              </p>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ゲームソフトを高く売るコツ</h2>
          <div className="space-y-4">
            {tips.map((tip, i) => (
              <div key={tip.title} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{tip.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{tip.description}</p>
                </div>
              </div>
            ))}
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
            お宝ソフトを<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>で売りませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            同じソフトでも店によって買取価格は大きく違います。売る前に複数の公式価格をチェックしましょう。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連するソフト買取ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/software/switch-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switchソフト買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>人気タイトル10本の買取相場</p>
            </Link>
            <Link href="/software/retro-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>レトロソフト買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ファミコン・スーファミの買取相場</p>
            </Link>
            <Link href="/software/ps5-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS5ソフト買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最新タイトルの買取相場</p>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <Link href="/price-index/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲーム買取価格インデックス</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>毎週更新・今どこが一番高い？</p>
            </Link>
            <Link href="/compare/kaitori-ranking/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取おすすめランキング15選</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>15社を徹底比較</p>
            </Link>
            <Link href="/method/high-price/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>高く売るコツ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>買取価格を最大化するテクニック</p>
            </Link>
            <Link href="/hardware/switch2/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switch2本体の買取相場</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>値上げ後の最新相場を解説</p>
            </Link>
            <Link href="/condition-guide/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>状態別 買取許容度マップ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なし・傷ありでいくら下がる？</p>
            </Link>
            <Link href="/review/kaitori-world/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取ワールドの評判</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>高額ソフトを高く売る業者の実態</p>
            </Link>
          </div>
          <h3 className="font-bold mb-4 mt-8" style={{ color: 'var(--color-deep-blue)' }}>シリーズ別の買取相場</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/software/zelda/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゼルダの伝説</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ティアキン・ブレワイの相場</p></Link>
            <Link href="/software/splatoon/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>スプラトゥーン</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>スプラ3・2の相場と売り時</p></Link>
            <Link href="/software/monster-hunter/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>モンスターハンター</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ワイルズ・ライズの相場</p></Link>
            <Link href="/software/dragon-quest/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ドラゴンクエスト</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>DQ3リメイク等の相場</p></Link>
            <Link href="/software/pokemon/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ポケモン</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ポケモンソフトの相場</p></Link>
            <Link href="/software/ff/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ファイナルファンタジー</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>FFソフトの相場</p></Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
