import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/auth";

export const useTelegramInit = () =>
  useMutation({
    mutationFn: async () => {
      const tg = window.Telegram?.WebApp;
      if (!tg) throw new Error("Telegram WebApp not found");
      const initData = tg.initData;
      //   return (await api.post("/auth/telegram", { initData })).data as {
      //     accessToken: string;
      //   };
      return { accessToken: initData };
    },
    onSuccess: ({ accessToken }) => useAuthStore.getState().login(accessToken),
  });
