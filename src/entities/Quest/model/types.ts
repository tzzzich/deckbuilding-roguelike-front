export type QuestColor = "RED" | "BLUE" | "GREEN";

export interface RoomEdge {
  fromId: string;
  toId: string;
}

export type RoomStatus = "CURRENT" | "POTENTIAL" | "VISITED" | "NORMAL";
export type RoomType = "EVENT_ROOM" | "ENCOUNTER_ROOM" | "SHOP_ROOM" |  "RANDOM_ROOM" | "REST_ROOM";

export interface Room {
  id: string;
  type: RoomType;
  status: RoomStatus;
  step: number;
  line: number;
}

export interface LocationShort {
  id: string;
  step: number;
}

export interface LocationDetailed extends LocationShort {
  currentRoom: string | null;
  rooms: Room[];
  edges: RoomEdge[];
}

export interface QuestDto {
  id: string;
  name: string;
  description: string;
  locations: LocationShort[];
  currentLocation: LocationDetailed;
}
