import { localStorageGetUnits, localStorageSetUnits } from "@/utils/local-storage-helpers";
import { create } from "zustand";

type Store = {
  units: string;
  setUnits: (unitsP: string) => void;
};

export const useStore = create<Store>()((set) => ({
  units: localStorageGetUnits() ?? "metric",
  setUnits: (unitsP: string) => {
    set((state) => ({ units: unitsP }));
    localStorageSetUnits(unitsP);
  },
}));

