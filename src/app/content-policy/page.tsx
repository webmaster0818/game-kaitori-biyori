import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '記事制作ポリシー | ゲーム買取びより',
  description:
    'ゲーム買取びよりの記事制作ポリシー。ユーザーファースト、正確且つ最新な情報発信、中立性、分かりやすさを軸にしたコンテンツ制作方針と、4ステップの記事制作フロー、買取サービス選びの評価基準を公開しています。',
  openGraph: {
    title: '記事制作ポリシー | ゲーム買取びより',
    description: 'ゲーム買取びよりのコンテンツ制作方針・記事制作フロー・評価基準を掲載。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const principles = [
  {
    title: 'ユーザーファーストであり続けます',
    description:
      '売りたいゲームの種類・状態・売却理由は一人ひとり異なります。ゲーム買取びよりは、ゲーム機本体・最新ソフト・レトロゲーム・限定版など多様な売却ニーズに対し、それぞれに最適な買取サービスをマッチングすることを最大の使命としています。各買取サービスの特性や強みを偏りなく分かりやすく発信し、利用者が納得して最適なサービスを選べる情報提供を行います。',
  },
  {
    title: '正確且つ最新な情報発信に努めます',
    description:
      'ゲーム買取業界は買取相場・キャンペーン・取扱品目の変動が激しく、情報の鮮度が利用者の利益を大きく左右します。当サイトでは、専任スタッフによる定期的な情報更新を徹底し、買取サービスの料金改定、キャンペーン開始・終了、新サービス開始等の情報を迅速に記事へ反映します。公式サイトの一次情報を参照元とし、推測や伝聞に依存しない情報発信を貫きます。',
  },
  {
    title: '操作のない口コミ情報を発信いたします',
    description:
      '口コミ・評判は買取サービス選びの重要な判断材料ですが、恣意的な操作がなされれば利用者の利益を損なってしまいます。ゲーム買取びよりでは、収集した口コミの参照元・収集方法を明確にし、ポジティブな声だけでなくネガティブな声も含めてバランスよく掲載します。当社の利害関係にかかわらず、中立的な立場からありのままの利用者の声をお届けします。',
  },
  {
    title: '分かりやすさを追求し続けます',
    description:
      '初めてゲームを売る方にとって、買取業界の専門用語やサービスごとの仕組みは分かりにくく感じられるものです。ゲーム買取びよりは、買取相場・売り方の手順・高く売るコツなど、比較ポイントを図解・表・ステップ形式で分かりやすく整理してお届けします。「読んで理解できる」ではなく「読めば行動に移せる」コンテンツを目指します。',
  },
];

const flow = [
  {
    step: 1,
    title: '企画・設計',
    description:
      '読者の検索意図と悩みを起点にテーマを選定します。「どんな状況の利用者が」「何を知りたくて」「どう行動したいのか」を整理し、必要な比較軸・見出し構成・参考データをすべて事前に設計します。憶測ではなく、実在する利用者ニーズに応えられるテーマのみを採用します。',
  },
  {
    step: 2,
    title: 'ライティング',
    description:
      'ゲーム買取業界の知見を持つライターが、公式サイト・公的データ・実際の利用者レビューなど複数の一次情報・二次情報を参照しながら執筆します。買取サービスの強み・弱みを偏りなく記述し、主観的表現にはその旨を明記。数字や固有名詞は必ず裏取りを行います。',
  },
  {
    step: 3,
    title: '編集・公開',
    description:
      '編集担当が、事実関係の再チェック、読みやすさ・論理構造・誤字脱字のレビュー、表記統一、アフィリエイト表示の適正性確認を実施します。掲載基準を満たしたと判断された記事のみを公開し、公開後もURLの正常性・リンク切れを継続的にモニタリングします。',
  },
  {
    step: 4,
    title: '更新・メンテナンス',
    description:
      '公開された記事は「公開して終わり」ではありません。買取価格の改定、キャンペーン情報の変更、新しい口コミの収集、競合サービスの動向などを定期的にキャッチアップし、内容を随時更新します。古い情報が残らないよう、最終更新日を明記し、読者がいつでも最新情報にアクセスできる状態を維持します。',
  },
];

const criteria = [
  {
    name: '買取価格',
    description:
      '各サービスの買取実績・相場傾向・キャンペーン上乗せ額を比較。一括査定・複数社査定前提でも「平均して高値をつけやすいか」という観点で評価します。',
  },
  {
    name: '対応スピード',
    description:
      '申込みから査定結果連絡、入金までに要する日数、出張買取の来訪スピード、店舗買取の即日現金化対応等を比較し、急ぎの売却にも対応できるかを検証します。',
  },
  {
    name: '口コミ評価',
    description:
      '実際の利用者による第三者口コミサイト・SNS・レビュー等を収集し、満足度・トラブル発生率・対応品質の傾向を中立的に評価します。',
  },
  {
    name: '取扱品目の幅',
    description:
      'ゲーム機本体・現行ソフト・レトロゲーム・限定版・周辺機器・ジャンク品など、取扱い可能な品目の幅と専門性を確認し、まとめ売りや特殊タイトルにも対応できるかを判断します。',
  },
  {
    name: '利用のしやすさ',
    description:
      '申込フォームの入力項目数、梱包キットの有無、宅配・出張・店頭の選択肢、公式サイトの分かりやすさ等、実際の利用負荷を評価します。',
  },
  {
    name: '信頼性・安全性',
    description:
      '運営会社情報の明示、古物商許可番号、個人情報の取り扱い方針、補償制度の有無などを確認し、安心して利用できるかを評価の最終判断材料とします。',
  },
];

export default function ContentPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: '記事制作ポリシー' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span
            className="tag-pill text-xs mb-4 inline-block"
            style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}
          >
            Content Policy
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            記事制作ポリシー
          </h1>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: '#CBD5E1' }}>
            ゲーム買取びよりは、利用者に本当に役立つ比較情報を届けるため、厳格な記事制作方針を定めています。ユーザーファースト・正確性・中立性・分かりやすさという4つの軸を守り抜くことを約束します。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Intro */}
        <section className="mb-12">
          <div className="glass-card p-6">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              ゲーム買取びよりは、ゲーム機本体・ゲームソフト・レトロゲーム等の買取サービスを徹底的に比較し、利用者が自分にとって最適な売却手段を選べる情報を提供するメディアです。当サイトでは、以下の4つの記事制作ポリシーに従ってコンテンツを企画・制作・公開しています。
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="mb-12">
          <h2 className="section-heading mb-6">
            <span className="section-heading-bar" />4つの記事制作ポリシー
          </h2>
          <div className="space-y-5">
            {principles.map((p, i) => (
              <article key={p.title} className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div
                    className="text-2xl font-black shrink-0"
                    style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3
                      className="font-bold mb-2 text-base"
                      style={{ color: 'var(--color-deep-blue)' }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--color-text-light)' }}
                    >
                      {p.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Flow */}
        <section className="mb-12">
          <h2 className="section-heading mb-6">
            <span className="section-heading-bar" />記事制作フロー（4ステップ）
          </h2>
          <div className="space-y-4">
            {flow.map((f) => (
              <div key={f.step} className="glass-card p-5 flex items-start gap-4">
                <div
                  className="text-2xl font-black shrink-0"
                  style={{ color: 'var(--color-accent-orange)', opacity: 0.4 }}
                >
                  {String(f.step).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>
                    {f.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--color-text-light)' }}
                  >
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Criteria */}
        <section className="mb-12">
          <h2 className="section-heading mb-6">
            <span className="section-heading-bar" />買取サービス選びの評価基準
          </h2>
          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: 'var(--color-text-light)' }}
          >
            ゲーム買取びよりでは、買取サービスを以下の6つの評価基準から総合的にレビューしています。単一の指標だけでなく複数の観点を組み合わせることで、利用者の多様なニーズに応えられる公平な評価を実現しています。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {criteria.map((c) => (
              <div key={c.name} className="glass-card p-5">
                <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>
                  {c.name}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-light)' }}
                >
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-12">
          <h2 className="section-heading mb-6">
            <span className="section-heading-bar" />アフィリエイト表示に関する考え方
          </h2>
          <div className="glass-card p-6">
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--color-text-light)' }}
            >
              本サイトはアフィリエイトプログラムに参加しており、紹介するサービスを利用していただくことで当社が報酬を得ることがあります。ただし、掲載順位や評価内容は、アフィリエイト報酬の金額や有無によって左右されることはありません。上記「4つの記事制作ポリシー」および「評価基準」に基づき、独自の視点で公正に評価しています。掲載情報は記事執筆時点のものであり、最新の状況は必ず各買取サービスの公式サイトにてご確認ください。
            </p>
          </div>
        </section>

        {/* Operator */}
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
            <Link href="/privacy/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>
                プライバシーポリシー
              </p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>
                個人情報の取り扱いについて
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
