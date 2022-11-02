import {render} from "@testing-library/react";
import { SupportInfoContainer } from './index';

describe('Tests for SupportInfoContainer component', () => {
    const ChildComponent = () => <span>Child component</span>;

    it('should render child component when it is passed', () => {
        const { getByText } = render(<SupportInfoContainer><ChildComponent /></SupportInfoContainer>);
        expect(getByText('Child component')).toBeInTheDocument();
    });
});
