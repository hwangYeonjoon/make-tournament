import {
  TextField,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  MenuItem,
  Typography,
} from '@mui/material';
import { usePlayersStore } from '@state/usePlayersStore.js';

const PlayerInfoForm = ({ playerKey, playerLabel }) => {
  const { players, setPlayerData } = usePlayersStore();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPlayerData(playerKey, name, value);
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
    <div>
      <Typography variant="h6" gutterBottom>
        {playerLabel} 정보
      </Typography>
      <TextField
        label="이름"
        variant="outlined"
        fullWidth
        margin="normal"
        name="name"
        value={players[playerKey].name}
        onChange={handleChange}
        required
      />
      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">성별</FormLabel>
        <RadioGroup
          name="gender"
          value={players[playerKey].gender}
          onChange={handleChange}
          row
        >
          <FormControlLabel value="male" control={<Radio />} label="남성" />
          <FormControlLabel value="female" control={<Radio />} label="여성" />
        </RadioGroup>
      </FormControl>
      <TextField
        select
        label="랭크"
        variant="outlined"
        fullWidth
        margin="normal"
        name="rank"
        value={players[playerKey].rank}
        onChange={handleChange}
        required
      >
        {ranks.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default PlayerInfoForm;
