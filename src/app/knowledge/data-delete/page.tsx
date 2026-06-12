import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'ゲーム買取前のデータ削除・初期化方法｜機種別完全ガイド',
  description:
    'ゲーム買取前に必須のデータ削除・初期化方法をSwitch・PS5・PS4・Xbox・3DSの機種別にステップバイステップで解説。個人情報保護の重要性、セーブデータのバックアップ方法、削除しないリスクまで完全網羅。',
  keywords: ['ゲーム 買取前 データ削除', 'ゲーム 初期化', 'Switch 初期化 方法', 'PS5 データ消去', '買取前 やること'],
  openGraph: {
    title: 'ゲーム買取前のデータ削除・初期化方法｜機種別完全ガイド',
    description: 'Switch・PS5・PS4・Xbox・3DSの初期化手順をステップバイステップで解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const whyNeeded = [
  { title: '個人情報の流出防止', description: 'ゲーム機にはアカウント情報（メールアドレス、パスワード）、クレジットカード情報、購入履歴、フレンドリストなどの個人情報が保存されています。初期化しないと次のオーナーにこれらの情報が渡ってしまいます。' },
  { title: 'アカウントの不正利用防止', description: 'ログイン状態のままだと、次のオーナーがあなたのアカウントでゲームを購入したり、オンラインサービスを利用したりできてしまいます。課金被害に遭う可能性もあります。' },
  { title: '買取拒否の防止', description: '多くの買取業者は、アカウント連携が解除されていない本体の買取を拒否します。事前に初期化しておくことで、スムーズに買取が完了します。' },
  { title: '査定額アップ', description: '初期化済みの本体は、買取業者側での手間が省けるため、査定がスムーズに進みます。動作確認もしやすくなるため、結果的に査定額がアップすることがあります。' },
];

const risks = [
  { risk: 'クレジットカードの不正利用', level: '高', description: '保存されたカード情報で勝手にゲームを購入される可能性。被害額は数万円に及ぶことも。' },
  { risk: 'アカウント乗っ取り', level: '高', description: 'ログイン状態からパスワードを変更され、アカウントごと奪われる可能性。' },
  { risk: '個人情報の流出', level: '中', description: '名前・住所・メールアドレスなどが第三者に渡り、迷惑メールや詐欺に悪用される可能性。' },
  { risk: '買取拒否・減額', level: '中', description: 'アカウント連携が残っていると買取を断られたり、減額されたりするケースが多い。' },
  { risk: 'フレンドへの迷惑', level: '低', description: '次のオーナーがあなたのフレンドにメッセージを送信するなど、周囲に迷惑がかかる可能性。' },
];

const resetSteps = [
  {
    console: 'Nintendo Switch / Switch Lite / Switch（有機ELモデル）',
    backup: [
      'Nintendo Switch Onlineに加入している場合：「設定」→「データ管理」→「セーブデータお預かり」で自動バックアップをON',
      '加入していない場合：一部のゲームはセーブデータの引っ越しが可能（「設定」→「データ管理」→「セーブデータの引っ越し」）',
    ],
    steps: [
      '「設定」→「ユーザー」→ 自分のユーザーを選択',
      '「ニンテンドーアカウントとの連携」→「連携解除」を選択',
      'microSDカードを取り外す（「設定」→「本体」→「microSDカード」→「取り外す」）',
      '「設定」→「本体」→「初期化」→「本体の初期化」を選択',
      '画面の指示に従い初期化を実行',
      '再起動後、言語選択画面が表示されれば初期化完了',
    ],
  },
  {
    console: 'PlayStation 5 / PS5 Digital Edition',
    backup: [
      'PS Plus加入者：「設定」→「セーブデータとゲーム/アプリ設定」→「セーブデータ（PS5）」→「クラウドストレージに同期」',
      'USBストレージ：「設定」→「セーブデータとゲーム/アプリ設定」→「セーブデータ（PS4）」→「USBドライブにコピー」',
    ],
    steps: [
      '「設定」→「ユーザーとアカウント」→「その他」→「コンソールの登録解除」',
      '「設定」→「システム」→「システムソフトウェア」→「本体の初期化」',
      '「初期化」を選択（「クイック」ではなく「フル」を推奨）',
      'USBストレージ・外付けSSDを取り外す',
      '再起動後、初期設定画面が表示されれば初期化完了',
    ],
  },
  {
    console: 'PlayStation 4 / PS4 Pro / PS4 Slim',
    backup: [
      'PS Plus加入者：「設定」→「アプリケーションセーブデータ管理」→「本体ストレージのセーブデータ」→「オンラインストレージにアップロード」',
      'USBストレージ：「設定」→「アプリケーションセーブデータ管理」→「本体ストレージのセーブデータ」→「USBストレージ機器にコピー」',
    ],
    steps: [
      '「設定」→「アカウント管理」→「いつも使うPS4として登録解除」',
      '「設定」→「初期化」→「PS4を初期化する」',
      '「フル」を選択（クイックではデータが完全に消去されません）',
      'USBストレージを取り外す',
      '再起動後、初期設定画面が表示されれば初期化完了',
    ],
  },
  {
    console: 'Xbox Series X / Xbox Series S',
    backup: [
      'Xbox Live Goldまたは Game Pass加入者：セーブデータは自動でクラウドに保存される',
      '未加入の場合：外付けUSBストレージにゲームデータをコピー',
    ],
    steps: [
      '「設定」→「システム」→「本体の情報」→「本体のリセット」',
      '「すべてリセットしてデータを削除する」を選択',
      '外付けストレージを取り外す',
      '再起動後、初期設定画面が表示されれば初期化完了',
    ],
  },
  {
    console: 'Nintendo 3DS / 3DS LL / New 3DS',
    backup: [
      'セーブデータはカートリッジ内に保存されるため、カートリッジを取り出せばOK',
      'ダウンロード版のセーブデータはSDカードに保存（SDカードを取り外して保管）',
    ],
    steps: [
      '「本体設定」→「その他の設定」→ 右にスクロール',
      '「初期化」→「本体の初期化」を選択',
      'ニンテンドーネットワークIDの解除（ニンテンドーのWebサイトから）',
      'SDカード / microSDカードを取り外す',
      '初期化完了後、言語選択画面が表示されればOK',
    ],
  },
];

const checklist = [
  'セーブデータのバックアップを取った',
  'アカウントの連携・登録を解除した',
  '本体を初期化（工場出荷状態）にした',
  'microSD / USBストレージを取り外した',
  'クレジットカード情報が残っていないことを確認した',
  'ディスク・カートリッジを取り出した',
  '初期化後に再起動して初期設定画面が表示されることを確認した',
];

const faqs = [
  { q: '初期化するとダウンロード購入したゲームはどうなりますか？', a: '本体からは削除されますが、購入履歴はアカウントに紐づいています。新しい本体で同じアカウントにログインすれば再ダウンロード可能です。初期化前にアカウントの連携解除を行いましょう。' },
  { q: '初期化に失敗した場合はどうすればいいですか？', a: 'まず本体を再起動してもう一度試してください。それでも失敗する場合は、各メーカーの公式サポートに連絡しましょう。Nintendo（0570-021-010）、PlayStation（0570-000-638）で電話サポートを受けられます。' },
  { q: 'クイック初期化とフル初期化、どちらを選ぶべき？', a: '買取前にはフル初期化を強くおすすめします。クイック初期化はデータのインデックスのみ削除するため、復元ソフトでデータを取り出せる可能性があります。フル初期化はストレージを完全に上書きするため、データ復元がほぼ不可能です。' },
  { q: 'SwitchのセーブデータはSDカードに保存されていますか？', a: 'いいえ、Switchのセーブデータは本体メモリに保存されます。SDカードにはダウンロードしたゲームソフトのデータやスクリーンショットが保存されます。本体を初期化すればセーブデータは削除されますが、SDカードのデータは別途フォーマットが必要です。' },
  { q: '買取業者側で初期化してくれますか？', a: '多くの買取業者は受け取った本体を初期化しますが、発送から初期化までの間に個人情報が閲覧されるリスクがあります。自分で初期化してから送ることを強くおすすめします。ウリエルの出張買取なら、その場で初期化のサポートを受けられます。' },
  { q: 'ゲームソフト（ディスク・カートリッジ）のセーブデータも消す必要がありますか？', a: 'PS4/PS5のディスク版はセーブデータが本体に保存されるため、本体を初期化すれば消去されます。3DSのカートリッジはセーブデータがカートリッジ内に保存されるため、売却する場合はゲーム内の設定からセーブデータを削除しましょう。' },
];

export default function DataDeletePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲーム買取前のデータ削除・初期化方法｜機種別完全ガイド", "datePublished": "2026-03-15", "dateModified": "2026-05-24", "author": {"@type": "Person", "name": "中村 大輝", "description": "ゲームコレクター歴15年、レトロゲーム買取査定経験者"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: 'データ削除・初期化' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>お役立ち情報</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲーム買取前のデータ削除・初期化ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            Switch・PS5・PS4・Xbox・3DSの初期化手順をステップバイステップで解説。個人情報の流出を防ぎ、スムーズな買取を実現するための完全マニュアルです。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終更新: 2026年5月</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Why Needed */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />なぜデータ削除が必要なのか</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyNeeded.map((item) => (
              <div key={item.title} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Risks */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />削除しないとどうなる？リスク一覧</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>リスク</th>
                  <th>危険度</th>
                  <th>詳細</th>
                </tr>
              </thead>
              <tbody>
                {risks.map((row) => (
                  <tr key={row.risk}>
                    <td className="font-bold">{row.risk}</td>
                    <td className="font-bold" style={{ color: row.level === '高' ? '#EF4444' : row.level === '中' ? '#F59E0B' : 'var(--color-electric-green)' }}>{row.level}</td>
                    <td className="text-sm">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Reset Steps by Console */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />機種別 初期化手順</h2>
          <div className="space-y-8">
            {resetSteps.map((console) => (
              <div key={console.console} className="glass-card p-6">
                <h3 className="font-bold text-lg mb-4" style={{ color: 'var(--color-deep-blue)' }}>{console.console}</h3>

                <div className="mb-4 p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                  <h4 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>バックアップ方法</h4>
                  <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                    {console.backup.map((item, i) => (
                      <li key={i}>- {item}</li>
                    ))}
                  </ul>
                </div>

                <h4 className="font-bold text-sm mb-3" style={{ color: 'var(--color-deep-blue)' }}>初期化手順</h4>
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

        {/* Checklist */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />最終チェックリスト</h2>
          <div className="glass-card p-6">
            <div className="space-y-3">
              {checklist.map((item) => (
                <label key={item} className="flex items-start gap-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
                  <span className="shrink-0 mt-0.5" style={{ color: 'var(--color-electric-green)' }}>&#9744;</span>
                  {item}
                </label>
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
            初期化が完了したら<span style={{ color: 'var(--color-electric-green)' }}>一括査定</span>してみましょう
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            データ削除・初期化が完了したら、最大20社に一括査定して最高値を見つけましょう。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連するお役立ち情報</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/knowledge/preparation/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>売る前の準備ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>10項目の完全チェックリスト</p>
            </Link>
            <Link href="/knowledge/shipping/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>送料・梱包ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>安全な梱包方法と送料比較</p>
            </Link>
            <Link href="/knowledge/broken/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>故障品の買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>壊れたゲーム機でも売れるか</p>
            </Link>
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
