import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ゲームを売る前にやること10項目｜初期化・データ消去の手順【2026年】',
  description:
    'ゲーム機を売る前に行うべき準備を、10項目のチェックリストで解説します。Switch・PS5・PS4・3DSの機種別の初期化手順、アカウントの解除、データ消去の方法、準備を忘れた場合のリスクについてもまとめています。',
  keywords: ['ゲーム 売る前にやること', '初期化', 'データ消去', 'Switch 初期化', 'PS5 初期化'],
  openGraph: {
    images: ['/og.png'],
    title: 'ゲームを売る前にやること10項目｜初期化・データ消去の手順【2026年】',
    description: 'ゲーム機を売る前に行うべき準備を、10項目のチェックリストで解説します。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const checklist = [
  { title: 'セーブデータのバックアップ', description: 'クラウドセーブやUSBストレージにセーブデータをバックアップしてください。初期化後は復元できません。' },
  { title: 'アカウントの連携解除', description: 'ニンテンドーアカウントやPSNアカウントの連携を解除します。解除しないと次のオーナーがアカウントを作れません。' },
  { title: 'ディスク・カートリッジの取り出し', description: '本体内にディスクやカートリッジが入っていないか確認します。入れたまま売ってしまうトラブルが多く発生しています。' },
  { title: '本体の初期化（工場出荷状態に戻す）', description: '本体設定から初期化を実行し、すべてのデータを消去します。個人情報の流出を防ぐため、必ず実施してください。' },
  { title: 'microSD/USBストレージの取り外し', description: 'microSDカードやUSBメモリを本体から取り外します。中にデータが残っている場合は、フォーマットも忘れずに行ってください。' },
  { title: '本体の清掃', description: '本体表面のホコリや指紋を拭き取ります。綿棒やエアダスターで端子やファン周りも清掃すると、査定額が上がることがあります。' },
  { title: '付属品の確認・同梱', description: 'コントローラー、ケーブル、ACアダプター、HDMIケーブルなどの付属品をそろえます。付属品の有無で買取価格が大きく変わります。' },
  { title: '箱・説明書の確認', description: '購入時の箱や説明書があれば同梱してください。箱があるだけで1,000〜3,000円以上のプラス査定になることがあります。' },
  { title: '動作確認', description: '電源が入るか、ボタンが正常に動作するか、画面に異常がないか確認します。動作不良がある場合は、事前に申告してください。' },
  { title: '保証書の確認', description: 'メーカー保証期間内の場合は保証書を同梱すると査定額が上がることがあります。購入日が分かるレシートも有効です。' },
];

const resetSteps = [
  {
    console: 'Nintendo Switch',
    steps: [
      '「設定」→「ユーザー」→ニンテンドーアカウントの連携解除',
      'microSDカードの取り外し',
      '「設定」→「本体」→「初期化」→「本体の初期化」',
      '再起動後、初期設定画面が表示されれば完了',
    ],
  },
  {
    console: 'PlayStation 5',
    steps: [
      '「設定」→「ユーザーとアカウント」→「その他」→「コンソールの登録解除」',
      '「設定」→「システム」→「システムソフトウェア」→「本体の初期化」→「初期化」',
      'USBストレージの取り外し',
      '再起動後、初期設定画面が表示されれば完了',
    ],
  },
  {
    console: 'PlayStation 4',
    steps: [
      '「設定」→「アカウント管理」→「いつも使うPS4として登録解除」',
      '「設定」→「初期化」→「PS4を初期化する」→「フル」を選択',
      'USBストレージの取り外し',
      '再起動後、初期設定画面が表示されれば完了',
    ],
  },
  {
    console: 'Nintendo 3DS',
    steps: [
      '「本体設定」→「その他の設定」→「初期化」→「本体の初期化」',
      'ニンテンドーネットワークIDの解除（ニンテンドーのWebサイトから）',
      'SDカードを取り外してフォーマット',
      '初期化完了後、言語選択画面が表示されれば完了',
    ],
  },
];

const forgotConsequences = [
  { title: 'アカウント連携解除を忘れた場合', description: '次のオーナーがアカウントを登録できず、オンラインサービスが利用できません。場合によっては買取を断られることもあります。' },
  { title: '初期化を忘れた場合', description: '個人情報（名前・メールアドレス・購入履歴・クレジットカード情報など）が流出するリスクがあります。買取業者側で初期化してくれる場合もありますが、ご自身で行うほうが安全です。' },
  { title: 'ディスクを入れたまま売った場合', description: '買取業者によっては返却対応してくれますが、気づかないまま処分されるケースもあります。事前に必ずご確認ください。' },
];

const faqs = [
  { q: '初期化したらゲームのダウンロード版も消えますか？', a: 'はい、本体内のデータはすべて消去されます。ただしダウンロード版はアカウントに紐づいているため、同じアカウントで別の本体にログインすれば再ダウンロード可能です。' },
  { q: 'アカウント連携解除をしないとどうなりますか？', a: '次のオーナーがアカウントを登録できず、オンラインサービスが利用できなくなります。買取業者によっては連携解除がされていないと買取を断られることもあります。' },
  { q: '初期化の手順が分からない場合はどうすればよいですか？', a: '各メーカーの公式サポートページに詳しい手順が掲載されています。なお、買取ウリエルは初期化されていないゲーム機・ソフトの買取を断ると公式に明記しているため、出張買取の前に初期化を済ませてください。' },
  { q: 'SDカードのデータも消去する必要がありますか？', a: 'はい、SDカードにもセーブデータや写真が保存されている場合があります。売却前にSDカードを取り外すか、フォーマットしてデータを消去してください。' },
  { q: '清掃はどの程度行えばよいですか？', a: '柔らかい布で本体表面のホコリや指紋を拭き取る程度で十分です。端子部分はエアダスターや綿棒で清掃します。水や洗剤は使わないでください。分解清掃は故障の原因になるため、お控えください。' },
  { q: '付属品が一部欠品していても売れますか？', a: 'はい、売れます。ただし欠品している付属品の種類と数に応じて減額されます。特にACアダプターやコントローラーの欠品は大きな減額要因になります。' },
];

export default function PreparationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲームを売る前にやること10項目｜初期化・データ消去の手順【2026年】", "datePublished": "2026-03-15", "dateModified": "2026-05-24", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '売る前の準備' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲームを売る前の準備ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲーム機を売る前に行うべき10項目をチェックリストにまとめています。Switch・PS5・PS4・3DSの機種別の初期化手順や、準備を忘れた場合のリスクについても解説します。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Checklist */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />売る前チェックリスト10項目</h2>
          <div className="space-y-4">
            {checklist.map((item, i) => (
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

        {/* Reset Steps by Console */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />機種別 初期化手順</h2>
          <div className="space-y-6">
            {resetSteps.map((console) => (
              <div key={console.console} className="glass-card p-6">
                <h3 className="font-bold text-lg mb-4" style={{ color: 'var(--color-deep-blue)' }}>{console.console}</h3>
                <ol className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
                  {console.steps.map((step, i) => (
                    <li key={i}>
                      <strong style={{ color: 'var(--color-deep-blue)' }}>Step {i + 1}.</strong> {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* What happens if you forget */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />準備を忘れた場合のリスク</h2>
          <div className="glass-card p-6" style={{ borderLeft: '4px solid #EF4444' }}>
            <div className="space-y-4">
              {forgotConsequences.map((item) => (
                <div key={item.title} className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                  <strong style={{ color: 'var(--color-deep-blue)' }}>{item.title}</strong>
                  <p className="text-sm mt-1" style={{ color: 'var(--color-text-light)' }}>{item.description}</p>
                </div>
              ))}
            </div>
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
            準備が整いましたら<span style={{ color: 'var(--color-electric-green)' }}>一括査定</span>のご利用をおすすめします
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            初期化・清掃が完了しましたら、最大20社に一括で査定を依頼し、査定額を比較することをおすすめします。
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
            <Link href="/knowledge/price-guide/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取相場ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ハード・ソフト別の相場一覧</p>
            </Link>
            <Link href="/knowledge/timing/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>売り時ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>売却に適した時期</p>
            </Link>
            <Link href="/knowledge/boxless/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>箱なし・付属品なし</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なしでも売れるかを解説</p>
            </Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
