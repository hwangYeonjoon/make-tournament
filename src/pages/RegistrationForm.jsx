import { Box, Button, Container, Typography } from '@mui/material';
import PlayerInfoForm from '@components/PlayerInfoForm.jsx';
import MatchTypeForm from '@components/MatchTypeForm.jsx';
import { usePlayersStore } from '@state/usePlayersStore.js';
import { useMatchTypeStore } from '@state/useMatchTypeStore.js';
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore'; // Firestore 메서드 추가

const RegistrationForm = () => {
  const { players, resetPlayers } = usePlayersStore();
  const { matchType, resetMatchType } = useMatchTypeStore();

  // 폼 유효성 검증 함수
  const isFormValid = () => {
    const player1Rank = players.player1.rank;
    const player2Rank = players.player2.rank;

    return (
      players.player1.name &&
      players.player1.gender &&
      player1Rank &&
      players.player2.name &&
      players.player2.gender &&
      player2Rank &&
      matchType
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // 기본 유효성 검증
    if (!isFormValid()) {
      alert('모든 필드를 올바르게 작성해주세요.');
      return;
    }

    // 이름이 같은지 확인
    if (players.player1.name === players.player2.name) {
      alert('참가자 1과 참가자 2의 이름이 같을 수 없습니다.');
      return;
    }

    // 랭크가 같은지 확인
    if (players.player1.rank !== players.player2.rank) {
      alert('참가자 1과 참가자 2의 랭크가 같아야 합니다.');
      return;
    }

    // Firestore에 저장
    try {
      await addDoc(collection(db, 'registrations'), {
        player1: {
          name: players.player1.name,
          gender: players.player1.gender,
          rank: players.player1.rank,
        },
        player2: {
          name: players.player2.name,
          gender: players.player2.gender,
          rank: players.player2.rank,
        },
        matchType: matchType,
        timestamp: new Date(), // 추가된 필드로, 언제 저장되었는지 기록
      });
      alert('참가 신청이 완료되었습니다!');
      resetPlayers();
      resetMatchType();
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('참가 신청 중 오류가 발생했습니다.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          배드민턴 대회 참가 신청 (2인)
        </Typography>
        <form onSubmit={handleSubmit}>
          <PlayerInfoForm playerKey="player1" playerLabel="참가자 1" />
          <PlayerInfoForm playerKey="player2" playerLabel="참가자 2" />
          <MatchTypeForm />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            참가 신청
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default RegistrationForm;
