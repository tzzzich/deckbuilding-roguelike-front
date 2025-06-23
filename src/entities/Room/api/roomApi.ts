import { RoomType } from "entities/Quest";
import { api } from "shared/api/axiosInstance";

export interface RoomContentDto {
  id: string;
  roomId: string;
  type: RoomType;
}

export const getRoomContent = (roomId: string) =>
  api.get<RoomContentDto>(`/room/getContent/${roomId}`).then((r) => r.data);
