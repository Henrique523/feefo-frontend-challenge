import {render} from "@testing-library/react";
import { PercentContainer } from './index';

describe('Tests for PercentContainer component', () => {
    const ChildComponent = () => <span>Child component</span>;

    it('should render child component when it is passed', () => {
        const { getByText } = render(<PercentContainer><ChildComponent /></PercentContainer>);
        expect(getByText('Child component')).toBeInTheDocument();
    });
});
