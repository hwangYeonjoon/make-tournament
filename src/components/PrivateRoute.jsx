import React from 'react';
import Login from '@pages/Login.jsx';
import { useUserStore } from '@state/useUserStore.js';

const PrivateRoute = ({ component: Component }) => {
  const user = useUserStore((state) => state.user); // zustand에서 로그인 상태 확인

  if (!user) {
    // 로그인되지 않았다면 Login 페이지로 이동
    return <Login />;
  }

  // 로그인 상태면 원하는 컴포넌트 렌더링
  return <Component />;
};

export default PrivateRoute;
