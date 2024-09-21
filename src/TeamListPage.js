import React, { useState } from 'react';
import Modal from './Modal'; // 모달 컴포넌트를 사용하여 정보 수정 가능하도록
import EditTeamForm from './EditTeamForm'; // 팀 수정 폼 추가

const TeamListPage = ({ teams, onUpdateTeam, onDeleteTeam }) => {
    const [filterLevel, setFilterLevel] = useState('All');
    const [filterType, setFilterType] = useState('All');
    const [editingTeam, setEditingTeam] = useState(null); // 수정할 팀 정보 관리
    const [isModalOpen, setIsModalOpen] = useState(false); // 수정 모달 상태

    // 필터링된 팀 목록
    const filteredTeams = teams.filter((team) => {
        return (
            (filterLevel === 'All' || team.level === filterLevel) &&
            (filterType === 'All' || team.teamType === filterType)
        );
    });

    // 팀 수정 모달 열기
    const handleEditClick = (team) => {
        setEditingTeam(team);
        setIsModalOpen(true);
    };

    // 팀 취소 처리
    const handleDeleteClick = (team) => {
        onDeleteTeam(team);
    };

    // 팀 수정 모달 닫기 및 저장
    const handleModalClose = (updatedTeam) => {
        if (updatedTeam) {
            onUpdateTeam(updatedTeam); // 이곳에서 업데이트 함수를 호출
        }
        setIsModalOpen(false);
        setEditingTeam(null);
    };

    return (
        <div>
            {/* 필터 */}
            <div style={styles.filterContainer}>
                <div style={styles.filterItem}>
                    <label>급수 :</label>
                    <select value={filterLevel} onChange={(e) => setFilterLevel(e.target.value)}>
                        <option value="All">전체</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                    </select>
                </div>

                <div style={styles.filterItem}>
                    <label>팀 종류 :</label>
                    <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                        <option value="All">전체</option>
                        <option value="혼복">혼복</option>
                        <option value="남복">남복</option>
                        <option value="여복">여복</option>
                    </select>
                </div>
            </div>
            <h2>토너먼트 참가자 리스트</h2>
            {/* 팀 목록 테이블 */}
            <table style={styles.table}>
                <thead>
                <tr>
                    <th style={styles.th}>팀원 1</th>
                    <th style={styles.th}>팀원 2</th>
                    <th style={styles.th}>급수</th>
                    <th style={styles.th}>팀 종류</th>
                    <th style={styles.th}></th>
                </tr>
                </thead>
                <tbody>
                {filteredTeams.map((team, index) => (
                    <tr key={index} style={styles.tableRow}>
                        <td style={styles.td}>{team.player1}</td>
                        <td style={styles.td}>{team.player2}</td>
                        <td style={styles.td}>{team.level}</td>
                        <td style={styles.td}>{team.teamType}</td>
                        <td style={styles.td}>
                            <button style={styles.editButton} onClick={() => handleEditClick(team)}>수정</button>
                            <button style={styles.deleteButton} onClick={() => handleDeleteClick(team)}>취소</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* 팀 수정 모달 */}
            {editingTeam && (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <EditTeamForm team={editingTeam} onClose={handleModalClose} />
                </Modal>
            )}
        </div>
    );
};

// 스타일 추가
const styles = {
    filterContainer: {
        display: 'flex',
        marginBottom: '20px',
    },
    filterItem: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '20px',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
        textAlign: 'center',
        fontSize: '16px',
        border: '1px solid #ddd',
    },
    th: {
        border: '1px solid #ddd',
        padding: '10px',
        backgroundColor: '#f4f4f4',
        textAlign: 'center',
    },
    td: {
        border: '1px solid #ddd',
        padding: '10px',
        textAlign: 'center',
        verticalAlign: 'middle',
    },
    tableRow: {
        borderBottom: '1px solid #ddd',
        padding: '10px 0',
    },
    editButton: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 15px',
        marginRight: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    deleteButton: {
        backgroundColor: '#f44336',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default TeamListPage;
