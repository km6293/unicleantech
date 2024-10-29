"use client";

import React, { useEffect, useRef, useState } from "react";
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
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handlePlayPause = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (videoElement) {
          if (entry.isIntersecting) {
            if (!hasPlayed) {
              videoElement.play();
              setHasPlayed(true);
            }
          } else {
            videoElement.pause();
            setHasPlayed(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handlePlayPause, {
      rootMargin: "5%",
    });

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [hasPlayed, src]);

  return (
    <video
      ref={videoRef}
      className={style.video}
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
