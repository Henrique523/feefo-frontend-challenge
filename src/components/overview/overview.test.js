import {render} from "@testing-library/react";
import { Overview } from './index';

describe('Tests for Overview component', () => {
    it('should render correctly when props as correctly passed', () => {
        const { getByText } = render(<Overview name="John Doe" email="johndoe@email.com" />)

        expect(getByText('John Doe')).toBeInTheDocument();
        expect(getByText('johndoe@email.com')).toBeInTheDocument();
    });
});
