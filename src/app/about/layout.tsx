import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "유니클린텍 - 이건 뭐야?",
  description:
    "청소업계의 오랜 경험을 바탕으로 탄생한 유니클린텍은 강력한 세정력과 정직한 서비스로 업계의 문제를 해소합니다. 독성 화학약품, 하청 판매, 비위생적인 도구 사용, 과도한 추가요금 등 기존 청소업계의 실태를 바로잡고, 보이지 않는 곳까지 꼼꼼하게 청소하는 본질적인 청소 서비스를 제공합니다.",
  openGraph: {
    title: "유니클린텍 - 이건 뭐야?",
    description:
      "청소업계의 오랜 경험을 바탕으로 탄생한 유니클린텍은 강력한 세정력과 정직한 서비스로 업계의 문제를 해소합니다. 독성 화학약품, 하청 판매, 비위생적인 도구 사용, 과도한 추가요금 등 기존 청소업계의 실태를 바로잡고, 보이지 않는 곳까지 꼼꼼하게 청소하는 본질적인 청소 서비스를 제공합니다.",
    url: "http://https://www.unicleantech.co.kr/about",
  },
  twitter: {
    title: "유니클린텍 - 이건 뭐야?",
    description:
      "청소업계의 오랜 경험을 바탕으로 탄생한 유니클린텍은 강력한 세정력과 정직한 서비스로 업계의 문제를 해소합니다. 독성 화학약품, 하청 판매, 비위생적인 도구 사용, 과도한 추가요금 등 기존 청소업계의 실태를 바로잡고, 보이지 않는 곳까지 꼼꼼하게 청소하는 본질적인 청소 서비스를 제공합니다.",
  },
};

const AboutLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <>{children}</>;
};

export default AboutLayout;
