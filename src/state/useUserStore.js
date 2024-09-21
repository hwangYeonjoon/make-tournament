import { create } from 'zustand';

export const useUserStore = create((set) => ({
  user: null,
  login: (userInfo) => set({ user: userInfo }),
  logout: () => {
    set({ user: null });
    localStorage.removeItem('user'); // 로컬 스토리지에서 유저 정보 삭제
    localStorage.removeItem('expiryTime'); // 만료 시간 삭제
  },
}));
