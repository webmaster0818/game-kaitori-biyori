// ゲオ宅配買取のサービス停止（2026-11-19 公式 buy.geo-online.co.jp で確認）。2026-11-22 にメンテナンス画面が解除され通常ページを表示（再開の告知は未確認）。再開の告知を確認したら削除する
export default function GeoTakuhaiNotice() {
  return (
    <div
      role="note"
      className="text-xs md:text-sm rounded-lg px-4 py-3 my-4 text-left"
      style={{ background: '#FFF7E6', color: '#5C3B00', border: '1px solid #F5C26B', lineHeight: 1.7 }}
    >
      <span className="font-bold">【ゲオ宅配買取の受付状況について（2026年11月22日確認）】</span>
      ゲオの宅配買取は、システムメンテナンスのため2026年11月19日から新規の買取申込の受付を停止していました（公式の案内では終了時期は未定）。2026年11月22日に当サイトが確認した時点では、公式サイトのメンテナンス案内の画面は表示されなくなり、通常のページ（サービスガイド・よくあるご質問など）が表示されています。ただし、サービス再開のお知らせは確認できていません。本ページのゲオ宅配買取の価格・条件は停止前の確認値です。お申し込みの前に、受付状況を
      <a href="https://buy.geo-online.co.jp/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>ゲオの買取 公式サイト</a>
      でご確認ください。ゲオの店頭買取はこの案内の対象に含まれていません。
    </div>
  );
}
