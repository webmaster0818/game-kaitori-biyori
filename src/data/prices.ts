// ============================================================
// 買取価格 一元管理データ（全ページで動的に参照する単一の真実）
// 週次運用: 毎週この crossStorePrices を最新の公式買取価格で更新する。
//   - 全て各社公式買取ページで確認した実価格（創作禁止・確認できない店は null）
//   - 価格は完品（箱・説明書あり）想定の参考買取価格。店舗/在庫/状態で変動。
//   - ブックオフ=高価買取情報ページの店頭参考価格 / ゲオ・駿河屋=宅配(通信)買取の参考価格
// ============================================================

export const PRICE_SURVEY_DATE = '2026-06-25'; // 最終調査日
export const PRICE_PREV_SURVEY_DATE: string | null = '2026-06-20'; // 前回調査日（2回目以降に設定→先週比が有効化）

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

// 2026-06-20 各社公式買取ページで確認（店舗横断マトリクス）
// prices=2026-06-25調査値 / prevPrices=2026-06-20調査値（先週比用）。surugayaは6/25に自動取得不可のため6/20値を継続。
export const crossStorePrices: TitlePrice[] = [
  { title: 'スーパーマリオ 3Dコレクション', platform: 'Switch', prices: { bookoff: 4000, geo: 4500, surugaya: 4500 }, prevPrices: { bookoff: 4000, geo: 4500, surugaya: 4500 } },
  { title: 'ファイアーエムブレム 風花雪月', platform: 'Switch', prices: { geo: 4500, surugaya: 4500 }, prevPrices: { geo: 4500, surugaya: 4500 } },
  { title: 'スーパーマリオパーティ ジャンボリー', platform: 'Switch', prices: { bookoff: 3300, geo: 3800, surugaya: 3800 }, prevPrices: { bookoff: 3300, geo: 3800, surugaya: 3800 } },
  { title: '大乱闘スマッシュブラザーズ SPECIAL', platform: 'Switch', prices: { bookoff: 3500, geo: 3800, surugaya: 3500 }, prevPrices: { bookoff: 3500, geo: 3800, surugaya: 3500 } },
  { title: 'スプラトゥーン3', platform: 'Switch', prices: { bookoff: 3000, geo: 3500, surugaya: 3300 }, prevPrices: { bookoff: 2800, geo: 3500, surugaya: 3300 } },
  { title: 'ゼルダの伝説 ティアーズ オブ ザ キングダム（通常版）', platform: 'Switch', prices: { bookoff: 2500, geo: 3000, surugaya: 3400 }, prevPrices: { bookoff: 2500, geo: 3000, surugaya: 3400 } },
  { title: 'あつまれ どうぶつの森', platform: 'Switch', prices: { bookoff: 2700, geo: 3000, surugaya: 2600 }, prevPrices: { bookoff: 2800, geo: 3000, surugaya: 2600 } },
  { title: 'マリオカート8 デラックス', platform: 'Switch', prices: { bookoff: 1500, geo: 2000, surugaya: 2500 }, prevPrices: { bookoff: 1500, geo: 2000, surugaya: 2500 } },
  { title: 'ポケットモンスター スカーレット', platform: 'Switch', prices: { bookoff: 1700, geo: 2000, surugaya: 2000 }, prevPrices: { bookoff: 1800, geo: 2000, surugaya: 2000 } },
  { title: 'ポケットモンスター バイオレット', platform: 'Switch', prices: { bookoff: 1500, geo: 1500, surugaya: 2000 }, prevPrices: { bookoff: 1500, geo: 1500, surugaya: 2000 } },
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
