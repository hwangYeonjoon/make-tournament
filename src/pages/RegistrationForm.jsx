import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

function RegistrationForm() {
  // 상태 관리 (두 명의 참가자 정보를 입력)
  const [formData, setFormData] = useState({
    player1: {
      name: '',
      gender: '',
      rank: '',
    },
    player2: {
      name: '',
      gender: '',
      rank: '',
    },
    matchType: '',
  });

  const handleChange = (event, player) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [player]: {
        ...prevState[player],
        [name]: value,
      },
    }));
  };

  const isFormValid = () => {
    return (
      formData.player1.name &&
      formData.player1.gender &&
      formData.player1.rank &&
      formData.player2.name &&
      formData.player2.gender &&
      formData.player2.rank &&
      formData.matchType
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      // formData로 데이터를 제출하는 로직을 여기에 추가
      console.log('Submitted Data:', formData);
      alert('참가 신청이 완료되었습니다!');
    } else {
      alert('모든 필드를 올바르게 작성해주세요.');
    }
  };

  const ranks = [
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' },
    { label: 'D', value: 'D' },
    { label: 'E', value: 'E' },
    { label: 'F', value: 'F' },
  ];

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          배드민턴 대회 참가 신청 (2인)
        </Typography>
        <form onSubmit={handleSubmit}>
          <Typography variant="h6" gutterBottom>
            참가자 1 정보
          </Typography>
          <TextField
            label="이름"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={formData.player1.name}
            onChange={(e) => handleChange(e, 'player1')}
            required
          />
          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">성별</FormLabel>
            <RadioGroup
              name="gender"
              value={formData.player1.gender}
              onChange={(e) => handleChange(e, 'player1')}
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
            label="랭크"
            variant="outlined"
            fullWidth
            margin="normal"
            name="rank"
            value={formData.player1.rank}
            onChange={(e) => handleChange(e, 'player1')}
            required
          >
            {ranks.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <Typography variant="h6" gutterBottom>
            참가자 2 정보
          </Typography>
          <TextField
            label="이름"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={formData.player2.name}
            onChange={(e) => handleChange(e, 'player2')}
            required
          />
          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">성별</FormLabel>
            <RadioGroup
              name="gender"
              value={formData.player2.gender}
              onChange={(e) => handleChange(e, 'player2')}
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
            label="랭크"
            variant="outlined"
            fullWidth
            margin="normal"
            name="rank"
            value={formData.player2.rank}
            onChange={(e) => handleChange(e, 'player2')}
            required
          >
            {ranks.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">경기 유형</FormLabel>
            <RadioGroup
              name="matchType"
              value={formData.matchType}
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  matchType: e.target.value,
                }))
              }
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

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={!isFormValid()} // 유효성 검사에 따라 버튼 비활성화
          >
            참가 신청
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default RegistrationForm;
