// カイトリワールド felmatアフィリエイトCTA(2026-08-04差し替え・施主支給)。
// AFF_*は施主支給コードのバイト厳密一致(改変禁止)。文言・計測タグを変更しないこと。
// 事実文言はreview/kaitori-worldの公式確認値のみ使用。

const AFF_TEXT_HTML = `<a href="https://t.felmat.net/fmcl?ak=Q10024F.1.D143972K.A138029M" target="_blank" rel="nofollow noopener">フィギュア・UFOキャッチャー景品・ゲーム・おもちゃの宅配買取【カイトリワールド】</a><img src="https://t.felmat.net/fmimp/Q10024F.D143972K.A138029M" width="1" height="1" alt="" style="border:none;" />`;

const AFF_BANNER_HTML = `<a href="https://t.felmat.net/fmcl?ak=Q10024F.1.I143994K.A138029M" target="_blank" rel="nofollow noopener"><img src="https://t.felmat.net/fmimg/Q10024F.I143994K.A138029M" width="300" height="250" alt="" border="0" /></a>`;

export default function KaitoriWorldCta({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`kw-cta ${compact ? "kw-cta-compact" : ""}`}>
      <div className="kw-cta-head">
        <span className="kw-cta-pr">PR</span>
        <span className="kw-cta-label">カイトリワールド公式（提携リンク）</span>
      </div>
      {!compact && (
        <p className="kw-cta-copy">
          ゲーム・フィギュアの宅配買取。<strong>ダンボール最大10箱まで無料</strong>・査定3,000円以上で送料無料・査定連絡は最短到着日（当サイト公式確認値）。
        </p>
      )}
      <div className="kw-cta-main" dangerouslySetInnerHTML={{ __html: AFF_TEXT_HTML }} />
      {!compact && <div className="kw-cta-sub" style={{ textAlign: "center" }} dangerouslySetInnerHTML={{ __html: AFF_BANNER_HTML }} />}
    </div>
  );
}
