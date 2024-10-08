import style from "./work.module.css";
import Image from "next/image";

export default function Work() {
  const DATA = [
    {
      title: "청소",
      description:
        "유니클린텍의 자랑입니다, 13년간 13,000건 이상의 청소 경력이면 긴말이 필요할까요? 아래 버튼 클릭시 유니클린텍의 청소 철학과 과정, 리뷰, 가격에 대해서 상세히 설명해 드려요.",
      buttonText: "자세히 알아보기",
    },
    {
      title: "코팅",
      description:
        "청소에 사용되는 장비와 약품이 얼마나 중요한지 위에서 살펴보셨죠? 코팅 또한 마찬가지입니다, 저희는 고가의 장비와 세계에서 인증받은 약품을 이용하여 작업자의 안전은 기본이며 소비자의 만족과 건강 또한 동시에 만족시켜 드려요.",
      buttonText: "자세히 알아보기",
    },
  ];

  return (
    <section className={style.workContainer}>
      <h2>WOKR</h2>
      <h3>유니클린텍 주요업무</h3>
      <div>
        {DATA.map((item, index) => (
          <article key={index}>
            <Image src="/clean.webp" alt={item.title} fill />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button>{item.buttonText}</button>
          </article>
        ))}
      </div>
    </section>
  );
}
