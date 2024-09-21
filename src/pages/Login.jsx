import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '@state/useUserStore.js';

const Login = () => {
  const [name, setName] = useState('');
  const login = useUserStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const expiryTime = new Date().getTime() + 30 * 60 * 1000; // 30분 후 만료 시간

    login(name); // 유저 정보를 zustand에 저장
    localStorage.setItem('user', name); // 유저 이름을 로컬 스토리지에 저장
    localStorage.setItem('expiryTime', expiryTime); // 만료 시간 저장

    navigate('/'); // 로그인 후 홈으로 리다이렉트
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" gutterBottom>
          로그인
        </Typography>

        <TextField
          label="이름"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
          sx={{ mb: 2 }}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          로그인
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
