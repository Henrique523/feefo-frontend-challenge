import React from 'react';
import PropTypes from 'prop-types';

import {OverviewRow} from "./components/OverviewRow";
import {AccountOverviewTitle} from "./components/AccountOverviewTitle";
import {SupportInfoContainer} from "./components/SupportInfoContainer";
import {SupportSubtitle} from "./components/SupportSubtitle";
import {SupportEmailAndContactContainer} from "./components/SupportEmailAndContactContainer";
import {SupportPrefix} from "./components/SupportPrefix";
import {SuportInfoColumn} from "./components/SuportInfoColumn";
import {SupportDescription} from "./components/SupportDescription";
import {EmailAndContactRow} from "./components/EmailAndContactRow";
import {SupportEmail} from "./components/SupportEmail";
import {SupportContact} from "./components/SupportContact";

export const Overview = ({name, email}) => {
    return (
        <OverviewRow>
            <AccountOverviewTitle />

            <SupportInfoContainer>
                <SupportSubtitle />

                <SupportEmailAndContactContainer>
                    <SupportPrefix />

                    <SuportInfoColumn>
                        <SupportDescription name={name} />

                        <EmailAndContactRow>
                            <SupportEmail email={email} />
                            <SupportContact />
                        </EmailAndContactRow>

                    </SuportInfoColumn>
                </SupportEmailAndContactContainer>
            </SupportInfoContainer>
        </OverviewRow>
    )
}

Overview.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}
