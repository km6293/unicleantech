"use client";

import { useEffect, useState } from "react";
import style from "./header.module.css";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => setIsScrolled(window.scrollY > 20);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${style.header} ${isScrolled ? style.scrolled : ""}`}
      role="banner"
    >
      <Link className={style.logo} href={"/"}>
        유니클린텍
      </Link>
      <nav>
        <Link href={"/"}> 청소</Link>
        <Link href={"/"}> 새집증후군</Link>
      </nav>
    </header>
  );
}
