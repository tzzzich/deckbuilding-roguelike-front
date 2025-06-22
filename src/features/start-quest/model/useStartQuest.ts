import { useMutation } from "@tanstack/react-query";
import { QuestDto, QuestColor, createNewQuest } from "entities/Quest";

export const useStartQuest = () => {
  const mutation = useMutation<QuestDto, Error, QuestColor>({
    mutationFn: createNewQuest,
  });

  return {
    start: (color: QuestColor = "RED") => mutation.mutate(color),
    loading: mutation.isPending,
    quest: mutation.data ?? null,
    error: mutation.error ?? null,
  };
};
