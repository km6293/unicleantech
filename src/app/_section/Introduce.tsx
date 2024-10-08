import style from "./introduce.module.css";
import Image from "next/image";

export default function Introduce() {
  return (
    <section className={style.introduceContainer}>
      <div className={style.introudeceText}>
        <h2>
          <strong>
            청소 대형 업체의 문제는 대표가 직접 청소를 뛰지 않습니다.
          </strong>
        </h2>
        <h3>유니클린텍은 대표도 직접 청소 , 시공을 진행하고 있습니다.</h3>
        <p>
          배움에는 끝이 없다고 생각 합니다. 청소를 8년째 하고 있지만 아직도 많이
          부족 하다고 느낍니다.
        </p>
        <p>
          대표가 직접 현장을 경험하면서 최신 청소 기법이나 고객에 대한 니즈를
          정확하게 습득하여 팀장들에게 직접 교육 하기에 최상의 서비스를 제공 할
          수 있습니다..
        </p>
      </div>
      <div className={style.employeePhoto}>
        {[1, 2, 3, 4].map((number) => (
          <div key={number}>
            <Image
              alt="image"
              layout="responsive"
              src="/group.jpg"
              width={1160}
              height={900}
            />
            <p>직원</p>
          </div>
        ))}
      </div>
    </section>
  );
}
