import React from 'react';
import PropTypes from 'prop-types';

import { StyledSalesContainer } from './styled';

export const SalesContainer = ({children}) => {
    return (
        <StyledSalesContainer>
            {children}
        </StyledSalesContainer>
    );
}

SalesContainer.propTypes = {
    children: PropTypes.node.isRequired,
}
