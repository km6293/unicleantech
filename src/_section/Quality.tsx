"use client";

import { useEffect, useRef, useState } from "react";
import { VideoPlayer } from "@/app/_component";
import style from "./quality.module.css";
import Image from "next/image";
import { useIsMobile } from "@/hooks/isMobile";

interface DataProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  first: boolean;
  type: string;
  src: string;
}
interface QualityProps {
  data: DataProps[];
}

export default function Quality({ data }: QualityProps) {
  return (
    <section className={style.imageBackground}>
      <div className={style.contentContainer}>
        {data.map((item, index) => (
          <VideoItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

function VideoItem({ item }: { item: DataProps }) {
  const videoRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <article className={style.content} ref={videoRef}>
      {(isMobile || item.first) && item.type === "video" && (
        <div
          className={`${style.videoWrapper} ${isVisible ? style.visible : ""}`}
        >
          <VideoPlayer src={item.src} />
        </div>
      )}
      {(isMobile || item.first) && item.type === "image" && (
        <Image src={item.src} alt={item.title} fill />
      )}

      <div className={`${style.textWrapper} ${isVisible ? style.visible : ""}`}>
        <h2>{item.title}</h2>
        <h3>{item.subtitle}</h3>
        <p>{item.description}</p>
        <button>{item.buttonText}</button>
      </div>

      {/* 모바일이 아니고 first가 아닐 경우에만 오른쪽 배치 */}
      {!isMobile && !item.first && item.type === "video" && (
        <div
          className={`${style.videoWrapper} ${isVisible ? style.visible : ""}`}
        >
          <VideoPlayer src={item.src} />
        </div>
      )}
      {!isMobile && !item.first && item.type === "image" && (
        <Image src={item.src} alt={item.title} fill />
      )}
    </article>
  );
}
