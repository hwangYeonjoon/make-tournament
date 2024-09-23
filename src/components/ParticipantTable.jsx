import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ParticipantTable = ({ teams, onEditClick, onDeleteClick }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>팀원 1 (이름/성별/랭크)</TableCell>
            <TableCell>팀원 2 (이름/성별/랭크)</TableCell>
            <TableCell>경기 유형</TableCell>
            <TableCell>수정</TableCell>
            <TableCell>삭제</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teams.map((team) => (
            <TableRow key={team.id}>
              <TableCell>
                {team.player1.name} /{' '}
                {team.player1.gender === 'male' ? '남성' : '여성'} /{' '}
                {team.player1.rank}
              </TableCell>
              <TableCell>
                {team.player2.name} /{' '}
                {team.player2.gender === 'male' ? '남성' : '여성'} /{' '}
                {team.player2.rank}
              </TableCell>
              <TableCell>
                {team.matchType === 'maledouble'
                  ? '남성 복식'
                  : team.matchType === 'femaledouble'
                    ? '여성 복식'
                    : '혼합 복식'}
              </TableCell>
              <TableCell>
                <Button variant="outlined" onClick={() => onEditClick(team)}>
                  수정
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => onDeleteClick(team.id)}
                >
                  삭제
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ParticipantTable;
