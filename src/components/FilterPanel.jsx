import {
  Box,
  Button,
  Collapse,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const FilterPanel = ({
  filter,
  onFilterChange,
  filterVisible,
  onToggleFilter,
}) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Button
        variant="outlined"
        onClick={onToggleFilter}
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
              onChange={onFilterChange}
              row
            >
              <FormControlLabel value="" control={<Radio />} label="전체" />
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
            value={filter.rank}
            onChange={onFilterChange}
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
              onChange={onFilterChange}
              row
            >
              <FormControlLabel value="" control={<Radio />} label="전체" />
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
  );
};

export default FilterPanel;
