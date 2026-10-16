import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'
import KaitoriWorldCta from '@/components/KaitoriWorldCta';

export const metadata: Metadata = {
  title: '実家のレトロゲームを売るなら？まとめ売り・箱なし・動作不良OKの買取店比較【2026年】',
  description:
    '押し入れや実家に保管しているファミコン/スーファミ/N64/ゲームボーイ等のレトロゲームは、専門店での売却が有利です。駿河屋・まんだらけ・レトログと大手(ブックオフ/ゲオ)の違い、箱なし・黄ばみ・動作不良の扱い、まとめ売りのポイントを解説します。',
  keywords: ['実家 ゲーム 売る', 'レトロゲーム まとめ売り', 'ファミコン 箱なし 買取', 'レトロゲーム 動作不良 買取', '昔のゲーム 売る どこ'],
  openGraph: {
    images: ['/og.png'],
    title: '実家のレトロゲームを売るなら？まとめ売り・箱なし・動作不良OKの買取店比較【2026年】',
    description: '実家のレトロゲームは専門店での売却が有利です。箱なし・黄ばみ・動作不良の扱いとまとめ売りのポイントを解説します。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const storeCompare = [
  { type: 'レトロ専門・コレクター系', stores: '駿河屋・まんだらけ・レトログ', strong: 'レトロ/限定版/希少タイトルの相場に精通し、プレミア品を適正に評価。箱なし・古い周辺機器も値がつきやすい', weak: '宅配中心のため査定にやや時間がかかる。現行新作は大手と同等' },
  { type: '大手チェーン', stores: 'ブックオフ・ゲオ', strong: '店頭で即日現金化が可能。新作・一般中古に強み', weak: 'レトロ/プレミア/箱なしは一律で安めの査定になる傾向' },
  { type: '故障・ジャンクに強い', stores: 'ゲーム王国・カイトリワールド', strong: '故障品・箱なし・まとめ売りにも対応。宅配で送料無料の条件あり', weak: '店舗持ち込みは不可（宅配中心）' },
];

const conditionRows = [
  { c: '箱なし・説明書なし', detail: 'カートリッジ（ファミコン/スーファミ等のカセット）は、箱なしでも買取可能な店が多くあります。ディスク系は箱なしの場合に買取不可とする店もあります。専門店ほど箱なしでも値がつきやすい傾向があります。' },
  { c: '本体の黄ばみ', detail: 'スーファミ等は経年で黄ばみが出やすく、減額要因になります。ただし専門店は黄ばみを前提とした相場で買い取るため、大手より高くなることが多くあります。' },
  { c: '動作不良・ジャンク', detail: 'ゲーム王国など故障品を買い取る店であれば値がつきます。大手は動作不良の本体を買取不可とする場合があります。発送前に動作確認を行ってください。' },
  { c: 'まとめ売り（大量）', detail: '宅配買取の利用に適しています。送料・梱包無料の条件がある店を選ぶと手取りが増えます。1本ずつ持ち込むより査定も早く進みます。' },
];

const tips = [
  { tip: '専門店と大手の両方で査定を比較する', detail: 'レトロ・プレミア品は駿河屋/まんだらけ/レトログ等の専門店、新作が混在する場合は大手も併用することをおすすめします。同じソフトで数倍の差がつくことがあります。' },
  { tip: '箱・説明書・付属品は捨てずに揃える', detail: '完品（箱・説明書あり）とソフトのみでは2〜10倍の差がつくことがあります。実家で探して揃えるだけで、査定額が大きく変わります。' },
  { tip: 'まとめ売りは送料・梱包無料の宅配買取を利用する', detail: '大量のレトロゲームは宅配買取が効率的です。送料・梱包用段ボールが無料の業者を選ぶと、手取りを最大化できます。' },
  { tip: '清掃は軽い拭き取りにとどめ、分解はしない', detail: 'ケースの簡単な拭き取りは査定時の印象を良くします。ただし分解や強い薬剤の使用は、故障・減額のおそれがあるため避けてください。' },
];

const faqs = [
  { q: '実家のレトロゲームは、どこで売るのが最も高いですか？', a: 'レトロ・限定版・希少タイトルは駿河屋・まんだらけ・レトログなどの専門店が高い傾向があります。大手チェーン（ブックオフ・ゲオ）はレトロやプレミア品を一律で安めに査定する傾向があります。新作が混在する場合は大手も併用し、複数社で比較することをおすすめします。' },
  { q: '箱なし・説明書なしのファミコン/スーファミでも売れますか？', a: 'カートリッジ（カセット）タイプは箱なしでも買取可能な店が多く、特に専門店は箱なしを前提とした相場で評価します。完品（箱・説明書付き）と比べると買取価格は下がりますが、処分せずに売却する価値は十分にあります。詳しくは状態別の買取許容度マップもご覧ください。' },
  { q: '動作しない本体や黄ばんだ本体でも買い取ってもらえますか？', a: 'ゲーム王国など故障品・ジャンクを買い取る店であれば値がつきます。黄ばみは減額要因ですが、専門店は黄ばみ前提で買い取るため大手より高くなることが多いです。大手は動作不良の本体を買取不可とする場合があるため、ジャンク品は専門店・宅配買取の利用をおすすめします。' },
  { q: '大量のレトロゲームをまとめて売る方法を教えてください', a: '宅配買取のご利用をおすすめします。送料・梱包用段ボールが無料の業者を選ぶと手取りが増えます。1本ずつ持ち込むより査定も早く、まとめ売りボーナスがある店もあります。' },
];

export default function RetroSellGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "実家のレトロゲームを売るなら？まとめ売り・箱なし・動作不良OKの買取店比較【2026年】", "datePublished": "2026-06-23", "dateModified": "2026-06-23", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: '実家のレトロゲームを売るなら' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'var(--color-accent-soft-strong)', color: 'var(--color-accent)' }}>レトロ買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">実家のレトロゲームを売るなら？</h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            押し入れや実家に保管しているファミコン・スーファミ・N64・ゲームボーイなどの<strong>レトロゲームは、専門店の方が大手より高く売れる傾向</strong>があります。箱なし・黄ばみ・動作不良の品も含め、適正に評価する店の選び方とまとめ売りのポイントを解説します。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>2026年6月時点・各社の公開情報にもとづく整理</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />レトロゲームにおける専門店と大手の査定の違い</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>レトロ・プレミア品は、相場に精通した専門店ほど高く評価されます。大手チェーンはレトロゲームを一律で安めに査定する傾向があります。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead><tr><th>タイプ</th><th>代表的な店</th><th>強み</th><th>弱み</th></tr></thead>
              <tbody>
                {storeCompare.map((s) => (
                  <tr key={s.type}>
                    <td className="font-bold text-sm">{s.type}</td>
                    <td className="text-sm">{s.stores}</td>
                    <td className="text-sm" style={{ color: 'var(--color-electric-green)' }}>{s.strong}</td>
                    <td className="text-sm" style={{ color: 'var(--color-text-light)' }}>{s.weak}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>まとめ：レトロ・希少品は専門店、新作が混在する場合は大手も併用、故障品・まとめ売りは故障品に対応した宅配買取店の利用をおすすめします。複数社を比較することで、より高く売却できます。</p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />箱なし・黄ばみ・動作不良など状態別の扱い</h2>
          <div className="space-y-4">
            {conditionRows.map((c) => (
              <div key={c.c} className="glass-card p-5">
                <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{c.c}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{c.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />実家のレトロゲームを高く売る4つのポイント</h2>
          <div className="space-y-4">
            {tips.map((t, i) => (
              <div key={t.tip} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>{String(i + 1).padStart(2, '0')}</div>
                <div><h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{t.tip}</h3><p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{t.detail}</p></div>
              </div>
            ))}
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
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>保管しているレトロゲームを<span style={{ color: 'var(--color-electric-green)' }}>高く現金化</span>するために</h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>箱なし・黄ばみ・故障がある品も、店を選べば値がつきます。まずは専門店・宅配買取で査定を比較することをおすすめします。</p>
          <div className="flex flex-wrap justify-center gap-4"><Link href="/compare/kaitori-ranking/" className="btn-primary py-3 px-8">おすすめ買取サービスを見る</Link></div>
        </section>

        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/hardware/retro/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>レトロゲーム機の買取相場</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ファミコン・スーファミの相場</p></Link>
            <Link href="/condition-guide/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>状態別 買取許容度マップ</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なし・傷・ジャンク品の売却先</p></Link>
            <Link href="/review/surugaya/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>駿河屋の評判</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>レトロ・限定版に強い専門店</p></Link>
          </div>
        </section>
        <KaitoriWorldCta compact />
        <AuthorBox />
      </div>
    </>
  );
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/software/high-value/" className="block bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl p-5 text-center shadow hover:opacity-95 transition">
            <span className="font-bold text-lg">📈 最新の「高く売れるゲームソフト」ランキングを見る</span>
            <span className="block text-sm opacity-90 mt-1">ブックオフ・ゲオ・駿河屋の公式買取価格を定期的に実測更新中</span>
          </Link>
        </div>
      </section>
}
