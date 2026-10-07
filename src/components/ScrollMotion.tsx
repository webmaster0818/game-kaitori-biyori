'use client';

import { useEffect } from 'react';

/**
 * スクロールに合わせた動き（2026-10-07）
 *
 * 設計方針（2026-08のimp急落の反省をふまえる）:
 *  - DOMを増やさない。既存の要素に data 属性を付けるだけで、見た目の要素は一切追加しない
 *  - **非表示の初期状態はJSで付ける**。JSが動かない環境（クローラ含む）では
 *    最初から全部表示されたままになり、内容が見えなくなることがない
 *  - prefers-reduced-motion: reduce なら何もしない
 *  - transform と opacity しか触らないのでレイアウトは動かない（CLSゼロ）
 */
export default function ScrollMotion() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    const main = document.querySelector('main');
    if (!main) return;

    // 1) ヘッダー: 少しスクロールしたら線を濃くする（影は使わない）
    const header = document.querySelector('header');
    const onScroll = () => {
      if (header) header.toggleAttribute('data-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // 2) セクション単位のフェードアップ
    const targets: Element[] = [];
    main.querySelectorAll('section').forEach((sec) => {
      // ヒーローは入場アニメを別に当てるので除外
      if (sec.classList.contains('hero-gradient')) return;
      targets.push(sec);
    });
    // 3) カード・表の行は少しずつ遅らせて出す（機械的に順番に点灯する感じ）
    const groups: Element[][] = [];
    main.querySelectorAll('.comparison-table tbody').forEach((tb) => {
      groups.push(Array.from(tb.querySelectorAll('tr')));
    });
    main.querySelectorAll('.grid').forEach((g) => {
      const kids = Array.from(g.children).filter((c) => (c as HTMLElement).offsetHeight > 24);
      if (kids.length >= 2 && kids.length <= 24) groups.push(kids);
    });

    // 表示にする = その要素が持っている属性のほうを 'in' にする。
    // （data-rv-item を持つ要素に data-rv="in" を付けても、CSSの
    //   [data-rv-item=""] が効いたままで永久に透明になる。2026-10-07の不具合）
    const reveal = (el: Element) => {
      const h = el as HTMLElement;
      // 1つの要素が data-rv と data-rv-item の両方を持つことがある
      // （.grid の直下に <section> がある場合など）。片方だけ 'in' にすると
      // もう片方の「非表示」が残り続けて、永久に透明になる。必ず両方を外す。
      if (h.hasAttribute('data-rv-item')) h.setAttribute('data-rv-item', 'in');
      if (h.hasAttribute('data-rv')) h.setAttribute('data-rv', 'in');
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          reveal(e.target);
          io.unobserve(e.target);
        }
      },
      { rootMargin: '0px 0px -5% 0px', threshold: 0 }
    );

    // 画面の下端より上に来たものは、監視の取りこぼしに関係なく必ず表示する。
    // 勢いよくスクロールすると IntersectionObserver が要素を拾い損ねることがあり、
    // そのまま透明で残ってしまうため（2026-10-07の不具合の本体）。
    let sweeping = false;
    const sweep = () => {
      sweeping = false;
      const left = document.querySelectorAll('[data-rv=""],[data-rv-item=""]');
      if (!left.length) return;
      const vh = window.innerHeight;
      left.forEach((el) => {
        if (el.getBoundingClientRect().top < vh) reveal(el);
      });
    };
    const onScrollSweep = () => {
      if (sweeping) return;
      sweeping = true;
      requestAnimationFrame(sweep);
    };
    window.addEventListener('scroll', onScrollSweep, { passive: true });
    window.addEventListener('resize', onScrollSweep, { passive: true });

    // 最後の保険: 何があっても1.5秒後には、画面に入っているものを全部表示する
    const failsafe = window.setTimeout(sweep, 1500);

    for (const el of targets) {
      el.setAttribute('data-rv', '');
      io.observe(el);
    }
    for (const g of groups) {
      g.forEach((el, i) => {
        const h = el as HTMLElement;
        h.setAttribute('data-rv-item', '');
        h.style.setProperty('--rv-delay', `${Math.min(i, 10) * 45}ms`);
        io.observe(h);
      });
    }

    // 4) ヒーローは読み込み直後に入場させる
    const hero = document.querySelector('.hero-gradient');
    if (hero) {
      hero.setAttribute('data-hero', '');
      requestAnimationFrame(() => hero.setAttribute('data-hero', 'in'));
    }

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', onScrollSweep);
      window.removeEventListener('resize', onScrollSweep);
    };
  }, []);

  return null;
}
