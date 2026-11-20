import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'

const PAGE_TITLE = 'ヒカカク！の評判・口コミは怪しい？メール停止・退会の方法と口コミ1,083件の星分布、利用規約で検証【2026年11月】';
const PAGE_DESCRIPTION =
  'ヒカカク！の申込後のメールは公式FAQで「配信停止の手続きなし」とされ、業者からの連絡は各業者への直接連絡、個人情報の利用停止は運営会社の窓口への請求で対応します。退会手順と、公式クチコミ1,083件・評価3.4の星分布も11月20日に確認して解説します。';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: ['ヒカカク 評判', 'ヒカカク 口コミ', 'ヒカカク メール 停止', 'ヒカカク 迷惑メール', 'ヒカカク 退会', 'ヒカカク 怪しい', 'ヒカカク ゲーム買取', 'ゲーム 一括査定', 'ゲーム買取 比較'],
  openGraph: {
    images: ['/og.png'],
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const features = [
  { title: '最大20社一括査定', description: '一度の申込みで、最大20社の買取業者から見積もりが届きます。各社の査定額を並べて比較できる一括査定サービスで、業者ごとに個別に申し込む必要はありません。' },
  { title: 'ゲーム専門業者多数', description: 'ゲーム買取に特化した専門業者が多数参加しています。レトロゲームからSwitch・PS5の最新ゲームまで、専門知識を持つ業者の査定を受けられます。' },
  { title: '無料で利用可能', description: '査定の申込みから結果の受取りまで無料で、利用料・手数料はかかりません。複数社の買取価格を費用をかけずに比較できます。' },
  { title: '全国対応', description: '参加業者は全国に展開しています。宅配買取に対応する業者が多いため、地方にお住まいの方も複数社の査定額を比較できます。一部の業者は出張買取・店舗買取にも対応しています。' },
];

const steps = [
  { step: 1, title: '商品情報を入力', description: '売りたいゲームの名前・状態・付属品の有無をフォームに入力します。写真をアップロードすると、より正確な査定を受けられます。' },
  { step: 2, title: '一括査定を申し込む', description: '入力内容を確認して送信すると、最大20社の買取業者に一括で査定依頼が送られます。業者ごとに個別に申し込む必要はありません。' },
  { step: 3, title: '査定結果を比較', description: '各業者から査定結果が届きます。買取価格・サービス内容・口コミを比較して、最も条件の良い業者を選ぶことをおすすめします。' },
  { step: 4, title: '買取を依頼', description: '条件に納得できる業者が見つかりましたら、その業者の手順に従って買取を依頼します。宅配キットの手配から集荷までは、各業者が案内します。' },
];

const targets = [
  { category: 'ゲーム機本体', items: ['Nintendo Switch（有機EL・通常・Lite）', 'PlayStation 5 / PS4 / PS3', 'Xbox Series X/S', 'Nintendo 3DS / DS', 'レトロゲーム機（ファミコン・スーファミ・ゲームボーイ等）'] },
  { category: 'ゲームソフト', items: ['Switch用ソフト', 'PS5 / PS4用ソフト', 'レトロゲームソフト', '限定版・コレクターズエディション', '未開封品'] },
  { category: '周辺機器', items: ['コントローラー', 'ヘッドセット', 'アーケードスティック', 'メモリーカード', 'ケーブル・充電器'] },
];

const faqs: { q: string; a: string; url?: string }[] = [
  { q: 'ヒカカク！の利用に料金はかかりますか？', a: 'いいえ、無料です。査定の申込みから結果の受取りまで、利用料・手数料はかかりません。何度利用しても無料です。' },
  { q: '査定結果はどのくらいで届きますか？', a: 'ヒカカク！公式のよくあるご質問では、申込後およそ数日以内に、各買取業者から買取の可否や見積額を記載した査定結果メールが届くと案内されています。商品の状態や年代によっては値段が付かず、1社も査定結果が返信されない場合もあるとされています（2026年10月31日公式確認）。' },
  { q: '査定後にキャンセルできますか？', a: '査定フォームには「査定価格に納得しない場合は買取依頼しなくてもOK」と記載されています。ただし申込後は買取業者とお客様の直接取引となるため、キャンセルを希望する場合は各業者へ直接連絡する必要があります。申込後に商品情報や個人情報を変更することもできません（2026年10月31日公式確認）。' },
  { q: 'ヒカカク！に申し込むと電話がかかってきますか？', a: '査定フォームでは電話番号の入力が必須で、申込時にSMSで届く6桁の認証コードを入力します。査定や買取の連絡は、ヒカカク！ではなく各買取業者から直接届く仕組みです。公式には業者からの連絡手段（メール・電話）の内訳は示されていませんが、公式クチコミには業者から電話が来たという声があります。なお、ヒカカク！自体は電話での問い合わせに対応しておらず、問い合わせはフォームまたは公式LINEで受け付けています（2026年10月31日公式確認）。', url: 'https://hikakaku.com/%E3%82%88%E3%81%8F%E3%81%82%E3%82%8B%E3%81%94%E8%B3%AA%E5%95%8F/' },
  { q: 'ヒカカク！のメールを停止することはできますか？', a: 'ヒカカク！公式のよくあるご質問では、査定申込完了後のメールには配信停止の手続きがないと案内されています。会員登録の有無にかかわらず、一括査定の利用者全員に申込に関する一連のメールが送られます。メールマガジンだけを止める手順も、よくあるご質問には記載されていません。個人情報の利用そのものを止めたい場合は、プライバシーポリシー第5条にもとづき、株式会社じげん 個人情報相談窓口（privacy@zigexn.co.jp）へ書面または電子メールで利用停止を請求できます（2026年11月20日公式確認）。', url: 'https://hikakaku.com/%E3%82%88%E3%81%8F%E3%81%82%E3%82%8B%E3%81%94%E8%B3%AA%E5%95%8F/' },
  { q: '業者からの迷惑メールや電話を止めるにはどうすればよいですか？', a: '一括査定を申し込むと、見積依頼フォームの入力内容（氏名・住所・連絡先等）が提携買取業者に提供されます（プライバシーポリシー第4条）。申込後は業者とお客様の直接取引となるため、取りやめや連絡の停止を希望する場合は、各業者へ直接連絡するよう公式に案内されています。ヒカカク！側で業者からの連絡を一括で止める手続きは、公式には記載されていません（2026年11月20日公式確認）。', url: 'https://hikakaku.com/%E3%83%97%E3%83%A9%E3%82%A4%E3%83%90%E3%82%B7%E3%83%BC%E3%83%9D%E3%83%AA%E3%82%B7%E3%83%BC/' },
  { q: 'ヒカカク！を退会する方法を教えてください。', a: 'ログイン後、マイページ→「設定」→「お客様情報編集」→画面右下の「退会ご希望の方」から退会フォームへ進み、退会理由（10文字以上）を入力して「退会する」を押します（公式コラムの手順。記事内の情報は2024年11月時点と記載）。LINE連携でログインしている場合はメールアドレスの入力は不要です。退会しても送信済みの個人情報は削除できないとされています（2026年11月20日公式確認）。', url: 'https://hikakaku.com/blog/all-category/10735/' },
  { q: 'レトロゲームでも査定してもらえますか？', a: '査定フォームの商品カテゴリには「古本・CD・DVD・ゲーム」があり、レトロゲームも申し込めます。参加業者の数や査定額は商品や地域によって異なり、公式でも値段が付かない場合があると案内されています。箱・説明書の有無で査定が変わりやすいため、付属品の状態も入力することをおすすめします。' },
  { q: '壊れたゲーム機も査定してもらえますか？', a: 'ジャンク品の買取に対応している業者も参加しています。故障の程度によって異なりますが、まずは査定を申し込むことをおすすめします。部品取りを目的とした買取が行われる場合もあります。' },
  { q: '本査定で金額が下がった場合はどうなりますか？', a: 'ヒカカク！の利用規約（第6条1項）では、取引価格や梱包・郵送費用の負担、入金方法などの取引条件はユーザーと買取業者の間で決めるとされています。また、業者との取引で生じたトラブルにヒカカク！は関与しないと定められています（第5条4項）。本査定で減額された場合に買取をやめられるか、返送料をどちらが負担するかは、依頼する業者の買取条件で確認してください（2026年11月11日公式確認・利用規約の最終改定日 2024年10月1日）。', url: 'https://hikakaku.com/%E5%88%A9%E7%94%A8%E8%A6%8F%E7%B4%84/' },
  { q: '個人情報は安全ですか？', a: 'ヒカカク！のプライバシーポリシーをご確認ください。', url: 'https://hikakaku.com/%E3%83%97%E3%83%A9%E3%82%A4%E3%83%90%E3%82%B7%E3%83%BC%E3%83%9D%E3%83%AA%E3%82%B7%E3%83%BC/' },
];

export default function HikakakuReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": PAGE_TITLE, "description": PAGE_DESCRIPTION, "datePublished": "2026-03-15", "dateModified": "2026-11-20", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較している編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'レビュー', href: '/' }, { name: 'ヒカカク！' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="rank-badge rank-badge-1">1</span>
            <span className="tag-pill text-xs" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>おすすめ1位</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ヒカカク！の評判・口コミは怪しい？<span className="text-base md:text-lg font-normal ml-2" style={{ color: '#CBD5E1' }}>メール停止・退会の方法と口コミ1,083件の星分布、利用規約で検証</span>
          </h1>
          <div className="rounded-lg p-4 mb-4 text-sm leading-relaxed" style={{ background: 'rgba(255,255,255,0.08)', color: '#E2E8F0' }}>
            <p className="font-bold mb-2" style={{ color: '#FFFFFF' }}>ヒカカク！のメールを止めたい方へ（2026年11月20日 公式確認）</p>
            <ul className="space-y-1">
              <li>・<strong>ヒカカク！から届く査定申込のメール</strong>：公式FAQで「配信停止のお手続きがございません」と案内されています。会員登録の有無にかかわらず届きます。</li>
              <li>・<strong>買取業者からのメール・電話</strong>：申込後は業者との直接取引のため、取りやめや連絡の停止は各業者へ直接伝えます。</li>
              <li>・<strong>個人情報の利用停止</strong>：プライバシーポリシー第5条にもとづき、運営会社（株式会社じげん）の個人情報相談窓口へ書面または電子メールで請求できます。</li>
              <li>・<strong>退会</strong>：マイページ→設定→お客様情報編集→「退会ご希望の方」から手続きします。送信済みの個人情報は削除できないとされています。</li>
            </ul>
            <p className="mt-2"><a href="#mail-stop" className="underline">手順と根拠の詳細はこちら</a>／公式クチコミは総合評価3.4・1,083件（11月20日確認）</p>
          </div>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ヒカカク！は、最大20社に一括で査定を依頼できる買取比較サイトです。ゲーム機・レトロゲーム・ゲームソフトも申し込めて、無料で複数社の買取価格を比較できます。一方で、申込内容は複数の買取業者に提供されるため、申込後は各業者から個別に連絡が届きます。当サイトでは、公式のよくあるご質問・利用規約・プライバシーポリシーをもとに、連絡の仕組みと止め方を整理しています。
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
            <h2 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！の位置づけ：買取業者ではなく一括査定の窓口です</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              ヒカカク！は最大20社に一括で査定依頼を送れる買取比較プラットフォームで、ヒカカク！自体が買取を行うわけではありません。「怪しい」「連絡がしつこい」という声は、申込後に複数の買取業者から個別に連絡が来る一括査定の仕組みに由来するもので、詐欺的なサービスという意味ではありません。手間をかけずに相見積もりを取り、より高い買取価格を探したい方に適していますが、複数業者からの連絡を避けたい方には向いていません。まず「現在どの業者が最も高いか」を確認したい方は、当サイトが<strong>定期的に実測している買取価格DB</strong>で相場を確認してからご利用いただくと、査定額が妥当かどうかを判断しやすくなります。
            </p>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
              関連：<Link href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>現在最も高い業者を買取価格DBで確認する</Link>／<Link href="/condition-guide/" style={{ color: 'var(--color-electric-green)' }}>箱なし・傷ありの商品の売却可否を状態別マップで確認する</Link>／<Link href="/compare/mercari-vs-kaitori/" style={{ color: 'var(--color-electric-green)' }}>メルカリと買取の手取り額をシミュレーションで比較する</Link>
            </p>
          </div>
        </section>

        {/* メール停止・迷惑メール・退会（公式FAQ・規約・プライバシーポリシー） */}
        <section className="mb-12" id="mail-stop">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ヒカカク！のメールを停止する方法：迷惑メール・業者からの連絡・退会（公式で確認）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            ヒカカク！の申込後に届くメールは、送り主によって止め方が異なります。プライバシーポリシー第4条では、一括査定を申し込むと、氏名・住所・連絡先など見積依頼フォームの入力内容が、ヒカカク！が適切と判断した提携買取業者に提供されると定められています。そのため、ヒカカク！からのメールとは別に、複数の業者から個別にメールや電話が届きます。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table text-sm">
              <thead><tr><th>届く連絡</th><th>止め方（公式の案内）</th><th>根拠</th></tr></thead>
              <tbody>
                <tr><th>ヒカカク！から届く査定申込に関するメール</th><td>配信停止の手続きはありません。会員登録の有無にかかわらず、一括査定の利用者全員に一連のメールが送られます</td><td>よくあるご質問「査定後に届くメールの配信停止をしたい」</td></tr>
                <tr><th>買取業者からのメール・電話</th><td>申込後は業者との直接取引となるため、取りやめを希望する場合は各業者へ直接連絡します。業者からのメッセージはマイページでも確認できます</td><td>よくあるご質問「査定をキャンセルしたい」「メールで送られてきたリンク先が開けません」</td></tr>
                <tr><th>キャンペーン・お知らせ・提携先のサービス案内</th><td>利用規約第4条で、サービスやキャンペーンの連絡、買取事業者・第三者から委託を受けた案内を電話・電子メールで行うことがあると定められています。メールマガジンだけを止める手順は、よくあるご質問には記載されていません</td><td>利用規約 第4条、プライバシーポリシー 第3条（利用目的にメールマガジン配信を記載）</td></tr>
                <tr><th>個人情報の利用そのもの</th><td>本人または代理人が書面（電子メールを含む）で、開示・訂正・利用停止を請求できます。請求先は株式会社じげん 個人情報相談窓口（〒105-0001 東京都港区虎ノ門3-4-8／privacy@zigexn.co.jp）です</td><td>プライバシーポリシー 第5条（最終改定 2024年12月16日）</td></tr>
              </tbody>
            </table>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>退会の手順</h3>
              <ol className="text-sm leading-relaxed space-y-1" style={{ color: 'var(--color-text-light)' }}>
                <li>1. ヒカカク！にログインしてマイページを開く</li>
                <li>2. 「設定」→「お客様情報編集」を開く</li>
                <li>3. 画面右下の「退会ご希望の方」から退会フォームへ進む</li>
                <li>4. 退会理由（10文字以上・必須）を入力し「退会する」を押す</li>
              </ol>
              <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>LINE連携でログインしている場合、メールアドレスの入力は不要です。退会後は情報を復元できません。退会しても、送信済みの個人情報は削除できないとされています。退会によって申込済みの査定に関するメールや業者からの連絡が止まるかどうかは、公式に記載がありません。</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>迷惑メールとして振り分ける場合の注意</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                ヒカカク！のメールは @hikakaku.com のドメインから送られると、よくあるご質問の受信設定の案内に記載されています。このドメインを迷惑メールに振り分けると、査定結果の案内も見落とすおそれがあります。売却を続ける場合は、業者からのメッセージをマイページで確認する方法もあります。電話を避けたい場合は、業者から最初に連絡が来た際に、以降はメールまたはマイページのメッセージで連絡するよう伝える方法がありますが、対応は業者によって異なります。
              </p>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：<a href="https://hikakaku.com/%E3%82%88%E3%81%8F%E3%81%82%E3%82%8B%E3%81%94%E8%B3%AA%E5%95%8F/" target="_blank" rel="nofollow noopener" className="underline">ヒカカク！公式 よくあるご質問</a>、<a href="https://hikakaku.com/%E5%88%A9%E7%94%A8%E8%A6%8F%E7%B4%84/" target="_blank" rel="nofollow noopener" className="underline">利用規約</a>（最終改定 2024年10月1日）、<a href="https://hikakaku.com/%E3%83%97%E3%83%A9%E3%82%A4%E3%83%90%E3%82%B7%E3%83%BC%E3%83%9D%E3%83%AA%E3%82%B7%E3%83%BC/" target="_blank" rel="nofollow noopener" className="underline">プライバシーポリシー</a>（最終改定 2024年12月16日）、退会手順は公式コラム<a href="https://hikakaku.com/blog/all-category/10735/" target="_blank" rel="nofollow noopener" className="underline">「ヒカカク！を退会する方法は？」</a>（更新日 2026年1月26日・記事内の情報は2024年11月時点と記載）。いずれも2026年11月20日閲覧。当サイトはログインが必要な画面を確認していないため、画面の表記は変わっている場合があります。</p>
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
                <li>+ 無料で利用できる</li>
                <li>+ ゲーム専門の買取業者が多数参加</li>
                                <li>+ 全国対応（出張買取・宅配買取・店舗買取）</li>
                <li>+ 業者の口コミ・評判を参考にできる</li>
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
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ヒカカク！のサービス概要・会社情報（2026年6月18日時点）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <tbody>
                <tr><th>運営会社</th><td className="text-sm">株式会社じげん（2024年にヒカカク!事業を承継・合併。旧運営は株式会社ジラフ）</td></tr>
                <tr><th>所在地</th><td className="text-sm">東京都港区虎ノ門三丁目4番8号</td></tr>
                <tr><th>サービス形態</th><td className="text-sm">買取価格の比較・最大20社への一括査定を仲介するプラットフォーム（<strong>ヒカカク!自身は買い取らず</strong>、複数の買取業者を仲介）</td></tr>
                <tr><th>利用料金</th><td className="text-sm">無料</td></tr>
                <tr><th>申込フロー</th><td className="text-sm">商品情報を入力→最短1日で各社からメール→価格を比較→業者を選んで宅配・出張・店頭で買取（電話番号の入力が必須）</td></tr>
                <tr><th>注意点</th><td className="text-sm">表示価格・査定額は参考値で保証はなし（仮査定と本査定に差が出る場合あり）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ヒカカク!公式（サービス案内・運営会社変更のお知らせ）、株式会社ジラフ プレスリリース（2026年6月18日閲覧）。ヒカカク!は買取業者ではなく「買取の比較・一括査定サイト」です。</p>
        </section>

        {/* 口コミ傾向（出典付き） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />口コミ・評判の傾向と営業電話の実態</h2>
          <div className="glass-card p-6">
            <p className="text-sm mb-3" style={{ color: 'var(--color-text-light)' }}>
              ヒカカク!公式のクチコミページでは、総合評価<strong>3.4点（5点満点）・1,083件</strong>、「悪い・ひどい・買取が安い」というクチコミが<strong>32.5%</strong>です（2026年10月15日閲覧・11月20日の再確認でも件数・割合は同じ）。評価が星5と星1に分かれる<strong>二極化</strong>が特徴です。また「最大20社に一括で依頼する」仕組みのため、<strong>複数業者からの営業電話が集中しやすい</strong>点に最も注意が必要です。
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="comparison-table text-sm">
                <thead><tr><th>評価</th><th>件数</th><th>割合</th></tr></thead>
                <tbody>
                  <tr><td>★5</td><td>425件</td><td>39.2%</td></tr>
                  <tr><td>★4</td><td>200件</td><td>18.5%</td></tr>
                  <tr><td>★3</td><td>106件</td><td>9.8%</td></tr>
                  <tr><td>★2</td><td>86件</td><td>7.9%</td></tr>
                  <tr><td>★1</td><td>266件</td><td>24.6%</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs mb-4" style={{ color: 'var(--color-text-light)' }}>出典：<a href="https://hikakaku.com/hikakaku_reviews/" target="_blank" rel="nofollow noopener" className="underline">ヒカカク!公式 クチコミページ</a>の星別件数（2026年10月15日閲覧・11月20日再確認で同じ件数。割合は当サイトが件数から計算）。11月20日時点の最新の投稿は2026年3月19日です。第三者の口コミサイト「みん評」では平均2.73（7件・カテゴリ平均と同じ）と表示されています（検索結果の表示で確認。ページ本体は当サイトの環境から閲覧できませんでした）。</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold mb-1" style={{ color: 'var(--color-electric-green)' }}>良い評価の傾向</p>
                <ul className="space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・一度の入力で複数社の査定を比較でき、買取価格の高い業者を探しやすい</li>
                  <li>・無料で、査定のみの利用も可能</li>
                  <li>・買取相場や業者の口コミを調べられる</li>
                  <li>・業者の対応が丁寧・親切だった（公式クチコミで多い声）</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-1" style={{ color: 'var(--color-accent-orange)' }}>気になる評価の傾向</p>
                <ul className="space-y-1" style={{ color: 'var(--color-text-light)' }}>
                  <li>・<strong>複数業者からの営業電話が集中しやすい</strong></li>
                  <li>・表示価格は参考値で、本査定と差が出ることがある</li>
                  <li>・電話番号の入力が必須</li>
                  <li>・「値段が付かない」「チャットの提示額と本査定が違いすぎる」「返信がない業者がいる」（公式クチコミの低評価で多い声）</li>
                  <li>・一度出した査定依頼を取り消せない・サイトが使いにくいという指摘</li>
                </ul>
              </div>
            </div>
            <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>電話での連絡を避けたい方は、業者から最初の連絡が来た際に、以降の連絡をメールまたはマイページのメッセージで行うよう伝える方法があります（業者によって対応は異なります）。申込後の連絡の仕組みは下の「申込後の連絡と手続き」で、公式の案内をもとに整理しています。出典：ヒカカク!公式クチコミページ（2026年10月15日閲覧・表示分の口コミを当サイトが要約）。当サイトでは体験談の創作は行っていません。</p>
          </div>
        </section>

        {/* 申込後の連絡と手続き（公式FAQ・査定フォーム） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />申込後の連絡と手続き：電話・メール・キャンセル（公式で確認）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            「ヒカカク 電話 かかってくる」「ヒカカク 迷惑メール」と検索される方が多いため、申込前に知っておきたい点を、ヒカカク！公式のよくあるご質問と査定フォームの記載で確認しました。結論として、<strong>電話番号の入力とSMS認証は必須</strong>で、<strong>申込後のメールは配信停止できません</strong>。連絡が増えることを前提に申し込むかどうかを判断いただくのが確実です。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table text-sm">
              <thead><tr><th>項目</th><th>公式の案内（2026年10月31日確認。よくあるご質問の記載は11月20日に再確認）</th></tr></thead>
              <tbody>
                <tr><th>電話番号</th><td>査定フォームで入力必須。申込時にSMSで届く6桁の認証コードを入力します</td></tr>
                <tr><th>査定の連絡元</th><td>ヒカカク！は業者の紹介のみで、査定・買取の連絡は各買取業者から直接届きます（最大20社）</td></tr>
                <tr><th>査定結果の届き方</th><td>およそ数日以内に各業者から査定結果メール。値段が付かない場合は1社も返信が無いこともあります</td></tr>
                <tr><th>申込後のメール</th><td>配信停止の手続きはありません（会員登録の有無にかかわらず、申込に関する一連のメールが届きます）。止め方の詳細は<a href="#mail-stop" className="underline">メール停止の節</a>をご覧ください</td></tr>
                <tr><th>キャンセル</th><td>申込後は業者との直接取引のため、各業者へ直接連絡します。申込内容の変更はできません</td></tr>
                <tr><th>個人情報</th><td>提供した情報の削除はできないとされています。退会手続きは公式サイトから可能です</td></tr>
                <tr><th>ヒカカク！への問い合わせ</th><td>電話は非対応。お問い合わせフォームまたは公式LINE</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：<a href="https://hikakaku.com/%E3%82%88%E3%81%8F%E3%81%82%E3%82%8B%E3%81%94%E8%B3%AA%E5%95%8F/" target="_blank" rel="nofollow noopener" className="underline">ヒカカク！公式 よくあるご質問</a>、ヒカカク！公式 査定フォーム（いずれも2026年10月31日閲覧）。業者ごとの連絡手段（メール・電話の別）は公式に示されていないため、当サイトでは断定していません。</p>
        </section>

        {/* 本査定で減額・トラブル時の責任（利用規約） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />本査定で金額が下がった・トラブルになったとき：利用規約の定め</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
            公式クチコミの低評価には「チャットの提示額と本査定が違いすぎる」という声があります。ヒカカク！の利用規約では、<strong>買取価格や送料などの取引条件はユーザーと買取業者の間で決める</strong>ものとされ、<strong>業者との取引で生じたトラブルにヒカカク！は関与しない</strong>と定められています。減額や送料の負担については、ヒカカク！ではなく、買取を依頼する業者の条件で確認する必要があります。
          </p>
          <div className="overflow-x-auto">
            <table className="comparison-table text-sm">
              <thead><tr><th>条文</th><th>利用規約の定め（要旨）</th><th>申込前に確認したいこと</th></tr></thead>
              <tbody>
                <tr><th>第5条4項</th><td>ユーザーと買取業者の取引・契約でトラブルや紛争が生じた場合、当社は一切関与しない</td><td>トラブル時の連絡先は買取業者になります。業者の会社名・古物商許可番号を控えておくと安心です</td></tr>
                <tr><th>第6条1項</th><td>取引価格、梱包費用・郵送費用などの費用負担、入金方法・時期、買取形式は、ユーザーと買取業者の間で決定する</td><td>本査定で減額された場合の返送料、振込手数料の負担を、業者の買取条件で確認します</td></tr>
                <tr><th>第6条2項</th><td>本サイトの利用でユーザーに請求する費用は原則無料</td><td>ヒカカク！の利用自体に料金はかかりません</td></tr>
                <tr><th>第7条1項・2項</th><td>掲載情報の正確性・速報性・完全性は保証せず、掲載情報によって生じた損害について責任を負わない</td><td>サイト上の買取相場や仮の見積額は目安として扱い、最終的な金額は本査定で確認します</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：<a href="https://hikakaku.com/%E5%88%A9%E7%94%A8%E8%A6%8F%E7%B4%84/" target="_blank" rel="nofollow noopener" className="underline">ヒカカク！公式 利用規約</a>（最終改定日 2024年10月1日・2026年11月11日閲覧。要旨は当サイトがまとめたもので、正確な文言は規約本文をご確認ください）。よくあるご質問には、見積額と本査定の差についての記載はありません（2026年11月11日確認）。</p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />よくある質問</h2>
          <div>
            {faqs.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary>{faq.q}</summary>
                <div className="faq-answer">{faq.a}{faq.url && (<><br /><a href={faq.url} target="_blank" rel="noopener noreferrer" className="underline break-all">{decodeURI(faq.url)}</a></>)}</div>
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
                  acceptedAnswer: { '@type': 'Answer', text: faq.url ? `${faq.a}${decodeURI(faq.url)}` : faq.a },
                })),
              }),
            }}
          />
        </section>

        {/* CTA */}
        <section className="glass-card-dark p-8 text-center">
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>
            ヒカカク！の<span style={{ color: 'var(--color-electric-green)' }}>無料一括査定</span>
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            最大20社の買取価格を比較し、より高い条件での売却をご検討ください。申込みは無料です。
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
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のサービスのレビュー</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/review/uriel/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-orange text-xs mb-2 inline-block">2位</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取ウリエル</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>出張買取対応・即日現金化</p>
            </Link>
            <Link href="/review/tifana/" className="glass-card p-4 card-hover block">
              <span className="tag-pill tag-pill-blue text-xs mb-2 inline-block">3位</span>
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ティファナ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ホビー系の買取に強みがあるリサイクルショップ</p>
            </Link>
          </div>
        </section>
        {/* 関連記事 */}
        <section style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--color-accent-soft-weak)', borderRadius: '12px', borderLeft: '3px solid var(--color-electric-green)' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>関連記事</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/kaitori-ranking/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取おすすめランキング15選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/switch/" style={{ color: 'var(--color-electric-green)' }}>Switch買取おすすめ3選</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/hardware/retro/" style={{ color: 'var(--color-electric-green)' }}>レトロゲーム機買取ガイド</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/method/online/" style={{ color: 'var(--color-electric-green)' }}>宅配買取の流れとポイント</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/knowledge/price-guide/" style={{ color: 'var(--color-electric-green)' }}>ゲーム買取価格ガイド</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/compare/shop-vs-online/" style={{ color: 'var(--color-electric-green)' }}>店舗買取 vs 宅配買取の比較</Link></li>
          </ul>
        </section>

        <AuthorBox />
      </div>
    </>
  );
}
