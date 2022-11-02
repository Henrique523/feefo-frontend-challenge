import { SupportEmailAndContactContainer } from './index';
import {render} from "@testing-library/react";

describe('Tests for SupportEmailAndContactContainer component', () => {
    const ChildComponent = () => <span>Child component</span>;

    it('should render child component when it is passed', () => {
        const { getByText } = render(<SupportEmailAndContactContainer><ChildComponent /></SupportEmailAndContactContainer>);
        expect(getByText('Child component')).toBeInTheDocument();
    });
});
