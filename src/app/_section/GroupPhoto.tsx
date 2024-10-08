import Image from "next/image";
import style from "./groupPhoto.module.css";

export default function GroupPhoto() {
  return (
    <section className={style.groupPhoto}>
      <Image alt="group photo" src="/group2.jpg" fill />
    </section>
  );
}
