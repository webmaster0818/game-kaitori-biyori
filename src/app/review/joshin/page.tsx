import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = 'ジョーシンのゲーム買取価格一覧は見られる？Web買取「買取のジョー」一時停止中の店頭買取と口コミ評価を確認【2026年11月】';
const DESC =
  'ジョーシンのゲーム買取について、2026年11月12日に公式で確認した内容をまとめています。Web買取「買取のジョー」は一時停止中で復旧日は未定、買取は実施店舗の店頭で受け付けています。ヒカカクの評価3.87（117件）と、価格を比べる方法も掲載しています。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: ['ジョーシン ゲーム買取', 'ジョーシン ゲーム買取価格 一覧', 'ジョーシン 買取', '買取のジョー', 'Joshin 買取 口コミ'],
  openGraph: {
    images: ['/og.png'],
    title: TITLE,
    description: DESC,
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const status = [
  { label: 'Web買取（買取のジョー）', value: '一時停止中。復旧予定日時は「未定」。Web買取の申込とマイページは利用できないと案内されています', src: 'Joshin公式「買取のジョー 一時停止のご案内」' },
  { label: '店頭買取', value: '最寄りの買取実施店舗で利用するよう案内されています。実施の有無は店舗ごとに「取扱商品・サービス」で確認します', src: '同上' },
  { label: '店舗検索の項目', value: '店舗検索の絞り込みに「ゲーム買取(本体・ソフト)」「テレビゲーム機(中古品)」「高額買取」の項目があります', src: 'Joshin店舗情報（store.joshin.co.jp）' },
  { label: '買取の問い合わせ先', value: 'Joshin買取センター 06-6631-7002（受付 10:15〜19:00。12月31日は18:30まで、1月1日は休業）', src: 'Joshin公式「買取のジョー 一時停止のご案内」' },
];

const incident = [
  { date: '2026年10月16日（金）', text: 'ネットワークの異常を検知し、不正アクセスの形跡を確認。該当サーバーをネットワークから遮断' },
  { date: '2026年10月17日（土）', text: '公式ホームページで「不正アクセスによるシステム障害発生のお詫びとお知らせ」を公表（一部のサービスを提供できない状態）' },
  { date: '2026年10月19日（月）', text: '同じ内容を東京証券取引所へ開示' },
  { date: '2026年10月26日', text: '第2報を公表。会員情報データベース（最大約600万件：氏名・住所・電話番号・会員番号）などに漏洩の可能性があると発表。クレジットカード情報は保持していないと説明' },
];

const ratings = [
  { star: '星5', count: 40 },
  { star: '星4', count: 37 },
  { star: '星3', count: 29 },
  { star: '星2', count: 7 },
  { star: '星1', count: 4 },
];

const faqs = [
  {
    q: 'ジョーシンのゲーム買取価格一覧は見られますか？',
    a: '2026年11月12日時点で、ジョーシンのWeb買取サイト「買取のジョー」は一時停止中で、公式はWeb買取の申込とマイページが利用できないと案内しています。価格の検索ができるかどうかは、当サイトの環境から買取サイトを開けなかったため確認できていません。売りたいソフトの価格は、店頭で査定を受けて確かめるか、価格を公開している他社の買取サイトで目安を調べる方法があります。',
  },
  {
    q: 'ジョーシンでゲームの買取は今もしていますか？',
    a: '公式の告知では、買取を希望する場合は最寄りの買取実施店舗で店頭買取を利用するよう案内されています。すべての店舗で買取をしているわけではないため、店舗情報ページの「取扱商品・サービス」で「ゲーム買取(本体・ソフト)」の表示を確認してから来店してください。',
  },
  {
    q: '買取のジョーはいつ再開しますか？',
    a: '公式の告知では復旧予定日時は「未定」です（2026年11月12日確認）。告知の理由は「メンテナンス実施に伴い」と書かれています。同社は2026年10月16日に不正アクセスを認識し、一部のサービスを停止していると公表していますが、買取のジョーの停止との関係は公式には明記されていません。',
  },
  {
    q: 'ジョーシンの買取の口コミ・評判はどうですか？',
    a: '買取業者の口コミサイト「ヒカカク！」では、Joshin(ジョーシン)の総合評価は3.87点・117件です（星5が40件、星4が37件、星3が29件、星2が7件、星1が4件。2026年11月12日確認）。ゲームの口コミでは、店頭での対応の早さや、まとめ売りで上乗せがあった点が評価されています。一方で、読み込めないソフトは買い取ってもらえなかった、古いソフトは低い金額だったという声もあります。ページの見出しは「2023年2月最新」で、数年前の投稿も含まれます。',
  },
  {
    q: 'ジョーシンと他の店ではどちらが高く売れますか？',
    a: 'ジョーシンの価格を当サイトで確認できていないため、比較の結論は出せません。価格を公開している買取店（駿河屋・ブックオフ・ゲオなど）の価格は、当サイトの各ページで確認日つきで掲載しています。複数の店の価格を見たうえで、店頭でジョーシンの査定額と比べる方法が確実です。',
  },
];

export default function JoshinReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: TITLE, datePublished: '2026-11-12', dateModified: '2026-11-12', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較している編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ジョーシン' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ジョーシンのゲーム買取価格一覧と買取の現状
            <span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>Web買取は一時停止中・店頭買取と口コミ評価</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: '#CBD5E1' }}>
            最終更新日：2026年11月12日（公式の告知・店舗情報・口コミサイトを同日に確認）
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-12">
          <div className="glass-card p-6" style={{ borderLeft: '4px solid var(--color-accent-orange)' }}>
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>結論：Web買取「買取のジョー」は一時停止中で、買取は実施店舗の店頭で受け付けています</h2>
            <ul className="text-sm leading-relaxed list-disc pl-5 space-y-1" style={{ color: 'var(--color-text-light)' }}>
              <li>ジョーシンのWeb買取サイト「買取のジョー」は<strong>一時停止中で、復旧予定日時は未定</strong>です（2026年11月12日 公式確認）。</li>
              <li>公式は、買取を希望する場合は<strong>最寄りの買取実施店舗で店頭買取</strong>を利用するよう案内しています。店舗ごとに「ゲーム買取(本体・ソフト)」の表示を確認してください。</li>
              <li>Web上の買取価格一覧は、当サイトの環境から開けず、<strong>掲載の有無を確認できていません</strong>。価格の目安は、価格を公開している他社の買取サイトで調べられます（下の「価格を比べる方法」）。</li>
              <li>口コミサイト「ヒカカク！」の評価は<strong>3.87点・117件</strong>です（ゲーム以外の買取を含む）。</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ジョーシンの買取の現状（2026年11月12日確認）</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                {status.map((s) => (
                  <tr key={s.label} className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                    <th className="text-left py-2 pr-4 whitespace-nowrap align-top" style={{ color: 'var(--color-deep-blue)' }}>{s.label}</th>
                    <td className="py-2">{s.value}<span className="block text-xs mt-1">出典：{s.src}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              出典：<a href="https://www.joshin.co.jp/ja/contact/jokaitori.html" target="_blank" rel="noopener noreferrer nofollow" className="underline">株式会社Joshin「買取のジョー 一時停止のご案内」</a>／<a href="https://store.joshin.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline">Joshin 店舗情報</a>（いずれも2026年11月12日確認）。店舗検索の項目は絞り込みの選択肢として確認したもので、実施店舗の数は数えていません。
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />同社が公表している不正アクセスの経緯</h2>
          <div className="glass-card p-6">
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-light)' }}>
              株式会社Joshinは、不正アクセスにより一部のサービスを提供できない状態になっていると公表しています。<strong>買取のジョーの停止告知に書かれている理由は「メンテナンス実施に伴い」で、不正アクセスとの関係は公式には明記されていません。</strong>当サイトでは、両者を結び付けて断定することはしていません。
            </p>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
              {incident.map((i) => (
                <li key={i.date}><strong style={{ color: 'var(--color-deep-blue)' }}>{i.date}</strong>：{i.text}</li>
              ))}
            </ul>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              出典：<a href="https://www.joshin.co.jp/ja/news.html" target="_blank" rel="noopener noreferrer nofollow" className="underline">株式会社Joshin ニュース一覧</a>（2026年10月17日・10月19日・10月26日〔第2報〕の公表資料。2026年11月12日確認）。件数は漏洩した可能性のある最大件数で、漏洩が確定した件数ではないと説明されています。
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />口コミ・評判：ヒカカク！の評価3.87点（117件）</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
              <thead>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
                  <th className="text-left py-2" style={{ color: 'var(--color-deep-blue)' }}>評価</th>
                  <th className="text-right py-2" style={{ color: 'var(--color-deep-blue)' }}>件数</th>
                  <th className="text-right py-2" style={{ color: 'var(--color-deep-blue)' }}>割合</th>
                </tr>
              </thead>
              <tbody>
                {ratings.map((r) => (
                  <tr key={r.star} className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                    <td className="py-2">{r.star}</td>
                    <td className="py-2 text-right">{r.count}件</td>
                    <td className="py-2 text-right">{((r.count / 117) * 100).toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-light)' }}>
              星4以上は117件中77件（約66%）です。ゲームの買取に関する口コミでは、次のような内容が見られます（当サイトによる要約で、原文の転載ではありません）。
            </p>
            <ul className="text-sm leading-relaxed list-disc pl-5 space-y-1 mb-3" style={{ color: 'var(--color-text-light)' }}>
              <li>評価されている点：店頭での査定が早い、店員の対応が丁寧、複数本をまとめて売ると上乗せがあった</li>
              <li>不満の点：自宅で遊べても読み込めないソフトは買い取ってもらえなかった、古いソフトは低い金額だった、査定に時間がかかった</li>
            </ul>
            <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>
              出典：<a href="https://hikakaku.com/company/25/" target="_blank" rel="noopener noreferrer nofollow" className="underline">ヒカカク！ Joshin(ジョーシン)の買取情報・口コミ・評判</a>（2026年11月12日確認）。ページの見出しは「2023年2月最新」で、スマートフォンなどゲーム以外の買取の口コミと、数年前の投稿を含みます。現在の店頭の対応を保証するものではありません。
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ジョーシンに売る前に、価格を比べる方法</h2>
          <div className="glass-card p-6">
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-light)' }}>
              ジョーシンの価格をWebで確かめられない間は、価格を公開している買取店の金額を目安にして、店頭の査定額と比べる方法があります。当サイトでは、各社の公式買取ページの価格を確認日つきで掲載しています。
            </p>
            <ul className="text-sm space-y-2" style={{ color: 'var(--color-text-light)' }}>
              <li>・<Link href="/software/high-value/" style={{ color: 'var(--color-electric-green)' }}>高く売れるゲームソフトランキング（ブックオフ・ゲオ・駿河屋の公式価格）</Link></li>
              <li>・<Link href="/software/pokemon/" style={{ color: 'var(--color-electric-green)' }}>ポケモンソフトの買取価格ランキング（駿河屋の実測）</Link></li>
              <li>・<Link href="/software/switch-soft/" style={{ color: 'var(--color-electric-green)' }}>Switchソフトの買取価格</Link>／<Link href="/hardware/switch2/" style={{ color: 'var(--color-electric-green)' }}>Switch 2 本体の買取価格</Link>／<Link href="/hardware/ps5/" style={{ color: 'var(--color-electric-green)' }}>PS5 本体の買取価格</Link></li>
              <li>・同じ家電量販店系の買取：<Link href="/review/sofmap/" style={{ color: 'var(--color-electric-green)' }}>ソフマップ（ラクウル）の評判</Link></li>
              <li>・店頭で売れる大手：<Link href="/review/geo/" style={{ color: 'var(--color-electric-green)' }}>ゲオ</Link>／<Link href="/review/bookoff/" style={{ color: 'var(--color-electric-green)' }}>ブックオフ</Link>／<Link href="/review/hardoff/" style={{ color: 'var(--color-electric-green)' }}>ハードオフ</Link></li>
              <li>・<Link href="/compare/shop-vs-online/" style={{ color: 'var(--color-electric-green)' }}>店頭買取と宅配買取の違い</Link></li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="glass-card p-5">
                <summary className="font-bold cursor-pointer" style={{ color: 'var(--color-deep-blue)' }}>{f.q}</summary>
                <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--color-text-light)' }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <p className="text-xs mb-8" style={{ color: 'var(--color-text-light)' }}>
          ※当サイトはジョーシンと提携していません。内容は2026年11月12日の確認時点のもので、停止・再開の状況は変わる場合があります。来店前に公式の店舗情報をご確認ください。
        </p>

        <AuthorBox />
      </div>
    </>
  );
}
