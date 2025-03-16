"use client";

import { useRef, useState, useEffect } from "react";
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
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <article
      className={`${style.content} ${isVisible ? style.visible : ""}`}
      ref={videoRef}
    >
      {(isMobile || item.first) && item.type === "video" && (
        <div>
          <VideoPlayer src={item.src} />
        </div>
      )}
      {(isMobile || item.first) && item.type === "image" && (
        <Image src={item.src} alt={item.title} fill />
      )}

      <div>
        <h2>{item.title}</h2>
        <h3>{item.subtitle}</h3>
        <p>{item.description}</p>
        <button>{item.buttonText}</button>
      </div>

      {!isMobile && !item.first && item.type === "video" && (
        <div>
          <VideoPlayer src={item.src} />
        </div>
      )}
      {!isMobile && !item.first && item.type === "image" && (
        <Image src={item.src} alt={item.title} fill />
      )}
    </article>
  );
}
