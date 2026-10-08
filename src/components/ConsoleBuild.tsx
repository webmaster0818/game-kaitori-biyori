'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

/*
 * スクロールに連動して Switch / PS5 / DualSense の線画が描かれ、組み上がっていくセクション。
 * （2026-10-08 新設 → 同日、描き込みを細かくして作り直し）
 *
 * 10/7の事故（出現アニメで本文が透明のまま残った）の反省から、作りを逆にしてある。
 *  - 既定は「描き終わった状態」。JSが動いたときだけ線を消して描き直す
 *    => JSが落ちても線画は必ず見える
 *  - IntersectionObserverを使わず、スクロール位置から直接進捗を出す
 *    => 速くスクロールしても取りこぼしが原理的に起きない
 *  - requestAnimationFrameを挟まず同期で反映（rAFが間引かれる環境でも止まらない）
 *  - prefers-reduced-motion: reduce は静止した完成形のみ
 */

// ---------- 形を作る小道具 ----------
const circle = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${r * 2} 0 a ${r} ${r} 0 1 0 ${-r * 2} 0`;

const rect = (x: number, y: number, w: number, h: number, r = 0) =>
  r <= 0
    ? `M ${x} ${y} H ${x + w} V ${y + h} H ${x} Z`
    : `M ${x + r} ${y} H ${x + w - r} A ${r} ${r} 0 0 1 ${x + w} ${y + r} V ${y + h - r} A ${r} ${r} 0 0 1 ${x + w - r} ${y + h} H ${x + r} A ${r} ${r} 0 0 1 ${x} ${y + h - r} V ${y + r} A ${r} ${r} 0 0 1 ${x + r} ${y} Z`;

/** スティックの縁の刻み */
const ticks = (cx: number, cy: number, r1: number, r2: number, n: number) => {
  let d = '';
  for (let i = 0; i < n; i++) {
    const a = (Math.PI * 2 * i) / n;
    d += `M ${(cx + Math.cos(a) * r1).toFixed(1)} ${(cy + Math.sin(a) * r1).toFixed(1)} L ${(cx + Math.cos(a) * r2).toFixed(1)} ${(cy + Math.sin(a) * r2).toFixed(1)} `;
  }
  return d.trim();
};

/** 等間隔の縦線（放熱口・スピーカー） */
const slats = (x: number, y: number, h: number, count: number, gap: number) => {
  let d = '';
  for (let i = 0; i < count; i++) d += `M ${x + i * gap} ${y} V ${y + h} `;
  return d.trim();
};

const dots = (x: number, y: number, count: number, gap: number, r: number) => {
  let d = '';
  for (let i = 0; i < count; i++) d += circle(x + i * gap, y, r) + ' ';
  return d.trim();
};

/** 3次ベジェ上の点 */
const bez = (
  p0: [number, number], p1: [number, number], p2: [number, number], p3: [number, number], t: number
): [number, number] => {
  const u = 1 - t;
  const a = u * u * u, b = 3 * u * u * t, c = 3 * u * t * t, d = t * t * t;
  return [
    a * p0[0] + b * p1[0] + c * p2[0] + d * p3[0],
    a * p0[1] + b * p1[1] + c * p2[1] + d * p3[1],
  ];
};

/** 2本のベジェの間を細い線で埋める（パネルの厚み・陰影に使う） */
const hatchBetween = (
  outer: [[number, number], [number, number], [number, number], [number, number]],
  inner: [[number, number], [number, number], [number, number], [number, number]],
  n: number, from = 0.06, to = 0.94
) => {
  let d = '';
  for (let i = 0; i < n; i++) {
    const t = from + ((to - from) * i) / (n - 1);
    const [ax, ay] = bez(outer[0], outer[1], outer[2], outer[3], t);
    const [bx, by] = bez(inner[0], inner[1], inner[2], inner[3], t);
    d += `M ${ax.toFixed(1)} ${ay.toFixed(1)} L ${bx.toFixed(1)} ${by.toFixed(1)} `;
  }
  return d.trim();
};

/** 斜めの細線で面を埋める（画面の映り込み） */
const hatchDiagonal = (x: number, y: number, w: number, h: number, n: number, dx: number) => {
  let d = '';
  for (let i = 0; i < n; i++) {
    const x0 = x + (w * i) / n;
    d += `M ${x0.toFixed(1)} ${(y + h).toFixed(1)} L ${(x0 + dx).toFixed(1)} ${y.toFixed(1)} `;
  }
  return d.trim();
};

type Step = { d: string; w?: number };

// ============ Nintendo Switch（ローカル 0..260 × 0..240）============
const SWITCH: Step[][] = [
  // 1. 本体の外形
  [{ d: rect(62, 10, 136, 210), w: 2.2 }],
  // 2. Joy-Con 左右
  [{ d: rect(0, 10, 62, 210, 30), w: 2.2 }],
  [{ d: rect(198, 10, 62, 210, 30), w: 2.2 }],
  // 3. 画面
  [
    { d: rect(72, 22, 116, 186, 3), w: 1.5 },
    { d: rect(78, 28, 104, 174, 2), w: 1.1 },
  ],
  // 4. 画面の映り込み
  [{ d: hatchDiagonal(86, 34, 22, 162, 7, 36), w: 0.4 }],
  // 5. 左スティックと十字ボタン
  [
    { d: circle(31, 52, 14), w: 1.4 },
    { d: circle(31, 52, 8.5), w: 1 },
    { d: ticks(31, 52, 14, 16.5, 12), w: 0.7 },
  ],
  [
    { d: circle(31, 126, 6) },
    { d: circle(31, 126, 1.6), w: 0.8 },
    { d: circle(17, 140, 6) },
    { d: circle(17, 140, 1.6), w: 0.8 },
    { d: circle(45, 140, 6) },
    { d: circle(45, 140, 1.6), w: 0.8 },
    { d: circle(31, 154, 6) },
    { d: circle(31, 154, 1.6), w: 0.8 },
  ],
  // 6. 右の4ボタンとスティック
  [
    { d: circle(229, 40, 6.5) },
    { d: circle(229, 40, 1.8), w: 0.8 },
    { d: circle(215, 54, 6.5) },
    { d: circle(215, 54, 1.8), w: 0.8 },
    { d: circle(243, 54, 6.5) },
    { d: circle(243, 54, 1.8), w: 0.8 },
    { d: circle(229, 68, 6.5) },
    { d: circle(229, 68, 1.8), w: 0.8 },
  ],
  [
    { d: circle(229, 142, 14), w: 1.4 },
    { d: circle(229, 142, 8.5), w: 1 },
    { d: ticks(229, 142, 14, 16.5, 12), w: 0.7 },
  ],
  // 7. ＋/−・ホーム・キャプチャ
  [
    { d: 'M 24 30 H 38' },
    { d: 'M 229 24 V 36 M 223 30 H 235' },
    { d: circle(229, 168, 5) },
    { d: circle(229, 168, 2), w: 0.8 },
    { d: rect(26, 163, 10, 10, 2) },
    { d: circle(31, 168, 2.5), w: 0.8 },
  ],
  // 8. L / ZL / R / ZR
  [
    { d: rect(4, -4, 54, 12, 6), w: 1.3 },
    { d: rect(7, -13, 48, 10, 5), w: 1.1 },
    { d: rect(202, -4, 54, 12, 6), w: 1.3 },
    { d: rect(205, -13, 48, 10, 5), w: 1.1 },
  ],
  // 9. レール止め・カードスロット・排気・端子
  [
    { d: rect(55, 198, 9, 14, 2), w: 1 },
    { d: rect(196, 198, 9, 14, 2), w: 1 },
    { d: rect(168, 4, 26, 5, 2.5), w: 1 },
    { d: rect(102, 4, 42, 5, 2.5), w: 1 },
    { d: slats(107, 5, 3, 7, 5), w: 0.6 },
    { d: circle(92, 6.5, 3), w: 1 },
    { d: rect(120, 215, 20, 5, 2.5), w: 1 },
  ],
  // 10. スピーカー
  [
    { d: dots(84, 212, 5, 6, 1.3), w: 0.7 },
    { d: dots(152, 212, 5, 6, 1.3), w: 0.7 },
  ],
];

// ============ PlayStation 5（ローカル 0..170 × 0..310）============
const PS5: Step[][] = [
  // 1. 中央の本体
  [{ d: rect(50, 14, 70, 284), w: 2.2 }],
  // 2. 左パネル（外縁→内縁）
  [
    { d: 'M 24 10 C 44 70, 44 240, 24 302', w: 2.2 },
    { d: 'M 33 15 C 51 72, 51 238, 33 297', w: 1.1 },
  ],
  // 3. 右パネル
  [
    { d: 'M 146 10 C 126 70, 126 240, 146 302', w: 2.2 },
    { d: 'M 137 15 C 119 72, 119 238, 137 297', w: 1.1 },
  ],
  // 4. パネルと本体のつなぎ
  [
    { d: 'M 24 10 L 50 16 M 146 10 L 120 16 M 24 302 L 50 296 M 146 302 L 120 296', w: 1.1 },
  ],
  // 5. 中央の分割線と光
  [
    { d: 'M 50 148 H 120', w: 1.2 },
    { d: 'M 54 153 H 116 M 54 158 H 116', w: 0.8 },
  ],
  // 6. ディスクスロット
  [
    { d: 'M 58 50 H 94', w: 0.9 },
    { d: rect(58, 56, 36, 4, 2), w: 1 },
  ],
  // 7. 放熱口
  [{ d: slats(56, 196, 50, 15, 4.4), w: 0.6 }],
  // 8. 電源・イジェクト・端子
  [
    { d: circle(60, 272, 4) },
    { d: circle(60, 272, 1.4), w: 0.7 },
    { d: circle(72, 272, 4) },
    { d: 'M 69.5 272 H 74.5', w: 0.7 },
    { d: rect(90, 268, 15, 7, 1.5) },
    { d: circle(114, 271.5, 3) },
  ],
  // 9. スタンド
  [
    { d: 'M 18 306 Q 85 320 152 306', w: 2.2 },
    { d: 'M 18 306 H 152', w: 1.1 },
  ],
  // 10. パネルの厚み（外縁と内縁の間を細線で埋める）
  [
    {
      d: hatchBetween(
        [[24, 10], [44, 70], [44, 240], [24, 302]],
        [[33, 15], [51, 72], [51, 238], [33, 297]],
        30
      ),
      w: 0.4,
    },
    {
      d: hatchBetween(
        [[146, 10], [126, 70], [126, 240], [146, 302]],
        [[137, 15], [119, 72], [119, 238], [137, 297]],
        30
      ),
      w: 0.4,
    },
  ],
];

// ============ DualSense（ローカル 0..200 × 0..150）============
const PAD: Step[][] = [
  // 1. 外形
  [
    {
      d:
        'M 44 8 C 26 8 16 24 12 42 C 4 76 4 110 16 126 C 28 140 46 132 54 116 ' +
        'L 146 116 C 154 132 172 140 184 126 C 196 110 196 76 188 42 C 184 24 174 8 156 8 Z',
      w: 2.2,
    },
  ],
  // 2. 肩ボタン
  [
    { d: rect(26, 0, 40, 10, 5), w: 1.3 },
    { d: rect(134, 0, 40, 10, 5), w: 1.3 },
  ],
  // 3. タッチパッドとライトバー
  [
    { d: rect(62, 18, 76, 32, 4), w: 1.3 },
    { d: 'M 100 18 V 50', w: 0.7 },
    { d: 'M 60 18 C 52 30, 52 40, 60 50', w: 1 },
    { d: 'M 140 18 C 148 30, 148 40, 140 50', w: 1 },
  ],
  // 4. 十字キー
  [
    { d: 'M 26 46 h 10 v -10 h 10 v 10 h 10 v 10 h -10 v 10 h -10 v -10 h -10 z', w: 1.2 },
  ],
  // 5. △○×□
  [
    { d: circle(164, 36, 7), w: 1.1 },
    { d: 'M 164 32.6 L 167 37.4 L 161 37.4 Z', w: 0.8 },
    { d: circle(152, 48, 7), w: 1.1 },
    { d: rect(149.2, 45.2, 5.6, 5.6), w: 0.8 },
    { d: circle(176, 48, 7), w: 1.1 },
    { d: circle(176, 48, 2.8), w: 0.8 },
    { d: circle(164, 60, 7), w: 1.1 },
    { d: 'M 161.2 57.2 L 166.8 62.8 M 166.8 57.2 L 161.2 62.8', w: 0.8 },
  ],
  // 6. スティック
  [
    { d: circle(56, 76, 14), w: 1.4 },
    { d: circle(56, 76, 9), w: 1 },
    { d: ticks(56, 76, 14, 16.5, 12), w: 0.7 },
    { d: circle(144, 76, 14), w: 1.4 },
    { d: circle(144, 76, 9), w: 1 },
    { d: ticks(144, 76, 14, 16.5, 12), w: 0.7 },
  ],
  // 7. 小物（クリエイト・オプション・PSボタン・スピーカー・端子）
  [
    { d: rect(62, 8, 11, 6, 2), w: 0.9 },
    { d: rect(127, 8, 11, 6, 2), w: 0.9 },
    { d: circle(100, 88, 5) },
    { d: circle(100, 88, 2), w: 0.7 },
    { d: dots(88, 102, 5, 6, 1.3), w: 0.7 },
    { d: rect(93, 118, 14, 4, 2), w: 0.9 },
  ],
  // 8. グリップの陰影（外形に沿った細い線を重ねる）
  [
    {
      d: hatchBetween(
        [[21, 58], [13, 84], [15, 108], [27, 122]],
        [[33, 60], [25, 84], [27, 104], [37, 115]],
        16
      ),
      w: 0.4,
    },
    {
      d: hatchBetween(
        [[179, 58], [187, 84], [185, 108], [173, 122]],
        [[167, 60], [175, 84], [173, 104], [163, 115]],
        16
      ),
      w: 0.4,
    },
  ],
];

/** 各デバイスのステップに、全体の進捗 [from,to] を割り当てて1本ずつのパスに展開する */
function expand(steps: Step[][], from: number, to: number) {
  const span = (to - from) / steps.length;
  const out: { d: string; s: number; e: number; w: number }[] = [];
  steps.forEach((group, gi) => {
    const gs = from + span * gi;
    const sub = span / group.length;
    group.forEach((item, ii) => {
      out.push({ d: item.d, s: gs + sub * ii, e: gs + sub * (ii + 1), w: item.w ?? 1.1 });
    });
  });
  return out;
}

const SWITCH_PARTS = expand(SWITCH, 0.0, 0.42);
const PS5_PARTS = expand(PS5, 0.42, 0.76);
const PAD_PARTS = expand(PAD, 0.76, 1.0);

let key = 0;
const draw = (p: { d: string; s: number; e: number; w: number }) => (
  <path
    key={`p${key++}`}
    d={p.d}
    data-part=""
    data-s={p.s}
    data-e={p.e}
    pathLength={1}
    strokeDasharray={1}
    strokeWidth={p.w}
  />
);

export default function ConsoleBuild() {
  const wrap = useRef<HTMLDivElement>(null);
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const sync = () => setNarrow(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const parts = Array.from(el.querySelectorAll<SVGPathElement>('[data-part]'));
    if (parts.length === 0) return;

    const apply = () => {
      const r = el.getBoundingClientRect();
      // セクションが画面の6割まで入ってきた時点から描き始める
      const lead = window.innerHeight * 0.6;
      const span = r.height - window.innerHeight + lead;
      const p = span <= 0 ? 1 : Math.min(1, Math.max(0, (lead - r.top) / span));
      for (const node of parts) {
        const s = Number(node.dataset.s);
        const e = Number(node.dataset.e);
        const t = Math.min(1, Math.max(0, (p - s) / (e - s || 1)));
        node.style.strokeDashoffset = String(1 - t);
        node.style.opacity = t > 0 ? '1' : '0';
      }
    };

    apply();
    window.addEventListener('scroll', apply, { passive: true });
    window.addEventListener('resize', apply);

    const failsafe = window.setTimeout(apply, 5000);

    return () => {
      window.removeEventListener('scroll', apply);
      window.removeEventListener('resize', apply);
      window.clearTimeout(failsafe);
      for (const node of parts) {
        node.style.strokeDashoffset = '0';
        node.style.opacity = '1';
      }
    };
  }, [narrow]);

  return (
    <section ref={wrap} className="console-build" aria-label="ゲーム機の線画">
      <div className="console-build-stage">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="text-center mb-5 md:mb-8">
            <h2 className="section-heading">
              <span className="section-heading-bar" />使っていないゲーム機は、相場が高いうちに
            </h2>
            <p className="text-sm mt-3" style={{ color: 'var(--color-text-light)' }}>
              買取価格は毎週動きます。当サイトは各社の実測価格を毎週更新しているので、今が高いのかを見てから売れます。
            </p>
          </div>

          <svg
            className="console-build-svg"
            viewBox={narrow ? '0 0 420 700' : '0 0 920 360'}
            role="img"
            aria-label="Nintendo Switch と PlayStation 5、DualSense コントローラーの線画"
          >
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              {/* スマホでは横1列だと小さすぎるので、Switchを上・PS5とコントローラーを下に組み替える */}
              <g transform={narrow ? 'translate(78,30) scale(1.02)' : 'translate(20,62)'}>
                {SWITCH_PARTS.map(draw)}
              </g>
              <g transform={narrow ? 'translate(30,300) scale(1.08)' : 'translate(380,22)'}>
                {PS5_PARTS.map(draw)}
              </g>
              <g transform={narrow ? 'translate(200,450) scale(1.06)' : 'translate(640,108)'}>
                {PAD_PARTS.map(draw)}
              </g>
            </g>
          </svg>

          <p className="text-xs text-center mt-5" style={{ color: 'var(--color-text-light)' }}>
            <Link href="/price-index/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>
              → 今週の実測買取価格を見る
            </Link>
            <span className="mx-2" style={{ opacity: 0.4 }}>|</span>
            <Link href="/condition-guide/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>
              付属品が欠けるといくら下がるか
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
