import style from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <section>
        <p> 견적 문의 번호: 1599-1234 </p>
        <p> FAX번호: 0504-123-1234 </p>
        <p>이메일: 유니클린텍@gmail.com</p>
        <hr />
        <address>
          Copyright ©2024 유니클린텍 All rights Reserved | 대표: 박찬엽 |
          사업자등록번호: 123-45-67890
        </address>
      </section>
    </footer>
  );
}
