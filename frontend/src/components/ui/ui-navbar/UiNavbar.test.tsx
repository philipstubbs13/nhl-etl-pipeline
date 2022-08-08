import { render, screen } from '@testing-library/react';
import { UiNavBar } from './UiNavbar';
import { BrowserRouter as Router } from 'react-router-dom'; 

describe('UiNavbar', () =>{
    test('should render title', () => {
        render(
            <Router>
                <UiNavBar />
            </Router>
        )
        
        expect(screen.getByText(/nhl etl pipeline/i)).toBeInTheDocument()
    });

    test('should render link for each page', () => {
        render(
            <Router>
                <UiNavBar />
            </Router>
        )
        
        expect(screen.getAllByRole('link')).toHaveLength(4);
        expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /api/i })).toBeInTheDocument();
    });
});