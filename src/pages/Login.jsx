import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useUserStore } from '@state/useUserStore.js';

const Login = () => {
  const [name, setName] = useState('');
  const login = useUserStore((state) => state.login); // zustand의 login 함수 사용

  const handleSubmit = (e) => {
    e.preventDefault();
    login(name); // zustand의 login 함수를 호출하여 로그인 처리
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

        {/* MUI TextField 컴포넌트 사용 */}
        <TextField
          label="이름"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
          sx={{ mb: 2 }}
        />

        {/* MUI Button 컴포넌트 사용 */}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          로그인
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
