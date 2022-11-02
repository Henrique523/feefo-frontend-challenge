import React from 'react';
import PropTypes from 'prop-types';

import { StyledsupportEmailAndContactContainer } from './styled';

export const SupportEmailAndContactContainer = ({children}) => {
    return (
        <StyledsupportEmailAndContactContainer>
            {children}
        </StyledsupportEmailAndContactContainer>
    );
}

SupportEmailAndContactContainer.propTypes = {
    children: PropTypes.node.isRequired,
}
