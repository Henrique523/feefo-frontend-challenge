import { SalesTitleRow } from './index';
import {render} from "@testing-library/react";

describe('Tests for SalesTitleRow component', () => {
    const ChildComponent = () => <span>Child component</span>;

    it('should render child component when it is passed', () => {
       const { getByText } = render(<SalesTitleRow><ChildComponent /></SalesTitleRow>);
       expect(getByText('Child component')).toBeInTheDocument();
    });
});
