import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ファイナルファンタジー(FF)シリーズの買取相場｜全タイトル一覧【2026年版】',
  description:
    'FF7リバース・FF16・FFピクセルリマスター等の買取相場を一覧表で掲載。プラットフォーム別比較、限定版プレミア情報、値崩れしにくいタイトルの特徴まで徹底解説。',
  keywords: ['FF ファイナルファンタジー 買取', 'FF7リバース 買取', 'FF16 買取相場', 'FF 売る'],
  openGraph: {
    title: 'ファイナルファンタジー(FF)シリーズの買取相場｜全タイトル一覧【2026年版】',
    description: 'FFシリーズ全タイトルの買取相場をプラットフォーム別に徹底比較。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const priceData = [
  { title: 'FINAL FANTASY VII REBIRTH', platform: 'PS5', price: '3,500〜5,000円', trend: '安定', note: '3部作の2作目。完結編発表前が売り時' },
  { title: 'FINAL FANTASY XVI', platform: 'PS5', price: '2,000〜3,500円', trend: 'やや下降', note: 'PC版発売後にPS5版は若干下落' },
  { title: 'FINAL FANTASY VII REMAKE INTERGRADE', platform: 'PS5', price: '1,500〜2,500円', trend: '安定', note: 'PS Plus配布の影響で下落後安定' },
  { title: 'CRISIS CORE -FINAL FANTASY VII- REUNION', platform: 'PS5/Switch', price: '1,500〜2,800円', trend: '安定', note: 'Switch版はやや高値' },
  { title: 'FINAL FANTASY ピクセルリマスター（1-6）', platform: 'PS4/Switch', price: '3,000〜4,500円', trend: '安定', note: 'コレクターズBOXは10,000円超も' },
  { title: 'FINAL FANTASY XIV（パッケージ版）', platform: 'PS5/PS4', price: '500〜1,500円', trend: '下降', note: 'オンライン専用のため需要限定的' },
  { title: 'FINAL FANTASY X/X-2 HD Remaster', platform: 'PS4/Switch', price: '1,000〜2,000円', trend: '安定', note: '名作リマスターとして安定した人気' },
  { title: 'FINAL FANTASY XII THE ZODIAC AGE', platform: 'PS4/Switch', price: '800〜1,500円', trend: '安定', note: 'やり込み要素で根強いファンあり' },
  { title: 'FINAL FANTASY（SFC/FC オリジナル）', platform: 'SFC/FC', price: '500〜5,000円', trend: '上昇', note: '状態とタイトルで大幅に変動' },
  { title: 'FINAL FANTASY VII（PS1 オリジナル）', platform: 'PS1', price: '300〜1,500円', trend: '安定', note: '流通量が多く安価。黒ラベルは高値' },
];

const platformComparison = [
  { title: 'FF7 REBIRTH', ps5: '3,500〜5,000円', ps4: '-', switch_: '-', note: 'PS5独占タイトル' },
  { title: 'FF16', ps5: '2,000〜3,500円', ps4: '-', switch_: '-', note: 'PS5独占→PC版あり' },
  { title: 'CRISIS CORE REUNION', ps5: '1,500〜2,500円', ps4: '1,200〜2,000円', switch_: '1,800〜2,800円', note: 'Switch版がやや高値' },
  { title: 'FFピクセルリマスター', ps5: '-', ps4: '3,000〜4,000円', switch_: '3,500〜4,500円', note: 'Switch版が人気' },
  { title: 'FF X/X-2 HD', ps5: '-', ps4: '1,000〜1,800円', switch_: '1,200〜2,000円', note: '携帯性でSwitch版優位' },
];

const premiumEditions = [
  { edition: 'FF7 REBIRTH デラックスエディション', premium: '＋2,000〜4,000円', detail: 'SteelBook＋追加ミニゲーム。外箱完備なら大幅プレミア。' },
  { edition: 'FF16 デラックスエディション', premium: '＋1,500〜3,000円', detail: 'SteelBook＋クライヴのピンバッジ等。限定特典の有無で差。' },
  { edition: 'FFピクセルリマスター コレクターズエディション', premium: '＋5,000〜10,000円', detail: 'ビニールレコード＋アートブック付き。コレクター需要が非常に高い。' },
  { edition: 'FF7 REMAKE 1st CLASS EDITION', premium: '＋8,000〜15,000円', detail: 'クラウドフィギュア付き。フィギュアの状態が価格を左右。' },
];

const faqs = [
  { q: 'FFシリーズで最も高く売れるタイトルは何ですか？', a: '現行タイトルではFF7 REBIRTHが3,500〜5,000円で最も高値です。限定版ではFFピクセルリマスター コレクターズエディションが10,000円超のプレミアがつくこともあります。レトロ作品では状態の良いSFC版FFシリーズが高額になるケースがあります。' },
  { q: 'FF7リバースはいつ売るのがベストですか？', a: 'FF7リメイクプロジェクト完結編の正式発表前が理想的です。完結編が発表されると「まず最新作を」という心理が働き、旧作の需要が一時的に下がる可能性があります。逆に完結編発売直前は予習需要で上がることもあるため、動向を注視しましょう。' },
  { q: 'PS5版とSwitch版、どちらが高く売れますか？', a: 'マルチプラットフォームのFFタイトルは、Switch版の方がやや高く売れる傾向があります。Switch版は携帯モードで遊べる利便性が評価されるためです。特にCRISIS CORE REUNIONやFFピクセルリマスターはSwitch版の方が500〜1,000円ほど高値です。' },
  { q: 'FFの限定版は通常版よりどれくらい高く売れますか？', a: '限定版の内容によりますが、一般的に1,500〜15,000円のプレミアがつきます。特にフィギュアやアートブック付きの大型限定版は高額になりやすいです。ただし外箱や特典が欠品していると通常版と変わらない価格になることもあるので、保管状態が重要です。' },
  { q: 'FFのオンラインタイトル（FF14）のパッケージ版は売れますか？', a: 'パッケージ版の売却は可能ですが、オンラインゲームのためソフト単体の需要は低く、500〜1,500円程度です。利用権コードが未使用であれば価値がありますが、使用済みの場合はほぼ値がつかないこともあります。' },
  { q: 'レトロFF（SFC・PS1）の買取相場はどうですか？', a: 'SFC版FFシリーズは500〜5,000円と状態・タイトルで大きく変動します。特にFF6やFF5の箱・説明書付き完品は高額です。PS1版FF7は流通量が非常に多いため300〜1,500円と安価ですが、初期版の黒ラベル盤は希少価値があり高値がつきます。' },
];

export default function FFPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ファイナルファンタジー(FF)シリーズの買取相場｜全タイトル一覧【2026年版】", "datePublished": "2026-03-15", "dateModified": "2026-05-24", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'FFシリーズ買取相場' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ソフト別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ファイナルファンタジー(FF)シリーズの買取相場
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            FF7リバース・FF16・FFピクセルリマスターなど最新作から、SFC・PS1のレトロ作品まで、FFシリーズ全タイトルの買取相場を一覧表で掲載。プラットフォーム別の価格比較、限定版のプレミア情報、値崩れしにくいタイトルの特徴まで徹底解説します。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 買取相場表 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />FFシリーズ買取相場一覧</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>タイトル</th>
                  <th>機種</th>
                  <th>買取相場</th>
                  <th>傾向</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row) => (
                  <tr key={row.title}>
                    <td className="font-bold text-sm">{row.title}</td>
                    <td className="text-sm">{row.platform}</td>
                    <td className="font-bold" style={{ color: 'var(--color-electric-green)' }}>{row.price}</td>
                    <td className="text-sm">{row.trend}</td>
                    <td className="text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>※ 2026年5月時点の参考価格。状態・付属品により変動します。</p>
        </section>

        {/* プラットフォーム別比較 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />プラットフォーム別 買取価格比較</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>タイトル</th>
                  <th>PS5</th>
                  <th>PS4</th>
                  <th>Switch</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {platformComparison.map((row) => (
                  <tr key={row.title}>
                    <td className="font-bold text-sm">{row.title}</td>
                    <td className="text-sm">{row.ps5}</td>
                    <td className="text-sm">{row.ps4}</td>
                    <td className="text-sm">{row.switch_}</td>
                    <td className="text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 限定版プレミア */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />限定版・特別版のプレミア価格</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>エディション</th>
                  <th>プレミア額</th>
                  <th>詳細</th>
                </tr>
              </thead>
              <tbody>
                {premiumEditions.map((row) => (
                  <tr key={row.edition}>
                    <td className="font-bold text-sm">{row.edition}</td>
                    <td className="font-bold" style={{ color: 'var(--color-electric-green)' }}>{row.premium}</td>
                    <td className="text-sm">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 値崩れしにくいタイトル */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />値崩れしにくいFFタイトルの特徴</h2>
          <div className="glass-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>値崩れしにくい</h3>
                <ul className="text-sm space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・シリーズ最新作（発売1年以内）</li>
                  <li>・リメイク作品（FF7R関連）</li>
                  <li>・Switch独占 or Switch版マルチ</li>
                  <li>・コレクターズエディション完品</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>値崩れしやすい</h3>
                <ul className="text-sm space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・PS Plus/Game Passで配布されたタイトル</li>
                  <li>・オンライン専用タイトル（FF14等）</li>
                  <li>・PC版が後から発売されたタイトル</li>
                  <li>・セール常連タイトル</li>
                </ul>
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
            FFソフトの<span style={{ color: 'var(--color-electric-green)' }}>買取価格</span>を今すぐ確認
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            FFシリーズは限定版の有無で大きく価格が変わります。まずは一括査定で最高値をチェック。
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
            <Link href="/software/ps5-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS5ソフト買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS5ソフトの相場一覧</p>
            </Link>
            <Link href="/software/ps4-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS4ソフト買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS4ソフトの相場一覧</p>
            </Link>
            <Link href="/knowledge/price-guide/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取相場ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ハード・ソフト別の相場一覧</p>
            </Link>
          </div>
        </section>

        <p className="text-xs mt-8 text-center" style={{ color: 'var(--color-text-light)' }}>最終更新: 2026年5月</p>
        <AuthorBox />
      </div>
    </>
  );
}
