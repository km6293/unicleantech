import style from "./page.module.css";
import { Inquiry } from "./_section";

export default function Page() {
  return (
    <main className={style.mainContainer}>
      <Inquiry />
    </main>
  );
}
