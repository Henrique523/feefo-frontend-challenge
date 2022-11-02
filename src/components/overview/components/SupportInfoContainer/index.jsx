import React from 'react';
import PropTypes from 'prop-types';

import { StyledSupportInfoContainer } from './styled';

export const SupportInfoContainer = ({children}) => {
    return (
        <StyledSupportInfoContainer>
            {children}
        </StyledSupportInfoContainer>
    );
}

SupportInfoContainer.propTypes = {
    children: PropTypes.node.isRequired,
}
