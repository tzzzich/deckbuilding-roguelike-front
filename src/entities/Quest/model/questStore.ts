import { create } from "zustand";
import { QuestDto, LocationDetailed } from "./types";

interface QuestState {
  quest: QuestDto | null;
  viewLocation: LocationDetailed | null;
  setQuest: (q: QuestDto) => void;
  setViewLocation: (v: LocationDetailed) => void;
  clear: () => void;
}

export const useQuestStore = create<QuestState>((set) => ({
  quest: null,
  viewLocation: null,

  setQuest: (quest) => set({ quest, viewLocation: quest.currentLocation }),
  setViewLocation: (viewLocation) => set({ viewLocation }),

  clear: () => set({ quest: null, viewLocation: null }),
}));
