'use client';

import { useState } from 'react';

// メルカリの送料(円)。2026年6月時点の主要な配送方法。
const SHIPPING = [
  { key: 'nekopos', label: 'ネコポス（ソフト1本など）', fee: 210 },
  { key: 'compact', label: '宅急便コンパクト（薄型・小型）', fee: 450 },
  { key: 's60', label: '宅急便60サイズ（本体1台など）', fee: 750 },
  { key: 's80', label: '宅急便80サイズ（大きめ）', fee: 850 },
  { key: 's100', label: '宅急便100サイズ（複数まとめ）', fee: 1050 },
];

const MERCARI_FEE_RATE = 0.10; // 販売手数料10%
const MERCARI_TRANSFER = 200; // 振込手数料（売上金の現金化ごと）

function yen(n: number) {
  return `${Math.round(n).toLocaleString()}円`;
}

export default function TakehomeSimulator() {
  const [mercariPrice, setMercariPrice] = useState(10000); // メルカリ想定売値（合計）
  const [shippingKey, setShippingKey] = useState('s60');
  const [kaitori, setKaitori] = useState(8500); // 買取査定額（合計）

  const ship = SHIPPING.find((s) => s.key === shippingKey) ?? SHIPPING[0];
  const fee = mercariPrice * MERCARI_FEE_RATE;
  const mercariNet = Math.max(0, mercariPrice - fee - ship.fee - MERCARI_TRANSFER);
  const kaitoriNet = Math.max(0, kaitori); // 買取は手数料・送料無料が多く査定額がそのまま手取り
  const diff = mercariNet - kaitoriNet;
  const winner = diff > 0 ? 'mercari' : diff < 0 ? 'kaitori' : 'tie';

  return (
    <div className="glass-card p-5 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
        <label className="block">
          <span className="text-sm font-bold" style={{ color: 'var(--color-deep-blue)' }}>メルカリで売れそうな価格（合計）</span>
          <input type="number" min={0} step={100} value={mercariPrice}
            onChange={(e) => setMercariPrice(Number(e.target.value) || 0)}
            className="mt-1 w-full border rounded-lg px-3 py-2 text-sm" style={{ borderColor: 'var(--color-line, #ccc)' }} />
        </label>
        <label className="block">
          <span className="text-sm font-bold" style={{ color: 'var(--color-deep-blue)' }}>配送方法（メルカリ）</span>
          <select value={shippingKey} onChange={(e) => setShippingKey(e.target.value)}
            className="mt-1 w-full border rounded-lg px-3 py-2 text-sm" style={{ borderColor: 'var(--color-line, #ccc)' }}>
            {SHIPPING.map((s) => <option key={s.key} value={s.key}>{s.label}（{s.fee}円）</option>)}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-bold" style={{ color: 'var(--color-deep-blue)' }}>買取業者の査定額（合計）</span>
          <input type="number" min={0} step={100} value={kaitori}
            onChange={(e) => setKaitori(Number(e.target.value) || 0)}
            className="mt-1 w-full border rounded-lg px-3 py-2 text-sm" style={{ borderColor: 'var(--color-line, #ccc)' }} />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
          <h4 className="font-bold text-sm mb-3" style={{ color: '#60A5FA' }}>メルカリの実質手取り</h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between"><span>売値</span><span>{yen(mercariPrice)}</span></div>
            <div className="flex justify-between"><span>販売手数料(10%)</span><span style={{ color: '#F87171' }}>-{yen(fee)}</span></div>
            <div className="flex justify-between"><span>送料</span><span style={{ color: '#F87171' }}>-{yen(ship.fee)}</span></div>
            <div className="flex justify-between"><span>振込手数料</span><span style={{ color: '#F87171' }}>-{yen(MERCARI_TRANSFER)}</span></div>
            <div className="flex justify-between font-bold border-t mt-2 pt-2"><span>手取り</span><span style={{ color: '#60A5FA' }}>{yen(mercariNet)}</span></div>
          </div>
        </div>
        <div className="p-4 rounded-lg" style={{ background: 'var(--color-bg-alt)' }}>
          <h4 className="font-bold text-sm mb-3" style={{ color: 'var(--color-electric-green)' }}>買取業者の実質手取り</h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between"><span>査定額</span><span>{yen(kaitori)}</span></div>
            <div className="flex justify-between"><span>手数料・送料</span><span style={{ color: 'var(--color-electric-green)' }}>0円（無料が多い）</span></div>
            <div className="flex justify-between font-bold border-t mt-2 pt-2"><span>手取り</span><span style={{ color: 'var(--color-electric-green)' }}>{yen(kaitoriNet)}</span></div>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-lg text-center" style={{ background: 'rgba(0,230,118,0.08)' }}>
        {winner === 'tie' ? (
          <p className="font-bold" style={{ color: 'var(--color-deep-blue)' }}>手取りはほぼ同額です。手間・トラブルリスクを考えると買取業者が無難です。</p>
        ) : winner === 'mercari' ? (
          <p className="font-bold" style={{ color: '#2563EB' }}>この条件では <span style={{ fontSize: '1.1em' }}>メルカリが +{yen(Math.abs(diff))}</span> 手取りが多い。<span className="font-normal text-sm">（ただし出品・梱包・発送・トラブル対応の手間はかかります）</span></p>
        ) : (
          <p className="font-bold" style={{ color: 'var(--color-electric-green)' }}>この条件では <span style={{ fontSize: '1.1em' }}>買取業者が +{yen(Math.abs(diff))}</span> 手取りが多い。<span className="font-normal text-sm">（手数料・送料無料＋手間いらず）</span></p>
        )}
      </div>
      <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
        ※メルカリの手数料は販売価格の10%、振込手数料200円、送料は配送方法別（2026年6月時点のメルカリ公式料金）で計算。買取は手数料・送料無料の業者を想定（駿河屋の銀行振込880円など一部例外あり）。査定額は <a href="/price-index/" style={{ color: 'var(--color-electric-green)' }}>買取価格インデックス</a> で各ソフトの最高値店を確認して入力すると精度が上がります。
      </p>
    </div>
  );
}
