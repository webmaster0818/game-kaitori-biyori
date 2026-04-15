import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ゲーム買取よくある質問30選｜疑問を全て解決【2025年】',
  description:
    'ゲーム買取に関するよくある質問30問を6カテゴリ（基本・方法・相場・準備・トラブル・その他）で徹底解説。初めてゲームを売る方から経験者まで、全ての疑問にお答えします。',
  keywords: ['ゲーム買取 よくある質問', 'ゲーム 売る 質問', 'ゲーム買取 FAQ'],
  openGraph: {
    title: 'ゲーム買取よくある質問30選｜疑問を全て解決【2025年】',
    description: 'ゲーム買取に関するよくある質問30問を6カテゴリで徹底解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const faqCategories = [
  {
    category: '基本',
    faqs: [
      { q: 'ゲーム買取とは何ですか？', a: 'ゲーム買取とは、不要になったゲーム機やソフトを買取業者に売却してお金に換えるサービスです。店舗持ち込み、宅配買取、出張買取の3つの方法があり、それぞれメリット・デメリットがあります。' },
      { q: '誰でもゲームを売ることができますか？', a: 'はい、基本的に誰でも売れます。ただし18歳未満の場合は保護者の同意が必要な買取業者がほとんどです。本人確認書類（運転免許証、マイナンバーカード等）の提示が必要です。' },
      { q: '売れないゲームはありますか？', a: '改造品、盗品、コピー品は買取不可です。また動作しない完全なジャンク品は業者によって対応が異なります。ダウンロード版のソフトはアカウントに紐づいているため売却できません。' },
      { q: 'ゲーム以外も一緒に売れますか？', a: 'ティファナではゲーム・トレカ・フィギュア・DVD・ブルーレイなどをまとめて売ることができます。買取ウリエルでも幅広いジャンルに対応しています。' },
      { q: '買取にかかる費用はありますか？', a: '基本的に査定料・送料（条件あり）・出張費は無料のサービスがほとんどです。ただし査定後にキャンセルした場合の返送料は自己負担になることがあるため、事前に確認しましょう。' },
    ],
  },
  {
    category: '方法',
    faqs: [
      { q: '宅配買取の流れを教えてください。', a: '1.Webで申し込み → 2.梱包キット受け取り → 3.ゲームを梱包して発送 → 4.査定結果の連絡 → 5.承諾すれば入金。申し込みから入金まで1〜2週間が目安です。' },
      { q: '出張買取はどのように利用しますか？', a: '買取ウリエルに電話またはWebで出張買取を予約します。スタッフが自宅に訪問し、その場で査定・現金支払いをしてくれます。大量のゲームがある場合に便利です。' },
      { q: '店舗買取と宅配買取はどちらが高く売れますか？', a: '一概には言えませんが、ヒカカク！で複数社に一括査定して最高値を比較するのが最も確実です。店舗はその場で現金化できるメリットがあり、宅配は自宅から発送できる手軽さがあります。' },
      { q: '一括査定とは何ですか？', a: 'ヒカカク！のサービスで、1回の申し込みで最大20社の買取業者に同時に査定を依頼できます。各社の買取価格を比較して最高値の業者を選べるため、最もお得に売ることができます。' },
      { q: 'フリマアプリと買取業者、どちらが高く売れますか？', a: 'フリマアプリのほうが高く売れるケースが多いですが、出品・やりとり・梱包・発送の手間がかかります。手間を考慮すると、買取業者に売るほうが時間効率が良い場合があります。' },
    ],
  },
  {
    category: '相場',
    faqs: [
      { q: 'ゲームの買取相場はどうやって調べますか？', a: 'ヒカカク！で一括査定するのが最も簡単で正確です。メルカリの売買履歴も参考になりますが、個人売買と業者買取では価格が異なるため注意が必要です。' },
      { q: '新品と中古で買取価格はどのくらい違いますか？', a: '未開封の新品は定価の70〜90%程度で買取されることがあります。開封済みの美品は定価の40〜70%程度が目安です。使用感のある中古品はさらに下がります。' },
      { q: '限定版は通常版より高く売れますか？', a: 'はい、コレクターズエディションや限定版は通常版の2〜5倍の価格がつくことがあります。特に未開封品や数量限定のものはプレミア価格になりやすいです。' },
      { q: '買取相場は季節によって変わりますか？', a: 'はい、年末商戦前（10〜11月）や夏休み前（7月）は需要が高まるため買取価格が上がります。逆に新型ハードの発表直後は旧モデルの価格が下がります。' },
      { q: 'レトロゲームの価値は上がっていますか？', a: 'プレミアソフトの多くは年々価値が上昇しています。特に生産数が少なく、リメイクされていないタイトルは希少性が高まり続けています。ただし全てのレトロゲームが値上がりするわけではありません。' },
    ],
  },
  {
    category: '準備',
    faqs: [
      { q: '売る前に初期化は必要ですか？', a: 'はい、必ず初期化してください。個人情報（アカウント情報、クレジットカード情報、セーブデータ等）が残ったままだと、情報流出のリスクがあります。また初期化されていないと買取を断られることもあります。' },
      { q: 'データのバックアップは取るべきですか？', a: 'はい、初期化前に必ずバックアップを取りましょう。クラウドセーブ（Switch Online、PS Plus）やUSBストレージへのバックアップが可能です。初期化後はデータを復元できません。' },
      { q: '本体の清掃はどの程度すればいいですか？', a: '柔らかい布で表面のホコリや指紋を拭き取り、端子部分はエアダスターで清掃するだけで十分です。水や洗剤は使わず、分解清掃も避けてください。見た目がきれいなだけで査定額が上がります。' },
      { q: 'アカウントの連携解除を忘れたらどうなりますか？', a: '次のオーナーがアカウントを登録できなくなり、買取業者から連絡が来ることがあります。最悪の場合、買取がキャンセルされることもあります。売る前に必ずアカウントの連携を解除しましょう。' },
      { q: '付属品が一部ない場合はどうすればいいですか？', a: '付属品なしでも買取可能ですが、欠品分だけ減額されます。HDMIケーブルなど汎用品は安価に購入して同梱することで減額を回避できる場合があります。' },
    ],
  },
  {
    category: 'トラブル',
    faqs: [
      { q: '査定額に納得できない場合はキャンセルできますか？', a: 'はい、多くの買取サービスでは査定額に納得できない場合にキャンセル可能です。ただし宅配買取の場合、返送料が自己負担になることがあるため、事前にキャンセルポリシーを確認しましょう。' },
      { q: '配送中にゲーム機が壊れた場合は補償されますか？', a: '宅配買取では配送保険が適用されるサービスが多いですが、梱包が不十分な場合は補償対象外になることがあります。しっかりと緩衝材で保護して梱包しましょう。' },
      { q: '買取金額が振り込まれない場合はどうすればいいですか？', a: '通常、査定承諾後1〜3営業日以内に振り込まれます。振り込まれない場合は買取業者のカスタマーサポートに連絡しましょう。振込先口座の情報に誤りがないかも確認してください。' },
      { q: '査定後に追加で減額されることはありますか？', a: '事前申告していなかった傷や故障が見つかった場合、査定額が下がることがあります。正直に状態を申告し、可能であれば写真を添えて査定に出すことで、追加減額のリスクを減らせます。' },
      { q: '個人情報の取り扱いは安全ですか？', a: '大手の買取業者は個人情報保護法に基づいて適切に管理しています。ただし本体の初期化は自分で必ず行い、買取業者任せにしないことが重要です。利用前にプライバシーポリシーを確認しましょう。' },
    ],
  },
  {
    category: 'その他',
    faqs: [
      { q: '海外版のゲームは売れますか？', a: '海外版も買取可能な業者はありますが、日本語版と比較して大幅に安くなるケースがほとんどです。ヒカカク！で海外版の取扱がある業者を検索するのがおすすめです。' },
      { q: 'ゲーム以外のものも一緒に売れますか？', a: 'ティファナではゲーム・トレカ・フィギュア・DVD・家電などを一緒に買い取ってもらえます。買取ウリエルでも幅広いジャンルに対応しています。不用品をまとめて処分したい場合に便利です。' },
      { q: 'amiibo やゲーム周辺機器も売れますか？', a: 'はい、amiiboやコントローラー、ヘッドセットなどのゲーム周辺機器も買取対象です。特にレアなamiiboはプレミア価格がつくことがあります。' },
      { q: '買取と下取りの違いは何ですか？', a: '買取は現金（または振込）で支払いを受けること、下取りは次の購入品の代金から差し引くことです。一般的に買取のほうが自由度が高く、複数社で比較できるため高値がつきやすいです。' },
      { q: 'どの買取サービスを選べばいいですか？', a: 'まずヒカカク！で最大20社に一括査定し、最高値の業者を見つけるのがおすすめです。急いで現金化したい場合は買取ウリエルの出張買取、店舗持ち込みで即現金化したい場合はティファナが便利です。' },
    ],
  },
];

const allFaqs = faqCategories.flatMap((cat) => cat.faqs);

export default function FAQPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'よくある質問' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>FAQ</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲーム買取 よくある質問30選
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ゲーム買取に関する疑問を6カテゴリ・30問で徹底解説。基本的な質問から準備・トラブル対応まで、初めてゲームを売る方も安心の完全ガイドです。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Category Navigation */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2">
            {faqCategories.map((cat) => (
              <a
                key={cat.category}
                href={`#${cat.category}`}
                className="tag-pill text-xs px-4 py-2"
                style={{ background: 'var(--color-bg-alt)', color: 'var(--color-deep-blue)' }}
              >
                {cat.category}
              </a>
            ))}
          </div>
        </section>

        {/* FAQ by Category */}
        {faqCategories.map((cat) => (
          <section key={cat.category} id={cat.category} className="mb-12">
            <h2 className="section-heading mb-6"><span className="section-heading-bar" />{cat.category}に関する質問</h2>
            <div>
              {cat.faqs.map((faq, i) => (
                <details key={i} className="faq-item">
                  <summary>{faq.q}</summary>
                  <div className="faq-answer">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>
        ))}

        {/* JSON-LD for all FAQs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: allFaqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: { '@type': 'Answer', text: faq.a },
              })),
            }),
          }}
        />

        {/* CTA */}
        <section className="glass-card-dark p-8 text-center">
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>
            疑問が解決したら<span style={{ color: 'var(--color-electric-green)' }}>買取査定</span>してみましょう
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            最大20社に一括査定して、あなたのゲームの最高買取価格を確認しましょう。
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
            <Link href="/knowledge/preparation/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>売る前の準備</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>初期化・データ消去の手順</p>
            </Link>
            <Link href="/knowledge/timing/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>売り時ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>いつ売るのがベストか</p>
            </Link>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/knowledge/broken/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ジャンク品買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>壊れたゲーム機でも売れる？</p>
            </Link>
            <Link href="/knowledge/boxless/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>箱なし・付属品なし</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なしでも売れるか詳しく解説</p>
            </Link>
            <Link href="/knowledge/bulk/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>まとめ売り</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>まとめ売りのメリットとコツ</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
