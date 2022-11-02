import {render} from "@testing-library/react";
import { SalesDetailsContainer } from './index';

describe('Tests for SalesDetailsContainer component', () => {
    it('should render correctly when props are correctly passed', () => {
        const { getByText, getByTestId } = render(<SalesDetailsContainer
            linesSaved={100}
            linesAttempted={100}
            successfulUploads={20}
            uploads={20}
        />);

        expect(getByTestId('icon-upload')).toBeInTheDocument();
        expect(getByTestId('icon-info-circle')).toBeInTheDocument();
        expect(getByTestId('sales-details-test-id').textContent)
            .toBe('You had 20 uploads and 100 lines added.');

        expect(getByText('UPLOAD SUCCESS')).toBeInTheDocument();
        expect(getByText('100%')).toBeInTheDocument();

    });
})
