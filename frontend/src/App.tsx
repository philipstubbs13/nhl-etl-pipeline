import { Container} from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Dashboard } from './pages/Dashboard';
import { PlayerDetails } from './pages/PlayerDetails';
import { UiNavBar } from './components/ui/ui-navbar/UiNavbar.tsx';
import React from 'react';

export const App: React.FC = () => {
  return (
      <Router>
        <div className="App">
          <UiNavBar />
          <Container maxWidth="md">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/player/:id" element={<PlayerDetails />} />
            </Routes>
          </Container>
        </div>
      </Router>
  );
}

export default App;
