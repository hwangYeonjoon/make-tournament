import { create } from 'zustand';
export const useTeamStore = create((set) => ({
  teams: [
    {
      id: 1,
      player1: { name: '홍길동', gender: 'male', rank: 'A' },
      player2: { name: '김영희', gender: 'female', rank: 'B' },
      matchType: 'double',
    },
    {
      id: 2,
      player1: { name: '박철수', gender: 'male', rank: 'C' },
      player2: { name: '이민수', gender: 'female', rank: 'D' },
      matchType: 'mixed',
    },
  ],
  setTeams: (newTeams) => set({ teams: newTeams }),
  deleteTeam: (id) =>
    set((state) => ({
      teams: state.teams.filter((team) => team.id !== id),
    })),
  updateTeam: (id, updatedTeam) =>
    set((state) => ({
      teams: state.teams.map((team) => (team.id === id ? updatedTeam : team)),
    })),
}));
