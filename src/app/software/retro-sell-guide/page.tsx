import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: '実家のレトロゲームを売るなら？まとめ売り・箱なし・動作不良OKの買取店比較【2026年】',
  description:
    '押し入れ・実家に眠るファミコン/スーファミ/N64/ゲームボーイ等のレトロゲームを売るなら専門店が有利。駿河屋・まんだらけ・レトログと大手(ブックオフ/ゲオ)の違い、箱なし・黄ばみ・動作不良の扱い、まとめ売りのコツを解説します。',
  keywords: ['実家 ゲーム 売る', 'レトロゲーム まとめ売り', 'ファミコン 箱なし 買取', 'レトロゲーム 動作不良 買取', '昔のゲーム 売る どこ'],
  openGraph: {
    title: '実家のレトロゲームを売るなら？まとめ売り・箱なし・動作不良OKの買取店比較【2026年】',
    description: '実家のレトロゲームは専門店が有利。箱なし・黄ばみ・動作不良の扱いとまとめ売りのコツを解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const storeCompare = [
  { type: 'レトロ専門・コレクター系', stores: '駿河屋・まんだらけ・レトログ', strong: 'レトロ/限定版/希少タイトルの相場に精通。プレミア品を適正評価。箱なし・古い周辺機器も値がつきやすい', weak: '宅配中心で査定にやや時間。現行新作は大手と同等' },
  { type: '大手チェーン', stores: 'ブックオフ・ゲオ', strong: '店頭で即日現金化。新作・一般中古は強い', weak: 'レトロ/プレミア/箱なしは一律安めになりがち＝「大手の死角」' },
  { type: '故障・ジャンクに強い', stores: 'ゲーム王国・カイトリワールド', strong: '故障品・箱なし・まとめ売りに寛容。宅配で送料無料の条件あり', weak: '店舗持ち込みは不可（宅配中心）' },
];

const conditionRows = [
  { c: '箱なし・説明書なし', detail: 'カートリッジ（ファミコン/スーファミ等のカセット）は箱なしでも買取可能な店が多い。ディスク系は箱なしだと不可の店もある。専門店ほど箱なしでも値がつきやすい。' },
  { c: '本体の黄ばみ', detail: 'スーファミ等は経年で黄ばみが出やすく減額要因。ただし専門店は「黄ばみ前提の相場」で買い取るため、大手より高くなることが多い。' },
  { c: '動作不良・ジャンク', detail: 'ゲーム王国など故障品OKの店なら値がつく。大手は動作不良本体を買取不可にする場合あり。送る前に動作確認を。' },
  { c: 'まとめ売り（大量）', detail: '宅配買取が便利。送料・梱包無料の条件がある店を選ぶと手取りが増える。1本ずつより査定も早い。' },
];

const tips = [
  { tip: 'まず「専門店」と「大手」両方で査定を比較', detail: 'レトロ・プレミア品は駿河屋/まんだらけ/レトログ等の専門店、新作混在なら大手も。同じソフトで数倍差がつくことがあります。' },
  { tip: '箱・説明書・付属品は捨てずに揃える', detail: '完品（箱・説明書あり）と裸では2〜10倍の差。実家で探して揃えるだけで査定額が大きく変わります。' },
  { tip: 'まとめ売りは送料・梱包無料の宅配を使う', detail: '大量のレトロは宅配買取が効率的。送料・梱包ダンボール無料の業者を選べば手取りを最大化できます。' },
  { tip: '清掃は軽くでOK・分解はしない', detail: 'ケースの簡単な拭き取りは印象アップ。ただし分解や強い薬剤は故障・減額リスクなので避けましょう。' },
];

const faqs = [
  { q: '実家のレトロゲーム、どこで売るのが一番高いですか？', a: 'レトロ・限定版・希少タイトルは駿河屋・まんだらけ・レトログなどの専門店が高い傾向です。大手チェーン（ブックオフ・ゲオ）はレトロやプレミア品を一律安めに査定しがちな「死角」があります。新作が混在する場合は大手も併用し、複数社で比較するのが確実です。' },
  { q: '箱なし・説明書なしのファミコン/スーファミでも売れますか？', a: 'カートリッジ（カセット）タイプは箱なしでも買取可能な店が多く、特に専門店は箱なし前提の相場で評価してくれます。完品（箱・説明書付き）と比べると下がりますが、捨てずに売る価値は十分あります。詳しくは状態別の買取許容度マップもご覧ください。' },
  { q: '動作しない・黄ばんだ本体でも買い取ってもらえますか？', a: 'ゲーム王国など故障品・ジャンクに寛容な店なら値がつきます。黄ばみは減額要因ですが、専門店は黄ばみ前提で買い取るため大手より高くなることが多いです。大手は動作不良本体を買取不可にする場合があるので、ジャンクは専門店・宅配を選びましょう。' },
  { q: '大量のレトロゲームをまとめて売りたいです', a: '宅配買取が便利です。送料・梱包ダンボールが無料の業者を選べば手取りが増えます。1本ずつ持ち込むより査定も早く、まとめ売りボーナスがある店もあります。' },
];

export default function RetroSellGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "実家のレトロゲームを売るなら？まとめ売り・箱なし・動作不良OKの買取店比較【2026年】", "datePublished": "2026-06-23", "dateModified": "2026-06-23", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: '実家のレトロゲームを売るなら' }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(0,230,118,0.2)', color: '#00E676' }}>レトロ買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">実家のレトロゲームを売るなら？</h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            押し入れや実家に眠るファミコン・スーファミ・N64・ゲームボーイ。これらの<strong>レトロゲームは「専門店」が大手より高い</strong>のが鉄則です。箱なし・黄ばみ・動作不良でも諦めず、適正に評価してくれる店の選び方とまとめ売りのコツを解説します。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>2026年6月時点・各社の公開情報にもとづく整理</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />レトロは「専門店 vs 大手」で差がつく（大手の死角）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>レトロ・プレミア品は、相場に精通した専門店ほど高く評価されます。大手チェーンはレトロを一律安めに査定しがちで、ここが「大手の死角」です。</p>
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
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>結論：レトロ・希少品は専門店、新作混在なら大手も併用、故障・まとめ売りは宅配の故障OK店。複数社の比較が最も高く売れます。</p>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />箱なし・黄ばみ・動作不良…状態別の扱い</h2>
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />実家のレトロを高く売る4つのコツ</h2>
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
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>眠っているレトロゲームを<span style={{ color: 'var(--color-electric-green)' }}>高く現金化</span></h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>箱なし・黄ばみ・故障でも、店を選べば値がつきます。まずは専門店・宅配で査定を比較しましょう。</p>
          <div className="flex flex-wrap justify-center gap-4"><Link href="/compare/kaitori-ranking/" className="btn-primary py-3 px-8">おすすめ買取サービスを見る</Link></div>
        </section>

        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/hardware/retro/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>レトロゲーム機の買取相場</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ファミコン・スーファミの相場</p></Link>
            <Link href="/condition-guide/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>状態別 買取許容度マップ</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なし・傷・ジャンクはどこで売れる？</p></Link>
            <Link href="/review/surugaya/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>駿河屋の評判</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>レトロ・限定版に強い専門店</p></Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
