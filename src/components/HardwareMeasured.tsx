import { hwPrices, HW_CHECKED } from '@/data/hardware-prices';

// ハード別ページ共通の実測価格表（2026-11-24）。data/hardware-prices.ts の公式掲載価格だけを表示する。
const STORES = ['駿河屋', 'ブックオフ', 'ゲオ'] as const;
const yen = (n: number) => `${n.toLocaleString('ja-JP')}円`;

export default function HardwareMeasured({ family, label }: { family: string; label: string }) {
  const rows = hwPrices.filter((r) => r.family === family);
  return (
    <section className="mb-12">
      <h2 className="section-heading mb-6"><span className="section-heading-bar" />{label}の買取価格（{HW_CHECKED} 各社公式ページで実測）</h2>
      <p className="text-sm mb-4" style={{ color: 'var(--color-text-light)' }}>
        当サイトでは、駿河屋・ブックオフ・ゲオの公式買取ページで、{label}の買取価格を{HW_CHECKED}に1機種ずつ検索し、掲載されていた金額をそのまま載せています。掲載がない、または金額が表示されていない店は「—」としています。
      </p>
      <div className="overflow-x-auto">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>機種</th>
              {STORES.map((s) => <th key={s}>{s}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.model}>
                <td className="font-bold text-sm">{r.model}</td>
                {STORES.map((s) => {
                  const c = r.cells[s];
                  return (
                    <td key={s} className="text-sm">
                      {c && c.price != null ? (
                        <>
                          <a href={c.url ?? undefined} target="_blank" rel="noopener nofollow" className="font-bold underline">{yen(c.price)}</a>
                          <br />
                          <span className="text-xs" style={{ color: 'var(--color-text-light)' }}>{c.listing}</span>
                        </>
                      ) : (
                        <span style={{ color: 'var(--color-text-light)' }}>—{c?.note ? `（${c.note}）` : ''}</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="text-xs mt-3 space-y-1" style={{ color: 'var(--color-text-light)' }}>
        <li>・駿河屋：買取検索の通常買取価格です。箱・説明書・付属品がそろっている前提で、必要な付属品が欠けると大きく減額されます（駿河屋「減額基準リスト」）。</li>
        <li>・ブックオフ：宅配買取（sell.bookoff.co.jp）の参考買取価格（箱・説明書あり）です。店舗での買取価格とは異なると明記されています。</li>
        <li>・ゲオ：宅配買取（buy.geo-online.co.jp）に表示される「最高価格」で、状態が最も良い場合の上限です。</li>
        <li>・3社で基準が違うため、金額だけで単純に比べることはできません。色・型番・同梱版で価格が変わるため、表の下段に検索で使った商品名を記載しています。価格は日々変わるため、売る前に各社のページでご確認ください。</li>
      </ul>
    </section>
  );
}
