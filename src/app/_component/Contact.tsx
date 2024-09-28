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
          <button>견적 의뢰하기</button>
          <button>가맹 문의하기</button>
        </div>
      </div>
      <div className={style.contactContainer}>
        <video className={style.video} autoPlay muted loop preload="auto">
          <source
            src={`${process.env.NEXT_PUBLIC_VIDEO_SRC}`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
