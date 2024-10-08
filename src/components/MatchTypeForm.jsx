import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useMatchTypeStore } from '@state/useMatchTypeStore.js';

const MatchTypeForm = () => {
  const { matchType, setMatchType } = useMatchTypeStore();

  return (
    <FormControl component="fieldset" margin="normal">
      <FormLabel component="legend">경기 유형</FormLabel>
      <RadioGroup
        name="matchType"
        value={matchType}
        onChange={(e) => setMatchType(e.target.value)}
        row
      >
        <FormControlLabel
          value="maledouble"
          control={<Radio />}
          label="남성 복식"
        />
        <FormControlLabel
          value="femaledouble"
          control={<Radio />}
          label="여성 복식"
        />
        <FormControlLabel value="mixed" control={<Radio />} label="혼합 복식" />
      </RadioGroup>
    </FormControl>
  );
};

export default MatchTypeForm;
