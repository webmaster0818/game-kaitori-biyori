import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ポケモンゲームソフトの買取相場｜高く売れるタイトルと時期【2026年版】',
  description:
    'ポケモンSV・アルセウス・ソードシールド・BDSP等のソフト別買取相場を一覧表で紹介。価格推移、高く売るコツ（新作発売前がベスト）、おすすめ買取店まで徹底解説。',
  keywords: ['ポケモン ゲーム 買取 相場', 'ポケモン ソフト 売る', 'ポケモンSV 買取', 'ポケモン 買取価格'],
  openGraph: {
    title: 'ポケモンゲームソフトの買取相場｜高く売れるタイトルと時期【2026年版】',
    description: 'ポケモンソフト別の買取相場と高く売るコツを徹底解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const priceData = [
  { title: 'ポケットモンスター スカーレット・バイオレット', platform: 'Switch', price: '3,000〜4,200円', trend: '安定', note: 'DLC込みは＋500〜1,000円' },
  { title: 'Pokemon LEGENDS アルセウス', platform: 'Switch', price: '2,500〜3,500円', trend: 'やや下降', note: 'アクション要素で根強い人気' },
  { title: 'ポケモン ソード・シールド', platform: 'Switch', price: '2,000〜3,000円', trend: '安定', note: 'エキスパンションパス付きは高値' },
  { title: 'ポケモン ブリリアントダイヤモンド・シャイニングパール', platform: 'Switch', price: '1,500〜2,500円', trend: '下降', note: 'リメイク作品のため価格は緩やか' },
  { title: 'ポケモン Let\'s Go! ピカチュウ・イーブイ', platform: 'Switch', price: '2,500〜3,500円', trend: '上昇', note: 'ポケモンGO連携で需要回復' },
  { title: 'ポケモン ハートゴールド・ソウルシルバー', platform: 'DS', price: '5,000〜8,000円', trend: '上昇', note: 'レトロプレミア。歩数計付きはさらに高値' },
  { title: 'ポケモン プラチナ', platform: 'DS', price: '4,000〜6,500円', trend: '上昇', note: 'DS世代で最も人気のタイトル' },
  { title: 'ポケモン エメラルド', platform: 'GBA', price: '3,500〜6,000円', trend: '上昇', note: 'GBA世代プレミア。バッテリー状態要確認' },
  { title: 'ポケモン ファイアレッド・リーフグリーン', platform: 'GBA', price: '3,000〜5,000円', trend: '上昇', note: '初代リメイクで安定した人気' },
  { title: 'ポケモン 赤・緑・青・ピカチュウ', platform: 'GB', price: '1,000〜3,000円', trend: '安定', note: '状態による差が大きい。箱付きは高額' },
];

const sellingTips = [
  { tip: '新作発売前に売る', detail: '新しいポケモンの発売が発表されると、旧作の買取価格が10〜20%下落する傾向があります。発表前に売却するのがベストタイミングです。ポケモンダイレクト等の配信日にも注意しましょう。' },
  { tip: 'DLC・追加コンテンツ込みで売る', detail: 'エキスパンションパスやDLCが紐づいた状態で売ると500〜1,500円のプラスになります。ダウンロード版のDLCは本体と紐づくため、パッケージ版のDLCカードがあると価値が上がります。' },
  { tip: 'レトロ作品はケース・説明書を揃える', detail: 'DS以前のポケモンソフトはケースや説明書の有無で買取価格が2〜3倍変わることがあります。特にハートゴールド・ソウルシルバーの歩数計（ポケウォーカー）付きは大幅プレミアです。' },
  { tip: '限定版・特典付きを活用する', detail: 'ダブルパック（2本セット）やSteelbook付き、コンビニ特典付きなどの限定版は通常版より高値がつきます。外箱や特典を保管しておくと査定額がアップします。' },
];

const recommendedShops = [
  { shop: 'ヒカカク！', feature: '最大20社一括査定', merit: 'ポケモンソフトは業者間の価格差が大きいため一括査定が最もお得' },
  { shop: 'ゲオ（GEO）', feature: '店頭即日査定', merit: '全国1,000店以上で即日現金化。ポケモンは常に在庫を求めている' },
  { shop: '駿河屋', feature: 'レトロゲーム高価買取', merit: 'DS以前のポケモンソフトを適正なプレミア価格で査定' },
];

const faqs = [
  { q: 'ポケモンのソフトはどれくらいで売れますか？', a: '最新作のスカーレット・バイオレットで3,000〜4,200円、レトロ作品のハートゴールド・ソウルシルバーで5,000〜8,000円が目安です。ポケモンシリーズは他のゲームと比べて値崩れしにくいのが特徴で、発売から数年経っても一定の価格を維持します。' },
  { q: 'ポケモンソフトを高く売るベストなタイミングはいつですか？', a: '新作の発表前が最も高く売れます。新作が発表されると旧作の価格が10〜20%下がるため、ポケモンダイレクトやニンテンドーダイレクト前が理想的です。また、夏休みや年末商戦前も需要が高まるため高値がつきやすい時期です。' },
  { q: 'セーブデータは消した方がいいですか？', a: 'はい、売却前にセーブデータを消去することをおすすめします。個人情報の保護のほか、買取業者側の初期化作業が不要になるため、スムーズな査定につながります。Switchのポケモンはソフト内にセーブデータがある場合と本体にある場合があるので確認しましょう。' },
  { q: 'レトロポケモン（DS・GBA・GB）のソフトは売れますか？', a: 'はい、むしろ現行ソフトより高く売れるものもあります。ハートゴールド・ソウルシルバーは5,000〜8,000円、プラチナは4,000〜6,500円で取引されています。駿河屋やまんだらけなどのレトロゲーム専門店が高く買い取ってくれます。' },
  { q: 'ダウンロード版のポケモンは売れますか？', a: 'いいえ、ダウンロード版はニンテンドーアカウントに紐づいているため売却できません。売却を考えるならパッケージ版を購入しましょう。パッケージ版の方がリセールバリューがあるため、実質的なコストが安くなることも多いです。' },
  { q: 'ポケモンカードゲームも一緒に売れますか？', a: 'ゲームソフトとポケモンカードを同時に買取してくれる店もあります。ヒカカク！やブックオフ、駿河屋などはカードも対象です。ただし、レアカードは専門のカードショップの方が高値がつくことが多いため、分けて売ることも検討しましょう。' },
];

export default function PokemonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ポケモンゲームソフトの買取相場｜高く売れるタイトルと時期【2026年版】", "datePublished": "2026-03-15", "dateModified": "2026-05-24", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'ポケモン買取相場' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ソフト別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ポケモンゲームソフトの買取相場
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ポケモンシリーズは中古ゲーム市場で最も人気が高く、値崩れしにくいタイトル群です。スカーレット・バイオレットからゲームボーイの初代まで、全タイトルの買取相場と価格推移を一覧表で紹介。新作発売前に売るべき理由や、レトロ作品のプレミア価格まで徹底解説します。
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ポケモンソフト買取相場一覧</h2>
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

        {/* 高く売るコツ */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ポケモンソフトを高く売るコツ</h2>
          <div className="glass-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sellingTips.map((item) => (
                <div key={item.tip} className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                  <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{item.tip}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* おすすめ買取店 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ポケモンソフトにおすすめの買取店</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>買取店</th>
                  <th>特徴</th>
                  <th>ポケモンソフトに強い理由</th>
                </tr>
              </thead>
              <tbody>
                {recommendedShops.map((row) => (
                  <tr key={row.shop}>
                    <td className="font-bold">{row.shop}</td>
                    <td className="text-sm">{row.feature}</td>
                    <td className="text-sm">{row.merit}</td>
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
            ポケモンソフトの<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>を今すぐチェック
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            ポケモンは業者間の価格差が大きいシリーズ。一括査定で最高値を見つけましょう。
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
            <Link href="/software/switch-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switchソフト買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>任天堂ソフトの相場一覧</p>
            </Link>
            <Link href="/hardware/switch/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switch本体買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>Switch本体の相場と売り方</p>
            </Link>
            <Link href="/knowledge/timing/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>売り時ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最適な売却タイミング</p>
            </Link>
            <Link href="/price-index/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取価格インデックス</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>毎週更新・今どこが一番高い？</p>
            </Link>
            <Link href="/review/kaitori-world/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取ワールドの評判</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>人気ソフトを高く売る業者</p>
            </Link>
          </div>
        </section>

        <p className="text-xs mt-8 text-center" style={{ color: 'var(--color-text-light)' }}>最終更新: 2026年5月</p>
        <AuthorBox />
      </div>
    </>
  );
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/software/high-value/" className="block bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl p-5 text-center shadow hover:opacity-95 transition">
            <span className="font-bold text-lg">📈 今週の「高く売れるゲームソフト」ランキングを見る</span>
            <span className="block text-sm opacity-90 mt-1">ブックオフ・ゲオ・駿河屋の公式買取価格を毎週金曜に実測更新中</span>
          </Link>
        </div>
      </section>
}
