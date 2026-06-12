import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'Switch2の買取価格相場【2026年6月】定価値上げ後のモデル別相場と旧型Switchの売り時',
  description:
    'Nintendo Switch 2本体の買取価格相場を2026年6月に調査。マリオカート ワールドセット・多言語版などモデル別の実勢買取価格、2026年5月25日の定価値上げ（49,980円→59,980円）が相場に与える影響、旧型Switchの売り時判断まで徹底解説します。',
  keywords: ['Switch2 買取', 'スイッチ2 買取価格', 'Switch 2 買取相場', 'Switch2 マリオカートセット 買取', 'Switch 売り時'],
  openGraph: {
    title: 'Switch2の買取価格相場【2026年6月】値上げ後のモデル別相場と旧型の売り時',
    description: 'Switch2本体のモデル別買取相場（2026年6月調査）と定価値上げの影響、旧型Switchの売り時を解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const switch2Overview = [
  { item: '正式名称', detail: 'Nintendo Switch 2' },
  { item: '発売日', detail: '2025年6月5日（日本含む全世界同時発売）' },
  { item: '現在の定価', detail: '日本語・国内専用版 59,980円（2026年5月25日に49,980円から値上げ）／多言語対応版 69,980円' },
  { item: '主なモデル', detail: '国内専用版／多言語対応版／マリオカート ワールドセット（生産終了）／Pokémon LEGENDS Z-A Edition（生産終了）／スプラトゥーン レイダース セット（2026年7月23日発売予定・64,980円）' },
  { item: '主な特徴', detail: '大型ディスプレイ、マグネット式Joy-Con 2、後方互換対応' },
  { item: '後方互換', detail: 'Nintendo Switchの物理/ダウンロードソフトに対応' },
];

// 2026年6月12日に各社公式買取ページで確認した本体買取価格（新品・未開封または完品前提。状態・在庫により変動）
const switch2BuybackPrices = [
  { model: '日本語・国内専用版', rudeya: '47,000円', furuichi: '46,000円' },
  { model: '多言語対応版', rudeya: '77,300円', furuichi: '—' },
  { model: 'マリオカート ワールドセット', rudeya: '57,300円', furuichi: '46,000円' },
  { model: 'Pokémon LEGENDS Z-A セット', rudeya: '55,200円', furuichi: '—' },
];

const priceForecasts = [
  { model: 'Nintendo Switch（通常モデル）', current: '14,000〜18,000円', forecast6m: '10,000〜14,000円', forecast1y: '7,000〜11,000円', trend: '下落' },
  { model: 'Nintendo Switch Lite', current: '8,000〜12,000円', forecast6m: '5,000〜9,000円', forecast1y: '3,000〜6,000円', trend: '下落' },
  { model: 'Nintendo Switch（有機ELモデル）', current: '22,000〜28,000円', forecast6m: '17,000〜23,000円', forecast1y: '12,000〜18,000円', trend: '下落' },
  { model: '限定版・特別デザインモデル', current: 'プレミア価格', forecast6m: '横ばい〜微増', forecast1y: '横ばい〜上昇', trend: '安定〜上昇' },
];

const judgmentCriteria = [
  {
    scenario: '今すぐ売るべき人',
    conditions: [
      'Switch 2の購入を予定している',
      '旧型Switchを通常モデル・Liteで使用中',
      '手持ちのソフトの大半がダウンロード版',
      '少しでも高い買取価格を得たい',
    ],
    reason: 'Switch 2の発売後は旧型の買取相場が確実に下がります。特に通常モデルとLiteは値下がりが大きいため、早めの売却がおすすめです。',
  },
  {
    scenario: 'もう少し待ってもよい人',
    conditions: [
      '有機ELモデルを使用中で満足している',
      'Switch 2の初期ロットを避けたい',
      'まだ遊びたいSwitchのソフトがある',
      'Switch 2の対応ソフトが充実するまで待ちたい',
    ],
    reason: '有機ELモデルは値崩れが比較的穏やかなため、数ヶ月の猶予はあります。ただし、遊び終わったら早めに売却するのが賢明です。',
  },
  {
    scenario: '売らないほうがよい人',
    conditions: [
      '限定版・特別デザインのSwitchを所有',
      'コレクションとして保管したい',
      '箱・付属品を完品で保管している限定モデル',
    ],
    reason: '限定版のSwitchはコレクター需要があり、時間が経つほど価値が上がる可能性があります。完品であれば保管を検討しましょう。',
  },
];

const tips = [
  { title: '発売前のタイミングで売る', description: 'Switch 2の発売日が近づくほど旧型の買取価格は下がります。発売2〜3週間前までに売却するのが最も有利です。' },
  { title: '箱・付属品を完備して査定に出す', description: '箱・Joy-Con・ドック・ACアダプター・HDMIケーブルが揃っているだけで1,000〜5,000円の差がつきます。' },
  { title: '本体を清掃・初期化してから売る', description: '画面の汚れやJoy-Conの汚れを拭き取り、本体を初期化してから査定に出しましょう。見た目の印象で査定額が変わります。' },
  { title: '複数社で査定を比較する', description: '1社だけで決めるのはもったいない。ヒカカク！なら最大20社に一括査定できるため、最高値を簡単に見つけられます。' },
  { title: 'ソフトやコントローラーもまとめて売る', description: 'Switch 2に後方互換があるとはいえ、ソフトもまとめて売ればボーナス査定がつく業者もあります。不要なソフトはセットで売りましょう。' },
];

const services = [
  { name: 'ヒカカク！', feature: '最大20社一括査定', area: '全国対応', method: '宅配買取メイン', point: '複数業者の競争で最高値を狙える。Switch売却時に特におすすめ。' },
  { name: '買取ウリエル', feature: '出張買取・即日現金化', area: '関東・中部・近畿・岡山（ゲームは関東1都3県）', method: '出張買取', point: '自宅まで来てくれてその場で現金化。Switch 2購入資金にすぐ充てられる。' },
  { name: 'ティファナ', feature: '店舗+宅配買取', area: '東京近郊', method: '店舗・宅配', point: 'ゲーム周辺機器もまとめて売れる。Switch本体+ソフトのセット売りに便利。' },
];

const faqs = [
  { q: 'Switch 2が発売されたら旧型Switchの買取価格はどうなりますか？', a: '旧型Switchの買取価格は確実に下落します。過去の例では、3DS→Switch移行時に3DSの買取価格が30〜50%下落しました。特に通常モデルとLiteは影響が大きく、有機ELモデルは比較的緩やかな下落が予想されます。' },
  { q: 'Switch 2に後方互換があるなら旧型を売っても大丈夫？', a: 'はい、Switch 2はNintendo Switchのソフト（物理・ダウンロード両方）に後方互換があるため、旧型を売ってもSwitch 2でこれまでのソフトを引き続きプレイできます。ダウンロード版はニンテンドーアカウントに紐づいているため、Switch 2で再ダウンロード可能です。' },
  { q: '旧型Switchを売るベストなタイミングはいつですか？', a: 'Switch 2発売の2〜3週間前までが最も有利です。発売直後は中古市場に旧型が大量に流入するため、買取価格が急落します。早めの売却をおすすめします。' },
  { q: '限定版のSwitchも値下がりしますか？', a: '限定版・特別デザインのSwitchはコレクター需要があるため、一般モデルほどの値下がりは見込まれません。むしろ生産終了後は希少性が高まり、価値が上がる可能性もあります。箱・付属品完品であれば保管も検討しましょう。' },
  { q: 'Joy-Conだけ売ってSwitch 2用に買い替えるのはありですか？', a: 'Switch 2のJoy-Conはマグネット式に変更されているため、旧型Joy-Conはそのまま装着できません（別売りアタッチメントが必要）。旧型Joy-Conを使い続ける予定がなければ、本体と一緒に売却するのが査定額的にお得です。' },
  { q: 'Switch 2はいつ発売ですか？定価はいくらですか？', a: 'Nintendo Switch 2は2025年6月5日に日本を含む全世界で同時発売されました。発売時の価格は国内専用版49,980円（税込）でしたが、2026年5月25日に59,980円へ値上げされています。多言語対応版は69,980円です。' },
  { q: 'Switch 2本体は今いくらで買取してもらえますか？', a: '2026年6月12日時点の調査では、日本語・国内専用版が46,000〜47,000円前後、生産終了したマリオカート ワールドセットが最大57,300円、多言語対応版が77,300円（いずれも買取ルデヤ・ふるいち公式の掲載価格）です。新品・未開封または完品が前提で、価格は日々変動するため売る直前に各社の公式買取ページで確認してください。' },
  { q: '定価の値上げでSwitch 2の買取価格は上がりますか？', a: '上昇圧力がかかっています。2026年5月25日に国内専用版の定価が49,980円から59,980円に1万円値上げされたため、値上げ前の価格で購入した本体は相対的に高く売れる状況です。生産終了した同梱版（マリオカート ワールドセット等）は希少性も加わり、通常版より高い買取価格が提示されています。' },
];

export default function Switch2Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Switch2の買取価格相場【2026年6月】定価値上げ後のモデル別相場と旧型Switchの売り時", "datePublished": "2026-05-19", "dateModified": "2026-06-12", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'Switch 2 売り時ガイド' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(239,68,68,0.2)', color: '#F87171' }}>緊急特集</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            Switch2の買取価格相場【2026年6月】
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            2026年5月25日の定価値上げ（49,980円→59,980円）と同梱版の生産終了で、Switch 2の買取相場が動いています。モデル別の実勢買取価格（2026年6月12日調査）と、旧型Switchの売り時判断をまとめました。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Switch 2 Overview */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />Nintendo Switch 2とは</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            Nintendo Switch 2は、2025年6月5日に発売された任天堂の次世代ゲーム機です。旧型Switchとの後方互換を備えつつ、大幅な性能向上が図られています。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>詳細</th>
                </tr>
              </thead>
              <tbody>
                {switch2Overview.map((row) => (
                  <tr key={row.item}>
                    <td className="font-bold">{row.item}</td>
                    <td>{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Switch 2 Buyback Prices (Information Gain) */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />Switch2本体の買取価格相場【2026年6月12日調査】</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            Switch 2本体を売る場合の実勢価格です。2026年6月12日に買取業者の公式買取ページで確認した価格を掲載しています（新品・未開封または箱・付属品完備が前提。状態・在庫状況により日々変動します）。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>モデル</th>
                  <th>買取ルデヤ</th>
                  <th>古本市場（ふるいち）</th>
                </tr>
              </thead>
              <tbody>
                {switch2BuybackPrices.map((row) => (
                  <tr key={row.model}>
                    <td className="font-bold text-sm">{row.model}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{row.rudeya}</td>
                    <td className="text-sm">{row.furuichi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：買取ルデヤ公式（2026年6月12日14時56分時点の掲載価格）、古本市場ふるいち公式 高価買取情報（2026年6月12日閲覧）。このほかゲオの宅配買取でも国内専用版45,000円前後・多言語版60,000円前後の参考価格が確認できます（検索結果経由の参考値）。</p>
          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>相場を動かしている2つの要因</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>
                <span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>① 2026年5月25日の定価値上げ：</span>
                任天堂は国内専用版の希望小売価格を49,980円から59,980円に改定しました（2026年5月8日発表）。新品の値段が1万円上がったことで中古・買取相場にも上昇圧力がかかっており、値上げ前に買った人にとっては売却の好機になっています。
              </li>
              <li>
                <span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>② 同梱版の生産終了：</span>
                マリオカート ワールドセット（定価53,980円）は2025年内の限定生産で販売終了、Pokémon LEGENDS Z-A Editionも生産終了しています。入手不可となった同梱版は買取でも通常版より高値がつきやすく、ルデヤでは国内通常版+10,300円の57,300円が提示されています。
              </li>
            </ul>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：任天堂 価格改定リリース（2026年5月8日）、任天堂公式 商品ラインナップ、GAME Watch報道（2026年6月12日確認）</p>
          </div>
        </section>

        {/* Price Forecast */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />旧型Switch モデル別 価格予測</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>※ 美品・箱あり状態の参考買取相場です。実際の価格は状態・付属品・時期により変動します。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>モデル</th>
                  <th>現在の相場</th>
                  <th>半年後予測</th>
                  <th>1年後予測</th>
                  <th>トレンド</th>
                </tr>
              </thead>
              <tbody>
                {priceForecasts.map((row) => (
                  <tr key={row.model}>
                    <td className="font-bold">{row.model}</td>
                    <td style={{ color: 'var(--color-electric-green)' }} className="font-bold">{row.current}</td>
                    <td>{row.forecast6m}</td>
                    <td>{row.forecast1y}</td>
                    <td className="font-bold" style={{ color: row.trend === '下落' ? '#F87171' : 'var(--color-electric-green)' }}>{row.trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Judgment Criteria */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />今売るべきか待つべきか？判断基準</h2>
          <div className="space-y-6">
            {judgmentCriteria.map((item) => (
              <div key={item.scenario} className="glass-card p-6">
                <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>{item.scenario}</h3>
                <ul className="space-y-2 mb-4">
                  {item.conditions.map((cond) => (
                    <li key={cond} className="text-sm flex items-start gap-2" style={{ color: 'var(--color-text-light)' }}>
                      <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-electric-green)' }} />
                      {cond}
                    </li>
                  ))}
                </ul>
                <p className="text-sm p-3 rounded-lg" style={{ background: 'var(--color-bg-alt)', color: 'var(--color-text-light)' }}>{item.reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />旧型Switchを高く売るための5つのコツ</h2>
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

        {/* Service Comparison */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />おすすめ買取サービス3選</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>サービス</th>
                  <th>特徴</th>
                  <th>対応エリア</th>
                  <th>買取方法</th>
                  <th>おすすめポイント</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.name}>
                    <td className="font-bold">{s.name}</td>
                    <td>{s.feature}</td>
                    <td>{s.area}</td>
                    <td>{s.method}</td>
                    <td className="text-sm">{s.point}</td>
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
            旧型Switchを<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>で売りませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            Switch 2への乗り換えなら、旧型を少しでも高く売ってSwitch 2の購入資金に充てましょう。
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
            <Link href="/hardware/switch/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Nintendo Switch買取ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>モデル別の買取相場・高く売るコツ</p>
            </Link>
            <Link href="/hardware/ps5/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PlayStation 5</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS5の買取相場・高く売るコツ</p>
            </Link>
            <Link href="/compare/shop-vs-online/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>店舗 vs 宅配買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>どっちがお得か徹底比較</p>
            </Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
