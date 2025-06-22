export interface TelegramLoginRequest {
  initData: string;
}

export interface TelegramLoginResponse {
  type: string;
  accessToken: string;
  refreshToken: string;
}