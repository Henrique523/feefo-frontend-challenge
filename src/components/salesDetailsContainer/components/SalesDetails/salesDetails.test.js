import {render, screen} from "@testing-library/react";
import { SalesDetails } from './index'

describe('Tests for SalesDetails component', () => {
    it('should render correctly when correct props are passed', () => {
        const { getByTestId } = render(<SalesDetails uploads={8} linesAttempted={20}  />);
        expect(getByTestId('sales-details-test-id').textContent).toBe('You had 8 uploads and 20 lines added.');
    });

    it('should console an error if the prop type is incorrect', () => {
        jest.spyOn(console, 'error').mockImplementation(() => {});

        render(<SalesDetails uploads="8" linesAttempted={20} />);

        expect(console.error).toHaveBeenCalled();
    });

    it('should console an error if a required prop is not passed', () => {
        jest.spyOn(console, 'error').mockImplementation(() => {});

        render(<SalesDetails linesAttempted={20} />);

        expect(console.error).toHaveBeenCalled();
    });
});
