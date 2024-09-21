import {
  Box,
  Button,
  Collapse,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { useEffect, useState } from 'react'

function ParticipantList() {
  const [teams, setTeams] = useState([
    {
      id: 1,
      player1: { name: '홍길동', gender: 'male', rank: 'A' },
      player2: { name: '김영희', gender: 'female', rank: 'B' },
      matchType: 'double',
    },
    {
      id: 2,
      player1: { name: '박철수', gender: 'male', rank: 'C' },
      player2: { name: '이민수', gender: 'female', rank: 'D' },
      matchType: 'mixed',
    },
  ])

  const [filteredTeams, setFilteredTeams] = useState(teams)
  const [filter, setFilter] = useState({
    gender: '',
    rank: '',
    matchType: '',
  })
  const [filterVisible, setFilterVisible] = useState(false)
  const [editTeam, setEditTeam] = useState(null)
  const [editData, setEditData] = useState({
    player1Name: '',
    player1Gender: '',
    player1Rank: '',
    player2Name: '',
    player2Gender: '',
    player2Rank: '',
    matchType: '',
  })
  const [openDialog, setOpenDialog] = useState(false)

  const handleFilterChange = (event) => {
    const { name, value } = event.target
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }))
  }

  const toggleFilterVisibility = () => {
    setFilterVisible((prevVisible) => !prevVisible)
  }

  useEffect(() => {
    const filtered = teams.filter((team) => {
      const matchGender =
        filter.gender === '' ||
        team.player1.gender === filter.gender ||
        team.player2.gender === filter.gender
      const matchRank =
        filter.rank === '' ||
        team.player1.rank === filter.rank ||
        team.player2.rank === filter.rank
      const matchType =
        filter.matchType === '' || team.matchType === filter.matchType

      return matchGender && matchRank && matchType
    })

    setFilteredTeams(filtered)
  }, [filter, teams])

  const handleEditClick = (team) => {
    setEditTeam(team.id)
    setEditData({
      player1Name: team.player1.name,
      player1Gender: team.player1.gender,
      player1Rank: team.player1.rank,
      player2Name: team.player2.name,
      player2Gender: team.player2.gender,
      player2Rank: team.player2.rank,
      matchType: team.matchType,
    })
    setOpenDialog(true)
  }

  const handleEditChange = (event) => {
    const { name, value } = event.target
    setEditData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSaveEdit = () => {
    setTeams((prev) =>
      prev.map((team) =>
        team.id === editTeam
          ? {
              ...team,
              player1: {
                ...team.player1,
                name: editData.player1Name,
                gender: editData.player1Gender,
                rank: editData.player1Rank,
              },
              player2: {
                ...team.player2,
                name: editData.player2Name,
                gender: editData.player2Gender,
                rank: editData.player2Rank,
              },
              matchType: editData.matchType,
            }
          : team
      )
    )
    setOpenDialog(false)
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        참가 팀 리스트
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Button
          variant="outlined"
          onClick={toggleFilterVisibility}
          endIcon={filterVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        >
          {filterVisible ? '필터 숨기기' : '필터 보이기'}
        </Button>
        <Collapse in={filterVisible}>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom>
              필터링
            </Typography>
            <FormControl component="fieldset" margin="normal" fullWidth>
              <FormLabel component="legend">성별</FormLabel>
              <RadioGroup
                name="gender"
                value={filter.gender}
                onChange={handleFilterChange}
                row
              >
                <FormControlLabel value="" control={<Radio />} label="전체" />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="남성"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="여성"
                />
              </RadioGroup>
            </FormControl>

            <TextField
              select
              label="랭크"
              variant="outlined"
              fullWidth
              margin="normal"
              name="rank"
              value={filter.rank}
              onChange={handleFilterChange}
            >
              <MenuItem value="">전체</MenuItem>
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="B">B</MenuItem>
              <MenuItem value="C">C</MenuItem>
              <MenuItem value="D">D</MenuItem>
              <MenuItem value="E">E</MenuItem>
              <MenuItem value="F">F</MenuItem>
            </TextField>

            <FormControl component="fieldset" margin="normal" fullWidth>
              <FormLabel component="legend">경기 유형</FormLabel>
              <RadioGroup
                name="matchType"
                value={filter.matchType}
                onChange={handleFilterChange}
                row
              >
                <FormControlLabel value="" control={<Radio />} label="전체" />
                <FormControlLabel
                  value="double"
                  control={<Radio />}
                  label="복식"
                />
                <FormControlLabel
                  value="mixed"
                  control={<Radio />}
                  label="혼합 복식"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Collapse>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>팀원 1 (이름/성별/랭크)</TableCell>
              <TableCell>팀원 2 (이름/성별/랭크)</TableCell>
              <TableCell>경기 유형</TableCell>
              <TableCell>수정</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTeams.map((team) => (
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
                  {team.matchType === 'double' ? '복식' : '혼합 복식'}
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    onClick={() => handleEditClick(team)}
                  >
                    수정
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 수정 모달 */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="edit-dialog-title"
        aria-describedby="edit-dialog-description"
      >
        <DialogTitle id="edit-dialog-title">팀 수정</DialogTitle>
        <DialogContent>
          <TextField
            label="팀원 1 이름"
            variant="outlined"
            fullWidth
            name="player1Name"
            value={editData.player1Name}
            onChange={handleEditChange}
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <FormLabel>팀원 1 성별</FormLabel>
            <RadioGroup
              name="player1Gender"
              value={editData.player1Gender}
              onChange={handleEditChange}
              row
            >
              <FormControlLabel value="male" control={<Radio />} label="남성" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="여성"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            select
            label="팀원 1 랭크"
            variant="outlined"
            fullWidth
            name="player1Rank"
            value={editData.player1Rank}
            onChange={handleEditChange}
            margin="normal"
          >
            <MenuItem value="A">A</MenuItem>
            <MenuItem value="B">B</MenuItem>
            <MenuItem value="C">C</MenuItem>
            <MenuItem value="D">D</MenuItem>
            <MenuItem value="E">E</MenuItem>
            <MenuItem value="F">F</MenuItem>
          </TextField>

          <TextField
            label="팀원 2 이름"
            variant="outlined"
            fullWidth
            name="player2Name"
            value={editData.player2Name}
            onChange={handleEditChange}
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <FormLabel>팀원 2 성별</FormLabel>
            <RadioGroup
              name="player2Gender"
              value={editData.player2Gender}
              onChange={handleEditChange}
              row
            >
              <FormControlLabel value="male" control={<Radio />} label="남성" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="여성"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            select
            label="팀원 2 랭크"
            variant="outlined"
            fullWidth
            name="player2Rank"
            value={editData.player2Rank}
            onChange={handleEditChange}
            margin="normal"
          >
            <MenuItem value="A">A</MenuItem>
            <MenuItem value="B">B</MenuItem>
            <MenuItem value="C">C</MenuItem>
            <MenuItem value="D">D</MenuItem>
            <MenuItem value="E">E</MenuItem>
            <MenuItem value="F">F</MenuItem>
          </TextField>

          <FormControl fullWidth margin="normal">
            <FormLabel>경기 유형</FormLabel>
            <RadioGroup
              name="matchType"
              value={editData.matchType}
              onChange={handleEditChange}
              row
            >
              <FormControlLabel
                value="double"
                control={<Radio />}
                label="복식"
              />
              <FormControlLabel
                value="mixed"
                control={<Radio />}
                label="혼합 복식"
              />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>취소</Button>
          <Button onClick={handleSaveEdit} variant="contained">
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default ParticipantList
