import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ゲームを高く売る10のコツ｜高価買取のテクニック完全版【2026年】',
  description:
    'ゲームソフト・本体を高く売るための10のコツを完全解説。清掃・付属品・タイミング・複数査定・まとめ売りなど、買取価格アップの具体的な方法と効果（何%アップ）まで詳しく紹介。やってはいけないNG行為も。',
  keywords: ['ゲーム 高く売る方法', 'ゲーム 高価買取 コツ', 'ゲーム 買取額アップ', 'ゲーム 売り時', 'ゲーム買取 テクニック'],
  openGraph: {
    title: 'ゲームを高く売る10のコツ｜高価買取のテクニック完全版【2026年】',
    description: 'ゲームの買取価格を最大化する10のテクニックとNG行為を徹底解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const tips = [
  { title: '本体・ソフトの清掃', effect: '+500〜1,000円UP', description: 'ホコリや指紋を拭き取るだけで印象が大きく変わります。綿棒でコネクター部分、マイクロファイバーでディスク面を清掃。コントローラーのスティック周りの汚れも忘れずに。清掃済みの状態で査定に出すだけで、500〜1,000円程度の差がつくケースが多いです。' },
  { title: '付属品を全て揃える', effect: '+500〜2,000円UP', description: '箱、説明書、ケーブル類、コントローラーなど付属品が揃っているほど高額に。特に外箱の有無は大きな差が出ます。付属品完備で+500〜2,000円UP。付属品が1つ欠けるごとに減額されるため、購入時から保管を意識しましょう。' },
  { title: '箱・説明書あり', effect: '+1,000〜3,000円UP', description: '箱と説明書が揃っているだけで買取額が1,000〜3,000円アップするのが一般的。特にゲーム機本体は箱ありとなしで大きな差が出ます。レトロゲームでは箱・説明書の有無で10倍以上の差がつくこともあります。購入後は箱を保護袋に入れ、説明書は箱と一緒に保管しましょう。' },
  { title: '売却タイミングを見極める', effect: '10〜20%アップ', description: '年末商戦前（10〜11月）や新学期前（2〜3月）は需要が高まり高値がつきやすいです。後継機の発表直後は旧モデルの価格が下がるため、噂が出る前に売るのがベスト。' },
  { title: '複数社で査定を比較する', effect: '最大30%の差も', description: '1社だけで決めるのは損。ヒカカク！なら最大20社に一括査定でき、業者間の競争で最高値を引き出せます。同じ商品でも業者によって数千円〜最大30%の差がつくことも珍しくありません。Switch本体で5,000円以上の差が出たケースもあります。' },
  { title: 'まとめ売りボーナスを活用', effect: '5〜20%アップ', description: '多くの買取業者が「10点以上で買取額10%UP」などのまとめ売りボーナスを実施。不要なゲームは溜め込まず、ある程度まとまったタイミングでまとめて売ると効率的です。' },
  { title: '新作は発売1週間以内に売る', effect: '定価の70-80%で売れる', description: 'ゲームソフトの価値は発売日から離れるほど下がります。発売1週間以内なら定価の70〜80%で売れることも多いです。1ヶ月で60〜70%、3ヶ月経つと一気に下落します。クリア済みのゲームは早めに売却しましょう。' },
  { title: '限定版・特典は大切に保管', effect: '50〜200%アップ（通常版比）', description: '限定版や初回特典付きはコレクター需要で通常版の2〜3倍の値がつくことも。フィギュア、サントラ、アートブックなどの特典は未開封であるほど高値になります。' },
  { title: '動作確認を済ませておく', effect: '減額回避', description: '電源が入る、ゲームが正常に起動する、セーブ・ロードができることを確認。動作不良が査定で判明すると大幅減額やジャンク扱いに。事前に確認して問題があれば正直に申告しましょう。' },
  { title: '買取強化キャンペーンを狙う', effect: '10〜30%アップ', description: '各買取業者が定期的に実施する「買取金額UP」キャンペーンを狙いましょう。特に決算期（3月・9月）や年末はキャンペーンが増えます。ヒカカク！で最新キャンペーン情報もチェックできます。' },
];

const ngActions = [
  { title: '改造・CFW導入', description: '改造品は多くの業者で買取不可。未改造に戻しても「改造歴あり」と見なされ大幅減額になるケースが多いです。絶対にやめましょう。' },
  { title: 'シールやステッカーを貼る', description: '本体や箱にシールを貼ると剥がし跡が残り、状態評価が下がります。どうしても貼りたい場合は保護ケースの上から。' },
  { title: '付属品をバラ売りする', description: 'コントローラーだけ、ケーブルだけを先に売ると本体の買取額が大幅ダウン。セットで売るのが鉄則です。' },
  { title: '査定せずに1社で即決する', description: '比較せずに売ると数千円〜数万円の損になることも。必ず複数社の査定を比較してから売却先を決めましょう。' },
  { title: '動作不良を隠して売る', description: '査定時に動作不良が発覚すると信用を失い、他の商品の査定にも影響します。不具合は正直に申告したほうが結果的に有利です。' },
];

const faqs = [
  { q: 'ゲームを高く売るベストなタイミングはいつですか？', a: '年末商戦前（10〜11月）と新学期前（2〜3月）が最も高値がつきやすい時期です。また後継機の発表前も売り時。逆に大型セール直後やリメイク版発売後は旧作の価値が下がりやすいので避けましょう。' },
  { q: '箱なし・説明書なしだとどのくらい減額されますか？', a: '箱なしで1,000〜3,000円、説明書なしで500〜1,000円程度の減額が一般的です。レトロゲームでは箱・説明書の有無で10倍以上の差がつくこともあります。今からでも購入時の箱は大切に保管しましょう。' },
  { q: '複数社で査定を比較するのは面倒ではないですか？', a: 'ヒカカク！を使えば一度の申し込みで最大20社に一括査定できるため、1社ずつ問い合わせる手間がありません。最高値の業者をワンクリックで選べるので、比較の手間はほぼゼロです。' },
  { q: 'まとめ売りは何点以上がお得ですか？', a: '多くの業者が10点以上でボーナスを設定しています。点数が多いほどボーナス率が上がるサービスもあるため、不要なゲームは溜め込んでまとめて売るのがお得です。ただし人気タイトルは価値が下がる前に早めに売りましょう。' },
  { q: '傷や汚れがあっても高く売れますか？', a: '清掃で改善できる汚れなら査定前に必ず掃除しましょう。軽い傷は「良品」として買い取ってもらえますが、深い傷や動作に影響する損傷は減額対象です。保護フィルムやケースで予防することが大切です。' },
  { q: '買取強化キャンペーンはどこで確認できますか？', a: '各買取業者の公式サイトやSNSで告知されます。ヒカカク！のサイトでも各業者のキャンペーン情報をまとめてチェックできます。決算期（3月・9月）や年末年始はキャンペーンが増えるので要チェックです。' },
];

export default function HighPricePage() {
  return (
    <>
      <Breadcrumb items={[{ name: '売り方', href: '/' }, { name: '高く売るコツ' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>売り方ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲームを高く売る10のコツ
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ちょっとした工夫で買取価格は大きく変わります。清掃・付属品・タイミング・複数査定など、ゲームの買取額を最大化する具体的なテクニックと、やってはいけないNG行為を完全解説。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 10 Tips */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />高く売る10のコツ</h2>
          <div className="space-y-4">
            {tips.map((tip, i) => (
              <div key={tip.title} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>{tip.title}</h3>
                    <span className="tag-pill tag-pill-green text-xs">{tip.effect}</span>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NG Actions */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />やってはいけないNG行為5つ</h2>
          <div className="space-y-4">
            {ngActions.map((ng, i) => (
              <div key={ng.title} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: '#F87171', opacity: 0.3 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{ng.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{ng.description}</p>
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
            コツを押さえて<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>で売ろう
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            清掃して付属品を揃えたら、あとは複数社で査定を比較するだけ。ヒカカク！なら最大20社に一括査定できます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他の売り方ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/method/online/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>宅配買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>自宅から送るだけのネット買取ガイド</p>
            </Link>
            <Link href="/method/shop/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>店舗買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>即日現金化・持ち込み買取ガイド</p>
            </Link>
            <Link href="/method/app/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>フリマアプリ vs 買取業者</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>メルカリと買取業者を徹底比較</p>
            </Link>
          </div>
          <div className="mt-4">
            <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>ハード別買取ガイド</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/hardware/switch/" className="glass-card p-4 card-hover block">
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Nintendo Switch</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>Switchの買取相場・高く売るコツ</p>
              </Link>
              <Link href="/hardware/ps5/" className="glass-card p-4 card-hover block">
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PlayStation 5</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS5の買取相場・高く売るコツ</p>
              </Link>
              <Link href="/hardware/retro/" className="glass-card p-4 card-hover block">
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>レトロゲーム</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ファミコン・スーファミの買取相場</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
