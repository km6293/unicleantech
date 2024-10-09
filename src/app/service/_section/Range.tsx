import style from "./range.module.css";
import Image from "next/image";

export default function Range() {
  const DATA = [
    {
      title: "거실 , 방 청소",
      detail: [
        "벽, 천장 부위 먼지 및 이물질 청소",
        "신발장/장식장 먼지 및 얼룩 청소",
        "몰딩 부분 먼지 및 오염 청소",
        "문틀, 창문틀, 유리, 방충망 오염 및 먼지 청소",
        "내부 유리창 오염물 청소",
        "실내등, 스위치, 콘센트, 기타 조명 시설 먼지 및 오염 청소",
        "마루, 바닥 이물질 및 찌든 때 청소",
        "출입문 먼지 및 오염 청소",
      ],
    },
    {
      title: "주방 청소",
      detail: [
        "싱크대 위 부분 먼지 및 오염 청소",
        "싱크대 내/외부 청소",
        "싱크대 중간 타일 오염, 이물질 및 먼지 청소",
        "싱크대 밑 부분 먼지 및 오염 청소",
        "후드 탈거 후 기름때 청소",
        "걸레받이 탈거 후 청소",
      ],
    },
    {
      title: "욕실 , 화장실 청소",
      detail: [
        "배수구 분해 오염 청소",
        "욕실 타일 먼지 및 오염 청소",
        "욕실 바닥 이물질 청소 · 천장, 벽 사이 찌든 때 및 먼지 청소",
        "스테인리스 청소",
        "환풍구 분해 청소",
      ],
    },
    {
      title: "베란다 청소",
      detail: [
        "방충망 먼지, 오염 및 이물질 청소",
        "샤시, 유리, 창틀 오염 및 먼지 청소",
        "베란다 내부 유리 이물질 청소",
        "벽, 천장, 바닥 등의 먼지 및 오염 청소",
        "베란다 타일 및 바닥 오염 및 먼지 청소",
        "다용도실, 빨래 건조대의 먼지 및 오염 청소",
        "배수구 분해 후 오염 청소",
      ],
    },
  ];
  return (
    <section className={style.rangeContainer}>
      <h2>
        <strong>유니클린텍의 이사ㅣ입주청소 범위</strong>
      </h2>
      <h3>탈거가 가능한 부분은 모두 탈거 합니다.</h3>
      <div className={style.rangeGride}>
        {DATA.map((item, index) => (
          <article key={index}>
            <Image
              alt="image"
              layout="responsive"
              src="/group.jpg"
              width={1160}
              height={900}
            />
            <div>
              <h2>{item.title}</h2>
              <ul>
                {item.detail.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
              <p></p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
