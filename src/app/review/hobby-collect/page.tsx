import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'
import KaitoriWorldCta from '@/components/KaitoriWorldCta';

export const metadata: Metadata = {
  title: 'ホビーコレクトの買取不可の品目と評判｜怪しい？運営会社・古物商許可を公式で確認【2026年11月】',
  description:
    'ホビーコレクトの買取不可の品目（公式2ページの一覧）、運営会社・所在地・古物商許可（石川・愛知・東京の3公安委員会）、送料・返送料・入金の条件、ヒカカク！の評価4.13点（1,825件）を、2026年11月15日に公式サイトで確認して整理しています。',
  keywords: ['ホビーコレクト', 'ホビーコレクト 評判', 'ホビーコレクト 買取不可', 'ホビーコレクト 怪しい', 'ホビーコレクト 口コミ', 'ホビーコレクト ゲーム買取'],
  openGraph: {
    images: ['/og.png'],
    title: 'ホビーコレクトの買取不可の品目と評判｜怪しい？運営会社・古物商許可を公式で確認【2026年11月】',
    description: 'ホビーコレクトの買取不可の品目・運営会社・古物商許可・返送料の条件を公式サイトで確認し、ヒカカク！の評価とあわせて整理しています（2026年11月15日確認）。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

// 公式サイト（recycle-net.jp/game/・/hobby/・/figure/・/nagare.php・/how-to/）で2026年11月15日に確認した内容
const quickAnswers = [
  {
    q: '怪しい業者ですか？',
    a: '運営会社（株式会社JUSTY、2011年8月設立・資本金1,000万円）、所在地、代表者名、電話番号、古物商許可番号（石川県公安委員会 第511010011942号ほか計3件）が公式サイトに掲載されています。当サイトでは、運営実態が不明であることや詐欺をうかがわせる事実は確認できませんでした。',
  },
  {
    q: '買取不可の品目は？',
    a: '公式の一覧では、著しい汚れ・破損があるもの、使用できないもの、盗品・偽物・非公式グッズ、改造品・同人グッズ、成人向け商品、サイン入りの商品、雑誌・ポスター、ガス・スプレー缶、食器・日用品・飲食物、宅配で620×380×360mm以上の大型品などが挙げられています（詳細は下表）。買取不可品は送料お客様負担で返送されます。',
  },
  {
    q: '箱なし・壊れたゲーム機は売れますか？',
    a: 'ゲーム買取ページには「箱なし・古い・バラ・他店NG・汚れ有・動作未確認」のお品物でも査定可能と記載されています。一方、買取不可の一覧には「使用出来ないもの」「破損しているもの」が含まれており、故障品が買取対象になるとは書かれていません。動作しないことが分かっている機器は、送る前に問い合わせることをおすすめします。',
  },
  {
    q: '送料・返送料・入金は？',
    a: '送料・梱包材・査定料・取引手数料・振込手数料は無料です。査定後にキャンセルする場合の返送料は着払いでお客様負担です。宅配買取の入金は「買取承諾後、最短24時間以内にお振込み手続き」と案内されています。',
  },
  {
    q: '評判は？',
    a: '買取比較サイト「ヒカカク！」では総合評価4.13点・口コミ1,825件（星5が930件、星1が44件）と表示されています（2026年11月15日確認）。ただし同サイトは星3が561件と多く、広告パートナーを含む場合があると注記しているため、目安としてご覧ください。当サイトが2026年11月26日に一覧の最新60件を集計したところ、すべて星4以上で、ゲーム関連は4件、ほぼ同じ文面の口コミが18件ありました。本文つきの星1（3件）は、いずれも合計が数百円だったという内容です。',
  },
];

const ngItems = [
  { item: '状態によるもの', detail: '著しく汚れているもの・臭いがあるもの・破損しているもの、使用できないもの', source: 'nagare.php／figure ご利用ガイド' },
  { item: '出所・真正性', detail: '盗品、不正商品・偽物、非公式のグッズ、部品抜きなどの改造品、オリジナル作成の物', source: 'nagare.php／game・figure' },
  { item: 'ジャンル', detail: '成人向け商品（アダルトグッズ）、同人グッズ、サイン入りの商品、雑誌・雑誌の切り抜き、ポスター、同一タイトルのCD', source: 'nagare.php／game' },
  { item: '生活用品など', detail: '食器・陶器、日用品（洗剤・トイレットペーパー等）、飲食物、ガス・スプレー缶', source: 'nagare.php／game' },
  { item: 'サイズ', detail: '宅配買取の場合、620×380×360mm以上の大型の商品', source: 'nagare.php' },
  { item: '条件付き', detail: 'カレンダーは今年度・来年度のものに限り買取', source: 'game' },
];

const features = [
  { title: '箱なし・動作未確認品も査定対象', description: '公式のゲーム買取ページに「箱なし・古い・バラ・他店NG・汚れ有・動作未確認など、他店で買取不可となったお品物でも査定可能」と記載されています（2026年11月15日確認）。ただし、使用できないもの・著しく破損しているものは買取不可の一覧に含まれます。また、公式FAQでは付属品がすべて揃っているものほど高く査定するとしています。' },
  { title: '送料・梱包キット・手数料が無料', description: '送料・梱包材・査定料・取引手数料・振込手数料はいずれも無料と公式に記載されています。梱包キットは最短当日発送で、佐川急便が自宅まで集荷に来ます。費用がかかるのは、キャンセル時と買取不可品の返送料（着払い）です。' },
  { title: 'ゲームの目安金額を公開', description: 'ゲーム買取ページに「2026年11月時点・良品時の目安金額」として、レトロゲーム機・ソフトや現行機の最大買取額が掲載されています。事前査定（見積もり）の受付は、当サイトが確認した公式ページでは案内を確認できませんでした。' },
  { title: '入金は買取承諾後 最短24時間以内に手続き', description: '公式の案内では、到着後最短当日〜7日を目安に査定し、宅配買取は買取承諾後、最短24時間以内にお振込み手続きを行うとしています。フィギュア買取ページのご利用ガイドでは「ダンボール発送から約1週間以内で査定は終わります」と案内されています。' },
];

const steps = [
  { step: 1, title: '申込み（Web・電話）', description: '公式サイトの申込フォームまたはフリーダイヤル（0120-213-532、平日9:00〜18:00）で申し込みます。梱包キット（ダンボール・買取依頼書）が無料で届きます。手持ちの箱で送る「直送買取」も選べます。' },
  { step: 2, title: '梱包・本人確認書類の準備', description: '梱包キットの到着から2週間以内に商品を詰めて返送するよう案内されています。本人確認書類（運転免許証・マイナンバーカード等）のコピーを同梱するか、会員ページからアップロードします。18歳未満の場合は保護者の同意と保護者の本人確認書類が必要です。' },
  { step: 3, title: '集荷・査定', description: '佐川急便が自宅まで集荷に伺います。到着後、最短当日〜7日を目安に査定され、結果が連絡されます。' },
  { step: 4, title: '承諾・入金', description: '査定額に承諾すると、最短24時間以内に指定口座への振込手続きが行われます（振込手数料無料）。承諾しない場合はキャンセルでき、返送料は着払いでお客様負担です。' },
];

const faqs = [
  { q: 'ホビーコレクトは怪しい業者ですか？', a: '公式サイトに運営会社（株式会社JUSTY）、代表者名、所在地、電話番号、古物商許可番号（石川県公安委員会 第511010011942号、愛知県公安委員会 第541161603800号、東京都公安委員会 第301031705748号）が掲載されています（2026年11月15日確認）。当サイトでは詐欺をうかがわせる事実は確認できませんでした。「怪しい」と検索される背景には、宅配買取全般への警戒感や、キャンセル時の返送料が自己負担である点があると考えられます。' },
  { q: 'ホビーコレクトで買取不可の品目は何ですか？', a: '公式の「買取不可能な商品」では、著しく汚れているもの・破損しているもの、使用出来ないもの、成人向け商品、食器・陶器、サイン入りの商品、日用品、飲食物、非公式のグッズ、宅配買取で620×380×360mm以上の大型商品、改造品・オリジナル作成の物、同人グッズが挙げられています。ゲーム買取ページでは、盗品・偽物、ガス・スプレー缶、雑誌・雑誌の切り抜き、ポスター、同一タイトルCDも査定対象外とされています。買取不可品は送料お客様負担での返送となります。' },
  { q: '壊れたゲーム機やジャンク品は買い取ってもらえますか？', a: '公式のゲーム買取ページには「動作未確認」のお品物でも査定可能と記載されていますが、買取不可の一覧には「使用出来ないもの」「破損しているもの」が含まれています。故障品が買取対象になるという記載は確認できませんでした（2026年11月15日確認）。動作しないことが分かっている機器は、送る前に問い合わせることをおすすめします。' },
  { q: '箱や説明書がなくても買い取ってもらえますか？', a: 'ゲーム買取ページに「箱なし」のお品物でも査定可能と記載されています。ただし公式FAQでは、付属品などがすべて揃っているものは高く査定するとしており、説明書・保証書も査定のポイントとされています。箱なしの場合の減額率は公開されていません。' },
  { q: '査定に納得できない場合はキャンセルできますか？', a: 'キャンセルは可能です。公式FAQでは、商品を発送した後にキャンセルする場合の返送料金はお客様負担で、キャンセルは電話（0120-213-532）で受け付けるとされています。また、フィギュア等の包装紙は査定時に開封し、キャンセル時に包装紙は返却できないと案内されています。' },
  { q: '入金はいつですか？手数料はかかりますか？', a: '宅配買取は、買取承諾後、最短24時間以内に振込手続きを行うと公式に記載されています。振込手数料は無料です。商品の到着から査定完了までは最短当日〜7日が目安とされています。' },
  { q: '送る前に買取金額は分かりますか？', a: 'ゲーム買取ページに良品時の目安金額（最大額）が掲載されています。当サイトが確認した公式ページでは、写真やLINEによる事前査定の案内は確認できませんでした（2026年11月15日確認）。' },
  { q: 'ゲーム以外のホビー商品も買取対象ですか？', a: 'はい。公式サイトではフィギュア・超合金・ドール・鉄道模型・プラモデル・ラジコン・ミニカー・LEGO・ソフビ・レトロ玩具・トレカなども買取ジャンルとして案内されており、ゲームとまとめて送ることができます。' },
];

export default function HobbyCollectReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ホビーコレクトの買取不可の品目と評判｜怪しい？運営会社・古物商許可を公式で確認", "datePublished": "2026-03-15", "dateModified": "2026-11-26", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較している編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ホビーコレクト' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>箱なし・動作未確認も査定可</span>
            <span className="tag-pill text-xs" style={{ background: 'rgba(59,130,246,0.2)', color: '#93C5FD' }}>2026年11月15日 更新</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ホビーコレクトの評判・買取不可の品目<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>「怪しい」は本当か、運営会社・古物商許可を公式サイトで確認</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            「ホビーコレクト」は、石川県金沢市の株式会社JUSTYが運営する宅配買取サービスです。当サイトでは、運営会社・古物商許可番号・買取不可の品目・送料と返送料・入金の条件を2026年11月15日に公式サイトで確認し、買取比較サイト「ヒカカク！」の評価とあわせて整理しています。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://recycle-net.jp/game/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
              公式サイトでゲームの買取額を見る
            </a>
            <Link href="/" className="btn-outline py-2.5 px-6" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}>
              ランキングに戻る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 短い答え */}
        <section className="mb-12" id="quick-answer">
          <div className="glass-card p-6" style={{ borderLeft: '4px solid var(--color-electric-green)' }}>
            <h2 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>結論：ホビーコレクトについてよく検索される5つの疑問</h2>
            <dl className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              {quickAnswers.map((qa) => (
                <div key={qa.q}>
                  <dt className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>{qa.q}</dt>
                  <dd className="leading-relaxed mt-1">{qa.a}</dd>
                </div>
              ))}
            </dl>
            <p className="text-xs mt-4" style={{ color: 'var(--color-text-light)' }}>出典：ホビーコレクト公式 <a href="https://recycle-net.jp/game/" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取</a>、<a href="https://recycle-net.jp/nagare.php" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>買取の流れ（買取不可能な商品）</a>、<a href="https://recycle-net.jp/hobby/company.php" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>会社概要</a>、<a href="https://recycle-net.jp/how-to/" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>買取方法</a>、<a href="https://hikakaku.com/company/11268/" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>ヒカカク！</a>。いずれも2026年11月15日確認。</p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="glass-card p-6">
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>箱なし・レトロゲームをまとめて売りたい方向けの宅配買取（返送料には注意）</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-light)' }}>
              ホビーコレクトは、古物商許可を取得している株式会社JUSTYが運営する宅配買取サービスです。箱なし・動作未確認のゲームも査定対象とされており、レトロゲーム機・ソフトの目安金額も公開されています。一方で、キャンセル時と買取不可品の返送料はお客様負担で、使用できないもの・著しく破損しているものは買取不可とされています。故障が分かっている機器や、査定額の見通しが立たない少額品は、返送料無料の業者とも比較することをおすすめします。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
              <div className="p-3 rounded-lg" style={{ background: 'rgba(16,185,129,0.06)' }}>
                <p className="font-bold mb-2" style={{ color: 'var(--color-electric-green)' }}>おすすめできる方</p>
                <ul className="space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・箱なし・説明書なしのゲームを売りたい方</li>
                  <li>・動作確認をしていないレトロゲームをまとめて売りたい方</li>
                  <li>・フィギュア・ホビーもまとめて売りたい方</li>
                  <li>・2026年11月中にゲームを売る方（1点1万円以上の査定で増額キャンペーンの対象）</li>
                </ul>
              </div>
              <div className="p-3 rounded-lg" style={{ background: 'rgba(245,158,11,0.06)' }}>
                <p className="font-bold mb-2" style={{ color: 'var(--color-accent-orange)' }}>おすすめしにくい方</p>
                <ul className="space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・動作しないと分かっているゲーム機を売りたい方（「使用出来ないもの」は買取不可）</li>
                  <li>・店頭でその場で現金化したい方（店頭買取の案内なし）</li>
                  <li>・キャンセル前提で査定だけ試したい方（返送料は着払い）</li>
                </ul>
              </div>
            </div>
            <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>
              関連：<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>現在最も高い業者を買取価格DBで確認する</Link>／<Link href="/condition-guide/" style={{ color: 'var(--color-electric-green)' }}>箱なし・傷あり・ジャンク品の売却可否を状態別マップで確認する</Link>／<Link href="/compare/mercari-vs-kaitori/" style={{ color: 'var(--color-electric-green)' }}>メルカリと買取の手取り額をシミュレーションで比較する</Link>
            </p>
          </div>
        </section>

        {/* 買取不可 */}
        <section className="mb-12" id="ng-items">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ホビーコレクトで買取不可の品目（公式一覧の要約）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            公式サイトの「買取不可能な商品」（買取の流れページ）と、ゲーム買取ページの「査定対象外」の記載をまとめました。宅配買取で買取不可品を送った場合は、送料お客様負担で返送されると案内されています。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>区分</th>
                  <th>公式に記載されている買取不可・対象外の品目</th>
                  <th>掲載ページ</th>
                </tr>
              </thead>
              <tbody>
                {ngItems.map((row) => (
                  <tr key={row.item}>
                    <td className="font-bold text-sm">{row.item}</td>
                    <td className="text-sm">{row.detail}</td>
                    <td className="text-sm">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ホビーコレクト公式 <a href="https://recycle-net.jp/nagare.php" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>買取の流れ（買取不可能な商品）</a>、<a href="https://recycle-net.jp/game/" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取</a>、<a href="https://recycle-net.jp/figure/guide.php" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>フィギュア買取 ご利用ガイド</a>。2026年11月15日確認。買取の流れページはリサイクルネット（同じ株式会社JUSTYの総合買取サイト）の共通ページで、ホビー買取ページの「買取不可な商品」リンクの遷移先です。</p>
          <div className="glass-card p-5 mt-4">
            <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>「ジャンク品も買取可」という以前の記載を訂正しました</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              当ページでは以前、「故障したゲーム機も買取対象」「箱なし・ジャンク品も買取可」と記載していました。2026年11月15日に公式サイトを確認したところ、査定可能とされているのは「箱なし・古い・バラ・他店NG・汚れ有・動作未確認」のお品物で、「使用出来ないもの」「破損しているもの」は買取不可の一覧に含まれていました。故障品を買い取るという記載は確認できなかったため、該当する記載を訂正しました。
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

        {/* 11月キャンペーン */}
        <section className="mb-12" id="campaign">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />2026年11月のキャンペーン（ゲームは最大30%アップ）</h2>
          <div className="glass-card p-6">
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-light)' }}>
              公式サイトでは「【延長決定】秋のホビー買取強化キャンペーン」として、2026年11月1日〜11月30日の申込分を対象に、1点あたりの査定金額に応じて買取金額を上乗せすると案内されています。宅配買取のみが対象で、他キャンペーンとの併用はできません。
            </p>
            <div className="overflow-x-auto">
              <table className="comparison-table">
                <thead>
                  <tr><th>対象</th><th>1点あたりの査定金額</th><th>アップ率</th></tr>
                </thead>
                <tbody>
                  <tr><td className="text-sm">通常のホビー商品</td><td className="text-sm">1,000円以上</td><td className="text-sm">+10%</td></tr>
                  <tr><td className="text-sm" rowSpan={4}>ゲーム・ポケモン関連商品（グッズ・トレカ含む）</td><td className="text-sm">10,000円以上</td><td className="text-sm">+15%</td></tr>
                  <tr><td className="text-sm">20,000円以上</td><td className="text-sm">+20%</td></tr>
                  <tr><td className="text-sm">30,000円以上</td><td className="text-sm">+25%</td></tr>
                  <tr><td className="text-sm">50,000円以上</td><td className="text-sm">+30%</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ホビーコレクト公式 <a href="https://recycle-net.jp/game/" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取</a>（キャンペーン詳細）。2026年11月15日確認。各アップ条件は重複して適用されず、値段が付かない商品は対象外、査定金額はキャンペーン分を含んだ金額と記載されています。キャンペーンは変更・終了する場合があります。</p>
          </div>
        </section>

        {/* Pros/Cons */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />メリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-electric-green)' }}>メリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>+ 箱なし・動作未確認のお品物も査定対象</li>
                <li>+ 送料・梱包材・査定料・振込手数料が無料</li>
                <li>+ ゲームの良品時の目安金額（最大額）を公開</li>
                <li>+ 買取承諾後、最短24時間以内に振込手続き</li>
                <li>+ ゲームとフィギュア・ホビーをまとめて送れる</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- キャンセル時・買取不可品の返送料はお客様負担（着払い）</li>
                <li>- 使用できないもの・著しく破損したものは買取不可</li>
                <li>- 事前査定の案内は公式ページで確認できない</li>
                <li>- 店頭買取の案内はなく、出張買取は関東・北陸のみ</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />宅配買取の流れ（4ステップ）</h2>
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
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ホビーコレクト公式 <a href="https://recycle-net.jp/how-to/" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>買取方法</a>、<a href="https://recycle-net.jp/game/" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取</a>、<a href="https://recycle-net.jp/figure/qa.php" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>よくある質問</a>。2026年11月15日確認。</p>
        </section>

        {/* 公式仕様・会社情報 */}
        <section className="mb-12" id="company">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />運営会社・古物商許可と公式仕様（2026年11月15日確認）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <tbody>
                <tr><th>運営会社</th><td className="text-sm">株式会社JUSTY（代表取締役 橋本宜則、2011年8月設立、資本金1,000万円）</td></tr>
                <tr><th>古物商許可</th><td className="text-sm">石川県公安委員会 第511010011942号／愛知県公安委員会 第541161603800号／東京都公安委員会 第301031705748号</td></tr>
                <tr><th>所在地</th><td className="text-sm">石川県金沢市泉2丁目6-7（ホビー買取の会社概要・各ページのフッター）。フィギュア買取ページの会社概要には本社として石川県金沢市諸江町中丁181番地が記載されており、ページによって表記が異なります</td></tr>
                <tr><th>連絡先</th><td className="text-sm">フリーダイヤル 0120-213-532（平日9:00〜18:00）、TEL 076-213-5334</td></tr>
                <tr><th>送料・手数料</th><td className="text-sm">送料・梱包材・査定料・取引手数料・振込手数料 無料。佐川急便が自宅集荷</td></tr>
                <tr><th>査定</th><td className="text-sm">到着後 最短当日〜7日目安（フィギュアのご利用ガイドでは発送から約1週間以内）</td></tr>
                <tr><th>入金</th><td className="text-sm">買取承諾後、最短24時間以内に振込手続き</td></tr>
                <tr><th>キャンセル返送料</th><td className="text-sm">お客様負担（着払い）。キャンセルは電話で受付</td></tr>
                <tr><th>本人確認</th><td className="text-sm">運転免許証・マイナンバーカード等のコピーを同梱、または会員ページでアップロード。18歳未満は保護者の同意と保護者の本人確認書類が必要</td></tr>
                <tr><th>対応品目（ゲーム）</th><td className="text-sm">Nintendo Switch 2・Switch・PS5・PS4・Xbox Series X|Sなどの現行機から、ファミコン・スーパーファミコン・ゲームボーイ・セガサターン・PCエンジン・ネオジオなどのレトロゲームまで</td></tr>
                <tr><th>買取方法</th><td className="text-sm">宅配買取（全国）・直送買取（自分で用意した箱で着払い発送）・出張買取（関東・北陸エリアのみ）。店頭買取の案内は確認できませんでした</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ホビーコレクト公式 <a href="https://recycle-net.jp/hobby/company.php" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>会社概要（ホビー買取）</a>、<a href="https://recycle-net.jp/figure/company.php" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>会社概要（フィギュア買取）</a>、<a href="https://recycle-net.jp/game/" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取</a>、<a href="https://recycle-net.jp/how-to/" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>買取方法</a>。2026年11月15日確認。古物商許可番号は公式サイトの表記を転記したもので、当サイトは公安委員会への照会は行っていません。</p>
        </section>

        {/* Fee 4-point */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />手数料の確認：出張費・査定料・キャンセル料・返送料の4項目</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>出張費</th><td className="py-2">確認できませんでした（出張買取は関東・北陸エリアのみ。出張費の記載は公式で確認できませんでした）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>査定料</th><td className="py-2">無料（送料・梱包材・取引手数料・振込手数料も無料）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>キャンセル料</th><td className="py-2">手数料としての記載なし（実質的な負担は下記の返送料のみ）</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: '#B91C1C' }}>返送料（売らない場合）</th><td className="py-2"><strong style={{ color: '#B91C1C' }}>お客様負担（着払い）</strong>。査定額に納得できずキャンセルする場合と、買取不可品が返送される場合の両方が該当します</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ホビーコレクト公式 <a href="https://recycle-net.jp/game/" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取</a>（「買取キャンセル時の返送送料は着払いでのお客様ご負担」）、<a href="https://recycle-net.jp/nagare.php" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>買取の流れ</a>。2026年11月15日確認。少額の品や査定額の見通しが立たない品は、返送料無料の業者（例：ゲーム王国）との比較検討をおすすめします。</p>
          </div>
        </section>

        {/* 口コミ・評判（出典付き） */}
        <section className="mb-12" id="reviews">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ホビーコレクトの評判・口コミ（ヒカカク！の表示値）</h2>
          <div className="glass-card p-6">
            <p className="text-sm mb-3" style={{ color: 'var(--color-text-light)' }}>
              買取比較サイト「ヒカカク！」では、ホビーコレクトの総合評価は<strong>4.13点（5点満点）・口コミ1,825件</strong>、「悪い・ひどい・買取が安いという口コミの比率」は2.6%と表示されています（2026年11月15日確認）。
            </p>
            <div className="overflow-x-auto">
              <table className="comparison-table">
                <thead>
                  <tr><th>星5</th><th>星4</th><th>星3</th><th>星2</th><th>星1</th><th>合計</th></tr>
                </thead>
                <tbody>
                  <tr><td className="text-sm">930件</td><td className="text-sm">287件</td><td className="text-sm">561件</td><td className="text-sm">3件</td><td className="text-sm">44件</td><td className="text-sm">1,825件</td></tr>
                </tbody>
              </table>
            </div>
            <ul className="space-y-2 text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
              <li>・ヒカカク！が口コミをAIで要約した表示は「丁寧な査定と迅速な対応に満足」「フィギュアやカードなど多様なホビー品」「高価買取で整理に好評の傾向」です。同サイトは、正確な内容は各口コミを確認するよう注記しています。</li>
              <li>・星3が561件と全体の約3割を占め、星2（3件）との差が大きい分布です。同サイトのページには「広告パートナーが含まれる場合があります」と記載されているため、評点は目安としてご覧ください。</li>
              <li>・当サイトでは個々の口コミの真偽は確認していません。不満点については口コミの傾向ではなく、公式に記載された条件（返送料が着払い、使用できないものは買取不可）をご確認ください。</li>
            </ul>
            <h3 className="font-bold mt-6 mb-3" style={{ color: 'var(--color-deep-blue)' }}>口コミ本文の集計（当サイト調べ・2026年11月26日）</h3>
            <p className="text-sm mb-3" style={{ color: 'var(--color-text-light)' }}>
              星の平均だけでは判断しにくいため、ヒカカク！のクチコミ一覧に表示される本文つきの口コミを当サイトで読み、次のとおり集計しました。
            </p>
            <div className="overflow-x-auto">
              <table className="comparison-table">
                <thead>
                  <tr><th>集計の対象</th><th>当サイトの集計結果</th></tr>
                </thead>
                <tbody>
                  <tr><td className="text-sm">一覧の最新60件（2026年3月21日〜4月23日の投稿）</td><td className="text-sm">星5が50件・星4が10件で、星3以下は0件です。最新の投稿は2026年4月23日で、それ以降の投稿は表示されていません（11月26日時点）。</td></tr>
                  <tr><td className="text-sm">60件の品目</td><td className="text-sm">フィギュア20件、アニメグッズ7件、ポケモンカード5件、プラモデル4件などで、ゲーム機・ゲームソフトの口コミは4件（ドリームキャスト、ニンテンドー3DS LL、ゲームボーイアドバンス、ネオジオ）でした。</td></tr>
                  <tr><td className="text-sm">60件の文面</td><td className="text-sm">「段ボールに詰めて配送するだけで完結する仕組みは…これ以上ない手段」とほぼ同じ文が10件、「誠実な検品に好感が持てました」が8件あり、いずれかを含む口コミは計18件でした（投稿者名は別々です）。投稿者の地域は東京都・大阪市・横浜市で55件を占めます。</td></tr>
                  <tr><td className="text-sm">星1の本文つき口コミ（3件）</td><td className="text-sm">2021年6月・2022年2月・2024年11月の投稿で、3件とも「多数の品を送ったが合計が数百円（180円・120円・370円）だった」という内容です。うち1件は「返送料の方が高くつくため査定に従った」と書いています。星1は44件と表示されていますが、本文が表示されるのはこの3件です。</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm mt-3" style={{ color: 'var(--color-text-light)' }}>
              当サイトでは、ゲームを売る方にとって参考になる口コミは多くないと考えています。星1の口コミで共通する不満（少額の査定と返送料）は公式の条件（キャンセル時の返送料は着払い）と一致するため、少額品をまとめて送る場合は、返送料が無料の業者とも比較することをおすすめします。
            </p>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：<a href="https://hikakaku.com/company/11268/" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>ヒカカク！「ホビーコレクト」</a>（評点・件数は2026年11月15日確認、11月26日に同じ値を再確認）、<a href="https://hikakaku.com/company/11268/reviews/" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>同 クチコミ一覧</a>（本文の集計は2026年11月26日）。評価は投稿者個人の体験にもとづくもので、品目・状態により異なります。当サイトでは体験談の創作は行っていません。</p>
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
            <span style={{ color: 'var(--color-electric-green)' }}>箱なし・動作未確認</span>のゲームも査定対象です
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            ゲームの良品時の目安金額が公式サイトに掲載されています。買取不可の品目とキャンセル時の返送料（着払い）をご確認のうえご利用ください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://recycle-net.jp/game/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              公式サイトで買取額を見る
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
        <section style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--color-accent-soft-weak)', borderRadius: '12px', borderLeft: '3px solid var(--color-electric-green)' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>関連記事</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取価格インデックス（現在最も高い業者の確認）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/condition-guide/" style={{ color: 'var(--color-electric-green)' }}>状態別ゲーム買取 許容度マップ（箱なし・傷・ジャンク）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/mercari-vs-kaitori/" style={{ color: 'var(--color-electric-green)' }}>メルカリ vs 買取 手取り額シミュレーション</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/which-is-best/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取業者の用途別おすすめ比較</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/kaitori-ranking/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取おすすめランキング15選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/ps4/" style={{ color: 'var(--color-electric-green)' }}>PS4買取おすすめ3選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/method/online/" style={{ color: 'var(--color-electric-green)' }}>宅配買取の流れとポイント</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/broken/" style={{ color: 'var(--color-electric-green)' }}>壊れたゲーム機の買取ガイド</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/boxless/" style={{ color: 'var(--color-electric-green)' }}>箱なしゲームの買取ガイド</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/preparation/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取前の準備ガイド</Link></li>
          </ul>
        </section>

        <KaitoriWorldCta compact />
        <AuthorBox />
      </div>
    </>
  );
}
