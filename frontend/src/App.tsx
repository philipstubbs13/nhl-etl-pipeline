import { Container} from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Dashboard } from './pages/Dashboard';
import { PlayerDetails } from './pages/PlayerDetails';
//@ts-ignore
import { UiNavBar } from './components/ui/ui-navbar/UiNavbar.tsx';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { About } from './pages/About';
import { ApiDocumentation } from './pages/ApiDocumentation';

const queryClient = new QueryClient()

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <UiNavBar />
        <Container maxWidth="md">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/player/:id" element={<PlayerDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/api" element={<ApiDocumentation />} />
          </Routes>
        </Container>
      </Router>
    </QueryClientProvider>
  );
};
