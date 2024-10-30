"use client";

import { useEffect, useState } from "react";
import style from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "@/../public/svg/menu.svg";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const isAlwaysScrolled = pathname === "/service" || pathname === "/contact";

    if (isAlwaysScrolled || isMenuOpen || window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, isMenuOpen]);

  const menuItems = [
    { label: "이건 뭐야?", url: "/about" },
    { label: "서비스 소개", url: "/service" },
    { label: "문의하기", url: "/contact" },
  ];

  return (
    <header role="banner">
      <div
        className={`${style.header} ${isScrolled ? style.scrolled : ""} ${
          isMenuOpen ? style.open : ""
        } `}
      >
        <Link
          href="/"
          className={`${style.logoContainer} ${
            isScrolled ? style.logoScrolled : ""
          }`}
        >
          <Image
            src="/svg/logo-black.svg"
            alt="logo"
            className={style.logo}
            width={150}
            height={100}
          />
          <Image
            src="/svg/logo-white.svg"
            alt="logo"
            className={style.logo}
            width={150}
            height={100}
          />
        </Link>
        <nav>
          {menuItems.map((item) => (
            <Link key={item.label} href={item.url}>
              {item.label}
            </Link>
          ))}
          <MenuIcon
            alt="menu"
            className={style.menu}
            fill={isScrolled ? "black" : "white"}
            width={30}
            height={30}
            onClick={toggleMenu}
          />

          {/* <Image
            src="/svg/menu.svg"
            alt="menu"
            className={style.menu}
            width={30}
            height={30}
            onClick={toggleMenu}
          /> */}
        </nav>
      </div>
      <div
        className={`${style.mobileBackground} ${isMenuOpen ? style.open : ""}`}
      >
        <ul>
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.url}
              onClick={handleMenuItemClick}
            >
              <li>{item.label}</li>
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
}
