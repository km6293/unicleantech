import { Video } from "../_component";
import style from "./backgroundVideo.module.css";

export default function page() {
  return (
    <>
      <div className={style.videoPlaceholder}></div>
      <section className={style.videoContainer}>
        <Video src={`${process.env.NEXT_PUBLIC_VIDEO_SRC}`} />

        <article className={style.videoDetail}>
          <p>&ldquo;유니클린텍은 청소업체들을 굉장히 싫어합니다.&ldquo;</p>
          <span>
            <h3>세정력만 강한 독성 화공약품..</h3>
            <h3>머리속엔 청소비용과 추가요금 생각 뿐..</h3>
          </span>
          <span>
            <h1>유니클린텍은 왜 다를까요?</h1>
            <h1>정확히 3분이면 확인 가능 합니다.</h1>
          </span>
        </article>
      </section>
    </>
  );
}
