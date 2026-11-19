import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'
import TakehomeSimulator from '@/components/TakehomeSimulator'
import KaitoriWorldCta from '@/components/KaitoriWorldCta';
import GeoTakuhaiNotice from '@/components/GeoTakuhaiNotice';

export const metadata: Metadata = {
  title: 'ゲームはメルカリと買取どっちが得？【手取り計算機付き】手数料を引いた実質手取りで比較',
  description:
    'メルカリと買取業者を12項目で比較しています。2026年現在の手数料（販売手数料10%・振込手数料200円・ネコポス210円）をもとに手取り額をシミュレーションし、未開封品の扱いや入金スピードの違いなど、見落としやすい差についても公式情報をもとに解説します。',
  keywords: ['メルカリ vs 買取業者 どっちが得', 'メルカリ ゲーム 手数料', 'メルカリ 買取 比較', 'ゲーム メルカリ 買取業者', 'ゲーム 売る どっち'],
  openGraph: {
    images: ['/og.png'],
    title: 'ゲームはメルカリと買取どっちが得？【手取り計算機付き】実質手取りで比較',
    description: '2026年現在の手数料をもとに、メルカリと買取業者の手取り額を比較しています。未開封品・入金スピードの違いも解説します。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const CHECKED = '2026年11月19日';

const SRC = {
  mercariFee: 'https://help.jp.mercari.com/guide/articles/65/',
  mercariTransfer: 'https://help.jp.mercari.com/guide/articles/356/',
  mercariShipping: 'https://jp-news.mercari.com/contents/1882',
  mercariTransferDays: 'https://jp-news.mercari.com/contents/575',
  surugayaAnsin: 'https://www.suruga-ya.jp/man/kaitori/ansin.html',
  kaitoriWorld: 'https://www.kaitori-world.jp/',
  geoBuy: 'https://buy.geo-online.co.jp/',
};

// 損益分岐の売値 = (駿河屋の掲載買取価格 + メルカリ送料 + 振込手数料200円) ÷ 0.9（販売手数料10%）
// メルカリの価格は、2026/11/19 に jp.mercari.com の検索結果（売り切れ表示、おすすめ順・新しい順の2通り）を当サイトで集計したもの。
const examples = [
  {
    title: 'マリオカート ワールド（Switch 2）',
    surugaya: 5300,
    surugayaUrl: 'https://www.suruga-ya.jp/kaitori/kaitori_detail/112000010',
    shipping: 'ネコポス 210円',
    breakEven: '6,345円',
    mercariObserved: '中古（タイトルに新品・未開封の記載がない出品）124件：5,500〜8,590円、中央値 約6,800円',
    mercariNet: '約5,710円（6,800円 − 手数料680円 − 送料210円 − 振込200円）',
    verdict: 'メルカリが約410円多い',
  },
  {
    title: 'スーパーマリオワールド（スーパーファミコン）',
    surugaya: 2500,
    surugayaUrl: 'https://www.suruga-ya.jp/kaitori/kaitori_detail/167000001',
    shipping: '宅急便コンパクト 450円＋専用BOX 70円',
    breakEven: '3,578円',
    mercariObserved: '箱・説明書付きと明記された出品 11件：1,899〜8,000円、中央値 2,700円',
    mercariNet: '約1,710円（2,700円 − 手数料270円 − 送料520円 − 振込200円）',
    verdict: '中央値では駿河屋が約790円多い',
  },
  {
    title: 'ゼルダの伝説 神々のトライフォース（スーパーファミコン）',
    surugaya: 4000,
    surugayaUrl: 'https://www.suruga-ya.jp/kaitori/kaitori_detail/167000062',
    shipping: '宅急便コンパクト 450円＋専用BOX 70円',
    breakEven: '5,245円',
    mercariObserved: '箱・説明書付きと明記された出品 9件：3,500〜10,800円、中央値 3,900円',
    mercariNet: '約2,790円（3,900円 − 手数料390円 − 送料520円 − 振込200円）',
    verdict: '中央値では駿河屋が約1,210円多い',
  },
];

const comparisonItems = [
  { item: '手取り額', mercari: '販売価格から販売手数料10%・送料・振込手数料200円を引いた額', kaitori: '査定額が手取り（通信買取の手数料がかかる業者もあります）', winner: '商品による' },
  { item: '手数料', mercari: '販売価格の10% + 振込手数料200円', kaitori: '無料の業者が多い（例外: 駿河屋の通信買取は銀行振込880円）', winner: '買取業者' },
  { item: '送料', mercari: '出品者負担が主流（ソフト1本はネコポス210円、本体は宅急便60サイズ750円〜）', kaitori: '送料無料の業者が多い（駿河屋は見積3,000円以上など金額条件あり）', winner: '買取業者' },
  { item: '手間', mercari: '撮影・出品文作成・質問対応・梱包・発送', kaitori: '申し込み→送るだけ / 持ち込むだけ', winner: '買取業者' },
  { item: '売却までの時間', mercari: '売れる時期は買い手次第で、事前に分からない', kaitori: '店舗: 当日 / 宅配: 業者や混雑状況により異なる', winner: '買取業者' },
  { item: 'トラブルリスク', mercari: '値下げ交渉・受取評価の遅れ・商品状態をめぐる行き違い', kaitori: '業者との取引のため、個人間の交渉は発生しない', winner: '買取業者' },
  { item: '大量売り', mercari: '1点ずつの出品が基本で手間が大きい', kaitori: 'まとめて1回で査定に出せる', winner: '買取業者' },
  { item: 'レトロゲーム', mercari: '箱・説明書付きは価格の幅が大きい。ソフトのみは1,000円以下が中心（当サイト集計）', kaitori: '駿河屋はレトロソフトの買取価格を公開（完品・状態良好が前提）', winner: '商品による' },
  { item: '新作ゲーム', mercari: 'マリオカート ワールドは中古の売り切れ中央値 約6,800円（当サイト集計）', kaitori: '駿河屋の掲載買取価格は5,300円', winner: 'メルカリ' },
  { item: '周辺機器', mercari: '需要があれば売れるが、1点ずつの出品になる', kaitori: '本体・周辺機器をまとめて査定に出せる', winner: '買取業者' },
  { item: '返品リスク', mercari: '商品状態をめぐって返品を求められる場合がある', kaitori: '買取成立後に買い手から返品されることはない', winner: '買取業者' },
  { item: '個人情報', mercari: '匿名配送で住所・氏名の開示が不要', kaitori: '本人確認書類の提出が必要', winner: 'メルカリ' },
];

const matrix = [
  { situation: '発売から日が浅い人気ソフトを1本売る', recommend: 'メルカリ', reason: 'マリオカート ワールドでは、手数料・送料を引いても駿河屋の掲載価格を上回りました（当サイト集計）' },
  { situation: 'レトロゲームを売る（箱・説明書付き）', recommend: '損益分岐で判断', reason: '同じスーパーファミコンでも、タイトルによって駿河屋のほうが多くなる場合があります。下の計算式で分岐の売値を確認してください' },
  { situation: 'レトロゲームを売る（ソフトのみ）', recommend: '買取業者の見積で確認', reason: 'メルカリの売り切れ表示は1,000円以下が中心でした。買取業者の掲載価格は完品前提のため、見積で実際の金額を確認してください' },
  { situation: '大量のソフト（20本以上）をまとめて処分', recommend: '買取業者', reason: '1点ずつ出品する手間が省け、送料無料の条件も満たしやすくなります' },
  { situation: 'ゲーム機本体+周辺機器をセットで売る', recommend: '買取業者', reason: 'まとめて1回で査定でき、本体の送料（60サイズ750円〜）もかかりません' },
  { situation: '即日現金が必要', recommend: '買取業者（店舗）', reason: '店舗持ち込みなら当日に現金化できます' },
  { situation: '個人間のやり取りを避けたい', recommend: '買取業者', reason: '値下げ交渉や受取評価の待ちが発生しません' },
];

const faqs = [
  { q: 'ゲームを売るなら、メルカリと買取業者はどっちがよいですか？', a: `メルカリでの手取り（売値 − 販売手数料10% − 送料 − 振込手数料200円）が、買取業者の買取価格を上回るかどうかで判断できます。当サイトが${CHECKED}に確認したところ、マリオカート ワールド（Switch 2）はメルカリの中古の売り切れ中央値が約6,800円で、手取りは約5,710円となり、駿河屋の掲載買取価格5,300円を約410円上回りました。一方、手間・発送・取引相手とのやり取りを避けたい場合や、まとめて売る場合は買取業者が向いています。` },
  { q: 'レトロゲームはメルカリと買取業者のどちらが高く売れますか？', a: `タイトルと付属品の有無によって異なります。${CHECKED}の当サイト集計では、箱・説明書付きのスーパーファミコン版「ゼルダの伝説 神々のトライフォース」はメルカリの売り切れ中央値が3,900円で、手取りは約2,790円でした。駿河屋の掲載買取価格は4,000円のため、この例では駿河屋のほうが多くなります。「スーパーマリオワールド」も中央値2,700円（手取り約1,710円）に対し駿河屋2,500円でした。ただし、メルカリでは8,000円や10,800円で売れた出品もあり、状態の良い完品は高値になる場合があります。駿河屋の価格は完品・状態良好が前提で、ソフトのみの場合は見積で確認が必要です。` },
  { q: 'メルカリでいくら以上で売れれば、買取業者より得になりますか？', a: '損益分岐の売値は「（買取価格 + メルカリの送料 + 振込手数料200円）÷ 0.9」で計算できます。例えば駿河屋の掲載買取価格が5,300円のソフトをネコポス（210円）で送る場合、（5,300 + 210 + 200）÷ 0.9 ≒ 6,345円以上で売れればメルカリのほうが手取りが多くなります。駿河屋の通信買取で銀行振込（手数料880円）を選ぶ場合は、比較する買取額が4,420円となるため、分岐は約5,367円に下がります。' },
  { q: 'メルカリの手数料10%は高すぎませんか？', a: '販売価格が低いほど、手数料と送料の割合が大きくなります。例えば1万円のゲーム機を宅急便60サイズで送る場合、手数料1,000円 + 送料750円 + 振込手数料200円 = 1,950円が差し引かれ、手取りは8,050円です。買取業者の買取価格が8,050円を超えていれば、業者のほうが手取りは多くなります。' },
  { q: '未開封のゲームソフトはどちらで売るべきですか？', a: `メルカリでは未開封品をそのまま出品でき、マリオカート ワールドでは、タイトルに「未開封」と記載された売り切れの出品を当サイトの集計で62件確認しました。買取業者は店舗ごとに未開封品の扱いが異なるため、申し込み前に各社の規約をご確認ください。なお、ゲオの宅配買取は${CHECKED}からシステムメンテナンスにより新規申し込みを停止しており（再開時期未定）、当サイトは同日に同社の規約を再確認できていません。` },
  { q: 'メルカリで売れなかった場合はどうすればよいですか？', a: '値下げするか、買取業者への売却に切り替える方法があります。買取業者の掲載価格を先に確認しておくと、値下げの下限（損益分岐の売値）を決めやすくなります。' },
  { q: 'ゲーム機本体はメルカリと買取業者のどちらがお得ですか？', a: 'メルカリで本体を送る場合、送料はらくらくメルカリ便の宅急便で60サイズ750円・80サイズ850円・100サイズ1,050円です（メルカリ公式コラム、2026年11月5日更新版）。これに販売手数料10%と振込手数料200円が加わるため、販売価格1万円・60サイズなら1,950円、3万円・80サイズなら4,050円が差し引かれます。買取業者の買取価格と、手数料・送料を引いたメルカリの手取りを、上の計算機で比べてから判断してください。' },
  { q: 'メルカリと買取業者は併用したほうがよいですか？', a: '併用は有効です。損益分岐の売値を上回って売れそうなものはメルカリで、それ以外や大量のソフトは買取業者にまとめて売る方法です。手間と手取りのバランスを取りやすくなります。' },
];

const linkStyle = { color: 'var(--color-electric-green)' } as const;

export default function MercariVsKaitoriPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲームはメルカリと買取業者どっちで売る？手数料・手取り額・入金日数を実データ比較", "datePublished": "2026-03-15", "dateModified": "2026-11-19", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: '比較', href: '/' }, { name: 'メルカリ vs 買取業者' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(96,165,250,0.2)', color: '#60A5FA' }}>比較ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            メルカリ vs 買取業者 どっちが得？
          </h1>
          <GeoTakuhaiNotice />
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            メルカリでゲームを売るか、買取業者に任せるか。手取り額・手数料・送料・手間・トラブルリスクなど12項目で比較しています。新作ソフトとレトロゲーム3タイトルについて、駿河屋の買取価格とメルカリの手取りを{CHECKED}に計算した結果も掲載しています。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 結論 */}
        <section className="mb-12">
          <div className="glass-card p-6" style={{ borderLeft: '4px solid #60A5FA' }}>
            <h2 className="font-extrabold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：メルカリの手取りが「損益分岐の売値」を超えるかで決まります</h2>
            <ul className="text-sm leading-relaxed space-y-2 mb-4" style={{ color: 'var(--color-text-light)' }}>
              <li>・<strong>判断式</strong>：メルカリの手取り ＝ 売値 − 販売手数料10% − 送料 − 振込手数料200円。これが買取価格を上回るならメルカリ、下回るなら買取業者が有利です。</li>
              <li>・<strong>損益分岐の売値</strong> ＝（買取価格 ＋ 送料 ＋ 200円）÷ 0.9</li>
              <li>・<strong>新作の人気ソフト</strong>：マリオカート ワールドは、メルカリの手取りが駿河屋の掲載買取価格を約410円上回りました。</li>
              <li>・<strong>レトロゲーム</strong>：「メルカリのほうが高い」とは限りません。箱・説明書付きのスーパーファミコン2タイトルは、メルカリの売り切れ中央値で計算すると駿河屋のほうが手取りが多くなりました。高値で売れた出品もあるため、状態の良い完品は損益分岐の売値と比べて判断してください。</li>
            </ul>
            <div className="overflow-x-auto">
              <table className="comparison-table">
                <thead>
                  <tr><th>タイトル</th><th>駿河屋 買取価格</th><th>損益分岐の売値</th><th>メルカリ 売り切れ価格</th><th>結果</th></tr>
                </thead>
                <tbody>
                  {examples.map((ex) => (
                    <tr key={ex.title}>
                      <td className="font-bold text-sm">{ex.title}</td>
                      <td className="text-sm"><a href={ex.surugayaUrl} target="_blank" rel="noopener noreferrer" style={linkStyle}>{ex.surugaya.toLocaleString()}円</a></td>
                      <td className="text-sm">{ex.breakEven}</td>
                      <td className="text-sm">{ex.mercariObserved}</td>
                      <td className="font-bold text-sm">{ex.verdict}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-3 leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              ※ 確認日 {CHECKED}。駿河屋の価格は<a href="https://www.suruga-ya.jp/kaitori/search_buy?search_word=%E3%83%9E%E3%83%AA%E3%82%AA%E3%82%AB%E3%83%BC%E3%83%88%20%E3%83%AF%E3%83%BC%E3%83%AB%E3%83%89" target="_blank" rel="noopener noreferrer" style={linkStyle}>駿河屋 公式買取検索</a>の掲載価格で、完品（付属品あり）かつ状態良好の場合の金額です（<a href={SRC.surugayaAnsin} target="_blank" rel="noopener noreferrer" style={linkStyle}>あんしん買取の案内</a>）。メルカリの価格は、jp.mercari.com の検索結果（売り切れ表示）を当サイトがおすすめ順・新しい順の2通りで取得し、タイトルの記載で条件をそろえて集計したものです。検索結果には販売日が表示されないため、直近の相場とは限りません。メルカリShopsの出品も含みます。手数料・送料は<a href={SRC.mercariFee} target="_blank" rel="noopener noreferrer" style={linkStyle}>メルカリ公式ヘルプ「メルカリの手数料」</a>と<a href={SRC.mercariShipping} target="_blank" rel="noopener noreferrer" style={linkStyle}>メルカリ公式コラム「メルカリ送料一覧」</a>（2026年11月5日更新版）によります。箱付きのスーパーファミコンソフトは厚さが3cmを超える場合があるため、宅急便コンパクトで計算しています。
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />12項目の比較</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>比較項目</th>
                  <th>メルカリ</th>
                  <th>買取業者</th>
                  <th>有利</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((row) => (
                  <tr key={row.item}>
                    <td className="font-bold">{row.item}</td>
                    <td className="text-sm">{row.mercari}</td>
                    <td className="text-sm">{row.kaitori}</td>
                    <td className="font-bold" style={{ color: row.winner === '買取業者' ? 'var(--color-electric-green)' : row.winner === 'メルカリ' ? '#60A5FA' : 'var(--color-text-light)' }}>{row.winner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Simulation */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />金額シミュレーション（{CHECKED}の実データ）</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {examples.map((ex) => (
              <div key={ex.title} className="glass-card p-5">
                <h3 className="font-bold text-sm mb-3" style={{ color: 'var(--color-deep-blue)' }}>{ex.title}</h3>
                <div className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                  <div><span className="font-bold" style={{ color: 'var(--color-electric-green)' }}>駿河屋</span>：{ex.surugaya.toLocaleString()}円（通信買取で銀行振込の場合は手数料880円を差し引いて{(ex.surugaya - 880).toLocaleString()}円）</div>
                  <div><span className="font-bold" style={{ color: '#60A5FA' }}>メルカリ</span>：{ex.mercariObserved}</div>
                  <div>手取り（中央値で計算）：{ex.mercariNet}</div>
                  <div>送料の想定：{ex.shipping}</div>
                  <div>損益分岐の売値：<strong>{ex.breakEven}</strong></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm mt-4 leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
            駿河屋の通信買取は、見積価格が3,000円以上の場合に送料無料となり、銀行振込では通信買取手数料880円がかかります（{CHECKED}確認、<a href={SRC.surugayaAnsin} target="_blank" rel="noopener noreferrer" style={linkStyle}>駿河屋 あんしん買取の案内</a>）。スーパーマリオワールド1本（2,500円）だけを送る場合は送料無料の条件を満たさないため、店頭への持ち込みか、ほかのソフトとまとめた申し込みが前提になります。ソフトのみ（箱・説明書なし）の出品は、メルカリの売り切れ表示でスーパーマリオワールドが3件399〜600円、神々のトライフォースが5件700〜1,000円でした。
          </p>

          {/* インタラクティブ手取りシミュレーター（柱3） */}
          <h3 className="font-bold text-lg mt-8 mb-3" style={{ color: 'var(--color-deep-blue)' }}>ご自身の条件で計算：実質手取りシミュレーター</h3>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            メルカリの想定売値・配送方法・買取査定額を入れると、手数料・送料・振込手数料を引いた<strong>実質手取り</strong>をその場で比較できます。「表示価格は高いが、手取りは買取とほぼ同じ」といったケースも確認いただけます。
          </p>
          <TakehomeSimulator />
        </section>

        {/* Current Fees (Information Gain) */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />{CHECKED}時点のメルカリの手数料・送料</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>以前の料金（ネコポス175円・振込手数料210円など）を掲載したままの比較記事もあるため、当サイトでは{CHECKED}にメルカリ公式ヘルプ・公式コラムの記載を確認し、以下の表を更新しています。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>項目</th><th>料金</th><th>ゲームを売るときの目安</th></tr>
              </thead>
              <tbody>
                <tr><td className="font-bold text-sm">販売手数料</td><td className="text-sm">販売価格の10%（取引完了時）</td><td className="text-sm">3,000円で売れたら300円</td></tr>
                <tr><td className="font-bold text-sm">振込手数料</td><td className="text-sm">一律200円（お急ぎ振込はさらに200円。お急ぎ振込はゆうちょ銀行のみ選択可）</td><td className="text-sm">売上金を口座へ振り込むたびに発生</td></tr>
                <tr><td className="font-bold text-sm">ネコポス（らくらくメルカリ便）</td><td className="text-sm">210円（3辺合計60cm以内・長辺34cm以内・1kg以内）</td><td className="text-sm">ソフト1〜2本の発送に適する</td></tr>
                <tr><td className="font-bold text-sm">ゆうパケット（ゆうゆうメルカリ便）</td><td className="text-sm">230円（3辺合計60cm以内・長辺34cm以内・1kg以内）</td><td className="text-sm">郵便局・ローソンから発送する場合</td></tr>
                <tr><td className="font-bold text-sm">ゆうパケットポスト</td><td className="text-sm">215円 + 専用箱65円（または発送用シール5円）</td><td className="text-sm">ソフト数本ならこちらも選択肢</td></tr>
                <tr><td className="font-bold text-sm">宅急便コンパクト</td><td className="text-sm">450円 + 専用BOX70円</td><td className="text-sm">箱付きのレトロソフトや複数本</td></tr>
                <tr><td className="font-bold text-sm">宅急便60サイズ</td><td className="text-sm">750円（ゆうパック60サイズは770円）</td><td className="text-sm">Switch本体など小型のゲーム機</td></tr>
                <tr><td className="font-bold text-sm">宅急便80〜100サイズ</td><td className="text-sm">850〜1,050円（ゆうパックは870〜1,070円）</td><td className="text-sm">PS5本体・箱付きの本体セット</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SRC.mercariFee} target="_blank" rel="noopener noreferrer" style={linkStyle}>メルカリ公式ヘルプ「メルカリの手数料」</a>、<a href={SRC.mercariTransfer} target="_blank" rel="noopener noreferrer" style={linkStyle}>同「振込申請方法」</a>、<a href={SRC.mercariShipping} target="_blank" rel="noopener noreferrer" style={linkStyle}>メルカリ公式コラム「メルカリ送料一覧」</a>（2026年11月5日更新版）。いずれも{CHECKED}に確認しました。
          </p>
          <div className="glass-card p-5 mt-4">
            <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>ソフト1本（3,000円で売れた場合）の実質手取り</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              3,000円 − 販売手数料300円 − ネコポス210円 = 2,490円。さらに現金化するなら振込手数料200円が引かれて実質2,290円です。買取店の査定が2,290円を超えるなら、手取りの面では買取店のほうが有利で、撮影・出品・梱包・発送の手間もかかりません。
            </p>
          </div>
        </section>

        {/* Overlooked differences */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />見落としがちな2つの違い：未開封品と入金スピード</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>未開封品の扱い</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                メルカリでは未開封品をそのまま出品できます。当サイトの集計でも、マリオカート ワールドは、タイトルに「未開封」と記載された売り切れの出品が62件ありました。買取業者は店舗ごとに未開封品の扱いが異なるため、申し込み前に各社の規約をご確認ください。なお、ゲオの宅配買取は{CHECKED}からシステムメンテナンスにより新規申し込みの受付を停止しており、再開時期は未定と案内されています。
              </p>
              <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：<a href={SRC.geoBuy} target="_blank" rel="noopener noreferrer" style={linkStyle}>ゲオの買取（宅配買取）</a>のお知らせ（{CHECKED}確認）</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>現金化までのスピード差</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                買取業者でも入金スピードは異なります。カイトリワールドは公式サイトで「最短当日振込」と記載しています。メルカリは売れる時期が事前に分からず、売れた後も振込申請が必要です。振込は申請後、振込スケジュールに基づいて行われ、公式コラムでは通常最短4営業日、お急ぎ振込（追加200円）で最短1営業日と案内されています。
              </p>
              <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：<a href={SRC.kaitoriWorld} target="_blank" rel="noopener noreferrer" style={linkStyle}>カイトリワールド公式サイト</a>、<a href={SRC.mercariTransfer} target="_blank" rel="noopener noreferrer" style={linkStyle}>メルカリ公式ヘルプ「振込申請方法」</a>、<a href={SRC.mercariTransferDays} target="_blank" rel="noopener noreferrer" style={linkStyle}>メルカリ公式コラム</a>（{CHECKED}確認）</p>
            </div>
          </div>
        </section>

        {/* Decision Matrix */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />状況別おすすめマトリクス</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>状況</th>
                  <th>おすすめ</th>
                  <th>理由</th>
                </tr>
              </thead>
              <tbody>
                {matrix.map((row) => (
                  <tr key={row.situation}>
                    <td className="font-bold text-sm">{row.situation}</td>
                    <td className="font-bold" style={{ color: row.recommend.includes('メルカリ') ? '#60A5FA' : row.recommend.includes('買取業者') ? 'var(--color-electric-green)' : 'var(--color-text-light)' }}>{row.recommend}</td>
                    <td className="text-sm" style={{ color: 'var(--color-text-light)' }}>{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="glass-card p-5 mt-6" style={{ borderLeft: '4px solid var(--color-electric-green)' }}>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              <strong>買取に出すと決めた場合は、次に現在最も高い売り先をご確認ください。</strong>当サイトが<strong>定期的に実測している</strong><Link href="/software/high-value/" style={linkStyle}>ゲーム買取価格DB</Link>で、人気ソフトの店舗別買取価格を比較できます。あわせて<Link href="/price-index/" style={linkStyle}>最新の買取価格インデックス</Link>もご活用ください。
            </p>
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
            買取業者の<span style={{ color: 'var(--color-electric-green)' }}>査定額</span>を無料で確認
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            メルカリに出品する前に、買取業者の査定額を確認しておくと、損益分岐の売値を計算できます。手数料・送料を引いたメルカリの手取りと比較することをおすすめします。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連する売り方ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/method/app/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>フリマアプリ vs 買取業者</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>メルカリ・ラクマの10項目比較</p>
            </Link>
            <Link href="/method/online/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>宅配買取ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>流れ・梱包のコツ・送料比較</p>
            </Link>
            <Link href="/method/high-price/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>高く売るコツ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>買取価格を最大化する10のテクニック</p>
            </Link>
          </div>
          <div className="mt-4">
            <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他の比較ガイド</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/compare/hikakaku-vs-uriel/" className="glass-card p-4 card-hover block">
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク vs ウリエル</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>2大サービスの違いを比較</p>
              </Link>
              <Link href="/compare/shop-vs-online/" className="glass-card p-4 card-hover block">
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>店舗 vs 宅配</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>目的に合った売り方を比較</p>
              </Link>
            </div>
          </div>
        </section>
        <KaitoriWorldCta />
        <AuthorBox />
      </div>
    </>
  );
}
