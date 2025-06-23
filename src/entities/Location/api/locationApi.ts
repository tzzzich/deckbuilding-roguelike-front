import { api } from "shared/api/axiosInstance";

export const enterRoom = (locationId: string, roomId: string) =>
  api.post(`/location/${locationId}/rooms/${roomId}/enter`);
