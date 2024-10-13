import style from "./youtube.module.css";
import Image from "next/image";

export default function Youtube() {
  return (
    <section className={style.youtubeContainer}>
      <div className={style.youtubeText}>
        <h2>
          <strong>유니클린텍의 청소 과정을 유튜브에서 확인 해 보세요.</strong>
        </h2>
      </div>
      <div className={style.youtubeVideo}>
        {[1, 2, 3, 4].map((number) => (
          <div key={number}>
            <Image
              alt="image"
              src="/group.jpg"
              width={1160}
              height={900}
              style={{ width: "100%", height: "auto" }}
            />
            <p>1줄 설명</p>
          </div>
        ))}
      </div>
    </section>
  );
}
