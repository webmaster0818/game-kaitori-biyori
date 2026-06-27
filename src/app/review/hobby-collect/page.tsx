import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ホビーコレクトの評判・口コミは怪しい？【2026年6月】箱なし・ジャンクの査定額・古物商番号で検証',
  description:
    'ホビーコレクトの評判・口コミを徹底検証。「怪しい」と言われる理由の実態、ヒカカク!4.13点の口コミ傾向、古物商許可番号、箱なし・ジャンク品の査定額、送料・返送料・キャンセル条件まで公式情報（2026年6月確認）で整理。おすすめできる人・できない人も明記。',
  keywords: ['ホビーコレクト 評判', 'ホビーコレクト 口コミ', 'ホビーコレクト 怪しい', 'ホビーコレクト 買取', 'ゲーム ジャンク 買取', '箱なし ゲーム買取'],
  openGraph: {
    title: 'ホビーコレクトの評判・口コミは怪しい？【2026年6月】査定額・古物商番号で検証',
    description: 'ホビーコレクトの評判と「怪しい」の実態を公式情報で検証。口コミ傾向・古物商番号・箱なし/ジャンクの査定額・送料/返送条件まで解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: '箱なし・ジャンク品もOK', description: '箱や説明書がなくても買取OK。さらに壊れたゲーム機（電源が入らない、画面割れなど）も買取対象です。他社で断られた商品でも、ホビーコレクトなら値段がつく可能性があります。' },
  { title: '事前査定で安心', description: '商品を送る前にWebフォームや電話で事前査定が受けられます。おおよその買取金額がわかってから発送できるので、「送ったのに査定額が低すぎた」という不満を防げます。' },
  { title: '送料完全無料', description: '宅配買取の送料は完全無料。着払い伝票を使って発送するだけなので、費用の心配は一切ありません。梱包用の段ボールも無料で手配できます。' },
  { title: '最短3日で入金', description: '商品到着後、最短3営業日で査定が完了し入金されます。スピーディーな対応で、不用品を早く現金化したい方にも好評です。' },
];

const steps = [
  { step: 1, title: '事前査定（任意）', description: '公式サイトのフォームまたは電話で事前査定を依頼。商品名・状態・付属品の情報を伝えると、おおよその買取金額を教えてもらえます。' },
  { step: 2, title: '買取申込み・梱包', description: '公式サイトから買取を申込み、売りたいゲームを段ボールに梱包します。段ボールが必要な場合は無料で届けてもらえます。' },
  { step: 3, title: '発送・査定', description: '着払いで発送。到着後、専門スタッフが査定を行い、結果をメールまたは電話で通知します。' },
  { step: 4, title: '入金', description: '査定額に同意すれば、最短3営業日で指定口座に入金。スピーディーに現金化できます。' },
];

const faqs = [
  { q: 'どのくらい壊れていても買取してもらえますか？', a: '電源が入らない、画面が割れている、ディスクの読み込みができないなど、多くの故障品が買取対象です。ただし、水没や著しい破損（パーツの大部分が欠損）の場合は買取不可となることもあります。まずは事前査定でご確認ください。' },
  { q: '箱なしだとどのくらい査定額が下がりますか？', a: '商品によって異なりますが、箱・説明書なしの場合、完品と比べて20〜50%程度査定額が下がることが一般的です。ただし、ホビーコレクトは箱なしでも買取してくれる点が他社との大きな違いです。' },
  { q: '事前査定と実際の査定額は同じですか？', a: '事前査定はあくまで概算です。実際の商品を確認した際に、状態が事前の説明と異なる場合は査定額が変動することがあります。ただし大きく乖離することは少ないです。' },
  { q: 'ゲーム以外のホビー商品も買取対象ですか？', a: 'はい、フィギュア・プラモデル・トレーディングカード・鉄道模型なども買取対象です。ゲームとホビー商品をまとめて送ることもできます。' },
  { q: '査定に納得できない場合は？', a: 'キャンセル可能です。返送料は無料なので、査定額に納得できなければそのまま返送してもらえます。リスクなく査定を試せます。' },
  { q: '入金方法は選べますか？', a: '銀行口座への振込が基本です。振込手数料はホビーコレクトが負担してくれるため、査定額がそのまま受取り金額となります。' },
];

export default function HobbyCollectReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ホビーコレクトの評判・口コミは怪しい？箱なし・ジャンクの査定額・古物商番号で検証", "datePublished": "2026-03-15", "dateModified": "2026-06-27", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ホビーコレクト' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ジャンクOK</span>
            <span className="tag-pill text-xs" style={{ background: 'rgba(59,130,246,0.2)', color: '#93C5FD' }}>2026年6月27日 更新</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ホビーコレクトの評判・口コミ<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>「怪しい」は本当か徹底検証</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            箱なし・説明書なし・ジャンク品でも買取OKの宅配買取サービス「ホビーコレクト」。検索すると「怪しい」という言葉も出てきますが、実態はどうなのか。運営会社・古物商許可番号・口コミ傾向・箱なし/ジャンク品の査定額・送料/返送料の条件を、公式情報と比較サイトの一次情報をもとに整理しました。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://hobby-collect.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
              公式サイトで事前査定
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
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>結論：怪しい業者ではない。箱なし・ジャンクの「最後の受け皿」として使える</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-light)' }}>
              ホビーコレクトは、石川県金沢市の株式会社JUSTYが運営する正規の宅配買取サービスです（古物商許可：石川県公安委員会 第511010011942号）。箱なし・説明書なし・壊れたジャンク品でも買取対象になる点が最大の強みで、他社で断られた商品の「最後の受け皿」になります。買取比較サイト「ヒカカク!」の総合評価は<strong>4.13点（口コミ1,825件）</strong>と比較的高評価です（2026年6月18日閲覧）。一方で、キャンセル時の返送料が自己負担になる点と、箱なし・開封済みは査定額が下がりやすい点は理解して使う必要があります。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
              <div className="p-3 rounded-lg" style={{ background: 'rgba(16,185,129,0.06)' }}>
                <p className="font-bold mb-2" style={{ color: 'var(--color-electric-green)' }}>おすすめできる人</p>
                <ul className="space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・箱なし・説明書なしのゲームを売りたい</li>
                  <li>・壊れたゲーム機（ジャンク品）を処分したい</li>
                  <li>・他社で買取を断られた商品がある</li>
                  <li>・フィギュア・ホビーもまとめて売りたい</li>
                </ul>
              </div>
              <div className="p-3 rounded-lg" style={{ background: 'rgba(245,158,11,0.06)' }}>
                <p className="font-bold mb-2" style={{ color: 'var(--color-accent-orange)' }}>おすすめできない人</p>
                <ul className="space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・完品の人気ソフトを最高値で売りたい（専門店が有利）</li>
                  <li>・店頭でその場で現金化したい（宅配のみ）</li>
                  <li>・キャンセル前提で査定だけ試したい（返送料は自己負担）</li>
                </ul>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--color-text-light)' }}>
              <strong style={{ color: 'var(--color-deep-blue)' }}>「怪しい・詐欺」は本当？：</strong>運営会社・所在地・古物商許可番号がいずれも公式に明記されており、詐欺をうかがわせる事実は確認できません。「怪しい」という検索が出るのは、宅配買取への一般的な警戒感と、箱なし・開封済みで査定額が想定より下がるケースが「怪しい」という印象につながりやすいためと考えられます（断定ではなく確認項目ベースの評価）。
            </p>
            <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>
              関連：<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>今週どこが一番高いか価格を確認する</Link>／<Link href="/condition-guide/" style={{ color: 'var(--color-electric-green)' }}>箱なし・傷あり・ジャンクでも売れるか状態別マップで確認する</Link>／<Link href="/compare/mercari-vs-kaitori/" style={{ color: 'var(--color-electric-green)' }}>メルカリと買取どちらが得か手取り額をシミュレーションする</Link>
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ホビーコレクトの4つの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pros/Cons */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />メリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-electric-green)' }}>メリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>+ 箱なし・説明書なしでも買取OK</li>
                <li>+ 壊れたゲーム機（ジャンク品）もOK</li>
                <li>+ 事前査定で金額を確認してから発送できる</li>
                <li>+ 送料・返送料ともに無料</li>
                <li>+ 最短3日で入金のスピード対応</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- 店舗買取は非対応（宅配のみ）</li>
                <li>- 現行機以外のソフトは査定額が低め</li>
                <li>- ジャンク品の査定額はかなり安い場合も</li>
                <li>- 知名度が大手に比べると低い</li>
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
              <li>・箱や説明書がないゲームを売りたい方</li>
              <li>・壊れたゲーム機を処分したい方</li>
              <li>・他社で買取を断られた商品がある方</li>
              <li>・送る前に査定額を確認したい方</li>
              <li>・フィギュアやプラモデルも一緒に売りたい方</li>
            </ul>
          </div>
        </section>

        {/* 公式仕様・会社情報 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ホビーコレクトの公式仕様・会社情報（2026年6月18日時点）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <tbody>
                <tr><th>運営会社</th><td className="text-sm">株式会社JUSTY</td></tr>
                <tr><th>古物商許可</th><td className="text-sm">石川県公安委員会 第511010011942号</td></tr>
                <tr><th>所在地</th><td className="text-sm">石川県金沢市泉2丁目6-7</td></tr>
                <tr><th>送料・集荷</th><td className="text-sm">送料無料（往路を会社負担）。佐川急便が自宅集荷・日時指定可</td></tr>
                <tr><th>梱包キット</th><td className="text-sm">無料（申込時に依頼可）</td></tr>
                <tr><th>査定</th><td className="text-sm">商品到着後 最短当日〜7日目安（繁忙期は2週間程度の口コミあり）</td></tr>
                <tr><th>入金</th><td className="text-sm">買取承諾後 最短24時間〜数日で振込（振込手数料無料）</td></tr>
                <tr><th>キャンセル返送料</th><td className="text-sm">自己負担（大量・大型だと1箱2,000円前後の指摘あり）</td></tr>
                <tr><th>対応品目</th><td className="text-sm">ゲーム（レトロ機・ソフト）対応。得意ジャンルはフィギュア・ホビー・レトロ玩具・鉄道模型・トレカ</td></tr>
                <tr><th>買取方法</th><td className="text-sm">宅配買取・出張買取（エリア限定）。店頭買取は無し</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ホビーコレクト公式（recycle-net.jp/hobby/・会社概要）、ヒカカク!（2026年6月18日閲覧）。※古物商番号・出張対応エリア等は出典間で表記揺れがあるため、利用前に公式の最新情報をご確認ください。</p>
        </section>

        {/* 口コミ傾向（出典付き） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />口コミ・評判の傾向</h2>
          <div className="glass-card p-6">
            <p className="text-sm mb-3" style={{ color: 'var(--color-text-light)' }}>
              買取比較サイト「ヒカカク!」での総合評価は<strong>4.13点（5点満点）・口コミ1,825件</strong>、否定的評価は約2.6%と<strong>比較的高評価</strong>（2026年6月18日閲覧）。フィギュア・ホビーと一緒にゲームをまとめて手放したい層に向きます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold mb-1" style={{ color: 'var(--color-electric-green)' }}>良い評価の傾向</p>
                <ul className="space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・送料・集荷・梱包キットが無料で手軽</li>
                  <li>・フィギュア・ホビー・レトロに詳しい</li>
                  <li>・対応が丁寧・入金が早いという声</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-1" style={{ color: 'var(--color-accent-orange)' }}>気になる評価の傾向</p>
                <ul className="space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・キャンセル時の返送料が自己負担</li>
                  <li>・開封済み・箱なしは安くなりやすい</li>
                  <li>・繁忙期は査定連絡が遅れることがある</li>
                </ul>
              </div>
            </div>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ヒカカク!「ホビーコレクト」口コミページ（2026年6月18日閲覧）。評価は個人の体験に基づくもので、品目・状態により異なります。当サイトでは体験談の創作は行っていません。</p>
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
            ホビーコレクトで<span style={{ color: 'var(--color-electric-green)' }}>箱なし・ジャンク品</span>も買取しませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            他社で断られた商品でも買取OK。事前査定で金額を確認してから送れるので安心です。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://hobby-collect.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              無料で事前査定する
            </a>
            <Link href="/" className="btn-outline py-3 px-8" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#CBD5E1' }}>
              他のサービスと比較
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のサービスもチェック</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/review/kaitori-world/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-orange text-xs mb-2 inline-block">ホビー総合</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>カイトリワールド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>フィギュア・ホビー総合買取</p>
            </Link>
            <Link href="/review/game-oukoku/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-blue text-xs mb-2 inline-block">ゲーム専門</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲーム王国</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ゲーム専門の正確な査定</p>
            </Link>
          </div>
        </section>
        {/* 関連記事 */}
        <section style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(0,230,118,0.05)', borderRadius: '12px', borderLeft: '3px solid var(--color-electric-green)' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>関連記事</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取価格インデックス（今どこが一番高い？）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/condition-guide/" style={{ color: 'var(--color-electric-green)' }}>状態別ゲーム買取 許容度マップ（箱なし・傷・ジャンク）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/mercari-vs-kaitori/" style={{ color: 'var(--color-electric-green)' }}>メルカリ vs 買取 手取り額シミュレーション</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/which-is-best/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取はどこがいい？用途別おすすめ比較</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/kaitori-ranking/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取おすすめランキング15選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/ps4/" style={{ color: 'var(--color-electric-green)' }}>PS4買取おすすめ3選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/method/online/" style={{ color: 'var(--color-electric-green)' }}>宅配買取の流れとコツ</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/broken/" style={{ color: 'var(--color-electric-green)' }}>壊れたゲーム機の買取ガイド</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/boxless/" style={{ color: 'var(--color-electric-green)' }}>箱なしゲームの買取ガイド</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/preparation/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取前の準備ガイド</Link></li>
          </ul>
        </section>

        <AuthorBox />
      </div>
    </>
  );
}
