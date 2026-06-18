import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ネットオフの口コミ・評判｜ゲーム・本・DVD一括買取の実績1億点超',
  description:
    'ネットオフのゲーム買取を徹底レビュー。ゲーム・本・CD・DVDまとめ買取サービスの特徴・メリット・デメリット・利用手順を詳しく解説。買取実績1億点超、まとめ売りボーナス、Tポイント連携が魅力。',
  keywords: ['ネットオフ 買取', 'ネットオフ 口コミ', 'ネットオフ ゲーム買取', 'ゲーム 本 まとめ売り', 'ネットオフ 評判'],
  openGraph: {
    title: 'ネットオフの口コミ・評判｜ゲーム・本・DVD一括買取の実績1億点超',
    description: 'ネットオフのゲーム買取を徹底レビュー。まとめ買取の特徴とTポイント連携を解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: 'ゲーム・本・CD・DVDまとめ買取', description: 'ゲームソフト・ゲーム機だけでなく、本・CD・DVD・ブルーレイなど幅広いジャンルをまとめて買取してくれます。引っ越しや大掃除で大量に不用品を処分したい方にぴったりのサービスです。' },
  { title: 'まとめ売りボーナス', description: '買取点数が多いほどボーナスが加算される「まとめ売り」キャンペーンを常時実施。特にゲームと本をまとめて売ると大きなボーナスが付くことがあり、トータルの買取額がアップします。' },
  { title: '買取実績1億点超の安心感', description: '累計買取実績1億点を超える国内有数の宅配買取サービス。豊富な実績に裏打ちされた安定した査定基準と、信頼できるサービス運営が特徴です。' },
  { title: 'Tポイント連携', description: '買取金額に応じてTポイントが貯まります。現金受取りに加えてTポイントでの受取りも選択可能。全国のTポイント加盟店で利用できるため、日常生活でお得に活用できます。' },
];

const steps = [
  { step: 1, title: '買取申込み', description: 'ネットオフ公式サイトから買取申込み。売りたい商品のジャンルや点数を入力します。初めての方は会員登録（無料）も同時に行えます。' },
  { step: 2, title: '梱包・集荷', description: '売りたい商品を段ボールに梱包。集荷日を指定すれば自宅まで取りに来てくれます。段ボールが必要な場合は無料で届けてもらえます。' },
  { step: 3, title: '査定', description: '到着後、スタッフが1点ずつ査定。まとめ売りボーナスも自動で加算されます。査定結果はメールで通知されます。' },
  { step: 4, title: '入金', description: '査定額に同意すると、銀行口座への振込またはTポイントでの付与。通常3〜5営業日で入金されます。' },
];

const faqs = [
  { q: 'ネットオフの送料は無料ですか？', a: 'はい、買取点数が一定数以上（通常5点以上）であれば送料無料です。段ボールも無料で届けてもらえます。少量の場合は送料がかかることがありますので、公式サイトで条件をご確認ください。' },
  { q: 'まとめ売りボーナスの内容は？', a: 'キャンペーン内容は時期によって変動しますが、例えば「50点以上のまとめ売りで買取金額30%UP」「本とゲーム同時で20%UP」などのボーナスが付くことがあります。最新のキャンペーンは公式サイトでご確認ください。' },
  { q: 'レトロゲームも買取対象ですか？', a: 'ネットオフではPS3・Wii世代以降のゲームが主な対象です。ファミコンやスーパーファミコンなどのレトロゲームは対象外となることが多いです。レトロゲームは駿河屋などの専門店がおすすめです。' },
  { q: '査定にどのくらいかかりますか？', a: '商品到着後、通常3〜7営業日で査定結果がメールで届きます。大量の商品の場合や繁忙期はもう少し時間がかかる場合があります。' },
  { q: 'Tポイントでの受取り方法は？', a: '査定額承諾時にTポイントでの受取りを選択できます。Tカード番号を登録しておくと、査定完了後にポイントが付与されます。現金振込とTポイントの併用はできません。' },
  { q: '査定に納得できない場合は？', a: 'キャンセル可能です。ただし返送を希望する場合は返送料がお客様負担となります。また、「値段がつかない商品はネットオフで無料引取り」を選択することも可能です。' },
];

export default function NetoffReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ネットオフの口コミ・評判｜ゲーム・本・DVD一括買取の実績1億点超", "datePublished": "2026-03-15", "dateModified": "2026-06-18", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ネットオフ' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>まとめ売り</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ネットオフ<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>徹底レビュー</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲーム・本・CD・DVDなど何でもまとめて売れる宅配買取サービス。買取実績は累計1億点を超え、まとめ売りボーナスでトータルの買取額がアップします。Tポイント連携で日常使いにも便利。大量の不用品をワンストップで処分したい方に最適です。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.netoff.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-2.5 px-6">
              公式サイトで買取申込み
            </a>
            <Link href="/" className="btn-outline py-2.5 px-6" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}>
              ランキングに戻る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Features */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ネットオフの4つの特徴</h2>
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
                <li>+ ゲーム・本・CD・DVDなど何でもまとめ売り可能</li>
                <li>+ まとめ売りボーナスが大きい</li>
                <li>+ 累計1億点超の圧倒的実績と安心感</li>
                <li>+ Tポイントでの受取りに対応</li>
                <li>+ 段ボール無料・集荷対応</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                <li>- 個別のゲーム査定額は専門店より低め</li>
                <li>- レトロゲームは対象外が多い</li>
                <li>- キャンセル時の返送料は自己負担</li>
                <li>- 査定に1週間程度かかることがある</li>
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

        {/* Recommended */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />こんな方におすすめ</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li>・ゲーム以外にも本・CD・DVDを大量に処分したい方</li>
              <li>・引っ越しや大掃除でまとめて売りたい方</li>
              <li>・Tポイントを貯めている・使いたい方</li>
              <li>・まとめ売りボーナスでお得に売りたい方</li>
              <li>・大手の実績あるサービスを使いたい方</li>
            </ul>
          </div>
        </section>

        {/* 公式仕様・会社情報 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ネットオフ宅配買取の公式仕様・会社情報（2026年6月18日時点）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <tbody>
                <tr><th>運営会社</th><td className="text-sm">ネットオフ株式会社（リネットジャパングループ）</td></tr>
                <tr><th>古物商許可</th><td className="text-sm">愛知県公安委員会 第542782100600号</td></tr>
                <tr><th>所在地</th><td className="text-sm">愛知県大府市柊山町三丁目33番地</td></tr>
                <tr><th>送料・集荷</th><td className="text-sm">本＆ゲーム買取コースは送料無料。自宅集荷・コンビニ持込とも無料</td></tr>
                <tr><th>梱包キット</th><td className="text-sm">本・ゲーム・DVD買取用ダンボール 6箱まで無料</td></tr>
                <tr><th>申込点数の条件</th><td className="text-sm">ソフト類だけなら3点から（本のみの場合は30点から）</td></tr>
                <tr><th>入金</th><td className="text-sm">最短2日。自動承認は査定案内後の翌営業日に支払手続→3営業日以内（楽天銀行は当日）</td></tr>
                <tr><th>キャンセル返送料</th><td className="text-sm">自己負担（関東800円〜北海道1,200円・沖縄2,400円）。「自動承認」を選ぶと返送不可</td></tr>
                <tr><th>対応ハード</th><td className="text-sm">Switch2/Switch/3DS、PS5/PS4/Vita/PSP、Xbox One ほか旧ハードも対応</td></tr>
                <tr><th>本人確認</th><td className="text-sm">運転免許証・マイナンバーカード等の画像アップロード、またはオンライン本人確認</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ネットオフ公式（買取案内・ダンボールプレゼント・買取Q&A・本人確認案内、2026年6月18日閲覧）。本＆ゲーム買取コースの内容です。</p>
        </section>

        {/* 口コミ傾向（出典付き） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />口コミ・評判の傾向</h2>
          <div className="glass-card p-6">
            <p className="text-sm mb-3" style={{ color: 'var(--color-text-light)' }}>
              ネットオフは「本・ゲーム・DVDをまとめて手軽に処分したい」層に向くサービスです。送料・集荷・無料ダンボールの手軽さが評価される一方、<strong>1点あたりの査定額はゲーム専門店より控えめ</strong>になりやすい傾向があります。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold mb-1" style={{ color: 'var(--color-electric-green)' }}>良い評価の傾向</p>
                <ul className="space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・送料・集荷・ダンボール無料で手軽</li>
                  <li>・本・DVDと一緒にまとめて処分できる</li>
                  <li>・自動承認なら最短2日のスピード入金</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-1" style={{ color: 'var(--color-accent-orange)' }}>気になる評価の傾向</p>
                <ul className="space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・1点ごとの査定額は安いという声がある</li>
                  <li>・人気タイトル以外は値がつきにくい</li>
                  <li>・ゲームだけを高く売りたいなら専門店が有利な場合も</li>
                </ul>
              </div>
            </div>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>参考：ヒカカク!（ネットオフ・家電カテゴリ 総合2.53点/393件、2026年6月18日閲覧）。ゲーム買取コース単独の第三者評点は口コミ件数が少なく、上記は公式仕様と一般的傾向に基づく整理です。当サイトでは体験談の創作は行っていません。</p>
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
            ネットオフで<span style={{ color: 'var(--color-electric-green)' }}>まとめ売りボーナス</span>を活用しませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            ゲーム・本・CD・DVDなんでもまとめて売れる。大量処分するほどお得なまとめ売りボーナス付き。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.netoff.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8">
              無料で買取申込みする
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
            <Link href="/review/geo/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-orange text-xs mb-2 inline-block">大手</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲオ宅配買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>まとめ売りで最大35%UP</p>
            </Link>
            <Link href="/review/bookoff/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-blue text-xs mb-2 inline-block">全国最大手</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ブックオフ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>全国900店舗超・店頭即現金化</p>
            </Link>
          </div>
        </section>
        {/* 関連記事 */}
        <section style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(0,230,118,0.05)', borderRadius: '12px', borderLeft: '3px solid var(--color-electric-green)' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>関連記事</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/kaitori-ranking/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取おすすめランキング15選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/switch/" style={{ color: 'var(--color-electric-green)' }}>Switch買取おすすめ3選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/3ds/" style={{ color: 'var(--color-electric-green)' }}>3DS買取ガイド</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/method/online/" style={{ color: 'var(--color-electric-green)' }}>宅配買取の流れとコツ</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/bulk/" style={{ color: 'var(--color-electric-green)' }}>まとめ売りで高く売るコツ</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/preparation/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取前の準備ガイド</Link></li>
          </ul>
        </section>

        <AuthorBox />
      </div>
    </>
  );
}
