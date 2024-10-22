import Link from "next/link";
import style from "./incomparable.module.css";

export default function Incomparable() {
  return (
    <section className={style.IncomparableContainer}>
      <h2>유니클린텍이 타 업체와 비교 불가능한 이유</h2>
      <Link href="/about">지금 보러가기</Link>
    </section>
  );
}
