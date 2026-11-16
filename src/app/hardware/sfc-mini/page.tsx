import FuruichiCta from '@/components/FuruichiCta';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';

const TITLE = 'スーパーファミコンミニの買取価格｜通常版4,600円・Amazon限定版9,000円（駿河屋）【2026年11月16日実測】';
const DESCRIPTION =
  'スーパーファミコンミニ（ニンテンドークラシックミニ スーパーファミコン）の買取価格を駿河屋の公式買取検索で2026年11月16日に確認しました。通常版4,600円、Amazon限定版9,000円、コントローラー単品1,300円です。任天堂公式のセット内容・生産終了の状況も掲載しています。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['スーパーファミコンミニ 買取', 'スーファミミニ 買取', 'ニンテンドークラシックミニ スーパーファミコン 買取', 'クラシックミニ 買取価格'],
  alternates: { canonical: 'https://gamekaitori-biyori.com/hardware/sfc-mini/' },
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
const SURUGAYA_SEARCH = 'https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=';
const SURUGAYA_RULES = 'https://www.suruga-ya.jp/man/hyou/kaitorihin.html';
const NINTENDO_TOP = 'https://www.nintendo.co.jp/clvs/index.html';
const NINTENDO_SPEC = 'https://www.nintendo.co.jp/clvs/spec/index.html';
const NINTENDO_SOFT = 'https://www.nintendo.co.jp/clvs/soft/index.html';

// 駿河屋 公式買取検索「ニンテンドークラシックミニ スーパーファミコン」の掲載価格（2026-11-16）
const items = [
  { name: 'ニンテンドークラシックミニ スーパーファミコン（通常版）', code: 'CLV-S-SHVF', price: 4600 },
  { name: 'ニンテンドークラシックミニ スーパーファミコン［Amazon限定版］', code: 'CLV-S-SHVF', price: 9000 },
  { name: 'ニンテンドークラシックミニ スーパーファミコン コントローラ（単品）', code: '—', price: 1300 },
  { name: 'ニンテンドークラシックミニ ファミリーコンピュータ（参考）', code: 'CLV-S-HVCC', price: 3600 },
  { name: 'ニンテンドークラシックミニ ファミリーコンピュータ 週刊少年ジャンプ創刊50周年記念バージョン（参考）', code: 'CLV-S-HVJJ', price: 6500 },
];

const titles = [
  'スーパーマリオワールド', 'F-ZERO', 'がんばれゴエモン ゆき姫救出絵巻', '超魔界村', 'ゼルダの伝説 神々のトライフォース',
  'スーパーフォーメーションサッカー', '魂斗羅スピリッツ', 'スーパーマリオカート', 'スターフォックス', '聖剣伝説2',
  'ロックマンX', 'ファイアーエムブレム 紋章の謎', 'スーパーメトロイド', 'ファイナルファンタジーVI',
  'スーパーストリートファイターII ザ ニューチャレンジャーズ', 'スーパードンキーコング', 'スーパーマリオ ヨッシーアイランド',
  'パネルでポン', 'スーパーマリオRPG', '星のカービィ スーパーデラックス', 'スターフォックス2',
];

const yen = (v: number) => `${v.toLocaleString('ja-JP')}円`;
const linkStyle = { color: 'var(--color-electric-green)', fontWeight: 700 } as const;

const faqs = [
  { q: 'スーパーファミコンミニの買取価格はいくらですか？', a: '2026年11月16日に駿河屋の公式買取検索で確認した掲載価格は、通常版が4,600円、Amazon限定版が9,000円でした。いずれも付属品・状態による減額前の金額です。' },
  { q: 'Amazon限定版はなぜ高いのですか？', a: '駿河屋の買取検索では、型番（CLV-S-SHVF）が同じでもAmazon限定版は通常版と別の商品として登録され、9,000円と通常版の約2倍の価格が掲載されていました。売るときは、どちらの版かを確認して該当する商品で査定を申し込んでください。' },
  { q: '付属品がそろっていないと減額されますか？', a: '任天堂の公式ページでは、セット内容は本体1台・専用コントローラー2個・ハイスピードHDMIケーブル1本・USBケーブル（電源供給用）1本・取扱説明書と保証書です。駿河屋の買取基準では、箱・説明書・動作に必要な付属品の欠品は大幅な減額対象とされています。ACアダプターは別売のため、もともとセットに含まれていません。' },
  { q: 'スーパーファミコンミニはまだ新品で買えますか？', a: '任天堂の製品ページには「本製品は生産終了しました」と記載されています（2026年11月16日確認）。' },
  { q: 'ファミコンミニとどちらが高く売れますか？', a: '同日の駿河屋の掲載価格では、ファミコンミニ（通常版）が3,600円、スーパーファミコンミニ（通常版）が4,600円で、スーパーファミコンミニのほうが1,000円高い結果でした。' },
];

export default function SfcMiniPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'スーパーファミコンミニの買取価格｜通常版4,600円・Amazon限定版9,000円（駿河屋）', datePublished: '2026-11-16', dateModified: '2026-11-16', author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'スーパーファミコンミニ 買取価格' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            スーパーファミコンミニの買取価格<span className="block text-base md:text-lg font-normal mt-2" style={{ color: '#CBD5E1' }}>通常版・Amazon限定版・コントローラー単品を駿河屋の公式ページで確認【{SURVEY_DATE}実測】</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ニンテンドークラシックミニ スーパーファミコンの買取価格は、{SURVEY_DATE}の駿河屋の公式買取検索で通常版4,600円、Amazon限定版9,000円でした。任天堂の製品ページでは生産終了と案内されています。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新日：{SURVEY_DATE}（価格は同日に駿河屋の公式買取検索で確認）</p>
        </div>
        <FuruichiCta variant="strip" />
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="glass-card p-6 mb-12">
          <h2 className="font-bold text-lg mb-3" style={{ color: 'var(--color-deep-blue)' }}>結論：通常版は4,600円が目安、Amazon限定版は約2倍の9,000円です</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>通常版：</span>4,600円（駿河屋・{SURVEY_DATE}）。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>Amazon限定版：</span>9,000円。型番は通常版と同じCLV-S-SHVFのため、版の確認が必要です。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>コントローラー単品：</span>1,300円。本体セットには2個付属しているため、欠品があると減額の対象になります。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>掲載価格は付属品・状態による減額前の金額で、査定額を保証するものではありません。売却の直前に公式ページでご確認ください。</p>
        </section>

        <section className="mb-12" id="price">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />クラシックミニの買取価格（駿河屋・{SURVEY_DATE}実測）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            駿河屋の公式買取検索で「ニンテンドークラシックミニ スーパーファミコン」を検索し、本体・コントローラーの掲載価格を記録しました。比較のため、同じ検索結果に出たファミコンミニの価格も載せています。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>商品</th><th>型番</th><th>駿河屋 買取価格</th></tr>
              </thead>
              <tbody>
                {items.map((it) => (
                  <tr key={it.name}>
                    <td className="font-bold text-sm">{it.name}</td>
                    <td className="text-sm">{it.code}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(it.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={`${SURUGAYA_SEARCH}${encodeURIComponent('ニンテンドークラシックミニ スーパーファミコン')}`} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 公式買取検索</a>（{SURVEY_DATE}確認）。
          </p>
          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>実測から分かること</h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>限定版は通常版の約2倍：</span>Amazon限定版（9,000円）は通常版（4,600円）より4,400円高く掲載されていました。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ファミコンミニより1,000円高い：</span>通常版同士では、スーパーファミコンミニ4,600円に対し、ファミコンミニ3,600円でした。</li>
              <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>コントローラー2個分で2,600円相当：</span>単品の掲載価格は1,300円です。セットのコントローラーが欠けている場合の減額幅の参考になります（実際の減額額は査定で決まります）。</li>
            </ul>
          </div>
        </section>

        <section className="mb-12" id="spec">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />査定前に確認したいセット内容（任天堂公式）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>項目</th><th>任天堂の公式記載</th></tr></thead>
              <tbody>
                <tr><td className="font-bold text-sm">セット内容</td><td className="text-sm">本体1台、専用コントローラー2個、ハイスピードHDMIケーブル1本、USBケーブル（電源供給用）1本、取扱説明書・保証書</td></tr>
                <tr><td className="font-bold text-sm">電源</td><td className="text-sm">電源供給用のUSB機器が必要です。ニンテンドーUSB ACアダプター［CLV-003(JPN)］は別売（希望小売価格1,000円+税）で、5V/1.0A/5Wの出力ができる市販のUSB対応ACアダプターも使用できます。</td></tr>
                <tr><td className="font-bold text-sm">収録タイトル</td><td className="text-sm">21タイトル（未発売だった「スターフォックス2」を含む）</td></tr>
                <tr><td className="font-bold text-sm">販売状況</td><td className="text-sm">製品ページに「本製品は生産終了しました」と記載</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>
            収録タイトル：{titles.join('、')}。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={NINTENDO_TOP} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>任天堂 ニンテンドークラシックミニ スーパーファミコン</a>、<a href={NINTENDO_SPEC} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>主な仕様</a>、<a href={NINTENDO_SOFT} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>収録タイトル一覧</a>（いずれも{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12" id="rules">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />査定で減額される条件（駿河屋の公式記載）</h2>
          <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
            駿河屋の買取基準では、箱（ケース）・説明書・動作に必要な付属品機器の欠品は大幅な減額対象です。本体・付属品・パッケージの傷み・汚れ・日焼けも減額対象で、程度により買取不可となります。動作不良品や、コントローラー・ケーブル類が欠品しているゲーム機は一部の商品のみ買取可能とされています。
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SURUGAYA_RULES} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>駿河屋 減額基準リスト</a>（{SURVEY_DATE}確認）。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />売る前に確認すること</h2>
          <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>通常版か限定版かを確認する：</span>型番が同じため、外箱の表記などで版を確かめてから査定を申し込んでください。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>コントローラー2個とケーブルをそろえる：</span>上記のセット内容がそろっているかを確認します。ACアダプターはもともと別売です。</li>
            <li>・<span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>ほかのレトロゲームとまとめて売る：</span>当時のスーパーファミコン本体・ソフトの買取は<Link href="/hardware/retro/" style={linkStyle}>レトロゲーム機の買取</Link>、売る前の準備全般は<Link href="/knowledge/preparation/" style={linkStyle}>売る前の準備</Link>で解説しています。</li>
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
            <Link href="/hardware/retro/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>レトロゲーム機の買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ファミコン・スーファミ本体</p>
            </Link>
            <Link href="/software/retro-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>レトロゲームソフトの買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>プレミアソフトを高く売るコツ</p>
            </Link>
            <Link href="/hardware/gameboy/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲームボーイの買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>GB・GBA系の本体</p>
            </Link>
          </div>
        </section>
      </div>

      <AuthorBox />
    </>
  );
}
