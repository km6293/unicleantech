"use client";

import { useRef } from "react";
import style from "./video.module.css";

type IVideoProps = {
  src: string;
  isTop?: boolean;
  fallbackText?: string;
};

export default function Video({
  src,
  isTop = false,
  fallbackText,
}: IVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <video
      ref={videoRef}
      className={style.video}
      autoPlay
      muted
      loop
      preload={isTop ? "auto" : "metadata"}
      playsInline
    >
      <source src={`${src}.webm`} type="video/webm" />
      <source src={`${src}.mp4`} type="video/mp4" />
      {fallbackText || "해당 비디오를 지원하지 않는 브라우저입니다."}
    </video>
  );
}
