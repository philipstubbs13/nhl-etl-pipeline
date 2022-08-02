import './App.css';
import { Container} from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Dashboard } from './pages/Dashboard';
import { PlayerDetails } from './pages/PlayerDetails';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Container maxWidth="md">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/player/:id" element={<PlayerDetails />} />
            </Routes>
          </Container>
        </div>
      </Router>
    </>
  );
}

export default App;
