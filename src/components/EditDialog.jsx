import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
} from '@mui/material';

const EditDialog = ({ open, onClose, editData, onEditChange, onSave }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
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
          onChange={onEditChange}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <FormLabel>팀원 1 성별</FormLabel>
          <RadioGroup
            name="player1Gender"
            value={editData.player1Gender}
            onChange={onEditChange}
            row
          >
            <FormControlLabel value="male" control={<Radio />} label="남성" />
            <FormControlLabel value="female" control={<Radio />} label="여성" />
          </RadioGroup>
        </FormControl>
        <TextField
          select
          label="팀원 1 랭크"
          variant="outlined"
          fullWidth
          name="player1Rank"
          value={editData.player1Rank}
          onChange={onEditChange}
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
          onChange={onEditChange}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <FormLabel>팀원 2 성별</FormLabel>
          <RadioGroup
            name="player2Gender"
            value={editData.player2Gender}
            onChange={onEditChange}
            row
          >
            <FormControlLabel value="male" control={<Radio />} label="남성" />
            <FormControlLabel value="female" control={<Radio />} label="여성" />
          </RadioGroup>
        </FormControl>
        <TextField
          select
          label="팀원 2 랭크"
          variant="outlined"
          fullWidth
          name="player2Rank"
          value={editData.player2Rank}
          onChange={onEditChange}
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
            onChange={onEditChange}
            row
          >
            <FormControlLabel value="double" control={<Radio />} label="복식" />
            <FormControlLabel
              value="mixed"
              control={<Radio />}
              label="혼합 복식"
            />
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>취소</Button>
        <Button onClick={onSave} variant="contained">
          저장
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
