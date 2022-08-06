import { render, screen } from '@testing-library/react';
import { UiLoading } from './UiLoading';

describe('UiLoading', () =>{
    test('should render', () => {
        render(<UiLoading />)
        

        expect(screen.getByText(/loading.../i)).toBeInTheDocument()
    });
});