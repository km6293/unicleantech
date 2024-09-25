import Link from "next/link";
import { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <>
      <div>이 페이지는 존재하지 않습니다. 다른 페이지를 검색해 보세요.</div>
      <Link href="/"></Link>
    </>
  );
};

export default NotFound;
