import React from 'react';
import PropTypes from 'prop-types';

import { StyledSalesDetails } from './styled';

export const SalesDetails = ({uploads, linesAttempted}) => {
    return (
        <StyledSalesDetails data-testid="sales-details-test-id">
            You had <b>{uploads} uploads</b> and <b>{linesAttempted}</b> lines added.
        </StyledSalesDetails>
    );
}

SalesDetails.propTypes = {
    uploads: PropTypes.number.isRequired,
    linesAttempted: PropTypes.number.isRequired,
}
