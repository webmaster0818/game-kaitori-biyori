import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'
const PAGE_TITLE = 'ポケモンソフトの買取価格ランキング【2026年11月】駿河屋・ゲオ・ブックオフ実測比較｜GB〜Switch43本';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description:
    'ポケモンソフト43本（GB・GBA・DS・3DS・Switch）の買取価格を2026年11月16日に駿河屋公式で調べ、ランキングにしました。Switch・DS・3DSの主要作品はゲオ宅配買取・ブックオフ店舗の公式価格とも比べ、どこが高いかをまとめています。1位はGBの青（14,000円）です。',
  keywords: ['ポケモンソフト 買取', 'ポケモンソフト 買取価格', 'ポケモンソフト 買取 ランキング', 'ポケモン ゲーム 買取', 'ポケモンゲーム買取価格', 'ポケモンカセット 買取価格', 'ポケモンSV 買取'],
  openGraph: {
    images: ['/og.png'],
    title: PAGE_TITLE,
    description: 'ポケモンソフト43本の駿河屋公式の買取価格ランキングと、ゲオ宅配買取・ブックオフ店舗との店舗別比較（2026年11月16日確認）を掲載しています。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

// 2026-11-16 駿河屋公式の買取検索で確認した国内版の買取価格（美品・未開封の上乗せ前の通常の買取価格）。表示時に高い順へ並べ替える
// 同額の行は機種（GB→GBA→DS→3DS→Switch）の順に並べている（sort は安定ソート）。備考の「10月28日の〜」は前回の確認値
const priceData = [
  { title: 'ポケットモンスター 青（1999年発売・JANコード付き）', platform: 'GB', price: 14000, note: 'JANコード無し版（1996年）は8,000円（10月28日は7,200円）' },
  { title: 'ポケットモンスター 赤', platform: 'GB', price: 12000, note: '10月28日の10,000円から2,000円上昇' },
  { title: 'ポケットモンスター エメラルド［ワイヤレスアダプタ同梱］', platform: 'GBA', price: 12000, note: '美品は14,400円' },
  { title: 'ポケットモンスター クリスタルバージョン', platform: 'GB', price: 10000, note: '10月28日の9,000円から1,000円上昇。美品は23,000円' },
  { title: 'ポケットモンスター エメラルド［廉価版］', platform: 'GBA', price: 10000, note: '10月28日の9,400円から600円上昇。美品は11,100円' },
  { title: 'ポケットモンスター 緑', platform: 'GB', price: 8500, note: '' },
  { title: 'ポケットモンスター ハートゴールド（ポケウォーカー同梱）', platform: 'DS', price: 8000, note: '' },
  { title: 'ポケットモンスター ソード ＋ エキスパンションパス', platform: 'Switch', price: 8000, note: '10月28日の9,000円から1,000円下落。通常版ソード（1,900円）の約4.2倍' },
  { title: 'ポケットモンスター シールド ＋ エキスパンションパス', platform: 'Switch', price: 8000, note: '10月28日の9,000円から1,000円下落。通常版シールド（1,800円）の約4.4倍' },
  { title: 'ポケットモンスター ファイアレッド［ワイヤレスアダプタ同梱］', platform: 'GBA', price: 7000, note: '美品は8,400円' },
  { title: 'ポケットモンスター ソウルシルバー（ポケウォーカー同梱）', platform: 'DS', price: 7000, note: '' },
  { title: 'ポケットモンスター ピカチュウ', platform: 'GB', price: 6000, note: '10月28日の5,500円から500円上昇' },
  { title: 'ポケットモンスター バイオレット ＋ ゼロの秘宝', platform: 'Switch', price: 6000, note: '通常版バイオレット（2,200円）の約2.7倍' },
  { title: 'ポケットモンスター リーフグリーン［ワイヤレスアダプタ同梱］', platform: 'GBA', price: 5800, note: '美品は7,000円' },
  { title: 'ポケットモンスター Let\'s Go! ピカチュウ モンスターボール Plusセット', platform: 'Switch', price: 5800, note: '' },
  { title: 'ポケットモンスター スカーレット ＋ ゼロの秘宝', platform: 'Switch', price: 5600, note: '10月28日の5,200円から400円上昇。通常版スカーレット（2,000円）の2.8倍' },
  { title: 'ポケットモンスター Let\'s Go! イーブイ モンスターボール Plusセット', platform: 'Switch', price: 5200, note: '10月28日の5,000円から200円上昇' },
  { title: 'ポケットモンスター ファイアレッド［廉価版］', platform: 'GBA', price: 4500, note: '美品は5,400円' },
  { title: 'ポケットモンスター リーフグリーン［廉価版］', platform: 'GBA', price: 4400, note: '' },
  { title: 'ポケットモンスター ルビー', platform: 'GBA', price: 4300, note: '' },
  { title: 'ポケットモンスター サファイア', platform: 'GBA', price: 4300, note: '10月28日の4,000円から300円上昇' },
  { title: 'ポケットモンスター Let\'s Go! ピカチュウ（通常版）', platform: 'Switch', price: 2500, note: '10月28日の2,200円から300円上昇' },
  { title: 'ポケットモンスター Let\'s Go! イーブイ（通常版）', platform: 'Switch', price: 2500, note: 'ピカチュウ版と同額' },
  { title: 'ポケットモンスター バイオレット', platform: 'Switch', price: 2200, note: '10月28日の2,000円から200円上昇' },
  { title: 'ポケットモンスター ブラック2', platform: 'DS', price: 2000, note: '10月28日の2,400円から400円下落' },
  { title: 'ポケットモンスター ホワイト2', platform: 'DS', price: 2000, note: '10月28日の2,500円から500円下落' },
  { title: 'ポケットモンスター プラチナ', platform: 'DS', price: 2000, note: '' },
  { title: 'ポケットモンスター スカーレット', platform: 'Switch', price: 2000, note: '' },
  { title: 'Pokemon LEGENDS Z-A', platform: 'Switch / Switch 2', price: 2000, note: 'Switch版の価格。Nintendo Switch 2 Editionは2,200円（10月28日は両版とも1,700円）' },
  { title: 'ポケットモンスター ブリリアントダイヤモンド', platform: 'Switch', price: 1900, note: '10月28日の1,600円から300円上昇' },
  { title: 'ポケットモンスター ソード', platform: 'Switch', price: 1900, note: '' },
  { title: 'ポケットモンスター シールド', platform: 'Switch', price: 1800, note: '' },
  { title: 'Pokemon LEGENDS アルセウス', platform: 'Switch', price: 1800, note: '' },
  { title: 'ポケットモンスター ウルトラサン', platform: '3DS', price: 1600, note: '10月28日の2,000円から400円下落' },
  { title: 'ポケットモンスター ウルトラムーン', platform: '3DS', price: 1600, note: '10月28日の2,000円から400円下落' },
  { title: 'ポケットモンスター シャイニングパール', platform: 'Switch', price: 1600, note: '' },
  { title: 'ポケットモンスター ブラック', platform: 'DS', price: 1500, note: '' },
  { title: 'ポケットモンスター ホワイト', platform: 'DS', price: 1300, note: '' },
  { title: 'ポケットモンスター オメガルビー', platform: '3DS', price: 1300, note: '10月28日の1,600円から300円下落' },
  { title: 'ポケットモンスター パール', platform: 'DS', price: 1000, note: '10月28日の1,200円から200円下落' },
  { title: 'ポケットモンスター X', platform: '3DS', price: 800, note: '10月28日の1,000円から200円下落' },
  { title: 'ポケットモンスター ムーン', platform: '3DS', price: 400, note: '' },
  { title: 'ポケットモンスター サン', platform: '3DS', price: 300, note: '10月28日は「メールにてお見積」で価格の表示なし' },
].sort((a, b) => b.price - a.price);

// 2026-11-16 店舗別の比較（各社公式で当編集部が確認した値）
// surugaya: 駿河屋公式の買取検索（通常の買取価格）/ 'quote' は「メールにてお見積」表示
// geo: ゲオ宅配買取（buy.geo-online.co.jp）の検索結果に表示される「最高価格」/ null は検索結果に表示なし
// bookoff: ブックオフ「ゲームの高価買取情報」（ブックオフ店舗での価格・最終更新日 2026年11月12日の表記）/ null は一覧に掲載なし
type ShopPrice = number | 'quote' | null;
type CompareRow = { title: string; platform: string; surugaya: ShopPrice; geo: ShopPrice; bookoff: ShopPrice; mark?: string };
const compareSwitch: CompareRow[] = [
  { title: 'スカーレット', platform: 'Switch', surugaya: 2000, geo: 1500, bookoff: 1000 },
  { title: 'バイオレット', platform: 'Switch', surugaya: 2200, geo: 1500, bookoff: 1200 },
  { title: 'スカーレット＋ゼロの秘宝', platform: 'Switch', surugaya: 5600, geo: 5000, bookoff: null },
  { title: 'バイオレット＋ゼロの秘宝', platform: 'Switch', surugaya: 6000, geo: 5500, bookoff: null },
  { title: 'ソード', platform: 'Switch', surugaya: 1900, geo: 1500, bookoff: 1000 },
  { title: 'シールド', platform: 'Switch', surugaya: 1800, geo: 1000, bookoff: 1000 },
  { title: 'ソード＋エキスパンションパス', platform: 'Switch', surugaya: 8000, geo: 8500, bookoff: null },
  { title: 'シールド＋エキスパンションパス', platform: 'Switch', surugaya: 8000, geo: 8500, bookoff: null },
  { title: 'ブリリアントダイヤモンド', platform: 'Switch', surugaya: 1900, geo: 1000, bookoff: 1000 },
  { title: 'シャイニングパール', platform: 'Switch', surugaya: 1600, geo: 1000, bookoff: 1000 },
  { title: 'Pokemon LEGENDS アルセウス', platform: 'Switch', surugaya: 1800, geo: 1500, bookoff: 1500 },
  { title: 'Pokemon LEGENDS Z-A', platform: 'Switch', surugaya: 2000, geo: 1500, bookoff: 1000 },
  { title: 'Pokemon LEGENDS Z-A Nintendo Switch 2 Edition', platform: 'Switch 2', surugaya: 2200, geo: 1500, bookoff: 1000 },
  { title: 'Let\'s Go! ピカチュウ', platform: 'Switch', surugaya: 2500, geo: 2500, bookoff: 1700 },
  { title: 'Let\'s Go! イーブイ', platform: 'Switch', surugaya: 2500, geo: 2000, bookoff: 1500 },
  { title: 'Let\'s Go! ピカチュウ モンスターボール Plusセット', platform: 'Switch', surugaya: 5800, geo: 3000, bookoff: null },
  { title: 'Let\'s Go! イーブイ モンスターボール Plusセット', platform: 'Switch', surugaya: 5200, geo: 3000, bookoff: null },
];
const compareRetro: CompareRow[] = [
  { title: 'ハートゴールド', platform: 'DS', surugaya: 8000, geo: 6000, bookoff: 6000, mark: '※1' },
  { title: 'ソウルシルバー', platform: 'DS', surugaya: 7000, geo: 6000, bookoff: 6000, mark: '※1' },
  { title: 'プラチナ', platform: 'DS', surugaya: 2000, geo: 1000, bookoff: 800 },
  { title: 'ブラック2', platform: 'DS', surugaya: 2000, geo: 1500, bookoff: 1500 },
  { title: 'ホワイト2', platform: 'DS', surugaya: 2000, geo: 1300, bookoff: 1000 },
  { title: 'ブラック', platform: 'DS', surugaya: 1500, geo: 800, bookoff: 500 },
  { title: 'ホワイト', platform: 'DS', surugaya: 1300, geo: 800, bookoff: 500 },
  { title: 'パール', platform: 'DS', surugaya: 1000, geo: 300, bookoff: null },
  { title: 'ダイヤモンド', platform: 'DS', surugaya: 'quote', geo: 300, bookoff: null },
  { title: 'ウルトラサン', platform: '3DS', surugaya: 1600, geo: 1500, bookoff: 1300 },
  { title: 'ウルトラムーン', platform: '3DS', surugaya: 1600, geo: 1300, bookoff: 1300 },
  { title: 'オメガルビー', platform: '3DS', surugaya: 1300, geo: 1000, bookoff: 1000 },
  { title: 'アルファサファイア', platform: '3DS', surugaya: 'quote', geo: 1000, bookoff: 1000 },
  { title: 'X', platform: '3DS', surugaya: 800, geo: 500, bookoff: null },
  { title: 'Y', platform: '3DS', surugaya: 'quote', geo: 800, bookoff: null },
  { title: 'サン', platform: '3DS', surugaya: 300, geo: 500, bookoff: null },
  { title: 'ムーン', platform: '3DS', surugaya: 400, geo: 500, bookoff: null },
  { title: '青（JANコード付き）', platform: 'GB', surugaya: 14000, geo: null, bookoff: null },
  { title: '赤', platform: 'GB', surugaya: 12000, geo: null, bookoff: null },
  { title: '緑', platform: 'GB', surugaya: 8500, geo: 300, bookoff: null, mark: '※2' },
  { title: 'エメラルド［ワイヤレスアダプタ同梱］', platform: 'GBA', surugaya: 12000, geo: null, bookoff: null },
];
const shopNames = { surugaya: '駿河屋', geo: 'ゲオ', bookoff: 'ブックオフ' } as const;
type ShopKey = keyof typeof shopNames;
function topShops(row: CompareRow): ShopKey[] {
  const entries = (Object.keys(shopNames) as ShopKey[])
    .map((k) => [k, row[k]] as const)
    .filter((e): e is readonly [ShopKey, number] => typeof e[1] === 'number');
  if (entries.length === 0) return [];
  const max = Math.max(...entries.map((e) => e[1]));
  return entries.filter((e) => e[1] === max).map((e) => e[0]);
}
function fmtShop(v: ShopPrice) {
  if (v === 'quote') return '見積';
  if (v === null) return '—';
  return `${v.toLocaleString()}円`;
}
const switchSurugayaTop = compareSwitch.filter((r) => topShops(r).includes('surugaya')).length;
const switchGeoOnly = compareSwitch.filter((r) => { const t = topShops(r); return t.length === 1 && t[0] === 'geo'; });
const retroGeoTop = compareRetro.filter((r) => { const t = topShops(r); return t.length === 1 && t[0] === 'geo'; });

// 機種別のまとめ（priceData から集計）
const platformOrder = ['GB', 'GBA', 'DS', '3DS', 'Switch'];
const platformSummary = platformOrder.map((pf) => {
  const rows = priceData.filter((r) => r.platform === pf || r.platform.startsWith(`${pf} `));
  const prices = rows.map((r) => r.price);
  return { platform: pf, count: rows.length, min: Math.min(...prices), max: Math.max(...prices) };
});

// 2026-11-16 時点で駿河屋公式の一覧に買取価格が表示されず「メールにてお見積」だった国内版（サンは10-28時点では見積、11-16は300円）
const quoteOnly = ['金（GB）', '銀（GB）', 'ダイヤモンド（DS）', 'Y（3DS）', 'アルファサファイア（3DS）'];

const sellingTips = [
  { tip: '売る前に最新の価格を確かめる', detail: '当編集部が駿河屋公式で確認した2026年10月28日と11月16日の価格を比べると、約3週間でPokemon LEGENDS Z-Aは1,700円から2,000円に、GBの赤は10,000円から12,000円に上がった一方、ウルトラサン・ウルトラムーンは2,000円から1,600円に、ソード・シールド＋エキスパンションパスは9,000円から8,000円に下がりました。また、2025年発売のZ-A（Switch版2,000円）と2022年発売のスカーレット（2,000円）が同額で、新しい作品ほど高いとは限りません。価格の上下を予測することは難しいため、遊ぶ予定がなくなった時点で各社の最新価格を比べて売却することをおすすめします。' },
  { tip: '追加コンテンツ同梱版は通常版より高い', detail: '駿河屋公式では、追加コンテンツ同梱のパッケージ版（ソード・シールド＋エキスパンションパス 各8,000円、バイオレット＋ゼロの秘宝 6,000円、スカーレット＋ゼロの秘宝 5,600円）が、通常版の約2.7〜4.4倍の買取価格でした（2026年11月16日）。ダウンロード購入した追加コンテンツはアカウントに紐づくため、ソフトと一緒に売ることはできません。' },
  { tip: 'レトロ作品はケース・説明書を揃える', detail: '駿河屋公式ではエメラルドの外箱のみにも個別の買取価格（2026年11月16日時点で1,500〜2,200円）が付いており、付属品にも価値があります。ハートゴールド・ソウルシルバーは歩数計（ポケウォーカー）同梱の状態で7,000〜8,000円です。また、ファイアレッド・リーフグリーンはワイヤレスアダプタ同梱版が廉価版より1,400〜2,500円高く、同じ作品でも版によって価格が異なります。' },
  { tip: 'ダブルパックは単品2本の合計と比べる', detail: '2026年11月16日の駿河屋公式では、ダブルパックの買取価格はいずれも単品2本の合計より高い結果でした。ウルトラサン・ウルトラムーン（3DS）は4,700円で合計（1,600円＋1,600円）より1,500円高く、ソード・シールドは4,300円で合計（1,900円＋1,800円）より600円高く、スカーレット・バイオレットは4,500円で合計（2,000円＋2,200円）より300円高く、ブリリアントダイヤモンド・シャイニングパールは3,600円で合計（1,900円＋1,600円）より100円高い価格です。' },
];

// ヒカカク！は2026-10-20、駿河屋・ゲオ・ブックオフは2026-11-16に各社公式で確認した内容のみ
const recommendedShops = [
  { shop: '駿河屋', feature: '公式の買取検索で商品ごとの買取価格を公開', merit: '本ページのランキングの43件のほか、ダブルパックや外箱のみにも買取価格が掲載されています。2026年11月16日の比較では、Switchのポケモンソフトの多くとGB・GBA・DSの旧作で最も高い価格でした' },
  { shop: 'ゲオ（宅配買取）', feature: '公式の買取検索で商品ごとの「最高価格」を表示', merit: '2026年11月16日の比較では、ソード・シールド＋エキスパンションパス（各8,500円）が駿河屋より高く、3DSのサン・ムーン（各500円）も駿河屋を上回りました。GB・GBAのポケモンソフトは検索結果に表示されませんでした' },
  { shop: 'ブックオフ', feature: '店舗での買取価格を「ゲームの高価買取情報」で公開（店舗により価格が異なると記載）', merit: 'DSのハートゴールド・ソウルシルバーは各6,000円で、店頭で売りたい場合の目安になります（2026年11月12日更新の表記・11月16日確認）' },
  { shop: 'ヒカカク！', feature: '最大20社に一括で査定見積もりを依頼できる（公式サイトの説明）', merit: '複数の買取店の査定額を一度に比べたい場合に利用できます' },
];

const faqs = [
  { q: 'ポケモンソフトの買取はどこが高いですか？', a: '2026年11月16日に各社公式で確認したところ、Switchのポケモンソフト17件のうち15件で駿河屋が最も高い価格（Let\'s Go! ピカチュウはゲオと同額）でした。ソード・シールド＋エキスパンションパスのみ、ゲオ宅配買取（8,500円）が駿河屋（8,000円）より高い結果です。GB・GBAの旧作は、ゲオ宅配買取の検索結果に表示されず、駿河屋では青14,000円、赤12,000円などの価格が付いていました。DS・3DSも多くの作品で駿河屋が高い一方、サン・ムーンと、駿河屋が見積扱いのダイヤモンド・Yはゲオの価格が高くなっています。価格の基準は店舗ごとに異なるため、売却前に各社の最新価格をご確認ください。' },
  { q: 'ポケモンのソフトはどれくらいで売れますか？', a: '2026年11月16日の駿河屋公式では、Switchの通常版は1,600〜2,500円（Pokemon LEGENDS Z-AのSwitch版とスカーレットは2,000円）でした。追加コンテンツ同梱版は5,600〜8,000円、3DSは300〜1,600円、DSは1,000〜8,000円、GBAは4,300〜12,000円、GBは6,000〜14,000円です。' },
  { q: 'ポケモンソフトを高く売る最適なタイミングはいつですか？', a: '時期による価格の上下を予測することは難しいため、遊ぶ予定がなくなった時点で売ることをおすすめします。当編集部の確認では、2026年10月28日から11月16日までの間に、Pokemon LEGENDS Z-Aは1,700円から2,000円に上がり、ウルトラサン・ウルトラムーンは2,000円から1,600円に下がりました（いずれも駿河屋公式）。また、2025年発売のZ-A（Switch版2,000円）と2022年発売のスカーレット（2,000円）が同額で、発売が新しいほど高いとは限りません。売却前に最新の買取価格をご確認ください。' },
  { q: 'セーブデータは消去した方がよいですか？', a: 'はい、売却前にセーブデータを消去することをおすすめします。個人情報の保護のほか、買取業者側の初期化作業が不要になるため、スムーズな査定につながります。Switchのポケモンはソフト内にセーブデータがある場合と本体にある場合があるため、事前にご確認ください。' },
  { q: 'レトロポケモン（DS・GBA・GB）のカセットは売れますか？', a: 'はい、売却できます。現行ソフトより高く売れるものもあります。2026年11月16日の駿河屋公式では、GBの青（JANコード付き）が14,000円、赤が12,000円、クリスタルバージョンとGBAのエメラルド［廉価版］が10,000円、DSのハートゴールド（ポケウォーカー同梱）が8,000円でした。一方、DSのパールは1,000円、3DSのサンは300円で、旧作でも作品によって差があります。金・銀・ダイヤモンドなど、一覧に買取価格が表示されず見積もり扱いの作品もあります。なお、同日のゲオ宅配買取の検索結果には、GB・GBAのポケモンソフトは表示されませんでした。' },
  { q: 'ダウンロード版のポケモンは売れますか？', a: 'いいえ、ダウンロード版はニンテンドーアカウントに紐づいているため売却できません。売却を前提とする場合は、パッケージ版の購入をおすすめします。パッケージ版の方がリセールバリューがあるため、実質的なコストが安くなる場合もあります。' },
  { q: 'ポケモンカードゲームも一緒に売れますか？', a: 'ゲームソフトとトレーディングカードの両方を扱う買取店があります。2026年10月20日に各社公式で確認したところ、駿河屋は買取検索でポケモンカードゲームの商品に買取価格を掲載しており、ブックオフは公式サイトでトレカを買取対象として案内しています。ヒカカク！は一括査定の依頼カテゴリに「トレカ」があります。取り扱いの可否や条件は店舗・商品によって異なるため、売却前に各社の買取条件をご確認ください。' },
];

export default function PokemonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": PAGE_TITLE, "datePublished": "2026-03-15", "dateModified": "2026-11-16", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'ポケモン買取相場' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.2)', color: '#34D399' }}>ソフト別買取ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ポケモンソフト（カセット）の買取価格ランキング｜駿河屋・ゲオ・ブックオフ比較
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ポケモン本編・LEGENDSシリーズの国内版ソフト43本（GB・GBA・DS・3DS・Switch）の買取価格を、2026年11月16日に駿河屋公式で確認してランキングにしました。Switch・DS・3DSの主要作品は、同日にゲオ宅配買取・ブックオフ店舗の公式価格とも比較しています。最も高いのはGBの青（14,000円）、Switchの通常版は1,600〜2,500円です。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>表示の更新日：2026年11月16日</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* どこが高いか（店舗別比較・2026-11-16 実測） */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ポケモンソフトの買取はどこが高いか【2026年11月16日・3社の公式価格を比較】</h2>
          <div className="glass-card p-5 mb-6 border-l-4" style={{ borderLeftColor: 'var(--color-electric-green)' }}>
            <ul className="text-sm space-y-2" style={{ color: 'var(--color-text)' }}>
              <li><strong>Switch：</strong>{compareSwitch.length}件のうち{switchSurugayaTop}件で駿河屋が最も高い価格でした（同額を含みます）。ゲオ宅配買取が上回ったのは{switchGeoOnly.map((r) => r.title).join('・')}（各8,500円）のみです。</li>
              <li><strong>GB・GBA：</strong>ゲオ宅配買取の検索結果とブックオフの高価買取一覧にはポケモンソフトの掲載がなく、駿河屋では青14,000円・赤12,000円・エメラルド12,000円などの価格が付いていました。</li>
              <li><strong>DS・3DS：</strong>多くの作品で駿河屋が高い一方、{retroGeoTop.map((r) => r.title).join('・')}はゲオ宅配買取の価格が最も高い結果でした（駿河屋が見積扱いの作品を含みます）。</li>
            </ul>
          </div>
          <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>Switch・Switch 2のポケモンソフト（{compareSwitch.length}件）</h3>
          <div className="overflow-x-auto mb-6">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>タイトル</th>
                  <th>駿河屋</th>
                  <th>ゲオ宅配買取</th>
                  <th>ブックオフ店舗</th>
                  <th>最も高い店</th>
                </tr>
              </thead>
              <tbody>
                {compareSwitch.map((row) => (
                  <tr key={row.title}>
                    <td className="font-bold text-sm">{row.title}{row.platform !== 'Switch' ? `（${row.platform}）` : ''}</td>
                    <td className="text-sm whitespace-nowrap">{fmtShop(row.surugaya)}</td>
                    <td className="text-sm whitespace-nowrap">{fmtShop(row.geo)}</td>
                    <td className="text-sm whitespace-nowrap">{fmtShop(row.bookoff)}</td>
                    <td className="text-sm font-bold whitespace-nowrap" style={{ color: 'var(--color-electric-green)' }}>{topShops(row).map((k) => shopNames[k]).join('・')}{topShops(row).length > 1 ? '（同額）' : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>DS・3DS・GB・GBAのポケモンソフト（{compareRetro.length}件）</h3>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>タイトル</th>
                  <th>機種</th>
                  <th>駿河屋</th>
                  <th>ゲオ宅配買取</th>
                  <th>ブックオフ店舗</th>
                  <th>最も高い店</th>
                </tr>
              </thead>
              <tbody>
                {compareRetro.map((row) => (
                  <tr key={`${row.platform}-${row.title}`}>
                    <td className="font-bold text-sm">{row.title}{row.mark ?? ''}</td>
                    <td className="text-sm">{row.platform}</td>
                    <td className="text-sm whitespace-nowrap">{fmtShop(row.surugaya)}</td>
                    <td className="text-sm whitespace-nowrap">{fmtShop(row.geo)}</td>
                    <td className="text-sm whitespace-nowrap">{fmtShop(row.bookoff)}</td>
                    <td className="text-sm font-bold whitespace-nowrap" style={{ color: 'var(--color-electric-green)' }}>{topShops(row).map((k) => shopNames[k]).join('・')}{topShops(row).length > 1 ? '（同額）' : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-xs mt-3 space-y-1" style={{ color: 'var(--color-text-light)' }}>
            <p>確認日：2026年11月16日。出典：<a href="https://www.suruga-ya.jp/kaitori/search_buy" target="_blank" rel="noopener noreferrer nofollow" className="underline">駿河屋公式の買取検索</a>（国内版の通常の買取価格。美品・未開封の上乗せ前）、<a href="https://buy.geo-online.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline">ゲオの宅配買取</a>の検索結果に表示される「最高価格」、<a href="https://www.bookoff.co.jp/selllist/game/index.html" target="_blank" rel="noopener noreferrer nofollow" className="underline">ブックオフ「ゲームの高価買取情報」</a>（最終更新日2026年11月12日の表記。ブックオフ店舗での価格で、店舗により異なり、ブックオフ公式オンラインストアの買取価格とは異なると記載されています）。</p>
            <p>「見積」は駿河屋公式で「メールにてお見積」と表示され価格が公開されていない作品、「—」はゲオの検索結果またはブックオフの一覧に掲載がない作品です。「最も高い店」は表の価格を当編集部が比べた結果です。</p>
            <p>※1 ゲオはポケウォーカーの「同梱版」の価格です（ソフトのみはハートゴールド2,000円・ソウルシルバー2,500円）。ブックオフの一覧には同梱の有無の表記がありません。</p>
            <p>※2 ゲオの価格は検索結果ではなく、<a href="https://buy.geo-online.co.jp/retrogamesoft/" target="_blank" rel="noopener noreferrer nofollow" className="underline">ゲオ宅配買取のレトロゲーム買取ページ</a>に掲載された参考買取価格です（2026年11月9日時点の表記。箱・付属品が揃い、傷や汚れがない場合の価格）。</p>
            <p>3社は価格の基準（通常の買取価格・最高価格・店頭価格）が異なり、送料・手数料も含めていないため、比較は目安です。実際の査定額は商品の状態や在庫により変わります。売却前に各社公式で最新の価格をご確認ください。</p>
          </div>
        </section>

        {/* 買取相場表 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ポケモンソフト買取価格ランキング【2026年11月16日・駿河屋公式・43本】</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>駿河屋公式の買取検索で、ポケモン本編・LEGENDSシリーズの国内版ソフト43件の買取価格を確認し、高い順に並べました。上位はGB・GBAの旧作と追加コンテンツ同梱版が占め、Switchの通常版は1,600〜2,500円、3DSは300〜1,600円に集まっています。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>順位</th>
                  <th>タイトル</th>
                  <th>機種</th>
                  <th>駿河屋の買取価格</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row, i) => (
                  <tr key={row.title}>
                    <td className="text-sm text-center">{i + 1}</td>
                    <td className="font-bold text-sm">{row.title}</td>
                    <td className="text-sm">{row.platform}</td>
                    <td className="font-bold whitespace-nowrap" style={{ color: 'var(--color-electric-green)' }}>{row.price.toLocaleString()}円</td>
                    <td className="text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>出典：<a href="https://www.suruga-ya.jp/kaitori/search_buy" target="_blank" rel="noopener noreferrer nofollow" className="underline">駿河屋公式の買取検索</a>（2026年11月16日閲覧）。順位・倍率・前回（10月28日）との差は当編集部が算出しました。表示は通常の買取価格で、美品・未開封の上乗せや、海外版・ダブルパック・外箱のみは含めていません。同額の場合の並びは機種・作品の順で、順位の差を示すものではありません。買取価格は日々変動し、ほかの買取店では価格が異なります。</p>
        </section>

        {/* 機種別のまとめ */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />機種別のポケモンカセット・ソフトの買取価格帯</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>上のランキングの43件を機種ごとにまとめました。GB・GBAのカセットは全作品が4,300円以上で、3DS・Switchの通常版より高い傾向があります。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>機種</th>
                  <th>集計した件数</th>
                  <th>駿河屋の買取価格の幅</th>
                </tr>
              </thead>
              <tbody>
                {platformSummary.map((row) => (
                  <tr key={row.platform}>
                    <td className="font-bold">{row.platform}</td>
                    <td className="text-sm">{row.count}件</td>
                    <td className="text-sm whitespace-nowrap">{row.min.toLocaleString()}〜{row.max.toLocaleString()}円</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-4" style={{ color: 'var(--color-text-light)' }}>なお、{quoteOnly.join('・')}は、2026年11月16日時点で駿河屋公式の一覧に買取価格が表示されず、「メールにてお見積」の扱いでした。同日のゲオ宅配買取の検索結果では、ダイヤモンドが300円、Yが800円、アルファサファイアが1,000円（ブックオフ店舗も1,000円）で、金・銀（GB）は表示されませんでした。これらの作品は、売却前に駿河屋へ見積もりを依頼するか、ほかの買取店の価格をご確認ください。前回（10月28日）見積扱いだったサン（3DS）には、今回300円の価格が表示されています。</p>
          <p className="text-xs mt-2" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋公式の買取検索、ゲオ宅配買取の検索結果、ブックオフ「ゲームの高価買取情報」（いずれも2026年11月16日閲覧）。件数と価格の幅は当編集部が集計しました。Switchには追加コンテンツ同梱版・モンスターボール Plusセットを含みます。</p>
        </section>

        {/* 高く売るコツ */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ポケモンソフトを高く売るコツ</h2>
          <div className="glass-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sellingTips.map((item) => (
                <div key={item.tip} className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
                  <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{item.tip}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* おすすめ買取店 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ポケモンソフトにおすすめの買取店</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>買取店</th>
                  <th>特徴</th>
                  <th>ポケモンソフトに適している理由</th>
                </tr>
              </thead>
              <tbody>
                {recommendedShops.map((row) => (
                  <tr key={row.shop}>
                    <td className="font-bold">{row.shop}</td>
                    <td className="text-sm">{row.feature}</td>
                    <td className="text-sm">{row.merit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            ポケモンソフトの<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>の確認方法
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            買取価格は店舗ごとに異なるため、売却前に複数社の価格を比較することをおすすめします。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連記事</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/software/switch-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switchソフト買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>任天堂ソフトの相場一覧</p>
            </Link>
            <Link href="/hardware/switch/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switch本体買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>Switch本体の相場と売り方</p>
            </Link>
            <Link href="/knowledge/timing/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>売り時ガイド</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最適な売却タイミング</p>
            </Link>
            <Link href="/price-index/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取価格インデックス</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>実測データにもとづく店舗別の最高値</p>
            </Link>
            <Link href="/review/kaitori-world/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取ワールドの評判</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>人気ソフトを高く売る業者</p>
            </Link>
          </div>
        </section>

        <p className="text-xs mt-8 text-center" style={{ color: 'var(--color-text-light)' }}>最終更新: 2026年11月16日</p>
        <AuthorBox />
      </div>
    </>
  );
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/software/high-value/" className="block bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl p-5 text-center shadow hover:opacity-95 transition">
            <span className="font-bold text-lg">📈 最新の「高く売れるゲームソフト」ランキングを見る</span>
            <span className="block text-sm opacity-90 mt-1">ブックオフ・ゲオ・駿河屋の公式買取価格を定期的に実測更新中</span>
          </Link>
        </div>
      </section>
}
