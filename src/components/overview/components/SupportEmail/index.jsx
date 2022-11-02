import React from 'react';
import PropTypes from 'prop-types';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

import { StyledSupportEmail } from './styled';

export const SupportEmail = ({email}) => {
    return (
        <StyledSupportEmail>
            <FontAwesomeIcon
                icon={faEnvelope}
                color="#555"
                size="lg"
                data-testid="fonts-awesome-envelope-icon"
            /> {email}
        </StyledSupportEmail>
    );
}

SupportEmail.propTypes = {
    email: PropTypes.string.isRequired,
}
