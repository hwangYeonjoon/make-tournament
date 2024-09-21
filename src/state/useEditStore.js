import { create } from 'zustand';
export const useEditStore = create((set) => ({
  editTeam: null,
  editData: {
    player1Name: '',
    player1Gender: '',
    player1Rank: '',
    player2Name: '',
    player2Gender: '',
    player2Rank: '',
    matchType: '',
  },
  setEditTeam: (team) => set({ editTeam: team }),
  setEditData: (newData) => set({ editData: newData }),
  resetEditData: () =>
    set({
      editTeam: null,
      editData: {
        player1Name: '',
        player1Gender: '',
        player1Rank: '',
        player2Name: '',
        player2Gender: '',
        player2Rank: '',
        matchType: '',
      },
    }),
}));
