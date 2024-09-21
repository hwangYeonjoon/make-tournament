import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h3" gutterBottom>
        404 - 페이지를 찾을 수 없습니다
      </Typography>
      <Typography variant="body1" gutterBottom>
        요청하신 페이지는 존재하지 않습니다.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        style={{ marginTop: '20px' }}
      >
        홈으로 돌아가기
      </Button>
    </Container>
  );
};

export default NotFound;
