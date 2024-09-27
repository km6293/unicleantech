"use client";

import style from "./page.module.css";
// import Video from "next-video";
import Video from "next-video";
// import getStarted from "/videos/video.mp4";

export default function page() {
  return (
    <main>
      <section className={style.videoContainer}>
        {/* <video className={style.video} autoPlay muted loop preload="auto">
          <source
            // src={`${process.env.NEXT_PUBLIC_VIDEO_SRC}`}
            src={"/public/videos/video.mp4"}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video> */}
        <Video src={"/videos/video.mp4"} />

        <article className={style.videoDetail}>
          <p>Super Clean - Master</p>
          <h3>13년간 13,000건의 청소 경력</h3>
          <h3>총합 1500만원 이상의 전문 장비 사용</h3>
          <h1>축하드립니다, 청소업체 비교할 시간을 아끼셨네요</h1>
        </article>
      </section>
    </main>
  );
}
