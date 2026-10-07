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

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          (e.target as HTMLElement).setAttribute('data-rv', 'in');
          io.unobserve(e.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.04 }
    );

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
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
}
