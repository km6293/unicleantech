import style from "./quality.module.css";

export default function Quality() {
  return (
    <div className={style.imageBackground}>
      <article className={style.contentContainer}>
        <div className={style.content}>
          <video autoPlay muted loop preload="auto">
            <source
              src={`${process.env.NEXT_PUBLIC_VIDEO_SRC}`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div>
            <h2>The highest quality</h2>
            <h3>
              바닥청소기 하나에 700만원,
              <br />
              비싼 장비에는 다 이유가 있어요.
            </h3>
            <p>
              비싼 장비에는 다 이유가 있습니다, 많은 이윤을 남기기 위해 저렴한
              장비를 사용하다 보면
              <br /> 최악의 상황에는 바닥이 손상되거나 청소 또한 완벽히 되지
              않을수 있습니다.
              <br /> * 아래 버튼 클릭시 실제 판매 링크로 이동됩니다.
            </p>
            <button>실제 가격을 확인해 보세요!</button>
          </div>
        </div>
        <div className={style.content}>
          <div>
            <h2>The highest quality</h2>
            <h3>
              바닥청소기 하나에 700만원,
              <br />
              비싼 장비에는 다 이유가 있어요.
            </h3>
            <p>
              비싼 장비에는 다 이유가 있습니다, 많은 이윤을 남기기 위해 저렴한
              장비를 사용하다 보면
              <br /> 최악의 상황에는 바닥이 손상되거나 청소 또한 완벽히 되지
              않을수 있습니다.
              <br /> * 아래 버튼 클릭시 실제 판매 링크로 이동됩니다.
            </p>
            <button>실제 가격을 확인해 보세요!</button>
          </div>
          <video autoPlay muted loop preload="auto">
            <source
              src={`${process.env.NEXT_PUBLIC_VIDEO_SRC}`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={style.content}>
          <video autoPlay muted loop preload="auto">
            <source
              src={`${process.env.NEXT_PUBLIC_VIDEO_SRC}`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div>
            <h2>The highest quality</h2>
            <h3>
              바닥청소기 하나에 700만원,
              <br />
              비싼 장비에는 다 이유가 있어요.
            </h3>
            <p>
              비싼 장비에는 다 이유가 있습니다, 많은 이윤을 남기기 위해 저렴한
              장비를 사용하다 보면
              <br /> 최악의 상황에는 바닥이 손상되거나 청소 또한 완벽히 되지
              않을수 있습니다.
              <br /> * 아래 버튼 클릭시 실제 판매 링크로 이동됩니다.
            </p>
            <button>실제 가격을 확인해 보세요!</button>
          </div>
        </div>
      </article>
    </div>
  );
}
