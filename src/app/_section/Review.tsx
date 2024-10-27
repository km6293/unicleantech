import { Carousel } from "../_component";
import style from "./review.module.css";
import Image from "next/image";

export default function Review() {
  const carouselData = [
    "/group.jpg",
    "/group.jpg",
    "/group.jpg",
    "/group.jpg",
    "/group.jpg",
    "/group.jpg",
    "/group.jpg",
    "/group.jpg",
  ];
  return (
    <section className={style.reviewContainer}>
      <div className={style.reviewText}>
        <h2>
          <strong>
            저희는 고객에게 단 한번도 리뷰 유도를 하지 않았습니다.
          </strong>
        </h2>
        <h2>유니클린텍 고객이 자발적으로 작성한 100% 실제리뷰</h2>
      </div>

      <Carousel>
        {carouselData.map((item, index) => (
          <div key={index}>
            <Image
              alt="image"
              src={item}
              width={300}
              height={500}
              style={{ width: "100%", height: "300px" }}
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
}
