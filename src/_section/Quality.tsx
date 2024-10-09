import { Video } from "@/app/_component";
import style from "./quality.module.css";
import Image from "next/image";

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
          <article className={style.content} key={index}>
            {item.first && item.type === "video" && <Video src={item.src} />}
            {item.first && item.type === "image" && (
              <Image src={item.src} alt={item.title} fill />
            )}
            <div>
              <h2>{item.title}</h2>
              <h3>{item.subtitle}</h3>
              <p>{item.description}</p>
              <button>{item.buttonText}</button>
            </div>
            {!item.first && item.type === "video" && <Video src={item.src} />}
            {!item.first && item.type === "image" && (
              <Image src={item.src} alt={item.title} fill />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
