import Link from 'next/link';

const services = [
  {
    rank: 1,
    name: 'ヒカカク！',
    url: 'https://hikakaku.com',
    tagline: '最大20社一括査定の買取比較サイト',
    reviewPath: '/review/hikakaku/',
    features: ['最大20社一括査定', 'ゲーム専門業者多数', '無料査定', '全国対応'],
    buyMethods: ['宅配買取', '店舗買取', '出張買取'],
    target: 'ゲーム機・レトロゲーム・ゲームソフト対応',
    recommend: '複数社を比較して最高値で売りたい方',
    pros: ['一括査定で最高値が見つかる', '対応業者数が圧倒的', '利用無料'],
    cons: ['業者から連絡が来る', '地域により対応業者に差あり'],
  },
  {
    rank: 2,
    name: '買取ウリエル',
    url: 'https://uriel-cuore.co.jp',
    tagline: '出張買取対応・即日現金化',
    reviewPath: '/review/uriel/',
    features: ['出張買取対応', '経験豊富な査定士', '即日現金化', '関東・関西対応'],
    buyMethods: ['出張買取', '宅配買取', '店舗買取'],
    target: '20種類以上の品目にゲーム含む',
    recommend: '自宅にいながらまとめて売りたい方',
    pros: ['出張買取で手間いらず', 'その場で現金化', 'ゲーム以外もまとめて売れる'],
    cons: ['対応エリアが関東・関西中心', 'ゲーム専門ではない'],
  },
  {
    rank: 3,
    name: 'ティファナ',
    url: 'https://tifana.net',
    tagline: 'ホビー系買取に強いリサイクルショップ',
    reviewPath: '/review/tifana/',
    features: ['ゲーム・トレカ・フィギュア幅広い', '店舗買取+宅配買取', 'ホビー専門査定士', '東京近郊対応'],
    buyMethods: ['店舗買取', '宅配買取'],
    target: 'ゲーム・トレカ・フィギュア・レトロ玩具など',
    recommend: 'ゲームと一緒にホビーグッズも売りたい方',
    pros: ['ホビー系の査定に強い', 'トレカやフィギュアもまとめて売れる', '店舗持ち込みで即現金化'],
    cons: ['出張買取非対応', '東京近郊がメイン'],
  },
  {
    rank: 4,
    name: 'ゲオ宅配買取',
    url: 'https://geo-online.co.jp/kaitori/',
    tagline: '大手チェーン、まとめ売りで最大35%UP、宅配買取、全国対応',
    reviewPath: '/review/geo/',
    features: ['まとめ売りで最大35%UP', '大手チェーンの安心感', '宅配買取専門', '全国対応'],
    buyMethods: ['宅配買取'],
    target: 'ゲームソフト・ゲーム機・DVD・Blu-ray',
    recommend: 'まとめて大量に売りたい方・大手の安心感を重視する方',
    pros: ['まとめ売りボーナスが大きい', '大手チェーンで信頼性が高い', '送料無料・ダンボール無料'],
    cons: ['店頭買取は別サービス', '査定に数日かかる場合あり'],
  },
  {
    rank: 5,
    name: 'ブックオフ',
    url: 'https://www.bookoff.co.jp/',
    tagline: '全国900店舗、店頭即現金化、宅配買取も対応',
    reviewPath: '/review/bookoff/',
    features: ['全国900店舗以上', '店頭持ち込みで即現金化', '宅配買取対応', '本・DVD・ゲーム幅広い'],
    buyMethods: ['店舗買取', '宅配買取'],
    target: 'ゲームソフト・本・DVD・CD・トレカなど幅広いジャンル',
    recommend: '店舗に持ち込んですぐ現金化したい方',
    pros: ['全国どこでも店舗がある', 'その場で現金が受け取れる', 'ゲーム以外もまとめて売れる'],
    cons: ['専門店より買取額が低い傾向', '人気商品以外は査定が安め'],
  },
  {
    rank: 6,
    name: '駿河屋',
    url: 'https://www.suruga-ya.jp/',
    tagline: 'レトロゲーム・限定版に強い、コレクター向け、宅配/店舗',
    reviewPath: '/review/surugaya/',
    features: ['レトロゲームに強い', '限定版・希少品の高額査定', 'コレクター向け', '宅配/店舗対応'],
    buyMethods: ['宅配買取', '店舗買取'],
    target: 'レトロゲーム・限定版・コレクターズアイテム',
    recommend: 'レトロゲームや希少品を適正価格で売りたい方',
    pros: ['レトロゲームの査定に定評あり', '希少品に高値がつきやすい', 'コレクター市場に精通'],
    cons: ['一般的なゲームは平均的な価格', '査定に時間がかかることがある'],
  },
  {
    rank: 7,
    name: 'ゲーム王国',
    url: 'https://www.game-oukoku.jp/',
    tagline: 'ゲーム専門、初回査定額10%UP、宅配買取',
    reviewPath: '/review/game-oukoku/',
    features: ['ゲーム専門買取', '初回査定額10%UP', '宅配買取対応', 'ゲーム機・ソフト幅広い'],
    buyMethods: ['宅配買取'],
    target: 'ゲームソフト・ゲーム機・周辺機器',
    recommend: '初めてゲーム買取を利用する方・ゲーム専門店に任せたい方',
    pros: ['ゲーム専門で査定が的確', '初回ボーナスがお得', '送料無料で手軽'],
    cons: ['店舗持ち込み非対応', '知名度が大手より低い'],
  },
  {
    rank: 8,
    name: 'ホビーコレクト',
    url: 'https://hobby-collect.jp/',
    tagline: '箱なし・ジャンクOK、宅配買取専門',
    reviewPath: '/review/hobby-collect/',
    features: ['箱なし・ジャンクOK', '宅配買取専門', '幅広いジャンル対応', '送料無料'],
    buyMethods: ['宅配買取'],
    target: 'ゲーム・フィギュア・トレカ・ホビー全般',
    recommend: '箱や説明書がなくても売りたい方・状態が悪いゲームを処分したい方',
    pros: ['箱なし・ジャンクでも買取OK', '幅広いホビーに対応', '梱包キット無料'],
    cons: ['店舗買取非対応', '高額査定は期待しにくい'],
  },
  {
    rank: 9,
    name: 'カイトリワールド',
    url: 'https://kaitori-world.jp/',
    tagline: 'フィギュア・ホビー強い、宅配専門、最短即日入金',
    reviewPath: '/review/kaitori-world/',
    features: ['フィギュア・ホビーに強い', '最短即日入金', '宅配買取専門', '送料無料'],
    buyMethods: ['宅配買取'],
    target: 'ゲーム・フィギュア・プラモデル・ホビー全般',
    recommend: '早く現金が欲しい方・フィギュアとゲームをまとめて売りたい方',
    pros: ['最短即日入金のスピード感', 'フィギュア・ホビーの査定が高い', '送料・手数料すべて無料'],
    cons: ['店舗買取非対応', 'ゲーム単体だと他社の方が高い場合あり'],
  },
  {
    rank: 10,
    name: 'ネットオフ',
    url: 'https://www.netoff.co.jp/',
    tagline: 'ゲーム・本・DVD一括、まとめ売りボーナス',
    reviewPath: '/review/netoff/',
    features: ['ゲーム・本・DVD一括買取', 'まとめ売りボーナスあり', '宅配買取専門', '集荷対応'],
    buyMethods: ['宅配買取'],
    target: 'ゲーム・本・CD・DVD・ブルーレイなど',
    recommend: '引っ越しや断捨離でゲーム・本・DVDをまとめて売りたい方',
    pros: ['ジャンルをまたいでまとめ売りできる', 'まとめ売りボーナスがお得', '自宅集荷で手間いらず'],
    cons: ['専門店より単品の査定額は低い', '買取不可品は処分費用がかかる場合あり'],
  },
];

const stats = [
  { value: '10社', label: '厳選サービス' },
  { value: '最大20社', label: '一括比較' },
  { value: '出張対応', label: '自宅で完結' },
  { value: '宅配対応', label: '全国どこでも' },
];

const consoles = [
  { name: 'Nintendo Switch', tag: 'Switch' },
  { name: 'PlayStation 5', tag: 'PS5' },
  { name: 'PlayStation 4', tag: 'PS4' },
  { name: 'レトロゲーム', tag: 'レトロ' },
];

const steps = [
  { step: 1, title: '売りたいゲームを確認', description: '手持ちのゲームソフト・ゲーム機をリストアップ。付属品・箱の有無も確認しましょう。状態が良いほど高額査定が期待できます。' },
  { step: 2, title: '買取サービスを比較', description: '当サイトのランキングを参考に、自分に合ったサービスを選びましょう。一括査定なら複数社の見積もりを一度に取得できます。' },
  { step: 3, title: '査定を申し込む', description: '各サービスのWebサイトから無料査定を申し込みます。必要情報を入力するだけで、最短当日に査定結果が届きます。' },
  { step: 4, title: '買取方法を選ぶ', description: '宅配買取・出張買取・店舗買取から便利な方法を選択。宅配なら送料無料のサービスが多く、段ボールも無料で手配してくれます。' },
  { step: 5, title: '現金を受け取る', description: '査定額に納得したら、そのまま買取成立。宅配なら振込、出張・店舗ならその場で現金を受け取れます。キャンセルも無料です。' },
];

const faqs = [
  { q: 'ゲーム買取で最も高く売れるサービスはどこですか？', a: '一概には言えませんが、ヒカカク！の一括査定を使えば最大20社の見積もりを比較でき、最高値のサービスが見つかりやすいです。ゲームの種類や状態によって最適なサービスは異なります。' },
  { q: 'ゲームソフトの買取相場はどのくらいですか？', a: '人気タイトルのSwitch用ソフトで500円〜3,000円程度、限定版や希少ソフトはそれ以上の価格がつくこともあります。新品未開封品は特に高額査定が期待できます。' },
  { q: '壊れたゲーム機も買取してもらえますか？', a: 'サービスによります。ヒカカク！経由の一部業者やティファナでは、ジャンク品の買取に対応している場合があります。事前に確認することをおすすめします。' },
  { q: '宅配買取の送料はかかりますか？', a: 'ほとんどのサービスで送料は無料です。ヒカカク！経由の業者や買取ウリエルでは、専用の宅配キット（段ボール・緩衝材）を無料で送ってくれます。' },
  { q: '買取にかかる時間はどのくらいですか？', a: '店舗買取・出張買取なら即日、宅配買取の場合は商品到着から1〜3営業日で査定結果が届きます。買取ウリエルの出張買取なら最短即日で現金化できます。' },
  { q: 'レトロゲームの買取に強いサービスはどこですか？', a: 'ヒカカク！ではレトロゲーム専門の買取業者が多数参加しており、ファミコンやスーパーファミコンなどのレトロゲームに高い査定がつきやすいです。ティファナもレトロ玩具に強みがあります。' },
  { q: '出張買取はどのエリアで利用できますか？', a: '買取ウリエルは関東・関西エリアで出張買取に対応しています。ヒカカク！経由の業者は全国対応のところもあります。事前にエリア確認を行ってください。' },
  { q: 'ゲーム以外のものも一緒に売れますか？', a: 'はい。買取ウリエルは20種類以上の品目に対応、ティファナはトレカ・フィギュア・レトロ玩具などホビー系全般を取り扱っています。まとめ売りで買取額アップの場合もあります。' },
  { q: '買取をキャンセルできますか？', a: 'ほとんどのサービスでキャンセル無料です。査定結果に納得できなければ、返送料もサービス負担で返却してもらえるケースが多いです。各サービスの規約をご確認ください。' },
  { q: '未成年でも買取サービスを利用できますか？', a: '多くの買取サービスでは、18歳未満の方は保護者の同意が必要です。サービスによっては保護者同伴での利用が求められる場合もあります。事前にご確認ください。' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <p className="tag-pill tag-pill-green mb-4 mx-auto inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>
              2026年最新版
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 tracking-tight">
              ゲームを高く売るなら<br className="md:hidden" />
              <span style={{ color: 'var(--color-electric-green)' }}>ここ！</span>
            </h1>
            <p className="text-base md:text-lg mb-8 leading-relaxed" style={{ color: '#CBD5E1' }}>
              ゲーム買取サービスを徹底比較。Switch・PS5・レトロゲームまで、<br className="hidden md:block" />
              あなたのゲームを最も高く売れるサービスが見つかります。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <span className="tag-pill text-xs" style={{ background: 'rgba(255,255,255,0.1)', color: '#E2E8F0' }}>Switch 買取</span>
              <span className="tag-pill text-xs" style={{ background: 'rgba(255,255,255,0.1)', color: '#E2E8F0' }}>PS5 買取</span>
              <span className="tag-pill text-xs" style={{ background: 'rgba(255,255,255,0.1)', color: '#E2E8F0' }}>レトロゲーム 買取</span>
              <span className="tag-pill text-xs" style={{ background: 'rgba(255,255,255,0.1)', color: '#E2E8F0' }}>ゲーム機 売る</span>
            </div>
            <Link href="#ranking" className="btn-primary text-base py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl md:text-3xl font-extrabold" style={{ color: 'var(--color-electric-green)' }}>{s.value}</p>
                <p className="text-xs mt-1 font-semibold" style={{ color: 'var(--color-text-light)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 md:py-16 gaming-grid" id="ranking">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-heading">
              <span className="section-heading-bar" />ゲーム買取おすすめ比較ランキング
            </h2>
            <p className="text-sm mt-3" style={{ color: 'var(--color-text-light)' }}>10社を厳選して徹底比較しました</p>
          </div>

          <div className="overflow-x-auto mb-12">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>順位</th>
                  <th>サービス名</th>
                  <th>特徴</th>
                  <th>買取方法</th>
                  <th>対象</th>
                  <th>詳細</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.name}>
                    <td>
                      <span className={`rank-badge rank-badge-${s.rank}`}>{s.rank}</span>
                    </td>
                    <td className="font-bold">{s.name}</td>
                    <td className="text-sm">{s.tagline}</td>
                    <td>
                      <div className="flex flex-wrap gap-1">
                        {s.buyMethods.map((m) => (
                          <span key={m} className="tag-pill tag-pill-green text-xs">{m}</span>
                        ))}
                      </div>
                    </td>
                    <td className="text-sm">{s.target}</td>
                    <td>
                      <Link href={s.reviewPath} className="btn-outline text-xs py-1.5 px-3">
                        詳細を見る
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Ranking Detailed Reviews */}
          <div className="space-y-8">
            {services.map((s) => (
              <div key={s.name} className="glass-card p-6 md:p-8 card-hover">
                <div className="flex items-start gap-4 mb-4">
                  <span className={`rank-badge rank-badge-${s.rank} shrink-0`}>{s.rank}</span>
                  <div>
                    <h3 className="text-xl font-extrabold" style={{ color: 'var(--color-deep-blue)' }}>{s.name}</h3>
                    <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{s.tagline}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {s.features.map((f) => (
                    <span key={f} className="tag-pill tag-pill-blue">{f}</span>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-bold mb-2" style={{ color: 'var(--color-electric-green)' }}>メリット</h4>
                    <ul className="text-sm space-y-1" style={{ color: 'var(--color-text-light)' }}>
                      {s.pros.map((p) => <li key={p}>+ {p}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-2" style={{ color: 'var(--color-accent-orange)' }}>デメリット</h4>
                    <ul className="text-sm space-y-1" style={{ color: 'var(--color-text-light)' }}>
                      {s.cons.map((c) => <li key={c}>- {c}</li>)}
                    </ul>
                  </div>
                </div>

                <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
                  <span className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>こんな方におすすめ：</span>{s.recommend}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link href={s.reviewPath} className="btn-primary text-sm py-2 px-5">
                    {s.name}の詳細レビュー
                  </Link>
                  <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="btn-accent text-sm py-2 px-5">
                    公式サイトへ
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Console Price Table */}
      <section className="py-12 md:py-16 gaming-grid">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-heading">
              <span className="section-heading-bar" />ゲーム機本体の買取相場【2026年4月】
            </h2>
            <p className="text-sm mt-3" style={{ color: 'var(--color-text-light)' }}>
              主要ゲーム機の最新買取相場をまとめました。実際の買取額はサービスや状態により異なります。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>ゲーム機</th>
                  <th>買取相場</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Switch（通常モデル）', price: '15,000〜22,000円' },
                  { name: 'Switch 有機EL', price: '20,000〜28,000円' },
                  { name: 'Switch Lite', price: '10,000〜15,000円' },
                  { name: 'PS5（通常版）', price: '35,000〜45,000円' },
                  { name: 'PS5（デジタルエディション）', price: '28,000〜38,000円' },
                  { name: 'PS4 Pro', price: '12,000〜18,000円' },
                  { name: 'PS4（通常版）', price: '8,000〜13,000円' },
                  { name: 'Xbox Series X', price: '25,000〜35,000円' },
                  { name: '3DS LL', price: '5,000〜10,000円' },
                  { name: 'ゲームボーイアドバンスSP', price: '5,000〜15,000円' },
                  { name: 'Switch 2（予約受付中）', price: '発売前 ※2026年6月発売予定' },
                ].map((item) => (
                  <tr key={item.name}>
                    <td className="font-bold">{item.name}</td>
                    <td>
                      <span className="tag-pill tag-pill-green text-xs">{item.price}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs mt-4" style={{ color: 'var(--color-text-lighter)' }}>
            ※ 2026年4月時点の参考相場です。付属品の有無・本体の状態・市場動向により変動します。正確な買取額は各サービスの無料査定でご確認ください。
          </p>

          <div className="glass-card p-5 mt-6">
            <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-accent-orange)' }}>Switch 2発売による買取相場への影響</h3>
            <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
              2026年6月のSwitch 2発売に伴い、旧型Switchの買取相場は下落傾向にあります。売却を検討中の方は早めの査定をおすすめします。
            </p>
          </div>
        </div>
      </section>

      {/* Console Quick Links */}
      <section className="py-12 md:py-16 bg-white" id="console">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-heading">
              <span className="section-heading-bar" />ハード別ゲーム買取ガイド
            </h2>
            <p className="text-sm mt-3" style={{ color: 'var(--color-text-light)' }}>
              お持ちのゲーム機に合わせて最適な買取サービスを探せます
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {consoles.map((c) => (
              <div key={c.tag} className="glass-card p-6 text-center card-hover cursor-pointer">
                <div className="text-3xl mb-3">
                  {c.tag === 'Switch' && '🎮'}
                  {c.tag === 'PS5' && '🕹️'}
                  {c.tag === 'PS4' && '🎯'}
                  {c.tag === 'レトロ' && '👾'}
                </div>
                <h3 className="text-sm font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{c.name}</h3>
                <span className="tag-pill tag-pill-green text-xs">{c.tag} 買取</span>
              </div>
            ))}
          </div>

          <div className="mt-8 glass-card p-6">
            <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>ハード別の買取ポイント</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm" style={{ color: 'var(--color-text-light)' }}>
              <div>
                <p className="mb-2"><strong>Nintendo Switch：</strong>有機ELモデルは特に高額査定。Joy-Con・ドック・箱ありで買取額アップ。限定カラーモデルはプレミア価格になることも。</p>
                <p><strong>PlayStation 5：</strong>需要が安定しており比較的高額。デジタルエディションよりディスクドライブ搭載モデルが高値傾向。コントローラー・ケーブル類の付属品も重要です。</p>
              </div>
              <div>
                <p className="mb-2"><strong>PlayStation 4：</strong>Proモデルは通常版より高値。SSD換装済みモデルは評価が分かれるため事前確認を。ソフトとセットでの買取がおすすめ。</p>
                <p><strong>レトロゲーム：</strong>ファミコン・スーファミ・ゲームボーイなど、箱・説明書ありは数倍の価格差に。希少タイトルはコレクター需要で高額査定の可能性あり。ヒカカク！がおすすめ。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Sell */}
      <section className="py-12 md:py-16 gaming-grid" id="how-to-sell">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-heading">
              <span className="section-heading-bar" />ゲームを高く売る5つのステップ
            </h2>
            <p className="text-sm mt-3" style={{ color: 'var(--color-text-light)' }}>
              初めてでも安心。簡単5ステップで高価買取を実現
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((s) => (
              <div key={s.step} className="glass-card p-5 card-hover relative">
                <div
                  className="text-4xl font-black mb-3 opacity-15"
                  style={{ color: 'var(--color-electric-green)' }}
                >
                  {String(s.step).padStart(2, '0')}
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{s.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic */}
      <section className="py-12 md:py-16 bg-white" id="diagnosis">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-heading">
              <span className="section-heading-bar" />あなたに合った売り方診断
            </h2>
            <p className="text-sm mt-3" style={{ color: 'var(--color-text-light)' }}>
              お持ちのゲームや希望に合わせて、おすすめの買取方法をご提案します
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/method/takuhai/" className="glass-card p-6 text-center card-hover block">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>自宅から送りたい</h3>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>宅配買取がおすすめ。送料無料・ダンボール無料のサービスも。</p>
              <span className="tag-pill tag-pill-green text-xs mt-3 inline-block">宅配買取ガイドへ</span>
            </Link>
            <Link href="/method/tenpo/" className="glass-card p-6 text-center card-hover block">
              <div className="text-3xl mb-3">🏪</div>
              <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>今すぐ現金化したい</h3>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>店舗買取なら即日現金化。ゲオやブックオフが便利。</p>
              <span className="tag-pill tag-pill-green text-xs mt-3 inline-block">店舗買取ガイドへ</span>
            </Link>
            <Link href="/compare/mercari-vs-kaitori/" className="glass-card p-6 text-center card-hover block">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>手間をかけてでも高く売りたい</h3>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>フリマアプリなら自分で価格設定可能。手数料と手間を考慮して。</p>
              <span className="tag-pill tag-pill-green text-xs mt-3 inline-block">フリマvs業者比較へ</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-heading">
              <span className="section-heading-bar" />よくある質問
            </h2>
          </div>

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
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.a,
                  },
                })),
              }),
            }}
          />
        </div>
      </section>

      {/* Editorial Note - E-E-A-T */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="glass-card p-6">
            <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>当サイトの評価基準について</h2>
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
              ゲーム買取びよりでは、以下の6つの基準でゲーム買取サービスを評価しています。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: '買取価格', desc: '実際の査定額の高さ' },
                { label: '対応スピード', desc: '査定・入金までの速さ' },
                { label: '口コミ評価', desc: 'ユーザーの満足度' },
                { label: '取扱品目', desc: '対応ジャンルの広さ' },
                { label: '利用しやすさ', desc: '申込み・梱包の手軽さ' },
                { label: '信頼性', desc: '実績・運営体制の安定性' },
              ].map((c) => (
                <div key={c.label} className="text-center p-3" style={{ background: 'var(--color-bg-subtle)', borderRadius: '8px' }}>
                  <p className="text-sm font-bold" style={{ color: 'var(--color-electric-green)' }}>{c.label}</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-text-light)' }}>{c.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs mt-4" style={{ color: 'var(--color-text-lighter)' }}>
              最終更新日: 2026年4月21日 ｜ 掲載情報は各サービスの公式サイトを参照しています。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 hero-gradient text-white">
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            あなたのゲーム、<span style={{ color: 'var(--color-electric-green)' }}>もっと高く</span>売れるかも
          </h2>
          <p className="text-sm md:text-base mb-8" style={{ color: '#CBD5E1' }}>
            まずは無料査定で買取価格をチェック。複数サービスを比較して最高値を見つけましょう。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary py-3 px-8 text-base">
              ヒカカク！で一括査定
            </a>
            <Link href="#ranking" className="btn-outline py-3 px-8 text-base" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}>
              ランキングに戻る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
