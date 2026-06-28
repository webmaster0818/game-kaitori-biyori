import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ゲオ宅配買取の評判・口コミ【2026年6月】ダンボールは自前？ポイントは付く？梱包・入金まで徹底解説',
  description:
    'ゲオ宅配買取の評判・口コミを徹底調査。ダンボールは自分で用意（紙袋も可）、集荷は佐川急便、送料・振込手数料無料、Pontaポイント付与の案内は公式になし（銀行振込のみ）など、誤解されがちな仕様を公式情報（2026年6月12日確認）で正確に解説します。',
  keywords: ['ゲオ 買取', 'ゲオ宅配買取 口コミ', 'ゲオ ゲーム買取', 'ゲーム まとめ売り', 'ゲオ 査定'],
  openGraph: {
    title: 'ゲオ宅配買取の評判・口コミ【2026年6月】ダンボールは自前？ポイントは付く？梱包・入金まで徹底解説',
    description: 'ゲオ宅配買取のゲーム買取を徹底レビュー。まとめ売りボーナスや宅配キット無料の特徴を解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: 'まとめて買取キャンペーン開催中', description: '2026年6月1日〜7月5日は「まとめて買取キャンペーン」を実施中。ゲームソフト2本で+600円、5本で+1,800円、10本で+4,000円、15本で+6,500円が査定額に上乗せされます（査定額51円以上の商品が対象）。時期によりキャンペーン内容は変わります。' },
  { title: '全国900店舗グループの安心感', description: '全国に約900店舗を展開するゲオグループが運営。大手ならではの安定した査定基準と、万が一のトラブル時も安心のサポート体制が整っています。' },
  { title: '送料・査定料・振込手数料が無料（1点からOK）', description: '送料・査定料・振込手数料はすべて無料で、点数条件もなく1点から申し込めます。集荷は佐川急便が送り状を持って自宅に来てくれるため伝票記入も不要。ただしダンボールは自分で用意する必要があります（無料の梱包キットはありません）。' },
  { title: '申込時点の買取価格を保証', description: 'Web申込が完了した時点の買取価格が保証されます（商品状態による減額はあり）。申込はWebから24時間365日可能で、申込から査定・入金まで自宅で完結します。なお買取代金の受け取りは銀行振込のみで、Pontaポイントでの受け取りやポイント付与の案内は公式にはありません（2026年6月12日時点）。' },
];

const steps = [
  { step: 1, title: 'Web申込み', description: 'ゲオ宅配買取の公式サイトから買取申込みフォームに必要事項を入力します。会員登録がまだの方は同時に登録も可能です。' },
  { step: 2, title: '梱包・集荷', description: 'ダンボールは自分で用意し、新聞紙などの緩衝材を入れて梱包します（丈夫な紙袋でも可）。集荷日を指定すれば佐川急便が送り状を持って自宅まで取りに来てくれます。コンビニ持ち込みは不可です。' },
  { step: 3, title: '査定', description: '商品到着の翌営業日から5営業日以内に査定結果がメールで届きます（繁忙期は遅延あり・2026年6月11日時点で公式が査定遅延を告知中）。商品ごとに承認/返品を選べます。' },
  { step: 4, title: '入金', description: '査定額を承認すると速やかに本人名義の銀行口座へ振込されます（金融機関により翌営業日着金）。受け取りは銀行振込のみです。査定結果の連絡から14日間回答しないとキャンセル扱いで返品されます。' },
];

const faqs = [
  { q: 'ゲオ宅配買取のダンボールは無料でもらえますか？', a: 'いいえ、ダンボールは自分で用意する必要があります（公式キャンペーンページにも「ダンボールはお客様自身でご用意を」と明記）。スーパーの空き箱でもよく、新聞紙などの緩衝材で保護すれば丈夫な紙袋でも発送できます。送料自体は無料で、佐川急便のドライバーが送り状を持参するため伝票記入は不要です。' },
  { q: '買取金額でPontaポイントは付きますか？', a: '2026年6月12日時点で、宅配買取でのPontaポイント付与の案内は公式サイトにありません。買取代金の受け取りは申込者本人名義の銀行口座への振込のみです（店頭受け取りも不可）。' },
  { q: 'まとめ売りボーナスの条件は？', a: '2026年6月1日〜7月5日の「まとめて買取キャンペーン」では、ゲームソフト2本+600円／5本+1,800円／10本+4,000円／15本+6,500円が上乗せされます（査定額51円以上が対象、DVD・Blu-rayは別カウントで同額UP）。キャンペーン内容は時期により変わるため公式サイトでご確認ください。' },
  { q: '査定にどのくらい時間がかかりますか？', a: '公式案内では商品到着の翌営業日から5営業日以内（土日祝を除く）に査定結果がメールで届きます。申込が集中する時期は遅れることがあり、2026年6月11日には公式が査定遅延のお知らせを出しています。急ぎの方は時期に注意しましょう。' },
  { q: 'レトロゲームも買い取ってもらえますか？', a: 'ゲオ宅配買取ではPS3・Wii世代以降のゲームが主な対象です。ファミコンやスーパーファミコンなどのレトロゲームは買取対象外となる場合があります。レトロゲームは専門店への査定がおすすめです。' },
  { q: '未開封のゲームや同じソフト複数本は売れますか？', a: 'いいえ、ゲオの宅配買取は未開封品の買取不可・同一タイトルの複数買取不可と公式ガイドラインに明記されています（未使用でも開封済みなら買取可）。未開封品や複数本はメルカリ等のフリマアプリの方が向いています。' },
  { q: '査定額に納得できない場合、返送料はかかりますか？', a: '査定額に不満がある場合の返送料はゲオ負担（無料）です。商品ごとに承認/返品を選べます。ただし買取対象外の商品を送った場合や、買取不可商品をまとめて返送する場合はお客様負担（破棄を選べば無料）になる点に注意してください。' },
];

export default function GeoReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲオ宅配買取の評判・口コミ｜ダンボール・ポイント・梱包・入金まで徹底解説", "datePublished": "2026-03-15", "dateModified": "2026-06-29", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ゲオ宅配買取' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>大手チェーン</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲオ宅配買取<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>徹底レビュー</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            全国約900店舗を展開するゲオグループの宅配買取サービス。送料・査定料・振込手数料が無料で1点から申し込める手軽さが魅力です。一方で「ダンボールは自分で用意」「集荷は佐川急便・伝票記入不要」「受け取りは銀行振込のみ」など、誤解されやすい仕様を公式情報（2026年6月12日確認）で正確に解説します。梱包・ダンボールの入手方法、申込みの流れ、評判の傾向まで実務目線でまとめました。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://geo-online.co.jp/kaitori/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
              公式サイトで買取申込み
            </a>
            <Link href="/" className="btn-outline py-2.5 px-6" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}>
              ランキングに戻る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Features */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ゲオ宅配買取の4つの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Packing Guide */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />梱包・ダンボールのルール（よく誤解される点）</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ダンボールは自分で用意：</span>ゲオの宅配買取に無料の梱包キットはありません。スーパーなどでもらえる空き箱で問題なく、商品サイズに合った丈夫な箱を使いましょう。</li>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>紙袋でも発送可能：</span>箱がない場合は、新聞紙などの緩衝材で商品を保護したうえで丈夫な紙袋に入れて発送できます（公式FAQ記載）。</li>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>緩衝材は必須：</span>輸送中の傷は減額の原因になります。新聞紙やプチプチを必ず詰めましょう。</li>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>集荷は佐川急便・伝票不要：</span>ドライバーが送り状を持参するので伝票の記入は不要です。コンビニや営業所への持ち込み発送はできません。集荷場所は本人確認書類の住所のみです。</li>
            </ul>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ゲオの宅配買取 公式FAQ・キャンペーンページ（2026年6月12日確認）</p>
          </div>
        </section>

        {/* Pros/Cons */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />メリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-electric-green)' }}>メリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>+ 大手チェーンの安心感・信頼性</li>
                <li>+ 送料・査定料・振込手数料が無料（1点からOK）</li>
                <li>+ まとめて買取キャンペーンで最大+6,500円（時期による）</li>
                <li>+ 申込時点の買取価格が保証される</li>
                <li>+ 査定不満時の返送料はゲオ負担</li>
                <li>+ 店舗持ち込み買取も選べる</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- ダンボールは自分で用意（無料キットなし）</li>
                <li>- 査定額が専門店より低めになりがち</li>
                <li>- 未開封品・同一タイトル複数は買取不可</li>
                <li>- 繁忙期は査定に時間がかかる（2026年6月は公式が遅延告知）</li>
                <li>- 受取は銀行振込のみ（ポイント受取不可）</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />利用手順（4ステップ）</h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>
                  {String(s.step).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{s.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />こんな方におすすめ</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・ゲームソフトをまとめて売りたい方（キャンペーン時はまとめ売りボーナスあり）</li>
              <li>・大手の安心感を重視する方</li>
              <li>・送料・査定料・振込手数料の無料を重視する方（受け取りは銀行振込のみ）</li>
              <li>・自宅から手軽に宅配買取を利用したい方（ダンボールは自分で用意）</li>
              <li>・近くにゲオ店舗があり、店舗持ち込みも検討している方</li>
            </ul>
          </div>
        </section>

        {/* 評判の傾向 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ゲオ宅配買取の評判の傾向</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            「ゲオ宅配買取 評判」で調べる方が気になりやすいポイントを、公式情報と一般的に語られる傾向の範囲で整理しました。具体的な評点・件数は確認できる一次情報がないため記載していません。実際の査定額や対応は時期・商品により変わるため、最終的には公式サイトでご確認ください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-electric-green)' }}>好評として挙がりやすい点</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・送料・査定料・振込手数料が無料で1点から出せる手軽さ</li>
                <li>・佐川急便が送り状を持参するので伝票記入が不要</li>
                <li>・全国約900店舗の大手グループという安心感</li>
                <li>・キャンペーン期間中のまとめ売りボーナス</li>
                <li>・申込時点の買取価格が保証される（状態による減額はあり）</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>不満・注意として挙がりやすい点</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・ダンボールは自分で用意する必要がある（無料キットなし）</li>
                <li>・査定額が専門店より低めになることがある</li>
                <li>・レトロゲーム（PS3・Wii世代より前）は対象外の場合がある</li>
                <li>・繁忙期は査定に時間がかかる（2026年6月は公式が遅延を告知）</li>
                <li>・受け取りは銀行振込のみ（ポイント受取・店頭受取は不可）</li>
              </ul>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※公式仕様は「ゲオの宅配買取 公式FAQ・キャンペーンページ（2026年6月12日確認）」に基づきます。評判の傾向は一般的に語られる内容の整理で、断定するものではありません。</p>
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
            ゲオ宅配買取で<span style={{ color: 'var(--color-electric-green)' }}>まとめ売りボーナス</span>を活用しませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            不要なゲームをまとめて売るほどお得に。段ボール無料・送料無料で自宅から簡単に買取申込みできます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://geo-online.co.jp/kaitori/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              無料で買取申込みする
            </a>
            <Link href="/" className="btn-outline py-3 px-8" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#CBD5E1' }}>
              他のサービスと比較
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のサービスと比較する</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/method/online/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-blue text-xs mb-2 inline-block">比較ハブ</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>宅配買取おすすめ比較</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>送料・返送料・キャンセル・箱なし対応で7社比較</p>
            </Link>
            <Link href="/review/bookoff/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-orange text-xs mb-2 inline-block">大手</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ブックオフ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>全国900店舗超・店頭即現金化</p>
            </Link>
            <Link href="/review/netoff/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-blue text-xs mb-2 inline-block">まとめ売り</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ネットオフ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ゲーム・本・DVD一括買取</p>
            </Link>
          </div>
        </section>
        {/* 関連記事 */}
        <section style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(0,230,118,0.05)', borderRadius: '12px', borderLeft: '3px solid var(--color-electric-green)' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>関連記事</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/kaitori-ranking/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取おすすめランキング15選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/switch/" style={{ color: 'var(--color-electric-green)' }}>Switch買取おすすめ3選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/ps4/" style={{ color: 'var(--color-electric-green)' }}>PS4買取おすすめ3選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/method/online/" style={{ color: 'var(--color-electric-green)' }}>宅配買取おすすめ比較（送料・返送料・キャンセル・箱なし）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/bulk/" style={{ color: 'var(--color-electric-green)' }}>まとめ売りで高く売るコツ</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/preparation/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取前の準備ガイド</Link></li>
          </ul>
        </section>

        <AuthorBox />
      </div>
    </>
  );
}
