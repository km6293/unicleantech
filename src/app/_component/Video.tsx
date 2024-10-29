"use client";

import { useEffect, useRef } from "react";
import style from "./video.module.css";

type IVideoProps = {
  src: string;
  fallbackText?: string;
};

export default function Video({ src, fallbackText }: IVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className={style.video}
      muted
      loop
      preload="auto"
      playsInline
    >
      <source src={`${src}.webm`} type="video/webm" />
      <source src={`${src}.mp4`} type="video/mp4" />
      {fallbackText || "해당 비디오를 지원하지 않는 브라우저입니다."}
    </video>
  );
}
