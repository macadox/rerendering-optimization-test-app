import { create } from "zustand";

interface Store {
  name: string;
  setName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  address: {
    street: string;
    postalCode: string;
  };
  irrelevantText: string;
  setIrrelevantText: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useAppState = create<Store>()((set) => ({
  name: "Maciek",
  email: "macadox@gmail.com",
  address: {
    street: "Trocinowa 44",
    postalCode: "04-929",
  },
  irrelevantText: "",
  setName: (e) => set(() => ({ name: e.target.value })),
  setIrrelevantText: (e) => set(() => ({ irrelevantText: e.target.value })),
}));

