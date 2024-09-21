import { create } from 'zustand';
export const useFilterStore = create((set) => ({
  filter: {
    gender: '',
    rank: '',
    matchType: '',
  },
  setFilter: (newFilter) => set({ filter: newFilter }),
}));
