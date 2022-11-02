import {render} from "@testing-library/react";
import {PercentValue} from './index';

describe('Tests for PercentValue component', () => {
    it('should render correctly when props are correctly passed', () => {
        const { getByText } = render(<PercentValue value="20" />);
        expect(getByText("20%")).toBeInTheDocument();
    });

    it('should console an error if the prop type is incorrect', () => {
        jest.spyOn(console, 'error').mockImplementation(() => {});

        render(<PercentValue value={20} />);

        expect(console.error).toHaveBeenCalled();
    });

    it('should console an error if a required prop is not passed', () => {
        jest.spyOn(console, 'error').mockImplementation(() => {});

        render(<PercentValue />);

        expect(console.error).toHaveBeenCalled();
    });
});
