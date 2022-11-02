import { SuportInfoColumn } from './index';
import {render} from "@testing-library/react";

describe('Tests for SuportInfoColumn component', () => {
    const ChildComponent = () => <span>Child component</span>;

    it('should render child component when it is passed', () => {
        const { getByText } = render(<SuportInfoColumn><ChildComponent /></SuportInfoColumn>);
        expect(getByText('Child component')).toBeInTheDocument();
    });
});
