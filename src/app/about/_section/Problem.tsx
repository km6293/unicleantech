import style from "./problem.module.css";
import Image from "next/image";

export default function Problem() {
  return (
    <section className={style.problemContainer}>
      <Image src="/group.jpg" alt="top" fill />
      <article>
        <p>
          청소업계에서 8년간 일하면서 청소업계는 문제가 많다는 점을 수도 없이
          느꼈습니다.
        </p>
        <span>
          <p>
            세정력만 강력한 독성 화공약품 .. 청소권을 하청에게 판매하는 업체들..
          </p>
          <p>
            한 걸레로 여러 구역 청소 .. 세탁과 건조도 되지 않는 걸레 재사용..
          </p>
          <p>과도한 추가요금 .. as도 없는 업체들 ..</p>
        </span>
        <h1>“저희 유니클린텍은 이 모든 것을 해소 하였습니다.”</h1>
        <h2>
          보이는 곳만 깨끗하게 해놓고 나몰라라 하는게 청소 업계의 실태 입니다.
        </h2>
        <h2>청소의 완성은 보이지 않는 곳도 깨끗 해야 합니다.</h2>
        <span>
          <h2>8년간 느낀점을 토대로 청소업계의 문제점을 해소하고</h2>
          <h2>
            본질에 충실하는 청소업체를 만들자 하여 지금의 유니클린텍이 탄생
            하였습니다.
          </h2>
        </span>
      </article>
    </section>
  );
}
