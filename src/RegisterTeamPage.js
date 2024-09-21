import React, { useState } from 'react';

const RegisterTeamPage = ({ onRegister }) => {
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const [level, setLevel] = useState('A');
    const [teamType, setTeamType] = useState('혼복');

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister({ player1, player2, level, teamType });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>팀원 1:</label>
                <input
                    type="text"
                    value={player1}
                    onChange={(e) => setPlayer1(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>팀원 2:</label>
                <input
                    type="text"
                    value={player2}
                    onChange={(e) => setPlayer2(e.target.value)}
                    required
                />
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
            <button type="submit">신청</button>
        </form>
    );
};

export default RegisterTeamPage;
