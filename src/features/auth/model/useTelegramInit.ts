import { setAccessToken } from "@/utils/token";
import { useMutation } from "@tanstack/react-query";
import { TelegramLoginRequest, TelegramLoginResponse } from "entities/Auth";
import { api } from "shared/api/axiosInstance";

export const useTelegramInit = () =>
  useMutation<TelegramLoginResponse, Error, void>({
    mutationFn: async () => {
        const tg = window.Telegram?.WebApp;
        if (!tg) throw new Error("Telegram WebApp not found");
        const initData = tg.initData;
        const { data } = await api.post<TelegramLoginResponse>(
        "/auth/login/telegram",
        { initData } satisfies TelegramLoginRequest,
      );
      return data;
    },
    onSuccess: ({ accessToken }: Pick<TelegramLoginResponse, "accessToken">) => setAccessToken(accessToken),
    onError: (error) => {
      console.error(error);
    },
  });
