import Link from "next/link";
import { VideoPlayer } from "../_component";
import style from "./contact.module.css";

export default function Contact() {
  return (
    <section>
      <div className={style.contactPlaceholder}>
        <h2>CONTACT</h2>
        <p>
          아래 버튼 클릭후 양식대로 적어주시면 최대한 빠르게 상담
          도와드리겠습니다.
        </p>
        <div>
          <Link href="/contact">견적 의뢰하기</Link>
          <Link href="/">가맹 문의하기</Link>
        </div>
      </div>
      <div className={style.contactContainer}>
        <VideoPlayer src={`${process.env.NEXT_PUBLIC_VIDEO_SRC}`} />
      </div>
    </section>
  );
}
