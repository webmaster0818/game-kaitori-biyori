import fs from "node:fs";
import path from "node:path";

// 週次実測CSV(data/price-history.csv)からタイトル別の最高買取値スパークラインを生成(ビルド時)
type Row = { date: string; title: string; store: string; price: number };

function loadHistory(): Row[] {
  const csv = fs.readFileSync(path.join(process.cwd(), "data", "price-history.csv"), "utf-8");
  return csv
    .trim()
    .split("\n")
    .slice(1)
    .map((l) => {
      const [date, title, , store, price] = l.split(",");
      return { date, title, store, price: Number(price) };
    })
    .filter((r) => r.title && !Number.isNaN(r.price));
}

function Sparkline({ points, w = 220, h = 56 }: { points: number[]; w?: number; h?: number }) {
  const min = Math.min(...points);
  const max = Math.max(...points);
  const span = max - min || 1;
  const pad = 6;
  const step = points.length > 1 ? (w - pad * 2) / (points.length - 1) : 0;
  const xy = points.map((p, i) => [pad + i * step, h - pad - ((p - min) / span) * (h - pad * 2)]);
  const d = xy.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const up = points[points.length - 1] > points[0];
  const flat = points[points.length - 1] === points[0];
  const color = flat ? "#64748b" : up ? "#16a34a" : "#dc2626";
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-14" role="img" aria-label="価格推移グラフ">
      <path d={d} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {xy.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill={color} />
      ))}
    </svg>
  );
}

export default function PriceTrendChart() {
  const rows = loadHistory();
  const dates = [...new Set(rows.map((r) => r.date))].sort();
  const titles = [...new Set(rows.map((r) => r.title))];
  const series = titles
    .map((t) => {
      const best = dates.map((d) => {
        const day = rows.filter((r) => r.title === t && r.date === d);
        return day.length ? Math.max(...day.map((r) => r.price)) : null;
      });
      const pts = best.filter((v): v is number => v !== null);
      if (pts.length < 2) return null;
      const diff = pts[pts.length - 1] - pts[0];
      return { title: t, pts, diff, latest: pts[pts.length - 1] };
    })
    .filter(Boolean) as { title: string; pts: number[]; diff: number; latest: number }[];
  series.sort((a, b) => Math.abs(b.diff) - Math.abs(a.diff));
  const fmtDate = (d: string) => d.slice(5).replace("-", "/");

  return (
    <div>
      <p className="text-sm text-gray-600 mb-4">
        当サイトが毎週実測している最高買取値（全店舗中の最高額）の推移です。計測日: {dates.map(fmtDate).join(" → ")}（データ点は毎週の実測ごとに増えます）。
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {series.map((s) => (
          <div key={s.title} className="bg-white rounded-xl border border-gray-200 p-4">
            <p className="font-bold text-sm text-gray-800 mb-1 truncate" title={s.title}>{s.title}</p>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-lg font-extrabold text-gray-900">{s.latest.toLocaleString()}円</span>
              <span className={`text-xs font-bold ${s.diff > 0 ? "text-green-600" : s.diff < 0 ? "text-red-600" : "text-slate-500"}`}>
                {s.diff > 0 ? `+${s.diff.toLocaleString()}円` : s.diff < 0 ? `${s.diff.toLocaleString()}円` : "±0円"}
              </span>
            </div>
            <Sparkline points={s.pts} />
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-3">※各社公式の買取価格ページを当サイトが実測した値（最高値ベース・税込）。実際の査定額は商品状態・付属品により変動します。</p>
    </div>
  );
}
