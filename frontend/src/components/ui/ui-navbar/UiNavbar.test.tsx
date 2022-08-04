import { render, screen } from '@testing-library/react';
import { UiNavBar } from './UiNavbar';

describe('UiNavbar', () =>{
    test('should render title', () => {
        render(<UiNavBar />)
        

        expect(screen.getByText(/nhl etl pipeline/i)).toBeInTheDocument()
    });

    test('should render link for each page', () => {
        render(<UiNavBar />)
        
        expect(screen.getAllByRole('button')).toHaveLength(3);
        expect(screen.getByRole('button', { name: /home/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /about/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /api/i })).toBeInTheDocument();
    });
});