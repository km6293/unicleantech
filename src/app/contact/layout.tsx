import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "유니클린텍 - 문의하기",
  description:
    "유니클린텍 청소 문의 폼입니다. 사용자는 다양한 청소 서비스(입주, 이사, 거주, 리모델링 후 청소 등)와 건물 유형(아파트, 오피스텔, 사무실 등)을 선택하고, 원하는 청소 희망일을 지정할 수 있습니다. 사용자 맞춤형 서비스 요청을 지원하며, 추가 서비스나 특수 건물 유형도 입력할 수 있습니다. 간편한 폼 제출로 청소 예약을 완료하세요.",
  openGraph: {
    title: "유니클린텍 - 문의하기",
    description:
      "유니클린텍 청소 문의 폼입니다. 사용자는 다양한 청소 서비스(입주, 이사, 거주, 리모델링 후 청소 등)와 건물 유형(아파트, 오피스텔, 사무실 등)을 선택하고, 원하는 청소 희망일을 지정할 수 있습니다. 사용자 맞춤형 서비스 요청을 지원하며, 추가 서비스나 특수 건물 유형도 입력할 수 있습니다. 간편한 폼 제출로 청소 예약을 완료하세요.",
    url: "http://https://www.unicleantech.co.kr/contact",
  },
  twitter: {
    title: "유니클린텍 - 문의하기",
    description:
      "유니클린텍 청소 문의 폼입니다. 사용자는 다양한 청소 서비스(입주, 이사, 거주, 리모델링 후 청소 등)와 건물 유형(아파트, 오피스텔, 사무실 등)을 선택하고, 원하는 청소 희망일을 지정할 수 있습니다. 사용자 맞춤형 서비스 요청을 지원하며, 추가 서비스나 특수 건물 유형도 입력할 수 있습니다. 간편한 폼 제출로 청소 예약을 완료하세요.",
  },
};

const ContactLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <>{children}</>;
};

export default ContactLayout;
