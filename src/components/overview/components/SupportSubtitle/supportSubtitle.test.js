import { render } from "@testing-library/react";
import {SupportSubtitle} from "./index";

describe('Tests for SupportSubtitle component', () => {
    it('should render correctly', () => {
        const { getByText } = render(<SupportSubtitle />);
        expect(getByText('YOUR FEEFO SUPPORT CONTACT')).toBeInTheDocument();
    })
});
