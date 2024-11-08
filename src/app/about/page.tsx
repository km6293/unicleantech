import style from "./page.module.css";
import { AboutTop, Problem, QualityExport } from "./_section";

export default function Page() {
  return (
    <main className={style.mainContainer}>
      <AboutTop />
      <Problem />
      <QualityExport />
    </main>
  );
}
