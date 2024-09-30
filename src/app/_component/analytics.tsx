"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag: (
      command: "config" | "event",
      id: string,
      params?: GtagParams
    ) => void;
  }
}

interface GtagParams {
  page_path?: string;
  [key: string]: unknown;
}

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID!;

const pageview = (GTM_ID: string, url: string) => {
  window.gtag("config", GTM_ID, {
    page_path: url,
  });
};

const Analytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    pageview(GTM_ID, url);
  }, [pathname, searchParams]);

  return (
    <>
      {/* Google Tag Manager Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
      />
      {/* Google Analytics Initialization */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('consent', 'default', {
              'analytics_storage': 'granted'
            });

            gtag('config', '${GTM_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

export default Analytics;
