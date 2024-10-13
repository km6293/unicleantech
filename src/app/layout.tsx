import type { Metadata } from "next";
import localFont from "next/font/local";
import "./reset.css";
import "./globals.css";
import { Contact, Footer, Header } from "./_section";
import { Suspense } from "react";
import ChannelTalk from "@/components/ChannelTalk";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.METADATA_BASE || "https://www.unicleantech.co.kr"
  ),
  title: "유니클린텍",
  description: `유니클린텍은 청소전문 업체입니다.`,
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/Simbal.svg", type: "image/svg+xml" },
    ],
  },
  generator: "Next.js",
  applicationName: "유니클린텍",
  keywords: ["청소전문", "입주청소", "프리미엄 청소"],
  creator: "김민수",
  authors: [{ name: "김민수", url: "https://github.com/km6293" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "유니클린텍 - 홈",
    description: `유니클린텍은 청소전문 업체입니다.`,
    url: `https://www.unicleantech.co.kr/`,
    siteName: "유니클린텍",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "유니클린텍 로고",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "유니클린텍 - 홈",
    description: `유니클린텍은 청소전문 업체입니다.`,
    images: ["https://www.unicleantech.co.kr/logo_1200x600.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" dir="ltr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="유니클린텍은 청소전문 업체입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "유니클린텍",
              url: "https://www.unicleantech.co.kr",
              logo: "https://www.unicleantech.co.kr/logo.png",
              sameAs: [
                "https://www.instagram.com/clean_young_people",
                "https://youtube.com/channel/UCfA5jx1Ak5sHsZPatOWd3xg?si=RDLooUhrtUDQ0dH3",
                "https://www.tiktok.com/@unicleantech",
                "https://blog.naver.com/unicleantech",
              ],
            }),
          }}
        />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "홈",
                  item: "https://www.unicleantech.co.kr",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "서비스",
                  item: "https://www.unicleantech.co.kr/service",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "문의하기",
                  item: "https://www.unicleantech.co.kr/contact",
                },
              ],
            }),
          }}
        />

        {/* WebSite Schema with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://www.unicleantech.co.kr",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.unicleantech.co.kr/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <Suspense>{/* <Analytics /> */}</Suspense>
      )}
      <body className={`${pretendard.variable}`}>
        <Header />
        {children}
        <Contact />
        <ChannelTalk />
        <Footer />
      </body>
    </html>
  );
}
