import { create } from "zustand";

const useGlobalStore = create((set) => ({
  pageCount: 1,
  setPageCount: (count) => set({ pageCount: count }),
}));

export default useGlobalStore;
