import { create } from 'zustand';

export const useUserStore = create((set) => ({
  user: null, // null이면 로그인되지 않음
  login: (userInfo) => set({ user: userInfo }), // 로그인 함수
  logout: () => set({ user: null }), // 로그아웃 함수
}));
