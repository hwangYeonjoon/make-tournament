import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import AppRoutes from '@routes/AppRoutes.jsx';
import { useUserStore } from '@state/useUserStore.js';
import PrivateRoute from '@components/PrivateRoute.jsx';

function App() {
  const { user, login, logout } = useUserStore((state) => state);

  // 페이지 새로고침 시 로컬 스토리지에서 유저 정보를 가져와 로그인 처리
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const expiryTime = localStorage.getItem('expiryTime');

    if (savedUser && expiryTime && new Date().getTime() < expiryTime) {
      login(savedUser); // 유저가 있으면 로그인 유지
    } else {
      logout(); // 만료되었으면 로그아웃
    }
  }, [login, logout]);

  // 30분간 활동이 없으면 로그아웃, 활동 시마다 타이머 초기화
  useEffect(() => {
    if (user) {
      const resetExpiryTime = () => {
        const newExpiryTime = new Date().getTime() + 30 * 60 * 1000;
        localStorage.setItem('expiryTime', newExpiryTime.toString());
      };

      const handleUserActivity = () => {
        resetExpiryTime(); // 사용자가 이벤트를 발생시키면 만료 시간 초기화
      };

      // 활동 감지 이벤트 등록
      window.addEventListener('mousemove', handleUserActivity);
      window.addEventListener('keydown', handleUserActivity);
      window.addEventListener('click', handleUserActivity);

      const interval = setInterval(() => {
        const expiryTime = localStorage.getItem('expiryTime');
        if (expiryTime && new Date().getTime() > expiryTime) {
          logout(); // 만료 시간이 지나면 자동 로그아웃
        }
      }, 1000 * 60); // 1분마다 체크

      // 컴포넌트가 언마운트될 때 이벤트 제거
      return () => {
        window.removeEventListener('mousemove', handleUserActivity);
        window.removeEventListener('keydown', handleUserActivity);
        window.removeEventListener('click', handleUserActivity);
        clearInterval(interval);
      };
    }
  }, [user]);

  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              배드민턴 대회
            </Typography>

            {user && (
              <>
                <Typography variant="body1" sx={{ marginRight: 2 }}>
                  {user}님 환영합니다!
                </Typography>
                <Button color="inherit" onClick={logout}>
                  로그아웃
                </Button>
              </>
            )}

            <Button color="inherit" component={Link} to="/">
              홈
            </Button>
          </Toolbar>
        </AppBar>
        <PrivateRoute component={AppRoutes} />
      </div>
    </Router>
  );
}

export default App;
