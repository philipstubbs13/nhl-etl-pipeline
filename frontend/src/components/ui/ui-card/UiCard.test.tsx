import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UiCard } from './UiCard';

describe('UiCard', () =>{
    const propsMock: React.ComponentProps<typeof UiCard> = {
        roster: {
            jerseyNumber: 13,
            person: {
                fullName: 'John Smith'
            },
            position: {
                name: 'Forward'
            }
        },
        onClickDetails: jest.fn()
    };

    describe('when passed valid props', () => {
        test('should render player name', () => {
            render(<UiCard {...propsMock} />)
            

            expect(screen.getByText(/john smith/i)).toBeInTheDocument()
        });

        test('should render player jersey number', () => {
            render(<UiCard {...propsMock} />)
            

            expect(screen.getByText(/13/i)).toBeInTheDocument()
        });

        test('should render player position', () => {
            render(<UiCard {...propsMock} />)
            

            expect(screen.getByText(/forward/i)).toBeInTheDocument()
        });

        describe('when view stats button is clicked', () => {
            test('should call .onClickDetails()', () => {
                render(<UiCard {...propsMock} />);

                userEvent.click(screen.getByText(/view stats/i));
                
                expect(propsMock.onClickDetails).toHaveBeenCalledTimes(1);
            });
        });
    });
});