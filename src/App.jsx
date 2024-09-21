import { BrowserRouter as Router, Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import AppRoutes from './routes/AppRoutes.jsx';

function App() {
  return (
    <Router>
      {' '}
      {/* Router로 감싸기 */}
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              배드민턴 대회
            </Typography>
            <Button color="inherit" component={Link} to="/">
              홈
            </Button>
          </Toolbar>
        </AppBar>
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
