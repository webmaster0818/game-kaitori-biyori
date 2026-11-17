import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

const PAGE_TITLE = '札幌のゲーム買取店まとめ｜すすきの・大通・新さっぽろの5店舗を公式情報で比較【2026年11月】';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description:
    '札幌でゲーム買取に対応する5店舗（駿河屋ノルベサ・まんだらけ・ジャングル・ブックオフ南2条・駿河屋新札幌DUO）の所在地、営業時間、買取受付の締切時刻を各社公式で2026年11月17日に確認し、宅配買取との比べ方とあわせて掲載しています。',
  keywords: ['札幌 ゲーム買取', 'すすきの ゲーム 売る', '大通 ゲーム買取', '新さっぽろ ゲーム買取', 'まんだらけ 札幌', '駿河屋 札幌'],
  openGraph: {
    images: ['/og.png'],
    title: PAGE_TITLE,
    description: '札幌のゲーム買取店5店舗の所在地・営業時間・買取受付の締切を各社公式で確認し、エリア別に比較しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const CHECKED = '2026年11月17日';

type Shop = {
  name: string;
  area: string;
  address: string;
  hours: string;
  buyUntil: string;
  game: string;
  access: string;
  url: string;
};

// すべて各社公式の店舗ページで 2026-11-17 に確認
const shops: Shop[] = [
  {
    name: '駿河屋 札幌ノルベサ店',
    area: 'すすきの・狸小路',
    address: '札幌市中央区南三条西5丁目1-1 ノルベサ 1階・3階（買取は1階）',
    hours: '11:00〜23:00（ゲーム・アイドル・トレカ・プラモコーナーは22:00閉店）',
    buyUntil: '対面買取査定は19:30まで（以降の持ち込みは後日査定）',
    game: '取扱商品にゲームソフト・ゲームハードを掲載',
    access: 'すすきの駅・狸小路駅（市電）から徒歩3分、JR札幌駅から徒歩20分',
    url: 'https://www.suruga-ya.jp/feature/realstore/sapporo/index.html',
  },
  {
    name: 'まんだらけ 札幌店',
    area: 'すすきの・狸小路',
    address: '札幌市中央区南3条西5丁目1-1 nORBESAビル2F',
    hours: '12:00〜20:00／年中無休',
    buyUntil: '買取受付は19:30まで',
    game: 'フロア案内に「ディスク・ゲーム」を掲載',
    access: '地下鉄南北線すすきの駅4番出口から徒歩2分、JR札幌駅南口から徒歩15分',
    url: 'https://www.mandarake.co.jp/dir/spr/',
  },
  {
    name: 'ジャングル 札幌店',
    area: '大通・狸小路1丁目',
    address: '札幌市中央区南2条西1丁目7-1 二番館ビル1F',
    hours: '平日12:00〜20:00／土日祝11:00〜20:00／年中無休',
    buyUntil: '買取対応は閉店1時間前まで',
    game: '同社の買取ページの対象ジャンルにゲーム（ハード・ソフト）を掲載（店舗別の対象は店舗に要確認）',
    access: '公式に最寄り駅の記載なし（所在地は南2条西1丁目）',
    url: 'https://jungle-scs.co.jp/?page_id=21#sapporo',
  },
  {
    name: 'BOOKOFF 札幌南2条店',
    area: '大通・狸小路1丁目',
    address: '札幌市中央区南二条西1-3',
    hours: '10:00〜21:00',
    buyUntil: '公式店舗ページに記載なし',
    game: '売りたい商品にゲームソフト・ゲーム機本体を掲載',
    access: '地下鉄大通駅35番出口から直進、東豊線豊水すすきの駅1番出口から徒歩2分',
    url: 'https://www.bookoff.co.jp/shop/shop20374.html',
  },
  {
    name: '駿河屋 新札幌DUO店',
    area: '新さっぽろ（厚別区）',
    address: '札幌市厚別区厚別中央2条5丁目6-2 DUO-1 4階',
    hours: '10:00〜21:00（DUO-1の休館日に準ずる）',
    buyUntil: '買取受付は20:30まで',
    game: '取扱商品にゲームソフト・ハードを掲載',
    access: 'JR新札幌駅・地下鉄東西線新さっぽろ駅直結',
    url: 'https://www.suruga-ya.jp/feature/realstore/shinsapporo/index.html',
  },
];

// 宅配買取の条件（各社公式。確認日は各行に記載）
const mailIn = [
  { name: '買取王子', cond: '送料無料（箱数・金額を問わない）・1点から申込可。返却は全品のみ', checked: '2026年11月17日', href: '/review/kaitori-ouji/' },
  { name: 'ブックオフ宅配買取', cond: '送料・振込手数料無料。ゲーム・DVD・CDのいずれか3点以上などの申込条件あり', checked: '2026年11月13日', href: '/review/bookoff/' },
  { name: '駿河屋 通信買取', cond: '見積3,000円以上（あんしん買取）または30点以上（かんたん買取）で着払い可。通信買取手数料660〜990円', checked: '2026年11月15日', href: '/review/surugaya/' },
  { name: 'ゲーム王国', cond: '送料無料は佐川急便の集荷に限る。査定後のキャンセルも返送料無料', checked: '2026年10月18日', href: '/review/game-oukoku/' },
];

const faqs = [
  { q: '札幌でゲームを売るなら、どのエリアの店舗が便利ですか？', a: '当サイトが公式で確認した5店舗のうち4店舗は、すすきの・狸小路〜大通の徒歩圏（南2条西1丁目〜南3条西5丁目）にあります。ノルベサには駿河屋（1階で買取）とまんだらけ（2階）が同じ建物に入っています。新さっぽろ方面では、駿河屋 新札幌DUO店が駅直結です（各店公式、2026年11月17日確認）。' },
  { q: '夜に買取に持ち込めますか？', a: '店舗の営業時間と買取受付の締切は異なります。駿河屋 札幌ノルベサ店は営業23:00までですが対面買取査定は19:30まで、まんだらけ 札幌店は買取受付19:30まで、ジャングル 札幌店は閉店1時間前（19:00）まで、駿河屋 新札幌DUO店は20:30までです（各店公式、2026年11月17日確認）。' },
  { q: '札幌駅の近くに買取店はありますか？', a: '当サイトが公式で確認した店舗のうち、JR札幌駅からの距離が公式に記載されているのはノルベサの2店舗で、まんだらけはJR札幌駅南口から徒歩15分、駿河屋はJR札幌駅から徒歩20分です。札幌駅周辺のほかの店舗は、各社の公式店舗検索でご確認ください。' },
  { q: '店舗と宅配買取はどう選べばよいですか？', a: 'その日のうちに現金化したい場合や、査定額を店頭で確認してから売りたい場合は店舗が向いています。点数が多い場合や営業時間内に行けない場合は宅配買取が便利ですが、送料無料の条件や手数料は会社ごとに異なります。当ページの宅配買取の比較表で条件をご確認ください。' },
];

export default function SapporoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": PAGE_TITLE, "datePublished": "2026-06-18", "dateModified": "2026-11-17", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較している編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'エリア別', href: '/' }, { name: '札幌' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(251,191,36,0.2)', color: '#FBBF24' }}>エリア別ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">札幌のゲーム買取店まとめ<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>すすきの・大通・新さっぽろの5店舗を公式情報で比較</span></h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            札幌市内でゲームの買取に対応している店舗のうち、所在地・営業時間・買取受付の締切を各社の公式店舗ページで確認できた5店舗を掲載しています。宅配買取の条件もあわせて比較しています。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終確認日：{CHECKED}（各店の公式店舗ページ）</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 1画面目の結論 */}
        <section className="mb-12">
          <div className="glass-card p-6" style={{ borderLeft: '4px solid var(--color-accent-orange)' }}>
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>札幌でゲームを売る場合は、すすきの・狸小路〜大通の4店舗が徒歩圏にまとまっています</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-light)' }}>
              南3条西5丁目のノルベサに駿河屋（1階で買取）とまんだらけ（2階）、南2条西1丁目にジャングルとブックオフがあり、同じ日に複数の店舗で査定額を比べられます。新さっぽろ方面にお住まいの方は駅直結の駿河屋 新札幌DUO店が便利です。<strong>買取受付は多くの店舗で閉店より早く締め切られる</strong>ため、来店前に下表の締切時刻をご確認ください。店舗に行けない場合や点数が多い場合は、<a href="#mail-in" style={{ color: 'var(--color-electric-green)' }}>宅配買取の条件</a>と比べて選ぶことをおすすめします。
            </p>
            <div className="overflow-x-auto">
              <table className="comparison-table">
                <thead><tr><th>エリア</th><th>店舗</th><th>営業時間</th><th>買取受付の締切</th></tr></thead>
                <tbody>
                  {shops.map((s) => (
                    <tr key={s.name}>
                      <td className="text-sm">{s.area}</td>
                      <td className="text-sm font-bold"><a href={s.url} target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-deep-blue)' }}>{s.name}</a></td>
                      <td className="text-sm">{s.hours}</td>
                      <td className="text-sm">{s.buyUntil}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：各店の公式店舗ページ（店舗名のリンク先）、{CHECKED}確認。営業時間は施設の休館日や年末年始に変わる場合があります。ご来店前に、公式サイトにて最新情報をご確認ください。</p>
          </div>
        </section>

        {/* 店舗詳細 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />店舗別の所在地・アクセス・ゲームの取扱い</h2>
          <div className="space-y-4">
            {shops.map((s) => (
              <div key={s.name} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{s.name}<span className="text-xs font-normal ml-2" style={{ color: 'var(--color-text-light)' }}>{s.area}</span></h3>
                <dl className="text-sm grid grid-cols-[6.5rem_1fr] gap-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <dt className="font-bold">所在地</dt><dd>{s.address}</dd>
                  <dt className="font-bold">アクセス</dt><dd>{s.access}</dd>
                  <dt className="font-bold">営業時間</dt><dd>{s.hours}</dd>
                  <dt className="font-bold">買取受付</dt><dd>{s.buyUntil}</dd>
                  <dt className="font-bold">ゲーム</dt><dd>{s.game}</dd>
                </dl>
                <p className="text-xs mt-2"><a href={s.url} target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>公式店舗ページ</a>（{CHECKED}確認）</p>
              </div>
            ))}
          </div>
          <div className="glass-card p-5 mt-4">
            <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>掲載範囲について</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              当ページには、公式の店舗ページで所在地・営業時間・ゲームの取扱いを確認できた店舗のみを掲載しています。ゲオは札幌市内に店舗がありますが、{CHECKED}時点で当サイトの環境から公式の店舗ページ（geo-online.co.jp）を閲覧できず内容を確認できなかったため、個別の店舗情報の掲載を控えています。ブックオフも市内に複数の店舗があります。お近くの店舗は、各社の公式店舗検索でご確認ください。
            </p>
          </div>
        </section>

        {/* 宅配買取 */}
        <section className="mb-12" id="mail-in">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />店舗に行けない場合の宅配買取の比べ方</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-light)' }}>
              宅配買取は北海道からも利用できますが、送料無料の条件・手数料・返送の扱いが会社ごとに異なります。当サイトが各社の公式で確認した条件は次のとおりです。
            </p>
            <table className="comparison-table">
              <thead><tr><th>サービス</th><th>送料・手数料などの条件</th><th>確認日</th></tr></thead>
              <tbody>
                {mailIn.map((m) => (
                  <tr key={m.name}>
                    <td className="text-sm font-bold"><Link href={m.href} style={{ color: 'var(--color-deep-blue)' }}>{m.name}</Link></td>
                    <td className="text-sm">{m.cond}</td>
                    <td className="text-sm whitespace-nowrap">{m.checked}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>各サービス名のリンク先に、出典URLと詳しい条件を掲載しています。店頭買取は店舗まで持ち込む手間がかかる一方、その場で査定額を確認でき、送料や返送の条件を気にする必要がありません。</p>
          </div>
        </section>

        {/* 持ち込み前の確認 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />持ち込み前に確認しておきたいこと</h2>
          <div className="space-y-4">
            <div className="glass-card p-5"><h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>買取受付の締切時刻</h3><p className="text-sm" style={{ color: 'var(--color-text-light)' }}>駿河屋 札幌ノルベサ店は営業23:00までですが、対面買取査定は19:30までです。まんだらけ 札幌店も買取受付は19:30まで、ジャングル 札幌店は閉店1時間前までです（各店公式、{CHECKED}確認）。</p></div>
            <div className="glass-card p-5"><h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>本人確認書類</h3><p className="text-sm" style={{ color: 'var(--color-text-light)' }}>中古品の買取では、古物営業法にもとづき本人確認が行われます。運転免許証などの本人確認書類をご持参ください。駿河屋の店頭買取では会員証が必要で、初回の買取時に登録できます（駿河屋 札幌ノルベサ店 公式）。</p></div>
            <div className="glass-card p-5"><h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>同じ建物の2店舗で比べる</h3><p className="text-sm" style={{ color: 'var(--color-text-light)' }}>ノルベサには駿河屋（1階で買取）とまんだらけ（2階）が入っています。どちらも買取受付は19:30までのため、2店舗で査定を受ける場合は時間に余裕を持ってご来店ください。</p></div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />よくある質問</h2>
          <div>
            {faqs.map((faq, i) => (<details key={i} className="faq-item"><summary>{faq.q}</summary><div className="faq-answer">{faq.a}</div></details>))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) }) }} />
        </section>

        <section className="glass-card-dark p-8 text-center">
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>複数の買取先で<span style={{ color: 'var(--color-electric-green)' }}>査定額を比較</span>する</h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>店舗への持ち込み・宅配買取のいずれの場合も、複数社の査定額を比較することをおすすめします。</p>
          <div className="flex flex-wrap justify-center gap-4"><Link href="/" className="btn-primary py-3 px-8">おすすめランキングを見る</Link></div>
        </section>

        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のエリアガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/area/sendai/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>仙台のゲーム買取</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>仙台駅・一番町・泉エリア別ガイド</p></Link>
            <Link href="/area/tokyo/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>東京のゲーム買取</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>秋葉原・新宿・池袋エリア別ガイド</p></Link>
            <Link href="/area/osaka/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>大阪のゲーム買取</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>日本橋・梅田・難波エリア別ガイド</p></Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
