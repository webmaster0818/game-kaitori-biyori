import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'カイトリワールドの評判・口コミは怪しい？【2026年6月】送料・入金日数・減額条件を徹底解説',
  description:
    'カイトリワールドの評判・口コミを徹底調査。「怪しい」と言われる理由と実態、送料無料の条件（査定3,000円以上）、入金日数、減額基準、返送無料の例外、7日自動承認ルールまで公式情報をもとに解説します。',
  keywords: ['カイトリワールド 評判', 'カイトリワールド 口コミ', 'カイトリワールド 怪しい', 'カイトリワールド 買取', 'カイトリワールド 入金'],
  openGraph: {
    title: 'カイトリワールドの評判・口コミは怪しい？【2026年6月】徹底解説',
    description: 'カイトリワールドの評判と「怪しい」と言われる理由の実態を公式情報をもとに徹底調査。送料条件・入金日数・減額基準まで解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: 'ゲーム＋フィギュア・プラモまとめ買取', description: 'ゲーム機本体・ソフトに加え、フィギュア・プラモデル・鉄道模型などホビー系全般を一括で買取。運営元のメディアワールド株式会社は東京でゲーム専門店を22年間運営してきた会社で、2015年8月から宅配買取を展開しています（公式サイト記載）。' },
  { title: '査定スピードが速い', description: '商品到着日に査定結果を連絡（混雑時は1〜2日）と公式に明記。買取金額を承諾すればすぐに振込手続きが行われます。急いで現金化したい方に向いたサービスです。' },
  { title: '送料無料（査定3,000円以上の場合）', description: '査定結果が3,000円以上なら送料無料。3,000円未満の場合は宅配便500円・宅配便以外200円が査定額から差し引かれます（2023年3月16日申込分より）。少量で送る場合は注意が必要です。' },
  { title: '梱包ダンボール無料・価格保証買取あり', description: '買取用ダンボールは最大10箱まで無料で送付。さらに「価格保証買取」を選べば、申込時点の買取価格が5日間保証されるため、相場下落を気にせず発送できます。' },
];

const steps = [
  { step: 1, title: '買取申込み（かんたん買取 or 価格保証買取）', description: '公式サイトから申込み。その場で送る「かんたん買取」と、申込時の価格を5日間保証する「価格保証買取」の2方式から選べます。' },
  { step: 2, title: '梱包・発送', description: '無料の買取ダンボール（最大10箱）か手持ちの箱で梱包して発送。集荷依頼も可能です。フィギュアは緩衝材でしっかり保護しましょう。' },
  { step: 3, title: '査定（到着日に連絡）', description: '商品到着日に査定結果を連絡（混雑時1〜2日）。掲載されている買取価格は箱・付属品が揃った完品状態が前提で、汚れ・傷・欠品があると減額されます。' },
  { step: 4, title: '承諾・入金', description: '査定額を承諾すると振込手続きへ。振込手数料は無料です。なお査定結果の通知から7日以内に回答しないと自動承認扱いになる点に注意してください。' },
];

const dislikeReasons = [
  { reason: '知名度がまだ低い', fact: '宅配買取の開始は2015年8月と比較的新しいサービス。ただし運営元のメディアワールド株式会社は東京でゲーム専門店を22年間運営しており、古物商許可（東京都公安委員会 第306701605637号）も公式サイトに明記されています。' },
  { reason: '掲載価格と実際の査定額のギャップ', fact: '公式サイトに「掲載価格は完品状態が前提」と明記されており、箱の傷・汚れ・欠品で減額されます。高めの掲載価格を見て送ると、状態次第で想定より低い査定になることがあり、これが「怪しい」という印象につながりやすい構図です。' },
  { reason: '口コミが両極端', fact: '「入金が速い」「まとめて売れて便利」という好意的な声がある一方、「減額が厳しい」「繁忙期は査定連絡が遅い」という不満の声もレビューサイトで見られます。減額基準を理解した上で利用するのが現実的です。' },
];

const faqs = [
  { q: 'カイトリワールドは怪しい業者ですか？', a: '運営元はメディアワールド株式会社（東京都足立区竹の塚7-6-1）で、東京都公安委員会の古物商許可（第306701605637号）を取得しています。東京でゲーム専門店を22年間運営してきた実績があり、実在の事業者が運営する正規の買取サービスです。「怪しい」という検索が多いのは、知名度の低さと、完品前提の掲載価格と実査定額のギャップが主な理由と考えられます。' },
  { q: '送料は本当に無料ですか？', a: '査定結果が3,000円以上の場合は無料です。3,000円未満の場合は宅配便500円・宅配便以外200円が査定金額から差し引かれます（2023年3月16日申込分より）。少量より、ある程度まとめて送る方が有利です。' },
  { q: '入金はどのくらいで届きますか？', a: '商品到着日（混雑時1〜2日）に査定結果が連絡され、買取金額を承諾するとすぐに振込手続きが行われます。特定商取引法の表記では「買取了承メール到着から最短2日（土日祝を除く銀行営業日）」とされています。振込手数料は無料です。' },
  { q: '査定額に納得できない場合、返送料はかかりますか？', a: '査定額に不満がある場合は1点から返送無料（条件付き）です。ただし、買取承諾後や「査定結果連絡不要（自動承認）」で申し込んだ場合は返送不可、全品返送・返送依頼品以外の買取額が5,000円未満の場合などは着払い（自己負担）になります。条件を事前に確認しましょう。' },
  { q: '査定結果を放置するとどうなりますか？', a: '査定結果の通知から7日以内に承認・返送の回答をしない場合、「承認」扱いとなり支払い手続きが進みます（自動承認ルール）。返送を考えている場合は必ず7日以内に連絡してください。また、返送された商品を7日間受け取らない場合は所有権放棄とみなされます。' },
  { q: '梱包ダンボールは無料ですか？', a: 'はい、買取用ダンボールは最大10箱まで無料で送ってもらえます。集荷時に持参してもらうことも可能です。' },
  { q: '箱なしのゲームやフィギュアでも買取できますか？', a: '箱なしでも買取対象になる場合がありますが、掲載されている買取価格は完品状態が前提のため減額されます。箱・説明書・付属品はできる限り揃えて送るのが高価買取のコツです。' },
  { q: '価格保証買取とは何ですか？', a: '申込時点の買取価格を5日間保証してくれる買取方式です。相場が変動しやすい新作ソフトや人気商品を売るときに、発送までの値下がりリスクを避けられます。' },
];

export default function KaitoriWorldReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "カイトリワールドの評判・口コミは怪しい？送料・入金日数・減額条件を徹底解説", "datePublished": "2026-03-15", "dateModified": "2026-06-27", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'カイトリワールド' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ホビー総合</span>
            <span className="tag-pill text-xs" style={{ background: 'rgba(59,130,246,0.2)', color: '#93C5FD' }}>2026年6月27日 更新</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            カイトリワールドの評判・口コミ<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>「怪しい」は本当か徹底検証</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲームとフィギュア・プラモデルをまとめて売れる宅配買取サービス「カイトリワールド」。検索すると「怪しい」という言葉も出てきますが、実態はどうなのか。運営会社情報・送料条件・入金日数・減額基準・返送ルールを公式サイトの一次情報をもとに整理しました。
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
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>結論：怪しい業者ではないが、「完品前提の掲載価格」の理解が必須</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              カイトリワールドは、東京でゲーム専門店を22年間運営するメディアワールド株式会社（古物商許可：東京都公安委員会 第306701605637号）の正規サービスです。査定スピードと振込の速さは強みですが、掲載されている買取価格は箱・付属品が揃った完品状態が前提のため、状態が悪いと減額されます。送料無料も「査定3,000円以上」という条件付きです。この2点を理解して使えば、ゲームとホビーをまとめて売れる便利なサービスです。
            </p>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              関連：<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>今週どこが一番高いか価格を確認する</Link>／<Link href="/condition-guide/" style={{ color: 'var(--color-electric-green)' }}>箱なし・傷あり・ジャンクでも売れるか状態別マップで確認する</Link>／<Link href="/compare/mercari-vs-kaitori/" style={{ color: 'var(--color-electric-green)' }}>メルカリと買取どちらが得か手取り額をシミュレーションする</Link>
            </p>
          </div>
        </section>

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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />運営会社情報（公式サイトより）</h2>
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
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：カイトリワールド公式サイト（会社案内・特定商取引法に基づく表記）2026年6月12日確認</p>
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />送料・返送・自動承認ルールまとめ（見落とし注意）</h2>
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
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4 font-bold whitespace-nowrap">梱包材</td><td className="py-2">買取ダンボール最大10箱まで無料</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4 font-bold whitespace-nowrap">振込手数料</td><td className="py-2">無料</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4 font-bold whitespace-nowrap">査定連絡</td><td className="py-2">商品到着日（混雑時1〜2日）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4 font-bold whitespace-nowrap">入金</td><td className="py-2">承諾後すぐ振込手続き（特商法表記では承諾メール到着から最短2営業日）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4 font-bold whitespace-nowrap">返送（キャンセル）</td><td className="py-2">査定額に不満なら1点から返送無料。ただし買取承諾後・自動承認申込は返送不可。全品返送や返送依頼品以外の買取額5,000円未満などは着払い</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><td className="py-2 pr-4 font-bold whitespace-nowrap">自動承認</td><td className="py-2">査定結果の通知から7日以内に未回答の場合は「承認」扱いで支払い手続きへ</td></tr>
                <tr><td className="py-2 pr-4 font-bold whitespace-nowrap">返戻品の受取</td><td className="py-2">返送品が到着から7日経過しても受け取られない場合、所有権放棄とみなし処分</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：カイトリワールド公式サイト（買取の流れ・返品について・買取ダンボールについて）2026年6月12日確認</p>
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
                <li>+ 到着日査定・承諾後すぐ振込のスピード感</li>
                <li>+ 査定3,000円以上なら送料無料・振込手数料も無料</li>
                <li>+ 梱包ダンボール最大10箱まで無料</li>
                <li>+ 価格保証買取なら申込時価格を5日間保証</li>
                <li>+ 査定額に不満なら1点から返送無料（条件付き）</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- 掲載価格は完品前提。箱傷・欠品で減額されやすい</li>
                <li>- 査定3,000円未満だと送料分（500円／200円）が差し引かれる</li>
                <li>- 7日放置で自動承認になるため返送希望なら早めの回答が必要</li>
                <li>- 全品返送などは着払い（自己負担）になる</li>
                <li>- 大手チェーンに比べ知名度がまだ低い</li>
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />口コミの傾向（レビューサイト・SNS調査）</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-electric-green)' }}>好意的な口コミに多い内容</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・査定〜入金までが速かった</li>
                <li>・ゲームとフィギュアをまとめて処分できて便利</li>
                <li>・梱包キットが無料で手間がかからなかった</li>
                <li>・フィギュア・ホビー系の査定が相場より高めだった</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>否定的な口コミに多い内容</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・箱の傷や汚れによる減額が厳しい</li>
                <li>・繁忙期は査定結果の連絡が遅れた</li>
                <li>・サポートの返信に時間がかかった</li>
              </ul>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※主要レビューサイト・比較メディアに掲載されている口コミの傾向を当サイトで整理したものです（2026年6月調査）。個別の体験を保証するものではありません。</p>
        </section>

        {/* Recommended */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />こんな方におすすめ</h2>
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
            カイトリワールドで<span style={{ color: 'var(--color-electric-green)' }}>ゲーム＋ホビー</span>をまとめて売りませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            査定3,000円以上で送料無料・振込手数料無料。価格保証買取なら申込時の価格が5日間保証されます。
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
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のサービスもチェック</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/review/hobby-collect/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-orange text-xs mb-2 inline-block">ジャンクOK</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ホビーコレクト</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なし・ジャンク品もOKの宅配買取</p>
            </Link>
            <Link href="/review/surugaya/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-blue text-xs mb-2 inline-block">レトロ専門</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>駿河屋</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>レトロゲーム・限定版に強い老舗</p>
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
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/switch2/" style={{ color: 'var(--color-electric-green)' }}>Switch2買取価格相場</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/software/high-value/" style={{ color: 'var(--color-electric-green)' }}>高く売れるゲームソフトランキング</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/method/online/" style={{ color: 'var(--color-electric-green)' }}>宅配買取の流れとコツ</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/preparation/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取前の準備ガイド</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/shipping/" style={{ color: 'var(--color-electric-green)' }}>宅配買取の梱包・発送ガイド</Link></li>
          </ul>
        </section>

        <AuthorBox />
      </div>
    </>
  );
}
