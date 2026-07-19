import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ヒカカク！の評判・口コミは怪しい？【2026年7月】一括査定のしつこい連絡・デメリットを徹底検証',
  description:
    'ヒカカク！のゲーム一括査定の評判・口コミを徹底検証。「怪しい」「連絡がしつこい」と言われる理由の実態、最大20社一括査定の仕組み、ヒカカク自体は買取しない点、メリット・デメリットを整理。あわせて当サイトが毎週実測する買取価格DBで、どこが今一番高いかも比較できます（2026年6月確認）。',
  keywords: ['ヒカカク 評判', 'ヒカカク 口コミ', 'ヒカカク 怪しい', 'ヒカカク ゲーム買取', 'ゲーム 一括査定', 'ゲーム買取 比較'],
  openGraph: {
    title: 'ヒカカク！の評判・口コミは怪しい？【2026年7月】一括査定のデメリットを徹底検証',
    description: 'ヒカカク！の評判・口コミと「怪しい・連絡がしつこい」の実態を検証。最大20社一括査定の仕組みとデメリットを解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: '最大20社一括査定', description: '一度の申込みで最大20社の買取業者から見積もりが届きます。手間なく最高値を見つけられる業界最大級の比較プラットフォームです。面倒な個別申込みは不要です。' },
  { title: 'ゲーム専門業者多数', description: 'ゲーム買取に特化した専門業者が多数参加。レトロゲームからSwitch・PS5の最新ゲームまで、専門知識を持った業者による適正な査定が受けられます。' },
  { title: '完全無料で利用可能', description: '査定申込みから結果の受取りまで完全無料。利用料・手数料は一切かかりません。気軽に複数社の買取価格を比較できます。' },
  { title: '全国対応', description: '参加業者は全国に展開。宅配買取対応の業者が多いため、地方にお住まいの方でも最高値での買取が実現できます。一部業者は出張買取・店舗買取にも対応。' },
];

const steps = [
  { step: 1, title: '商品情報を入力', description: '売りたいゲームの名前・状態・付属品の有無をフォームに入力します。写真のアップロードでより正確な査定が可能です。' },
  { step: 2, title: '一括査定を申し込む', description: '入力内容を確認して送信するだけ。最大20社の買取業者に一括で査定依頼が送られます。個別に申し込む手間はありません。' },
  { step: 3, title: '査定結果を比較', description: '各業者から査定結果が届きます。買取価格・サービス内容・口コミを比較して、最も条件の良い業者を選びましょう。' },
  { step: 4, title: '買取を依頼', description: '納得のいく業者が見つかったら、その業者の手順に従って買取を依頼。宅配キットの手配から集荷まで、業者がサポートしてくれます。' },
];

const targets = [
  { category: 'ゲーム機本体', items: ['Nintendo Switch（有機EL・通常・Lite）', 'PlayStation 5 / PS4 / PS3', 'Xbox Series X/S', 'Nintendo 3DS / DS', 'レトロゲーム機（ファミコン・スーファミ・ゲームボーイ等）'] },
  { category: 'ゲームソフト', items: ['Switch用ソフト', 'PS5 / PS4用ソフト', 'レトロゲームソフト', '限定版・コレクターズエディション', '未開封品'] },
  { category: '周辺機器', items: ['コントローラー', 'ヘッドセット', 'アーケードスティック', 'メモリーカード', 'ケーブル・充電器'] },
];

const faqs = [
  { q: 'ヒカカク！の利用に料金はかかりますか？', a: 'いいえ、完全無料です。査定申込みから結果の受取りまで、利用料・手数料は一切かかりません。何度利用しても無料です。' },
  { q: '査定結果はどのくらいで届きますか？', a: '早い業者では当日中に査定結果が届きます。通常は1〜3営業日程度です。業者数が多いほど全ての結果が揃うまでに時間がかかる場合があります。' },
  { q: '査定後にキャンセルできますか？', a: 'はい、査定結果に納得できなければキャンセル可能です。査定はあくまで見積もりなので、買取を強制されることはありません。' },
  { q: 'レトロゲームでも高値がつきますか？', a: 'はい、ヒカカク！にはレトロゲーム専門の買取業者が多数参加しています。特に箱・説明書付きの完品や希少タイトルは、一般的なリサイクルショップより大幅に高い査定がつくことがあります。' },
  { q: '壊れたゲーム機も査定してもらえますか？', a: 'ジャンク品の買取に対応している業者も参加しています。故障の程度によりますが、まずは査定を申し込んでみることをおすすめします。パーツ取り目的での買取もあります。' },
  { q: '個人情報は安全ですか？', a: 'ヒカカク！はプライバシーポリシーに基づき個人情報を適切に管理しています。査定情報は参加業者にのみ共有され、第三者への提供はありません。SSL暗号化通信にも対応しています。' },
];

export default function HikakakuReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ヒカカク！の口コミ・評判｜最大20社一括査定のゲーム買取比較", "datePublished": "2026-03-15", "dateModified": "2026-06-18", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ヒカカク！' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="rank-badge rank-badge-1">1</span>
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>おすすめ1位</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ヒカカク！<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>徹底レビュー</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            最大20社に一括査定できる国内最大級の買取比較サイト。ゲーム機・レトロゲーム・ゲームソフトの買取に対応し、無料で最高値を見つけられます。複数社の見積もりを手間なく比較したい方に最適なサービスです。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
              公式サイトで無料査定
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
          <div className="glass-card p-6" style={{ borderLeft: '4px solid var(--color-electric-green)' }}>
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>結論：ヒカカク！は買取業者ではなく「一括査定の窓口」。怪しくはないが仕組みの理解が必須</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              ヒカカク！は最大20社に一括で査定依頼を送れる買取比較プラットフォームで、ヒカカク！自体が買取を行うわけではありません。「怪しい」「連絡がしつこい」という声は、申込後に複数の買取業者から個別に連絡が来る一括査定の仕組みに由来するもので、詐欺的なサービスという意味ではありません。手間なく相見積もりを取って最高値を狙いたい人に向きますが、連絡の多さが苦手な人には不向きです。まず「今どこが一番高いか」を知りたい方は、当サイトが<strong>毎週実測している買取価格DB</strong>で先に相場を確認してから使うと、査定額が妥当かどうか判断しやすくなります。
            </p>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              関連：<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>今週どこが一番高いか価格を確認する</Link>／<Link href="/condition-guide/" style={{ color: 'var(--color-electric-green)' }}>箱なし・傷ありでも売れるか状態別マップで確認する</Link>／<Link href="/compare/mercari-vs-kaitori/" style={{ color: 'var(--color-electric-green)' }}>メルカリと買取どちらが得か手取り額をシミュレーションする</Link>
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ヒカカク！の4つの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pros/Cons */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />メリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-electric-green)' }}>メリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>+ 一度の申込みで最大20社に査定依頼</li>
                <li>+ 完全無料で利用できる</li>
                <li>+ ゲーム専門の買取業者が多数参加</li>
                <li>+ レトロゲームの査定に強い</li>
                <li>+ 全国対応（宅配買取メイン）</li>
                <li>+ 口コミ・評判を参考にできる</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- 複数業者から連絡が来る場合がある</li>
                <li>- 地域により対応業者数に差がある</li>
                <li>- ヒカカク！自体が買取を行うわけではない</li>
                <li>- 実際の買取価格は査定後に変わる場合あり</li>
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
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>
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
        </section>

        {/* サービス概要・会社情報 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ヒカカク!のサービス概要・会社情報（2026年6月18日時点）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <tbody>
                <tr><th>運営会社</th><td className="text-sm">株式会社じげん（2024年にヒカカク!事業を承継・合併。旧運営は株式会社ジラフ）</td></tr>
                <tr><th>所在地</th><td className="text-sm">東京都港区虎ノ門三丁目4番8号</td></tr>
                <tr><th>サービス形態</th><td className="text-sm">買取価格の比較・最大20社への一括査定を仲介するプラットフォーム（<strong>ヒカカク!自身は買い取らず</strong>、複数の買取業者を仲介）</td></tr>
                <tr><th>利用料金</th><td className="text-sm">完全無料</td></tr>
                <tr><th>申込フロー</th><td className="text-sm">商品情報を入力→最短1日で各社からメール→価格を比較→業者を選んで宅配・出張・店頭で買取（電話番号の入力が必須）</td></tr>
                <tr><th>注意点</th><td className="text-sm">表示・査定額は参考値で保証されない（仮査定と本査定に差が出ることがある）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ヒカカク!公式（サービス案内・運営会社変更のお知らせ）、株式会社ジラフ プレスリリース（2026年6月18日閲覧）。ヒカカク!は買取業者ではなく「買取の比較・一括査定サイト」です。</p>
        </section>

        {/* 口コミ傾向（出典付き） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />口コミ・評判の傾向（営業電話の実態も）</h2>
          <div className="glass-card p-6">
            <p className="text-sm mb-3" style={{ color: 'var(--color-text-light)' }}>
              ヒカカク!公式掲載の総合評価は<strong>3.4点（5点満点）</strong>で、悪い評価が約32.5%（2026年6月18日閲覧）。「最大20社に一括依頼する」仕組み上、<strong>複数業者から営業電話が集中しやすい</strong>のが最大の注意点です（公式の口コミページ自体が主要な課題として明記）。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold mb-1" style={{ color: 'var(--color-electric-green)' }}>良い評価の傾向</p>
                <ul className="space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・一度の入力で複数社の査定を比較でき、高い店を探しやすい</li>
                  <li>・完全無料で、査定のみの利用も可能</li>
                  <li>・買取相場や業者の口コミを調べられる</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-1" style={{ color: 'var(--color-accent-orange)' }}>気になる評価の傾向</p>
                <ul className="space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・<strong>複数業者からの営業電話が集中しやすい</strong></li>
                  <li>・表示価格は参考値で、本査定と差が出ることがある</li>
                  <li>・電話番号の入力が必須</li>
                </ul>
              </div>
            </div>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>営業電話が苦手な方は、申込時に「連絡はメール希望」と明記するのが有効です（強引に電話する業者もいるとの指摘あり）。出典：ヒカカク!口コミページ（2026年6月18日閲覧）。当サイトでは体験談の創作は行っていません。</p>
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
            ヒカカク！で<span style={{ color: 'var(--color-electric-green)' }}>無料一括査定</span>してみませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            最大20社の買取価格を比較して、あなたのゲームを最高値で売りましょう。申込みは無料・簡単です。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              無料で一括査定する
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
            <Link href="/review/uriel/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-orange text-xs mb-2 inline-block">2位</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取ウリエル</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>出張買取対応・即日現金化</p>
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
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/kaitori-ranking/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取おすすめランキング15選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/switch/" style={{ color: 'var(--color-electric-green)' }}>Switch買取おすすめ3選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/retro/" style={{ color: 'var(--color-electric-green)' }}>レトロゲーム機買取ガイド</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/method/online/" style={{ color: 'var(--color-electric-green)' }}>宅配買取の流れとコツ</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/price-guide/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取価格ガイド</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/shop-vs-online/" style={{ color: 'var(--color-electric-green)' }}>店舗買取 vs 宅配買取の比較</Link></li>
          </ul>
        </section>

        <AuthorBox />
      </div>
    </>
  );
}
