export default function AuthorBox() {
  return (
    <div className="glass-card rounded-xl p-6 mt-10 border border-[var(--color-border)]">
      <p
        className="text-xs font-extrabold tracking-wider mb-4"
        style={{ color: 'var(--color-electric-green)' }}
      >
        この記事の監修者
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shrink-0 border-2"
          style={{
            borderColor: 'var(--color-electric-green)',
            color: 'var(--color-deep-blue)',
            background: 'rgba(0, 230, 118, 0.08)',
          }}
        >
          編
        </div>
        <div className="flex-1">
          <p className="font-bold text-base mb-1" style={{ color: 'var(--color-deep-blue)' }}>
            ゲーム買取びより編集部
            
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span
              className="text-[10px] px-2 py-0.5 rounded-full border"
              style={{ borderColor: 'var(--color-accent-orange)', color: 'var(--color-accent-orange)' }}
            >
              毎週の公式価格実測
            </span>
            <span
              className="text-[10px] px-2 py-0.5 rounded-full border"
              style={{ borderColor: 'var(--color-accent-orange)', color: 'var(--color-accent-orange)' }}
            >
              公式一次情報のみ採用
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-navy)', opacity: 0.7 }}>
            ブックオフ・ゲオ・駿河屋など各社の公式買取ページに掲載された価格を毎週実測し、確認日つきで比較しています。掲載価格は全て公式サイトで確認できる一次情報のみで、推定・創作はありません。
          </p>
          <a href="/about/" className="text-xs font-bold inline-block mt-2" style={{ color: 'var(--color-electric-green)' }}>運営者情報・編集方針 →</a>
        </div>
      </div>
    </div>
  );
}
