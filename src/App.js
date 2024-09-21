import React, { useState } from 'react';
import LoginPage from './LoginPage';
import RegisterTeamPage from './RegisterTeamPage';
import Modal from './Modal';
import TeamListPage from './TeamListPage';
import EditTeamForm from './EditTeamForm'; // 팀 수정 폼을 사용

const App = () => {
  const [user, setUser] = useState(null); // 로그인된 사용자 이름
  const [teams, setTeams] = useState([]); // 등록된 팀 목록
  const [isModalOpen, setIsModalOpen] = useState(false); // 등록 모달 상태
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // 수정 모달 상태
  const [editingTeam, setEditingTeam] = useState(null); // 수정 중인 팀 정보

  // 로그인 처리
  const handleLogin = (name) => {
    setUser(name);
  };

  // 팀 등록 처리
  const handleRegister = (newTeam) => {
    // 새로운 팀을 등록
    setTeams([...teams, { ...newTeam, id: Date.now() }]); // id는 간단히 현재 시간으로 생성
    setIsModalOpen(false); // 팀 등록 후 모달 닫기
  };

  // 팀 수정 처리
  const handleUpdateTeam = (updatedTeam) => {
    setTeams((prevTeams) =>
        prevTeams.map((team) =>
            team.id === updatedTeam.id ? updatedTeam : team
        )
    );
    setIsEditModalOpen(false); // 팀 수정 후 모달 닫기
    setEditingTeam(null); // 수정 중인 팀 초기화
  };

  // 팀 삭제 처리
  const handleDeleteTeam = (teamToDelete) => {
    setTeams((prevTeams) => prevTeams.filter((team) => team.id !== teamToDelete.id));
  };

  // 팀 수정 모달 열기
  const openEditModal = (team) => {
    setEditingTeam(team);
    setIsEditModalOpen(true);
  };

  // 등록 모달 열기
  const openModal = () => {
    setIsModalOpen(true);
  };

  // 등록 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
      <div>
        {!user ? (
            <LoginPage onLogin={handleLogin} />
        ) : (
            <>
              <h1>환영합니다, {user}님</h1>

              {/* 팀 등록 버튼 */}
              <button onClick={openModal}>팀 등록 하기</button>

              <div style={{ marginTop: '3%' }}></div>

              {/* 등록 모달 창 */}
              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <RegisterTeamPage onRegister={handleRegister} />
              </Modal>

              {/* 수정 모달 창 */}
              {editingTeam && (
                  <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
                    <EditTeamForm team={editingTeam} onClose={handleUpdateTeam} />
                  </Modal>
              )}

              {/* 팀 목록 및 수정, 삭제 기능 */}
              <TeamListPage
                  teams={teams}
                  onUpdateTeam={openEditModal}
                  onDeleteTeam={handleDeleteTeam}
              />
            </>
        )}
      </div>
  );
};

export default App;
