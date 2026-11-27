import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: '箱なし・付属品なしでもゲームは売れる？減額目安と対処法【2026年】',
  description:
    '箱なし・説明書なしでもゲーム機は売れるのかを、ブックオフ宅配買取で11機種の「箱あり」と「箱説なし」の参考買取価格を2026年11月27日に実測して比べました（差は4.4〜25.0%）。駿河屋の減額基準もあわせて解説します。',
  keywords: ['ゲーム 箱なし 買取', '説明書なし', 'ゲーム 付属品なし 売れる', '箱なし 買取価格'],
  openGraph: {
    images: ['/og.png'],
    title: '箱なし・付属品なしでもゲームは売れる？減額目安と対処法【2026年】',
    description: 'ブックオフ宅配買取の「箱説なし」価格を11機種で実測し、箱ありとの差を比べました。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const SURVEY_DATE = '2026年11月27日';
const SURUGAYA_RULES = 'https://www.suruga-ya.jp/man/hyou/kaitorihin.html';
const bookoffSearch = (model: string) => `https://sell.bookoff.co.jp/online/search/keyword/${model}`;

// ブックオフ宅配買取の買取価格検索（型番で検索）に表示された参考買取価格。2026-11-27 取得。
// 生データ: docs/measure/boxless-bookoff-20261127.txt
const measured = [
  { name: 'PS5 Slim 通常版', model: 'CFI-2000A01', boxed: 57000, boxless: 54500 },
  { name: 'PS5（旧型）通常版', model: 'CFI-1200A01', boxed: 39000, boxless: 36000 },
  { name: 'PS5 Slim デジタル・エディション', model: 'CFI-2000B01', boxed: 25000, boxless: 22500 },
  { name: 'Newニンテンドー3DS LL メタリックブラック', model: 'RED-S-VAAA', boxed: 17000, boxless: 15000 },
  { name: 'Xbox Series X', model: 'RRT-00015', boxed: 16000, boxless: 12500 },
  { name: 'Switch 有機ELモデル ホワイト', model: 'HEG-S-KAAAA', boxed: 11000, boxless: 8800 },
  { name: 'PS4 ジェット・ブラック 500GB', model: 'CUH-2200AB01', boxed: 10000, boxless: 8000 },
  { name: 'PS Vita Wi-Fiモデル ブラック', model: 'PCH-2000ZA11', boxed: 5900, boxless: 5300 },
  { name: 'Switch（バッテリー拡張モデル）ネオン', model: 'HAD-S-KABAA', boxed: 4000, boxless: 3000 },
  { name: 'Switch Lite グレー', model: 'HDH-S-GAZAA', boxed: 4000, boxless: 3000 },
  { name: 'Switch（初期型）ネオン', model: 'HAC-S-KABAA', boxed: 3000, boxless: 2250 },
].map((r) => ({ ...r, diff: r.boxed - r.boxless, pct: Math.round(((r.boxed - r.boxless) / r.boxed) * 1000) / 10 }));

const yen = (n: number) => `${n.toLocaleString('ja-JP')}円`;

const surugayaRules = [
  { rule: '必須付属品が欠品となる場合は、大幅な減額対象となります。例）箱（ケース）、説明書（解説書）または、動作に必要な付属品機器。', point: '箱・説明書も「必須付属品」に含まれます。' },
  { rule: '充電用ケーブル、ACアダプタなどが付属する商品は、本来付属の純正品以外が同梱されている場合は減額となります。', point: '汎用品で代用しても、純正品がそろった状態と同じ扱いにはなりません。' },
  { rule: '動作不良品、動作必需品（コントローラー、ケーブル類等）が欠品しているゲーム機については、一部商品のみ買取可能です。', point: 'コントローラーやケーブルがない本体は、買取できる機種が限られます（動作不良品買取リストで確認）。' },
  { rule: '「販売時に付属していた取扱説明書」が無い場合は、減額対象となります。メーカーホームページ掲載の説明書等を印刷し、お付け頂いても欠品となります。', point: '説明書を印刷して同梱しても、欠品の扱いは変わりません。' },
];

const workarounds = [
  { title: '箱・説明書は捨てずに同梱する', description: `今回測った11機種では、ブックオフの「箱説なし」の参考買取価格は箱ありより600〜3,500円低くなっていました。押し入れなどに箱が残っていれば、同梱するだけでこの差を埋められます。` },
  { title: '純正の付属品をそろえる（汎用品の代用に注意）', description: '駿河屋の減額基準では、ACアダプターや充電ケーブルが純正品以外の場合も減額になると定められています。汎用品を同梱しても、純正品がそろった状態と同じ査定にはならない点に注意してください。' },
  { title: '査定前に「箱説なし」の価格を検索して比べる', description: 'ブックオフの宅配買取は、型番で検索すると「箱説なし」の参考買取価格が別に表示されます。付属品を買い足す前に、箱ありとの差額が買い足す費用より大きいかを確かめてから判断するのが確実です。' },
  { title: '業者ごとの基準を確認する', description: '箱なしの扱いは業者ごとに異なります。ブックオフは「箱説なし」の価格を別に掲載し、駿河屋は箱・説明書を必須付属品として減額の対象にしています。宅配で送る前に、各社の公式の基準を確認してください。' },
];

const minPct = Math.min(...measured.map((r) => r.pct));
const maxPct = Math.max(...measured.map((r) => r.pct));

const faqs = [
  { q: '箱なしでもゲーム機は売れますか？', a: `売れます。ブックオフ宅配買取では、型番で検索すると「箱説なし」の参考買取価格が別に掲載されています。${SURVEY_DATE}に11機種で調べたところ、箱ありとの差は${minPct}〜${maxPct}%（600〜3,500円）でした。駿河屋は箱・説明書を必須付属品としており、欠品は大幅な減額の対象と定めています。` },
  { q: '説明書がなくても売れますか？', a: '売れますが、減額の対象になる業者があります。駿河屋の減額基準では「販売時に付属していた取扱説明書」が無い場合は減額対象で、メーカーのホームページの説明書を印刷して付けても欠品扱いになると定められています。ブックオフは箱と説明書をまとめて「箱説なし」として別の価格を掲載しています。' },
  { q: 'コントローラーなしでも売れますか？', a: '業者と機種によります。駿河屋の減額基準では、コントローラーやケーブル類などの動作必需品が欠品しているゲーム機は「一部商品のみ買取可能」とされています。当サイトではコントローラー欠品時の減額幅は測っていないため、各社の査定で確認してください。' },
  { q: '付属品をなくした場合、買ってから売ったほうが得ですか？', a: '差額しだいです。例えばブックオフの参考買取価格では、Switch 有機ELモデル（ホワイト）の箱ありと箱説なしの差は2,200円でした（2026年11月27日）。買い足す費用がこの差より大きければ損になります。また、駿河屋では純正品以外の付属品は減額になるため、汎用品を買い足しても差は埋まりません。' },
  { q: '箱なしの減額が大きい機種はどれですか？', a: `今回の11機種では、差の割合が大きかったのは Switch（初期型・バッテリー拡張モデル）と Switch Lite の25.0%、Xbox Series X の21.9%、PS4 と Switch 有機ELモデルの20.0%でした。小さかったのは PS5 Slim 通常版の4.4%です（ブックオフ宅配買取・${SURVEY_DATE}）。` },
  { q: '非純正品の付属品でも同梱したほうがよいですか？', a: '駿河屋の減額基準では、ACアダプターや充電ケーブルが純正品以外の場合は減額となると定められています。同梱しないよりよいかどうかは業者によって異なるため、申し込み時に「純正品なし・社外品あり」と伝えて確認することをおすすめします。' },
];

export default function BoxlessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "箱なし・付属品なしでもゲームは売れる？減額目安と対処法【2026年】", "datePublished": "2026-03-15", "dateModified": "2026-11-27", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '箱なし・付属品なし' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            箱なし・付属品なしでもゲームは売れる？
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            結論：箱なしでも売れます。ブックオフ宅配買取の参考買取価格を{SURVEY_DATE}に11機種で調べたところ、「箱説なし」は箱ありより{minPct}〜{maxPct}%（600〜3,500円）低い価格でした。駿河屋は箱・説明書を必須付属品として減額の対象にしています。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Measured */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />箱ありと「箱説なし」の買取価格の差（11機種の実測）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            ブックオフ宅配買取の買取価格検索で型番を検索し、同じ型番の「箱あり（付属品そろい）」と「【箱説なし】」の参考買取価格を並べました（{SURVEY_DATE}取得）。差と割合は当サイトの計算です。「箱説なし」の行は、ケーブル・コントローラーなど動作に必要な付属品がそろっている前提の価格です。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>機種（型番）</th>
                  <th>箱あり</th>
                  <th>箱説なし</th>
                  <th>差（割合）</th>
                </tr>
              </thead>
              <tbody>
                {measured.map((r) => (
                  <tr key={r.model}>
                    <td className="font-bold">{r.name}<span className="block text-xs font-normal" style={{ color: 'var(--color-text-light)' }}>{r.model}</span></td>
                    <td><a href={bookoffSearch(r.model)} target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-deep-blue)', textDecoration: 'underline' }}>{yen(r.boxed)}</a></td>
                    <td>{yen(r.boxless)}</td>
                    <td className="font-bold" style={{ color: '#EF4444' }}>-{yen(r.diff)}（{r.pct}%）</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="text-sm mt-4 space-y-2" style={{ color: 'var(--color-text)' }}>
            <li>・差の割合は {minPct}%（PS5 Slim 通常版）から {maxPct}%（Switch 初期型・バッテリー拡張モデル・Lite）まで開きがあり、一律に「何%下がる」とは言えません。</li>
            <li>・Switch の4機種はいずれも20〜25%で、PS5 の3機種（4.4〜10.0%）より割合が大きくなっていました。金額の差は Xbox Series X の3,500円が最大です。</li>
            <li>・参考買取価格は日々変わります。実際の査定額は商品の状態によっても変わるため、申し込み前に各社の検索で確認してください。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ブックオフ宅配買取 買取価格検索（金額から各型番の検索結果へリンク・{SURVEY_DATE}確認）。</p>
        </section>

        {/* Surugaya rules */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />駿河屋の減額基準に書かれていること</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            駿河屋は箱なしの価格を別に掲載していませんが、公式の減額基準リストで付属品の扱いを定めています。ゲームに関係する記載を抜き出しました（減額の金額や割合は公式に記載がありません）。
          </p>
          <div className="space-y-3">
            {surugayaRules.map((r) => (
              <div key={r.rule} className="glass-card p-5">
                <p className="text-sm mb-2" style={{ color: 'var(--color-text)' }}>「{r.rule}」</p>
                <p className="text-sm font-bold" style={{ color: 'var(--color-deep-blue)' }}>→ {r.point}</p>
              </div>
            ))}
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
            出典：<a href={SURUGAYA_RULES} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>駿河屋 減額基準リスト</a>（{SURVEY_DATE}確認）。
          </p>
        </section>

        {/* Workarounds */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />付属品がない場合の対処法</h2>
          <div className="space-y-4">
            {workarounds.map((item, i) => (
              <div key={item.title} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{item.description}</p>
                </div>
              </div>
            ))}
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
            箱なしのゲーム機を<span style={{ color: 'var(--color-electric-green)' }}>売る前に</span>各社を比較
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            箱なしの扱いは業者ごとに異なります。各社の条件と実測価格を比べてから申し込むことをおすすめします。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>お役立ち情報</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/knowledge/broken/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ジャンク品買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>壊れたゲーム機でも売れる？</p>
            </Link>
            <Link href="/knowledge/preparation/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>売る前の準備</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>初期化・データ消去の手順</p>
            </Link>
            <Link href="/knowledge/bulk/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>まとめ売り</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>まとめ売りのメリットとコツ</p>
            </Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
