"use client";

import { useEffect, useState } from "react";
import style from "./header.module.css";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = () => setIsScrolled(window.scrollY > 20);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // const move = (url: string) => {
  //   router.push(url);
  //   setIsMenuOpen(false);
  // };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { label: "이건 뭐야?", url: "/about" },
    { label: "서비스 소개", url: "/service" },
    { label: "채용", url: "/career" },
    { label: "문의하기", url: "/contact" },
  ];

  return (
    <header role="banner">
      <div
        className={`${style.header} ${isScrolled ? style.scrolled : ""} ${
          isMenuOpen ? style.open : ""
        } `}
      >
        <Image
          src={`${isScrolled ? "/logo-black.svg" : "/logo-white.svg"}`}
          alt="logo"
          className={style.logo}
          width={150}
          height={100}
          onClick={() => move("/")}
        />
        <nav>
          {menuItems.map((item) => (
            <button key={item.label} onClick={() => move(item.url)}>
              {item.label}
            </button>
          ))}
          <Image
            src="/menu.svg"
            alt="menu"
            className={style.menu}
            width={30}
            height={30}
            onClick={toggleMenu}
          />
        </nav>
      </div>
      <div
        className={`${style.mobileBackground} ${isMenuOpen ? style.open : ""}`}
      >
        <ul>
          {menuItems.map((item) => (
            <Link key={item.label} href={item.url}>
              {item.label}
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
}
