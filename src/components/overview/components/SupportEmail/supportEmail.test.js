import {render} from "@testing-library/react";
import { SupportEmail } from './index';

describe('Tests for SupportEmail component', () => {
    it('should render correctly when props are correctly passed', () => {
        const { getByText } = render(<SupportEmail email="email@email.com"/>);
        expect(getByText("email@email.com")).toBeInTheDocument();
    });

    it('should have FontsAwesome Envelope icon when correctly rendered', () => {
        const { getByTestId } = render(<SupportEmail email="email@email.com"/>);
        expect(getByTestId('fonts-awesome-envelope-icon')).toBeInTheDocument();
    })

    it('should console an error if the prop type is incorrect', () => {
        jest.spyOn(console, 'error').mockImplementation(() => {});

        render(<SupportEmail email={25}/>);

        expect(console.error).toHaveBeenCalled();
    });

    it('should console an error if a required prop is not passed', () => {
        jest.spyOn(console, 'error').mockImplementation(() => {});

        render(<SupportEmail />);

        expect(console.error).toHaveBeenCalled();
    });
});
