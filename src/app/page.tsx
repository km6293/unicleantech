import style from "./page.module.css";
import {
  BackgroundVideo,
  GroupPhoto,
  Review,
  Quality,
  Introduce,
  Youtube,
} from "./_section";

export default function page() {
  return (
    <main className={style.mainContainer}>
      <BackgroundVideo />
      <GroupPhoto />
      <Review />
      <Introduce />
      <Quality />
      <Youtube />
    </main>
  );
}
