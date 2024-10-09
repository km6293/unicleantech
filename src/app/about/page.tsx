import style from "./page.module.css";
import { AboutTop, Problem } from "./_section";
import { Quality } from "../_section";

export default function Page() {
  return (
    <main className={style.mainContainer}>
      <AboutTop />
      <Problem />
      <Quality />
    </main>
  );
}
