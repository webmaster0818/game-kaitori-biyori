import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '利用規約 | ゲーム買取びより',
  description:
    'ゲーム買取びよりの利用規約です。本サイトをご利用になるすべてのお客様に適用される規約を全20条にわたり定めています。',
  openGraph: {
    title: '利用規約 | ゲーム買取びより',
    description: 'ゲーム買取びよりの利用規約を掲載しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const articles = [
  {
    title: '第1条（適用）',
    body:
      '本規約は、株式会社MediaX（以下「当社」といいます。）が運営するゲーム買取サービス比較情報サイト「ゲーム買取びより」（以下「本サイト」といいます。）の利用に関する条件を、本サイトを利用するすべての利用者（以下「ユーザー」といいます。）と当社との間で定めるものです。ユーザーは、本規約に同意の上、本サイトを利用するものとします。',
  },
  {
    title: '第2条（定義）',
    body:
      '本規約において使用する用語の定義は次のとおりです。\n（1）「本サービス」とは、当社が本サイトを通じて提供するゲーム買取サービスの比較・紹介に関する一切の情報提供サービスをいいます。\n（2）「買取サービス事業者」とは、本サイトで紹介されるゲーム買取サービスを提供する第三者事業者をいいます。\n（3）「コンテンツ」とは、本サイト上に掲載されるテキスト、画像、動画、ロゴ、デザイン、その他一切の情報をいいます。',
  },
  {
    title: '第3条（本規約の変更）',
    body:
      '当社は、ユーザーの事前の承諾を得ることなく、必要と判断した場合にはいつでも本規約を変更できるものとします。変更後の規約は、本サイト上に掲示した時点から効力を生じるものとし、ユーザーは変更後の本規約に従うものとします。',
  },
  {
    title: '第4条（利用登録）',
    body:
      '本サイトは原則として会員登録を必要とせず、どなたでもご利用いただけます。ただし、将来的に一部機能について利用登録を必要とする場合があり、その際は別途定める登録手続に従うものとします。',
  },
  {
    title: '第5条（ユーザーの責任）',
    body:
      'ユーザーは、自己の責任において本サイトを利用するものとし、本サイトを利用してなされた一切の行為およびその結果について責任を負うものとします。当社は、本サイトの利用によりユーザーに生じた損害について、一切の責任を負わないものとします。',
  },
  {
    title: '第6条（禁止事項）',
    body:
      'ユーザーは、本サイトの利用にあたり、以下の行為を行ってはなりません。\n（1）法令または公序良俗に違反する行為\n（2）犯罪行為に関連する行為\n（3）当社、買取サービス事業者、他のユーザーまたは第三者の知的財産権、プライバシー、名誉その他の権利または利益を侵害する行為\n（4）本サイトの運営を妨害するおそれのある行為\n（5）不正アクセスを試みる行為、ならびに本サイトのネットワークまたはシステム等に過度な負荷をかける行為\n（6）本サイトから得られた情報を商業的に利用または転載する行為\n（7）その他、当社が不適切と判断する行為',
  },
  {
    title: '第7条（本サービスの提供の停止等）',
    body:
      '当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。\n（1）本サイトに係るコンピュータシステムの保守点検または更新を行う場合\n（2）地震、落雷、火災、停電、天災などの不可抗力により、本サービスの提供が困難となった場合\n（3）コンピュータまたは通信回線等が事故により停止した場合\n（4）その他、当社が本サービスの提供が困難と判断した場合',
  },
  {
    title: '第8条（第三者サービスへのリンク）',
    body:
      '本サイトには、買取サービス事業者を含む第三者が運営するウェブサイトへのリンクが含まれます。当社は、当該リンク先のウェブサイトの内容、正確性、安全性、合法性等について一切保証するものではなく、当該リンク先の利用により生じた損害について責任を負わないものとします。リンク先ウェブサイトのご利用は、各サイトの利用規約およびプライバシーポリシーをご確認の上、ユーザー自身の責任において行ってください。',
  },
  {
    title: '第9条（買取サービスの利用）',
    body:
      '本サイトで紹介される買取サービス事業者が提供する買取サービス（以下「買取サービス」といいます。）の利用契約は、ユーザーと当該買取サービス事業者との間で直接締結されます。当社は、買取サービスの内容、買取価格、査定結果、その他一切の取引条件について、いかなる保証も行わず、当該サービスの利用により生じた損害について一切の責任を負いません。',
  },
  {
    title: '第10条（掲載情報の正確性）',
    body:
      '当社は、本サイトに掲載する情報について可能な限り正確かつ最新の内容を提供するよう努めますが、その正確性・完全性・有用性・最新性を保証するものではありません。買取価格、キャンペーン情報、サービス内容等は予告なく変更される場合がありますので、実際のご利用前に買取サービス事業者の公式サイトで最新情報をご確認ください。',
  },
  {
    title: '第11条（アフィリエイトプログラム）',
    body:
      '本サイトはアフィリエイトプログラムに参加しており、紹介する買取サービスを通じて当社が報酬を得る場合があります。ただし、掲載順位、評価、レビュー内容はアフィリエイト報酬の有無や金額によって左右されることはなく、当社独自の評価基準に基づき公正に掲載しています。',
  },
  {
    title: '第12条（知的財産権）',
    body:
      '本サイトおよびコンテンツに関する著作権、商標権その他一切の知的財産権は、当社または正当な権利を有する第三者に帰属します。ユーザーは、当社の事前の書面による承諾なく、コンテンツを複製、転載、改変、配布、公衆送信、販売、出版等を行ってはなりません。',
  },
  {
    title: '第13条（個人情報の取扱い）',
    body:
      '当社は、本サイトの運営に関してユーザーから取得した個人情報を、別途定める「プライバシーポリシー」に従い適切に取り扱います。',
  },
  {
    title: '第14条（免責事項）',
    body:
      '当社は、本サイトに関して、その完全性、正確性、確実性、有用性等について、いかなる保証も行わないものとします。本サイトのご利用、掲載情報の利用、リンク先ウェブサイトの利用その他本サイトに関連して生じたユーザーの一切の損害（直接的損害、間接的損害、特別損害、結果的損害、逸失利益を含みますが、これらに限りません。）について、当社は一切の責任を負いません。',
  },
  {
    title: '第15条（サービス内容の変更等）',
    body:
      '当社は、ユーザーへの事前告知をもって、本サイトの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。',
  },
  {
    title: '第16条（利用制限）',
    body:
      '当社は、ユーザーが本規約のいずれかの条項に違反した場合、または違反するおそれがあると当社が判断した場合、事前の通知なく当該ユーザーに対して本サイトの利用を制限することができるものとします。',
  },
  {
    title: '第17条（通知または連絡）',
    body:
      'ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。当社は、ユーザーから当社が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは発信時にユーザーへ到達したものとみなします。',
  },
  {
    title: '第18条（権利義務の譲渡の禁止）',
    body:
      'ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。',
  },
  {
    title: '第19条（準拠法）',
    body:
      '本規約の解釈にあたっては、日本法を準拠法とします。',
  },
  {
    title: '第20条（管轄裁判所）',
    body:
      '本サイトおよび本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。',
  },
];

export default function TermsPage() {
  return (
    <>
      <Breadcrumb items={[{ name: '利用規約' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span
            className="tag-pill text-xs mb-4 inline-block"
            style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}
          >
            Terms of Service
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">利用規約</h1>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: '#CBD5E1' }}>
            本規約は、株式会社MediaXが運営するゲーム買取サービス比較サイト「ゲーム買取びより」の利用条件を定めたものです。本サイトをご利用いただく前に必ずご確認ください。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Intro */}
        <section className="mb-10">
          <div className="glass-card p-6">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              本利用規約（以下「本規約」といいます。）は、株式会社MediaX（以下「当社」といいます。）が提供するゲーム買取サービス比較情報サイト「ゲーム買取びより」（以下「本サイト」といいます。）の利用条件を定めるものです。ユーザーの皆様には、本規約に同意いただいた上で本サイトをご利用いただきますよう、お願い申し上げます。
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="mb-12">
          <h2 className="section-heading mb-6">
            <span className="section-heading-bar" />規約本文
          </h2>
          <div className="space-y-5">
            {articles.map((a) => (
              <article key={a.title} className="glass-card p-6">
                <h3
                  className="font-bold mb-3 text-base"
                  style={{ color: 'var(--color-deep-blue)' }}
                >
                  {a.title}
                </h3>
                <p
                  className="text-sm leading-relaxed whitespace-pre-line"
                  style={{ color: 'var(--color-text-light)' }}
                >
                  {a.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Operator Info */}
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
            <Link href="/privacy/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>
                プライバシーポリシー
              </p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>
                個人情報の取り扱いについて
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
