import style from "./page.module.css";
import {
  BackgroundVideo,
  GroupPhoto,
  Review,
  QualityExport,
  Introduce,
  Youtube,
} from "./_section";

export default function page() {
  return (
    <main className={style.mainContainer}>
      <BackgroundVideo />
      <QualityExport />
      <GroupPhoto />
      <Introduce />
      <Review />
      <Youtube />
    </main>
  );
}
