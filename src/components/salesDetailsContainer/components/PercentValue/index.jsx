import React from 'react';
import PropTypes from 'prop-types';

import { StyledPercentValue } from './styled';

export const PercentValue = ({value}) => {
    return (
        <StyledPercentValue>{value}%</StyledPercentValue>
    );
}

PercentValue.propTypes = {
    value: PropTypes.string.isRequired,
}
