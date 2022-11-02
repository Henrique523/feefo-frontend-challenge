import React from 'react';
import PropTypes from 'prop-types';

import { StyledSupportDescription } from './styled';

export const SupportDescription = ({name}) => {
    return (
        <StyledSupportDescription>
            {name}
        </StyledSupportDescription>
    );
}

SupportDescription.propTypes = {
    name: PropTypes.string.isRequired,
}
