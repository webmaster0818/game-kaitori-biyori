import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

export const metadata: Metadata = {
  title: 'ゲオ宅配買取は何日で入金？【2026年8月】やり方・ダンボールは自前？査定日数・梱包・キャンセルまで完全ガイド',
  description:
    'ゲオ宅配買取の入金は査定承認後すみやかに振込（規定上は取引成立から7営業日以内）、査定は商品到着の翌営業日から5営業日以内にメール連絡（公式情報2026年7月28日確認）。ダンボールは自分で用意（紙袋も可・スマホ買取はヤマトが無料の箱を届ける別系統）、送料・査定料・振込手数料・査定不満時の返送料は無料。本人確認書類（健康保険証は不可）、キャンセルと14日ルール、梱包の手順まで実務目線で解説します。',
  keywords: ['ゲオ 宅配買取 やり方', 'ゲオ 宅配買取 ダンボール', 'ゲオ 宅配買取 日数', 'ゲオ 宅配買取 梱包', 'ゲオ 宅配買取 キャンセル'],
  openGraph: {
    title: 'ゲオ宅配買取は何日で入金？【2026年8月】やり方・ダンボール・査定日数・キャンセルまで完全ガイド',
    description: '入金は査定承認後すみやかに振込（規定上は成立から7営業日以内）・査定は到着翌営業日から5営業日以内。ダンボールは自前（紙袋も可）・送料/返送料無料。公式情報（2026年7月28日確認）で完全ガイド。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

// 本ページの事実はすべてゲオ公式（buy.geo-online.co.jp：宅配買取トップ・申込の流れ・サービスガイドライン2026年1月17日改定版・公式FAQ全100問・本人確認/買取不可/査定基準ページ・公式おしらせ）の2026年7月28日確認値。推測・創作は含めない。
const conclusionPoints = [
  { label: 'ダンボール', value: '自分で用意（無料キットなし・丈夫な紙袋でも可）' },
  { label: '費用', value: '送料・査定料・振込手数料すべて無料（1点からOK）' },
  { label: '査定日数', value: '商品到着の翌営業日から5営業日以内にメール連絡' },
  { label: '入金', value: '承認後速やかに振込（規定上は取引成立から7営業日以内）' },
  { label: 'キャンセル', value: '査定に不満なら返送料ゲオ負担で返品可（承認後は不可）' },
  { label: '発送方法', value: '佐川急便の自宅集荷のみ（コンビニ・営業所持込は不可）' },
];

const steps = [
  { step: 1, title: '本人確認書類を用意', description: '現住所が記載された本人確認書類が必須です（用意できないと申込不可）。マイナンバーカード・運転免許証などが使えます。健康保険証は使えません（詳細は後述）。' },
  { step: 2, title: 'Webで買取申込み', description: 'GEO IDでログインするか、ゲストのままでも申込できます（会員登録は必須ではありません）。売りたい商品を買取カートに入れて申し込みます。受付はWebで24時間。申込完了時点の買取価格が保証されます（商品状態による減額は別）。' },
  { step: 3, title: 'ダンボールを用意して梱包', description: 'ダンボールは自分で用意します（無料の梱包キットはありません）。スーパーの空き箱でOK。箱がなければ緩衝材で保護のうえ丈夫な紙袋でも発送できます。ケース割れ・キズを防ぐため新聞紙やプチプチを詰めましょう。' },
  { step: 4, title: '佐川急便が自宅に集荷', description: '指定した日時に佐川急便のドライバーが送り状を持って自宅に来ます（伝票の記入は不要）。集荷場所は本人確認書類の住所のみで、コンビニや営業所への持ち込み発送はできません。申込から14日以内に発送しないと自動キャンセルになる点に注意（この場合の送料は自己負担）。' },
  { step: 5, title: '査定結果がメールで届く', description: '商品到着の翌営業日から5営業日以内（土日祝を除く）に査定結果がメールで届きます。商品ごとに「承認」か「返品」を選べます。査定結果の連絡から14日間回答しないとキャンセル扱いで返品されます。' },
  { step: 6, title: '承認して入金', description: '承認すると本人名義の銀行口座へ振込されます（受け取りは銀行振込のみ・店頭受取や現金書留は不可）。公式案内は「承認後速やかに振込（金融機関により翌営業日着金）」、規定上は取引成立から7営業日以内です。承認後のキャンセル・返却請求はできません。' },
];

const dayBreakdown = [
  { phase: '申込 → 集荷', days: '最短で申込翌日〜（日時指定制）', note: '申込から14日以内に発送しないと自動キャンセル（送料自己負担）' },
  { phase: '集荷 → ゲオ到着', days: '配送日数（地域による）', note: '佐川急便の輸送' },
  { phase: '到着 → 査定結果', days: '翌営業日から5営業日以内', note: '土日祝を除く。繁忙期は遅延の可能性' },
  { phase: '承認 → 入金', days: '速やかに振込（規定上は成立から7営業日以内）', note: '金融機関により翌営業日着金。銀行振込のみ' },
];

const idDocs = [
  'マイナンバーカード（表面のみ）',
  '運転免許証（表裏）',
  '写真付き学生証',
  '在留カード・特別永住者証明書',
  '小型船舶操縦免許証',
  '資格確認書（番号等はマスキング）',
];

const cancelRules = [
  { case: '発送前にやめたい', rule: '集荷日前日までは問合せフォーム、集荷時はドライバーに直接、不在票投函後は記載の電話番号へ連絡すればキャンセルできます。' },
  { case: '査定額に納得できない', rule: '商品ごとに「返品」を選べば返送料はゲオ負担（無料）で戻ってきます。査定前の自己都合キャンセルの返送料は自己負担です。' },
  { case: '承認したあと', rule: '取引成立（承認）後のキャンセル・返却請求は一切できません。承認前に査定額を必ず確認しましょう。' },
  { case: '買取対象外の品を送った', rule: '宅配買取の対象外商品を送った場合の返送は着払い（自己負担）になります。破棄を選べば費用はかかりません。' },
];

const deadlineRules = [
  { rule: '申込から14日以内に発送しない', result: '自動キャンセル（この場合の送料は自己負担）' },
  { rule: '査定結果の連絡から14日間無回答', result: 'キャンセル扱いで商品が返品される' },
  { rule: '集荷で2度不在', result: '集荷予定日から10日後に自動キャンセル' },
];

const faqs = [
  { q: 'ゲオ宅配買取でダンボールは無料でもらえますか？', a: 'ゲーム・DVDの宅配買取ではもらえません。公式FAQに「お申し込み後、お客様ご自身でご用意をお願いいたします」と明記されています。スーパーの空き箱で問題なく、新聞紙などの緩衝材で保護すれば丈夫な紙袋でも発送できます。なお同じゲオでもスマホ・タブレットの宅配買取（モバイル系）は別サービスで、ヤマト運輸のドライバーが無料のダンボール（60/80/120/140の4サイズ）を届けてくれます。この二系統の違いが混同されやすいので注意してください（2026年7月28日公式確認）。' },
  { q: 'ゲオ宅配買取は何日かかりますか？', a: '査定結果は商品到着の翌営業日から5営業日以内（土日祝を除く）にメールで届きます。入金は査定承認後速やかに行われ（金融機関により翌営業日着金）、規定上は取引成立から7営業日以内です。申込から入金までのトータルでは、集荷日程と輸送日数を含めておおむね1〜2週間を見込むのが現実的です。繁忙期は査定が遅れることがあります。' },
  { q: '何点から申し込めますか？送料はかかりますか？', a: '1点から申し込めます。申込費用・送料・査定料・振込手数料はすべて無料（ゲオ負担）です。査定額に納得できず返品する場合の返送料も無料です（買取対象外品や自己都合キャンセルの返送は自己負担）。' },
  { q: '本人確認に健康保険証は使えますか？', a: '使えません（法改正・厳格化のためと公式FAQに明記）。使えるのはマイナンバーカード（表面のみ）・運転免許証（表裏）・写真付き学生証・在留カード・特別永住者証明書・小型船舶操縦免許証・資格確認書です。書類の住所と申込住所が一致している必要があり、異なる場合は3ヶ月以内発行の公共料金領収書（電気・水道・ガス）の追加アップロードが必要です。申込名義・書類名義・振込口座名義の3点一致も必須です。' },
  { q: '未開封のゲームや同じソフト2本は売れますか？', a: '売れません。未開封品の買取不可・同一タイトルは1商品1点まで（過去の申込との重複もカウントされ、2個目以降はすべて買取不可）と公式ガイドラインに明記されています。未使用でも開封済みなら買取可です。未開封品や複数本はフリマアプリの方が向いています。' },
  { q: '壊れたゲーム機やレトロゲームも売れますか？', a: '売れます。動かない本体・液晶割れなどもジャンク品として買取可で、WEB限定「動かないゲーム機本体買い取ります」を実施中です（みまもり設定・PSN連携の未解除、初期化不能、ネットワーク利用制限端末などは不可）。レトロゲームも「レトロゲーム買取はじめました」として買取対象になっています（名前書き・落書き、端子のサビがある品は不可）。いずれも2026年7月28日時点の公式掲載情報です。' },
  { q: '今ゲオ宅配買取のキャンペーンはやっていますか？', a: 'スマホ・ゲーム機本体・デジタル家電が対象だった「買取アップキャンペーン」（2点で10%UP・3点以上で15%UP）は、終了日が前倒しされ2026年7月18日で終了しました（公式おしらせで確認）。2026年7月28日時点で新しい%UPキャンペーンの告知は確認できず、常設の訴求として「Nintendo Switch 2本体 買取強化中」「PS5本体 買取強化中」などが掲載されています。キャンペーンは申込時点で対象判定されるため、開催中に申し込めば到着が後でも適用されます。' },
];

export default function GeoTakuhaiGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲオ宅配買取は何日で入金？やり方・ダンボール・査定日数・梱包・キャンセルまで完全ガイド", "datePublished": "2026-07-28", "dateModified": "2026-08-24", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ガイド', href: '/' }, { name: 'ゲオ宅配買取のやり方' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>使い方 完全ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲオ宅配買取は何日で入金？<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>やり方・ダンボール・キャンセルまで</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            「ダンボールはもらえる？」「何日で入金される？」「キャンセルしたら返送料は？」——ゲオ宅配買取で迷うポイントを、公式サイト・サービスガイドライン・公式FAQ全100問の一次情報（<strong>2026年7月28日確認</strong>）だけで正確に解説します。評判・口コミは<Link href="/review/geo/" style={{ color: '#34D399' }}>ゲオ宅配買取の評判レビュー</Link>へ。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://buy.geo-online.co.jp/media/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
              公式サイトで買取申込み
            </a>
            <Link href="/review/geo/" className="btn-outline py-2.5 px-6" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}>
              評判・口コミを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 30秒結論 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />先に結論：ゲオ宅配買取の要点30秒まとめ</h2>
          <div className="glass-card p-6">
            <div className="overflow-x-auto">
              <table className="comparison-table">
                <tbody>
                  {conclusionPoints.map((p) => (
                    <tr key={p.label}>
                      <th className="whitespace-nowrap">{p.label}</th>
                      <td>{p.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ゲオ公式（buy.geo-online.co.jp）宅配買取トップ・申込の流れ・サービスガイドライン・公式FAQ（2026年7月28日確認）</p>
          </div>
        </section>

        {/* 二系統の違い */}
        <section className="mb-12">
          <h2 className="section-heading mb-3"><span className="section-heading-bar" />最初に知るべき注意点：ゲオの宅配買取は「二系統」ある</h2>
          <p className="text-sm mb-6" style={{ color: 'var(--color-text-light)' }}>
            「ゲオはダンボールをくれる」「くれない」と情報が割れる原因はここにあります。<strong>ゲーム・DVDの宅配買取</strong>と<strong>スマホ・タブレットの宅配買取（モバイル系）</strong>は集荷業者も箱の扱いも異なる別サービスです。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th></th>
                  <th>ゲーム・DVD系（本記事の対象）</th>
                  <th>スマホ・タブレット系（モバイル）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>対象商品</th>
                  <td>ゲームソフト・ゲーム機本体・DVD・Blu-ray等</td>
                  <td>スマホ・タブレット・スマートウォッチ等</td>
                </tr>
                <tr>
                  <th>ダンボール</th>
                  <td><strong>自分で用意</strong>（紙袋も可）</td>
                  <td><strong>無料</strong>（60/80/120/140の4サイズをドライバーが届ける）</td>
                </tr>
                <tr>
                  <th>集荷業者</th>
                  <td>佐川急便</td>
                  <td>ヤマト運輸</td>
                </tr>
                <tr>
                  <th>集荷スピード</th>
                  <td>日時指定制</td>
                  <td>14時までの申込で当日18〜21時集荷も可</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：buy.geo-online.co.jp／buymobile.geo-online.co.jp（2026年7月28日確認）。ゲームを売る場合は左列が適用されます。</p>
        </section>

        {/* やり方6ステップ */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ゲオ宅配買取のやり方（6ステップ）</h2>
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

        {/* 日数分解 */}
        <section className="mb-12">
          <h2 className="section-heading mb-3"><span className="section-heading-bar" />日数はどのくらい？段階別の目安</h2>
          <p className="text-sm mb-6" style={{ color: 'var(--color-text-light)' }}>
            「何日かかるか」は段階ごとに分けると読みやすくなります。公式が明示している数字は以下のとおりです。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>段階</th>
                  <th>日数（公式明示値）</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {dayBreakdown.map((d) => (
                  <tr key={d.phase}>
                    <th className="whitespace-nowrap">{d.phase}</th>
                    <td>{d.days}</td>
                    <td className="text-sm">{d.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            トータルでは集荷日程・輸送を含めおおむね1〜2週間が現実的な見込みです。公式は「承認後速やかに振込」と案内しつつ、規定上の上限は「取引成立から7営業日以内」（サービスガイドライン第15条）としています。
          </p>
        </section>

        {/* 梱包ルール */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ダンボール・梱包のルール</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ダンボールは自分で用意：</span>無料の梱包キットはありません。スーパーなどの空き箱で問題なく、商品サイズに合った丈夫な箱を使いましょう。</li>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>紙袋でも発送可能：</span>箱がない場合は、新聞紙などの緩衝材で商品を保護したうえで丈夫な紙袋に入れて発送できます（公式FAQ明記）。</li>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>緩衝材は必須：</span>エアーパッキン（プチプチ）や新聞紙を詰めた厳重な梱包が公式ガイドラインで求められています。輸送中のケース割れ・キズは減額の原因になります。</li>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>伝票の記入は不要：</span>佐川急便のドライバーが送り状を持参します。</li>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>集荷場所は本人確認書類の住所のみ：</span>勤務先や宅配ボックスでの集荷、コンビニ・営業所への持ち込みはできません。</li>
            </ul>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ゲオ公式FAQ・サービスガイドライン第12条（2026年7月28日確認）</p>
          </div>
        </section>

        {/* 本人確認 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />本人確認書類（健康保険証は使えません）</h2>
          <div className="glass-card p-6">
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
              古物営業法に基づき本人確認は毎回必要で、書類画像のアップロードのみ（郵送等の代替なし）。利用できる書類は次のとおりです。
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
              {idDocs.map((doc) => (
                <li key={doc}>・{doc}</li>
              ))}
            </ul>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li><span className="font-bold" style={{ color: 'var(--color-accent-orange)' }}>健康保険証は利用不可</span>（法改正・厳格化のためと公式FAQに明記）。通知カードも不可。</li>
              <li>書類の住所＝申込住所＝現住所の一致が必須。異なる場合は3ヶ月以内発行の公共料金領収書（電気・水道・ガス）を追加アップロード。</li>
              <li>申込名義＝書類名義＝振込口座名義の3点一致が必要。</li>
              <li>利用は18歳以上（高校生を除く）。法人名義は不可。</li>
            </ul>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：buy.geo-online.co.jp/guide/id・公式FAQ（2026年7月28日確認）</p>
          </div>
        </section>

        {/* キャンセル */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />キャンセル・返送料の場合分け</h2>
          <div className="space-y-4 mb-6">
            {cancelRules.map((c) => (
              <div key={c.case} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{c.case}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{c.rule}</p>
              </div>
            ))}
          </div>
          <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>見落としやすい自動処理の期限</h3>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>こうなると</th>
                  <th>こう処理される</th>
                </tr>
              </thead>
              <tbody>
                {deadlineRules.map((d) => (
                  <tr key={d.rule}>
                    <td>{d.rule}</td>
                    <td>{d.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：サービスガイドライン第3条・第5条・第12条・第14条（2026年1月17日改定版・2026年7月28日確認）</p>
        </section>

        {/* 売れるもの・売れないもの */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />売れるもの・売れないもの（2026年7月時点）</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-electric-green)' }}>売れる</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>+ ゲームソフト・ゲーム機本体・DVD・Blu-ray</li>
                <li>+ 箱・説明書なしでも可（減額あり。ソフトは「ディスク/カセットのみ」区分で買取）</li>
                <li>+ 動かない本体・液晶割れもジャンク品として可（WEB限定「動かないゲーム機本体買い取ります」実施中）</li>
                <li>+ レトロゲームも対象（「レトロゲーム買取はじめました」掲載中）</li>
                <li>+ Switch 2本体・PS5本体は買取強化中</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>売れない</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- 未開封品（開封済みなら未使用でも可）</li>
                <li>- 同一タイトル2本目以降（過去の申込分もカウント）</li>
                <li>- 海外版・オンライン専用ソフト・改造品・レンタル品</li>
                <li>- 本・トレカ・生活家電・ビデオテープ（宅配買取対象外）</li>
                <li>- 名前書き・落書き・端子サビのあるレトロ品</li>
                <li>- みまもり設定/PSN連携未解除・初期化不能・ネットワーク利用制限中の本体</li>
              </ul>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：公式FAQ・買取不可商品ページ・査定基準ページ・サービスガイドライン第4条（2026年7月28日確認）。運営は株式会社ゲオストア（古物商許可：愛知県公安委員会 第541162000900号）。</p>
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

        {/* CTA: 価格比較へ */}
        <section className="glass-card-dark p-8 text-center mb-12">
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>
            送る前に<span style={{ color: 'var(--color-electric-green)' }}>今週の買取価格</span>を比較しよう
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            同じソフトでも業者間で買取価格は大きく違います。当サイトは毎週各社公式の買取価格を実測しています。ゲオに送る前に他社の価格も確認するのが高く売るコツです。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/price-index/" className="btn-primary py-3 px-8">
              今週の買取価格DBを見る
            </Link>
            <Link href="/software/high-value/" className="btn-outline py-3 px-8" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}>
              高く売れるソフトランキング
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連ガイド・レビュー</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/review/geo/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲオ宅配買取の評判・口コミ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>メリット・デメリット・評判の傾向を検証</p>
            </Link>
            <Link href="/method/online/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲーム宅配買取15社比較</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>送料・返送料・ダンボール・査定日数で比較</p>
            </Link>
            <Link href="/knowledge/shipping/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>送料・梱包ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>安全な梱包方法と無料キットの知識</p>
            </Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
