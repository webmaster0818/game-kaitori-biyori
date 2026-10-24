// ゲオの買取（buy.geo-online.co.jp）の新規申込み停止の告知。再開を確認したら外す（2026-10-24）
export default function GeoSuspendedNotice() {
  return (
    <div className="rounded-lg p-4 mb-6 text-sm leading-relaxed" style={{ background: 'rgba(251,191,36,0.12)', border: '1px solid rgba(251,191,36,0.5)', color: '#FDE68A' }}>
      <p className="font-bold mb-1">ゲオのオンライン買取「ゲオの買取」は、現在新規の申込みを停止しています（2026年10月24日 公式確認）</p>
      <p>公式の告知によると、2026年10月15日に同社システムへの不正アクセスが確認されたため、10月17日21時からサービスを停止しています（個人情報・機密情報の外部漏洩は確認されていないとのことです）。終了時期は未定です。本ページのゲオに関する記載は停止前に確認した内容のため、店頭での買取の扱いは各店舗にご確認ください。</p>
      <p className="text-xs mt-2">出典：<a href="https://buy.geo-online.co.jp/trade" target="_blank" rel="noopener noreferrer nofollow" className="underline">ゲオの買取「システムメンテナンスに伴うサービス ご提供停止のご案内」</a></p>
    </div>
  );
}
