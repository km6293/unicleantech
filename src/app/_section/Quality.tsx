import { Video } from "../_component";
import style from "./quality.module.css";

export default function Quality() {
  const DATA = [
    {
      title: "The highest quality",
      subtitle: "바닥청소기 하나에 700만원, 비싼 장비에는 다 이유가 있어요.",
      description:
        "비싼 장비에는 다 이유가 있습니다, 많은 이윤을 남기기 위해 저렴한 장비를 사용하다 보면 최악의 상황에는 바닥이 손상되거나 청소 또한 완벽히 되지 않을수 있습니다. * 아래 버튼 클릭시 실제 판매 링크로 이동됩니다.",
      buttonText: "실제 가격을 확인해 보세요!",
      videoFirst: true,
    },
    {
      title: "The highest quality",
      subtitle: "바닥청소기 하나에 700만원, 비싼 장비에는 다 이유가 있어요.",
      description:
        "비싼 장비에는 다 이유가 있습니다, 많은 이윤을 남기기 위해 저렴한 장비를 사용하다 보면 최악의 상황에는 바닥이 손상되거나 청소 또한 완벽히 되지 않을수 있습니다. * 아래 버튼 클릭시 실제 판매 링크로 이동됩니다.",
      buttonText: "실제 가격을 확인해 보세요!",
      videoFirst: false,
    },
    {
      title: "The highest quality",
      subtitle: "바닥청소기 하나에 700만원, 비싼 장비에는 다 이유가 있어요.",
      description:
        "비싼 장비에는 다 이유가 있습니다, 많은 이윤을 남기기 위해 저렴한 장비를 사용하다 보면 최악의 상황에는 바닥이 손상되거나 청소 또한 완벽히 되지 않을수 있습니다. * 아래 버튼 클릭시 실제 판매 링크로 이동됩니다.",
      buttonText: "실제 가격을 확인해 보세요!",
      videoFirst: true,
    },
  ];

  return (
    <section className={style.imageBackground}>
      <div className={style.contentContainer}>
        {DATA.map((item, index) => (
          <article className={style.content} key={index}>
            {item.videoFirst && (
              <Video src={`${process.env.NEXT_PUBLIC_VIDEO_SRC}`} />
            )}
            <div>
              <h2>{item.title}</h2>
              <h3>{item.subtitle}</h3>
              <p>{item.description}</p>
              <button>{item.buttonText}</button>
            </div>
            {!item.videoFirst && (
              <Video src={`${process.env.NEXT_PUBLIC_VIDEO_SRC}`} />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
