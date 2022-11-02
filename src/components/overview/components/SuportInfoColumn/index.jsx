import React from 'react';
import PropTypes from 'prop-types';

import { StyledSupportInfoColumn } from './styled';

export const SuportInfoColumn = ({children}) => {
    return (
        <StyledSupportInfoColumn>
            {children}
        </StyledSupportInfoColumn>
    );
}

SuportInfoColumn.propTypes = {
    children: PropTypes.node.isRequired,
}
