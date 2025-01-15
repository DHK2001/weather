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
    set(() => ({ units: unitsP }));
    localStorageSetUnits(unitsP);
  },

  city: localStorageGetCity() ?? "London",
  setCity: (cityP: string) => {
    set(() => ({ city: cityP }));
    localStorageSetCity(cityP);
  },

  countryCode: localStorageGetCountryCode() ?? "GB",
  setCountryCode: (countryCodeP: string) => {
    set(() => ({ countryCode: countryCodeP }));
    localStorageSetCountryCode(countryCodeP);
  },
}));
