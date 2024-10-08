import style from "./page.module.css";
import {
  BackgroundVideo,
  GroupPhoto,
  Review,
  Quality,
  Contact,
  Introduce,
  Youtube,
} from "./_section";
import ChannelTalk from "@/components/ChannelTalk";

export default function page() {
  return (
    <main className={style.mainContainer}>
      <BackgroundVideo />
      <GroupPhoto />
      <Review />
      <Introduce />
      <Quality />
      <Youtube />
      <Contact />
      <ChannelTalk />
    </main>
  );
}
