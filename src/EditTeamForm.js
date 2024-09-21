import React, { useState } from 'react';

const EditTeamForm = ({ team, onClose }) => {
    const [player1, setPlayer1] = useState(team.player1);
    const [player2, setPlayer2] = useState(team.player2);
    const [level, setLevel] = useState(team.level);
    const [teamType, setTeamType] = useState(team.teamType);

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose({ ...team, player1, player2, level, teamType }); // 수정된 팀 정보를 전달
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>팀원 1:</label>
                <input type="text" value={player1} onChange={(e) => setPlayer1(e.target.value)} />
            </div>
            <div className="form-group">
                <label>팀원 2:</label>
                <input type="text" value={player2} onChange={(e) => setPlayer2(e.target.value)} />
            </div>
            <div className="form-group">
                <label>급수:</label>
                <select value={level} onChange={(e) => setLevel(e.target.value)}>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                </select>
            </div>
            <div className="form-group">
                <label>팀 종류:</label>
                <select value={teamType} onChange={(e) => setTeamType(e.target.value)}>
                    <option value="혼복">혼복</option>
                    <option value="남복">남복</option>
                    <option value="여복">여복</option>
                </select>
            </div>
            <button type="submit">저장</button>
        </form>
    );
};

export default EditTeamForm;
