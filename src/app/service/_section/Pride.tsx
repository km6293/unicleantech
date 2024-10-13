import style from "./pride.module.css";
import Image from "next/image";

export default function Pride() {
  const DATA = [
    {
      title: "이사청소",
      detail:
        "사람이 살던 집의 청소로, 기존의 먼지, 오염물, 사용 흔적을 제거합니다.",
    },
    {
      title: "입주청소",
      detail:
        "새로 이사하는 집이나 공사 후에 입주하기 전에 집 안의 전체적인 청소를 의미합니다.",
    },
    {
      title: "거주청소",
      detail:
        "현재 살고 있는 집에서 생활 중 발생한 먼지, 오염물, 찌든 때 등을 정기적으로 청소하는 서비스입니다. ",
    },
    {
      title: "상가, 사무실 청소",
      detail:
        "상가나 사무실에서 발생한 먼지, 오염 , 찌든때 ,사용 흔적들을 제거 하는 서비스 입니다.",
    },
    {
      title: "폐기물 집 , 쓰레기집 청소",
      detail:
        " 집 안에 쌓여 있는 각종 폐기물, 쓰레기, 불필요한 물건 등을 정리하고 처리하는 청소를 말합니다",
    },
  ];
  return (
    <section className={style.prideContainer}>
      <h2>
        <strong>유니클린텍은 못하는 청소가 없어요!</strong>
      </h2>
      <div className={style.prideGride}>
        {DATA.map((item, index) => (
          <article key={index}>
            <Image
              alt="image"
              src="/group.jpg"
              width={1160}
              height={900}
              style={{ width: "100%", height: "auto" }}
            />
            <div>
              <h2>{item.title}</h2>
              <p>{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
