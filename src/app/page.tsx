import style from "./page.module.css";
import { BackgroundVideo, Intro, Quality } from "./_component";

export default function page() {
  return (
    <main className={style.mainContainer}>
      <BackgroundVideo />
      <Intro />
      <Quality />
    </main>
  );
}
