import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | ゲーム買取びより',
  description:
    'ゲーム買取びよりにおける個人情報の取得・利用・管理・第三者提供、Cookieの利用方針、Microsoft Clarityの使用等についてのプライバシーポリシーを掲載しています。',
  openGraph: {
    title: 'プライバシーポリシー | ゲーム買取びより',
    description: 'ゲーム買取びよりの個人情報保護方針・Cookie利用についてのご案内。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const sections = [
  {
    title: '1. 個人情報の定義',
    body:
      '本プライバシーポリシーにおける「個人情報」とは、個人情報の保護に関する法律（以下「個人情報保護法」といいます。）第2条第1項に定める個人情報を指し、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報、および他の情報と容易に照合することができ、それにより特定の個人を識別できる情報を含みます。',
  },
  {
    title: '2. 個人情報の取得方法',
    body:
      '当社は、利用者が本サイト（ゲーム買取びより）を利用する際に、以下の方法で個人情報を取得する場合があります。\n（1）お問い合わせフォームまたはメールによるご連絡時に、お名前、メールアドレス、ご質問内容等をご入力いただく方法\n（2）本サイトの閲覧時に、ブラウザが送信するIPアドレス、Cookie、閲覧履歴、端末情報等を自動的に取得する方法\n（3）アクセス解析ツールを通じて、本サイトの利用状況に関する情報を取得する方法',
  },
  {
    title: '3. 個人情報の利用目的',
    body:
      '当社は、取得した個人情報を以下の目的で利用します。\n（1）お問い合わせに対する回答および確認のための連絡\n（2）本サイトの運営、保守、改善、および新機能の開発\n（3）利用状況の分析による本サイトのコンテンツ・サービスの品質向上\n（4）利用規約に違反する行為への対応\n（5）その他、本サイトの提供に付随する目的',
  },
  {
    title: '4. 個人情報の第三者提供',
    body:
      '当社は、次に掲げる場合を除き、あらかじめ利用者の同意を得ることなく、第三者に個人情報を提供することはありません。\n（1）法令に基づく場合\n（2）人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき\n（3）公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき\n（4）国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき\n（5）予め次の事項を告知あるいは公表している場合\n　・利用目的に第三者への提供を含むこと\n　・第三者に提供されるデータの項目\n　・第三者への提供の手段または方法\n　・本人の求めに応じて個人情報の第三者への提供を停止すること',
  },
  {
    title: '5. 個人情報の管理',
    body:
      '当社は、利用者の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス、紛失、破損、改ざん、漏えい等を防止するため、セキュリティシステムの維持、管理体制の整備、社員教育の徹底等の必要な措置を講じ、安全対策を実施して個人情報の厳重な管理を行います。保存期間を超えた個人情報については、適切かつ速やかに廃棄します。',
  },
  {
    title: '6. 個人情報の開示・訂正・利用停止',
    body:
      '利用者は、ご自身の個人情報について、当社に対して開示、訂正、追加、削除、利用停止または第三者提供の停止（以下「開示等」といいます。）を請求することができます。開示等のご請求は、本ポリシー末尾に記載のお問い合わせ窓口までご連絡ください。ご本人確認の上、法令に基づき合理的な期間内に対応いたします。なお、開示等の請求にあたっては、個人情報保護法その他の法令に従い対応するものとします。',
  },
  {
    title: '7. Cookie（クッキー）の利用について',
    body:
      '本サイトでは、利用者の利便性向上および利用状況の分析のため、Cookieおよび類似技術を利用しています。Cookieとは、ウェブサイトが利用者のブラウザに保存する小さなテキストファイルで、個人を特定する情報は含まれません。\n\n【Microsoft Clarityの利用について】\n当社は、本サイトの改善のため、Microsoft Corporationが提供するユーザー行動解析ツール「Microsoft Clarity」を利用しています。Microsoft Clarityは、Cookieその他の類似技術を用いて、ページビュー、クリック、スクロール、セッション再生等の利用状況を匿名の形で収集し、サイトの使いやすさの改善に役立てます。取得されるデータにはIPアドレス、デバイス情報、閲覧ページ、操作内容等が含まれますが、Microsoft社のプライバシー基準に従い、個人を特定しない形で処理されます。Microsoft Clarityの詳細およびデータの取り扱いについては、Microsoft社のプライバシーステートメントをご確認ください。\n\nブラウザの設定によりCookieの受け入れを拒否することも可能ですが、その場合、本サイトの一部機能が正常に動作しないことがあります。',
  },
  {
    title: '8. 免責事項',
    body:
      '本サイトに掲載する情報については正確性に努めておりますが、その完全性・正確性・最新性を保証するものではありません。本サイトからリンクされている外部サイト（買取サービス事業者のウェブサイトを含みます。）における個人情報の取り扱いについては、各リンク先のプライバシーポリシーに従うものであり、当社は責任を負いかねます。本サイトの利用により利用者に生じた損害について、当社は一切の責任を負いません。',
  },
  {
    title: '9. プライバシーポリシーの変更',
    body:
      '当社は、法令の改正、本サイトの運営状況の変化、その他の事由により、本プライバシーポリシーを随時改定することがあります。改定後のプライバシーポリシーは、本サイトに掲載した時点から効力を生じるものとします。重要な変更を行う場合には、本サイト上で分かりやすく告知いたします。',
  },
  {
    title: '10. お問い合わせ窓口',
    body:
      '本プライバシーポリシーに関するお問い合わせ、および個人情報の開示・訂正・利用停止等のご請求は、下記の窓口までご連絡ください。\n\n【お問い合わせ窓口】\n運営会社：株式会社MediaX\n所在地：〒150-0011 東京都渋谷区東一丁目27番10号\nサイト名：ゲーム買取びより\n\nお問い合わせ内容の確認およびご本人確認の上、合理的な範囲で速やかに対応いたします。',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'プライバシーポリシー' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span
            className="tag-pill text-xs mb-4 inline-block"
            style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}
          >
            Privacy Policy
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            プライバシーポリシー
          </h1>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: '#CBD5E1' }}>
            ゲーム買取びよりは、利用者の個人情報を適切に取り扱い、皆さまに安心してご利用いただけるサイト運営を目指しています。本ポリシーでは、個人情報の取得・利用・管理、Cookieの利用方針等について定めています。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Intro */}
        <section className="mb-10">
          <div className="glass-card p-6">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              株式会社MediaX（以下「当社」といいます。）は、当社が運営するゲーム買取サービス比較情報サイト「ゲーム買取びより」（以下「本サイト」といいます。）における利用者の個人情報の取り扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。当社は、個人情報の保護に関する法律その他関連法令およびガイドラインを遵守し、利用者の個人情報を適切に取り扱います。
            </p>
          </div>
        </section>

        {/* Sections */}
        <section className="mb-12">
          <h2 className="section-heading mb-6">
            <span className="section-heading-bar" />ポリシー本文
          </h2>
          <div className="space-y-5">
            {sections.map((s) => (
              <article key={s.title} className="glass-card p-6">
                <h3
                  className="font-bold mb-3 text-base"
                  style={{ color: 'var(--color-deep-blue)' }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-relaxed whitespace-pre-line"
                  style={{ color: 'var(--color-text-light)' }}
                >
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Operator Summary */}
        <section className="mb-12">
          <h2 className="section-heading mb-6">
            <span className="section-heading-bar" />運営者情報
          </h2>
          <div className="glass-card p-6">
            <dl className="text-sm space-y-3" style={{ color: 'var(--color-text-light)' }}>
              <div className="flex flex-col md:flex-row md:gap-6">
                <dt className="font-bold md:w-32" style={{ color: 'var(--color-deep-blue)' }}>
                  運営会社
                </dt>
                <dd>株式会社MediaX</dd>
              </div>
              <div className="flex flex-col md:flex-row md:gap-6">
                <dt className="font-bold md:w-32" style={{ color: 'var(--color-deep-blue)' }}>
                  所在地
                </dt>
                <dd>〒150-0011 東京都渋谷区東一丁目27番10号</dd>
              </div>
              <div className="flex flex-col md:flex-row md:gap-6">
                <dt className="font-bold md:w-32" style={{ color: 'var(--color-deep-blue)' }}>
                  サイト名
                </dt>
                <dd>ゲーム買取びより</dd>
              </div>
              <div className="flex flex-col md:flex-row md:gap-6">
                <dt className="font-bold md:w-32" style={{ color: 'var(--color-deep-blue)' }}>
                  制定日
                </dt>
                <dd>2026年4月13日</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>
            関連ページ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/terms/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>
                利用規約
              </p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>
                サイト利用条件の詳細
              </p>
            </Link>
            <Link href="/content-policy/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>
                記事制作ポリシー
              </p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>
                コンテンツ制作の方針
              </p>
            </Link>
            <Link href="/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>
                トップページ
              </p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>
                おすすめランキングを見る
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
