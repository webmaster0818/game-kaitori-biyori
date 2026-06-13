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
          中
        </div>
        <div className="flex-1">
          <p className="font-bold text-base mb-1" style={{ color: 'var(--color-deep-blue)' }}>
            中村 大輝
            <span className="text-xs font-normal ml-2" style={{ color: 'var(--color-navy)', opacity: 0.5 }}>
              （なかむら だいき）
            </span>
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span
              className="text-[10px] px-2 py-0.5 rounded-full border"
              style={{ borderColor: 'var(--color-accent-orange)', color: 'var(--color-accent-orange)' }}
            >
              ゲームコレクター歴15年
            </span>
            <span
              className="text-[10px] px-2 py-0.5 rounded-full border"
              style={{ borderColor: 'var(--color-accent-orange)', color: 'var(--color-accent-orange)' }}
            >
              レトロゲーム買取査定経験者
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-navy)', opacity: 0.7 }}>
            15年以上のゲームコレクション経験を持ち、レトロゲームから最新ゲームまで幅広く精通。買取サービスは30社以上を実際に利用し比較しています。
          </p>
          <a href="/about/" className="text-xs font-bold inline-block mt-2" style={{ color: 'var(--color-electric-green)' }}>運営者情報・編集方針 →</a>
        </div>
      </div>
    </div>
  );
}
