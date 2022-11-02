import { EmailAndContactRow } from './index';
import {render} from "@testing-library/react";

describe('Tests for EmailAndContactRow component', () => {
    const ChildComponent = () => <span>Child component</span>;

    it('should render child component when it is passed', () => {
        const { getByText } = render(<EmailAndContactRow><ChildComponent /></EmailAndContactRow>);
        expect(getByText('Child component')).toBeInTheDocument();
    });
});
