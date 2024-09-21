import { Box, Button, Container, Typography } from '@mui/material';
import PlayerInfoForm from '@components/PlayerInfoForm.jsx';
import MatchTypeForm from '@components/MatchTypeForm.jsx';
import { usePlayersStore } from '@state/usePlayersStore.js';
import { useMatchTypeStore } from '@state/useMatchTypeStore.js';

const RegistrationForm = () => {
  const { players, resetPlayers } = usePlayersStore();
  const { matchType, resetMatchType } = useMatchTypeStore();

  const isFormValid = () => {
    return (
      players.player1.name &&
      players.player1.gender &&
      players.player1.rank &&
      players.player2.name &&
      players.player2.gender &&
      players.player2.rank &&
      matchType
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      console.log('Submitted Data:', players, matchType);
      alert('참가 신청이 완료되었습니다!');
      resetPlayers();
      resetMatchType();
    } else {
      alert('모든 필드를 올바르게 작성해주세요.');
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={!isFormValid()}
          >
            참가 신청
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default RegistrationForm;
