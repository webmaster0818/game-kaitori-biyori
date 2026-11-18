import FuruichiCta from '@/components/FuruichiCta';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = '太鼓の達人の買取価格｜ソフト2,900円・太鼓とバチ3,300〜7,100円（駿河屋）【2026年11月18日実測】';
const DESCRIPTION =
  '太鼓の達人のソフトと専用コントローラー「太鼓とバチ」の買取価格を駿河屋の公式買取検索で2026年11月18日に確認しました。Switch版ドンダフルフェスティバル2,900円、太鼓とバチ for PS5 7,100円、Switch用の豪華セット4,500円です。機種別のソフト・同梱版・タタコンの価格をまとめています。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['太鼓の達人 買取', '太鼓とバチ 買取', '太鼓の達人 コントローラー 買取', 'タタコン 買取', '太鼓の達人 ソフト 買取価格'],
  alternates: { canonical: 'https://gamekaitori-biyori.com/software/taiko/' },
  openGraph: {
    images: ['/og.png'],
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const SURVEY_DATE = '2026年11月18日';
const SURUGAYA_SEARCH = 'https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=';
const SURUGAYA_RULES = 'https://www.suruga-ya.jp/man/hyou/kaitorihin.html';

// 駿河屋 公式買取検索「太鼓の達人 専用コントローラー」「太鼓とバチ」「タタコン」「太鼓の達人 Nintendo Switch」の掲載価格（2026-11-18）
const controllers = [
  { name: '太鼓の達人 専用コントローラーPro.（Wii U）', code: 'WIU-067', release: '2014/12/04', price: 25000 },
  { name: '太鼓の達人専用コントローラー 太鼓とバチ for PS5/PS4/Win', code: 'SPF-042', release: '2024/11/07', price: 7100 },
  { name: '太鼓の達人専用コントローラー 太鼓とバチ for Xbox Series X|S/Win', code: 'MBS-018', release: '2025/03/31', price: 5300 },
  { name: '太鼓の達人専用コントローラー 太鼓とバチ for Nintendo Switch 豪華セット', code: 'NSW-430', release: '2023/10/26', price: 4500 },
  { name: '太鼓の達人専用コントローラー 太鼓とバチ for PlayStation4', code: 'PS4-095', release: '2017/10/26', price: 3300 },
  { name: 'PlayStation2 専用タタコン 和太鼓型コントローラ（新型）', code: 'NPC-108', release: '2005/12/01', price: 2200 },
  { name: '太鼓の達人 フィットバチ（Switch）', code: '—', release: '2023/12/07', price: 1200 },
];

// 同日の「太鼓の達人 ソフト」「太鼓の達人 Nintendo Switch」の検索結果（ソフト単品）
const softs = [
  { name: '太鼓の達人 ドンダフルフェスティバル', hw: 'Switch', release: '2022/09/22', price: 2900 },
  { name: '太鼓の達人 ドンダフルフェスティバル', hw: 'PS5', release: '2024/11/07', price: 2500 },
  { name: '太鼓の達人 Nintendo Switchば～じょん!', hw: 'Switch', release: '2018/07/19', price: 1800 },
  { name: '太鼓の達人 セッションでドドンがドン!［通常版］', hw: 'PS4', release: '2017/10/26', price: 1100 },
  { name: '太鼓の達人DS ドロロン!ヨーカイ大決戦!!', hw: 'DS', release: '2010/07/01', price: 600 },
  { name: '太鼓の達人 ドコドン!ミステリーアドベンチャー', hw: '3DS', release: '2016/06/16', price: 400 },
  { name: '太鼓の達人 ぽ～たぶる', hw: 'PSP', release: '2005/08/04', price: 350 },
];

// 同日の「太鼓とバチ」「タタコン」の検索結果（コントローラー同梱版）
const bundles = [
  { name: '太鼓の達人 -ドカッ!と大盛り七代目-［タタコン同梱・トイザらス限定版］', hw: 'PS2', price: 13000 },
  { name: '太鼓の達人 -ドカッ!と大盛り七代目-［タタコン同梱版］', hw: 'PS2', price: 6300 },
  { name: '太鼓の達人 セッションでドドンがドン!［タタコン同梱版］', hw: 'PS4', price: 5600 },
  { name: '太鼓の達人 -わいわいハッピー! 六代目-［タタコン同梱版］', hw: 'PS2', price: 4800 },
  { name: '太鼓の達人 あつめて★ともだち大作戦! 太鼓とバチ同梱版', hw: 'Wii U', price: 3600 },
  { name: '太鼓の達人Wii 決定版［太鼓とバチ同梱］', hw: 'Wii', price: 2600 },
];

const yen = (v: number) => `${v.toLocaleString('ja-JP')}円`;
const linkStyle = { color: 'var(--color-electric-green)', fontWeight: 700 } as const;

const faqs = [
  { q: '太鼓の達人のソフトはいくらで売れますか？', a: '2026年11月18日に駿河屋の公式買取検索で確認した掲載価格は、Switch版「ドンダフルフェスティバル」が2,900円、PS5版の同タイトルが2,500円、「Nintendo Switchば～じょん!」が1,800円でした。DS・3DS・PSPのソフトは350〜600円です。' },
  { q: '太鼓とバチ（専用コントローラー）はいくらで売れますか？', a: '同日の掲載価格は、PS5/PS4/Windows用（SPF-042）が7,100円、Xbox Series X|S/Windows用（MBS-018）が5,300円、Nintendo Switch用の豪華セット（NSW-430）が4,500円、PS4用（PS4-095）が3,300円でした。対応機種によって価格が異なります。' },
  { q: '一番高く売れる太鼓の達人の商品は何ですか？', a: '今回確認した中では、Wii U用の「太鼓の達人 専用コントローラーPro.」が25,000円で最も高く、次いでPS2の「ドカッ!と大盛り七代目」タタコン同梱・トイザらス限定版の13,000円でした。' },
  { q: 'コントローラー同梱版はバラして売ったほうがよいですか？', a: 'PS4版「セッションでドドンがドン!」では、タタコン同梱版が5,600円でした。通常版のソフト（1,100円）とPS4用の太鼓とバチ（3,300円）を別々に売った合計4,400円より1,200円高く掲載されています。同梱版はそろったまま売るほうが高い例です。' },
  { q: 'バチがない太鼓コントローラーは減額されますか？', a: '駿河屋の減額基準リストでは、動作に必要な付属品機器の欠品は大幅な減額対象とされています。バチが付属品にあたるかどうかの個別の判断は掲載されていないため、査定で確認されます。' },
];

export default function TaikoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: '太鼓の達人の買取価格｜ソフト2,900円・太鼓とバチ3,300〜7,100円（駿河屋）', datePublished: '2026-11-18', dateModified: '2026-11-18', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: '太鼓の達人の買取価格' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ソフト別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            太鼓の達人の買取価格<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>ソフト・太鼓とバチ・タタコン・同梱版を駿河屋の公式ページで確認【{SURVEY_DATE}実測】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            太鼓の達人の買取価格は、{SURVEY_DATE}の駿河屋の公式買取検索でSwitch版「ドンダフルフェスティバル」2,900円、専用コントローラー「太鼓とバチ」が機種別に3,300〜7,100円でした。ソフトよりも専用コントローラーのほうが高く掲載されています。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：{SURVEY_DATE}（価格は同日に駿河屋の公式買取検索で確認）</p>
        </div>
        <FuruichiCta variant="strip" />
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：ソフトは最大2,900円、太鼓とバチは最大7,100円です</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>最新作のソフト：</span>ドンダフルフェスティバルがSwitch版2,900円、PS5版2,500円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>太鼓とバチ：</span>PS5/PS4/Win用7,100円、Xbox用5,300円、Switch用豪華セット4,500円、PS4用3,300円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>最も高い商品：</span>Wii U用「専用コントローラーPro.」25,000円。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>同梱版：</span>そろったまま売ると、ソフトとコントローラーを別々に売るより高い例がありました。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>掲載価格は付属品・状態による減額前の金額で、査定額を保証するものではありません。売却の直前に公式ページでご確認ください。</p>
        </section>

        <section className="mb-12" id="controller">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />専用コントローラーの買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>コントローラー</th><th>型番</th><th>発売日（駿河屋の記載）</th><th>買取価格</th></tr></thead>
              <tbody>
                {controllers.map((it) => (
                  <tr key={it.name}>
                    <td className="font-bold text-sm">{it.name}</td>
                    <td className="text-sm">{it.code}</td>
                    <td className="text-sm">{it.release}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(it.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：駿河屋 公式買取検索<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('太鼓の達人 専用コントローラー')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>「太鼓の達人 専用コントローラー」</a>・<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('タタコン')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>「タタコン」</a>・<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('太鼓の達人 Nintendo Switch')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>「太鼓の達人 Nintendo Switch」</a>（{SURVEY_DATE}確認）。商品名の対応機種は駿河屋の表記を読みやすく整えています。
          </p>
          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>実測から分かること</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>新しい機種向けほど高い：</span>同じ「太鼓とバチ」でも、PS5/PS4/Win用（7,100円）はPS4用（3,300円）の約2.2倍でした。売る前に箱や本体の型番で対応機種を確認してください。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>Wii U用のPro.が突出：</span>専用コントローラーPro.（25,000円）は、Switch用豪華セット（4,500円）の5倍以上の掲載価格でした。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ソフトよりコントローラーのほうが高い：</span>Switch用の太鼓とバチ豪華セット（4,500円）は、Switch版ドンダフルフェスティバル（2,900円）より1,600円高く掲載されていました。</li>
            </ul>
          </div>
        </section>

        <section className="mb-12" id="soft">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ソフトの機種別買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>ソフト</th><th>機種</th><th>発売日（駿河屋の記載）</th><th>買取価格</th></tr></thead>
              <tbody>
                {softs.map((it) => (
                  <tr key={it.name + it.hw}>
                    <td className="font-bold text-sm">{it.name}</td>
                    <td className="text-sm">{it.hw}</td>
                    <td className="text-sm">{it.release}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(it.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
            ドンダフルフェスティバルは、発売の早いSwitch版（2022年）が、後から出たPS5版（2024年）より400円高く掲載されていました。携帯機（DS・3DS・PSP）のソフトは350〜600円です。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('太鼓の達人 ソフト')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 公式買取検索「太鼓の達人 ソフト」</a>（{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12" id="bundle">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />コントローラー同梱版の買取価格</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>同梱版</th><th>機種</th><th>買取価格</th></tr></thead>
              <tbody>
                {bundles.map((it) => (
                  <tr key={it.name}>
                    <td className="font-bold text-sm">{it.name}</td>
                    <td className="text-sm">{it.hw}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(it.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
            PS4版「セッションでドドンがドン!」のタタコン同梱版（5,600円）は、通常版のソフト（1,100円）とPS4用の太鼓とバチ（3,300円）の合計4,400円より1,200円高く掲載されていました。同梱版を持っている場合は、箱と中身をそろえたまま査定に出すと金額を比べやすくなります。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：駿河屋 公式買取検索<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('太鼓とバチ')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>「太鼓とバチ」</a>・<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('タタコン')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>「タタコン」</a>（{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12" id="rules">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />査定で減額される条件（駿河屋の公式記載）</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・箱（ケース）・説明書・動作に必要な付属品機器が欠品している場合は、大幅な減額対象です。</li>
            <li>・本体・付属品・パッケージの傷み・汚れ・日焼けは減額対象で、程度によっては買取不可となります。</li>
            <li>・通常版のセットに通常版以外の商品が混ざっている場合などは、セット価格ではなく単品での査定になる場合があります。</li>
            <li>・ゲームソフトの、通常の使用で自然についてしまう傷みや汚れは減額の対象とはなりません。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SURUGAYA_RULES} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 減額基準リスト</a>（{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />売る前に確認すること</h2>
          <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>対応機種を確かめる：</span>太鼓とバチはPS4用・PS5用・Switch用・Xbox用で掲載価格が異なります。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>付属品をそろえる：</span>バチ・ケーブル・箱がそろっているか確認してください。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ほかのソフトとまとめる：</span>Switchソフトの売り方は<Link href="/software/switch-soft/" style={linkStyle}>Switchソフトの買取</Link>、コントローラーの相場は<Link href="/knowledge/controller/" style={linkStyle}>ゲームコントローラーの買取相場</Link>で解説しています。</li>
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
            <Link href="/software/switch-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switchソフトの買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>任天堂ソフトを高く売るコツ</p>
            </Link>
            <Link href="/knowledge/controller/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>コントローラーの買取相場</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>Joy-Con・DualSense・Elite</p>
            </Link>
            <Link href="/software/high-value/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>高く売れるゲームソフト</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>公式買取価格のランキング</p>
            </Link>
          </div>
        </section>
      </div>

      <AuthorBox />
    </>
  );
}
