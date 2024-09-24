import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { useTeamStore } from '@state/useTeamStore.js';
import { useFilterStore } from '@state/useFilterStore.js';
import { useEditStore } from '@state/useEditStore.js';
import FilterPanel from '@components/FilterPanel.jsx';
import ParticipantTable from '@components/ParticipantTable.jsx';
import EditDialog from '@components/EditDialog.jsx';
import { db } from '../config/firebase'; // Firebase Firestore 참조
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';

function ParticipantList() {
  const { teams, setTeams } = useTeamStore((state) => state);
  const { filter, setFilter } = useFilterStore((state) => state);
  const { editTeam, editData, setEditTeam, setEditData, resetEditData } =
    useEditStore((state) => state);

  // 필터 패널 가시성 상태
  const [filterVisible, setFilterVisible] = useState(false);

  // 필터링된 팀을 별도의 상태로 관리
  const [filteredTeams, setFilteredTeams] = useState([]);

  // Firestore에서 팀 데이터 가져오기
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'registrations'));
        const teamList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTeams(teamList);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };

    fetchTeams();
  }, [setTeams]);

  // 필터 적용
  useEffect(() => {
    const applyFilter = () => {
      const filtered = teams.filter((team) => {
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

      setFilteredTeams(filtered); // 필터링된 데이터를 별도의 상태로 관리
    };

    applyFilter();
  }, [filter, teams]);

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

  const handleDelete = async (teamId) => {
    try {
      await deleteDoc(doc(db, 'registrations', teamId));
      useTeamStore.getState().deleteTeam(teamId);
    } catch (error) {
      console.error('Error deleting team:', error);
    }
  };

  const handleSaveEdit = async () => {
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

    try {
      await updateDoc(doc(db, 'registrations', editTeam), updatedTeam);
      useTeamStore.getState().updateTeam(editTeam, updatedTeam);
      resetEditData();
    } catch (error) {
      console.error('Error updating team:', error);
    }
  };

  const handleToggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        참가 팀 리스트
      </Typography>

      <FilterPanel
        filter={filter}
        onFilterChange={handleFilterChange}
        filterVisible={filterVisible}
        onToggleFilter={handleToggleFilter}
      />

      <ParticipantTable
        teams={filteredTeams} // 필터링된 팀을 테이블에 전달
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
