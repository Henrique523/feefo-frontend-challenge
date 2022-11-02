import React from 'react';
import PropTypes from 'prop-types';

import { StyledSalesTitleRow } from './styled';

export const SalesTitleRow = ({children}) => {
    return (
        <StyledSalesTitleRow>
            {children}
        </StyledSalesTitleRow>
    );
}

SalesTitleRow.propTypes = {
    children: PropTypes.node.isRequired,
}
