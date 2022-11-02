import { OverviewRow } from './index'
import {render} from "@testing-library/react";

describe('Tests for OverviewRow component', () => {
    const ChildComponent = () => <span>Child component</span>;

    it('should render child component when it is passed', () => {
        const { getByText } = render(<OverviewRow><ChildComponent /></OverviewRow>);
        expect(getByText('Child component')).toBeInTheDocument();
    });
});
