import style from "./page.module.css";
import {
  BackgroundVideo,
  Intro,
  Quality,
  Offer,
  Client,
  Work,
  Contact,
  // Floating,
} from "./_section";
import ChannelTalk from "@/components/ChannelTalk";

export default function page() {
  return (
    <main className={style.mainContainer}>
      <BackgroundVideo />
      <Intro />
      <Quality />
      <Offer />
      <Client />
      <Work />
      <Contact />
      {/* <Floating /> */}
      <ChannelTalk />
    </main>
  );
}
