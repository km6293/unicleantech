import style from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={style.header} role="banner">
      <div className={style.logo}>
        <Link href={"/"}>유니클린텍</Link>
      </div>
      <nav>
        <Link href={"/about"}> 청소</Link>
        <Link href={"/about"}> 새집증후군</Link>
      </nav>
    </header>
  );
}
