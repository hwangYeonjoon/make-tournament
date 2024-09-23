import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        배드민턴 대회에 오신 것을 환영합니다!
      </Typography>
      <Card variant="outlined" style={{ margin: '20px 0' }}>
        <CardContent>
          <Typography variant="h5">대회 일정</Typography>
          <Typography variant="body1" paragraph>
            일시: 2024년 10월 15일
            <br />
            장소: 서울 시민 체육관
          </Typography>
          <Typography variant="body1">
            흥미진진한 배드민턴 대회에 많은 참여 바랍니다!
          </Typography>
        </CardContent>
      </Card>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/registration-form"
        style={{ marginRight: '10px' }}
      >
        참가 등록하기
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        component={Link}
        style={{ marginRight: '10px' }}
        to="/participant-list"
      >
        참가자 목록 보기
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        component={Link}
        to="/league"
        style={{ backgroundColor: 'green', color: 'white' }}
      >
        리그전 확인
      </Button>
    </Container>
  );
}

export default Home;
