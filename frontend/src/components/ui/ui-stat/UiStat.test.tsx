import { render, screen } from '@testing-library/react';
import { UiStat } from './UiStat';

describe('UiStat', () =>{
    const propsMock: React.ComponentProps<typeof UiStat> = {
        children: 4,
        title: 'Goals',
    };

    describe('when passed #title', () => {
        test('should render #title', () => {
            render(<UiStat {...propsMock}>4</UiStat>)
            

            expect(screen.getByText(/goals/i)).toBeInTheDocument()
        });
    });

    describe('when passed #children', () => {
        test('should render #children', () => {
            render(<UiStat {...propsMock}>4</UiStat>)
            

            expect(screen.getByText(/4/i)).toBeInTheDocument()
        });
    });
});