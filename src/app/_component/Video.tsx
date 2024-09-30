import style from "./video.module.css";

type IVideoProps = {
  src: string;
  fallbackText?: string;
};

export default function Video({ src, fallbackText }: IVideoProps) {
  return (
    <video
      className={style.video}
      autoPlay
      muted
      loop
      preload="auto"
      playsInline
    >
      <source src={src} type="video/mp4" />
      {fallbackText || "해당 비디오를 지원하지 않는 브라우저입니다."}
    </video>
  );
}
