import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox'
import KaitoriWorldCta from '@/components/KaitoriWorldCta';

const SURVEY_DATE_LABEL = '2026年11月19日';
const PREV_SURVEY_DATE_LABEL = '2026年10月15日';

export const metadata: Metadata = {
  title: 'ゲームソフトの買取価格ランキング｜高く売れるソフトをブックオフ・ゲオ・駿河屋の公式価格で比較【2026年11月】',
  description:
    '2026年11月19日にブックオフ・ゲオ・駿河屋の公式サイトで確認したゲームソフトの買取価格を、ランキング形式で比較しています。ブックオフとゲオの高価買取リストに共通して掲載された36本では、最高値の店は駿河屋が22本・ゲオが19本・ブックオフが6本（同額を含む）で、3社の差は最大1,800円でした。',
  keywords: ['ゲームソフト 買取', 'ゲームソフト 買取価格', 'ゲームソフト 高く売れる', 'ゲームソフト 買取 ランキング', '高価買取 ゲーム ランキング', 'ゲームソフト 買取相場'],
  openGraph: {
    images: ['/og.png'],
    title: 'ゲームソフトの買取価格ランキング【2026年11月】ブックオフ・ゲオ・駿河屋の公式価格で比較',
    description: 'ブックオフ・ゲオ・駿河屋の公式買取価格を2026年11月19日に確認し、同一ソフト36本を3社で比較しています。どの店で売ると高いか、高く売れるソフトはどれかを実測データでご紹介します。',
    type: 'article',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

const yen = (n: number) => `${n.toLocaleString()}円`;

// ---- 2026-11-19 実測 ----
// ブックオフ: https://www.bookoff.co.jp/selllist/game/index.html （index_2〜6.html まで全6ページ・全111件。ページの表記「最終更新日 2026年11月19日」。店舗買取価格）
// ゲオ: https://geo-online.co.jp/store_info/buy/Switch2/ （23件）・https://geo-online.co.jp/store_info/buy/Switch/ （29件）。店頭参考買取価格・更新日の表記なし
// 駿河屋: https://www.suruga-ya.jp/kaitori/search_buy?search_word=<JANコード> （公式買取検索。ブックオフ掲載のJANコードで照合し、通常版の行を採用）
//         高額リストは https://www.suruga-ya.jp/kaitori/search_buy?category=20038&search_word=&rankBy=purchase_price(int):descending （ニンテンドースイッチ・価格の高い順・該当8,499件）
// いずれも完品（箱・説明書・付属品あり）前提の掲載価格で、店舗・状態・在庫により変動します。

// ブックオフとゲオの両方の高価買取リストに掲載されていたSwitch／Switch 2ソフト36本（駿河屋はJANコードで照合）
const threeStoreCompare = [
  { title: 'KINGDOM HEARTS Collection ［I～III］', platform: 'Switch 2', bookoff: 6500, geo: 6500, surugaya: 5700 },
  { title: 'ゼルダの伝説 時のオカリナ', platform: 'Switch 2', bookoff: 5800, geo: 5500, surugaya: 6000 },
  { title: 'ダービースタリオン2', platform: 'Switch 2', bookoff: 5000, geo: 5000, surugaya: 4900 },
  { title: 'ファイアーエムブレム 万紫千紅（通常版）', platform: 'Switch 2', bookoff: 5000, geo: 5000, surugaya: 4700 },
  { title: 'ファイナルファンタジー レゾナンス', platform: 'Switch 2', bookoff: 4500, geo: 4500, surugaya: 4500 },
  { title: 'ゼルダの伝説 ティアーズ オブ ザ キングダム Nintendo Switch 2 Edition', platform: 'Switch 2', bookoff: 4500, geo: 4500, surugaya: 4900 },
  { title: 'ゼルダの伝説 ブレス オブ ザ ワイルド Nintendo Switch 2 Edition', platform: 'Switch 2', bookoff: 4500, geo: 4500, surugaya: 4700 },
  { title: '真・三國無双 ORIGINS', platform: 'Switch 2', bookoff: 4000, geo: 4500, surugaya: 4800 },
  { title: '空の軌跡 the 2nd（通常版）', platform: 'Switch 2', bookoff: 4000, geo: 4500, surugaya: 4500 },
  { title: 'ゼルダ無双 封印戦記（通常版）', platform: 'Switch 2', bookoff: 3500, geo: 3500, surugaya: 4000 },
  { title: 'ドンキーコング バナンザ', platform: 'Switch 2', bookoff: 3500, geo: 3500, surugaya: 4500 },
  { title: 'Nintendo Switch Sports Resort', platform: 'Switch 2', bookoff: 3500, geo: 3500, surugaya: 3800 },
  { title: '星のカービィ ディスカバリー Nintendo Switch 2 Edition + スターリーワールド', platform: 'Switch 2', bookoff: 3500, geo: 4000, surugaya: 4500 },
  { title: 'マリオカート ワールド', platform: 'Switch 2', bookoff: 3500, geo: 4000, surugaya: 5300 },
  { title: 'スーパーマリオブラザーズ ワンダー Nintendo Switch 2 Edition ＋ みんなでリンリンパーク', platform: 'Switch 2', bookoff: 3000, geo: 3500, surugaya: 4000 },
  { title: 'スターフォックス', platform: 'Switch 2', bookoff: 3000, geo: 3000, surugaya: 2200 },
  { title: 'バイオハザード レクイエム（通常版）', platform: 'Switch 2', bookoff: 3000, geo: 3500, surugaya: 3300 },
  { title: 'ぽこ あ ポケモン', platform: 'Switch 2', bookoff: 3000, geo: 3500, surugaya: 4000 },
  { title: 'マリオテニス フィーバー', platform: 'Switch 2', bookoff: 3000, geo: 3500, surugaya: 4000 },
  { title: 'あつまれ どうぶつの森 Nintendo Switch 2 Edition', platform: 'Switch 2', bookoff: 2500, geo: 3000, surugaya: 2700 },
  { title: 'プラグマタ（通常版）', platform: 'Switch 2', bookoff: 2500, geo: 3000, surugaya: 4200 },
  { title: 'ファイナルファンタジー レゾナンス', platform: 'Switch', bookoff: 4800, geo: 4500, surugaya: 4500 },
  { title: 'ファイアーエムブレム 風花雪月', platform: 'Switch', bookoff: 3500, geo: 4500, surugaya: 3800 },
  { title: 'ほの暮しの庭', platform: 'Switch', bookoff: 3800, geo: 4000, surugaya: 4000 },
  { title: 'トモダチコレクション わくわく生活', platform: 'Switch', bookoff: 2800, geo: 3500, surugaya: 3500 },
  { title: '大乱闘スマッシュブラザーズ SPECIAL', platform: 'Switch', bookoff: 3000, geo: 3500, surugaya: 3000 },
  { title: '桃太郎電鉄2 あなたの町も きっとある 東日本編＋西日本編', platform: 'Switch', bookoff: 3000, geo: 3500, surugaya: 4000 },
  { title: 'リズム天国 ミラクルスターズ', platform: 'Switch', bookoff: 3300, geo: 3000, surugaya: 3800 },
  { title: 'スプラトゥーン3', platform: 'Switch', bookoff: 2400, geo: 3000, surugaya: 2500 },
  { title: 'スーパー マリオパーティ ジャンボリー', platform: 'Switch', bookoff: 2700, geo: 3000, surugaya: 3000 },
  { title: 'ゼルダの伝説 ブレス オブ ザ ワイルド', platform: 'Switch', bookoff: 2700, geo: 3000, surugaya: 3000 },
  { title: '世界のアソビ大全51', platform: 'Switch', bookoff: 1800, geo: 2500, surugaya: 1900 },
  { title: 'がんばれゴエモン大集合！', platform: 'Switch', bookoff: 2400, geo: 2500, surugaya: 2400 },
  { title: 'スーパーマリオギャラクシー ＋ スーパーマリオギャラクシー 2', platform: 'Switch', bookoff: 2000, geo: 2500, surugaya: 2900 },
  { title: '桃太郎電鉄 ～昭和 平成 令和も定番！～', platform: 'Switch', bookoff: 2000, geo: 2500, surugaya: 2000 },
  { title: 'ドラゴンクエストVII Reimagined', platform: 'Switch', bookoff: 2000, geo: 2500, surugaya: 1900 },
];

type StoreCol = 'bookoff' | 'geo' | 'surugaya';
const STORE_NAME: Record<StoreCol, string> = { bookoff: 'ブックオフ', geo: 'ゲオ', surugaya: '駿河屋' };
const STORES: StoreCol[] = ['bookoff', 'geo', 'surugaya'];

const compareRanked = threeStoreCompare
  .map((r) => {
    const best = Math.max(r.bookoff, r.geo, r.surugaya);
    const worst = Math.min(r.bookoff, r.geo, r.surugaya);
    const winners = STORES.filter((s) => r[s] === best);
    return { ...r, best, gap: best - worst, winners };
  })
  .sort((a, b) => b.best - a.best || b.gap - a.gap);

// 集計（ページ上の数値はすべてこの集計から表示）
const totalCompared = compareRanked.length;
const winCount = (s: StoreCol) => compareRanked.filter((r) => r.winners.includes(s)).length;
const soleWinCount = (s: StoreCol) => compareRanked.filter((r) => r.winners.length === 1 && r.winners[0] === s).length;
const geoHigher = compareRanked.filter((r) => r.geo > r.bookoff).length;
const boHigher = compareRanked.filter((r) => r.bookoff > r.geo).length;
const boGeoSame = compareRanked.filter((r) => r.bookoff === r.geo).length;
const tieCount = compareRanked.filter((r) => r.winners.length > 1).length;
const maxGapRow = [...compareRanked].sort((a, b) => b.gap - a.gap)[0];
const sortedGaps = compareRanked.map((r) => r.gap).sort((a, b) => a - b);
const medianGap = sortedGaps.length % 2 === 0
  ? (sortedGaps[sortedGaps.length / 2 - 1] + sortedGaps[sortedGaps.length / 2]) / 2
  : sortedGaps[(sortedGaps.length - 1) / 2];

// 前回（2026-10-15）と今回（2026-11-19）の両方で確認できた価格の変動。null=その時点のリスト・検索に掲載なし、または未確認
const priceMoves: { title: string; store: string; prev: number | null; now: number | null }[] = [
  { title: 'マリオカート ワールド（Switch 2）', store: 'ブックオフ', prev: 4500, now: 3500 },
  { title: 'マリオカート ワールド（Switch 2）', store: 'ゲオ', prev: 4500, now: 4000 },
  { title: 'マリオカート ワールド（Switch 2）', store: '駿河屋', prev: 5300, now: 5300 },
  { title: 'KINGDOM HEARTS Collection（Switch 2）', store: 'ブックオフ', prev: 7000, now: 6500 },
  { title: 'KINGDOM HEARTS Collection（Switch 2）', store: 'ゲオ', prev: 7000, now: 6500 },
  { title: 'ポケットモンスター ハートゴールド（DS）', store: 'ブックオフ', prev: 8400, now: 6000 },
  { title: '大乱闘スマッシュブラザーズ SPECIAL（Switch）', store: 'ブックオフ', prev: 3200, now: 3000 },
  { title: '大乱闘スマッシュブラザーズ SPECIAL（Switch）', store: 'ゲオ', prev: 3800, now: 3500 },
  { title: '大乱闘スマッシュブラザーズ SPECIAL（Switch）', store: '駿河屋', prev: 2700, now: 3000 },
  { title: 'ファイアーエムブレム 風花雪月（Switch）', store: 'ブックオフ', prev: 3500, now: 3500 },
  { title: 'ファイアーエムブレム 風花雪月（Switch）', store: 'ゲオ', prev: 4500, now: 4500 },
  { title: 'ファイアーエムブレム 風花雪月（Switch）', store: '駿河屋', prev: 4200, now: 3800 },
  { title: 'スプラトゥーン3（Switch）', store: 'ブックオフ', prev: 2500, now: 2400 },
  { title: 'スプラトゥーン3（Switch）', store: '駿河屋', prev: 3000, now: 2500 },
  { title: 'スーパー マリオパーティ ジャンボリー（Switch）', store: '駿河屋', prev: 2500, now: 3000 },
  { title: 'ゼルダの伝説 ティアーズ オブ ザ キングダム 通常版（Switch）', store: 'ブックオフ', prev: 2000, now: 1700 },
  { title: 'ゼルダの伝説 ティアーズ オブ ザ キングダム 通常版（Switch）', store: 'ゲオ', prev: 2500, now: null },
];

// ブックオフ「ゲームの高価買取情報」全111件のうち、ソフトで4,500円以上の掲載分（ゲーム機本体を除く）
const bookoffList = [
  { title: 'KINGDOM HEARTS Collection ［I～III］', platform: 'Switch 2', price: 6500 },
  { title: 'ポケットモンスター ハートゴールド', platform: 'DS', price: 6000 },
  { title: 'ポケットモンスター ソウルシルバー', platform: 'DS', price: 6000 },
  { title: 'ゼルダの伝説 時のオカリナ', platform: 'Switch 2', price: 5800 },
  { title: 'ダービースタリオン2', platform: 'Switch 2', price: 5000 },
  { title: 'ファイアーエムブレム 万紫千紅（通常版）', platform: 'Switch 2', price: 5000 },
  { title: 'ほの暮しの庭', platform: 'Switch 2', price: 5000 },
  { title: 'ファイナルファンタジー レゾナンス', platform: 'Switch', price: 4800 },
  { title: 'EA SPORTS FC 27', platform: 'Switch 2', price: 4500 },
  { title: 'ELDEN RING Tarnished Edition', platform: 'Switch 2', price: 4500 },
  { title: 'Stellar Blade コンプリートエディション', platform: 'Switch 2', price: 4500 },
  { title: 'ゼノブレイド2 Nintendo Switch 2 Edition', platform: 'Switch 2', price: 4500 },
  { title: 'ゼルダの伝説 ティアーズ オブ ザ キングダム Nintendo Switch 2 Edition', platform: 'Switch 2', price: 4500 },
  { title: 'ゼルダの伝説 ブレス オブ ザ ワイルド Nintendo Switch 2 Edition', platform: 'Switch 2', price: 4500 },
  { title: 'ファイナルファンタジー レゾナンス', platform: 'Switch 2', price: 4500 },
  { title: '妖怪ウォッチ2 真打', platform: '3DS', price: 4500 },
  { title: '妖怪ウォッチバスターズ 白犬隊', platform: '3DS', price: 4500 },
];

// ゲオ「Switch2の高価買取品」23件のうち3,500円以上の掲載分
const geoList = [
  { title: 'キングダム ハーツ コレクション 1～3', price: 6500 },
  { title: 'ゼルダの伝説 時のオカリナ', price: 5500 },
  { title: 'ファイアーエムブレム 万紫千紅（通常版）', price: 5000 },
  { title: 'ダービースタリオン2', price: 5000 },
  { title: 'ファイナルファンタジー レゾナンス', price: 4500 },
  { title: 'ゼルダの伝説 ブレス オブ ザ ワイルド Switch2 Edition', price: 4500 },
  { title: 'ゼルダの伝説 ティアーズ オブ ザ キングダム Switch2 Edition', price: 4500 },
  { title: '真・三國無双 オリジンズ', price: 4500 },
  { title: '空の軌跡 the 2nd Switch2 Edition（通常版）', price: 4500 },
  { title: 'マリオカート ワールド', price: 4000 },
  { title: '星のカービィ ディスカバリー Switch2 Edition + スターリーワールド', price: 4000 },
  { title: 'ニンテンドー スイッチ スポーツ リゾート', price: 3500 },
  { title: 'ぽこ あ ポケモン', price: 3500 },
  { title: 'スーパーマリオブラザーズ ワンダー Switch2 Edition＋みんなでリンリンパーク', price: 3500 },
  { title: 'ゼルダ無双 封印戦記（通常版）', price: 3500 },
  { title: 'ドンキーコング バナンザ', price: 3500 },
  { title: 'バイオハザード レクイエム（通常版）', price: 3500 },
  { title: 'ファイナルファンタジー7 リバース', price: 3500 },
  { title: 'マリオテニス フィーバー', price: 3500 },
];

// ゲオ「Switchの高価買取品」29件のうち3,000円以上の掲載分
const geoRanking = [
  { title: 'ファイナルファンタジータクティクス イヴァリース クロニクルズ DXED', price: 6500 },
  { title: 'ファイナルファンタジー レゾナンス', price: 4500 },
  { title: 'ファイアーエムブレム 風花雪月', price: 4500 },
  { title: 'デジモンストーリー タイムストレンジャー（通常版）', price: 4500 },
  { title: 'ほの暮しの庭', price: 4000 },
  { title: 'トモダチコレクション わくわく生活', price: 3500 },
  { title: '大乱闘スマッシュブラザーズ SPECIAL', price: 3500 },
  { title: '桃太郎電鉄2 あなたの町も きっとある 東日本編＋西日本編', price: 3500 },
  { title: 'リズム天国 ミラクルスターズ', price: 3000 },
  { title: 'スプラトゥーン3', price: 3000 },
  { title: 'スーパー マリオパーティ ジャンボリー', price: 3000 },
  { title: '鬼滅の刃 ヒノカミ血風譚2（通常版）', price: 3000 },
  { title: 'ゼルダの伝説 ブレス オブ ザ ワイルド', price: 3000 },
  { title: '太鼓の達人 ドンダフルフェスティバル', price: 3000 },
  { title: 'ドラゴンクエストヒーローズ1・2 for Nintendo Switch', price: 3000 },
  { title: '人生ゲーム for Nintendo Switch', price: 3000 },
  { title: 'ファイアーエムブレム エンゲージ（通常版）', price: 3000 },
  { title: 'ポケモン不思議のダンジョン 救助隊DX', price: 3000 },
];

// 駿河屋 公式買取検索（ニンテンドースイッチ・価格の高い順）の上位から、海外版を除く国内版8件
const surugayaList = [
  { title: 'ロックマン&ロックマンX 5in1 スペシャルBOX', price: 48000 },
  { title: 'メモリーズオフ 双想 -Not always true-［超限定版／複製原画A同梱］', price: 37000 },
  { title: 'ゼルダの伝説 ブレス オブ ザ ワイルド DELUXE COLLECTOR\'S EDITION', price: 33000 },
  { title: 'ふたごうさぎのご近所ツーリズモ［限定特装版］', price: 32000 },
  { title: '逆転裁判123 成歩堂セレクション コンプリート・エディション', price: 32000 },
  { title: '遙かなる時空の中で6 DX その先の未来へBOX', price: 30000 },
  { title: 'ファイナルファンタジーI-VI ピクセルリマスター FF35周年限定特装版', price: 27000 },
  { title: 'MISTOVER', price: 26000 },
];

const tips = [
  { title: '箱・説明書・付属品を揃えて売る', description: '各社が掲載している買取価格は、付属品が揃った状態が前提です。ゲオは掲載価格の条件として「液晶や外装の傷や汚れが目立たず、必要な付属品の欠品が無く、正常に動作するもの」と明記しており、条件を満たさない場合は減額またはジャンク品扱い、買取不可となる場合があるとしています。' },
  { title: '複数の店の公式買取価格を見比べる', description: `当サイトが${SURVEY_DATE_LABEL}に比較した同一ソフト${totalCompared}本では、3社の最高値と最安値の差は中央値で${yen(medianGap)}、最大で${yen(maxGapRow.gap)}でした。ブックオフ・ゲオ・駿河屋はいずれも公式サイトで買取価格を公開しているため、売却前に見比べることをおすすめします。` },
  { title: '限定版・特装版は駿河屋の価格も確認する', description: 'ブックオフの高価買取リスト（全111件）と、ゲオのSwitch／Switch 2の高価買取品リストでは、ソフトの最高額はいずれも6,500円でした。一方、駿河屋の買取検索では限定版・特装版が26,000〜48,000円で掲載されています。限定版をお持ちの場合は、駿河屋の掲載価格もご確認ください。' },
  { title: '値下がりする前に売る', description: `当サイトの${PREV_SURVEY_DATE_LABEL}と${SURVEY_DATE_LABEL}の比較では、マリオカート ワールドがブックオフで4,500円から3,500円に、ゲオで4,500円から4,000円に下がっていました。ただし、駿河屋の大乱闘スマッシュブラザーズ SPECIAL（2,700円から3,000円）のように上がったソフトもあり、すべてが値下がりするわけではありません。` },
  { title: '保管状態に注意する', description: 'ゲオの掲載条件にあるとおり、傷や汚れが目立つものは減額の対象になります。ケースやディスク、カセットの状態を保つため、直射日光や湿気を避けて保管することをおすすめします。' },
];

const faqs = [
  { q: 'ゲームソフトはどこで売るのが一番高いですか？', a: `ソフトによって異なります。当サイトが${SURVEY_DATE_LABEL}に、ブックオフとゲオの両方の高価買取リストに掲載されていたSwitch／Switch 2ソフト${totalCompared}本を3社の公式価格で比べたところ、最高値（同額を含む）は駿河屋が${winCount('surugaya')}本、ゲオが${winCount('geo')}本、ブックオフが${winCount('bookoff')}本でした。3社の差は最大${yen(maxGapRow.gap)}（${maxGapRow.title}）です。売却の直前に、各社の公式ページで価格をご確認ください。` },
  { q: '現在高く売れるゲームソフトは何ですか？', a: `${SURVEY_DATE_LABEL}の確認では、通常版ソフトではSwitch 2の「KINGDOM HEARTS Collection ［I～III］」（ブックオフ・ゲオとも6,500円）、Switchの「ファイナルファンタジータクティクス イヴァリース クロニクルズ」（ゲオ6,500円）、Switch 2の「ゼルダの伝説 時のオカリナ」（駿河屋6,000円）、DSの「ポケットモンスター ハートゴールド」「ソウルシルバー」（ブックオフ各6,000円）が高値でした。限定版では、駿河屋で「ロックマン&ロックマンX 5in1 スペシャルBOX」が48,000円で掲載されています。` },
  { q: '買取価格はどのくらいの頻度で変わりますか？', a: `ブックオフの高価買取情報ページには「最終更新日 2026年11月19日」と表記されており、「買取価格は予告なく変更する場合があります」と記載されています。当サイトの${PREV_SURVEY_DATE_LABEL}と${SURVEY_DATE_LABEL}の比較では、ブックオフの「ポケットモンスター ハートゴールド」が8,400円から6,000円に下がるなど、約1か月で数百〜数千円の変動がありました。ゲオのリストには更新日の表記がありません。` },
  { q: '掲載されている買取価格で必ず売れますか？', a: '掲載価格は目安です。ブックオフは「店舗により買取価格は異なります」と記載しており、掲載価格はブックオフ店舗での価格で、公式オンラインストアの買取価格とは異なるとしています。ゲオの価格は店頭参考買取価格で、傷や汚れ、付属品の欠品があると減額またはジャンク品扱いになる場合があります。' },
  { q: '大量のゲームをまとめて売りたい場合はどうすればいいですか？', a: `宅配買取の利用が便利です。駿河屋のあんしん買取は、お見積価格が3,000円以上の場合に送料無料（指定業者の着払い）となります（1箱あたりの買取金額が1,500円未満の場合は送料を請求する場合があるとしています）。カイトリワールドは査定結果が3,000円以上で送料無料、梱包用ダンボールは合計10箱まで無料で届けるとしています（いずれも${SURVEY_DATE_LABEL}に公式サイトで確認）。` },
];

export default function HighValueSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "ゲームソフトの買取価格ランキング｜高く売れるソフトをブックオフ・ゲオ・駿河屋の公式価格で比較【2026年11月】", "datePublished": "2026-05-19", "dateModified": "2026-11-19", "author": {"@type": "Organization", "name": "ゲーム買取びより編集部", "description": "各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較する編集部"}, "publisher": {"@type": "Organization", "name": "ゲーム買取びより"}}) }} />
      <Breadcrumb items={[{ name: 'ソフト別', href: '/' }, { name: 'ゲームソフトの買取価格ランキング' }]} />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(245,158,11,0.2)', color: '#F59E0B' }}>買取価格ランキング</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            ゲームソフトの買取価格ランキング【2026年11月】ブックオフ・ゲオ・駿河屋の公式価格で比較
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>
            ブックオフ・ゲオ・駿河屋が公式サイトで公開しているゲームソフトの買取価格を{SURVEY_DATE_LABEL}に確認し、同じソフトを3社で比較しました。高く売れるソフトのランキングと、どの店で売ると高いかを、確認した価格のみで掲載しています。
          </p>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#E2E8F0' }}>
            このページは「どのソフトがいくらで売れるか」をタイトル単位で扱っています。買取店の選び方（送料・振込日数・口コミを含めた比較）は、<Link href="/" className="underline font-bold" style={{ color: '#FFFFFF' }}>ゲーム買取おすすめランキング（トップページ）</Link>でご確認ください。
          </p>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#E2E8F0' }}>
            ジョーシンの買取価格一覧をお探しの方へ：ジョーシンのWeb買取「買取のジョー」は2026年11月21日時点で一時停止中（復旧日は未定）のため、このページには掲載していません。店頭買取の状況と口コミ評価は<Link href="/review/joshin/" className="underline font-bold" style={{ color: '#FFFFFF' }}>ジョーシンのゲーム買取の現状</Link>にまとめています。
          </p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>最終確認日: {SURVEY_DATE_LABEL}（ブックオフ・ゲオ・駿河屋の公式ページ）</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/" className="btn-primary py-2.5 px-6">
              おすすめ買取サービスを見る
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* どこで売るのが高いか */}
        <section className="mb-12 glass-card p-6" style={{ borderLeft: '4px solid var(--color-electric-green)' }}>
          <h2 className="text-lg md:text-xl font-extrabold mb-3" style={{ color: 'var(--color-deep-blue)' }}>ゲームソフトはどこで売るのが高いか（{SURVEY_DATE_LABEL}の比較結果）</h2>
          <ul className="text-sm space-y-2 list-disc pl-5" style={{ color: 'var(--color-text)' }}>
            <li>ブックオフとゲオの両方の高価買取リストに掲載されていたSwitch／Switch 2ソフト<strong>{totalCompared}本</strong>を3社の公式価格で比べると、最高値（同額を含む）の店は<strong>駿河屋が{winCount('surugaya')}本、ゲオが{winCount('geo')}本、ブックオフが{winCount('bookoff')}本</strong>でした。単独で最高値だった本数は駿河屋{soleWinCount('surugaya')}本・ゲオ{soleWinCount('geo')}本・ブックオフ{soleWinCount('bookoff')}本、複数店が同額で並んだものが{tieCount}本です。</li>
            <li>3社の最高値と最安値の差は<strong>中央値{yen(medianGap)}・最大{yen(maxGapRow.gap)}</strong>でした（最大は{maxGapRow.title}：駿河屋{yen(maxGapRow.surugaya)}・ゲオ{yen(maxGapRow.geo)}・ブックオフ{yen(maxGapRow.bookoff)}）。</li>
            <li>ブックオフとゲオの2社で比べると、ゲオが高いソフトが{geoHigher}本、同額が{boGeoSame}本、ブックオフが高いソフトが{boHigher}本でした。</li>
            <li>最も高い店はソフトごとに異なります（例：ファイアーエムブレム 風花雪月はゲオ4,500円、ゼルダの伝説 時のオカリナは駿河屋6,000円、ファイナルファンタジー レゾナンス（Switch）はブックオフ4,800円）。売却の直前に各社の公式ページでご確認ください。</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※比較対象は、ブックオフとゲオの両リストに掲載されていたソフトに限られます（片方にしか掲載がないソフトは含みません）。ブックオフは店舗買取価格、ゲオは店頭参考買取価格、駿河屋は公式買取検索の掲載価格で、価格の種類が異なる点にご注意ください。数値は確認日時点の目安です。</p>
        </section>

        {/* 3社比較ランキング */}
        <section className="mb-12">
          <h2 className="section-heading mb-2"><span className="section-heading-bar" />同一ソフト{totalCompared}本の買取価格ランキング（3社比較・{SURVEY_DATE_LABEL}確認）</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>3社のうち最も高い買取価格の順に並べています。太字が最高値の店です。「差」は最高値と最安値の差額で、複数店を比較した場合に生じる差額の目安です。</p>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: `ゲームソフトの買取価格ランキング（${SURVEY_DATE_LABEL}確認・ブックオフ／ゲオ／駿河屋）`,
            itemListOrder: 'https://schema.org/ItemListOrderDescending',
            numberOfItems: 10,
            itemListElement: compareRanked.slice(0, 10).map((r, i) => ({ '@type': 'ListItem', position: i + 1, name: `${r.title}（${r.platform}）最高${yen(r.best)}／${r.winners.map((w) => STORE_NAME[w]).join('・')}` })),
          }) }} />
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>順位</th><th>タイトル</th><th>ブックオフ</th><th>ゲオ</th><th>駿河屋</th><th>差</th></tr>
              </thead>
              <tbody>
                {compareRanked.map((r, i) => (
                  <tr key={`${r.title}-${r.platform}`}>
                    <td className="font-bold text-center">{i + 1}</td>
                    <td className="font-bold text-sm">{r.title}<span className="text-xs font-normal ml-1" style={{ color: 'var(--color-text-light)' }}>({r.platform})</span></td>
                    {STORES.map((s) => (
                      <td key={s} className={`text-sm${r.winners.includes(s) ? ' font-bold' : ''}`} style={r.winners.includes(s) ? { color: 'var(--color-electric-green)' } : undefined}>{yen(r[s])}</td>
                    ))}
                    <td className="text-sm">{r.gap > 0 ? yen(r.gap) : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ブックオフ公式「ゲームの高価買取情報」（bookoff.co.jp/selllist/game/・最終更新日 2026年11月19日表記・店舗買取価格）、ゲオ公式「Switch2の高価買取品」「Switchの高価買取品」（geo-online.co.jp/store_info/buy/・店頭参考買取価格）、駿河屋公式 買取検索（suruga-ya.jp/kaitori/search_buy・ブックオフ掲載のJANコードで照合した通常版の掲載価格）。いずれも{SURVEY_DATE_LABEL}確認・完品前提で、店舗・状態・在庫により変動します。</p>
        </section>

        {/* 前回からの変動 */}
        <section className="mb-12">
          <h2 className="section-heading mb-2"><span className="section-heading-bar" />前回確認（{PREV_SURVEY_DATE_LABEL}）からの買取価格の変動</h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>当サイトが前回と今回の両方で確認した価格の比較です。約1か月の間に、値下がりしたソフトと値上がりしたソフトの両方がありました。</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>タイトル</th><th>店</th><th>{PREV_SURVEY_DATE_LABEL}</th><th>{SURVEY_DATE_LABEL}</th><th>増減</th></tr>
              </thead>
              <tbody>
                {priceMoves.map((m) => (
                  <tr key={`${m.title}-${m.store}`}>
                    <td className="font-bold text-sm">{m.title}</td>
                    <td className="text-sm">{m.store}</td>
                    <td className="text-sm">{m.prev !== null ? yen(m.prev) : '—'}</td>
                    <td className="text-sm">{m.now !== null ? yen(m.now) : 'リスト掲載なし'}</td>
                    <td className="text-sm font-bold">{m.prev !== null && m.now !== null ? (m.now === m.prev ? '据え置き' : `${m.now > m.prev ? '+' : '−'}${yen(Math.abs(m.now - m.prev))}`) : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>※前回値は当サイトが{PREV_SURVEY_DATE_LABEL}に同じ公式ページで確認した価格です。「リスト掲載なし」は、今回のゲオ「Switchの高価買取品」リストに掲載がなかったことを示し、買取不可という意味ではありません。</p>
        </section>

        {/* BookOff */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ブックオフの高価買取ソフト上位（4,500円以上・{SURVEY_DATE_LABEL}確認）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>タイトル</th><th>ハード</th><th>買取価格</th></tr>
              </thead>
              <tbody>
                {bookoffList.map((g) => (
                  <tr key={`${g.title}-${g.platform}`}>
                    <td className="font-bold text-sm">{g.title}</td>
                    <td className="text-sm">{g.platform}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(g.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ブックオフ公式「ゲームの高価買取情報」（https://www.bookoff.co.jp/selllist/game/index.html ・全6ページ・全111件、{SURVEY_DATE_LABEL}確認・最終更新日 2026年11月19日表記・店舗買取価格）。ゲーム機本体を除き、4,500円以上のソフトを掲載しています。Switch 2の「KINGDOM HEARTS Collection ［I～III］」6,500円が最高値で、DSの「ポケットモンスター ハートゴールド」「ソウルシルバー」が各6,000円で続きます。店舗により異なり、予告なく変更されます。</p>
        </section>

        {/* GEO Switch 2 */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ゲオの高価買取Switch 2ソフト（3,500円以上・{SURVEY_DATE_LABEL}確認）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>順位</th><th>タイトル</th><th>店頭参考買取価格</th></tr>
              </thead>
              <tbody>
                {geoList.map((g, i) => (
                  <tr key={g.title}>
                    <td className="font-bold text-center">{i + 1}</td>
                    <td className="font-bold text-sm">{g.title}</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(g.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：ゲオ公式「Switch2の高価買取品」（https://geo-online.co.jp/store_info/buy/Switch2/ ・掲載23件のうち3,500円以上、{SURVEY_DATE_LABEL}確認・店頭参考買取価格・ページに更新日の表記なし）。店舗・状態により変動します。</p>
        </section>

        {/* GEO Switch */}
        <section className="mb-12">
          <h2 id="geo-ranking" className="section-heading mb-6"><span className="section-heading-bar" />ゲオで高く売れるSwitchソフトランキング（3,000円以上・{SURVEY_DATE_LABEL}確認）</h2>
          <div className="glass-card p-5 mb-4 overflow-x-auto">
            <table className="w-full text-sm min-w-[420px]">
              <thead><tr className="text-left border-b" style={{ borderColor: 'rgba(0,0,0,0.08)' }}><th className="py-2 pr-3">順位</th><th className="py-2 pr-3">ソフト</th><th className="py-2">ゲオ参考買取価格</th></tr></thead>
              <tbody>
                {geoRanking.map((g, i) => (
                  <tr key={g.title} className="border-b" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                    <td className="py-2 pr-3 font-bold">{i + 1}位</td>
                    <td className="py-2 pr-3">{g.title}</td>
                    <td className="py-2 font-bold" style={{ color: 'var(--color-deep-blue)' }}>{yen(g.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>出典：ゲオ公式「Switchの高価買取品」（https://geo-online.co.jp/store_info/buy/Switch/ ・掲載29件のうち3,000円以上、{SURVEY_DATE_LABEL}確認・店頭参考買取価格）。カイトリワールドの評判が気になる方は<a href="/review/kaitori-world/" className="underline font-bold" style={{ color: 'var(--color-electric-green)' }}>「カイトリワールドは怪しい？」の検証記事</a>もあわせてご覧ください。</p>
        </section>

        {/* Surugaya */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />駿河屋の高額買取Switchソフト上位（{SURVEY_DATE_LABEL}確認）</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr><th>タイトル</th><th>ハード</th><th>買取価格</th></tr>
              </thead>
              <tbody>
                {surugayaList.map((g) => (
                  <tr key={g.title}>
                    <td className="font-bold text-sm">{g.title}</td>
                    <td className="text-sm">Switch</td>
                    <td className="font-bold text-sm" style={{ color: 'var(--color-electric-green)' }}>{yen(g.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>出典：駿河屋公式 買取検索（ニンテンドースイッチ・「価格の高い順」・該当8,499件、{SURVEY_DATE_LABEL}確認）。海外版と「メールにてお見積」表示の商品を除き、国内版の上位8件を掲載しています。上位は限定版・特装版が中心で、最高値はロックマン&ロックマンX 5in1 スペシャルBOXの48,000円です。在庫状況により変動します。</p>
        </section>

        {/* Category Breakdown */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />高く売れるソフトの傾向（{SURVEY_DATE_LABEL}の確認結果から）</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>Switch 2ソフト</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                ブックオフの4,500円以上のソフト17本のうち12本がSwitch 2ソフトでした。「KINGDOM HEARTS Collection ［I～III］」（ブックオフ・ゲオとも6,500円）、「ゼルダの伝説 時のオカリナ」（駿河屋6,000円）などが高値です。
              </p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>定番のSwitchソフト</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                「ファイアーエムブレム 風花雪月」（ゲオ4,500円）、「大乱闘スマッシュブラザーズ SPECIAL」（ゲオ3,500円）、「スプラトゥーン3」（ゲオ3,000円）など、発売から年数が経過したソフトもブックオフ・ゲオの高価買取リストに掲載されています。
              </p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>DS・3DSの人気ソフト</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                ブックオフでは、DSの「ポケットモンスター ハートゴールド」「ソウルシルバー」が各6,000円、3DSの「妖怪ウォッチ2 真打」「妖怪ウォッチバスターズ 白犬隊」が各4,500円で掲載されています。
              </p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>限定版・特装版</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                駿河屋の国内版上位8件は26,000〜48,000円で、限定版・特装版が中心です。特典や付属品が揃っていることが前提の価格です。
              </p>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />ゲームソフトを高く売るためのポイント</h2>
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
            お手持ちのソフトを<span style={{ color: 'var(--color-electric-green)' }}>最高値</span>で売るために
          </h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            同じソフトでも店によって買取価格が異なります。売却前に、複数店の公式買取価格をご確認ください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary py-3 px-8">
              おすすめランキングを見る
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>関連するソフト買取ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/software/switch-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switchソフト買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>人気タイトル10本の買取相場</p>
            </Link>
            <Link href="/software/retro-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>レトロソフト買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ファミコン・スーファミの買取相場</p>
            </Link>
            <Link href="/software/ps5-soft/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>PS5ソフト買取</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>最新タイトルの買取相場</p>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <Link href="/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲーム買取おすすめ比較</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>主要3社の比較と最新の最高値</p>
            </Link>
            <Link href="/price-index/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゲーム買取価格インデックス</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>実測データにもとづく店舗別の最高値</p>
            </Link>
            <Link href="/compare/kaitori-ranking/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>買取おすすめランキング15選</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>15社を比較</p>
            </Link>
            <Link href="/method/high-price/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>高く売るコツ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>買取価格を上げるための方法</p>
            </Link>
            <Link href="/hardware/switch2/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Switch 2本体の買取相場</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>値上げ後の最新相場を解説</p>
            </Link>
            <Link href="/hardware/steam-deck/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>Steam Deckの買取相場</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>OLED/LCD別の売り時を解説</p>
            </Link>
            <Link href="/hardware/ranking/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>本体の買取価格ランキング</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>Switch 2・PS5の最高値を4社で比較</p>
            </Link>
            <Link href="/condition-guide/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>状態別 買取許容度マップ</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>箱なし・傷ありの場合の減額の目安</p>
            </Link>
            <Link href="/review/kaitori-world/" className="glass-card p-4 card-hover block">
              <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>カイトリワールドの評判</p>
              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>宅配買取の条件と評判の検証</p>
            </Link>
          </div>
          <h3 className="font-bold mb-4 mt-8" style={{ color: 'var(--color-deep-blue)' }}>シリーズ別の買取相場</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/software/zelda/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ゼルダの伝説</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ティアキン・ブレワイの相場</p></Link>
            <Link href="/software/splatoon/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>スプラトゥーン</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>スプラ3・2の相場と売り時</p></Link>
            <Link href="/software/monster-hunter/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>モンスターハンター</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ワイルズ・ライズの相場</p></Link>
            <Link href="/software/dragon-quest/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ドラゴンクエスト</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>DQ3リメイク等の相場</p></Link>
            <Link href="/software/pokemon/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ポケモン</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>ポケモンソフトの相場</p></Link>
            <Link href="/software/ff/" className="glass-card p-4 card-hover block"><p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>ファイナルファンタジー</p><p className="text-xs" style={{ color: 'var(--color-text-light)' }}>FFソフトの相場</p></Link>
          </div>
        </section>
        <KaitoriWorldCta />
        <AuthorBox />
      </div>
    </>
  );
}
