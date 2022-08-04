import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UiSelect } from './UiSelect';

describe('UiSelect', () =>{
    const propsMock: React.ComponentProps<typeof UiSelect> = {
            label: 'label',
            value: '1',
            options: [ { label: 'Minnesota Wild', value: '1'}, { label: 'Vancouver Canucks', value: '2' }],
            onChange: jest.fn()
    };

    describe('when passed valid props', () => {
        test('should render input label', () => {
            render(<UiSelect {...propsMock} />)
            

            expect(screen.getByLabelText(/label/i)).toBeInTheDocument()
        });

        describe('when select is clicked', () => {
            test('should render input options', () => {
                render(<UiSelect {...propsMock} />)
    
                userEvent.click(screen.getByLabelText(/label/i));
                
                expect(screen.getByRole('option', { name: /minnesota wild/i })).toBeInTheDocument()
                expect(screen.getByRole('option', { name: /vancouver canucks/i })).toBeInTheDocument()
            });
        })

        describe('when option is selected', () => {
            test('.onChange() should be called', () => {
                render(<UiSelect {...propsMock} />)
    
                userEvent.click(screen.getByLabelText(/label/i));
                userEvent.click(screen.getByRole('option', { name: /vancouver canucks/i }));

                expect(propsMock.onChange).toHaveBeenCalledTimes(1);
            });
        })
    });
});