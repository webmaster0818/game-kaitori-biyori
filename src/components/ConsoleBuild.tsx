'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

/*
 * スクロールに連動して Switch と PS5 の線画が1本ずつ描かれ、組み上がっていくセクション。
 * （2026-10-08 新設）
 *
 * 10/7の出現アニメで「本文が透明のまま残る」事故を起こしたので、今回は作りを逆にしている。
 *  - 既定は「描き終わった状態」。JSが動いたときだけ線を消して描き直す
 *  - だからJSが落ちても、古いブラウザでも、線画は必ず見えている
 *  - prefers-reduced-motion: reduce の人には最初から完成形を出す（何も動かさない）
 *  - stickyが効かない環境でも、ただ縦に並ぶだけで中身は欠けない
 */

const circle = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${r * 2} 0 a ${r} ${r} 0 1 0 ${-r * 2} 0`;

const rect = (x: number, y: number, w: number, h: number, r = 0) =>
  r <= 0
    ? `M ${x} ${y} H ${x + w} V ${y + h} H ${x} Z`
    : `M ${x + r} ${y} H ${x + w - r} A ${r} ${r} 0 0 1 ${x + w} ${y + r} V ${y + h - r} A ${r} ${r} 0 0 1 ${x + w - r} ${y + h} H ${x + r} A ${r} ${r} 0 0 1 ${x} ${y + h - r} V ${y + r} A ${r} ${r} 0 0 1 ${x + r} ${y} Z`;

type Part = { d: string; s: number; e: number; w?: number };

// ---- Nintendo Switch（左） ----
const SWITCH: Part[] = [
  { d: rect(186, 140, 128, 190), s: 0.00, e: 0.09, w: 2.4 },     // 本体中央
  { d: rect(198, 152, 104, 166, 4), s: 0.09, e: 0.16 },           // 画面
  { d: rect(130, 140, 58, 190, 28), s: 0.16, e: 0.25, w: 2.4 },   // 左Joy-Con
  { d: rect(312, 140, 58, 190, 28), s: 0.25, e: 0.34, w: 2.4 },   // 右Joy-Con
  { d: circle(159, 180, 13), s: 0.34, e: 0.37 },                  // 左スティック
  { d: circle(159, 249, 5), s: 0.37, e: 0.39 },
  { d: circle(145, 263, 5), s: 0.37, e: 0.39 },
  { d: circle(173, 263, 5), s: 0.37, e: 0.39 },
  { d: circle(159, 277, 5), s: 0.37, e: 0.39 },
  { d: circle(341, 166, 5.5), s: 0.39, e: 0.41 },                 // 右4ボタン
  { d: circle(327, 180, 5.5), s: 0.39, e: 0.41 },
  { d: circle(355, 180, 5.5), s: 0.39, e: 0.41 },
  { d: circle(341, 194, 5.5), s: 0.39, e: 0.41 },
  { d: circle(341, 268, 13), s: 0.41, e: 0.44 },                  // 右スティック
];

// ---- PlayStation 5（中央） ----
const PS5: Part[] = [
  { d: rect(614, 104, 72, 276), s: 0.44, e: 0.54, w: 2.4 },       // 中央の本体
  { d: 'M 590 96 C 612 154, 612 326, 590 388', s: 0.54, e: 0.62, w: 2.4 },  // 左パネル（中央がくびれる）
  { d: 'M 710 96 C 688 154, 688 326, 710 388', s: 0.62, e: 0.70, w: 2.4 },  // 右パネル
  { d: 'M 590 96 L 614 104 M 710 96 L 686 104 M 590 388 L 614 380 M 710 388 L 686 380', s: 0.70, e: 0.73 },
  { d: 'M 616 230 H 684 M 616 240 H 684', s: 0.73, e: 0.76 },     // 中央の光
  { d: 'M 622 150 H 648', s: 0.76, e: 0.78 },                     // ディスクスロット
  { d: circle(664, 352, 4), s: 0.78, e: 0.80 },
  { d: circle(676, 352, 4), s: 0.78, e: 0.80 },
  { d: 'M 588 392 H 712', s: 0.80, e: 0.83, w: 2.4 },             // スタンド
];

// ---- DualSense（右） ----
const PAD: Part[] = [
  {
    d:
      'M 790 190 C 776 190 768 201 764 215 C 758 236 756 259 764 269 C 772 279 783 271 789 259 ' +
      'L 851 259 C 857 271 868 279 876 269 C 884 259 882 236 876 215 C 872 201 864 190 850 190 Z',
    s: 0.83, e: 0.93, w: 2.4,
  },
  { d: rect(804, 199, 32, 20, 4), s: 0.93, e: 0.95 },             // タッチパッド
  { d: circle(804, 238, 9), s: 0.95, e: 0.97 },
  { d: circle(836, 238, 9), s: 0.95, e: 0.97 },
  { d: 'M 783 206 H 797 M 790 199 V 213', s: 0.97, e: 0.99 },     // 十字キー
  { d: circle(857, 199, 4), s: 0.97, e: 1.00 },
  { d: circle(848, 208, 4), s: 0.97, e: 1.00 },
  { d: circle(866, 208, 4), s: 0.97, e: 1.00 },
  { d: circle(857, 217, 4), s: 0.97, e: 1.00 },
];


let key = 0;
const draw = (p: Part) => (
  <path
    key={`p${key++}`}
    d={p.d}
    data-part=""
    data-s={p.s}
    data-e={p.e}
    pathLength={1}
    strokeDasharray={1}
    strokeWidth={p.w ?? 1.6}
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
      // セクションが画面の6割まで入ってきた時点から描き始める。
      // （stickyで貼り付く前に「空っぽの枠」が見える時間を作らないため）
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
    // requestAnimationFrame を挟まず、スクロールのたびにその場で反映する。
    // 読み取りは1回・書き込みは32個だけなので負荷は小さく、
    // rAFが間引かれる環境でも「描かれないまま止まる」ことがない。
    apply();
    window.addEventListener('scroll', apply, { passive: true });
    window.addEventListener('resize', apply);

    // 保険: 何かの理由でスクロールイベントが来なくても、5秒後には必ず完成形にする
    const failsafe = window.setTimeout(() => {
      const r = el.getBoundingClientRect();
      if (r.top > window.innerHeight || r.bottom < 0) return;
      apply();
    }, 5000);

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
    <section ref={wrap} className="console-build" aria-label="ゲーム機の構成">
      <div className="console-build-stage">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="text-center mb-5 md:mb-8">
            <h2 className="section-heading">
              <span className="section-heading-bar" />本体だけでは、査定は満点になりません
            </h2>
            <p className="text-sm mt-3" style={{ color: 'var(--color-text-light)' }}>
              Joy-Con・コントローラー・ドック・ケーブル・箱。そろっているものが多いほど買取額は上がります。
            </p>
          </div>

          <svg
            className="console-build-svg"
            viewBox={narrow ? '0 0 460 720' : '0 0 900 460'}
            role="img"
            aria-label="Nintendo Switch と PlayStation 5、DualSense コントローラーの線画"
          >
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              {/* スマホでは横1列だと小さすぎるので、Switchを上・PS5とコントローラーを下に組み替える */}
              <g transform={narrow ? 'scale(1.4) translate(-85.7,-97.1)' : undefined}>
                {SWITCH.map(draw)}
              </g>
              <g transform={narrow ? 'scale(1.1) translate(-527.1,231.3)' : undefined}>
                {PS5.map(draw)}
                {PAD.map(draw)}
              </g>
            </g>
          </svg>

          <p className="text-xs text-center mt-5" style={{ color: 'var(--color-text-light)' }}>
            どこまで欠けると、いくら下がるのか —{' '}
            <Link href="/condition-guide/" style={{ color: 'var(--color-electric-green)', fontWeight: 700 }}>
              状態別の許容度マップ
            </Link>
            で店ごとの基準を比べられます。
          </p>
        </div>
      </div>
    </section>
  );
}
