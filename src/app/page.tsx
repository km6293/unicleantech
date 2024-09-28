import style from "./page.module.css";
import {
  BackgroundVideo,
  Intro,
  Quality,
  Offer,
  Client,
  Work,
  Contact,
} from "./_component";

export default function page() {
  return (
    <main className={style.mainContainer}>
      <BackgroundVideo />
      <Intro />
      <Quality />
      <Offer />
      <Client />
      <Work />
      <Contact />
    </main>
  );
}
