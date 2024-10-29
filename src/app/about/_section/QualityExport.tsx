import { Quality } from "@/_section";

export default function QualityExport() {
  const DATA = [
    {
      title: "The highest quality",
      subtitle: "친환경 독일 키엘 세제 14종 보유",
      description:
        "비싼 장비에는 다 이유가 있습니다, 많은 이윤을 남기기 위해 저렴한 장비를 사용하다 보면 최악의 상황에는 바닥이 손상되거나 청소 또한 완벽히 되지 않을수 있습니다.",
      buttonText: "실제 가격을 확인해 보세요!",
      first: true,
      type: "video",
      src: process.env.NEXT_PUBLIC_VIDEO_SRC || "",
    },
    {
      title: "The highest quality",
      subtitle: "고온 스팀기를 이용하여 세균과 잔여 세정제를 완벽하게 제거",
      description:
        "비싼 장비에는 다 이유가 있습니다, 많은 이윤을 남기기 위해 저렴한 장비를 사용하다 보면 최악의 상황에는 바닥이 손상되거나 청소 또한 완벽히 되지 않을수 있습니다.",
      buttonText: "실제 가격을 확인해 보세요!",
      first: false,
      type: "video",
      src: process.env.NEXT_PUBLIC_VIDEO_SRC || "",
    },
    {
      title: "The highest quality",
      subtitle: "청소 전문업체에 걸맞는 고가의 청소 용품 사용",
      description:
        "비싼 장비에는 다 이유가 있습니다, 많은 이윤을 남기기 위해 저렴한 장비를 사용하다 보면 최악의 상황에는 바닥이 손상되거나 청소 또한 완벽히 되지 않을수 있습니다.",
      buttonText: "실제 가격을 확인해 보세요!",
      first: true,
      type: "video",
      src: process.env.NEXT_PUBLIC_VIDEO_SRC || "",
    },
    {
      title: "The highest quality",
      subtitle: "매일 빨래와 건조 된 수건을 구역별로 분리",
      description:
        "비싼 장비에는 다 이유가 있습니다, 많은 이윤을 남기기 위해 저렴한 장비를 사용하다 보면 최악의 상황에는 바닥이 손상되거나 청소 또한 완벽히 되지 않을수 있습니다.",
      buttonText: "실제 가격을 확인해 보세요!",
      first: false,
      type: "video",
      src: process.env.NEXT_PUBLIC_VIDEO_SRC || "",
    },
    {
      title: "The highest quality",
      subtitle: "까다로운 교육 과정을 수료한 100% 본사 직영팀 운영",
      description:
        "비싼 장비에는 다 이유가 있습니다, 많은 이윤을 남기기 위해 저렴한 장비를 사용하다 보면 최악의 상황에는 바닥이 손상되거나 청소 또한 완벽히 되지 않을수 있습니다.",
      buttonText: "실제 가격을 확인해 보세요!",
      first: true,
      type: "video",
      src: process.env.NEXT_PUBLIC_VIDEO_SRC || "",
    },
    {
      title: "The highest quality",
      subtitle: "합리적인 견적 안내 , 현장에서 과도한 추가요금 강요 X",
      description:
        "비싼 장비에는 다 이유가 있습니다, 많은 이윤을 남기기 위해 저렴한 장비를 사용하다 보면 최악의 상황에는 바닥이 손상되거나 청소 또한 완벽히 되지 않을수 있습니다.",
      buttonText: "실제 가격을 확인해 보세요!",
      first: false,
      type: "video",
      src: process.env.NEXT_PUBLIC_VIDEO_SRC || "",
    },
    {
      title: "The highest quality",
      subtitle: "청소 후 끝까지 책임지는 사후처리 시스템",
      description:
        "비싼 장비에는 다 이유가 있습니다, 많은 이윤을 남기기 위해 저렴한 장비를 사용하다 보면 최악의 상황에는 바닥이 손상되거나 청소 또한 완벽히 되지 않을수 있습니다.",
      buttonText: "실제 가격을 확인해 보세요!",
      first: true,
      type: "video",
      src: process.env.NEXT_PUBLIC_VIDEO_SRC || "",
    },
    {
      title: "The highest quality",
      subtitle: "하자체크 및 고객 모니터링 시스템",
      description:
        "비싼 장비에는 다 이유가 있습니다, 많은 이윤을 남기기 위해 저렴한 장비를 사용하다 보면 최악의 상황에는 바닥이 손상되거나 청소 또한 완벽히 되지 않을수 있습니다.",
      buttonText: "실제 가격을 확인해 보세요!",
      first: false,
      type: "video",
      src: process.env.NEXT_PUBLIC_VIDEO_SRC || "",
    },
    {
      title: "The highest quality",
      subtitle: "새집증후군 / 프리미엄 피톤치드 살균탈취 서비스",
      description:
        "비싼 장비에는 다 이유가 있습니다, 많은 이윤을 남기기 위해 저렴한 장비를 사용하다 보면 최악의 상황에는 바닥이 손상되거나 청소 또한 완벽히 되지 않을수 있습니다.",
      buttonText: "실제 가격을 확인해 보세요!",
      first: true,
      type: "video",
      src: process.env.NEXT_PUBLIC_VIDEO_SRC || "",
    },
  ];

  return <Quality data={DATA} />;
}
