import { SalesContainer } from './index';
import {render} from "@testing-library/react";

describe('Tests for SalesContainer component', () => {
    const ChildComponent = () => <span>Child component</span>;

    it('should render child component when it is passed', () => {
        const { getByText } = render(<SalesContainer><ChildComponent /></SalesContainer>);
        expect(getByText('Child component')).toBeInTheDocument();
    });
});
