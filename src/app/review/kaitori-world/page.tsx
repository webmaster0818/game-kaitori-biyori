import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'
import KaitoriWorldCta from '@/components/KaitoriWorldCta';

export const metadata: Metadata = {
  title: 'カイトリワールド（買取ワールド）の評判・口コミは怪しい？ウリドキ3.9（168件）・11月キャンペーン・減額を検証【2026年11月】',
  description:
    'カイトリワールドが怪しいと言われる理由を、公式情報（2026年11月23日確認）とウリドキの最新口コミ20件の集計で検証します。返送料が自己負担になる条件、減額、入金日数、送料無料の条件も解説します。',
  keywords: ['カイトリワールド 評判', 'カイトリワールド 口コミ', 'カイトリワールド 怪しい', 'メディアワールド 怪しい', '買取ワールド 評判', 'カイトリワールド 入金'],
  openGraph: {
    images: ['/og.png'],
    title: 'カイトリワールド（買取ワールド）の評判・口コミは怪しい？ウリドキ3.9（168件）・11月キャンペーン・減額を検証【2026年11月】',
    description: 'カイトリワールドの評判と「怪しい」と言われる理由、運営会社メディアワールドの実態を公式情報にもとづいて調査しています。送料条件・入金日数・減額基準について解説します。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: 'ゲーム＋フィギュア・プラモまとめ買取', description: 'ゲーム機本体・ソフトに加え、フィギュア・プラモデル・鉄道模型などホビー系全般をまとめて買い取っています。運営元のメディアワールド株式会社は東京でゲーム専門店を22年間運営してきた会社で、2015年8月から宅配買取を展開しています（公式サイト記載）。' },
  { title: '査定スピードが速い', description: '商品到着日に査定結果を連絡する（混雑時は1〜2日）と公式に明記されています。買取金額を承諾すると、すぐに振込手続きが行われます。早く現金化したい方に適したサービスです。' },
  { title: '送料無料（査定3,000円以上の場合）', description: '査定結果が3,000円以上の場合は送料無料です。3,000円未満の場合は宅配便500円・宅配便以外200円が査定額から差し引かれます（2023年3月16日申込分より）。少量で送る場合はご注意ください。' },
  { title: '梱包用段ボール無料・価格保証買取あり', description: '買取用の段ボールは、最大10箱まで無料で送付されます。また「価格保証買取」を選ぶと、申込時点の買取価格が5日間保証されるため、相場の下落を気にせずに発送できます。' },
];

const steps = [
  { step: 1, title: '買取申込み（かんたん買取 or 価格保証買取）', description: '公式サイトから申し込みます。すぐに発送する「かんたん買取」と、申込時の価格を5日間保証する「価格保証買取」の2方式から選べます。' },
  { step: 2, title: '梱包・発送', description: '無料の買取用段ボール（最大10箱）または手持ちの箱で梱包して発送します。初めて利用する場合は、本人確認のため「集荷」での発送をお願いしていると公式FAQに記載されています。フィギュアは緩衝材で十分に保護することをおすすめします。' },
  { step: 3, title: '査定（到着日に連絡）', description: '商品到着日に査定結果が連絡されます（混雑時は1〜2日）。掲載されている買取価格は箱・付属品が揃った完品状態が前提で、汚れ・傷・欠品があると減額されます。' },
  { step: 4, title: '承諾・入金', description: '査定額を承諾すると、振込手続きに進みます。振込手数料は無料です。なお、査定結果の通知から7日以内に回答しない場合は自動承認として扱われる点にご注意ください。' },
];

const dislikeReasons = [
  { reason: '知名度が高くない', fact: '宅配買取の開始は2015年8月で、大手チェーンと比べると知名度は高くありません。ただし運営元のメディアワールド株式会社は東京でゲーム専門店を22年間運営しており、古物商許可（東京都公安委員会 第306701605637号）も公式サイトに明記されています。' },
  { reason: '掲載価格と実際の査定額のギャップ', fact: '公式サイトに「掲載価格は完品状態が前提」と明記されており、箱の傷・汚れ・欠品で減額されます。掲載価格を前提に発送すると、状態によっては想定より低い査定額になることがあり、これが「怪しい」という印象につながりやすいと考えられます。' },
  { reason: '口コミの評価が分かれている', fact: 'ウリドキの新しい順20件では★4以上が7件、★2以下が13件でした（2026年11月23日に当サイトで集計）。★2以下の13件のうち9件は、未開封フィギュアの外箱のキズ・シワによる減額への不満です。ゲーム機・ゲームソフトの売却に限ると4件中3件が★4以上で、売る品物によって評価が大きく異なります。' },
];

const faqs = [
  { q: 'カイトリワールドは怪しい業者ですか？', a: '運営元はメディアワールド株式会社（東京都足立区竹の塚7-6-1）で、東京都公安委員会の古物商許可（第306701605637号）を取得しています。東京でゲーム専門店を22年間運営してきた実績があり、実在の事業者が運営する正規の買取サービスです。「怪しい」という検索が多いのは、知名度が高くないことと、完品前提の掲載価格と実査定額のギャップが主な理由と考えられます。' },
  { q: '送料無料に条件はありますか？', a: '査定結果が3,000円以上の場合は無料です。3,000円未満の場合は宅配便500円・宅配便以外200円が査定金額から差し引かれます（2023年3月16日申込分より）。少量で送るよりも、ある程度まとめて送る方が有利です。' },
  { q: '入金はどのくらいで届きますか？', a: '商品到着日（混雑時1〜2日）に査定結果が連絡され、買取金額を承諾するとすぐに振込手続きが行われます。特定商取引法の表記では「買取了承メール到着から最短2日（土日祝を除く銀行営業日）」とされています。振込手数料は無料です。' },
  { q: '査定額に納得できない場合、返送料はかかりますか？', a: '査定額に不満がある場合は1点から返送無料（条件付き）です。ただし、買取承諾後や「査定結果連絡不要（自動承認）」で申し込んだ場合は返送不可です。また、全品返送、返送する品以外の買取額が5,000円未満、査定額300円未満の商品、買取価格が付かない商品、申込明細にない商品などは着払い（自己負担）になります（公式FAQ・2026年11月23日確認）。' },
  { q: '初めての利用でも自分で発送できますか？', a: '公式FAQでは、初めて利用する方には本人確認のため「集荷」での発送をお願いしていると記載されています。申込時に配送方法で「集荷を依頼」を選ぶと、無料の買取用段ボール（最大10箱）もあわせて依頼できます（2026年11月23日確認）。' },
  { q: '査定結果を放置するとどうなりますか？', a: '査定結果の通知から7日以内に承認・返送の回答をしない場合、「承認」扱いとなり支払い手続きが進みます（自動承認ルール）。返送を希望する場合は、必ず7日以内にご連絡ください。また、返送された商品を7日間受け取らない場合は所有権放棄とみなされます。' },
  { q: '梱包用の段ボールは無料ですか？', a: 'はい、買取用の段ボールは最大10箱まで無料で送付されます。集荷時に持参を依頼することも可能です。' },
  { q: '箱なしのゲームやフィギュアでも買取できますか？', a: '箱なしでも買取対象になる場合がありますが、掲載されている買取価格は完品状態が前提のため減額されます。高く売るためには、箱・説明書・付属品をできる限り揃えて送ることをおすすめします。' },
  { q: '価格保証買取とは何ですか？', a: '申込時点の買取価格が5日間保証される買取方式です。相場が変動しやすい新作ソフトや人気商品を売却する際に、発送までの値下がりのリスクを避けられます。' },
  { q: '運営会社のメディアワールドは怪しい会社ですか？', a: 'メディアワールド株式会社は東京都足立区に所在する実在の事業者で、東京都公安委員会の古物商許可（第306701605637号）を取得しています。東京でゲーム専門店を22年間運営してきた会社で、2015年8月からネット宅配買取「カイトリワールド」を展開しています。公式サイトに会社案内・特定商取引法に基づく表記が掲載されており、いわゆる無許可・実態不明の業者ではありません。' },
  { q: '「買取ワールド」とカイトリワールドは同じサービスですか？', a: '検索では「買取ワールド」と呼ばれることがありますが、本ページで扱っているのはメディアワールド株式会社が運営する宅配買取サービス「カイトリワールド」（kaitori-world.jp）です。似た名称の別サービスと区別するため、申し込みの際は公式サイトのURLと運営会社名（メディアワールド株式会社）をご確認ください。' },
];

export default function KaitoriWorldReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "カイトリワールドの評判・口コミは怪しい？運営会社メディアワールドの実態・送料・入金日数・減額条件を解説", "datePublished": "2026-03-15", "dateModified": "2026-11-23", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較している編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'カイトリワールド' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ホビー総合</span>
            <span className="tag-pill text-xs" style={{ background: 'rgba(59,130,246,0.2)', color: '#93C5FD' }}>2026年11月23日 更新</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            カイトリワールドの評判・口コミ<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>「怪しい」と言われる理由の検証</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            「カイトリワールド」は、ゲームとフィギュア・プラモデルをまとめて売却できる宅配買取サービスです。検索すると「怪しい」という言葉も表示されるため、当サイトでは運営会社情報・送料条件・入金日数・減額基準・返送ルールを、公式サイトの一次情報にもとづいて整理しました。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.kaitori-world.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
              公式サイトで買取価格を見る
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
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>正規の業者である一方、掲載価格は完品が前提</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              カイトリワールドは、東京でゲーム専門店を22年間運営するメディアワールド株式会社（古物商許可：東京都公安委員会 第306701605637号）の正規サービスです。査定と振込の早さに強みがありますが、掲載されている買取価格は箱・付属品が揃った完品状態が前提のため、状態によっては減額されます。また、送料無料には「査定3,000円以上」という条件があります。この2点を理解したうえでご利用いただくと、ゲームとホビーをまとめて売却できるサービスです。
            </p>
            <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--color-text-light)' }}>
              <strong style={{ color: 'var(--color-deep-blue)' }}>口コミ・評判の結論：</strong>買取口コミサイトのウリドキでは総合3.9（168件）です（2026年11月23日確認。同サイトで最も新しい口コミは2025年5月20日の投稿のため、直近の評判は反映されていない点にご注意ください）。当サイトがウリドキの新しい順20件（2023年7月9日〜2025年5月20日の投稿）を読んで分類したところ、★4以上は7件、★2以下は13件でした。低い評価の多くはフィギュアの売却で、「未開封でも外箱のキズ・シワで1〜2割減額された」が9件、「返送料を着払いで請求された」が6件です。一方、ゲーム機・ゲームソフトの売却は4件中3件が★4以上で、「到着当日〜翌日に査定・入金された」という声が6件ありました。2026年11月は、ホビー最大30%アップ・ゲーム最大20%アップ（いずれも11月30日23:59まで）などのキャンペーンが公式サイトに掲載されています。
            </p>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              関連：<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>現在最も高い業者を買取価格DBで確認する</Link>／<Link href="/condition-guide/" style={{ color: 'var(--color-electric-green)' }}>箱なし・傷あり・ジャンク品の売却可否を状態別マップで確認する</Link>／<Link href="/compare/mercari-vs-kaitori/" style={{ color: 'var(--color-electric-green)' }}>メルカリと買取の手取り額をシミュレーションで比較する</Link>
            </p>
          </div>
        </section>

        <KaitoriWorldCta />

        {/* Features */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />カイトリワールドの4つの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Company Info */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />運営会社「メディアワールド株式会社」の会社情報</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-light)' }}>
            「メディアワールド 怪しい」と検索されることもありますが、運営元のメディアワールド株式会社は東京都公安委員会の古物商許可を持つ実在の事業者で、東京でゲーム専門店を22年間運営してきた会社です。なお、カイトリワールドは検索で「買取ワールド」と表記されることもあります（本ページで扱うのは kaitori-world.jp のサービスです）。公式サイト記載の会社情報は以下のとおりです。
          </p>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>運営会社</th><td className="py-2">メディアワールド株式会社</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>所在地</th><td className="py-2">〒121-0813 東京都足立区竹の塚7-6-1</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>古物商許可</th><td className="py-2">東京都公安委員会 第306701605637号</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>沿革</th><td className="py-2">東京でゲーム専門店を22年間運営。2015年8月にネット宅配買取「カイトリワールド」を開始</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>買取対象</th><td className="py-2">ゲーム機本体・ゲームソフト・フィギュア・鉄道模型・ホビー関連商品</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>利用条件</th><td className="py-2">18歳未満は利用不可</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：カイトリワールド公式サイト（「カイトリワールドについて」・特定商取引法に基づく表記）2026年11月23日確認</p>
          </div>
        </section>

        {/* Fee 4-point */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />手数料の確認：出張費・査定料・キャンセル料・返送料の4項目</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>出張費</th><td className="py-2">－（宅配買取のため出張買取なし）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>査定料</th><td className="py-2">無料</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>キャンセル料</th><td className="py-2">無料</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>返送料（売らない場合）</th><td className="py-2">原則1点から無料。ただし、全品返送、返送する品以外の買取額が5,000円未満、査定額300円未満の商品、買取価格が付かない商品などは着払い（利用者負担）。条件は下記の「返送料が利用者負担になる条件」をご確認ください</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：カイトリワールド公式サイト（よくある質問・ご返送について）2026年11月23日確認。送料無料は査定合計3,000円以上が条件です。振込手数料は無料ですが、セブンペイメント（コンビニ受取）を選ぶと手数料480円（税込）が買取金額から差し引かれます。</p>
          </div>
        </section>

        {/* Suspicious? */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />「カイトリワールドは怪しい」と言われる3つの理由と実態</h2>
          <div className="space-y-4">
            {dislikeReasons.map((r, i) => (
              <div key={i} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>理由{i + 1}：{r.reason}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{r.fact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fees & Rules (Information Gain) */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />送料・返送・自動承認ルールの一覧</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <thead>
                <tr className="border-b-2" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
                  <th className="text-left py-2 pr-4" style={{ color: 'var(--color-deep-blue)' }}>項目</th>
                  <th className="text-left py-2" style={{ color: 'var(--color-deep-blue)' }}>条件</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4 font-bold whitespace-nowrap">送料</td><td className="py-2">査定3,000円以上で無料。未満は宅配便500円／宅配便以外200円を査定額から差し引き</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4 font-bold whitespace-nowrap">梱包材</td><td className="py-2">買取用段ボール最大10箱まで無料。依頼した箱数より届いた荷物が少ない場合などは、1箱500円が査定額から差し引かれることがある</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4 font-bold whitespace-nowrap">振込手数料</td><td className="py-2">無料</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4 font-bold whitespace-nowrap">査定連絡</td><td className="py-2">商品到着日（混雑時1〜2日）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4 font-bold whitespace-nowrap">入金</td><td className="py-2">承諾後すぐ振込手続き（特商法表記では承諾メール到着から最短2営業日）。振込手数料は無料、セブンペイメントは手数料480円</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4 font-bold whitespace-nowrap">返送（キャンセル）</td><td className="py-2">査定額に不満がある場合は1点から返送無料。ただし買取承諾後・自動承認申込は返送不可。着払いになる条件は下の表のとおり</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4 font-bold whitespace-nowrap">初回の発送方法</td><td className="py-2">初めて利用する場合は本人確認のため「集荷」を依頼（自分で発送できるのは2回目以降）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4 font-bold whitespace-nowrap">自動承認</td><td className="py-2">査定結果の通知から7日以内に未回答の場合は「承認」扱いで支払い手続きへ</td></tr>
                <tr><td className="py-2 pr-4 font-bold whitespace-nowrap">返戻品の受取</td><td className="py-2">返送品が到着から7日経過しても受け取られない場合、所有権放棄とみなして処分</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：カイトリワールド公式サイト（「買取の流れ」「ご返送について」「買取ダンボール無料サービス」「よくある質問」）2026年11月23日確認</p>
          </div>
          <div className="glass-card p-6 mt-6 overflow-x-auto" id="return-fee">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>返送料が利用者負担（着払い）になる条件</h3>
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-light)' }}>口コミで不満の多い返送料について、公式FAQに記載されている条件を整理しました。次のいずれかに当てはまる場合、返送料は利用者の負担になります。</p>
            <ul className="space-y-1 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・査定を依頼した商品をすべて返送する場合</li>
              <li>・返送する品以外の買取額が5,000円未満の場合</li>
              <li>・査定額が300円未満の商品、買取価格が付かない商品</li>
              <li>・申込時の明細に記載のない商品</li>
              <li>・価格保証期間が切れたことによる減額商品、申込時の価格保証金額と査定額に相違がない商品</li>
              <li>・同一商品を複数点申し込んだ際の減額商品</li>
              <li>・取り扱いのない商品（PCゲーム・サンプル品・偽造品など）</li>
              <li>・申込情報や書類の不備、送り間違いなど、査定結果以外の理由による返送</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--color-text-light)' }}>少額のソフトを数本だけ送ってキャンセルすると、返送料の負担が買取額を上回ることがあります（ウリドキには、ソフト2本の返送で着払い940円を支払ったという2024年5月の投稿があります）。返送の可能性がある場合は、合計額が5,000円を超えるようにまとめて送るか、申込前に公式サイトで見積もりを確認することをおすすめします。</p>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：カイトリワールド公式「よくある質問」「ご返送について」（2026年11月23日確認）。返送無料サービスは内容の変更・終了がありうると公式に記載されています。</p>
          </div>
        </section>

        {/* Pros/Cons */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />メリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-electric-green)' }}>メリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>+ ゲームとフィギュア・ホビーをまとめて売れる</li>
                <li>+ 到着日に査定し、承諾後すぐに振込手続き</li>
                <li>+ 査定3,000円以上なら送料無料・振込手数料も無料</li>
                <li>+ 梱包用段ボール最大10箱まで無料</li>
                <li>+ 価格保証買取なら申込時価格を5日間保証</li>
                <li>+ 査定額に不満がある場合は1点から返送無料（条件付き）</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- 掲載価格は完品前提。箱傷・欠品で減額されやすい</li>
                <li>- 査定3,000円未満だと送料分（500円／200円）が差し引かれる</li>
                <li>- 7日間回答しないと自動承認となるため、返送を希望する場合は早めの回答が必要</li>
                <li>- 全品返送などは着払い（自己負担）になる</li>
                <li>- 大手チェーンに比べると知名度が高くない</li>
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

        {/* Review Tendency */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />口コミ・評判（ウリドキ・ヒカカク！の掲載内容を当サイトで集計）</h2>
          <div className="glass-card p-6 mb-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>口コミサイトの評点（ウリドキ 2026年11月23日・ヒカカク！ 10月26日確認）</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
                <thead>
                  <tr>
                    <th className="text-left py-2 pr-4" style={{ color: 'var(--color-deep-blue)' }}>掲載サイト</th>
                    <th className="text-left py-2 pr-4" style={{ color: 'var(--color-deep-blue)' }}>総合評価</th>
                    <th className="text-left py-2" style={{ color: 'var(--color-deep-blue)' }}>口コミ件数</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="py-2 pr-4">ウリドキ（買取口コミサイト）</td><td className="py-2 pr-4">3.9</td><td className="py-2">168件（最新の投稿 2025年5月20日）</td></tr>
                  <tr><td className="py-2 pr-4">ヒカカク！（買取比較サイト）</td><td className="py-2 pr-4">4.0</td><td className="py-2">6件（星5が3件・星4が2件・星1が1件）</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--color-text-light)' }}>
              件数の多いウリドキでは、高評価の口コミに「到着当日に査定・入金された」「プラモデルや完成品フィギュアが他店より高かった」という内容が多く見られます。低評価の口コミでは「未開封のフィギュアでも外箱のキズ・シワで減額された」「返送を選んだら返送料を着払いで請求された」という内容が目立ちます。公式の「1点から返送無料」には条件があるため、返送の条件は下記の「送料・返送・自動承認ルールの一覧」でご確認ください。
            </p>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ウリドキ「カイトリワールドの買取に関する口コミ・評判」（2026年11月23日再確認・評点と件数は10月26日から変化なし）、ヒカカク！「カイトリワールド」店舗ページ（2026年10月26日確認）。評点・件数は各サイトの集計で、投稿により変動します。ヒカカク！は件数が少ないため、傾向の判断にはウリドキの件数を参考にしています。</p>
          </div>
          <div className="glass-card p-6 mb-6" style={{ borderLeft: '4px solid var(--color-accent-orange)' }}>
            <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>2026年11月のキャンペーン（公式サイト掲載）</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              公式サイトでは、2026年11月1日0:00〜11月30日23:59の期間で「まとめ売り強化月間・ホビー還元祭」（ホビー対象・査定合計3,000円以上で買取最大30%アップ）、「ゲーム買取祭り」（ゲーム限定で買取最大20%アップ）、人気本体の買取アップ額を2倍にする「倍々ゲーム祭り」が掲載されています。あわせて「冬の買取BIGチャンス」（2026年11月7日0:00〜12月6日23:59申込分。査定額合計5,000円ごとに抽選1回分、賞品はSwitch2・Amazonギフトカード）も掲載されています。初めて利用する方向けの買取金額アップ（最大1,000円）は随時開催、メディアワールド通販で購入すると買取額3%アップのクーポンが付く「買って売ってキャンペーン」は終了日未定と記載されています。10月はキャンペーン期間が延長されたことがあるため、対象期間と条件は申込前に公式サイトでご確認ください。
            </p>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：カイトリワールド公式サイト トップページ（2026年11月2日確認、11月23日に再確認）</p>
          </div>
          <div className="glass-card p-6" id="review-breakdown">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>ウリドキの新しい順20件の内訳（当サイト集計）</h3>
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-light)' }}>ウリドキの口コミ一覧の1ページ目（新しい順20件・投稿日 2023年7月9日〜2025年5月20日）を当サイトで1件ずつ読み、売った品物と内容で分類しました。</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
                <thead>
                  <tr className="border-b-2" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
                    <th className="text-left py-2 pr-4" style={{ color: 'var(--color-deep-blue)' }}>売った品物（ウリドキの分類）</th>
                    <th className="text-left py-2 pr-4" style={{ color: 'var(--color-deep-blue)' }}>件数</th>
                    <th className="text-left py-2" style={{ color: 'var(--color-deep-blue)' }}>★4以上／★2以下</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4">ゲーム機本体・ゲームソフト</td><td className="py-2 pr-4">4件</td><td className="py-2">3件／1件</td></tr>
                  <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4">フィギュア・プラモデル</td><td className="py-2 pr-4">13件</td><td className="py-2">4件／9件</td></tr>
                  <tr><td className="py-2 pr-4">その他のおもちゃ（ぬいぐるみ・プラモデル等）</td><td className="py-2 pr-4">3件</td><td className="py-2">0件／3件</td></tr>
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
              <div>
                <h4 className="font-bold mb-2 text-sm" style={{ color: 'var(--color-electric-green)' }}>好意的な内容（20件中・重複あり）</h4>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                  <li>・査定・入金が早い（到着当日〜翌日に査定、承諾当日に振込など）：6件</li>
                  <li>・他店の見積もりより買取価格が高かった（ゲーム機・ガンプラ・完成品フィギュア）：4件</li>
                  <li>・箱付きの一番くじフィギュアは大半が満額だった：1件</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-sm" style={{ color: 'var(--color-accent-orange)' }}>否定的な内容（20件中・重複あり）</h4>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                  <li>・未開封フィギュアでも外箱のキズ・シワ・日焼けで1〜2割以上減額された：9件</li>
                  <li>・返送料（着払い）を請求された：6件</li>
                  <li>・箱・説明書なしのソフトが大きく減額された（例：3,500円→700円）：1件</li>
                  <li>・掲載のない商品の見積もり回答が集荷日までに来なかった：1件</li>
                  <li>・本人確認書類の住所が発送元の住所と一致せず手続きが止まった：1件</li>
                </ul>
              </div>
            </div>
            <p className="text-sm leading-relaxed mt-4" style={{ color: 'var(--color-text-light)' }}>集計から、ゲーム機・ゲームソフトは査定の早さが評価されている一方、箱の状態が価格を大きく左右するフィギュアは減額への不満が集中していることが分かります。フィギュアを売る場合は、箱の状態を申込前に確認し、返送の可能性がある場合は上記の返送料の条件を確認してからご利用ください。</p>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ウリドキ「カイトリワールドの買取に関する口コミ・評判」1ページ目（2026年11月23日確認・総合3.9／168件）。分類は当サイトによるもので、1件の口コミが複数の内容に該当する場合は重複して数えています。ウリドキの最新の投稿は2025年5月20日のため、現在の査定基準と異なる可能性があります。</p>
          </div>
        </section>

        {/* Recommended */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />おすすめできる方</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・ゲームとフィギュア・プラモデルをまとめて売りたい方</li>
              <li>・できるだけ早く入金してほしい方</li>
              <li>・相場下落が心配な新作を価格保証付きで売りたい方</li>
              <li>・箱・付属品が揃った状態の良い商品を持っている方</li>
              <li>・合計3,000円以上になる量をまとめて送れる方</li>
            </ul>
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
            <span style={{ color: 'var(--color-electric-green)' }}>ゲームとホビー</span>のまとめ売りはカイトリワールドへ
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            査定3,000円以上で送料無料、振込手数料も無料です。価格保証買取を選ぶと、申込時の価格が5日間保証されます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.kaitori-world.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              公式サイトで買取価格を見る
            </a>
            <Link href="/" className="btn-outline py-3 px-8" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#CBD5E1' }}>
              他のサービスと比較
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のサービスのレビュー</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/review/hobby-collect/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-orange text-xs mb-2 inline-block">ジャンク品買取可</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ホビーコレクト</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なし・ジャンク品も買取対象の宅配買取</p>
            </Link>
            <Link href="/review/surugaya/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-blue text-xs mb-2 inline-block">レトロ専門</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>駿河屋</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>レトロゲーム・限定版に強みがある老舗</p>
            </Link>
          </div>
        </section>
        {/* 関連記事 */}
        <section style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--color-accent-soft-weak)', borderRadius: '12px', borderLeft: '3px solid var(--color-electric-green)' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>関連記事</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取価格インデックス（現在最も高い業者の確認）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/condition-guide/" style={{ color: 'var(--color-electric-green)' }}>状態別ゲーム買取 許容度マップ（箱なし・傷・ジャンク）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/mercari-vs-kaitori/" style={{ color: 'var(--color-electric-green)' }}>メルカリ vs 買取 手取り額シミュレーション</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/which-is-best/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取業者の用途別おすすめ比較</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/kaitori-ranking/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取おすすめランキング15選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/switch2/" style={{ color: 'var(--color-electric-green)' }}>Switch 2買取価格相場</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/software/high-value/" style={{ color: 'var(--color-electric-green)' }}>高く売れるゲームソフトランキング</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/method/online/" style={{ color: 'var(--color-electric-green)' }}>宅配買取の流れとポイント</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/preparation/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取前の準備ガイド</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/shipping/" style={{ color: 'var(--color-electric-green)' }}>宅配買取の梱包・発送ガイド</Link></li>
          </ul>
        </section>

        <KaitoriWorldCta />
        <AuthorBox />
      </div>
    </>
  );
}
