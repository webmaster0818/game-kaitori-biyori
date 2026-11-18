import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'
import { crossStorePrices, hardwarePrices, PRICE_SURVEY_DATE, STORE_LABELS, type StoreKey } from '@/data/prices';

export const metadata: Metadata = {
  title: 'ゲオ宅配買取の評判・口コミ【2026年11月】ダンボールは自前？ポイントは付く？梱包・入金まで解説',
  description:
    'ゲオ宅配買取を、公式情報・当サイトの価格実測・ヒカカク!の口コミ10件（総合3.7点）で解説しています（2026年11月16日確認）。送料・査定料・振込手数料・査定後の返品送料は無料、1点から申込可。段ボールは自分で用意し、集荷は佐川急便のみ、査定は到着翌営業日から5営業日以内です。',
  keywords: ['ゲオ 宅配買取', 'ゲオ宅配買取 口コミ', 'ゲオ宅配買取 梱包', 'ゲオ ゲーム買取', 'ゲオ 査定'],
  openGraph: {
    images: ['/og.png'],
    title: 'ゲオ宅配買取の評判・口コミ【2026年11月】ダンボールは自前？ポイントは付く？梱包・入金まで解説',
    description: 'ゲオ宅配買取を、公式情報（2026年11月16日確認）と当サイトの買取価格実測をもとにレビューしています。送料・査定料・振込手数料は無料で1点から申し込める一方、段ボールは自分で用意します。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

// 本ページの公式仕様は buy.geo-online.co.jp（宅配買取トップ・申込の流れ・公式FAQ・ゲオの買取ガイドライン 2026年1月17日改定版・本人確認/買取不可/査定基準ページ・おしらせ・申込フォーム）の2026年11月16日確認値。
const CHECKED = '2026年11月16日';
const OFFICIAL = {
  top: 'https://buy.geo-online.co.jp/',
  howto: 'https://buy.geo-online.co.jp/guide/howto',
  faq: 'https://buy.geo-online.co.jp/faq/',
  rules: 'https://buy.geo-online.co.jp/rules/buying/',
  resume: 'https://buy.geo-online.co.jp/announce_detail/?announce_id=339',
  campaignEnd: 'https://buy.geo-online.co.jp/announce_detail/?announce_id=341',
  maintenance: 'https://buy.geo-online.co.jp/announce_detail/?announce_id=342',
};

const summaryRows = [
  { label: '費用', value: '申込費用・送料・査定料・振込手数料は無料。査定額に納得できない場合の返品送料も無料です。1点から申し込めます。' },
  { label: 'ダンボール', value: '利用者が用意します（無料の梱包キットはありません）。箱がない場合は、緩衝材で保護したうえで丈夫な紙袋でも発送できます。' },
  { label: '発送方法', value: '佐川急便の自宅集荷のみです（伝票記入は不要。コンビニ・営業所への持ち込みは不可）。' },
  { label: '査定日数', value: '商品到着の翌営業日から5営業日以内にメールで連絡されます（営業日は土日祝を除く平日）。' },
  { label: '入金', value: '承認後すみやかに本人名義の銀行口座へ振り込まれます（金融機関により翌営業日）。規定上は取引成立日から7営業日以内で、受け取りは銀行振込のみです。' },
  { label: 'キャンセル', value: '査定後に「返品」を選んだ場合の返送料はゲオ負担です。査定前の自己都合キャンセル・買取不可商品の返送は自己負担です。承認後のキャンセルはできません。' },
];

// ---- 当サイトの買取価格実測（src/data/prices.ts）からゲオの位置を算出 ----
const fmtDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${y}年${m}月${d}日`;
};
const surveyed = [...crossStorePrices, ...hardwarePrices];
const geoRows = surveyed
  .filter((t) => typeof t.prices.geo === 'number')
  .map((t) => {
    const others = (Object.entries(t.prices) as [StoreKey, number][]).filter(([k, v]) => k !== 'geo' && typeof v === 'number');
    const best = others.length ? others.reduce((a, b) => (b[1] > a[1] ? b : a)) : null;
    const geo = t.prices.geo as number;
    return { title: t.title, platform: t.platform, geo, best, isTop: !best || geo >= best[1] };
  });
const geoTopCount = geoRows.filter((r) => r.isTop).length;

const features = [
  { title: '送料・査定料・振込手数料が無料（1点から申込可）', description: '申込費用・送料・査定料・振込手数料はゲオが負担し、点数条件はなく1点から申し込めます。集荷は佐川急便のドライバーが送り状を持参するため、伝票の記入は不要です。ただし段ボールは利用者が用意します（無料の梱包キットはありません）。' },
  { title: '申込完了時点の買取価格を保証（公式FAQ）', description: '公式FAQでは、カートに入れて申込手続きを完了した時点の買取価格が保証されると案内しています（商品状態による変動はあり）。なお、カートに登録せず同梱した商品は査定時の価格となります。また、ゲオの買取ガイドライン第13条では、買取強化商品について申込完了日から14日間に限り申込日の価格を基準とすると定めています。' },
  { title: '受け取りは銀行振込のみ', description: '買取代金は申込者本人名義の銀行口座への振込のみで、店頭での受け取りや現金書留はできません（ガイドライン第15条）。2026年11月16日に公式FAQを確認した時点で、宅配買取でのPontaポイント付与に関する案内は掲載されていません。' },
  { title: '全国に約900店舗のゲオが運営', description: 'ゲオは全国に約900店舗を展開しています（ゲオホールディングスの2026年9月25日のプレスリリースによる）。宅配買取の運営は株式会社ゲオストア（古物商許可：愛知県公安委員会 第541162000900号）です。' },
];

const steps = [
  { step: 1, title: 'Web申込み', description: 'ゲオの買取公式サイトで売りたい商品を買取カートに入れ、申込フォームに入力します。GEO IDでログインせず、ゲストのまま申し込むこともできます。現住所が記載された本人確認書類の画像アップロードが必要です。' },
  { step: 2, title: '梱包・集荷', description: '段ボールを用意し、新聞紙などの緩衝材を入れて梱包します（丈夫な紙袋でも可）。指定した日時に佐川急便が送り状を持って自宅へ集荷に来ます。2026年11月16日（月）16時に申込フォームを確認した時点では、選択できる引取日は11月18日（水）から12月1日（火）まで、時間帯は10時〜21時の6区分でした。' },
  { step: 3, title: '査定', description: '商品到着の翌営業日から5営業日以内に査定結果がメールで届きます。商品ごとに「承認」か「返品」を選べます。なお、2026年10月29日の公式のおしらせでは、サービス停止前に申し込んだ分の査定結果は通常より時間がかかる場合があると案内しています。' },
  { step: 4, title: '入金', description: '承認すると本人名義の銀行口座へすみやかに振り込まれます（金融機関により翌営業日）。査定結果の連絡日から14日を過ぎても回答しない場合は、取引不成立となり返品されます。' },
];

const faqs = [
  { q: 'ゲオ宅配買取の段ボールは無料でもらえますか？', a: '提供されません。公式FAQに「お申し込み後、お客様ご自身でご用意をお願いいたします」と記載されています。スーパーや家電量販店の空き箱でもよく、新聞紙などの緩衝材で保護すれば丈夫な紙袋でも発送できます。送料は無料で、佐川急便のドライバーが送り状を持参するため伝票記入は不要です（2026年11月16日確認）。' },
  { q: '買取金額でPontaポイントは付きますか？', a: '2026年11月16日に公式FAQを確認した時点で、宅配買取でのPontaポイント付与の案内は掲載されていません。買取代金の受け取りは申込者本人名義の銀行口座への振込のみで、店頭での受け取りもできません。' },
  { q: '現在はどのようなキャンペーンを実施していますか？', a: '2026年11月16日時点で、公式サイトに実施中のキャンペーンの告知は見当たりません。直近のキャンペーンは2026年10月25日に終了しており、公式は「今後のキャンペーンにつきましては詳細が決まり次第、サイトにて改めてご案内いたします」としています。なお、Nintendo Switch 2・PS5の本体とソフトは「買取強化中」と掲載されています。' },
  { q: '査定にどのくらい時間がかかりますか？', a: '公式FAQでは、商品到着の翌営業日から5営業日以内（営業日は土日祝を除く平日）に査定結果をメールで連絡すると案内しています。申込が集中する時期やサービス停止の直後は、通常より時間がかかる場合があります。日数の内訳は「ゲオ宅配買取のやり方ガイド」で解説しています。' },
  { q: 'レトロゲームも買い取ってもらえますか？', a: '買取対象です。公式サイトに「レトロゲームの買取はじめました」と掲載されており、ファミコン・スーパーファミコン・ゲームボーイシリーズなどが対象機種に含まれています。査定基準ページでは、カセットに名前書き・落書きがないこと、端子にサビや変色がないことが「美品」の条件とされています。動かない本体も「動かないゲーム機本体買い取ります」としてジャンク品の買取を行っています（2026年11月16日確認）。価格は商品ごとに異なるため、プレミア品は複数社で比較することをおすすめします。' },
  { q: '未開封のゲームや同じソフト複数本は売れますか？', a: '売却できません。ゲオの買取ガイドライン第4条と買取できない商品のページに、未開封品の買取不可・同一タイトルの複数買取不可（過去の申込分も含む）が明記されています。未使用でも開封済みであれば買取の対象です。' },
  { q: '査定額に納得できない場合、返送料はかかりますか？', a: '査定結果の提示後に「返品」を選んだ場合の返送料はゲオ負担です。商品ごとに承認・返品を選べます。一方、査定前の自己都合キャンセル、私物の混入、買取不可商品の返送は利用者負担です（買取不可商品は「破棄」を選べば費用はかかりません）。' },
];

export default function GeoReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲオ宅配買取の評判・口コミ【2026年11月】ダンボール・ポイント・梱包・入金まで解説", "datePublished": "2026-03-15", "dateModified": "2026-11-16", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ゲオ宅配買取' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>大手チェーン</span>
            <span className="text-xs" style={{ color: '#CBD5E1' }}>更新日：2026年11月16日</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲオ宅配買取<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>レビュー</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: '#CBD5E1' }}>
            ゲオの宅配買取は、費用をかけずに1点から売れる点が利点です。一方で、段ボールは自分で用意し、発送は佐川急便の集荷のみ、受け取りは銀行振込のみという条件があります。主な条件は次のとおりです。
          </p>

          {/* 結論ボックス */}
          <div className="rounded-xl p-5 mb-5" style={{ background: '#FFFFFF', color: '#1E293B' }}>
            <h2 className="font-bold text-base md:text-lg mb-3" style={{ color: '#0F172A' }}>ゲオの宅配買取の主な条件（{CHECKED}確認）</h2>
            <div className="overflow-x-auto">
              <table className="comparison-table text-sm">
                <tbody>
                  {summaryRows.map((r) => (
                    <tr key={r.label}>
                      <th className="whitespace-nowrap">{r.label}</th>
                      <td>{r.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm mt-3 leading-relaxed">
              買取価格については、当サイトの{fmtDate(PRICE_SURVEY_DATE)}の実測で、ゲオの公式「高価買取品」リストに掲載されていた{geoRows.length}商品のうち{geoTopCount}商品で、ゲオの価格が比較した他社と同額以上でした（詳細は<a href="#price-check" className="underline">後述</a>）。ヒカカク!の「ゲオ宅配買取」の口コミは10件・総合3.7点です（2026年11月16日取得、<a href="#reviews" className="underline">内訳</a>）。
            </p>
            <p className="text-xs mt-3 leading-relaxed" style={{ color: '#475569' }}>
              出典：ゲオの買取 公式（<a href={OFFICIAL.howto} target="_blank" rel="noopener noreferrer nofollow" className="underline">買取お申し込みの流れ</a>・<a href={OFFICIAL.faq} target="_blank" rel="noopener noreferrer nofollow" className="underline">よくある質問</a>・<a href={OFFICIAL.rules} target="_blank" rel="noopener noreferrer nofollow" className="underline">ゲオの買取 ガイドライン</a>第3条・第14条・第15条）、{CHECKED}確認。申込から入金までの手順と日数の内訳は<Link href="/guide/geo-takuhai/" className="underline">ゲオ宅配買取のやり方ガイド</Link>で解説しています。
            </p>
          </div>

          <div className="rounded-lg p-4 mb-6 text-sm leading-relaxed" style={{ background: 'rgba(52,211,153,0.10)', border: '1px solid rgba(52,211,153,0.45)', color: '#D1FAE5' }}>
            <p>ゲオの宅配買取は、不正アクセスへの対応により2026年10月17日21時から停止していましたが、10月29日に再開しています。また、システムメンテナンスのため、2026年11月18日（水）22時から11月19日（木）10時（予定）まで、査定金額の承認受付と振込が停止されます。</p>
            <p className="text-xs mt-2">出典：ゲオの買取 おしらせ「<a href={OFFICIAL.resume} target="_blank" rel="noopener noreferrer nofollow" className="underline">緊急メンテナンス終了・サービス再開のお知らせ</a>」（2026年10月29日）・「<a href={OFFICIAL.maintenance} target="_blank" rel="noopener noreferrer nofollow" className="underline">メンテナンスに伴うサービス一時停止のお知らせ</a>」（2026年11月12日）、{CHECKED}確認。<a href="https://2nd-rtl.com/news/82093/" target="_blank" rel="noopener noreferrer nofollow" className="underline">株式会社セカンドリテイリング「当社グループWEBサイト・アプリの再開状況について」</a>（2026年10月30日9時更新・同日確認）。</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={OFFICIAL.top} target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
              公式サイトで買取申込み
            </a>
            <Link href="/" className="btn-outline py-2.5 px-6" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}>
              ランキングに戻る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* ヒカカクの口コミ */}
        <section id="reviews" className="mb-12">
          <h2 className="section-heading mb-3"><span className="section-heading-bar" />ヒカカク!に掲載されているゲオ宅配買取の口コミ</h2>
          <div className="glass-card p-6">
            <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              買取比較サイト「ヒカカク!」の「ゲオ宅配買取」のページでは、総合評価は<strong>3.7点（5点満点）・口コミ10件</strong>、最新の投稿日は2023年11月1日です（2026年11月16日取得）。星別の件数は次のとおりです。
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="comparison-table">
                <thead><tr><th>星</th><th>件数</th><th>割合</th></tr></thead>
                <tbody>
                  <tr><td>★5</td><td>3件</td><td>30%</td></tr>
                  <tr><td>★4</td><td>5件</td><td>50%</td></tr>
                  <tr><td>★3</td><td>0件</td><td>0%</td></tr>
                  <tr><td>★2</td><td>0件</td><td>0%</td></tr>
                  <tr><td>★1</td><td>2件</td><td>20%</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              10件の内訳は、ゲームソフト・ゲーム機本体が7件、DVDが2件、iPhoneが1件です。投稿日は2015年9月1日から2023年11月1日までで、9件が2021年以前の投稿です。当サイトで10件を読み、書かれている論点を数えた結果は以下のとおりです（1件に複数の論点がある場合はそれぞれ数えています）。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
              <div>
                <p className="font-bold mb-1" style={{ color: 'var(--color-electric-green)' }}>★4・★5（8件）で多く書かれている論点</p>
                <ul className="space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・キャンペーンによる買取額の上乗せ：5件（点数に応じた買取額アップ4件、「キャンペーン中で20%上乗せ」1件）</li>
                  <li>・自宅集荷・送料無料などの手軽さ：4件（例：「自宅まで宅配業者の方が集荷に来てくれるため、商品を持って行く面倒臭さがない」）</li>
                  <li>・査定額が妥当・満足：2件（例：「妥当な買取価格だったと思います」）</li>
                  <li>・入金の速さ：1件（「確定後振込口座入力し、その2時間後には振込まれていました」）</li>
                  <li>・高評価の中の指摘：1件（付属品の扱いについて「査定結果報告自体はもしかしたら少し雑なのかもしれません」）</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-1" style={{ color: 'var(--color-accent-orange)' }}>★1（2件）で書かれている論点</p>
                <ul className="space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・返品の送料：1件（2023年。「ゲームソフト1本を普通の宅急便で送ってきて1000円もかかった」）</li>
                  <li>・査定の遅さ：1件（2020年。「ゲーム本体を宅配買取に出したら10日も経ち」）</li>
                  <li>・サイト掲載価格との差：1件（2020年。「サイトの買取金額とは違いました」）</li>
                </ul>
              </div>
            </div>
            <ul className="text-xs space-y-1" style={{ color: 'var(--color-text-light)' }}>
              <li>※口コミは件数が10件と少なく、大半が2021年以前の投稿です。投稿にある点数アップ・5%アップなどのキャンペーンは、2026年11月16日時点の公式サイトでは告知されていません。</li>
              <li>※現在の公式の規定では、査定後に「返品」を選んだ場合の返送料はゲオ負担で、査定前の自己都合キャンセルや買取不可商品の返送は利用者負担です（ゲオの買取 ガイドライン第3条・第14条）。</li>
              <li>※参考として、店頭買取と宅配買取を合算したヒカカク!の「ゲオ 買取」のページは、総合評価3.6点・口コミ823件（★5 238件・★4 276件・★3 153件・★2 57件・★1 99件）、最新の投稿日は2026年9月3日です（2026年11月16日取得）。</li>
              <li>出典：<a href="https://hikakaku.com/company/15758/reviews/" target="_blank" rel="noopener noreferrer nofollow" className="underline">ヒカカク!「ゲオ宅配買取 買取」のクチコミ一覧</a>・<a href="https://hikakaku.com/company/41/reviews/" target="_blank" rel="noopener noreferrer nofollow" className="underline">ヒカカク!「ゲオ 買取」のクチコミ一覧</a>（いずれも2026年11月16日取得）。割合と論点の件数は当サイトで算出しています。かぎ括弧内は投稿の原文です。</li>
            </ul>
          </div>
        </section>

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
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ゲオの買取 公式FAQ・ゲオの買取 ガイドライン（2026年1月17日改定版）、{CHECKED}確認。店舗数はゲオホールディングスの2026年9月25日のプレスリリースによります（同社サイトは当サイトの環境から閲覧できなかったため、{CHECKED}時点の再確認はできていません）。</p>
        </section>

        {/* 当サイトの実測 */}
        <section id="price-check" className="mb-12">
          <h2 className="section-heading mb-3"><span className="section-heading-bar" />当サイトの実測によるゲオの買取価格の位置</h2>
          <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
            当サイトでは、ゲオ・ブックオフ・駿河屋・レトログの公式買取ページに掲載された価格を定期的に記録しています。{fmtDate(PRICE_SURVEY_DATE)}の調査で、ゲオの公式「高価買取品」リストに価格が掲載されていた商品について、他社の最高値と比べた結果は以下のとおりです。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>商品</th>
                  <th>ゲオ</th>
                  <th>他社の最高値</th>
                </tr>
              </thead>
              <tbody>
                {geoRows.map((r) => (
                  <tr key={r.title}>
                    <td>{r.title}<span className="text-xs ml-1" style={{ color: 'var(--color-text-light)' }}>（{r.platform}）</span></td>
                    <td className="whitespace-nowrap">{r.geo.toLocaleString()}円{r.isTop ? '（同額以上）' : ''}</td>
                    <td className="whitespace-nowrap">{r.best ? `${r.best[1].toLocaleString()}円（${STORE_LABELS[r.best[0]]}）` : '比較対象なし'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="text-xs mt-3 space-y-1" style={{ color: 'var(--color-text-light)' }}>
            <li>※ゲオの価格は公式「高価買取品」リストに掲載された宅配買取の参考価格のみを採用しています。リストに掲載がない商品は比較に含めていないため、ゲオ全体の買取水準を示すものではありません。</li>
            <li>※ブックオフは宅配買取の参考買取価格、駿河屋・レトログは公式買取検索・価格表の値です。いずれも完品・良好な状態を想定した参考価格で、実際の査定額は状態により変わります。</li>
            <li>※調査日以降に価格が変わっている可能性があります。最新の比較は<Link href="/price-index/" className="underline">買取価格DB</Link>をご覧ください。</li>
          </ul>
        </section>

        {/* Packing Guide */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />梱包・段ボールのルール（誤解されやすい点）</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>段ボールは利用者が用意：</span>ゲオの宅配買取（ゲーム・家電・DVD）に無料の梱包キットはありません。スーパーや家電量販店の空き箱で問題ありませんが、商品サイズに合った丈夫な箱をご使用ください。</li>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>紙袋でも発送可能：</span>箱がない場合は、新聞紙などの緩衝材で商品を保護したうえで丈夫な紙袋に入れて発送できます（公式FAQ記載）。</li>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>緩衝材は必須：</span>ガイドライン第12条で、エアーパッキンや新聞紙などの緩衝材を入れた厳重な梱包が求められています。輸送中の傷は減額の原因になります。</li>
              <li><span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>集荷は佐川急便・伝票不要：</span>ドライバーが送り状を持参するため伝票の記入は不要です。コンビニや営業所への持ち込み発送はできません。集荷場所は本人確認書類の住所のみで、勤務先での集荷はできません。</li>
            </ul>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ゲオの買取 公式FAQ・ゲオの買取 ガイドライン第12条（{CHECKED}確認）。スマホ・タブレットの宅配買取は別サービスで、段ボールの扱いが異なります（<Link href="/guide/geo-takuhai/" className="underline">やり方ガイド</Link>で解説しています）。</p>
          </div>
        </section>

        {/* Pros/Cons */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />メリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-electric-green)' }}>メリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>+ 送料・査定料・振込手数料が無料（1点から申込可）</li>
                <li>+ 査定後に返品を選んだ場合の返送料はゲオ負担</li>
                <li>+ 申込完了時点の買取価格が保証される（公式FAQ。状態による変動はあり）</li>
                <li>+ 当サイトの{fmtDate(PRICE_SURVEY_DATE)}実測では、高価買取品リスト掲載{geoRows.length}商品中{geoTopCount}商品で他社と同額以上</li>
                <li>+ Nintendo Switch 2・PS5の本体とソフトを「買取強化中」と掲載（{CHECKED}確認）</li>
                <li>+ 宅配のほか、ゲオ店舗での持ち込み買取（現金払い）も選べる</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- 段ボールは利用者が用意（無料キットなし）</li>
                <li>- 発送は佐川急便の集荷のみ（コンビニ・営業所持込は不可）</li>
                <li>- 未開封品・同一タイトル2本目以降は買取不可</li>
                <li>- 受け取りは銀行振込のみ（店頭受取・ポイント受取の案内なし）</li>
                <li>- 申込が集中する時期やサービス停止の直後は査定連絡が遅れる場合がある</li>
                <li>- {CHECKED}時点で実施中のキャンペーンの告知はない（直近は10月25日に終了）</li>
              </ul>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ゲオの買取 公式（宅配買取トップ・公式FAQ・ガイドライン・<a href={OFFICIAL.campaignEnd} target="_blank" rel="noopener noreferrer nofollow" className="underline">キャンペーン終了のお知らせ</a>）、{CHECKED}確認。価格の比較は当サイトの実測によります。</p>
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
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ゲオの買取 公式（買取お申し込みの流れ・公式FAQ・申込フォーム・おしらせ）、{CHECKED}確認。</p>
        </section>

        {/* Recommended */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ゲオ宅配買取の利用が適している方</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・少数のソフトでも、送料などの費用をかけずに売りたい方</li>
              <li>・Nintendo Switch 2・PS5など、ゲオが買取強化中の本体・ソフトを売りたい方</li>
              <li>・自宅で佐川急便の集荷を受けられ、段ボールを用意できる方</li>
              <li>・銀行振込での受け取りで問題ない方</li>
              <li>・近くにゲオ店舗があり、店舗持ち込みとの比較も検討している方</li>
            </ul>
          </div>
        </section>

        {/* 口コミの掲載について */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />口コミの掲載について</h2>
          <div className="glass-card p-6">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              当サイトでは、出典と取得日を確認できない口コミや評価点は掲載しておりません。本ページの口コミは<a href="#reviews" className="underline">ヒカカク!の掲載内容</a>（{CHECKED}取得）に限り、評価はゲオの公式情報（{CHECKED}確認）と、当サイトが公式買取ページから記録した買取価格をもとにしています。ご利用前に、公式サイトにて最新情報をご確認ください。
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
            ゲオ宅配買取は<span style={{ color: 'var(--color-electric-green)' }}>送料・返送料無料</span>で1点から申し込めます
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            送料・査定料・振込手数料は無料で、査定後に返品を選んだ場合の返送料もゲオが負担します。段ボール（丈夫な紙袋も可）をご用意のうえ、公式サイトからお申し込みください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={OFFICIAL.top} target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              公式サイトで買取申込みする
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
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>国内721店（2026年10月末）・店頭即現金化</p>
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
