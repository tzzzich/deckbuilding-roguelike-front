/* eslint-disable @typescript-eslint/ban-ts-comment */
import { setAccessToken } from "@/utils/token";
import { useMutation } from "@tanstack/react-query";

export const useTelegramInit = () =>
  useMutation({
    mutationFn: async () => {
      try {
        const tg = window.Telegram?.WebApp;
        if (!tg) throw new Error("Telegram WebApp not found");
        const initData = tg.initData;
        //   return (await api.post("/auth/telegram", { initData })).data as {
        //     accessToken: string;
        //   };
        return { accessToken: initData };
      } catch (error) {
        console.log(error);
      }
    },
    //@ts-expect-error
    //
    onSuccess: ({ accessToken }) => setAccessToken(accessToken),
    onError: (error) => {
      console.error(error);
    },
  });
