import {
  localStorageGetCity,
  localStorageGetCountryCode,
  localStorageGetUnits,
  localStorageSetCity,
  localStorageSetCountryCode,
  localStorageSetUnits,
} from "@/utils/local-storage-helpers";
import { create } from "zustand";

type Store = {
  units: string;
  setUnits: (unitsP: string) => void;
  city: string;
  setCity: (cityP: string) => void;
  countryCode: string;
  setCountryCode: (countryCodeP: string) => void;
};

export const useStore = create<Store>()((set) => ({
  units: localStorageGetUnits() ?? "metric",
  setUnits: (unitsP: string) => {
    set((state) => ({ units: unitsP }));
    localStorageSetUnits(unitsP);
  },

  city: localStorageGetCity() ?? "London",
  setCity: (cityP: string) => {
    set((state) => ({ city: cityP }));
    localStorageSetCity(cityP);
  },

  countryCode: localStorageGetCountryCode() ?? "GB",
  setCountryCode: (countryCodeP: string) => {
    set((state) => ({ countryCode: countryCodeP }));
    localStorageSetCountryCode(countryCodeP);
  },
}));
