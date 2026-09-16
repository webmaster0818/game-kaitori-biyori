// ============================================================
// 買取価格 一元管理データ（全ページで動的に参照する単一の真実）
// 週次運用: 毎週この crossStorePrices を最新の公式買取価格で更新する。
//   - 全て各社公式買取ページで確認した実価格（創作禁止・確認できない店は null）
//   - 価格は完品（箱・説明書あり）想定の参考買取価格。店舗/在庫/状態で変動。
//   - ブックオフ=高価買取情報ページの店頭参考価格 / ゲオ・駿河屋=宅配(通信)買取の参考価格
// ============================================================

export const PRICE_SURVEY_DATE = '2026-09-16'; // 最終調査日
export const PRICE_PREV_SURVEY_DATE: string | null = '2026-09-05'; // 前回調査日（2回目以降に設定→先週比が有効化）

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
  prevPrices?: Partial<Record<StoreKey, number>>; // 前回値（先週比用・2回目以降）
  sourceUrls?: string[];
  note?: string;
};

// 2026-09-16 各社公式買取ページで確認（店舗横断マトリクス）
// prices=2026-09-16調査値 / prevPrices=2026-09-05調査値（先週比用）
// bookoff=高価買取リスト(2026-09-10最終更新表記・URL=bookoff.co.jp/selllist/game/index.html ※JSレンダリング必須になったためPuppeteerで取得) / geo=「高価買取品」リスト掲載分のみ(掲載落ちは省略・更新日表記なし)。
// ★駿河屋(surugaya)はブラウザUA付きcurlで公式買取検索(kaitori/search_buy)を全件実測（国内通常版・完品基準・型番照合）。
// ★レトログ(retrog)はページのJS化継続で機種別価格の取得不能(トップの実績例のみ)。前回値(7/23更新表記)を保持。
export const crossStorePrices: TitlePrice[] = [
  { title: 'スーパーマリオ 3Dコレクション', platform: 'Switch', prices: { bookoff: 3300, surugaya: 1300 }, prevPrices: { bookoff: 3300 }, note: 'ブックオフ3,300円据置。駿河屋は前回「お見積」だった公表価格が1,300円で復活(HAC-P-AVP3A・8/29と同額)。ゲオは高価買取リスト掲載なし継続' },
  { title: 'ファイアーエムブレム 風花雪月', platform: 'Switch', prices: { geo: 5000, surugaya: 4200 }, prevPrices: { geo: 5000, surugaya: 4200 }, note: 'ゲオ5,000円・駿河屋4,200円とも据置。Fodlan Collectionは駿河屋15,000円据置(「価格上昇中」表示)。ブックオフの掲載落ちは継続' },
  { title: 'スーパーマリオパーティ ジャンボリー', platform: 'Switch', prices: { bookoff: 3000, geo: 3500, surugaya: 2500 }, prevPrices: { bookoff: 3000, geo: 3500, surugaya: 2700 }, note: '駿河屋2,700→2,500円に軟化。ブックオフ・ゲオは据置。Switch 2 Edition+ジャンボリーTVはブ4,500円/ゲオ4,500円/駿河屋4,600円で3社据置' },
  { title: '大乱闘スマッシュブラザーズ SPECIAL', platform: 'Switch', prices: { bookoff: 3500, geo: 4000, surugaya: 2400 }, prevPrices: { bookoff: 3300, geo: 4000, surugaya: 3300 }, note: 'ブックオフ3,300→3,500円に増額の一方、駿河屋3,300→2,400円(-900円=今週最大の下げ)。ゲオ4,000円が最高値継続' },
  { title: 'スプラトゥーン3', platform: 'Switch', prices: { bookoff: 2700, geo: 3000, surugaya: 2900 }, prevPrices: { bookoff: 3000, geo: 3000, surugaya: 2900 }, note: 'ブックオフ3,000→2,700円に軟化。ゲオ3,000円が最高値に。エキスパンション・パス版は駿河屋5,300円据置' },
  { title: 'ゼルダの伝説 ティアーズ オブ ザ キングダム（通常版）', platform: 'Switch', prices: { bookoff: 2500, geo: 3000, surugaya: 2500 }, prevPrices: { bookoff: 2500, geo: 3000, surugaya: 2800 }, note: '駿河屋2,800→2,500円に軟化。Switch 2 Editionはゲオ4,500円据置/駿河屋4,700円(+200円・「価格上昇中」表示)' },
  { title: 'あつまれ どうぶつの森', platform: 'Switch', prices: { bookoff: 1500 }, prevPrices: { bookoff: 1700, surugaya: 2200 }, note: 'ブックオフ1,700→1,500円と軟化継続。駿河屋は今回通常版の検索結果掲載を確認できず(前回2,200円)。ゲオの掲載落ちも継続。Switch 2 Editionはブ2,500円/ゲオ3,000円/駿2,700円で3社据置' },
  { title: 'マリオカート ワールド', platform: 'Switch2', prices: { bookoff: 5000, geo: 5000, surugaya: 5300 }, prevPrices: { bookoff: 5000, geo: 5000, surugaya: 5300 }, note: '3社とも据置(5,000〜5,300円)。駿河屋5,300円が最高値継続' },
  { title: 'マリオカート8 デラックス', platform: 'Switch', prices: { bookoff: 2000, surugaya: 1800 }, prevPrices: { bookoff: 2000, surugaya: 1900 }, note: '駿河屋1,900→1,800円に軟化。+コース追加パス版は駿河屋6,500→5,500円(-1,000円)。ゲオの掲載なし継続' },
  { title: 'ポケットモンスター スカーレット', platform: 'Switch', prices: { bookoff: 1700, surugaya: 1600 }, prevPrices: { bookoff: 1500, surugaya: 1800 }, note: 'ブックオフ1,500→1,700円に増額し最高値が交代。駿河屋は1,800→1,600円に軟化' },
  { title: 'ポケットモンスター バイオレット', platform: 'Switch', prices: { bookoff: 1200, surugaya: 1600 }, prevPrices: { bookoff: 1000, surugaya: 1700 }, note: 'ブックオフ1,000→1,200円に増額・駿河屋1,700→1,600円に軟化。駿河屋が最高値継続' },
];


// ---- ゲーム機本体の週次実測（2026-07-04調査開始・v5 S1） ----
// 2026-09-16実測: ブックオフ=高価買取リスト(9/10更新表記・Switch 2本体のみ掲載) / ゲオ=本体・周辺機器の高価買取品(通常価格枠のみ採用・ジャンク枠は不採用) / 駿河屋=公式買取検索(ブラウザUA付きcurl・型番照合) / レトログ=JS化継続で取得不能・前回値(7/23更新表記)を保持
export const HARDWARE_SURVEY_DATE = '2026-09-16';
export const hardwarePrices: TitlePrice[] = [
  { title: 'Nintendo Switch 2 本体', platform: '本体', prices: { bookoff: 34000, geo: 35000, surugaya: 35000 }, prevPrices: { bookoff: 34000, geo: 35000, surugaya: 36000 }, note: '駿河屋36,000→35,000円と軟化継続で3社が34,000〜35,000円に収斂。ソフト同梱セットは駿河屋37,000円(スプラトゥーン レイダース/ポケモンLEGENDS Z-A)' },
  { title: 'Switch 有機ELモデル（ホワイト/ネオン）', platform: '本体', prices: { geo: 25000, surugaya: 18000, retrog: 6900 }, prevPrices: { geo: 25000, surugaya: 18000, retrog: 6900 }, note: 'ゲオ25,000円(ホワイト)・駿河屋18,000円とも据置。ティアキンエディション等の限定版は駿河屋20,000円。レトログは取得不能で前回値保持' },
  { title: 'Nintendo Switch（旧型・ネオン 現行パッケージ）', platform: '本体', prices: { geo: 17000, surugaya: 12000, retrog: 5000 }, prevPrices: { geo: 17000, surugaya: 12000, retrog: 5000 }, note: 'ゲオ17,000円(KABAH)・駿河屋12,000円(2019年8月モデル)とも据置。レトログは取得不能で前回値保持' },
  { title: 'Nintendo Switch Lite', platform: '本体', prices: { surugaya: 12000, retrog: 3200 }, prevPrices: { geo: 15000, surugaya: 13000, retrog: 3200 }, note: '駿河屋グレー13,000→12,000円に軟化(ブルー11,000円)。ゲオは今回通常価格枠での掲載を確認できず(ジャンク枠のみ掲載・前回15,000円)。ハイラルエディション18,000円等の限定版は別建て。レトログは取得不能で前回値保持' },
  { title: 'PS5 Slim 通常版（CFI-2000）', platform: '本体', prices: { surugaya: 60000 }, prevPrices: { geo: 60000, surugaya: 60000 }, note: '駿河屋60,000円据置(CFI-2000A01)。ゲオは今回本体・周辺機器の高価買取リストでPS5本体の掲載を確認できず(前回60,000円)' },
  { title: 'PS5 Slim デジタル・エディション（CFI-2000B）', platform: '本体', prices: { surugaya: 52000 }, prevPrices: { geo: 53000, surugaya: 52000 }, note: '駿河屋52,000円据置(CFI-2000B01)。ゲオは今回リスト掲載を確認できず(前回53,000円)' },
  { title: 'PS5 旧型 通常版（CFI-1000〜1200）', platform: '本体', prices: { surugaya: 50000, retrog: 36000 }, prevPrices: { surugaya: 50000, retrog: 36000 }, note: '駿河屋CFI-1000A01は50,000円据置。レトログは取得不能で前回値保持' },
];

// ---- 先週比（高騰/急落）ヘルパー ----
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
