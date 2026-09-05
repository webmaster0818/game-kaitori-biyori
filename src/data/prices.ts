// ============================================================
// 買取価格 一元管理データ（全ページで動的に参照する単一の真実）
// 週次運用: 毎週この crossStorePrices を最新の公式買取価格で更新する。
//   - 全て各社公式買取ページで確認した実価格（創作禁止・確認できない店は null）
//   - 価格は完品（箱・説明書あり）想定の参考買取価格。店舗/在庫/状態で変動。
//   - ブックオフ=高価買取情報ページの店頭参考価格 / ゲオ・駿河屋=宅配(通信)買取の参考価格
// ============================================================

export const PRICE_SURVEY_DATE = '2026-09-05'; // 最終調査日
export const PRICE_PREV_SURVEY_DATE: string | null = '2026-08-29'; // 前回調査日（2回目以降に設定→先週比が有効化）

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

// 2026-09-05 各社公式買取ページで確認（店舗横断マトリクス）
// prices=2026-09-05調査値 / prevPrices=2026-08-29調査値（先週比用）
// bookoff=高価買取情報ページ(2026-09-03最終更新表記・URLがselllist/game/index.htmlに変更) / geo=「高価買取品」リスト掲載分のみ(掲載落ちは省略・更新日表記なし)。
// ★駿河屋(surugaya)はブラウザUA付きcurlで公式買取検索(kaitori/search_buy)を全件実測（国内通常版・完品基準・型番照合）。
// ★レトログ(retrog)はページのJS化継続で機種別価格の取得不能(トップの実績例のみ)。前回値(7/23更新表記)を保持。
export const crossStorePrices: TitlePrice[] = [
  { title: 'スーパーマリオ 3Dコレクション', platform: 'Switch', prices: { bookoff: 3300 }, prevPrices: { bookoff: 3500, surugaya: 1300 }, note: 'ブックオフ3,500→3,300円に軟化。駿河屋は今回「メールにてお見積」表示となり公表価格なし(HAC-P-AVP3A)。ゲオは高価買取リスト掲載なし継続' },
  { title: 'ファイアーエムブレム 風花雪月', platform: 'Switch', prices: { geo: 5000, surugaya: 4200 }, prevPrices: { geo: 5000, surugaya: 4200 }, note: 'ゲオ5,000円・駿河屋4,200円とも据置。Fodlan Collectionは駿河屋13,000→15,000円に増額(今週の上げ筆頭)。ブックオフの掲載落ちは継続' },
  { title: 'スーパーマリオパーティ ジャンボリー', platform: 'Switch', prices: { bookoff: 3000, geo: 3500, surugaya: 2700 }, prevPrices: { bookoff: 3200, geo: 3500, surugaya: 2700 }, note: 'ブックオフ3,200→3,000円に軟化。Switch 2 Edition+ジャンボリーTVはブ4,500円/ゲオ4,500円据置・駿河屋4,600円' },
  { title: '大乱闘スマッシュブラザーズ SPECIAL', platform: 'Switch', prices: { bookoff: 3300, geo: 4000, surugaya: 3300 }, prevPrices: { bookoff: 3300, geo: 4000, surugaya: 3300 }, note: '3社据置。ゲオ4,000円が最高値' },
  { title: 'スプラトゥーン3', platform: 'Switch', prices: { bookoff: 3000, geo: 3000, surugaya: 2900 }, prevPrices: { bookoff: 3000, geo: 3000, surugaya: 2900 }, note: '3社据置。エキスパンション・パス版は駿河屋5,300円据置' },
  { title: 'ゼルダの伝説 ティアーズ オブ ザ キングダム（通常版）', platform: 'Switch', prices: { bookoff: 2500, geo: 3000, surugaya: 2800 }, prevPrices: { bookoff: 2700, geo: 3000, surugaya: 2800 }, note: 'ブックオフ2,700→2,500円に軟化。Switch 2 Editionはゲオ4,500円/駿河屋4,500円で据置' },
  { title: 'あつまれ どうぶつの森', platform: 'Switch', prices: { bookoff: 1700, surugaya: 2200 }, prevPrices: { bookoff: 2200, surugaya: 2200 }, note: 'ブックオフ2,200→1,700円に大幅軟化(今週最大の下げ)。駿河屋2,200円据置で最高値に。ゲオの掲載落ち継続。Switch 2 Editionはブ2,500円/ゲオ3,000円/駿2,700円' },
  { title: 'マリオカート ワールド', platform: 'Switch2', prices: { bookoff: 5000, geo: 5000, surugaya: 5300 }, prevPrices: { bookoff: 5500, geo: 5000, surugaya: 5300 }, note: 'ブックオフ5,500→5,000円に軟化し3社が5,000〜5,300円に収斂。駿河屋5,300円が最高値に' },
  { title: 'マリオカート8 デラックス', platform: 'Switch', prices: { bookoff: 2000, surugaya: 1900 }, prevPrices: { bookoff: 2000, surugaya: 1900 }, note: '両社据置。ゲオの掲載なし継続。+コース追加パス版は駿河屋6,500円据置' },
  { title: 'ポケットモンスター スカーレット', platform: 'Switch', prices: { bookoff: 1500, surugaya: 1800 }, prevPrices: { bookoff: 1500, surugaya: 1800 }, note: '両社据置。駿河屋1,800円が最高値。+ゼロの秘宝は駿河屋6,000円' },
  { title: 'ポケットモンスター バイオレット', platform: 'Switch', prices: { bookoff: 1000, surugaya: 1700 }, prevPrices: { bookoff: 1200, surugaya: 1700 }, note: 'ブックオフ1,200→1,000円に軟化。駿河屋1,700円据置。+ゼロの秘宝は駿河屋5,500円' },
];


// ---- ゲーム機本体の週次実測（2026-07-04調査開始・v5 S1） ----
// 2026-09-05実測: ブックオフ=高価買取リスト(9/3更新表記・Switch 2本体のみ掲載) / ゲオ=本体・周辺機器の高価買取品(店頭参考) / 駿河屋=公式買取検索(ブラウザUA付きcurl・型番照合で全件実測) / レトログ=JS化継続で取得不能・前回値(7/23更新表記)を保持
export const HARDWARE_SURVEY_DATE = '2026-09-05';
export const hardwarePrices: TitlePrice[] = [
  { title: 'Nintendo Switch 2 本体', platform: '本体', prices: { bookoff: 34000, geo: 35000, surugaya: 36000 }, prevPrices: { bookoff: 35000, geo: 35000, surugaya: 39000 }, note: '駿河屋39,000→36,000円(-3,000円=今週最大の下げ)・ブックオフ35,000→34,000円と軟化基調。それでも駿河屋36,000円が最高値。多言語版はゲオ55,000円/駿河屋60,000円・ソフト同梱セットは駿河屋36,000〜37,000円' },
  { title: 'Switch 有機ELモデル（ホワイト/ネオン）', platform: '本体', prices: { geo: 25000, surugaya: 18000, retrog: 6900 }, prevPrices: { geo: 25000, surugaya: 20000, retrog: 6900 }, note: 'ゲオ25,000円据置(白・ネオンとも)。駿河屋はホワイト20,000→18,000円に軟化しネオンと同額に。カービィ同梱28,000円等の限定版は別建て。レトログは取得不能で前回値保持' },
  { title: 'Nintendo Switch（旧型・ネオン 現行パッケージ）', platform: '本体', prices: { geo: 17000, surugaya: 12000, retrog: 5000 }, prevPrices: { geo: 17000, surugaya: 12000, retrog: 5000 }, note: 'ゲオ17,000円・駿河屋12,000円(HAD-S-KABAH)とも据置。レトログは取得不能で前回値保持' },
  { title: 'Nintendo Switch Lite', platform: '本体', prices: { geo: 15000, surugaya: 13000, retrog: 3200 }, prevPrices: { geo: 15000, surugaya: 15000, retrog: 3200 }, note: 'ゲオ各色15,000円据置。駿河屋は今回実測でグレー13,000円・ブルー/コーラル/ターコイズ/イエロー11,000円と確認(前回の15,000円保持値から更新)。ハイラルエディション18,000円等の限定版は別建て。レトログは取得不能で前回値保持' },
  { title: 'PS5 Slim 通常版（CFI-2000）', platform: '本体', prices: { geo: 60000, surugaya: 60000 }, prevPrices: { geo: 60000, surugaya: 60000 }, note: '両社60,000円で据置(駿河屋CFI-2000A01)。PS5 Pro CFI-7100はゲオ115,000円据置' },
  { title: 'PS5 Slim デジタル・エディション（CFI-2000B）', platform: '本体', prices: { geo: 53000, surugaya: 52000 }, prevPrices: { geo: 53000, surugaya: 52000 }, note: '両社据置。新型番CFI-2200B01(日本語専用)はゲオ36,000円で別建て掲載' },
  { title: 'PS5 旧型 通常版（CFI-1000〜1200）', platform: '本体', prices: { surugaya: 50000, retrog: 36000 }, prevPrices: { surugaya: 50000, retrog: 36000 }, note: 'ゲオは旧型通常品の公表なし。駿河屋CFI-1000A01は50,000円据置(デジタルB01は40,000円)。レトログは取得不能で前回値保持' },
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
