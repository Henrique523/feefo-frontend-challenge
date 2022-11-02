import React from 'react';
import PropTypes from 'prop-types';

import { StyledEmailAndContactRow } from './styled';

export const EmailAndContactRow = ({children}) => {
    return (
      <StyledEmailAndContactRow>
          {children}
      </StyledEmailAndContactRow>
    );
}

EmailAndContactRow.propTypes = {
    children: PropTypes.node.isRequired,
}
