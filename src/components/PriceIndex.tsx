import {
  crossStorePrices,
  priceDiffRanking,
  getPricesByKeyword,
  analyzeTitle,
  STORE_LABELS,
  PRICE_SURVEY_DATE,
  PRICE_PREV_SURVEY_DATE,
  type StoreKey,
  type TitlePrice,
} from '@/data/prices';

const STORE_ORDER: StoreKey[] = ['bookoff', 'geo', 'surugaya', 'retrog'];

function fmt(v?: number) {
  return typeof v === 'number' ? `${v.toLocaleString()}円` : '—';
}

// 店舗横断 価格マトリクス（タイトル×店舗）。最高値セルを強調。
export function PriceMatrix({ list = crossStorePrices, stores }: { list?: TitlePrice[]; stores?: StoreKey[] }) {
  const cols = (stores ?? STORE_ORDER).filter((s) => list.some((t) => typeof t.prices[s] === 'number'));
  return (
    <div className="overflow-x-auto">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>タイトル</th>
            {cols.map((s) => <th key={s}>{STORE_LABELS[s]}</th>)}
            <th>最高値の店</th>
          </tr>
        </thead>
        <tbody>
          {list.map((t) => {
            const a = analyzeTitle(t);
            return (
              <tr key={t.title}>
                <td className="font-bold text-sm">{t.title}<span className="block text-xs font-normal" style={{ color: 'var(--color-text-light)' }}>{t.platform}</span></td>
                {cols.map((s) => {
                  const isBest = a && a.best.store === s && typeof t.prices[s] === 'number';
                  return (
                    <td key={s} className="text-sm" style={isBest ? { color: 'var(--color-electric-green)', fontWeight: 700 } : undefined}>
                      {fmt(t.prices[s])}{isBest ? ' ◎' : ''}
                    </td>
                  );
                })}
                <td className="text-sm font-bold">{a ? `${STORE_LABELS[a.best.store]}（差+${a.gap.toLocaleString()}円）` : '—'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// 柱1: どこで売るかで一番差がつくランキング（価格差の大きい順）
export function PriceDiffRanking({ limit = 10 }: { limit?: number }) {
  const ranking = priceDiffRanking().slice(0, limit);
  return (
    <div className="overflow-x-auto">
      <table className="comparison-table">
        <thead>
          <tr><th>#</th><th>タイトル</th><th>最高値の店</th><th>最安との差</th></tr>
        </thead>
        <tbody>
          {ranking.map((r, i) => (
            <tr key={r.title}>
              <td className="font-bold text-sm">{i + 1}</td>
              <td className="font-bold text-sm">{r.title}</td>
              <td className="text-sm font-bold" style={{ color: 'var(--color-electric-green)' }}>{STORE_LABELS[r.best.store]} {r.best.price.toLocaleString()}円</td>
              <td className="text-sm font-bold">+{r.gap.toLocaleString()}円</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// シリーズページ等への動的挿入用（キーワードで該当タイトルの店舗横断価格を表示）
export function SeriesPriceTable({ keyword, heading }: { keyword: string; heading?: string }) {
  const rows = getPricesByKeyword(keyword);
  if (rows.length === 0) return null;
  return (
    <section className="mb-12">
      <h2 className="section-heading mb-6"><span className="section-heading-bar" />{heading ?? `${keyword}の店舗別 買取価格【${PRICE_SURVEY_DATE.slice(0, 7).replace('-', '年')}月最新】`}</h2>
      <PriceMatrix list={rows} />
      <PriceFreshnessNote />
    </section>
  );
}

// 鮮度・出典の共通注記
export function PriceFreshnessNote() {
  return (
    <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
      出典：ブックオフ「ゲームの高価買取情報」（店頭参考価格）、ゲオ・駿河屋の各公式買取ページ（宅配/通信買取の参考価格）。<strong>最終調査日: {PRICE_SURVEY_DATE}</strong>（毎週更新）。{PRICE_PREV_SURVEY_DATE ? `前回調査日: ${PRICE_PREV_SURVEY_DATE}。` : ''}完品想定の参考価格で、店舗・在庫・状態・キャンペーンにより変動します。実際の査定額は売却直前に各社公式でご確認ください。
    </p>
  );
}


// 「今週の最高値」直答バナー(キーワード一致の最上位行から自動生成・週次更新に連動)
export function TodayBestBanner({ keyword, label }: { keyword: string; label?: string }) {
  const rows = getPricesByKeyword(keyword);
  const best = rows
    .map((r) => analyzeTitle(r))
    .filter((x): x is NonNullable<ReturnType<typeof analyzeTitle>> => x !== null)
    .sort((a, b) => b.best.price - a.best.price)[0];
  if (!best) return null;
  return (
    <div className="glass-card p-4 mb-8 flex flex-wrap items-center gap-3 border-l-4" style={{ borderLeftColor: 'var(--color-electric-green)' }}>
      <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: 'rgba(16,185,129,0.12)', color: '#047857' }}>今週の最高値({PRICE_SURVEY_DATE})</span>
      <span className="text-sm font-bold" style={{ color: 'var(--color-deep-blue)' }}>{label ?? keyword}: {best.title}</span>
      <span className="text-lg font-extrabold" style={{ color: 'var(--color-electric-green)' }}>{best.best.price.toLocaleString()}円</span>
      <span className="text-xs" style={{ color: 'var(--color-text-light)' }}>({STORE_LABELS[best.best.store]}・毎週実測で自動更新)</span>
    </div>
  );
}
