import React from 'react';
import PropTypes from 'prop-types';

import { StyledOverviewRowContainer } from "./styled";

export const OverviewRow = ({children}) => {
    return (
        <StyledOverviewRowContainer>
            {children}
        </StyledOverviewRowContainer>
    );
}

OverviewRow.propTypes = {
    children: PropTypes.node.isRequired,
}
