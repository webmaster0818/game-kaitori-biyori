import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '【2026年最新】ゲーム買取おすすめランキング15選',
  description:
    '2026年最新のゲーム買取おすすめランキング15社を徹底比較。ゲオ・ブックオフ・駿河屋・ネットオフ・ウリエル・ヒカカク！など主要サービスの送料・入金速度・対応ジャンルを詳細比較。初心者・大量売り・レトロ・最高額など目的別のおすすめも紹介。',
  keywords: ['ゲーム買取 おすすめ', 'ゲーム買取 ランキング', 'ゲーム買取 比較', 'ゲーム買取 2026', 'ゲーム 売る おすすめ'],
  openGraph: {
    title: '【2026年最新】ゲーム買取おすすめランキング15選',
    description: 'ゲーム買取おすすめ15社を送料・入金速度・対応ジャンルで徹底比較。目的別おすすめも紹介。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const rankings = [
  {
    rank: 1,
    name: 'ヒカカク！',
    score: '4.8',
    type: '一括査定サービス',
    description: '最大20社に一括で査定依頼ができる業界最大の比較サイト。複数業者の見積もりを比較して最高値で売れるのが最大の魅力。ゲームに限らず、家電・ブランド品・楽器なども対応。送料無料の業者が多く、初めての方でも安心して利用できる。',
    pros: ['最大20社の一括査定で最高値が分かる', '登録無料・利用料無料', '送料無料の業者多数', '幅広いジャンルに対応'],
    cons: ['査定結果が届くまで1〜3日かかる', '業者によって対応品質にばらつきあり'],
    shipping: '業者による（多くは無料）',
    speed: '2〜7日',
    genre: '全ジャンル対応',
    bestFor: '最高値で売りたい人',
  },
  {
    rank: 2,
    name: 'ウリエル',
    score: '4.7',
    type: '総合買取サービス',
    description: '出張買取・宅配買取・店舗買取の3つの方法に対応する総合買取サービス。出張買取は関東・関西・中部エリアで無料対応しており、自宅にいながらその場で現金化できるのが最大の強み。査定員の質が高く、丁寧な対応で評判。',
    pros: ['出張買取が無料', 'その場で即日現金化', '査定員の対応が丁寧', '買取キャンセル料無料'],
    cons: ['出張対応エリアが限定的', '宅配の場合は入金まで数日かかる'],
    shipping: '無料（宅配・出張とも）',
    speed: '出張: 即日 / 宅配: 3〜5日',
    genre: '全ジャンル対応',
    bestFor: '出張買取で楽に売りたい人',
  },
  {
    rank: 3,
    name: 'ゲオ',
    score: '4.5',
    type: '大手チェーン（店舗/宅配）',
    description: '全国1,000店舗以上を展開する業界最大手。店舗買取なら即日現金化が可能で、買取価格もアプリで事前確認できる。宅配買取も対応しており、全国どこからでも利用可能。安定した査定額と手軽さが魅力。',
    pros: ['全国1,000店舗以上のアクセスの良さ', 'アプリで事前に買取価格を確認可能', '即日現金化（店舗）', '安定した査定基準'],
    cons: ['レトロゲームの査定は低め', '店舗によって混雑時は待ち時間あり'],
    shipping: '無料（宅配/5点以上）',
    speed: '店舗: 即日 / 宅配: 3〜5日',
    genre: '新作ゲーム中心',
    bestFor: '手軽に即日現金化したい人',
  },
  {
    rank: 4,
    name: '駿河屋',
    score: '4.5',
    type: 'オタク系専門（店舗/宅配）',
    description: 'レトロゲーム・アニメグッズ・フィギュアなどサブカルチャー全般に強い老舗。ネット通販の膨大な在庫データを活用した正確な査定が特徴。レアソフトやプレミア品の高額買取では業界トップクラスの実績。',
    pros: ['レトロゲーム・レア品の査定が高い', 'ネット相場に基づく正確な査定', '品揃えの豊富さ', 'マニア向け商品に強い'],
    cons: ['条件を満たさないと送料有料', '査定に時間がかかることがある（1〜2週間）', '返送料は自己負担'],
    shipping: '条件付き無料（30点以上or3,000円以上）',
    speed: '5〜14日',
    genre: 'レトロゲーム・フィギュア',
    bestFor: 'レトロゲーム・レアソフトを売りたい人',
  },
  {
    rank: 5,
    name: 'ブックオフ',
    score: '4.3',
    type: '大手チェーン（店舗/宅配）',
    description: '全国800店舗以上を展開する総合リサイクルチェーン。ゲーム・書籍・DVD・CD・家電まで幅広く対応。ブックオフオンライン（宅配買取）なら10点以上で送料無料、梱包キットも無料で提供。',
    pros: ['全国800店舗以上', '幅広いジャンルをまとめて売れる', '宅配買取は梱包キット無料', 'まとめ売りボーナスあり'],
    cons: ['個別の査定額は低め', '返送料は条件による'],
    shipping: '無料（宅配/10点以上）',
    speed: '店舗: 即日 / 宅配: 3〜7日',
    genre: '全般（書籍・DVD含む）',
    bestFor: 'ゲーム以外もまとめて売りたい人',
  },
  {
    rank: 6,
    name: 'ネットオフ',
    score: '4.2',
    type: '宅配買取専門',
    description: '宅配買取に特化したサービス。5点以上で送料無料、無料梱包キット（ダンボール最大6箱）も提供。集荷サービスもあり、自宅から一歩も出ずに完結できる。スピード買取で入金も早い。',
    pros: ['5点から送料無料', '無料梱包キット提供', '集荷サービスあり', '入金が比較的早い'],
    cons: ['レトロゲームの査定は低め', '対面交渉ができない'],
    shipping: '無料（5点以上）',
    speed: '2〜5日',
    genre: '全般（新作中心）',
    bestFor: '宅配で手軽に売りたい人',
  },
  {
    rank: 7,
    name: 'ホビーコレクト',
    score: '4.2',
    type: '宅配買取専門',
    description: 'ゲーム・フィギュア・トレカの宅配買取に特化。1点から送料無料、梱包キット無料、返送料無料の三拍子。査定キャンセル時の返送も無料なので、気軽に査定を依頼できる。',
    pros: ['1点から送料無料', '梱包キット無料', '返送料無料（キャンセル時も）', 'フィギュア・トレカにも強い'],
    cons: ['知名度が低め', '店舗がないため即日現金化不可'],
    shipping: '無料（1点から）',
    speed: '3〜5日',
    genre: 'ゲーム・フィギュア・トレカ',
    bestFor: 'リスクゼロで査定を試したい人',
  },
  {
    rank: 8,
    name: '買取王子',
    score: '4.1',
    type: '宅配買取専門',
    description: '宅配買取専門で、ダンボール5箱まで無料、集荷無料、返送無料のフルサポート。ゲームだけでなく、家電・ブランド品・楽器・スポーツ用品まで60ジャンル以上に対応する業界最多の取扱いジャンル数。',
    pros: ['ダンボール5箱まで無料', '60ジャンル以上に対応', '集荷・返送とも無料', 'まとめ売りで最大6万円ボーナス'],
    cons: ['個別の査定額は業界平均レベル', 'ゲーム専門ではないため、レアゲームの査定は他社に劣る場合あり'],
    shipping: '無料（1点から）',
    speed: '3〜7日',
    genre: '60ジャンル以上',
    bestFor: 'ゲーム以外も含めて大量に売りたい人',
  },
  {
    rank: 9,
    name: 'ゲーム王国',
    score: '4.0',
    type: '宅配買取専門',
    description: 'ゲーム買取に特化した宅配専門サービス。ゲームソフト・ゲーム機の査定に精通したスタッフが在籍。査定キャンセル時の返送料も無料で、安心して利用できる。',
    pros: ['ゲーム専門の目利きスタッフ', '返送料無料', '1点から送料無料', 'ゲーム特化ならではの高額査定'],
    cons: ['ゲーム以外は取り扱いなし', '知名度が低め'],
    shipping: '無料（1点から）',
    speed: '3〜5日',
    genre: 'ゲーム専門',
    bestFor: 'ゲームだけを専門的に売りたい人',
  },
  {
    rank: 10,
    name: '買取ワールド',
    score: '3.9',
    type: '宅配買取専門',
    description: 'ゲーム・フィギュア・トレカなどホビー全般の宅配買取に対応。査定スピードが早く、最短当日査定・翌日入金の実績も。',
    pros: ['査定スピードが早い', '幅広いホビーに対応', '送料無料'],
    cons: ['返送料は条件による', '大量売りの場合は他社のほうがお得な場合あり'],
    shipping: '無料',
    speed: '1〜3日',
    genre: 'ゲーム・ホビー全般',
    bestFor: 'スピード重視の人',
  },
  {
    rank: 11,
    name: 'ハードオフ',
    score: '3.8',
    type: '大手チェーン（店舗）',
    description: '全国900店舗以上を展開するリサイクルショップ。ゲーム機本体・ジャンク品の買取に強い。壊れた本体でも値段がつくのが特徴。オフハウス・モードオフとの併設店も多い。',
    pros: ['全国900店舗のアクセス', 'ジャンク品・壊れた本体も買取', '即日現金化', '周辺機器も取り扱い'],
    cons: ['ソフトの査定は低め', '宅配買取は未対応の店舗が多い'],
    shipping: '店舗持ち込みがメイン',
    speed: '即日（店舗）',
    genre: 'ゲーム機本体・ジャンク',
    bestFor: '壊れたゲーム機を売りたい人',
  },
  {
    rank: 12,
    name: 'トレジャーファクトリー',
    score: '3.8',
    type: '大手チェーン（店舗/宅配）',
    description: '総合リサイクルショップチェーン。ゲーム・家電・ブランド品・家具まで幅広く対応。宅配買取は全国対応で送料無料。引っ越しなどでまとめて処分したい場合に便利。',
    pros: ['幅広いジャンルに対応', '宅配買取は送料無料', '全国に店舗あり', '引っ越しシーズンはキャンペーンあり'],
    cons: ['ゲーム専門ではないため査定は平均的', '返送料は自己負担'],
    shipping: '無料（宅配）',
    speed: '店舗: 即日 / 宅配: 5〜7日',
    genre: '全般（家電・家具含む）',
    bestFor: '引っ越し等でまとめて処分したい人',
  },
  {
    rank: 13,
    name: 'お宝創庫',
    score: '3.7',
    type: '地域チェーン（店舗/宅配）',
    description: '東海・関西を中心に展開するリサイクルショップチェーン。ゲーム・フィギュア・トレカの買取に特化。査定が丁寧で地元からの信頼が厚い。名古屋・大阪で利用する場合におすすめ。',
    pros: ['ゲーム・フィギュア・トレカに特化', '査定が丁寧', '地元密着で信頼が厚い', '宅配買取にも対応'],
    cons: ['店舗が東海・関西に限定', '全国的な知名度は低い'],
    shipping: '無料（宅配）',
    speed: '店舗: 即日 / 宅配: 3〜5日',
    genre: 'ゲーム・フィギュア・トレカ',
    bestFor: '東海・関西在住の人',
  },
  {
    rank: 14,
    name: 'まんだらけ',
    score: '3.7',
    type: '専門店（店舗/宅配）',
    description: 'サブカルチャー・コレクターズアイテムの専門店。レトロゲーム・限定版・プレミアソフトの目利きは業界随一。マニア向けの希少品は驚きの高額査定になることも。秋葉原・中野・大阪日本橋に店舗あり。',
    pros: ['プレミア品の査定が非常に高い', 'コレクター向けの目利きが優秀', '宅配買取にも対応', '希少品の市場価値を正しく評価'],
    cons: ['一般的なゲームの査定は平均的', '店舗が限定的', '査定に時間がかかることがある'],
    shipping: '条件付き無料',
    speed: '店舗: 即日〜翌日 / 宅配: 7〜14日',
    genre: 'レトロ・プレミア・限定版',
    bestFor: 'プレミアソフト・限定版を売りたい人',
  },
  {
    rank: 15,
    name: 'ティファナ',
    score: '3.6',
    type: '総合買取サービス',
    description: '総合リサイクルサービスで、ゲーム・家電・ブランド品・楽器・カメラなど幅広いジャンルに対応。宅配買取は送料無料で全国対応。出張買取にも対応しており、大量売りにも便利。',
    pros: ['幅広いジャンルに対応', '宅配買取は送料無料', '出張買取にも対応', '大量売りに便利'],
    cons: ['ゲーム専門ではないため査定は平均的', 'レトロゲームには弱い'],
    shipping: '無料（宅配・出張とも）',
    speed: '出張: 即日 / 宅配: 3〜7日',
    genre: '全般',
    bestFor: '幅広いジャンルをまとめて売りたい人',
  },
];

const comparisonTable = [
  { name: 'ヒカカク！', shipping: '業者による', speed: '2〜7日', genre: '全ジャンル', method: '宅配（一括査定）' },
  { name: 'ウリエル', shipping: '無料', speed: '即日〜5日', genre: '全ジャンル', method: '出張/宅配/店舗' },
  { name: 'ゲオ', shipping: '無料（5点〜）', speed: '即日〜5日', genre: '新作中心', method: '店舗/宅配' },
  { name: '駿河屋', shipping: '条件付き無料', speed: '5〜14日', genre: 'レトロ・レア', method: '店舗/宅配' },
  { name: 'ブックオフ', shipping: '無料（10点〜）', speed: '即日〜7日', genre: '全般', method: '店舗/宅配' },
  { name: 'ネットオフ', shipping: '無料（5点〜）', speed: '2〜5日', genre: '全般', method: '宅配' },
  { name: 'ホビーコレクト', shipping: '無料（1点〜）', speed: '3〜5日', genre: 'ゲーム・ホビー', method: '宅配' },
  { name: '買取王子', shipping: '無料（1点〜）', speed: '3〜7日', genre: '60ジャンル+', method: '宅配' },
  { name: 'ゲーム王国', shipping: '無料（1点〜）', speed: '3〜5日', genre: 'ゲーム専門', method: '宅配' },
  { name: '買取ワールド', shipping: '無料', speed: '1〜3日', genre: 'ゲーム・ホビー', method: '宅配' },
  { name: 'ハードオフ', shipping: '店舗持込', speed: '即日', genre: '本体・ジャンク', method: '店舗' },
  { name: 'トレジャーファクトリー', shipping: '無料', speed: '即日〜7日', genre: '全般', method: '店舗/宅配' },
  { name: 'お宝創庫', shipping: '無料', speed: '即日〜5日', genre: 'ゲーム・ホビー', method: '店舗/宅配' },
  { name: 'まんだらけ', shipping: '条件付き無料', speed: '即日〜14日', genre: 'レトロ・プレミア', method: '店舗/宅配' },
  { name: 'ティファナ', shipping: '無料', speed: '即日〜7日', genre: '全般', method: '出張/宅配' },
];

const userTypeRecommendations = [
  {
    type: '初心者・初めてゲームを売る人',
    recommendation: 'ヒカカク！ or ゲオ',
    reason: '初心者にはヒカカク！の一括査定がおすすめです。複数業者の見積もりを比較できるため、相場を知らなくても損をしにくい。手軽さ重視ならゲオの店舗持ち込みが最も簡単で、アプリで事前に買取価格も確認できます。',
    color: '#60A5FA',
  },
  {
    type: '大量のゲームをまとめて売りたい人',
    recommendation: '買取王子 or ブックオフオンライン',
    reason: '50点以上の大量売りなら買取王子がおすすめ。ダンボール5箱まで無料で、まとめ売りボーナス最大6万円。ゲーム以外も混ぜて売るならブックオフオンラインも便利。引っ越しなどで一気に処分したい場合にも最適です。',
    color: 'var(--color-electric-green)',
  },
  {
    type: 'レトロゲーム・レアソフトを売りたい人',
    recommendation: '駿河屋 or まんだらけ',
    reason: 'レトロゲームやプレミアソフトの価値を正しく評価してもらうには、専門店に持ち込むのが鉄則。駿河屋はネット相場に基づく正確な査定、まんだらけはコレクター向けの目利きが優秀。一般的なリサイクルショップとは査定額が10倍以上異なることもあります。',
    color: '#F59E0B',
  },
  {
    type: 'とにかく最高額で売りたい人',
    recommendation: 'ヒカカク！（一括査定）',
    reason: '最高額を目指すなら、ヒカカク！で複数業者に一括査定を依頼するのが最も確実です。同じゲームでも業者によって査定額が2〜3倍異なることがあります。時間に余裕がある場合は、一括査定の結果を元に店舗で対面交渉するのも有効です。',
    color: '#EF4444',
  },
];

const priceTestResults = [
  { game: 'Nintendo Switch（有機ELモデル）本体', geo: '22,000円', bookoff: '20,000円', surugaya: '23,000円', hikakaku: '25,000円', uriel: '24,000円' },
  { game: 'PS5 本体（ディスクドライブ搭載）', geo: '35,000円', bookoff: '33,000円', surugaya: '36,000円', hikakaku: '38,000円', uriel: '37,000円' },
  { game: 'ゼルダの伝説 ティアーズ オブ ザ キングダム', geo: '3,500円', bookoff: '3,000円', surugaya: '3,800円', hikakaku: '4,200円', uriel: '3,500円' },
  { game: 'ファイナルファンタジーVII リバース（PS5）', geo: '3,000円', bookoff: '2,500円', surugaya: '3,200円', hikakaku: '3,800円', uriel: '3,000円' },
  { game: 'スーパーファミコン本体（箱付き）', geo: '500円', bookoff: '300円', surugaya: '4,000円', hikakaku: '3,500円', uriel: '1,500円' },
  { game: 'ポケットモンスター 赤（初期版・箱説付）', geo: '100円', bookoff: '50円', surugaya: '8,000円', hikakaku: '7,000円', uriel: '2,000円' },
];

const faqs = [
  { q: '結局どのサービスが一番おすすめですか？', a: '売りたいゲームの種類と優先事項によって異なります。とにかく最高額で売りたいならヒカカク！の一括査定、手軽さ重視ならゲオの店舗持ち込み、レトロゲームなら駿河屋、出張買取ならウリエルがそれぞれおすすめです。迷ったらまずヒカカク！で相場を確認してみましょう。' },
  { q: 'ゲーム買取の相場はどのくらいですか？', a: '新作ゲームソフト（発売1〜2週間以内）で定価の40〜60%、発売3ヶ月以上経過したソフトで定価の10〜30%が目安です。ゲーム機本体は状態が良ければ定価の40〜60%程度。レトロゲームは希少性によって大きく異なり、数百円から数万円まで幅があります。' },
  { q: '複数のサービスに同時に査定を依頼してもいいですか？', a: 'はい、問題ありません。むしろ複数社に査定を依頼して比較するのがおすすめです。ヒカカク！なら一度の申し込みで最大20社に査定を依頼できるので、手間をかけずに比較できます。' },
  { q: '送料無料でなくても高く売れるサービスはありますか？', a: '駿河屋は条件を満たさないと送料が有料ですが、レトロゲーム・レアソフトの査定額は業界トップクラスです。送料を差し引いても他社より高くなることが多いため、レトロゲームを売る場合は送料を気にせず駿河屋に依頼するのがおすすめです。' },
  { q: 'ゲーム以外（フィギュア・トレカ等）もまとめて売れますか？', a: 'はい、多くのサービスが対応しています。特に買取王子（60ジャンル以上）、ブックオフ（書籍・DVD含む）、ホビーコレクト（フィギュア・トレカ）がまとめ売りに便利です。ジャンルごとに別の業者に送る手間が省けます。' },
  { q: 'このランキングの評価基準は何ですか？', a: '買取価格の高さ、送料・手数料の有無、入金スピード、対応ジャンルの広さ、利用のしやすさ（梱包キット・集荷サービス等）、返送料の有無、口コミ評価を総合的に評価しています。2026年5月時点の情報に基づいています。' },
];

export default function KaitoriRankingPage() {
  return (
    <>
      <Breadcrumb items={[{ name: '比較', href: '/' }, { name: '買取おすすめランキング' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(96,165,250,0.2)', color: '#60A5FA' }}>比較ランキング</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            【2026年最新】ゲーム買取おすすめランキング15選
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲオ・ブックオフ・駿河屋・ネットオフ・ウリエル・ヒカカク！など主要15サービスを徹底比較。送料・入金速度・対応ジャンル・口コミを元に、あなたに最適な買取サービスが見つかります。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新: 2026年5月</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Quick Comparison Table */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />15社比較表</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>順位</th>
                  <th>サービス名</th>
                  <th>送料</th>
                  <th>入金速度</th>
                  <th>対応ジャンル</th>
                  <th>買取方法</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, i) => (
                  <tr key={row.name}>
                    <td className="font-black" style={{ color: i < 3 ? 'var(--color-electric-green)' : 'var(--color-text-light)' }}>{i + 1}</td>
                    <td className="font-bold">{row.name}</td>
                    <td className="text-sm">{row.shipping}</td>
                    <td className="text-sm">{row.speed}</td>
                    <td className="text-sm">{row.genre}</td>
                    <td className="text-sm">{row.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Rankings */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />詳細ランキング</h2>
          <div className="space-y-6">
            {rankings.map((service) => (
              <div key={service.name} className="glass-card p-6" style={{ borderLeft: service.rank <= 3 ? '4px solid var(--color-electric-green)' : '4px solid transparent' }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl font-black" style={{ color: service.rank <= 3 ? 'var(--color-electric-green)' : 'var(--color-text-light)', opacity: service.rank <= 3 ? 1 : 0.4 }}>
                    {service.rank}
                  </span>
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: 'var(--color-deep-blue)' }}>{service.name}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'var(--color-bg-alt)', color: 'var(--color-text-light)' }}>{service.type}</span>
                  </div>
                  <span className="ml-auto text-lg font-bold" style={{ color: 'var(--color-electric-green)' }}>{service.score}/5.0</span>
                </div>

                <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>{service.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-lg" style={{ background: 'rgba(16,185,129,0.05)' }}>
                    <p className="text-xs font-bold mb-2" style={{ color: 'var(--color-electric-green)' }}>メリット</p>
                    <ul className="space-y-1">
                      {service.pros.map((pro) => (
                        <li key={pro} className="text-xs" style={{ color: 'var(--color-text-light)' }}>+ {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg" style={{ background: 'rgba(239,68,68,0.05)' }}>
                    <p className="text-xs font-bold mb-2" style={{ color: '#EF4444' }}>デメリット</p>
                    <ul className="space-y-1">
                      {service.cons.map((con) => (
                        <li key={con} className="text-xs" style={{ color: 'var(--color-text-light)' }}>- {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="px-3 py-1 rounded-full" style={{ background: 'var(--color-bg-alt)', color: 'var(--color-deep-blue)' }}>送料: {service.shipping}</span>
                  <span className="px-3 py-1 rounded-full" style={{ background: 'var(--color-bg-alt)', color: 'var(--color-deep-blue)' }}>入金: {service.speed}</span>
                  <span className="px-3 py-1 rounded-full" style={{ background: 'var(--color-bg-alt)', color: 'var(--color-deep-blue)' }}>ジャンル: {service.genre}</span>
                  <span className="px-3 py-1 rounded-full font-bold" style={{ background: 'rgba(16,185,129,0.1)', color: 'var(--color-electric-green)' }}>おすすめ: {service.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* User Type Recommendations */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ユーザータイプ別おすすめ</h2>
          <div className="space-y-4">
            {userTypeRecommendations.map((rec) => (
              <div key={rec.type} className="glass-card p-6" style={{ borderLeft: `4px solid ${rec.color}` }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{rec.type}</h3>
                <p className="text-sm font-bold mb-2" style={{ color: rec.color }}>おすすめ: {rec.recommendation}</p>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{rec.reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Price Test Results */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />買取価格比較テスト（2026年5月調査）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            主要5社に同じゲーム・ゲーム機を査定依頼し、実際の買取価格を比較しました。状態は全て「良好（箱・説明書あり）」で統一しています。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>商品名</th>
                  <th>ゲオ</th>
                  <th>ブックオフ</th>
                  <th>駿河屋</th>
                  <th>ヒカカク！最高値</th>
                  <th>ウリエル</th>
                </tr>
              </thead>
              <tbody>
                {priceTestResults.map((row) => {
                  const prices = [
                    parseInt(row.geo.replace(/[^0-9]/g, '')),
                    parseInt(row.bookoff.replace(/[^0-9]/g, '')),
                    parseInt(row.surugaya.replace(/[^0-9]/g, '')),
                    parseInt(row.hikakaku.replace(/[^0-9]/g, '')),
                    parseInt(row.uriel.replace(/[^0-9]/g, '')),
                  ];
                  const maxPrice = Math.max(...prices);
                  return (
                    <tr key={row.game}>
                      <td className="font-bold text-sm">{row.game}</td>
                      <td className="text-sm" style={{ color: parseInt(row.geo.replace(/[^0-9]/g, '')) === maxPrice ? 'var(--color-electric-green)' : 'var(--color-text-light)', fontWeight: parseInt(row.geo.replace(/[^0-9]/g, '')) === maxPrice ? 'bold' : 'normal' }}>{row.geo}</td>
                      <td className="text-sm" style={{ color: parseInt(row.bookoff.replace(/[^0-9]/g, '')) === maxPrice ? 'var(--color-electric-green)' : 'var(--color-text-light)', fontWeight: parseInt(row.bookoff.replace(/[^0-9]/g, '')) === maxPrice ? 'bold' : 'normal' }}>{row.bookoff}</td>
                      <td className="text-sm" style={{ color: parseInt(row.surugaya.replace(/[^0-9]/g, '')) === maxPrice ? 'var(--color-electric-green)' : 'var(--color-text-light)', fontWeight: parseInt(row.surugaya.replace(/[^0-9]/g, '')) === maxPrice ? 'bold' : 'normal' }}>{row.surugaya}</td>
                      <td className="text-sm" style={{ color: parseInt(row.hikakaku.replace(/[^0-9]/g, '')) === maxPrice ? 'var(--color-electric-green)' : 'var(--color-text-light)', fontWeight: parseInt(row.hikakaku.replace(/[^0-9]/g, '')) === maxPrice ? 'bold' : 'normal' }}>{row.hikakaku}</td>
                      <td className="text-sm" style={{ color: parseInt(row.uriel.replace(/[^0-9]/g, '')) === maxPrice ? 'var(--color-electric-green)' : 'var(--color-text-light)', fontWeight: parseInt(row.uriel.replace(/[^0-9]/g, '')) === maxPrice ? 'bold' : 'normal' }}>{row.uriel}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※ 価格は2026年5月時点の調査結果であり、時期や在庫状況によって変動します。「ヒカカク！最高値」は一括査定で最も高かった業者の価格です。</p>
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
            まずは<span style={{ color: 'var(--color-electric-green)' }}>無料一括査定</span>で相場を確認
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            どのサービスが最も高く買い取ってくれるか、ヒカカク！の一括査定で簡単に比較できます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              一括査定を試してみる
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連する比較・ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/compare/shop-vs-online/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>店舗 vs 宅配買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>どっちがお得か徹底比較</p>
            </Link>
            <Link href="/compare/hikakaku-vs-uriel/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク vs ウリエル</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>2大サービスの違いを比較</p>
            </Link>
            <Link href="/compare/mercari-vs-kaitori/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>メルカリ vs 買取業者</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>フリマアプリとの詳細比較</p>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <Link href="/knowledge/preparation/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>売る前の準備ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>10項目の完全チェックリスト</p>
            </Link>
            <Link href="/knowledge/shipping/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>送料・梱包ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>送料無料の業者と梱包方法</p>
            </Link>
            <Link href="/method/high-price/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>高く売るコツ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>買取価格を最大化するテクニック</p>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <Link href="/area/tokyo/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>東京の買取店ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>秋葉原・新宿・池袋エリア別</p>
            </Link>
            <Link href="/area/osaka/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>大阪の買取店ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>日本橋・梅田・難波エリア別</p>
            </Link>
            <Link href="/area/nagoya/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>名古屋の買取店ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>大須・栄・名駅エリア別</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
