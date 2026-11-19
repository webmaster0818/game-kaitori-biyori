// ゲオ宅配買取のサービス停止（2026-11-19 公式 buy.geo-online.co.jp で確認）。再開が告知されたら文言を更新または削除する
export default function GeoTakuhaiNotice() {
  return (
    <div
      role="note"
      className="text-xs md:text-sm rounded-lg px-4 py-3 my-4 text-left"
      style={{ background: '#FFF7E6', color: '#5C3B00', border: '1px solid #F5C26B', lineHeight: 1.7 }}
    >
      <span className="font-bold">【ゲオ宅配買取の受付停止について（2026年11月19日確認）】</span>
      ゲオの宅配買取は、システムメンテナンスのため2026年11月19日から新規の買取申込の受付を停止しています（終了時期は未定）。発送済み・申込済みの方の査定結果の連絡や振込にも時間がかかると案内されています。本ページのゲオ宅配買取の価格・条件は停止前の確認値です。最新の状況は
      <a href="https://buy.geo-online.co.jp/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>ゲオの買取 公式サイト</a>
      でご確認ください。ゲオの店頭買取はこの案内の対象に含まれていません。
    </div>
  );
}
