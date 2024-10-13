import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "유니클린텍 - 서비스 소개",
  description:
    "유니클린텍의 다양한 청소 서비스와 범위를 한눈에 확인하세요. 이사, 입주, 거주 중 청소부터 사무실, 폐기물 정리까지 모든 청소를 책임집니다. 각 섹션에서는 청소 범위별 상세 작업 항목을 확인할 수 있으며, 탈거가 가능한 부분은 철저하게 분해해 청소합니다. 유니클린텍의 차별화된 청소 서비스로 타 업체와 비교 불가능한 경험을 제공합니다. 지금 바로 확인해보세요!",
  openGraph: {
    title: "유니클린텍 - 서비스 소개",
    description:
      "유니클린텍의 다양한 청소 서비스와 범위를 한눈에 확인하세요. 이사, 입주, 거주 중 청소부터 사무실, 폐기물 정리까지 모든 청소를 책임집니다. 각 섹션에서는 청소 범위별 상세 작업 항목을 확인할 수 있으며, 탈거가 가능한 부분은 철저하게 분해해 청소합니다. 유니클린텍의 차별화된 청소 서비스로 타 업체와 비교 불가능한 경험을 제공합니다. 지금 바로 확인해보세요!",
    url: "http://https://www.unicleantech.co.kr/service",
  },
  twitter: {
    title: "유니클린텍 - 서비스 소개",
    description:
      "유니클린텍의 다양한 청소 서비스와 범위를 한눈에 확인하세요. 이사, 입주, 거주 중 청소부터 사무실, 폐기물 정리까지 모든 청소를 책임집니다. 각 섹션에서는 청소 범위별 상세 작업 항목을 확인할 수 있으며, 탈거가 가능한 부분은 철저하게 분해해 청소합니다. 유니클린텍의 차별화된 청소 서비스로 타 업체와 비교 불가능한 경험을 제공합니다. 지금 바로 확인해보세요!",
  },
};

const ServiceLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <>{children}</>;
};

export default ServiceLayout;
