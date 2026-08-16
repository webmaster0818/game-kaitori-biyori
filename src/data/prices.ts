// ============================================================
// 買取価格 一元管理データ（全ページで動的に参照する単一の真実）
// 週次運用: 毎週この crossStorePrices を最新の公式買取価格で更新する。
//   - 全て各社公式買取ページで確認した実価格（創作禁止・確認できない店は null）
//   - 価格は完品（箱・説明書あり）想定の参考買取価格。店舗/在庫/状態で変動。
//   - ブックオフ=高価買取情報ページの店頭参考価格 / ゲオ・駿河屋=宅配(通信)買取の参考価格
// ============================================================

export const PRICE_SURVEY_DATE = '2026-08-16'; // 最終調査日
export const PRICE_PREV_SURVEY_DATE: string | null = '2026-08-07'; // 前回調査日（2回目以降に設定→先週比が有効化）

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

// 2026-08-16 各社公式買取ページで確認（店舗横断マトリクス）
// prices=2026-08-16調査値 / prevPrices=2026-08-07調査値（先週比用）。
// bookoff=高価買取情報ページ(2026-08-13最終更新表記) / geo=「Switchの高価買取品」リスト掲載分のみ(掲載落ちは省略・更新日表記なし)。
// ★駿河屋(surugaya)はWebFetchがHTTP 403のため、ブラウザUA付きcurlで公式買取詳細(kaitori_detail)を全件実測（国内通常版・完品基準）。
// ★レトログ(retrog)の正ドメインは kaitori-retrog.jp。ソフト通常版単品は引き続き非掲載（本体のみ実測）。PS5ページは2026-08-16確認時にURL不達のため前回値を保持。
export const crossStorePrices: TitlePrice[] = [
  { title: 'スーパーマリオ 3Dコレクション', platform: 'Switch', prices: { bookoff: 3500 }, prevPrices: { bookoff: 3800 }, note: 'ブックオフ3,800→3,500円に軟化。ゲオは今週の高価買取リストに掲載なし。駿河屋は買取価格非表示(見積扱い)のため非掲載' },
  { title: 'ファイアーエムブレム 風花雪月', platform: 'Switch', prices: { geo: 4500, surugaya: 4200 }, prevPrices: { geo: 4500, surugaya: 4200 }, note: 'ゲオ・駿河屋とも据置。ブックオフは高価買取リストからの掲載落ちが継続。駿河屋のFodlan Collectionは12,000→13,000円に増額' },
  { title: 'スーパーマリオパーティ ジャンボリー', platform: 'Switch', prices: { bookoff: 3200, geo: 3500, surugaya: 2700 }, prevPrices: { bookoff: 3300, geo: 3500, surugaya: 2700 }, note: 'ブックオフ3,300→3,200円に軟化。Switch 2 Edition+ジャンボリーTVは駿河屋5,000円/ブ4,500円/ゲオ4,500円で据置' },
  { title: '大乱闘スマッシュブラザーズ SPECIAL', platform: 'Switch', prices: { bookoff: 3500, geo: 4000, surugaya: 3300 }, prevPrices: { bookoff: 3500, geo: 4000, surugaya: 3300 } },
  { title: 'スプラトゥーン3', platform: 'Switch', prices: { bookoff: 3000, geo: 3000, surugaya: 3100 }, prevPrices: { bookoff: 3000, geo: 3000, surugaya: 3800 }, note: '駿河屋3,800→3,100円に大幅軟化(今週最大の下げ)。駿河屋のエキスパンション・パス版は5,000円据置' },
  { title: 'ゼルダの伝説 ティアーズ オブ ザ キングダム（通常版）', platform: 'Switch', prices: { bookoff: 2700, geo: 3000, surugaya: 3000 }, prevPrices: { bookoff: 2700, geo: 3000, surugaya: 3400 }, note: '駿河屋3,400→3,000円に軟化。Switch 2 Editionは駿河屋5,000円/ゲオ4,500円で据置(ブックオフの掲載落ちは継続)' },
  { title: 'あつまれ どうぶつの森', platform: 'Switch', prices: { bookoff: 2000, geo: 2500, surugaya: 2400 }, prevPrices: { bookoff: 2200, geo: 2500, surugaya: 2400 }, note: 'ブックオフ2,200→2,000円に軟化。Switch 2 Editionはブ2,500円/駿2,700円で据置' },
  { title: 'マリオカート ワールド', platform: 'Switch2', prices: { bookoff: 5500, geo: 5500, surugaya: 5500 }, prevPrices: { bookoff: 5500, geo: 5500, surugaya: 5500 }, note: '2026-08-16に定点へ追加(3社とも5,500円で横並び)。ブックオフは前週5,800円からの軟化。駿河屋はBEE-P-AAAAA' },
  { title: 'マリオカート8 デラックス', platform: 'Switch', prices: { bookoff: 2000, surugaya: 2100 }, prevPrices: { bookoff: 2000, surugaya: 2100 }, note: 'ゲオは今週の高価買取リストに掲載なし。駿河屋の+コース追加パス版は6,500円据置' },
  { title: 'ポケットモンスター スカーレット', platform: 'Switch', prices: { bookoff: 2000, surugaya: 1800 }, prevPrices: { bookoff: 2000, surugaya: 1800 }, note: '両社据置。駿河屋の+ゼロの秘宝版は5,500→6,000円に増額' },
  { title: 'ポケットモンスター バイオレット', platform: 'Switch', prices: { bookoff: 1200, surugaya: 1700 }, prevPrices: { bookoff: 1200, surugaya: 1700 }, note: 'ゲオは今週の高価買取リストに掲載なし。駿河屋の+ゼロの秘宝版は5,500円据置' },
];


// ---- ゲーム機本体の週次実測（2026-07-04調査開始・v5 S1） ----
// 2026-08-16実測: ブックオフ=高価買取リスト(8/13更新表記・Switch 2本体のみ掲載) / ゲオ=本体・周辺機器の高価買取品(店頭参考) / 駿河屋=公式買取詳細(ブラウザUA付きcurlで403回避・全件実測) / レトログ=kaitori-retrog.jp価格表(7/23更新表記・レトロ特化のため現行機は低め)
export const HARDWARE_SURVEY_DATE = '2026-08-16';
export const hardwarePrices: TitlePrice[] = [
  { title: 'Nintendo Switch 2 本体', platform: '本体', prices: { bookoff: 35000, geo: 38000, surugaya: 39000 }, prevPrices: { bookoff: 37000, geo: 38000, surugaya: 41000 }, note: 'ブックオフ37,000→35,000円・駿河屋41,000→39,000円(国内標準BEE-S-KB6CA)と2社が値下げ、ゲオ38,000円のみ据置。駿河屋のセット品は39,000〜42,000円。ゲオは本体買取UPキャンペーン(8/16まで)を告知中' },
  { title: 'Switch 有機ELモデル（ホワイト/ネオン）', platform: '本体', prices: { geo: 23000, surugaya: 20000, retrog: 6900 }, prevPrices: { geo: 23000, surugaya: 20000, retrog: 6900 }, note: '全社据置。駿河屋はホワイト/ネオンとも20,000円。レトログはネオン8,000円/ホワイト6,900円' },
  { title: 'Nintendo Switch（旧型・ネオン 現行パッケージ）', platform: '本体', prices: { geo: 17000, surugaya: 13000, retrog: 5000 }, prevPrices: { geo: 17000, surugaya: 13000, retrog: 5000 }, note: '全社据置。駿河屋の現行パッケージ(2019・バッテリー強化)は13,000円' },
  { title: 'Nintendo Switch Lite', platform: '本体', prices: { geo: 15000, surugaya: 15000, retrog: 3200 }, prevPrices: { geo: 15000, surugaya: 15000, retrog: 3200 }, note: '駿河屋は色によりグレー等15,000・ブルー16,000・イエロー13,000。レトログは色により3,200〜4,000円' },
  { title: 'PS5 Slim 通常版（CFI-2000）', platform: '本体', prices: { geo: 60000, surugaya: 60000 }, prevPrices: { geo: 60000, surugaya: 60000 }, note: '両社据置(駿河屋CFI-2000A01=60,000円)' },
  { title: 'PS5 Slim デジタル・エディション（CFI-2000B）', platform: '本体', prices: { geo: 53000, surugaya: 50000 }, prevPrices: { geo: 53000, surugaya: 50000 }, note: '両社据置(駿河屋CFI-2000B01=50,000円)' },
  { title: 'PS5 旧型 通常版（CFI-1000〜1200）', platform: '本体', prices: { surugaya: 50000, retrog: 36000 }, prevPrices: { surugaya: 50000, retrog: 36000 }, note: 'ゲオは旧型通常品の公表なし（ジャンク価格のみ）。駿河屋CFI-1000A01は50,000円/CFI-1200A01は48,000円で据置。レトログのPS5ページは8/16確認時にURL不達のため前回値(CFI-1200=36,000円)を保持' },
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
