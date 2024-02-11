import { render, screen, act } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import App from './App';

describe('<App />', () => {
    it('Should render a list of products and a button to order them', () => {
        render(<App />);
        const products = screen.getAllByRole('listitem');
        expect(products).toHaveLength(3);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('Should order products by price when the button is clicked', () => {
        render(<App />);
        const button = screen.getByRole('button');

        // When testing, code that causes React state updates should be wrapped into act(...):
        act(() => {
            fireEvent.click(button);
        });
        const products = screen.getAllByRole('listitem');

        expect(products[0]).toHaveTextContent('Cachopo');
        expect(products[1]).toHaveTextContent('Navajas');
        expect(products[2]).toHaveTextContent('Chorizo a la sidra');
    });
});