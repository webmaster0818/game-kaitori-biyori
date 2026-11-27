// ホビーコレクト A8アフィリエイトCTA(2026-11-27設置・施主承認 Discord msg 1575732667419205646)。
// AFF_TEXT_HTMLはA8発行コード(プログラム s00000013178004)のバイト厳密一致(改変禁止)。
// 広告主設定のリンク文言が「ゲーム館」のため、見出しと説明文でホビーコレクト(株式会社JUSTY)の公式リンクであることを明示する。
// 事実文言はreview/hobby-collectの公式確認値(2026-11-15)のみ使用。

const AFF_TEXT_HTML = `<a href="https://px.a8.net/svt/ejp?a8mat=4BGV62+5YJ02+2TOK+NYHDU" rel="nofollow">ゲームソフトやハード、DVDやDVD-BOXの買取専門！ゲーム館</a>
<img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4BGV62+5YJ02+2TOK+NYHDU" alt="">`;

export default function HobbyCollectCta() {
  return (
    <div className="kw-cta" style={{ textAlign: "left" }}>
      <div className="kw-cta-head">
        <span className="kw-cta-pr">PR</span>
        <span className="kw-cta-label">ホビーコレクト公式（提携リンク）</span>
      </div>
      <p className="kw-cta-copy">
        下のリンクは、株式会社JUSTYが運営するホビーコレクトの提携リンクです（リンク名「ゲーム館」は広告主が設定した名称です）。箱なし・動作未確認のゲームも査定対象です。キャンセル時と買取不可品の返送料はお客様負担です（当サイト公式確認値・2026年11月15日）。
      </p>
      <div className="kw-cta-main" dangerouslySetInnerHTML={{ __html: AFF_TEXT_HTML }} />
    </div>
  );
}
