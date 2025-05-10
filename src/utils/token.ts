export const getAccessToken = () => localStorage.getItem("access_token");
export const setAccessToken = (token: string) =>
  localStorage.setItem("access_token", token);
export const removeAccessToken = () => localStorage.removeItem("access_token");
