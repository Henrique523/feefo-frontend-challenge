import {render} from "@testing-library/react";
import { AccountOverviewTitle } from './index';

describe('Tests for AccountOverviewTitle component', () => {
    it('should render correctly', () => {
        const { getByText } = render(<AccountOverviewTitle />);
        expect(getByText('Account Overview')).toBeInTheDocument();
    });
});
