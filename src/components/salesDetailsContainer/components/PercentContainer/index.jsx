import React from 'react';
import PropTypes from 'prop-types';

import {StyledPercentContainer} from "./styled";

export const PercentContainer = ({children, isLeftColumn}) => {
    return (
        <StyledPercentContainer isLeftColumn={isLeftColumn}>
            {children}
        </StyledPercentContainer>
    );
}

PercentContainer.propTypes = {
    children: PropTypes.node.isRequired,
    isLeftColumn: PropTypes.bool,
}

PercentContainer.defaultProps = {
    isLeftColumn: false,
}
