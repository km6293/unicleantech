import { Video } from "@/app/_component";
import style from "./quality.module.css";

interface dataProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  videoFirst: boolean;
}

export default function Quality(data: dataProps[]) {
  return (
    <section className={style.imageBackground}>
      <div className={style.contentContainer}>
        {data.map((item, index) => (
          <article className={style.content} key={index}>
            {item.videoFirst && (
              <Video src={`${process.env.NEXT_PUBLIC_VIDEO_SRC}`} />
            )}
            <div>
              <h2>{item.title}</h2>
              <h3>{item.subtitle}</h3>
              <p>{item.description}</p>
              <button>{item.buttonText}</button>
            </div>
            {!item.videoFirst && (
              <Video src={`${process.env.NEXT_PUBLIC_VIDEO_SRC}`} />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
