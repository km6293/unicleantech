declare global {
  interface Window {
    ChannelIO?: IChannelIO;
    ChannelIOInitialized?: boolean;
  }
}

interface IChannelIO {
  (...args: any[]): void;
  q?: any[];
  c?: (...args: any[]) => void;
}

class ChannelService {
  loadScript() {
    if (window.ChannelIOInitialized) {
      console.log("ChannelIO script already loaded.");
      return;
    }

    (function () {
      const w = window;
      if (w.ChannelIO) {
        return w.console.error("ChannelIO script included twice.");
      }
      const ch: IChannelIO = function () {
        ch.c?.(arguments);
      };
      ch.q = [];
      ch.c = function (args) {
        ch.q?.push(args);
      };
      w.ChannelIO = ch;

      function l() {
        if (w.ChannelIOInitialized) {
          return;
        }
        w.ChannelIOInitialized = true;
        const s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
        const x = document.getElementsByTagName("script")[0];
        if (x.parentNode) {
          x.parentNode.insertBefore(s, x);
        }
      }

      if (document.readyState === "complete") {
        l();
      } else {
        w.addEventListener("DOMContentLoaded", l);
        w.addEventListener("load", l);
      }
    })();
  }

  // ChannelTalk 부팅
  boot(
    option: { pluginKey: string },
    callback?: (error: Error | null, user: any) => void
  ) {
    window.ChannelIO?.("boot", option, callback);
  }

  // 기타 메서드
  shutdown() {
    window.ChannelIO?.("shutdown");
  }

  showMessenger() {
    window.ChannelIO?.("showMessenger");
  }

  hideMessenger() {
    window.ChannelIO?.("hideMessenger");
  }
}

export default new ChannelService();
