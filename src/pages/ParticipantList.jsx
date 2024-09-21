import { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { useTeamStore } from '@state/useTeamStore.js';
import { useFilterStore } from '@state/useFilterStore.js';
import { useEditStore } from '@state/useEditStore.js';
import FilterPanel from '@components/FilterPanel.jsx';
import ParticipantTable from '@components/ParticipantTable.jsx';
import EditDialog from '@components/EditDialog.jsx';

function ParticipantList() {
  const { teams, setTeams } = useTeamStore((state) => state);
  const { filter, setFilter } = useFilterStore((state) => state);
  const { editTeam, editData, setEditTeam, setEditData, resetEditData } =
    useEditStore((state) => state);

  // 필터 적용
  useEffect(() => {
    const filteredTeams = teams.filter((team) => {
      const matchGender =
        filter.gender === '' ||
        team.player1.gender === filter.gender ||
        team.player2.gender === filter.gender;
      const matchRank =
        filter.rank === '' ||
        team.player1.rank === filter.rank ||
        team.player2.rank === filter.rank;
      const matchType =
        filter.matchType === '' || team.matchType === filter.matchType;

      return matchGender && matchRank && matchType;
    });

    // 상태 업데이트가 필요할 때만 호출
    if (filteredTeams.length !== teams.length) {
      setTeams(filteredTeams);
    }
  }, [filter, teams, setTeams]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleEditClick = (team) => {
    setEditTeam(team.id);
    setEditData({
      player1Name: team.player1.name,
      player1Gender: team.player1.gender,
      player1Rank: team.player1.rank,
      player2Name: team.player2.name,
      player2Gender: team.player2.gender,
      player2Rank: team.player2.rank,
      matchType: team.matchType,
    });
  };

  const handleDelete = (teamId) => {
    useTeamStore.getState().deleteTeam(teamId);
  };

  const handleSaveEdit = () => {
    const updatedTeam = {
      id: editTeam,
      player1: {
        name: editData.player1Name,
        gender: editData.player1Gender,
        rank: editData.player1Rank,
      },
      player2: {
        name: editData.player2Name,
        gender: editData.player2Gender,
        rank: editData.player2Rank,
      },
      matchType: editData.matchType,
    };
    useTeamStore.getState().updateTeam(editTeam, updatedTeam);
    resetEditData();
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        참가 팀 리스트
      </Typography>

      <FilterPanel filter={filter} onFilterChange={handleFilterChange} />

      <ParticipantTable
        teams={teams}
        onEditClick={handleEditClick}
        onDeleteClick={handleDelete}
      />

      <EditDialog
        open={Boolean(editTeam)}
        editData={editData}
        onClose={resetEditData}
        onSave={handleSaveEdit}
        onEditChange={(event) => {
          const { name, value } = event.target;
          setEditData({ ...editData, [name]: value });
        }}
      />
    </Container>
  );
}

export default ParticipantList;
