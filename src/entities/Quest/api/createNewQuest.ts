import { api } from "shared/api/axiosInstance";
import { QuestColor, QuestDto } from "../model/types";

export const createNewQuest = (color: QuestColor = "RED") =>
  api
    .post<QuestDto>(`/quest/createNewQuest/${color}`)
    .then((r) => r.data);