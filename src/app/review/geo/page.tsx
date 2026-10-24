import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ゲオ宅配買取の評判・口コミ｜ダンボールは自前？ポイントは付く？梱包・入金まで解説',
  description:
    'ゲオ宅配買取の評判・口コミを調査しています。段ボールは自分で用意する必要があること（紙袋も可）、集荷は佐川急便であること、送料・振込手数料は無料であること、Pontaポイント付与の案内は公式になく受け取りは銀行振込のみであることなど、誤解されやすい仕様について公式情報（2026年7月28日確認）をもとに解説します。',
  keywords: ['ゲオ 買取', 'ゲオ宅配買取 口コミ', 'ゲオ ゲーム買取', 'ゲーム まとめ売り', 'ゲオ 査定'],
  openGraph: {
    images: ['/og.png'],
    title: 'ゲオ宅配買取の評判・口コミ｜ダンボールは自前？ポイントは付く？梱包・入金まで解説',
    description: 'ゲオ宅配買取のゲーム買取をレビューしています。送料・査定料・振込手数料が無料で1点から申し込める一方、段ボールは自分で用意する点など、公式情報をもとに解説します。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: '買取金額UPキャンペーンを不定期に開催', description: '2026年10月17日の公式確認では、スマホ・ゲーム機本体・デジタル家電を対象に、1点から買取金額が10%UPになる「買取金額UPキャンペーン」が10月25日（日）まで開催されています。ゲーム機本体はSwitch 2・Switch・PS5・PS4・Xboxシリーズのほか、ファミコンなどのレトロ機も対象です。あわせて「Nintendo Switch 2 本体買取強化中」の案内も掲載されています。7月18日に終了した前回の「買取アップキャンペーン」（2点10%UP・3点以上15%UP）とは条件が異なります。' },
  { title: '全国900店舗を展開するグループの運営', description: '全国に約900店舗を展開するゲオグループが運営しています。大手ならではの安定した査定基準と、万が一のトラブル時も安心のサポート体制が整っています。' },
  { title: '送料・査定料・振込手数料が無料（1点からOK）', description: '送料・査定料・振込手数料はすべて無料で、点数条件もなく1点から申し込めます。集荷は佐川急便が送り状を持って自宅に来てくれるため伝票記入も不要です。ただし段ボールは自分で用意する必要があります（無料の梱包キットはありません）。' },
  { title: '申込時点の買取価格を保証', description: 'Web申込が完了した時点の買取価格が保証されます（商品状態による減額はあり）。申込はWebから24時間365日可能で、申込から査定・入金まで自宅で完結します。なお買取代金の受け取りは銀行振込のみで、Pontaポイントでの受け取りやポイント付与の案内は公式にはありません（2026年6月12日時点）。' },
];

const steps = [
  { step: 1, title: 'Web申込み', description: 'ゲオ宅配買取の公式サイトから買取申込みフォームに必要事項を入力します。会員登録がまだの方は同時に登録も可能です。' },
  { step: 2, title: '梱包・集荷', description: '段ボールは自分で用意し、新聞紙などの緩衝材を入れて梱包します（丈夫な紙袋でも可）。集荷日を指定すれば佐川急便が送り状を持って自宅まで取りに来てくれます。コンビニ持ち込みは不可です。' },
  { step: 3, title: '査定', description: '商品到着の翌営業日から5営業日以内に査定結果がメールで届きます（繁忙期は遅延あり・2026年6月には公式が査定遅延を告知した実績あり）。商品ごとに承認/返品を選べます。' },
  { step: 4, title: '入金', description: '査定額を承認すると速やかに本人名義の銀行口座へ振込されます（金融機関により翌営業日着金）。受け取りは銀行振込のみです。査定結果の連絡から14日間回答しないとキャンセル扱いで返品されます。' },
];

const faqs = [
  { q: 'ゲオ宅配買取の段ボールは無料でもらえますか？', a: 'いいえ、段ボールは自分で用意する必要があります（公式キャンペーンページにも「ダンボールはお客様自身でご用意を」と明記）。スーパーの空き箱でもよく、新聞紙などの緩衝材で保護すれば丈夫な紙袋でも発送できます。送料自体は無料で、佐川急便のドライバーが送り状を持参するため伝票記入は不要です。' },
  { q: '買取金額でPontaポイントは付きますか？', a: '2026年6月12日時点で、宅配買取でのPontaポイント付与の案内は公式サイトにありません。買取代金の受け取りは申込者本人名義の銀行口座への振込のみです（店頭受け取りも不可）。' },
  { q: '現在はどのようなキャンペーンを実施していますか？', a: '2026年10月17日の公式確認では、スマホ・ゲーム機本体・デジタル家電を対象に、1点から買取金額が10%UPになる「買取金額UPキャンペーン」が10月25日（日）まで開催されています。ゲオの買取（スマホ・タブレット）からの申込は対象外で、状態によっては対象外になる場合があります。前回の「買取アップキャンペーン」（2点で10%UP・3点以上で15%UP）は2026年7月18日で終了しました。最新の開催状況は公式サイトでご確認ください。' },
  { q: '査定にどのくらい時間がかかりますか？', a: '公式案内では商品到着の翌営業日から5営業日以内（土日祝を除く）に査定結果がメールで届きます。申込が集中する時期は遅れることがあり、2026年6月11日には公式が査定遅延のお知らせを出しています。お急ぎの方は申込時期にご注意ください。' },
  { q: 'レトロゲームも買い取ってもらえますか？', a: '2026年7月28日確認時点で、ゲオ宅配買取は「レトロゲーム買取はじめました」としてファミコン等のレトロゲームも買取対象に加えています（名前書き・落書き、端子のサビがある品は買取不可）。また動かない本体・液晶割れなどもWEB限定「動かないゲーム機本体買い取ります」でジャンク品として買取可です。ただしレトロゲームの査定力は駿河屋・レトログなど専門店に強みがあるため、プレミア品は複数社で比較することをおすすめします。' },
  { q: '未開封のゲームや同じソフト複数本は売れますか？', a: 'いいえ、ゲオの宅配買取は未開封品の買取不可・同一タイトルの複数買取不可と公式ガイドラインに明記されています（未使用でも開封済みなら買取可）。未開封品や複数本はメルカリ等のフリマアプリでの売却が適しています。' },
  { q: '査定額に納得できない場合、返送料はかかりますか？', a: '査定額に不満がある場合の返送料はゲオ負担（無料）です。商品ごとに承認/返品を選べます。ただし買取対象外の商品を送った場合や、買取不可商品をまとめて返送する場合はお客様負担（破棄を選べば無料）になる点にご注意ください。' },
];

export default function GeoReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲオ宅配買取の評判・口コミ｜段ボール・ポイント・梱包・入金まで解説", "datePublished": "2026-03-15", "dateModified": "2026-07-28", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ゲオ宅配買取' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>大手チェーン</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲオ宅配買取<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>レビュー</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            全国約900店舗を展開するゲオグループの宅配買取サービスです。送料・査定料・振込手数料が無料で1点から申し込めます。一方で「段ボールは自分で用意」「集荷は佐川急便・伝票記入不要」「受け取りは銀行振込のみ」など、誤解されやすい仕様を公式情報（2026年7月28日確認）で正確に解説します。梱包・段ボールの入手方法、申込みの流れ、評判の傾向まで実務目線でまとめました。具体的な手順は<Link href="/guide/geo-takuhai/" style={{ color: '#34D399' }}>やり方ガイド</Link>をご覧ください。
          </p>
          <div className="rounded-lg p-4 mb-6 text-sm leading-relaxed" style={{ background: 'rgba(251,191,36,0.12)', border: '1px solid rgba(251,191,36,0.5)', color: '#FDE68A' }}>
            <p className="font-bold mb-1">ゲオの買取は現在、新規の申込みを停止しています（2026年10月24日 公式再確認）</p>
            <p>公式の告知によると、2026年10月15日に同社システムへの不正アクセスが確認されたため、10月17日21時からゲオの買取サービスを停止しています。終了時期は未定です。停止中は新規の買取申込みのほか、査定結果の確認・承認、買取代金の振込手続きも利用できません。すでに申し込んだ方の集荷は指定日時どおり行い、到着済みの荷物は順次査定するとしています。最新の状況は公式の告知をご確認ください。</p>
            <p className="text-xs mt-2">出典：<a href="https://buy.geo-online.co.jp/trade" target="_blank" rel="noopener noreferrer nofollow" className="underline">ゲオの買取「システムメンテナンスに伴うサービス ご提供停止のご案内」</a>（株式会社ゲオストア・2026年10月21日付）</p>
          </div>
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />梱包・段ボールのルール（よく誤解される点）</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>段ボールは自分で用意：</span>ゲオの宅配買取に無料の梱包キットはありません。スーパーなどでもらえる空き箱で問題なく、商品サイズに合った丈夫な箱をご使用ください。</li>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>紙袋でも発送可能：</span>箱がない場合は、新聞紙などの緩衝材で商品を保護したうえで丈夫な紙袋に入れて発送できます（公式FAQ記載）。</li>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>緩衝材は必須：</span>輸送中の傷は減額の原因になります。新聞紙や気泡緩衝材を必ず詰めてください。</li>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>集荷は佐川急便・伝票不要：</span>ドライバーが送り状を持参するので伝票の記入は不要です。コンビニや営業所への持ち込み発送はできません。集荷場所は本人確認書類の住所のみです。</li>
            </ul>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ゲオの宅配買取 公式FAQ・サービスガイドライン（2026年7月28日確認）</p>
          </div>
        </section>

        {/* Pros/Cons */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />メリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-electric-green)' }}>メリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>+ 大手チェーンが運営</li>
                <li>+ 送料・査定料・振込手数料が無料（1点からOK）</li>
                <li>+ 買取金額UPキャンペーンを不定期に開催（2026年10月25日まではゲーム機本体等が1点から10%UP）</li>
                <li>+ 申込時点の買取価格が保証される</li>
                <li>+ 査定不満時の返送料はゲオ負担</li>
                <li>+ 店舗持ち込み買取も選べる</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- 段ボールは自分で用意（無料キットなし）</li>
                <li>- 査定額が専門店より低めになる傾向</li>
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ゲオ宅配買取の利用が適している方</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・ゲームソフトをまとめて売りたい方</li>
              <li>・大手チェーンでの売却を希望する方</li>
              <li>・送料・査定料・振込手数料の無料を重視する方（受け取りは銀行振込のみ）</li>
              <li>・自宅から手軽に宅配買取を利用したい方（段ボールは自分で用意）</li>
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
                <li>・全国約900店舗を展開する大手グループが運営</li>
                <li>・開催時の買取金額UPキャンペーン（2026年10月17日時点はゲーム機本体等が10月25日まで1点から10%UP）</li>
                <li>・申込時点の買取価格が保証される（状態による減額はあり）</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>不満・注意として挙がりやすい点</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・段ボールは自分で用意する必要がある（無料キットなし）</li>
                <li>・査定額が専門店より低めになることがある</li>
                <li>・レトロゲームは対応開始したが名前書き・端子サビは不可（専門店に強みがある）</li>
                <li>・繁忙期は査定に時間がかかる（2026年6月は公式が遅延を告知）</li>
                <li>・受け取りは銀行振込のみ（ポイント受取・店頭受取は不可）</li>
              </ul>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※公式仕様は「ゲオの宅配買取 公式FAQ・サービスガイドライン・公式おしらせ（2026年7月28日確認）」に基づきます。評判の傾向は一般的に語られる内容の整理で、断定するものではありません。</p>
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
            ゲオ宅配買取なら<span style={{ color: 'var(--color-electric-green)' }}>送料・返送料無料</span>で1点から売れる
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            送料・査定料・振込手数料が無料で、査定に納得できないときの返送料もゲオが負担します。段ボールをご自身で用意（丈夫な紙袋も可）すれば、自宅から買取を申し込めます。
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
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>送料・返送料・キャンセル・箱なし対応で15社比較</p>
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
        <section style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--color-accent-soft-weak)', borderRadius: '12px', borderLeft: '3px solid var(--color-electric-green)' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>関連記事</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/guide/geo-takuhai/" style={{ color: 'var(--color-electric-green)' }}>ゲオ宅配買取のやり方ガイド（段ボール・日数・キャンセル・本人確認）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/software/high-value/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取価格DB（最終実測日を記載）で最も高く売れる買取店を確認</Link></li>
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
