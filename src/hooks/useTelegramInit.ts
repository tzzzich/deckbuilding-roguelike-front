/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/auth";

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
    onSuccess: ({ accessToken }) => useAuthStore.getState().login(accessToken),
  });
