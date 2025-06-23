import { ROUTES } from "@/constants/router";
import { useMutation } from "@tanstack/react-query";
import { QuestDto, QuestColor, createNewQuest } from "entities/Quest";
import { useQuestStore } from "entities/Quest/model/questStore";
import { useNavigate, generatePath } from "react-router-dom";

export const useStartQuest = () => {
  const navigate = useNavigate();
  const setQuest = useQuestStore((s) => s.setQuest);

  const mutation = useMutation<QuestDto, Error, QuestColor>({
    mutationFn: createNewQuest,
    onSuccess: (quest) => {
      setQuest(quest);
      const url = generatePath(ROUTES.QUEST_LOCATION, {
        questId: quest.id,
        locationId: quest.currentLocation.id,
      });
      navigate(url);
    },
  });

  return {
    start: (color: QuestColor = "RED") => mutation.mutate(color),
    loading: mutation.isPending,
    quest: mutation.data ?? null,
    error: mutation.error ?? null,
  };
};
