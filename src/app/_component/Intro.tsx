import Link from "next/link";
import style from "./intro.module.css";

export default function Intro() {
  return (
    <section className={style.introContainer}>
      <div className={style.introLeft}>
        <p>실력있는,</p>
        <p>퀄리티가 있는,</p>
        <p>안전한,</p>
        <p>깔끔하게 마무리하는,</p>
      </div>
      <div className={style.introRight}>
        <article className={style.introDetail}>
          <h2>청소 업체를 찾고 계신가요?</h2>
          <h3>
            축하드립니다, 아래 링크만 클릭하셔도 다른 청소업체는 비교 안하셔도
            될만큼 마음이 가실거에요.
          </h3>
          <Link href={"/"}>더 알아보기</Link>
        </article>
        <article className={style.introDetail}>
          <h2>여러가지 청소업체를 비교하시느라 지치셨죠?</h2>
          <h3>
            12년간 10,000건 이상의 청소를 다녀보면서 가장 크게 깨달은건 바로
            고객님을 중심으로 건강을 생각하고, 가격을 생각하고, 퀄리티를
            생각하여 고객 만족도를 최상으로 끌어 올리는 것 이었습니다. 아래
            링크를 클릭하셔서 저희의 이야기를 살펴보세요.
          </h3>
          <Link href={"/"}>더 알아보기</Link>
        </article>
        <article className={style.introDetail}>
          <h2>여러가지 청소업체를 비교하시느라 지치셨죠?</h2>
          <h3>
            12년간 10,000건 이상의 청소를 다녀보면서 가장 크게 깨달은건 바로
            고객님을 중심으로 건강을 생각하고, 가격을 생각하고, 퀄리티를
            생각하여 고객 만족도를 최상으로 끌어 올리는 것 이었습니다. 아래
            링크를 클릭하셔서 저희의 이야기를 살펴보세요.
          </h3>
          <Link href={"/"}>더 알아보기</Link>
        </article>
      </div>
    </section>
  );
}
