import { api } from "shared/api/axiosInstance";
import { QuestDto, LocationDetailed } from "../model/types";

export const getQuest = (questId: string) =>
  api.get<QuestDto>(`/quest/${questId}`).then((r) => r.data);

export const getQuestLocation = (locationId: string) =>
  api
    .get<LocationDetailed>(`/location/${locationId}`)
    .then((r) => r.data);