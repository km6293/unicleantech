import type { Metadata } from "next";
import localFont from "next/font/local";
import "./reset.css";
import "./globals.css";
import { Contact, Footer, Header } from "./_section";
import { Suspense } from "react";
import ChannelTalk from "@/components/ChannelTalk";
import Head from "next/head";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.unicleantech.co.kr"),
  title: "유니클린텍",
  description: "유니클린텍은 청소전문 업체입니다.",
  keywords: ["청소전문", "입주청소", "프리미엄 청소"],
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "https://www.unicleantech.co.kr/logo.png", type: "image/png" },
      {
        url: "https://www.unicleantech.co.kr/svg/Simbal.svg",
        type: "image/svg+xml",
      },
    ],
  },
  generator: "Next.js",
  applicationName: "유니클린텍",
  creator: "김민수",
  authors: [{ name: "김민수", url: "https://github.com/km6293" }],
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: "유니클린텍 - 홈",
    description: "유니클린텍은 청소전문 업체입니다.",
    url: "https://www.unicleantech.co.kr/",
    siteName: "유니클린텍",
    images: [
      {
        url: "https://www.unicleantech.co.kr/logo.png",
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
    description: "유니클린텍은 청소전문 업체입니다.",
    images: ["https://www.unicleantech.co.kr/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" dir="ltr">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.unicleantech.co.kr/" />

        {/* Preload 폰트 */}
        <link
          rel="preload"
          href="/fonts/PretendardVariable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Structured Data */}
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
      </Head>
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
