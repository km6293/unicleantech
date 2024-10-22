import Image from "next/image";
import style from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  const DATA = [
    {
      href: "https://www.instagram.com/clean_young_people?igsh=MXFzbDN1MTg0dmVpNA%3D%3D&utm_source=qr",
      src: "/svg/instagram.svg",
      alt: "Instagram",
    },
    {
      href: "https://www.youtube.com/channel/UCfA5jx1Ak5sHsZPatOWd3xg",
      src: "/svg/youtube.svg",
      alt: "Youtube",
    },
    {
      href: "https://www.tiktok.com/@unicleantech?_t=8qG4iWxvLBX&_r=1",
      src: "/svg/naver.svg",
      alt: "Naver",
    },
    {
      href: "https://blog.naver.com/unicleantech",
      src: "/svg/tiktok.svg",
      alt: "Tiktok",
    },
  ];
  return (
    <footer className={style.footer}>
      <section>
        <span>
          <p> 견적 문의 번호: 1599-1234 </p>
          <p> FAX번호: 0504-123-1234 </p>
          <p>이메일: 유니클린텍@gmail.com</p>
        </span>
        <div>
          {DATA.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={item.src} alt={item.alt} width={32} height={32} />
            </Link>
          ))}
        </div>
      </section>
      <hr />
      <address>
        Copyright ©2024 유니클린텍 All rights Reserved | 대표: 박찬엽 |
        사업자등록번호: 123-45-67890
      </address>
    </footer>
  );
}
