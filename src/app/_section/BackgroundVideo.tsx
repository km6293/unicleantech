import { Video } from "../_component";
import style from "./backgroundVideo.module.css";

export default function page() {
  return (
    <>
      <div className={style.videoPlaceholder}></div>
      <section className={style.videoContainer}>
        <Video src={`${process.env.NEXT_PUBLIC_VIDEO_SRC}`} />

        <article className={style.videoDetail}>
          <p>Super Clean - Master</p>
          <span>
            <h3>
              <b>13년간 13,000건</b>의 청소 경력
            </h3>
            <h3>
              <b>총합 1500만원 이상</b>의 전문 장비 사용
            </h3>
          </span>
          <h1>축하드립니다, 청소업체 비교할 시간을 아끼셨네요</h1>
        </article>
      </section>
    </>
  );
}
