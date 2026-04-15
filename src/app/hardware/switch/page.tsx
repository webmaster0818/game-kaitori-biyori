import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Nintendo Switch買取おすすめ3選｜スイッチを高く売るコツ【2025年】',
  description:
    'Nintendo Switch・Switch Lite・Switch OLEDの買取相場とおすすめ買取サービス3社を徹底比較。スイッチ本体を高く売るコツ5つ、Joy-ConやProコントローラーの買取情報、初期化手順まで完全解説。',
  keywords: ['Switch 買取', 'ニンテンドースイッチ 売る', 'Switch 買取相場', 'Switch Lite 買取', 'Switch OLED 買取'],
  openGraph: {
    title: 'Nintendo Switch買取おすすめ3選｜スイッチを高く売るコツ【2025年】',
    description: 'Switch・Switch Lite・Switch OLEDの買取相場と高く売るコツを徹底解説。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const priceData = [
  { model: 'Nintendo Switch（通常モデル）', good: '18,000〜22,000円', fair: '12,000〜17,000円', poor: '5,000〜11,000円' },
  { model: 'Nintendo Switch Lite', good: '10,000〜14,000円', fair: '7,000〜9,000円', poor: '3,000〜6,000円' },
  { model: 'Nintendo Switch（有機ELモデル）', good: '25,000〜32,000円', fair: '18,000〜24,000円', poor: '10,000〜17,000円' },
];

const tips = [
  { title: '箱・外装を保管しておく', description: '購入時の箱があるだけで買取価格が1,000〜3,000円アップすることも。箱なしと箱ありでは査定額が大きく変わります。' },
  { title: '付属品を揃える', description: 'Joy-Con、ドック、ACアダプター、HDMIケーブルなどの純正付属品が揃っているほど高額査定に。欠品があると減額対象です。' },
  { title: '本体の状態を良く保つ', description: '画面の傷やJoy-Conのスティックドリフトは減額要因。保護フィルムやケースで普段から保護し、売る前に清掃しましょう。' },
  { title: '売却タイミングを見極める', description: '新モデル発表前が売り時。後継機の発売が近づくと旧モデルの価格は下がります。年末商戦前は需要が高まるため高値がつきやすい傾向があります。' },
  { title: '複数社で査定を比較する', description: '1社だけで決めるのはもったいない。ヒカカク！なら最大20社に一括査定できるため、最高値を簡単に見つけられます。' },
];

const services = [
  { name: 'ヒカカク！', feature: '最大20社一括査定', area: '全国対応', method: '宅配買取メイン', switchPoint: '複数業者の競争で最高値を狙える', rank: 1 },
  { name: '買取ウリエル', feature: '出張買取・即日現金化', area: '関東・関西', method: '出張買取', switchPoint: '自宅まで来てくれてその場で現金化', rank: 2 },
  { name: 'ティファナ', feature: '店舗+宅配買取', area: '東京近郊', method: '店舗・宅配', switchPoint: 'ゲーム周辺機器もまとめて売れる', rank: 3 },
];

const faqs = [
  { q: 'Switchの買取相場はどのくらいですか？', a: '状態や付属品の有無によりますが、通常モデルで12,000〜22,000円、有機ELモデルで18,000〜32,000円が目安です。箱・付属品完備の美品であれば上限に近い金額が期待できます。' },
  { q: 'Joy-ConやProコントローラーだけでも売れますか？', a: 'はい、単品でも買取可能です。Joy-Conは1セット2,000〜4,000円、Proコントローラーは2,500〜5,000円程度が相場です。スティックドリフトがなく状態が良いものほど高値がつきます。' },
  { q: 'Switch本体の初期化はどうやりますか？', a: '「設定」→「本体」→「初期化」→「本体の初期化」の順に進みます。ニンテンドーアカウントの連携解除も忘れずに。microSDカードのデータ消去も別途行ってください。' },
  { q: '箱なしでも買い取ってもらえますか？', a: 'はい、箱なしでも買取可能です。ただし箱ありと比較して1,000〜3,000円ほど減額される場合があります。付属品はできるだけ揃えて査定に出しましょう。' },
  { q: '改造・CFW導入済みのSwitchは売れますか？', a: '改造品は多くの買取業者で買取不可となります。未改造の状態に戻せる場合でも減額されるケースが多いです。正規品として査定に出すことをおすすめします。' },
  { q: 'いつ売るのが一番お得ですか？', a: '年末商戦前（10〜11月）や新学期前（2〜3月）は需要が高まるため高値がつきやすいです。逆に後継機の発表直後は価格が下がる傾向があるため、早めの売却がおすすめです。' },
];

export default function SwitchPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'ハード別', href: '/' }, { name: 'Nintendo Switch' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ハード別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            Nintendo Switch 買取ガイド
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            Switch・Switch Lite・Switch OLEDの買取相場を徹底調査。モデル別の買取価格、高く売るための5つのコツ、おすすめ買取サービス3社の比較まで、スイッチを売る前に知っておきたい情報を完全網羅しています。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Price Table */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />モデル別 買取相場一覧</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>※ 2025年時点の参考相場です。実際の買取価格は状態・付属品・時期により変動します。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>モデル</th>
                  <th>美品（箱あり）</th>
                  <th>良品</th>
                  <th>傷・汚れあり</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row) => (
                  <tr key={row.model}>
                    <td className="font-bold">{row.model}</td>
                    <td style={{ color: 'var(--color-electric-green)' }} className="font-bold">{row.good}</td>
                    <td>{row.fair}</td>
                    <td>{row.poor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />Switchを高く売る5つのコツ</h2>
          <div className="space-y-4">
            {tips.map((tip, i) => (
              <div key={tip.title} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{tip.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Comparison */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />おすすめ買取サービス3社比較</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>サービス</th>
                  <th>特徴</th>
                  <th>対応エリア</th>
                  <th>買取方法</th>
                  <th>Switchの強み</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.name}>
                    <td className="font-bold">{s.name}</td>
                    <td>{s.feature}</td>
                    <td>{s.area}</td>
                    <td>{s.method}</td>
                    <td>{s.switchPoint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Joy-Con / Pro Controller */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />Joy-Con・Proコントローラーも売れる？</h2>
          <div className="glass-card p-6">
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-light)' }}>
              Switch本体だけでなく、Joy-ConやProコントローラーなどの周辺機器も買取対象です。特に限定カラーや特別デザインのJoy-Conはプレミアがつくことがあります。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>Joy-Con（1セット）</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>買取相場: 2,000〜4,000円（限定カラーは5,000円以上も）</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>Proコントローラー</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>買取相場: 2,500〜5,000円（純正品・美品の場合）</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reset Steps */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />売る前の初期化手順</h2>
          <div className="glass-card p-6">
            <ol className="space-y-3 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>1. セーブデータのバックアップ</strong> - Nintendo Switch Onlineのクラウドセーブ、またはローカルバックアップを実行</li>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>2. microSDカードの取り外し</strong> - 本体からmicroSDカードを抜き、必要ならフォーマット</li>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>3. ニンテンドーアカウントの連携解除</strong> - 「設定」→「ユーザー」→「ニンテンドーアカウント」→「連携解除」</li>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>4. 本体の初期化</strong> - 「設定」→「本体」→「初期化」→「本体の初期化」を選択</li>
              <li><strong style={{ color: 'var(--color-deep-blue)' }}>5. 初期化完了の確認</strong> - 再起動後、初期設定画面が表示されればOK</li>
            </ol>
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
            Switchを<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>で売りませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            複数社の買取価格を比較して、あなたのSwitchを一番高く買い取ってくれるサービスを見つけましょう。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のハード買取ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/hardware/ps5/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PlayStation 5</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS5の買取相場・高く売るコツ</p>
            </Link>
            <Link href="/hardware/ps4/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PlayStation 4</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>PS4の買取相場・古くても売れる理由</p>
            </Link>
            <Link href="/hardware/retro/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>レトロゲーム</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ファミコン・スーファミの買取相場</p>
            </Link>
          </div>
          <div className="mt-4">
            <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>買取サービスの詳細レビュー</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/review/hikakaku/" className="glass-card p-4 card-hover block">
                <span className="tag-pill tag-pill-green text-xs mb-2 inline-block">1位</span>
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ヒカカク！</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最大20社一括査定</p>
              </Link>
              <Link href="/review/uriel/" className="glass-card p-4 card-hover block">
                <span className="tag-pill tag-pill-orange text-xs mb-2 inline-block">2位</span>
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取ウリエル</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>出張買取・即日現金化</p>
              </Link>
              <Link href="/review/tifana/" className="glass-card p-4 card-hover block">
                <span className="tag-pill tag-pill-blue text-xs mb-2 inline-block">3位</span>
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ティファナ</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>店舗+宅配買取</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
