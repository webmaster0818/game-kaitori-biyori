// ============================================================
// 買取価格 一元管理データ（全ページで動的に参照する単一の真実）
// 運用: 定期的にこの crossStorePrices を最新の公式買取価格で更新する（最終実測日=PRICE_SURVEY_DATE）。
//   - 全て各社公式買取ページで確認した実価格（創作禁止・確認できない店は null）
//   - 価格は完品（箱・説明書あり）想定の参考買取価格。店舗/在庫/状態で変動。
//   - ブックオフ=高価買取情報ページの店頭参考価格 / ゲオ・駿河屋=宅配(通信)買取の参考価格
// ============================================================

export const PRICE_SURVEY_DATE = '2026-10-15'; // 最終調査日
export const PRICE_PREV_SURVEY_DATE: string | null = '2026-09-16'; // 前回調査日（前回比の基準。2026-09-16→10-15は約4週間空いている点に注意）

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

// 2026-10-15 各社公式買取ページで確認（店舗横断マトリクス）
// prices=2026-10-15調査値 / prevPrices=2026-09-16調査値（前回比用）
// bookoff=高価買取リスト全111件(2026-10-15最終更新表記・bookoff.co.jp/selllist/game/index.html・Puppeteerで全6ページ取得) / geo=「Switch」「Switch2」高価買取品リスト掲載分のみ(掲載なしは省略・更新日表記なし)。
// ★駿河屋(surugaya)はブラウザUA付きcurlで公式買取検索(search_buy)を実測（国内通常版・型番照合）。「メールにてお見積」表示は価格非公表として省略。
// ★レトログ(retrog)は2026-10-15に価格表(2026/10/14更新表記)の取得に成功。対象10タイトルの通常版は掲載なし。
export const crossStorePrices: TitlePrice[] = [
  { title: 'スーパーマリオ 3Dコレクション', platform: 'Switch', prices: { bookoff: 2500 }, prevPrices: { bookoff: 3300, surugaya: 1300 }, note: 'ブックオフ3,300→2,500円(-800円)。駿河屋は今回「メールにてお見積」表示で価格非公表(前回1,300円)。ゲオは高価買取リスト掲載なし継続' },
  { title: 'ファイアーエムブレム 風花雪月', platform: 'Switch', prices: { bookoff: 3500, geo: 4500, surugaya: 4200 }, prevPrices: { geo: 5000, surugaya: 4200 }, note: 'ブックオフが3,500円で高価買取リストに再掲載。ゲオ5,000→4,500円に軟化も最高値継続。駿河屋4,200円据置。Fodlan Collectionは駿河屋15,000円' },
  { title: 'スーパーマリオパーティ ジャンボリー', platform: 'Switch', prices: { bookoff: 2700, geo: 3000, surugaya: 2500 }, prevPrices: { bookoff: 3000, geo: 3500, surugaya: 2500 }, note: 'ブックオフ3,000→2,700円・ゲオ3,500→3,000円と軟化。駿河屋2,500円据置。Switch 2 Edition+ジャンボリーTVはブックオフ・ゲオとも4,000円' },
  { title: '大乱闘スマッシュブラザーズ SPECIAL', platform: 'Switch', prices: { bookoff: 3200, geo: 3800, surugaya: 2700 }, prevPrices: { bookoff: 3500, geo: 4000, surugaya: 2400 }, note: 'ブックオフ3,500→3,200円・ゲオ4,000→3,800円と軟化。駿河屋は2,400→2,700円に増額(「価格上昇中」表示)。ゲオ3,800円が最高値継続' },
  { title: 'スプラトゥーン3', platform: 'Switch', prices: { bookoff: 2500, geo: 3000, surugaya: 3000 }, prevPrices: { bookoff: 2700, geo: 3000, surugaya: 2900 }, note: 'ブックオフ2,700→2,500円に軟化。駿河屋2,900→3,000円でゲオと並び最高値。エキスパンション・パス版は駿河屋5,300円' },
  { title: 'ゼルダの伝説 ティアーズ オブ ザ キングダム（通常版）', platform: 'Switch', prices: { bookoff: 2000, geo: 2500, surugaya: 2500 }, prevPrices: { bookoff: 2500, geo: 3000, surugaya: 2500 }, note: 'ブックオフ2,500→2,000円・ゲオ3,000→2,500円と軟化。駿河屋2,500円据置。Switch 2 Editionはブックオフ・ゲオとも4,500円' },
  { title: 'あつまれ どうぶつの森', platform: 'Switch', prices: { bookoff: 1200, surugaya: 2200 }, prevPrices: { bookoff: 1500 }, note: 'ブックオフ1,500→1,200円と軟化継続。駿河屋は通常版(HAC-P-ACBAA)2,200円の掲載を再確認(「価格上昇中」表示)。ゲオは掲載なし。Switch 2 Editionはブックオフ2,500円/ゲオ3,000円' },
  { title: 'マリオカート ワールド', platform: 'Switch2', prices: { bookoff: 4500, geo: 4500, surugaya: 5300 }, prevPrices: { bookoff: 5000, geo: 5000, surugaya: 5300 }, note: 'ブックオフ・ゲオとも5,000→4,500円に軟化。駿河屋5,300円据置で最高値継続' },
  { title: 'マリオカート8 デラックス', platform: 'Switch', prices: { bookoff: 1500, surugaya: 2500 }, prevPrices: { bookoff: 2000, surugaya: 1800 }, note: 'ブックオフ2,000→1,500円に軟化。駿河屋は1,800→2,500円に増額(「価格上昇中」表示)し最高値が交代。+コース追加パス版は駿河屋5,500円据置。ゲオは掲載なし' },
  { title: 'ポケットモンスター スカーレット', platform: 'Switch', prices: { bookoff: 1700, surugaya: 2000 }, prevPrices: { bookoff: 1700, surugaya: 1600 }, note: 'ブックオフ1,700円据置。駿河屋1,600→2,000円に増額(「価格上昇中」表示)し最高値が交代' },
  { title: 'ポケットモンスター バイオレット', platform: 'Switch', prices: { bookoff: 1200, surugaya: 1800 }, prevPrices: { bookoff: 1200, surugaya: 1600 }, note: 'ブックオフ1,200円据置。駿河屋1,600→1,800円に増額(「価格上昇中」表示)。駿河屋が最高値継続' },
];


// ---- ゲーム機本体の実測（2026-07-04調査開始・v5 S1） ----
// 2026-10-15実測: ブックオフ=高価買取リスト(10/15更新表記・Switch 2本体のみ掲載) / ゲオ=本体・周辺機器の高価買取品(通常価格枠のみ採用・ジャンク枠は不採用) / 駿河屋=公式買取検索(ブラウザUA付きcurl・型番照合) / レトログ=Switch・PS5価格表(2026/10/14更新表記)
export const HARDWARE_SURVEY_DATE = '2026-10-15';
export const hardwarePrices: TitlePrice[] = [
  { title: 'Nintendo Switch 2 本体', platform: '本体', prices: { bookoff: 35000, geo: 35000, surugaya: 38000 }, prevPrices: { bookoff: 34000, geo: 35000, surugaya: 35000 }, note: '駿河屋35,000→38,000円(+3,000円・「価格上昇中」表示)で最高値に。ブックオフ34,000→35,000円、ゲオ35,000円据置(日本語・国内専用)。駿河屋のマリオカート ワールド セットは38,000円、ゲオの多言語対応版は55,000円' },
  { title: 'Switch 有機ELモデル（ホワイト/ネオン）', platform: '本体', prices: { geo: 25000, surugaya: 16000, retrog: 6900 }, prevPrices: { geo: 25000, surugaya: 18000, retrog: 6900 }, note: 'ゲオ25,000円(ホワイト・ネオンとも)据置。駿河屋ホワイト(HEG-S-KAAAA)は16,000円(前回18,000円)・ネオン(HEG-S-KABAA)は18,000円。レトログはホワイト6,900円・ネオン8,000円' },
  { title: 'Nintendo Switch（旧型・ネオン 現行パッケージ）', platform: '本体', prices: { geo: 17000, surugaya: 12000, retrog: 5000 }, prevPrices: { geo: 17000, surugaya: 12000, retrog: 5000 }, note: 'ゲオ17,000円(KABAH)・駿河屋12,000円(2019年8月モデル)・レトログ5,000円(HAD-S-KABAH)で3社とも据置' },
  { title: 'Nintendo Switch Lite', platform: '本体', prices: { geo: 15000, surugaya: 10000, retrog: 3200 }, prevPrices: { surugaya: 12000, retrog: 3200 }, note: 'ゲオが通常価格枠に再掲載(全5色15,000円)。駿河屋グレー(HDH-S-GAZAA)は12,000→10,000円に軟化。レトログはイエロー/ブルー3,200円・コーラル4,000円' },
  { title: 'PS5 Slim 通常版（CFI-2000）', platform: '本体', prices: { geo: 60000, surugaya: 60000 }, prevPrices: { surugaya: 60000 }, note: 'ゲオが60,000円で再掲載(CFI-2000)。駿河屋60,000円据置(CFI-2000A01)。ゲオはPS5 Pro(CFI-7100B01)115,000円も掲載' },
  { title: 'PS5 Slim デジタル・エディション（CFI-2000B）', platform: '本体', prices: { geo: 53000, surugaya: 53000 }, prevPrices: { surugaya: 52000 }, note: 'ゲオが53,000円で再掲載。駿河屋52,000→53,000円(CFI-2000B01・「価格上昇中」表示)' },
  { title: 'PS5 旧型 通常版（CFI-1000〜1200）', platform: '本体', prices: { surugaya: 48000, retrog: 38400 }, prevPrices: { surugaya: 50000, retrog: 36000 }, note: '駿河屋CFI-1000A01は50,000→48,000円。レトログはCFI-1200A01が38,400円(前回36,000円)・CFI-1000A01/1100A01は34,400円' },
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
