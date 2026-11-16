import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = 'ゲーム機の処分方法｜小型家電リサイクル法の対象品目、宅配回収は1箱1,848円・買取なら値段がつく例も【2026年11月16日確認】';
const DESCRIPTION =
  'ゲーム機の処分方法を、環境省の小型家電リサイクル法の資料と認定事業者リネットジャパンの公式ページで2026年11月16日に確認しました。ゲーム機は政令で定められた対象品目で、パソコンを含まない宅配回収は1箱1,848円（税込）です。同日に駿河屋で確認した古い機種の買取価格と並べ、処分と売却の選び方をまとめています。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['ゲーム機 処分', 'ゲーム機 捨て方', 'ゲーム機 廃棄', 'ゲーム機 リサイクル', '小型家電リサイクル ゲーム機'],
  alternates: { canonical: 'https://gamekaitori-biyori.com/knowledge/disposal/' },
  openGraph: {
    images: ['/og.png'],
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const SURVEY_DATE = '2026年11月16日';
const ENV_LAW = 'https://www.env.go.jp/recycle/recycling/raremetals/law.html';
const ENV_SEIREI = 'https://www.env.go.jp/content/900535779.pdf';
const ENV_TRADER = 'https://www.env.go.jp/recycle/recycling/raremetals/trader.html';
const RENET_TOP = 'https://www.renet.jp/';
const RENET_RECYCLE = 'https://www.renet.jp/recycle/';
const SURUGAYA_SEARCH = 'https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=';

// 駿河屋 公式買取検索の掲載価格（2026-11-16・付属品完備の動作品を前提とした減額前の価格）
const oldModels = [
  { name: 'PS4 CUH-1100AB01（SIEの修理受付は終了）', price: 10000, search: 'CUH-1100AB01' },
  { name: 'ニンテンドークラシックミニ スーパーファミコン', price: 4600, search: 'ニンテンドークラシックミニ スーパーファミコン' },
  { name: 'PlayStation VR CUHJ-16000（初期型・SIEの修理受付は終了）', price: 4000, search: 'CUHJ-16000' },
  { name: 'DUALSHOCK 4 CUH-ZCT1J02 ウェイブ・ブルー（旧型コントローラー）', price: 1600, search: 'CUH-ZCT1J' },
];

const yen = (v: number) => `${v.toLocaleString('ja-JP')}円`;
const linkStyle = { color: 'var(--color-electric-green)', fontWeight: 700 } as const;

const faqs = [
  { q: 'ゲーム機は燃えないごみで捨てられますか？', a: 'ゲーム機の出し方は自治体によって異なります。小型家電リサイクル法では、ゲーム機は政令で定める対象品目（第1条第28号「ゲーム機その他の電子玩具及び電動式玩具」）ですが、回収ボックスの設置や不燃ごみでの収集の可否は市区町村ごとに決められています。お住まいの自治体の案内をご確認ください。' },
  { q: '宅配でゲーム機を処分するといくらかかりますか？', a: '環境省・経済産業省の認定事業者であるリネットジャパンの公式ページでは、パソコンを含まない箱の回収料金は1箱1,680円（税込1,848円）です。パソコン本体を含む1箱は0円とされています。梱包した状態で3辺140cm・20kgを超えるものは回収できず、会社・事業所で使っていた小型家電も対象外です（2026年11月16日確認）。' },
  { q: '古いゲーム機でも買い取ってもらえますか？', a: '2026年11月16日に駿河屋の公式買取検索で確認したところ、SIEの修理受付が終わったPS4（CUH-1100AB01）は10,000円、同じく修理受付が終わった初代PSVR（CUHJ-16000）は4,000円で掲載されていました。修理受付が終わった機種でも買取の対象になっている例があるため、処分の前に買取価格を確認することをおすすめします。' },
  { q: '無料回収をうたう業者に出してもよいですか？', a: 'リネットジャパンの公式ページでは、環境省の資料を出典として、家庭の廃棄物は「産業廃棄物処理業の許可」や「古物商の許可」では回収できないこと、町中の巡回・チラシ・インターネット広告・空き地での回収の中には無許可の業者があることを注意しています。環境省の認定事業者一覧で、回収業者が認定を受けているかを確認できます。' },
  { q: '処分の前にやっておくことは？', a: 'セーブデータのバックアップ、本体の初期化、アカウントのサインアウトや登録解除を行ってください。リネットジャパンも、データはお客様自身で消去してから回収に出すよう案内しています。機種別の手順は当サイトのデータ消去の解説ページにまとめています。' },
];

export default function DisposalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'ゲーム機の処分方法｜小型家電リサイクル法の対象品目、宅配回収は1箱1,848円・買取なら値段がつく例も', datePublished: '2026-11-16', dateModified: '2026-11-16', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: 'ゲーム機の処分方法' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲーム機の処分方法<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>小型家電リサイクル・宅配回収・自治体・買取の4つを公式情報で比較【{SURVEY_DATE}確認】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲーム機は小型家電リサイクル法の対象品目です。認定事業者の宅配回収はパソコンを含まない場合1箱1,848円（税込）かかります。一方、{SURVEY_DATE}に駿河屋で確認した古い機種にも1,600〜10,000円の買取価格がついていました。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：{SURVEY_DATE}（環境省・リネットジャパン・駿河屋の公式ページを同日に確認）</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：動くものはまず買取価格を確認し、値段がつかないものを小型家電リサイクルに出すのが目安です</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>法律上の位置づけ：</span>ゲーム機は「使用済小型電子機器等の再資源化の促進に関する法律施行令」第1条第28号の対象品目です。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>宅配回収の費用：</span>リネットジャパンはパソコンを含まない箱で1箱1,848円（税込）です。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>買取の例：</span>駿河屋ではPS4（CUH-1100）10,000円、初代PSVR 4,000円など、修理受付が終わった機種にも値段がついていました。</li>
          </ul>
        </section>

        <section className="mb-12" id="methods">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ゲーム機の処分方法4つの比較</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>方法</th><th>費用</th><th>公式情報で確認できたこと</th></tr></thead>
              <tbody>
                <tr>
                  <td className="font-bold text-sm">買取に出す</td>
                  <td className="text-sm">お金を受け取る側</td>
                  <td className="text-sm">駿河屋の公式買取検索では、古い機種にも1,600〜10,000円の掲載価格がありました（下表）。動作不良品や付属品の欠品は減額・買取不可の対象です。</td>
                </tr>
                <tr>
                  <td className="font-bold text-sm">認定事業者の宅配回収</td>
                  <td className="text-sm">1箱1,848円（税込）<br /><span className="text-xs">パソコン本体を含む1箱は0円</span></td>
                  <td className="text-sm">リネットジャパンリサイクルは環境省の認定事業者一覧で第24号・収集区域「全国」。3辺140cm・20kgを超える箱、事業所で使っていた小型家電は回収対象外です。</td>
                </tr>
                <tr>
                  <td className="font-bold text-sm">自治体の回収（回収ボックス・ごみ収集など）</td>
                  <td className="text-sm">自治体による</td>
                  <td className="text-sm">小型家電の回収方法は市区町村ごとに異なります。お住まいの自治体の案内をご確認ください。</td>
                </tr>
                <tr>
                  <td className="font-bold text-sm">不用品回収業者</td>
                  <td className="text-sm">業者による</td>
                  <td className="text-sm">家庭の廃棄物は「産業廃棄物処理業の許可」「古物商の許可」では回収できないとされています。認定事業者かどうかを環境省の一覧で確認できます。</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={ENV_SEIREI} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>環境省 使用済小型電子機器等の再資源化の促進に関する法律施行令（PDF）</a>、<a href={ENV_TRADER} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>環境省 認定事業者および連絡先一覧（令和8年6月12日現在）</a>、<a href={RENET_TOP} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>リネットジャパン 公式トップ（回収料金）</a>、<a href={RENET_RECYCLE} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>リネットジャパン 小型家電リサイクル</a>（いずれも{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12" id="law">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />小型家電リサイクル法とゲーム機（環境省）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            環境省によると、小型家電リサイクル法（正式名称：使用済小型電子機器等の再資源化の促進に関する法律）は、デジタルカメラやゲーム機等の使用済小型電子機器等の再資源化を促進するための法律で、平成25年4月1日に施行されました。施行令第1条では対象となる28の品目が定められており、第28号が「ゲーム機その他の電子玩具及び電動式玩具」です（附属品を含みます）。
          </p>
          <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
            リネットジャパンの公式ページでは、小型家電には鉛やひ素などの有害物質が含まれるため、適正なリサイクルが行われている施設で処理する必要があると説明しています。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={ENV_LAW} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>環境省 小型家電リサイクル法 ～法律の概要・関係法令～</a>、<a href={ENV_SEIREI} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>同 施行令（PDF）</a>、<a href={RENET_RECYCLE} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>リネットジャパン 小型家電リサイクル</a>（いずれも{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12" id="price">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />処分する前に：古い機種の買取価格の例（駿河屋・{SURVEY_DATE}実測）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            宅配回収の費用（1箱1,848円）と比べるために、発売から年数がたった機種やメーカー修理が終わった機種の買取価格を駿河屋の公式買取検索で確認しました。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>機種</th><th>駿河屋 買取価格</th><th>出典</th></tr></thead>
              <tbody>
                {oldModels.map((m) => (
                  <tr key={m.name}>
                    <td className="font-bold text-sm">{m.name}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(m.price)}</td>
                    <td className="text-sm"><a href={`${SURUGAYA_SEARCH}${encodeURIComponent(m.search)}`} target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-electric-green)' }}>駿河屋 買取検索</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
            いずれも付属品・状態による減額前の掲載価格で、動作不良品や付属品の欠品は減額・買取不可の対象になります。機種ごとの詳しい価格は<Link href="/knowledge/ps4-lifespan/" style={linkStyle}>PS4の寿命と修理受付</Link>、<Link href="/hardware/psvr/" style={linkStyle}>PSVRの買取価格</Link>、<Link href="/hardware/sfc-mini/" style={linkStyle}>スーパーファミコンミニの買取価格</Link>、<Link href="/knowledge/ps4-controller/" style={linkStyle}>PS4コントローラーの買取価格</Link>に掲載しています。壊れている場合は<Link href="/knowledge/broken/" style={linkStyle}>壊れたゲーム機の買取</Link>もご覧ください。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />処分・売却の前にやること</h2>
          <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>データを消す：</span>セーブデータのバックアップと本体の初期化、アカウントのサインアウトを行います。手順は<Link href="/knowledge/data-delete/" style={linkStyle}>データ消去の方法</Link>で機種別に解説しています。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>付属品を集める：</span>コントローラー・ケーブル・箱がそろうと、買取の減額を抑えられます。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>回収業者を確認する：</span>回収を依頼する場合は、環境省の認定事業者一覧か、お住まいの自治体の案内で確認してから申し込みます。</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary>{faq.q}</summary>
                <div className="faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) }) }} />
        </section>

        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連記事</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/knowledge/broken/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>壊れたゲーム機の買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ジャンク品の扱い</p>
            </Link>
            <Link href="/knowledge/repair/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲーム機の修理料金</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>修理代と買取価格の比較</p>
            </Link>
            <Link href="/knowledge/bulk/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>まとめ売り</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>まとめて売るときのポイント</p>
            </Link>
          </div>
        </section>
      </div>

      <AuthorBox />
    </>
  );
}
