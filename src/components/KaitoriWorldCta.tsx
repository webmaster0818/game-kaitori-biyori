// カイトリワールド A8アフィリエイトCTA。
// AFF_*は施主支給コードのバイト厳密一致(改変禁止)。文言・計測タグを変更しないこと。
// 事実文言はreview/kaitori-worldの公式確認値のみ使用。

const AFF_CAMPAIGN_HTML = `<a href="https://px.a8.net/svt/ejp?a8mat=4B82L4+67V6EQ+3VEW+639IQ" rel="nofollow">【期間限定】まとめて買取キャンペーン中！フィギュア高価買取カイトリワールド</a>
<img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4B82L4+67V6EQ+3VEW+639IQ" alt="">`;

const AFF_STANDARD_HTML = `<a href="https://px.a8.net/svt/ejp?a8mat=4B82L4+67V6EQ+3VEW+61C2Q" rel="nofollow">フィギュア高価買取ならカイトリワールド</a>
<img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4B82L4+67V6EQ+3VEW+61C2Q" alt="">`;

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
      <div className="kw-cta-main" dangerouslySetInnerHTML={{ __html: AFF_CAMPAIGN_HTML }} />
      <div className="kw-cta-sub" dangerouslySetInnerHTML={{ __html: AFF_STANDARD_HTML }} />
    </div>
  );
}
