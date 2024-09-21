import { BrowserRouter as Router, Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import AppRoutes from '@routes/AppRoutes.jsx';
import PrivateRoute from '@components/PrivateRoute.jsx';

function App() {
  return (
    <Router>
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

        {/* 보호된 경로 설정 */}
        <PrivateRoute component={<AppRoutes />} />
      </div>
    </Router>
  );
}

export default App;
