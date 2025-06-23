import { RoomType } from "entities/Quest";
import {
  Group,
  Shop,
  HelpOption,
  Restroom,
  Icon,
  Trigger,
} from "grommet-icons";

export const iconMap: Record<RoomType, Icon> = {
  EVENT_ROOM: Group,
  ENCOUNTER_ROOM: Trigger,
  SHOP_ROOM: Shop,
  RANDOM_ROOM: HelpOption,
  REST_ROOM: Restroom,
};
