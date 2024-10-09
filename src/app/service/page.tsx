import { Incomparable, Pride, Range } from "./_section";
import style from "./page.module.css";

export default function Page() {
  return (
    <main className={style.mainContainer}>
      <Pride />
      <Range />
      <Incomparable />
    </main>
  );
}
