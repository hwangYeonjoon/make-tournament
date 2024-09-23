import React, { useState } from 'react';

function LeaguePage() {
  const [winner, setWinner] = useState({});
  const [selectedLine, setSelectedLine] = useState(null);

  const handleLineClick = (match) => {
    const score1 = prompt(`Enter score for ${match.team1}:`);
    const score2 = prompt(`Enter score for ${match.team2}:`);

    if (score1 !== null && score2 !== null) {
      if (parseInt(score1) > parseInt(score2)) {
        setWinner({ ...winner, [match.name]: match.team1 });
      } else {
        setWinner({ ...winner, [match.name]: match.team2 });
      }
    }
  };

  const getLineColor = (match) => {
    if (winner[match]) {
      return 'red';
    }
    return 'black';
  };

  return (
    <div style={{ position: 'relative', width: '100%', textAlign: 'center' }}>
      <svg
        width="100%"
        height="800"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        {/* 직선 연결 및 클릭 이벤트 처리 */}
        {/* 8강 1경기 */}
        <line
          x1="100"
          y1="300"
          x2="200"
          y2="200"
          stroke={getLineColor('8강 1경기')}
          strokeWidth="2"
          onClick={() =>
            handleLineClick({ name: '8강 1경기', team1: '팀 1', team2: '팀 2' })
          }
          style={{ cursor: 'pointer' }}
        />
        <line
          x1="400"
          y1="300"
          x2="200"
          y2="200"
          stroke={getLineColor('8강 1경기')}
          strokeWidth="2"
          onClick={() =>
            handleLineClick({ name: '8강 1경기', team1: '팀 1', team2: '팀 2' })
          }
          style={{ cursor: 'pointer' }}
        />

        {/* 8강 2경기 */}
        <line
          x1="500"
          y1="300"
          x2="600"
          y2="200"
          stroke={getLineColor('8강 2경기')}
          strokeWidth="2"
          onClick={() =>
            handleLineClick({ name: '8강 2경기', team1: '팀 3', team2: '팀 4' })
          }
          style={{ cursor: 'pointer' }}
        />
        <line
          x1="800"
          y1="300"
          x2="600"
          y2="200"
          stroke={getLineColor('8강 2경기')}
          strokeWidth="2"
          onClick={() =>
            handleLineClick({ name: '8강 2경기', team1: '팀 3', team2: '팀 4' })
          }
          style={{ cursor: 'pointer' }}
        />

        {/* 이긴 팀을 위에 표시 */}
        {winner['8강 1경기'] && (
          <text x="200" y="190" fontSize="14">
            {winner['8강 1경기']}
          </text>
        )}
        {winner['8강 2경기'] && (
          <text x="600" y="190" fontSize="14">
            {winner['8강 2경기']}
          </text>
        )}

        {/* 팀을 네모 박스 안에 넣기 */}
        {/* 팀 1 */}
        <rect
          x="50"
          y="270"
          width="100"
          height="40"
          stroke="black"
          fill="white"
        />
        <text x="75" y="295" fontSize="14">
          팀 1
        </text>

        {/* 팀 2 */}
        <rect
          x="350"
          y="270"
          width="100"
          height="40"
          stroke="black"
          fill="white"
        />
        <text x="375" y="295" fontSize="14">
          팀 2
        </text>

        {/* 팀 3 */}
        <rect
          x="450"
          y="270"
          width="100"
          height="40"
          stroke="black"
          fill="white"
        />
        <text x="475" y="295" fontSize="14">
          팀 3
        </text>

        {/* 팀 4 */}
        <rect
          x="750"
          y="270"
          width="100"
          height="40"
          stroke="black"
          fill="white"
        />
        <text x="775" y="295" fontSize="14">
          팀 4
        </text>

        {/* 경기 텍스트 */}
        <text x="150" y="210" fontSize="14">
          8강 1경기
        </text>
        <text x="550" y="210" fontSize="14">
          8강 2경기
        </text>
      </svg>
    </div>
  );
}

export default LeaguePage;
