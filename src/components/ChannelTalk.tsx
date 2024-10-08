"use client";
import { useEffect } from "react";
import channelService from "@/utils/channelService";

const ChannelTalk = () => {
  useEffect(() => {
    channelService.loadScript();
    channelService.boot({
      pluginKey: process.env.NEXT_PUBLIC_PLUGIN_KEY as string,
    });

    return () => {
      channelService.shutdown();
    };
  }, []);

  return null;
};

export default ChannelTalk;
