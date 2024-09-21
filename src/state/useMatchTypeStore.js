import { create } from 'zustand';

export const useMatchTypeStore = create((set) => ({
  matchType: '',
  setMatchType: (value) => set({ matchType: value }),
  resetMatchType: () => set({ matchType: '' }),
}));
