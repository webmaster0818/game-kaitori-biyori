'use client';

import { useEffect } from 'react';
import Script from 'next/script';

// GA4測定ID。施主から発行され次第ここに設定すると計測が有効化される（空の間は何も読み込まない）
export const GA_MEASUREMENT_ID = '';

// CTAクリック計測: アフィリ(px.a8.net)と公式サイトへの外部リンククリックをGA4イベントとして送信
export default function Analytics() {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    const handler = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.('a');
      if (!a || !a.href) return;
      let url: URL;
      try { url = new URL(a.href, location.href); } catch { return; }
      if (url.host === location.host) return; // 内部リンクは対象外
      const isAffiliate = url.host.endsWith('a8.net');
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      w.gtag?.('event', 'cta_click', {
        cta_type: isAffiliate ? 'affiliate' : 'external',
        link_domain: url.host,
        link_url: url.href.slice(0, 180),
        page_path: location.pathname,
      });
    };
    document.addEventListener('click', handler, { capture: true });
    return () => document.removeEventListener('click', handler, { capture: true });
  }, []);

  if (!GA_MEASUREMENT_ID) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
      </Script>
    </>
  );
}
