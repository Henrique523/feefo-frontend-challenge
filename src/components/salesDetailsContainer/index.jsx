import React from 'react';
import PropTypes from 'prop-types';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle, faUpload} from "@fortawesome/free-solid-svg-icons";

import {SalesTitleRow} from "./components/SalesTitleRow";
import {SalesTitle} from "./components/SalesTitle";
import {SalesDetails} from "./components/SalesDetails";
import {PercentValue} from "./components/PercentValue";
import {PercentDescription} from "./components/PercentDescription";
import {SalesContainer} from "./components/SalesContainer";
import {PercentContainer} from "./components/PercentContainer";

import {StyledSalesDetailsContainer} from "./styled";

export const SalesDetailsContainer = ({linesSaved, linesAttempted, successfulUploads, uploads}) => {
    const linesSavedString = String((linesSaved / linesAttempted) * 100)
        .split(",")[0];

    const uploadSuccess = String((successfulUploads / uploads) * 100)
        .split("")[0];

    return (
        <StyledSalesDetailsContainer>
            <SalesContainer>
                <SalesTitleRow>
                    <FontAwesomeIcon icon={faUpload} color="#00A9E4" data-testid="icon-upload" />
                    <SalesTitle/>
                    <FontAwesomeIcon icon={faInfoCircle} color="#B7B2B3" data-testid="icon-info-circle" />
                </SalesTitleRow>

                <SalesTitleRow>
                    <SalesDetails uploads={uploads} linesAttempted={linesAttempted}/>
                </SalesTitleRow>
            </SalesContainer>

            <SalesTitleRow>
                <PercentContainer isLeftColumn>
                    <PercentValue value={uploadSuccess}/>
                    <PercentDescription description="UPLOAD SUCCESS"/>
                </PercentContainer>

                <PercentContainer>
                    <PercentValue value={linesSavedString}/>
                    <PercentDescription description="LINES SAVED"/>
                </PercentContainer>
            </SalesTitleRow>

        </StyledSalesDetailsContainer>
    );
}

SalesDetailsContainer.propTypes = {
    uploads: PropTypes.number.isRequired,
    successfulUploads: PropTypes.number.isRequired,
    linesAttempted: PropTypes.number.isRequired,
    linesSaved: PropTypes.number.isRequired,
}

