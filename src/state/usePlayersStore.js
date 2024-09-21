import { create } from 'zustand';

export const usePlayersStore = create((set) => ({
  players: {
    player1: {
      name: '',
      gender: '',
      rank: '',
    },
    player2: {
      name: '',
      gender: '',
      rank: '',
    },
  },
  setPlayerData: (playerKey, name, value) => {
    set((state) => ({
      players: {
        ...state.players,
        [playerKey]: {
          ...state.players[playerKey],
          [name]: value,
        },
      },
    }));
  },
  resetPlayers: () =>
    set({
      players: {
        player1: {
          name: '',
          gender: '',
          rank: '',
        },
        player2: {
          name: '',
          gender: '',
          rank: '',
        },
      },
    }),
}));
