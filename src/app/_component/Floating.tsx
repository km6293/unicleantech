import style from "./floating.module.css";

export default function Floating() {
  return (
    <section className={style.floatingContainer}>
      <svg
        className={style.kakaoIcon}
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="kakao-talk">
          <rect width="800" height="800" fill="#FFE812" />
          <path
            fill="#3C1E1E"
            d="M400 0C179.05 0 0 158.09 0 353.4c0 131.38 88.92 245.36 218.84 305.42-3.16 25.54-8.56 69.25-11.21 84.1-1.75 9.49-7.42 37.22-8.61 47.17 0 0-.17 1.59.83 2.18.97.56 2.25-.14 2.25-.14 29.67-4.12 91.04-31.03 119.94-45.67 28.9-14.65 40.56-24.18 40.56-24.18 13.44 1.13 27.22 1.7 41.41 1.7 220.95 0 400-158.09 400-353.4S620.95 0 400 0z"
          />
        </g>
      </svg>
    </section>
  );
}
