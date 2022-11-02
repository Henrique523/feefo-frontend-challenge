import {render} from "@testing-library/react";
import {SupportPrefix} from "./index";

describe('Tests for SupportPrefix component', () => {
    it('should render correctly', () => {
        const { getByText } = render(<SupportPrefix />);

        expect(getByText('S')).toBeInTheDocument();
    });
});
