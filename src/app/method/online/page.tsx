import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ゲーム宅配買取おすすめ比較【2026年6月】送料・返送料・キャンセル・梱包キット・箱なし対応で選ぶ',
  description:
    'ゲームの宅配買取を主要サービスで実務比較。送料・キャンセル時の返送料・自動承認の有無・梱包キット（無料ダンボール）・箱なし/傷あり対応・レトロ対応・査定期間を、各社公式の確認済み情報（2026年6月確認）で一覧化。宅配買取の選び方と注意点がわかります。',
  keywords: ['ゲーム 宅配買取 おすすめ', 'ゲーム 宅配買取 比較', '宅配買取 送料', '宅配買取 キャンセル', '宅配買取 箱なし', 'ゲーム 宅配買取 梱包キット'],
  openGraph: {
    title: 'ゲーム宅配買取おすすめ比較【2026年6月】送料・返送料・キャンセル・箱なし対応で選ぶ',
    description: '主要サービスの送料・返送料・キャンセル・梱包キット・箱なし対応・レトロ対応・査定期間を公式の確認済み情報で実務比較。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

// 比較データはすべて各社レビュー（src/app/review/*）の確認済み値からの転記。
// 数値・条件の創作はせず、出典・確認日を踏襲。不明・サービス対象外は「要確認」「-」とする。
const serviceComparison = [
  {
    name: 'ゲーム王国',
    href: '/review/game-oukoku/',
    shipping: '無料（佐川急便の集荷限定）',
    returnFee: 'ゲーム王国負担（無料）',
    cancel: '査定後キャンセル可。部分キャンセル不可の指摘あり',
    kit: '梱包キット2箱まで無料',
    nobox: '故障品・箱なし・付属品欠品も対応（公式明記）',
    retro: '全世代対象とFAQに記載／一方でPS2等が対象外の口コミも（要確認）',
    speed: '到着後1〜3営業日で査定連絡',
  },
  {
    name: 'ホビーコレクト',
    href: '/review/hobby-collect/',
    shipping: '無料（往路は会社負担・佐川集荷）',
    returnFee: '自己負担（1箱2,000円前後の指摘あり・公式に表記揺れ、要確認）',
    cancel: 'キャンセル可',
    kit: '無料（申込時に依頼）',
    nobox: '箱・説明書なし、壊れたゲーム機も対象（完品比20〜50%減）',
    retro: '対応（レトロ機・ソフト）',
    speed: '到着後 最短当日〜7日目安（繁忙期は2週間の口コミ）',
  },
  {
    name: 'ゲオ宅配買取',
    href: '/review/geo/',
    shipping: '無料（佐川集荷・伝票記入不要）',
    returnFee: 'ゲオ負担（無料）※対象外品の返送は自己負担',
    cancel: '商品ごとに承認/返品。14日未回答で返品扱い',
    kit: 'なし（ダンボールは自分で用意・紙袋も可）',
    nobox: '未開封品・同一タイトル複数は買取不可',
    retro: 'PS3・Wii世代以降が主対象。レトロは対象外の場合あり',
    speed: '到着翌営業日から5営業日以内（繁忙期遅延・公式告知あり）',
  },
  {
    name: 'ネットオフ',
    href: '/review/netoff/',
    shipping: '無料（自宅集荷・コンビニ持込とも無料）',
    returnFee: '自己負担（関東800円〜・北海道1,200円・沖縄2,400円）。自動承認は返送不可',
    cancel: 'キャンセル可。値段がつかない品は無料引取りも選択可',
    kit: 'ダンボール6箱まで無料',
    nobox: '要確認（明示記載なし）',
    retro: 'PS3・Wii世代以降が主対象。レトロは対象外が多い',
    speed: '査定結果は通常3〜7営業日（入金は最短2日）',
  },
  {
    name: 'カイトリワールド',
    href: '/review/kaitori-world/',
    shipping: '査定3,000円以上で無料（未満は宅配便500円等を差引）',
    returnFee: '1点から返送無料。承諾後・自動承認申込は返送不可。全品返送等は着払い',
    cancel: '自動承認は通知から7日未回答で承認扱い',
    kit: 'ダンボール最大10箱まで無料',
    nobox: '箱なしでも対象になる場合あり（完品前提のため減額）',
    retro: '要確認（レトロ専門の明示なし）',
    speed: '査定連絡は到着日（混雑時1〜2日）',
  },
  {
    name: '駿河屋',
    href: '/review/surugaya/',
    shipping: 'あんしん買取は見積3,000円以上／かんたん買取は30点以上で無料',
    returnFee: '自己負担。「自動承諾」選択時はキャンセル・返送不可',
    cancel: '自己負担で返送可（自動承諾は不可）',
    kit: '要確認（梱包キットの記載なし）',
    nobox: 'ソフト単体でも可（完品比で大幅減額）',
    retro: '強い（ファミコン〜セガサターン・PCエンジン等）',
    speed: '到着後 通常4〜14日程度（繁忙期さらに遅延の口コミ）',
  },
  {
    name: 'ブックオフ宅配',
    href: '/review/bookoff/',
    shipping: '無料（集荷・振込手数料とも無料／最大19箱）',
    returnFee: '自己負担（目安1箱1,300円前後）。かんたん承認は返却不可',
    cancel: 'キャンセル可。返送を残すには「あんしん返送コース」を選択',
    kit: '無料提供は終了（自前の箱・厚手紙袋／公式1枚200円）',
    nobox: '要確認（状態が悪い品は値がつきにくい）',
    retro: '対象だがレトロの評価にばらつきあり',
    speed: '到着後3〜7営業日程度',
  },
];

const chooseGuide = [
  { title: '箱なし・傷あり・故障品を売りたいなら', description: '故障品・箱なし・付属品欠品まで明確に対応すると公式に書いてあるのは「ゲーム王国」「ホビーコレクト」。ゲオは未開封品・同一タイトル複数が買取不可なので注意。完品でない場合は減額前提で各社の買取条件を確認しましょう。' },
  { title: 'キャンセルの返送料を抑えたいなら', description: '査定額に納得できずキャンセルする時の返送料が「無料（業者負担）」と明記されているのは「ゲーム王国」「ゲオ宅配買取」。多くのサービスはキャンセル返送料が自己負担です。さらに各社の「自動承認/自動承諾」は、一定日数の未回答や選択で返送・キャンセルが不可になる点に注意してください。' },
  { title: '梱包用のダンボールを用意したくないなら', description: '無料の梱包キット（ダンボール）が用意されているのは「ホビーコレクト」「カイトリワールド（最大10箱）」「ネットオフ（6箱）」「ゲーム王国（2箱）」。ゲオとブックオフは自分でダンボールを用意する必要があります（ブックオフは公式で1枚200円購入も可）。' },
  { title: 'レトロゲームを高く売りたいなら', description: 'レトロゲームの査定力は「駿河屋」が業界トップクラス。ゲオ・ネットオフはPS3・Wii世代以降が主対象でレトロは対象外になりやすいです。レトロ中心なら専門性の高いサービスを選びましょう。' },
];

const steps = [
  { title: 'STEP 1: 申し込み', description: '公式サイトから買取申し込み。氏名・住所・買取希望品を入力します。多くのサービスは24時間365日受付で、深夜でもスマホから申し込めます。' },
  { title: 'STEP 2: 梱包・発送', description: 'ダンボールにゲームソフトや本体を梱包して発送。無料の梱包キットを提供してくれるサービス（ホビーコレクト・カイトリワールド・ネットオフ・ゲーム王国）もあります。集荷依頼をすれば自宅から一歩も出ずにOK。' },
  { title: 'STEP 3: 査定・見積もり', description: '届いた商品を専門スタッフが査定。サービスにより到着後1〜14日程度で査定結果がメールまたはマイページで届きます。繁忙期は遅延する場合があります。' },
  { title: 'STEP 4: 入金（またはキャンセル）', description: '査定額に同意すれば、指定口座に振り込み。納得できなければキャンセル（返送）も可能です。ただしキャンセル時の返送料負担と、自動承認の期限には注意しましょう。' },
];

const packingTips = [
  { title: 'ダンボールのサイズ選び', description: '大きすぎると中で動いて破損リスクが上がります。商品に合ったサイズを選びましょう。無料梱包キットがない場合はスーパーの空き箱でも問題ありません。' },
  { title: '緩衝材でしっかり保護', description: '輸送中の傷は減額の原因になります。プチプチ（エアキャップ）や新聞紙で隙間を埋め、特にゲーム機本体は角を重点的に保護しましょう。' },
  { title: 'ソフトはまとめてビニール袋に', description: '水濡れ防止のため、ゲームソフトはまとめてビニール袋に入れてからダンボールへ。' },
  { title: '付属品は本体と一緒に梱包', description: 'コントローラー、ケーブル、説明書、外箱は本体とセットで送ると高額査定に。完品状態が査定額の前提になっているサービスが多いです。' },
];

const faqs = [
  { q: 'ゲーム宅配買取で送料が無料なのはどこですか？', a: '主要サービスの多くは発送時の送料が無料です。ゲーム王国・ホビーコレクト・ゲオ宅配買取・ネットオフ・ブックオフは送料無料で利用できます。ゲーム王国とゲオは佐川急便の集荷を使うことが送料無料の条件です。駿河屋・カイトリワールドは点数や見積金額の条件を満たすと無料になります（2026年6月確認）。' },
  { q: 'キャンセル（返送）した場合の返送料はかかりますか？', a: 'キャンセル時の返送料が無料（業者負担）と明記されているのはゲーム王国とゲオ宅配買取です。ネットオフ・ホビーコレクト・駿河屋・ブックオフは返送料が自己負担になります。また各社の「自動承認/自動承諾」を選ぶと返送・キャンセルができなくなる点に注意してください（カイトリワールドは通知から7日未回答で承認扱い、ゲオは14日未回答で返品扱いなど条件が異なります）。' },
  { q: '無料の梱包キット（ダンボール）がもらえるのはどこですか？', a: '無料の梱包キット・ダンボールを提供しているのはホビーコレクト、カイトリワールド（最大10箱）、ネットオフ（6箱）、ゲーム王国（2箱）です。ゲオ宅配買取は自分でダンボールを用意する必要があり（丈夫な紙袋も可）、ブックオフは無料提供を終了して公式で1枚200円での購入になります（2026年6月確認）。' },
  { q: '箱なし・傷あり・壊れたゲーム機でも宅配買取してもらえますか？', a: '故障品・箱なし・付属品欠品でも買取対応すると公式に明記しているのはゲーム王国とホビーコレクトです（完品と比べると査定額は下がります）。駿河屋やカイトリワールドも箱なしソフト単体を買い取りますが、完品前提のため減額されます。一方でゲオ宅配買取は未開封品・同一タイトルの複数買取が不可なので注意しましょう。' },
  { q: 'レトロゲームの宅配買取はどこがいいですか？', a: 'レトロゲームの査定力は駿河屋が業界トップクラスで、ファミコン・スーパーファミコン・セガサターン・PCエンジンなどに対応します。ゲオ宅配買取やネットオフはPS3・Wii世代以降が主対象でレトロは対象外になりやすいため、レトロ中心なら専門性の高いサービスを選ぶのがおすすめです。' },
  { q: '宅配買取の査定にはどのくらい時間がかかりますか？', a: 'サービスにより異なり、ゲーム王国は到着後1〜3営業日、ゲオは到着翌営業日から5営業日以内、ネットオフは通常3〜7営業日、駿河屋は通常4〜14日程度が目安です。年末年始や引越しシーズンなどの繁忙期はさらに遅れることがあり、ゲオは2026年6月時点で公式が査定遅延を告知しています。' },
];

export default function OnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲーム宅配買取おすすめ比較｜送料・返送料・キャンセル・梱包キット・箱なし対応で選ぶ", "datePublished": "2026-03-15", "dateModified": "2026-06-29", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: '売り方', href: '/' }, { name: '宅配買取 比較' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>宅配買取 実務比較ハブ</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲーム宅配買取おすすめ比較｜送料・返送料・キャンセル・箱なし対応で選ぶ
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            「送料は本当に無料？」「キャンセルしたら返送料は？」「箱なし・傷ありでも売れる？」——宅配買取で本当に迷うポイントを、主要サービスの<strong>送料・返送料・キャンセル条件・梱包キット・箱なし/傷あり対応・レトロ対応・査定期間</strong>で横並び比較。数値はすべて各社公式の確認済み情報（2026年6月確認）に基づきます。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="#comparison" className="btn-primary py-2.5 px-6">
              比較表をすぐ見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Service Comparison (main) */}
        <section id="comparison" className="mb-12 scroll-mt-20">
          <h2 className="section-heading mb-3"><span className="section-heading-bar" />ゲーム宅配買取 主要7サービス実務比較表</h2>
          <p className="text-sm mb-6" style={{ color: 'var(--color-text-light)' }}>
            送料・キャンセル時の返送料・キャンセル条件（自動承認の有無）・梱包キット・箱なし/傷あり対応・レトロ対応・査定期間で比較。サービス名から各社の詳細レビューに移動できます。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>サービス</th>
                  <th>送料</th>
                  <th>返送料（キャンセル時）</th>
                  <th>キャンセル条件</th>
                  <th>梱包キット</th>
                  <th>箱なし・傷あり</th>
                  <th>レトロ対応</th>
                  <th>査定期間</th>
                </tr>
              </thead>
              <tbody>
                {serviceComparison.map((s) => (
                  <tr key={s.name}>
                    <td className="font-bold"><Link href={s.href} style={{ color: 'var(--color-electric-green)' }}>{s.name}</Link></td>
                    <td>{s.shipping}</td>
                    <td>{s.returnFee}</td>
                    <td>{s.cancel}</td>
                    <td>{s.kit}</td>
                    <td>{s.nobox}</td>
                    <td>{s.retro}</td>
                    <td>{s.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：各社公式サイト（買取案内・FAQ・特定商取引法に基づく表記）。駿河屋・ネットオフ・ブックオフ・ホビーコレクトは2026年6月18日、ゲオ・カイトリワールド・ゲーム王国は2026年6月12日に確認。キャンペーン・送料条件は変更される場合があるため、申込前に必ず公式サイトの最新情報をご確認ください。「要確認」は公式に明示がない・出典間で表記揺れがある項目です。
          </p>
        </section>

        {/* Choose Guide */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />目的別の選び方</h2>
          <div className="space-y-4">
            {chooseGuide.map((g) => (
              <div key={g.title} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{g.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{g.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cancel/Return注意 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />キャンセル・返送で損しないための注意点</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>「自動承認/自動承諾」は返送不可になりやすい：</span>多くのサービスにある自動承認の仕組みは、一定日数の未回答や選択でキャンセル・返送ができなくなります（カイトリワールドは7日未回答で承認、ゲオは14日未回答で返品など条件が異なります）。査定結果は早めに確認しましょう。</li>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>キャンセル時の返送料は自己負担が多い：</span>返送料が無料（業者負担）と明記されているのはゲーム王国・ゲオ宅配買取。ネットオフ・ホビーコレクト・駿河屋・ブックオフは自己負担になります。</li>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>買取対象外の品の返送は別扱い：</span>ゲオは査定不満時の返送はゲオ負担ですが、買取対象外品の返送は自己負担になる場合があります（破棄を選べば無料）。</li>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>査定額は完品が前提：</span>掲載されている買取価格は箱・説明書付きの完品が前提のサービスが多く、箱なし・傷ありは減額されます。</li>
            </ul>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />宅配買取の流れ 4ステップ</h2>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={step.title} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{step.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Packing Tips */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />梱包のコツ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {packingTips.map((tip) => (
              <div key={tip.title} className="glass-card p-5">
                <h3 className="font-bold mb-2 text-sm" style={{ color: 'var(--color-deep-blue)' }}>{tip.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{tip.description}</p>
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
            自宅から<span style={{ color: 'var(--color-electric-green)' }}>条件で選んで</span>ゲームを売ろう
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            宅配買取は送料・返送料・梱包キット・対応ジャンルで満足度が大きく変わります。比較表で自分に合うサービスを見つけましょう。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連ガイド・レビュー</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/review/geo/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲオ宅配買取 評判・梱包</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ダンボール・梱包・申込みの流れ・評判を詳しく</p>
            </Link>
            <Link href="/method/shop/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>店舗買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>即日現金化・持ち込み買取ガイド</p>
            </Link>
            <Link href="/method/high-price/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>高く売るコツ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>買取価格を最大化する10のテクニック</p>
            </Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
