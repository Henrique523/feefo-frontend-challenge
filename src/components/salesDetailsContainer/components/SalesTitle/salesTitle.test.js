import {render} from "@testing-library/react";
import { SalesTitle } from './index';

describe('Tests for SalesTitle component', () => {
    it('should render correctly', () => {
        const { getByText } = render(<SalesTitle />);
        expect(getByText('Sales')).toBeInTheDocument();
    });
});

