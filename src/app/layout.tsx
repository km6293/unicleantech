import type { Metadata } from "next";
import localFont from "next/font/local";
import "./reset.css";
import "./globals.css";
import { Contact, Footer, Header } from "./_section";
import { Suspense } from "react";
import Analytics from "./_component/analytics";
import ChannelTalk from "@/components/ChannelTalk";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.METADATA_BASE!),
  title: "유니클린텍",
  description: `유니클린텍은 청소전문 업체입니다.`,
  icons: {
    icon: "/simbal.svg",
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
    url: `https://unicleantech.vercel.app/`,
    siteName: "유니클린텍",
    images: [
      {
        url: "/simbal.svg",
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
    images: ["/simbal.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <Suspense>
          <Analytics />
        </Suspense>
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
