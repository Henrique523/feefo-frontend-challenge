import React from 'react';
import PropTypes from 'prop-types';

import { StyledPercentDescription } from './styled'

export const PercentDescription = ({description}) => {
    return (
        <StyledPercentDescription>
            {description}
        </StyledPercentDescription>
    );
}

PercentDescription.propTypes = {
    description: PropTypes.string.isRequired,
}
