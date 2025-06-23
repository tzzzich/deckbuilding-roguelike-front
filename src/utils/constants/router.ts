import { RoomType } from "entities/Quest";

export const ROUTES = {
  ROOT: "/",
  LOGIN: "/login",
  QUEST: "/quest/:questId",
  QUEST_LOCATION: "/quest/:questId/location/:locationId",
  ENCOUNTER: "/encounter/:id",
  EVENT: "/event/:id",
  SHOP: "/shop/:id",
  REST: "/rest/:id",
};
export const roomTypeToRoute: Record<RoomType, string> = {
  ENCOUNTER_ROOM: ROUTES.ENCOUNTER,
  EVENT_ROOM: ROUTES.EVENT,
  SHOP_ROOM: ROUTES.SHOP,
  REST_ROOM: ROUTES.REST,
  RANDOM_ROOM: ROUTES.QUEST,
} as const;
