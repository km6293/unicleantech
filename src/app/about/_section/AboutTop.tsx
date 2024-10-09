import Image from "next/image";
import style from "./aboutTop.module.css";

export default function AboutTop() {
  return (
    <section className={style.aboutTopContainer}>
      <Image src="/group.jpg" alt="top" fill />
      <article>
        <h2>고객님들은 항상 이런 말씀을 하십니다.</h2>
        <h1>&ldquo;보이지 않는 곳도 꼼꼼하게 해주시네요!&ldquo;</h1>
      </article>
    </section>
  );
}
