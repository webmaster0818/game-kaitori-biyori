import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'
import KaitoriWorldCta from '@/components/KaitoriWorldCta';

export const metadata: Metadata = {
  title: '買取ウリエルの評判・口コミはやばい？【2026年6月】出張買取の実態・対応エリア・費用を徹底検証',
  description:
    '買取ウリエルの評判・口コミを徹底調査。「やばい」と言われる理由の実態、出張買取の対応エリア（関東・中部・近畿・岡山）、ゲーム買取は関東限定である点、出張費・査定料・キャンセル料無料、クーリングオフ対応まで公式情報（2026年6月12日確認）で検証します。',
  keywords: ['買取ウリエル', 'ウリエル 口コミ', 'ウリエル ゲーム買取', '出張買取 ゲーム', 'ゲーム 即日現金化'],
  openGraph: {
    title: '買取ウリエルの評判・口コミはやばい？【2026年6月】徹底検証',
    description: '買取ウリエルの評判と「やばい」と言われる理由の実態を公式情報で検証。出張買取・即日現金化の条件を解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: '出張買取対応', description: '自宅にいながらプロの査定士が訪問して査定・買取を行います。重いゲーム機や大量のソフトを運ぶ手間がなく、忙しい方や荷物が多い方に最適です。予約も簡単にWebから行えます。' },
  { title: '経験豊富な査定士', description: '買取業界で経験を積んだプロの査定士が担当。ゲームだけでなく幅広いジャンルの知識を持っているため、付加価値を見逃さず適正な価格で査定してくれます。' },
  { title: '即日現金化', description: '出張買取なら査定後その場で現金を受け取れます。急な出費や引っ越し前の処分など、すぐに現金が必要な場面で非常に便利です。査定額を聞いてから断ってもキャンセル料はかかりません。' },
  { title: '買取方法は出張・催事の2種類', description: '現在の買取方法は出張買取と催事買取の2種類です（公式サイトの宅配・店頭買取ページは2026年6月時点で案内終了）。出張は関東・中部・近畿・岡山に対応していますが、ゲーム買取の対象エリアは東京・神奈川・千葉・埼玉と公式に記載されています。' },
];

const steps = [
  { step: 1, title: 'Web・電話で申込み', description: '公式サイトのフォームまたは電話で出張買取を申し込みます。希望日時や売りたい品目を伝えましょう。最短で翌日以降の訪問に対応、相談だけでもOKです。' },
  { step: 2, title: '査定士が訪問', description: '指定日時に査定士が自宅に訪問。玄関先での査定や女性スタッフの指名も可能と公式に明記されています。' },
  { step: 3, title: 'その場で査定・価格提示', description: '一点一点丁寧に査定し、その場で買取価格を提示。不明点があれば質問できます。まとめ売りでの上乗せ交渉も可能です。' },
  { step: 4, title: '現金受取り・完了', description: '査定額に納得したらその場で現金を受け取り。キャンセル無料で、買取成立後も8日以内ならクーリングオフ制度の対象です。' },
];

const targets = [
  { category: 'ゲーム関連', items: ['ゲーム機本体（Switch・PS5・PS4等）', 'ゲームソフト各種', 'コントローラー・周辺機器', 'ゲーミングデバイス'] },
  { category: 'ホビー・趣味', items: ['フィギュア', 'プラモデル', 'トレーディングカード', 'DVD・Blu-ray'] },
  { category: 'その他対応品目', items: ['ブランド品', '貴金属・ジュエリー', '家電製品', '楽器', '骨董品・美術品'] },
];

const faqs = [
  { q: '出張買取は本当に無料ですか？', a: 'はい、出張費・査定料・キャンセル料すべて無料です。査定結果に納得できなければ、その場でお断りいただいて構いません。費用は一切発生しません。' },
  { q: '出張買取の対応エリアはどこですか？', a: '公式サイトでは関東（茨城・栃木・埼玉・千葉・東京・神奈川）、中部（岐阜・静岡・愛知）、近畿（三重・滋賀・京都・大阪・兵庫・奈良・和歌山）、中国（岡山）が出張対応エリアとされています。ただしゲーム買取ページの対象エリアは東京・神奈川・千葉・埼玉の1都3県に限定されているため、ゲーム目的の方は事前確認をおすすめします。' },
  { q: '宅配買取や店頭買取はできますか？', a: '2026年6月時点で、公式サイトの宅配買取・店頭買取の案内ページは閉鎖されており、現在の買取方法は出張買取と催事買取の2種類です。宅配で売りたい場合は宅配対応の他社（カイトリワールド・ゲーム王国等）を検討しましょう。' },
  { q: 'ウリエルは「やばい」「怪しい」という評判は本当ですか？', a: '運営元は株式会社クオーレ（愛知県公安委員会 古物商許可 第542791100800号・2011年設立）で、正規の買取事業者です。「やばい」と言われる背景には、出張買取業界全体への警戒感、フリマ相場と買取査定額の差、対面交渉で断りにくいと感じる人がいることが挙げられます。出張費・査定料・キャンセル料は無料で、クーリングオフにも対応しているため、査定額に納得できなければその場で断れば費用は発生しません。' },
  { q: 'ゲーム以外のものも一緒に売れますか？', a: 'はい、買取ウリエルは20種類以上の品目に対応しています。ブランド品・貴金属・家電・楽器など、ゲームと一緒にまとめて売ることで査定額がアップする場合もあります。' },
  { q: '査定にはどのくらいの時間がかかりますか？', a: '出張買取の場合、品数にもよりますが通常30分〜1時間程度です。ゲームソフトが大量にある場合はもう少し時間がかかることがあります。事前に品数をお伝えいただけるとスムーズです。' },
  { q: '箱や付属品がなくても買取してもらえますか？', a: 'はい、箱・説明書・付属品がなくても買取可能です。ただし、付属品が揃っている方が査定額は高くなります。特にゲーム機本体は付属品の有無が査定額に大きく影響します。' },
  { q: '楽器も買い取ってもらえますか？', a: 'はい、ギター・ベース・バイオリンなどの弦楽器、サックス・フルートなどの管楽器、三味線・琴などの和楽器、電子楽器が買取対象です。ただし楽器買取の対応エリアは公式ページで関東（東京・埼玉・千葉・神奈川）限定とされています。ゲームと楽器をまとめて売れるのはウリエルの特徴です。' },
];

export default function UrielReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "買取ウリエルの評判・口コミはやばい？出張買取の実態・対応エリアを徹底検証", "datePublished": "2026-03-15", "dateModified": "2026-07-02", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: '買取ウリエル' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="rank-badge rank-badge-2">2</span>
            <span className="tag-pill text-xs" style={{ background: 'rgba(245,158,11,0.2)', color: '#FBBF24' }}>おすすめ2位</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            買取ウリエル<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>徹底レビュー</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            出張買取に強みを持つ総合買取サービス。経験豊富な査定士が自宅まで訪問し、ゲームを含む20種類以上の品目をその場で査定・即日現金化。関東・関西エリアで利用でき、まとめて売りたい方に特におすすめです。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="btn-accent py-2.5 px-6">
              公式サイトで出張買取を申込む
            </a>
            <Link href="/" className="btn-outline py-2.5 px-6" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}>
              ランキングに戻る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Conclusion */}
        <section className="mb-12">
          <div className="glass-card p-6" style={{ borderLeft: '4px solid var(--color-accent-orange)' }}>
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>結論：1都3県で出張・即日現金化したい人向け。古物商許可ありの正規事業者</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              買取ウリエルは株式会社クオーレ（愛知県公安委員会 古物商許可 第542791100800号・2011年設立）が運営する正規の買取事業者です。出張費・査定料・キャンセル料はすべて無料で、買取成立後8日以内のクーリングオフにも対応しているため、「やばい・怪しい」という検索が出るほどの根拠は確認できません（断定ではなく確認項目ベースの評価）。ゲーム買取の対象エリアが<strong>東京・神奈川・千葉・埼玉</strong>に限定されている点と、宅配・店頭は2026年6月時点で案内終了している点だけは事前に確認してください。重い荷物を運ばずその場で現金化したい1都3県の方に向きます。
            </p>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              関連：<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>今週どこが一番高いか価格を確認する</Link>／<Link href="/condition-guide/" style={{ color: 'var(--color-electric-green)' }}>箱なし・傷ありでも売れるか状態別マップで確認する</Link>／<Link href="/compare/mercari-vs-kaitori/" style={{ color: 'var(--color-electric-green)' }}>メルカリと買取どちらが得か手取り額をシミュレーションする</Link>
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />買取ウリエルの4つの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Company Info */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />運営会社情報（公式サイトより）</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>運営会社</th><td className="py-2">株式会社クオーレ（CUORE GROUP・2011年3月設立）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>所在地</th><td className="py-2">愛知県大府市柊山町8-53-2</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>古物商許可</th><td className="py-2">愛知県公安委員会 第542791100800号</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>買取方法</th><td className="py-2">出張買取・催事買取（宅配・店頭の案内ページは2026年6月時点で終了）</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>出張エリア</th><td className="py-2">関東（茨城・栃木・埼玉・千葉・東京・神奈川）/中部（岐阜・静岡・愛知）/近畿（三重・滋賀・京都・大阪・兵庫・奈良・和歌山）/岡山 ※ゲーム買取の対象エリアは東京・神奈川・千葉・埼玉</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>費用</th><td className="py-2">出張費・査定料・キャンセル料すべて無料。その場で現金払い</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>その他</th><td className="py-2">女性スタッフ指名・玄関先査定可。買取成立後8日以内はクーリングオフ対応</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：買取ウリエル公式サイト（会社概要・出張買取・ゲーム買取ページ）2026年6月12日確認</p>
          </div>
        </section>

        {/* Fee 4-point */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />手数料は？出張費・査定料・キャンセル料・返送料【4点チェック】</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full text-sm" style={{ color: 'var(--color-text-light)' }}>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>出張費</th><td className="py-2">無料</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>査定料</th><td className="py-2">無料</td></tr>
                <tr className="border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>キャンセル料</th><td className="py-2">無料。査定額を聞いてから断ってもよく、買取成立後8日以内はクーリングオフに対応</td></tr>
                <tr><th className="text-left py-2 pr-4 whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>返送料</th><td className="py-2">－（出張買取のため該当なし。宅配・店頭は2026年6月時点で案内終了）</td></tr>
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：買取ウリエル公式サイト（出張費・査定料・キャンセル料すべて無料）2026年6月12日確認。ゲーム単体を高く売りたい場合は<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>毎週実測の買取価格インデックス</Link>でゲーム専門店の価格とも比較を。</p>
          </div>
        </section>

        {/* Suspicious? */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />「やばい・怪しい」と言われる理由と実態</h2>
          <div className="space-y-4">
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>理由1：出張買取業界全体への警戒感</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>過去に業界で問題になった「押し買い」のイメージから、出張買取そのものを警戒する人が多いのが実情です。ウリエル自体は古物商許可を持つ正規事業者で、査定額を聞いてから断ってもキャンセル料はかからず、買取成立後8日以内のクーリングオフにも対応しています。</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>理由2：フリマ相場と査定額のギャップ</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>レビューサイトでは「思ったより査定が低かった」という声が一定数あります。買取店は在庫リスクや人件費を差し引いて査定するため、メルカリ等の販売相場より低くなるのは構造的なものです。即日現金化・手間ゼロの対価と考えるのが現実的です。</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>理由3：対面で断りにくいと感じる人がいる</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>口コミには「その場の流れで売ってしまった」という声もあります。査定額に納得できなければその場で断ってよく、費用は一切かかりません。不安な場合は玄関先査定や女性スタッフの指名を活用しましょう。</p>
            </div>
          </div>
        </section>

        {/* Pros/Cons */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />メリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-electric-green)' }}>メリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>+ 自宅にいながら出張買取で楽々</li>
                <li>+ その場で現金化できる</li>
                <li>+ ゲーム以外も20種類以上まとめて売れる</li>
                <li>+ 出張費・査定料・キャンセル料すべて無料</li>
                <li>+ 経験豊富な査定士による丁寧な査定</li>
                <li>+ まとめ売りで査定額アップの可能性</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- 出張買取は関東・関西エリア限定</li>
                <li>- ゲーム専門サービスではない</li>
                <li>- レトロゲームの専門性はヒカカク！に劣る</li>
                <li>- 出張訪問時に在宅が必要</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />利用手順（4ステップ）</h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-accent-orange)', opacity: 0.3 }}>
                  {String(s.step).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{s.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Target Items */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />買取対象</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {targets.map((t) => (
              <div key={t.category} className="glass-card p-5">
                <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>{t.category}</h3>
                <ul className="space-y-1.5 text-sm" style={{ color: 'var(--color-text-light)' }}>
                  {t.items.map((item) => <li key={item}>・{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs mt-4" style={{ color: 'var(--color-text-lighter)' }}>
            ※ 上記以外にも多数の品目に対応しています。詳しくは公式サイトをご確認ください。
          </p>
        </section>

        {/* Review Tendency */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />口コミの傾向（レビューサイト・SNS調査）</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-electric-green)' }}>好意的な口コミに多い内容</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・出張買取で自宅まで来てもらえるのが楽だった</li>
                <li>・ゲームとブランド品・貴金属などをまとめて売れて便利</li>
                <li>・その場で現金を受け取れるスピード感が良かった</li>
                <li>・査定士の対応が丁寧だった</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>否定的な口コミに多い内容</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>・ゲーム単体の査定額はゲーム専門店より安い場合がある</li>
                <li>・レトロゲームの希少タイトルは専門店の方が高値がつきやすい</li>
                <li>・対応エリアが関東・関西中心で利用できない地域がある</li>
              </ul>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※主要レビューサイト・比較メディアに掲載されている口コミの傾向を当サイトで整理したものです（2026年7月調査）。個別の体験を保証するものではありません。ゲーム単体を高く売りたい場合は、<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>毎週実測の買取価格インデックス</Link>でゲーム専門店の価格と比較してから判断するのがおすすめです。</p>
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
            買取ウリエルで<span style={{ color: 'var(--color-accent-orange)' }}>出張買取</span>を試してみませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            自宅にいながらプロの査定士がゲームを査定。その場で現金化できます。出張費・査定料は完全無料です。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="btn-accent py-3 px-8">
              無料で出張買取を申込む
            </a>
            <Link href="/" className="btn-outline py-3 px-8" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#CBD5E1' }}>
              他のサービスと比較
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のサービスもチェック</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/review/hikakaku/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-green text-xs mb-2 inline-block">1位</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社一括査定の買取比較サイト</p>
            </Link>
            <Link href="/review/tifana/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-blue text-xs mb-2 inline-block">3位</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ティファナ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ホビー系買取に強いリサイクルショップ</p>
            </Link>
          </div>
        </section>
        {/* 関連記事 */}
        <section style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(0,230,118,0.05)', borderRadius: '12px', borderLeft: '3px solid var(--color-electric-green)' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>関連記事</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取価格インデックス（今どこが一番高い？）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/condition-guide/" style={{ color: 'var(--color-electric-green)' }}>状態別ゲーム買取 許容度マップ（箱なし・傷・ジャンク）</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/mercari-vs-kaitori/" style={{ color: 'var(--color-electric-green)' }}>メルカリ vs 買取 手取り額シミュレーション</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/kaitori-ranking/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取おすすめランキング15選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/ps5/" style={{ color: 'var(--color-electric-green)' }}>PS5買取おすすめ3選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/switch/" style={{ color: 'var(--color-electric-green)' }}>Switch買取おすすめ3選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/method/shop/" style={{ color: 'var(--color-electric-green)' }}>店舗持ち込み買取の流れとコツ</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/preparation/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取前の準備ガイド</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/shop-vs-online/" style={{ color: 'var(--color-electric-green)' }}>店舗買取 vs 宅配買取の比較</Link></li>
          </ul>
        </section>

        <KaitoriWorldCta compact />
        <AuthorBox />
      </div>
    </>
  );
}
