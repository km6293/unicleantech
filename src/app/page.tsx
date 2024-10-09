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
      <GroupPhoto />
      <Review />
      <Introduce />
      <QualityExport />
      <Youtube />
    </main>
  );
}
