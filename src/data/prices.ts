// ============================================================
// 買取価格 一元管理データ（全ページで動的に参照する単一の真実）
// 運用: 定期的にこの crossStorePrices を最新の公式買取価格で更新する（最終実測日=PRICE_SURVEY_DATE）。
//   - 全て各社公式買取ページで確認した実価格（創作禁止・確認できない店は null）
//   - 価格は完品（箱・説明書あり）想定の参考買取価格。店舗/在庫/状態で変動。
//   - ソフト: ブックオフ=高価買取情報ページの店舗買取価格 / ゲオ=高価買取品リストの店頭参考買取価格 / 駿河屋=公式買取検索の掲載価格
// ============================================================

export const PRICE_SURVEY_DATE = '2026-11-19'; // 最終調査日
export const PRICE_PREV_SURVEY_DATE: string | null = '2026-10-15'; // 前回調査日（前回比の基準。2026-10-15→11-19は5週間空いている点に注意）

export type StoreKey = 'bookoff' | 'geo' | 'surugaya' | 'retrog';

export const STORE_LABELS: Record<StoreKey, string> = {
  bookoff: 'ブックオフ',
  geo: 'ゲオ',
  surugaya: '駿河屋',
  retrog: 'レトログ',
};

export type TitlePrice = {
  title: string;
  platform: string;
  prices: Partial<Record<StoreKey, number>>; // 円。未確認の店は省略
  prevPrices?: Partial<Record<StoreKey, number>>; // 前回値（前回比用）
  sourceUrls?: string[];
  note?: string;
};

// 2026-11-19 各社公式買取ページで確認（店舗横断マトリクス）
// prices=2026-11-19調査値 / prevPrices=2026-10-15調査値（前回比用）
// bookoff=高価買取情報 全111件(bookoff.co.jp/selllist/game/index.html〜index_6.html・「最終更新日 2026年11月19日」表記・店舗買取価格。JANコードで照合)
// geo=「Switch」(29件)「Switch2」(23件)高価買取品リスト(geo-online.co.jp/store_info/buy/Switch/・/Switch2/)の店頭参考買取価格。掲載なしは省略・更新日表記なし。curlは403のためヘッドレスChromeで取得
// ★駿河屋(surugaya)はブラウザUA付きcurlで公式買取検索(search_buy?search_word=<JANコード>)を実測（国内通常版・JAN/型番照合）。「メールにてお見積」表示は価格非公表として省略。
// ★レトログ(retrog)は2026-11-19のソフト調査では確認していない（10/15時点でも対象タイトルの通常版は掲載なし）。
export const crossStorePrices: TitlePrice[] = [
  { title: 'スーパーマリオ 3Dコレクション', platform: 'Switch', prices: { bookoff: 2000 }, prevPrices: { bookoff: 2500 }, note: 'ブックオフ2,500→2,000円(-500円)。駿河屋は10/15に続き「メールにてお見積」表示で価格非公表。ゲオは高価買取リストに掲載なし' },
  { title: 'ファイアーエムブレム 風花雪月', platform: 'Switch', prices: { bookoff: 3500, geo: 4500, surugaya: 3800 }, prevPrices: { bookoff: 3500, geo: 4500, surugaya: 4200 }, note: 'ブックオフ3,500円・ゲオ4,500円とも据置で、ゲオが最高値。駿河屋(通常版 HAC-P-ANVYA)は4,200→3,800円(-400円)' },
  { title: 'スーパーマリオパーティ ジャンボリー', platform: 'Switch', prices: { bookoff: 2700, geo: 3000, surugaya: 3000 }, prevPrices: { bookoff: 2700, geo: 3000, surugaya: 2500 }, note: 'ブックオフ2,700円・ゲオ3,000円とも据置。駿河屋は2,500→3,000円(+500円)でゲオと同額の最高値。Switch 2 Edition＋ジャンボリーTVはブックオフ3,500円(10/15は4,000円)で、ゲオのSwitch2高価買取リストには11/19時点で掲載なし' },
  { title: '大乱闘スマッシュブラザーズ SPECIAL', platform: 'Switch', prices: { bookoff: 3000, geo: 3500, surugaya: 3000 }, prevPrices: { bookoff: 3200, geo: 3800, surugaya: 2700 }, note: 'ブックオフ3,200→3,000円(-200円)・ゲオ3,800→3,500円(-300円)と下落。駿河屋は2,700→3,000円(+300円)。ゲオ3,500円が最高値' },
  { title: 'スプラトゥーン3', platform: 'Switch', prices: { bookoff: 2400, geo: 3000, surugaya: 2500 }, prevPrices: { bookoff: 2500, geo: 3000, surugaya: 3000 }, note: 'ゲオ3,000円据置。駿河屋は3,000→2,500円(-500円)、ブックオフは2,500→2,400円(-100円)と下落し、10/15はゲオと駿河屋が同額だった最高値はゲオ単独に' },
  { title: 'ゼルダの伝説 ティアーズ オブ ザ キングダム（通常版）', platform: 'Switch', prices: { bookoff: 1700, surugaya: 2500 }, prevPrices: { bookoff: 2000, geo: 2500, surugaya: 2500 }, note: '駿河屋(通常版 HAC-P-AXN7A)2,500円据置で最高値。ブックオフは2,000→1,700円(-300円)。ゲオは10/15の2,500円から、11/19は高価買取リストに掲載なし。Switch 2 Editionはブックオフ・ゲオとも4,500円' },
  { title: 'あつまれ どうぶつの森', platform: 'Switch', prices: { bookoff: 1200, surugaya: 2200 }, prevPrices: { bookoff: 1200, surugaya: 2200 }, note: '通常版はブックオフ1,200円・駿河屋(HAC-P-ACBAA)2,200円とも据置。ゲオは高価買取リストに掲載なし。Switch 2 Editionはブックオフ2,500円・ゲオ3,000円' },
  { title: 'マリオカート ワールド', platform: 'Switch2', prices: { bookoff: 3500, geo: 4000, surugaya: 5300 }, prevPrices: { bookoff: 4500, geo: 4500, surugaya: 5300 }, note: 'ブックオフ4,500→3,500円(-1,000円)・ゲオ4,500→4,000円(-500円)と下落。駿河屋(BEE-P-AAAAA)は5,300円据置で最高値' },
  { title: 'マリオカート8 デラックス', platform: 'Switch', prices: { bookoff: 1700, surugaya: 1800 }, prevPrices: { bookoff: 1500, surugaya: 2500 }, note: '駿河屋(HAC-P-AABPA)は2,500→1,800円(-700円)と下落、ブックオフは1,500→1,700円(+200円)。差は100円に縮まり、駿河屋が最高値。ゲオは高価買取リストに掲載なし' },
  { title: 'ポケットモンスター スカーレット', platform: 'Switch', prices: { bookoff: 1200, surugaya: 2000 }, prevPrices: { bookoff: 1700, surugaya: 2000 }, note: '駿河屋(HAC-P-ALZXA)2,000円据置で最高値。ブックオフは1,700→1,200円(-500円)。ゲオは高価買取リストに掲載なし' },
  { title: 'ポケットモンスター バイオレット', platform: 'Switch', prices: { bookoff: 1000, surugaya: 2200 }, prevPrices: { bookoff: 1200, surugaya: 1800 }, note: '駿河屋(HAC-P-ALZYA)は1,800→2,200円(+400円)で最高値、スカーレット(2,000円)を上回りました。ブックオフは1,200→1,000円(-200円)。ゲオは高価買取リストに掲載なし' },
];


// ---- ゲーム機本体の実測（2026-07-04調査開始・v5 S1） ----
// 2026-11-18実測（型番で照合・国内版のみ）:
//   ブックオフ=宅配買取の買取価格検索(sell.bookoff.co.jp/online/search/keyword/<型番>)の「参考買取価格」（箱・説明書ありの行。【箱説なし】の行は不採用）。10/15までの店頭「高価買取リスト」から出典を変更
//   ゲオ=宅配買取の買取価格検索(buy.geo-online.co.jp/search/result/?word=)の「最高価格」
//   駿河屋=公式買取検索(suruga-ya.jp/kaitori/search_buy?search_word=<型番>)の掲載価格
//   レトログ=買取価格表 Switch/PS5(kaitori-retrog.jp/buypricelist/…。ページの更新表記は2026/09/14)。掲載のない機種は省略
export const HARDWARE_SURVEY_DATE = '2026-11-18';
export const hardwarePrices: TitlePrice[] = [
  { title: 'Nintendo Switch 2 本体', platform: '本体', prices: { bookoff: 35000, geo: 35000, surugaya: 37000 }, prevPrices: { bookoff: 35000, geo: 35000, surugaya: 38000 }, note: '日本語・国内専用(BEE-S-KB6CA)。駿河屋38,000→37,000円(-1,000円)で最高値を維持。ブックオフ(宅配の参考買取価格)・ゲオとも35,000円。ゲオの多言語対応版は55,000円、ゼルダの伝説 40周年 アニバーサリーエディションは48,000円。レトログの価格表に掲載なし' },
  { title: 'Switch 有機ELモデル（ホワイト/ネオン）', platform: '本体', prices: { bookoff: 12001, geo: 25000, surugaya: 13000, retrog: 6900 }, prevPrices: { geo: 25000, surugaya: 16000, retrog: 6900 }, note: 'ホワイト(HEG-S-KAAAA)の価格。ゲオ25,000円据置(ネオンも同額)。駿河屋ホワイトは16,000→13,000円(-3,000円)、ネオン(HEG-S-KABAA)は16,000円。ブックオフはホワイト・ネオンとも12,001円(宅配の参考買取価格・箱説なしは9,600円)。レトログはホワイト6,900円・ネオン8,000円' },
  { title: 'Nintendo Switch（旧型・ネオン 現行パッケージ）', platform: '本体', prices: { bookoff: 5000, geo: 17000, surugaya: 12000, retrog: 5000 }, prevPrices: { geo: 17000, surugaya: 12000, retrog: 5000 }, note: 'バッテリー拡張モデル(HAD-S-KABAH)。ゲオ17,000円・駿河屋12,000円・レトログ5,000円で3社とも据置。ブックオフは5,000円(宅配の参考買取価格・箱説なしは3,751円)' },
  { title: 'Nintendo Switch Lite', platform: '本体', prices: { bookoff: 5000, geo: 15000, surugaya: 10000, retrog: 3200 }, prevPrices: { geo: 15000, surugaya: 10000, retrog: 3200 }, note: 'ゲオは全10商品(グレー含む)15,000円で据置。駿河屋グレー(HDH-S-GAZAA)10,000円据置。ブックオフはグレー・イエローとも5,000円(宅配の参考買取価格・箱説なしは3,751円)。レトログはイエロー3,200円(グレーは価格表に掲載なし)' },
  { title: 'PS5 Slim 通常版（CFI-2000）', platform: '本体', prices: { bookoff: 57000, geo: 60000, surugaya: 60000 }, prevPrices: { geo: 60000, surugaya: 60000 }, note: 'ゲオ(CFI-2000)・駿河屋(CFI-2000A01)とも60,000円で据置・同額で最高値。ブックオフは57,000円(宅配の参考買取価格・箱説なしは54,500円)。レトログの価格表に掲載なし' },
  { title: 'PS5 Slim デジタル・エディション（CFI-2000B）', platform: '本体', prices: { bookoff: 25000, geo: 53000, surugaya: 56000 }, prevPrices: { geo: 53000, surugaya: 53000 }, note: '駿河屋(CFI-2000B01)は53,000→56,000円(+3,000円・「価格上昇中」表示)で最高値。ゲオ53,000円据置。ブックオフは25,000円(宅配の参考買取価格・箱説なしは22,500円)。レトログの価格表に掲載なし' },
  { title: 'PS5 旧型 通常版（CFI-1200A01）', platform: '本体', prices: { bookoff: 39000, geo: 48000, surugaya: 50000, retrog: 36000 }, prevPrices: { retrog: 38400 }, note: '11/18から型番をCFI-1200A01にそろえて比較(10/15は駿河屋がCFI-1000A01・レトログがCFI-1200A01で型番が混在していたため、前回比はレトログのみ)。レトログ38,400→36,000円(-2,400円)。CFI-1000A01/1100A01は駿河屋50,000円・ゲオ43,000円・ブックオフ35,000円・レトログ32,000円' },
];

// ---- 前回比（高騰/急落）ヘルパー ----
export type PriceMove = { title: string; platform: string; store: StoreKey; from: number; to: number; delta: number };
// 各タイトル・店舗で前回比の変動を抽出（delta != 0 のみ）。降順=高騰、昇順=急落で使う。
export function priceMoves(list: TitlePrice[] = crossStorePrices): PriceMove[] {
  const moves: PriceMove[] = [];
  for (const t of list) {
    if (!t.prevPrices) continue;
    for (const [store, to] of Object.entries(t.prices) as [StoreKey, number][]) {
      const from = t.prevPrices[store];
      if (typeof from === 'number' && typeof to === 'number' && from !== to) {
        moves.push({ title: t.title, platform: t.platform, store, from, to, delta: to - from });
      }
    }
  }
  return moves.sort((a, b) => b.delta - a.delta);
}

// ---- 集計ヘルパー（柱1: 価格インデックス） ----
export type PriceAnalysis = {
  title: string;
  platform: string;
  best: { store: StoreKey; price: number };
  low: number;
  gap: number; // 最高 - 最安
  prices: Partial<Record<StoreKey, number>>;
};

export function analyzeTitle(t: TitlePrice): PriceAnalysis | null {
  const entries = (Object.entries(t.prices) as [StoreKey, number][]).filter(([, v]) => typeof v === 'number');
  if (entries.length === 0) return null;
  let best = entries[0];
  let low = entries[0][1];
  for (const e of entries) {
    if (e[1] > best[1]) best = e;
    if (e[1] < low) low = e[1];
  }
  return { title: t.title, platform: t.platform, best: { store: best[0], price: best[1] }, low, gap: best[1] - low, prices: t.prices };
}

// 価格差が大きい順（=店選びで差がつくランキング）
export function priceDiffRanking(list: TitlePrice[] = crossStorePrices): PriceAnalysis[] {
  return list.map(analyzeTitle).filter((x): x is PriceAnalysis => x !== null).sort((a, b) => b.gap - a.gap);
}

// 特定タイトルの行を名前一致で取得（シリーズページ等での動的挿入用）
export function getPricesByKeyword(keyword: string, list: TitlePrice[] = crossStorePrices): TitlePrice[] {
  return list.filter((t) => t.title.includes(keyword));
}
