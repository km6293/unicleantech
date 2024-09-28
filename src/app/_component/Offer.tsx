import style from "./offer.module.css";

export default function Offer() {
  return (
    <section className={style.opperContainer}>
      <h2>WHAT DO WE OFFER</h2>
      <h3>견고히 쌓아올린 노하우를 바탕으로,</h3>
      <p>
        저희에게 청소를 한번 받아보신다면, 아래 나열된 수많은 장점이 한꺼번에
        이해가 되실 거예요 말 그대로 전화 한 통이면
        <br />
        청소하기 전에 들었던 수많은 고민이 한꺼번에 해결되는 경험을 하실 수
        있습니다, 그중 제일은 바로 깔끔함 이죠.
      </p>
      <div>
        <article>
          <h2>본사 직원 방문</h2>
          <p>본사 직영 전문가들이 방문</p>
        </article>
        <article>
          <h2>고가의 장비</h2>
          <p>660만원 이상의 장비 사용</p>
        </article>
        <article>
          <h2>합리적인 가격</h2>
          <p>시중 보다 저렴한 가격</p>
        </article>
        <article>
          <h2>유지관리</h2>
          <p>체계적인 유지관리</p>
        </article>
        <article>
          <h2>A/S 보장</h2>
          <p>끝까지 책임지는 A/S 시스템</p>
        </article>
        <article>
          <h2>안전한 세제</h2>
          <p>세계에서 인정받은 안전 세제</p>
        </article>
        <article>
          <h2>청소 사진 제공</h2>
          <p>깔끔함을 사진으로 제공</p>
        </article>
        <article>
          <h2>원활한 소통</h2>
          <p>답답함 없는 고객 소통</p>
        </article>
      </div>
    </section>
  );
}
