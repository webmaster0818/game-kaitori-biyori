// 古本市場(ふるいち)ゲーム買取 felmatアフィリエイトCTA(2026-08-04設置・施主支給)。
// AFF_*は施主支給コードのバイト厳密一致(改変禁止)。文言・計測タグを変更しないこと。
// 事実文言はreview/furuichiの公式確認値(2026-08-04)のみ使用。

const AFF_TEXT_HTML = `<a href="https://t.felmat.net/fmcl?ak=H12002X.1.G164979Q.A138029M" target="_blank" rel="nofollow noopener">ゲームソフト・ゲーム機の宅配買取【古本市場（ふるいち）ゲーム買取】</a><img src="https://t.felmat.net/fmimp/H12002X.G164979Q.A138029M" width="1" height="1" alt="" style="border:none;" />`;

const AFF_BANNER_250_HTML = `<a href="https://t.felmat.net/fmcl?ak=H12002X.1.H1649981.A138029M" target="_blank" rel="nofollow noopener"><img src="https://t.felmat.net/fmimg/H12002X.H1649981.A138029M" width="300" height="250" alt="" border="0" /></a>`;

const AFF_BANNER_50_HTML = `<a href="https://t.felmat.net/fmcl?ak=H12002X.1.5164997J.A138029M" target="_blank" rel="nofollow noopener"><img src="https://t.felmat.net/fmimg/H12002X.5164997J.A138029M" width="320" height="50" alt="" border="0" /></a>`;

const AFF_BANNER_100_HTML = `<a href="https://t.felmat.net/fmcl?ak=H12002X.1.Q164996Z.A138029M" target="_blank" rel="nofollow noopener"><img src="https://t.felmat.net/fmimg/H12002X.Q164996Z.A138029M" width="320" height="100" alt="" border="0" /></a>`;

export default function FuruichiCta({ variant = "full" }: { variant?: "full" | "compact" | "strip" }) {
  return (
    <div className={`kw-cta ${variant !== "full" ? "kw-cta-compact" : ""}`}>
      <div className="kw-cta-head">
        <span className="kw-cta-pr">PR</span>
        <span className="kw-cta-label">古本市場（ふるいち）公式（提携リンク）</span>
      </div>
      {variant === "full" && (
        <p className="kw-cta-copy">
          東証スタンダード上場テイツー運営。<strong>査定額3,000円以上で送料無料</strong>・査定了承後3営業日以内振込（当サイト公式確認値・2026年8月4日）。
        </p>
      )}
      <div className="kw-cta-main" dangerouslySetInnerHTML={{ __html: AFF_TEXT_HTML }} />
      {variant === "full" && <div className="kw-cta-sub" style={{ textAlign: "center" }} dangerouslySetInnerHTML={{ __html: AFF_BANNER_250_HTML }} />}
      {variant === "compact" && <div className="kw-cta-sub" style={{ textAlign: "center" }} dangerouslySetInnerHTML={{ __html: AFF_BANNER_100_HTML }} />}
      {variant === "strip" && <div className="kw-cta-sub" style={{ textAlign: "center" }} dangerouslySetInnerHTML={{ __html: AFF_BANNER_50_HTML }} />}
    </div>
  );
}
