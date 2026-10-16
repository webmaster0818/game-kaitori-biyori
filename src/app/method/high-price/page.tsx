import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ゲームを高く売る10のコツ｜高価買取のテクニック【2026年】',
  description:
    'ゲームソフト・本体を高く売るための10のコツを解説します。清掃・付属品・タイミング・複数査定・まとめ売りなど、買取価格を上げる具体的な方法と効果の目安（何%アップ）をご紹介し、避けるべきNG行為についても説明します。',
  keywords: ['ゲーム 高く売る方法', 'ゲーム 高価買取 コツ', 'ゲーム 買取額アップ', 'ゲーム 売り時', 'ゲーム買取 テクニック'],
  openGraph: {
    images: ['/og.png'],
    title: 'ゲームを高く売る10のコツ｜高価買取のテクニック【2026年】',
    description: 'ゲームの買取価格を上げるための10のテクニックと、避けるべきNG行為を解説します。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const tips = [
  { title: '本体・ソフトの清掃', effect: '+500〜1,000円UP', description: 'ホコリや指紋を拭き取るだけで、印象は大きく変わります。綿棒でコネクター部分を、マイクロファイバーでディスク面を清掃してください。コントローラーのスティック周りの汚れも忘れずに落としてください。清掃済みの状態で査定に出すだけで、500〜1,000円程度の差がつくケースが多くあります。' },
  { title: '付属品をすべてそろえる', effect: '+500〜2,000円UP', description: '箱、説明書、ケーブル類、コントローラーなどの付属品がそろっているほど高額になります。特に外箱の有無で大きな差が出ます。付属品完備で+500〜2,000円UPが目安です。付属品が1つ欠けるごとに減額されるため、購入時から保管を意識することをおすすめします。' },
  { title: '箱・説明書あり', effect: '+1,000〜3,000円UP', description: '箱と説明書がそろっているだけで、買取金額が1,000〜3,000円上がるのが一般的です。特にゲーム機本体は、箱の有無で大きな差が出ます。レトロゲームでは箱・説明書の有無で10倍以上の差がつくこともあります。購入後は箱を保護袋に入れ、説明書は箱と一緒に保管することをおすすめします。' },
  { title: '売却タイミングを見極める', effect: '10〜20%アップ', description: '年末商戦前（10〜11月）や新学期前（2〜3月）は需要が高まり、高値がつきやすい時期です。後継機の発表直後は旧モデルの価格が下がるため、噂が出る前に売ることをおすすめします。' },
  { title: '複数社で査定を比較する', effect: '最大30%の差も', description: '1社だけで決めると、損をする可能性があります。ヒカカク！なら最大20社に一括査定でき、業者間の競争により高値を引き出せます。同じ商品でも、業者によって数千円〜最大30%の差がつくことは珍しくありません。Switch本体で5,000円以上の差が出たケースもあります。' },
  { title: 'まとめ売りボーナスを活用', effect: '5〜20%アップ', description: '多くの買取業者が「10点以上で買取金額10%UP」などのまとめ売りボーナスを実施しています。不要なゲームは溜め込まず、ある程度まとまったタイミングで売ると効率的です。' },
  { title: '新作は発売1週間以内に売る', effect: '定価の70-80%で売れる', description: 'ゲームソフトの価値は発売日から離れるほど下がります。発売1週間以内であれば、定価の70〜80%で売れることも多くあります。1ヶ月で60〜70%となり、3ヶ月経つと大きく下落します。クリア済みのゲームは早めの売却をおすすめします。' },
  { title: '限定版・特典は大切に保管', effect: '50〜200%アップ（通常版比）', description: '限定版や初回特典付きは、コレクター需要により通常版の2〜3倍の値がつくこともあります。フィギュア、サントラ、アートブックなどの特典は未開封であるほど高値になります。' },
  { title: '動作確認を済ませておく', effect: '減額回避', description: '電源が入ること、ゲームが正常に起動すること、セーブ・ロードができることをご確認ください。動作不良が査定で判明すると、大幅な減額やジャンク扱いとなります。事前に確認し、問題があればその旨を申告してください。' },
  { title: '買取強化キャンペーンを狙う', effect: '10〜30%アップ', description: '各買取業者が定期的に実施する「買取金額UP」キャンペーンの活用をおすすめします。特に決算期（3月・9月）や年末はキャンペーンが増えます。ヒカカク！で最新のキャンペーン情報も確認できます。' },
];

const ngActions = [
  { title: '改造・CFW導入', description: '改造品は多くの業者で買取不可です。未改造に戻しても「改造歴あり」と見なされ、大幅に減額されるケースが多くあります。改造は行わないでください。' },
  { title: 'シールやステッカーを貼る', description: '本体や箱にシールを貼ると剥がし跡が残り、状態評価が下がります。どうしても貼りたい場合は、保護ケースの上から貼ることをおすすめします。' },
  { title: '付属品をバラ売りする', description: 'コントローラーやケーブルだけを先に売ると、本体の買取金額が大幅に下がります。セットで売ることが基本です。' },
  { title: '査定せずに1社で即決する', description: '比較せずに売ると、数千円〜数万円の損になることもあります。必ず複数社の査定を比較してから売却先を決めてください。' },
  { title: '動作不良を隠して売る', description: '査定時に動作不良が発覚すると信用を損ない、他の商品の査定にも影響します。不具合は事前に申告したほうが、結果的に有利です。' },
];

const faqs = [
  { q: 'ゲームを高く売るベストなタイミングはいつですか？', a: '年末商戦前（10〜11月）と新学期前（2〜3月）が最も高値がつきやすい時期です。また、後継機の発表前も売り時です。一方、大型セール直後やリメイク版発売後は旧作の価値が下がりやすいため、避けることをおすすめします。' },
  { q: '箱なし・説明書なしだとどのくらい減額されますか？', a: '箱なしで1,000〜3,000円、説明書なしで500〜1,000円程度の減額が一般的です。レトロゲームでは箱・説明書の有無で10倍以上の差がつくこともあります。今後のためにも、購入時の箱は大切に保管することをおすすめします。' },
  { q: '複数社で査定を比較するのは面倒ではありませんか？', a: 'ヒカカク！を利用すれば、一度の申し込みで最大20社に一括査定できるため、1社ずつ問い合わせる手間がかかりません。最も高い業者をワンクリックで選べるため、比較の手間はほとんどかかりません。' },
  { q: 'まとめ売りは何点以上がお得ですか？', a: '多くの業者が10点以上でボーナスを設定しています。点数が多いほどボーナス率が上がるサービスもあるため、不要なゲームはまとめて売るほうがお得です。ただし人気タイトルは、価値が下がる前に早めに売ることをおすすめします。' },
  { q: '傷や汚れがあっても高く売れますか？', a: '清掃で改善できる汚れであれば、査定前に必ず掃除してください。軽い傷であれば「良品」として買い取ってもらえる場合がありますが、深い傷や動作に影響する損傷は減額対象です。保護フィルムやケースで予防することが大切です。' },
  { q: '買取強化キャンペーンはどこで確認できますか？', a: '各買取業者の公式サイトやSNSで告知されます。ヒカカク！のサイトでも、各業者のキャンペーン情報をまとめて確認できます。決算期（3月・9月）や年末年始はキャンペーンが増えるため、こまめにご確認ください。' },
];

export default function HighPricePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲームを高く売る10のコツ｜高価買取のテクニック【2026年】", "datePublished": "2026-03-15", "dateModified": "2026-05-24", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: '売り方', href: '/' }, { name: '高く売るコツ' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>売り方ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲームを高く売る10のコツ
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            少しの工夫で、買取価格は大きく変わります。清掃・付属品・タイミング・複数査定など、ゲームの買取金額を上げるための具体的なテクニックと、避けるべきNG行為を解説します。
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
            コツを押さえて<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>での売却を
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            清掃して付属品をそろえたら、複数社で査定を比較してください。ヒカカク！なら最大20社に一括査定できます。
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
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>メルカリと買取業者を比較</p>
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
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ファミコン・スーパーファミコンの買取相場</p>
              </Link>
              <Link href="/price-index/" className="glass-card p-4 card-hover block">
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取価格インデックス</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>実測データで最も高い売り先を確認</p>
              </Link>
              <Link href="/review/kaitori-world/" className="glass-card p-4 card-hover block">
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取ワールドの評判</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>高価買取をうたう業者の実態</p>
              </Link>
            </div>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
