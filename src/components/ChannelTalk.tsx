"use client";
import { useEffect } from "react";
import ChannelService from "@/utils/ChannelService";

const ChannelTalk = () => {
  useEffect(() => {
    ChannelService.loadScript();
    ChannelService.boot({
      pluginKey: process.env.NEXT_PUBLIC_PLUGIN_KEY as string,
    });

    return () => {
      ChannelService.shutdown();
    };
  }, []);

  return null;
};

export default ChannelTalk;
