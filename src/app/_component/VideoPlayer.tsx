"use client";
import React, { useRef } from "react";
import style from "./videoPlayer.module.css";

type IVideoProps = {
  src: string;
  isTop?: boolean;
  fallbackText?: string;
};

export default function VideoPlayer({
  src,
  // isTop = false,
  fallbackText,
}: IVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  // const [hasPlayed, setHasPlayed] = useState(false);

  // useEffect(() => {
  //   const videoElement = videoRef.current;

  //   const handlePlayPause = (entries: IntersectionObserverEntry[]) => {
  //     entries.forEach((entry) => {
  //       if (videoElement) {
  //         if (entry.isIntersecting && !hasPlayed) {
  //           videoElement.play();
  //           setHasPlayed(true);
  //         } else if (!entry.isIntersecting && hasPlayed) {
  //           videoElement.pause();
  //           setHasPlayed(false);
  //         }
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(handlePlayPause, {
  //     rootMargin: "0px",
  //     threshold: 1.0,
  //   });

  //   if (videoElement) {
  //     observer.observe(videoElement);
  //   }

  //   return () => {
  //     if (videoElement) {
  //       observer.unobserve(videoElement);
  //     }
  //   };
  // }, [hasPlayed, src]);

  return (
    <video
      autoPlay
      ref={videoRef}
      className={style.videoContent}
      muted
      loop
      // preload={isTop ? "auto" : "metadata"}
      playsInline
    >
      {/* <source src={`${src}.webm`} type="video/webm" /> */}
      <source src={`${src}.mp4`} type="video/mp4" />
      {fallbackText || "해당 비디오를 지원하지 않는 브라우저입니다."}
    </video>
  );
}
