import Link from 'next/link';
import AuthorBox from '@/components/AuthorBox'
import { crossStorePrices, hardwarePrices, analyzeTitle, PRICE_SURVEY_DATE, HARDWARE_SURVEY_DATE, STORE_LABELS, type PriceAnalysis } from '@/data/prices';
import KaitoriWorldCta from '@/components/KaitoriWorldCta';
import ConsoleBuild from '@/components/ConsoleBuild';

const services = [
  {
    rank: 1,
    name: 'ヒカカク！',
    url: 'https://hikakaku.com',
    tagline: '最大20社一括査定の買取比較サイト',
    reviewPath: '/review/hikakaku/',
    features: ['最大20社一括査定', 'ゲーム専門業者多数', '無料査定', '全国対応'],
    buyMethods: ['宅配買取', '店舗買取', '出張買取'],
    target: 'ゲーム機・レトロゲーム・ゲームソフト対応',
    recommend: '複数社を比較して最高値で売りたい方',
    pros: ['一括査定で最高値を見つけやすい', '対応業者数が多い', '利用無料'],
    cons: ['業者から連絡が来る', '地域により対応業者に差あり'],
    charaComment: 'ユウト：「複数社の査定額を一度に比較できるため、最初に利用をおすすめするサービスです。」',
  },
  {
    rank: 2,
    name: '買取ウリエル',
    url: 'https://uriel-cuore.co.jp',
    tagline: '出張買取対応・即日現金化',
    reviewPath: '/review/uriel/',
    features: ['出張買取対応', '経験豊富な査定士', '即日現金化', '関東・関西対応'],
    buyMethods: ['出張買取', '宅配買取', '店舗買取'],
    target: '20種類以上の品目にゲーム含む',
    recommend: '自宅にいながらまとめて売りたい方',
    pros: ['出張買取のため持ち込み不要', 'その場で現金化', 'ゲーム以外もまとめて売れる'],
    cons: ['対応エリアが関東・関西中心', 'ゲーム専門ではない'],
    charaComment: 'ユウト：「自宅にいながら売却でき、ゲーム以外の品目もまとめて査定に出せる点が強みです。」',
  },
  {
    rank: 3,
    name: 'ティファナ',
    url: 'https://tifana.net',
    tagline: 'ホビー系買取に強いリサイクルショップ',
    reviewPath: '/review/tifana/',
    features: ['ゲーム・トレカ・フィギュア幅広い', '店舗買取+宅配買取', 'ホビー専門査定士', '東京近郊対応'],
    buyMethods: ['店舗買取', '宅配買取'],
    target: 'ゲーム・トレカ・フィギュア・レトロ玩具など',
    recommend: 'ゲームと一緒にホビーグッズも売りたい方',
    pros: ['ホビー系の査定に強い', 'トレカやフィギュアもまとめて売れる', '店舗持ち込みで即現金化'],
    cons: ['出張買取非対応', '東京近郊がメイン'],
    charaComment: 'ユウト：「フィギュアやトレカもまとめて売却できるため、ホビー全般をお持ちの方に適しています。」',
  },
  {
    rank: 4,
    name: 'ゲオ宅配買取',
    url: 'https://geo-online.co.jp/kaitori/',
    tagline: '大手チェーン、まとめ売りで最大35%UP、宅配買取、全国対応',
    reviewPath: '/review/geo/',
    features: ['まとめ売りで最大35%UP', '大手チェーン運営', '宅配買取専門', '全国対応'],
    buyMethods: ['宅配買取'],
    target: 'ゲームソフト・ゲーム機・DVD・Blu-ray',
    recommend: 'まとめて大量に売りたい方・大手チェーンでの売却を希望する方',
    pros: ['まとめ売りボーナスが大きい', '大手チェーンで信頼性が高い', '送料無料・段ボール無料'],
    cons: ['店頭買取は別サービス', '査定に数日かかる場合あり'],
    charaComment: 'ミク：「大手チェーンが運営しており、まとめ売りボーナスも利用できます。」',
  },
  {
    rank: 5,
    name: 'ブックオフ',
    url: 'https://www.bookoff.co.jp/',
    tagline: '全国900店舗、店頭即現金化、宅配買取も対応',
    reviewPath: '/review/bookoff/',
    features: ['全国900店舗以上', '店頭持ち込みで即現金化', '宅配買取対応', '本・DVD・ゲーム幅広い'],
    buyMethods: ['店舗買取', '宅配買取'],
    target: 'ゲームソフト・本・DVD・CD・トレカなど幅広いジャンル',
    recommend: '店舗に持ち込んですぐ現金化したい方',
    pros: ['全国どこでも店舗がある', 'その場で現金が受け取れる', 'ゲーム以外もまとめて売れる'],
    cons: ['専門店より買取金額が低い傾向', '人気商品以外は査定額が低めの傾向'],
    charaComment: 'ミク：「店舗数が多く気軽に持ち込めるうえ、その場で現金を受け取れる点が利点です。」',
  },
  {
    rank: 6,
    name: '駿河屋',
    url: 'https://www.suruga-ya.jp/',
    tagline: 'レトロゲーム・限定版に強い、コレクター向け、宅配/店舗',
    reviewPath: '/review/surugaya/',
    features: ['レトロゲームに強い', '限定版・希少品の高額査定', 'コレクター向け', '宅配/店舗対応'],
    buyMethods: ['宅配買取', '店舗買取'],
    target: 'レトロゲーム・限定版・コレクターズアイテム',
    recommend: 'レトロゲームや希少品を適正価格で売りたい方',
    pros: ['レトロゲームの査定に定評あり', '希少品に高値がつきやすい', 'コレクター市場に精通'],
    cons: ['一般的なゲームは平均的な価格', '査定に時間がかかることがある'],
    charaComment: 'ミク：「レトロゲームや希少品の査定に定評があるため、コレクターズアイテムの売却に適しています。」',
  },
  {
    rank: 7,
    name: 'ゲーム王国',
    url: 'https://gameoukoku.jp/',
    tagline: 'ゲーム専門、初回査定額10%UP、宅配買取',
    reviewPath: '/review/game-oukoku/',
    features: ['ゲーム専門買取', '初回査定額10%UP', '宅配買取対応', 'ゲーム機・ソフト幅広い'],
    buyMethods: ['宅配買取'],
    target: 'ゲームソフト・ゲーム機・周辺機器',
    recommend: '初めてゲーム買取を利用する方・ゲーム専門店に任せたい方',
    pros: ['ゲーム専門で査定が的確', '初回ボーナスあり', '送料無料で手軽'],
    cons: ['店舗持ち込み非対応', '知名度が大手より低い'],
  },
  {
    rank: 8,
    name: 'ホビーコレクト',
    url: 'https://recycle-net.jp/figure/',
    tagline: '箱なし・ジャンク品可、宅配買取専門',
    reviewPath: '/review/hobby-collect/',
    features: ['箱なし・ジャンク品可', '宅配買取専門', '幅広いジャンル対応', '送料無料'],
    buyMethods: ['宅配買取'],
    target: 'ゲーム・フィギュア・トレカ・ホビー全般',
    recommend: '箱や説明書がなくても売りたい方・状態が悪いゲームを処分したい方',
    pros: ['箱なし・ジャンク品でも買取可', '幅広いホビーに対応', '梱包キット無料'],
    cons: ['店舗買取非対応', '高額査定は期待しにくい'],
  },
  {
    rank: 9,
    name: 'カイトリワールド',
    url: 'https://kaitori-world.jp/',
    tagline: 'フィギュア・ホビーに強み、宅配専門、最短即日入金',
    reviewPath: '/review/kaitori-world/',
    features: ['フィギュア・ホビーに強い', '最短即日入金', '宅配買取専門', '送料無料'],
    buyMethods: ['宅配買取'],
    target: 'ゲーム・フィギュア・プラモデル・ホビー全般',
    recommend: '早く現金が欲しい方・フィギュアとゲームをまとめて売りたい方',
    pros: ['最短即日入金のスピード感', 'フィギュア・ホビーの査定が高い', '送料・手数料すべて無料'],
    cons: ['店舗買取非対応', 'ゲーム単体だと他社の方が高い場合あり'],
  },
  {
    rank: 10,
    name: 'ネットオフ',
    url: 'https://www.netoff.co.jp/',
    tagline: 'ゲーム・本・DVD一括、まとめ売りボーナス',
    reviewPath: '/review/netoff/',
    features: ['ゲーム・本・DVD一括買取', 'まとめ売りボーナスあり', '宅配買取専門', '集荷対応'],
    buyMethods: ['宅配買取'],
    target: 'ゲーム・本・CD・DVD・ブルーレイなど',
    recommend: '引っ越しや断捨離でゲーム・本・DVDをまとめて売りたい方',
    pros: ['ジャンルをまたいでまとめ売りできる', 'まとめ売りボーナスあり', '自宅集荷に対応'],
    cons: ['専門店より単品の査定額は低い', '買取不可品は処分費用がかかる場合あり'],
  },
];

const stats = [
  { value: '10社', label: '厳選サービス', icon: 'PICK' },
  { value: '最大20社', label: '一括比較', icon: 'VS' },
  { value: '出張対応', label: '自宅で完結', icon: 'HOME' },
  { value: '宅配対応', label: '全国どこでも', icon: 'POST' },
];

const consoles = [
  { name: 'Nintendo Switch', tag: 'Switch', abbr: 'SW' },
  { name: 'PlayStation 5', tag: 'PS5', abbr: 'PS5' },
  { name: 'PlayStation 4', tag: 'PS4', abbr: 'PS4' },
  { name: 'レトロゲーム', tag: 'レトロ', abbr: 'RTO' },
];

const steps = [
  { step: 1, title: '売りたいゲームを確認', description: '手持ちのゲームソフト・ゲーム機を書き出し、付属品・箱の有無も確認します。状態が良いほど、高い査定額が期待できます。' },
  { step: 2, title: '買取サービスを比較', description: '当サイトのランキングを参考に、ご自身に合ったサービスをお選びください。一括査定を利用すると、複数社の見積もりを一度に取得できます。' },
  { step: 3, title: '査定を申し込む', description: '各サービスのWebサイトから無料査定を申し込みます。必要事項を入力すると、最短で当日中に査定結果が届きます。' },
  { step: 4, title: '買取方法を選ぶ', description: '宅配買取・出張買取・店舗買取から、ご都合に合う方法を選びます。宅配買取は送料無料のサービスが多く、段ボールを無料で手配するサービスもあります。' },
  { step: 5, title: '現金を受け取る', description: '査定額に納得できれば買取成立です。宅配買取は振込、出張買取・店舗買取はその場で現金を受け取れます。キャンセルも無料です。' },
];

const faqs = [
  { q: 'ゲーム買取で最も高く売れるサービスはどこですか？', a: 'ゲームの種類や状態によって最適なサービスは異なるため、一概には申し上げられません。ヒカカク！の一括査定を利用すると最大20社の見積もりを比較できるため、最高値のサービスを見つけやすくなります。' },
  { q: 'ゲームソフトの買取相場はどのくらいですか？', a: '人気タイトルのSwitch用ソフトで500円〜3,000円程度が目安です。限定版や希少ソフトは、それ以上の価格になることもあります。新品未開封品は特に高い査定額が期待できます。' },
  { q: '壊れたゲーム機も買取してもらえますか？', a: 'サービスによります。ヒカカク！経由の一部業者やティファナでは、ジャンク品の買取に対応している場合があります。ご利用前に各サービスへご確認ください。' },
  { q: '宅配買取の送料はかかりますか？', a: 'ほとんどのサービスで送料は無料です。ヒカカク！経由の業者や買取ウリエルでは、専用の宅配キット（段ボール・緩衝材）を無料で提供しています。' },
  { q: '買取にかかる時間はどのくらいですか？', a: '店舗買取・出張買取は即日、宅配買取は商品到着から1〜3営業日で査定結果が届きます。買取ウリエルの出張買取では、最短即日で現金化できます。' },
  { q: 'レトロゲームの買取に強いサービスはどこですか？', a: 'ヒカカク！ではレトロゲーム専門の買取業者が多数参加しており、ファミコンやスーパーファミコンなどのレトロゲームに高い査定額が出やすい傾向があります。ティファナもレトロ玩具に強みがあります。' },
  { q: '出張買取はどのエリアで利用できますか？', a: '買取ウリエルは関東・関西エリアで出張買取に対応しています。ヒカカク！経由の業者は全国対応のところもあります。事前に対応エリアをご確認ください。' },
  { q: 'ゲーム以外のものも一緒に売れますか？', a: 'はい、可能です。買取ウリエルは20種類以上の品目に対応しており、ティファナはトレカ・フィギュア・レトロ玩具などホビー系全般を取り扱っています。まとめ売りにより買取金額が上がる場合もあります。' },
  { q: '買取をキャンセルできますか？', a: 'ほとんどのサービスでキャンセル無料です。査定結果に納得できなければ、返送料をサービス側の負担として返却するケースが多く見られます。各サービスの規約をご確認ください。' },
  { q: '未成年でも買取サービスを利用できますか？', a: '多くの買取サービスでは、18歳未満の方は保護者の同意が必要です。サービスによっては保護者同伴での利用が求められる場合もあります。事前にご確認ください。' },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲーム買取おすすめはどこ？比較ランキング【2026年】公式買取価格の実測で解説", "datePublished": "2026-03-15", "dateModified": "2026-10-15", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較している編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      {/* Hero Section */}
      {/* 2026-10-07 デザイン改修: 文言・リンクは一字も変えず、見せ方だけ差し替えている。
          背景はゲーム機の写真を暗く敷き、左から黒のグラデーションを重ねて文字側の可読性を確保する。 */}
      <section className="hero-gradient">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20 relative z-10">
          <div className="max-w-2xl">
            <p className="tag-pill mb-5 inline-block">
              2026年最新版
            </p>
            <h1 className="text-3xl md:text-5xl font-normal leading-tight mb-5" style={{ letterSpacing: '-1.2px' }}>
              ゲーム買取のおすすめ<span style={{ fontWeight: 500 }}>サービス比較</span>
            </h1>
            <p className="text-sm md:text-base mb-7" style={{ color: 'rgba(255,255,255,0.76)', lineHeight: '25px' }}>
              当サイトでは、主要なゲーム買取サービスを共通の項目で比較しています。Switch・PS5・レトロゲームまで、<br className="hidden md:block" />
              お手持ちのゲームを最も高く売却できるサービスをお探しいただけます。
            </p>
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="tag-pill text-xs">Switch 買取</span>
              <span className="tag-pill text-xs">PS5 買取</span>
              <span className="tag-pill text-xs">レトロゲーム 買取</span>
              <span className="tag-pill text-xs">ゲーム機 売る</span>
            </div>
            <Link href="#ranking" className="btn-primary text-base inline-block" style={{ minHeight: '48px', padding: '0 30px' }}>
              おすすめランキングを見る
            </Link>
          </div>
        </div>
        {/* スマホ用: 背景にcoverで敷くと機体が切れるので、元の比率のまま帯として置く */}
        <div className="hero-shot md:hidden" aria-hidden="true" />
      </section>

      {/* Conclusion: おすすめはどこ？直答 + 最新の実測最高値 */}
      <section className="py-10 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="glass-card p-6 md:p-8" style={{ borderLeft: '4px solid var(--color-electric-green)' }}>
            <h2 className="text-lg md:text-xl font-extrabold mb-3" style={{ color: 'var(--color-deep-blue)' }}>
              ゲーム買取のおすすめは「何を・どう売るか」で変わります
            </h2>
            <p className="text-sm font-bold mt-3 mb-2" style={{ color: 'var(--color-deep-blue)' }}>目的別のおすすめ（各社公式サイトで確認日を記録した条件にもとづき選定）</p>
            <ul className="text-sm space-y-1.5 mb-4" style={{ color: 'var(--color-text-light)' }}>
              <li>①<span className="font-bold">宅配でまとめて売りたい場合</span> → 送料・査定料・振込手数料無料の<Link href="/review/game-oukoku/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>ゲーム王国</Link>／段ボール最大10箱無料の<Link href="/review/kaitori-world/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>カイトリワールド</Link></li>
              <li>②<span className="font-bold">当日中に現金化したい場合</span> → 全国900店舗超の<Link href="/review/bookoff/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>ブックオフ店頭</Link>（店頭査定は通常30分〜1時間程度）</li>
              <li>③<span className="font-bold">少しでも高く売りたい場合</span> → 店舗ごとの価格は毎週変動するため、下の<span className="font-bold">最新の実測・最高値の店</span>で現時点の最高値の店舗をご確認のうえ、売却することをおすすめします</li>
            </ul>
            <ul className="text-sm space-y-2 mb-5" style={{ color: 'var(--color-text-light)' }}>
              <li>・<span className="font-bold">少しでも高く売りたい</span> → まず<Link href="/price-index/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>最新の実測買取価格</Link>で最高値の店舗をご確認ください（下表）。複数社を比較する場合は、一括査定（ヒカカク！）が適しています</li>
              <li>・<span className="font-bold">箱なし・傷あり・ジャンク</span> → 減額の少ない店舗が有利です。<Link href="/condition-guide/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>状態別の許容度マップ</Link>でご確認ください</li>
              <li>・<span className="font-bold">メルカリと比較したい</span> → 手数料・送料を差し引いた<Link href="/compare/mercari-vs-kaitori/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>実質手取りシミュレーター</Link>で比較できます</li>
              <li>・<span className="font-bold">用途別の詳しい使い分け</span>（早く売る・まとめ売り・レトロ等） → <Link href="/compare/which-is-best/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>用途別おすすめ比較</Link>をご覧ください</li>
            </ul>
            <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>
              最新の実測・最高値の店（最終実測日: {PRICE_SURVEY_DATE.replace(/-/g, '/')}・完品前提の参考価格）
            </h3>
            <div className="overflow-x-auto">
              <table className="comparison-table text-sm">
                <thead>
                  <tr><th>タイトル</th><th>最高値の店</th><th>参考買取価格</th></tr>
                </thead>
                <tbody>
                  {crossStorePrices
                    .map(analyzeTitle)
                    .filter((x): x is PriceAnalysis => x !== null)
                    .sort((a, b) => b.best.price - a.best.price)
                    .slice(0, 5)
                    .map((a) => (
                      <tr key={a.title}>
                        <td className="text-sm">{a.title}（{a.platform}）</td>
                        <td className="font-bold">{STORE_LABELS[a.best.store]}</td>
                        <td className="font-bold" style={{ color: 'var(--color-accent-orange)' }}>{a.best.price.toLocaleString()}円</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              ※当サイトが各社公式買取ページで定期的に実測している参考価格です（店舗・在庫・状態により変動します）。全タイトル・全店舗の比較と前回比の値動きは
              <Link href="/price-index/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>買取価格インデックス</Link>でご確認いただけます。
            </p>

            <h3 className="font-bold text-sm mt-6 mb-2" style={{ color: 'var(--color-deep-blue)' }}>
              ゲーム機（本体）の実測・最高値ランキング（{HARDWARE_SURVEY_DATE.replace(/-/g, '/')}調査・完品前提の参考価格）
            </h3>
            <div className="overflow-x-auto">
              <table className="comparison-table text-sm">
                <thead>
                  <tr><th>本体</th><th>最高値の店</th><th>参考買取価格</th></tr>
                </thead>
                <tbody>
                  {hardwarePrices
                    .map(analyzeTitle)
                    .filter((x): x is PriceAnalysis => x !== null)
                    .sort((a, b) => b.best.price - a.best.price)
                    .slice(0, 5)
                    .map((a) => (
                      <tr key={a.title}>
                        <td className="text-sm">{a.title}</td>
                        <td className="font-bold">{STORE_LABELS[a.best.store]}</td>
                        <td className="font-bold" style={{ color: 'var(--color-accent-orange)' }}>{a.best.price.toLocaleString()}円</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>
              ※本体は付属品の欠品・状態による減額幅が大きいため、実際の査定額は変動します。モデル別の詳細は<Link href="/hardware/switch2/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>Switch 2買取ガイド</Link>と<Link href="/price-index/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>買取価格インデックス</Link>をご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-2 text-xs font-black" style={{ background: 'var(--color-deep-blue)', color: '#FFFFFF' }}>
                  {s.icon}
                </div>
                <p className="text-2xl md:text-3xl font-extrabold" style={{ color: 'var(--color-electric-green)' }}>{s.value}</p>
                <p className="text-xs mt-1 font-semibold" style={{ color: 'var(--color-text-light)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 md:py-16 gaming-grid" id="ranking">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-heading">
              <span className="section-heading-bar" />ゲーム買取おすすめ比較ランキング
            </h2>
            <p className="text-sm mt-3" style={{ color: 'var(--color-text-light)' }}>当サイトで選定した10社を比較しています</p>
            <div className="mt-5">
              <Link href="/compare/which-is-best/" className="btn-primary py-2.5 px-6 inline-block">
                ゲーム買取はどこがいい？用途別おすすめ比較を見る
              </Link>
            </div>
          </div>

          <div className="overflow-x-auto mb-12">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>順位</th>
                  <th>サービス名</th>
                  <th>特徴</th>
                  <th>買取方法</th>
                  <th>対象</th>
                  <th>詳細</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.name}>
                    <td>
                      <span className={`rank-badge rank-badge-${s.rank}`}>{s.rank}</span>
                    </td>
                    <td className="font-bold">{s.name}</td>
                    <td className="text-sm">{s.tagline}</td>
                    <td>
                      <div className="flex flex-wrap gap-1">
                        {s.buyMethods.map((m) => (
                          <span key={m} className="tag-pill tag-pill-green text-xs">{m}</span>
                        ))}
                      </div>
                    </td>
                    <td className="text-sm">{s.target}</td>
                    <td>
                      <Link href={s.reviewPath} className="btn-outline text-xs py-1.5 px-3">
                        詳細を見る
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Ranking Detailed Reviews */}
          <div className="space-y-8">
            {services.map((s) => (
              <div key={s.name} className="glass-card p-6 md:p-8 card-hover">
                <div className="flex items-start gap-4 mb-4">
                  <span className={`rank-badge rank-badge-${s.rank} shrink-0`}>{s.rank}</span>
                  <div>
                    <h3 className="text-xl font-extrabold" style={{ color: 'var(--color-deep-blue)' }}>{s.name}</h3>
                    <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{s.tagline}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {s.features.map((f) => (
                    <span key={f} className="tag-pill tag-pill-blue">{f}</span>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-bold mb-2" style={{ color: 'var(--color-electric-green)' }}>メリット</h4>
                    <ul className="text-sm space-y-1" style={{ color: 'var(--color-text-light)' }}>
                      {s.pros.map((p) => <li key={p}>+ {p}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-2" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h4>
                    <ul className="text-sm space-y-1" style={{ color: 'var(--color-text-light)' }}>
                      {s.cons.map((c) => <li key={c}>- {c}</li>)}
                    </ul>
                  </div>
                </div>

                <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
                  <span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>このような方におすすめです：</span>{s.recommend}
                </p>

                {/* Character comment speech bubble */}
                {s.charaComment && (
                  <div className={`flex items-start gap-3 mt-4 p-3 rounded-lg ${s.rank <= 3 ? 'speech-bubble' : 'speech-bubble speech-bubble-miku'}`}>
                    <img
                      src={s.rank <= 3 ? '/chara-main.jpg' : '/chara-sub.jpg'}
                      alt={s.rank <= 3 ? 'ユウト' : 'ミク'}
                      className="chara-avatar"
                    />
                    <div>
                      <span className="text-xs font-bold" style={{ color: s.rank <= 3 ? 'var(--color-electric-green)' : 'var(--color-accent-orange)' }}>
                        {s.rank <= 3 ? 'ユウトのコメント' : 'ミクのコメント'}
                      </span>
                      <p className="text-sm mt-1" style={{ color: 'var(--color-text-light)' }}>{s.charaComment.split('：')[1]?.replace(/^「/, '').replace(/」$/, '') || s.charaComment}</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-3 mt-4">
                  <Link href={s.reviewPath} className="btn-primary text-sm py-2 px-5">
                    {s.name}の詳細レビュー
                  </Link>
                  <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="btn-accent text-sm py-2 px-5">
                    公式サイトへ
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Console Price Table */}
      <section className="py-12 md:py-16 gaming-grid">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-heading">
              <span className="section-heading-bar" />ゲーム機本体の買取相場（{HARDWARE_SURVEY_DATE.replace(/-/g, '/')}実測）
            </h2>
            <p className="text-sm mt-3" style={{ color: 'var(--color-text-light)' }}>
              当サイトが各社の公式買取ページで実測した、主要ゲーム機の買取価格の範囲です。実際の買取金額は、サービスや状態により異なります。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>ゲーム機</th>
                  <th>買取価格（実測の最安〜最高）</th>
                  <th>実測した店舗数</th>
                </tr>
              </thead>
              <tbody>
                {hardwarePrices
                  .map(analyzeTitle)
                  .filter((x): x is PriceAnalysis => x !== null)
                  .map((a) => {
                    const storeCount = Object.keys(a.prices).length;
                    return (
                      <tr key={a.title}>
                        <td className="font-bold">{a.title}</td>
                        <td>
                          <span className="tag-pill tag-pill-green text-xs">
                            {a.low === a.best.price ? `${a.best.price.toLocaleString()}円` : `${a.low.toLocaleString()}〜${a.best.price.toLocaleString()}円`}
                          </span>
                        </td>
                        <td className="text-sm">{storeCount}社</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>

          <p className="text-xs mt-4" style={{ color: 'var(--color-text-lighter)' }}>
            ※ {HARDWARE_SURVEY_DATE.replace(/-/g, '/')}に、ブックオフ・ゲオ・駿河屋・レトログの公式買取ページで実測した完品前提の参考価格です（実測できたモデルのみ掲載しています）。付属品の有無・本体の状態・市場動向により変動します。正確な買取金額は、各サービスの無料査定でご確認ください。
          </p>

          <div className="glass-card p-5 mt-6">
            <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-accent-orange)' }}>Switch 2発売による買取相場への影響</h3>
            <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
              2025年6月のSwitch 2発売以降、旧型Switchの買取相場は下落傾向にあります。Switch 2を含む本体の最新の実測価格は<Link href="/hardware/ranking/" className="underline">ゲーム機本体の買取価格ランキング</Link>でご確認いただけます。売却をご検討中の方には、早めの査定をおすすめします。
            </p>
          </div>
        </div>
      </section>

      {/* Console Quick Links */}
      <ConsoleBuild />

      <section className="py-12 md:py-16 bg-white" id="console">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-heading">
              <span className="section-heading-bar" />ハード別ゲーム買取ガイド
            </h2>
            <p className="text-sm mt-3" style={{ color: 'var(--color-text-light)' }}>
              お持ちのゲーム機に合わせて、適した買取サービスをお探しいただけます。
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {consoles.map((c) => (
              <div key={c.tag} className="glass-card p-6 text-center card-hover cursor-pointer">
                <div className="console-icon mx-auto mb-3">
                  {c.abbr}
                </div>
                <h3 className="text-sm font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{c.name}</h3>
                <span className="tag-pill tag-pill-green text-xs">{c.tag} 買取</span>
              </div>
            ))}
          </div>

          {/* 2026-10-08: ドット絵のゲーム機画像を撤去（施主指示）。
              画像内に「FAMIC COMCUNT」など実在しない崩れた文字と他社商標が入っていたため、差し替えではなく削除した。 */}
          <div className="mt-8">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>ハード別の買取ポイント</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <div>
                  <p className="mb-2"><strong>Nintendo Switch：</strong>有機ELモデルは特に高い査定額が期待できます。Joy-Con・ドック・箱がそろっていると買取金額が上がります。限定カラーモデルはプレミア価格になることもあります。</p>
                  <p><strong>PlayStation 5：</strong>需要が安定しており、比較的高い査定額が期待できます。デジタルエディションよりも、ディスクドライブ搭載モデルが高値の傾向です。コントローラー・ケーブル類の付属品も査定に影響します。</p>
                </div>
                <div>
                  <p className="mb-2"><strong>PlayStation 4：</strong>Proモデルは通常版より高値の傾向です。SSD換装済みモデルは業者によって評価が分かれるため、事前のご確認をおすすめします。ソフトとセットでの売却もおすすめです。</p>
                  <p><strong>レトロゲーム：</strong>ファミコン・スーパーファミコン・ゲームボーイなどは、箱・説明書の有無で数倍の価格差が生じることがあります。希少タイトルは、コレクター需要により高い査定額が出る可能性があります。ヒカカク！の一括査定がおすすめです。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Sell */}
      <section className="py-12 md:py-16 gaming-grid" id="how-to-sell">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-heading">
              <span className="section-heading-bar" />ゲームを高く売る5つのステップ
            </h2>
            <p className="text-sm mt-3" style={{ color: 'var(--color-text-light)' }}>
              初めての方でも、次の5つのステップで手続きを進められます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((s) => (
              <div key={s.step} className="glass-card p-5 card-hover relative">
                <div className="step-number mb-3">
                  {s.step}
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{s.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic */}
      <section className="py-12 md:py-16 bg-white" id="diagnosis">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-heading">
              <span className="section-heading-bar" />あなたに合った売り方診断
            </h2>
            <p className="text-sm mt-3" style={{ color: 'var(--color-text-light)' }}>
              お持ちのゲームや希望に合わせて、おすすめの買取方法をご提案します
            </p>
          </div>
          <div className="flex items-center gap-3 mb-6 justify-center">
            <img src="/chara-sub.jpg" alt="ミク" className="chara-avatar" />
            <p className="text-sm font-bold" style={{ color: 'var(--color-accent-orange)' }}>ミクが目的に合った売り方をご案内します。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/method/online/" className="glass-card p-6 text-center card-hover block">
              <div className="diag-icon mx-auto mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="22" height="14" rx="2"/><path d="M1 10h22"/><path d="M8 6V2h8v4"/></svg>
              </div>
              <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>自宅から送りたい</h3>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>宅配買取がおすすめです。送料無料・段ボール無料のサービスもあります。</p>
              <span className="tag-pill tag-pill-green text-xs mt-3 inline-block">宅配買取ガイドへ</span>
            </Link>
            <Link href="/method/shop/" className="glass-card p-6 text-center card-hover block">
              <div className="diag-icon mx-auto mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>今すぐ現金化したい</h3>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>店舗買取なら即日現金化できます。ゲオやブックオフは店舗数が多く、利用しやすいサービスです。</p>
              <span className="tag-pill tag-pill-green text-xs mt-3 inline-block">店舗買取ガイドへ</span>
            </Link>
            <Link href="/compare/mercari-vs-kaitori/" className="glass-card p-6 text-center card-hover block">
              <div className="diag-icon mx-auto mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18.01"/></svg>
              </div>
              <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>手間をかけてでも高く売りたい</h3>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>フリマアプリでは自分で価格を設定できます。手数料と手間を考慮したうえでご検討ください。</p>
              <span className="tag-pill tag-pill-green text-xs mt-3 inline-block">フリマvs業者比較へ</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-heading">
              <span className="section-heading-bar" />よくある質問
            </h2>
          </div>

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
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.a,
                  },
                })),
              }),
            }}
          />
        </div>
      </section>

      {/* Editorial Note - E-E-A-T */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="glass-card p-6">
            <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>当サイトの評価基準について</h2>
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
              ゲーム買取びよりでは、以下の6つの基準でゲーム買取サービスを評価しています。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: '買取価格', desc: '実際の査定額の高さ' },
                { label: '対応スピード', desc: '査定・入金までの速さ' },
                { label: '口コミ評価', desc: 'ユーザーの満足度' },
                { label: '取扱品目', desc: '対応ジャンルの広さ' },
                { label: '利用しやすさ', desc: '申し込み・梱包の手軽さ' },
                { label: '信頼性', desc: '実績・運営体制の安定性' },
              ].map((c) => (
                <div key={c.label} className="text-center p-3 rounded-lg" style={{ background: 'var(--color-bg-alt)', border: '1px solid var(--color-border-light)' }}>
                  <p className="text-sm font-bold" style={{ color: 'var(--color-electric-green)' }}>{c.label}</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-text-light)' }}>{c.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs mt-4" style={{ color: 'var(--color-text-lighter)' }}>
              最終更新日: 2026年4月21日 ｜ 掲載情報は各サービスの公式サイトを参照しています。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
                お手持ちのゲームを<span style={{ color: 'var(--color-electric-green)' }}>より高く</span>売るために
              </h2>
              <p className="text-sm md:text-base mb-8" style={{ color: '#CBD5E1' }}>
                まずは無料査定で買取価格をご確認ください。複数のサービスを比較することで、最高値を見つけやすくなります。
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8 text-base">
                  ヒカカク！で一括査定
                </a>
                <Link href="#ranking" className="btn-outline py-3 px-8 text-base" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}>
                  ランキングに戻る
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0">
              <img
                src="/chara-main.jpg"
                alt="ユウト"
                className="chara-avatar-lg"
                width={140}
                height={140}
                style={{ width: '140px', height: '140px' }}
              />
            </div>
          </div>
        </div>
        <KaitoriWorldCta />
        <AuthorBox />
      </section>
    </>
  );
}
