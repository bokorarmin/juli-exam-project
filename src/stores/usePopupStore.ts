import { create } from 'zustand';

interface popupStore {
  allOpened: boolean;
  setAllOpened: (isOpened: boolean) => void;
  openedCount: number;
  setOpenedCount: (count: number) => void;
}

export const usePopupStore = create<popupStore>((set) => ({
  allOpened: false,
  setAllOpened: (isOpened: boolean) => set({ allOpened: isOpened }),
  openedCount: 0,
  setOpenedCount: (count: number) => set({ openedCount: count }),
}));
