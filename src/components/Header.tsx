'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'ランキング', href: '/#ranking' },
  { label: 'ハード別', href: '/#console' },
  { label: '売り方', href: '/#how-to-sell' },
  { label: 'お役立ち', href: '/#faq' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-card border-b border-[var(--color-border)]" style={{ borderRadius: 0 }}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-decoration-none">
          <span className="text-xl font-extrabold tracking-tight" style={{ color: 'var(--color-deep-blue)' }}>
            <span style={{ color: 'var(--color-electric-green)' }}>G</span>ame
            <span className="text-sm font-bold ml-1" style={{ color: 'var(--color-accent-orange)' }}>買取びより</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-semibold transition-colors hover:text-[var(--color-electric-green)]"
              style={{ color: 'var(--color-navy)' }}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#ranking" className="btn-primary text-sm py-2 px-4">
            おすすめを見る
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              background: 'var(--color-deep-blue)',
              transform: isOpen ? 'rotate(45deg) translateY(4px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              background: 'var(--color-deep-blue)',
              opacity: isOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              background: 'var(--color-deep-blue)',
              transform: isOpen ? 'rotate(-45deg) translateY(-4px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden border-t border-[var(--color-border)] bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-semibold py-2 transition-colors hover:text-[var(--color-electric-green)]"
                style={{ color: 'var(--color-navy)' }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#ranking"
              className="btn-primary text-sm py-2 px-4 text-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              おすすめを見る
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
